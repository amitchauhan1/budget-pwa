
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-verification',
  styleUrls: [
    './verification.component.scss',
    '../../../assets/front/css/front-style.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './verification.component.html',
})
export class VerificationComponent implements OnInit {
  result: any;
  showMessage:any;
  showTitle:any;
  showStatus= false;  
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    });
   
    var activeUrl = this.route.snapshot.url[1].path;
    if(activeUrl == 'email'){
      var token =this.route.snapshot.queryParamMap.get('token');
      var user_id =this.route.snapshot.queryParamMap.get('id');
      this.RegisterEmailVerify(token,user_id);
    }else if(activeUrl == 'reset-password'){
      // var token =this.route.snapshot.queryParamMap.get('token');
      // this.RegisterEmailVerify(token,user_id);
    }
  }

  RegisterEmailVerify(token,user_id){
    var link = ApiService.service_url + ApiService.Verify_Email;
    var form = new FormData();
    form.append('id', user_id);
    form.append('token', token);
    this.http.post<any>(link, form).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.showTitle = 'Email verification';
          this.showMessage = this.result.message;
          this.showStatus = this.result.success;
         
        } else if (this.result.success == false) {
          this.showTitle = 'Email verification';
          this.showMessage = this.result.message;
          this.showStatus = this.result.success;
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
