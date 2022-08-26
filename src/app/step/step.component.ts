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
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: [
    './step.component.scss',
  ]
})
export class StepComponent implements OnInit {
  itemdata: any;
  result: any;
  step_id: any;
  PlanList: any;
  status: any;
  file: File = null; // Variable to store file

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
    function isOnlyNumberKey(evt) {
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
    this.DatatableList();
    this.getPlan();
    window.functions = window.functions || {};
    window.functions.Step_Model = this.Step_Model.bind(this);
    window.functions.Delete_Step = this.Delete_Step.bind(this);
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
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

  Confirm_Change_Status(step_id, status) {
    this.step_id = step_id;
    this.status = status;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('progress_panel_id', this.step_id);
    if (this.status == '0') {
      form.append('status', '1');
    }
    else {
      form.append('status', '0');
    }

    var link = ApiService.service_url + ApiService.Step_ChangeStatus;
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

  Delete_Step(step_id) {
    this.step_id = step_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    if (this.step_id != '') {
      form.append('progress_panel_id', this.step_id);
      var link = ApiService.service_url + ApiService.DeleteStep;

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

    } else {
      this.loader.hideLoader();
      this.alert.showAlerts("Error", "Something went wrong", "error");
    }
  }

  Step_Model(step_id, plan_id, step_no, title, description, video) {
    if (step_id != '0') {
      $('.modal_title').text('Edit Progress Panel Step');
      $('#step_id').val(step_id);
      $("#plan_id").select2().val(plan_id).trigger("change");
      $('#title').val(title);
      $('#description').val(description);
      $('#step_no').val(step_no);
      $('#file').val(video);
      $('#modal_step .close').click();

    } else {
      $('.modal_title').text('Add Progress Panel Step');
      $('#step_id').val(step_id);
      $("#plan_id").select2().val('').trigger("change");
      $('#title').val('');
      $('#description').val('');
      $('#step_no').val('');
      $('#file').val('');
    }
    setTimeout(function () { $("select").select2(); }, 500);

  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  Add_Step() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('progress_panel_id', $("#step_id").val());
    form.append('step', $("#step_no").val());
    form.append('plan_id', $("#plan_id").val());
    form.append('title', $("#title").val());
    form.append('description', $("#description").val());
    form.append('video', this.file);
    form.append('status', '1');
    var link = ApiService.service_url + ApiService.AddStep;
    if ($("#step_id").val() != '0') {
      link = ApiService.service_url + ApiService.UpdateStep;
    }
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $('#modal_step .close').click();
          this.DatatableList();
          this.file=null;
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
    var link = ApiService.service_url + ApiService.Get_Step;
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
              if (row['video_url'] != null && row['video_url'] != '') {
                return '<video width="70%" src="' + row['video_url'] + '" controls muted loop></video>';
              }
              return '<div class="avatar"><img  class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['step'];
            }
          },
          {
            targets: [3],
            render: function (data, type, row) {
              return row['title'];
            }
          },
          {
            targets: [4],
            render: function (data, type, row) {
              var plan_id = '';
              if (row['plan_id'] == 1) {
                plan_id += '<span class="text-ifo">Free</span>';
              } else if (row['plan_id'] == 2) {
                plan_id += '<span class="text-warning">Paid</span>';
              }
              return plan_id;
            }
          },
          {
            targets: [5],
            render: function (data, type, row) {
              var status = '';
              if (row['status'] == 1) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ',' + row['status'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-success-light">Active</span></a>';
              } else if (row['status'] == 0) {
                status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ',' + row['status'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
              }
              return status;
            }
          },
          {
            targets: [6],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.Step_Model(' + row['id'] + ',' + row['plan_id'] + ',' + row['step'] + ',' + '&apos;' + row['title'] + '&apos;' + ',' + '&apos;' + row['description'] + '&apos;' + ',' + '&apos;' + row['video'] + '&apos;' + ')" data-toggle="modal" data-target="#modal_step" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_Step(' + row['id'] + ')" data-toggle="modal" data-target="#deleteModal" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "Get",
          "url": link,
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

}
