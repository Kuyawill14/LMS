(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_StudentPage_resultPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var submittedView = function submittedView() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./viewSubmittedPage */ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    submittedView: submittedView
  },
  data: function data() {
    return {
      details: [],
      isloading: true,
      testUnser: [],
      Viewdialog: false,
      ViewDetails: null
    };
  },
  methods: {
    GetScoreDetails: function GetScoreDetails() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/student/check-status/' + _this.$route.params.id).then(function (res) {
                  _this.details = res.data;
                  _this.isloading = false;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.GetScoreDetails();
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/resultPage.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/resultPage.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultPage.vue?vue&type=template&id=0c1fb62a& */ "./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a&");
/* harmony import */ var _resultPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resultPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _resultPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__.render,
  _resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/StudentPage/resultPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resultPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resultPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resultPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resultPage_vue_vue_type_template_id_0c1fb62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resultPage.vue?vue&type=template&id=0c1fb62a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/resultPage.vue?vue&type=template&id=0c1fb62a& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.Viewdialog,
                callback: function($$v) {
                  _vm.Viewdialog = $$v
                },
                expression: "Viewdialog"
              }
            },
            [
              _c("submittedView", {
                attrs: { details: _vm.details },
                on: {
                  UpdateSubmission: function($event) {
                    return _vm.$emit("UpdateSubmission")
                  },
                  closeDialog: function($event) {
                    _vm.Viewdialog = !_vm.Viewdialog
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.isloading
            ? _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  staticStyle: { height: "30vh" },
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          w: "",
                          color: "primary",
                          indeterminate: "",
                          rounded: "",
                          height: "6"
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
          !_vm.isloading
            ? _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-3",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        [
                          _c(
                            "v-window",
                            [
                              _c(
                                "v-window-item",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pl-5 pr-9 pt-5",
                                          attrs: { cols: "12", md: "12" }
                                        },
                                        [
                                          _c(
                                            "v-tooltip",
                                            {
                                              attrs: { top: "" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                attrs: {
                                                                  icon: "",
                                                                  rounded: ""
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$router.push(
                                                                      {
                                                                        name:
                                                                          "classwork",
                                                                        params: {
                                                                          id:
                                                                            _vm
                                                                              .details
                                                                              .course_id
                                                                        }
                                                                      }
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              "v-btn",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          ),
                                                          [
                                                            _c("v-icon", [
                                                              _vm._v(
                                                                "mdi-arrow-left"
                                                              )
                                                            ])
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                1675981583
                                              )
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v("Back to classworks")
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("v-row", {
                                            staticStyle: { height: "8vh" }
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
                                                    "v-container",
                                                    {
                                                      staticClass:
                                                        "d-flex flex-row justify-space-between",
                                                      attrs: {
                                                        "ma-0": "",
                                                        "pa-0": ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "d-flex"
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "mx-1",
                                                              attrs: {
                                                                fab: "",
                                                                dark: "",
                                                                color: "primary"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    large: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                    mdi-book-open-variant\r\n                                                    "
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
                                                                "mt-3 ml-2"
                                                            },
                                                            [
                                                              _c("h3", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.details
                                                                      .title
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        ],
                                                        1
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
                                                  staticClass: "ml-3 d-flex",
                                                  attrs: { cols: "12" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "display-2 primary--text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                            Score:\r\n                                        "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "ml-5" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          class:
                                                            _vm.details.score >=
                                                            _vm.details
                                                              .totalPoints
                                                              ? "display-2"
                                                              : "display-1"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                                " +
                                                              _vm._s(
                                                                _vm.details
                                                                  .score
                                                              ) +
                                                              "\r\n                                            "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold display-2"
                                                        },
                                                        [_vm._v("/")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          class:
                                                            _vm.details.score >=
                                                            _vm.details
                                                              .totalPoints
                                                              ? "display-1"
                                                              : "display-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                                " +
                                                              _vm._s(
                                                                _vm.details
                                                                  .totalPoints
                                                              ) +
                                                              "\r\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  _c("v-row", {
                                                    staticStyle: {
                                                      height: "5vh"
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
                                                    "text-right mt-4",
                                                  attrs: { cols: "12" }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        rounded: "",
                                                        text: "",
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.Viewdialog = !_vm.Viewdialog
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                            View Submission\r\n                                        "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        rounded: "",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.Viewdialog = !_vm.Viewdialog
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                            CLose\r\n                                        "
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