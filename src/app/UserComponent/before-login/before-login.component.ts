import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ActivatedRoute, Router } from '@angular/router';
import {alertsService,LoaderService,EnDeService} from '../../_helper';
import {ApiService } from '../../_services/api-service';
import { HttpClient } from '@angular/common/http';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.scss']
})
export class BeforeLoginComponent implements OnInit {
  public auth_detail= JSON.parse(localStorage.getItem('ses_login_auth')); 
  user_name : any;
 
  
  
 
  constructor(
    private loader:LoaderService,
    private alert:alertsService,
    private animateScrollService: NgAnimateScrollService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const component = this;
    $(document).on('click', '#toggle_btn', function () {
      setTimeout(function() {
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
    }, 400);
    });
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
     
    });
    this.user_name=this.auth_detail.data.user_name;
    var access_token=this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.user_profile;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + access_token};
    this.http.get<any>(link, { headers }).subscribe((res)=>{
   
    this.user_name=res.data.user_name
    })
    
    }
  
  
  loggout()
  {
     localStorage.removeItem('ses_login_auth');
     localStorage.clear();
     this.router.navigate(['/sign-in']);
 
   }
   public getProfile()
   {
      alert("view profile")
   }

}

