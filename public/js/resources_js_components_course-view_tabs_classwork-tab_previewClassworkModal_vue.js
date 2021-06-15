(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_previewClassworkModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['Preview_id'],
  data: function data() {
    return {
      isloading: true,
      totalPoints: null,
      totalQuestion: null,
      Details: {}
    };
  },
  methods: {
    getClassworkDetails: function getClassworkDetails() {
      var _this = this;

      axios.get('/api/classwork/showDetails/' + this.Preview_id).then(function (res) {
        _this.Details = res.data.Details[0];
        _this.isloading = !_this.isloading;
        _this.totalPoints = res.data.totalpoints;
        _this.totalQuestion = res.data.ItemsCount;
      });
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).format('dddd, h:mm a');
      }
    },
    DownLoadFile: function DownLoadFile(file) {
      window.location = "/storage/" + file;
    }
  },
  beforeMount: function beforeMount() {
    this.getClassworkDetails(); //this.Details = this.Preview_Details;
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewClassworkModal.vue?vue&type=template&id=aa3ba700& */ "./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700&");
/* harmony import */ var _previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewClassworkModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__.render,
  _previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewClassworkModal_vue_vue_type_template_id_aa3ba700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewClassworkModal.vue?vue&type=template&id=aa3ba700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/previewClassworkModal.vue?vue&type=template&id=aa3ba700& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card",
        { staticStyle: { "border-top": "3px solid #EF6C00" } },
        [
          _c(
            "v-card-title",
            { staticClass: "ma-0 pa-0 float-right mr-3 mt-2" },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("toggleCloseDialog")
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-window-close")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "mt-12 ml-0 pl-0 pl-2" },
            [
              _c("v-row", { staticStyle: { height: "2vh" } }),
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
                              height: "4"
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
                    [
                      _vm.Details.type != "Subjective Type"
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-container",
                                {
                                  staticClass:
                                    "d-flex flex-row justify-space-between",
                                  attrs: { "ma-0": "", "pa-0": "" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-2 mt-2",
                                      attrs: {
                                        fab: "",
                                        dark: "",
                                        color: "primary"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { "x-large": "" } },
                                        [
                                          _vm._v(
                                            "\r\n                        mdi-book-open-variant\r\n                        "
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
                                      staticClass: "float-right mt-3",
                                      attrs: { fab: "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-md-h5 font-weight-medium"
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                large: "",
                                                color: "primary"
                                              }
                                            },
                                            [_vm._v("mdi-book-clock-outline")]
                                          ),
                                          _vm._v(
                                            " " +
                                              _vm._s(_vm.Details.duration) +
                                              " mins"
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "caption ml-2 font-weight-medium"
                                        },
                                        [
                                          _vm._v(
                                            "Due " +
                                              _vm._s(
                                                _vm.format_date(
                                                  _vm.Details.due_date
                                                )
                                              )
                                          )
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pl-7 pr-5", attrs: { cols: "12" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-sm-body-2 text-md-h5 text-xl-h3 font-weight-medium"
                            },
                            [_vm._v(_vm._s(_vm.Details.title))]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2 d-flex flex-row " }, [
                            _vm.Details.type == "Objective Type"
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "captions font-weight-medium"
                                  },
                                  [
                                    _c("v-icon", [_vm._v("mdi-circle-medium")]),
                                    _vm._v(
                                      _vm._s(_vm.totalQuestion) + " Question"
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "captions font-weight-medium" },
                              [
                                _c("v-icon", [_vm._v("mdi-circle-medium")]),
                                _vm._v(
                                  _vm._s(
                                    _vm.Details.type == "Objective Type"
                                      ? _vm.totalPoints
                                      : _vm.Details.points
                                  ) + " Points"
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pl-8 pr-5 ", attrs: { cols: "12" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "text-sm-body-2 font-weight-regular"
                            },
                            [_vm._v(" " + _vm._s(_vm.Details.instruction))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.Details.type == "Subjective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pl-5 pr-5 pb-2",
                              attrs: { cols: "8" }
                            },
                            [
                              _vm.Details.type == "Subjective Type"
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass:
                                        "text-sm-body-2 font-weight-regular blue--text",
                                      attrs: { text: "", "x-large": "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.DownLoadFile(
                                            _vm.Details.attachment
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [_vm._v("mdi-file-word")]),
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.Details.attachment_name)
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pl-10 pr-5 pb-5 text-right",
                          attrs: { cols: "12" }
                        },
                        [
                          _vm.Details.type == "Objective Type"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    rounded: "",
                                    color: "primary",
                                    dark: _vm.totalQuestion != 0,
                                    disabled: _vm.totalQuestion == 0
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push({
                                        name: "clwk",
                                        params: { id: _vm.$route.params.id },
                                        query: { clwk: _vm.Preview_id }
                                      })
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                            Take Quiz"
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("mdi-book-arrow-right-outline")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.Details.type == "Subjective Type"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    rounded: "",
                                    color: "primary",
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push({
                                        name: "clwk",
                                        params: { id: _vm.$route.params.id },
                                        query: { clwk: _vm.Preview_id }
                                      })
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                            Submit Work"
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("mdi-book-arrow-right-outline")]
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
                : _vm._e(),
              _vm._v(" "),
              _c("v-row", { staticStyle: { height: "2vh" } })
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