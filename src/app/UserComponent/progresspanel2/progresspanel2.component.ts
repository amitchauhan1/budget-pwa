import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';
declare var $: any;

@Component({
  selector: 'app-progresspanel2',
  templateUrl: './progresspanel2.component.html',
  styleUrls: ['./progresspanel2.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',

  ], encapsulation: ViewEncapsulation.None,
})
export class Progresspanel2Component implements OnInit {
  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  userPlan = this.auth_detail.data.user_plan;
  emergencyFund: any;
  savedTotalEF: any;
  leftTotalEF: any;
  efPercent: any;
  totalDebt: any;
  debtTypeTotalCount: any;
  paidOffDebt: any;
  debtPercent: any;
  childrenAndStudies: any;
  savedCS: any;
  leftCS: any;
  csPercent: any;
  progressPanel2Response: boolean = false;
  allStepVisibleCSS: any = "paidVideoDisable";
  step1CSS: any = "step-banner pending";
  step1ProgressText: string = "Currently in Progress";
  step2CSS: any = "step-banner pending";
  step2ProgressText: string = "Currently in Progress";
  step3CSS: any = "step-banner pending";
  step3ProgressText: string = "Currently in Progress";
  step4CSS: any = "step-banner pending";
  step4ProgressText: string = "Currently in Progress";
  step5CSS: any = "step-banner pending";
  step5ProgressText: string = "Currently in Progress";
  step6CSS: any = "step-banner pending";
  step6ProgressText: string = "Currently in Progress";
  step7CSS: any = "step-banner pending";
  step7ProgressText: string = "Currently in Progress";
  step1Data: any = {};
  step2Data: any = {};
  step3Data: any = {};
  step4Data: any = {};
  step5Data: any = {};
  step6Data: any = {};
  step7Data: any = {};
  step8Data: any = {};
  innerStrokeCompleted = "#48ce65";
  innerStrokeProgress = "#2cb5ee";
  choosePlanURL = 'userPlan==1' ? '/app/progresspanel?chooseplan=choose-plan' : '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    const component = this;
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }
    this.getProgressPanelData();

    $(document).ready(function () {
      $('#step1Video').on('ended', function () {
        if (component.step1Data.watch_videos_status == 0) {
          component.updateStep1VideoStatus();
        }
      });
    });
  }

  updateStep1VideoStatus() {
    var link = ApiService.service_url + ApiService.updateStep1videoStatus;
    var form = new FormData();
    form.append('user_id', this.auth_detail.data.user_id);
    form.append('step', '1');
    form.append('status', '1');
    var access_token = this.auth_detail.data.access_token;
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        if (res.success == true) {
          this.allStepVisibleCSS = "";
          this.step1CSS = "step-banner completed";
          this.step1ProgressText = "Step 1 completed";
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  getProgressPanelData() {
    var link = ApiService.service_url + ApiService.getStepData;
    var access_token = this.auth_detail.data.access_token;
    const headers = { 'Authorization': 'Bearer ' + access_token };
    var form = new FormData();
    this.http.get<any>(link, { headers }).subscribe((res) => {
      var result = res;
      if (result.success == true) {
        this.loader.hideLoader();
        this.progressPanel2Response = true;
        var progressPanelResult = result.data;
        this.step1Data = progressPanelResult.find(obj => {
          return obj.step === 1
        });
        this.step1CSS = this.step1Data.watch_videos_status == 1 ? "step-banner completed" : "step-banner pending";
        this.step1ProgressText = this.step1Data.watch_videos_status == 1 ? "Step 1 completed" : "Currently in Progress";
        this.allStepVisibleCSS = this.step1Data.watch_videos_status == 1 ? "" : "paidVideoDisable";

        this.step2Data = progressPanelResult.find(obj => {
          return obj.step === 2
        });
        this.step3Data = progressPanelResult.find(obj => {
          return obj.step === 3
        });
        this.step4Data = progressPanelResult.find(obj => {
          return obj.step === 4
        });
        this.step5Data = progressPanelResult.find(obj => {
          return obj.step === 5
        });
        this.step6Data = progressPanelResult.find(obj => {
          return obj.step === 6
        });
        this.step7Data = progressPanelResult.find(obj => {
          return obj.step === 7
        });
        this.step8Data = progressPanelResult.find(obj => {
          return obj.step === 8
        });

        this.emergencyFund = 1000;
        this.savedTotalEF = 500;
        this.leftTotalEF = 500;
        this.debtTypeTotalCount = 5;
        this.totalDebt = 1000;
        this.paidOffDebt = 700;
        this.childrenAndStudies = 2000
        this.savedCS = 1400;
        this.leftCS = 600;
        this.efPercent = 50;
        this.debtPercent = 100;
        this.csPercent = 60;
      } else if (result.success == false) {
        this.alert.showAlerts("Error", result.message, "error");
      }
    },
      err => {
        this.progressPanel2Response = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

}
