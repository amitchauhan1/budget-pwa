import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alertsService, LoaderService, EnDeService } from 'src/app/_helper'
import { ConfirmPasswordValidator } from 'src/app/_helper/confirm-password.service';
import { ApiService } from 'src/app/_services/api-service';
declare var $: any;

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss',
  '../../../assets/front/css/front-style.css',
  '../../../assets/front/css/reset.min.css',
  '../../../assets/front/css/react-datepicker.min.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChangepasswordComponent implements OnInit {
  public auth_detail= JSON.parse(localStorage.getItem('ses_login_auth')); 
  ChangePasswordForm : FormGroup;
  submitted = false;
  result: any;

    constructor(private formBuilder: FormBuilder,private _http : HttpClient,private loader: LoaderService,private alert: alertsService){
      setTimeout(() => {
        /** spinner ends after 5 seconds */
      this.loader.hideLoader()
        
      }, 5000);
    
    }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
    this.ChangePasswordForm = this.formBuilder.group({

      current_password: ['', Validators.required],
      new_password: ['', [Validators.required,Validators.minLength(8)]],
      new_confirm_password: ['', Validators.required],
    
  },
  {
    validator: ConfirmPasswordValidator("new_password", "new_confirm_password")
  });
  }

  public get f() { return this.ChangePasswordForm.controls; }
  public onSubmit()
  {
  
    this.submitted=true;
    var access_token=this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.user_change_password;
    var form = this.ChangePasswordForm.value
    const headers = { 'Authorization': 'Bearer ' + access_token};
    this._http.post<any>(link, form, { headers }).subscribe((res)=>{
      this.loader.showLoader()
     this.result = res;
     console.log(res);
     
     
    this.loader.hideLoader()
    
    if (this.result.success == true) {
     
      this.alert.showAlerts("", this.result.message, "success");
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
