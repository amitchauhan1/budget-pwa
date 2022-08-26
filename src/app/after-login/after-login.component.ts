import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: [
    './after-login.component.scss',
  ]
})
export class AfterLoginComponent implements OnInit {
  loading = false;
  itemdata: any;
  user_name: any;
  result: any;
  submitted = false;
  user_type: any;
  currentURL: any;
  notificationCounts: any;
  NotiListes: any;
  constructor(private formBuilder: FormBuilder, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {
    if (document.cookie && document.cookie.indexOf('IsLogin=Yes') != -1 && document.cookie || document.cookie.indexOf('IsForumLogin=Yes') != -1) { } else {
      localStorage.clear();
    }
    this.currentURL = window.location.pathname;
    if (this.currentURL == '/dashboard') {
      this.ActiveMenu('dashboard');
    } else if (this.currentURL == '/category-type') {
      this.ActiveMenu('category-type');
    } else if (this.currentURL == '/category-value') {
      this.ActiveMenu('category-value');
    } else if (this.currentURL == '/users') {
      this.ActiveMenu('users');
    } else if (this.currentURL == '/notification') {
      this.ActiveMenu('notification');
    } else if (this.currentURL == '/settings') {
      this.ActiveMenu('settings');
    } else if (this.currentURL == '/plan') {
      this.ActiveMenu('plan');
    } else if (this.currentURL == '/step') {
      this.ActiveMenu('step');
    }
    else if (this.currentURL == '/users') {
      this.ActiveMenu('users');
    } else if (this.currentURL == '/revenue') {
      this.ActiveMenu('revenue');
    } else if (this.currentURL == '/learn') {
      this.ActiveMenu('learn');
    } else if (this.currentURL == '/learn-library') {
      this.ActiveMenu('learn-library');
    } else if (this.currentURL == '/subcategory') {
      this.ActiveMenu('subcategory');
    }
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    this.user_name = this.itemdata.first_name + ' ' + this.itemdata.last_name;
    this.user_type = this.itemdata.user_type;

  }
  ngOnInit(): void {
    const component = this;
    $(document).on('click', '#toggle_btn', function () {
      setTimeout(function () {
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
      }, 400);
    });
    this.NotificationCount();
  }
  ChangePassword() {
    this.loader.showLoader();
    if ($("#new_password").val() == $("#confirm_password").val()) {
      var form = new FormData();
      form.append('old_password', $("#old_password").val());
      form.append('new_password', $("#new_password").val());
      form.append('confirm_password', $("#confirm_password").val());
      form.append('user_id', this.itemdata.user_id);
      var link = ApiService.service_url + ApiService.Change_Password;
      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            $(".form-control").val('');
            $('#model_change_password').modal('hide');
            this.alert.showAlerts("", this.result.message, "success");
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
    } else {
      this.loader.hideLoader();
      this.alert.showAlerts("Error", "Your passwords do not match!", "error");
    }
  }
  NotificationList() {
    var form = new FormData();
    var link = ApiService.service_url + ApiService.NotificationList;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.result = res;
        if (this.result.success == true) {
          this.NotiListes = this.result.data;
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        const component = this;
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
  NotificationCount() {
    this.loader.showLoader();
    var form = new FormData();
    var link = ApiService.service_url + ApiService.notificationCounts;

    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          if (this.result.data.counts <= 9) {
            this.notificationCounts = this.result.data.counts;
          }
          else {
            this.notificationCounts = '9+';
          }
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
  ActiveMenu(menu) {
    setTimeout(() => {
      $('.submenu').removeClass("active");
      $('.sub-menu').removeClass("active");
      $(".menu-" + menu).addClass("active");
      $(".menu-" + menu).parent().parent().parent().addClass("active");
    }, 70);
  }
  loggout() {
    localStorage.clear();
  }
  Error422(errorMessage) {
    this.alert.showAlerts("Error", errorMessage, "error");
  }
}
