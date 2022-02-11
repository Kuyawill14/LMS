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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      role: ['Teacher', 'Student'],
      invalid_classcode_message: null,
      form: new Form({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        student_id: ""
      }),
      form2: {
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
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
        return v && v.length <= 20 || 'Name must be less than 20 characters';
      }],
      loginEmailRules: [function (v) {
        return !!v || "Field is required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      RoleRules: [function (v) {
        return !!v || "Field is required";
      }],
      StudentIdRules: [function (v) {
        return !!v || 'Student ID is required';
      }, function (v) {
        return v && v.length >= 6 || 'min 6 characters';
      }, function (v) {
        return v && v.length <= 8 || 'Max 8 characters';
      }],
      show: false,
      show1: false,
      rules: {
        required: function required(value) {
          return !!value || "Field is required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "min 6 characters";
        }
      }
    };
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.form.password === this.form.password_confirmation || "Pasword does not match";
    }
  },
  methods: {
    isNumber: function isNumber(val) {
      if (isNaN(Number(val.key))) {
        return val.preventDefault();
      }
    },
    validate: function validate() {
      var _this = this;

      if (this.$refs.RegisterForm.validate()) {
        this.isRegistering = true;
        this.form.post('/api/register').then(function (res) {
          if (res.data.success == true) {
            _this.toastSuccess(res.data.message);

            _this.login(_this.form.email, _this.form.password);

            _this.valid = true;
            _this.isRegistering = false;

            _this.$refs.RegisterForm.reset();
          } else {
            _this.toastError(res.data.message);

            _this.invalid_classcode_message = res.data.message;
            _this.isRegistering = false;
          }
        })["catch"](function (e) {
          _this.toastError(e.response.data.message);

          _this.isRegistering = false;
        });
      }
    },
    login: function login(email, password) {
      var _this2 = this;

      this.loginForm.email = email;
      this.loginForm.password = password;
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        _this2.loginForm.post('/api/login').then(function (res) {
          if (res.data.success == true) {
            _this2.$store.dispatch('clear_current_user');

            _this2.$router.push({
              path: "/"
            });
          } else {
            _this2.toastError(res.data.message);
          }
        });
      });
    }
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
                          class: _vm.$vuetify.breakpoint.xs
                            ? "ma-0 pa-3 mb-10"
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
                                          staticClass: "mt-0 pt-0 text-left",
                                          attrs: { cols: "12", md: "7" }
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
                                            { attrs: { cols: "12", md: "7" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  rules: _vm.StudentIdRules,
                                                  dense: "",
                                                  label: "Student ID Number*",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.student_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "student_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.student_id"
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
                                            { attrs: { cols: "12", md: "7" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-weight-bold"
                                                },
                                                [_vm._v("Personal Details")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "mb-0 pb-0 pt-0 mt-0",
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "First Name",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.firstName,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "firstName",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.firstName"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Middle Name",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.middleName,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "middleName",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.middleName"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Last Name",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.lastName,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "lastName",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.lastName"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Suffix",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.suffix,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "suffix",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.suffix"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Email",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.email"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Password",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.form2.password,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "password",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form2.password"
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
                                              attrs: { cols: "12", md: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Confirm Password",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.form2
                                                      .password_confirmation,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form2,
                                                      "password_confirmation",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "form2.password_confirmation"
                                                }
                                              })
                                            ],
                                            1
                                          )
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
                                  staticClass: "text-center mt-0 pt-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _vm.steps > 1
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "secondary" },
                                          on: {
                                            click: function($event) {
                                              _vm.steps = _vm.steps - 1
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Previus\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color:
                                          _vm.steps == 3 ? "success" : "primary"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.steps = _vm.steps + 1
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.steps == 3 ? "Register" : "Next"
                                          ) +
                                          "\n                                "
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