(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['CheckData', 'classworkDetails'],
  data: function data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      Details: null,
      timeout: null,
      value: '',
      score: ''
    };
  },
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).format('MM/d/YYYY, hh:mm A');
      }
    },
    DownloadFile: function DownloadFile(link) {
      window.location = "/storage/" + link;
    },
    SaveScore: function SaveScore() {
      clearTimeout(this.timeout);
      var self = this;
      this.timeout = setTimeout(function () {
        self.score = self.CheckData.points;
        self.UpdateScore();
      }, 1000);
    },
    UpdateScore: function UpdateScore() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.score <= 50) {
                  axios.put('/api/submission/update-score/' + _this.CheckData.id, {
                    score: _this.score
                  }).then(function (res) {
                    if (res.status == 200) {
                      _this.toastSuccess();

                      _this.$emit('UpdateSubmission');
                    }
                  });
                } else {
                  _this.toastError();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Score Updated", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    toastError: function toastError() {
      return this.$toasted.error("Score is higher than the set points", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "error",
        duration: 3000
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=template&id=2cc7d58e& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&");
/* harmony import */ var _check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__.render,
  _check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=template&id=2cc7d58e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-toolbar",
        { attrs: { dark: "", color: "primary" } },
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "", dark: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("closeDialog")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pa-5" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8", lg: "8", xl: "8" } },
                [
                  _c("div", { staticClass: "d-flex justify-space-between" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex" },
                      [
                        _c(
                          "v-avatar",
                          { attrs: { color: "brown", size: "60" } },
                          [
                            _c("v-img", {
                              attrs: {
                                alt: "Profile",
                                src:
                                  _vm.CheckData.profile_pic == null ||
                                  _vm.CheckData.profile_pic == ""
                                    ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                      _vm.CheckData.name
                                    : _vm.CheckData.profile_pic
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "h3",
                            {
                              staticClass:
                                "font-weight-medium ml-2 mt-1 mb-0 pb-0",
                              staticStyle: { "line-height": "1.0" }
                            },
                            [_vm._v(_vm._s(_vm.CheckData.name))]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "ml-2 caption" }, [
                            _vm._v(
                              "Submitted: " +
                                _vm._s(
                                  _vm.format_date(_vm.CheckData.updated_at)
                                )
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("v-text-field", {
                          staticClass: "mt-3 float-right",
                          style: _vm.$vuetify.breakpoint.xs
                            ? "width:40%"
                            : "width:30%",
                          attrs: { dense: "", outlined: "", label: "Score" },
                          on: {
                            keyup: function($event) {
                              return _vm.SaveScore()
                            }
                          },
                          model: {
                            value: _vm.CheckData.points,
                            callback: function($$v) {
                              _vm.$set(_vm.CheckData, "points", $$v)
                            },
                            expression: "CheckData.points"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "12" } }, [
                        _c("h2", [_vm._v(_vm._s(_vm.classworkDetails.title))]),
                        _vm._v("\n                      ("),
                        _c("span", { staticClass: "primary--text" }, [
                          _vm._v(_vm._s(_vm.classworkDetails.points) + " "),
                          _c("small", [_vm._v("points")])
                        ]),
                        _vm._v(")\n                  ")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.CheckData.Submitted_Answers, function(
                        item,
                        index
                      ) {
                        return _c(
                          "v-col",
                          {
                            key: index,
                            staticClass: "ma-0 pa-0 ",
                            attrs: { cols: "12", md: "8", lg: "8", xl: "8" }
                          },
                          [
                            _c("div", { staticClass: "d-flex" }, [
                              _c("div", { staticClass: "body-1 pr-2 mt-2" }, [
                                _vm._v(
                                  "\n                             " +
                                    _vm._s(index + 1) +
                                    ".\n                         "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { width: "100%" } },
                                [
                                  _c("v-hover", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var hover = ref.hover
                                            return [
                                              _c(
                                                "v-alert",
                                                {
                                                  staticClass: "mb-2 pa-3",
                                                  class: hover
                                                    ? "grey lighten-2"
                                                    : "",
                                                  staticStyle: {
                                                    cursor: "pointer"
                                                  },
                                                  attrs: {
                                                    outlined: "",
                                                    icon:
                                                      item.fileExte == "pdf"
                                                        ? "mdi-file-pdf"
                                                        : item.fileExte ==
                                                          "docx"
                                                        ? "mdi-file-word"
                                                        : item.fileExte ==
                                                            "jpg" ||
                                                          item.fileExte ==
                                                            "png" ||
                                                          item.fileExte == "bmp"
                                                        ? "mdi-folder-multiple-image"
                                                        : "",
                                                    color:
                                                      item.fileExte == "pdf"
                                                        ? "red"
                                                        : item.fileExte ==
                                                          "docx"
                                                        ? "blue"
                                                        : item.fileExte ==
                                                            "jpg" ||
                                                          item.fileExte ==
                                                            "png" ||
                                                          item.fileExte == "bmp"
                                                        ? "info"
                                                        : ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-row",
                                                    {
                                                      attrs: { align: "center" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "grow text-left"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              class: hover
                                                                ? "text-decoration-underline"
                                                                : ""
                                                            },
                                                            [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    item.name
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "shrink d-flex"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "black--text mt-1 mr-1"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.fileSize
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "pt-1"
                                                            },
                                                            [
                                                              _c(
                                                                "v-tooltip",
                                                                {
                                                                  attrs: {
                                                                    top: ""
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "activator",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var on =
                                                                            ref.on
                                                                          var attrs =
                                                                            ref.attrs
                                                                          return [
                                                                            _c(
                                                                              "v-btn",
                                                                              _vm._g(
                                                                                _vm._b(
                                                                                  {
                                                                                    attrs: {
                                                                                      rounded:
                                                                                        "",
                                                                                      small:
                                                                                        "",
                                                                                      icon:
                                                                                        "",
                                                                                      text:
                                                                                        ""
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        return _vm.DownloadFile(
                                                                                          item.link
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
                                                                                _c(
                                                                                  "v-icon",
                                                                                  {
                                                                                    attrs: {
                                                                                      color:
                                                                                        "blue"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "mdi-download-circle-outline"
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  )
                                                                },
                                                                [
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      "Download"
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
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              )
                            ])
                          ]
                        )
                      })
                    ],
                    2
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