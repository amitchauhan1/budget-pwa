import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { ApiService } from 'src/app/_services/api-service';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-progresspanel',
  templateUrl: './progresspanel.component.html',
  styleUrls: ['./progresspanel.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})

export class ProgresspanelComponent implements OnInit {
  planList: any = [];
  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  userPlan = this.auth_detail.data.user_plan;
 // loadUrl: any;
  transcation_detail: any;
  handler: any = null;

  constructor(private route: ActivatedRoute, private _http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  //  sessionStorage.setItem('plan_id', '1');
    var ses_login = localStorage.getItem('ses_login_auth');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }

    this.getAllPlan();
    // this.loadStripe();

  }

  getAllPlan() {
    var link = ApiService.service_url + ApiService.getPlanList;
    var access_token = this.auth_detail.data.access_token;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, form, { headers }).subscribe((res) => {
      var result = res;
      if (result.success == true) {
        this.loader.hideLoader();
        this.planList = result.data;
      } else if (result.success == false) {
        this.alert.showAlerts("Error", result.message, "error");
      }
    },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  selectPlanToSubscribe(plan_id){
    var link = ApiService.service_url + ApiService.subscribePlan;
    var access_token = this.auth_detail.data.access_token;
    var form = new FormData();
    form.append('plan_id', plan_id);
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, form, { headers }).subscribe((res) => {
      var result = res;
      if (result.success == true) {
        this.loader.hideLoader();
        window.location.href = result.data.url;
      } else if (result.success == false) {
        this.alert.showAlerts("Error", result.message, "error");
      }
    },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  // loadStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     var s = window.document.createElement("script");
  //     s.id = "stripe-script";
  //     s.type = "text/javascript";
  //     s.src = "https://checkout.stripe.com/checkout.js";
  //     s.onload = () => {
  //       this.handler = (<any>window).StripeCheckout.configure({
  //         key: environment.stripe_key,
  //         locale: 'pl',
  //         currency: 'PLN',
  //         theme: 'stripe',
  //         token: function (token: any) {
  //           // You can access the token ID with `token.id`.
  //           // Get the token ID to your server-side code for use.
  //           // console.log(token)
  //         }
  //       });
  //     }

  //     window.document.body.appendChild(s);
  //   }
  // }

  // pay(amount) {
  //   var handler = (<any>window).StripeCheckout.configure({
  //     key: environment.stripe_key,
  //     locale: 'pl',
  //     currency: 'PLN',
  //     theme: 'stripe',
  //     token: function (token: any) {
  //       // You can access the token ID with `token.id`.
  //       // Get the token ID to your server-side code for use.
  //       this.premiumPlan(token, amount);
  //     }
  //   });

  //   handler.open({
  //     name: 'Pay with card',
  //     amount: amount * 1
  //   });

  // }

  // premiumPlan(token, amount) {
  //   console.log(token);
  //   this.loader.showLoader();
  //   var link = ApiService.service_url + ApiService.getSubExpenseData;
  //   var form = new FormData();
  //   form.append('token_id', token.id);
  //   form.append('cardLastFourDigit', token.card.last4);
  //   form.append('exp_month', token.card.exp_month);
  //   form.append('exp_year',token.card.exp_year)
  //   alert(token.card.card.last4);
  //   // var access_token = this.auth_detail.data.access_token;
  //   // const headers = { 'Authorization': 'Bearer ' + access_token };
  //   // this._http.post<any>(link, form, { headers }).subscribe(
  //   //   res => {
  //   //     this.loader.hideLoader();
  //   //     var result = res;
  //   //     if (result.success == true) {
  //   //       this.alert.showAlerts("Success", result.message, "success");
  //   //     } else if (result.success == false) {
  //   //       this.alert.showAlerts("Error", result.message, "error");
  //   //     }
  //   //   },
  //   //   err => {
  //   //     this.loader.hideLoader();
  //   //     this.alert.showAlerts("Error", err.error.message, "error");
  //   //   }
  //   // );
  // }

}

