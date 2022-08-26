import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}
declare global {
  interface Window { functions: any }
}
@Injectable()
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: [
    './revenue.component.scss',
  ]
})
export class RevenueComponent implements OnInit {
  itemdata: any;
  result: any;
  userDocument1: any;
  userDocument2: any;
  document_description: any;
  user_id: any;
  DocumentList: any;
  PlanList: any;
  constructor(private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {

  }
  ngOnInit() {
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    window.functions = window.functions || {};
    // datatable 
    $(".filter-btn").on("click", function (e) {
        $('body,.filter-src-backdroup').addClass('filter-pop-open');
        return false;        
    });
    $(".filter-src-close").on("click", function (e) {
        $('body,.filter-src-backdroup').removeClass('filter-pop-open');
    });
    // datatable end
    this.DatatableList(); 
    this.getPlan();

  }
  getPlan() {
    var link = ApiService.service_url + ApiService.Get_Plan;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.PlanList = this.result.data;
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
      },
      err => {
        this.loader.hideLoader();
        this.alert.showAlerts("Error", err.error.message, "error");
      }
    );
  }
  DatatableList() {

    var access_token = this.itemdata.access_token;
    var user_id = this.itemdata.user_id;
    var link = ApiService.service_url + ApiService.Revenue_Datatable;
    setTimeout(() => {
      $("#DataTableList").DataTable().destroy();
      var table = $('#DataTableList').DataTable({
        "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
        scrollX: true,
        "sScrollY": ($(window).height() - 320),
        "order": [],
        "aaSorting": [],
        searching: false,
        language: {
          oPaginate: {
            sNext: '<i class="fa fa-angle-right" title="Next"></i>',
            sPrevious: '<i class="fa fa-angle-left" title="Privious"></i>',
            sFirst: '<i class="fa fa-angle-double-left" title="First"></i>',
            sLast: '<i class="fa fa-angle-double-right" title="Last"></i>'
          },
          "sProcessing": 'loading...',

        },
        columnDefs: [
          {
            targets: [0],
            render: function (data, type, row) {
              return row['id'];
            }
          },
          {
            targets: [1],
            render: function (data, type, row) {
              var status = '';
              if (row['status'] == 1) {
                status += '<span class="badge badge-pill bg-success-light">Success</span>';
              } else if (row['status'] == 2) {
                status += '<span class="badge badge-pill bg-warning-light">Pending</span>';
              } else if (row['status'] == 3) {
                status += '<span class="badge badge-pill bg-danger-light">Failed</span>';
              }
              return status;
            }
          },

          {
            targets: [2],
            'sClass': 'text-left',
            render: function (data, type, row) {
              return '<h2 class="text-primary">' + row['user_name'] + '<span>' + row['email'] + '</span></h2>';

            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              return row['transaction_number'];
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              return row['plan_name'];
            }
          },
          {
            targets: [5],
            render: function (data, type, row) {
              return row['amount'];
            }
          },
          {
            targets: [6],
            render: function (data, type, row) {
              return row['start_date'];
            }
          },
          {
            targets: [7],
            render: function (data, type, row) {
              return row['end_date'];
            }
          },
          {
            targets: [8],
            render: function (data, type, row) {
              return row['created_at'];
            }
          },
          // { "bSortable": false, "targets": [2,7,9,10] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'plan_id':$("#filter_plan_id").val(),
            'user_name':$("#filter_user_name").val(),
            'email':$("#filter_email").val(),
            'transaction_number':$("#filter_transaction_number").val(),
            'amount':$("#filter_amount").val(),
            'status':$("#filter_status").val(),
          },
          "headers": {
            'Authorization': 'Bearer ' + access_token
          },

        },
      })
    }, 100);
  }
  FilterSearch(){
    $('body, .filter-src-backdroup').removeClass('filter-pop-open');
    this.DatatableList();
  }
  FilterReset(){
    $(".filter-src-main input[type='text']").val("");
      $(".filter-src-main select").val('').trigger("change"); 
      $('body, .filter-src-backdroup').removeClass('filter-pop-open');
      this.DatatableList();
  }
}
