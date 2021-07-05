(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_student-dashboardComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var echarts_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/core */ "./node_modules/echarts/lib/extension.js");
/* harmony import */ var echarts_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/renderers */ "./node_modules/echarts/lib/renderer/installCanvasRenderer.js");
/* harmony import */ var echarts_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/charts */ "./node_modules/echarts/lib/chart/bar/install.js");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/components */ "./node_modules/echarts/lib/component/title/install.js");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/components */ "./node_modules/echarts/lib/component/tooltip/install.js");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/components */ "./node_modules/echarts/lib/component/legend/install.js");
/* harmony import */ var echarts_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts/components */ "./node_modules/echarts/lib/component/grid/install.js");
/* harmony import */ var vue_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-echarts */ "./node_modules/vue-echarts/dist/index.esm.min.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_myCalendar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./myCalendar */ "./resources/js/components/dashboard/myCalendar.vue"));
};

var myNotification = function myNotification() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_dashboard_notificationComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./notificationComponent */ "./resources/js/components/dashboard/notificationComponent.vue"));
};







(0,echarts_core__WEBPACK_IMPORTED_MODULE_2__.use)([echarts_renderers__WEBPACK_IMPORTED_MODULE_3__.install, echarts_charts__WEBPACK_IMPORTED_MODULE_4__.install, echarts_components__WEBPACK_IMPORTED_MODULE_5__.install, echarts_components__WEBPACK_IMPORTED_MODULE_6__.install, echarts_components__WEBPACK_IMPORTED_MODULE_7__.install, echarts_components__WEBPACK_IMPORTED_MODULE_8__.install]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HelloWorld",
  components: {
    VChart: vue_echarts__WEBPACK_IMPORTED_MODULE_0__.default,
    myCalendar: myCalendar,
    myNotification: myNotification
  },
  provide: {},
  data: function data() {
    return {
      class_count: 0,
      option: {
        color: ["#FF5400", "#FFs400", "#FFd400"],
        xAxis: {
          data: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9']
        },
        yAxis: {
          type: 'value'
        },
        // title: {
        //     text: "Traffic Sources",
        //     left: "center"
        // },
        tooltip: {
          trigger: "item",
          formatter: "{b} <br/>Time spent: {c} "
        },
        legend: {
          show: false //     left: "center",
          //   top: "30px",

        },
        series: [{
          name: "Module 1",
          type: "bar",
          data: [{
            value: 1,
            name: "Module 1"
          }, {
            value: 2,
            name: "Module 2"
          }, {
            value: 3,
            name: "Module 3"
          }, {
            value: 4,
            name: "Module 4"
          }, {
            value: 5,
            name: "Module 5"
          }, {
            value: 6,
            name: "Module 6"
          }, {
            value: 7,
            name: "Module 7"
          }, {
            value: 8,
            name: "Module 8"
          }, {
            value: 9,
            name: "Module 9"
          }]
        }]
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapActions)(['fetchCourseList'])), {}, {
    classCount: function classCount() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/class/count').then(function (res) {
        console.log('12312  ', res);
        _this.class_count = res.data;
      });
    }
  }),
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['allCourse']),
  mounted: function mounted() {
    this.fetchCourseList();
    this.classCount();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.chart[data-v-ae28d47e] {\n    height: 400px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/dashboard/student-dashboardComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-dashboardComponent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true& */ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true&");
/* harmony import */ var _student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& */ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ae28d47e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/student-dashboardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_template_id_ae28d47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_dashboardComponent_vue_vue_type_style_index_0_id_ae28d47e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=template&id=ae28d47e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "pt-0", attrs: { lg: "8" } },
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
                            staticStyle: {
                              "font-size": "3rem",
                              color: "#FF5400"
                            }
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
                        _c("div", { staticClass: "text-center" }, [
                          _vm._v(
                            "\n                            Total Classes\n                        "
                          )
                        ])
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
                            staticStyle: {
                              "font-size": "3rem",
                              color: "#FF5400"
                            }
                          },
                          [
                            _vm._v(
                              "\n                              1\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _vm._v(
                            "\n                          Unfinished Classworks\n                        "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-chart", {
                            staticClass: "chart",
                            attrs: { option: _vm.option, autoresize: "" }
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pt-0", attrs: { lg: "4" } },
            [
              _c(
                "v-row",
                [_c("v-col", [_c("v-card", [_c("myCalendar")], 1)], 1)],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [_c("v-col", [_c("v-card", [_c("myNotification")], 1)], 1)],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/student-dashboardComponent.vue?vue&type=style&index=0&id=ae28d47e&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a6e07a26", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);