function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserComponent-progresspanel2-progresspanel2-module"], {
  /***/
  "./src/app/UserComponent/progresspanel2/progresspanel2-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/UserComponent/progresspanel2/progresspanel2-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: Progresspanel2RoutingModule */

  /***/
  function srcAppUserComponentProgresspanel2Progresspanel2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Progresspanel2RoutingModule", function () {
      return Progresspanel2RoutingModule;
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


    var _progresspanel2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./progresspanel2.component */
    "./src/app/UserComponent/progresspanel2/progresspanel2.component.ts");

    var routes = [{
      path: '',
      component: _progresspanel2_component__WEBPACK_IMPORTED_MODULE_2__["Progresspanel2Component"]
    }];

    var Progresspanel2RoutingModule = function Progresspanel2RoutingModule() {
      _classCallCheck(this, Progresspanel2RoutingModule);
    };

    Progresspanel2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Progresspanel2RoutingModule
    });
    Progresspanel2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Progresspanel2RoutingModule_Factory(t) {
        return new (t || Progresspanel2RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Progresspanel2RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Progresspanel2RoutingModule, [{
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
  "./src/app/UserComponent/progresspanel2/progresspanel2.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/UserComponent/progresspanel2/progresspanel2.component.ts ***!
    \**************************************************************************/

  /*! exports provided: Progresspanel2Component */

  /***/
  function srcAppUserComponentProgresspanel2Progresspanel2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Progresspanel2Component", function () {
      return Progresspanel2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../_services/api-service */
    "./src/app/_services/api-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_helper */
    "./src/app/_helper/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    function Progresspanel2Component_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.step1Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.step1Data.description, " ");
      }
    }

    function Progresspanel2Component_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "video", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.step1CSS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.step1ProgressText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.step1Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.step2Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_12_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.step2Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.step2Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.step2Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_54_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r12.step3Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_54_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.step3Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.step3Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.step3Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_98_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r13.step4Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_98_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.step4Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.step4Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.step4Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_119_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r14.step5Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_119_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.step5Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.step5Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.step5Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_143_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r15.step6Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_143_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.step6Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.step6Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.step6Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_187_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r16.step7Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_187_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_187_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.step7Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.step7Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.step7Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_div_208_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r17.step8Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_27_div_208_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_27_div_208_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.step8Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.step8Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.step8Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "02");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Progresspanel2Component_div_27_div_12_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Emergency Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Your Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "03");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, Progresspanel2Component_div_27_div_54_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Step 3 Completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total Debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor sit amet, consectetur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " adipiscing elit, sed do eiusmod tempor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Debt Snowball");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Paid off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "04");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, Progresspanel2Component_div_27_div_98_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Amount to keep aside:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Add Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, Progresspanel2Component_div_27_div_119_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Percentage to keep aside");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Add Percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "06");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, Progresspanel2Component_div_27_div_143_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Currently in Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Children and Studies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Lorem ipsum dolor sit amet, consectetur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " adipiscing elit, sed do eiusmod tempor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Your Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "07");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, Progresspanel2Component_div_27_div_187_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Amount to keep aside:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Add Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "08");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, Progresspanel2Component_div_27_div_208_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h2", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Share with others and ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " create something ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " of value.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h3", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Enjoy life without worrying about ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " money ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step2Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.step2CSS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.step2ProgressText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r2.emergencyFund, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r2.efPercent)("backgroundColor", ctx_r2.innerStrokeProgress)("innerStrokeColor", ctx_r2.innerStrokeProgress)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r2.savedTotalEF, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r2.leftTotalEF, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step3Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r2.totalDebt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r2.debtPercent)("backgroundColor", ctx_r2.innerStrokeCompleted)("innerStrokeColor", ctx_r2.innerStrokeCompleted)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r2.paidOffDebt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.debtTypeTotalCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step4Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step5Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step6Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r2.childrenAndStudies, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r2.csPercent)("backgroundColor", ctx_r2.innerStrokeProgress)("innerStrokeColor", ctx_r2.innerStrokeProgress)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r2.savedCS, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r2.leftCS, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step7Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.step8Data != null);
      }
    }

    function Progresspanel2Component_div_28_div_11_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r25.step2Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_11_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.step2Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r18.step2Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.step2Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_53_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r26.step3Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_53_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.step3Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.step3Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.step3Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_97_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r27.step4Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_97_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.step4Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.step4Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.step4Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_157_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r29.step5Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_157_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r30.step5Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_157_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Progresspanel2Component_div_28_div_157_div_5_div_1_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Progresspanel2Component_div_28_div_157_div_5_div_2_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.userPlan == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.userPlan == 2);
      }
    }

    function Progresspanel2Component_div_28_div_157_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_157_div_5_Template, 3, 2, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.step5Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r21.step5Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.step5Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_206_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r31.step6Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_206_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_206_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.step6Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.step6Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.step6Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_250_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r32.step7Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_250_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_250_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.step7Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.step7Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.step7Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_div_271_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r33.step8Data.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function Progresspanel2Component_div_28_div_271_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Progresspanel2Component_div_28_div_271_div_5_Template, 2, 1, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.step8Data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.step8Data.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.step8Data.video_url != null);
      }
    }

    function Progresspanel2Component_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "02");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Progresspanel2Component_div_28_div_11_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Emergency Fund");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Your Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "03");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, Progresspanel2Component_div_28_div_53_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Step 3 Completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total Debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " adipiscing elit, sed do eiusmod tempor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Debt Snowball");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Paid off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Debt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "04");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, Progresspanel2Component_div_28_div_97_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Save 3-6 Months of Expenses ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Once you complete the first three Baby Steps, you\u2019ll have some serious momentum. But don\u2019t start throwing all your \u201Cextra\u201D money into investments quite yet.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Set your saving goal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "header", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Save 3-6 Months Expenses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Savings Goal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "How much is 3-6 months of expenses for you? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "label", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Starting Balance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "The balance at the start of the month.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Goal Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, Progresspanel2Component_div_28_div_157_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Save 15% for Retirement ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "When you reach this step, you\u2019ll have a fully funded emergency fund and no payments except for the house. Now it\u2019s time to get serious about building wealth. Start investing 15% of your income for retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "label", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Start to planning ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "label", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "header", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Save For Retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Savings Goal For Retirement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Goal Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "06");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, Progresspanel2Component_div_28_div_206_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Currently in Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h3", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Children and Studies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h4", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Lorem ipsum dolor sit amet, consectetur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " adipiscing elit, sed do eiusmod tempor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "incididunt ut labore et dolore magna aliqua.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Your Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "circle-progress", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "07");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, Progresspanel2Component_div_28_div_250_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Amount to keep aside:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Add Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "08");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](271, Progresspanel2Component_div_28_div_271_Template, 6, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Share with others and ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " create something ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " of value.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h3", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Enjoy life without worrying about ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " money ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step2Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.step2CSS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.step2ProgressText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r3.emergencyFund, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r3.efPercent)("backgroundColor", ctx_r3.innerStrokeProgress)("innerStrokeColor", ctx_r3.innerStrokeProgress)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r3.savedTotalEF, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PLN ", ctx_r3.leftTotalEF, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step3Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r3.totalDebt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r3.debtPercent)("backgroundColor", ctx_r3.innerStrokeCompleted)("innerStrokeColor", ctx_r3.innerStrokeCompleted)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r3.paidOffDebt, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.debtTypeTotalCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step4Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.step4CSS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.step4ProgressText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step5Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.step5CSS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.step5ProgressText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step6Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r3.childrenAndStudies, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", ctx_r3.csPercent)("backgroundColor", ctx_r3.innerStrokeProgress)("innerStrokeColor", ctx_r3.innerStrokeProgress)("animation", true)("animationDuration", 300)("startFromZero", true)("showInnerStroke", true)("titleFontSize", "12")("titleFontWeight", "900")("unitsFontSize", "12")("lazy", false)("showSubtitle", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r3.savedCS, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("z\u0142", ctx_r3.leftCS, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step7Data != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.step8Data != null);
      }
    }

    var Progresspanel2Component = /*#__PURE__*/function () {
      function Progresspanel2Component(route, http, Router, EnDeService, loader, alert) {
        _classCallCheck(this, Progresspanel2Component);

        this.route = route;
        this.http = http;
        this.Router = Router;
        this.EnDeService = EnDeService;
        this.loader = loader;
        this.alert = alert;
        this.auth_detail = JSON.parse(localStorage.getItem('ses_login_auth'));
        this.userPlan = this.auth_detail.data.user_plan;
        this.progressPanel2Response = false;
        this.allStepVisibleCSS = "paidVideoDisable";
        this.step1CSS = "step-banner pending";
        this.step1ProgressText = "Currently in Progress";
        this.step2CSS = "step-banner pending";
        this.step2ProgressText = "Currently in Progress";
        this.step3CSS = "step-banner pending";
        this.step3ProgressText = "Currently in Progress";
        this.step4CSS = "step-banner pending";
        this.step4ProgressText = "Currently in Progress";
        this.step5CSS = "step-banner pending";
        this.step5ProgressText = "Currently in Progress";
        this.step6CSS = "step-banner pending";
        this.step6ProgressText = "Currently in Progress";
        this.step7CSS = "step-banner pending";
        this.step7ProgressText = "Currently in Progress";
        this.step1Data = {};
        this.step2Data = {};
        this.step3Data = {};
        this.step4Data = {};
        this.step5Data = {};
        this.step6Data = {};
        this.step7Data = {};
        this.step8Data = {};
        this.innerStrokeCompleted = "#48ce65";
        this.innerStrokeProgress = "#2cb5ee";
        this.choosePlanURL = 'userPlan==1' ? '/app/progresspanel?chooseplan=choose-plan' : undefined;
      }

      _createClass(Progresspanel2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var component = this;
          var ses_login = localStorage.getItem('ses_singin');

          if (ses_login === null) {
            window.location.href = '/sign-in';
          }

          this.getProgressPanelData();
          $(document).ready(function () {
            $('#step1Video').on('ended', function () {
              if (component.step1Data.watch_videos_status == 0) {
                component.updateStep1VideoStatus();
              }
            });
          });
        }
      }, {
        key: "updateStep1VideoStatus",
        value: function updateStep1VideoStatus() {
          var _this = this;

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].updateStep1videoStatus;
          var form = new FormData();
          form.append('user_id', this.auth_detail.data.user_id);
          form.append('step', '1');
          form.append('status', '1');
          var access_token = this.auth_detail.data.access_token;
          var headers = {
            'Authorization': 'Bearer ' + access_token
          };
          this.http.post(link, form, {
            headers: headers
          }).subscribe(function (res) {
            _this.loader.hideLoader();

            if (res.success == true) {
              _this.allStepVisibleCSS = "";
              _this.step1CSS = "step-banner completed";
              _this.step1ProgressText = "Step 1 completed";
            }
          }, function (err) {
            _this.loader.hideLoader();

            _this.alert.showAlerts("Error", err.error.message, "error");
          });
        }
      }, {
        key: "getProgressPanelData",
        value: function getProgressPanelData() {
          var _this2 = this;

          var link = _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].service_url + _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"].getStepData;
          var access_token = this.auth_detail.data.access_token;
          var headers = {
            'Authorization': 'Bearer ' + access_token
          };
          var form = new FormData();
          this.http.get(link, {
            headers: headers
          }).subscribe(function (res) {
            var result = res;

            if (result.success == true) {
              _this2.loader.hideLoader();

              _this2.progressPanel2Response = true;
              var progressPanelResult = result.data;
              _this2.step1Data = progressPanelResult.find(function (obj) {
                return obj.step === 1;
              });
              _this2.step1CSS = _this2.step1Data.watch_videos_status == 1 ? "step-banner completed" : "step-banner pending";
              _this2.step1ProgressText = _this2.step1Data.watch_videos_status == 1 ? "Step 1 completed" : "Currently in Progress";
              _this2.allStepVisibleCSS = _this2.step1Data.watch_videos_status == 1 ? "" : "paidVideoDisable";
              _this2.step2Data = progressPanelResult.find(function (obj) {
                return obj.step === 2;
              });
              _this2.step3Data = progressPanelResult.find(function (obj) {
                return obj.step === 3;
              });
              _this2.step4Data = progressPanelResult.find(function (obj) {
                return obj.step === 4;
              });
              _this2.step5Data = progressPanelResult.find(function (obj) {
                return obj.step === 5;
              });
              _this2.step6Data = progressPanelResult.find(function (obj) {
                return obj.step === 6;
              });
              _this2.step7Data = progressPanelResult.find(function (obj) {
                return obj.step === 7;
              });
              _this2.step8Data = progressPanelResult.find(function (obj) {
                return obj.step === 8;
              });
              _this2.emergencyFund = 1000;
              _this2.savedTotalEF = 500;
              _this2.leftTotalEF = 500;
              _this2.debtTypeTotalCount = 5;
              _this2.totalDebt = 1000;
              _this2.paidOffDebt = 700;
              _this2.childrenAndStudies = 2000;
              _this2.savedCS = 1400;
              _this2.leftCS = 600;
              _this2.efPercent = 50;
              _this2.debtPercent = 100;
              _this2.csPercent = 60;
            } else if (result.success == false) {
              _this2.alert.showAlerts("Error", result.message, "error");
            }
          }, function (err) {
            _this2.progressPanel2Response = false;

            _this2.loader.hideLoader();

            _this2.alert.showAlerts("Error", err.error.message, "error");
          });
        }
      }]);

      return Progresspanel2Component;
    }();

    Progresspanel2Component.ɵfac = function Progresspanel2Component_Factory(t) {
      return new (t || Progresspanel2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_4__["EnDeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper__WEBPACK_IMPORTED_MODULE_4__["alertsService"]));
    };

    Progresspanel2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Progresspanel2Component,
      selectors: [["app-progresspanel2"]],
      decls: 52,
      vars: 7,
      consts: [[1, "budzet", "w-100", "d-inline-block", "align-top", "insight-pl"], [1, "container"], [1, "main-row", "w-100", "position-relative"], [1, "col-md-14", "insights-bgcolor"], [1, "row", "align-items-end"], [1, "col-14", "p-md-0", "order-lg-0", "order-2"], [1, "progress-panel", "insights-hero", "w-100", "d-inline-block"], [1, "insights-title", "text-white", "mt-0"], [1, "insights-subtitles"], [1, "col-12", "d-lg-none", "d-block"], [1, "insights-images", "mt-5"], ["src", "img/insights/hero-banner.png"], [1, "progress-main", "w-100", "d-inline-block", 2, "margin-top", "2rem"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6"], [1, "progress-box", "panel-step-padding"], [1, "progressnumber"], [1, "progress-title", "d-flex", "align-items-end", "m-0"], [1, "mb-0"], [4, "ngIf"], ["class", "col-md-5 order-md-2 mr-4", 4, "ngIf"], ["id", "paidPart"], [1, "footer", "footer-insights", "w-100", "d-inline-block"], [1, "d-flex", "justify-content-center", "list-unstyled"], ["href", "#"], [1, "border-shape"], ["routerLink", "/app/contact-us"], [1, "footer-bottom", "text-center", "mb-0"], [1, "panel-title"], [1, "panel-subtitles"], [1, "col-md-5", "order-md-2", "mr-4"], [1, "emergency-fund", "bg-white", "w-100", "d-inline-block"], [1, "panelbar2-card", 2, "margin-left", "3.5rem", "margin-bottom", "1.5rem"], ["id", "step1Video", "width", "350", "height", "250", "controls", "", 3, "src"], ["href", "/app/progresspanel?chooseplan=choose-plan"], [1, "progress-main", "w-100", "d-inline-block"], [1, "row", "justify-content-between", "align-items-start"], [1, "col-md-6", "order-md-2"], [1, "col-md-5"], [1, "panelbar2-card"], [1, "fund-title", "d-flex", "justify-content-between"], [1, "emergency-title", "m-0"], [1, "emergency-prise", "m-0"], [1, "text-justify"], [1, "eiusmod-title", "d-inline-block"], [1, "row", "align-items-center"], [1, "col-3"], [1, "emergrncy-progress"], [1, "circle__progress", 3, "percent", "backgroundColor", "innerStrokeColor", "animation", "animationDuration", "startFromZero", "showInnerStroke", "titleFontSize", "titleFontWeight", "unitsFontSize", "lazy", "showSubtitle"], [1, "col-2"], [1, "progress-title"], [1, "progress-subtitles", "border-0", "p-0", "mb-0"], [1, "col-2", "progress-line"], [1, "step-banner", "completed"], [1, "amount-form", "emergency-fund", "bg-white", "w-100", "d-inline-block"], ["for", "amount"], ["type", "text", "id", "amount", "name", "amount"], [1, "amount-btn"], [1, "percentage-input", "d-flex", "align-items-start"], [1, "step-banner", "pending"], [1, "progress-box"], [1, "about-money", "progress-main", "w-100", "d-inline-block", "bg-white"], [1, "progress-box", "mb-0", "bg-transparent"], [1, "something-value", "text-center"], [1, "something-title"], [1, "something-subtitle", "m-0"], ["class", "mt-3 ml-5", 4, "ngIf"], [1, "mt-3", "ml-5"], ["id", "step2Video", "width", "350", "height", "115", 3, "src"], ["id", "step3Video", "width", "350", "height", "115", 3, "src"], ["id", "step4Video", "width", "350", "height", "115", 3, "src"], ["id", "step5Video", "width", "350", "height", "115", 3, "src"], ["id", "step6Video", "width", "350", "height", "115", 3, "src"], ["id", "step7Video", "width", "350", "height", "115", 3, "src"], ["id", "step8Video", "width", "350", "height", "115", 3, "src"], [1, "crds"], ["type", "checkbox", "id", "card1", "aria-hidden", "true", 1, "more"], [1, "content"], [1, "front"], [1, "inner"], [1, "flipcard-text-align"], ["for", "card1", "aria-hidden", "true", 1, "button"], [1, "back"], ["for", "card1", "aria-hidden", "true", 1, "button", "return"], [1, "fas", "fa-arrow-left"], [1, "step-header"], [1, "header-category"], [1, "header-name"], [1, "step-body"], [1, "BudgetItemDetails-formContainer"], [1, "BudgetItemDetails-formRow"], [1, "BudgetItemDetails-formLabel"], ["for", "starting-balance", 1, "font-weight-bold"], [1, "BudgetItemDetails-formInput"], ["data-testid", "BudgetItemDetails_startingBalanceInput", "id", "starting-balance", "name", "starting-balance", "value", "$1,000.00", 1, "input--sm", "input--money", "text--right"], [1, "BudgetItemDetails-formRow", "BudgetItemDetails-formRow--noBorder"], ["for", "target-amount", 1, "font-weight-bold"], ["data-testid", "BudgetItemDetails_targetAmountInput", "id", "target-amount", "name", "target-amount", "value", "$5,000.00", 1, "input--sm", "input--money", "text--right"], [1, "BudgetItemDetails-formRow", "BudgetItemDetails-formRow--noBorder", "BudgetItemDetails-formRow--submitWrapper"], ["type", "button", "data-testid", "BudgetItemDetails_fundUpdateButton", 1, "rds-Button"], ["type", "checkbox", "id", "card2", "aria-hidden", "true", 1, "more"], ["for", "card2", "aria-hidden", "true", 1, "button"], ["for", "card2", "aria-hidden", "true", 1, "button", "return"], ["id", "step2Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step3Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step4Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step5Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step6Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step7Video", "width", "350", "height", "115", "controls", "", 3, "src"], ["id", "step8Video", "width", "350", "height", "115", "controls", "", 3, "src"]],
      template: function Progresspanel2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Progress Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Progresspanel2Component_div_24_Template, 5, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Progresspanel2Component_div_25_Template, 7, 5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Progresspanel2Component_div_27_Template, 221, 56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Progresspanel2Component_div_28_Template, 284, 64, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Terms of Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Subscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u24B8 StworzSwojBudzet, Inc. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step1Data != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step1Data != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.allStepVisibleCSS);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userPlan == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userPlan == 2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["CircleProgressComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXJDb21wb25lbnQvcHJvZ3Jlc3NwYW5lbDIvcHJvZ3Jlc3NwYW5lbDIuY29tcG9uZW50LnNjc3MifQ== */", "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');\n/* ======================================================\n\tContainer\n====================================================== */\n.container{\n\n\t\tmax-width: 1006px;\n\t}\nimg{\n\t\tmax-width: 100%;\n\t}\nbody,h1,h2,h3,h4,h5,h6,p,span,strong,a,div,input,button{\n\t\tcolor: #595959 ;\n\t\tfont-family: 'Outfit', sans-serif !important;\n\t}\na,a:hover{\n\t\ttext-decoration: none;\n\t}\n/* ======================================================\n\tSign_Up\n====================================================== */\n.sign-up{\n\t\tpadding: 98px 0 145px;\n\t}\n.signup-title{\n\t\tfont-size: 30px;\n\t\tline-height: 37px;\n\t\tcolor: #000;\n\t\tfont-weight: 600;\n\t\tmargin: 15px 0 18px;\n\t}\n.signup-subtitle{\n\t\tcolor: #868686;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 17px;\n\t\tmargin-bottom: 36px;\n\t}\n.signup-subtitle a{\n\t\tcolor: #5AC7F5;\n\t}\n.growup-imgage {\n\t    top: 0;\n\t    right: 0;\n\t    width: 50%;\n\t}\n.form-group {\n\t\tmargin-bottom: 0;\n\t}\n.sign-up .form-group input,\n\tinput#password{\n\t\tpadding: 16px;\n\t\tfont-size: 14px;\n\t\tline-height: 1;\n\t\tmargin-bottom: 18px;\n\t\tborder-radius: 8px;\n\t\tdisplay: inline-block;\n\t\tborder: 1px solid #9D9D9D;\n\t\tfont-family: 'Outfit', sans-serif;\n\t}\n.sign-up .form-group input::-webkit-input-placeholder,\n\tinput#password::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n\t  \tcolor: #868686;\n\t}\n.sign-up .form-group input::-moz-placeholder,\n\tinput#password::-moz-placeholder { /* Firefox 19+ */\n\t  \tcolor: #868686;\n\t}\n.sign-up .form-group input:-ms-input-placeholder,\n\tinput#password:-ms-input-placeholder { /* IE 10+ */\n\t  \tcolor: #868686;\n\t}\n.sign-up .form-group input:-moz-placeholder,\n\tinput#password:-moz-placeholder { /* Firefox 18- */\n\t  \tcolor: #868686;\n\t}\n.form-group label{\n\t\tfont-size: 14px;\n\t\tline-height: 16px;\n\t\tcolor: #5E6E8B;\n\t\tmargin-bottom: 5px;\n\t}\n.sign-up .form-group .form-control:focus,\n\t.ControlInput:invalid:not(:focus):not(:placeholder-shown),\n\t.form-control:focus{\n\t\tbox-shadow: 0 0 transparent;\n\t\tborder: 1px solid #5AC7F5;\n\t}\n.Form .btn.btn-success{\n\t\tfont-size: 16px;\n\t\tpadding: 17px 15px;\n\t\tbackground: #5AC7F5;\n\t\tborder-radius: 8px;\n\t\tline-height: 1;\n\t\tmargin-top: 50px;\n\t\tborder: 2px solid transparent;\n\t\ttransition: all 0.3s ease 0s;\n\t\twidth: 334px;\n\t}\n.Form .btn.btn-success:hover{\n\t\tcolor: #5AC7F5;\n\t\tborder: 2px solid #5AC7F5;\n\t\tbackground: transparent;\n\t}\n.Form {\n\t    width: 100%;\n\t    max-width: 400px;\n\t}\n.Form-title {\n\t    color: #00386a;\n\t    margin: 0 0 15px;\n\t}\n.Form-description {\n\t    color: rgba(109, 102, 101, 0.5);\n\t}\n.Form-fields {\n\t    display: flex;\n\t    flex-direction: column;\n\t}\n.Control-label {\n\t\tfont-size: 14px;\n\t\tline-height: 17px;\n\t    color: #5E6E8B;\n\t    line-height: 1;\n\t    margin-bottom: 5px;\n\t    transition: color 300ms ease;\n\t}\n.Control-requirements {\n\t    background: pink;\n\t    border-top: none;\n\t    margin: -14px 0 15px;\n\t    max-height: 0;\n\t    overflow: hidden;\n\t    transition: all 200ms ease;\n\t    padding: 0 9px;\n\t}\n.ControlInput {\n\t    border-radius: 8px;\n\t    box-shadow: 0 1px 3px rgba(197, 193, 192, 0) inset;\n\t    color: #6d6665;\n\t    margin: 0.8em 0;\n\t    border: 1px solid #c5c1c0;\n\t    padding: 0.6em 0.6em;\n\t    transition: box-shadow 300ms ease-out;\n\t}\n.ControlInput:hover {\n\t    box-shadow: 0 1px 3px rgba(197, 193, 192, 0.4) inset;\n\t}\n.ControlInput:focus {\n\t    outline: #5AC7F5 auto 3px;\n\t}\n.ControlInput:invalid:not(:focus):not(:-moz-placeholder-shown) {\n\t    border-color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:-ms-input-placeholder) {\n\t    border-color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:placeholder-shown) {\n\t    border-color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:-moz-placeholder-shown) + .Control-label {\n\t    color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:-ms-input-placeholder) + .Control-label {\n\t    color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:placeholder-shown) + .Control-label {\n\t    color: red;\n\t}\n.ControlInput:invalid:not(:focus):not(:-moz-placeholder-shown) + .Control-label + .Control-requirements {\n\t    max-height: 100px;\n\t    padding: 9px;\n\t    border: 1px solid red;\n\t}\n.ControlInput:invalid:not(:focus):not(:-ms-input-placeholder) + .Control-label + .Control-requirements {\n\t    max-height: 100px;\n\t    padding: 9px;\n\t    border: 1px solid red;\n\t}\n.ControlInput:invalid:not(:focus):not(:placeholder-shown) + .Control-label + .Control-requirements {\n\t    max-height: 100px;\n\t    padding: 9px;\n\t    border: 1px solid red;\n\t}\n.ControlInput:valid:not(:focus):not(:-moz-placeholder-shown) {\n\t    border-color: #5fa550;\n\t}\n.ControlInput:valid:not(:focus):not(:-ms-input-placeholder) {\n\t    border-color: #5fa550;\n\t}\n.ControlInput:valid:not(:focus):not(:placeholder-shown) {\n\t    border-color: #5fa550;\n\t}\n.ControlInput:valid:not(:focus):not(:-moz-placeholder-shown) + .Control-label {\n\t    color: #5fa550;\n\t}\n.ControlInput:valid:not(:focus):not(:-ms-input-placeholder) + .Control-label {\n\t    color: #5fa550;\n\t}\n.ControlInput:valid:not(:focus):not(:placeholder-shown) + .Control-label {\n\t    color: #5fa550;\n\t}\n.Control-requirements--email,\n\t.ControlInput--email {\n\t    order: -1;\n\t}\n.Control-label--email {\n\t    order: -2;\n\t}\n.ControlInput--password {\n\t    order: 0;\n\t    padding-right: 50px;\n\t}\n.Control-label--password {\n\t    margin-bottom: -29px;\n\t}\n.Control-label--showPassword {\n\t    width: 16px;\n\t    position: relative;\n\t    top: 46px;\n\t    left: 100%;\n\t    text-align: right;\n\t    margin-left: -32px;\n\t    cursor: pointer;\n\t}\n.Form-submit {\n\t    border: 1px solid #e7542b;\n\t    background-color: #e7542b;\n\t    border-radius: 3px;\n\t    color: #fff;\n\t    display: block;\n\t    width: 100%;\n\t    max-width: 100%;\n\t    pointer-events: none;\n\t    opacity: 0.6;\n\t    cursor: default;\n\t    transition: opacity 300ms ease-out, max-width 150ms ease-out;\n\t    outline: none;\n\t    position: relative;\n\t    margin: auto;\n\t}\n.Form-submit:hover {\n\t    background-color: #c83d17;\n\t}\n.Form-submit:active {\n\t    background-color: #9b2f11;\n\t    max-width: 50px;\n\t    overflow: hidden;\n\t    text-indent: 300px;\n\t}\n.Form-submit:active .Button-spinner {\n\t    opacity: 1;\n\t}\n.ControlInput--email:valid ~ .ControlInput--password:valid ~ .Form-submit {\n\t    cursor: pointer;\n\t    pointer-events: auto;\n\t    opacity: 1;\n\t}\n.Button-spinner {\n\t    position: absolute;\n\t    top: 50%;\n\t    left: 50%;\n\t    margin-left: -13px;\n\t    margin-top: -13px;\n\t    opacity: 0;\n\t}\n.show-password {\n\t    display: none;\n\t}\n.show-password:checked ~ .ControlInput--password {\n\t    text-security: disc;\n\t    -webkit-text-security: disc;\n\t    -moz-text-security: disc;\n\t}\n.show-password:checked ~ .Control-label--showPassword .svg-toggle-password .closed-eye {\n\t    opacity: 1;\n\t    transition: opacity 300ms ease, height 400ms ease;\n\t    width: 4px;\n\t    height: 44px;\n\t}\n.svg-toggle-password {\n\t    fill: #868686;\n\t}\n.svg-toggle-password .closed-eye {\n\t    opacity: 0;\n\t    height: 0;\n\t}\n.Button {\n\t    padding: 10px;\n\t    -webkit-user-select: none;\n\t    -moz-user-select: none;\n\t    user-select: none;\n\t}\n.spinner {\n\t    -webkit-animation: dash 2s linear infinite;\n\t    animation: dash 2s linear infinite;\n\t    -webkit-animation-direction: normal;\n\t    animation-direction: normal;\n\t}\n@-webkit-keyframes dash {\n\t    0% {\n\t        stroke-dashoffset: 0;\n\t        stroke-dasharray: 150.6 100.4;\n\t    }\n\t    50% {\n\t        stroke-dasharray: 1 250;\n\t    }\n\t    100% {\n\t        stroke-dashoffset: 502;\n\t        stroke-dasharray: 150.6 100.4;\n\t    }\n\t}\n@keyframes dash {\n\t    0% {\n\t        stroke-dashoffset: 0;\n\t        stroke-dasharray: 150.6 100.4;\n\t    }\n\t    50% {\n\t        stroke-dasharray: 1 250;\n\t    }\n\t    100% {\n\t        stroke-dashoffset: 502;\n\t        stroke-dasharray: 150.6 100.4;\n\t    }\n\t}\n@-webkit-keyframes spinner-in {\n\t    0% {\n\t        opacity: 0;\n\t    }\n\t    20%,\n\t    80% {\n\t        opacity: 1;\n\t    }\n\t    100% {\n\t        opacity: 0;\n\t    }\n\t}\n@keyframes spinner-in {\n\t    0% {\n\t        opacity: 0;\n\t    }\n\t    20%,\n\t    80% {\n\t        opacity: 1;\n\t    }\n\t    100% {\n\t        opacity: 0;\n\t    }\n\t}\n/* ======================================================\n\tSign_In\n====================================================== */\n.form-remember,\n\t.form-recovery{\n\t\tcolor: #5AC7F5;\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t\tmargin-bottom: 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n.form-recovery{\n\t\tcolor: #5AC7F5;\n\t}\n.sign-up .form-group .form-remember input{\n\t\tmargin-top: 1px;\n\t\tmargin-right: 6px;\n\t\tborder-right: 3px;\n\t\tborder: 1px solid #868686;\n\t}\n.form-group.checkbox{\n\t\tmargin-top: 8px;\n\t}\n/* ======================================================\n\tForgot_Password\n====================================================== */\n.return-btn{\n\t\ttext-decoration: underline;\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t\tcolor: #5AC7F5;\n\t\tfont-weight: 600;\n\t\tmargin-top: 15px;\n\t}\n.forgot-password{\n\t\tmargin: 0 auto;\n\t}\n.forgot-password .signup-subtitle{\n\t\tmargin: 23px auto 69px;\n\t}\n.conform-password .Control-label--password{\n\t\tmargin-top: 18px;\n\t}\n.reset-password\xA0.Control-label--password{\n\t\tmargin-bottom: -25px;\n\t}\n.Form-fields.conform-passwor .Control-label--password{\n\t\tmargin-top: 18px;\n\t}\n/* ======================================================\n\tHeader\n====================================================== */\n.marketplace{\n\t\t/* background: #F5FBFD; */\n\t\twidth: 100% !important;\n\t}\n.budzet .container,\n\t.budzet-header .container{\n\t\twidth: 100%;\n\t\tmax-width: 1366px;\n\t}\n.budzet-header{\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tpadding: 12px 0;\n\t\tbackground: #5AC7F5;\n\t\tbox-shadow: 0px 4px 14px 1px rgb(0 0 0 / 8%);\n\t\tz-index: 99999999;\n\t}\n.bd-sidebar {\n\t    float: left;\n\t    width: 16.66666667%;\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tflex-direction: column;\n\t\ttransition: width .2s ease-out,top .2s ease-out;\n\n\t}\n.navbar-brand img{\n\t\tmargin-left: 45px;\n\t}\n.bd-links ul li a {\n\t    font-size: 16px;\n\t    line-height: 17px;\n\t    font-weight: 500;\n\t    color: #595959;\n\t    margin-bottom: 30px;\n\t    display: inline-block;\n\t}\n.bd-links {\n\t\tpadding: 102px 0 0 32px;\n\t}\n.main-row:before {\n\t    content: '';\n\t    position: fixed;\n\t    top: 0;\n\t    bottom: 0;\n\t    left: 0;\n\t    right: 0;\n\t    width: 16.66666667%;\n\t    z-index: -1;\n\t    background: #FFF;\n\t    box-shadow: 0px 4px 14px 1px rgb(0 0 0 / 10%);\n\t}\n.money-market {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\twidth: 836.6px;\n\t\tmargin-top: 73px;\n\t\tz-index: 999999;\n\t\tbackground: #F5FBFD;\n\t\tmargin-left: 0px;\n\t}\n.buget-group {\n\t\tmargin-top: 14rem;\n\t\tmargin-left:50px;\n\t}\n.bd-links ul li a img{\n\t\tmargin-right: 15px;\n\t}\n.bd-links ul li a.active,\n\t.bd-links ul li a:hover{\n\t\tcolor: #5AC7F5;\n\t\tbackground: transparent;\n\t}\n/* ======================================================\n\tMoney_Market\n====================================================== */\n.money-market{\n\t\tpadding-top: 2rem;\n\t\tpadding-bottom: 2rem;\n\t\tpadding-left:50px;\n\t}\n.money-market h1{\n\t\tfont-weight: 600;\n\t\tfont-size: 30px;\n\t\tline-height: 37px;\n\t\tfont-family: 'Outfit', sans-serif;\n\t}\n.react-datepicker__input-container{\n\t\tposition: relative;\n\t\tz-index: 9999;\n\t}\n.datepicker-dropdown {\n\t\ttop:9rem !important;\n\t\tleft: 30rem !important;\n\t}\n.dateChangePicker-btn{\n\t\tpadding-top: 3px !important;\n\t\tfont-size: 14px !important;\n\t\tcolor:#5AC7F5;\n\t\tfont-weight: 500;\n\t}\n.react-datepicker__input-container:before{\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 16px;\n\t\tright: 8px;\n\t\twidth: 14px;\n\t\theight: 6px;\n\t\tdisplay: inline-block;\n\t\tbackground-image: url('drop_down.png');\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: contain;\n\t\tbackground-position: center;\n\t\tz-index: 99;\n\t}\n.money-market h1 span{\n\t\tfont-weight: 200;\n\t\tmargin-left: 3px;\n\t}\n.datepicker-title input{\n\t\tposition: relative;\n\t\tfont-size: 0;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\toutline: none;\n\t\tborder: 0;\n\t\ttop: -10px;\n\t\tcursor: pointer;\n\t\tbackground: transparent;\t\n\t}\n.prise-subtitles{\n\t\tfont-size: 16px;\n\t\tline-height: 20px;\n\t\tfont-weight: 600;\n\t}\n.prise-subtitles p{\n\t\tfont-weight: 200;\n\t}\n.transactions-btn span{\n\t\tfont-size: 1rem;\n\t\tline-height: 25px;\n\t}\n/* ======================================================\n\tIncome_Retailer\n====================================================== */\n.income-retailer{\n\t\tpadding: 17px 19px 37px 30px; \n\t\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 9px;\n\t}\n.ml-07{\n     margin-left:0.7rem !important;\n\t}\n.income-retailer-box{\n\tborder-top-left-radius: 0px !important;\n\tborder-top-right-radius: 0px !important;\t\n\t}\n.income-title{\n\t\tfont-size: 18px;\n\t\tline-height: 22px;\n\t\tmargin-bottom: 10px;\n\t}\n/* .custom-select {\n\t    position: relative;\n\t\tborder: 0;\n\t\tpadding: 0;\n\t\tbackground: none;\n\t    font-family: Arial !important;\n\t}\n\t.custom-select select {\n\t    display: none; \n\t} */\n/*Flip Div CSS Start*/\n.crds {\n\twidth: 100%;\n\theight: auto;\n  }\n.crds .content {\n\tposition: relative;\n\twidth: 100%;\n\theight: auto;\n\ttransform-style: preserve-3d;\n\ttransition: transform 0.7s;\n  }\n.more {\n\tdisplay: none;\n  }\n.more:checked ~ .content {\n\ttransform:rotateY(180deg)\n  }\n.front,\n  .back {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: auto;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\ttransform-style: preserve-3d;\n\tborder-radius: 19px;\n  }\n.front .inner,\n  .back .inner {\n\theight: auto;\n\ttransform-style: preserve-3d;\n\ttransition: transform 0.7s;\n  }\n.front {\n\tbackground: #fff;\n\tbox-shadow: 0px 0px 14px 1px rgb(0 0 0 / 10%);\n\tborder-radius: 19px;\n\tbackground-position: center center;\n  }\n.front:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: auto;\n\tdisplay: block;\n\tborder-radius: 6px;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tbox-shadow: 0px 0px 14px 1px rgb(0 0 0 / 10%);\n  }\n.front h2 {\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n\tcolor: rgb(68, 18, 18);\n\tfont-weight: 500;\n\ttext-shadow: 0 0 6px rgba(0, 0, 0, 0.1);\n  }\n.back {\n\ttransform: rotateY(180deg);\n\tbackground-color: #fff;\n\tborder-radius: 19px;\n\tbox-shadow: 0px 0px 14px 1px rgb(0 0 0 / 10%);\n  }\n.back .button {\n\tjustify-self: center;\n  }\n.button {\n\t/* grid-row: -1; */\n\tfont-size: 16px;\n    line-height: 1;\n    display: table;\n    margin: 0 auto;\n    padding: 10px 33px;\n    background: #5AC7F5;\n\tcolor: #fff !important;\n    border-radius: 8px;\n    transition: all 0.3s ease 0s;\n  }\n.button:hover {\n\tcolor: #5AC7F5 !important;\n    background: transparent;\n    border: 2px solid #5AC7F5\n  }\n.button.return {\n\tpadding: 5px 10px !important;\n\tcursor: pointer;\n    font-size: .875rem;\n    position: absolute;\n    right: 1.5rem;\n    top: 0.75rem;\n  }\n.step-header {\n    min-height: 4.875rem;\n    padding: 2.25rem 7.5rem 0.2rem 1.75rem;\n    position: static;\n    border-bottom: 1px solid #CFCFCF;\n}\n.header-category{\n\tfont-size: 1rem;\n    bottom: 1.3rem;\n    position: relative;\n }\n.header-name {\n    color: #39b9ef;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin: 0;\n    bottom: 1rem;\n    position: relative;\n}\n.step-body {\n    padding: 1.25rem 1.25rem 1rem 1.75rem;\n}\n.BudgetItemDetails-formContainer {\n    font-size: 1rem;\n    margin-top: 1rem;\n}\n.BudgetItemDetails-formRow {\n    min-height: 3.75rem;\n    padding-bottom: 0.5rem;\n    padding-top: 0.5rem;\n    position: relative;\n\tdisplay: flex;\n}\n.BudgetItemDetails-formLabel {\n    -webkit-box-flex: 0;\n    display: flex;\n    flex: 0 1 58.33333%;\n}\n.BudgetItemDetails-formLabel {\n    align-items: center;\n    line-height: 1.2;\n    position: relative;\n}\n.BudgetItemDetails-formLabel small {\n    color: #69757a;\n}\n.BudgetItemDetails-formRowAmount {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    align-items: flex-end;\n    justify-content: flex-end;\n}\n.flipcard-text-align{\n\tfont-size: 16px;\n\tline-height: 20px;\n\tfont-weight: 400;\n\tpadding-bottom: 40px;\n\tmargin-bottom: 20px;\n\tborder-bottom: 1px solid #CFCFCF;\n\ttext-align: justify !important;\n  }\n/*Flip Div CSS End*/\n.select-selected:after {\n\t    position: absolute;\n\t    content: \"\";\n\t    top: 11px;\n\t    right: 5px;\n\t    width: 8px;\n\t    height: 4px;\n\t    background-image: url('drop_down-1.png');\n\t    background-size: contain;\n\t    background-repeat: no-repeat;\n\t}\n.select-selected.select-arrow-active:after {\n\t    transform: rotate(180deg);\n\t}\n.monthly-details .custom-select .select-selected{\n\t\tborder: 0.5px solid #5AC7F5 !important;\n\t\tbackground-color: transparent;\n\t\tborder-radius: 2px;\n\t\tpadding: 4px 10px;\n\t\tfont-size: 12px;\n\t}\n.select-items div,\n\t.select-selected {\n\t\tfont-size: 14px;\n\t\tline-height: 15px;\n\t\tbackground: #FFF;\n\t    color: #595959;\n\t    padding: 8px 16px;\n\t    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n\t    cursor: pointer;\n\t    -webkit-user-select: none;\n\t       -moz-user-select: none;\n\t            user-select: none;\n\t}\n.select-items {\n\t    position: absolute;\n\t    top: 120%;\n\t    left: 0;\n\t    right: 0;\n\t    z-index: 99;\n\t    border: 0.5px solid #5AC7F5;\n\t}\n.select-hide {\n\t    display: none;\n\t}\n.monthly-details .custom-select{\n\t\twidth: 72px;\n\t\tfloat: left;\n\t\tmargin: 0 5px;\n\t\tborder: 0;\n\t\tpadding: 0;\n\t\tbackground: transparent;\n\t}\n.monthly-details .custom-select.custom-select1{\n\t    width: 157px;\n\t    float: left;\n\t\theight: auto;\n\t}\n.pay-text {\n\t    font-size: 14px;\n\t    line-height: 17px;\n\t    color: #595959;\n\t    padding-top: 10px;\n\t}\n.multi-field .remove-field {\n\t    top: auto;\n\t\tbottom: 1.6rem;\n    \tfont-size: 14px !important;\n\t}\n.left-25{\n\t\tleft: -25px !important;\n\t}\n.prise-input {\n\t    width: 135px;\n\t    height: 25px;\n\t\tmargin-left: 40px;\n\t}\n.prise-input input{\n\t\twidth: 135px !important;\n\t\theight: 25px !important;\n\t\tpadding: 4px 10px;\n\t\tfont-size: 1rem;\n\t\tline-height: 1;\n\t\tborder-radius: 2px;\n\t\tbackground: transparent !important;\n\t}\n.prise-input .form-control:focus{\n\t\tbackground: transparent;\n\t\tcolor: #5AC7F5 !important;\n\t\tborder: 0.5px solid #5AC7F5 !important;\n\t}\n.prise-input input:disabled, .prise-input input[readonly] {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tcolor: #595959 !important;\n\t\tfont-weight: 600;\n\t}\n.prise-input input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  \t\tcolor: #595959;\n\t}\n.prise-input input::-moz-placeholder { /* Firefox 19+ */\n  \t\tcolor: #595959;\n\t}\n.prise-input input:-ms-input-placeholder { /* IE 10+ */\n  \t\tcolor: #595959;\n\t}\n.prise-input input:-moz-placeholder { /* Firefox 18- */\n  \t\tcolor: #595959;\n\t}\n.pay-info{\n\t\tmargin-bottom: 12px;\n\t\tpadding-bottom: 0;\n\t\tborder-bottom: 0;\n\t}\n.header-toptitle span {\n\t\tfont-size: 1rem;\n\t\twidth: 50%;\n\t\tpadding: 0 6px !important;\n\t\tdisplay: inline-block;\n\t}\n.header-toptitle {\n\t\twidth: 48%;\n\t}\n.multi-field.current .remove-field {\n\t\tleft: -30px;\n\t}\n.add-field{\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 1rem;\n\t\tline-height: 1;\n\t\tcolor: #0091d9;\n\t\tmargin-top: 20px;\n\t\tbackground: transparent;\n\t}\n.BudgetSummary{\n\t\tfont-size: 14px;\n\t\tline-height: 16px;\n\t}\n.remove-field {\n\t    position: absolute;\n\t    top: 3px;\n\t    left: -15px;\n\t    border: 0;\n\t    padding: 0;\n\t    color: #5AC7F5;\n\t    font-size: 12px;\n\t    background: transparent;\n\t}\n.remove-field:hover{\n\t\tcolor: #e64b40;\n\t}\n.main-title {\n\t    padding: 8px 25px 8px 15px;\n\t    font-size: 16px;\n\t    line-height: 20px;\n\t    background: #5AC7F5;\n\t    border-radius: 8px 8px 0 0;\n\t}\n.income-subtitles{\n\t\tmargin-top: 1px;\n\t\tborder-bottom: 4px solid #5AC7F5;\n\t}\n.main-title i{\n\t\tmargin-left: 7px;\n\t\tfont-size: 10px;\n\t}\n.main-title:before{\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -50px;\n\t\twidth: 60px;\n\t\theight: 36px;\n\t\tbackground-image: url('income-shape.png');\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\t}\n.Allocation-rowBody {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tflex-wrap: nowrap;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t}\n.Allocation-rowBody {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tflex-wrap: nowrap;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tmargin-bottom: 15px;\n\t}\n.transactions-box1 {\n\t\tmargin: 8px 0 12px;\n\t}\n.Allocation-rowDragHandleWrapper {\n\t\tposition: relative;\n\t\tmargin: 0 0 0 -1.25rem;\n\t\tcursor: move;\n\t\tpadding: 0 1.25rem;\n\t}\n.Allocation-rowDate {\n\t\tflex: 0 1 16.66667%;\n\t}\n.Allocation-rowDate, .Allocation-rowDragHandleWrapper {\n\t\tdisplay: flex;\n\t\t-webkit-box-flex: 0;\n\t}\n.Allocation-rowMerchant {\n\t\toverflow: hidden;\n\t}\n.Allocation-rowMerchant {\n\t\tflex: 0 1 41.66667%;\n\t}\n.Allocation-rowAmount {\n\t\tjustify-content: flex-end;\n\t\talign-items: flex-end;\n\t}\n.transaction-dateBlock .date, .transaction-dateBlock .day {\n\t\tdisplay: block;\n\t\tfont-size: 12px;\n\t\tline-height: 16px;\n\t}\n.money.money--success,\n\t.Allocation-rowMerchant span,\n\t.Allocation-rowAmount span{\n\t\tfont-size: 14px;\n\t\tline-height: 16px;\n\t}\n.Allocation-rowAmount span{\n\t\tcolor: #5AC7F5;\n\t}\n.transaction-dateBlock .day {\n\t\tfont-size: 10px;\n\t}\n.transaction-dateBlock .date {\n\t\tfont-size: 14px;\n\t}\n/*======================= learn Grid css start =======================*/\n.grid-container {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto auto auto;\n\t\tpadding: 10px;\n\t  }\n.grid-mr{\n\t\tmargin-right: 0rem;\n\t  }\n.grid-item {\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\n\t\tpadding: 20px;\n\t\tfont-size: 30px;\n\t\ttext-align: center;\n\t\tmargin:5px;\n\t\tbox-shadow: 0px 0px 14px 1px rgb(0 0 0 / 10%);\n    \tborder-radius: 20px;\n\t  }\n/*======================== learn Grid css end =======================*/\n/* ======================================================\n\tBudget\n====================================================== */\n.budget-title{\n\t\tcolor: #595959;\n\t\tfont-size: 22px;\n\t\tline-height: 27px;\n\t\tmargin: 50px 0 20px;\n\t\tfont-weight: 600;\n\t}\n.progress-info span{\n\t\tfont-size: 1rem;\n\t\tline-height: 25px;\n\t}\n.progress-info p{\n\t\tcolor: #0091d9;\n\t\tfont-size: 1rem;\n\t\tline-height: 18px;\n\t}\n.input-category-lbl .header-category{\n\t\tfont-size: 18px;\n    \tline-height: 22px;\n\t}\n.input-category-lbl input:disabled, .input-category-lbl input[readonly] {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tcolor: #595959 !important;\n\t\tfont-weight: 600;\n\t\tcursor: pointer !important;\n\t}\n.input-category-lbl input{\n\t\twidth: 180px;\n\t\theight: 25px;\n\t\tpadding: 4px 10px;\n\t\tfont-size: 1rem;\n\t\tline-height: 1;\n\t\tborder-radius: 2px;\n\t\tbackground: transparent;\n\t}\n.input-category-lbl .form-control:focus{\n\t\tbackground: transparent;\n\t\tcolor: #0091d9 !important;\n\t\tborder: 0.5px solid #0091d9 !important;\n\t}\n.input-category-lbl .form-control:hover{\n\t\tbackground: #f9f9f9;\n\t}\n.input-plasholder input:disabled, .input-plasholder input[readonly] {\n\t\tbackground-color: #f9f9f9;\n\t\tborder: none;\n\t\tcolor: #0091d9 !important;\n\t\tcursor: pointer;\n\t}\n.input-plasholder input{\n\t\twidth: 130px;\n\t\theight: 25px;\n\t\tpadding: 4px 10px;\n\t\tfont-size: 1rem;\n\t\tline-height: 1;\n\t\tborder-radius: 2px;\n\t\tbackground: transparent;\n\t}\n.input-plasholder .form-control:focus{\n\t\tbackground: transparent;\n\t\tcolor: #0091d9 !important;\n\t\tborder: 0.5px solid #5AC7F5 !important;\n\t}\n.progress-info{\n\t\tfloat: left;\n\t\twidth: 33.33%;\n\t\tdisplay: inline-block;\n\t}\n.progress-text{\n\t\tmargin: 8px 0 11px;\t\n\t}\n.church-title{\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t\tfont-weight: 600;\n\t}\n.church-title img{\n\t\tmargin-right: 8px;\n\t}\n.progress .progress-bar {\n\t    -webkit-animation-name: animateBar;\n\t            animation-name: animateBar;\n\t    -webkit-animation-iteration-count: 1;\n\t            animation-iteration-count: 1;\n\t    -webkit-animation-timing-function: ease-in;\n\t            animation-timing-function: ease-in;\n\t    -webkit-animation-duration: .4s;\n\t            animation-duration: .4s;\n\t}\n@-webkit-keyframes animateBar {\n\t    0% {transform: translateX(-100%);}\n\t    100% {transform: translateX(0);}\n\t}\n@keyframes animateBar {\n\t    0% {transform: translateX(-100%);}\n\t    100% {transform: translateX(0);}\n\t}\n.progress-process{\n\t\theight: 6px;\n\t\tbackground: #F5F5F5;\n\t\tbox-shadow: inset 0px 1px 2px rgb(0 0 0 / 15%);\n\t\tborder-radius: 6.5px;\n\t\tmargin-bottom: 5px;\n\t}\n.txt-left{\n\t\ttext-align: left !important;\n\t}\n.txt-right{\n\t\ttext-align: right !important;\n\t}\n.tab-content .progress-process{\n\t\theight: 10px;\n\t}\n.multi-field{\n\t\tz-index: 9999;\n\t}\n.multi-field.current:before{\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -30px;\n\t\tbottom: -15px;\n\t\tleft: -45px;\n\t\tborder-radius: 0.25rem;\n\t\tbox-shadow: 0 0.25rem 1rem 0 rgb(31 36 38 / 16%);\n\t\tbackground: #fff;\n\t\tcontent: \"\";\n\t\tz-index: -1;\n\t}\n.progress-process.progress .progress-bar-success{\n\t\tbackground: linear-gradient(180deg, #5AC7F5 0%,#5AC7F5 100%);\n\t\tborder-radius: 6.5px;\n\t}\n.progress-process.progress .progress-bar-warning{\n\t\tbackground: linear-gradient(180deg, #f5d55a 0%, #bea14e 100%);\n\t\tborder-radius: 6.5px;\n\t}\n.progress-process.progress .progress-bar-danger{\n\t\tbackground: linear-gradient(180deg, #f55a6e 0%, #be4e4e 100%);\n\t\tborder-radius: 6.5px;\n\t}\n.progress-process.progress .progress-bar-info{\n\t\tbackground: linear-gradient(180deg, #5AC7F5 0%, #4E9DBE 100%);\n\t\tborder-radius: 6.5px;\n\t}\n.budget-main{\n\t\tmargin-bottom: 25px;\n\t}\n.budget-main .income-title{\n\t\tmargin-bottom: 15px;\n\t}\n.housing .income-retailer{\n\t\tmargin: 0;\n\t\tpadding: 18px 20px 18px 30px;\n\t\tbox-shadow: 0 0 transparent;\n\t}\n.housing{\n\t\tborder-radius: 9px;\n\t\tbox-shadow: 0px 0px 14px 1px rgb(0 0 0 / 10%);\n\t}\n.btn-expense{\n\t\tpadding: 13px 20px;\n\t\tfont-weight: 600;\n\t\tfont-size: 1rem;\n\t\tcolor:#0091d9;\n\t\tline-height: 1;\n\t\tborder: 1px dashed #595959;\n\t\tborder-radius: 8px;\n\t\tmargin-top: 40px;\n\t}\n/* ======================================================\n\tDelete_Btn_Popup\n====================================================== */\n.reactmodal-content .modal-header{\n\t\ttop: 0;\n\t}\n.reactmodal-content .tab-content{\n\t\tpadding-top: 0;\n\t}\n.reactmodal-content .modal-wrapper .modal-body{\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t}\n.reactmodal-content .modal-wrapper{\n\t\twidth: 25em;\n\t}\n.modal-primaryAction:hover{\n\t\tcolor: #FE7366;\n\t\tbackground: transparent;\n\t}\n.modal-secondaryaction:hover{\n\t\tcolor:gray;\n\t\tbackground-color: transparent;\n\t\tborder: 1px solid grey;\n\t}\n.modal-primaryAction{\n\t\tcolor: #FFF;\n\t\tpadding: 15px 25px;\n\t\tbackground: #FE7366;\n\t\tmargin: 25px 0;\n\t\tdisplay: table;\n\t\tborder-radius: 4px;\n\t\tborder: 1px solid #FE7366;\n\t}\n.modal-secondaryaction{\n\t\tfont-size: 14px;\n\t\tpadding: 16px 31px;\n\t\tborder-radius: 4px;\n\t\tborder: 1px solid transparent;\n\t\tbackground-color: #6c757d63;\n\t\tcolor: #fff;\n\t}\n/* ======================================================\n\tOverview_Main\n====================================================== */\n.input-error{\n\t\tborder: 1px solid #e64b40 !important;\t\n\t}\n.color-danger{\n\t\tcolor: #e64b40 !important;\n\t}\n.color-success{\n\t\tcolor: #48ce65 !important;\n\t}\n.select-category{\n\t\tcolor: #e64b40 !important;\n\t}\n.fnw-600{\n\t\tfont-weight: 600;\n\t}\n.setting-ml-10{\n\t\tmargin-left: 10.9%;\n\t}\n.overview-main .income-title{\n\t\tpadding-bottom: 5px;\n\t}\n.overview-main{\n\t\tposition: fixed!important;\n\t\tright: 0;\n\t\ttop: 0;\n\t\twidth: 425px!important;\n\t\theight: 100%;\n\t\tpadding: 112px 38px 45px 21px;\n\t\tbox-shadow: 0 4px 14px 1px rgb(0 0 0 / 10%);\n\t\toverflow-y: scroll;\n\t}\n.overview-details span{\n\t\tfont-size: 14px;\n\t\tline-height: 17px;\n\t}\n.overview-details p{\n\t\tfont-size: 18px;\n\t\tline-height: 22px;\n\t\tfont-weight: 600;\n\t\tcolor: #5AC7F5;\n\t\tmargin-top: 20px;\n\t}\n.income-title.category-title{\n\t\tmargin-top: 45px;\n\t}\n.progress-box{\n\t\twidth: 100%;\n\t\tbackground: #EFFAFF;\n\t\tborder-radius: 8px;\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 35px;\n\t}\n.progress-box .box {\n\t    width: 100%;\n\t    border-radius: 8px;\n\t    padding: 10px 28px 9px 0; \n\t    background: #EFFAFF;\n\t}\n.circleProgress{\n\t\tpadding-right: 0px !important;\n\t}\n.expenseGroup{\n\t\tpadding-left: 0px !important;\n\t\tmargin-top: 10px !important;\n\t\tword-break: break-word;\n\t}\n.expenseGroupPercent{\n\t\tpadding-right: 0px !important;\n\t\ttext-align: right;\n\t\tmargin-top: 15px !important;\n\t}\n.rowExpenseByCategory{\n\t\tpadding-right: 0px !important;\n\t}\n.expenseGroup_h6{\n\t\tfont-weight: 600;\n    margin-bottom: 5px;\n\t}\n.expenseGroup_span{\n\tfont-size: 14px !important;\n\t}\n/*.progress-box .box h2 {\n\t    display: block;\n\t    text-align: center;\n\t    color: #414042;\n\t    font-size: 16px;\n\t    line-height: 16px;\n\t    margin: 10px 0 0 0;\n\t    padding-top: 12px;\n\t}*/\n.progress-box .box .chart {\n\t    width: 100%;\n\t    height: 100%;\n\t    font-size: 9px;\n\t    color: #51ACD2;\n\t    font-weight: 400;\n\t    display: flex;\n\t    align-items: center;\n\t    justify-content: flex-end;\n\t}\n.progress-box .box canvas {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 5px;\n\t    width: 52px !important;\n\t    height: 52px !important;\n\t    margin-left: 25px;\n\t    display: inline-block;\n\t}\n.category-range h6{\n\t\tfont-size: 13px;\n\t\tline-height: 16px;\n\t\tfont-weight: 600;\n\t}\n.category-range p{\n\t\tfont-weight: 400;\n\t\tfont-size: 9px;\n\t\tline-height: 11px;\n\t\tmargin: 7px 0 2px;\n\t\tcolor: #999696;\n\t}\n.category-range span{\n\t\tfont-size: 12px;\n\t\tline-height: 13px;\n\t\tfont-weight: 600;\n\t}\n.category-range{\n\t\tmargin-left: 100px;\n\t}\n.church-title.nav-link{\n\t\tline-height: 15px;\n\t\tfont-size: 1rem;\n\t\tcolor: #595959;\n\t\tbackground: transparent !important;\n\t}\n.mb-10{\n\t\tmargin-bottom: -10px !important;\n\t}\n.tab-content .tab-pane.active {\n\t    position: absolute;\n\t    top: 0;\n\t    left: 0;\n\t    right: 0;\n\t    width: 100%;\n\t    height: 100%;\n\t    padding: 25px 30px;\n\t    background: #FFF;\n\t\tmargin-top: 73px;\n\t\toverflow-y: scroll;\n\t\tpadding-bottom: 100px;\n\t}\n.transaction-tab-close{\n\t\tmargin-left:20rem;\n\t\tmargin-bottom: 20px;;\n\t}\n.transactionClose{\n\t\tfont-size:16px;\n\t}\n.premium-box{\n\t\tpadding: 14px;\n\t\tfont-size: 16px;\n\t\tline-height: 22px;\n\t\tbackground: #99DAF5;\n\t\tborder-radius: 19px;\n\t}\n.money-integer{\n\t\tcolor: #0091d9;\n\t}\n.premium-btn {\n\t    padding: 8px 42px;\n\t    font-size: 17px;\n\t    line-height: 1;\n\t    background: #FFF;\n\t    color: #5AC7F5;\n\t    border-radius: 100px;\n\t    margin-top: 20px;\n\t    font-weight: normal;\n\t}\n.textarea-box.BudgetItemDetails-notes .textarea-note {\n\t\theight: 40px;\n\t\tfont-size: 18px;\n\t\tpadding: 10px 10px 10px 50px;\n\t}\n.textarea-box.BudgetItemDetails-notes {\n\t\tmargin-top: 20px;\n\t}\nsvg.NotesIcon {\n\t\tposition: absolute;\n\t\ttop: 12px;\n\t\tleft: 20px;\n\t}\n.chruch-title span{\n\t\tcolor: #5AC7F5;\n\t\tfont-size: 20px;\n\t}\n.chruch-title h2{\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n\t\tfont-weight: bold;\n\t}\n.chruch-type{\n\t\tmargin: 72px 0 20px;\n\t}\n.premium-box p {\n\t    font-size: 18px;\n\t    line-height: 22.68px;\n\t    font-weight: 500;\n\t}\n.active .popover{\n\t\tdisplay: block;\n\t}\n.exm{\n\t\tdisplay: none;\n\t}\n.popover{\n\t\ttop: 21px;\n\t\tborder: 0;\n\t\tbox-shadow: 0 0 transparent;\n\t\tbackground-color:#fff;\n        width:550px;\n\t\tleft:-50%;\n\t\tmargin-left:25rem;\n\t\tposition:fixed;\n\t\ttext-align:center;\n\t\tborder:1px solid #000;\n\t\ttop: 350px;\n\t\t\n\t}\n.popover.left {\n\t\tleft: 13rem !important;\n\t}\n.popover .form-control {\n\t\tfont-family: 'Outfit', sans-serif;\n\t\tborder: 0.5px solid #5AC7F5;\n\t    background: #5AC7F5;\n\t    font-size: 30px;\n\t    height: 45px;\n\t    color: #595959;\n\t\twidth: 544px;\n\t}\n.popover .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n\t  \tcolor: #595959;\n\t}\n.popover .form-control::-moz-placeholder { /* Firefox 19+ */\n\t  \tcolor: #595959;\n\t}\n.popover .form-control:-ms-input-placeholder { /* IE 10+ */\n\t  \tcolor: #595959;\n\t}\n.popover .form-control:-moz-placeholder { /* Firefox 18- */\n\t  \tcolor: #595959;\n\t}\n.target-subtitles{\n\t\tfont-size: 14px;\n\t\tline-height: 1;\n\t\tmargin-bottom: 16px;\n\t}\n.accordion-container .content{\n\t\tdisplay: none;\n\t}\n.set a {\n\t\tfont-size: 14px;\n\t    color: #5AC7F5;\n\t    margin: 10px 0 15px;\n\t    vertical-align: top;\n\t    display: inline-block;\n\t    text-decoration: none;\n\t}\n.set a i{\n\t\tmargin-right: 6px;\n\t}\n.set a span{\n\t\tcolor:#5AC7F5;\n\t}\n.content form input,\n\t.textarea-note,\n\t.content .custom-select .select-selected {\n\t    width: 100%;\n\t    outline: none;\n\t    color: #9D9D9D;\n\t    font-size: 14px;\n\t    font-weight: 400;\n\t    padding: 8px 15px;\n\t    border-radius: 4px;\n\t    margin-bottom: 15px;\n\t    display: inline-block;\n\t    border: 1px solid #9D9D9D;\n\t    font-family: 'Outfit', sans-serif;\n\t}\n.textarea-note {\n\t    height: 93px;\n\t    resize: none;\n\t    font-weight: 300;\n\t    border-radius: 9px;\n\t}\n.textarea-box{\n\t\tmargin-top: 63px;\n\t}\n.content form input::-webkit-input-placeholder,\n\t.select-option::-webkit-input-placeholder,\n\t.textarea-note::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n\t  \tcolor: #9D9D9D;\n\t}\n.content form input::-moz-placeholder,\n\t.select-option::-moz-placeholder,\n\t.textarea-note::-moz-placeholder { /* Firefox 19+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.content form input:-ms-input-placeholder,\n\t.select-option:-ms-input-placeholder,\n\t.textarea-note:-ms-input-placeholder { /* IE 10+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.content form input:-moz-placeholder,\n\t.select-option:-moz-placeholder,\n\t.textarea-note:-moz-placeholder { /* Firefox 18- */\n\t  \tcolor: #9D9D9D;\n\t}\n.content .select-option{\n\t\tpadding: 8px 15px;\n\t}\n.content .select-option{\n\t\twidth: 100%;\n\t\tborder: 0;\n\t\t-webkit-appearance: none;\n\t\t   \t-moz-appearance: none;\n\t\t   \tappearance: none;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0px 1px 10px 0 #9d9d9d;\n\t}\n.dropdownitem button{\n\t\tposition: relative;\n\t\ttext-align: left;\n\t\twidth: 100%;\n\t\tcolor: #9D9D9D;\n\t\toutline: none;\n\t\tborder-radius: 4px;\n\t\tdisplay: inline-block;\n\t\tbackground: transparent;\n\t\tborder: 1px solid #9D9D9D;\n\t\tpadding: 8px 15px;\n\t}\n.dropdownitem .dropdown-toggle::after{\n\t\tposition: absolute;\n\t\tcontent: \"\";\n\t\ttop: 16px;\n\t\tright: 15px;\n\t\twidth: 8px;\n\t\theight: 4px;\n\t\tborder: 0;\n\t\tbackground-image: url('drop_down-1.png');\n\t\tbackground-size: contain;\n\t\tbackground-repeat: no-repeat;\n\t}\nul.dropdown-menu {\n\t    width: 100%;\n\t    border: 0;\n\t    margin-top: 20px !important;\n\t    box-shadow: 1px 0px 12px 0px #9d9d9d;\n\t}\nul.dropdown-menu:before {\n\t    content: '';\n\t    position: absolute;\n\t    top: -10px;\n\t    right: 0;\n\t    left: 0;\n\t    width: 0;\n\t    height: 0;\n\t    display: table;\n\t    margin: 0 auto;\n\t    border-left: 10px solid transparent;\n\t    border-right: 10px solid transparent;\n\t    border-bottom: 10px solid #FFF;\n\t}\n.dropdownitem .dropdown-menu>li>a{\n\t\tdisplay: flex;\n\t}\n.dropdownitem\xA0.btn-check:focus+.btn, \n\t.dropdownitem .btn:focus{\n\t\tbox-shadow: 0px 0px transparent !important;\n\t}\n.inner-tabbing ul li a{\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t\tcolor: #9D9D9D;\n\t}\n.inner-tabbing ul{\n\t\tborder: 1px solid #9D9D9D;\n\t\tborder-radius: 4px;\n\t\tpadding: 2px;\n\t}\n.inner-tabbing ul li a {\n\t    font-size: 12px;\n\t    line-height: 15px;\n\t    color: #9D9D9D;\n\t    margin: 0;\n\t    padding: 6px 20px;\n\t}\n.inner-tabbing ul li .menu.active{\n\t\tcolor: #FFF;\n\t\tbackground: #5AC7F5;\n\t\tborder-radius: 4px;\n\t}\n.dropdownitem,\n\t.inner-tabbing{\n\t\tmargin-bottom: 15px;\n\t}\n.content .custom-select .select-selected:after{\n\t\ttop: 15px;\n\t\tright: 15px;\n\t}\n.content .custom-select .select-items {\n\t    border: 0;\n\t    top: 35px;\n\t    box-shadow: 0px 0px 9px 0px #959595;\n\t}\n.set .btn-text{\n\t\tfont-size: 10px;\n\t\tcolor: #5AC7F5;\n\t\tmargin: 0;\n\t}\n.set .btn-text:last-child{\n\t\tmargin-left: 15px;\n\t}\n.set .btn-save{\n\t\tpadding: 6px 15px;\n\t\tfont-size: 10px;\n\t\tcolor: #FFF;\n\t\tbackground: #5AC7F5;\n\t\tborder-radius: 4px;\n\t\tmargin: 0;\n\t}\n.every{\n\t\tcolor: #9D9D9D;\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t\tmargin-bottom: 4px;\n\t}\n.notes-title{\n\t\tcolor: #595959;\n\t\tfont-size: 14px;\n\t\tline-height: 17px;\n\t\tfont-weight: 500;\n\t\tmargin-bottom: 10px;\n\t}\n/* ======================================================\n\tTransactions\n====================================================== */\n.transactions-btn ul.nav.nav-tabs {\n\t    margin: 0 auto;\n\t    display: table;\n\t}\n.navTab-font{\n\t\tfont-size: 1rem !important;\n\t}\n.transactions-title h4{\n\t\tfont-weight: 600;\n\t\tfont-size: 20px;\n\t\tline-height: 27px;\n\t}\n.addTrans{\n\t\tcolor: #51ACD2;\n    \tfont-size: 23px;\n\t}\n.addnew-cleck{\n\t\tcolor: #51ACD2;\n\t\tfont-size: 22px;\n\t\tline-height: 20px;\n\t\tfont-weight: 500;\n\t}\n.transactions-box{\n\t\tmargin: 25px 0 25px;\n\t}\n.addnew-cleck i{\n\t\tmargin-right: 4px;\n\t}\n/* =========================================================\n    Insight charts\n========================================================= */\n.tooltip {\n\tfont-weight: bold;\n\tcolor: red !important;\n  }\nngx-charts-pie-arc {background-color:red !important}\ndiv .ngx-charts .bar .active{\n\t  color: red !important;\n  }\n.pie-legend.legend-items-container.legend-items.legend-item .item-value {\n    margin-top: 10px !important;\n\tcolor:blue !important;\n}\n/* ======================== End ================== /\n\n/* ======================================================\n\tForm_Popup\n====================================================== */\n.checkoutView{\n\t\twidth: 500px !important;\n\t}\n.modal {\n\t    position: fixed;\n\t    z-index: 999999999; /* 1 */\n\t    top: 0;\n\t    left: 0;\n\t    visibility: hidden;\n\t    width: 100%;\n\t    height: 100%;\n\t}\n.modal.is-visible {\n\t    visibility: visible;\n\t    display: block;\n\t}\n.modal-overlay {\n\t    position: fixed;\n\t    z-index: 10;\n\t    top: 0;\n\t    left: 0;\n\t    width: 100%;\n\t    height: 100%;\n\t    background: hsla(0, 0%, 0%, 0.5);\n\t    visibility: hidden;\n\t    opacity: 0;\n\t    transition: visibility 0s linear 0.3s, opacity 0.3s;\n\t}\n.modal.is-visible .modal-overlay {\n\t    opacity: 1;\n\t    visibility: visible;\n\t    transition-delay: 0s;\n\t}\n.modal-wrapper {\n\t    position: absolute;\n\t    z-index: 9999;\n\t    top: 6em;\n\t    right: 0;\n\t    left: 0;\n\t    width: 40em;\n\t    margin: 0 auto;\n\t    display: table;\n\t    border-radius: 15px;\n\t    background-color: #fff;\n\t    box-shadow: 0 0 1.5em hsla(0, 0%, 0%, 0.35);\n\t}\n.modal-transition {\n\t    transition: all 0.3s 0.12s;\n\t    transform: translateY(-10%);\n\t    opacity: 0;\n\t}\n.modal.is-visible .modal-transition {\n\t    transform: translateY(0);\n\t    opacity: 1;\n\t}\n.modal-header,\n\t.modal-content {\n\t    padding: 1em;\n\t    border: 0;\n\t    box-shadow: 0 0 transparent;\n\t}\n.amount-input .custom-select{\n\t\tmargin-bottom: 15px;\n\t}\n.modal-content{\n\t\tpadding: 0;\n\t}\n#tab-1 .modal-header{\n\t\tbackground-color: #FE7366;\n\t}\n#tab-2 .modal-header{\n\t\tbackground-color: #51ACD2;\n\t}\n.modal-header {\n\t    position: relative;\n\t    top: -64px;\n\t    border-radius: 15px 15px 0 0;\n\t}\n.bg-pink.on .modal-header{\n\t\tbackground-color: #FE7366;\n\t}\n.bg-blue.on .modal-header{\n\t\tbackground-color: #51ACD2;\n\t}\n.modal-close {\n\t    position: absolute;\n\t    top: 0;\n\t    right: 0;\n\t    padding-right: 1em !important;\n    \tpadding-top: 20px;\n\t    color: #FFF;\n\t    background: none;\n\t    border: 0;\n\t}\n.modal-close:hover {\n\t    color: #777;\n\t}\n.modal-heading {\n\t\tmargin: 0;\n\t\tcolor: #FFF;\n\t    font-size: 22px;\n\t    line-height: 22px;\n\t    font-weight: 600;\n\t    -webkit-font-smoothing: antialiased;\n\t    -moz-osx-font-smoothing: grayscale;\n\t}\n.modal-content > *:first-child {\n\t    margin-top: 0;\n\t}\n.modal-content > *:last-child {\n\t    margin-bottom: 0;\n\t}\n.icon {\n\t    display: inline-block;\n\t    width: 16px;\n\t    height: 16px;\n\t    vertical-align: middle;\n\t    fill: currentcolor;\n\t}\n/* ======================================================\n\tForm_Popup_inner\n====================================================== */\n.select2-container--default .select2-results__group{\n\tcolor: #5AC7F5;\n\tbackground: #fff;\n\ttext-transform: uppercase;\n\tfont-weight: bold;\n\tfont-size: 15px;\n}\n.select2-container .select2-selection--single{\n\theight: 50px;\n\tborder: 1px solid #9D9D9D;\n}\n.select2-container--default .select2-selection--single .select2-selection__arrow{\n\theight: 45px;\n}\n.select2-container--default .select2-selection--single .select2-selection__rendered{\n\tline-height: 45px;\n}\n.BudgetItemAllocator-allocation {\n    display: flex;\n    position: relative;\n    justify-content: space-between;\n    margin-left: 32px;\n}\n.BudgetItemAllocator-add, .BudgetItemAllocator-remove {\n    position: absolute;\n    top: 50%;\n    left: -32px;\n    margin-top: -9px;\n    cursor: pointer;\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    line-height: 1px;\n    fill: #FE7366;\n}\n.BudgetItemAllocator-remove .Icon-bg {\n    fill: #FE7366;\n}\n.BudgetItemAllocator-add .Icon-fg, .BudgetItemAllocator-remove .Icon-fg {\n    fill: #fff;\n}\n.BudgetItemAllocator-label {\n    margin-right: auto;\n    line-height: 45px;\n}\n.BudgetItemAllocator-allocationAmount {\n    flex: 0 1 25%;\n    height: 45px;\n}\n.BudgetItemAllocator-allocationAmount .inputGroup {\n    border: 0;\n}\n.BudgetItemAllocator-remaining--completed {\n    opacity: .2;\n}\n.BudgetItemAllocator-remaining {\n    float: right;\n    margin-bottom: 10px;\n    text-align: right;\n    font-size: 1rem;\n    font-style: italic;\n}\n.BudgetItemAllocator-remainingLink {\n    margin: 0;\n    border: 0;\n    background: 0;\n    padding: 0;\n    vertical-align: inherit;\n    font-size: 1.125rem;\n    font-weight: 400;\n    color: #0091d9;\n}\n.BudgetItemAllocator-remainingLink:active, \n.BudgetItemAllocator-remainingLink:focus, \n.BudgetItemAllocator-remainingLink:hover {\n    outline: 0;\n    text-decoration: underline;\n    color: #0073b9;\n}\n.inputGroup {\n    position: relative;\n    display: table;\n    background: #fff;\n    border-collapse: separate;\n    width: 100%;\n    border: 0.0625rem solid #b6bec2;\n    border-radius: 0.25rem;\n}\n.BudgetItemAllocator-allocationAmount input, .BudgetItemAllocator-allocationAmount input:focus {\n\twidth: 100%;\n\tfloat: right;\n    border: 0;\n    border-bottom: 1px dashed #0091d9;\n    padding-right: 0;\n    text-align: right;\n}\n.select2-container{\n\t\tz-index: 999999999;\n\t}\n.amount-input .form-input .form-control{\n\t\tfont-size: 20px;\n\t\tline-height: 25px;\n\t\ttext-align: center;\n\t}\n.amount-input .form-control,\n\t.amount-input .select-selected{\n\t\tcolor: #9D9D9D;\n\t\theight: 50px;\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tline-height: 23px;\n\t\tborder-radius: 3px;\n\t\tmargin-bottom: 15px;\n\t\tborder: 1px solid #9D9D9D;\n\t\tfont-family: 'Outfit', sans-serif;\n\t}\n.amount-input .select-selected:after{\n\t\tright: 18px;\n\t\ttop: 17px;\n\t\twidth: 9px;\n\t\theight: 6px;\n\t\tbackground-image: url('polygon.png');\n\t}\n.amount-input .select-items{\n\t\tborder: 0;\n\t}\n.amount-input .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n\t  \tcolor: #9D9D9D;\n\t}\n.amount-input .form-control::-moz-placeholder { /* Firefox 19+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.amount-input .form-control:-ms-input-placeholder { /* IE 10+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.amount-input .form-control:-moz-placeholder { /* Firefox 18- */\n\t  \tcolor: #9D9D9D;\n\t}\n.datepicker.form-control {\n\t    background: #fff url('calender.png') 93% 50% no-repeat;\n\t}\n[type=\"date\"]::-webkit-inner-spin-button {\n\t    display: none;\n\t}\n[type=\"date\"]::-webkit-calendar-picker-indicator {\n\t    opacity: 0;\n\t}\n.popup-tabbing{\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: inline-block;\n\t}\n.amount-input .content {\n\t    display: none;\n\t}\n.newexpense-btn a{\n\t\tcolor: #FFF;\n\t\tfont-weight: 600;\n\t\tfont-size: 16px;\n\t\tpadding: 12px 17px;\n\t\tbackground: #FE7366;\n\t\tborder-radius: 3px;\n\t\tmargin: 31px auto 0;\n\t}\n.modal-wrapper .tab-content.current {\n\t    display: inherit;\n\t}\n.modal-wrapper .tab-content{\n\t\tdisplay: none;\n\t\twidth: 100%;\n\t}\n.modal-wrapper .modal-body{\n\t\tpadding: 42px 50px 50px;\n\t}\n.modal-wrapper ul.tabs {\n\t    margin-top: 26px;\n\t    position: relative;\n\t    bottom: -43px;\n\t}\n.modal-wrapper ul.tabs li {\n\t    font-size: 14px;\n\t    line-height: 17px;\n\t    margin-left: 58px;\n\t    padding-left: 15px;\n\t    position: relative;\n\t    cursor: pointer;\n\t}\n.modal-wrapper ul.tabs li:after {\n\t    content: '';\n\t    position: absolute;\n\t    left: 0;\n\t    top: 4px;\n\t    width: 8px;\n\t    height: 8px;\n\t    border-radius: 100px;\n\t    display: inline-block;\n\t    border: 0.5px solid #595959;\n\t}\n.modal-wrapper ul.tabs li.text-pink.current:after{\n\t\tborder: 1px solid #FE7366;\n\t}\n.modal-wrapper ul.tabs li.text-blue.current:after{\n\t\tborder: 1px solid #51ACD2;\n\t}\n.modal-wrapper ul.tabs li.text-blue.current:before{\n\t\tbackground: #51ACD2 !important;\n\t}\n.modal-wrapper ul.tabs li.text-pink.current:before,\n\t.modal-wrapper ul.tabs li.text-blue.current:before {\n\t    content: '';\n\t    position: absolute;\n\t    width: 4px;\n\t    height: 4px;\n\t    left: 4px;\n\t    top: 8px;\n\t    border-radius: 100px;\n\t    background: #FE7366;\n\t    transform: translate(-50%, -50%);\n\t}\n.newexpense-btn .btn-blue{\n\t\tbackground: #51ACD2;\n\t}\n/* ======================================================\n\tNew-Search_Fiend\n====================================================== */\n.search-field input{\n\t\twidth: 100%;\n\t\tborder: 0;\n\t\toutline: none;\n\t\tmargin-bottom: 15px;\n\t\tfont-size: 14px;\n\t\tline-height: 18px;\n\t\tfont-weight: 400;\n\t\tbackground: #F0F0F0;\n\t\tborder-radius: 4px;\n\t\tpadding: 7px 15px 6px 28px;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: 10px 12px;\n\t\tbackground-image: url('search.png');\n\t}\n.search-field input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n\t  \tcolor: #9D9D9D;\n\t}\n.search-field input::-moz-placeholder { /* Firefox 19+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.search-field input:-ms-input-placeholder { /* IE 10+ */\n\t  \tcolor: #9D9D9D;\n\t}\n.search-field input:-moz-placeholder { /* Firefox 18- */\n\t  \tcolor: #9D9D9D;\n\t}\n.tab-content .tab-panes{\n\t\tdisplay: none;\n\t}\n.tab-content .tab-panes.active{\n\t\tdisplay: block;\n\t}\n.nav-tabbing:before{\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 1px;\n\t\tleft: 0;\n\t\tright: 0;\n\t\twidth: 100%;\n\t\tdisplay: inline-block;\n\t\tborder-bottom: 0.5px solid #919191;\n\t}\n.nav-tabbing .nav-items .nav-links.active{\n\t\tborder-bottom: 3px solid #52ACD2;\n\t\tbackground: transparent;\n\t\toutline: none;\n\t\tcolor: #52ACD2;\n\t}\n.nav-tabbing .nav-items .nav-links {\n\t\tcolor: #7E7E7E;\n\t    font-size: 12px;\n\t    font-weight: 500;\n\t    background: transparent;\n\t    padding: 0 29px 8px 28px;\n\t\tdisplay: inline-block;\n\t\tborder-bottom: 3px solid transparent;\n\t}\n.month-title{\n\t\tcolor: #7E7E7E;\n\t}\n.month-title,\n\t.show-transactions,\n\t.transactions-btn{\n\t\tfont-weight: 500;\n\t\tfont-size: 1rem;\n\t\tline-height: 15px;\n\t\tpadding-right: 20px;\n\t\tdisplay: flex;\n\t}\n.show-transactions{\n\t\tcolor: #B0B0B0;\n\t\tmargin: 15px 0 8px 73px;\n\t}\n.transactions-btn a{\n\t\tcolor: #FE7366;\n\t\tmargin-top: 27px;\n\t}\n/* ======================================================\n\tTransaction_History\n====================================================== */\n.transaction-history{\n\t\tborder: 1px solid #9D9D9D;\n\t\tborder-radius: 20px;\n\t\tpadding: 5px 20px; \n\t\tmargin-top: 16px;\n\t\ttransition: all 0.3s ease 0s;\n\t\tcursor: pointer;\n\t}\n.month-dates{\n\t\tcolor: #999595;\n\t\ttext-transform: uppercase;\n\t}\n.month-dates,\n\t.transaction-name p{\n\t\tfont-weight: 500;\n\t\tfont-size: 14px;\n\t\tline-height: 15px;\n\t\tmargin-right: 20px;\n\t}\n.transaction-name p{\n\t\tcolor: #7E7E7E;\n\t\tmargin-bottom: 4px;\n\t\tfont-size: 15px;\n\t}\n.transactions-name{\n\t\tcolor: #5AC7F5;\n\t\tfont-size: 10px;\n\t\tline-height: 7px;\n\t\ttext-transform: uppercase;\n\n\t}\n.text-ellipsis{\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t}\n.pl-pr-0{\n\t\tpadding-left: 0px !important;\n\t\tpadding-right: 0px !important;\n\t}\n.transactions-prise{\n\t\tcolor: #999595;\n\t\tfont-size: 14px;\n\t\tline-height: 17px;\n\t\tfont-weight: 500;\n\t}\n.icon-btn{\n\t\tcolor: #7E7E7E;\n\t\tfont-size: 10px;\n\t\tline-height: 12px;\n\t\tpadding-left: 12px;\n\t\tcursor: pointer;\n\t}\n.icon-btn a img{\n\t\tdisplay: table;\n\t\tmargin: 0 auto 2px;\n\t}\n.cleck-icon {\n\t    position: absolute;\n\t    right: 0;\n\t    opacity: 0;\n\t    top: 50%;\n\t    width: 100%;\n\t    height: 100%;\n\t    background: #FFF;\n\t    padding-right: 20px;\n\t    border-radius: 20px;\n\t    transform: translate(0, -50%);\n\t    transition: all 0.3s ease 0s;\n\t}\n.transaction-history:hover .cleck-icon{\n\t\topacity: 1;\n\t}\n.transactions-space{\n\t\tmargin-top: 16px;\n\t}\n/* ======================================================\n\tInsights_Page's\n====================================================== */\n/* ======================================================\n\t\tInsights_Hero\n\t====================================================== */\n.insights-hero{\n\t\t\tbackground-image: url('Insights-banner.png');\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-position: center center;\n\t\t\tpadding: 148px 0 165px 65px;\n\t\t\t\n\t\t\twidth: 100%;\n\t\t}\n.insights-title{\n\t\t\tfont-weight: 600;\n\t\t\tfont-size: 36px;\n\t\t\tline-height: 45px;\n\t\t\tmargin-bottom: 67px;\n\t\t}\n.insights-subtitles{\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 17px;\n\t\t\tfont-weight: 600;\n\t\t\tmax-width: 44%;\n\t\t\tcolor: #FFF;\n\t\t}\n.insights-bgcolor{\n\t\t\tmargin-right:-6.5rem;\n\t\t}\n.accounting-bgcolor{\n\t\t\tmargin-right:-6.5rem;\n\t\t}\n.insight-pl{\n\t\t\tpadding-left:10.2rem;\n\t\t}\n.learn-ml{\n\t\t\tmargin-left: 8.3rem !important;\n\t\t}\n.insight-heroImage{\n\t\t\tmargin-right: -1.2rem;\n\t\t}\n.footer.footer-insights ul{\n\t\t\tmargin: 107px 0 15px;\n\t\t}\n.p-md-0 {\n\t\t\tpadding: 72px;\n\t\t}\n/* ======================================================\n\tEmail_Verification\n====================================================== */\n@-webkit-keyframes stroke {\n\t    to {\n\t        stroke-dashoffset: 0;\n\t    }\n\t}\n@keyframes stroke {\n\t    to {\n\t        stroke-dashoffset: 0;\n\t    }\n\t}\n@-webkit-keyframes scale {\n\t    0%,\n\t    to {\n\t        transform: none;\n\t    }\n\t    50% {\n\t        transform: scale3d(1.1, 1.1, 1);\n\t    }\n\t}\n@keyframes scale {\n\t    0%,\n\t    to {\n\t        transform: none;\n\t    }\n\t    50% {\n\t        transform: scale3d(1.1, 1.1, 1);\n\t    }\n\t}\n@-webkit-keyframes fill {\n\t    to {\n\t        box-shadow: inset 0 0 0 30px #5AC7F5;\n\t    }\n\t}\n@keyframes fill {\n\t    to {\n\t        box-shadow: inset 0 0 0 30px #5AC7F5;\n\t    }\n\t}\n.email-verification{\n\t\tbackground: #5AC7F5;\n\t}\n.panel {\n\t    background: #fff;\n\t    border-radius: 12px;\n\t    width: 100%;\n\t    padding: 50px 20px;\n\t    border: 1px solid #e6e6e6;\n\t    box-shadow: 0 40px 60px 0 rgb(5 5 56 / 15%);\n\t}\n.checkMark {\n\t    width: 56px;\n\t    height: 56px;\n\t    margin: 0 auto 25px;\n\t    border-radius: 50%;\n\t    display: block;\n\t    stroke-width: 2;\n\t    stroke: #fff;\n\t    stroke-miterlimit: 10;\n\t    box-shadow: inset 0 0 0 #4464b3;\n\t    -webkit-animation: fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both;\n\t    animation: fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both;\n\t    opacity: .9;\n\t}\ncircle.checkMark__circle {\n\t    stroke-dasharray: 166;\n\t    stroke-dashoffset: 166;\n\t    stroke-width: 2;\n\t    stroke-miterlimit: 10;\n\t    stroke: #5AC7F5;\n\t    fill: none;\n\t    -webkit-animation: stroke .6s cubic-bezier(.65,0,.45,1) forwards;\n\t    animation: stroke .6s cubic-bezier(.65,0,.45,1) forwards;\n\t}\n.checkMark__check {\n\t    transform-origin: 50% 50%;\n\t    stroke-dasharray: 48;\n\t    stroke-dashoffset: 48;\n\t    -webkit-animation: stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;\n\t    animation: stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards;\n\t}\n.email-title{\n\t\tcolor: green;\n\t\tfont-size: 40px;\n\t\tfont-weight: 700;\n\t}\n.panel p{\n\t\tfont-weight: 200;\n\t\tfont-size: 18px;\n\t\tmargin: 20px 0 0;\n\t}\n.panel .premium-btn{\n\t\tfont-size: 16px;\n\t\tpadding: 14px 37px;\n\t\tbackground: #5AC7F5;\n\t\tcolor: #FFF;\n\t\tmargin-top: 40px;\n\t\tborder-radius: 100px;\n\t\ttransition: all 0.3s ease 0s;\n\t\tborder: 1px solid transparent;\n\t}\n.panel .premium-btn:hover {\n\t    background: transparent;\n\t    border: 1px solid #5AC7F5;\n\t    color: #5AC7F5;\n\t}\n.verification-box,\n\t.email-verification{\n\t\theight: 100vh;\n\t}\n.verification-box{\n\t\tpadding: 200px 0;\n\t}\n.highcharts-title{\n\t\tcolor: #595959;\n\t\tfont-size: 2.5rem;\n\t\tline-height: 1.1;\n\t\tfont-weight: 600;\n\t}\n.highcharts-subtitles{\n\t\tcolor: #595959;\n\t\tfont-size: 14px;\n\t\tline-height: 15px;\n\t\tfont-weight: 400;\n\t\tmargin: 30px 0 35px;\n\t}\n.spending-breakdown{\n\t\tpadding: 43px 15px 59px 47px;\n\t\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 20px;\n\t\tmargin-bottom: 50px;\n\t}\n.chart-legend{\n\t\tmargin-left: 2.8rem !important;\n\t}\n.chart-legend .legend-labels{\n\t\toverflow-x: auto !important;\n\t}\n.color-concept{\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n.color-brown{\n\t\tbackground: #E9605A;\n\t}\n.color-pink{\n\t\tbackground: #FFB8B8;\n\t}\n.color-darkjambli{\n\t\tbackground: #404799;\n\t}\n.color-darkblue{\n\t\tbackground: #51ACD2;\n\t}\n.color-darkgreen{\n\t\tbackground: #78C2A4;\n\t}\n.color-green{\n\t\tbackground: #51D16D;\n\t}\n.color-blue{\n\t\tbackground: #5AC7F5;\n\t}\n.highcharts-color {\n\t\twidth: 25%;\n\t\tcolor: #595959;\n\t\tfont-size: 12px;\n\t\tline-height: 15px;\n\t    margin-bottom: 15px;\n\t    font-weight: 400;\n\t}\n.highcharts-main{\n\t\tpadding: 0 83px;\n\t\tmargin-top: 69px;\n\t}\n.spending-breakdown.monthly-income{\n\t\tpadding: 43px 40px 61px 15px;\n\t}\n/* ======================================================\n\tAccount\n====================================================== */\n/* ======================================================\n\t\tAccount_Tabbing\n\t====================================================== */\n.tabbing-content .tab-pane.active{\n\t\t\tdisplay: block;\n\t\t}\n.tabbing-content .tab-pane{\n\t\t\tdisplay: none;\n\t\t}\n.nav-tabbingac .nav-linksac {\n\t\t    padding: 0;\n\t\t    font-size: 20px;\n\t\t    line-height: 25px;\n\t\t    color: #B0B0B0;\n\t\t    font-weight: 400;\n\t\t    display: inline-block;\n\t\t    margin-bottom: 30px;\n\t\t    background: transparent;\n\t\t    transition: all 0.3s ease 0s;\n\t\t}\n.nav-tabbingac .nav-linksac:hover,\n\t\t.nav-tabbingac .nav-linksac:active{\n\t\t\toutline: none;\n\t\t\tbackground: transparent !important;\n\t\t}\nul.nav.nav-tabbingac{\n\t\t\tpadding: 50px 0 0 36px;\n\t\t}\n.nav-tabbingac .nav-linksac.active{\n\t\t\tcolor: #595959;\n\t\t}\n.dropdown_menu li a{\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1;\n\t\t\tpadding: 6px 0;\n\t\t\tcolor: #B0B0B0;\n\t\t}\n.dropdown_menu li a:hover{\n\t\t\tcolor: #595959;\n\t\t}\n.account-tabbing{\n\t\t\tpadding: 80px 170px 5px 50px;\n\t\t}\n.nav-itemsac:hover .dropdown-icon img {\n\t\t    transform: rotate(90deg);\n\t\t}\n.nav-itemsac .dropdown-icon img{\n\t\t\tmargin-left: 10px;\n\t\t\ttransition: all 0.3s ease 0s;\n\t\t}\n.menu-icon{\n\t\t\tmargin-right: 15px;\n\t\t}\n.account-mainbox{\n\t\t\tborder-radius: 20px;\n\t\t\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n\t\t}\n.edit-title{\n\t\t\tfont-weight: 500;\n\t\t\tcolor: #595959;\n\t\t\tfont-size: 30px;\n\t\t\tline-height: 35px;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n.account-form .form-group label{\n\t\t\tcolor: #595959;\n\t\t\tfont-size: 18px;\n\t\t\tline-height: 22px;\n\t\t\tmargin-bottom: 8px;\n\t\t\tfont-weight: 300;\n\t\t}\n.account-form .form-control{\n\t\t\theight: 48px;\n\t\t\tborder: 1px solid #9D9D9D;\n\t\t\tborder-radius: 7px;\n\t\t\tpadding: 10px 10px 12px;\n    \t\tfont-size: 14px;\n\t\t}\n.account-form .form-group{\n\t\t\tmargin-bottom: 15px;\n\t\t}\n.menu-border:before{\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\twidth: 1px;\n\t\t\theight: 100%;\n\t\t\tbackground: #D7D7D7;\n\t\t\tdisplay: inline-block;\n\t\t}\n.tab-pane{\n\t\t\tpadding: 40px 52px 60px 65px;\n\t\t}\n.Form.account-form .btn.btn-success {\n\t\t    padding: 15px 0;\n\t\t    max-width: 256px;\n\t\t    margin: 30px auto 0;\n\t\t    display: table;\n\t\t}\n.delete-title{\n\t\t\tcolor: #595959;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 30px;\n\t\t\tfont-weight: 500;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n.message-deception{\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 17px;\n\t\t\tcolor: #595959;\n\t\t}\n.form-message-main{\n\t\t\tmargin-top: 90px;\n\t\t}\n.btn-account{\n\t\t\tcolor: #CB534E;\n\t\t\tfont-size: 16px;\n\t\t\tpadding: 6px 27px;\n\t\t\tborder: 1px solid #CB534E;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder-radius: 5px;\n\t\t}\n.btn-account:hover{\n\t\t\tbackground: #CB534E;\n\t\t\tcolor: #FFF;\n\t\t}\n.nav-tabbingac .nav-linksac.active .dropdown-icon{\n\t\t\tbackground-image: url('drop_down.png');\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tdisplay: inline-block;\n\t\t\tbackground-size: auto;\n\t\t\tmargin-left: 10px;\n\t\t\twidth: 12px;\n\t\t\theight: 12px;\n\t\t}\n/* =============================== FLipable CARD start============= */\n.scene {\n\t\t\twidth: 200px;\n\t\t\theight: 260px;\n\t\t\tborder: 1px solid #CCC;\n\t\t\tmargin: 40px 0;\n\t\t\tperspective: 600px;\n\t\t  }\n.card {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttransition: transform 1s;\n\t\t\ttransform-style: preserve-3d;\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t  }\n.card.is-flipped {\n\t\t\ttransform: rotateY(180deg);\n\t\t  }\n.card__face {\n\t\t\tposition: absolute;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tline-height: 260px;\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 40px;\n\t\t\t-webkit-backface-visibility: hidden;\n\t\t\tbackface-visibility: hidden;\n\t\t  }\n.card__face--front {\n\t\t\tbackground: red;\n\t\t  }\n.card__face--back {\n\t\t\tbackground: blue;\n\t\t\ttransform: rotateY(180deg);\n\t\t  }\n/* ============================ Flippable CARD end ================ */\n/* ======================================================\n\tFooter\n====================================================== */\n.footer{\n\t\t\tpadding: 15px;\n\t\t\tmargin-top: 45px;\n\t\t}\n.footer ul li a{\n\t\tfont-size: 10px;\n\t\tline-height: 12px;\n\t\tcolor: #51ACD2;\n\t}\n.border-shape{\n\t\twidth: 1px;\n\t\theight: 10px;\n\t\tbackground: #9D9D9D;\n\t\tdisplay: inline-block;\n\t\tmargin: 0 6px;\n\t}\n.footer-bottom{\n\t\tfont-weight: 400;\n\t\tfont-size: 8px;\n\t\tline-height: 10px;\n\t\tpadding-bottom: 12px;\n\t}\n.footer ul{\n\t\tmargin: 84px 0 15px;\n\t\tline-height: 1;\n\t}\n@media screen and (max-width: 1300px){\n\t.highcharts-main{\n\t\tpadding: 0 60px;\n\t}\n}\n@media screen and (max-width: 1199px){\n\t.monthly-details .custom-select.custom-select1{\n\t\twidth: 100px;\n\t}\n\t.select-items div, .select-selected{\n\t\tfont-size: 12px;\n\t\tpadding: 3px 6px;\n\t}\n\t.overview-details p{\n\t\tfont-size: 14px;\n\t\tline-height: 20px;\n\t\tmargin-top: 5px;\n\t}\n\t.amount-input .select-selected {\n\t    line-height: 30px;\n\t}\n\t.insights-hero{\n\t\tpadding: 66px 0 165px 25px;\n\t}\n\t.highcharts-main{\n\t\tpadding: 0 30px;\n\t}\n\t.highcharts-color{\n\t\twidth: 33.33%;\n\t}\n\t.account-tabbing{\n\t\tpadding: 70px 30px;\n\t}\n\t.tab-pane{\n\t\tpadding: 70px 50px 100px 40px;\n\t}\n\t.nav-tabbingac .nav-linksac{\n\t\tfont-size: 16px;\n\t}\n}\n@media screen and (max-width: 991px){\n\t.menu-border:before{\n\t\tcontent: none;\n\t}\n\tul.nav.nav-tabbingac {\n\t    padding: 60px 0 0 25px;\n\t}\n\t.nav-tabbingac .nav-linksac{\n\t\tmargin-bottom: 15px;\n\t}\n\t.tab-pane {\n\t    padding: 50px 25px;\n\t}\n\t.form-message-main{\n\t\tmargin-top: 60px;\n\t}\n\t.Form.account-form .btn.btn-success {\n\t    padding: 10px 0;\n\t    max-width: 196px;\n\t    margin: 30px auto 0;\n\t}\n\t.edit-title{\n\t\tfont-size: 25px;\n\t\tline-height: 30px;\n\t\tmargin-bottom: 20px;\n\t}\n\t.overview-details p {\n\t    font-size: 12px;\n\t    line-height: 10px;\n\t}\n\t.bd-links{\n\t\tpadding: 102px 0 0 15px;\n\t}\n\t.marketplace{\n\t\tpadding: 0 20px;\n\t}\n\t.nav-tabbing{\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\t.insights-hero{\n\t\tbackground: #5AC7F5;\n\t\tpadding: 60px 0 60px 25px;\n\t}\n\t.insights-subtitles{\n\t\tmax-width: 100%;\n\t}\n\t.highcharts-main{\n\t\tpadding: 0;\n\t\tmargin-top: 40px;\n\t}\n\t.spending-breakdown{\n\t\tmargin-bottom: 30px;\n\t\tpadding: 40px 25px;\n\t}\n\t.spending-breakdown.monthly-income{\n\t\tpadding: 40px 25px;\n\t}\n\n}\n@media screen and (max-width: 767px){\n\t.main-row:before{\n\t\tcontent: none;\n\t}\n\t.bd-sidebar{\n\t\twidth: 100%;\n\t\tfloat: none;\n\t\tbox-shadow: 0px 4px 14px 1px rgb(0 0 0 / 10%);\n\t}\n\t.account-tabbing {\n\t    padding: 30px 0 0 0;\n\t}\n\t.growup-imgage{\n\t\tdisplay: none;\n\t}\n\t.Form{\n\t\tmax-width: 100%;\n\t}\n\t.modal-wrapper .modal-body{\n\t\tpadding: 20px 50px 40px;\n\t}\n\t.modal-wrapper{\n\t\twidth: 90%;\n\t}\n\t.modal-wrapper .modal-body{\n\t\tpadding: 10px 15px 30px;\n\t}\n\t.progress-process{\n\t\theight: 8px;\n\t}\n\t.insights-title{\n\t\tfont-size: 26px;\n\t\tline-height: 35px;\n\t\tmargin-bottom: 30px;\n\t}\n\t.insights-images img{\n\t\tmargin-bottom: 30px;\n\t\twidth: 1700px;\n\t}\n\t.color-box {\n\t    display: flex;\n\t    justify-content: space-between;\n\t}\n\t.highcharts-color{\n\t\twidth: auto;\n\t}\n\t.color-concept{\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tmargin-right: 4px;\n\t}\n\t.highcharts-images{\n\t\tmargin-bottom: 30px;\n\t}\n\t.bd-links{\n\t\tpadding: 30px 0 0 15px;\n\t}\n\t.bd-links ul li a{\n\t\tmargin-bottom: 15px;\n\t}\n}\n@media screen and (max-width: 575px){\n\t.btn-account{\n\t\tmargin-top: 15px;\n\t}\n}\n@media screen and (max-width: 480px){\n\t.income-retailer,\n\t.housing .income-retailer{\n\t\tpadding: 15px 15px 15px 25px;\n\t}\n\t.marketplace {\n\t    padding: 0 15px;\n\t}\n\t.pay-text{\n\t\tpadding: 0 0 10px 0;\n\t}\n\t.prise-input,\n\t.monthly-details .custom-select,\n\t.monthly-details .custom-select.custom-select1{\n\t\twidth: 100%;\n\t\tfloat: none;\n\t\tmargin: 0 0 10px 0;\n\t}\n\t.pay-info,\n\t.monthly-details,\n\t.footer ul{\n\t    display: inline-block !important;\n\t    width: 100%;\n\t}\n\t.footer ul li,\n\t.footer ul li a {\n\t    float: left;\n\t}\n\t.nav-tabbing .nav-items .nav-links{\n\t\tpadding: 0 15px 8px 15px;\n\t}\n\t.progress-info span{\n\t\tfont-size: 10px;\n\t}\n\t.inner-tabbing ul li a{\n\t\tpadding: 6px 10px;\n\t}\n\t.color-box{\n\t\tdisplay: inline-block;\n\t}\n\t.highcharts-color{\n\t\tpadding: 0 6px;\n\t}\n\t.spending-breakdown{\n\t\tpadding: 20px 15px;\n\t}\n\t.highcharts-subtitles{\n\t\tmargin: 15px 0;\n\t}\n\t.spending-breakdown.monthly-income{\n\t\tpadding: 20px 15px;\n\t}\n}\n/* draggable */\n.draggable-list {\n\tborder-radius: 4px;\n\toverflow: hidden;\n\t\n  }\n.draggable-box {\n\tpadding: 20px 10px;\n\tborder-bottom: solid 1px #ccc;\n\tcolor: rgba(0, 0, 0, 0.87);\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbox-sizing: border-box;\n\tcursor: move;\n\tfont-size: 14px;\n  }\n.cdk-drag-preview {\n\t  z-index: 9999 !important;\n\t  box-sizing: border-box;\n\t  border-radius: 4px;\n\t  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n\t\t\t\t0 8px 10px 1px rgba(0, 0, 0, 0.14),\n\t\t\t\t0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\t\t\t\tbackground: rgba( 255, 255, 255, 1 );\n\t  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n\t  backdrop-filter: blur( 20px );\n\t  -webkit-backdrop-filter: blur( 20px );\n\t  border: 1px solid rgba( 255, 255, 255, 0.18 );\n  }\n.cdk-drag-placeholder {\n\topacity: 0;\n  }\n.cdk-drag-animating {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n.draggable-box:last-child {\n\tborder: none;\n  }\n.draggable-list.cdk-drop-list-dragging .draggable-box:not(.cdk-drag-placeholder) {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n/* draggable */\n/* ======================================================\n\tWatch_Video_page's\n====================================================== */\n/* ======================================================\n\t\tVideo_popup\n\t====================================================== */\n/* Modal Base CSS */\n.scotch-overlay {\n\t\t    position: fixed;\n\t\t    z-index: 9998;\n\t\t    top: 0;\n\t\t    left: 0;\n\t\t    opacity: 0;\n\t\t    width: 100%;\n\t\t    height: 100%;\n\t\t    transition: 1ms opacity ease;\n\t\t    background: rgba(0, 0, 0, 0.6);\n\t\t}\n.scotch-modal {\n\t\t    position: absolute;\n\t\t    z-index: 9999;\n\t\t    top: 50%;\n\t\t    left: 50%;\n\t\t    opacity: 0;\n\t\t    width: 94%;\n\t\t    padding: 24px 20px;\n\t\t    transition: 1ms opacity ease;\n\t\t    transform: translate(-50%, -50%);\n\t\t    border-radius: 2px;\n\t\t    background: #fff;\n\t\t}\n.scotch-modal.scotch-open.scotch-anchored {\n\t\t    top: 20px;\n\t\t    transform: translate(-50%, 0);\n\t\t}\n.scotch-modal.scotch-open {\n\t\t    opacity: 1;\n\t\t}\n.scotch-overlay.scotch-open {\n\t\t    opacity: 1;\n\t\t}\n/* Close Button */\n.scotch-close {\n\t\t    width: 30px;\n\t\t    height: 30px;\n\t\t    font-size: 24px;\n\t\t    font-weight: 700;\n\t\t    line-height: 12px;\n\t\t    position: absolute;\n\t\t    top: -10px;\n\t\t    right: -10px;\n\t\t    padding: 5px 7px 7px;\n\t\t    color: #fff;\n\t\t    border: 0;\n\t\t    outline: none;\n\t\t    border-radius: 100px;\n\t\t    background: #5AC7F5;\n\t\t    text-align: center;\n\t\t}\n/* Default Animation */\n.scotch-overlay.fade-and-drop {\n\t\t    display: block;\n\t\t    opacity: 0;\n\t\t}\n.scotch-modal.fade-and-drop {\n\t\t    top: -300%;\n\t\t    opacity: 1;\n\t\t    display: block;\n\t\t}\n.scotch-modal.fade-and-drop.scotch-open {\n\t\t    top: 50%;\n\t\t    transition: 500ms top 500ms ease;\n\t\t}\n.scotch-modal.fade-and-drop.scotch-open.scotch-anchored {\n\t\t    transition: 500ms top 500ms ease;\n\t\t}\n.scotch-overlay.fade-and-drop.scotch-open {\n\t\t    top: 0;\n\t\t    transition: 500ms opacity ease;\n\t\t    opacity: 1;\n\t\t}\n.scotch-modal.fade-and-drop {\n\t\t    transition: 500ms top ease;\n\t\t}\n.scotch-overlay.fade-and-drop {\n\t\t    transition: 500ms opacity 500ms ease;\n\t\t}\n#content {\n\t\t    display: none;\n\t\t}\n.trigger-button {\n\t\t\tborder: 0;\n\t\t    font-size: 12px;\n\t\t    padding: 8px 18px;\n\t\t    color: #595959;\n\t\t    outline: none;\n\t\t    font-weight: 300;\n\t\t    border-radius: 100px;\n\t\t    margin-bottom: 31px;\n\t\t    line-height: 1;\n\t\t}\n.video-hero{\n\t\t\tbackground: #B6E7D2;\n\t\t\tborder-radius: 20px;\n\t\t\tpadding: 22px 118px 0 45px;\n\t\t\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n\t\t}\n.video-banner .insights-subtitles{\n\t\t\tcolor: #595959;\n\t\t\tfont-size: 10px;\n\t\t\tline-height: 12px;\n\t\t\tmax-width: 60%;\n\t\t\tfont-weight: 300;\n\t\t\tmargin: 10px 0 35px;\n\t\t}\n.video-banner .insights-title{\n\t\t\tfont-weight: 500;\n\t\t}\na.insight_btn {\n\t\t\tline-height: 1.5rem;\n\t\t\tcolor: white;\n\t\t\tfont-size: 1rem;\n\t\t\tcursor: pointer;\n\t\t\tpadding: 0.375rem 1rem;\n\t\t\ttext-align: center;\n\t\t\tbackground: #5AC7F5;\n\t\t\tborder-radius: 8px;\n\t\t\tword-break: break-word;\n\t\t\ttext-decoration: none;\n\t\t\tborder: 2px solid transparent;\n\t\t\ttransition: background 0.3s ease;\n\t\t}\n.budgetPlanning_btn:hover{\n\t\t\tcolor: #5AC7F5;\n\t\t\tbackground: transparent;\n\t\t\tborder: 2px solid #5AC7F5;\n\t\t}\n.budgetPlanning_btn{\n\t\t\tline-height: 2rem;\n\t\t\tcolor: white;\n\t\t\tfont-size: 1.2rem;\n\t\t\tcursor: pointer;\n\t\t\tpadding: 0.375rem 1rem;\n\t\t\ttext-align: center;\n\t\t\tbackground: #5AC7F5;\n\t\t\tborder-radius: 8px;\n\t\t\tword-break: break-word;\n\t\t\ttext-decoration: none;\n\t\t\tborder: 2px solid transparent;\n\t\t\ttransition: background 0.3s ease;\n\t\t}\n.prompting{\n\t\t\ttext-align: center;\n\t\t}\n.prompting h3 span{\n\t\t\tfont-weight: 600;\n\t\t\tdisplay: block;\n    \t\tcolor: #69757a !important;\n\t\t\tfont-size: 1.5rem;\n\t\t\tline-height: 2.5;\n\t\t}\n.confirm-btns {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\tmargin-top: 20px !important;\n\t\t}\na.insight_btn:hover {\n\t\t\tcolor: #5AC7F5;\n\t\t\tbackground: transparent;\n\t\t\tborder: 2px solid #5AC7F5;\n\t\t}\n.video-title{\n\t\t\tfont-size: 25px;\n\t\t\tline-height: 45px;\n\t\t\tfont-weight: 500;\n\t\t}\n.blog-title{\n\t\t\tfont-size: 20px;\n\t\t\tline-height: 25px;\n\t\t\tfont-weight: 500;\n\t\t}\n.blog-subtitle,\n\t\t.blog-smalltitle{\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 12px;\n\t\t\tfont-weight: 300;\n\t\t\tmargin: 15px 0;\n\t\t}\n.blog-smalltitle{\n\t\t\tmargin: 0;\n\t\t}\n.video-box{\n\t\t\tmargin-bottom: 35px;\n\t\t}\n.myText.video-box{\n\t\t\tdisplay: block;\n\t\t}\n.video-box{\n\t\t\tdisplay: none;\n\t\t}\n.top-trading .blog-title {\n\t\t    font-size: 12px;\n\t\t    line-height: 15px;\n\t\t    margin-bottom: 6px;\n\t\t    display: inline-block;\n\t\t}\n.top-trading .blog-contant{\n\t\t\tfont-size: 6px;\n\t\t\tline-height: 7.56px;\n\t\t}\na#loadMore {\n\t\t\tfont-weight: 400;\n\t\t    font-size: 10px;\n\t\t    line-height: 12px;\n\t\t    color: #5AC7F5;\n\t\t    display: table;\n\t\t    margin: 47px auto 0;\n\t\t}\n.top-trading .video-box{\n\t\t\tmargin-bottom: 30px;\n\t\t}\n.top-trading{\n\t\t\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n\t\t\tpadding: 30px 50px 125px 30px;\n\t\t\tborder-radius: 17px;\n\t\t\tmargin-top: 52px;\n\t\t}\n.watch-video .account-tabbing{\n\t\t\tpadding: 105px 70px 0 70px;\n\t\t}\n.footer.footer-watchvideo ul{\n\t\t\tmargin: 78px 0 15px;\n\t\t}\n.paidVideoDisable{\n\t\t\tfilter: blur(2px);\n\t\t}\n/* from */\n.invalid-feedback {\n\t\t\tcolor: red;\n\t\t}\n.user-menu.nav > li > a {\n    color: #333;\n    font-size: 14px;\n    line-height: 58px;\n    padding: 0 15px;\n    height: 60px;\n}\n/* ======================================================\n\tchoose plan\n====================================================== */\n.grid {\n\tgap: 5%;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n}\n.card {\n\tborder-radius: 8px;\n\tbackground: #FFFFFF;\n\tpadding: 35px 35px 32px 35px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);\n}\n.card_title {\n\tfont-size: 24px;\n\tfont-weight: 500;\n}\n.pricing {\n\tfont-weight: 500;\n\tfont-size: 22px;\n\tline-height: 15px;\n\tmargin-bottom: 25px;\n}\n.pricing .small {\n\tfont-size: 16px;\n}\n.border-prising {\n\twidth: 17rem;\n\tdisplay: table;\n\tmargin: 0 auto 15px;\n\tpadding-bottom: 10px;\n\tborder-bottom: 1px solid #5AC7F5;\n}\n.ribbon {\n\tposition: relative;\n\tcolor: white;\n\ttop: -20px;\n    left: 10px\n  }\n.feature-checkicon{\n\tcolor: green;\n    margin-right: 10px;\n    font-size: 12px;\n}\n.feature-timesicon{\n\tcolor: red;\n    margin-right: 10px;\n    font-size: 12px;\n}\n.features {\n\tmargin: 0px 0px 0px 20px;\n\tlist-style-position: inside;\n\theight: 350px;\n    overflow: auto;\n}\n.freePlan{\n\tmargin-bottom: 62px;;\n}\n.features li {\n\tfont-size: 16px;\n\tline-height: 20px;\n\tpadding-bottom: 20px;\n}\n.features li img{\n\tmargin-right: 10px;\n}\na.cta_btn {\n\tline-height: 1;\n\tcolor: white;\n\tfont-size: 18px;\n\tpadding: 11px 15px;\n\ttext-align: center;\n\tbackground: #5AC7F5;\n\tborder-radius: 8px;\n\tmargin-top: 15px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tborder: 2px solid transparent;\n\ttransition: background 0.3s ease;\n}\na.cta_btn:hover {\n\tcolor: #5AC7F5;\n\tbackground: transparent;\n\tborder: 2px solid #5AC7F5;\n}\n.prising-table-title{\n\tfont-size: 25px;\n\tline-height: 45px;\n\tfont-weight: 500;\n\tmargin: 105px 0px 30px 0px;\n\ttext-align: left !important;\n}\n.featured-ribbon{\n\tposition: absolute;\n\ttop: 0;\n\tright: 15px;\n}\n.prising-table{\n\tpadding: 0 23px 158px 23px;\n}\n/* ======================================================\n\tProgress_Plane\n====================================================== */\n.panelbar2-card{\n\tpadding: 15px;\n}\n.step-banner {\n\tbackground-color: #48ce65;\n    color: #fff;\n    height: 2.625rem;\n    padding-top: 0.5625rem;\n    position: relative;\n    text-align: center;\n    border-top-left-radius: 19px !important;\n    border-top-right-radius: 19px !important;\n}\n.completed{\n\tbackground-color: #48ce65;\n}\n.pending{\n\tbackground-color: #2cb5ee;\n}\n.step-banner-Pending {\n    color: #fff;\n    height: 2.625rem;\n    padding-top: 0.5625rem;\n    position: relative;\n    text-align: center;\n    border-top-left-radius: 19px !important;\n    border-top-right-radius: 19px !important;\n}\n.step-banner span{\n\tcolor: white !important;\n\tfont-size: 20px;\n\tfont-weight: 600;\n}\n.progress-panel{\n\tbackground-image: url('earn-money.png');\n}\n.progress-title span{\n\tcolor: #5AC7F5;\n\tfont-size: 20px;\n\tline-height: 25px;\n\tmargin-right: 2px;\n}\n.progress-title p {\n\tline-height: 1;\n\tfont-weight: 700;\n\tfont-size: 80px;\n\tbackground: -webkit-linear-gradient(rgb(90,199,245,0.60), rgb(90,199,245,0.0));\n\t-webkit-background-clip: text;\n\t-webkit-text-fill-color: transparent;\n}\n.progress-title{\n\tline-height: 1;\n}\n.panel-title{\n\tfont-size: 24px;\n\tline-height: 30px;\n\tfont-weight: 500;\n\tmargin: 10px 0 15px;\t\t\n}\n.panel-step-padding{\n\tpadding: 0px 5px;\n}\n.panel-subtitles{\n\tfont-size: 16px;\n\tline-height: 20px;\n\tfont-weight: 400;\n}\n.emergency-title{\n\tfont-size: 24px;\n\tline-height: 30px;\n\tfont-weight: 500;\n\tmargin-bottom: 10px;\n}\n.emergency-prise{\n\tcolor: #5AC7F5;\n\tfont-size: 30px;\n\tline-height: 37px;\n}\n.emergency-fund p{\n\tfont-size: 16px;\n    line-height: 20px;\n    font-weight: 400;\n    padding-bottom: 40px;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #CFCFCF;\n}\n.emergency-fund{\n\t/* margin-top: 101px;\t */\n\tborder-radius: 19px;\n\t/* padding: 36px 30px 23px 22px;  */\n\tbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n}\n.fund-title{\n\tmargin-bottom: 10px;\n}\n.progress-title{\n\tfont-size: 20px;\n\tfont-weight: 500;\n\tline-height: 25px;\n\tmargin-bottom: 5px;\n}\n.progress-line{\n\tborder-left: 1px solid #d5d9db;\n}\n.progress-subtitles{\n\tcolor: #5AC7F5;\t\n\tfont-size: 12px !important;\n\tline-height: 15px;\n}\n.eiusmod-title{\n\tfont-size: 14px;\n\tline-height: 15px;\n\tfont-weight: 300;\n\tmargin-bottom: 10px;\n}\n.amount-form label{\n\tfont-size: 14px;\n\tline-height: 17px;\n\tmargin-bottom: 8px\n}\n.amount-form input{\n\twidth: 100%;\n\toutline: none;\n\tfont-size: 14px;\n\tpadding: 9px 15px;\n\tborder-radius: 8px;\n\tmargin-bottom: 68px;\n\tdisplay: inline-block;\n\tborder: 1px solid #9D9D9D;\n}\n.amount-form .amount-btn{\n\tcolor: #FFF;\n\tfont-size: 16px;\n\tline-height: 1;\n\tdisplay: table;\n\tmargin: 0 auto;\n\tpadding: 10px 33px;\n\tbackground: #5AC7F5;\n\tborder-radius: 8px;\n\ttransition: all 0.3s ease 0s;\n\tborder: 2px solid transparent;\n}\n.amount-form .amount-btn:hover{\n\tcolor: #5AC7F5;\n\tbackground: transparent;\n\tborder: 2px solid #5AC7F5;\n}\n.amount-form{\n\tpadding: 47px;\n}\n.percentage-input span{\n\tfont-size: 20px;\n\tmargin-top: 16px;\n\tline-height: 25px;\n\tmargin-left: 3px;\n}\n.video-wrap {\nposition: relative;\n}\nvideo {\nwidth: 250;\n\nmax-width: 100%;\n\n}\n.controls {\nposition: absolute;\nwidth: 100%;\nbottom: 4px;\nleft: 0;\nbackground-color: rgba(0, 0, 0, 0.5);\n}\nbutton {\npadding: 10px;\nfont-size: 14px;\nborder: 0;\ncursor: pointer;\ncolor: #000;\nbackground-color: transparent;\n}\nbutton:focus,\nbutton:active {\noutline: 0;\nborder: 0;\n}\n.bar-wrap {\nbackground-color: #000;\nwidth: 100%;\nheight: 5px;\n}\n.bar {\nposition: absolute;\nbackground: #fff;\nheight: 5px;\ntransition: 0.2s;\n}\nbutton.bigButton {\nposition: absolute;\nz-index: 99;\nleft: 50%;\ntop: 50%;\npadding: 0;\nfont-size: 100px;\ntransform: translate(-50%, -50%);\n}\ni.fas.fa-play-circle{\nposition: absolute;\ntop: 50%;\nleft: 50%;\nopacity: 0;\ntransform: translate(-50%, -50%);\n}\n.hide {\n-webkit-animation-name: butonHide;\n        animation-name: butonHide;\n-webkit-animation-duration: 1s;\n        animation-duration: 1s;\nopacity: 0;\n}\n.button-next{\nheight: 0;\nopacity: 0;\n}\nbutton.play{\ndisplay: none;\n}\n@-webkit-keyframes butonHide {\n0% {\n\tfont-size: 100px;\n\topacity: 1;\n}\n100% {\n\tfont-size: 130px;\n\topacity: 0;\n}\n}\n@keyframes butonHide {\n0% {\n\tfont-size: 100px;\n\topacity: 1;\n}\n100% {\n\tfont-size: 130px;\n\topacity: 0;\n}\n}\n.progress-main{\npadding-bottom: 64px;\n}\n.about-money{\nmargin-top: 36px;\nborder-radius: 23px;\npadding: 55px 47px 46px 41px;\nbox-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.1);\n}\n.something-title{\ncolor: #FFF;\nfont-size: 36px;\nfont-weight: 700;\nline-height: 45px;\nletter-spacing: 2px;\nmargin-bottom: 45px;\n-webkit-text-stroke: 1px #52ACD2;\nfont-family: 'Outfit', sans-serif;\n}\n.something-subtitle{\nfont-size: 24px;\nline-height: 30px;\nfont-weight: 400;\n}\n.about-money{\nbackground-image: url('about-money.png');\nbackground-position: top right;\nbackground-repeat: no-repeat;\nbackground-size: auto;\n}\n.choose-row{\nmargin-left: 10.1%;\n}\n.insight-panel-image{\nmargin-left:0rem;\n}\n@media screen and (max-width: 1500px){\n.grid{\n\tgrid-template-columns: 1fr 1fr;\n}\n}\n@media screen and (max-width: 1300px){\n.highcharts-main{\n\tpadding: 0 60px;\n}\n.watch-video .account-tabbing{\n\tpadding: 50px 50px 0 50px;\n}\n.top-trading{\n\tpadding: 30px 20px 125px 20px;\n}\n}\n@media screen and (max-width: 1199px){\n.contact-us .Form{\n\tpadding: 90px 100px;\n}\n.blog-subtitle br{\n\tdisplay: none;\n}\n.monthly-details .custom-select.custom-select1{\n\twidth: 100px;\n}\n.select-items div, .select-selected{\n\tfont-size: 12px;\n\tpadding: 3px 6px;\n}\n.overview-details p{\n\tfont-size: 14px;\n\tline-height: 20px;\n\tmargin-top: 5px;\n}\n.amount-input .select-selected {\n\tline-height: 30px;\n}\n.insights-hero{\n\tpadding: 66px 0 165px 25px;\n}\n.highcharts-main{\n\tpadding: 0 30px;\n}\n.highcharts-color{\n\twidth: 33.33%;\n}\n.account-tabbing{\n\tpadding: 70px 30px;\n}\n.tab-pane{\n\tpadding: 70px 50px 100px 40px;\n}\n.nav-tabbingac .nav-linksac{\n\tfont-size: 16px;\n}\n}\n@media screen and (max-width: 991px){\n.contact-us .Form{\n\tpadding: 40px 40px;\n}\n.contact-us .footer.footer-watchvideo ul {\n\tmargin: 50px 0 15px;\n}\n.video-hero{\n\tpadding: 30px 25px;\n}\n.menu-border:before{\n\tcontent: none;\n}\nul.nav.nav-tabbingac {\n\tpadding: 60px 0 0 25px;\n}\n.nav-tabbingac .nav-linksac{\n\tmargin-bottom: 15px;\n}\n.tab-pane {\n\tpadding: 50px 25px;\n}\n.form-message-main{\n\tmargin-top: 60px;\n}\n.Form.account-form .btn.btn-success {\n\tpadding: 10px 0;\n\tmax-width: 196px;\n\tmargin: 30px auto 0;\n}\n.edit-title{\n\tfont-size: 25px;\n\tline-height: 30px;\n\tmargin-bottom: 20px;\n}\n.overview-details p {\n\tfont-size: 12px;\n\tline-height: 10px;\n}\n.bd-links{\n\tpadding: 102px 0 0 15px;\n}\n.marketplace{\n\tpadding: 0 20px;\n}\n.nav-tabbing{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.insights-hero{\n\tbackground: #5AC7F5;\n\tpadding: 60px 0 60px 25px;\n}\n.insights-subtitles{\n\tmax-width: 100%;\n}\n.highcharts-main{\n\tpadding: 0;\n\tmargin-top: 40px;\n}\n.spending-breakdown{\n\tmargin-bottom: 30px;\n\tpadding: 40px 25px;\n}\n.spending-breakdown.monthly-income{\n\tpadding: 40px 25px;\n}\n}\n@media screen and (max-width: 767px){\n.prising-table-title{\n\tfont-size: 26px;\n\tline-height: 35px;\n\tmargin: 60px 0 40px;\n}\n.card{\n\tpadding: 35px 15px 32px 15px;\n}\n.prising-table {\n\tpadding: 0 0 158px 0;\n}\n.contact-us .Form{\n\tpadding: 30px 25px;\n}\n.main-row:before{\n\tcontent: none;\n}\n.bd-sidebar{\n\twidth: 100%;\n\tfloat: none;\n\tbox-shadow: 0px 4px 14px 1px rgb(0 0 0 / 10%);\n}\n.account-tabbing {\n\tpadding: 30px 0 0 0;\n}\n.growup-imgage{\n\tdisplay: none;\n}\n.Form{\n\tmax-width: 100%;\n}\n.modal-wrapper .modal-body{\n\tpadding: 20px 50px 40px;\n}\n.modal-wrapper{\n\twidth: 90%;\n}\n.modal-wrapper .modal-body{\n\tpadding: 10px 15px 30px;\n}\n.progress-process{\n\theight: 8px;\n}\n.insights-title{\n\tfont-size: 26px;\n\tline-height: 35px;\n\tmargin-bottom: 30px;\n}\n.insights-images img{\n\tmargin-bottom: 30px;\n}\n.color-box {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.highcharts-color{\n\twidth: auto;\n}\n.color-concept{\n\twidth: 10px;\n\theight: 10px;\n\tmargin-right: 4px;\n}\n.highcharts-images{\n\tmargin-bottom: 30px;\n}\n.bd-links{\n\tpadding: 30px 0 0 15px;\n}\n.bd-links ul li a{\n\tmargin-bottom: 15px;\n}\n.scotch-modal.fade-and-drop.scotch-open {\n\tmax-width: 100% !important;\n}\n.scotch-content iframe{\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n}\n@media screen and (max-width: 575px){\n.grid {\n\tgrid-template-columns: 1fr;\n}\n.btn-account{\n\tmargin-top: 15px;\n}\n.watch-video .account-tabbing{\n\tpadding: 50px 15px 0 15px;\n}\n.blog-title{\n\tmargin-top: 30px;\n\tdisplay: inline-block;\n}\n.top-trading{\n\tpadding: 30px 20px;\n}\n}\n@media screen and (max-width: 480px){\n.income-retailer,\n.housing .income-retailer{\n\tpadding: 15px 15px 15px 25px;\n}\n.marketplace {\n\tpadding: 0 15px;\n}\n.pay-text{\n\tpadding: 0 0 10px 0;\n}\n.prise-input,\n.monthly-details .custom-select,\n.monthly-details .custom-select.custom-select1{\n\twidth: 100%;\n\tfloat: none;\n\tmargin: 0 0 10px 0;\n}\n.pay-info,\n.monthly-details,\n.footer ul{\n\tdisplay: inline-block !important;\n\twidth: 100%;\n}\n.footer ul li,\n.footer ul li a {\n\tfloat: left;\n}\n.nav-tabbing .nav-items .nav-links{\n\tpadding: 0 15px 8px 15px;\n}\n.progress-info span{\n\tfont-size: 10px;\n}\n.ml-13{\n\tmargin-left: 13.5% !important;\n}\n.inner-tabbing ul li a{\n\tpadding: 6px 10px;\n}\n.color-box{\n\tdisplay: inline-block;\n}\n.highcharts-color{\n\tpadding: 0 6px;\n}\n.spending-breakdown{\n\tpadding: 20px 15px;\n}\n.highcharts-subtitles{\n\tmargin: 15px 0;\n}\n.spending-breakdown.monthly-income{\n\tpadding: 20px 15px;\n}\n.video-banner .insights-subtitles{\n\tmax-width: 100%;\n}\n.video-hero{\n\tpadding: 30px 15px;\n}\n}\n@media screen and (min-width: 768px) and (max-width:1440px){\n\t.insights-bgcolor{\n\t\tmargin-right: 2.5rem;\n\t}\n\t.progress-panel{\n\t\tmargin-left: 1.7rem;\n\t}\n\t.accounting-bgcolor{\n\t\tmargin-right: -2.5rem;\n\t}\n\t.setting-ml-10{\n\t\tmargin-left: 12%;\n\t}\n\t.prising-table {\n\t\tpadding: 0 23px 158px 35px;\n\t}\n\t.money-market {\n\t\twidth: calc(100% - 42.5rem);\n\t\tmargin-left: 2rem;\n\t\t}\n\t.choose-row{\n\t\tmargin-left: 12.6%\n\t}\n\t.insight-panel-image{\n\t\tmargin-left:1.7rem;\n\t}\n  }\n@media (min-width: 1920px) and (max-width: 2560px)  {\n    .money-market {\n\t\twidth: 836.6px;\n\t\tmargin-left: 0rem;\n\t\t}\n}\n@media screen and (max-width: 1500px){\n.grid{\n\tgrid-template-columns: 1fr 1fr;\n}\n}\n@media screen and (max-width: 1300px){\n.highcharts-main{\n\tpadding: 0 60px;\n}\n.watch-video .account-tabbing{\n\tpadding: 50px 50px 0 50px;\n}\n.top-trading{\n\tpadding: 30px 20px 125px 20px;\n}\n}\n@media screen and (max-width: 1199px){\n.contact-us .Form{\n\tpadding: 90px 100px;\n}\n.blog-subtitle br{\n\tdisplay: none;\n}\n.monthly-details .custom-select.custom-select1{\n\twidth: 100px;\n}\n.select-items div, .select-selected{\n\tfont-size: 12px;\n\tpadding: 3px 6px;\n}\n.overview-details p{\n\tfont-size: 14px;\n\tline-height: 20px;\n\tmargin-top: 5px;\n}\n.amount-input .select-selected {\n\tline-height: 30px;\n}\n.insights-hero{\n\tpadding: 66px 0 165px 25px;\n}\n.highcharts-main{\n\tpadding: 0 30px;\n}\n.highcharts-color{\n\twidth: 33.33%;\n}\n.account-tabbing{\n\tpadding: 70px 30px;\n}\n.tab-pane{\n\tpadding: 70px 50px 100px 40px;\n}\n.nav-tabbingac .nav-linksac{\n\tfont-size: 16px;\n}\n}\n@media screen and (max-width: 991px){\n.contact-us .Form{\n\tpadding: 40px 40px;\n}\n.contact-us .footer.footer-watchvideo ul {\n\tmargin: 50px 0 15px;\n}\n.video-hero{\n\tpadding: 30px 25px;\n}\n.menu-border:before{\n\tcontent: none;\n}\nul.nav.nav-tabbingac {\n\tpadding: 60px 0 0 25px;\n}\n.nav-tabbingac .nav-linksac{\n\tmargin-bottom: 15px;\n}\n.tab-pane {\n\tpadding: 50px 25px;\n}\n.form-message-main{\n\tmargin-top: 60px;\n}\n.Form.account-form .btn.btn-success {\n\tpadding: 10px 0;\n\tmax-width: 196px;\n\tmargin: 30px auto 0;\n}\n.edit-title{\n\tfont-size: 25px;\n\tline-height: 30px;\n\tmargin-bottom: 20px;\n}\n.overview-details p {\n\tfont-size: 12px;\n\tline-height: 10px;\n}\n.bd-links{\n\tpadding: 102px 0 0 15px;\n}\n.marketplace{\n\tpadding: 0 20px;\n}\n.nav-tabbing{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.insights-hero{\n\tbackground: #5AC7F5;\n\tpadding: 60px 0 60px 25px;\n}\n.insights-subtitles{\n\tmax-width: 100%;\n}\n.highcharts-main{\n\tpadding: 0;\n\tmargin-top: 40px;\n}\n.spending-breakdown{\n\tmargin-bottom: 30px;\n\tpadding: 40px 25px;\n}\n.spending-breakdown.monthly-income{\n\tpadding: 40px 25px;\n}\n}\n@media screen and (max-width: 767px){\n/* Start */\n.something-title{\n\tfont-size: 25px;\n\tline-height: 35px;\n}\n.something-title br,\n.something-subtitle br{\n\tdisplay: none;\n}\n.something-subtitle{\n\tfont-size: 18px;\n\tline-height: 20px;\n}\n.about-money,\n.amount-form{\n\tpadding: 30px 15px;\n}\n.progress-main{\n\tpadding-bottom: 30px;\n}\n.amount-form input{\n\tmargin-bottom: 30px;\n}\n.emergency-fund{\n\tmargin-top: 0;\n}\n/* End */\n.prising-table-title{\n\tfont-size: 26px;\n\tline-height: 35px;\n\tmargin: 60px 0 40px;\n}\n.card{\n\tpadding: 35px 15px 32px 15px;\n}\n.prising-table {\n\tpadding: 0 0 158px 0;\n}\n.contact-us .Form{\n\tpadding: 30px 25px;\n}\n.main-row:before{\n\tcontent: none;\n}\n.bd-sidebar{\n\twidth: 100%;\n\tfloat: none;\n\tbox-shadow: 0px 4px 14px 1px rgb(0 0 0 / 10%);\n\tpadding-top: 4rem;\n}\n.account-tabbing {\n\tpadding: 30px 0 0 0;\n}\n.growup-imgage{\n\tdisplay: none;\n}\n.Form{\n\tmax-width: 100%;\n}\n.modal-wrapper .modal-body{\n\tpadding: 20px 50px 40px;\n}\n.modal-wrapper{\n\twidth: 90%;\n}\n.modal-wrapper .modal-body{\n\tpadding: 10px 15px 30px;\n}\n.progress-process{\n\theight: 8px;\n}\n.insights-title{\n\tfont-size: 26px;\n\tline-height: 35px;\n\tmargin-bottom: 30px;\n}\n.insights-images img{\n\tmargin-bottom: 30px;\n}\n.color-box {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.highcharts-color{\n\twidth: auto;\n}\n.color-concept{\n\twidth: 10px;\n\theight: 10px;\n\tmargin-right: 4px;\n}\n.highcharts-images{\n\tmargin-bottom: 30px;\n}\n.bd-links{\n\tpadding: 30px 0 0 15px;\n}\n.bd-links ul li a{\n\tmargin-bottom: 15px;\n}\n.scotch-modal.fade-and-drop.scotch-open {\n\tmax-width: 100% !important;\n}\n.scotch-content iframe{\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n}\n@media screen and (max-width: 575px){\n.grid {\n\tgrid-template-columns: 1fr;\n}\n.btn-account{\n\tmargin-top: 15px;\n}\n.watch-video .account-tabbing{\n\tpadding: 50px 15px 0 15px;\n}\n.blog-title{\n\tmargin-top: 30px;\n\tdisplay: inline-block;\n}\n.top-trading{\n\tpadding: 30px 20px;\n}\n}\n@media screen and (max-width: 480px){\n.income-retailer,\n.housing .income-retailer{\n\tpadding: 15px 15px 15px 25px;\n}\n.marketplace {\n\tpadding: 0 15px;\n}\n.pay-text{\n\tpadding: 0 0 10px 0;\n}\n.prise-input,\n.monthly-details .custom-select,\n.monthly-details .custom-select.custom-select1{\n\twidth: 100%;\n\tfloat: none;\n\tmargin: 0 0 10px 0;\n}\n.pay-info,\n.monthly-details,\n.footer ul{\n\tdisplay: inline-block !important;\n\twidth: 100%;\n}\n.footer ul li,\n.footer ul li a {\n\tfloat: left;\n}\n.nav-tabbing .nav-items .nav-links{\n\tpadding: 0 15px 8px 15px;\n}\n.progress-info span{\n\tfont-size: 10px;\n}\n.inner-tabbing ul li a{\n\tpadding: 6px 10px;\n}\n.color-box{\n\tdisplay: inline-block;\n}\n.highcharts-color{\n\tpadding: 0 6px;\n}\n.spending-breakdown{\n\tpadding: 20px 15px;\n}\n.highcharts-subtitles{\n\tmargin: 15px 0;\n}\n.spending-breakdown.monthly-income{\n\tpadding: 20px 15px;\n}\n.video-banner .insights-subtitles{\n\tmax-width: 100%;\n}\n.video-hero{\n\tpadding: 30px 15px;\n}\n.message-delete{\n\tcolor: #0073b9;\n\tsize: 123px;\n}\n.btn-outline-primary {\n    /* color: #007bff; */\n    /* border-color: #007bff; */\n    background-color: white;\n    border-radius: 25px;\n}\n/*-----------------\n\t25. Responsive\n-----------------------*/\n\n@media (min-width: 768px) {\n\t.avatar-xxl {\n\t\twidth: 8rem;\n\t\theight: 8rem;\n\t}\n\t.avatar-xxl .border {\n\t\tborder-width: 4px !important;\n\t}\n\t.avatar-xxl .rounded {\n\t\tborder-radius: 12px !important;\n\t}\n\t.avatar-xxl .avatar-title {\n\t\tfont-size: 42px;\n\t}\n\t.avatar-xxl.avatar-away:before,\n\t.avatar-xxl.avatar-offline:before,\n\t.avatar-xxl.avatar-online:before {\n\t\tborder-width: 4px;\n\t}\n}\n@media (min-width: 992px) {\n\t#toggle_btn {\n\t\talign-items: center;\n\t\tcolor: #333;\n\t\tdisplay: inline-flex;\n\t\tfloat: left;\n\t\tfont-size: 30px;\n\t\theight: 60px;\n\t\tjustify-content: center;\n\t\tmargin-left: 15px;\n\t\tpadding: 0 15px;\n\t}\n\t.mini-sidebar .header-left .logo img {\n\t\theight: auto;\n\t\tmax-height: 40px;\n\t\twidth: auto;\n\t}\n\t.mini-sidebar .header .header-left .logo {\n\t\tdisplay: none;\n\t}\n\t.mini-sidebar .header-left .logo.logo-small {\n\t\tdisplay: block;\n\t}\n\t.mini-sidebar .header .header-left {\n\t\tpadding: 0 5px;\n\t\twidth: 78px;\n\t}\n\t.mini-sidebar .sidebar {\n\t\twidth: 78px;\n\t}\n\t.mini-sidebar.expand-menu .sidebar {\n\t\twidth: 240px;\n\t}\n\t.mini-sidebar .menu-title {\n\t\tvisibility: hidden;\n\t\twhite-space: nowrap;\n\t}\n\t.mini-sidebar.expand-menu .menu-title {\n\t\tvisibility: visible;\n\t}\n\t.mini-sidebar .menu-title a {\n\t\tvisibility: hidden;\n\t}\n\t.mini-sidebar.expand-menu .menu-title a {\n\t\tvisibility: visible;\n\t}\n\t.modal-open.mini-sidebar .sidebar {\n\t\tz-index: 1051;\n\t}\n\t.mini-sidebar .sidebar .sidebar-menu ul > li > a span {\n\t\tdisplay: none;\n\t\ttransition: all 0.2s ease-in-out;\n\t\topacity: 0;\n\t}\n\t.mini-sidebar.expand-menu .sidebar .sidebar-menu ul > li > a span {\n\t\tdisplay: inline;\n\t\topacity: 1;\n\t} \n\t.mini-sidebar .page-wrapper {\n\t\tmargin-left: 78px;\n\t}\n}\n@media (max-width: 991.98px) {\n\t.header .header-left {\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t}\n\t.add-item {\n\t\tmargin-top: 10px;\n\t}\n\t.flag-nav{\n\t\tdisplay: none;\n\t}\n\t.mobile_btn {\n\t\tcolor: #333;\n\t\tcursor: pointer;\n\t\tdisplay: block;\n\t\tfont-size: 24px;\n\t\theight: 60px;\n\t\tleft: 0;\n\t\tline-height: 60px;\n\t\tpadding: 0 15px;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\ttop: 0;\n\t\tz-index: 10;\n\t}\n\t#toggle_btn {\n\t\tdisplay: none;\n\t}\n\t.top-nav-search {\n\t\tdisplay: none;\n\t}\n\t.login-wrapper .loginbox .login-left {\n\t\tpadding: 80px 50px;\n\t\twidth: 50%;\n\t}\n\t.login-wrapper .loginbox .login-right {\n\t\tpadding: 50px;\n\t\twidth: 50%;\n\t}\n\t.sidebar {\n\t\tmargin-left: -225px;\n\t\twidth: 225px;\n\t\ttransition: all 0.4s ease;\n\t\tz-index: 1041;\n\t}\n\t.page-wrapper {\n\t\tmargin-left: 0;\n\t\tpadding-left: 0;\n\t\tpadding-right: 0;\n\t\ttransition: all 0.4s ease;\n\t}\n\t.chat-window .chat-scroll {\n\t\tmax-height: calc(100vh - 255px);\n\t}\n\t.chat-window .chat-cont-left,\n\t.chat-window .chat-cont-right {\n\t\tflex: 0 0 100%;\n\t\tmax-width: 100%;\n\t\ttransition: left 0.3s ease-in-out 0s, right 0.3s ease-in-out 0s;\n\t\twidth: 100%;\n\t}\n\t.chat-window .chat-cont-left {\n\t\tborder-right: 0;\n\t}\n\t.chat-window .chat-cont-right {\n\t\tposition: absolute;\n\t\tright: calc(-100% + -1.875rem);\n\t\ttop: 0;\n\t}\n\t.chat-window .chat-cont-right .chat-header {\n\t\tjustify-content: start;\n\t}\n\t.chat-window .chat-cont-right .chat-header .back-user-list {\n\t\tdisplay: block;\n\t}\n\t.chat-window .chat-cont-right .chat-header .chat-options {\n\t\tmargin-left: auto;\n\t}\n\t.chat-window.chat-slide .chat-cont-left {\n\t\tleft: calc(-100% + -1.875rem);\n\t}\n\t.chat-window.chat-slide .chat-cont-right {\n\t\tright: 0;\n\t}\n}\n@media (max-width: 767.98px) {\n\tbody {\n\t\tfont-size: 0.9375rem;\n\t}\n\th1,\n\t.h1 {\n\t\tfont-size: 2rem;\n\t}\n\th2,\n\t.h2 {\n\t\tfont-size: 1.75rem;\n\t}\n\th3,\n\t.h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\th4,\n\t.h4 {\n\t\tfont-size: 1.125rem;\n\t}\n\th5,\n\t.h5 {\n\t\tfont-size: 1rem;\n\t}\n\th6,\n\t.h6 {\n\t\tfont-size: 0.875rem;\n\t}\n\t.header .has-arrow .dropdown-toggle:after {\n\t\tdisplay: none;\n\t}\n\t.user-menu.nav > li > a > span:not(.user-img) {\n\t\tdisplay: none;\n\t}\n\t.navbar-nav .open .dropdown-menu {\n\t\tfloat: left;\n\t\tposition: absolute;\n\t}\n\t.navbar-nav.user-menu .open .dropdown-menu {\n\t\tleft: auto;\n\t\tright: 0;\n\t}\n\t.header .header-left {\n\t\tpadding: 0 15px;\n\t}\n\t.header .header-left .logo {\n\t\tdisplay: none;\n\t}\n\t.header-left .logo.logo-small {\n\t\tdisplay: inline-block;\n\t}\n\t.login-wrapper .loginbox .login-left {\n\t\tdisplay: none;\n\t}\n\t.login-wrapper .loginbox {\n\t\tmax-width: 450px;\n\t\tmin-height: unset;\n\t}\n\t.login-wrapper .loginbox .login-right {\n\t\tfloat: none;\n\t\tpadding: 1.875rem;\n\t\twidth: 100%;\n\t}\n\t.top-action-left .float-left {\n\t\tfloat: none !important;\n\t}\n\t.top-action-left .btn-group {\n\t\tmargin-bottom: 15px;\n\t}\n\t.top-action-right {\n\t\ttext-align: center;\n\t}\n\t.top-action-right a.btn.btn-white {\n\t\tmargin-bottom: 15px;\n\t}\n\t.mail-sent-time {\n\t\tfloat: left;\n\t\tmargin-top: 10px;\n\t\twidth: 100%;\n\t}\n\t.login-wrapper .loginbox .login-right h1 {\n\t\tfont-size: 22px;\n\t}\n\t.error-box h1 {\n\t\tfont-size: 6em;\n\t}\n\t.error-box .btn {\n\t\tfont-size: 15px;\n\t\tmin-width: 150px;\n\t\tpadding: 8px 20px;\n\t}\n\t.dash-count {\n\t\tfont-size: 16px;\n\t\tdisplay: inline-block;\n\t}\n\t.dash-widget-header{\n\t\tdisplay: block;\n\t}\n\t.nav {\n\t\tdisplay: block;\n\t}\n}\n@media (max-width: 575.98px) {\n\t.card {\n\t\tmargin-bottom: 0.9375rem;\n\t}\n\t.page-wrapper > .content {\n\t\tpadding: 0.9375rem 0.9375rem 0;\n\t}\n\t.chat-window {\n\t\tmargin-bottom: 0.9375rem;\n\t}\n\t.card-body {\n\t\tpadding: 1.25rem;\n\t}\n\t.card-header {\n\t\tpadding: .75rem 1.25rem;\n\t}\n\t.card-footer {\n\t\tpadding: .75rem 1.25rem;\n\t}\n\t.page-header {\n\t\tmargin-bottom: 0.9375rem;\n\t}\n\t.pagination-lg .page-link {\n\t\tfont-size: 1.2rem;\n\t\tpadding: 0.5rem 0.625rem;\n\t}\n\t.invoice-details {\n\t\tfloat: left;\n\t\ttext-align: left;\n\t}\n\t.fc-toolbar .fc-right {\n\t\tdisplay: inline-block;\n\t\tfloat: none;\n\t\tmargin: 10px auto 0;\n\t\twidth: 200px;\n\t\tclear: both;\n\t}\n\t.fc-toolbar .fc-left {\n\t\tfloat: none;\n\t\tmargin: 0 auto;\n\t\twidth: 200px;\n\t}\n\t.fc-toolbar .fc-center {\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n\t.fc-toolbar .fc-center h2 {\n\t\twidth: 100%;\n\t}\n\t.chat-window .chat-cont-right .chat-header .media .media-body {\n\t\tdisplay: none;\n\t}\n\t.chat-window .chat-cont-left .chat-users-list a.media .media-body > div:first-child .user-name,\n\t.chat-window .chat-cont-left .chat-users-list a.media .media-body > div:first-child .user-last-chat {\n\t\tmax-width: 160px;\n\t}\n\t.page-header .breadcrumb {\n\t\tdisplay: none;\n\t}\n}\n\n\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvZnJvbnQvY3NzL2Zyb250LXN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSEFBb0g7QUFDcEg7O3dEQUV3RDtBQUV4RDs7RUFFRSxpQkFBaUI7Q0FDbEI7QUFDQTtFQUNDLGVBQWU7Q0FDaEI7QUFDQTtFQUNDLGVBQWU7RUFDZiw0Q0FBNEM7Q0FDN0M7QUFDQTtFQUNDLHFCQUFxQjtDQUN0QjtBQUVEOzt3REFFd0Q7QUFDdkQ7RUFDQyxxQkFBcUI7Q0FDdEI7QUFDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDQTtFQUNDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDQTtFQUNDLGNBQWM7Q0FDZjtBQUNBO0tBQ0ksTUFBTTtLQUNOLFFBQVE7S0FDUixVQUFVO0NBQ2Q7QUFDQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNBOztFQUVDLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQ0FBaUM7Q0FDbEM7QUFDQTs2Q0FDNEMsd0JBQXdCO0lBQ2pFLGNBQWM7Q0FDakI7QUFDQTtvQ0FDbUMsZ0JBQWdCO0lBQ2hELGNBQWM7Q0FDakI7QUFDQTt3Q0FDdUMsV0FBVztJQUMvQyxjQUFjO0NBQ2pCO0FBQ0E7bUNBQ2tDLGdCQUFnQjtJQUMvQyxjQUFjO0NBQ2pCO0FBQ0E7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7QUFDQTs7O0VBR0MsMkJBQTJCO0VBQzNCLHlCQUF5QjtDQUMxQjtBQUNBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJB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ekI7Q0FDQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0NBQ1o7Q0FDQTtFQUNDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtDQUNiO0NBQ0E7RUFDQyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxhQUFhO0NBQ2Q7Q0FDQTs7RUFFQyxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOzs7O0FBSUEiLCJmaWxlIjoic3JjL2Fzc2V0cy9mcm9udC9jc3MvZnJvbnQtc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Q29udGFpbmVyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmNvbnRhaW5lcntcblxuXHRcdG1heC13aWR0aDogMTAwNnB4O1xuXHR9XG5cdGltZ3tcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdH1cblx0Ym9keSxoMSxoMixoMyxoNCxoNSxoNixwLHNwYW4sc3Ryb25nLGEsZGl2LGlucHV0LGJ1dHRvbntcblx0XHRjb2xvcjogIzU5NTk1OSA7XG5cdFx0Zm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG5cdH1cblx0YSxhOmhvdmVye1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2lnbl9VcFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cdC5zaWduLXVwe1xuXHRcdHBhZGRpbmc6IDk4cHggMCAxNDVweDtcblx0fVxuXHQuc2lnbnVwLXRpdGxle1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRsaW5lLWhlaWdodDogMzdweDtcblx0XHRjb2xvcjogIzAwMDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdG1hcmdpbjogMTVweCAwIDE4cHg7XG5cdH1cblx0LnNpZ251cC1zdWJ0aXRsZXtcblx0XHRjb2xvcjogIzg2ODY4Njtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0XHRtYXJnaW4tYm90dG9tOiAzNnB4O1xuXHR9XG5cdC5zaWdudXAtc3VidGl0bGUgYXtcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0fVxuXHQuZ3Jvd3VwLWltZ2FnZSB7XG5cdCAgICB0b3A6IDA7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHdpZHRoOiA1MCU7XG5cdH1cblx0LmZvcm0tZ3JvdXAge1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0LnNpZ24tdXAgLmZvcm0tZ3JvdXAgaW5wdXQsXG5cdGlucHV0I3Bhc3N3b3Jke1xuXHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdG1hcmdpbi1ib3R0b206IDE4cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjOUQ5RDlEO1xuXHRcdGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcblx0fVxuXHQuc2lnbi11cCAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcblx0aW5wdXQjcGFzc3dvcmQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG5cdCAgXHRjb2xvcjogIzg2ODY4Njtcblx0fVxuXHQuc2lnbi11cCAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlcixcblx0aW5wdXQjcGFzc3dvcmQ6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuXHQgIFx0Y29sb3I6ICM4Njg2ODY7XG5cdH1cblx0LnNpZ24tdXAgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuXHRpbnB1dCNwYXNzd29yZDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cblx0ICBcdGNvbG9yOiAjODY4Njg2O1xuXHR9XG5cdC5zaWduLXVwIC5mb3JtLWdyb3VwIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIsXG5cdGlucHV0I3Bhc3N3b3JkOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuXHQgIFx0Y29sb3I6ICM4Njg2ODY7XG5cdH1cblx0LmZvcm0tZ3JvdXAgbGFiZWx7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdGNvbG9yOiAjNUU2RThCO1xuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0fVxuXHQuc2lnbi11cCAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzLFxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93biksXG5cdC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG5cdFx0Ym94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM1QUM3RjU7XG5cdH1cblx0LkZvcm0gLmJ0bi5idG4tc3VjY2Vzc3tcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0cGFkZGluZzogMTdweCAxNXB4O1xuXHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcblx0XHR3aWR0aDogMzM0cHg7XG5cdH1cblx0LkZvcm0gLmJ0bi5idG4tc3VjY2Vzczpob3Zlcntcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjNUFDN0Y1O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG5cdC5Gb3JtIHtcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgbWF4LXdpZHRoOiA0MDBweDtcblx0fVxuXHQuRm9ybS10aXRsZSB7XG5cdCAgICBjb2xvcjogIzAwMzg2YTtcblx0ICAgIG1hcmdpbjogMCAwIDE1cHg7XG5cdH1cblx0LkZvcm0tZGVzY3JpcHRpb24ge1xuXHQgICAgY29sb3I6IHJnYmEoMTA5LCAxMDIsIDEwMSwgMC41KTtcblx0fVxuXHQuRm9ybS1maWVsZHMge1xuXHQgICAgZGlzcGxheTogZmxleDtcblx0ICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0LkNvbnRyb2wtbGFiZWwge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0ICAgIGNvbG9yOiAjNUU2RThCO1xuXHQgICAgbGluZS1oZWlnaHQ6IDE7XG5cdCAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cdCAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xuXHR9XG5cdC5Db250cm9sLXJlcXVpcmVtZW50cyB7XG5cdCAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuXHQgICAgYm9yZGVyLXRvcDogbm9uZTtcblx0ICAgIG1hcmdpbjogLTE0cHggMCAxNXB4O1xuXHQgICAgbWF4LWhlaWdodDogMDtcblx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcblx0ICAgIHBhZGRpbmc6IDAgOXB4O1xuXHR9XG5cdC5Db250cm9sSW5wdXQge1xuXHQgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXHQgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTk3LCAxOTMsIDE5MiwgMCkgaW5zZXQ7XG5cdCAgICBjb2xvcjogIzZkNjY2NTtcblx0ICAgIG1hcmdpbjogMC44ZW0gMDtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNWMxYzA7XG5cdCAgICBwYWRkaW5nOiAwLjZlbSAwLjZlbTtcblx0ICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgZWFzZS1vdXQ7XG5cdH1cblx0LkNvbnRyb2xJbnB1dDpob3ZlciB7XG5cdCAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxOTcsIDE5MywgMTkyLCAwLjQpIGluc2V0O1xuXHR9XG5cdC5Db250cm9sSW5wdXQ6Zm9jdXMge1xuXHQgICAgb3V0bGluZTogIzVBQzdGNSBhdXRvIDNweDtcblx0fVxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDotbW96LXBsYWNlaG9sZGVyLXNob3duKSB7XG5cdCAgICBib3JkZXItY29sb3I6IHJlZDtcblx0fVxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDotbXMtaW5wdXQtcGxhY2Vob2xkZXIpIHtcblx0ICAgIGJvcmRlci1jb2xvcjogcmVkO1xuXHR9XG5cdC5Db250cm9sSW5wdXQ6aW52YWxpZDpub3QoOmZvY3VzKTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG5cdCAgICBib3JkZXItY29sb3I6IHJlZDtcblx0fVxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDotbW96LXBsYWNlaG9sZGVyLXNob3duKSArIC5Db250cm9sLWxhYmVsIHtcblx0ICAgIGNvbG9yOiByZWQ7XG5cdH1cblx0LkNvbnRyb2xJbnB1dDppbnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6LW1zLWlucHV0LXBsYWNlaG9sZGVyKSArIC5Db250cm9sLWxhYmVsIHtcblx0ICAgIGNvbG9yOiByZWQ7XG5cdH1cblx0LkNvbnRyb2xJbnB1dDppbnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLkNvbnRyb2wtbGFiZWwge1xuXHQgICAgY29sb3I6IHJlZDtcblx0fVxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDotbW96LXBsYWNlaG9sZGVyLXNob3duKSArIC5Db250cm9sLWxhYmVsICsgLkNvbnRyb2wtcmVxdWlyZW1lbnRzIHtcblx0ICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuXHQgICAgcGFkZGluZzogOXB4O1xuXHQgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuXHR9XG5cdC5Db250cm9sSW5wdXQ6aW52YWxpZDpub3QoOmZvY3VzKTpub3QoOi1tcy1pbnB1dC1wbGFjZWhvbGRlcikgKyAuQ29udHJvbC1sYWJlbCArIC5Db250cm9sLXJlcXVpcmVtZW50cyB7XG5cdCAgICBtYXgtaGVpZ2h0OiAxMDBweDtcblx0ICAgIHBhZGRpbmc6IDlweDtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcblx0fVxuXHQuQ29udHJvbElucHV0OmludmFsaWQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAuQ29udHJvbC1sYWJlbCArIC5Db250cm9sLXJlcXVpcmVtZW50cyB7XG5cdCAgICBtYXgtaGVpZ2h0OiAxMDBweDtcblx0ICAgIHBhZGRpbmc6IDlweDtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcblx0fVxuXHQuQ29udHJvbElucHV0OnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikge1xuXHQgICAgYm9yZGVyLWNvbG9yOiAjNWZhNTUwO1xuXHR9XG5cdC5Db250cm9sSW5wdXQ6dmFsaWQ6bm90KDpmb2N1cyk6bm90KDotbXMtaW5wdXQtcGxhY2Vob2xkZXIpIHtcblx0ICAgIGJvcmRlci1jb2xvcjogIzVmYTU1MDtcblx0fVxuXHQuQ29udHJvbElucHV0OnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcblx0ICAgIGJvcmRlci1jb2xvcjogIzVmYTU1MDtcblx0fVxuXHQuQ29udHJvbElucHV0OnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikgKyAuQ29udHJvbC1sYWJlbCB7XG5cdCAgICBjb2xvcjogIzVmYTU1MDtcblx0fVxuXHQuQ29udHJvbElucHV0OnZhbGlkOm5vdCg6Zm9jdXMpOm5vdCg6LW1zLWlucHV0LXBsYWNlaG9sZGVyKSArIC5Db250cm9sLWxhYmVsIHtcblx0ICAgIGNvbG9yOiAjNWZhNTUwO1xuXHR9XG5cdC5Db250cm9sSW5wdXQ6dmFsaWQ6bm90KDpmb2N1cyk6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAuQ29udHJvbC1sYWJlbCB7XG5cdCAgICBjb2xvcjogIzVmYTU1MDtcblx0fVxuXHQuQ29udHJvbC1yZXF1aXJlbWVudHMtLWVtYWlsLFxuXHQuQ29udHJvbElucHV0LS1lbWFpbCB7XG5cdCAgICBvcmRlcjogLTE7XG5cdH1cblx0LkNvbnRyb2wtbGFiZWwtLWVtYWlsIHtcblx0ICAgIG9yZGVyOiAtMjtcblx0fVxuXHQuQ29udHJvbElucHV0LS1wYXNzd29yZCB7XG5cdCAgICBvcmRlcjogMDtcblx0ICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cdH1cblx0LkNvbnRyb2wtbGFiZWwtLXBhc3N3b3JkIHtcblx0ICAgIG1hcmdpbi1ib3R0b206IC0yOXB4O1xuXHR9XG5cdC5Db250cm9sLWxhYmVsLS1zaG93UGFzc3dvcmQge1xuXHQgICAgd2lkdGg6IDE2cHg7XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICB0b3A6IDQ2cHg7XG5cdCAgICBsZWZ0OiAxMDAlO1xuXHQgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cdCAgICBtYXJnaW4tbGVmdDogLTMycHg7XG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0LkZvcm0tc3VibWl0IHtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNzU0MmI7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc1NDJiO1xuXHQgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXHQgICAgY29sb3I6ICNmZmY7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgbWF4LXdpZHRoOiAxMDAlO1xuXHQgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdCAgICBvcGFjaXR5OiAwLjY7XG5cdCAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cdCAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2Utb3V0LCBtYXgtd2lkdGggMTUwbXMgZWFzZS1vdXQ7XG5cdCAgICBvdXRsaW5lOiBub25lO1xuXHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQgICAgbWFyZ2luOiBhdXRvO1xuXHR9XG5cdC5Gb3JtLXN1Ym1pdDpob3ZlciB7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgzZDE3O1xuXHR9XG5cdC5Gb3JtLXN1Ym1pdDphY3RpdmUge1xuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogIzliMmYxMTtcblx0ICAgIG1heC13aWR0aDogNTBweDtcblx0ICAgIG92ZXJmbG93OiBoaWRkZW47XG5cdCAgICB0ZXh0LWluZGVudDogMzAwcHg7XG5cdH1cblx0LkZvcm0tc3VibWl0OmFjdGl2ZSAuQnV0dG9uLXNwaW5uZXIge1xuXHQgICAgb3BhY2l0eTogMTtcblx0fVxuXHQuQ29udHJvbElucHV0LS1lbWFpbDp2YWxpZCB+IC5Db250cm9sSW5wdXQtLXBhc3N3b3JkOnZhbGlkIH4gLkZvcm0tc3VibWl0IHtcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcblx0ICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuXHQgICAgb3BhY2l0eTogMTtcblx0fVxuXHQuQnV0dG9uLXNwaW5uZXIge1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiA1MCU7XG5cdCAgICBsZWZ0OiA1MCU7XG5cdCAgICBtYXJnaW4tbGVmdDogLTEzcHg7XG5cdCAgICBtYXJnaW4tdG9wOiAtMTNweDtcblx0ICAgIG9wYWNpdHk6IDA7XG5cdH1cblx0LnNob3ctcGFzc3dvcmQge1xuXHQgICAgZGlzcGxheTogbm9uZTtcblx0fVxuXHQuc2hvdy1wYXNzd29yZDpjaGVja2VkIH4gLkNvbnRyb2xJbnB1dC0tcGFzc3dvcmQge1xuXHQgICAgdGV4dC1zZWN1cml0eTogZGlzYztcblx0ICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eTogZGlzYztcblx0ICAgIC1tb3otdGV4dC1zZWN1cml0eTogZGlzYztcblx0fVxuXHQuc2hvdy1wYXNzd29yZDpjaGVja2VkIH4gLkNvbnRyb2wtbGFiZWwtLXNob3dQYXNzd29yZCAuc3ZnLXRvZ2dsZS1wYXNzd29yZCAuY2xvc2VkLWV5ZSB7XG5cdCAgICBvcGFjaXR5OiAxO1xuXHQgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLCBoZWlnaHQgNDAwbXMgZWFzZTtcblx0ICAgIHdpZHRoOiA0cHg7XG5cdCAgICBoZWlnaHQ6IDQ0cHg7XG5cdH1cblx0LnN2Zy10b2dnbGUtcGFzc3dvcmQge1xuXHQgICAgZmlsbDogIzg2ODY4Njtcblx0fVxuXHQuc3ZnLXRvZ2dsZS1wYXNzd29yZCAuY2xvc2VkLWV5ZSB7XG5cdCAgICBvcGFjaXR5OiAwO1xuXHQgICAgaGVpZ2h0OiAwO1xuXHR9XG5cdC5CdXR0b24ge1xuXHQgICAgcGFkZGluZzogMTBweDtcblx0ICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdCAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHQgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cdH1cblx0LnNwaW5uZXIge1xuXHQgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMnMgbGluZWFyIGluZmluaXRlO1xuXHQgICAgYW5pbWF0aW9uOiBkYXNoIDJzIGxpbmVhciBpbmZpbml0ZTtcblx0ICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuXHQgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuXHR9XG5cdEAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHtcblx0ICAgIDAlIHtcblx0ICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcblx0ICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxNTAuNiAxMDAuNDtcblx0ICAgIH1cblx0ICAgIDUwJSB7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSAyNTA7XG5cdCAgICB9XG5cdCAgICAxMDAlIHtcblx0ICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNTAyO1xuXHQgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE1MC42IDEwMC40O1xuXHQgICAgfVxuXHR9XG5cdEBrZXlmcmFtZXMgZGFzaCB7XG5cdCAgICAwJSB7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTUwLjYgMTAwLjQ7XG5cdCAgICB9XG5cdCAgICA1MCUge1xuXHQgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEgMjUwO1xuXHQgICAgfVxuXHQgICAgMTAwJSB7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwMjtcblx0ICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxNTAuNiAxMDAuNDtcblx0ICAgIH1cblx0fVxuXHRALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lci1pbiB7XG5cdCAgICAwJSB7XG5cdCAgICAgICAgb3BhY2l0eTogMDtcblx0ICAgIH1cblx0ICAgIDIwJSxcblx0ICAgIDgwJSB7XG5cdCAgICAgICAgb3BhY2l0eTogMTtcblx0ICAgIH1cblx0ICAgIDEwMCUge1xuXHQgICAgICAgIG9wYWNpdHk6IDA7XG5cdCAgICB9XG5cdH1cblx0QGtleWZyYW1lcyBzcGlubmVyLWluIHtcblx0ICAgIDAlIHtcblx0ICAgICAgICBvcGFjaXR5OiAwO1xuXHQgICAgfVxuXHQgICAgMjAlLFxuXHQgICAgODAlIHtcblx0ICAgICAgICBvcGFjaXR5OiAxO1xuXHQgICAgfVxuXHQgICAgMTAwJSB7XG5cdCAgICAgICAgb3BhY2l0eTogMDtcblx0ICAgIH1cblx0fVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaWduX0luXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LmZvcm0tcmVtZW1iZXIsXG5cdC5mb3JtLXJlY292ZXJ5e1xuXHRcdGNvbG9yOiAjNUFDN0Y1O1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuZm9ybS1yZWNvdmVyeXtcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0fVxuXHQuc2lnbi11cCAuZm9ybS1ncm91cCAuZm9ybS1yZW1lbWJlciBpbnB1dHtcblx0XHRtYXJnaW4tdG9wOiAxcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAzcHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzg2ODY4Njtcblx0fVxuXHQuZm9ybS1ncm91cC5jaGVja2JveHtcblx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEZvcmdvdF9QYXNzd29yZFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cdC5yZXR1cm4tYnRue1xuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cblx0LmZvcmdvdC1wYXNzd29yZHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXHQuZm9yZ290LXBhc3N3b3JkIC5zaWdudXAtc3VidGl0bGV7XG5cdFx0bWFyZ2luOiAyM3B4IGF1dG8gNjlweDtcblx0fVxuXHQuY29uZm9ybS1wYXNzd29yZCAuQ29udHJvbC1sYWJlbC0tcGFzc3dvcmR7XG5cdFx0bWFyZ2luLXRvcDogMThweDtcblx0fVxuXHQucmVzZXQtcGFzc3dvcmTCoC5Db250cm9sLWxhYmVsLS1wYXNzd29yZHtcblx0XHRtYXJnaW4tYm90dG9tOiAtMjVweDtcblx0fVxuXHQuRm9ybS1maWVsZHMuY29uZm9ybS1wYXNzd29yIC5Db250cm9sLWxhYmVsLS1wYXNzd29yZHtcblx0XHRtYXJnaW4tdG9wOiAxOHB4O1xuXHR9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRIZWFkZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHQubWFya2V0cGxhY2V7XG5cdFx0LyogYmFja2dyb3VuZDogI0Y1RkJGRDsgKi9cblx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHR9XG5cdC5idWR6ZXQgLmNvbnRhaW5lcixcblx0LmJ1ZHpldC1oZWFkZXIgLmNvbnRhaW5lcntcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDEzNjZweDtcblx0fVxuXHQuYnVkemV0LWhlYWRlcntcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDRweCAxNHB4IDFweCByZ2IoMCAwIDAgLyA4JSk7XG5cdFx0ei1pbmRleDogOTk5OTk5OTk7XG5cdH1cblx0LmJkLXNpZGViYXIge1xuXHQgICAgZmxvYXQ6IGxlZnQ7XG5cdCAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0XHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2Utb3V0LHRvcCAuMnMgZWFzZS1vdXQ7XG5cdFx0dHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2Utb3V0LHRvcCAuMnMgZWFzZS1vdXQ7XG5cblx0fVxuXHRcblx0Lm5hdmJhci1icmFuZCBpbWd7XG5cdFx0bWFyZ2luLWxlZnQ6IDQ1cHg7XG5cdH1cblx0LmJkLWxpbmtzIHVsIGxpIGEge1xuXHQgICAgZm9udC1zaXplOiAxNnB4O1xuXHQgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG5cdCAgICBmb250LXdlaWdodDogNTAwO1xuXHQgICAgY29sb3I6ICM1OTU5NTk7XG5cdCAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG5cdC5iZC1saW5rcyB7XG5cdFx0cGFkZGluZzogMTAycHggMCAwIDMycHg7XG5cdH1cblx0Lm1haW4tcm93OmJlZm9yZSB7XG5cdCAgICBjb250ZW50OiAnJztcblx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcblx0ICAgIHRvcDogMDtcblx0ICAgIGJvdHRvbTogMDtcblx0ICAgIGxlZnQ6IDA7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG5cdCAgICB6LWluZGV4OiAtMTtcblx0ICAgIGJhY2tncm91bmQ6ICNGRkY7XG5cdCAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDEwJSk7XG5cdH1cblx0Lm1vbmV5LW1hcmtldCB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHRvcDogMDtcblx0XHR3aWR0aDogODM2LjZweDtcblx0XHRtYXJnaW4tdG9wOiA3M3B4O1xuXHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRiYWNrZ3JvdW5kOiAjRjVGQkZEO1xuXHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdH1cblx0LmJ1Z2V0LWdyb3VwIHtcblx0XHRtYXJnaW4tdG9wOiAxNHJlbTtcblx0XHRtYXJnaW4tbGVmdDo1MHB4O1xuXHR9XG5cdC5iZC1saW5rcyB1bCBsaSBhIGltZ3tcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdH1cblx0LmJkLWxpbmtzIHVsIGxpIGEuYWN0aXZlLFxuXHQuYmQtbGlua3MgdWwgbGkgYTpob3Zlcntcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0TW9uZXlfTWFya2V0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0Lm1vbmV5LW1hcmtldHtcblx0XHRwYWRkaW5nLXRvcDogMnJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcblx0XHRwYWRkaW5nLWxlZnQ6NTBweDtcblx0fVxuXHQubW9uZXktbWFya2V0IGgxe1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzN3B4O1xuXHRcdGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcblx0fVxuXHQucmVhY3QtZGF0ZXBpY2tlcl9faW5wdXQtY29udGFpbmVye1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiA5OTk5O1xuXHR9XG5cdC5kYXRlcGlja2VyLWRyb3Bkb3duIHtcblx0XHR0b3A6OXJlbSAhaW1wb3J0YW50O1xuXHRcdGxlZnQ6IDMwcmVtICFpbXBvcnRhbnQ7XG5cdH1cblx0LmRhdGVDaGFuZ2VQaWNrZXItYnRue1xuXHRcdHBhZGRpbmctdG9wOiAzcHggIWltcG9ydGFudDtcblx0XHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcblx0XHRjb2xvcjojNUFDN0Y1O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblx0LnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LWNvbnRhaW5lcjpiZWZvcmV7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMTZweDtcblx0XHRyaWdodDogOHB4O1xuXHRcdHdpZHRoOiAxNHB4O1xuXHRcdGhlaWdodDogNnB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2Ryb3BfZG93bi5wbmcpO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHR6LWluZGV4OiA5OTtcblx0fVxuXHQubW9uZXktbWFya2V0IGgxIHNwYW57XG5cdFx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHR9XG5cdC5kYXRlcGlja2VyLXRpdGxlIGlucHV0e1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRmb250LXNpemU6IDA7XG5cdFx0d2lkdGg6IDMwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdHRvcDogLTEwcHg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1x0XG5cdH1cblx0LnByaXNlLXN1YnRpdGxlc3tcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHQucHJpc2Utc3VidGl0bGVzIHB7XG5cdFx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0fVxuXHQudHJhbnNhY3Rpb25zLWJ0biBzcGFue1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRsaW5lLWhlaWdodDogMjVweDtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0SW5jb21lX1JldGFpbGVyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LmluY29tZS1yZXRhaWxlcntcblx0XHRwYWRkaW5nOiAxN3B4IDE5cHggMzdweCAzMHB4OyBcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRib3JkZXItcmFkaXVzOiA5cHg7XG5cdH1cblxuXHQubWwtMDd7XG4gICAgIG1hcmdpbi1sZWZ0OjAuN3JlbSAhaW1wb3J0YW50O1xuXHR9XG5cdC5pbmNvbWUtcmV0YWlsZXItYm94e1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1x0XG5cdH1cblxuXHQuaW5jb21lLXRpdGxle1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG5cdC8qIC5jdXN0b20tc2VsZWN0IHtcblx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXI6IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHQgICAgZm9udC1mYW1pbHk6IEFyaWFsICFpbXBvcnRhbnQ7XG5cdH1cblx0LmN1c3RvbS1zZWxlY3Qgc2VsZWN0IHtcblx0ICAgIGRpc3BsYXk6IG5vbmU7IFxuXHR9ICovXG5cbi8qRmxpcCBEaXYgQ1NTIFN0YXJ0Ki9cblxuLmNyZHMge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jcmRzIC5jb250ZW50IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cztcbiAgfVxuICBcbiAgLm1vcmUge1xuXHRkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tb3JlOmNoZWNrZWQgfiAuY29udGVudCB7XG5cdHRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZylcbiAgfVxuICBcbiAgLmZyb250LFxuICAuYmFjayB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gIH1cbiAgLmZyb250IC5pbm5lcixcbiAgLmJhY2sgLmlubmVyIHtcblx0aGVpZ2h0OiBhdXRvO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cztcbiAgfVxuICBcbiAgLmZyb250IHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDFweCByZ2IoMCAwIDAgLyAxMCUpO1xuXHRib3JkZXItcmFkaXVzOiAxOXB4O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG5cbiAgLmZyb250OmFmdGVyIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDFweCByZ2IoMCAwIDAgLyAxMCUpO1xuICB9XG4gIFxuICAuZnJvbnQgaDIge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogM3B4O1xuXHRjb2xvcjogcmdiKDY4LCAxOCwgMTgpO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHR0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5iYWNrIHtcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDE5cHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTRweCAxcHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgfVxuXG4gIC5iYWNrIC5idXR0b24ge1xuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG5cdC8qIGdyaWQtcm93OiAtMTsgKi9cblx0Zm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMzNweDtcbiAgICBiYWNrZ3JvdW5kOiAjNUFDN0Y1O1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG4gIC5idXR0b246aG92ZXIge1xuXHRjb2xvcjogIzVBQzdGNSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1QUM3RjVcbiAgfVxuICAuYnV0dG9uLnJldHVybiB7XG5cdHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgdG9wOiAwLjc1cmVtO1xuICB9XG4gIC5zdGVwLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNC44NzVyZW07XG4gICAgcGFkZGluZzogMi4yNXJlbSA3LjVyZW0gMC4ycmVtIDEuNzVyZW07XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NGQ0ZDRjtcbn1cbiAuaGVhZGVyLWNhdGVnb3J5e1xuXHRmb250LXNpemU6IDFyZW07XG4gICAgYm90dG9tOiAxLjNyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH0gXG4gLmhlYWRlci1uYW1lIHtcbiAgICBjb2xvcjogIzM5YjllZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3R0b206IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RlcC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMXJlbSAxLjc1cmVtO1xufVxuLkJ1ZGdldEl0ZW1EZXRhaWxzLWZvcm1Db250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLkJ1ZGdldEl0ZW1EZXRhaWxzLWZvcm1Sb3cge1xuICAgIG1pbi1oZWlnaHQ6IDMuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcbn1cbi5CdWRnZXRJdGVtRGV0YWlscy1mb3JtTGFiZWwge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleDogMCAxIDU4LjMzMzMzJTtcbiAgICBmbGV4OiAwIDEgNTguMzMzMzMlO1xufVxuLkJ1ZGdldEl0ZW1EZXRhaWxzLWZvcm1MYWJlbCB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uQnVkZ2V0SXRlbURldGFpbHMtZm9ybUxhYmVsIHNtYWxsIHtcbiAgICBjb2xvcjogIzY5NzU3YTtcbn1cbi5CdWRnZXRJdGVtRGV0YWlscy1mb3JtUm93QW1vdW50IHtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuICAuZmxpcGNhcmQtdGV4dC1hbGlnbntcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0ZDRkNGO1xuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuIC8qRmxpcCBEaXYgQ1NTIEVuZCovXG5cblx0LnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICBjb250ZW50OiBcIlwiO1xuXHQgICAgdG9wOiAxMXB4O1xuXHQgICAgcmlnaHQ6IDVweDtcblx0ICAgIHdpZHRoOiA4cHg7XG5cdCAgICBoZWlnaHQ6IDRweDtcblx0ICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZHJvcF9kb3duLTEucG5nKTtcblx0ICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdH1cblx0LnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcblx0ICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG5cdH1cblx0Lm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdCAuc2VsZWN0LXNlbGVjdGVke1xuXHRcdGJvcmRlcjogMC41cHggc29saWQgIzVBQzdGNSAhaW1wb3J0YW50O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRwYWRkaW5nOiA0cHggMTBweDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdH1cblx0LnNlbGVjdC1pdGVtcyBkaXYsXG5cdC5zZWxlY3Qtc2VsZWN0ZWQge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xuXHQgICAgY29sb3I6ICM1OTU5NTk7XG5cdCAgICBwYWRkaW5nOiA4cHggMTZweDtcblx0ICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAwLjEpIHRyYW5zcGFyZW50O1xuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xuXHQgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cdH1cblx0LnNlbGVjdC1pdGVtcyB7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDEyMCU7XG5cdCAgICBsZWZ0OiAwO1xuXHQgICAgcmlnaHQ6IDA7XG5cdCAgICB6LWluZGV4OiA5OTtcblx0ICAgIGJvcmRlcjogMC41cHggc29saWQgIzVBQzdGNTtcblx0fVxuXHQuc2VsZWN0LWhpZGUge1xuXHQgICAgZGlzcGxheTogbm9uZTtcblx0fVxuXHQubW9udGhseS1kZXRhaWxzIC5jdXN0b20tc2VsZWN0e1xuXHRcdHdpZHRoOiA3MnB4O1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdG1hcmdpbjogMCA1cHg7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cblx0Lm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdC5jdXN0b20tc2VsZWN0MXtcblx0ICAgIHdpZHRoOiAxNTdweDtcblx0ICAgIGZsb2F0OiBsZWZ0O1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXHQucGF5LXRleHQge1xuXHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHQgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG5cdCAgICBjb2xvcjogIzU5NTk1OTtcblx0ICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXHR9XG5cdC5tdWx0aS1maWVsZCAucmVtb3ZlLWZpZWxkIHtcblx0ICAgIHRvcDogYXV0bztcblx0XHRib3R0b206IDEuNnJlbTtcbiAgICBcdGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5sZWZ0LTI1e1xuXHRcdGxlZnQ6IC0yNXB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnByaXNlLWlucHV0IHtcblx0ICAgIHdpZHRoOiAxMzVweDtcblx0ICAgIGhlaWdodDogMjVweDtcblx0XHRtYXJnaW4tbGVmdDogNDBweDtcblx0fVxuXHQucHJpc2UtaW5wdXQgaW5wdXR7XG5cdFx0d2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZzogNHB4IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHR9XG5cdC5wcmlzZS1pbnB1dCAuZm9ybS1jb250cm9sOmZvY3Vze1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdGNvbG9yOiAjNUFDN0Y1ICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyOiAwLjVweCBzb2xpZCAjNUFDN0Y1ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnByaXNlLWlucHV0IGlucHV0OmRpc2FibGVkLCAucHJpc2UtaW5wdXQgaW5wdXRbcmVhZG9ubHldIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6ICM1OTU5NTkgIWltcG9ydGFudDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cblx0LnByaXNlLWlucHV0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBcdFx0Y29sb3I6ICM1OTU5NTk7XG5cdH1cblx0LnByaXNlLWlucHV0IGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgXHRcdGNvbG9yOiAjNTk1OTU5O1xuXHR9XG5cdC5wcmlzZS1pbnB1dCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgXHRcdGNvbG9yOiAjNTk1OTU5O1xuXHR9XG5cdC5wcmlzZS1pbnB1dCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgXHRcdGNvbG9yOiAjNTk1OTU5O1xuXHR9XG5cdC5wYXktaW5mb3tcblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDA7XG5cdH1cblx0LmhlYWRlci10b3B0aXRsZSBzcGFuIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRwYWRkaW5nOiAwIDZweCAhaW1wb3J0YW50O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQuaGVhZGVyLXRvcHRpdGxlIHtcblx0XHR3aWR0aDogNDglO1xuXHR9XG5cdC5tdWx0aS1maWVsZC5jdXJyZW50IC5yZW1vdmUtZmllbGQge1xuXHRcdGxlZnQ6IC0zMHB4O1xuXHR9XG5cdC5hZGQtZmllbGR7XG5cdFx0cGFkZGluZzogMDtcblx0XHRib3JkZXI6IDA7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdGNvbG9yOiAjMDA5MWQ5O1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cblx0LkJ1ZGdldFN1bW1hcnl7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHR9XG5cdC5yZW1vdmUtZmllbGQge1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAzcHg7XG5cdCAgICBsZWZ0OiAtMTVweDtcblx0ICAgIGJvcmRlcjogMDtcblx0ICAgIHBhZGRpbmc6IDA7XG5cdCAgICBjb2xvcjogIzVBQzdGNTtcblx0ICAgIGZvbnQtc2l6ZTogMTJweDtcblx0ICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG5cdC5yZW1vdmUtZmllbGQ6aG92ZXJ7XG5cdFx0Y29sb3I6ICNlNjRiNDA7XG5cdH1cdFxuXHQubWFpbi10aXRsZSB7XG5cdCAgICBwYWRkaW5nOiA4cHggMjVweCA4cHggMTVweDtcblx0ICAgIGZvbnQtc2l6ZTogMTZweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHQgICAgYmFja2dyb3VuZDogIzVBQzdGNTtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuXHR9XG5cdC5pbmNvbWUtc3VidGl0bGVze1xuXHRcdG1hcmdpbi10b3A6IDFweDtcblx0XHRib3JkZXItYm90dG9tOiA0cHggc29saWQgIzVBQzdGNTtcblx0fVxuXHQubWFpbi10aXRsZSBpe1xuXHRcdG1hcmdpbi1sZWZ0OiA3cHg7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHR9XG5cdC5tYWluLXRpdGxlOmJlZm9yZXtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdHJpZ2h0OiAtNTBweDtcblx0XHR3aWR0aDogNjBweDtcblx0XHRoZWlnaHQ6IDM2cHg7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pbmNvbWUtc2hhcGUucG5nKTtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdH1cblx0LkFsbG9jYXRpb24tcm93Qm9keSB7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG5cdFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG5cdFx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHQtbXMtZmxleC13cmFwOiBub3dyYXA7XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0LW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG5cdFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuXHRcdC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXHQuQWxsb2NhdGlvbi1yb3dCb2R5IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XG5cdFx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdH1cblx0LnRyYW5zYWN0aW9ucy1ib3gxIHtcblx0XHRtYXJnaW46IDhweCAwIDEycHg7XG5cdH1cblx0LkFsbG9jYXRpb24tcm93RHJhZ0hhbmRsZVdyYXBwZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW46IDAgMCAwIC0xLjI1cmVtO1xuXHRcdGN1cnNvcjogbW92ZTtcblx0XHRwYWRkaW5nOiAwIDEuMjVyZW07XG5cdH1cblx0LkFsbG9jYXRpb24tcm93RGF0ZSB7XG5cdFx0LW1zLWZsZXg6IDAgMSAxNi42NjY2NyU7XG5cdFx0ZmxleDogMCAxIDE2LjY2NjY3JTtcblx0fVxuXHQuQWxsb2NhdGlvbi1yb3dEYXRlLCAuQWxsb2NhdGlvbi1yb3dEcmFnSGFuZGxlV3JhcHBlciB7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQtd2Via2l0LWJveC1mbGV4OiAwO1xuXHR9XG5cdC5BbGxvY2F0aW9uLXJvd01lcmNoYW50IHtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cdC5BbGxvY2F0aW9uLXJvd01lcmNoYW50IHtcblx0XHQtbXMtZmxleDogMCAxIDQxLjY2NjY3JTtcblx0XHRmbGV4OiAwIDEgNDEuNjY2NjclO1xuXHR9XG5cdC5BbGxvY2F0aW9uLXJvd0Ftb3VudCB7XG5cdFx0LXdlYmtpdC1ib3gtcGFjazogZW5kO1xuXHRcdC1tcy1mbGV4LXBhY2s6IGVuZDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG5cdFx0LW1zLWZsZXgtYWxpZ246IGVuZDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdH1cblx0LnRyYW5zYWN0aW9uLWRhdGVCbG9jayAuZGF0ZSwgLnRyYW5zYWN0aW9uLWRhdGVCbG9jayAuZGF5IHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdH1cblx0Lm1vbmV5Lm1vbmV5LS1zdWNjZXNzLFxuXHQuQWxsb2NhdGlvbi1yb3dNZXJjaGFudCBzcGFuLFxuXHQuQWxsb2NhdGlvbi1yb3dBbW91bnQgc3Bhbntcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdH1cblx0LkFsbG9jYXRpb24tcm93QW1vdW50IHNwYW57XG5cdFx0Y29sb3I6ICM1QUM3RjU7XG5cdH1cblx0LnRyYW5zYWN0aW9uLWRhdGVCbG9jayAuZGF5IHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdH1cblx0LnRyYW5zYWN0aW9uLWRhdGVCbG9jayAuZGF0ZSB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cdC8qPT09PT09PT09PT09PT09PT09PT09PT0gbGVhcm4gR3JpZCBjc3Mgc3RhcnQgPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXHQuZ3JpZC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHQgIH1cblx0ICAuZ3JpZC1tcntcblx0XHRtYXJnaW4tcmlnaHQ6IDByZW07XG5cdCAgfVxuXHQgIC5ncmlkLWl0ZW0ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOjVweDtcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDEwJSk7XG4gICAgXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHQgIH1cblx0Lyo9PT09PT09PT09PT09PT09PT09PT09PT0gbGVhcm4gR3JpZCBjc3MgZW5kID09PT09PT09PT09PT09PT09PT09PT09Ki9cblx0XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QnVkZ2V0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LmJ1ZGdldC10aXRsZXtcblx0XHRjb2xvcjogIzU5NTk1OTtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDI3cHg7XG5cdFx0bWFyZ2luOiA1MHB4IDAgMjBweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5wcm9ncmVzcy1pbmZvIHNwYW57XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHR9XG5cdC5wcm9ncmVzcy1pbmZvIHB7XG5cdFx0Y29sb3I6ICMwMDkxZDk7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHR9XG5cdC5pbnB1dC1jYXRlZ29yeS1sYmwgLmhlYWRlci1jYXRlZ29yeXtcblx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgXHRsaW5lLWhlaWdodDogMjJweDtcblx0fVxuXG5cdC5pbnB1dC1jYXRlZ29yeS1sYmwgaW5wdXQ6ZGlzYWJsZWQsIC5pbnB1dC1jYXRlZ29yeS1sYmwgaW5wdXRbcmVhZG9ubHldIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Y29sb3I6ICM1OTU5NTkgIWltcG9ydGFudDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuXHR9XG5cdC5pbnB1dC1jYXRlZ29yeS1sYmwgaW5wdXR7XG5cdFx0d2lkdGg6IDE4MHB4O1xuXHRcdGhlaWdodDogMjVweDtcblx0XHRwYWRkaW5nOiA0cHggMTBweDtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG5cdC5pbnB1dC1jYXRlZ29yeS1sYmwgLmZvcm0tY29udHJvbDpmb2N1c3tcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRjb2xvcjogIzAwOTFkOSAhaW1wb3J0YW50O1xuXHRcdGJvcmRlcjogMC41cHggc29saWQgIzAwOTFkOSAhaW1wb3J0YW50O1xuXHR9XG5cblx0LmlucHV0LWNhdGVnb3J5LWxibCAuZm9ybS1jb250cm9sOmhvdmVye1xuXHRcdGJhY2tncm91bmQ6ICNmOWY5Zjk7XG5cdH1cblxuXHQuaW5wdXQtcGxhc2hvbGRlciBpbnB1dDpkaXNhYmxlZCwgLmlucHV0LXBsYXNob2xkZXIgaW5wdXRbcmVhZG9ubHldIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRjb2xvcjogIzAwOTFkOSAhaW1wb3J0YW50O1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXHQuaW5wdXQtcGxhc2hvbGRlciBpbnB1dHtcblx0XHR3aWR0aDogMTMwcHg7XG5cdFx0aGVpZ2h0OiAyNXB4O1xuXHRcdHBhZGRpbmc6IDRweCAxMHB4O1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cblx0LmlucHV0LXBsYXNob2xkZXIgLmZvcm0tY29udHJvbDpmb2N1c3tcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRjb2xvcjogIzAwOTFkOSAhaW1wb3J0YW50O1xuXHRcdGJvcmRlcjogMC41cHggc29saWQgIzVBQzdGNSAhaW1wb3J0YW50O1xuXHR9XG5cdFxuXHQucHJvZ3Jlc3MtaW5mb3tcblx0XHRmbG9hdDogbGVmdDtcblx0XHR3aWR0aDogMzMuMzMlO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQucHJvZ3Jlc3MtdGV4dHtcblx0XHRtYXJnaW46IDhweCAwIDExcHg7XHRcblx0fVxuXHQuY2h1cmNoLXRpdGxle1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cdC5jaHVyY2gtdGl0bGUgaW1ne1xuXHRcdG1hcmdpbi1yaWdodDogOHB4O1xuXHR9XG5cdC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcblx0ICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlQmFyO1xuXHQgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcblx0ICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdCAgICBhbmltYXRpb24tZHVyYXRpb246IC40cztcblx0fVxuXHRAa2V5ZnJhbWVzIGFuaW1hdGVCYXIge1xuXHQgICAgMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7fVxuXHQgICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO31cblx0fVxuXHQucHJvZ3Jlc3MtcHJvY2Vzc3tcblx0XHRoZWlnaHQ6IDZweDtcblx0XHRiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMnB4IHJnYigwIDAgMCAvIDE1JSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNi41cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHR9XG5cdC50eHQtbGVmdHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnR4dC1yaWdodHtcblx0XHR0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuXHR9XG5cdC50YWItY29udGVudCAucHJvZ3Jlc3MtcHJvY2Vzc3tcblx0XHRoZWlnaHQ6IDEwcHg7XG5cdH1cblx0Lm11bHRpLWZpZWxke1xuXHRcdHotaW5kZXg6IDk5OTk7XG5cdH1cblx0Lm11bHRpLWZpZWxkLmN1cnJlbnQ6YmVmb3Jle1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IC0zMHB4O1xuXHRcdGJvdHRvbTogLTE1cHg7XG5cdFx0bGVmdDogLTQ1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4yNXJlbSAxcmVtIDAgcmdiKDMxIDM2IDM4IC8gMTYlKTtcblx0XHRib3gtc2hhZG93OiAwIDAuMjVyZW0gMXJlbSAwIHJnYigzMSAzNiAzOCAvIDE2JSk7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG5cdC5wcm9ncmVzcy1wcm9jZXNzLnByb2dyZXNzIC5wcm9ncmVzcy1iYXItc3VjY2Vzc3tcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNUFDN0Y1IDAlLCM1QUM3RjUgMTAwJSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNi41cHg7XG5cdH1cblx0LnByb2dyZXNzLXByb2Nlc3MucHJvZ3Jlc3MgLnByb2dyZXNzLWJhci13YXJuaW5ne1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmNWQ1NWEgMCUsICNiZWExNGUgMTAwJSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNi41cHg7XG5cdH1cblx0LnByb2dyZXNzLXByb2Nlc3MucHJvZ3Jlc3MgLnByb2dyZXNzLWJhci1kYW5nZXJ7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1NWE2ZSAwJSwgI2JlNGU0ZSAxMDAlKTtcblx0XHRib3JkZXItcmFkaXVzOiA2LjVweDtcblx0fVxuXHQucHJvZ3Jlc3MtcHJvY2Vzcy5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyLWluZm97XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzVBQzdGNSAwJSwgIzRFOURCRSAxMDAlKTtcblx0XHRib3JkZXItcmFkaXVzOiA2LjVweDtcblx0fVxuXHQuYnVkZ2V0LW1haW57XG5cdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0fVxuXHQuYnVkZ2V0LW1haW4gLmluY29tZS10aXRsZXtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdC5ob3VzaW5nIC5pbmNvbWUtcmV0YWlsZXJ7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDE4cHggMjBweCAxOHB4IDMwcHg7XG5cdFx0Ym94LXNoYWRvdzogMCAwIHRyYW5zcGFyZW50O1xuXHR9XG5cdC5ob3VzaW5ne1xuXHRcdGJvcmRlci1yYWRpdXM6IDlweDtcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDEwJSk7XG5cdH1cblx0LmJ0bi1leHBlbnNle1xuXHRcdHBhZGRpbmc6IDEzcHggMjBweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRjb2xvcjojMDA5MWQ5O1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdGJvcmRlcjogMXB4IGRhc2hlZCAjNTk1OTU5O1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHR9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHREZWxldGVfQnRuX1BvcHVwXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LnJlYWN0bW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVye1xuXHRcdHRvcDogMDtcblx0fVxuXHQucmVhY3Rtb2RhbC1jb250ZW50IC50YWItY29udGVudHtcblx0XHRwYWRkaW5nLXRvcDogMDtcblx0fVxuXHQucmVhY3Rtb2RhbC1jb250ZW50IC5tb2RhbC13cmFwcGVyIC5tb2RhbC1ib2R5e1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5yZWFjdG1vZGFsLWNvbnRlbnQgLm1vZGFsLXdyYXBwZXJ7XG5cdFx0d2lkdGg6IDI1ZW07XG5cdH1cblx0Lm1vZGFsLXByaW1hcnlBY3Rpb246aG92ZXJ7XG5cdFx0Y29sb3I6ICNGRTczNjY7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cblx0Lm1vZGFsLXNlY29uZGFyeWFjdGlvbjpob3Zlcntcblx0XHRjb2xvcjpncmF5O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cdH1cblx0Lm1vZGFsLXByaW1hcnlBY3Rpb257XG5cdFx0Y29sb3I6ICNGRkY7XG5cdFx0cGFkZGluZzogMTVweCAyNXB4O1xuXHRcdGJhY2tncm91bmQ6ICNGRTczNjY7XG5cdFx0bWFyZ2luOiAyNXB4IDA7XG5cdFx0ZGlzcGxheTogdGFibGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNGRTczNjY7XG5cdH1cblx0Lm1vZGFsLXNlY29uZGFyeWFjdGlvbntcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0cGFkZGluZzogMTZweCAzMXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkNjM7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdE92ZXJ2aWV3X01haW5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHQuaW5wdXQtZXJyb3J7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2U2NGI0MCAhaW1wb3J0YW50O1x0XG5cdH1cblx0LmNvbG9yLWRhbmdlcntcblx0XHRjb2xvcjogI2U2NGI0MCAhaW1wb3J0YW50O1xuXHR9XG5cdC5jb2xvci1zdWNjZXNze1xuXHRcdGNvbG9yOiAjNDhjZTY1ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnNlbGVjdC1jYXRlZ29yeXtcblx0XHRjb2xvcjogI2U2NGI0MCAhaW1wb3J0YW50O1xuXHR9XG5cdC5mbnctNjAwe1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cbiAgICAuc2V0dGluZy1tbC0xMHtcblx0XHRtYXJnaW4tbGVmdDogMTAuOSU7XG5cdH1cblxuXHQub3ZlcnZpZXctbWFpbiAuaW5jb21lLXRpdGxle1xuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdH1cblx0Lm92ZXJ2aWV3LW1haW57XG5cdFx0cG9zaXRpb246IGZpeGVkIWltcG9ydGFudDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0d2lkdGg6IDQyNXB4IWltcG9ydGFudDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cGFkZGluZzogMTEycHggMzhweCA0NXB4IDIxcHg7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMTRweCAxcHggcmdiKDAgMCAwIC8gMTAlKTtcblx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdH1cblx0Lm92ZXJ2aWV3LWRldGFpbHMgc3Bhbntcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdH1cblx0Lm92ZXJ2aWV3LWRldGFpbHMgcHtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5cdC5pbmNvbWUtdGl0bGUuY2F0ZWdvcnktdGl0bGV7XG5cdFx0bWFyZ2luLXRvcDogNDVweDtcblx0fVxuXHQucHJvZ3Jlc3MtYm94e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNFRkZBRkY7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xuXHR9XG5cdC5wcm9ncmVzcy1ib3ggLmJveCB7XG5cdCAgICB3aWR0aDogMTAwJTtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblx0ICAgIHBhZGRpbmc6IDEwcHggMjhweCA5cHggMDsgXG5cdCAgICBiYWNrZ3JvdW5kOiAjRUZGQUZGO1xuXHR9XG5cdC5jaXJjbGVQcm9ncmVzc3tcblx0XHRwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcblx0fVxuXHQuZXhwZW5zZUdyb3Vwe1xuXHRcdHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuXHRcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cdH1cblx0LmV4cGVuc2VHcm91cFBlcmNlbnR7XG5cdFx0cGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0bWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5yb3dFeHBlbnNlQnlDYXRlZ29yeXtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcblx0fVxuXHQuZXhwZW5zZUdyb3VwX2g2e1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXHR9XG5cdC5leHBlbnNlR3JvdXBfc3Bhbntcblx0Zm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LyoucHJvZ3Jlc3MtYm94IC5ib3ggaDIge1xuXHQgICAgZGlzcGxheTogYmxvY2s7XG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICBjb2xvcjogIzQxNDA0Mjtcblx0ICAgIGZvbnQtc2l6ZTogMTZweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHQgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuXHQgICAgcGFkZGluZy10b3A6IDEycHg7XG5cdH0qL1xuXHQucHJvZ3Jlc3MtYm94IC5ib3ggLmNoYXJ0IHtcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgZm9udC1zaXplOiA5cHg7XG5cdCAgICBjb2xvcjogIzUxQUNEMjtcblx0ICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cdCAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdH1cblx0LnByb2dyZXNzLWJveCAuYm94IGNhbnZhcyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiA1cHg7XG5cdCAgICB3aWR0aDogNTJweCAhaW1wb3J0YW50O1xuXHQgICAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG5cdCAgICBtYXJnaW4tbGVmdDogMjVweDtcblx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQuY2F0ZWdvcnktcmFuZ2UgaDZ7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0LmNhdGVnb3J5LXJhbmdlIHB7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRmb250LXNpemU6IDlweDtcblx0XHRsaW5lLWhlaWdodDogMTFweDtcblx0XHRtYXJnaW46IDdweCAwIDJweDtcblx0XHRjb2xvcjogIzk5OTY5Njtcblx0fVxuXHQuY2F0ZWdvcnktcmFuZ2Ugc3Bhbntcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEzcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHQuY2F0ZWdvcnktcmFuZ2V7XG5cdFx0bWFyZ2luLWxlZnQ6IDEwMHB4O1xuXHR9XG5cdC5jaHVyY2gtdGl0bGUubmF2LWxpbmt7XG5cdFx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGNvbG9yOiAjNTk1OTU5O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdH1cblx0Lm1iLTEwe1xuXHRcdG1hcmdpbi1ib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnRhYi1jb250ZW50IC50YWItcGFuZS5hY3RpdmUge1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgdG9wOiAwO1xuXHQgICAgbGVmdDogMDtcblx0ICAgIHJpZ2h0OiAwO1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBoZWlnaHQ6IDEwMCU7XG5cdCAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XG5cdCAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuXHRcdG1hcmdpbi10b3A6IDczcHg7XG5cdFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMDBweDtcblx0fVxuXHQudHJhbnNhY3Rpb24tdGFiLWNsb3Nle1xuXHRcdG1hcmdpbi1sZWZ0OjIwcmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7O1xuXHR9XG5cdC50cmFuc2FjdGlvbkNsb3Nle1xuXHRcdGZvbnQtc2l6ZToxNnB4O1xuXHR9XG5cdC5wcmVtaXVtLWJveHtcblx0XHRwYWRkaW5nOiAxNHB4O1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRiYWNrZ3JvdW5kOiAjOTlEQUY1O1xuXHRcdGJvcmRlci1yYWRpdXM6IDE5cHg7XG5cdH1cblx0Lm1vbmV5LWludGVnZXJ7XG5cdFx0Y29sb3I6ICMwMDkxZDk7XG5cdH1cblx0LnByZW1pdW0tYnRuIHtcblx0ICAgIHBhZGRpbmc6IDhweCA0MnB4O1xuXHQgICAgZm9udC1zaXplOiAxN3B4O1xuXHQgICAgbGluZS1oZWlnaHQ6IDE7XG5cdCAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuXHQgICAgY29sb3I6ICM1QUM3RjU7XG5cdCAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcblx0ICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cdCAgICBmb250LXdlaWdodDogbm9ybWFsO1xuXHR9XG5cdC50ZXh0YXJlYS1ib3guQnVkZ2V0SXRlbURldGFpbHMtbm90ZXMgLnRleHRhcmVhLW5vdGUge1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0cGFkZGluZzogMTBweCAxMHB4IDEwcHggNTBweDtcblx0fVxuXHQudGV4dGFyZWEtYm94LkJ1ZGdldEl0ZW1EZXRhaWxzLW5vdGVzIHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHR9XG5cdHN2Zy5Ob3Rlc0ljb24ge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDEycHg7XG5cdFx0bGVmdDogMjBweDtcblx0fVxuXHQuY2hydWNoLXRpdGxlIHNwYW57XG5cdFx0Y29sb3I6ICM1QUM3RjU7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHR9XG5cdC5jaHJ1Y2gtdGl0bGUgaDJ7XG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cdC5jaHJ1Y2gtdHlwZXtcblx0XHRtYXJnaW46IDcycHggMCAyMHB4O1xuXHR9XG5cdC5wcmVtaXVtLWJveCBwIHtcblx0ICAgIGZvbnQtc2l6ZTogMThweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAyMi42OHB4O1xuXHQgICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXHQuYWN0aXZlIC5wb3BvdmVye1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC5leG17XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHRcblx0LnBvcG92ZXJ7XG5cdFx0dG9wOiAyMXB4O1xuXHRcdGJvcmRlcjogMDtcblx0XHRib3gtc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICB3aWR0aDo1NTBweDtcblx0XHRsZWZ0Oi01MCU7XG5cdFx0bWFyZ2luLWxlZnQ6MjVyZW07XG5cdFx0cG9zaXRpb246Zml4ZWQ7XG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjMDAwO1xuXHRcdHRvcDogMzUwcHg7XG5cdFx0XG5cdH1cblx0LnBvcG92ZXIubGVmdCB7XG5cdFx0bGVmdDogMTNyZW0gIWltcG9ydGFudDtcblx0fVxuXHQucG9wb3ZlciAuZm9ybS1jb250cm9sIHtcblx0XHRmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XG5cdFx0Ym9yZGVyOiAwLjVweCBzb2xpZCAjNUFDN0Y1O1xuXHQgICAgYmFja2dyb3VuZDogIzVBQzdGNTtcblx0ICAgIGZvbnQtc2l6ZTogMzBweDtcblx0ICAgIGhlaWdodDogNDVweDtcblx0ICAgIGNvbG9yOiAjNTk1OTU5O1xuXHRcdHdpZHRoOiA1NDRweDtcblx0fVxuXHQucG9wb3ZlciAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuXHQgIFx0Y29sb3I6ICM1OTU5NTk7XG5cdH1cblx0LnBvcG92ZXIgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG5cdCAgXHRjb2xvcjogIzU5NTk1OTtcblx0fVxuXHQucG9wb3ZlciAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuXHQgIFx0Y29sb3I6ICM1OTU5NTk7XG5cdH1cblx0LnBvcG92ZXIgLmZvcm0tY29udHJvbDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cblx0ICBcdGNvbG9yOiAjNTk1OTU5O1xuXHR9XG5cdC50YXJnZXQtc3VidGl0bGVze1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHR9XG5cdC5hY2NvcmRpb24tY29udGFpbmVyIC5jb250ZW50e1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LnNldCBhIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdCAgICBjb2xvcjogIzVBQzdGNTtcblx0ICAgIG1hcmdpbjogMTBweCAwIDE1cHg7XG5cdCAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR9XG5cdC5zZXQgYSBpe1xuXHRcdG1hcmdpbi1yaWdodDogNnB4O1xuXHR9XG5cdC5zZXQgYSBzcGFue1xuXHRcdGNvbG9yOiM1QUM3RjU7XG5cdH1cblx0LmNvbnRlbnQgZm9ybSBpbnB1dCxcblx0LnRleHRhcmVhLW5vdGUsXG5cdC5jb250ZW50IC5jdXN0b20tc2VsZWN0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBvdXRsaW5lOiBub25lO1xuXHQgICAgY29sb3I6ICM5RDlEOUQ7XG5cdCAgICBmb250LXNpemU6IDE0cHg7XG5cdCAgICBmb250LXdlaWdodDogNDAwO1xuXHQgICAgcGFkZGluZzogOHB4IDE1cHg7XG5cdCAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cdCAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQgICAgYm9yZGVyOiAxcHggc29saWQgIzlEOUQ5RDtcblx0ICAgIGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcblx0fVxuXHQudGV4dGFyZWEtbm90ZSB7XG5cdCAgICBoZWlnaHQ6IDkzcHg7XG5cdCAgICByZXNpemU6IG5vbmU7XG5cdCAgICBmb250LXdlaWdodDogMzAwO1xuXHQgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuXHR9XG5cdC50ZXh0YXJlYS1ib3h7XG5cdFx0bWFyZ2luLXRvcDogNjNweDtcblx0fVxuXHQuY29udGVudCBmb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxuXHQuc2VsZWN0LW9wdGlvbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcblx0LnRleHRhcmVhLW5vdGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG5cdCAgXHRjb2xvcjogIzlEOUQ5RDtcblx0fVxuXHQuY29udGVudCBmb3JtIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxuXHQuc2VsZWN0LW9wdGlvbjo6LW1vei1wbGFjZWhvbGRlcixcblx0LnRleHRhcmVhLW5vdGU6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuXHQgIFx0Y29sb3I6ICM5RDlEOUQ7XG5cdH1cblx0LmNvbnRlbnQgZm9ybSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG5cdC5zZWxlY3Qtb3B0aW9uOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcblx0LnRleHRhcmVhLW5vdGU6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG5cdCAgXHRjb2xvcjogIzlEOUQ5RDtcblx0fVxuXHQuY29udGVudCBmb3JtIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIsXG5cdC5zZWxlY3Qtb3B0aW9uOi1tb3otcGxhY2Vob2xkZXIsXG5cdC50ZXh0YXJlYS1ub3RlOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuXHQgIFx0Y29sb3I6ICM5RDlEOUQ7XG5cdH1cblx0LmNvbnRlbnQgLnNlbGVjdC1vcHRpb257XG5cdFx0cGFkZGluZzogOHB4IDE1cHg7XG5cdH1cblx0LmNvbnRlbnQgLnNlbGVjdC1vcHRpb257XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0XHQgICBcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0XHQgICBcdGFwcGVhcmFuY2U6IG5vbmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAwICM5ZDlkOWQ7XG5cdH1cblx0LmRyb3Bkb3duaXRlbSBidXR0b257XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Y29sb3I6ICM5RDlEOUQ7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM5RDlEOUQ7XG5cdFx0cGFkZGluZzogOHB4IDE1cHg7XG5cdH1cblx0LmRyb3Bkb3duaXRlbSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHR0b3A6IDE2cHg7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdFx0d2lkdGg6IDhweDtcblx0XHRoZWlnaHQ6IDRweDtcblx0XHRib3JkZXI6IDA7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9kcm9wX2Rvd24tMS5wbmcpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHR9XG5cdHVsLmRyb3Bkb3duLW1lbnUge1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBib3JkZXI6IDA7XG5cdCAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdCAgICBib3gtc2hhZG93OiAxcHggMHB4IDEycHggMHB4ICM5ZDlkOWQ7XG5cdH1cblx0dWwuZHJvcGRvd24tbWVudTpiZWZvcmUge1xuXHQgICAgY29udGVudDogJyc7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IC0xMHB4O1xuXHQgICAgcmlnaHQ6IDA7XG5cdCAgICBsZWZ0OiAwO1xuXHQgICAgd2lkdGg6IDA7XG5cdCAgICBoZWlnaHQ6IDA7XG5cdCAgICBkaXNwbGF5OiB0YWJsZTtcblx0ICAgIG1hcmdpbjogMCBhdXRvO1xuXHQgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdCAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdCAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNGRkY7XG5cdH1cblx0LmRyb3Bkb3duaXRlbSAuZHJvcGRvd24tbWVudT5saT5he1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0LmRyb3Bkb3duaXRlbcKgLmJ0bi1jaGVjazpmb2N1cysuYnRuLCBcblx0LmRyb3Bkb3duaXRlbSAuYnRuOmZvY3Vze1xuXHRcdGJveC1zaGFkb3c6IDBweCAwcHggdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblx0fVxuXHQuaW5uZXItdGFiYmluZyB1bCBsaSBhe1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRjb2xvcjogIzlEOUQ5RDtcblx0fVxuXHQuaW5uZXItdGFiYmluZyB1bHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjOUQ5RDlEO1xuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRwYWRkaW5nOiAycHg7XG5cdH1cblx0LmlubmVyLXRhYmJpbmcgdWwgbGkgYSB7XG5cdCAgICBmb250LXNpemU6IDEycHg7XG5cdCAgICBsaW5lLWhlaWdodDogMTVweDtcblx0ICAgIGNvbG9yOiAjOUQ5RDlEO1xuXHQgICAgbWFyZ2luOiAwO1xuXHQgICAgcGFkZGluZzogNnB4IDIwcHg7XG5cdH1cblx0LmlubmVyLXRhYmJpbmcgdWwgbGkgLm1lbnUuYWN0aXZle1xuXHRcdGNvbG9yOiAjRkZGO1xuXHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR9XG5cdC5kcm9wZG93bml0ZW0sXG5cdC5pbm5lci10YWJiaW5ne1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdH1cblx0LmNvbnRlbnQgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1zZWxlY3RlZDphZnRlcntcblx0XHR0b3A6IDE1cHg7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdH1cblx0LmNvbnRlbnQgLmN1c3RvbS1zZWxlY3QgLnNlbGVjdC1pdGVtcyB7XG5cdCAgICBib3JkZXI6IDA7XG5cdCAgICB0b3A6IDM1cHg7XG5cdCAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggIzk1OTU5NTtcblx0fVxuXHQuc2V0IC5idG4tdGV4dHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0Y29sb3I6ICM1QUM3RjU7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cdC5zZXQgLmJ0bi10ZXh0Omxhc3QtY2hpbGR7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdH1cblx0LnNldCAuYnRuLXNhdmV7XG5cdFx0cGFkZGluZzogNnB4IDE1cHg7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdGNvbG9yOiAjRkZGO1xuXHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXHQuZXZlcnl7XG5cdFx0Y29sb3I6ICM5RDlEOUQ7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDRweDtcblx0fVxuXHQubm90ZXMtdGl0bGV7XG5cdFx0Y29sb3I6ICM1OTU5NTk7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0VHJhbnNhY3Rpb25zXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LnRyYW5zYWN0aW9ucy1idG4gdWwubmF2Lm5hdi10YWJzIHtcblx0ICAgIG1hcmdpbjogMCBhdXRvO1xuXHQgICAgZGlzcGxheTogdGFibGU7XG5cdH1cblxuXHQubmF2VGFiLWZvbnR7XG5cdFx0Zm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQudHJhbnNhY3Rpb25zLXRpdGxlIGg0e1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHR9XG5cdC5hZGRUcmFuc3tcblx0XHRjb2xvcjogIzUxQUNEMjtcbiAgICBcdGZvbnQtc2l6ZTogMjNweDtcblx0fVxuXHQuYWRkbmV3LWNsZWNre1xuXHRcdGNvbG9yOiAjNTFBQ0QyO1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRsaW5lLWhlaWdodDogMjBweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG5cdC50cmFuc2FjdGlvbnMtYm94e1xuXHRcdG1hcmdpbjogMjVweCAwIDI1cHg7XG5cdH1cblx0LmFkZG5ldy1jbGVjayBpe1xuXHRcdG1hcmdpbi1yaWdodDogNHB4O1xuXHR9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEluc2lnaHQgY2hhcnRzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi50b29sdGlwIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuICBuZ3gtY2hhcnRzLXBpZS1hcmMge2JhY2tncm91bmQtY29sb3I6cmVkICFpbXBvcnRhbnR9XG5cbiAgZGl2IC5uZ3gtY2hhcnRzIC5iYXIgLmFjdGl2ZXtcblx0ICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGllLWxlZ2VuZC5sZWdlbmQtaXRlbXMtY29udGFpbmVyLmxlZ2VuZC1pdGVtcy5sZWdlbmQtaXRlbSAuaXRlbS12YWx1ZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuXHRjb2xvcjpibHVlICFpbXBvcnRhbnQ7XG59XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gRW5kID09PT09PT09PT09PT09PT09PSAvXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRGb3JtX1BvcHVwXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LmNoZWNrb3V0Vmlld3tcblx0XHR3aWR0aDogNTAwcHggIWltcG9ydGFudDtcblx0fVxuXHQubW9kYWwge1xuXHQgICAgcG9zaXRpb246IGZpeGVkO1xuXHQgICAgei1pbmRleDogOTk5OTk5OTk5OyAvKiAxICovXG5cdCAgICB0b3A6IDA7XG5cdCAgICBsZWZ0OiAwO1xuXHQgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXHQgICAgd2lkdGg6IDEwMCU7XG5cdCAgICBoZWlnaHQ6IDEwMCU7XG5cdH1cblx0Lm1vZGFsLmlzLXZpc2libGUge1xuXHQgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblx0ICAgIGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC5tb2RhbC1vdmVybGF5IHtcblx0ICAgIHBvc2l0aW9uOiBmaXhlZDtcblx0ICAgIHotaW5kZXg6IDEwO1xuXHQgICAgdG9wOiAwO1xuXHQgICAgbGVmdDogMDtcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XG5cdCAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cdCAgICBvcGFjaXR5OiAwO1xuXHQgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4zcywgb3BhY2l0eSAwLjNzO1xuXHR9XG5cdC5tb2RhbC5pcy12aXNpYmxlIC5tb2RhbC1vdmVybGF5IHtcblx0ICAgIG9wYWNpdHk6IDE7XG5cdCAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHQgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIge1xuXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgei1pbmRleDogOTk5OTtcblx0ICAgIHRvcDogNmVtO1xuXHQgICAgcmlnaHQ6IDA7XG5cdCAgICBsZWZ0OiAwO1xuXHQgICAgd2lkdGg6IDQwZW07XG5cdCAgICBtYXJnaW46IDAgYXV0bztcblx0ICAgIGRpc3BsYXk6IHRhYmxlO1xuXHQgICAgYm9yZGVyLXJhZGl1czogMTVweDtcblx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdCAgICBib3gtc2hhZG93OiAwIDAgMS41ZW0gaHNsYSgwLCAwJSwgMCUsIDAuMzUpO1xuXHR9XG5cdC5tb2RhbC10cmFuc2l0aW9uIHtcblx0ICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMTJzO1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuXHQgICAgb3BhY2l0eTogMDtcblx0fVxuXHQubW9kYWwuaXMtdmlzaWJsZSAubW9kYWwtdHJhbnNpdGlvbiB7XG5cdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdCAgICBvcGFjaXR5OiAxO1xuXHR9XG5cdC5tb2RhbC1oZWFkZXIsXG5cdC5tb2RhbC1jb250ZW50IHtcblx0ICAgIHBhZGRpbmc6IDFlbTtcblx0ICAgIGJvcmRlcjogMDtcblx0ICAgIGJveC1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudDtcblx0fVxuXHQuYW1vdW50LWlucHV0IC5jdXN0b20tc2VsZWN0e1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdH1cblx0Lm1vZGFsLWNvbnRlbnR7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXHQjdGFiLTEgLm1vZGFsLWhlYWRlcntcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkU3MzY2O1xuXHR9XG5cdCN0YWItMiAubW9kYWwtaGVhZGVye1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1MUFDRDI7XG5cdH1cblx0Lm1vZGFsLWhlYWRlciB7XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICB0b3A6IC02NHB4O1xuXHQgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcblx0fVxuXHQuYmctcGluay5vbiAubW9kYWwtaGVhZGVye1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRTczNjY7XG5cdH1cblx0LmJnLWJsdWUub24gLm1vZGFsLWhlYWRlcntcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBQ0QyO1xuXHR9XG5cdC5tb2RhbC1jbG9zZSB7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICB0b3A6IDA7XG5cdCAgICByaWdodDogMDtcblx0ICAgIHBhZGRpbmctcmlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIFx0cGFkZGluZy10b3A6IDIwcHg7XG5cdCAgICBjb2xvcjogI0ZGRjtcblx0ICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cdCAgICBib3JkZXI6IDA7XG5cdH1cblx0Lm1vZGFsLWNsb3NlOmhvdmVyIHtcblx0ICAgIGNvbG9yOiAjNzc3O1xuXHR9XG5cdC5tb2RhbC1oZWFkaW5nIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6ICNGRkY7XG5cdCAgICBmb250LXNpemU6IDIycHg7XG5cdCAgICBsaW5lLWhlaWdodDogMjJweDtcblx0ICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cdCAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0ICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdH1cblx0Lm1vZGFsLWNvbnRlbnQgPiAqOmZpcnN0LWNoaWxkIHtcblx0ICAgIG1hcmdpbi10b3A6IDA7XG5cdH1cblx0Lm1vZGFsLWNvbnRlbnQgPiAqOmxhc3QtY2hpbGQge1xuXHQgICAgbWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQuaWNvbiB7XG5cdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdCAgICB3aWR0aDogMTZweDtcblx0ICAgIGhlaWdodDogMTZweDtcblx0ICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgICBmaWxsOiBjdXJyZW50Y29sb3I7XG5cdH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEZvcm1fUG9wdXBfaW5uZXJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX2dyb3Vwe1xuXHRjb2xvcjogIzVBQzdGNTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZXtcblx0aGVpZ2h0OiA1MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOUQ5RDlEO1xufVxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3d7XG5cdGhlaWdodDogNDVweDtcbn1cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVke1xuXHRsaW5lLWhlaWdodDogNDVweDtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLWFsbG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4uQnVkZ2V0SXRlbUFsbG9jYXRvci1hZGQsIC5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbW92ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0zMnB4O1xuICAgIG1hcmdpbi10b3A6IC05cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDFweDtcbiAgICBmaWxsOiAjRkU3MzY2O1xufVxuLkJ1ZGdldEl0ZW1BbGxvY2F0b3ItcmVtb3ZlIC5JY29uLWJnIHtcbiAgICBmaWxsOiAjRkU3MzY2O1xufVxuLkJ1ZGdldEl0ZW1BbGxvY2F0b3ItYWRkIC5JY29uLWZnLCAuQnVkZ2V0SXRlbUFsbG9jYXRvci1yZW1vdmUgLkljb24tZmcge1xuICAgIGZpbGw6ICNmZmY7XG59XG4uQnVkZ2V0SXRlbUFsbG9jYXRvci1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuLkJ1ZGdldEl0ZW1BbGxvY2F0b3ItYWxsb2NhdGlvbkFtb3VudCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcbiAgICBmbGV4OiAwIDEgMjUlO1xuICAgIGhlaWdodDogNDVweDtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLWFsbG9jYXRpb25BbW91bnQgLmlucHV0R3JvdXAge1xuICAgIGJvcmRlcjogMDtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbWFpbmluZy0tY29tcGxldGVkIHtcbiAgICBvcGFjaXR5OiAuMjtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbWFpbmluZyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbWFpbmluZ0xpbmsge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzAwOTFkOTtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbWFpbmluZ0xpbms6YWN0aXZlLCBcbi5CdWRnZXRJdGVtQWxsb2NhdG9yLXJlbWFpbmluZ0xpbms6Zm9jdXMsIFxuLkJ1ZGdldEl0ZW1BbGxvY2F0b3ItcmVtYWluaW5nTGluazpob3ZlciB7XG4gICAgb3V0bGluZTogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzAwNzNiOTtcbn1cbi5pbnB1dEdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNiNmJlYzI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5CdWRnZXRJdGVtQWxsb2NhdG9yLWFsbG9jYXRpb25BbW91bnQgaW5wdXQsIC5CdWRnZXRJdGVtQWxsb2NhdG9yLWFsbG9jYXRpb25BbW91bnQgaW5wdXQ6Zm9jdXMge1xuXHR3aWR0aDogMTAwJTtcblx0ZmxvYXQ6IHJpZ2h0O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDkxZDk7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblx0LnNlbGVjdDItY29udGFpbmVye1xuXHRcdHotaW5kZXg6IDk5OTk5OTk5OTtcblx0fVxuXHQuYW1vdW50LWlucHV0IC5mb3JtLWlucHV0IC5mb3JtLWNvbnRyb2x7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHQuYW1vdW50LWlucHV0IC5mb3JtLWNvbnRyb2wsXG5cdC5hbW91bnQtaW5wdXQgLnNlbGVjdC1zZWxlY3RlZHtcblx0XHRjb2xvcjogIzlEOUQ5RDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzlEOUQ5RDtcblx0XHRmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XG5cdH1cblx0LmFtb3VudC1pbnB1dCAuc2VsZWN0LXNlbGVjdGVkOmFmdGVye1xuXHRcdHJpZ2h0OiAxOHB4O1xuXHRcdHRvcDogMTdweDtcblx0XHR3aWR0aDogOXB4O1xuXHRcdGhlaWdodDogNnB4O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcG9seWdvbi5wbmcpO1xuXHR9XG5cdC5hbW91bnQtaW5wdXQgLnNlbGVjdC1pdGVtc3tcblx0XHRib3JkZXI6IDA7XG5cdH1cblx0LmFtb3VudC1pbnB1dCAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuXHQgIFx0Y29sb3I6ICM5RDlEOUQ7XG5cdH1cblx0LmFtb3VudC1pbnB1dCAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cblx0ICBcdGNvbG9yOiAjOUQ5RDlEO1xuXHR9XG5cdC5hbW91bnQtaW5wdXQgLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cblx0ICBcdGNvbG9yOiAjOUQ5RDlEO1xuXHR9XG5cdC5hbW91bnQtaW5wdXQgLmZvcm0tY29udHJvbDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cblx0ICBcdGNvbG9yOiAjOUQ5RDlEO1xuXHR9XG5cdC5kYXRlcGlja2VyLmZvcm0tY29udHJvbCB7XG5cdCAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCguLi9pbWcvY2FsZW5kZXIucG5nKSA5MyUgNTAlIG5vLXJlcGVhdDtcblx0fVxuXHRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuXHQgICAgZGlzcGxheTogbm9uZTtcblx0fVxuXHRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG5cdCAgICBvcGFjaXR5OiAwO1xuXHR9XG5cdC5wb3B1cC10YWJiaW5ne1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdH1cblx0LmFtb3VudC1pbnB1dCAuY29udGVudCB7XG5cdCAgICBkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5uZXdleHBlbnNlLWJ0biBhe1xuXHRcdGNvbG9yOiAjRkZGO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdHBhZGRpbmc6IDEycHggMTdweDtcblx0XHRiYWNrZ3JvdW5kOiAjRkU3MzY2O1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRtYXJnaW46IDMxcHggYXV0byAwO1xuXHR9XG5cdC5tb2RhbC13cmFwcGVyIC50YWItY29udGVudC5jdXJyZW50IHtcblx0ICAgIGRpc3BsYXk6IGluaGVyaXQ7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIgLnRhYi1jb250ZW50e1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIgLm1vZGFsLWJvZHl7XG5cdFx0cGFkZGluZzogNDJweCA1MHB4IDUwcHg7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIgdWwudGFicyB7XG5cdCAgICBtYXJnaW4tdG9wOiAyNnB4O1xuXHQgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQgICAgYm90dG9tOiAtNDNweDtcblx0fVxuXHQubW9kYWwtd3JhcHBlciB1bC50YWJzIGxpIHtcblx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0ICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuXHQgICAgbWFyZ2luLWxlZnQ6IDU4cHg7XG5cdCAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdCAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIgdWwudGFicyBsaTphZnRlciB7XG5cdCAgICBjb250ZW50OiAnJztcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIGxlZnQ6IDA7XG5cdCAgICB0b3A6IDRweDtcblx0ICAgIHdpZHRoOiA4cHg7XG5cdCAgICBoZWlnaHQ6IDhweDtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHQgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTk1OTU5O1xuXHR9XG5cdC5tb2RhbC13cmFwcGVyIHVsLnRhYnMgbGkudGV4dC1waW5rLmN1cnJlbnQ6YWZ0ZXJ7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI0ZFNzM2Njtcblx0fVxuXHQubW9kYWwtd3JhcHBlciB1bC50YWJzIGxpLnRleHQtYmx1ZS5jdXJyZW50OmFmdGVye1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM1MUFDRDI7XG5cdH1cblx0Lm1vZGFsLXdyYXBwZXIgdWwudGFicyBsaS50ZXh0LWJsdWUuY3VycmVudDpiZWZvcmV7XG5cdFx0YmFja2dyb3VuZDogIzUxQUNEMiAhaW1wb3J0YW50O1xuXHR9XG5cdC5tb2RhbC13cmFwcGVyIHVsLnRhYnMgbGkudGV4dC1waW5rLmN1cnJlbnQ6YmVmb3JlLFxuXHQubW9kYWwtd3JhcHBlciB1bC50YWJzIGxpLnRleHQtYmx1ZS5jdXJyZW50OmJlZm9yZSB7XG5cdCAgICBjb250ZW50OiAnJztcblx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ICAgIHdpZHRoOiA0cHg7XG5cdCAgICBoZWlnaHQ6IDRweDtcblx0ICAgIGxlZnQ6IDRweDtcblx0ICAgIHRvcDogOHB4O1xuXHQgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG5cdCAgICBiYWNrZ3JvdW5kOiAjRkU3MzY2O1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdH1cblx0Lm5ld2V4cGVuc2UtYnRuIC5idG4tYmx1ZXtcblx0XHRiYWNrZ3JvdW5kOiAjNTFBQ0QyO1xuXHR9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHROZXctU2VhcmNoX0ZpZW5kXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LnNlYXJjaC1maWVsZCBpbnB1dHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRib3JkZXI6IDA7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGJhY2tncm91bmQ6ICNGMEYwRjA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdHBhZGRpbmc6IDdweCAxNXB4IDZweCAyOHB4O1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMnB4O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvc2VhcmNoLnBuZyk7XG5cdH1cblx0LnNlYXJjaC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cblx0ICBcdGNvbG9yOiAjOUQ5RDlEO1xuXHR9XG5cdC5zZWFyY2gtZmllbGQgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuXHQgIFx0Y29sb3I6ICM5RDlEOUQ7XG5cdH1cblx0LnNlYXJjaC1maWVsZCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cblx0ICBcdGNvbG9yOiAjOUQ5RDlEO1xuXHR9XG5cdC5zZWFyY2gtZmllbGQgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG5cdCAgXHRjb2xvcjogIzlEOUQ5RDtcblx0fVxuXHQudGFiLWNvbnRlbnQgLnRhYi1wYW5lc3tcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC50YWItY29udGVudCAudGFiLXBhbmVzLmFjdGl2ZXtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQubmF2LXRhYmJpbmc6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDFweDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjOTE5MTkxO1xuXHR9XG5cdC5uYXYtdGFiYmluZyAubmF2LWl0ZW1zIC5uYXYtbGlua3MuYWN0aXZle1xuXHRcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTJBQ0QyO1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0Y29sb3I6ICM1MkFDRDI7XG5cdH1cblx0Lm5hdi10YWJiaW5nIC5uYXYtaXRlbXMgLm5hdi1saW5rcyB7XG5cdFx0Y29sb3I6ICM3RTdFN0U7XG5cdCAgICBmb250LXNpemU6IDEycHg7XG5cdCAgICBmb250LXdlaWdodDogNTAwO1xuXHQgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdCAgICBwYWRkaW5nOiAwIDI5cHggOHB4IDI4cHg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0fVxuXHQubW9udGgtdGl0bGV7XG5cdFx0Y29sb3I6ICM3RTdFN0U7XG5cdH1cblx0Lm1vbnRoLXRpdGxlLFxuXHQuc2hvdy10cmFuc2FjdGlvbnMsXG5cdC50cmFuc2FjdGlvbnMtYnRue1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxNXB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0fVxuXHQuc2hvdy10cmFuc2FjdGlvbnN7XG5cdFx0Y29sb3I6ICNCMEIwQjA7XG5cdFx0bWFyZ2luOiAxNXB4IDAgOHB4IDczcHg7XG5cdH1cblx0LnRyYW5zYWN0aW9ucy1idG4gYXtcblx0XHRjb2xvcjogI0ZFNzM2Njtcblx0XHRtYXJnaW4tdG9wOiAyN3B4O1xuXHR9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRUcmFuc2FjdGlvbl9IaXN0b3J5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0LnRyYW5zYWN0aW9uLWhpc3Rvcnl7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzlEOUQ5RDtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdHBhZGRpbmc6IDVweCAyMHB4OyBcblx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cdC5tb250aC1kYXRlc3tcblx0XHRjb2xvcjogIzk5OTU5NTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cdC5tb250aC1kYXRlcyxcblx0LnRyYW5zYWN0aW9uLW5hbWUgcHtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdH1cblx0LnRyYW5zYWN0aW9uLW5hbWUgcHtcblx0XHRjb2xvcjogIzdFN0U3RTtcblx0XHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG5cdC50cmFuc2FjdGlvbnMtbmFtZXtcblx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDdweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG5cdH1cblx0LnRleHQtZWxsaXBzaXN7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHR9XG5cdC5wbC1wci0we1xuXHRcdHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LnRyYW5zYWN0aW9ucy1wcmlzZXtcblx0XHRjb2xvcjogIzk5OTU5NTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXHQuaWNvbi1idG57XG5cdFx0Y29sb3I6ICM3RTdFN0U7XG5cdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdHBhZGRpbmctbGVmdDogMTJweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblx0Lmljb24tYnRuIGEgaW1ne1xuXHRcdGRpc3BsYXk6IHRhYmxlO1xuXHRcdG1hcmdpbjogMCBhdXRvIDJweDtcblx0fVxuXHQuY2xlY2staWNvbiB7XG5cdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICByaWdodDogMDtcblx0ICAgIG9wYWNpdHk6IDA7XG5cdCAgICB0b3A6IDUwJTtcblx0ICAgIHdpZHRoOiAxMDAlO1xuXHQgICAgaGVpZ2h0OiAxMDAlO1xuXHQgICAgYmFja2dyb3VuZDogI0ZGRjtcblx0ICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdCAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG5cdCAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuXHR9XG5cdC50cmFuc2FjdGlvbi1oaXN0b3J5OmhvdmVyIC5jbGVjay1pY29ue1xuXHRcdG9wYWNpdHk6IDE7XG5cdH0gXG5cdC50cmFuc2FjdGlvbnMtc3BhY2V7XG5cdFx0bWFyZ2luLXRvcDogMTZweDtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0SW5zaWdodHNfUGFnZSdzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRJbnNpZ2h0c19IZXJvXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXHRcdC5pbnNpZ2h0cy1oZXJve1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pbnNpZ2h0cy9JbnNpZ2h0cy1iYW5uZXIucG5nKTtcblx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDE0OHB4IDAgMTY1cHggNjVweDtcblx0XHRcdFxuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdC5pbnNpZ2h0cy10aXRsZXtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogNDVweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDY3cHg7XG5cdFx0fVxuXHRcdC5pbnNpZ2h0cy1zdWJ0aXRsZXN7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMTdweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRtYXgtd2lkdGg6IDQ0JTtcblx0XHRcdGNvbG9yOiAjRkZGO1xuXHRcdH1cblx0XHQuaW5zaWdodHMtYmdjb2xvcntcblx0XHRcdG1hcmdpbi1yaWdodDotNi41cmVtO1xuXHRcdH1cblx0XHQuYWNjb3VudGluZy1iZ2NvbG9ye1xuXHRcdFx0bWFyZ2luLXJpZ2h0Oi02LjVyZW07XG5cdFx0fVxuXHRcdC5pbnNpZ2h0LXBse1xuXHRcdFx0cGFkZGluZy1sZWZ0OjEwLjJyZW07XG5cdFx0fVxuXHRcdC5sZWFybi1tbHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjNyZW0gIWltcG9ydGFudDtcblx0XHR9XG5cdFx0Lmluc2lnaHQtaGVyb0ltYWdle1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtMS4ycmVtO1xuXHRcdH1cblx0XHQuZm9vdGVyLmZvb3Rlci1pbnNpZ2h0cyB1bHtcblx0XHRcdG1hcmdpbjogMTA3cHggMCAxNXB4O1xuXHRcdH1cblx0XHQucC1tZC0wIHtcblx0XHRcdHBhZGRpbmc6IDcycHg7XG5cdFx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0RW1haWxfVmVyaWZpY2F0aW9uXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblx0QC13ZWJraXQta2V5ZnJhbWVzIHN0cm9rZSB7XG5cdCAgICB0byB7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdCAgICB9XG5cdH1cblx0QC1tb3ota2V5ZnJhbWVzIHN0cm9rZSB7XG5cdCAgICB0byB7XG5cdCAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdCAgICB9XG5cdH1cblx0QGtleWZyYW1lcyBzdHJva2Uge1xuXHQgICAgdG8ge1xuXHQgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuXHQgICAgfVxuXHR9XG5cdEAtd2Via2l0LWtleWZyYW1lcyBzY2FsZSB7XG5cdCAgICAwJSxcblx0ICAgIHRvIHtcblx0ICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0ICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG5cdCAgICB9XG5cdCAgICA1MCUge1xuXHQgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpO1xuXHQgICAgfVxuXHR9XG5cdEAtbW96LWtleWZyYW1lcyBzY2FsZSB7XG5cdCAgICAwJSxcblx0ICAgIHRvIHtcblx0ICAgICAgICAtbW96LXRyYW5zZm9ybTogbm9uZTtcblx0ICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG5cdCAgICB9XG5cdCAgICA1MCUge1xuXHQgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpO1xuXHQgICAgfVxuXHR9XG5cdEBrZXlmcmFtZXMgc2NhbGUge1xuXHQgICAgMCUsXG5cdCAgICB0byB7XG5cdCAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG5cdCAgICAgICAgLW1vei10cmFuc2Zvcm06IG5vbmU7XG5cdCAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuXHQgICAgfVxuXHQgICAgNTAlIHtcblx0ICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XG5cdCAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XG5cdCAgICB9XG5cdH1cblx0QC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xuXHQgICAgdG8ge1xuXHQgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMwcHggIzVBQzdGNTtcblx0ICAgIH1cblx0fVxuXHRALW1vei1rZXlmcmFtZXMgZmlsbCB7XG5cdCAgICB0byB7XG5cdCAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzBweCAjNUFDN0Y1O1xuXHQgICAgfVxuXHR9XG5cdEBrZXlmcmFtZXMgZmlsbCB7XG5cdCAgICB0byB7XG5cdCAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzBweCAjNUFDN0Y1O1xuXHQgICAgfVxuXHR9XG5cdC5lbWFpbC12ZXJpZmljYXRpb257XG5cdFx0YmFja2dyb3VuZDogIzVBQzdGNTtcblx0fVxuXHQucGFuZWwge1xuXHQgICAgYmFja2dyb3VuZDogI2ZmZjtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdCAgICB3aWR0aDogMTAwJTtcblx0ICAgIHBhZGRpbmc6IDUwcHggMjBweDtcblx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG5cdCAgICBib3gtc2hhZG93OiAwIDQwcHggNjBweCAwIHJnYig1IDUgNTYgLyAxNSUpO1xuXHR9XG5cdC5jaGVja01hcmsge1xuXHQgICAgd2lkdGg6IDU2cHg7XG5cdCAgICBoZWlnaHQ6IDU2cHg7XG5cdCAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xuXHQgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXHQgICAgZGlzcGxheTogYmxvY2s7XG5cdCAgICBzdHJva2Utd2lkdGg6IDI7XG5cdCAgICBzdHJva2U6ICNmZmY7XG5cdCAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG5cdCAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAjNDQ2NGIzO1xuXHQgICAgLXdlYmtpdC1hbmltYXRpb246IGZpbGwgLjRzIGVhc2UtaW4tb3V0IC40cyBmb3J3YXJkcyxzY2FsZSAuM3MgZWFzZS1pbi1vdXQgLjlzIGJvdGg7XG5cdCAgICAtbW96LWFuaW1hdGlvbjogZmlsbCAuNHMgZWFzZS1pbi1vdXQgLjRzIGZvcndhcmRzLHNjYWxlIC4zcyBlYXNlLWluLW91dCAuOXMgYm90aDtcblx0ICAgIGFuaW1hdGlvbjogZmlsbCAuNHMgZWFzZS1pbi1vdXQgLjRzIGZvcndhcmRzLHNjYWxlIC4zcyBlYXNlLWluLW91dCAuOXMgYm90aDtcblx0ICAgIG9wYWNpdHk6IC45O1xuXHR9XG5cdGNpcmNsZS5jaGVja01hcmtfX2NpcmNsZSB7XG5cdCAgICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XG5cdCAgICBzdHJva2UtZGFzaG9mZnNldDogMTY2O1xuXHQgICAgc3Ryb2tlLXdpZHRoOiAyO1xuXHQgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuXHQgICAgc3Ryb2tlOiAjNUFDN0Y1O1xuXHQgICAgZmlsbDogbm9uZTtcblx0ICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzdHJva2UgLjZzIGN1YmljLWJlemllciguNjUsMCwuNDUsMSkgZm9yd2FyZHM7XG5cdCAgICAtbW96LWFuaW1hdGlvbjogc3Ryb2tlIC42cyBjdWJpYy1iZXppZXIoLjY1LDAsLjQ1LDEpIGZvcndhcmRzO1xuXHQgICAgYW5pbWF0aW9uOiBzdHJva2UgLjZzIGN1YmljLWJlemllciguNjUsMCwuNDUsMSkgZm9yd2FyZHM7XG5cdH1cblx0LmNoZWNrTWFya19fY2hlY2sge1xuXHQgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuXHQgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuXHQgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcblx0ICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQ4O1xuXHQgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xuXHQgICAgLXdlYmtpdC1hbmltYXRpb246IHN0cm9rZSAuM3MgY3ViaWMtYmV6aWVyKC42NSwwLC40NSwxKSAuOHMgZm9yd2FyZHM7XG5cdCAgICAtbW96LWFuaW1hdGlvbjogc3Ryb2tlIC4zcyBjdWJpYy1iZXppZXIoLjY1LDAsLjQ1LDEpIC44cyBmb3J3YXJkcztcblx0ICAgIGFuaW1hdGlvbjogc3Ryb2tlIC4zcyBjdWJpYy1iZXppZXIoLjY1LDAsLjQ1LDEpIC44cyBmb3J3YXJkcztcblx0fVxuXHQuZW1haWwtdGl0bGV7XG5cdFx0Y29sb3I6IGdyZWVuO1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHR9XG5cdC5wYW5lbCBwe1xuXHRcdGZvbnQtd2VpZ2h0OiAyMDA7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdG1hcmdpbjogMjBweCAwIDA7XG5cdH1cblx0LnBhbmVsIC5wcmVtaXVtLWJ0bntcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0cGFkZGluZzogMTRweCAzN3B4O1xuXHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0Y29sb3I6ICNGRkY7XG5cdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHR9XG5cdC5wYW5lbCAucHJlbWl1bS1idG46aG92ZXIge1xuXHQgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdCAgICBib3JkZXI6IDFweCBzb2xpZCAjNUFDN0Y1O1xuXHQgICAgY29sb3I6ICM1QUM3RjU7XG5cdH1cblx0LnZlcmlmaWNhdGlvbi1ib3gsXG5cdC5lbWFpbC12ZXJpZmljYXRpb257XG5cdFx0aGVpZ2h0OiAxMDB2aDtcblx0fVxuXHQudmVyaWZpY2F0aW9uLWJveHtcblx0XHRwYWRkaW5nOiAyMDBweCAwO1xuXHR9XG5cdC5oaWdoY2hhcnRzLXRpdGxle1xuXHRcdGNvbG9yOiAjNTk1OTU5O1xuXHRcdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjE7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxuXHQuaGlnaGNoYXJ0cy1zdWJ0aXRsZXN7XG5cdFx0Y29sb3I6ICM1OTU5NTk7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxNXB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0bWFyZ2luOiAzMHB4IDAgMzVweDtcblx0fVxuXHQuc3BlbmRpbmctYnJlYWtkb3due1xuXHRcdHBhZGRpbmc6IDQzcHggMTVweCA1OXB4IDQ3cHg7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHR9XG5cblx0LmNoYXJ0LWxlZ2VuZHtcblx0XHRtYXJnaW4tbGVmdDogMi44cmVtICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuY2hhcnQtbGVnZW5kIC5sZWdlbmQtbGFiZWxze1xuXHRcdG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcblx0fVxuXHQuY29sb3ItY29uY2VwdHtcblx0XHR3aWR0aDogMjBweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR9XG5cdC5jb2xvci1icm93bntcblx0XHRiYWNrZ3JvdW5kOiAjRTk2MDVBO1xuXHR9XG5cdC5jb2xvci1waW5re1xuXHRcdGJhY2tncm91bmQ6ICNGRkI4Qjg7XG5cdH1cblx0LmNvbG9yLWRhcmtqYW1ibGl7XG5cdFx0YmFja2dyb3VuZDogIzQwNDc5OTtcblx0fVxuXHQuY29sb3ItZGFya2JsdWV7XG5cdFx0YmFja2dyb3VuZDogIzUxQUNEMjtcblx0fVxuXHQuY29sb3ItZGFya2dyZWVue1xuXHRcdGJhY2tncm91bmQ6ICM3OEMyQTQ7XG5cdH1cblx0LmNvbG9yLWdyZWVue1xuXHRcdGJhY2tncm91bmQ6ICM1MUQxNkQ7XG5cdH1cblx0LmNvbG9yLWJsdWV7XG5cdFx0YmFja2dyb3VuZDogIzVBQzdGNTtcblx0fVxuXHQuaGlnaGNoYXJ0cy1jb2xvciB7XG5cdFx0d2lkdGg6IDI1JTtcblx0XHRjb2xvcjogIzU5NTk1OTtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdCAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHQgICAgZm9udC13ZWlnaHQ6IDQwMDtcblx0fVxuXHQuaGlnaGNoYXJ0cy1tYWlue1xuXHRcdHBhZGRpbmc6IDAgODNweDtcblx0XHRtYXJnaW4tdG9wOiA2OXB4O1xuXHR9XG5cdC5zcGVuZGluZy1icmVha2Rvd24ubW9udGhseS1pbmNvbWV7XG5cdFx0cGFkZGluZzogNDNweCA0MHB4IDYxcHggMTVweDtcblx0fVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QWNjb3VudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0QWNjb3VudF9UYWJiaW5nXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1x0XG5cdFx0LnRhYmJpbmctY29udGVudCAudGFiLXBhbmUuYWN0aXZle1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdC50YWJiaW5nLWNvbnRlbnQgLnRhYi1wYW5le1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdFx0Lm5hdi10YWJiaW5nYWMgLm5hdi1saW5rc2FjIHtcblx0XHQgICAgcGFkZGluZzogMDtcblx0XHQgICAgZm9udC1zaXplOiAyMHB4O1xuXHRcdCAgICBsaW5lLWhlaWdodDogMjVweDtcblx0XHQgICAgY29sb3I6ICNCMEIwQjA7XG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHQgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHQgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0ICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG5cdFx0fVxuXHRcdC5uYXYtdGFiYmluZ2FjIC5uYXYtbGlua3NhYzpob3Zlcixcblx0XHQubmF2LXRhYmJpbmdhYyAubmF2LWxpbmtzYWM6YWN0aXZle1xuXHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdHVsLm5hdi5uYXYtdGFiYmluZ2Fje1xuXHRcdFx0cGFkZGluZzogNTBweCAwIDAgMzZweDtcblx0XHR9XG5cdFx0Lm5hdi10YWJiaW5nYWMgLm5hdi1saW5rc2FjLmFjdGl2ZXtcblx0XHRcdGNvbG9yOiAjNTk1OTU5O1xuXHRcdH1cblx0XHQuZHJvcGRvd25fbWVudSBsaSBhe1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRwYWRkaW5nOiA2cHggMDtcblx0XHRcdGNvbG9yOiAjQjBCMEIwO1xuXHRcdH1cblx0XHQuZHJvcGRvd25fbWVudSBsaSBhOmhvdmVye1xuXHRcdFx0Y29sb3I6ICM1OTU5NTk7XG5cdFx0fVxuXHRcdC5hY2NvdW50LXRhYmJpbmd7XG5cdFx0XHRwYWRkaW5nOiA4MHB4IDE3MHB4IDVweCA1MHB4O1xuXHRcdH1cblx0XHQubmF2LWl0ZW1zYWM6aG92ZXIgLmRyb3Bkb3duLWljb24gaW1nIHtcblx0XHQgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXHRcdH1cblx0XHQubmF2LWl0ZW1zYWMgLmRyb3Bkb3duLWljb24gaW1ne1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuXHRcdH1cblx0XHQubWVudS1pY29ue1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRcdH1cblx0XHQuYWNjb3VudC1tYWluYm94e1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdH1cblx0XHQuZWRpdC10aXRsZXtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjb2xvcjogIzU5NTk1OTtcblx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHR9XG5cdFx0LmFjY291bnQtZm9ybSAuZm9ybS1ncm91cCBsYWJlbHtcblx0XHRcdGNvbG9yOiAjNTk1OTU5O1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdH1cblx0XHQuYWNjb3VudC1mb3JtIC5mb3JtLWNvbnRyb2x7XG5cdFx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjOUQ5RDlEO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0cGFkZGluZzogMTBweCAxMHB4IDEycHg7XG4gICAgXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR9XG5cdFx0LmFjY291bnQtZm9ybSAuZm9ybS1ncm91cHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0fVxuXHRcdC5tZW51LWJvcmRlcjpiZWZvcmV7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0d2lkdGg6IDFweDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQ6ICNEN0Q3RDc7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0fVxuXHRcdC50YWItcGFuZXtcblx0XHRcdHBhZGRpbmc6IDQwcHggNTJweCA2MHB4IDY1cHg7XG5cdFx0fVxuXHRcdC5Gb3JtLmFjY291bnQtZm9ybSAuYnRuLmJ0bi1zdWNjZXNzIHtcblx0XHQgICAgcGFkZGluZzogMTVweCAwO1xuXHRcdCAgICBtYXgtd2lkdGg6IDI1NnB4O1xuXHRcdCAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuXHRcdCAgICBkaXNwbGF5OiB0YWJsZTtcblx0XHR9XG5cdFx0LmRlbGV0ZS10aXRsZXtcblx0XHRcdGNvbG9yOiAjNTk1OTU5O1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHR9XG5cdFx0Lm1lc3NhZ2UtZGVjZXB0aW9ue1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxN3B4O1xuXHRcdFx0Y29sb3I6ICM1OTU5NTk7XG5cdFx0fVxuXHRcdC5mb3JtLW1lc3NhZ2UtbWFpbntcblx0XHRcdG1hcmdpbi10b3A6IDkwcHg7XG5cdFx0fVxuXHRcdC5idG4tYWNjb3VudHtcblx0XHRcdGNvbG9yOiAjQ0I1MzRFO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0cGFkZGluZzogNnB4IDI3cHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjQ0I1MzRFO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHR9XG5cdFx0LmJ0bi1hY2NvdW50OmhvdmVye1xuXHRcdFx0YmFja2dyb3VuZDogI0NCNTM0RTtcblx0XHRcdGNvbG9yOiAjRkZGO1xuXHRcdH1cblx0XHQubmF2LXRhYmJpbmdhYyAubmF2LWxpbmtzYWMuYWN0aXZlIC5kcm9wZG93bi1pY29ue1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pbnNpZ2h0cy9kcm9wX2Rvd24ucG5nKTtcblx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG5cdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdHdpZHRoOiAxMnB4O1xuXHRcdFx0aGVpZ2h0OiAxMnB4O1xuXHRcdH1cblxuXHRcdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRkxpcGFibGUgQ0FSRCBzdGFydD09PT09PT09PT09PT0gKi9cblx0XHQuc2NlbmUge1xuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0aGVpZ2h0OiAyNjBweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG5cdFx0XHRtYXJnaW46IDQwcHggMDtcblx0XHRcdHBlcnNwZWN0aXZlOiA2MDBweDtcblx0XHQgIH1cblx0XHQgIFxuXHRcdCAgLmNhcmQge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG5cdFx0XHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCAgfVxuXHRcdCAgXG5cdFx0ICAuY2FyZC5pcy1mbGlwcGVkIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuXHRcdCAgfVxuXHRcdCAgXG5cdFx0ICAuY2FyZF9fZmFjZSB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNjBweDtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0ICB9XG5cdFx0ICBcblx0XHQgIC5jYXJkX19mYWNlLS1mcm9udCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiByZWQ7XG5cdFx0ICB9XG5cdFx0ICBcblx0XHQgIC5jYXJkX19mYWNlLS1iYWNrIHtcblx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcblx0XHQgIH1cblx0XHQgIFxuXG5cdFx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBGbGlwcGFibGUgQ0FSRCBlbmQgPT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEZvb3RlclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cdFx0LmZvb3Rlcntcblx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRtYXJnaW4tdG9wOiA0NXB4O1xuXHRcdH1cblx0LmZvb3RlciB1bCBsaSBhe1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRjb2xvcjogIzUxQUNEMjtcblx0fVxuXHQuYm9yZGVyLXNoYXBle1xuXHRcdHdpZHRoOiAxcHg7XG5cdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdGJhY2tncm91bmQ6ICM5RDlEOUQ7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdG1hcmdpbjogMCA2cHg7XG5cdH1cblx0LmZvb3Rlci1ib3R0b217XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRmb250LXNpemU6IDhweDtcblx0XHRsaW5lLWhlaWdodDogMTBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMTJweDtcblx0fVxuXHQuZm9vdGVyIHVse1xuXHRcdG1hcmdpbjogODRweCAwIDE1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KXtcblx0LmhpZ2hjaGFydHMtbWFpbntcblx0XHRwYWRkaW5nOiAwIDYwcHg7XG5cdH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCl7XG5cdC5tb250aGx5LWRldGFpbHMgLmN1c3RvbS1zZWxlY3QuY3VzdG9tLXNlbGVjdDF7XG5cdFx0d2lkdGg6IDEwMHB4O1xuXHR9XG5cdC5zZWxlY3QtaXRlbXMgZGl2LCAuc2VsZWN0LXNlbGVjdGVke1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRwYWRkaW5nOiAzcHggNnB4O1xuXHR9XG5cdC5vdmVydmlldy1kZXRhaWxzIHB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdG1hcmdpbi10b3A6IDVweDtcblx0fVxuXHQuYW1vdW50LWlucHV0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuXHQgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG5cdH1cblx0Lmluc2lnaHRzLWhlcm97XG5cdFx0cGFkZGluZzogNjZweCAwIDE2NXB4IDI1cHg7XG5cdH1cblx0LmhpZ2hjaGFydHMtbWFpbntcblx0XHRwYWRkaW5nOiAwIDMwcHg7XG5cdH1cblx0LmhpZ2hjaGFydHMtY29sb3J7XG5cdFx0d2lkdGg6IDMzLjMzJTtcblx0fVxuXHQuYWNjb3VudC10YWJiaW5ne1xuXHRcdHBhZGRpbmc6IDcwcHggMzBweDtcblx0fVxuXHQudGFiLXBhbmV7XG5cdFx0cGFkZGluZzogNzBweCA1MHB4IDEwMHB4IDQwcHg7XG5cdH1cblx0Lm5hdi10YWJiaW5nYWMgLm5hdi1saW5rc2Fje1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xuXHQubWVudS1ib3JkZXI6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IG5vbmU7XG5cdH1cblx0dWwubmF2Lm5hdi10YWJiaW5nYWMge1xuXHQgICAgcGFkZGluZzogNjBweCAwIDAgMjVweDtcblx0fVxuXHQubmF2LXRhYmJpbmdhYyAubmF2LWxpbmtzYWN7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0fVxuXHQudGFiLXBhbmUge1xuXHQgICAgcGFkZGluZzogNTBweCAyNXB4O1xuXHR9XG5cdC5mb3JtLW1lc3NhZ2UtbWFpbntcblx0XHRtYXJnaW4tdG9wOiA2MHB4O1xuXHR9XG5cdC5Gb3JtLmFjY291bnQtZm9ybSAuYnRuLmJ0bi1zdWNjZXNzIHtcblx0ICAgIHBhZGRpbmc6IDEwcHggMDtcblx0ICAgIG1heC13aWR0aDogMTk2cHg7XG5cdCAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuXHR9XG5cdC5lZGl0LXRpdGxle1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5vdmVydmlldy1kZXRhaWxzIHAge1xuXHQgICAgZm9udC1zaXplOiAxMnB4O1xuXHQgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG5cdH1cblx0LmJkLWxpbmtze1xuXHRcdHBhZGRpbmc6IDEwMnB4IDAgMCAxNXB4O1xuXHR9XG5cdC5tYXJrZXRwbGFjZXtcblx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdH1cblx0Lm5hdi10YWJiaW5ne1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0Lmluc2lnaHRzLWhlcm97XG5cdFx0YmFja2dyb3VuZDogIzVBQzdGNTtcblx0XHRwYWRkaW5nOiA2MHB4IDAgNjBweCAyNXB4O1xuXHR9XG5cdC5pbnNpZ2h0cy1zdWJ0aXRsZXN7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHR9XG5cdC5oaWdoY2hhcnRzLW1haW57XG5cdFx0cGFkZGluZzogMDtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHR9XG5cdC5zcGVuZGluZy1icmVha2Rvd257XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRwYWRkaW5nOiA0MHB4IDI1cHg7XG5cdH1cblx0LnNwZW5kaW5nLWJyZWFrZG93bi5tb250aGx5LWluY29tZXtcblx0XHRwYWRkaW5nOiA0MHB4IDI1cHg7XG5cdH1cblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuXHQubWFpbi1yb3c6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IG5vbmU7XG5cdH1cblx0LmJkLXNpZGViYXJ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0Ym94LXNoYWRvdzogMHB4IDRweCAxNHB4IDFweCByZ2IoMCAwIDAgLyAxMCUpO1xuXHR9XG5cdC5hY2NvdW50LXRhYmJpbmcge1xuXHQgICAgcGFkZGluZzogMzBweCAwIDAgMDtcblx0fVxuXHQuZ3Jvd3VwLWltZ2FnZXtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5Gb3Jte1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0fVxuXHQubW9kYWwtd3JhcHBlciAubW9kYWwtYm9keXtcblx0XHRwYWRkaW5nOiAyMHB4IDUwcHggNDBweDtcblx0fVxuXHQubW9kYWwtd3JhcHBlcntcblx0XHR3aWR0aDogOTAlO1xuXHR9XG5cdC5tb2RhbC13cmFwcGVyIC5tb2RhbC1ib2R5e1xuXHRcdHBhZGRpbmc6IDEwcHggMTVweCAzMHB4O1xuXHR9XG5cdC5wcm9ncmVzcy1wcm9jZXNze1xuXHRcdGhlaWdodDogOHB4O1xuXHR9XG5cdC5pbnNpZ2h0cy10aXRsZXtcblx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuaW5zaWdodHMtaW1hZ2VzIGltZ3tcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdHdpZHRoOiAxNzAwcHg7XG5cdH1cblx0LmNvbG9yLWJveCB7XG5cdCAgICBkaXNwbGF5OiBmbGV4O1xuXHQgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5oaWdoY2hhcnRzLWNvbG9ye1xuXHRcdHdpZHRoOiBhdXRvO1xuXHR9XG5cdC5jb2xvci1jb25jZXB0e1xuXHRcdHdpZHRoOiAxMHB4O1xuXHRcdGhlaWdodDogMTBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0fVxuXHQuaGlnaGNoYXJ0cy1pbWFnZXN7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuYmQtbGlua3N7XG5cdFx0cGFkZGluZzogMzBweCAwIDAgMTVweDtcblx0fVxuXHQuYmQtbGlua3MgdWwgbGkgYXtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XG5cdC5idG4tYWNjb3VudHtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHR9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XG5cdC5pbmNvbWUtcmV0YWlsZXIsXG5cdC5ob3VzaW5nIC5pbmNvbWUtcmV0YWlsZXJ7XG5cdFx0cGFkZGluZzogMTVweCAxNXB4IDE1cHggMjVweDtcblx0fVxuXHQubWFya2V0cGxhY2Uge1xuXHQgICAgcGFkZGluZzogMCAxNXB4O1xuXHR9XG5cdC5wYXktdGV4dHtcblx0XHRwYWRkaW5nOiAwIDAgMTBweCAwO1xuXHR9XG5cdC5wcmlzZS1pbnB1dCxcblx0Lm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdCxcblx0Lm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdC5jdXN0b20tc2VsZWN0MXtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmbG9hdDogbm9uZTtcblx0XHRtYXJnaW46IDAgMCAxMHB4IDA7XG5cdH1cblx0LnBheS1pbmZvLFxuXHQubW9udGhseS1kZXRhaWxzLFxuXHQuZm9vdGVyIHVse1xuXHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG5cdCAgICB3aWR0aDogMTAwJTtcblx0fVxuXHQuZm9vdGVyIHVsIGxpLFxuXHQuZm9vdGVyIHVsIGxpIGEge1xuXHQgICAgZmxvYXQ6IGxlZnQ7XG5cdH1cblx0Lm5hdi10YWJiaW5nIC5uYXYtaXRlbXMgLm5hdi1saW5rc3tcblx0XHRwYWRkaW5nOiAwIDE1cHggOHB4IDE1cHg7XG5cdH1cblx0LnByb2dyZXNzLWluZm8gc3Bhbntcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdH1cblx0LmlubmVyLXRhYmJpbmcgdWwgbGkgYXtcblx0XHRwYWRkaW5nOiA2cHggMTBweDtcblx0fVxuXHQuY29sb3ItYm94e1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQuaGlnaGNoYXJ0cy1jb2xvcntcblx0XHRwYWRkaW5nOiAwIDZweDtcblx0fVxuXHQuc3BlbmRpbmctYnJlYWtkb3due1xuXHRcdHBhZGRpbmc6IDIwcHggMTVweDtcblx0fVxuXHQuaGlnaGNoYXJ0cy1zdWJ0aXRsZXN7XG5cdFx0bWFyZ2luOiAxNXB4IDA7XG5cdH1cblx0LnNwZW5kaW5nLWJyZWFrZG93bi5tb250aGx5LWluY29tZXtcblx0XHRwYWRkaW5nOiAyMHB4IDE1cHg7XG5cdH1cbn1cblxuXG5cbi8qIGRyYWdnYWJsZSAqL1xuLmRyYWdnYWJsZS1saXN0IHtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcbiAgfVxuICAuZHJhZ2dhYmxlLWJveCB7XG5cdHBhZGRpbmc6IDIwcHggMTBweDtcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG5cdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGN1cnNvcjogbW92ZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcblx0ICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG5cdCAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0ICBib3JkZXItcmFkaXVzOiA0cHg7XG5cdCAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHRcdFx0XHQwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuXHRcdFx0XHQwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKCAyNTUsIDI1NSwgMjU1LCAxICk7XG5cdCAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XG5cdCAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAyMHB4ICk7XG5cdCAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDIwcHggKTtcblx0ICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XG4gIH1cbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcblx0b3BhY2l0eTogMDtcbiAgfVxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIC5kcmFnZ2FibGUtYm94Omxhc3QtY2hpbGQge1xuXHRib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmRyYWdnYWJsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmRyYWdnYWJsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbiAgLyogZHJhZ2dhYmxlICovXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRXYXRjaF9WaWRlb19wYWdlJ3Ncbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFZpZGVvX3BvcHVwXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1x0XG5cdFx0LyogTW9kYWwgQmFzZSBDU1MgKi9cblx0XHQuc2NvdGNoLW92ZXJsYXkge1xuXHRcdCAgICBwb3NpdGlvbjogZml4ZWQ7XG5cdFx0ICAgIHotaW5kZXg6IDk5OTg7XG5cdFx0ICAgIHRvcDogMDtcblx0XHQgICAgbGVmdDogMDtcblx0XHQgICAgb3BhY2l0eTogMDtcblx0XHQgICAgd2lkdGg6IDEwMCU7XG5cdFx0ICAgIGhlaWdodDogMTAwJTtcblx0XHQgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICAtbW96LXRyYW5zaXRpb246IDFtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiAxbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICAtby10cmFuc2l0aW9uOiAxbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICB0cmFuc2l0aW9uOiAxbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG5cdFx0fVxuXG5cdFx0LnNjb3RjaC1tb2RhbCB7XG5cdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgICAgei1pbmRleDogOTk5OTtcblx0XHQgICAgdG9wOiA1MCU7XG5cdFx0ICAgIGxlZnQ6IDUwJTtcblx0XHQgICAgb3BhY2l0eTogMDtcblx0XHQgICAgd2lkdGg6IDk0JTtcblx0XHQgICAgcGFkZGluZzogMjRweCAyMHB4O1xuXHRcdCAgICAtd2Via2l0LXRyYW5zaXRpb246IDFtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIC1tb3otdHJhbnNpdGlvbjogMW1zIG9wYWNpdHkgZWFzZTtcblx0XHQgICAgLW1zLXRyYW5zaXRpb246IDFtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIC1vLXRyYW5zaXRpb246IDFtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIHRyYW5zaXRpb246IDFtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0ICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHQgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0ICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdCAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0ICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0fVxuXHRcdC5zY290Y2gtbW9kYWwuc2NvdGNoLW9wZW4uc2NvdGNoLWFuY2hvcmVkIHtcblx0XHQgICAgdG9wOiAyMHB4O1xuXHRcdCAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHRcdCAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHRcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdFx0ICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHRcdCAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0XHR9XG5cdFx0LnNjb3RjaC1tb2RhbC5zY290Y2gtb3BlbiB7XG5cdFx0ICAgIG9wYWNpdHk6IDE7XG5cdFx0fVxuXHRcdC5zY290Y2gtb3ZlcmxheS5zY290Y2gtb3BlbiB7XG5cdFx0ICAgIG9wYWNpdHk6IDE7XG5cdFx0fVxuXHRcdC8qIENsb3NlIEJ1dHRvbiAqL1xuXHRcdC5zY290Y2gtY2xvc2Uge1xuXHRcdCAgICB3aWR0aDogMzBweDtcblx0XHQgICAgaGVpZ2h0OiAzMHB4O1xuXHRcdCAgICBmb250LXNpemU6IDI0cHg7XG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0ICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ICAgIHRvcDogLTEwcHg7XG5cdFx0ICAgIHJpZ2h0OiAtMTBweDtcblx0XHQgICAgcGFkZGluZzogNXB4IDdweCA3cHg7XG5cdFx0ICAgIGNvbG9yOiAjZmZmO1xuXHRcdCAgICBib3JkZXI6IDA7XG5cdFx0ICAgIG91dGxpbmU6IG5vbmU7XG5cdFx0ICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRcdCAgICBiYWNrZ3JvdW5kOiAjNUFDN0Y1O1xuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0fVxuXHRcdC8qIERlZmF1bHQgQW5pbWF0aW9uICovXG5cdFx0LnNjb3RjaC1vdmVybGF5LmZhZGUtYW5kLWRyb3Age1xuXHRcdCAgICBkaXNwbGF5OiBibG9jaztcblx0XHQgICAgb3BhY2l0eTogMDtcblx0XHR9XG5cdFx0LnNjb3RjaC1tb2RhbC5mYWRlLWFuZC1kcm9wIHtcblx0XHQgICAgdG9wOiAtMzAwJTtcblx0XHQgICAgb3BhY2l0eTogMTtcblx0XHQgICAgZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdC5zY290Y2gtbW9kYWwuZmFkZS1hbmQtZHJvcC5zY290Y2gtb3BlbiB7XG5cdFx0ICAgIHRvcDogNTAlO1xuXHRcdCAgICAtd2Via2l0LXRyYW5zaXRpb246IDUwMG1zIHRvcCA1MDBtcyBlYXNlO1xuXHRcdCAgICAtbW96LXRyYW5zaXRpb246IDUwMG1zIHRvcCA1MDBtcyBlYXNlO1xuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogNTAwbXMgdG9wIDUwMG1zIGVhc2U7XG5cdFx0ICAgIC1vLXRyYW5zaXRpb246IDUwMG1zIHRvcCA1MDBtcyBlYXNlO1xuXHRcdCAgICB0cmFuc2l0aW9uOiA1MDBtcyB0b3AgNTAwbXMgZWFzZTtcblx0XHR9XG5cdFx0LnNjb3RjaC1tb2RhbC5mYWRlLWFuZC1kcm9wLnNjb3RjaC1vcGVuLnNjb3RjaC1hbmNob3JlZCB7XG5cdFx0ICAgIC13ZWJraXQtdHJhbnNpdGlvbjogNTAwbXMgdG9wIDUwMG1zIGVhc2U7XG5cdFx0ICAgIC1tb3otdHJhbnNpdGlvbjogNTAwbXMgdG9wIDUwMG1zIGVhc2U7XG5cdFx0ICAgIC1tcy10cmFuc2l0aW9uOiA1MDBtcyB0b3AgNTAwbXMgZWFzZTtcblx0XHQgICAgLW8tdHJhbnNpdGlvbjogNTAwbXMgdG9wIDUwMG1zIGVhc2U7XG5cdFx0ICAgIHRyYW5zaXRpb246IDUwMG1zIHRvcCA1MDBtcyBlYXNlO1xuXHRcdH1cblx0XHQuc2NvdGNoLW92ZXJsYXkuZmFkZS1hbmQtZHJvcC5zY290Y2gtb3BlbiB7XG5cdFx0ICAgIHRvcDogMDtcblx0XHQgICAgLXdlYmtpdC10cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIC1tb3otdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSBlYXNlO1xuXHRcdCAgICAtby10cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IGVhc2U7XG5cdFx0ICAgIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgZWFzZTtcblx0XHQgICAgb3BhY2l0eTogMTtcblx0XHR9XG5cdFx0LnNjb3RjaC1tb2RhbC5mYWRlLWFuZC1kcm9wIHtcblx0XHQgICAgLXdlYmtpdC10cmFuc2l0aW9uOiA1MDBtcyB0b3AgZWFzZTtcblx0XHQgICAgLW1vei10cmFuc2l0aW9uOiA1MDBtcyB0b3AgZWFzZTtcblx0XHQgICAgLW1zLXRyYW5zaXRpb246IDUwMG1zIHRvcCBlYXNlO1xuXHRcdCAgICAtby10cmFuc2l0aW9uOiA1MDBtcyB0b3AgZWFzZTtcblx0XHQgICAgdHJhbnNpdGlvbjogNTAwbXMgdG9wIGVhc2U7XG5cdFx0fVxuXHRcdC5zY290Y2gtb3ZlcmxheS5mYWRlLWFuZC1kcm9wIHtcblx0XHQgICAgLXdlYmtpdC10cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IDUwMG1zIGVhc2U7XG5cdFx0ICAgIC1tb3otdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSA1MDBtcyBlYXNlO1xuXHRcdCAgICAtbXMtdHJhbnNpdGlvbjogNTAwbXMgb3BhY2l0eSA1MDBtcyBlYXNlO1xuXHRcdCAgICAtby10cmFuc2l0aW9uOiA1MDBtcyBvcGFjaXR5IDUwMG1zIGVhc2U7XG5cdFx0ICAgIHRyYW5zaXRpb246IDUwMG1zIG9wYWNpdHkgNTAwbXMgZWFzZTtcblx0XHR9XG5cdFx0I2NvbnRlbnQge1xuXHRcdCAgICBkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0XHQudHJpZ2dlci1idXR0b24ge1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdCAgICBmb250LXNpemU6IDEycHg7XG5cdFx0ICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuXHRcdCAgICBjb2xvcjogIzU5NTk1OTtcblx0XHQgICAgb3V0bGluZTogbm9uZTtcblx0XHQgICAgZm9udC13ZWlnaHQ6IDMwMDtcblx0XHQgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG5cdFx0ICAgIG1hcmdpbi1ib3R0b206IDMxcHg7XG5cdFx0ICAgIGxpbmUtaGVpZ2h0OiAxO1xuXHRcdH1cblx0XHQudmlkZW8taGVyb3tcblx0XHRcdGJhY2tncm91bmQ6ICNCNkU3RDI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0cGFkZGluZzogMjJweCAxMThweCAwIDQ1cHg7XG5cdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHR9XG5cdFx0LnZpZGVvLWJhbm5lciAuaW5zaWdodHMtc3VidGl0bGVze1xuXHRcdFx0Y29sb3I6ICM1OTU5NTk7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRcdG1heC13aWR0aDogNjAlO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdG1hcmdpbjogMTBweCAwIDM1cHg7XG5cdFx0fVxuXHRcdC52aWRlby1iYW5uZXIgLmluc2lnaHRzLXRpdGxle1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHR9XG5cdFx0YS5pbnNpZ2h0X2J0biB7XG5cdFx0XHRsaW5lLWhlaWdodDogMS41cmVtO1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0cGFkZGluZzogMC4zNzVyZW0gMXJlbTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcblx0XHR9XG5cdFx0LmJ1ZGdldFBsYW5uaW5nX2J0bjpob3Zlcntcblx0XHRcdGNvbG9yOiAjNUFDN0Y1O1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjNUFDN0Y1O1xuXHRcdH1cblxuXHRcdC5idWRnZXRQbGFubmluZ19idG57XG5cdFx0XHRsaW5lLWhlaWdodDogMnJlbTtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0cGFkZGluZzogMC4zNzVyZW0gMXJlbTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGJhY2tncm91bmQ6ICM1QUM3RjU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcblx0XHR9XG5cblx0XHQucHJvbXB0aW5ne1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdH1cblx0XHQucHJvbXB0aW5nIGgzIHNwYW57XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG4gICAgXHRcdGNvbG9yOiAjNjk3NTdhICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyLjU7XG5cdFx0fVxuXG5cdFx0LmNvbmZpcm0tYnRucyB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0YS5pbnNpZ2h0X2J0bjpob3ZlciB7XG5cdFx0XHRjb2xvcjogIzVBQzdGNTtcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzVBQzdGNTtcblx0XHR9XG5cdFx0LnZpZGVvLXRpdGxle1xuXHRcdFx0Zm9udC1zaXplOiAyNXB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDQ1cHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdH1cblx0XHQuYmxvZy10aXRsZXtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHR9XG5cdFx0LmJsb2ctc3VidGl0bGUsXG5cdFx0LmJsb2ctc21hbGx0aXRsZXtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdG1hcmdpbjogMTVweCAwO1xuXHRcdH1cblx0XHQuYmxvZy1zbWFsbHRpdGxle1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0XHQudmlkZW8tYm94e1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcblx0XHR9XG5cdFx0Lm15VGV4dC52aWRlby1ib3h7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdFx0LnZpZGVvLWJveHtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHRcdC50b3AtdHJhZGluZyAuYmxvZy10aXRsZSB7XG5cdFx0ICAgIGZvbnQtc2l6ZTogMTJweDtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG5cdFx0ICAgIG1hcmdpbi1ib3R0b206IDZweDtcblx0XHQgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdH1cblx0XHQudG9wLXRyYWRpbmcgLmJsb2ctY29udGFudHtcblx0XHRcdGZvbnQtc2l6ZTogNnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDcuNTZweDtcblx0XHR9XG5cdFx0YSNsb2FkTW9yZSB7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdCAgICBmb250LXNpemU6IDEwcHg7XG5cdFx0ICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdCAgICBjb2xvcjogIzVBQzdGNTtcblx0XHQgICAgZGlzcGxheTogdGFibGU7XG5cdFx0ICAgIG1hcmdpbjogNDdweCBhdXRvIDA7XG5cdFx0fVxuXHRcdC50b3AtdHJhZGluZyAudmlkZW8tYm94e1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHR9XG5cdFx0LnRvcC10cmFkaW5ne1xuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHRwYWRkaW5nOiAzMHB4IDUwcHggMTI1cHggMzBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE3cHg7XG5cdFx0XHRtYXJnaW4tdG9wOiA1MnB4O1xuXHRcdH1cblx0XHQud2F0Y2gtdmlkZW8gLmFjY291bnQtdGFiYmluZ3tcblx0XHRcdHBhZGRpbmc6IDEwNXB4IDcwcHggMCA3MHB4O1xuXHRcdH1cblx0XHQuZm9vdGVyLmZvb3Rlci13YXRjaHZpZGVvIHVse1xuXHRcdFx0bWFyZ2luOiA3OHB4IDAgMTVweDtcblx0XHR9XG5cblx0XHQucGFpZFZpZGVvRGlzYWJsZXtcblx0XHRcdGZpbHRlcjogYmx1cigycHgpO1xuXHRcdH1cblx0XHQvKiBmcm9tICovXG5cblx0XHQuaW52YWxpZC1mZWVkYmFjayB7XG5cdFx0XHRjb2xvcjogcmVkO1xuXHRcdH1cblxuLnVzZXItbWVudS5uYXYgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogNThweDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGNob29zZSBwbGFuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5ncmlkIHtcblx0Z2FwOiA1JTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbn1cbi5jYXJkIHtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXHRwYWRkaW5nOiAzNXB4IDM1cHggMzJweCAzNXB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5jYXJkX3RpdGxlIHtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuLnByaWNpbmcge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnByaWNpbmcgLnNtYWxsIHtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuLmJvcmRlci1wcmlzaW5nIHtcblx0d2lkdGg6IDE3cmVtO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0bWFyZ2luOiAwIGF1dG8gMTVweDtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNUFDN0Y1O1xufVxuLnJpYmJvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHR0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDEwcHhcbiAgfVxuLmZlYXR1cmUtY2hlY2tpY29ue1xuXHRjb2xvcjogZ3JlZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mZWF0dXJlLXRpbWVzaWNvbntcblx0Y29sb3I6IHJlZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZlYXR1cmVzIHtcblx0bWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xuXHRsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG5cdGhlaWdodDogMzUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZnJlZVBsYW57XG5cdG1hcmdpbi1ib3R0b206IDYycHg7O1xufVxuLmZlYXR1cmVzIGxpIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZmVhdHVyZXMgbGkgaW1ne1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5hLmN0YV9idG4ge1xuXHRsaW5lLWhlaWdodDogMTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHBhZGRpbmc6IDExcHggMTVweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kOiAjNUFDN0Y1O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5hLmN0YV9idG46aG92ZXIge1xuXHRjb2xvcjogIzVBQzdGNTtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogMnB4IHNvbGlkICM1QUM3RjU7XG59XG4ucHJpc2luZy10YWJsZS10aXRsZXtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRsaW5lLWhlaWdodDogNDVweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luOiAxMDVweCAwcHggMzBweCAwcHg7XG5cdHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi5mZWF0dXJlZC1yaWJib257XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMTVweDtcbn1cbi5wcmlzaW5nLXRhYmxle1xuXHRwYWRkaW5nOiAwIDIzcHggMTU4cHggMjNweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFByb2dyZXNzX1BsYW5lXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wYW5lbGJhcjItY2FyZHtcblx0cGFkZGluZzogMTVweDtcbn1cbi5zdGVwLWJhbm5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OGNlNjU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAyLjYyNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41NjI1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTlweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wbGV0ZWR7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OGNlNjU7XG59XG5cbi5wZW5kaW5ne1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmNiNWVlO1xufVxuXG4uc3RlcC1iYW5uZXItUGVuZGluZyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAyLjYyNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMC41NjI1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTlweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG4uc3RlcC1iYW5uZXIgc3Bhbntcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2dyZXNzLXBhbmVse1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3Byb2dyZXNzLXBhbmVsMi9lYXJuLW1vbmV5LnBuZyk7XG59XG4ucHJvZ3Jlc3MtdGl0bGUgc3Bhbntcblx0Y29sb3I6ICM1QUM3RjU7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0bGluZS1oZWlnaHQ6IDI1cHg7XG5cdG1hcmdpbi1yaWdodDogMnB4O1xufVxuLnByb2dyZXNzLXRpdGxlIHAge1xuXHRsaW5lLWhlaWdodDogMTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Zm9udC1zaXplOiA4MHB4O1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoOTAsMTk5LDI0NSwwLjYwKSwgcmdiKDkwLDE5OSwyNDUsMC4wKSk7XG5cdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHQtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucHJvZ3Jlc3MtdGl0bGV7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuLnBhbmVsLXRpdGxle1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW46IDEwcHggMCAxNXB4O1x0XHRcbn1cbi5wYW5lbC1zdGVwLXBhZGRpbmd7XG5cdHBhZGRpbmc6IDBweCA1cHg7XG59XG4ucGFuZWwtc3VidGl0bGVze1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuLmVtZXJnZW5jeS10aXRsZXtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5lbWVyZ2VuY3ktcHJpc2V7XG5cdGNvbG9yOiAjNUFDN0Y1O1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGxpbmUtaGVpZ2h0OiAzN3B4O1xufVxuLmVtZXJnZW5jeS1mdW5kIHB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkNGQ0Y7XG59XG4uZW1lcmdlbmN5LWZ1bmR7XG5cdC8qIG1hcmdpbi10b3A6IDEwMXB4O1x0ICovXG5cdGJvcmRlci1yYWRpdXM6IDE5cHg7XG5cdC8qIHBhZGRpbmc6IDM2cHggMzBweCAyM3B4IDIycHg7ICAqL1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5mdW5kLXRpdGxle1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnByb2dyZXNzLXRpdGxle1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAyNXB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZ3Jlc3MtbGluZXtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDVkOWRiO1xufVxuLnByb2dyZXNzLXN1YnRpdGxlc3tcblx0Y29sb3I6ICM1QUM3RjU7XHRcblx0Zm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG5cdGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLmVpdXNtb2QtdGl0bGV7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYW1vdW50LWZvcm0gbGFiZWx7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdG1hcmdpbi1ib3R0b206IDhweFxufVxuLmFtb3VudC1mb3JtIGlucHV0e1xuXHR3aWR0aDogMTAwJTtcblx0b3V0bGluZTogbm9uZTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRwYWRkaW5nOiA5cHggMTVweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRtYXJnaW4tYm90dG9tOiA2OHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM5RDlEOUQ7XG59XG4uYW1vdW50LWZvcm0gLmFtb3VudC1idG57XG5cdGNvbG9yOiAjRkZGO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRkaXNwbGF5OiB0YWJsZTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDEwcHggMzNweDtcblx0YmFja2dyb3VuZDogIzVBQzdGNTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5hbW91bnQtZm9ybSAuYW1vdW50LWJ0bjpob3Zlcntcblx0Y29sb3I6ICM1QUM3RjU7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjNUFDN0Y1O1xufVxuLmFtb3VudC1mb3Jte1xuXHRwYWRkaW5nOiA0N3B4O1xufVxuLnBlcmNlbnRhZ2UtaW5wdXQgc3Bhbntcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjVweDtcblx0bWFyZ2luLWxlZnQ6IDNweDtcbn1cbi52aWRlby13cmFwIHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnZpZGVvIHtcbndpZHRoOiAyNTA7XG5cbm1heC13aWR0aDogMTAwJTtcblxufVxuLmNvbnRyb2xzIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMDAlO1xuYm90dG9tOiA0cHg7XG5sZWZ0OiAwO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuYnV0dG9uIHtcbnBhZGRpbmc6IDEwcHg7XG5mb250LXNpemU6IDE0cHg7XG5ib3JkZXI6IDA7XG5jdXJzb3I6IHBvaW50ZXI7XG5jb2xvcjogIzAwMDtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYnV0dG9uOmZvY3VzLFxuYnV0dG9uOmFjdGl2ZSB7XG5vdXRsaW5lOiAwO1xuYm9yZGVyOiAwO1xufVxuLmJhci13cmFwIHtcbmJhY2tncm91bmQtY29sb3I6ICMwMDA7XG53aWR0aDogMTAwJTtcbmhlaWdodDogNXB4O1xufVxuLmJhciB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5iYWNrZ3JvdW5kOiAjZmZmO1xuaGVpZ2h0OiA1cHg7XG50cmFuc2l0aW9uOiAwLjJzO1xufVxuYnV0dG9uLmJpZ0J1dHRvbiB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG56LWluZGV4OiA5OTtcbmxlZnQ6IDUwJTtcbnRvcDogNTAlO1xucGFkZGluZzogMDtcbmZvbnQtc2l6ZTogMTAwcHg7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmkuZmFzLmZhLXBsYXktY2lyY2xle1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiA1MCU7XG5sZWZ0OiA1MCU7XG5vcGFjaXR5OiAwO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uaGlkZSB7XG5hbmltYXRpb24tbmFtZTogYnV0b25IaWRlO1xuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbm9wYWNpdHk6IDA7XG59XG4uYnV0dG9uLW5leHR7XG5oZWlnaHQ6IDA7XG5vcGFjaXR5OiAwO1xufVxuYnV0dG9uLnBsYXl7XG5kaXNwbGF5OiBub25lO1xufVxuXG5cblxuQGtleWZyYW1lcyBidXRvbkhpZGUge1xuMCUge1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRvcGFjaXR5OiAxO1xufVxuMTAwJSB7XG5cdGZvbnQtc2l6ZTogMTMwcHg7XG5cdG9wYWNpdHk6IDA7XG59XG59XG4ucHJvZ3Jlc3MtbWFpbntcbnBhZGRpbmctYm90dG9tOiA2NHB4O1xufVxuLmFib3V0LW1vbmV5e1xubWFyZ2luLXRvcDogMzZweDtcbmJvcmRlci1yYWRpdXM6IDIzcHg7XG5wYWRkaW5nOiA1NXB4IDQ3cHggNDZweCA0MXB4O1xuYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uc29tZXRoaW5nLXRpdGxle1xuY29sb3I6ICNGRkY7XG5mb250LXNpemU6IDM2cHg7XG5mb250LXdlaWdodDogNzAwO1xubGluZS1oZWlnaHQ6IDQ1cHg7XG5sZXR0ZXItc3BhY2luZzogMnB4O1xubWFyZ2luLWJvdHRvbTogNDVweDtcbi13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjNTJBQ0QyO1xuZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xufVxuLnNvbWV0aGluZy1zdWJ0aXRsZXtcbmZvbnQtc2l6ZTogMjRweDtcbmxpbmUtaGVpZ2h0OiAzMHB4O1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5hYm91dC1tb25leXtcbmJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcHJvZ3Jlc3MtcGFuZWwyL2Fib3V0LW1vbmV5LnBuZyk7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1zaXplOiBhdXRvO1xufVxuLmNob29zZS1yb3d7XG5tYXJnaW4tbGVmdDogMTAuMSU7XG59XG4uaW5zaWdodC1wYW5lbC1pbWFnZXtcbm1hcmdpbi1sZWZ0OjByZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCl7XG4uZ3JpZHtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpe1xuLmhpZ2hjaGFydHMtbWFpbntcblx0cGFkZGluZzogMCA2MHB4O1xufVxuLndhdGNoLXZpZGVvIC5hY2NvdW50LXRhYmJpbmd7XG5cdHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XG59XG4udG9wLXRyYWRpbmd7XG5cdHBhZGRpbmc6IDMwcHggMjBweCAxMjVweCAyMHB4O1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpe1xuLmNvbnRhY3QtdXMgLkZvcm17XG5cdHBhZGRpbmc6IDkwcHggMTAwcHg7XG59XG4uYmxvZy1zdWJ0aXRsZSBicntcblx0ZGlzcGxheTogbm9uZTtcbn1cbi5tb250aGx5LWRldGFpbHMgLmN1c3RvbS1zZWxlY3QuY3VzdG9tLXNlbGVjdDF7XG5cdHdpZHRoOiAxMDBweDtcbn1cbi5zZWxlY3QtaXRlbXMgZGl2LCAuc2VsZWN0LXNlbGVjdGVke1xuXHRmb250LXNpemU6IDEycHg7XG5cdHBhZGRpbmc6IDNweCA2cHg7XG59XG4ub3ZlcnZpZXctZGV0YWlscyBwe1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRtYXJnaW4tdG9wOiA1cHg7XG59XG4uYW1vdW50LWlucHV0IC5zZWxlY3Qtc2VsZWN0ZWQge1xuXHRsaW5lLWhlaWdodDogMzBweDtcbn1cbi5pbnNpZ2h0cy1oZXJve1xuXHRwYWRkaW5nOiA2NnB4IDAgMTY1cHggMjVweDtcbn1cbi5oaWdoY2hhcnRzLW1haW57XG5cdHBhZGRpbmc6IDAgMzBweDtcbn1cbi5oaWdoY2hhcnRzLWNvbG9ye1xuXHR3aWR0aDogMzMuMzMlO1xufVxuLmFjY291bnQtdGFiYmluZ3tcblx0cGFkZGluZzogNzBweCAzMHB4O1xufVxuLnRhYi1wYW5le1xuXHRwYWRkaW5nOiA3MHB4IDUwcHggMTAwcHggNDBweDtcbn1cbi5uYXYtdGFiYmluZ2FjIC5uYXYtbGlua3NhY3tcblx0Zm9udC1zaXplOiAxNnB4O1xufVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XG4uY29udGFjdC11cyAuRm9ybXtcblx0cGFkZGluZzogNDBweCA0MHB4O1xufVxuLmNvbnRhY3QtdXMgLmZvb3Rlci5mb290ZXItd2F0Y2h2aWRlbyB1bCB7XG5cdG1hcmdpbjogNTBweCAwIDE1cHg7XG59XG4udmlkZW8taGVyb3tcblx0cGFkZGluZzogMzBweCAyNXB4O1xufVxuLm1lbnUtYm9yZGVyOmJlZm9yZXtcblx0Y29udGVudDogbm9uZTtcbn1cbnVsLm5hdi5uYXYtdGFiYmluZ2FjIHtcblx0cGFkZGluZzogNjBweCAwIDAgMjVweDtcbn1cbi5uYXYtdGFiYmluZ2FjIC5uYXYtbGlua3NhY3tcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50YWItcGFuZSB7XG5cdHBhZGRpbmc6IDUwcHggMjVweDtcbn1cbi5mb3JtLW1lc3NhZ2UtbWFpbntcblx0bWFyZ2luLXRvcDogNjBweDtcbn1cbi5Gb3JtLmFjY291bnQtZm9ybSAuYnRuLmJ0bi1zdWNjZXNzIHtcblx0cGFkZGluZzogMTBweCAwO1xuXHRtYXgtd2lkdGg6IDE5NnB4O1xuXHRtYXJnaW46IDMwcHggYXV0byAwO1xufVxuLmVkaXQtdGl0bGV7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ub3ZlcnZpZXctZGV0YWlscyBwIHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsaW5lLWhlaWdodDogMTBweDtcbn1cbi5iZC1saW5rc3tcblx0cGFkZGluZzogMTAycHggMCAwIDE1cHg7XG59XG4ubWFya2V0cGxhY2V7XG5cdHBhZGRpbmc6IDAgMjBweDtcbn1cbi5uYXYtdGFiYmluZ3tcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5zaWdodHMtaGVyb3tcblx0YmFja2dyb3VuZDogIzVBQzdGNTtcblx0cGFkZGluZzogNjBweCAwIDYwcHggMjVweDtcbn1cbi5pbnNpZ2h0cy1zdWJ0aXRsZXN7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cbi5oaWdoY2hhcnRzLW1haW57XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbi10b3A6IDQwcHg7XG59XG4uc3BlbmRpbmctYnJlYWtkb3due1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRwYWRkaW5nOiA0MHB4IDI1cHg7XG59XG4uc3BlbmRpbmctYnJlYWtkb3duLm1vbnRobHktaW5jb21le1xuXHRwYWRkaW5nOiA0MHB4IDI1cHg7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcbi5wcmlzaW5nLXRhYmxlLXRpdGxle1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRtYXJnaW46IDYwcHggMCA0MHB4O1xufVxuLmNhcmR7XG5cdHBhZGRpbmc6IDM1cHggMTVweCAzMnB4IDE1cHg7XG59XG4ucHJpc2luZy10YWJsZSB7XG5cdHBhZGRpbmc6IDAgMCAxNThweCAwO1xufVxuLmNvbnRhY3QtdXMgLkZvcm17XG5cdHBhZGRpbmc6IDMwcHggMjVweDtcbn1cbi5tYWluLXJvdzpiZWZvcmV7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG4uYmQtc2lkZWJhcntcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OiBub25lO1xuXHRib3gtc2hhZG93OiAwcHggNHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDEwJSk7XG59XG4uYWNjb3VudC10YWJiaW5nIHtcblx0cGFkZGluZzogMzBweCAwIDAgMDtcbn1cbi5ncm93dXAtaW1nYWdle1xuXHRkaXNwbGF5OiBub25lO1xufVxuLkZvcm17XG5cdG1heC13aWR0aDogMTAwJTtcbn1cbi5tb2RhbC13cmFwcGVyIC5tb2RhbC1ib2R5e1xuXHRwYWRkaW5nOiAyMHB4IDUwcHggNDBweDtcbn1cbi5tb2RhbC13cmFwcGVye1xuXHR3aWR0aDogOTAlO1xufVxuLm1vZGFsLXdyYXBwZXIgLm1vZGFsLWJvZHl7XG5cdHBhZGRpbmc6IDEwcHggMTVweCAzMHB4O1xufVxuLnByb2dyZXNzLXByb2Nlc3N7XG5cdGhlaWdodDogOHB4O1xufVxuLmluc2lnaHRzLXRpdGxle1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmluc2lnaHRzLWltYWdlcyBpbWd7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY29sb3ItYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhpZ2hjaGFydHMtY29sb3J7XG5cdHdpZHRoOiBhdXRvO1xufVxuLmNvbG9yLWNvbmNlcHR7XG5cdHdpZHRoOiAxMHB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmhpZ2hjaGFydHMtaW1hZ2Vze1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJkLWxpbmtze1xuXHRwYWRkaW5nOiAzMHB4IDAgMCAxNXB4O1xufVxuLmJkLWxpbmtzIHVsIGxpIGF7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc2NvdGNoLW1vZGFsLmZhZGUtYW5kLWRyb3Auc2NvdGNoLW9wZW4ge1xuXHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5zY290Y2gtY29udGVudCBpZnJhbWV7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcbi5ncmlkIHtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG4uYnRuLWFjY291bnR7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG59XG4ud2F0Y2gtdmlkZW8gLmFjY291bnQtdGFiYmluZ3tcblx0cGFkZGluZzogNTBweCAxNXB4IDAgMTVweDtcbn1cbi5ibG9nLXRpdGxle1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udG9wLXRyYWRpbmd7XG5cdHBhZGRpbmc6IDMwcHggMjBweDtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuLmluY29tZS1yZXRhaWxlcixcbi5ob3VzaW5nIC5pbmNvbWUtcmV0YWlsZXJ7XG5cdHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDI1cHg7XG59XG4ubWFya2V0cGxhY2Uge1xuXHRwYWRkaW5nOiAwIDE1cHg7XG59XG4ucGF5LXRleHR7XG5cdHBhZGRpbmc6IDAgMCAxMHB4IDA7XG59XG4ucHJpc2UtaW5wdXQsXG4ubW9udGhseS1kZXRhaWxzIC5jdXN0b20tc2VsZWN0LFxuLm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdC5jdXN0b20tc2VsZWN0MXtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OiBub25lO1xuXHRtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4ucGF5LWluZm8sXG4ubW9udGhseS1kZXRhaWxzLFxuLmZvb3RlciB1bHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmZvb3RlciB1bCBsaSxcbi5mb290ZXIgdWwgbGkgYSB7XG5cdGZsb2F0OiBsZWZ0O1xufVxuLm5hdi10YWJiaW5nIC5uYXYtaXRlbXMgLm5hdi1saW5rc3tcblx0cGFkZGluZzogMCAxNXB4IDhweCAxNXB4O1xufVxuLnByb2dyZXNzLWluZm8gc3Bhbntcblx0Zm9udC1zaXplOiAxMHB4O1xufVxuLm1sLTEze1xuXHRtYXJnaW4tbGVmdDogMTMuNSUgIWltcG9ydGFudDtcbn1cbi5pbm5lci10YWJiaW5nIHVsIGxpIGF7XG5cdHBhZGRpbmc6IDZweCAxMHB4O1xufVxuLmNvbG9yLWJveHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhpZ2hjaGFydHMtY29sb3J7XG5cdHBhZGRpbmc6IDAgNnB4O1xufVxuLnNwZW5kaW5nLWJyZWFrZG93bntcblx0cGFkZGluZzogMjBweCAxNXB4O1xufVxuLmhpZ2hjaGFydHMtc3VidGl0bGVze1xuXHRtYXJnaW46IDE1cHggMDtcbn1cbi5zcGVuZGluZy1icmVha2Rvd24ubW9udGhseS1pbmNvbWV7XG5cdHBhZGRpbmc6IDIwcHggMTVweDtcbn1cbi52aWRlby1iYW5uZXIgLmluc2lnaHRzLXN1YnRpdGxlc3tcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxuLnZpZGVvLWhlcm97XG5cdHBhZGRpbmc6IDMwcHggMTVweDtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjE0NDBweCl7XG5cdC5pbnNpZ2h0cy1iZ2NvbG9ye1xuXHRcdG1hcmdpbi1yaWdodDogMi41cmVtO1xuXHR9XG5cdC5wcm9ncmVzcy1wYW5lbHtcblx0XHRtYXJnaW4tbGVmdDogMS43cmVtO1xuXHR9XG5cdC5hY2NvdW50aW5nLWJnY29sb3J7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtMi41cmVtO1xuXHR9XG5cdC5zZXR0aW5nLW1sLTEwe1xuXHRcdG1hcmdpbi1sZWZ0OiAxMiU7XG5cdH1cblx0LnByaXNpbmctdGFibGUge1xuXHRcdHBhZGRpbmc6IDAgMjNweCAxNThweCAzNXB4O1xuXHR9XG5cdC5tb25leS1tYXJrZXQge1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA0Mi41cmVtKTtcblx0XHRtYXJnaW4tbGVmdDogMnJlbTtcblx0XHR9XG5cdC5jaG9vc2Utcm93e1xuXHRcdG1hcmdpbi1sZWZ0OiAxMi42JVxuXHR9XG5cdC5pbnNpZ2h0LXBhbmVsLWltYWdle1xuXHRcdG1hcmdpbi1sZWZ0OjEuN3JlbTtcblx0fVxuICB9XG5cbiBAbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU2MHB4KSAge1xuICAgIC5tb25leS1tYXJrZXQge1xuXHRcdHdpZHRoOiA4MzYuNnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAwcmVtO1xuXHRcdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KXtcbi5ncmlke1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpe1xuLmhpZ2hjaGFydHMtbWFpbntcblx0cGFkZGluZzogMCA2MHB4O1xufVxuLndhdGNoLXZpZGVvIC5hY2NvdW50LXRhYmJpbmd7XG5cdHBhZGRpbmc6IDUwcHggNTBweCAwIDUwcHg7XG59XG4udG9wLXRyYWRpbmd7XG5cdHBhZGRpbmc6IDMwcHggMjBweCAxMjVweCAyMHB4O1xufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KXtcbi5jb250YWN0LXVzIC5Gb3Jte1xuXHRwYWRkaW5nOiA5MHB4IDEwMHB4O1xufVxuLmJsb2ctc3VidGl0bGUgYnJ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4ubW9udGhseS1kZXRhaWxzIC5jdXN0b20tc2VsZWN0LmN1c3RvbS1zZWxlY3Qxe1xuXHR3aWR0aDogMTAwcHg7XG59XG4uc2VsZWN0LWl0ZW1zIGRpdiwgLnNlbGVjdC1zZWxlY3RlZHtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwYWRkaW5nOiAzcHggNnB4O1xufVxuLm92ZXJ2aWV3LWRldGFpbHMgcHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0bWFyZ2luLXRvcDogNXB4O1xufVxuLmFtb3VudC1pbnB1dCAuc2VsZWN0LXNlbGVjdGVkIHtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uaW5zaWdodHMtaGVyb3tcblx0cGFkZGluZzogNjZweCAwIDE2NXB4IDI1cHg7XG59XG4uaGlnaGNoYXJ0cy1tYWlue1xuXHRwYWRkaW5nOiAwIDMwcHg7XG59XG4uaGlnaGNoYXJ0cy1jb2xvcntcblx0d2lkdGg6IDMzLjMzJTtcbn1cbi5hY2NvdW50LXRhYmJpbmd7XG5cdHBhZGRpbmc6IDcwcHggMzBweDtcbn1cbi50YWItcGFuZXtcblx0cGFkZGluZzogNzBweCA1MHB4IDEwMHB4IDQwcHg7XG59XG4ubmF2LXRhYmJpbmdhYyAubmF2LWxpbmtzYWN7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcbi5jb250YWN0LXVzIC5Gb3Jte1xuXHRwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG4uY29udGFjdC11cyAuZm9vdGVyLmZvb3Rlci13YXRjaHZpZGVvIHVsIHtcblx0bWFyZ2luOiA1MHB4IDAgMTVweDtcbn1cbi52aWRlby1oZXJve1xuXHRwYWRkaW5nOiAzMHB4IDI1cHg7XG59XG4ubWVudS1ib3JkZXI6YmVmb3Jle1xuXHRjb250ZW50OiBub25lO1xufVxudWwubmF2Lm5hdi10YWJiaW5nYWMge1xuXHRwYWRkaW5nOiA2MHB4IDAgMCAyNXB4O1xufVxuLm5hdi10YWJiaW5nYWMgLm5hdi1saW5rc2Fje1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnRhYi1wYW5lIHtcblx0cGFkZGluZzogNTBweCAyNXB4O1xufVxuLmZvcm0tbWVzc2FnZS1tYWlue1xuXHRtYXJnaW4tdG9wOiA2MHB4O1xufVxuLkZvcm0uYWNjb3VudC1mb3JtIC5idG4uYnRuLXN1Y2Nlc3Mge1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdG1heC13aWR0aDogMTk2cHg7XG5cdG1hcmdpbjogMzBweCBhdXRvIDA7XG59XG4uZWRpdC10aXRsZXtcblx0Zm9udC1zaXplOiAyNXB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5vdmVydmlldy1kZXRhaWxzIHAge1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLmJkLWxpbmtze1xuXHRwYWRkaW5nOiAxMDJweCAwIDAgMTVweDtcbn1cbi5tYXJrZXRwbGFjZXtcblx0cGFkZGluZzogMCAyMHB4O1xufVxuLm5hdi10YWJiaW5ne1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbnNpZ2h0cy1oZXJve1xuXHRiYWNrZ3JvdW5kOiAjNUFDN0Y1O1xuXHRwYWRkaW5nOiA2MHB4IDAgNjBweCAyNXB4O1xufVxuLmluc2lnaHRzLXN1YnRpdGxlc3tcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxuLmhpZ2hjaGFydHMtbWFpbntcblx0cGFkZGluZzogMDtcblx0bWFyZ2luLXRvcDogNDBweDtcbn1cbi5zcGVuZGluZy1icmVha2Rvd257XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdHBhZGRpbmc6IDQwcHggMjVweDtcbn1cbi5zcGVuZGluZy1icmVha2Rvd24ubW9udGhseS1pbmNvbWV7XG5cdHBhZGRpbmc6IDQwcHggMjVweDtcbn1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcbi8qIFN0YXJ0ICovXG4uc29tZXRoaW5nLXRpdGxle1xuXHRmb250LXNpemU6IDI1cHg7XG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuLnNvbWV0aGluZy10aXRsZSBicixcbi5zb21ldGhpbmctc3VidGl0bGUgYnJ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4uc29tZXRoaW5nLXN1YnRpdGxle1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmFib3V0LW1vbmV5LFxuLmFtb3VudC1mb3Jte1xuXHRwYWRkaW5nOiAzMHB4IDE1cHg7XG59XG4ucHJvZ3Jlc3MtbWFpbntcblx0cGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uYW1vdW50LWZvcm0gaW5wdXR7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZW1lcmdlbmN5LWZ1bmR7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4vKiBFbmQgKi9cbi5wcmlzaW5nLXRhYmxlLXRpdGxle1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGxpbmUtaGVpZ2h0OiAzNXB4O1xuXHRtYXJnaW46IDYwcHggMCA0MHB4O1xufVxuLmNhcmR7XG5cdHBhZGRpbmc6IDM1cHggMTVweCAzMnB4IDE1cHg7XG59XG4ucHJpc2luZy10YWJsZSB7XG5cdHBhZGRpbmc6IDAgMCAxNThweCAwO1xufVxuLmNvbnRhY3QtdXMgLkZvcm17XG5cdHBhZGRpbmc6IDMwcHggMjVweDtcbn1cbi5tYWluLXJvdzpiZWZvcmV7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG4uYmQtc2lkZWJhcntcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OiBub25lO1xuXHRib3gtc2hhZG93OiAwcHggNHB4IDE0cHggMXB4IHJnYigwIDAgMCAvIDEwJSk7XG5cdHBhZGRpbmctdG9wOiA0cmVtO1xufVxuLmFjY291bnQtdGFiYmluZyB7XG5cdHBhZGRpbmc6IDMwcHggMCAwIDA7XG59XG4uZ3Jvd3VwLWltZ2FnZXtcblx0ZGlzcGxheTogbm9uZTtcbn1cbi5Gb3Jte1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG4ubW9kYWwtd3JhcHBlciAubW9kYWwtYm9keXtcblx0cGFkZGluZzogMjBweCA1MHB4IDQwcHg7XG59XG4ubW9kYWwtd3JhcHBlcntcblx0d2lkdGg6IDkwJTtcbn1cbi5tb2RhbC13cmFwcGVyIC5tb2RhbC1ib2R5e1xuXHRwYWRkaW5nOiAxMHB4IDE1cHggMzBweDtcbn1cbi5wcm9ncmVzcy1wcm9jZXNze1xuXHRoZWlnaHQ6IDhweDtcbn1cbi5pbnNpZ2h0cy10aXRsZXtcblx0Zm9udC1zaXplOiAyNnB4O1xuXHRsaW5lLWhlaWdodDogMzVweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5pbnNpZ2h0cy1pbWFnZXMgaW1ne1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbG9yLWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oaWdoY2hhcnRzLWNvbG9ye1xuXHR3aWR0aDogYXV0bztcbn1cbi5jb2xvci1jb25jZXB0e1xuXHR3aWR0aDogMTBweDtcblx0aGVpZ2h0OiAxMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5oaWdoY2hhcnRzLWltYWdlc3tcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5iZC1saW5rc3tcblx0cGFkZGluZzogMzBweCAwIDAgMTVweDtcbn1cbi5iZC1saW5rcyB1bCBsaSBhe1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNjb3RjaC1tb2RhbC5mYWRlLWFuZC1kcm9wLnNjb3RjaC1vcGVuIHtcblx0bWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc2NvdGNoLWNvbnRlbnQgaWZyYW1le1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xuLmdyaWQge1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbn1cbi5idG4tYWNjb3VudHtcblx0bWFyZ2luLXRvcDogMTVweDtcbn1cbi53YXRjaC12aWRlbyAuYWNjb3VudC10YWJiaW5ne1xuXHRwYWRkaW5nOiA1MHB4IDE1cHggMCAxNXB4O1xufVxuLmJsb2ctdGl0bGV7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50b3AtdHJhZGluZ3tcblx0cGFkZGluZzogMzBweCAyMHB4O1xufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xuLmluY29tZS1yZXRhaWxlcixcbi5ob3VzaW5nIC5pbmNvbWUtcmV0YWlsZXJ7XG5cdHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDI1cHg7XG59XG4ubWFya2V0cGxhY2Uge1xuXHRwYWRkaW5nOiAwIDE1cHg7XG59XG4ucGF5LXRleHR7XG5cdHBhZGRpbmc6IDAgMCAxMHB4IDA7XG59XG4ucHJpc2UtaW5wdXQsXG4ubW9udGhseS1kZXRhaWxzIC5jdXN0b20tc2VsZWN0LFxuLm1vbnRobHktZGV0YWlscyAuY3VzdG9tLXNlbGVjdC5jdXN0b20tc2VsZWN0MXtcblx0d2lkdGg6IDEwMCU7XG5cdGZsb2F0OiBub25lO1xuXHRtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4ucGF5LWluZm8sXG4ubW9udGhseS1kZXRhaWxzLFxuLmZvb3RlciB1bHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmZvb3RlciB1bCBsaSxcbi5mb290ZXIgdWwgbGkgYSB7XG5cdGZsb2F0OiBsZWZ0O1xufVxuLm5hdi10YWJiaW5nIC5uYXYtaXRlbXMgLm5hdi1saW5rc3tcblx0cGFkZGluZzogMCAxNXB4IDhweCAxNXB4O1xufVxuLnByb2dyZXNzLWluZm8gc3Bhbntcblx0Zm9udC1zaXplOiAxMHB4O1xufVxuLmlubmVyLXRhYmJpbmcgdWwgbGkgYXtcblx0cGFkZGluZzogNnB4IDEwcHg7XG59XG4uY29sb3ItYm94e1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGlnaGNoYXJ0cy1jb2xvcntcblx0cGFkZGluZzogMCA2cHg7XG59XG4uc3BlbmRpbmctYnJlYWtkb3due1xuXHRwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG4uaGlnaGNoYXJ0cy1zdWJ0aXRsZXN7XG5cdG1hcmdpbjogMTVweCAwO1xufVxuLnNwZW5kaW5nLWJyZWFrZG93bi5tb250aGx5LWluY29tZXtcblx0cGFkZGluZzogMjBweCAxNXB4O1xufVxuLnZpZGVvLWJhbm5lciAuaW5zaWdodHMtc3VidGl0bGVze1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG4udmlkZW8taGVyb3tcblx0cGFkZGluZzogMzBweCAxNXB4O1xufVxuLm1lc3NhZ2UtZGVsZXRle1xuXHRjb2xvcjogIzAwNzNiOTtcblx0c2l6ZTogMTIzcHg7XG59XG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgLyogY29sb3I6ICMwMDdiZmY7ICovXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5cdDI1LiBSZXNwb25zaXZlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXHQuYXZhdGFyLXh4bCB7XG5cdFx0d2lkdGg6IDhyZW07XG5cdFx0aGVpZ2h0OiA4cmVtO1xuXHR9XG5cdC5hdmF0YXIteHhsIC5ib3JkZXIge1xuXHRcdGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmF2YXRhci14eGwgLnJvdW5kZWQge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcblx0fVxuXHQuYXZhdGFyLXh4bCAuYXZhdGFyLXRpdGxlIHtcblx0XHRmb250LXNpemU6IDQycHg7XG5cdH1cblx0LmF2YXRhci14eGwuYXZhdGFyLWF3YXk6YmVmb3JlLFxuXHQuYXZhdGFyLXh4bC5hdmF0YXItb2ZmbGluZTpiZWZvcmUsXG5cdC5hdmF0YXIteHhsLmF2YXRhci1vbmxpbmU6YmVmb3JlIHtcblx0XHRib3JkZXItd2lkdGg6IDRweDtcblx0fVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cdCN0b2dnbGVfYnRuIHtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0cGFkZGluZzogMCAxNXB4O1xuXHR9XG5cdC5taW5pLXNpZGViYXIgLmhlYWRlci1sZWZ0IC5sb2dvIGltZyB7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdG1heC1oZWlnaHQ6IDQwcHg7XG5cdFx0d2lkdGg6IGF1dG87XG5cdH1cblx0Lm1pbmktc2lkZWJhciAuaGVhZGVyIC5oZWFkZXItbGVmdCAubG9nbyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQubWluaS1zaWRlYmFyIC5oZWFkZXItbGVmdCAubG9nby5sb2dvLXNtYWxsIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQubWluaS1zaWRlYmFyIC5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcblx0XHRwYWRkaW5nOiAwIDVweDtcblx0XHR3aWR0aDogNzhweDtcblx0fVxuXHQubWluaS1zaWRlYmFyIC5zaWRlYmFyIHtcblx0XHR3aWR0aDogNzhweDtcblx0fVxuXHQubWluaS1zaWRlYmFyLmV4cGFuZC1tZW51IC5zaWRlYmFyIHtcblx0XHR3aWR0aDogMjQwcHg7XG5cdH1cblx0Lm1pbmktc2lkZWJhciAubWVudS10aXRsZSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cblx0Lm1pbmktc2lkZWJhci5leHBhbmQtbWVudSAubWVudS10aXRsZSB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxuXHQubWluaS1zaWRlYmFyIC5tZW51LXRpdGxlIGEge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0fVxuXHQubWluaS1zaWRlYmFyLmV4cGFuZC1tZW51IC5tZW51LXRpdGxlIGEge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdH1cblx0Lm1vZGFsLW9wZW4ubWluaS1zaWRlYmFyIC5zaWRlYmFyIHtcblx0XHR6LWluZGV4OiAxMDUxO1xuXHR9XG5cdC5taW5pLXNpZGViYXIgLnNpZGViYXIgLnNpZGViYXItbWVudSB1bCA+IGxpID4gYSBzcGFuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0Lm1pbmktc2lkZWJhci5leHBhbmQtbWVudSAuc2lkZWJhciAuc2lkZWJhci1tZW51IHVsID4gbGkgPiBhIHNwYW4ge1xuXHRcdGRpc3BsYXk6IGlubGluZTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9IFxuXHQubWluaS1zaWRlYmFyIC5wYWdlLXdyYXBwZXIge1xuXHRcdG1hcmdpbi1sZWZ0OiA3OHB4O1xuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcblx0LmhlYWRlciAuaGVhZGVyLWxlZnQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQuYWRkLWl0ZW0ge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdH1cblx0LmZsYWctbmF2e1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0Lm1vYmlsZV9idG4ge1xuXHRcdGNvbG9yOiAjMzMzO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0aGVpZ2h0OiA2MHB4O1xuXHRcdGxlZnQ6IDA7XG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XG5cdFx0cGFkZGluZzogMCAxNXB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0dG9wOiAwO1xuXHRcdHotaW5kZXg6IDEwO1xuXHR9XG5cdCN0b2dnbGVfYnRuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC50b3AtbmF2LXNlYXJjaCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQubG9naW4td3JhcHBlciAubG9naW5ib3ggLmxvZ2luLWxlZnQge1xuXHRcdHBhZGRpbmc6IDgwcHggNTBweDtcblx0XHR3aWR0aDogNTAlO1xuXHR9XG5cdC5sb2dpbi13cmFwcGVyIC5sb2dpbmJveCAubG9naW4tcmlnaHQge1xuXHRcdHBhZGRpbmc6IDUwcHg7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxuXHQuc2lkZWJhciB7XG5cdFx0bWFyZ2luLWxlZnQ6IC0yMjVweDtcblx0XHR3aWR0aDogMjI1cHg7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHRcdHotaW5kZXg6IDEwNDE7XG5cdH1cblx0LnBhZ2Utd3JhcHBlciB7XG5cdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuXHR9XG5cdC5jaGF0LXdpbmRvdyAuY2hhdC1zY3JvbGwge1xuXHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTVweCk7XG5cdH1cblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtbGVmdCxcblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtcmlnaHQge1xuXHRcdGZsZXg6IDAgMCAxMDAlO1xuXHRcdG1heC13aWR0aDogMTAwJTtcblx0XHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZS1pbi1vdXQgMHMsIHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQgMHM7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtbGVmdCB7XG5cdFx0Ym9yZGVyLXJpZ2h0OiAwO1xuXHR9XG5cdC5jaGF0LXdpbmRvdyAuY2hhdC1jb250LXJpZ2h0IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IGNhbGMoLTEwMCUgKyAtMS44NzVyZW0pO1xuXHRcdHRvcDogMDtcblx0fVxuXHQuY2hhdC13aW5kb3cgLmNoYXQtY29udC1yaWdodCAuY2hhdC1oZWFkZXIge1xuXHRcdGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cdH1cblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtcmlnaHQgLmNoYXQtaGVhZGVyIC5iYWNrLXVzZXItbGlzdCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtcmlnaHQgLmNoYXQtaGVhZGVyIC5jaGF0LW9wdGlvbnMge1xuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHR9XG5cdC5jaGF0LXdpbmRvdy5jaGF0LXNsaWRlIC5jaGF0LWNvbnQtbGVmdCB7XG5cdFx0bGVmdDogY2FsYygtMTAwJSArIC0xLjg3NXJlbSk7XG5cdH1cblx0LmNoYXQtd2luZG93LmNoYXQtc2xpZGUgLmNoYXQtY29udC1yaWdodCB7XG5cdFx0cmlnaHQ6IDA7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuXHRib2R5IHtcblx0XHRmb250LXNpemU6IDAuOTM3NXJlbTtcblx0fVxuXHRoMSxcblx0LmgxIHtcblx0XHRmb250LXNpemU6IDJyZW07XG5cdH1cblx0aDIsXG5cdC5oMiB7XG5cdFx0Zm9udC1zaXplOiAxLjc1cmVtO1xuXHR9XG5cdGgzLFxuXHQuaDMge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cdGg0LFxuXHQuaDQge1xuXHRcdGZvbnQtc2l6ZTogMS4xMjVyZW07XG5cdH1cblx0aDUsXG5cdC5oNSB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cdGg2LFxuXHQuaDYge1xuXHRcdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdH1cblx0LmhlYWRlciAuaGFzLWFycm93IC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LnVzZXItbWVudS5uYXYgPiBsaSA+IGEgPiBzcGFuOm5vdCgudXNlci1pbWcpIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcblx0XHRmbG9hdDogbGVmdDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdH1cblx0Lm5hdmJhci1uYXYudXNlci1tZW51IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcblx0XHRsZWZ0OiBhdXRvO1xuXHRcdHJpZ2h0OiAwO1xuXHR9XG5cdC5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcblx0XHRwYWRkaW5nOiAwIDE1cHg7XG5cdH1cblx0LmhlYWRlciAuaGVhZGVyLWxlZnQgLmxvZ28ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmhlYWRlci1sZWZ0IC5sb2dvLmxvZ28tc21hbGwge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQubG9naW4td3JhcHBlciAubG9naW5ib3ggLmxvZ2luLWxlZnQge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmxvZ2luLXdyYXBwZXIgLmxvZ2luYm94IHtcblx0XHRtYXgtd2lkdGg6IDQ1MHB4O1xuXHRcdG1pbi1oZWlnaHQ6IHVuc2V0O1xuXHR9XG5cdC5sb2dpbi13cmFwcGVyIC5sb2dpbmJveCAubG9naW4tcmlnaHQge1xuXHRcdGZsb2F0OiBub25lO1xuXHRcdHBhZGRpbmc6IDEuODc1cmVtO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC50b3AtYWN0aW9uLWxlZnQgLmZsb2F0LWxlZnQge1xuXHRcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG5cdH1cblx0LnRvcC1hY3Rpb24tbGVmdCAuYnRuLWdyb3VwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdC50b3AtYWN0aW9uLXJpZ2h0IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LnRvcC1hY3Rpb24tcmlnaHQgYS5idG4uYnRuLXdoaXRlIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdC5tYWlsLXNlbnQtdGltZSB7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQubG9naW4td3JhcHBlciAubG9naW5ib3ggLmxvZ2luLXJpZ2h0IGgxIHtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdH1cblx0LmVycm9yLWJveCBoMSB7XG5cdFx0Zm9udC1zaXplOiA2ZW07XG5cdH1cblx0LmVycm9yLWJveCAuYnRuIHtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0bWluLXdpZHRoOiAxNTBweDtcblx0XHRwYWRkaW5nOiA4cHggMjBweDtcblx0fVxuXHQuZGFzaC1jb3VudCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXHQuZGFzaC13aWRnZXQtaGVhZGVye1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC5uYXYge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcblx0LmNhcmQge1xuXHRcdG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcblx0fVxuXHQucGFnZS13cmFwcGVyID4gLmNvbnRlbnQge1xuXHRcdHBhZGRpbmc6IDAuOTM3NXJlbSAwLjkzNzVyZW0gMDtcblx0fVxuXHQuY2hhdC13aW5kb3cge1xuXHRcdG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcblx0fVxuXHQuY2FyZC1ib2R5IHtcblx0XHRwYWRkaW5nOiAxLjI1cmVtO1xuXHR9XG5cdC5jYXJkLWhlYWRlciB7XG5cdFx0cGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG5cdH1cblx0LmNhcmQtZm9vdGVyIHtcblx0XHRwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcblx0fVxuXHQucGFnZS1oZWFkZXIge1xuXHRcdG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcblx0fVxuXHQucGFnaW5hdGlvbi1sZyAucGFnZS1saW5rIHtcblx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRwYWRkaW5nOiAwLjVyZW0gMC42MjVyZW07XG5cdH1cblx0Lmludm9pY2UtZGV0YWlscyB7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxuXHQuZmMtdG9vbGJhciAuZmMtcmlnaHQge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRmbG9hdDogbm9uZTtcblx0XHRtYXJnaW46IDEwcHggYXV0byAwO1xuXHRcdHdpZHRoOiAyMDBweDtcblx0XHRjbGVhcjogYm90aDtcblx0fVxuXHQuZmMtdG9vbGJhciAuZmMtbGVmdCB7XG5cdFx0ZmxvYXQ6IG5vbmU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0d2lkdGg6IDIwMHB4O1xuXHR9XG5cdC5mYy10b29sYmFyIC5mYy1jZW50ZXIge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmZjLXRvb2xiYXIgLmZjLWNlbnRlciBoMiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmNoYXQtd2luZG93IC5jaGF0LWNvbnQtcmlnaHQgLmNoYXQtaGVhZGVyIC5tZWRpYSAubWVkaWEtYm9keSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuY2hhdC13aW5kb3cgLmNoYXQtY29udC1sZWZ0IC5jaGF0LXVzZXJzLWxpc3QgYS5tZWRpYSAubWVkaWEtYm9keSA+IGRpdjpmaXJzdC1jaGlsZCAudXNlci1uYW1lLFxuXHQuY2hhdC13aW5kb3cgLmNoYXQtY29udC1sZWZ0IC5jaGF0LXVzZXJzLWxpc3QgYS5tZWRpYSAubWVkaWEtYm9keSA+IGRpdjpmaXJzdC1jaGlsZCAudXNlci1sYXN0LWNoYXQge1xuXHRcdG1heC13aWR0aDogMTYwcHg7XG5cdH1cblx0LnBhZ2UtaGVhZGVyIC5icmVhZGNydW1iIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */", "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvZnJvbnQvY3NzL3Jlc2V0Lm1pbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMlpBQTJaLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsOEVBQThFLGFBQWEsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxNQUFNLGVBQWUsQ0FBQyxhQUFhLFdBQVcsQ0FBQyxvREFBb0QsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLHdCQUF3QixDQUFDLGdCQUFnQiIsImZpbGUiOiJzcmMvYXNzZXRzL2Zyb250L2Nzcy9yZXNldC5taW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5LGRpdixzcGFuLGFwcGxldCxvYmplY3QsaWZyYW1lLGgxLGgyLGgzLGg0LGg1LGg2LHAsYmxvY2txdW90ZSxwcmUsYSxhYmJyLGFjcm9ueW0sYWRkcmVzcyxiaWcsY2l0ZSxjb2RlLGRlbCxkZm4sZW0saW1nLGlucyxrYmQscSxzLHNhbXAsc21hbGwsc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHR0LHZhcixiLHUsaSxjZW50ZXIsZGwsZHQsZGQsb2wsdWwsbGksZmllbGRzZXQsZm9ybSxsYWJlbCxsZWdlbmQsdGFibGUsY2FwdGlvbix0Ym9keSx0Zm9vdCx0aGVhZCx0cix0aCx0ZCxhcnRpY2xlLGFzaWRlLGNhbnZhcyxkZXRhaWxzLGVtYmVkLGZpZ3VyZSxmaWdjYXB0aW9uLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1lbnUsbmF2LG91dHB1dCxydWJ5LHNlY3Rpb24sc3VtbWFyeSx0aW1lLG1hcmssYXVkaW8sdmlkZW97bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQ6aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWVudSxuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bGluZS1oZWlnaHQ6MX1vbCx1bHtsaXN0LXN0eWxlOm5vbmV9YmxvY2txdW90ZSxxe3F1b3Rlczpub25lfWJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlcntjb250ZW50OicnO2NvbnRlbnQ6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Progresspanel2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progresspanel2',
          templateUrl: './progresspanel2.component.html',
          styleUrls: ['./progresspanel2.component.scss', '../../../assets/front/css/front-style.css', '../../../assets/front/css/reset.min.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_4__["EnDeService"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_4__["alertsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/UserComponent/progresspanel2/progresspanel2.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/UserComponent/progresspanel2/progresspanel2.module.ts ***!
    \***********************************************************************/

  /*! exports provided: Progresspanel2Module */

  /***/
  function srcAppUserComponentProgresspanel2Progresspanel2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Progresspanel2Module", function () {
      return Progresspanel2Module;
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


    var _progresspanel2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./progresspanel2-routing.module */
    "./src/app/UserComponent/progresspanel2/progresspanel2-routing.module.ts");
    /* harmony import */


    var _progresspanel2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progresspanel2.component */
    "./src/app/UserComponent/progresspanel2/progresspanel2.component.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");

    var Progresspanel2Module = function Progresspanel2Module() {
      _classCallCheck(this, Progresspanel2Module);
    };

    Progresspanel2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Progresspanel2Module
    });
    Progresspanel2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Progresspanel2Module_Factory(t) {
        return new (t || Progresspanel2Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _progresspanel2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Progresspanel2RoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["NgCircleProgressModule"].forRoot({
        backgroundPadding: 8,
        radius: 20,
        space: -10,
        maxPercent: 100,
        unitsColor: "#ffffff",
        outerStrokeWidth: 7.5,
        outerStrokeColor: "white",
        innerStrokeWidth: 10,
        titleColor: "#ffffff"
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Progresspanel2Module, {
        declarations: [_progresspanel2_component__WEBPACK_IMPORTED_MODULE_3__["Progresspanel2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _progresspanel2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Progresspanel2RoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["NgCircleProgressModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Progresspanel2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_progresspanel2_component__WEBPACK_IMPORTED_MODULE_3__["Progresspanel2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _progresspanel2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Progresspanel2RoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["NgCircleProgressModule"].forRoot({
            backgroundPadding: 8,
            radius: 20,
            space: -10,
            maxPercent: 100,
            unitsColor: "#ffffff",
            outerStrokeWidth: 7.5,
            outerStrokeColor: "white",
            innerStrokeWidth: 10,
            titleColor: "#ffffff"
          })]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=UserComponent-progresspanel2-progresspanel2-module-es5.js.map