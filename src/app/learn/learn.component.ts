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
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: [
    './learn.component.scss',
  ]
})

export class LearnComponent implements OnInit {
  itemdata: any;
  result: any;
  LearnVideoList: any;
  learn_id: any;
  PlanList: any;
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
this.getLearn();
    this.DatatableList();
    this.getLearnVideo();
    this.getPlan();
    window.functions = window.functions || {};
    window.functions.Learn_Model = this.Learn_Model.bind(this);
    window.functions.Delete_Learn = this.Delete_Learn.bind(this);
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
  }

  getLearn() {
    var link = ApiService.service_url + ApiService.Learn_Datatable;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        console.log(res);
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

  getLearnVideo() {
    var link = ApiService.service_url + ApiService.Get_LearnVideo;
    var form = new FormData();

    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.LearnVideoList = this.result.data;
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

  Confirm_Change_Status(learn_id) {
    this.learn_id = learn_id;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('learn_id', this.learn_id);
    var link = ApiService.service_url + ApiService.Learn_ChangeStatus;
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

  Delete_Learn(learn_id) {
    this.learn_id = learn_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('learn_id', this.learn_id);
    var link = ApiService.service_url + ApiService.Delete_Learn;
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

  Learn_Model(learn_id, plan_id,learn_library_id, title, description, sequence_no) {
    if (learn_id != '0') {
      $('.modal_title').text('Edit Learn');
      $('#learn_id').val(learn_id);
      $("#learn_library_id").select2().val(learn_library_id).trigger("change");
      $("#plan_id").select2().val(plan_id).trigger("change");
      $('#title').val(title);
      $('#description').val(description);
      $('#sequence_no').val(sequence_no);
      $('#modal_learn .close').click();
    } else {
      $('.modal_title').text('Add Learn');
      $('#learn_id').val('');
      $("#learn_library_id").select2().val('').trigger("change");
      $("#plan_id").select2().val('').trigger("change");
      $('#title').val('');
      $('#description').val('');
      $('#sequence_no').val('');
      $('#video').val('');
    }
    setTimeout(function () { $("select").select2(); }, 500);

  }

  Add_Learn() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('learn_id', $("#learn_id").val());
    form.append('video_library', $("#learn_library_id").val());
    form.append('plan', $("#plan_id").val());
    form.append('title', $("#title").val());
    form.append('sequence_no', $("#sequence_no").val());
    form.append('description', $("#description").val());
    var link = ApiService.service_url + ApiService.AddorUpdate_Learn;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $('#modal_learn .close').click();
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
    var link = ApiService.service_url + ApiService.Learn_Datatable;
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
              if (row['url'] != null && row['url'] != '') {
                return '<video width="70%" src="' + row['url'] + '" controls muted loop></video>';
              }
              return '<div class="avatar"><img  class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['plan_name'];
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
              return row['description'];
            }
          },
          {
            targets: [5],
            render: function (data, type, row) {
              return row['sequence_no'];
            }
          },

          {
            targets: [6],
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
            targets: [7],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.Learn_Model(' + row['id'] + ',' + row['plan_id'] + ',' + row['learn_library_id'] + ',' + '&apos;' + row['title'] + '&apos;' + ',' + '&apos;' + row['description'] + '&apos;' + ',' + '&apos;' + row['sequence_no'] + '&apos;' + ')" data-toggle="modal" data-target="#modal_learn" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_Learn(' + row['id'] + ')" data-toggle="modal" data-target="#deleteModal" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [1, 2, 3, 5, 6,7] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'learn_library_id':$("#filter_learn_library_id").val(),
            'plan_id':$("#filter_plan_id").val(),
            'title':$("#filter_title").val(),
            'is_active':$("#filter_status").val(),
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
