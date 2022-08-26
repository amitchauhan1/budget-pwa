
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-forgotpassword',
  styleUrls: [
    './forgotpassword.component.scss', 
    '../../../assets/front/css/front-style.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './forgotpassword.component.html',
})
export class ForgotpasswordComponent implements OnInit {
  submitted = false;
  result: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    });
    $("#email").keyup(function (event) {
      if (event.keyCode === 13) {
        console.log('click');
        $("#forgotbtn").click();
      }
    });
  }
  ForgotPassword(){
    this.loader.showLoader();
    this.submitted = true;
    var loginform = new FormData();
    if ($("#email").val() != '') {
      loginform.append('email', $("#email").val());
      var link = ApiService.service_url + ApiService.Check_ForgotEmail;
      this.http.post<any>(link, loginform).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            window.location.href = 'success/forgot-password';
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
      this.alert.showAlerts("Error", "Please enter email.", "error");
    }
  }
}
