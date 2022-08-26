import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-parametervalue',
  templateUrl: './parametervalue.component.html',
  styleUrls: [
    './parametervalue.component.scss',
  ]
})

export class ParametervalueComponent implements OnInit {
  itemdata: any;
  result: any;
  parameterTypeList: any;

  parameter_value_id: any;
  parameter_type_id: any;
  parameter_value_code: any;
  parameter_value: any;
  sequence_no: any;
  accepted_values: any;
  remark: any;
  constructor(private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {
  }

  ngOnInit() {
    const component = this;
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    $(".OnlyNumber").keypress(function (event) {
      return isOnlyNumberKey(event);
    });
    $("select").select2();

    // datatable 
    $(".filter-btn").on("click", function (e) {
      $('body,.filter-src-backdroup').addClass('filter-pop-open');
      return false;
    });
    $(".filter-src-close").on("click", function (e) {
      $('body,.filter-src-backdroup').removeClass('filter-pop-open');
    });
    // datatable end

    function isOnlyNumberKey(evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
    this.DatatableList();
    this.getParameterType();
    window.functions = window.functions || {};
    window.functions.ParameterValue_Model = this.ParameterValue_Model.bind(this);
    window.functions.Delete_ParameterValue = this.Delete_ParameterValue.bind(this);
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
  }

  getParameterType() {
    var link = ApiService.service_url + ApiService.Get_Parameter_Type;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.parameterTypeList = this.result.data;
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

  Confirm_Change_Status(parameter_value_id) {
    this.parameter_value_id = parameter_value_id;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('parameter_value_id', this.parameter_value_id);
    var link = ApiService.service_url + ApiService.Parameter_Value_ChangeStatus;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        $("#statusModal .close").click();
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

  Delete_ParameterValue(parameter_value_id) {
    this.parameter_value_id = parameter_value_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    if (this.parameter_value_id != '') {
      form.append('parameter_value_id', this.parameter_value_id);
      var link = ApiService.service_url + ApiService.Delete_Parameter_Value;

      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          $("#deleteModal .close").click();
          if (this.result.success == true) {
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

  ParameterValue_Model(parameter_value_id, parameter_type_id, parameter_value_code, parameter_value, sequence_no, accepted_values, remark) {
    if (parameter_value_id != '0') {
      $('.parameter_title').text('Edit Category');
      $('#parameter_value_id').val(parameter_value_id);
      $("#parameter_type_id").select2().val(parameter_type_id).trigger("change");
      $('#parameter_value_code').val(parameter_value_code);
      $('#parameter_value').val(parameter_value);
      $('#sequence_no').val(sequence_no);
      $('#accepted_values').val(accepted_values);
      $('#remark').val(remark);
      $('#model_parameter_value .close').click();
    } else {
      $('.parameter_title').text('Add Category');
      $('#parameter_value_id').val('');
      $("#parameter_type_id").select2().val('').trigger("change");
      $('#parameter_value_code').val('');
      $('#parameter_value').val('');
      $('#sequence_no').val('');
      $('#accepted_values').val('');
      $('#remark').val('');
    }
    setTimeout(function () { $("select").select2(); }, 500);

  }

  Add_Parameter_Value() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('parameter_value_id', $("#parameter_value_id").val());
    form.append('category_type', $("#parameter_type_id").val());
    form.append('category_name', $("#parameter_value").val());
    form.append('sequence_no', $("#sequence_no").val());
    form.append('remark', $("#remark").val());

    var link = ApiService.service_url + ApiService.AddorUpdate_Parameter_Value;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $("#model_parameter_value .close").click();
          this.DatatableList();
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

  DatatableList() {
    var access_token = this.itemdata.access_token;
    var user_id = this.itemdata.user_id;
    var link = ApiService.service_url + ApiService.Parameter_Value_Datatable;
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
            "visible": false,
            render: function (data, type, row) {
              if (row['image_link'] != null && row['image_link'] != '') {
                return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="' + row['image_link'] + '"></div>';
              }
              return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['parameter_type'];
            }
          },
          {
            targets: [3],
            "visible": false,
            render: function (data, type, row) {
              return row['parameter_value_code'];
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              return row['parameter_value'];
            }
          },
          {
            targets: [5],
            "visible": false,
            render: function (data, type, row) {
              return row['accepted_values'];
            }
          },
          {
            targets: [6],
            render: function (data, type, row) {
              return row['sequence_no'];
            }
          },
          {
            targets: [7],
            render: function (data, type, row) {
              return row['remark'];
            }
          },
          {
            targets: [8],
            render: function (data, type, row) {
              var status = '';
              if (row['is_active'] == 1) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-success-light">Active</span></a>';
              } else if (row['is_active'] == 0) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
              }
              return status;
            }
          },
          {
            targets: [9],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.ParameterValue_Model(' + row['id'] + ',' + row['parameter_type_id'] + ',' + '&apos;' + row['parameter_value_code'] + '&apos;' + ',' + '&apos;' + row['parameter_value'] + '&apos;' + ',' + '&apos;' + row['sequence_no'] + '&apos;' + ',' + '&apos;' + row['accepted_values'] + '&apos;' + ',' + '&apos;' + row['remark'] + '&apos;' + ',' + '&apos;' + row['parameter_value_code'] + '&apos;' + ')" data-toggle="modal" data-target="#model_parameter_value" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_ParameterValue(' + row['id'] + ')" href="javascript:void(0);" data-toggle="modal" data-target="#deleteModal" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [1, 5, 6, 7, 8, 9] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'parameter_type_id': $("#filter_parameter_type").val(),
            'parameter_value': $("#filter_parameter_value").val(),
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
