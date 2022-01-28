"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_dialogs_warningDialog_vue"],{

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warningDialog.vue?vue&type=template&id=4fd323c8& */ "./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_4fd323c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./warningDialog.vue?vue&type=template&id=4fd323c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/warningDialog.vue?vue&type=template&id=4fd323c8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-2" },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "pt-8 pb-12" },
            [
              _c(
                "v-col",
                { staticClass: "text-center", attrs: { cols: "12" } },
                [
                  _c(
                    "v-icon",
                    {
                      staticStyle: { "font-size": "5rem" },
                      attrs: { color: "red" }
                    },
                    [
                      _vm._v(
                        "\n                    mdi-alert-circle\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { staticClass: "mb-0 pb-0", attrs: { cols: "12" } }, [
                _c("h3", [
                  _vm._v(
                    "This classwork has already publish and have submission. "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12" } }, [
                _c("div", [
                  _vm._v(
                    "\n                     You can still edit Classwork Question and Answers, and change point values, but you cannot add or remove questions.\n                     "
                  ),
                  _c("br"),
                  _vm._v(
                    " If you wish to add new question and choices you need you reset all submission of this classwork.\n                 "
                  )
                ])
              ])
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