import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { Title, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { alertsService, LoaderService, EnDeService } from '../_helper';
import { ApiService } from '../_services/api-service';
import { Uploader } from '../entities/uploader';
import { UploadQueue } from '../entities/uploadqueue';
declare var $: any;
interface JQuery {
  tooltip(options?: any): any;
}
declare global {
  interface Window { functions: any }
}
@Injectable()
@Component({
  selector: 'app-learnlibrary',
  templateUrl: './learnlibrary.component.html',
  styleUrls: [
    './learnlibrary.component.scss',
  ]
})

export class LearnLibraryComponent implements OnInit {
  itemdata: any;
  result: any;
  videofiles: any;
  isGrid1 = "0";
  isVisible = "false";
  public message: string;
  public upload: Uploader = new Uploader();
  public uploader: Uploader = new Uploader();
  public VideoUpload: Uploader = new Uploader();
  public VideoUploader: Uploader = new Uploader();
  learn_library_id: any;
  constructor(private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute, private EnDeService: EnDeService, private route: ActivatedRoute, private http: HttpClient, private Router: Router, private loader: LoaderService, private alert: alertsService) {
    this.message = '';
  }

  ngOnInit() {
    const component = this;
    var ses_login = localStorage.getItem('ses_login');
    if (ses_login === null) {
      window.location.href = '/login';
    }
    this.itemdata = JSON.parse(this.EnDeService.decrypt(ses_login));
    this.getPlan();
    this.DatatableList();
    window.functions = window.functions || {};
    window.functions.Delete_Video = this.Delete_Video.bind(this);

    $('body').removeClass('mat-typography');

    $('#file').bind('change', function () {
      var imagename = $(this).val();
      if (/^\s*$/.test(imagename)) {
        $(this).parents(".file-upload").removeClass('active');
        $(this).parent().find(".noFile").text("No file chosen...");
      }
      else {
        $(this).parents(".file-upload").addClass('active');
        $(this).parent().find(".noFile").text(imagename.replace("C:\\fakepath\\", ""));
      }
    });

  }

  getPlan() {
    var link = ApiService.service_url + ApiService.Learn_Library_Datatable;
    var form = new FormData();
    const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
    this.http.post<any>(link, form, { headers }).subscribe(
      res => {
        this.loader.hideLoader();
        this.result = res;
        console.log(res);
        if (this.result.success == true) {
          var res = this.result.data;
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

  Delete_Video(learn_library_id) {
    this.learn_library_id = learn_library_id;
  }
  
  DeleteConfirm() {
    this.loader.showLoader();
    var form = new FormData();
    if (this.learn_library_id != '') {
      form.append('learn_library_id', this.learn_library_id);
      var link = ApiService.service_url + ApiService.Delete_Learn_Video;

      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      this.http.post<any>(link, form, { headers }).subscribe(
        res => {
          this.loader.hideLoader();
          this.result = res;
          $('#deleteModal, .close').click();
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

  onSelectChange(event) {
    const component = this;
    this.isVisible = 'true';
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    this.videofiles = target.files;
    var filename = new Array;
    for (const file of this.videofiles) {
      filename.push(file);
    }
    if (this.videofiles) {
      for (const file of this.videofiles) {
        this.VideoUpload.queue.push(new UploadQueue(file));
        if (this.VideoUpload.queue.length <= 50) {
          // if (file.size <= 12582912) {
          this.VideoUploader.queue.push(new UploadQueue(file));
          // } 
          // else if (file.size > 12582912) {
          //   this.toastr.error("Please upload file less than 12MB.");
          //   if (this.isGrid1 == '0') {
          //     this.isGrid1 = '1';
          //     component.ngAfterViewInit();
          //   }
          //   return;
          // }
        } else {
          this.alert.showAlerts("Error", "You can only upload a maximum of 50 files.", "error");
          if (this.isGrid1 == '0') {
            this.isGrid1 = '1';
            component.ngAfterViewInit();
          }
          return;
        }
      }
      if (this.isGrid1 == '0') {
        this.isGrid1 = '1';
        component.ngAfterViewInit();
      }
    }
  }

  ngAfterViewInit() {
  }

  uploadAllVideo() {
    let remainingFiles = this.VideoUploader.queue.filter(s => !s.isSuccess);
    for (let item of remainingFiles) {
      this.uploadVideo(item.id);
    }

  }

  uploadVideo(id) {
    if (id == null) {
      return;
    }
    let selectedFile = this.VideoUploader.queue.find(s => s.id == id);
    const formData = new FormData();
    if (selectedFile) {
      formData.append('selectVideo', selectedFile.file);
      var link = ApiService.service_url + ApiService.UploadVideo;
      const headers = { 'Authorization': 'Bearer ' + this.itemdata.access_token };
      const uploadReq = new HttpRequest('POST', link, formData, {
        reportProgress: true
      });
      // this.http.post<any>(link, formData, { reportProgress: true,headers }).subscribe(
      this.http.request(uploadReq).subscribe(
        event => {
          this.result = event['body'];
          this.loader.hideLoader();
          if (this.result != undefined) {
            if (this.result.success == true) {
              $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-success-light">' + this.result.message + '</span>');
              $('.' + id + ' .uploadbtn').html('-');
               this.DatatableList();
            } else if (this.result.success == false) {
              $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-danger-light">' + this.result.message + '</span>');
              $('.' + id + ' .uploadbtn').html('-');
            }
          }
          if (event.type === HttpEventType.UploadProgress) {
            $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-warning-light">processing...</span>');
            $('.' + id + ' .uploadbtn').html('-');
            selectedFile.progress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            selectedFile.message = event.body.toString();
          }

        },
        err => {
          this.loader.hideLoader();
          $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-danger-light">Something went wrong</span>');
          $('.' + id + ' .uploadbtn').html('-');
        }
      );
    }
  }

  DatatableList() {
    var access_token = this.itemdata.access_token;
    var user_id = this.itemdata.user_id;
    var link = ApiService.service_url + ApiService.Learn_Library_Datatable;
    setTimeout(() => {
      $("#DataTableList").DataTable().destroy();
      var table = $('#DataTableList').DataTable({
        "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
        scrollX: true,
        "sScrollY": ($(window).height() - 360),
        "order": [],
        "aaSorting": [],
        searching: true,
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
              if (row['videoLink'] != null && row['videoLink'] != '') {
                return '<video width="50%" src="' + row['videoLink'] + '" controls muted loop></video>';
              }
              return '<div class="avatar"><img  class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
            }
          },
          {
            targets: [1],
            render: function (data, type, row) {
              return row['file_name'];
            }
          },
          {
            targets: [2],
            render: function (data, type, row) {
              return row['created_at'];
            }
          },

          {
            targets: [3],
            render: function (data, type, row) {
              var action_btn = '';
              action_btn += '<a onclick="functions.Delete_Video(' + row['id'] + ')" href="javascript:void(0);" data-toggle="modal" data-target="#deleteModal" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
              return action_btn;
            }
          },
          { "bSortable": false, "targets": [0, 1, 3] },
        ],
        "sPaginationType": "full_numbers",
        "bProcessing": true,
        "bServerSide": true,
        "ajax": {
          "type": "POST",
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
