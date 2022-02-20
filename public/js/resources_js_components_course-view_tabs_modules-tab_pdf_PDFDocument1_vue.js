"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_pdf_PDFDocument1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//


var PDFPage = function PDFPage() {
  return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module './PDFPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['url', 'scale'],
  data: function data() {
    return {
      pdf: undefined,
      pages: []
    };
  },
  components: {
    PDFPage: PDFPage
  },
  created: function created() {
    this.fetchPDF();
  },
  methods: {
    fetchPDF: function fetchPDF() {
      var _this = this;

      Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfjs-dist'"); e.code = 'MODULE_NOT_FOUND'; throw e; }).then(function (pdfjs) {
        return pdfjs.getDocument(_this.url);
      }).then(function (pdf) {
        return _this.pdf = pdf;
      });
    }
  },
  watch: {
    pdf: function pdf(_pdf) {
      var _this2 = this;

      this.pages = [];
      var promises = lodash_range__WEBPACK_IMPORTED_MODULE_0___default()(1, _pdf.numPages).map(function (number) {
        return _pdf.getPage(number);
      });
      Promise.all(promises).then(function (pages) {
        return _this2.pages = pages;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PDFDocument1.vue?vue&type=template&id=c6321b82& */ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82&");
/* harmony import */ var _PDFDocument1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFDocument1.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PDFDocument1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__.render,
  _PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFDocument1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFDocument1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFDocument1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFDocument1_vue_vue_type_template_id_c6321b82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFDocument1.vue?vue&type=template&id=c6321b82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFDocument1.vue?vue&type=template&id=c6321b82& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pdf-document" },
    _vm._l(_vm.pages, function(page) {
      return _c(
        "PDFPage",
        _vm._b(
          { key: page.pageNumber },
          "PDFPage",
          { page: page, scale: _vm.scale },
          false
        )
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);