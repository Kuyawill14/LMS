(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profile_changePassword_vue"],{

/***/ "./resources/js/components/profile/changePassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/profile/changePassword.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changePassword.vue?vue&type=template&id=ca31a1c8& */ "./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/changePassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./changePassword.vue?vue&type=template&id=ca31a1c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "pb-5" },
    [
      _c("v-col", { staticClass: "mb-0 pb-0", attrs: { cols: "12" } }, [
        _c("h3", [_vm._v("CHANGE PASSWORD")])
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "12", md: "3" } }),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12", md: "9" } }, [
                _c("h4", { staticClass: "mt-5" }, [_vm._v("Password")])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  class: _vm.$vuetify.breakpoint.xs ? "mb-0 pb-0" : "mt-2",
                  attrs: { cols: "12", md: "3" }
                },
                [_vm._v("\n                 Current Password\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("v-text-field", {
                    attrs: { dense: "", outlined: "", type: "password" }
                  })
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
        { staticClass: "mt-0 pt-0 mb-0 pb-0", attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  class: _vm.$vuetify.breakpoint.xs ? "mb-0 pb-0" : "mt-2",
                  attrs: { cols: "12", md: "3" }
                },
                [_vm._v("\n                 New Password\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("v-text-field", {
                    attrs: { dense: "", outlined: "", type: "password" }
                  })
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
        { staticClass: "mt-0 pt-0 mb-0 pb-0", attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  class: _vm.$vuetify.breakpoint.xs ? "mb-0 pb-0" : "mt-2",
                  attrs: { cols: "12", md: "3" }
                },
                [
                  _vm._v(
                    "\n                 Re Type New Password\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("v-text-field", {
                    attrs: { dense: "", outlined: "", type: "password" }
                  })
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
        { staticClass: "mt-0 pt-0 mb-0 pb-0", attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c("v-col", {
                class: _vm.$vuetify.breakpoint.xs ? "mb-0 pb-0" : "mt-2",
                attrs: { cols: "12", md: "3" }
              }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { rounded: "", color: "primary", dark: "" } },
                    [_vm._v("Save Changes")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { rounded: "", color: "secondary", dark: "" } },
                    [_vm._v("Cancel")]
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