function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametervalue-parametervalue-module"], {
  /***/
  "./src/app/parametervalue/parametervalue-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/parametervalue/parametervalue-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ParametervalueRoutingModule */

  /***/
  function srcAppParametervalueParametervalueRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametervalueRoutingModule", function () {
      return ParametervalueRoutingModule;
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


    var _parametervalue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parametervalue.component */
    "./src/app/parametervalue/parametervalue.component.ts");

    var routes = [{
      path: '',
      component: _parametervalue_component__WEBPACK_IMPORTED_MODULE_2__["ParametervalueComponent"]
    }];

    var ParametervalueRoutingModule = function ParametervalueRoutingModule() {
      _classCallCheck(this, ParametervalueRoutingModule);
    };

    ParametervalueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParametervalueRoutingModule
    });
    ParametervalueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParametervalueRoutingModule_Factory(t) {
        return new (t || ParametervalueRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametervalueRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametervalueRoutingModule, [{
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
  "./src/app/parametervalue/parametervalue.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/parametervalue/parametervalue.component.ts ***!
    \************************************************************/

  /*! exports provided: ParametervalueComponent */

  /***/
  function srcAppParametervalueParametervalueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametervalueComponent", function () {
      return ParametervalueComponent;
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

    function ParametervalueComponent_option_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var parameterType_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", parameterType_r2.parameter_type_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameterType_r2.parameter_type_name);
      }
    }

    function ParametervalueComponent_option_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var parameterType_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", parameterType_r3.parameter_type_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameterType_r3.parameter_type_name);
      }
    }

    var ParametervalueComponent = /*#__PURE__*/function () {
      function ParametervalueComponent(formBuilder, sanitizer, activatedRoute, EnDeService, route, http, Router, loader, alert) {
        _classCallCheck(this, ParametervalueComponent);

        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.EnDeService = EnDeService;
        this.route = route;
        this.http = http;
        this.Router = Router;
        this.loader = loader;
        this.alert = alert;
      }

      _createClass(ParametervalueComponent, [{
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
          $("select").select2(); // datatable 

          $(".filter-btn").on("click", function (e) {
            $('body,.filter-src-backdroup').addClass('filter-pop-open');
            return false;
          });
          $(".filter-src-close").on("click", function (e) {
            $('body,.filter-src-backdroup').removeClass('filter-pop-open');
          }); // datatable end

          function isOnlyNumberKey(evt) {
            var charCode = evt.which ? evt.which : evt.keyCode;

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
      }, {
        key: "getParameterType",
        value: function getParameterType() {
          var _this = this;

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Get_Parameter_Type;
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
              _this.parameterTypeList = _this.result.data;
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
        value: function Confirm_Change_Status(parameter_value_id) {
          this.parameter_value_id = parameter_value_id;
        }
      }, {
        key: "Change_Status",
        value: function Change_Status() {
          var _this2 = this;

          this.loader.showLoader();
          var form = new FormData();
          form.append('parameter_value_id', this.parameter_value_id);
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Parameter_Value_ChangeStatus;
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
        key: "Delete_ParameterValue",
        value: function Delete_ParameterValue(parameter_value_id) {
          this.parameter_value_id = parameter_value_id;
        }
      }, {
        key: "DeleteConfirm",
        value: function DeleteConfirm() {
          var _this3 = this;

          this.loader.showLoader();
          var form = new FormData();

          if (this.parameter_value_id != '') {
            form.append('parameter_value_id', this.parameter_value_id);
            var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Delete_Parameter_Value;
            var headers = {
              'Authorization': 'Bearer ' + this.itemdata.access_token
            };
            this.http.post(link, form, {
              headers: headers
            }).subscribe(function (res) {
              _this3.loader.hideLoader();

              _this3.result = res;
              $("#deleteModal .close").click();

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
        key: "ParameterValue_Model",
        value: function ParameterValue_Model(parameter_value_id, parameter_type_id, parameter_value_code, parameter_value, sequence_no, accepted_values, remark) {
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

          setTimeout(function () {
            $("select").select2();
          }, 500);
        }
      }, {
        key: "Add_Parameter_Value",
        value: function Add_Parameter_Value() {
          var _this4 = this;

          this.loader.showLoader();
          var form = new FormData();
          form.append('parameter_value_id', $("#parameter_value_id").val());
          form.append('category_type', $("#parameter_type_id").val());
          form.append('category_name', $("#parameter_value").val());
          form.append('sequence_no', $("#sequence_no").val());
          form.append('remark', $("#remark").val());
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].AddorUpdate_Parameter_Value;
          var headers = {
            'Authorization': 'Bearer ' + this.itemdata.access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this4.loader.hideLoader();

            _this4.result = res;

            if (_this4.result.success == true) {
              $("#model_parameter_value .close").click();

              _this4.DatatableList();

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
          var user_id = this.itemdata.user_id;
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].Parameter_Value_Datatable;
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
                "visible": false,
                render: function render(data, type, row) {
                  if (row['image_link'] != null && row['image_link'] != '') {
                    return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="' + row['image_link'] + '"></div>';
                  }

                  return '<div class="avatar"><img class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
                }
              }, {
                targets: [2],
                render: function render(data, type, row) {
                  return row['parameter_type'];
                }
              }, {
                targets: [3],
                "visible": false,
                render: function render(data, type, row) {
                  return row['parameter_value_code'];
                }
              }, {
                targets: [4],
                render: function render(data, type, row) {
                  return row['parameter_value'];
                }
              }, {
                targets: [5],
                "visible": false,
                render: function render(data, type, row) {
                  return row['accepted_values'];
                }
              }, {
                targets: [6],
                render: function render(data, type, row) {
                  return row['sequence_no'];
                }
              }, {
                targets: [7],
                render: function render(data, type, row) {
                  return row['remark'];
                }
              }, {
                targets: [8],
                render: function render(data, type, row) {
                  var status = '';

                  if (row['is_active'] == 1) {
                    status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-success-light">Active</span></a>';
                  } else if (row['is_active'] == 0) {
                    status += '<a href="javascript:void(0);"><span onclick="functions.Confirm_Change_Status(' + row['id'] + ')" data-toggle="modal" data-target="#statusModal" class="badge badge-pill bg-danger-light">Inactive</span></a>';
                  }

                  return status;
                }
              }, {
                targets: [9],
                render: function render(data, type, row) {
                  var action_btn = '';
                  action_btn += '<a onclick="functions.ParameterValue_Model(' + row['id'] + ',' + row['parameter_type_id'] + ',' + '&apos;' + row['parameter_value_code'] + '&apos;' + ',' + '&apos;' + row['parameter_value'] + '&apos;' + ',' + '&apos;' + row['sequence_no'] + '&apos;' + ',' + '&apos;' + row['accepted_values'] + '&apos;' + ',' + '&apos;' + row['remark'] + '&apos;' + ',' + '&apos;' + row['parameter_value_code'] + '&apos;' + ')" data-toggle="modal" data-target="#model_parameter_value" href="javascript:void(0);" class="btn btn-sm btn-white text-success mr-2"><i class="far fa-edit mr-1"></i> Edit</a>';
                  action_btn += '<a onclick="functions.Delete_ParameterValue(' + row['id'] + ')" href="javascript:void(0);" data-toggle="modal" data-target="#deleteModal" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
                  return action_btn;
                }
              }, {
                "bSortable": false,
                "targets": [1, 5, 6, 7, 8, 9]
              }],
              "sPaginationType": "full_numbers",
              "bProcessing": true,
              "bServerSide": true,
              "ajax": {
                "type": "POST",
                "url": link,
                'data': {
                  'parameter_type_id': $("#filter_parameter_type").val(),
                  'parameter_value': $("#filter_parameter_value").val(),
                  'is_active': $("#filter_status").val()
                },
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
      }, {
        key: "FilterSearch",
        value: function FilterSearch() {
          $('body, .filter-src-backdroup').removeClass('filter-pop-open');
          this.DatatableList();
        }
      }, {
        key: "FilterReset",
        value: function FilterReset() {
          $(".filter-src-main input[type='text']").val("");
          $(".filter-src-main select").val('').trigger("change");
          $('body, .filter-src-backdroup').removeClass('filter-pop-open');
          this.DatatableList();
        }
      }]);

      return ParametervalueComponent;
    }();

    ParametervalueComponent.ɵfac = function ParametervalueComponent_Factory(t) {
      return new (t || ParametervalueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["EnDeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_5__["alertsService"]));
    };

    ParametervalueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ParametervalueComponent,
      selectors: [["app-parametervalue"]],
      decls: 169,
      vars: 2,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "col-auto"], ["title", "Add category", "data-toggle", "modal", "data-target", "#model_parameter_value", "href", "javascript:void(0);", 1, "btn", "btn-primary", "mr-1", 3, "click"], [1, "fas", "fa-plus"], ["href", "javascript:void(0);", "id", "filter_search", 1, "btn", "btn-primary", "filter-btn"], [1, "fas", "fa-filter"], [1, "filter-src-main"], [1, "filter-src-heading"], [1, "filter-src-close"], [1, "fas", "fa-times"], [1, "filter-src-inner"], [1, "filter-src-row"], [1, "form-group"], ["id", "filter_parameter_type", 1, "select", "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "filter_parameter_value", "type", "text", 1, "form-control"], ["id", "filter_status", 1, "select", "form-control"], ["value", "1"], ["value", "0"], [1, "filter-footer-fix", "row", "m-0"], ["type", "button", 1, "btn", "btn-block", "btn-outline-primary", "active", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger", "active", 3, "click"], [1, "filter-src-backdroup"], [1, "row"], [1, "col-sm-12"], [1, "card", "card-table"], [1, "card-body"], [1, "table-responsive", "table-main"], ["id", "DataTableList", 1, "table", "table-center", "table-hover", "datatable"], [1, "thead-light"], ["id", "model_parameter_value", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "parameter_title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "parameter_value_id", "type", "hidden", 1, "form-control"], [1, "col-md-6"], [1, "text-danger"], ["id", "parameter_type_id", 1, "select", "form-control"], ["id", "parameter_value", "type", "text", 1, "form-control"], ["id", "sequence_no", "type", "text", 1, "form-control", "OnlyNumber"], ["id", "remark", 1, "form-control"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "click"], ["id", "deleteModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-title"], [1, "message"], [1, "col-sm-6"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-danger", "active"], ["type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-success", "active", 3, "click"], ["id", "statusModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], [3, "value"]],
      template: function ParametervalueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_a_click_14_listener() {
            return ctx.ParameterValue_Model(0, "", "", "", "", "", "");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Category Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Category Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ParametervalueComponent_option_32_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Category Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_button_click_51_listener() {
            return ctx.FilterSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_button_click_54_listener() {
            return ctx.FilterReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "thead", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Category Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Value Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Category Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Accepted Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Seq.No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "h5", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Category Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Select Category Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ParametervalueComponent_option_106_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Category Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Sequence Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Remark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "textarea", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_button_click_127_listener() {
            return ctx.Add_Parameter_Value();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Are you sure you want to delete record?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_button_click_147_listener() {
            return ctx.DeleteConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Are you sure you want to change status?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParametervalueComponent_Template_button_click_167_listener() {
            return ctx.Change_Status();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parameterTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parameterTypeList);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3BhcmFtZXRlcnZhbHVlL3BhcmFtZXRlcnZhbHVlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    ParametervalueComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ParametervalueComponent,
      factory: ParametervalueComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametervalueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-parametervalue',
          templateUrl: './parametervalue.component.html',
          styleUrls: ['./parametervalue.component.scss']
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
  "./src/app/parametervalue/parametervalue.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/parametervalue/parametervalue.module.ts ***!
    \*********************************************************/

  /*! exports provided: ParametervalueModule */

  /***/
  function srcAppParametervalueParametervalueModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParametervalueModule", function () {
      return ParametervalueModule;
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


    var _parametervalue_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parametervalue-routing.module */
    "./src/app/parametervalue/parametervalue-routing.module.ts");
    /* harmony import */


    var _parametervalue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./parametervalue.component */
    "./src/app/parametervalue/parametervalue.component.ts");

    var ParametervalueModule = function ParametervalueModule() {
      _classCallCheck(this, ParametervalueModule);
    };

    ParametervalueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ParametervalueModule
    });
    ParametervalueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ParametervalueModule_Factory(t) {
        return new (t || ParametervalueModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametervalue_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParametervalueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ParametervalueModule, {
        declarations: [_parametervalue_component__WEBPACK_IMPORTED_MODULE_4__["ParametervalueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametervalue_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParametervalueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParametervalueModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_parametervalue_component__WEBPACK_IMPORTED_MODULE_4__["ParametervalueComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _parametervalue_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParametervalueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=parametervalue-parametervalue-module-es5.js.map