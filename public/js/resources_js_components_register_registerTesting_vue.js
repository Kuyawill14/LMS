"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_register_registerTesting_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var loginRegisterFooter = function loginRegisterFooter() {
  return __webpack_require__.e(/*! import() | login_layout */ "login_layout").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/LoginRegisterLayout/LoginRegisterFooter */ "./resources/js/components/layout/LoginRegisterLayout/LoginRegisterFooter.vue"));
};

var loginRegisterImageConatiner = function loginRegisterImageConatiner() {
  return __webpack_require__.e(/*! import() | login_layout */ "login_layout").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/LoginRegisterLayout/LoginRegisterImageConatiner */ "./resources/js/components/layout/LoginRegisterLayout/LoginRegisterImageConatiner.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    loginRegisterImageConatiner: loginRegisterImageConatiner,
    loginRegisterFooter: loginRegisterFooter
  },
  data: function data() {
    return {
      steps: 1,
      isRegistering: false,
      valid: true,
      form: {
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
        birthday: new Date(),
        email: "",
        password: "",
        password_confirmation: "",
        student_id: ""
      },
      loginForm: new Form({
        email: "",
        password: ""
      }),
      nameRules: [function (v) {
        return !!v || 'Field is required';
      }, function (v) {
        return v && v.length <= 20 || 'Must be less than 50 characters';
      }],
      StudentIdRules: [function (v) {
        return !!v || 'Student ID is required';
      }, function (v) {
        return v && v.length >= 5 || 'min 5 characters';
      }, function (v) {
        return v && v.length <= 20 || 'Max 20 characters';
      }],
      emailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      rules: {
        required: function required(value) {
          return !!value || "Field is required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "Minimum 6 characters";
        },
        max: function max(v) {
          return v && v.length <= 20 || "Maximum 20 characters";
        }
      },
      showPass: false,
      showConfirmPass: false,
      isValid_id: false,
      isValid_id_mesage: null,
      valid_type: null,
      ischecking: false,
      ConfirmDialog: false
    };
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.form.password === this.form.password_confirmation || "Pasword does not match";
    }
  },
  methods: {
    preventNav: function preventNav(event) {
      if (this.steps == 1) return;
      event.preventDefault();
      event.returnValue = "";
    },
    validate: function validate() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$refs.Registerform.validate()) {
                  _this.nextStep();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    nextStep: function nextStep() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.steps == 1) {
                  _this2.ischecking = true;
                  axios.get('/api/register/check_student_id/' + _this2.form.student_id).then(function (res) {
                    if (res.data.success == true) {
                      setTimeout(function () {
                        return _this2.ischecking = false, _this2.steps += 1;
                      }, 500);

                      _this2.$refs.Registerform.resetValidation();
                    } else {
                      //this.toastError(res.data.message);
                      setTimeout(function () {
                        return _this2.ischecking = false;
                      }, 500);
                      _this2.valid_type = res.data.type;
                      _this2.isValid_id = true;
                      _this2.isValid_id_mesage = res.data.message;
                      setTimeout(function () {
                        return _this2.isValid_id = false;
                      }, 5000);
                    }
                  })["catch"](function (error) {
                    setTimeout(function () {
                      return _this2.ischecking = false;
                    }, 500);
                    console.log(error);

                    _this2.toastError('To many request, Please try again later');
                  });
                } else if (_this2.steps == 2) {
                  _this2.ischecking = true;
                  axios.put('/api/register/check_student_details/' + _this2.form.student_id, _this2.form).then(function (res) {
                    if (res.data.success == true) {
                      //this.steps += 1;
                      setTimeout(function () {
                        return _this2.ischecking = false, _this2.steps += 1, _this2.$refs.Registerform.resetValidation();
                      }, 500);
                    } else {
                      setTimeout(function () {
                        return _this2.ischecking = false;
                      }, 500);

                      _this2.toastError(res.data.message);
                    }
                  })["catch"](function (e) {
                    setTimeout(function () {
                      return _this2.ischecking = false;
                    }, 500);

                    _this2.toastError('To many request, Please try again later');
                  });
                } else if (_this2.steps == 3) {
                  _this2.ischecking = true;
                  _this2.ConfirmDialog = true;
                  /* axios.put('/api/register/account/'+this.form.student_id, this.form)
                  .then((res)=>{
                     if(res.data.success == true){
                         setTimeout(() => (this.ischecking = false), 500);
                         this.isRegistering = true;
                         this.sendVerification(this.form.email);
                         this.toastSuccess('Account Registerd: Please check your email for Verification!');
                         this.login(this.form.email,this.form.password)
                         window.removeEventListener('beforeunload', this.preventNav)
                     }else{
                         this.toastError(res.data.message);
                         setTimeout(() => (this.ischecking = false), 500);
                     }
                  }).catch(e => {
                     setTimeout(() => (this.ischecking = false), 500);
                     this.toastError(e.response.data.errors.email[0]);
                  }) */
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    registerAccount: function registerAccount() {
      var _this3 = this;

      this.ConfirmDialog = false;
      axios.put('/api/register/account/' + this.form.student_id, this.form).then(function (res) {
        if (res.data.success == true) {
          setTimeout(function () {
            return _this3.ischecking = false;
          }, 500);
          _this3.isRegistering = true;

          if (res.data.isVerified) {
            _this3.toastSuccess('Account Registered Successfully!');
          } else {
            _this3.toastSuccess('Account Registerd: Please check your email for Verification!');

            _this3.sendVerification(_this3.form.email);
          } //this.sendVerification(this.form.email);


          _this3.login(_this3.form.email, _this3.form.password);

          window.removeEventListener('beforeunload', _this3.preventNav);
        } else {
          _this3.toastError(res.data.message);

          setTimeout(function () {
            return _this3.ischecking = false;
          }, 500);
        }
      })["catch"](function (e) {
        setTimeout(function () {
          return _this3.ischecking = false;
        }, 500);

        _this3.toastError(e.response.data.errors.email[0]);
      });
    },
    sendVerification: function sendVerification(email) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios.post('/api/resend-verification', {
                  email: email
                }).then(function (res) {
                  if (res.data.success == true) {//this.toastSuccess(res.data.message);
                  } else {//this.toastError(res.data.message);
                  }
                })["catch"](function (err) {
                  /* this.toastError(err.response.errors.email);
                  this.toastError(err.response.data.message); */
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    login: function login(email, password) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loginForm.email = email;
                _this4.loginForm.password = password;
                axios.get('/sanctum/csrf-cookie').then(function (response) {
                  _this4.loginForm.post('/api/login').then(function (res) {
                    if (res.data.success == true) {
                      _this4.$store.dispatch('clear_current_user');

                      _this4.$router.push({
                        path: "/"
                      });
                    } else {
                      _this4.toastError(res.data.message);
                    }
                  });
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    beforeWindowUnload: function beforeWindowUnload(e) {
      if (this.steps == 1) {
        // Cancel the event
        e.preventDefault(); // Chrome requires returnValue to be set

        e.returnValue = '';
      }
    }
  },
  beforeMount: function beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  }
});

/***/ }),

/***/ "./resources/js/components/register/registerTesting.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/register/registerTesting.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerTesting.vue?vue&type=template&id=72caf568& */ "./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568&");
/* harmony import */ var _registerTesting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerTesting.vue?vue&type=script&lang=js& */ "./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _registerTesting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__.render,
  _registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register/registerTesting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerTesting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./registerTesting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerTesting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerTesting_vue_vue_type_template_id_72caf568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./registerTesting.vue?vue&type=template&id=72caf568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/registerTesting.vue?vue&type=template&id=72caf568& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { align: "center", justify: "center" } },
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
                      _c("loginRegisterImageConatiner"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class:
                            _vm.$vuetify.breakpoint.xs ||
                            _vm.$vuetify.breakpoint.sm
                              ? "ma-0 pa-3 mb-12"
                              : "ma-0 pa-0",
                          attrs: { cols: "12", md: "5" }
                        },
                        [
                          _c("vue-element-loading", {
                            attrs: {
                              active: _vm.isRegistering,
                              spinner: "bar-fade-scale",
                              color: "#EF6C00"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
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
                                          staticClass: " text-left",
                                          attrs: {
                                            cols: "12",
                                            md: "8",
                                            xl: "7"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"
                                            },
                                            [
                                              _vm._v(
                                                "Sign\n                                        Up "
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-regular"
                                                },
                                                [_vm._v("Now")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-regular text-subtitle-1"
                                                },
                                                [
                                                  _vm._v(
                                                    " (Step " +
                                                      _vm._s(_vm.steps) +
                                                      " of 3)"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "mt-2" },
                                            [
                                              _vm._v("Login Your Account "),
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass: "blue--text",
                                                  attrs: {
                                                    to: { name: "login" }
                                                  }
                                                },
                                                [_vm._v("Click here")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
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
                                  staticClass: "text-center mb-0 pb-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c(
                                    "v-form",
                                    {
                                      ref: "Registerform",
                                      attrs: { "lazy-validation": "" },
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.validate.apply(
                                            null,
                                            arguments
                                          )
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
                                      _vm.steps == 1
                                        ? _c(
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
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-alert",
                                                    {
                                                      staticClass: "text-left",
                                                      attrs: {
                                                        dismissible: "",
                                                        dense: "",
                                                        type:
                                                          _vm.valid_type ==
                                                          "Not_Valid"
                                                            ? "error"
                                                            : "info"
                                                      },
                                                      model: {
                                                        value: _vm.isValid_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.isValid_id = $$v
                                                        },
                                                        expression: "isValid_id"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.isValid_id_mesage
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      rules: _vm.StudentIdRules,
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      placeholder:
                                                        "e.g. 18-1234, SHS-18-1234",
                                                      label:
                                                        "Student ID Number",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.student_id,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "student_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.student_id"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.steps == 2
                                        ? _c(
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
                                                  staticClass: "text-left",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-alert",
                                                    {
                                                      staticClass: "text-left",
                                                      attrs: {
                                                        dismissible: "",
                                                        dense: "",
                                                        type: "info"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Please use your exact birthday you used in the enrollment.\n                                         "
                                                      ),
                                                      _c("br"),
                                                      _vm._v(
                                                        "\n                                         Need help? Send us a message @"
                                                      ),
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "white--text",
                                                          attrs: {
                                                            href:
                                                              "https://www.messenger.com/t/102514265611526/",
                                                            target: "_blank"
                                                          }
                                                        },
                                                        [_vm._v(" Messenger")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("Personal Details")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      rules: _vm.nameRules,
                                                      label: "First Name",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value: _vm.form.firstName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "firstName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.firstName"
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
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      rules: _vm.nameRules,
                                                      label: "Middle Initial",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.middleName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "middleName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.middleName"
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
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      rules: _vm.nameRules,
                                                      label: "Last Name",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value: _vm.form.lastName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "lastName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.lastName"
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
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      label: "Suffix",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value: _vm.form.suffix,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "suffix",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.suffix"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      type: "Date",
                                                      label: "Birthday",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value: _vm.form.birthday,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "birthday",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.birthday"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.steps == 3
                                        ? _c(
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
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      type: "email",
                                                      rules: _vm.emailRules,
                                                      label: "Email",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value: _vm.form.email,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "email",
                                                          $$v
                                                        )
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
                                                {
                                                  staticClass:
                                                    "mb-0 pb-0 pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      "append-icon": _vm.showPass
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      type: _vm.showPass
                                                        ? "text"
                                                        : "password",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.rules.min,
                                                        _vm.rules.max
                                                      ],
                                                      label: "Password",
                                                      outlined: ""
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.showPass = !_vm.showPass
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
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: " pt-0 mt-0",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "8",
                                                    xl: "7"
                                                  }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      dense:
                                                        _vm.$vuetify.breakpoint
                                                          .mdAndUp,
                                                      "append-icon": _vm.showConfirmPass
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      type: _vm.showConfirmPass
                                                        ? "text"
                                                        : "password",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.passwordMatch
                                                      ],
                                                      label: "Confirm Password",
                                                      outlined: ""
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.showConfirmPass = !_vm.showConfirmPass
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
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        {
                                          staticClass: "mt-0 pt-0 pb-5",
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
                                                "text-center d-flex  mt-0 pt-0",
                                              attrs: {
                                                cols: "12",
                                                md: "8",
                                                xl: "7"
                                              }
                                            },
                                            [
                                              _vm.steps > 1
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "secondary"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.steps =
                                                            _vm.steps - 1
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        Previous\n                                    "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  class:
                                                    _vm.steps == 3
                                                      ? ""
                                                      : "pl-10 pr-10",
                                                  attrs: {
                                                    disabled: !_vm.valid,
                                                    loading: _vm.ischecking,
                                                    color:
                                                      _vm.steps == 3
                                                        ? "success"
                                                        : "primary"
                                                  },
                                                  on: { click: _vm.validate }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(
                                                        _vm.steps == 3
                                                          ? "Register"
                                                          : "Next"
                                                      ) +
                                                      "\n                                    "
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
                      ),
                      _vm._v(" "),
                      _c("loginRegisterFooter")
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
          _vm.ConfirmDialog
            ? _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "500" },
                      model: {
                        value: _vm.ConfirmDialog,
                        callback: function($$v) {
                          _vm.ConfirmDialog = $$v
                        },
                        expression: "ConfirmDialog"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "div",
                            { staticClass: "pa-2" },
                            [
                              _c(
                                "v-alert",
                                {
                                  staticClass: "text-left",
                                  attrs: { dense: "", type: "info" }
                                },
                                [
                                  _vm._v(
                                    "\n                     Confirm Details: Before you click "
                                  ),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-medium" },
                                    [_vm._v("Confirm")]
                                  ),
                                  _vm._v(
                                    ", make sure you're using an active email address because \n                    all information regarding your class's activity will be sent to that email.\n\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { staticClass: "pl-6 pr-6" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: { "font-size": "20px" },
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("First Name: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.firstName))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Middle Initial: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.middleName))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Last Name: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.lastName))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Suffix: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.suffix))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Birthday: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.birthday))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Email: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.email))
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v("Password: ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.form.password))
                                      ]),
                                      _vm._v(" "),
                                      _c("br")
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
                            "v-card-actions",
                            { staticClass: "pt-2 pb-3" },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "secondary", text: "" },
                                  on: {
                                    click: function($event) {
                                      ;(_vm.ConfirmDialog = false),
                                        (_vm.ischecking = false)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        cancel\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.registerAccount()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                        Confirm\n                    "
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