import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
import { ParameterTypeDBService } from '../_indexDB/index';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}
declare global {
  interface Window { functions: any }
}
@Injectable()
@Component({
  selector: 'app-parametertype',
  templateUrl: './parametertype.component.html',
  styleUrls: [
    './parametertype.component.scss',
  ]
})

export class ParametertypeComponent implements OnInit {
  itemdata: any;
  result: any;
  parameter_type_id: any;
  parameter_type_name: any;
  remark: any;
  constructor(private parameterTypeDBService: ParameterTypeDBService, private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit() {
    const component = this;
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    this.DatatableList();
    window.functions = window.functions || {};
    window.functions.ParameterType_Model = this.ParameterType_Model.bind(this);
    window.functions.Delete_ParameterType = this.Delete_ParameterType.bind(this);
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
  }

  Confirm_Change_Status(parameter_type_id) {
    this.parameter_type_id = parameter_type_id;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('parameter_type_id', this.parameter_type_id);
    var link = ApiService.service_url + ApiService.Parameter_Type_ChangeStatus;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        this.DatatableList();
        if (this.result.success == true) {
          $("#statusModal .close").click();
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

  }

  Delete_ParameterType(parameter_type_id) {
    this.parameter_type_id = parameter_type_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    if (this.parameter_type_id != '') {
      form.append('parameter_type_id', this.parameter_type_id);
      var link = ApiService.service_url + ApiService.Delete_Parameter_Type;
      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            $("#deleteModal .close").click()
            this.alert.showAlerts("", this.result.message, "success");
            this.DatatableList();
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
      this.alert.showAlerts("Error", "Something went wrong", "error");
    }
  }

  ParameterType_Model(parameter_type_id, parameter_type_name, remark) {
    if (parameter_type_id != '0') {
      $('.parameter_title').text('Edit Category Type');
      $("#parameter_type_id").val(parameter_type_id);
      $("#parameter_type_name").val(parameter_type_name);
      $("#remark").val(remark);
      $('#model_parameter_type .close').click();
    } else {
      $('.parameter_title').text('Add Category Type');
      $('#parameter_type_id').val('');
      $('#parameter_type_name').val('');
      $('#remark').val('');
    }
  }

  Add_Parameter_Type() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('parameter_type_id', $("#parameter_type_id").val());
    form.append('category_type_name', $("#parameter_type_name").val());
    form.append('remark', $("#remark").val());
    var link = ApiService.service_url + ApiService.AddorUpdate_Parameter_Type;

    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $("#model_parameter_type .close").click();
          this.alert.showAlerts("", this.result.message, "success");
          this.DatatableList();
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

  DatatableList() {
    var access_token = this.itemdata.access_token;
    var user_id = this.itemdata.user_id;
    var link = ApiService.service_url + ApiService.Parameter_Type_Datatable;
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
            "visible": false,
            targets: [0],
            render: function (data, type, row) {
              return row['id'];
            }
          },
          {
            targets: [1],
            render: function (data, type, row) {
              return row['parameter_type_name'];
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['remark'];
            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              var status = '';
              if (row['is_active'] == 1) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal"  class="badge badge-pill bg-success-light">Active</span></a>';
              } else if (row['is_active'] == 0) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
              }
              return status;
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.ParameterType_Model(' + row['id'] + ',' + '&apos;' + row['parameter_type_name'] + '&apos;' + ',' + '&apos;' + row['remark'] + '&apos;' + ')" data-toggle="modal" data-target="#model_parameter_type" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_ParameterType(' + row['id'] + ')" data-toggle="modal" data-target="#deleteModal" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1" ></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [2, 3, 4] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'parameter_type_name': $("#filter_parameter_type").val(),
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
