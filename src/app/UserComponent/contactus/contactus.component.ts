import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api-service';
import { alertsService, LoaderService, EnDeService } from 'src/app/_helper'



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss',
  '../../../assets/front/css/front-style.css',
  '../../../assets/front/css/reset.min.css',
  '../../../assets/front/css/react-datepicker.min.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactusComponent implements OnInit {
  public auth_detail= JSON.parse(localStorage.getItem('ses_login_auth')); 
    contactFrom : FormGroup;
    submitted = false;
    result: any;
  

  constructor(private formBuilder: FormBuilder,private _http : HttpClient,private loader: LoaderService,private alert: alertsService) { 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.loader.hideLoader();
    }, 3000);
  }
  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
    this.contactFrom = this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      message: ['', Validators.required],
    
  });
}

public get f() { return this.contactFrom.controls; }

public onSubmit()
  {
      this.loader.showLoader();
      this.submitted=true;
      var access_token=this.auth_detail.data.access_token;
      var link = ApiService.service_url + ApiService.user_contact;
      var form = this.contactFrom.value
      const headers = { 'Authorization': 'Bearer ' + access_token};
      this._http.post<any>(link, form, { headers }).subscribe((res)=>{
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
  

