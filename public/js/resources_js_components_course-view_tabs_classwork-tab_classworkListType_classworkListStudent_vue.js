"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var previewClassworkModal = function previewClassworkModal() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/previewClassworkModal */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworks'],
  components: {
    previewClassworkModal: previewClassworkModal
  },
  data: function data() {
    return {
      Previewdialog: false,
      Preview_id: null,
      DateToday: '',
      SelectedFilter: "All",
      FilterItems: [],
      ClassworkLength: null,
      isSearching: false,
      search: "",
      isLoading: false
    };
  },
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format('MMMM DD YYYY, hh:mm A');
      }
    },
    CheckFormatDue: function CheckFormatDue(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format("YYYY-MM-DDTHH:mm:ss");
      }
    },
    continueClasswork: function continueClasswork(classwork_id) {
      this.$router.push({
        name: 'quizstart',
        params: {
          id: this.$route.params.id
        },
        query: {
          clwk: classwork_id
        }
      });
    },
    OpenClaswork: function OpenClaswork(type, status, score, classwork_id) {
      this.isLoading = true;

      if (status == 'Submitted' && score != null) {
        if (type == 'Objective Type') {
          // this.$router.push({name:'result-page', params:{id: classwork_id}})
          this.$router.push({
            name: 'clwk',
            params: {
              id: this.$route.params.id
            },
            query: {
              clwk: classwork_id
            }
          });
        } else {
          this.$router.push({
            name: 'clwk',
            params: {
              id: this.$route.params.id
            },
            query: {
              clwk: classwork_id
            }
          });
        }
      } else if (status == 'Submitting' || status == null) {
        this.Previewdialog = !this.Previewdialog;
        this.Preview_id = classwork_id;
      }
    },
    setFilterItems: function setFilterItems() {
      for (var i = 0; i < this.classworks.ClassworkTitle.length + 1; i++) {
        if (i == 0) {
          this.FilterItems.push({
            title: 'All'
          });
        } else {
          this.FilterItems.push({
            title: this.classworks.ClassworkTitle[i - 1].title
          });
        }
      }
    },
    CheckClassworkCount: function CheckClassworkCount() {
      var _this = this;

      this.classworks.ClassworksList.forEach(function (element) {
        _this.ClassworkLength += element.length;
      });
    }
  },
  mounted: function mounted() {
    this.CheckClassworkCount();
    this.setFilterItems();
    var newDate = new Date();
    this.DateToday = (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(newDate).format("YYYY-MM-DDTHH:mm:ss");
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classworkListStudent.vue?vue&type=template&id=a8d81244& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&");
/* harmony import */ var _classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classworkListStudent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.render,
  _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListStudent.vue?vue&type=template&id=a8d81244& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.ClassworkLength == 0
        ? _c(
            "v-row",
            {
              staticClass: "pt-10",
              attrs: { align: "center", justify: "center" }
            },
            [
              _c(
                "v-col",
                {
                  staticClass: "text-center",
                  attrs: { cols: "12", sm: "8", md: "4" }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "10rem" } }, [
                    _vm._v(
                      "\r\n                    mdi-book-open-variant\r\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h1", [_vm._v(" Empty Classwork ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("No, Assign Classwork Yet!")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.ClassworkLength != 0
        ? _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _vm.Previewdialog
                ? _c(
                    "div",
                    [
                      _c(
                        "v-dialog",
                        {
                          attrs: { persistent: "", width: "650px" },
                          model: {
                            value: _vm.Previewdialog,
                            callback: function($$v) {
                              _vm.Previewdialog = $$v
                            },
                            expression: "Previewdialog"
                          }
                        },
                        [
                          _vm.Previewdialog
                            ? _c("previewClassworkModal", {
                                attrs: { Preview_id: _vm.Preview_id },
                                on: {
                                  OpenClasswork: function($event) {
                                    ;(_vm.Previewdialog = false),
                                      _vm.$router.push({
                                        name: "clwk",
                                        params: { id: _vm.$route.params.id },
                                        query: { clwk: _vm.Preview_id }
                                      })
                                  },
                                  isMounted: function($event) {
                                    _vm.isLoading = false
                                  },
                                  toggleCloseDialog: function($event) {
                                    _vm.Previewdialog = !_vm.Previewdialog
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
                "v-row",
                [
                  _c("v-col", { staticClass: "text-left mb-0 pb-0" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "text-lg-h5 font-weight-medium text-sm-h6 mt-1"
                      },
                      [_vm._v("Classworks")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "text-right mb-0 pb-0",
                      attrs: { cols: "6", md: "3", xl: "3", lg: "3" }
                    },
                    [
                      _c("v-select", {
                        staticClass: "ma-0 pa-0",
                        attrs: {
                          items: _vm.FilterItems,
                          "item-text": "title",
                          dense: "",
                          outlined: ""
                        },
                        model: {
                          value: _vm.SelectedFilter,
                          callback: function($$v) {
                            _vm.SelectedFilter = $$v
                          },
                          expression: "SelectedFilter"
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
                "v-row",
                {
                  staticClass: "mt-5",
                  attrs: { justify: "center", "align-content": "center" }
                },
                _vm._l(_vm.classworks.ClassworkTitle, function(data, i) {
                  return _c(
                    "v-col",
                    {
                      key: i,
                      staticClass: "mt-1 ml-0  mr-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _vm.classworks.ClassworksList[i].length != 0 &&
                      (_vm.SelectedFilter == "All" ||
                        _vm.SelectedFilter == data.title)
                        ? _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 ",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c(
                                    "h2",
                                    { staticClass: "font-weight-regular" },
                                    [
                                      _vm._v(_vm._s(data.title) + " "),
                                      _c(
                                        "small",
                                        { staticClass: "font-weight-medium" },
                                        [
                                          _vm._v(
                                            "(" + _vm._s(data.percent) + "%)"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.classworks.ClassworksList[i], function(
                                item,
                                index
                              ) {
                                return _c(
                                  "v-col",
                                  {
                                    key: index,
                                    staticClass: "pb-0 mb-0",
                                    attrs: { cols: "12", md: "4" }
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
                                                      outlined: "",
                                                      link: "",
                                                      elevation: hover ? 1 : 0
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.OpenClaswork(
                                                          item.type,
                                                          item.status,
                                                          item.score,
                                                          item.classwork_id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("vue-element-loading", {
                                                      attrs: {
                                                        active:
                                                          _vm.isLoading &&
                                                          _vm.Preview_id ==
                                                            item.classwork_id,
                                                        text: "Loading...",
                                                        spinner:
                                                          "bar-fade-scale"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-container",
                                                      {
                                                        staticClass:
                                                          "pl-4 pr-5 pt-5 pb-5 d-flex flex-row justify-space-between"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex flex-row"
                                                          },
                                                          [
                                                            _c(
                                                              "v-avatar",
                                                              {
                                                                attrs: {
                                                                  size: "40",
                                                                  color:
                                                                    item.availability ==
                                                                    0
                                                                      ? item.status ==
                                                                        "Submitted"
                                                                        ? "success"
                                                                        : "blue"
                                                                      : _vm.CheckFormatDue(
                                                                          item.to_date
                                                                        ) >
                                                                        _vm.DateToday
                                                                      ? item.status ==
                                                                        "Submitted"
                                                                        ? "success"
                                                                        : "blue"
                                                                      : item.status ==
                                                                        "Submitted"
                                                                      ? "success"
                                                                      : "red darken-4"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    staticClass:
                                                                      "pl-2 pr-2",
                                                                    attrs: {
                                                                      color:
                                                                        "white"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\r\n                                        " +
                                                                        _vm._s(
                                                                          item.status ==
                                                                            "Submitted"
                                                                            ? "mdi-check"
                                                                            : "mdi-book-open-variant"
                                                                        ) +
                                                                        "\r\n                                    "
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
                                                                  "pl-2"
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
                                                                                "div",
                                                                                _vm._g(
                                                                                  _vm._b(
                                                                                    {
                                                                                      staticClass:
                                                                                        "h1 ml-1",
                                                                                      style: _vm
                                                                                        .$vuetify
                                                                                        .breakpoint
                                                                                        .xs
                                                                                        ? "width:180px;overflow: hidden;white-space: nowrap;text-overflow;text-overflow: ellipsis;"
                                                                                        : "width: 220px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;",
                                                                                      attrs: {
                                                                                        "ma-0":
                                                                                          "",
                                                                                        "pa-0":
                                                                                          ""
                                                                                      }
                                                                                    },
                                                                                    "div",
                                                                                    attrs,
                                                                                    false
                                                                                  ),
                                                                                  on
                                                                                ),
                                                                                [
                                                                                  _c(
                                                                                    "span",
                                                                                    {
                                                                                      staticClass:
                                                                                        "font-weight-bold"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          item.title
                                                                                        ) +
                                                                                          " "
                                                                                      ),
                                                                                      item.points !=
                                                                                      null
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
                                                                        _vm._s(
                                                                          item.title
                                                                        )
                                                                      )
                                                                    ])
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                item.status ==
                                                                  null ||
                                                                item.status ==
                                                                  "Submitting" ||
                                                                item.status ==
                                                                  "Taking"
                                                                  ? _c(
                                                                      "small",
                                                                      {
                                                                        class:
                                                                          item.availability !=
                                                                          0
                                                                            ? _vm.CheckFormatDue(
                                                                                item.to_date
                                                                              ) >
                                                                              _vm.DateToday
                                                                              ? "card-subtitle text-50"
                                                                              : item.status ==
                                                                                "Submitted"
                                                                              ? "card-subtitle text-50"
                                                                              : "card-subtitle text-50 red--text"
                                                                            : "card-subtitle text-50"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                item.availability !=
                                                                                0
                                                                                  ? _vm.CheckFormatDue(
                                                                                      item.to_date
                                                                                    ) >
                                                                                    _vm.DateToday
                                                                                    ? ""
                                                                                    : item.status ==
                                                                                      "Submitted"
                                                                                    ? ""
                                                                                    : "red darken-4"
                                                                                  : "",
                                                                              small:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-clock"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " \r\n                                            " +
                                                                            _vm._s(
                                                                              item.availability !=
                                                                                0
                                                                                ? _vm.CheckFormatDue(
                                                                                    item.to_date
                                                                                  ) >
                                                                                  _vm.DateToday
                                                                                  ? ""
                                                                                  : "Late"
                                                                                : ""
                                                                            ) +
                                                                            "\r\n                                            " +
                                                                            _vm._s(
                                                                              item.availability !=
                                                                                0
                                                                                ? " Due Date:"
                                                                                : "No Due Date"
                                                                            ) +
                                                                            "\r\n                                            " +
                                                                            _vm._s(
                                                                              item.availability !=
                                                                                0
                                                                                ? _vm.format_date(
                                                                                    item.to_date
                                                                                  )
                                                                                : ""
                                                                            ) +
                                                                            " \r\n                                        "
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                item.status ==
                                                                "Submitted"
                                                                  ? _c(
                                                                      "small",
                                                                      {
                                                                        staticClass:
                                                                          "card-subtitle text-50 success--text",
                                                                        style: _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs
                                                                          ? "width:150px;display: inline-block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
                                                                          : ""
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "",
                                                                              small:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-clock"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " \r\n                                            Submitted: " +
                                                                            _vm._s(
                                                                              _vm.format_date(
                                                                                item.Sub_date
                                                                              )
                                                                            ) +
                                                                            " \r\n                                        "
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
                                                        ),
                                                        _vm._v(" "),
                                                        item.status ==
                                                          "Submitted" &&
                                                        item.score != null
                                                          ? _c(
                                                              "v-chip",
                                                              {
                                                                staticClass:
                                                                  "mt-1 ",
                                                                attrs: {
                                                                  color:
                                                                    "green",
                                                                  outlined: ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "success--text"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        item.score
                                                                      ) +
                                                                        "/" +
                                                                        _vm._s(
                                                                          item.points
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          : _vm._e(),
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
                                                                      item.status ==
                                                                        "Taking" &&
                                                                      item.status !=
                                                                        null
                                                                        ? _c(
                                                                            "v-btn",
                                                                            _vm._g(
                                                                              _vm._b(
                                                                                {
                                                                                  staticClass:
                                                                                    "mt-1 mr-5 pa-2 blue--text",
                                                                                  attrs: {
                                                                                    text:
                                                                                      "",
                                                                                    rounded:
                                                                                      ""
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.continueClasswork(
                                                                                        item.classwork_id
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
                                                                              _vm._v(
                                                                                "\r\n                                            Continue\r\n                                        "
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e()
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
                                                                "Continue Classwork"
                                                              )
                                                            ])
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
                              })
                            ],
                            2
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);