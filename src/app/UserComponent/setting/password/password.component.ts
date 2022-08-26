import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/_helper/confirm-password.service';
import { ApiService } from 'src/app/_services/api-service';
import { alertsService, LoaderService, EnDeService } from 'src/app/_helper'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  ChangePasswordForm: FormGroup;
  submitted = false;
  result: any;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private loader: LoaderService, private alert: alertsService) { }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }
    this.ChangePasswordForm = this.formBuilder.group({

      current_password: ['', Validators.required],
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      new_confirm_password: ['', Validators.required],

    },
      {
        validator: ConfirmPasswordValidator("new_password", "new_confirm_password")
      });
  }

  public get f() { return this.ChangePasswordForm.controls; }
  public onSubmit() {
    this.submitted = true;
    var access_token = this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.user_change_password;
    var form = this.ChangePasswordForm.value
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, form, { headers }).subscribe((res) => {
      this.loader.showLoader()
      this.result = res;
      this.loader.hideLoader()

      if (this.result.success == true) {
        this.alert.showAlerts("", this.result.message, "success");
        localStorage.removeItem('ses_login_auth');
        localStorage.clear();
        window.location.href = '/sign-in';
      }
      else if (this.result.success == false) {
        this.alert.showAlerts("Error", this.result.message, "error");
      }
      err => {
        const component = this;
        this.loader.hideLoader();
        if (err.status == '422') {
          $.each(err.error.errors, function (index, val) {
            $.each(val, function (i, errMsg) {

            });
            return false;
          });
        } else {
          this.alert.showAlerts("Error", err.error.message, "error");
        }
      }
    })
  }


}
