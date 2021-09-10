"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ResetPassword"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      isLoggin: false,
      dialog: true,
      valid: true,
      form: new Form({
        id: null,
        token: null,
        password: "",
        password_confirmation: ""
      }),
      loginEmailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      emailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      show: false,
      show1: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "Min 6 characters";
        }
      },
      ToManyAttepmtError: null,
      isForgotPassword: false
    };
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.form.password === this.form.password_confirmation || "Pasword does not match";
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["verifyEmail"])), {}, {
    validate: function validate() {
      if (this.$refs.ResetPassword.validate()) {
        this.ResetPassword();
      }
    },
    ResetPassword: function ResetPassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.form.id = _this.$route.query.id;
                _this.form.token = _this.$route.query.token;
                axios.put('/api/confirm-reset-password', _this.form).then(function (res) {
                  if (res.data.success == true) {
                    _this.toastSuccess(res.data.message);

                    _this.$router.push({
                      path: '/login'
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./resources/js/components/ResetPassword/resetPassword.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ResetPassword/resetPassword.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetPassword.vue?vue&type=template&id=bb5989ac& */ "./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac&");
/* harmony import */ var _resetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetPassword.vue?vue&type=script&lang=js& */ "./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _resetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ResetPassword/resetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetPassword_vue_vue_type_template_id_bb5989ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetPassword.vue?vue&type=template&id=bb5989ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ResetPassword/resetPassword.vue?vue&type=template&id=bb5989ac& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-container",
        {
          class:
            _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
              ? ""
              : "fill-height",
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  class:
                    _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                      ? ""
                      : "ma-0 pa-0",
                  attrs: { cols: "12", sm: "12", md: "12" }
                },
                [
                  _c(
                    "v-row",
                    {
                      class:
                        _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                          ? "fill-height"
                          : "",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "primary ma-0 pa-0 d-flex flex-column",
                          style:
                            _vm.$vuetify.breakpoint.xs ||
                            _vm.$vuetify.breakpoint.sm
                              ? "height:35vh;"
                              : "height:100vh",
                          attrs: { cols: "12", md: "4" }
                        },
                        [
                          _vm.$vuetify.breakpoint.xs ||
                          _vm.$vuetify.breakpoint.sm
                            ? _c(
                                "v-container",
                                {
                                  staticClass:
                                    "pb-0 mb-0 pl-5 d-flex justify-space-between"
                                },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      height: "70",
                                      width: "70",
                                      "max-height": "70",
                                      "max-width": "70",
                                      src: "../images/isu_logo1.png"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-img", {
                                    attrs: {
                                      height: "70",
                                      width: "70",
                                      "max-height": "70",
                                      "max-width": "70",
                                      src: "../images/ccsict_logo_2.png"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            {
                              staticClass: "fill-height",
                              attrs: { fluid: "" }
                            },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-form",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            align: "center",
                                            justify: "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "display-2 white--text font-weight-bold"
                                                },
                                                [_vm._v("ORANGE")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "white--text" },
                                                [
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("O")]
                                                  ),
                                                  _vm._v("nline "),
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("R")]
                                                  ),
                                                  _vm._v("esources "),
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("A")]
                                                  ),
                                                  _vm._v("pp for a "),
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("N")]
                                                  ),
                                                  _vm._v("ew "),
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("G")]
                                                  ),
                                                  _vm._v("uild of "),
                                                  _c(
                                                    "b",
                                                    { staticClass: "text-h6" },
                                                    [_vm._v("E")]
                                                  ),
                                                  _vm._v("ducation")
                                                ]
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
                          ),
                          _vm._v(" "),
                          !_vm.$vuetify.breakpoint.xs &&
                          !_vm.$vuetify.breakpoint.sm
                            ? _c(
                                "v-container",
                                {
                                  staticClass:
                                    "pb-0 mb-0 pl-5 d-flex justify-center"
                                },
                                [
                                  _c("v-img", {
                                    attrs: {
                                      height: "70",
                                      width: "70",
                                      "max-height": "70",
                                      "max-width": "70",
                                      src: "../images/isu_logo1.png"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-img", {
                                    attrs: {
                                      height: "70",
                                      width: "70",
                                      "max-height": "70",
                                      "max-width": "70",
                                      src: "../images/ccsict_logo_2.png"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.xs
                            ? "ma-0 pa-3"
                            : "ma-0 pa-0",
                          attrs: { cols: "12", md: "8", lg: "8" }
                        },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-left",
                                  attrs: {
                                    cols: "12",
                                    md: "8",
                                    lg: "6",
                                    sm: "7"
                                  }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "ResetPassword",
                                          staticClass: "text-center",
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
                                            {
                                              attrs: {
                                                align: "center",
                                                justify: "center"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 text-left",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        " text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                   Enter new Password\n                                                  "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mt-6",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mb-0 pb-0",
                                                    attrs: {
                                                      dense: "",
                                                      outlined: "",
                                                      "append-icon": _vm.show
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.rules.min
                                                      ],
                                                      type: _vm.show
                                                        ? "text"
                                                        : "password",
                                                      name: "password",
                                                      label: "New Password",
                                                      "prepend-inner-icon":
                                                        "lock",
                                                      hint:
                                                        "At least 6 characters",
                                                      color: "primary"
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.show = !_vm.show
                                                      }
                                                    },
                                                    model: {
                                                      value: _vm.form.password,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "password",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.password"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "password"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mt-2",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "prepend-inner-icon":
                                                        "mdi-lock-check",
                                                      "append-icon": _vm.show1
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      id:
                                                        "passwordConfirmation",
                                                      label:
                                                        "Confirm new password",
                                                      name: "password",
                                                      type: _vm.show1
                                                        ? "text"
                                                        : "password",
                                                      color: "primary",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.passwordMatch
                                                      ],
                                                      counter: ""
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.show1 = !_vm.show1
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .password_confirmation,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "password_confirmation",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.password_confirmation"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 mt-2 text-left",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "mb-5",
                                                      attrs: {
                                                        color: "primary",
                                                        disabled: !_vm.valid
                                                      },
                                                      on: {
                                                        click: _vm.validate
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { staticClass: "mr-3" },
                                                        [_vm._v("mdi-lock")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                                      Submit\n                                                  "
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