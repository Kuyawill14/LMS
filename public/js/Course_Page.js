"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Course_Page"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
var recentClasswork = function recentClasswork() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_dashboard-tab_recent_classwork_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./recent_classwork */ "./resources/js/components/course-view/tabs/dashboard-tab/recent_classwork.vue"));
};

var latestModules = function latestModules() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_dashboard-tab_latest_modules_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./latest_modules */ "./resources/js/components/course-view/tabs/dashboard-tab/latest_modules.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      classwork_list: [],
      course_sumarry: [],
      modules_list: [],
      cardheaders: [{
        title: "Total Students",
        icon: 'mdi-account-group',
        count: 0,
        routName: ''
      }, {
        title: "Total Classes",
        icon: 'mdi-google-classroom',
        count: 0,
        routName: ''
      }, {
        title: "Total Classwork",
        icon: 'mdi-book-open-variant',
        count: 0,
        routName: ''
      }, {
        title: "Total Modules",
        icon: 'mdi-book-variant-multiple',
        count: 0,
        routName: ''
      }]
    };
  },
  components: {
    recentClasswork: recentClasswork,
    latestModules: latestModules
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getcourseInfo"])),
  methods: {
    getGeneralClassworks: function getGeneralClassworks() {
      var _this = this;

      //this.isGetting = true;
      axios.get("/api/course/overview/all/".concat(this.$route.params.id)).then(function (res) {
        //console.log(res.data);
        _this.classwork_list = res.data.classworks_list;

        _this.courseSummaryheader(res.data.course_summary);

        _this.modules_list = res.data.modules_list;
      });
    },
    courseSummaryheader: function courseSummaryheader(course_summary) {
      this.cardheaders[0].count = course_summary.total_students;
      this.cardheaders[1].count = course_summary.total_classes;
      this.cardheaders[2].count = course_summary.total_classworks;
      this.cardheaders[3].count = course_summary.sub_modules_count;
    }
  },
  mounted: function mounted() {
    this.getGeneralClassworks();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.cardTitle[data-v-44e6ec8f] {\n    font-size: 1.2rem\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_style_index_0_id_44e6ec8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_style_index_0_id_44e6ec8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_style_index_0_id_44e6ec8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true& */ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true&");
/* harmony import */ var _teacher_course_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher_course_dashboardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _teacher_course_dashboardComponent_vue_vue_type_style_index_0_id_44e6ec8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _teacher_course_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "44e6ec8f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher_course_dashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_style_index_0_id_44e6ec8f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=style&index=0&id=44e6ec8f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_course_dashboardComponent_vue_vue_type_template_id_44e6ec8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/dashboard-tab/teacher_course_dashboardComponent.vue?vue&type=template&id=44e6ec8f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pt-4" },
        _vm._l(_vm.cardheaders, function(item, index) {
          return _c(
            "v-col",
            {
              key: index,
              attrs: { cols: "12", lg: "3", md: "6", sm: "12", xs: "12" }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "pb-0 py-1 cardTitle" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    { staticClass: "pb-0" },
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-h3 primary--text",
                              attrs: { cols: "6" }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.count) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "text-right", attrs: { cols: "6" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "text-h2",
                                  staticStyle: { "font-size": "2 rem" }
                                },
                                [_vm._v(_vm._s(item.icon))]
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
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("recentClasswork", {
                attrs: { classwork_list: _vm.classwork_list }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("latestModules", { attrs: { modules_list: _vm.modules_list } })
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



/***/ })

}]);