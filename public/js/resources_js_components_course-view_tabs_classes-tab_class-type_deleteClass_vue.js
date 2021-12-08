"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classes-tab_class-type_deleteClass_vue"],{

/***/ "./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteClass.vue?vue&type=template&id=88551328& */ "./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteClass_vue_vue_type_template_id_88551328___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteClass.vue?vue&type=template&id=88551328& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classes-tab/class-type/deleteClass.vue?vue&type=template&id=88551328& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", { staticClass: "text-h5 mb-3" }, [
        _vm._v("\n      Remove class\n    ")
      ]),
      _vm._v(" "),
      _c("v-card-text", { staticClass: "font-weight-bold" }, [
        _c(
          "div",
          { staticClass: "subtitle-1 ", staticStyle: { "line-height": "1.1" } },
          [
            _vm._v(
              "\n             Are yor sure to remove this class?\n         "
            )
          ]
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
                  return _vm.$emit("toggleCancelDialog")
                }
              }
            },
            [_vm._v("\n        Cancel\n      ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", text: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggleConfirm")
                }
              }
            },
            [_vm._v("\n        Confirm\n      ")]
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