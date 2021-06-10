(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_pdf_PDFPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['page', 'scale'],
  render: function render(h) {
    var attrs = this.canvasAttrs;
    return h('canvas', {
      attrs: attrs
    });
  },
  created: function created() {
    // PDFPageProxy#getViewport
    // https://mozilla.github.io/pdf.js/api/draft/PDFPageProxy.html
    this.viewport = this.page.getViewport(this.scale);
  },
  computed: {
    canvasAttrs: function canvasAttrs() {
      var _this$viewport = this.viewport,
          width = _this$viewport.width,
          height = _this$viewport.height;

      var _map = [width, height].map(function (dim) {
        return Math.ceil(dim);
      });

      var _map2 = _slicedToArray(_map, 2);

      width = _map2[0];
      height = _map2[1];
      var style = this.canvasStyle;
      return {
        width: width,
        height: height,
        style: style,
        "class": 'pdf-page'
      };
    },
    canvasStyle: function canvasStyle() {
      var _this$actualSizeViewp = this.actualSizeViewport,
          actualSizeWidth = _this$actualSizeViewp.width,
          actualSizeHeight = _this$actualSizeViewp.height;
      var pixelRatio = window.devicePixelRatio || 1;

      var _map3 = [actualSizeWidth, actualSizeHeight].map(function (dim) {
        return Math.ceil(dim / pixelRatio);
      }),
          _map4 = _slicedToArray(_map3, 2),
          pixelWidth = _map4[0],
          pixelHeight = _map4[1];

      return "width: ".concat(pixelWidth, "px; height: ").concat(pixelHeight, "px;");
    },
    actualSizeViewport: function actualSizeViewport() {
      return this.viewport.clone({
        scale: this.scale
      });
    } //...

  },
  mounted: function mounted() {
    this.drawPage();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyPage(this.page);
  },
  methods: {
    drawPage: function drawPage() {
      // ...
      this.renderTask.then()["catch"](this.destroyRenderTask);
    },
    destroyPage: function destroyPage(page) {
      if (!page) return; // PDFPageProxy#_destroy
      // https://mozilla.github.io/pdf.js/api/draft/PDFPageProxy.html

      page._destroy(); // RenderTask#cancel
      // https://mozilla.github.io/pdf.js/api/draft/RenderTask.html


      if (this.renderTask) this.renderTask.cancel();
    },
    destroyRenderTask: function destroyRenderTask() {
      if (!this.renderTask) return; // RenderTask#cancel
      // https://mozilla.github.io/pdf.js/api/draft/RenderTask.html

      this.renderTask.cancel();
      delete this.renderTask;
    }
  },
  watch: {
    page: function page(_page, oldPage) {
      this.destroyPage(oldPage);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PDFPage.vue?vue&type=template&id=7e8802d6& */ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6&");
/* harmony import */ var _PDFPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFPage.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PDFPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PDFPage_vue_vue_type_template_id_7e8802d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PDFPage.vue?vue&type=template&id=7e8802d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/pdf/PDFPage.vue?vue&type=template&id=7e8802d6& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);