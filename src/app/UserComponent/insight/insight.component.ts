import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { alertsService, LoaderService, EnDeService } from '../../_helper';
import { ApiService } from '../../_services/api-service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss',
    '../../../assets/front/css/front-style.css',
    '../../../assets/front/css/reset.min.css',
],
  encapsulation: ViewEncapsulation.None,
})
export class InsightComponent implements OnInit {
  public auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
  userPlan = this.auth_detail.data.user_plan;
  incomevsExpenseData: any[];
  spendingBreakdownData: any[];
  monthlyIncomeData: any[];
  spendingTotalData: any[];
  incomevsExpenseRefLineData: any[];
  insightResponse: boolean = false;

  // chart options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  showRefLines: boolean = true;
  isDoughnut: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  legendPosition: string = "below";
  legendTitle: string = "";
  spendingLegend: boolean = false;
  timeline: boolean = false;
  spendingBreakdownLegendPosition: string = "right"
  rotateXAxisTicks: boolean = true;

  colorScheme = {
    domain: ['#51D16D', '#5AC7F5','#f26552', '#e3b409',
    '#35bd59', '#634fb3', '#00b2f6'],
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private Router: Router, private EnDeService: EnDeService, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit(): void {
    var ses_login = localStorage.getItem('ses_singin');
    if (ses_login === null) {
      window.location.href = '/sign-in';
    }
    this.getInsightChartData()
  }

  getInsightChartData() {
    var link = ApiService.service_url + ApiService.getInsightChartData;
    var access_token = this.auth_detail.data.access_token;
    const headers = { 'Authorization': 'Bearer ' + access_token };
    this.http.get<any>(link, { headers }).subscribe((res) => {

      var result = res;
      if (result.success == true) {
        this.loader.hideLoader();
        var insightData = result.data;
        this.spendingBreakdownData = insightData.spendingBreakdownData.reverse();
        this.monthlyIncomeData = insightData.monthlyIncomeData;
        this.spendingTotalData = insightData.spendingTotalData;
        this.incomevsExpenseData = insightData.incomevsExpenseData;
        this.incomevsExpenseRefLineData = insightData.incomevsExpenseRefLineData;
      } else if (result.success == false) {
        this.alert.showAlerts("Error", result.message, "error");
      }
    },
      err => {
        this.insightResponse = false;
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }

  yAxisTickFormatting(value) {
    return "zł" + value // this is where you can change the formatting
  }

  xAxisTickFormatting(value) {
    return "zł" + value // this is where you can change the formatting
  }

  onSelect(data): void {
    if (this.spendingTotalData != undefined && this.spendingTotalData.length > 0) {
      var dataValue = this.spendingTotalData.find(obj => {
        return obj.name === data.name
      })
      if (dataValue.expense_id != undefined) {
        this.loader.showLoader();
        var link = ApiService.service_url + ApiService.getSubExpenseData;
        var form = new FormData();
        form.append('expense_id', JSON.stringify(dataValue.expense_id));
        var access_token = this.auth_detail.data.access_token;
        const headers = { 'Authorization': 'Bearer ' + access_token };
        this.http.post<any>(link, form, { headers }).subscribe(
          res => {
            this.loader.hideLoader();
            var result = res;
            if (result.success == true) {
              this.spendingTotalData = result.data;
            } else if (result.success == false) {
              this.alert.showAlerts("Error", result.message, "error");
            }
          },
          err => {
            this.insightResponse = false;
            this.loader.hideLoader();
            this.alert.showAlerts("Error", err.error.message, "error");
          }
        );
      }

    }
  }

  
 searchIncomeArray(data, monthlyIncomeArray){
  for (var i=0; i < monthlyIncomeArray.length; i++) {
      if (monthlyIncomeArray[i].series.length>0) {
        var dataValue = monthlyIncomeArray[i].series.find(obj => {
          return obj.name === data
        })
        if(dataValue != undefined){
          return monthlyIncomeArray[i];
        }
      }
  }
}

  onIncomeSelect(data): void {
    if (data.value == undefined) {
      var monthlyIncomeSeries = this.searchIncomeArray(data,this.monthlyIncomeData)
      if (monthlyIncomeSeries != undefined && monthlyIncomeSeries.series.length > 0) {
        var dataValue = monthlyIncomeSeries.series.find(obj => {
          return obj.name === data
        })
        if (dataValue.income_id != undefined) {
          this.loader.showLoader();
          var link = ApiService.service_url + ApiService.getMonthlyIncomeData;
          var form = new FormData();
          form.append('income_id', JSON.stringify(dataValue.income_id));
          var access_token = this.auth_detail.data.access_token;
          const headers = { 'Authorization': 'Bearer ' + access_token };
          this.http.post<any>(link, form, { headers }).subscribe(
            res => {
              this.loader.hideLoader();
              var result = res;
              if (result.success == true) {
                this.monthlyIncomeData = result.data;
              } else if (result.success == false) {
                this.alert.showAlerts("Error", result.message, "error");
              }
            },
            err => {
              this.insightResponse = false;
              this.loader.hideLoader();
              this.alert.showAlerts("Error", err.error.message, "error");
            }
          );
        }

      }

    }

  }
}
