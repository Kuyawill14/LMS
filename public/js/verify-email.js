"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["verify-email"],{

<<<<<<< HEAD
=======
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: true,
      emailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      form: new Form({
        email: ''
      }),
      isSending: false
    };
  },
  methods: {
    validate: function validate() {
      if (this.$refs.ResetForm.validate()) {
        this.RequestPasswordReset();
      }
    },
    RequestPasswordReset: function RequestPasswordReset() {
      var _this = this;

      this.isSending = true;
      axios.put("/api/send_reset_password", this.form).then(function (res) {
        if (res.data.success == true) {
          _this.toastSuccess(res.data.message);

          _this.isSending = false;

          _this.$emit('toggleLogin');

          _this.$refs.ResetForm.reset();
        } else {
          _this.toastError(res.data.message);

          _this.isSending = false;
        }
      })["catch"](function (err) {
        _this.isSending = false;

        _this.toastError('Something went wrong');
      });
    }
  },
  mounted: function mounted() {
    this.$emit('toggleIsloading');
  }
});

/***/ }),

>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['get_CurrentUser'],
  data: function data() {
    return {
      loginEmailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "Min 6 characters";
        }
      },
      isEmailChange: false,
      isResending: false,
      ConfirmPassword: false,
      show: false,
      form: new Form({
        password: ""
      }),
      isConfirming: false
    };
  },
  methods: {
    toggleEmailChange: function toggleEmailChange() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //this.isEmailChange = !this.isEmailChange;
                if (!_this.isEmailChange) {
                  _this.ConfirmPassword = !_this.ConfirmPassword;
                } else {
                  _this.isEmailChange = !_this.isEmailChange;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ResendVerification: function ResendVerification() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isResending = true;
                axios.post('/api/resend-verification', {
                  email: _this2.get_CurrentUser.email
                }).then(function (res) {
                  if (res.data.success == true) {
                    _this2.isResending = false;

                    _this2.toastSuccess(res.data.message);
                  } else {
                    _this2.toastError(res.data.message);

                    _this2.isResending = false;
                  }
                })["catch"](function (err) {
                  _this2.toastError(err.response.errors.email);

                  _this2.toastError(err.response.data.message);

                  _this2.isResending = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    ConfirmUserPassword: function ConfirmUserPassword() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.isConfirming = true;
                axios.post('/api/confirm-password', _this3.form).then(function (res) {
                  if (res.data.success == true) {
                    _this3.ConfirmPassword = false;
                    _this3.isConfirming = false;
                    _this3.isEmailChange = true;
                  } else if (res.data.success == false) {
                    _this3.isConfirming = false;

                    _this3.toastError(res.data.message);
                  }
                })["catch"](function (err) {
                  _this3.toastError(err.response.data.message);

                  _this3.isConfirming = false;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    UpdateAndSendVerification: function UpdateAndSendVerification() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios.post('/api/change-email', {
                  email: _this4.get_CurrentUser.email,
                  id: _this4.get_CurrentUser.user_id
                }).then(function (res) {
                  if (res.data.success == true) {
                    _this4.toastSuccess(res.data.message);

                    _this4.isEmailChange = false;
                  } else {
                    _this4.toastError(res.data.message);
                  }
                })["catch"](function (err) {
                  _this4.toastError(err.response.data.errors.email[0]); //console.log(err.response.data.errors.email[0]);

                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

<<<<<<< HEAD
=======
/***/ "./resources/js/components/login/forgot-password.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/login/forgot-password.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.vue?vue&type=template&id=5cf082a4& */ "./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4&");
/* harmony import */ var _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.vue?vue&type=script&lang=js& */ "./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login/forgot-password.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/***/ "./resources/js/components/verify/ResendAndChangeEmail.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/verify/ResendAndChangeEmail.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResendAndChangeEmail.vue?vue&type=template&id=287332ea& */ "./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea&");
/* harmony import */ var _ResendAndChangeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResendAndChangeEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ResendAndChangeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/verify/ResendAndChangeEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

<<<<<<< HEAD
=======
/***/ "./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./forgot-password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/***/ "./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResendAndChangeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResendAndChangeEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResendAndChangeEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

<<<<<<< HEAD
=======
/***/ "./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_5cf082a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./forgot-password.vue?vue&type=template&id=5cf082a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4&");


/***/ }),

>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/***/ "./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResendAndChangeEmail_vue_vue_type_template_id_287332ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResendAndChangeEmail.vue?vue&type=template&id=287332ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea&");


/***/ }),

<<<<<<< HEAD
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/forgot-password.vue?vue&type=template&id=5cf082a4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "ResetForm",
      staticClass: "text-center",
      attrs: { "lazy-validation": "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.validate()
        }
      },
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c("vue-element-loading", {
        attrs: {
          active: _vm.isSending,
          text: "Sending please wait...",
          spinner: "bar-fade-scale",
          color: "#EF6C00"
        }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            {
              staticClass: "ma-0 pa-0 text-left mt-4",
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
                  _c("v-icon", { attrs: { left: "", large: "" } }, [
                    _vm._v("mdi-lock")
                  ]),
                  _vm._v(" Forgot your password?\r\n                ")
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2" }, [
                _vm._v(
                  "Enter your email address and we'll send you link to reset your password"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "ma-0 pa-0 mt-4", attrs: { cols: "12", md: "8" } },
            [
              _c("v-text-field", {
                attrs: {
                  loading: _vm.isSending,
                  outlined: "",
                  label: "Email",
                  rules: _vm.emailRules,
                  name: "Email",
                  "prepend-inner-icon": "email",
                  dense: "",
                  type: "email",
                  color: "primary",
                  required: ""
                },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "ma-0 pa-0", attrs: { cols: "12", md: "8" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "pl-10 pr-10 pt-5 pb-5",
                  attrs: {
                    disabled: !_vm.valid || _vm.isSending,
                    type: "submit",
                    rounded: "",
                    color: "primary"
                  }
                },
                [
                  _vm._v(
                    " " +
                      _vm._s(_vm.isSending ? "Sending..." : "Reset password")
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "ma-0 pa-0 mt-4", attrs: { cols: "12", md: "8" } },
            [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.$emit("toggleLogin")
                    }
                  }
                },
                [_vm._v("Login")]
              )
            ]
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



/***/ }),

>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/ResendAndChangeEmail.vue?vue&type=template&id=287332ea& ***!
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
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.ConfirmPassword,
            callback: function($$v) {
              _vm.ConfirmPassword = $$v
            },
            expression: "ConfirmPassword"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.ConfirmPassword = false
                        }
                      }
                    },
                    [
                      _c("v-icon", [
                        _vm._v(
                          "\n                    mdi-close\n                "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v("\n            Confirm Password\n        ")
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "Please enter you account password, to continue changing you email address."
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pl-2 pr-2" },
                [
                  _c("v-text-field", {
                    staticClass: "mb-0 pb-0",
                    attrs: {
                      dense: "",
                      outlined: "",
                      "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                      rules: [_vm.rules.required, _vm.rules.min],
                      type: _vm.show ? "text" : "password",
                      name: "password",
                      label: "Password",
                      "prepend-inner-icon": "lock",
                      hint: "At least 6 characters",
                      color: "primary"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.show = !_vm.show
                      }
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        block: "",
                        color: "primary",
                        rounded: "",
                        loading: _vm.isConfirming
                      },
                      on: {
                        click: function($event) {
                          return _vm.ConfirmUserPassword()
                        }
                      }
                    },
                    [_vm._v("\n            Confirm\n        ")]
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
      _c("p", [
        _vm._v(
<<<<<<< HEAD
          "If you have not received a verification email or if you have mistyped your email\n        address, you can resend the verification. "
=======
          "If you hvae not received a verification email or if you have mistyped your email\n        address, you can resend the verification mail. "
>>>>>>> 736ee3a14cebaa5e4a00e494107d3e4fcd74eb13
        )
      ]),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          outlined: "",
          label: "Email",
          rules: _vm.loginEmailRules,
          name: "Email",
          "prepend-inner-icon": "email",
          readonly: !_vm.isEmailChange,
          "append-icon": _vm.isEmailChange ? "mdi-pencil" : "mdi-pencil-off",
          dense: "",
          type: "email",
          color: "primary",
          required: ""
        },
        on: { "click:append": _vm.toggleEmailChange },
        model: {
          value: _vm.get_CurrentUser.email,
          callback: function($$v) {
            _vm.$set(_vm.get_CurrentUser, "email", $$v)
          },
          expression: "get_CurrentUser.email"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-left" },
        [
          _vm.isEmailChange
            ? _c(
                "v-btn",
                {
                  staticClass: "primary",
                  attrs: { loading: _vm.isResending },
                  on: {
                    click: function($event) {
                      return _vm.UpdateAndSendVerification()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            Update and Send New verification\n        "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isEmailChange
            ? _c(
                "v-btn",
                {
                  staticClass: "primary",
                  attrs: { loading: _vm.isResending },
                  on: {
                    click: function($event) {
                      return _vm.ResendVerification()
                    }
                  }
                },
                [_vm._v("\n            Resend Mail\n        ")]
              )
            : _vm._e()
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