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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      role: ['Teacher', 'Student'],
      form: new Form({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: ""
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
        this.form.post('/api/registerUser').then(function () {
          console.log("Success");

          _this2.form.reset();

          _this2.valid = true;
        });
      }
    }
  }
}); // export default {
//   data: () => ({
//     valid: true,
//     role: ['Teacher', 'Student'],
//     form: new Form({
//           firstName:"",
//           middleName:"",
//           lastName:"",
//           email: "",
//           password: "",
//           password_confirmation: "",
//           role: "",
//           isSubmit:false
//       }),
//        nameRules: [
//         v => !!v || 'Field is required',
//         v => (v && v.length <= 20) || 'Name must be less than 20 characters',
//       ],
//       loginEmailRules: [
//       v => !!v || "Field is required",
//       v => /.+@.+\..+/.test(v) || "Email must be valid"
//       ],
//        RoleRules: [
//       v => !!v || "Field is required",
//       ],
//     show: false,
//     show1: false,
//     rules: {
//       required: value => !!value || "Field is required.",
//       min: v => (v && v.length >= 6) || "min 6 characters"
//     }
//   }),
//    computed: {
//     passwordMatch() {
//       return () => this.password === this.password_confirmation || "Password must match";
//     }
//   },
//   methods:{
//     Test(){
//       console.log(this.form);
//     },
//     validate() {
//       if (this.$refs.RegisterForm.validate()) {
//          this.isSubmit = true;
//           this.form.post('/api/registerUser')
//           .then(() => {
//                 console.log("Success");
//                 this.$refs.RegisterForm.reset()
//                 this.valid = true;
//                   this.isSubmit = false;
//             })
//       }
//     },
//   }
// };

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
        { staticClass: "fill-height", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8", md: "8" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-12" },
                    [
                      _c(
                        "v-window",
                        [
                          _c(
                            "v-window-item",
                            [
                              _c(
                                "v-row",
                                { staticClass: "fill-height" },
                                [
                                  _c("v-col", {
                                    staticClass: "primary",
                                    attrs: { cols: "12", md: "4" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "8" } },
                                    [
                                      _c(
                                        "v-card-text",
                                        { staticClass: "pt-10" },
                                        [
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                " display-1 primary--text "
                                            },
                                            [
                                              _vm._v("Sign Up "),
                                              _c("span", [_vm._v("Now")])
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
                                                  attrs: {
                                                    to: { name: "login" }
                                                  }
                                                },
                                                [_vm._v("Click here")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-form",
                                            {
                                              ref: "RegisterForm",
                                              staticClass:
                                                "text-center mt-12 pl-1 pr-5",
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
                                                  expression: "form.firstName"
                                                }
                                              }),
                                              _vm._v(" "),
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
                                                  value: _vm.form.middleName,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.form,
                                                      "middleName",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "form.middleName"
                                                }
                                              }),
                                              _vm._v(" "),
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
                                                  expression: "form.lastName"
                                                }
                                              }),
                                              _vm._v(" "),
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
                                                  rules: _vm.loginEmailRules,
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
                                              }),
                                              _vm._v(" "),
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
                                                  expression: "form.password"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  "append-icon": _vm.show1
                                                    ? "mdi-eye"
                                                    : "mdi-eye-off",
                                                  id: "passwordConfirmation",
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
                                              }),
                                              _vm._v(" "),
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
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-container",
                                        {
                                          staticClass: "pb-5 pl-5 pr-5",
                                          attrs: { "ma-0": "", "pa-0": "" }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mb-5",
                                              attrs: {
                                                disabled: !_vm.valid,
                                                color: "primary"
                                              },
                                              on: { click: _vm.validate }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { staticClass: "mr-3" },
                                                [_vm._v("mdi-login")]
                                              ),
                                              _vm._v(
                                                "\n                              Sign Up\n                              "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-container",
                                            {
                                              staticClass: "mt-2",
                                              attrs: { "ma-0": "", "pa-0": "" }
                                            },
                                            [
                                              _c("h3", [
                                                _vm._v(
                                                  "Sign Up with Social media"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "mb-3 mt-1 mr-5 white--text",
                                                  attrs: { color: "blue" }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { staticClass: "mr-3" },
                                                    [_vm._v("mdi-facebook")]
                                                  ),
                                                  _vm._v(
<<<<<<< HEAD
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.$vuetify.breakpoint
                                                          .xs
                                                          ? ""
                                                          : "Facebook"
                                                      ) +
                                                      "\n                                  "
=======
                                                    "\n                                                Facebook\n                                            "
>>>>>>> b0d83189871837b9f0cf60f15b4133ea78cddf84
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "mb-3 mt-1 white--text",
                                                  attrs: {
                                                    color: "red darken-1"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { staticClass: "mr-3" },
                                                    [_vm._v("mdi-google-plus")]
                                                  ),
                                                  _vm._v(
<<<<<<< HEAD
                                                    "\n                                   " +
                                                      _vm._s(
                                                        _vm.$vuetify.breakpoint
                                                          .xs
                                                          ? ""
                                                          : " Google Plus"
                                                      ) +
                                                      "\n                                  "
=======
                                                    "\n                                                Google Plus\n                                            "
>>>>>>> b0d83189871837b9f0cf60f15b4133ea78cddf84
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