import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/_services/api-service';
import { alertsService, LoaderService, EnDeService } from 'src/app/_helper'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss',
  '../../../assets/front/css/front-style.css',
  '../../../assets/front/css/reset.min.css',
  '../../../assets/front/css/react-datepicker.min.css',],
  encapsulation: ViewEncapsulation.None,
})
export class UserprofileComponent implements OnInit {
  profileForm : FormGroup;
  submitted = false;
  isDisabled:boolean = true;
  allUser :any=[];

  public auth_detail= JSON.parse(localStorage.getItem('ses_login_auth')); 
  result: any;
 constructor(private http: HttpClient,private loader: LoaderService,private alert: alertsService) { }

//  public profileForm: FormGroup = new FormGroup({
//   first_name: new FormControl('', [Validators.required]),
//   last_name: new FormControl('', [Validators.required]),
//   email: new FormControl(''),
 
// });

  
  ngOnInit(): void {
    
  }
  public get f() { return this.profileForm.controls; }

  getUserProfile() {

    var access_token=this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.user_profile;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + access_token};
    this.http.get<any>(link, { headers }).subscribe((res)=>{
      this.allUser=res.data;
      console.log(this.allUser);
      })
     }
     

     public onSubmit(){

         this.isDisabled=false;
         console.log(this.profileForm.value);
         
      
         var access_token=this.auth_detail.data.access_token;
         var link = ApiService.service_url + ApiService.user_profile_update;
         var form = this.profileForm.value
         const headers = { 'Authorization': 'Bearer ' + access_token};
         this.http.post<any>(link, form, { headers }).subscribe((res)=>{
          this.result = res;
          
         this.loader.hideLoader()
         
         if (this.result.success == true) {
          
           this.alert.showAlerts("", this.result.message, "success");
         }
         else if (this.result.success == false) {
          
           this.alert.showAlerts("Error", this.result.message, "error");
         }
        })
      }
  
    
    
}
