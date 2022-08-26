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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.scss',
  ]
})
export class UserComponent implements OnInit {
  itemdata: any;
  result: any;
  userDocument1: any;
  userDocument2: any;
  document_description: any;
  user_id: any;
  DocumentList: any;
  constructor(private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {

  }
  ngOnInit() {
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    window.functions = window.functions || {};
    window.functions.Documents_Model = this.Documents_Model.bind(this);
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
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

  }

  Confirm_Change_Status(user_id, is_art_master) {
    this.user_id = user_id;
    if (is_art_master == 1) {
      $('.art-status-title').html('Are you sure you want to change art master to user?');
    } else if (is_art_master == 0) {
      $('.art-status-title').html('Are you sure you want to change user to art master?');
    }
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('user_id', this.user_id);
    var link = ApiService.service_url + ApiService.User_ChangeStatus;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        $('#statusModal .close').click();
        if (this.result.success == true) {
          this.alert.showAlerts("", this.result.message, "success");
        } else if (this.result.success == false) {
          this.alert.showAlerts("Error", this.result.message, "error");
        }
        this.DatatableList();
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

  Documents_Model(user_id) {
  }

  DatatableList() {
    var access_token = this.itemdata.access_token;
    var user_id = this.itemdata.user_id;
    var link = ApiService.service_url + ApiService.User_Datatable;
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
            'sClass': 'text-left',
            render: function (data, type, row) {
              return '<h2 class="text-primary">' + row['first_name'] + ' ' + row['last_name'] + '</h2>';

            }
          },
          {
            targets: [1],
            render: function (data, type, row) {
              return row['user_name'];
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['email'];
            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              return row['created_at'];
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              var status = '';
              if (row['is_active'] == 1) {
                status += '<a title="Click to change status" href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-success-light">Active</span></a>';
              } else if (row['is_active'] == 0) {
                status += '<a title="Click to change status" href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
              }
              return status;
            }
          },

          {
            targets: [5],
            "visible": false,
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a title="Click to view documents" onclick="functions.Documents_Model(' + row['id'] + ')" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-file-alt  mr-1"></i> Documents</a>';
              return action_btn;
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
            'user_name': $("#filter_user_name").val(),
            'first_name': $("#filter_first_name").val(),
            'last_name': $("#filter_last_name").val(),
            'email': $("#filter_email").val(),
            'is_active': $("#filter_status").val(),
          },
          "headers": {
            'Authorization': 'Bearer ' + access_token
          },

        },
      })
    }, 100);
  }
  Error422(errorMessage) {
    this.alert.showAlerts("Error", errorMessage, "error");
  }
  FilterSearch() {
    $('body, .filter-src-backdroup').removeClass('filter-pop-open');
    this.DatatableList();
  }
  FilterReset() {
    $(".filter-src-main input[type='text']").val("");
    $(".filter-src-main select").val('').trigger("change");
    $('body, .filter-src-backdroup').removeClass('filter-pop-open');
    this.DatatableList();
  }
}
