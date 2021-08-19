(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_register_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
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
        class_code: "",
        role: "Student"
      }),
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
      ClassCodeRules: [function (v) {
        return !!v || "Class code is required";
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
      var _this = this;

      return function () {
        return _this.password === _this.password_confirmation || "Password must match";
      };
    }
  },
  methods: {
    Test: function Test() {
      console.log(this.form);
    },
    validate: function validate() {
      var _this2 = this;

      if (this.$refs.RegisterForm.validate()) {
        this.isRegistering = true;
        this.form.post('/api/register').then(function (res) {
          if (res.status == 201) {
            _this2.toastSuccess('User Registration Successfull!');

            _this2.login(res.data.email, _this2.form.password);

            _this2.$refs.RegisterForm.reset();

            _this2.valid = true;
          } else if (res.status == 202) {
            _this2.toastError(res.data.message);

            _this2.invalid_classcode_message = res.data.message;
          }
        })["catch"](function (e) {
          _this2.toastError('Something went wrong while registering!');
        });
        this.isRegistering = false;
      }
    },
    login: function login(email, password) {
      var _this3 = this;

      this.loginForm.email = email;
      this.loginForm.password = password;
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        _this3.loginForm.post('/api/login').then(function (res) {
          if (res.status == 200) {
            _this3.$store.dispatch('clear_current_user');

            _this3.$router.push({
              path: "/"
            });
          } else {
            _this3.toastError(res.data);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/register/register.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/register/register.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=98047358& */ "./resources/js/components/register/register.vue?vue&type=template&id=98047358&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/register/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/register/register.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/register/register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/register/register.vue?vue&type=template&id=98047358&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/register/register.vue?vue&type=template&id=98047358& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=98047358& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  staticClass: "ma-0 pa-0",
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
                              ? "height:30vh;"
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
                            ? "ma-0 pa-5"
                            : "ma-0 pa-0",
                          attrs: { cols: "12", md: "8" }
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
                                  attrs: { cols: "12", md: "8", sm: "10" }
                                },
                                [
                                  _c("vue-element-loading", {
                                    attrs: {
                                      active: _vm.isRegistering,
                                      spinner: "bar-fade-scale"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "RegisterForm",
                                          staticClass: "text-center ",
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
                                                    "ma-0 pa-0 text-left mt-5",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "h1",
                                                    {
                                                      staticClass:
                                                        " display-1 font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v("Sign Up "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-regular"
                                                        },
                                                        [_vm._v("Now")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    { staticClass: "mt-2" },
                                                    [
                                                      _vm._v(
                                                        "Login Your Account "
                                                      ),
                                                      _c(
                                                        "router-link",
                                                        {
                                                          staticClass:
                                                            "blue--text",
                                                          attrs: {
                                                            to: {
                                                              name: "login"
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Click here")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 mt-2 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      rules: _vm.nameRules,
                                                      label: "First Name",
                                                      name: "firstName",
                                                      type: "text",
                                                      color: "primary"
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
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "middleName"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Middle Name",
                                                      rules: _vm.nameRules,
                                                      name: "middleName",
                                                      type: "text",
                                                      color: "primary"
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
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "lastName"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Last Name",
                                                      rules: _vm.nameRules,
                                                      name: "lastname",
                                                      type: "text",
                                                      color: "primary"
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
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "email"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Email",
                                                      name: "Email",
                                                      rules:
                                                        _vm.loginEmailRules,
                                                      type: "email",
                                                      color: "primary"
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
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "password"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "append-icon": _vm.show
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      id: "password",
                                                      label: "Password",
                                                      name: "password",
                                                      type: _vm.show
                                                        ? "text"
                                                        : "password",
                                                      color: "primary",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.rules.min
                                                      ],
                                                      counter: ""
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
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "append-icon": _vm.show1
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      id:
                                                        "passwordConfirmation",
                                                      label: "Confirm Password",
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
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mb-0 pb-0",
                                                    attrs: {
                                                      label: "Class Code",
                                                      rules: _vm.ClassCodeRules,
                                                      name: "lastname",
                                                      hint:
                                                        "Please provide a valid class code to be able to register",
                                                      type: "text",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.class_code,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "class_code",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.class_code"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "error--text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.invalid_classcode_message
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      items: _vm.role,
                                                      rules: _vm.RoleRules,
                                                      label: "Role"
                                                    },
                                                    model: {
                                                      value: _vm.form.role,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "role",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.role"
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
                                                    "ma-0 pa-0 text-left mt-2",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "mb-5",
                                                      attrs: {
                                                        loading:
                                                          _vm.isRegistering,
                                                        disabled: !_vm.valid,
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: _vm.validate
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { staticClass: "mr-3" },
                                                        [_vm._v("mdi-login")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                                            Sign Up\n                                                        "
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
                          ),
                          _vm._v(" "),
                          _c("v-container", {
                            staticClass: "pb-5 pl-5 pr-5",
                            attrs: { "ma-0": "", "pa-0": "" }
                          })
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