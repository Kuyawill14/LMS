"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_dialogs_deleteDialog_vue"],{

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=template&id=43071f3f& */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteDialog.vue?vue&type=template&id=43071f3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("v-card-title", { staticClass: "text-h6" }, [
        _vm._v("\n    Are you sure?\n  ")
      ]),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "pb-0 mb-0 text-subtitle-1" }, [
        _vm._v(
          "\n\n       Deleting questions from this classwork cannot be undone.\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "pb-3" },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggleDialog")
                }
              }
            },
            [_vm._v("\n      Cancel\n    ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", text: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("confirmRemove")
                }
              }
            },
            [_vm._v("\n      Confirm\n    ")]
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