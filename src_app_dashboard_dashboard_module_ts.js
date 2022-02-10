(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-chartjs */ 4067);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 17018);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 55329);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/rate */ 86372);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/badge */ 36442);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/progress */ 82281);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/radio */ 71398);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 66795);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 94401);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 73253);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 84828);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ 93845);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/list */ 53197);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 21089);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default-dashboard.component */ 27176);
/* harmony import */ var _e_commerce_e_commerce_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./e-commerce/e-commerce-dashboard.component */ 94604);
/* harmony import */ var _projects_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects-dashboard.component */ 46967);
/* harmony import */ var _crm_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crm/crm-dashboard.component */ 8634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);


























const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzToolTipModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__.NzCheckboxModule
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__.ThemeConstantService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
            ng_chartjs__WEBPACK_IMPORTED_MODULE_25__.NgChartjsModule,
            ...antdModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DefaultDashboardComponent,
        _e_commerce_e_commerce_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.EcommerceDashboardComponent,
        _projects_projects_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.ProjectsDashboardComponent,
        _crm_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.CrmDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
        ng_chartjs__WEBPACK_IMPORTED_MODULE_25__.NgChartjsModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzToolTipModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__.NzCheckboxModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map