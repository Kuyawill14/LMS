"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forgot_password"],{

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



/***/ })

}]);