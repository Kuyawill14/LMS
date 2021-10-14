"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var resetStudentSubmissionDialog = function resetStudentSubmissionDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-cfe23a").then(__webpack_require__.bind(__webpack_require__, /*! ./resetAllSubmission/resetStudentSubmissionDialog */ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["ListData", "classworkDetails", "Submitted", "Graded", "ClassList"],
  components: {
    checkobjective: checkobjective,
    resetConfirmation: resetConfirmation,
    resetStudentSubmissionDialog: resetStudentSubmissionDialog
  },
  data: function data() {
    return {
      isloading: true,
      isLoadingData: true,
      selectedTasks: [],
      isMounted: false,
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
      selected_index: null,
      Details: [],
      Reload: true,
      Class: this.$route.params.id,
      StatusType: ['All', 'Submitted', 'Taking', 'No Submission'],
      selectedStatus: 'All',
      isSavingScore: false,
      search: "",
      isViewing: false,
      isStarting: false,
      resetdialog: false,
      selected_user_id: null,
      isFiltered: false
    };
  },
  computed: {
    studentSubmissionList: function studentSubmissionList() {
      if (this.search) {
        var data = this.search;
        return this.ListData.filter(function (element) {
          return data.toLowerCase().split(' ').every(function (v) {
            return element.firstName.toLowerCase().includes(v) || element.lastName.toLowerCase().includes(v);
          });
        });
      } else {
        return this.ListData;
      }
    }
  },
  methods: {
    ViewSubmision: function ViewSubmision(data, index) {
      this.ViewDetails = null; //this.isLoadingData = true;
      //if(data.status == 'Submitted'){
      //this.isViewing = true;

      this.dialog = !this.dialog;
      this.isStarting = true;
      this.Viewdialog = !this.Viewdialog;
      this.ViewDetails = data;
      this.selected_index = index;
      this.selected_id = data.id; //}
    },
    ResetSubmission: function ResetSubmission() {
      var _this = this;

      this.studentSubmissionList.forEach(function (item) {
        if (item.id == _this.selected_id) {
          item.status = null;
          item.points = 0;
          item.Submitted_Answers = null;
        }
      });
      /*   this.studentSubmissionList[this.selected_index].status = null;
          this.studentSubmissionList[this.selected_index].points = 0;
          this.studentSubmissionList[this.selected_index].Submitted_Answers = null; */
      //this.dialog = !this.dialog;
    },
    MultipleResetSubmission: function MultipleResetSubmission(data) {
      var _this2 = this;

      axios.post('/api/teacher/resetStudentSubmissions', data).then(function () {
        data.forEach(function (item) {
          _this2.studentSubmissionList.forEach(function (sb) {
            if (item.id == sb.id) {
              sb.status = null;
              sb.points = 0;
              sb.Submitted_Answers = null;
            }
          });
        });
        _this2.resetdialog = !_this2.resetdialog;
      });
    },
    ShowLoading: function ShowLoading() {
      var _this3 = this;

      this.isFiltered = true;
      setTimeout(function () {
        return _this3.isFiltered = false;
      }, 800);
    }
  }
  /*  created(){
       this.Details = this.ListData;
   } */

});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmission.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                "v-overlay",
                { attrs: { value: _vm.isStarting } },
                [
                  _c("v-progress-circular", {
                    attrs: { indeterminate: "", size: "64" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    fullscreen: "",
                    "hide-overlay": "",
                    transition: "dialog-bottom-transition"
                  },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _vm.dialog
                    ? _c("checkobjective", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.isStarting,
                            expression: "!isStarting"
                          }
                        ],
                        attrs: {
                          classworkDetails: _vm.classworkDetails,
                          ViewDetails: _vm.ViewDetails
                        },
                        on: {
                          isMounted: function($event) {
                            _vm.isStarting = false
                          },
                          RestSubmission: function($event) {
                            return _vm.ResetSubmission()
                          },
                          UpdateSubmission: function($event) {
                            return _vm.$emit("UpdateSubmission")
                          },
                          closeDialog: function($event) {
                            ;(_vm.dialog = !_vm.dialog),
                              (_vm.Viewdialog = !_vm.Viewdialog)
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
              attrs: { cols: "12", md: "12", lg: "3", xl: "3" }
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
                        on: { change: _vm.ShowLoading },
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
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-item-group",
                            [
                              _vm._l(_vm.studentSubmissionList, function(
                                item,
                                i
                              ) {
                                return [
                                  _c(
                                    "v-list-item",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            (_vm.Class ==
                                              _vm.$route.params.id ||
                                              _vm.Class == item.class_id) &&
                                            (_vm.selectedStatus == "All" ||
                                              _vm.selectedStatus ==
                                                item.status ||
                                              (_vm.selectedStatus ==
                                                "No Submission" &&
                                                (item.status == null ||
                                                  item.status == ""))),
                                          expression:
                                            "(Class == $route.params.id || Class == item.class_id) && (selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && (item.status == null || item.status == '')))"
                                        }
                                      ],
                                      key: item.id
                                    },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        {
                                          attrs: { color: "secondary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.ViewSubmision(item, i)
                                            }
                                          }
                                        },
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              alt: "Profile",
                                              src:
                                                item.profile_pic == null ||
                                                item.profile_pic == ""
                                                  ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                    item.firstName +
                                                    " " +
                                                    item.lastName
                                                  : item.profile_pic
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.ViewSubmision(item, i)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-title",
                                            {
                                              staticClass: "font-weight-medium"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item.firstName +
                                                    " " +
                                                    item.lastName
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          item.status == "Submitted"
                                            ? _c(
                                                "v-list-item-subtitle",
                                                {
                                                  staticClass: "success--text"
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        color: "success"
                                                      }
                                                    },
                                                    [_vm._v("mdi-check")]
                                                  ),
                                                  _vm._v(" Submitted")
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      item.status == "Submitted"
                                        ? _c(
                                            "v-list-item-action",
                                            [
                                              _c("v-text-field", {
                                                staticClass: "ma-0 pa-0",
                                                attrs: {
                                                  loading: _vm.isSavingScore,
                                                  dense: "",
                                                  outlined: "",
                                                  type: "number",
                                                  suffix:
                                                    "/" +
                                                    _vm.classworkDetails.points,
                                                  max:
                                                    _vm.classworkDetails.points,
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
                                  ),
                                  _vm._v(" "),
                                  i < _vm.ListData.length &&
                                  (_vm.Class == _vm.$route.params.id ||
                                    _vm.Class == item.class_id) &&
                                  (_vm.selectedStatus == "All" ||
                                    _vm.selectedStatus == item.status ||
                                    (_vm.selectedStatus == "No Submission" &&
                                      (item.status == null ||
                                        item.status == "")))
                                    ? _c("v-divider", { key: i })
                                    : _vm._e()
                                ]
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
          ),
          _vm._v(" "),
          !_vm.isViewing
            ? _c(
                "v-col",
                {
                  staticClass: "pl-6",
                  attrs: { cols: "12", md: "12", lg: "9", xl: "9" }
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
                                  _c(
                                    "div",
                                    { staticClass: "d-flex flex-column" },
                                    [
                                      _c("h1", [_vm._v(_vm._s(_vm.Submitted))]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v("Submitted")])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-right",
                                  attrs: { cols: "10", sm: "10", md: "11" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "pt-7" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            small: "",
                                            text: "",
                                            rounded: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.resetdialog = !_vm.resetdialog
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "" } },
                                            [_vm._v("mdi-restart")]
                                          ),
                                          _vm._v(
                                            "\r\n                                 Reset Submission\r\n                             "
                                          )
                                        ],
                                        1
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
                            on: { change: _vm.ShowLoading },
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
                        {
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1",
                          attrs: { cols: "12", md: "12", lg: "9", xl: "9" }
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              "prepend-inner-icon": "mdi-magnify",
                              outlined: "",
                              dense: "",
                              label: "Search"
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
                      _c(
                        "v-col",
                        { staticClass: "mt-0 pt-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-row",
                            [
                              _vm._l(_vm.studentSubmissionList, function(
                                item,
                                i
                              ) {
                                return _c(
                                  "v-col",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          !_vm.isFiltered &&
                                          (_vm.Class == _vm.$route.params.id ||
                                            _vm.Class == item.class_id) &&
                                          (_vm.selectedStatus == "All" ||
                                            _vm.selectedStatus == item.status ||
                                            (_vm.selectedStatus ==
                                              "No Submission" &&
                                              (item.status == null ||
                                                item.status == ""))),
                                        expression:
                                          "!isFiltered && (Class == $route.params.id || Class == item.class_id) && (selectedStatus == 'All' || selectedStatus == item.status || (selectedStatus == 'No Submission' && (item.status == null || item.status == '')))"
                                      }
                                    ],
                                    key: i,
                                    staticClass:
                                      "text-center ma-0 pa-0 pl-2 pr-3 pb-3",
                                    attrs: {
                                      cols: "6",
                                      md: "6",
                                      lg: "4",
                                      xl: "3"
                                    }
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
                                                item.status == "Taking"
                                                  ? "blue"
                                                  : ""
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: { link: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.ViewSubmision(
                                                      item,
                                                      i
                                                    )
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
                                                              _vm.$vuetify
                                                                .breakpoint
                                                                .xs ||
                                                              _vm.$vuetify
                                                                .breakpoint.sm
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
                                                                item.profile_pic ==
                                                                  ""
                                                                  ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                                    item.firstName +
                                                                    " " +
                                                                    item.lastName
                                                                  : item.profile_pic
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex flex-column"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              class:
                                                                _vm.$vuetify
                                                                  .breakpoint
                                                                  .xs ||
                                                                _vm.$vuetify
                                                                  .breakpoint.sm
                                                                  ? "mt-0 ml-1 caption"
                                                                  : "mt-2 ml-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                                    " +
                                                                  _vm._s(
                                                                    item.firstName +
                                                                      " " +
                                                                      item.lastName
                                                                  ) +
                                                                  "\r\n                                                "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "d-flex ml-3"
                                                            },
                                                            [
                                                              item.status ==
                                                              "Submitted"
                                                                ? _c(
                                                                    "small",
                                                                    [
                                                                      _vm._v(
                                                                        "Submitted\r\n                                                        "
                                                                      ),
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            left:
                                                                              "",
                                                                            small:
                                                                              "",
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
                                                        ]
                                                      )
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
                              _vm._v(" "),
                              _vm.isFiltered
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass: "fill-height",
                                          staticStyle: { height: "500px" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            {
                                              attrs: {
                                                "align-content": "center",
                                                justify: "center"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "text-center",
                                                  attrs: { cols: "12" }
                                                },
                                                [
                                                  _c("vue-element-loading", {
                                                    attrs: {
                                                      active: _vm.isFiltered,
                                                      duration: "0.7",
                                                      spinner: "line-scale",
                                                      color: "#EF6C00",
                                                      size: "40"
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
                                : _vm._e()
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
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "550" },
                  model: {
                    value: _vm.resetdialog,
                    callback: function($$v) {
                      _vm.resetdialog = $$v
                    },
                    expression: "resetdialog"
                  }
                },
                [
                  _vm.resetdialog
                    ? _c("resetStudentSubmissionDialog", {
                        attrs: {
                          scrollable: "",
                          ListData: _vm.ListData,
                          ClassList: _vm.ClassList
                        },
                        on: {
                          toggleDialog: function($event) {
                            _vm.resetdialog = !_vm.resetdialog
                          },
                          StartReset: _vm.MultipleResetSubmission
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);