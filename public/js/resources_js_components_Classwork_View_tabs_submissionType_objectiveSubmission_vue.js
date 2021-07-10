(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
var resetConfirmation = function resetConfirmation() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/resetConfirmation */ "./resources/js/components/Classwork_View/tabs/dialogs/resetConfirmation.vue"));
};

var checkobjective = function checkobjective() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./check-submission/check-objective */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["ListData", "classworkDetails"],
  components: {
    checkobjective: checkobjective,
    resetConfirmation: resetConfirmation
  },
  data: function data() {
    return {
      isloading: true,
      selectedTasks: [],
      search: '',
      headers: [{
        text: 'Name',
        value: 'name'
      }, {
        text: 'Status',
        value: 'status',
        align: 'center'
      }, {
        text: 'Points',
        value: 'points'
      }, {
        text: 'Actions',
        sortable: false
      }],
      dialog: false,
      Viewdialog: false,
      ResetDialog: false,
      ViewDetails: null,
      resetId: null,
      resetName: null,
      resetIndex: null,
      Details: [],
      Reload: true
    };
  },
  methods: {
    ViewSubmision: function ViewSubmision(data) {
      if (data.status == 'Submitted') {
        this.dialog = !this.dialog;
        this.Viewdialog = !this.Viewdialog;
        this.ViewDetails = data;
      }
    },
    ResetSubmission: function ResetSubmission() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(this.ListData[this.resetIndex].points)
                axios.put('/api/teacher/reset-obj/' + _this.resetId).then(function (res) {
                  if (res.status == 200) {
                    _this.dialog = !_this.dialog;
                    _this.ResetDialog = !_this.ResetDialog;
                    _this.Details[_this.resetIndex].status == '';
                    _this.Details[_this.resetIndex].points == 0;
                    console.log(_this.Details[_this.resetIndex].status);
                  }
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
    this.Details = this.ListData;
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectiveSubmission.vue?vue&type=template&id=2efc65f8& */ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8&");
/* harmony import */ var _objectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectiveSubmission.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _objectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./objectiveSubmission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmission_vue_vue_type_template_id_2efc65f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./objectiveSubmission.vue?vue&type=template&id=2efc65f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=template&id=2efc65f8& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.dialog
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
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
                  _c("checkobjective", {
                    attrs: {
                      classworkDetails: _vm.classworkDetails,
                      ViewDetails: _vm.ViewDetails
                    },
                    on: {
                      UpdateSubmission: function($event) {
                        return _vm.$emit("UpdateSubmission")
                      },
                      closeDialog: function($event) {
                        ;(_vm.dialog = !_vm.dialog),
                          (_vm.Viewdialog = !_vm.Viewdialog)
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "400" },
                  model: {
                    value: _vm.ResetDialog,
                    callback: function($$v) {
                      _vm.ResetDialog = $$v
                    },
                    expression: "ResetDialog"
                  }
                },
                [
                  _vm.ResetDialog
                    ? _c("resetConfirmation", {
                        attrs: { Name: _vm.resetName },
                        on: {
                          toggleCancelDialog: function($event) {
                            ;(_vm.dialog = !_vm.dialog),
                              (_vm.ResetDialog = !_vm.ResetDialog)
                          },
                          toggleconfirm: function($event) {
                            return _vm.ResetSubmission()
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "elevation-5",
          staticStyle: { "border-top": "4px solid #EF6C00" }
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
                          staticClass: "pt-3",
                          attrs: { cols: "12", md: "12" }
                        },
                        [
                          _c(
                            "v-card-title",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "mdi-magnify",
                                  label: "Search",
                                  "single-line": "",
                                  outlined: "",
                                  "hide-details": ""
                                },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.Reload
                            ? _c("v-data-table", {
                                attrs: {
                                  headers: _vm.headers,
                                  "items-per-page": 10,
                                  search: _vm.search,
                                  items: _vm.Details,
                                  "item-key": "id",
                                  "show-select": ""
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "body",
                                      fn: function(ref) {
                                        var items = ref.items
                                        return [
                                          _c(
                                            "tbody",
                                            _vm._l(items, function(
                                              item,
                                              index
                                            ) {
                                              return _c(
                                                "tr",
                                                { key: item.id },
                                                [
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("v-checkbox", {
                                                        staticStyle: {
                                                          margin: "0px",
                                                          padding: "0px"
                                                        },
                                                        attrs: {
                                                          value: item,
                                                          "hide-details": ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.selectedTasks,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.selectedTasks = $$v
                                                          },
                                                          expression:
                                                            "selectedTasks"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(_vm._s(item.name))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      item.status != null &&
                                                      item.status != ""
                                                        ? _c(
                                                            "v-chip",
                                                            {
                                                              attrs: {
                                                                color:
                                                                  item.status ==
                                                                  "Submitted"
                                                                    ? "success"
                                                                    : "info",
                                                                dark: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.status
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.points == null
                                                              ? "N/A"
                                                              : item.points
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    item.points != null
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              " / " +
                                                                _vm
                                                                  .classworkDetails
                                                                  .points
                                                            )
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { top: "" },
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
                                                                              text:
                                                                                "",
                                                                              icon:
                                                                                ""
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
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-pencil-box-multiple-outline"
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
                                                            _vm._v("Edit")
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { top: "" },
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
                                                                              text:
                                                                                "",
                                                                              icon:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.ViewSubmision(
                                                                                  item
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
                                                                                "primary"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-file-eye-outline"
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
                                                              "View Submission"
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      item.status ==
                                                        "Submitted" ||
                                                      item.status == "Taking"
                                                        ? _c(
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
                                                                                  text:
                                                                                    "",
                                                                                  icon:
                                                                                    ""
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    ;(_vm.resetIndex = index),
                                                                                      (_vm.resetName =
                                                                                        item.name),
                                                                                      (_vm.resetId =
                                                                                        item.id),
                                                                                      (_vm.dialog = !_vm.dialog),
                                                                                      (_vm.ResetDialog = !_vm.ResetDialog)
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
                                                                                    "primary"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-restart"
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
                                                                  "Reset Submission"
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  1952139604
                                ),
                                model: {
                                  value: _vm.selectedTasks,
                                  callback: function($$v) {
                                    _vm.selectedTasks = $$v
                                  },
                                  expression: "selectedTasks"
                                }
                              })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);