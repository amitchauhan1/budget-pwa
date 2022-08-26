
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-login',
  styleUrls: [
    './login.component.scss',
  ],

  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  Email = "";
  Password = "";
  submitted = false;
  result: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    var loc_login = localStorage.getItem('ses_login');
    if (loc_login != null) {
      window.location.href = '/dashboard';
    }
    $(document).ready(function () {
      if ($('.toggle-password').length > 0) {
        $(document).on('click', '.toggle-password', function () {
          $(this).toggleClass("fa-eye fa-eye-slash");
          var input = $(".pass-input");
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
      }
    });
    $("#Password").keyup(function (event) {
      if (event.keyCode === 13) {
        $("#loginbtn").click();
      }
    });

  }
  Login() {
    this.loader.showLoader();
    this.submitted = true;
    var loginform = new FormData();
    this.Email = $("#Email").val();
    this.Password = $("#Password").val();
    if (this.Email != '' && this.Password != '') {
      loginform.append('email', this.Email);
      loginform.append('password', this.Password);
      var link = ApiService.service_url + ApiService.Admin_Login;
      this.http.post<any>(link, loginform).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            localStorage.setItem('ses_login', this.EnDeService.encrypt(JSON.stringify(this.result.data)));
            var hours = 2;
            var now = new Date();
            var exp = new Date(now.getTime() + (hours * 60 * 60 * 1000));
            document.cookie = 'IsLogin=Yes; expires=' + exp.toUTCString();
            window.location.href = '/dashboard';
            this.alert.showAlerts("", this.result.message, "success");
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
