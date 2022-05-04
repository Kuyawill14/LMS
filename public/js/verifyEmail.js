"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["verifyEmail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["verifyEmail"])),
  mounted: function mounted() {
    var _this = this;

    /*  this.$store.dispatch('verifyEmail', this.$route.query)
     .then((res)=>{
         console.log(res);
     })
     .catch((e)=>{
      }) */

    /*  this.verifyEmail(this.$route.query).then((response) => {
         
         if(response.data.success == false){
             this.toastError(response.data.message);
         }
     });  */
    axios.get('/api/email-verification', {
      params: this.$route.query
    }).then(function (response) {
      if (response.data.success == false) {
        _this.toastError(response.data.message);

        if (response.data.type == 'already_verified') {
          _this.$router.push({
            name: 'login'
          });
        }
      }
    })["catch"](function (e) {});
  }
});

/***/ }),

/***/ "./resources/js/components/verify/verifyEmail.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/verify/verifyEmail.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyEmail.vue?vue&type=template&id=5c799d18& */ "./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18&");
/* harmony import */ var _verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__.render,
  _verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/verify/verifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verifyEmail_vue_vue_type_template_id_5c799d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./verifyEmail.vue?vue&type=template&id=5c799d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/verifyEmail.vue?vue&type=template&id=5c799d18& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                            ? "ma-0 pa-3"
                            : "ma-0 pa-0",
                          attrs: { cols: "12", md: "5" }
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
                                    md: "12",
                                    lg: "12",
                                    sm: "7"
                                  }
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
                                                            "text-center",
                                                          attrs: {
                                                            cols: "12",
                                                            md: "7",
                                                            xl: "8",
                                                            lg: "8"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "4rem"
                                                              },
                                                              attrs: {
                                                                "x-large": "",
                                                                color: "success"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                                    mdi-email-check\r\n                                                "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-h5 mt-1"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Email verified"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "mb-0 pb-0"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Your have successfully verified your email!"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              "You can now click Ok and Login to ISUE-ORANGE on your computer or mobile device."
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "primary pl-10 pr-10",
                                                              attrs: {
                                                                rounded: ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$router.push(
                                                                    {
                                                                      name:
                                                                        "login"
                                                                    }
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Ok")]
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