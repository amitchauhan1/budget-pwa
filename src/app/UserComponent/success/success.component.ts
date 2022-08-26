
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogService } from '../../_helper/confirm-dialog/confirm-dialog.service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;
@Component({
  selector: 'app-success',
  styleUrls: [
    './success.component.scss',
    '../../../assets/front/css/front-style.css',
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './success.component.html',
})
export class SuccessComponent implements OnInit {
  result: any;
  showMessage:any;
  showTitle:any;
  showStatus=true;
  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    $(document).ready(function() {
      $('body').removeClass('sidebar-mini mat-typography');
    });
    var activeUrl = this.route.snapshot.url[1].path;
    if(activeUrl == 'signup'){
      this.showTitle = 'Sign up Success';
      this.showMessage = 'An email has been sent to you.';
    }else if(activeUrl == 'forgot-password'){
      this.showTitle = 'Success';
      this.showMessage = 'Reset link has been sent to your email';
    }else if(activeUrl == 'reset-password'){
      this.showTitle = 'Success';
      this.showMessage = 'Reset password successful!';
      this.showStatus=true;
    }

  }
  
}
