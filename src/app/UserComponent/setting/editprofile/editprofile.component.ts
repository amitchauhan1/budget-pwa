import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api-service';
import { alertsService, LoaderService, EnDeService, } from 'src/app/_helper'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/_helper/confirm-dialog/confirm-dialog.service';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  popoverTitle = 'Delete Account';
  popoverMessage = 'Data will lose permanentaly';
  confirmClicked = false;
  cancelClicked = false;
  public profileForm :  FormGroup;
  submitted = false;
  isDisabled:boolean = false;
  allUser :any=[];
  public user_data;

  public auth_detail= JSON.parse(localStorage.getItem('ses_login_auth')); 
  result: any;
 constructor(private http: HttpClient,private loader: LoaderService,private alert: alertsService,private formBuilder: FormBuilder,private route : Router,private confirm : ConfirmDialogService) { 
   this.isDisabled= true;
 }

  ngOnInit() : void{
    $(function(){
      $('.delete-modal').click(function() {
        $('#delete-modal').modal('show');
      });
     });
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    } 
    $(function(){
      $('.selector').click(function() {
        $('#exampleModalLong').modal('show');
      });
     });
    

    //get User profile from server and set to input field
     this.profileForm = new FormGroup({
       
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        });

          var access_token=this.auth_detail.data.access_token;
          var link = ApiService.service_url + ApiService.user_profile;
          var form = new FormData();
          const headers = { 'Authorization': 'Bearer ' + access_token};
          this.http.get<any>(link, { headers }).subscribe((res)=>{
          this.allUser=res.data;
          console.log(this.allUser);
          this.user_data=res.data

     
      this.profileForm.controls['first_name'].setValue(res.data.first_name)
      this.profileForm.controls['last_name'].setValue(res.data.last_name)
      })

  }
  public get f() { return this.profileForm.controls; }

 
     
  public onSubmit(){
        //Update User profile
       this.submitted=true;
      
        var access_token=this.auth_detail.data.access_token;
         var link = ApiService.service_url + ApiService.user_profile_update;
         var form = this.profileForm.value
         const headers = { 'Authorization': 'Bearer ' + access_token};
         this.http.post<any>(link, form, { headers }).subscribe((res)=>{
          this.result = res;
          // this.route.navigateByUrl('/app/budget');
          this.loader.hideLoader()
           if (this.result.success == true) {
           
            this.alert.showAlerts("", this.result.message, "success");
          }
          else if (this.result.success == false) {
           
            this.alert.showAlerts("Error", this.result.message, "error");
          }
         })
        
       }

     

       //Delet account permanentally
 public Deleteaccount()
       {
         
          this.loader.showLoader();
          var access_token=this.auth_detail.data.access_token;
         var link = ApiService.service_url + ApiService.delete_account;
         var form = this.profileForm.value
         const headers = { 'Authorization': 'Bearer ' + access_token};
         this.http.get<any>(link, { headers }).subscribe((res)=>{
          
          this.result = res;
          localStorage.removeItem('ses_login_auth');
          localStorage.clear();
          this.route.navigate(['/sign-in']);
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
