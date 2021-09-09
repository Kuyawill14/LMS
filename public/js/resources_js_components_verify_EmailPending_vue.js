"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_verify_EmailPending_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var resendAndChangeEmail = function resendAndChangeEmail() {
  return __webpack_require__.e(/*! import() | verify-email */ "verify-email").then(__webpack_require__.bind(__webpack_require__, /*! ./ResendAndChangeEmail */ "./resources/js/components/verify/ResendAndChangeEmail.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    resendAndChangeEmail: resendAndChangeEmail
  },
  data: function data() {
    return {
      isResending: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["get_CurrentUser"]),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["fetchCurrentUser"])),
  mounted: function mounted() {
    this.fetchCurrentUser();
  }
});

/***/ }),

/***/ "./resources/js/components/verify/EmailPending.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/verify/EmailPending.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailPending.vue?vue&type=template&id=f409e454& */ "./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454&");
/* harmony import */ var _EmailPending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailPending.vue?vue&type=script&lang=js& */ "./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmailPending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/verify/EmailPending.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailPending.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPending_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailPending_vue_vue_type_template_id_f409e454___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailPending.vue?vue&type=template&id=f409e454& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/verify/EmailPending.vue?vue&type=template&id=f409e454& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                          attrs: { cols: "12", md: "8" }
                        },
                        [
                          _c(
                            "v-container",
                            {
                              staticClass: "d-flex align-start",
                              attrs: { "ma-0": "", "pa-0": "", fluid: "" }
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
                                                  !_vm.isResending
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "text-center",
                                                          attrs: {
                                                            cols: "12",
                                                            md: "8",
                                                            xl: "5",
                                                            lg: "5"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-avatar",
                                                            {
                                                              attrs: {
                                                                size: "100",
                                                                color: "primary"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  staticStyle: {
                                                                    "font-size":
                                                                      "3.5rem"
                                                                  },
                                                                  attrs: {
                                                                    color:
                                                                      "white"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            mdi-email\n                                                        "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-h5"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Verification Pending"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              "We've sent and email to "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm
                                                                      .get_CurrentUser
                                                                      .email
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(
                                                              " \n                                                        to verify your email address and active your account. If you cannot find the mail, please also check the Junk/Spam folder.\n                                                    "
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "pl-5 pr-5"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.preventDefault()
                                                                      _vm.isResending = true
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    " Click here "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(
                                                                "\n                                                      if you did not receive an email or would like to change the email address you signup up with.\n                                                    "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.isResending
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "text-center",
                                                          attrs: {
                                                            cols: "12",
                                                            md: "8",
                                                            xl: "5",
                                                            lg: "5"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-avatar",
                                                            {
                                                              attrs: {
                                                                size: "100",
                                                                color: "primary"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  staticStyle: {
                                                                    "font-size":
                                                                      "3.5rem"
                                                                  },
                                                                  attrs: {
                                                                    color:
                                                                      "white"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            mdi-email\n                                                        "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-h5"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Resend Verification"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "resendAndChangeEmail",
                                                            {
                                                              attrs: {
                                                                get_CurrentUser:
                                                                  _vm.get_CurrentUser
                                                              }
                                                            }
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