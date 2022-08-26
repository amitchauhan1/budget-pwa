
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-resetpassword',
  styleUrls: [
    './resetpassword.component.scss',
    '../../../assets/front/css/front-style.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './resetpassword.component.html',
})
export class ResetpasswordComponent implements OnInit {
  result:any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    });
    $(".confirmPassword").keyup(function (event) {
      if (event.keyCode === 13) {
        $("#resetbtn").click();
      }
    });
  }
  ResetPassword(){
    var token =this.route.snapshot.queryParamMap.get('token');
    var link = ApiService.service_url + ApiService.Reset_Password;
    var form = new FormData();
    form.append('token', token);
    form.append('password', $(".Password").val());
    form.append('confirm_password', $(".confirmPassword").val());
    this.http.post<any>(link, form).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          window.location.href = '/success/reset-password';
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
