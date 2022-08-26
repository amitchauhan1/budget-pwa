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
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: [
    './subcategory.component.scss',
  ]
})
export class SubCategoryComponent implements OnInit {
  itemdata: any;
  result: any;
  categoryList: any;
  sub_category_id: any;

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
    this.getCategory();
    window.functions = window.functions || {};
    window.functions.SubCategory_Model = this.SubCategory_Model.bind(this);
    window.functions.Delete_SubCategory = this.Delete_SubCategory.bind(this);
    window.functions.Confirm_Change_Status = this.Confirm_Change_Status.bind(this);
  }

  getCategory() {
    var link = ApiService.service_url + ApiService.Get_Category;
    var form = new FormData();

    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          this.categoryList = this.result.data;
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

  Confirm_Change_Status(sub_category_id) {
    this.sub_category_id = sub_category_id;
  }

  Change_Status() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('sub_category_id', this.sub_category_id);
    var link = ApiService.service_url + ApiService.Sub_Category_ChangeStatus;
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

  Delete_SubCategory(sub_category_id) {
    this.sub_category_id = sub_category_id;
  }

  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    if (this.sub_category_id != '') {
      form.append('sub_category_id', this.sub_category_id);
      var link = ApiService.service_url + ApiService.Delete_SubCategory;

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
  
  SubCategory_Model(sub_category_id, category_id, sub_category) {
    if (sub_category_id != '0') {
      $('.parameter_title').text('Edit Sub Category');
      $('#sub_category_id').val(sub_category_id);
      $("#category_id").select2().val(category_id).trigger("change");
      $('#sub_category').val(sub_category);
      $('#model_sub_category .close').click();
    } else {
      $('.parameter_title').text('Add Sub Category');
      $('#sub_category_id').val('');
      $("#category_id").select2().val('').trigger("change");
      $('#sub_category').val('');
    }
    setTimeout(function () { $("select").select2(); }, 500);
  }

  Add_SubCategory() {
    this.loader.showLoader();
    var form = new FormData();
    form.append('sub_category_id', $("#sub_category_id").val());
    form.append('category', $("#category_id").val());
    form.append('sub_category', $("#sub_category").val());
    var link = ApiService.service_url + ApiService.AddorUpdate_SubCategory;
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        if (this.result.success == true) {
          $('#model_sub_category .close').click();
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
    var link = ApiService.service_url + ApiService.SubCategory_Datatable;
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
              return row['category'];
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['sub_category'];
            }
          },

          {
            targets: [3],
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
            targets: [4],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.SubCategory_Model(' + row['id'] + ',' + row['category_id'] + ',' + '&apos;' + row['sub_category'] + '&apos;' + ')" data-toggle="modal" data-target="#model_sub_category" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
              action_btn += '<a onclick="functions.Delete_SubCategory(' + row['id'] + ')" href="javascript:void(0);" data-toggle="modal" data-target="#deleteModal" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },


          { "bSortable": false, "targets": [] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
          "url": link,
          'data': {
            'category_id': $("#filter_category_id").val(),
            'sub_category': $("#filter_sub_category").val(),
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
