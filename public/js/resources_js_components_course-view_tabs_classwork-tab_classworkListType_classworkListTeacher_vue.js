(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListTeacher_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
var deleteDialog = function deleteDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_classwork-tab_dialogs_deleteDiaglog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deleteDiaglog */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/deleteDiaglog.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworks'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      Removedialog: false,
      DeleteDetails: [],
      DateToday: '',
      ClassworkType: ['Objective Type', 'Subjective Type']
    };
  },
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).format('MMMM Do YYYY, hh:mm A');
      }
    },
    CheckFormatDue: function CheckFormatDue(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).format("YYYY-MM-DDTHH:mm:ss");
      }
    },
    RemoveCLasswork: function RemoveCLasswork(details) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.DeleteDetails = details;
                _this.Removedialog = !_this.Removedialog;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var newDate = new Date();
    this.DateToday = moment__WEBPACK_IMPORTED_MODULE_1___default()(newDate).format("YYYY-MM-DDTHH:mm:ss");
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classworkListTeacher.vue?vue&type=template&id=fba7d5f6& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6&");
/* harmony import */ var _classworkListTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classworkListTeacher.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _classworkListTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListTeacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListTeacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListTeacher_vue_vue_type_template_id_fba7d5f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListTeacher.vue?vue&type=template&id=fba7d5f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListTeacher.vue?vue&type=template&id=fba7d5f6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container pt-4" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.Removedialog,
            callback: function($$v) {
              _vm.Removedialog = $$v
            },
            expression: "Removedialog"
          }
        },
        [
          _vm.Removedialog
            ? _c("deleteDialog", {
                attrs: { DeleteDetails: _vm.DeleteDetails },
                on: {
                  toggleDialog: function($event) {
                    _vm.Removedialog = !_vm.Removedialog
                  },
                  ToggleRefresh: function($event) {
                    _vm.$emit("ToggleRefresh"),
                      (_vm.Removedialog = !_vm.Removedialog)
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("v-row", { staticClass: "pl-5 pr-5" }, [_c("v-divider")], 1),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.classworks, function(item, i) {
          return _c(
            "v-col",
            { key: i, staticClass: "mt-1 ml-0  mr-0", attrs: { cols: "12" } },
            [
              _c(
                "v-col",
                { staticClass: "ma-0 pa-0 mb-1", attrs: { cols: "12" } },
                [
                  _c("h2", { staticClass: "font-weight-regular" }, [
                    _vm._v(_vm._s(_vm.ClassworkType[i]))
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.classworks[i].length != 0
                ? _c(
                    "v-row",
                    {
                      staticClass: "pl-1 pr-1",
                      attrs: { "ma-0": "", "pa-0": "" }
                    },
                    _vm._l(_vm.classworks[i], function(item, index) {
                      return _c(
                        "v-col",
                        {
                          key: index,
                          attrs: { cols: "12", lg: "6", xl: "3", md: "6" }
                        },
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
                                        "v-card",
                                        {
                                          attrs: {
                                            elevation: "2",
                                            color: hover ? "grey lighten-4" : ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-container",
                                            {
                                              staticClass:
                                                "pl-3 pr-3 pt-5 pb-5 d-flex flex-row justify-space-between"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "d-flex flex-row"
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "pl-2 pr-3",
                                                      attrs: { large: "" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "mdi-book-open-variant"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("div", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "h1 ml-1",
                                                        attrs: {
                                                          "ma-0": "",
                                                          "pa-0": ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "font-weight-bold",
                                                            staticStyle: {
                                                              width: "250px",
                                                              overflow:
                                                                "hidden",
                                                              "white-space":
                                                                "nowrap",
                                                              "text-overflow":
                                                                "ellipsis"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                         " +
                                                                _vm._s(
                                                                  item.title
                                                                ) +
                                                                "\n                                          "
                                                            ),
                                                            item.type ==
                                                            "Subjective Type"
                                                              ? _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "primary--text font-weight-regular"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "(" +
                                                                        _vm._s(
                                                                          item.points
                                                                        ) +
                                                                        " points)"
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "card-subtitle text-50 mb-0 pb-0"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Created: " +
                                                              _vm._s(
                                                                _vm.format_date(
                                                                  item.created_at
                                                                )
                                                              )
                                                          ),
                                                          _c("br")
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "card-subtitle text-50 font-weight-medium"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Number of Student Submitted: " +
                                                              _vm._s(
                                                                item.submittion_count
                                                              )
                                                          )
                                                        ]
                                                      )
                                                    ])
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-menu",
                                                {
                                                  attrs: {
                                                    bottom: "",
                                                    "offset-y": ""
                                                  },
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
                                                                      icon: ""
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
                                                                    "mdi-dots-vertical"
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
                                                    true
                                                  )
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list",
                                                    {
                                                      attrs: {
                                                        "pa-0": "",
                                                        "ma-0": ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            "ma-0": "",
                                                            "pa-0": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
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
                                                                      return _vm.$router.push(
                                                                        {
                                                                          name:
                                                                            "clwk",
                                                                          params: {
                                                                            id:
                                                                              _vm
                                                                                .$route
                                                                                .params
                                                                                .id
                                                                          },
                                                                          query: {
                                                                            clwk:
                                                                              item.id
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-notebook-edit-outline"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Review Classwork"
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
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            "ma-0": "",
                                                            "pa-0": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
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
                                                                      return _vm.$router.push(
                                                                        {
                                                                          name:
                                                                            "publish-to",
                                                                          params: {
                                                                            id:
                                                                              _vm
                                                                                .$route
                                                                                .params
                                                                                .id
                                                                          },
                                                                          query: {
                                                                            clwk:
                                                                              item.id
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-file-upload-outline"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Publish Classwork"
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
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            "ma-0": "",
                                                            "pa-0": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
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
                                                                      return _vm.$router.push(
                                                                        {
                                                                          name:
                                                                            "submission-list",
                                                                          params: {
                                                                            id:
                                                                              _vm
                                                                                .$route
                                                                                .params
                                                                                .id
                                                                          },
                                                                          query: {
                                                                            clwk:
                                                                              item.id
                                                                          }
                                                                        }
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-file-eye-outline"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "View Submission"
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
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            "ma-0": "",
                                                            "pa-0": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
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
                                                                      return _vm.RemoveCLasswork(
                                                                        item
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-archive"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Archive Classwork"
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
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            "ma-0": "",
                                                            "pa-0": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
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
                                                                      return _vm.RemoveCLasswork(
                                                                        item
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      staticClass:
                                                                        "mr-1"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-delete-outline"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Remove Classwork"
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
                    }),
                    1
                  )
                : _vm._e()
            ],
            1
          )
        }),
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