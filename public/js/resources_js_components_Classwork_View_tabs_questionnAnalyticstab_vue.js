(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_questionnAnalyticstab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
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
      List: [],
      search: '',
      selectedTasks: [],
      isloading: true,
      headers: [{
        text: 'id',
        align: 'start',
        value: 'id',
        icon: ''
      }, {
        text: 'Question',
        value: 'question',
        icon: ''
      }, {
        text: '# of Correct',
        value: 'status',
        align: 'center',
        icon: 'mdi-account-multiple-check'
      }, {
        text: '# of Wrong',
        value: 'points',
        icon: 'mdi-account-multiple-remove'
      }, {
        text: 'Average Time Consume',
        value: 'time',
        icon: 'mdi-timer'
      }, {
        text: 'Actions',
        sortable: false,
        icon: 'mdi-cog'
      }]
    };
  },
  methods: {
    GetList: function GetList() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/QAnalytics/all/' + _this.$route.query.clwk).then(function (res) {
                  _this.List = res.data;
                  _this.isloading = !_this.isloading;
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
  mounted: function mounted() {
    this.GetList();
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true& */ "./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true&");
/* harmony import */ var _questionnAnalyticstab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionnAnalyticstab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _questionnAnalyticstab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5e081adf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionnAnalyticstab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./questionnAnalyticstab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionnAnalyticstab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionnAnalyticstab_vue_vue_type_template_id_5e081adf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionnAnalyticstab.vue?vue&type=template&id=5e081adf&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.isloading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "500px" } },
            [
              _c(
                "v-row",
                { attrs: { "align-content": "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "text-subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [_vm._v("\r\n            Loading\r\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-progress-linear", {
                        attrs: {
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
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isloading
        ? _c(
            "v-container",
            {
              staticClass: "pa-0 pa-0",
              attrs: { "pa-0": "", "ma-0": "", fluid: "" }
            },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "10", xl: "6", md: "10" } },
                    [
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
                                          _c("v-data-table", {
                                            attrs: {
                                              headers: _vm.headers,
                                              "hide-default-header": "",
                                              items: _vm.List,
                                              search: _vm.search,
                                              "item-key": "id",
                                              "show-select": ""
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "header",
                                                  fn: function(ref) {
                                                    var headers =
                                                      ref.props.headers
                                                    return [
                                                      _c("thead", [
                                                        _c(
                                                          "tr",
                                                          _vm._l(
                                                            headers,
                                                            function(header) {
                                                              return _c(
                                                                "th",
                                                                {
                                                                  key:
                                                                    header.value,
                                                                  staticClass:
                                                                    "text-uppercase"
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        header.icon
                                                                      )
                                                                    )
                                                                  ]),
                                                                  _vm._v(
                                                                    " \r\n                                                         " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs
                                                                          ? ""
                                                                          : header.text
                                                                      ) +
                                                                      "\r\n                                                    "
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ])
                                                    ]
                                                  }
                                                },
                                                {
                                                  key: "body",
                                                  fn: function(ref) {
                                                    var items = ref.items
                                                    return [
                                                      _c(
                                                        "tbody",
                                                        _vm._l(items, function(
                                                          item
                                                        ) {
                                                          return _c(
                                                            "tr",
                                                            { key: item.id },
                                                            [
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c(
                                                                    "v-checkbox",
                                                                    {
                                                                      staticStyle: {
                                                                        margin:
                                                                          "0px",
                                                                        padding:
                                                                          "0px"
                                                                      },
                                                                      attrs: {
                                                                        value: item,
                                                                        "hide-details":
                                                                          ""
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
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.id
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-left "
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "caption",
                                                                      style: _vm
                                                                        .$vuetify
                                                                        .breakpoint
                                                                        .xs
                                                                        ? "line-height:1.1"
                                                                        : "line-height:1.5"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "post-content",
                                                                          domProps: {
                                                                            innerHTML: _vm._s(
                                                                              item.question
                                                                            )
                                                                          }
                                                                        }
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.correct_count ==
                                                                        null
                                                                        ? 0
                                                                        : item.correct_count
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.wrong_count ==
                                                                        null
                                                                        ? 0
                                                                        : item.wrong_count
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "text-center"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.average_time !=
                                                                        null
                                                                        ? item.average_time /
                                                                            (item.correct_count +
                                                                              item.wrong_count)
                                                                        : ""
                                                                    ) +
                                                                      _vm._s(
                                                                        item.average_time ==
                                                                          null
                                                                          ? ""
                                                                          : "s"
                                                                      )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "Edit"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
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
                                                                                          "mdi-delete"
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "Delete"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
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
                                              662273298
                                            ),
                                            model: {
                                              value: _vm.selectedTasks,
                                              callback: function($$v) {
                                                _vm.selectedTasks = $$v
                                              },
                                              expression: "selectedTasks"
                                            }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);