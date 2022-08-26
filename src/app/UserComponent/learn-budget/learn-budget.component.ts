import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
import * as jQuery from 'jquery';
import { ApiService } from 'src/app/_services/api-service';

@Component({
  selector: 'app-learn-budget',
  templateUrl: './learn-budget.component.html',
  styleUrls: ['./learn-budget.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',
    '../../../assets/front/css/react-datepicker.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LearnBudgetComponent implements OnInit {

  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  allVideos: any;
  controls: boolean = false;
  userPlan = this.auth_detail.data.user_plan;
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }
    $(document).ready(function () {
      $(".content").slice(0, 3).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 3).slideDown();
        if ($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }
      });
    });

    this.getLearnVideo();
  }

  getLearnVideo() {
    var access_token = this.auth_detail.data.access_token;
    var link = ApiService.service_url + ApiService.getlearnVideo;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this._http.post<any>(link, form, { headers }).subscribe((res) => {
      this.allVideos = res;
    })
  }
}
