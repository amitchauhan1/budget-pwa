
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-signin',
  styleUrls: [
    './signin.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',
    '../../../assets/front/css/react-datepicker.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  Email = "";
  Password = "";
  submitted = false;
  result: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    var loc_login = localStorage.getItem('ses_singin');
    if (loc_login != null) {
      window.location.href = '/app/budget';
    }

    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    }); 
    $("#Password").keyup(function (event) {
      if (event.keyCode === 13) {
        $("#loginbtn").click();
      }
    });
  } 
  Login() {
    debugger
    this.loader.showLoader();
    this.submitted = true;
    var loginform = new FormData();
    this.Email = $("#Email").val();
    this.Password = $("#Password").val();
    if (this.Email != '' && this.Password != '') {
      loginform.append('email', this.Email);
      loginform.append('password', this.Password);
      var link = ApiService.service_url + ApiService.User_Login;
      this.http.post<any>(link, loginform).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            localStorage.setItem('ses_login_auth', JSON.stringify(res) );
            console.log('auth:', localStorage.getItem('ses_login_auth') );
            var auth_detail = JSON.parse(localStorage.getItem('ses_login_auth')); 
            
          

            console.log('sesion dta', this.EnDeService.encrypt(JSON.stringify(this.result.data)));
            
            localStorage.setItem('ses_singin', this.EnDeService.encrypt(JSON.stringify(this.result.data)));
            console.log(localStorage.getItem('ses_singin'));
            
            
            var hours = 2;
            var now = new Date();
            var exp = new Date(now.getTime() + (hours * 60 * 60 * 1000));
            document.cookie = 'IsLogin=Yes; expires=' + exp.toUTCString();
            window.location.href = '/app/budget';
            // this.alert.showAlerts("", this.result.message, "success");
          } else if (this.result.success == false) {
            this.alert.showAlerts("Error", this.result.message, "error");
          }
        },
        err => {
          this.loader.hideLoader();
          this.alert.showAlerts("Error", err.error.message, "error");
        }
      );
    } else {
      this.loader.hideLoader();
      this.alert.showAlerts("Error", "Please enter email or password.", "error");
    }
  }
}
