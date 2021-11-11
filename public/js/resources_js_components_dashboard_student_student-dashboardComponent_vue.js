"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_student_student-dashboardComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var myCalendar = function myCalendar() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_myCalendar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../myCalendar */ "./resources/js/components/dashboard/myCalendar.vue"));
};

var myNotification = function myNotification() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_notificationComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../notificationComponent */ "./resources/js/components/dashboard/notificationComponent.vue"));
};

var studentClasses = function studentClasses() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_student_student-classes_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./student-classes */ "./resources/js/components/dashboard/student/student-classes.vue"));
};

var studentGradeChart = function studentGradeChart() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_student_ProgressChart_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ProgressChart */ "./resources/js/components/dashboard/student/ProgressChart.vue"));
};

var myTask = function myTask() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_student_myTask_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./myTask */ "./resources/js/components/dashboard/student/myTask.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    myCalendar: myCalendar,
    myNotification: myNotification,
    studentClasses: studentClasses,
    studentGradeChart: studentGradeChart,
    myTask: myTask
  },
  data: function data() {
    return {
      class_count: 0,
      unfinishCount: 0,
      selected: 0
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["allClass"]),
  methods: {
    classCount: function classCount() {
      var _this = this;

      axios.get('/api/class/count').then(function (res) {
        _this.class_count = res.data;
      });
    },
    TotalClasswork: function TotalClasswork(data) {
      this.unfinishCount = data;
    },
    fetchClasses: function fetchClasses() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$store.dispatch('fetchClassList');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.classCount();
    this.fetchClasses();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.chart[data-v-cea93bd6] {\n    height: 400px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_cea93bd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_cea93bd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_cea93bd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/dashboard/student/student-dashboardComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/student/student-dashboardComponent.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true& */ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true&");
/* harmony import */ var _student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _student_dashboardComponent_vue_vue_type_style_index_0_id_cea93bd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& */ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cea93bd6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/student/student-dashboardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_cea93bd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=style&index=0&id=cea93bd6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_cea93bd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student/student-dashboardComponent.vue?vue&type=template&id=cea93bd6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "pt-0", attrs: { cols: "12", lg: "8" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "pt-0", attrs: { lg: "6" } },
                    [
                      _c("v-card", [
                        _c(
                          "div",
                          {
                            staticClass: "text-center",
                            style: _vm.$vuetify.breakpoint.lgAndUp
                              ? "font-size: 3rem;color:#FF5400"
                              : "font-size: 2rem;color:#FF5400"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.class_count) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: _vm.$vuetify.breakpoint.lgAndUp
                              ? "text-center"
                              : "text-center text-caption"
                          },
                          [
                            _vm._v(
                              "\n                            Course Enrolled\n                        "
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "pt-0", attrs: { lg: "6" } },
                    [
                      _c("v-card", [
                        _c(
                          "div",
                          {
                            staticClass: "text-center",
                            style: _vm.$vuetify.breakpoint.lgAndUp
                              ? "font-size: 3rem;color:#FF5400"
                              : "font-size: 2rem;color:#FF5400"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.unfinishCount) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: _vm.$vuetify.breakpoint.lgAndUp
                              ? "text-center"
                              : "text-center text-caption"
                          },
                          [
                            _vm._v(
                              "\n                            Unfinished Classworks\n                        "
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 0
                ? _c(
                    "v-row",
                    {
                      staticClass: "mb-0",
                      class: !_vm.$vuetify.breakpoint.lgAndUp ? "pt-0 mt-0" : ""
                    },
                    [
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.lgAndUp
                            ? "pt-0 mt-0 mb-0 pb-0"
                            : "t-0 mt-0 mb-0 pb-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("studentGradeChart", {
                            attrs: { allClass: _vm.allClass }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 0
                ? _c(
                    "v-row",
                    { staticClass: "mt-0" },
                    [
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.lgAndUp
                            ? "pt-0 mt-0"
                            : "pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [_c("studentClasses")],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              class: _vm.$vuetify.breakpoint.mdAndUp ? "pt-0" : "pt-0 mt-0",
              attrs: { cols: "12", lg: "4" }
            },
            [
              _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 1
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.mdAndUp
                            ? "mt-0 pt-0 "
                            : "",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { outlined: "", elevation: "2" } },
                            [_c("myTask")],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 2
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.mdAndUp
                            ? "pt-2 mt-2"
                            : "pt-3 mt-3",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "v-card",
                            { attrs: { elevation: "2" } },
                            [
                              _c("myCalendar", {
                                attrs: { role: _vm.role },
                                on: {
                                  RecieveTotalClasswork: _vm.TotalClasswork
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.role == "Student" && !_vm.$vuetify.breakpoint.mdAndUp
        ? _c(
            "v-bottom-navigation",
            {
              attrs: {
                value: _vm.selected,
                color: "primary",
                app: "",
                grow: ""
              }
            },
            [
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.selected = 0
                    }
                  }
                },
                [
                  _c("span", { staticStyle: { "font-size": "10px" } }, [
                    _vm._v("Progress/Classes")
                  ]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-chart-box-outline")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.selected = 1
                    }
                  }
                },
                [
                  _c("span", { staticStyle: { "font-size": "10px" } }, [
                    _vm._v("My Tasks")
                  ]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-clipboard-edit-outline")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.selected = 2
                    }
                  }
                },
                [
                  _c("span", { staticStyle: { "font-size": "10px" } }, [
                    _vm._v("My Calendar")
                  ]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-calendar")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);