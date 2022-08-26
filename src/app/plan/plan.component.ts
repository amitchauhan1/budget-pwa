import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: [
    './plan.component.scss',
  ]
})
export class PlanComponent implements OnInit {
  itemdata: any;
  result: any;
  plan_id: any;
  planFeaturesList: any;
  constructor(private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {

  }

  ngOnInit() {
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    window.functions = window.functions || {};
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
    window.functions.Delete_Plan = this.Delete_Plan.bind(this);
    window.functions.Plan_Model = this.Plan_Model.bind(this);
    window.functions.Get_Permission = this.Get_Permission.bind(this);

    $(document).ready(function () {
      $('#tbl-features').on('click', '.tr_clone_add', function () {
        var $tr = $(this).closest('.tr_clone');
        var $clone = $tr.clone();
        $clone.find(':text').val('');
        $tr.after($clone);
      });
      $("#tbl-features").on('click', '.tr_clone_del', function () {
        $(this).parent().parent().remove();
      });
      function isOnlyNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
      }
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

    });
    this.DatatableList();

    $('#plan_type').on('change', function (e) {
      if (this.value == 1) {
        $('.monthSection').hide();
        $('.amountSection').hide();
        $('#month').val('');
        $('#amount').val('');
      } else {
        $('.monthSection').show();
        $('.amountSection').show();
      }
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.planFeaturesList, event.previousIndex, event.currentIndex);
  }

  DeleteFeatures(features_id) {
    this.loader.showLoader();
    var form = new FormData();
    if (features_id != '') {
      form.append('features_id', features_id);
      var link = ApiService.service_url + ApiService.Delete_PlanFeatures;

      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {

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

  isOnlyNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getPlanFeatures() {
    var link = ApiService.service_url + ApiService.Get_Plan_Features;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.planFeaturesList = [];
          this.planFeaturesList = this.result.data;
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

  Add_Permission() {
    this.loader.showLoader();
    var str = '';
    var planId = $('.plan_id').val();
    var chkComman = [];
    var chkAccessible = [];
    $('#chkAccessible:checked').each(function () {
      chkAccessible.push($(this).data('value'));
      chkComman.push($(this).data('value'));
    });
    str += "chkAccessible=" + chkAccessible.join(',');
    if (str != '') {
      var form = new FormData();
      form.append('data', str);
      form.append('comman', chkComman.join(','));
      form.append('plan_id', planId);
      var link = ApiService.service_url + ApiService.Add_Permission;
      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          if (this.result.success == true) {
            $('#modelPermission .close').click();
            this.alert.showAlerts("", this.result.message, "success");
          } else if (this.result.success == false) {
            this.alert.showAlerts("Error", this.result.message, "error");
          }
        },
        err => {
          this.loader.hideLoader();
          this.alert.showAlerts("Error", err.error.message, "error");
        }
      );
    } else {
      this.loader.hideLoader();
      this.alert.showAlerts("Error", 'Please Checked Any One Option', "error");
    }
  }

  Get_Permission(plan_id) {
    this.loader.showLoader();
    var form = new FormData();

    $('#permission_body').html('');
    form.append('plan_id', plan_id);
    var link = ApiService.service_url + ApiService.Get_Permission;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $('.plan_id').val(plan_id);
          $('#permission_body').html(this.result.data);
          $('#model_permission').modal('show');
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

  Delete_Plan(plan_id) {
    this.plan_id = plan_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('plan_id', this.plan_id);
    var link = ApiService.service_url + ApiService.Delete_Plan;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        $('#deleteModal .close').click();
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

  }

  Confirm_Change_Status(plan_id) {
    this.plan_id = plan_id;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('plan_id', this.plan_id);
    var link = ApiService.service_url + ApiService.Plan_ChangeStatus;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        $('#statusModal .close').click();
        this.DatatableList();
        if (this.result.success == true) {
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

  Plan_Model(plan_id, plan_type, plan_name, title, month, amount, description) {
    if (plan_id != '0') {
      $('.parameter_title').text('Edit Plan');
      $('#plan_id').val(plan_id);
      $("#plan_type").select2().val(plan_type).trigger("change");
      $('#plan_name').val(plan_name);
      $('#title').val(title);
      $('#month').val(month);
      $('#amount').val(amount);
      $('#description').val(description);
    } else {
      $('.parameter_title').text('Add Plan');
      $('#plan_id').val('');
      $("#plan_type").select2().val('').trigger("change");
      $('#plan_name').val('');
      $('#title').val('');
      $('#month').val('');
      $('#amount').val('');
      $('#description').val('');
    }
    setTimeout(function () { $("select").select2(); }, 500);
  }

  Add_Plan() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('plan_id', $("#plan_id").val());
    form.append('plan_type', $("#plan_type").val());
    form.append('plan_name', $("#plan_name").val());
    if ($("#plan_type").val() == 1) {
      form.append('month', '0');
      form.append('amount', '0');
    } else {
      form.append('month', $("#month").val());
      form.append('amount', $("#amount").val());
    }
    form.append('title', $("#title").val());
    form.append('description', $("#description").val());
    var link = ApiService.service_url + ApiService.AddorUpdate_Plan;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;

        if (this.result.success == true) {
          $('#model_plan .close').click();
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

  Add_Features() {
    var FeatureArray = [];
    $('#tbl-features tbody tr').each(function () {
      FeatureArray.push({
        id: $(this).find('.features_id').val(),
        features: $(this).find('.features').val(),
        // sequence_no: $(this).find('.sequence_no').val(),
      });
    });
    this.loader.showLoader();
    var form = new FormData();
    form.append('FeatureArray', JSON.stringify(FeatureArray));
    var link = ApiService.service_url + ApiService.Save_PlanFeatures;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        $('#model_add_features .close').click();
        this.DatatableList();
        if (this.result.success == true) {
          this.planFeaturesList = [];
          this.alert.showAlerts("", this.result.message, "success");
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
    var link = ApiService.service_url + ApiService.Plan_Datatable;
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
            'sClass': 'text-left',
            render: function (data, type, row) {
              var plan_type = '';
              if (row['plan_type'] == 1) {
                plan_type += '<span class="text-ifo">Free</span>';
              } else if (row['plan_type'] == 2) {
                plan_type += '<span class="text-warning">Paid</span>';
              } else if (row['plan_type'] == 3) {
                plan_type += '<span class="text-warning">Premium</span>';
              }
              return '<h2 class="text-secondary">' + row['plan_name'] + '</h2><br>' + plan_type;
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['title'];
            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              return row['description'];
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              return row['month'] + ' Month';
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
              return row['created_at'];
            }
          },
          {
            targets: [7],
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
            targets: [8],
            render: function (data, type, row) {
              var action_btn = '';
              return '<div class="dropdown dropdown-action">' +
                '<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-h"></i></a>' +
                '<div class="dropdown-menu dropdown-menu-right">' +
                '<a onclick="functions.Plan_Model(' + row['id'] + ',' + row['plan_type'] + ',' + '&apos;' + row['plan_name'] + '&apos;' + ',' + '&apos;' + row['title'] + '&apos;' + ',' + '&apos;' + row['month'] + '&apos;' + ',' + '&apos;' + row['amount'] + '&apos;' + ',' + '&apos;' + row['description'] + '&apos;' + ')" data-toggle="modal" data-target="#model_plan" class="dropdown-item" href="javascript:void(0);"><i class="far fa-edit mr-2"></i>Edit</a>' +
                '<a onclick="functions.Delete_Plan(' + row['id'] + ')" data-toggle="modal" data-target="#deleteModal" class="dropdown-item" href="javascript:void(0);"><i class="far fa-trash-alt mr-2"></i>Delete</a>' +
                '<a onclick="functions.Get_Permission(' + row['id'] + ')" data-toggle="modal" data-target="#modelPermission" class="dropdown-item" href="javascript:void(0);"><i class="far fa-check-circle mr-2"></i>permission</a>' +
                '</div>' +
                '</div>';
            }
          },
          { "bSortable": false, "targets": [2, 7, 8] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'plan_type': $("#filter_plan_type").val(),
            'plan_name': $("#filter_plan_name").val(),
            'title': $("#filter_title").val(),
            'month': $("#filter_month").val(),
            'amount': $("#filter_amount").val(),
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
