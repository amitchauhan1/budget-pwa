function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learnlibrary-learnlibrary-module"], {
  /***/
  "./src/app/entities/guid.ts":
  /*!**********************************!*\
    !*** ./src/app/entities/guid.ts ***!
    \**********************************/

  /*! exports provided: Guid */

  /***/
  function srcAppEntitiesGuidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Guid", function () {
      return Guid;
    });

    var Guid = /*#__PURE__*/function () {
      function Guid() {
        _classCallCheck(this, Guid);
      }

      _createClass(Guid, null, [{
        key: "newGuid",
        value: function newGuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }]);

      return Guid;
    }();
    /***/

  },

  /***/
  "./src/app/entities/uploader.ts":
  /*!**************************************!*\
    !*** ./src/app/entities/uploader.ts ***!
    \**************************************/

  /*! exports provided: Uploader */

  /***/
  function srcAppEntitiesUploaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Uploader", function () {
      return Uploader;
    });

    var Uploader = function Uploader() {
      _classCallCheck(this, Uploader);

      this.queue = [];
    };
    /***/

  },

  /***/
  "./src/app/entities/uploadqueue.ts":
  /*!*****************************************!*\
    !*** ./src/app/entities/uploadqueue.ts ***!
    \*****************************************/

  /*! exports provided: UploadQueue */

  /***/
  function srcAppEntitiesUploadqueueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadQueue", function () {
      return UploadQueue;
    });
    /* harmony import */


    var _entities_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../entities/guid */
    "./src/app/entities/guid.ts");
    /**
     * Represents an UploadQueue
     */


    var UploadQueue = /*#__PURE__*/function () {
      function UploadQueue(file) {
        _classCallCheck(this, UploadQueue);

        this.file = file;
        this.progress = 0;
        this.id = _entities_guid__WEBPACK_IMPORTED_MODULE_0__["Guid"].newGuid();
        this.message = '';
        this.isCancel = false;
        this.isError = false;
      }

      _createClass(UploadQueue, [{
        key: "isSuccess",
        get: function get() {
          if (this.progress == 100) return true;
          return false;
        }
      }]);

      return UploadQueue;
    }();
    /***/

  },

  /***/
  "./src/app/learnlibrary/learnlibrary-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/learnlibrary/learnlibrary-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: LearnLibraryRoutingModule */

  /***/
  function srcAppLearnlibraryLearnlibraryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearnLibraryRoutingModule", function () {
      return LearnLibraryRoutingModule;
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


    var _learnlibrary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./learnlibrary.component */
    "./src/app/learnlibrary/learnlibrary.component.ts");

    var routes = [{
      path: '',
      component: _learnlibrary_component__WEBPACK_IMPORTED_MODULE_2__["LearnLibraryComponent"]
    }];

    var LearnLibraryRoutingModule = function LearnLibraryRoutingModule() {
      _classCallCheck(this, LearnLibraryRoutingModule);
    };

    LearnLibraryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LearnLibraryRoutingModule
    });
    LearnLibraryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LearnLibraryRoutingModule_Factory(t) {
        return new (t || LearnLibraryRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearnLibraryRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnLibraryRoutingModule, [{
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
  "./src/app/learnlibrary/learnlibrary.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/learnlibrary/learnlibrary.component.ts ***!
    \********************************************************/

  /*! exports provided: LearnLibraryComponent */

  /***/
  function srcAppLearnlibraryLearnlibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearnLibraryComponent", function () {
      return LearnLibraryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/api-service */
    "./src/app/_services/api-service.ts");
    /* harmony import */


    var _entities_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../entities/uploader */
    "./src/app/entities/uploader.ts");
    /* harmony import */


    var _entities_uploadqueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../entities/uploadqueue */
    "./src/app/entities/uploadqueue.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_helper */
    "./src/app/_helper/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function LearnLibraryComponent_div_33_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnLibraryComponent_div_33_tr_21_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.uploadVideo(item_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.file.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, item_r2.file.size / 1024 / 1024), " MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r2.progress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.progress, "%");
      }
    }

    function LearnLibraryComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnLibraryComponent_div_33_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.uploadAllVideo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Upload All ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Video Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LearnLibraryComponent_div_33_tr_21_Template, 19, 11, "tr", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.VideoUploader.queue);
      }
    }

    var LearnLibraryComponent = /*#__PURE__*/function () {
      function LearnLibraryComponent(formBuilder, sanitizer, activatedRoute, EnDeService, route, http, Router, loader, alert) {
        _classCallCheck(this, LearnLibraryComponent);

        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.EnDeService = EnDeService;
        this.route = route;
        this.http = http;
        this.Router = Router;
        this.loader = loader;
        this.alert = alert;
        this.isGrid1 = "0";
        this.isVisible = "false";
        this.upload = new _entities_uploader__WEBPACK_IMPORTED_MODULE_3__["Uploader"]();
        this.uploader = new _entities_uploader__WEBPACK_IMPORTED_MODULE_3__["Uploader"]();
        this.VideoUpload = new _entities_uploader__WEBPACK_IMPORTED_MODULE_3__["Uploader"]();
        this.VideoUploader = new _entities_uploader__WEBPACK_IMPORTED_MODULE_3__["Uploader"]();
        this.message = '';
      }

      _createClass(LearnLibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var component = this;
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
            } else {
              $(this).parents(".file-upload").addClass('active');
              $(this).parent().find(".noFile").text(imagename.replace("C:\\fakepath\\", ""));
            }
          });
        }
      }, {
        key: "getPlan",
        value: function getPlan() {
          var _this = this;

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].Learn_Library_Datatable;
          var form = new FormData();
          var headers = {
            'Authorization': 'Bearer ' + this.itemdata.access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this.loader.hideLoader();

            _this.result = res;
            console.log(res);

            if (_this.result.success == true) {
              var res = _this.result.data;
            } else if (_this.result.success == false) {
              _this.alert.showAlerts("Error", _this.result.message, "error");
            }
          }, function (err) {
            _this.loader.hideLoader();

            _this.alert.showAlerts("Error", err.error.message, "error");
          });
        }
      }, {
        key: "Delete_Video",
        value: function Delete_Video(learn_library_id) {
          this.learn_library_id = learn_library_id;
        }
      }, {
        key: "DeleteConfirm",
        value: function DeleteConfirm() {
          var _this2 = this;

          this.loader.showLoader();
          var form = new FormData();

          if (this.learn_library_id != '') {
            form.append('learn_library_id', this.learn_library_id);
            var link = _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].Delete_Learn_Video;
            var headers = {
              'Authorization': 'Bearer ' + this.itemdata.access_token
            };
            this.http.post(link, form, {
              headers: headers
            }).subscribe(function (res) {
              _this2.loader.hideLoader();

              _this2.result = res;
              $('#deleteModal, .close').click();

              if (_this2.result.success == true) {
                _this2.alert.showAlerts("", _this2.result.message, "success");

                _this2.DatatableList();
              } else if (_this2.result.success == false) {
                _this2.alert.showAlerts("Error", _this2.result.message, "error");
              }
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
          } else {
            this.loader.hideLoader();
            this.alert.showAlerts("Error", "Something went wrong", "error");
          }
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event) {
          var component = this;
          this.isVisible = 'true';
          var eventObj = event;
          var target = eventObj.target;
          this.videofiles = target.files;
          var filename = new Array();

          var _iterator = _createForOfIteratorHelper(this.videofiles),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _file = _step.value;
              filename.push(_file);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (this.videofiles) {
            var _iterator2 = _createForOfIteratorHelper(this.videofiles),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var file = _step2.value;
                this.VideoUpload.queue.push(new _entities_uploadqueue__WEBPACK_IMPORTED_MODULE_4__["UploadQueue"](file));

                if (this.VideoUpload.queue.length <= 50) {
                  // if (file.size <= 12582912) {
                  this.VideoUploader.queue.push(new _entities_uploadqueue__WEBPACK_IMPORTED_MODULE_4__["UploadQueue"](file)); // } 
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
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this.isGrid1 == '0') {
              this.isGrid1 = '1';
              component.ngAfterViewInit();
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "uploadAllVideo",
        value: function uploadAllVideo() {
          var remainingFiles = this.VideoUploader.queue.filter(function (s) {
            return !s.isSuccess;
          });

          var _iterator3 = _createForOfIteratorHelper(remainingFiles),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;
              this.uploadVideo(item.id);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "uploadVideo",
        value: function uploadVideo(id) {
          var _this3 = this;

          if (id == null) {
            return;
          }

          var selectedFile = this.VideoUploader.queue.find(function (s) {
            return s.id == id;
          });
          var formData = new FormData();

          if (selectedFile) {
            formData.append('selectVideo', selectedFile.file);
            var link = _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].UploadVideo;
            var headers = {
              'Authorization': 'Bearer ' + this.itemdata.access_token
            };
            var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', link, formData, {
              reportProgress: true
            }); // this.http.post<any>(link, formData, { reportProgress: true,headers }).subscribe(

            this.http.request(uploadReq).subscribe(function (event) {
              _this3.result = event['body'];

              _this3.loader.hideLoader();

              if (_this3.result != undefined) {
                if (_this3.result.success == true) {
                  $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-success-light">' + _this3.result.message + '</span>');
                  $('.' + id + ' .uploadbtn').html('-');

                  _this3.DatatableList();
                } else if (_this3.result.success == false) {
                  $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-danger-light">' + _this3.result.message + '</span>');
                  $('.' + id + ' .uploadbtn').html('-');
                }
              }

              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-warning-light">processing...</span>');
                $('.' + id + ' .uploadbtn').html('-');
                selectedFile.progress = Math.round(100 * event.loaded / event.total);
              } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                selectedFile.message = event.body.toString();
              }
            }, function (err) {
              _this3.loader.hideLoader();

              $('.' + id + ' .FileStatus').html('<span class="badge badge-pill bg-danger-light">Something went wrong</span>');
              $('.' + id + ' .uploadbtn').html('-');
            });
          }
        }
      }, {
        key: "DatatableList",
        value: function DatatableList() {
          var access_token = this.itemdata.access_token;
          var user_id = this.itemdata.user_id;
          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"].Learn_Library_Datatable;
          setTimeout(function () {
            $("#DataTableList").DataTable().destroy();
            var table = $('#DataTableList').DataTable({
              "lengthMenu": [[20, 40, 60, 80, 100], [20, 40, 60, 80, 100]],
              scrollX: true,
              "sScrollY": $(window).height() - 360,
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
                "sProcessing": 'loading...'
              },
              columnDefs: [{
                targets: [0],
                render: function render(data, type, row) {
                  if (row['videoLink'] != null && row['videoLink'] != '') {
                    return '<video width="50%" src="' + row['videoLink'] + '" controls muted loop></video>';
                  }

                  return '<div class="avatar"><img  class="avatar-img rounded border border-white" alt="User Image" src="assets/img/no-image-found.png"></div>';
                }
              }, {
                targets: [1],
                render: function render(data, type, row) {
                  return row['file_name'];
                }
              }, {
                targets: [2],
                render: function render(data, type, row) {
                  return row['created_at'];
                }
              }, {
                targets: [3],
                render: function render(data, type, row) {
                  var action_btn = '';
                  action_btn += '<a onclick="functions.Delete_Video(' + row['id'] + ')" href="javascript:void(0);" data-toggle="modal" data-target="#deleteModal" class="btn btn-sm btn-white text-danger mr-2"><i class="far fa-trash-alt mr-1"></i>Delete</a>';
                  return action_btn;
                }
              }, {
                "bSortable": false,
                "targets": [0, 1, 3]
              }],
              "sPaginationType": "full_numbers",
              "bProcessing": true,
              "bServerSide": true,
              "ajax": {
                "type": "POST",
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

      return LearnLibraryComponent;
    }();

    LearnLibraryComponent.ɵfac = function LearnLibraryComponent_Factory(t) {
      return new (t || LearnLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_8__["EnDeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_8__["alertsService"]));
    };

    LearnLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LearnLibraryComponent,
      selectors: [["app-learnlibrary"]],
      decls: 70,
      vars: 2,
      consts: [[1, "page-wrapper"], [1, "content", "container-fluid"], [1, "page-header"], [1, "row", "align-items-center"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/dashboard"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-12", "col-md-7", "col-lg-4", "d-flex"], [1, "card", "flex-fill", "bg-white"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "card-textLibrary"], [1, "file-upload"], [1, "slt-file-text"], [1, "file-select"], [1, "file-select-button", "fileName"], [1, "file-select-name"], ["type", "file", "id", "videofile", "uploader", "uploader", "multiple", "", "accept", ".mp4", 1, "chooseFile", 3, "change"], ["id", "result"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], [1, "card", "card-table"], [1, "table-responsive", "table-main"], ["id", "DataTableList", 1, "table", "table-center", "table-hover", "datatable"], [1, "thead-light"], ["id", "deleteModal", "role", "dialog", "data-backdrop", "static", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "message"], [1, "submit-section"], [1, "col-sm-6"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-danger", "active"], ["type", "button", 1, "btn", "btn-block", "btn-rounded", "btn-outline-success", "active", 3, "click"], [1, "text-right"], ["title", "Add Learn", "href", "javascript:void(0);", 1, "btn", "btn-outline-info", "mr-1", 3, "click"], ["id", "video-table", 1, "table", "table-center", "table-hover"], ["ng-show", "VideoUploader.isHTML5"], ["width", "50%", "ng-show", "VideoUploader.isHTML5"], ["width", "10%"], [3, "class", 4, "ngFor", "ngForOf"], ["ng-show", "VideoUploader.isHTML5", "ng-thumb", "{ file: item._file, height: 100 }"], ["ng-show", "VideoUploader.isHTML5", "nowrap", ""], [1, "progress", 2, "margin-bottom", "0"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", 3, "ngStyle"], [2, "color", "#fff"], [1, "text-center", "FileStatus"], [1, "badge", "badge-pill", "bg-warning-light"], ["nowrap", "", 1, "uploadbtn"], ["type", "button", "ng-disabled", "item.isReady || item.isUploading || item.isSuccess", 1, "btn", "btn-block", "btn-outline-info", "active", 3, "click"]],
      template: function LearnLibraryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Video Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Video Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "UPLOAD VIDEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please choose a video to upload. Only MP4 format will be Supported. Please choose your video with any of these format.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select your file :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Choose File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LearnLibraryComponent_Template_input_change_30_listener($event) {
            return ctx.onSelectChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LearnLibraryComponent_div_33_Template, 22, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "File Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Upload Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Confirmation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Are you sure you want to delete record?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnLibraryComponent_Template_button_click_68_listener() {
            return ctx.DeleteConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Yes");

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Files : ", ctx.VideoUploader.queue.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible === "true");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJubGlicmFyeS9sZWFybmxpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    LearnLibraryComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LearnLibraryComponent,
      factory: LearnLibraryComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnLibraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-learnlibrary',
          templateUrl: './learnlibrary.component.html',
          styleUrls: ['./learnlibrary.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_8__["EnDeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_8__["alertsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/learnlibrary/learnlibrary.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/learnlibrary/learnlibrary.directive.ts ***!
    \********************************************************/

  /*! exports provided: DndDirective */

  /***/
  function srcAppLearnlibraryLearnlibraryDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DndDirective", function () {
      return DndDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DndDirective = /*#__PURE__*/function () {
      function DndDirective() {
        _classCallCheck(this, DndDirective);

        this.allowed_extensions = [];
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filesInvalidEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = '#eee';
      }

      _createClass(DndDirective, [{
        key: "onDragOver",
        value: function onDragOver(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#999';
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#eee';
        }
      }, {
        key: "onDrop",
        value: function onDrop(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#eee';
          var files = evt.dataTransfer.files;
          var valid_files = [];
          var invalid_files = [];

          if (files.length > 0) {
            var _iterator4 = _createForOfIteratorHelper(files),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var file = _step4.value;
                var ext = file.name.split('.')[file.name.split('.').length - 1];

                if (this.allowed_extensions.lastIndexOf(ext) != -1) {
                  valid_files.push(file);
                } else {
                  invalid_files.push(file);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            ;
            this.filesChangeEmiter.emit(valid_files);
            this.filesInvalidEmiter.emit(invalid_files);
          }
        }
      }]);

      return DndDirective;
    }();

    DndDirective.ɵfac = function DndDirective_Factory(t) {
      return new (t || DndDirective)();
    };

    DndDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DndDirective,
      selectors: [["", "appDnd", ""]],
      hostVars: 2,
      hostBindings: function DndDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DndDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function DndDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function DndDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      inputs: {
        allowed_extensions: "allowed_extensions"
      },
      outputs: {
        filesChangeEmiter: "filesChangeEmiter",
        filesInvalidEmiter: "filesInvalidEmiter"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DndDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDnd]'
        }]
      }], function () {
        return [];
      }, {
        allowed_extensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filesChangeEmiter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        filesInvalidEmiter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.background']
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/learnlibrary/learnlibrary.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/learnlibrary/learnlibrary.module.ts ***!
    \*****************************************************/

  /*! exports provided: LearnLibraryModule */

  /***/
  function srcAppLearnlibraryLearnlibraryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearnLibraryModule", function () {
      return LearnLibraryModule;
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


    var _learnlibrary_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./learnlibrary-routing.module */
    "./src/app/learnlibrary/learnlibrary-routing.module.ts");
    /* harmony import */


    var _learnlibrary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./learnlibrary.component */
    "./src/app/learnlibrary/learnlibrary.component.ts");
    /* harmony import */


    var _learnlibrary_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./learnlibrary.directive */
    "./src/app/learnlibrary/learnlibrary.directive.ts");

    var LearnLibraryModule = function LearnLibraryModule() {
      _classCallCheck(this, LearnLibraryModule);
    };

    LearnLibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LearnLibraryModule
    });
    LearnLibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LearnLibraryModule_Factory(t) {
        return new (t || LearnLibraryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learnlibrary_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearnLibraryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearnLibraryModule, {
        declarations: [_learnlibrary_component__WEBPACK_IMPORTED_MODULE_4__["LearnLibraryComponent"], _learnlibrary_directive__WEBPACK_IMPORTED_MODULE_5__["DndDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learnlibrary_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearnLibraryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnLibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_learnlibrary_component__WEBPACK_IMPORTED_MODULE_4__["LearnLibraryComponent"], _learnlibrary_directive__WEBPACK_IMPORTED_MODULE_5__["DndDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _learnlibrary_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearnLibraryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=learnlibrary-learnlibrary-module-es5.js.map