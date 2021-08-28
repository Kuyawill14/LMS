(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course_subject_class-type_ClassNotFound_vue"],{

/***/ "./resources/js/components/course_subject/class-type/ClassNotFound.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/ClassNotFound.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassNotFound.vue?vue&type=template&id=ff4d701a& */ "./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course_subject/class-type/ClassNotFound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassNotFound_vue_vue_type_template_id_ff4d701a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClassNotFound.vue?vue&type=template&id=ff4d701a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/ClassNotFound.vue?vue&type=template&id=ff4d701a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    {
      staticClass: "fill-height",
      staticStyle: { height: "75vh" },
      attrs: { fluid: "" }
    },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4", lg: "3", xl: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-5", attrs: { outlined: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c("h2", { staticClass: "font-weight-regular" }, [
                          _vm._v("Course Not Found")
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "Look for it on Courses, or double-check your course link."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "text-right", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.$router.push({ name: "courses" })
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                               Back to Courses\n                           "
                              )
                            ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);