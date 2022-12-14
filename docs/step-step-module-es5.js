function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["step-step-module"], {
  /***/
  "./src/app/step/step-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/step/step-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: StepRoutingModule */

  /***/
  function srcAppStepStepRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepRoutingModule", function () {
      return StepRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./step.component */
    "./src/app/step/step.component.ts");

    var routes = [{
      path: '',
      component: _step_component__WEBPACK_IMPORTED_MODULE_2__["StepComponent"]
    }];

    var StepRoutingModule = function StepRoutingModule() {
      _classCallCheck(this, StepRoutingModule);
    };

    StepRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: StepRoutingModule
    });
    StepRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function StepRoutingModule_Factory(t) {
        return new (t || StepRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](StepRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StepRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/step/step.component.ts":
  /*!****************************************!*\
    !*** ./src/app/step/step.component.ts ***!
    \****************************************/

  /*! exports provided: StepComponent */

  /***/
  function srcAppStepStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepComponent", function () {
      return StepComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/api-service */
    "./src/app/_services/api-service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_helper */
    "./src/app/_helper/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StepComponent_option_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var plan_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", plan_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](plan_r1.plan_name);
      }
    }

    var StepComponent = /*#__PURE__*/function () {
      function StepComponent(formBuilder, sanitizer, activatedRoute, EnDeService, route, http, Router, loader, alert) {
        _classCallCheck(this, StepComponent);

        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.EnDeService = EnDeService;
        this.route = route;
        this.http = http;
        this.Router = Router;
        this.loader = loader;
        this.alert = alert;
        this.file = null; // Variable to store file
      }

      _createClass(StepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var component = this;
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
            var charCode = evt.which ? evt.which : evt.keyCode;

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
      }, {
        key: "getPlan",
        value: function getPlan() {
          var _this = this;

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Get_Plan;
          var form = new FormData();
          var headers = {
            'Authorization': 'Bearer ' + this.itemdata.access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this.loader.hideLoader();

            _this.result = res;

            if (_this.result.success == true) {
              _this.PlanList = _this.result.data;
            } else if (_this.result.success == false) {
              _this.alert.showAlerts("Error", _this.result.message, "error");
            }
          }, function (err) {
            _this.loader.hideLoader();

            _this.alert.showAlerts("Error", err.error.message, "error");
          });
        }
      }, {
        key: "Confirm_Change_Status",
        value: function Confirm_Change_Status(step_id, status) {
          this.step_id = step_id;
          this.status = status;
        }
      }, {
        key: "Change_Status",
        value: function Change_Status() {
          var _this2 = this;

          this.loader.showLoader();
          var form = new FormData();
          form.append('progress_panel_id', this.step_id);

          if (this.status == '0') {
            form.append('status', '1');
          } else {
            form.append('status', '0');
          }

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Step_ChangeStatus;
          var headers = {
            'Authorization': 'Bearer ' + this.itemdata.access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this2.loader.hideLoader();

            _this2.result = res;
            $("#statusModal .close").click();

            if (_this2.result.success == true) {
              _this2.alert.showAlerts("", _this2.result.message, "success");
            } else if (_this2.result.success == false) {
              _this2.alert.showAlerts("Error", _this2.result.message, "error");
            }

            _this2.DatatableList();
          }, function (err) {
            var component = _this2;

            _this2.loader.hideLoader();

            if (err.status == '422') {
              $.each(err.error.errors, function (index, val) {
                $.each(val, function (i, errMsg) {
                  component.Error422(errMsg);
                });
                return false;
              });
            } else {
              _this2.alert.showAlerts("Error", err.error.message, "error");
            }
          });
        }
      }, {
        key: "Delete_Step",
        value: function Delete_Step(step_id) {
          this.step_id = step_id;
        }
      }, {
        key: "DeleteConfirm",
        value: function DeleteConfirm() {
          var _this3 = this;

          this.loader.showLoader();
          var form = new FormData();

          if (this.step_id != '') {
            form.append('progress_panel_id', this.step_id);
            var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].DeleteStep;
            var headers = {
              'Authorization': 'Bearer ' + this.itemdata.access_token
            };
            this.http.post(link, form, {
              headers: headers
            }).subscribe(function (res) {
              _this3.loader.hideLoader();

              _this3.result = res;
              $('#deleteModal .close').click();

              if (_this3.result.success == true) {
                _this3.alert.showAlerts("", _this3.result.message, "success");

                _this3.DatatableList();
              } else if (_this3.result.success == false) {
                _this3.alert.showAlerts("Error", _this3.result.message, "error");
              }
            }, function (err) {
              var component = _this3;

              _this3.loader.hideLoader();

              if (err.status == '422') {
                $.each(err.error.errors, function (index, val) {
                  $.each(val, function (i, errMsg) {
                    component.Error422(errMsg);
                  });
                  return false;
                });
              } else {
                _this3.alert.showAlerts("Error", err.error.message, "error");
              }
            });
          } else {
            this.loader.hideLoader();
            this.alert.showAlerts("Error", "Something went wrong", "error");
          }
        }
      }, {
        key: "Step_Model",
        value: function Step_Model(step_id, plan_id, step_no, title, description, video) {
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

          setTimeout(function () {
            $("select").select2();
          }, 500);
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          this.file = event.target.files[0];
        }
      }, {
        key: "Add_Step",
        value: function Add_Step() {
          var _this4 = this;

          this.loader.showLoader();
          var form = new FormData();
          form.append('progress_panel_id', $("#step_id").val());
          form.append('step', $("#step_no").val());
          form.append('plan_id', $("#plan_id").val());
          form.append('title', $("#title").val());
          form.append('description', $("#description").val());
          form.append('video', this.file);
          form.append('status', '1');
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].AddStep;

          if ($("#step_id").val() != '0') {
            link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].UpdateStep;
          }

          var headers = {
            'Authorization': 'Bearer ' + this.itemdata.access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this4.loader.hideLoader();

            _this4.result = res;

            if (_this4.result.success == true) {
              $('#modal_step .close').click();

              _this4.DatatableList();

              _this4.file = null;

              _this4.alert.showAlerts("", _this4.result.message, "success");
            } else if (_this4.result.success == false) {
              _this4.alert.showAlerts("Error", _this4.result.message, "error");
            }
          }, function (err) {
            var component = _this4;

            _this4.loader.hideLoader();

            if (err.status == '422') {
              $.each(err.error.errors, function (index, val) {
                $.each(val, function (i, errMsg) {
                  component.Error422(errMsg);
                });
                return false;
              });
            } else {
              _this4.alert.showAlerts("Error", err.error.message, "error");
            }
          });
        }
      }, {
        key: "DatatableList",
        value: function DatatableList() {
          var access_token = this.itemdata.access_token;
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Get_Step;
          setTimeout(function () {
            $("#DataTableList").DataTable().destroy();
            var table = $('#DataTableList').DataTable({
              "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
              scrollX: true,
              "sScrollY": $(window).height() - 320,
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
                "sProcessing": 'loading...'
              },
              columnDefs: [{
                "visible": false,
                targets: [0],
                render: function render(data, type, row) {
                  return row['id'];
                }
              }, {
                targets: [1],
                render: function render(data, type, row) {
                  if (row['video_url'] != null && row['video_url'] != '') {
                    return '<video width="70%" src="' + row['video_url'] + '" controls muted loop></video>';
                  }

                  return '<div class="avatar"><img  class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
                }
              }, {
                targets: [2],
                render: function render(data, type, row) {
                  return row['step'];
                }
              }, {
                targets: [3],
                render: function render(data, type, row) {
                  return row['title'];
                }
              }, {
                targets: [4],
                render: function render(data, type, row) {
                  var plan_id = '';

                  if (row['plan_id'] == 1) {
                    plan_id += '<span class="text-ifo">Free</span>';
                  } else if (row['plan_id'] == 2) {
                    plan_id += '<span class="text-warning">Paid</span>';
                  }

                  return plan_id;
                }
              }, {
                targets: [5],
                render: function render(data, type, row) {
                  var status = '';

                  if (row['status'] == 1) {
                    status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ',' + row['status'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-success-light">Active</span></a>';
                  } else if (row['status'] == 0) {
                    status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ',' + row['status'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
                  }

                  return status;
                }
              }, {
                targets: [6],
                render: function render(data, type, row) {
                  var action_btn = '';
                  action_btn += '<a onclick="functions.Step_Model(' + row['id'] + ',' + row['plan_id'] + ',' + row['step'] + ',' + '&apos;' + row['title'] + '&apos;' + ',' + '&apos;' + row['description'] + '&apos;' + ',' + '&apos;' + row['video'] + '&apos;' + ')" data-toggle="modal" data-target="#modal_step" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
                  action_btn += '<a onclick="functions.Delete_Step(' + row['id'] + ')" data-toggle="modal" data-target="#deleteModal" href="javascript:void(0);" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
                  return action_btn;
                }
              }, {
                "bSortable": false,
                "targets": []
              }],
              "sPaginationType": "full_numbers",
              "bProcessing": true,
              "bServerSide": true,
              "ajax": {
                "type": "Get",
                "url": link,
                "headers": {
                  'Authorization': 'Bearer ' + access_token
                }
              }
            });
          }, 100);
        }
      }, {
        key: "Error422",
        value: function Error422(errorMessage) {
          this.alert.showAlerts("Error", errorMessage, "error");
        }
      }]);

      return StepComponent;
    }();

    StepComponent.??fac = function StepComponent_Factory(t) {
      return new (t || StepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["EnDeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["alertsService"]));
    };

    StepComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: StepComponent,
      selectors: [["app-step"]],
      decls: 127,
      vars: 1,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "col-auto"], ["title", "Add Step", "data-toggle", "modal", "data-target", "#modal_step", "href", "javascript:void(0);", 1, "btn", "btn-primary", "mr-1", 3, "click"], [1, "fas", "fa-plus"], [1, "row"], [1, "col-sm-12"], [1, "card", "card-table"], [1, "card-body"], [1, "table-responsive", "table-main"], ["id", "DataTableList", 1, "table", "table-center", "table-hover", "datatable"], [1, "thead-light"], ["id", "modal_step", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "modal_title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "step_id", "type", "hidden", 1, "form-control"], [1, "col-md-12"], [1, "form-group"], [1, "text-danger"], ["id", "title", "type", "text", 1, "form-control"], [1, "col-md-6"], ["id", "step_no", "type", "text", 1, "form-control", "OnlyNumber"], ["id", "plan_id", 1, "select", "form-control", 2, "width", "355px"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "description", "rows", "5", 1, "form-control"], ["id", "file", "type", "file", "accept", ".mp4", 1, "form-control", 3, "change"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "click"], ["id", "deleteModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-title"], [1, "message"], [1, "col-sm-6"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-danger", "active"], ["type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-success", "active", 3, "click"], ["id", "statusModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], [3, "value"]],
      template: function StepComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Progress Panel Step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepComponent_Template_a_click_14_listener() {
            return ctx.Step_Model(0, "", "", "", "", "");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "thead", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Step Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Select Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, StepComponent_option_73_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "textarea", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function StepComponent_Template_input_change_83_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepComponent_Template_button_click_85_listener() {
            return ctx.Add_Step();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "h5", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Are you sure you want to delete record?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepComponent_Template_button_click_105_listener() {
            return ctx.DeleteConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h5", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Are you sure you want to change status?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function StepComponent_Template_button_click_125_listener() {
            return ctx.Change_Status();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.PlanList);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3N0ZXAvc3RlcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    StepComponent.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: StepComponent,
      factory: StepComponent.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step',
          templateUrl: './step.component.html',
          styleUrls: ['./step.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_5__["EnDeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_5__["alertsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/step/step.module.ts":
  /*!*************************************!*\
    !*** ./src/app/step/step.module.ts ***!
    \*************************************/

  /*! exports provided: StepModule */

  /***/
  function srcAppStepStepModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepModule", function () {
      return StepModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _step_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./step-routing.module */
    "./src/app/step/step-routing.module.ts");
    /* harmony import */


    var _step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./step.component */
    "./src/app/step/step.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var StepModule = function StepModule() {
      _classCallCheck(this, StepModule);
    };

    StepModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: StepModule
    });
    StepModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function StepModule_Factory(t) {
        return new (t || StepModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _step_routing_module__WEBPACK_IMPORTED_MODULE_3__["StepRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](StepModule, {
        declarations: [_step_component__WEBPACK_IMPORTED_MODULE_4__["StepComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _step_routing_module__WEBPACK_IMPORTED_MODULE_3__["StepRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StepModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_step_component__WEBPACK_IMPORTED_MODULE_4__["StepComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _step_routing_module__WEBPACK_IMPORTED_MODULE_3__["StepRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=step-step-module-es5.js.map