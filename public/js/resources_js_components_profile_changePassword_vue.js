"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profile_changePassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      valid: false,
      showCurrent: false,
      showNew: false,
      ShowNewRetype: false,
      isChanging: false,
      data: {},
      form: {
        current_password: null,
        new_password: null,
        confirm_password: null
      },
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "Min 6 characters";
        }
      }
    };
  },
  methods: {
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.changepassword();
      }
    },
    changepassword: function changepassword() {
      var _this = this;

      axios.post('/api/change-password', this.form).then(function (res) {
        if (res.data == 1) {
          _this.toastSuccess('Password Successfully Changed');
        } else {
          _this.toastError('Something went wrong in changing your password!');
        }
      })["catch"](function (e) {
        _this.toastError('Something went wrong in changing your password!');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/profile/changePassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/profile/changePassword.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changePassword_vue_vue_type_template_id_ca31a1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changePassword.vue?vue&type=template&id=ca31a1c8& */ "./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&");
/* harmony import */ var _changePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _changePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
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

/***/ "./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./changePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/changePassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/profile/changePassword.vue?vue&type=template&id=ca31a1c8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        _c(
          "div",
          {
            class: _vm.$vuetify.breakpoint.lgAndUp
              ? "text-h6 font-weight-bold"
              : "font-weight-bold"
          },
          [_vm._v("CHANGE PASSWORD")]
        )
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
        [_c("v-divider")],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c("vue-element-loading", {
            attrs: {
              active: _vm.isChanging,
              spinner: "bar-fade-scale",
              color: "#EF6C00"
            }
          }),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c(
                "v-row",
                [
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
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "3" }
                            },
                            [
                              _vm._v(
                                "\n                            Current Password\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  "append-icon": _vm.showCurrent
                                    ? "mdi-eye"
                                    : "mdi-eye-off",
                                  dense: "",
                                  rules: [_vm.rules.required, _vm.rules.min],
                                  outlined: "",
                                  type: _vm.showCurrent ? "text" : "password"
                                },
                                on: {
                                  "click:append": function($event) {
                                    _vm.showCurrent = !_vm.showCurrent
                                  }
                                },
                                model: {
                                  value: _vm.form.current_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "current_password", $$v)
                                  },
                                  expression: "form.current_password"
                                }
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
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "3" }
                            },
                            [
                              _vm._v(
                                "\n                            New Password\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  "append-icon": _vm.showNew
                                    ? "mdi-eye"
                                    : "mdi-eye-off",
                                  dense: "",
                                  rules: [_vm.rules.required, _vm.rules.min],
                                  outlined: "",
                                  type: _vm.showNew ? "text" : "password"
                                },
                                on: {
                                  "click:append": function($event) {
                                    _vm.showNew = !_vm.showNew
                                  }
                                },
                                model: {
                                  value: _vm.form.new_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "new_password", $$v)
                                  },
                                  expression: "form.new_password"
                                }
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
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "3" }
                            },
                            [
                              _vm._v(
                                "\n                            Re Type New Password\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  "append-icon": _vm.ShowNewRetype
                                    ? "mdi-eye"
                                    : "mdi-eye-off",
                                  dense: "",
                                  outlined: "",
                                  rules: [_vm.rules.required, _vm.rules.min],
                                  type: _vm.ShowNewRetype ? "text" : "password"
                                },
                                on: {
                                  "click:append": function($event) {
                                    _vm.ShowNewRetype = !_vm.ShowNewRetype
                                  }
                                },
                                model: {
                                  value: _vm.form.confirm_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "confirm_password", $$v)
                                  },
                                  expression: "form.confirm_password"
                                }
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
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", {
                            class: !_vm.$vuetify.breakpoint.lgAndUp
                              ? "mb-0 pb-0"
                              : "mt-2",
                            attrs: { cols: "12", md: "3" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "5" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    block: !_vm.$vuetify.breakpoint.lgAndUp,
                                    disabled: _vm.isChanging,
                                    rounded: "",
                                    color: "primary",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.validate()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.isChanging
                                          ? "Updating..."
                                          : "Update Password"
                                      )
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);