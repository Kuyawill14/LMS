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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["ListData", "classworkDetails", "Submitted", "Graded", "ClassList"],
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
      Reload: true,
      Class: this.$route.params.id,
      StatusType: ['All', 'Submitted', 'Taking', 'No Submission'],
      selectedStatus: 'All',
      isSavingScore: false
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
    { staticClass: "pa-2" },
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
        "v-row",
        { staticClass: "pa-1" },
        [
          _c(
            "v-col",
            {
              class:
                _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                  ? "pl-5 d-none"
                  : "pl-5",
              attrs: { cols: "12", md: "12", lg: "4", xl: "4" }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                    [_c("h3", [_vm._v("Students")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                    [
                      _c("v-select", {
                        staticClass: "mb-0 pb-0",
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "Class",
                          items: _vm.ClassList,
                          "item-text": "class_name",
                          "item-value": "class_id"
                        },
                        model: {
                          value: _vm.Class,
                          callback: function($$v) {
                            _vm.Class = $$v
                          },
                          expression: "Class"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.ListData, function(item, i) {
                    return _c(
                      "v-col",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.Class == _vm.$route.params.id ||
                              _vm.Class == item.class_id,
                            expression:
                              "Class == $route.params.id || Class == item.class_id"
                          }
                        ],
                        key: i,
                        attrs: { cols: "12" }
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
                                      "v-row",
                                      {
                                        class: hover ? "grey lighten-4" : "",
                                        staticStyle: { cursor: "pointer" }
                                      },
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "pa-5",
                                            attrs: { cols: "9" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  " d-flex justify-start"
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    attrs: {
                                                      color: "brown",
                                                      size: "40"
                                                    }
                                                  },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        alt: "Profile",
                                                        src:
                                                          item.profile_pic ==
                                                            null ||
                                                          item.profile_pic == ""
                                                            ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                              item.name
                                                            : item.profile_pic
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "mt-2 ml-2" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "font-weight-medium"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\r\n                                " +
                                                            _vm._s(item.name) +
                                                            "\r\n                                "
                                                        ),
                                                        _c("br")
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        item.status == "Submitted"
                                          ? _c(
                                              "v-col",
                                              {
                                                staticClass: "text-left",
                                                attrs: { cols: "3" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  staticClass: "mb-0 pb-0",
                                                  style: _vm.$vuetify.breakpoint
                                                    .xs
                                                    ? "width:100%"
                                                    : "width:80%",
                                                  attrs: {
                                                    "append-icon":
                                                      item.graded &&
                                                      item.status == "Submitted"
                                                        ? "mdi-check"
                                                        : "",
                                                    loading: _vm.isSavingScore,
                                                    dense: "",
                                                    outlined: "",
                                                    type: "number",
                                                    suffix:
                                                      "/" +
                                                      _vm.classworkDetails
                                                        .points,
                                                    max:
                                                      _vm.classworkDetails
                                                        .points,
                                                    maxlength: _vm.classworkDetails.points.toString()
                                                      .length,
                                                    min: "0"
                                                  },
                                                  on: {
                                                    keyup: function($event) {
                                                      return _vm.SaveScore(
                                                        item.id,
                                                        item.points
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value: item.points,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "points",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.points"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
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
                        }),
                        _vm._v(" "),
                        _c("v-divider")
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "pl-6",
              attrs: { cols: "12", md: "12", lg: "8", xl: "8" }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                    [_c("h3", [_vm._v(_vm._s(_vm.classworkDetails.title))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "2", sm: "2", md: "1" } },
                            [
                              _c("div", { staticClass: "d-flex flex-column" }, [
                                _c("h1", [_vm._v(_vm._s(_vm.Submitted))]),
                                _vm._v(" "),
                                _c("small", [_vm._v("Submitted")])
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1",
                      attrs: { cols: "12", md: "12", lg: "3", xl: "3" }
                    },
                    [
                      _c("v-select", {
                        staticClass: "mb-0 pb-0",
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "Status",
                          items: _vm.StatusType
                        },
                        model: {
                          value: _vm.selectedStatus,
                          callback: function($$v) {
                            _vm.selectedStatus = $$v
                          },
                          expression: "selectedStatus"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        _vm._l(_vm.ListData, function(item, i) {
                          return _c(
                            "v-col",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    _vm.selectedStatus == "All" ||
                                    _vm.selectedStatus == item.status ||
                                    (_vm.selectedStatus == "No Submission" &&
                                      item.status == null),
                                  expression:
                                    "selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && item.status == null)"
                                }
                              ],
                              key: i,
                              staticClass:
                                "text-center ma-0 pa-0 pl-2 pr-3 pb-3",
                              attrs: { cols: "6", md: "3", lg: "3" }
                            },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "mx-auto",
                                  attrs: { outlined: "" }
                                },
                                [
                                  _c(
                                    "v-alert",
                                    {
                                      staticClass: "ma-0 pa-0",
                                      attrs: {
                                        outlined: item.status == "Taking",
                                        color:
                                          item.status == "Taking" ? "blue" : ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        {
                                          attrs: { link: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.ViewSubmision(item)
                                            }
                                          }
                                        },
                                        [
                                          _c("v-list-item-content", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  " d-flex justify-start"
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    attrs: {
                                                      color: "brown",
                                                      size:
                                                        _vm.$vuetify.breakpoint
                                                          .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                          ? "25"
                                                          : "40"
                                                    }
                                                  },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        alt: "Profile",
                                                        src:
                                                          item.profile_pic ==
                                                            null ||
                                                          item.profile_pic == ""
                                                            ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                              item.name
                                                            : item.profile_pic
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("div", {}, [
                                                  _c(
                                                    "div",
                                                    {
                                                      class:
                                                        _vm.$vuetify.breakpoint
                                                          .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                          ? "mt-0 ml-1 caption"
                                                          : "mt-2 ml-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                                    " +
                                                          _vm._s(item.name) +
                                                          "\r\n                                                "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "ma-0 pa-0"
                                                    },
                                                    [
                                                      item.status == "Submitted"
                                                        ? _c(
                                                            "small",
                                                            [
                                                              _vm._v(
                                                                "Graded\r\n                                                        "
                                                              ),
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    left: "",
                                                                    small: "",
                                                                    color:
                                                                      "success"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-check"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ])
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
                        }),
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