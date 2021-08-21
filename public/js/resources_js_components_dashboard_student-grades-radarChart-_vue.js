(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_student-grades-radarChart-_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-echarts */ "./node_modules/vue-echarts/dist/index.esm.min.js");
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      option: {
        title: {
          text: 'My Grades'
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} <br/>Time spent: {c} "
        },
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          indicator: [{
            name: '销售（Sales）',
            max: 100
          }, {
            name: '管理（Administration）',
            max: 100
          }, {
            name: '信息技术（Information Technology）',
            max: 100
          }, {
            name: '客服（Customer Support）',
            max: 100
          }, {
            name: '研发（Development）',
            max: 100
          }, {
            name: '市场（Marketing）',
            max: 100
          }, {
            name: '市场（Marketing）',
            max: 100
          }]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [{
            value: [50, 100, 100, 100, 100, 100],
            name: '预算分配（Allocated Budget）'
          }]
        }]
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/student-grades-radarChart-.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-grades-radarChart-.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-grades-radarChart-.vue?vue&type=template&id=582fd15c& */ "./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c&");
/* harmony import */ var _student_grades_radarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-grades-radarChart-.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _student_grades_radarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__.render,
  _student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/student-grades-radarChart-.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_grades_radarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-grades-radarChart-.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_grades_radarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_grades_radarChart_vue_vue_type_template_id_582fd15c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-grades-radarChart-.vue?vue&type=template&id=582fd15c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-grades-radarChart-.vue?vue&type=template&id=582fd15c& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "v-card",
    [
      _c("v-chart", {
        staticClass: "chart",
        attrs: { option: _vm.option, autoresize: "" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);