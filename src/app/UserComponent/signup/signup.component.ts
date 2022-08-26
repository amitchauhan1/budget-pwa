
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-signup',
  styleUrls: [
    './signup.component.scss',
    '../../../assets/front/css/front-style.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  result: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    });
    $(".confirmPassword").keyup(function (event) {
      if (event.keyCode === 13) {
        $("#signupbtn").click();
      }
    });
  }
  Signup(){

    this.loader.showLoader();
    var signupform = new FormData();
    signupform.append('first_name', $("#first_name").val());
    signupform.append('last_name', $("#last_name").val());
    signupform.append('email', $("#email").val());
    signupform.append('password', $(".Password").val());
    signupform.append('confirm_password', $(".confirmPassword").val());
    var link = ApiService.service_url + ApiService.User_SignUp;
    this.http.post<any>(link, signupform).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          window.location.href = '/success/signup';
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        const component = this;
        this.loader.hideLoader();
        if (err.status == '422') {
          $.each(err.error.errors, function (index, val) {
            $.each(val, function (i, errMsg) {
              component.Error422(errMsg);
            });
            return false;
          });
        } else {
          this.alert.showAlerts("Error", err.error.message, "error");
        }
      }
    );
  }
  Error422(errorMessage) {
    this.alert.showAlerts("Error", errorMessage, "error");
  }
}
