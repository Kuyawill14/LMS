"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Preview_id'],
  data: function data() {
    return {
      isloading: true,
      totalPoints: null,
      totalQuestion: null,
      Details: {},
      DateToday: ''
    };
  },
  computed: {
    Fileextension: function Fileextension() {
      var attach = this.Details.attachment;
      return attach.split('.').pop();
    }
  },
  methods: {
    getClassworkDetails: function getClassworkDetails() {
      var _this = this;

      axios.get('/api/classwork/showDetails/' + this.Preview_id + '/' + this.$route.params.id).then(function (res) {
        _this.Details = res.data.Details;
        _this.Details.from_date = (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(_this.Details.from_date).format('YYYY-MM-DD HH:mm:ss');
        _this.isloading = !_this.isloading;
        _this.totalPoints = res.data.totalpoints;
        _this.totalQuestion = res.data.ItemsCount;
      });
    },
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format('dddd, h:mm a');
      }
    },
    DownLoadFile: function DownLoadFile(file) {
      window.location = "/storage/" + file;
    }
  },
  mounted: function mounted() {
    this.getClassworkDetails();
    var newDate = new Date();
    this.DateToday = (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(newDate).format('YYYY-MM-DD HH:mm:ss');
  },
  created: function created() {
    this.$emit('isMounted');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nspan img{\n    max-width: 100% !important;\n    max-height: 15rem !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewClassworkModal.vue?vue&type=template&id=ce4a60c8& */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8&");
/* harmony import */ var _previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewClassworkModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _previewClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_ce4a60c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=template&id=ce4a60c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue?vue&type=template&id=ce4a60c8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "ma-0 pa-0 float-right mr-2 mt-1" },
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggleCloseDialog")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-window-close")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "mt-12 ml-0 pl-0 pl-2" },
        [
          _c("v-row", { staticStyle: { height: "2vh" } }),
          _vm._v(" "),
          _vm.isloading
            ? _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  staticStyle: { height: "30vh" },
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          w: "",
                          color: "primary",
                          indeterminate: "",
                          rounded: "",
                          height: "4"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isloading
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-container",
                        {
                          staticClass: "d-flex flex-row justify-space-between",
                          attrs: { "ma-0": "", "pa-0": "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2 mt-2",
                              attrs: { fab: "", dark: "", color: "primary" }
                            },
                            [
                              _c("v-icon", { attrs: { "x-large": "" } }, [
                                _vm._v(
                                  "\n                    mdi-book-open-variant\n                    "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "float-right mt-3",
                              attrs: { fab: "" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "text-md-h5 font-weight-medium"
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { large: "", color: "primary" } },
                                    [_vm._v("mdi-book-clock-outline")]
                                  ),
                                  _vm._v(" "),
                                  _vm.Details.type != "Subjective Type"
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.Details.duration) + " mins"
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "caption ml-2 font-weight-medium"
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.Details.availability != 0
                                          ? "Due " +
                                              _vm.format_date(
                                                _vm.Details.to_date
                                              )
                                          : "No due date"
                                      )
                                  )
                                ]
                              )
                            ]
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
                    { staticClass: "pl-7 pr-5", attrs: { cols: "12" } },
                    [
                      _c(
                        "div",
                        { staticClass: "text-sm-body-2 font-weight-bold" },
                        [_vm._v(_vm._s(_vm.Details.title))]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "pt-2 d-flex flex-row " }, [
                        _vm.Details.type == "Objective Type"
                          ? _c(
                              "div",
                              { staticClass: "captions font-weight-medium" },
                              [
                                _c("v-icon", [_vm._v("mdi-circle-medium")]),
                                _vm._v(_vm._s(_vm.totalQuestion) + " Question")
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "captions font-weight-medium" },
                          [
                            _c("v-icon", [_vm._v("mdi-circle-medium")]),
                            _vm._v(
                              _vm._s(
                                _vm.Details.type == "Objective Type"
                                  ? _vm.totalPoints
                                  : _vm.Details.points
                              ) + " Points"
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "pl-8 pr-5 ", attrs: { cols: "12" } },
                    [
                      _c("span", {
                        staticClass: "text-sm-body-2 ",
                        domProps: { innerHTML: _vm._s(_vm.Details.instruction) }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.Details.availability == 0
                    ? _c(
                        "v-col",
                        {
                          staticClass: "pl-10 pr-5 pb-5 text-right",
                          attrs: { cols: "12" }
                        },
                        [
                          _vm.Details.type == "Objective Type"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    rounded: "",
                                    color: "primary",
                                    dark: _vm.totalQuestion != 0
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$emit("OpenClasswork")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            View Quiz"
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("mdi-book-arrow-right-outline")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.Details.type == "Subjective Type"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    rounded: "",
                                    color: "primary",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$emit("OpenClasswork")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Submit Work"
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("mdi-book-arrow-right-outline")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    : _c(
                        "v-col",
                        {
                          staticClass: "pl-10 pr-5 pb-5 text-right",
                          attrs: { cols: "12" }
                        },
                        [
                          _vm.Details.type == "Objective Type"
                            ? _c(
                                "div",
                                { staticClass: "ma-0 pa-0" },
                                [
                                  _vm.DateToday > _vm.Details.from_date
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            color: "primary",
                                            dark: _vm.totalQuestion != 0
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$emit("OpenClasswork")
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                View Quiz"
                                          ),
                                          _c(
                                            "v-icon",
                                            { attrs: { right: "", dark: "" } },
                                            [
                                              _vm._v(
                                                "mdi-book-arrow-right-outline"
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            disabled: "",
                                            color: "primary"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Not Yet Available"
                                          )
                                        ]
                                      )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.Details.type == "Subjective Type"
                            ? _c(
                                "div",
                                { staticClass: "ma-0 pa-0" },
                                [
                                  _vm.DateToday > _vm.Details.from_date
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            color: "primary",
                                            dark: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$emit("OpenClasswork")
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Submit Work"
                                          ),
                                          _c(
                                            "v-icon",
                                            { attrs: { right: "", dark: "" } },
                                            [
                                              _vm._v(
                                                "mdi-book-arrow-right-outline"
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            color: "primary",
                                            disabled: "",
                                            dark: ""
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                Not Yet Available"
                                          ),
                                          _c(
                                            "v-icon",
                                            { attrs: { right: "", dark: "" } },
                                            [
                                              _vm._v(
                                                "mdi-book-arrow-right-outline"
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-row", { staticStyle: { height: "2vh" } })
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