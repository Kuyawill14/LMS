"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_objectiveSubmissioncopy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
var resetConfirmation = function resetConfirmation() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/resetConfirmation */ "./resources/js/components/Classwork_View/tabs/dialogs/resetConfirmation.vue"));
};

var checkobjective = function checkobjective() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf841").then(__webpack_require__.bind(__webpack_require__, /*! ./check-submission/check-objective */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue"));
};

var resetStudentSubmissionDialog = function resetStudentSubmissionDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-cfe23a").then(__webpack_require__.bind(__webpack_require__, /*! ./resetAllSubmission/resetStudentSubmissionDialog */ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["ListData", "classworkDetails", "Submitted", "Graded", "ClassList", "Class"],
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
      //lass: this.$route.params.id,
      StatusType: ['Submitted', 'Taking', 'No Submission'],
      selectedStatus: 'Submitted',
      SortType: ['Name', 'Highest Score', 'Lowest Score'],
      selectedShowNumber: 24,
      ShowNumber: [24, 36, 48, 'all'],
      selectedSort: 'Name',
      isSavingScore: false,
      search: "",
      isViewing: false,
      isStarting: false,
      resetdialog: false,
      selected_user_id: null,
      isFiltered: false,
      Submitted_count: 0,
      Over_total: 0,
      pageNo: 1,
      pageSize: 12,
      currentPage: 1,
      totalPage: 0,
      currentTotalData: 0
    };
  },
  computed: {
    indexStart: function indexStart() {
      return (this.currentPage - 1) * this.pageSize;
    },
    indexEnd: function indexEnd() {
      return this.indexStart + this.pageSize;
    },
    studentSubmissionList: function studentSubmissionList() {
      var _this = this;

      /*  if(this.selectedStatus == "All"){
          if (this.search) {
                  let data = this.search;
                  return this.ListData.filter((element) => {
                      return data.toLowerCase().split(' ').every(v => element.firstName.toLowerCase()
                      .includes(v) || element.lastName.toLowerCase()
                      .includes(v))
              })
          }
          else{
              return this.ListData;
          }
      } */
      if (this.search) {
        var data = this.search;
        return this.ListData.filter(function (element) {
          return data.toLowerCase().split(' ').every(function (v) {
            return element.firstName.toLowerCase().includes(v) || element.lastName.toLowerCase().includes(v);
          });
        });
      } else {
        if (this.selectedStatus == "Submitted") {
          var Filterddata = this.ListData;
          Filterddata = Filterddata.filter(function (item) {
            if (_this.Class == _this.$route.params.id) {
              return item.status == "Submitted";
            } else {
              return item.status == "Submitted" && item.class_id == _this.Class;
            }
          });
          this.Submitted_count = Filterddata.length;

          if (this.selectedSort == "Name") {
            this.totalPage = Math.round((Filterddata.length - 1) / this.pageSize);

            if (this.selectedShowNumber != 'all') {
              var data2 = Filterddata.sort();
              return data2.splice(0, this.selectedShowNumber);
            } else {
              return Filterddata.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data = Filterddata.sort(function (a, b) {
              return a.points - b.points;
            }); //return data;


            if (this.selectedShowNumber != 'all') {
              return _data.splice(0, this.selectedShowNumber);
            } else {
              return _data;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data2 = Filterddata.sort(function (a, b) {
              return a.points - b.points;
            }); //return data.reverse();


            if (this.selectedShowNumber != 'all') {
              var _data3 = _data2.reverse();

              return _data3.splice(0, this.selectedShowNumber);
            } else {
              return _data2.reverse();
            }
          }
        } else if (this.selectedStatus == "Taking") {
          var _Filterddata = this.ListData;
          _Filterddata = _Filterddata.filter(function (item) {
            if (_this.Class == _this.$route.params.id) {
              return item.status == "Taking";
            } else {
              return item.status == "Taking" && item.class_id == _this.Class;
            }
          });
          this.Submitted_count = _Filterddata.length;

          if (this.selectedSort == "Name") {
            //return Filterddata.sort();
            if (this.selectedShowNumber != 'all') {
              var _data4 = _Filterddata.sort();

              return _data4.splice(0, this.selectedShowNumber);
            } else {
              return _Filterddata.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data5 = _Filterddata.sort(function (a, b) {
              return a.points - b.points;
            }); //return data;


            if (this.selectedShowNumber != 'all') {
              return _data5.splice(0, this.selectedShowNumber);
            } else {
              return _data5;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data6 = _Filterddata.sort(function (a, b) {
              return a.points - b.points;
            }); //return data.reverse();


            if (this.selectedShowNumber != 'all') {
              var _data7 = _data6.reverse();

              return _data7.splice(0, this.selectedShowNumber);
            } else {
              return _data6.reverse();
            }
          }
        } else if (this.selectedStatus == "No Submission") {
          var _Filterddata2 = this.ListData;
          _Filterddata2 = _Filterddata2.filter(function (item) {
            if (_this.Class == _this.$route.params.id) {
              return item.status == null || item.status == '';
            } else {
              return (item.status == null || item.status == '') && item.class_id == _this.Class;
            }
          });
          this.Submitted_count = _Filterddata2.length;

          if (this.selectedSort == "Name") {
            //return Filterddata.sort();
            if (this.selectedShowNumber != 'all') {
              var _data8 = _Filterddata2.sort();

              return _data8.splice(0, this.selectedShowNumber);
            } else {
              return _Filterddata2.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data9 = _Filterddata2.sort(function (a, b) {
              return a.points - b.points;
            }); //return data;


            if (this.selectedShowNumber != 'all') {
              return _data9.splice(0, this.selectedShowNumber);
            } else {
              return _data9;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data10 = _Filterddata2.sort(function (a, b) {
              return a.points - b.points;
            }); //return data.reverse();


            if (this.selectedShowNumber != 'all') {
              var _data11 = _data10.reverse();

              return _data11.splice(0, this.selectedShowNumber);
            } else {
              return _data10.reverse();
            }
          }
        }
      }
    }
  },
  methods: {
    setPage: function setPage() {
      this.currentPage = this.pageNo - 1;
    },
    ViewSubmision: function ViewSubmision(data, index) {
      this.ViewDetails = null; //this.isLoadingData = true;
      //if(data.status == 'Submitted'){
      //this.isViewing = true;

      this.dialog = !this.dialog;
      this.isStarting = true;
      this.Viewdialog = !this.Viewdialog;
      this.ViewDetails = data;
      this.selected_index = index;
      this.selected_id = data.id;
      this.$store.dispatch("isViewingSubmission"); //}
    },
    GotoNextStudent: function GotoNextStudent() {
      this.ViewDetails = null;
      this.selected_index = this.selected_index + 1;
      this.ViewDetails = this.studentSubmissionList[this.selected_index];
    },
    GotoPrevStudent: function GotoPrevStudent() {
      this.ViewDetails = null;
      this.selected_index = this.selected_index - 1;
      ;
      this.ViewDetails = this.studentSubmissionList[this.selected_index];
    },
    isNotViewing: function isNotViewing() {
      this.dialog = false;
      this.Viewdialog = false;
      this.$store.dispatch("isNotViewingSubmission");
    },
    ResetSubmission: function ResetSubmission() {
      var _this2 = this;

      this.studentSubmissionList.forEach(function (item) {
        if (item.id == _this2.selected_id) {
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
      var _this3 = this;

      axios.post('/api/teacher/resetStudentSubmissions', data).then(function () {
        data.forEach(function (item) {
          _this3.studentSubmissionList.forEach(function (sb) {
            if (item.id == sb.id) {
              sb.status = null;
              sb.points = 0;
              sb.Submitted_Answers = null;
            }
          });
        });
        _this3.resetdialog = !_this3.resetdialog;
      });
    },
    ShowLoading: function ShowLoading() {
      var _this4 = this;

      this.isFiltered = true;
      setTimeout(function () {
        return _this4.isFiltered = false;
      }, 400);
    },
    FilteredClass: function FilteredClass() {
      var _this5 = this;

      this.Over_total = 0;
      this.Submitted_count = 0;
      this.ShowLoading(); //if(this.Class != this.$route.params.id){

      this.ListData.forEach(function (item) {
        if (item.class_id == _this5.Class) {
          _this5.Over_total++;

          if (item.status == 'Submitted') {
            _this5.Submitted_count++;
          }
        }
      }); //}
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9& */ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9&");
/* harmony import */ var _objectiveSubmissioncopy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectiveSubmissioncopy.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _objectiveSubmissioncopy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__.render,
  _objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmissioncopy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./objectiveSubmissioncopy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmissioncopy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_objectiveSubmissioncopy_vue_vue_type_template_id_1106a3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/objectiveSubmissioncopy.vue?vue&type=template&id=1106a3f9& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.dialog
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
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
                          currentIndex: _vm.selected_index,
                          SubmittedLength: _vm.studentSubmissionList.length,
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
                            return _vm.isNotViewing()
                          },
                          nextStudent: function($event) {
                            return _vm.GotoNextStudent()
                          },
                          prevStudent: function($event) {
                            return _vm.GotoPrevStudent()
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
      !_vm.dialog
        ? _c(
            "v-row",
            { staticClass: "pa-1" },
            [
              !_vm.isViewing
                ? _c(
                    "v-col",
                    {
                      staticClass: "pl-6",
                      attrs: { cols: "12", md: "12", lg: "12", xl: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                            [
                              _c("h3", [
                                _vm._v(_vm._s(_vm.classworkDetails.title))
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
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6", sm: "3", md: "2" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "d-flex flex-column" },
                                        [
                                          _c("h1", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.Class ==
                                                  _vm.$route.params.id &&
                                                  _vm.selectedStatus ==
                                                    "Submitted"
                                                  ? _vm.Submitted
                                                  : _vm.Submitted_count
                                              ) +
                                                " / " +
                                                _vm._s(
                                                  _vm.Class ==
                                                    _vm.$route.params.id
                                                    ? _vm.ListData.length
                                                    : _vm.Over_total
                                                )
                                            )
                                          ]),
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
                                      attrs: { cols: "6", sm: "9", md: "10" }
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
                              staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",
                              attrs: {
                                cols: "6",
                                sm: "6",
                                md: "2",
                                lg: "2",
                                xl: "2"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  outlined: "",
                                  "hide-details": "",
                                  dense: "",
                                  label: "Class",
                                  items: _vm.ClassList,
                                  "item-text": "class_name",
                                  "item-value": "class_id"
                                },
                                on: { change: _vm.FilteredClass },
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
                            {
                              staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",
                              attrs: {
                                cols: "6",
                                sm: "6",
                                md: "2",
                                lg: "2",
                                xl: "2"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  outlined: "",
                                  "hide-details": "",
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
                              staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",
                              attrs: {
                                cols: "12",
                                md: "2",
                                sm: "12",
                                lg: "2",
                                xl: "2"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  outlined: "",
                                  "hide-details": "",
                                  dense: "",
                                  label: "Sort By",
                                  items: _vm.SortType
                                },
                                on: { change: _vm.ShowLoading },
                                model: {
                                  value: _vm.selectedSort,
                                  callback: function($$v) {
                                    _vm.selectedSort = $$v
                                  },
                                  expression: "selectedSort"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",
                              attrs: {
                                cols: "12",
                                md: "1",
                                sm: "6",
                                lg: "1",
                                xl: "1"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  outlined: "",
                                  "hide-details": "",
                                  dense: "",
                                  label: "Limit",
                                  items: _vm.ShowNumber
                                },
                                on: { change: _vm.ShowLoading },
                                model: {
                                  value: _vm.selectedShowNumber,
                                  callback: function($$v) {
                                    _vm.selectedShowNumber = $$v
                                  },
                                  expression: "selectedShowNumber"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pt-0 mt-0 pb-0 mb-0 pt-1 pb-3",
                              attrs: {
                                cols: "12",
                                sm: "6",
                                md: "5",
                                lg: "5",
                                xl: "5"
                              }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mb-0 pb-0 mt-0 pt-0",
                                attrs: {
                                  "hide-details": "",
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
                                              (_vm.Class ==
                                                _vm.$route.params.id ||
                                                _vm.Class == item.class_id),
                                            expression:
                                              "!isFiltered && (Class == $route.params.id || Class == item.class_id)"
                                          }
                                        ],
                                        key: i,
                                        attrs: {
                                          cols: "12",
                                          md: "6",
                                          lg: "3",
                                          xl: "3"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-alert",
                                          {
                                            staticClass: "ma-0 pa-0",
                                            attrs: {
                                              outlined: "",
                                              color:
                                                item.status == "Taking"
                                                  ? "blue"
                                                  : item.status == "Submitted"
                                                  ? "success"
                                                  : "grey"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                staticClass: "pt-1 pb-1",
                                                attrs: { link: "" }
                                              },
                                              [
                                                _c(
                                                  "v-list-item-avatar",
                                                  {
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
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-content",
                                                  {
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
                                                    _c("v-list-item-title", [
                                                      _vm._v(
                                                        "\r\n                                             " +
                                                          _vm._s(
                                                            item.firstName +
                                                              " " +
                                                              item.lastName
                                                          ) +
                                                          "\r\n                                        "
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-list-item-subtitle",
                                                      [
                                                        item.status ==
                                                        "Submitted"
                                                          ? _c(
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
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        item.status ==
                                                        "Submitted"
                                                          ? _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "success--text"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Submitted"
                                                                )
                                                              ]
                                                            )
                                                          : item.status ==
                                                            "Taking"
                                                          ? _c("span", {
                                                              staticClass:
                                                                "blue--text"
                                                            })
                                                          : _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "red--text"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "No Submission"
                                                                )
                                                              ]
                                                            )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item-action",
                                                  [
                                                    item.status == "Submitted"
                                                      ? _c("v-text-field", {
                                                          staticClass:
                                                            "ma-0 pa-0",
                                                          attrs: {
                                                            "hide-details": "",
                                                            label: "Score",
                                                            rounded: "",
                                                            loading:
                                                              _vm.isSavingScore,
                                                            dense: "",
                                                            outlined: "",
                                                            type: "number",
                                                            suffix:
                                                              "/" +
                                                              _vm
                                                                .classworkDetails
                                                                .points,
                                                            max:
                                                              _vm
                                                                .classworkDetails
                                                                .points,
                                                            maxlength: _vm.classworkDetails.points.toString()
                                                              .length,
                                                            min: "0"
                                                          },
                                                          on: {
                                                            keyup: function(
                                                              $event
                                                            ) {
                                                              return _vm.SaveScore(
                                                                item.id,
                                                                item.points
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value: item.points,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "points",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.points"
                                                          }
                                                        })
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    item.status == "Taking"
                                                      ? _c(
                                                          "v-chip",
                                                          {
                                                            staticClass: "ma-2",
                                                            attrs: {
                                                              color: "blue",
                                                              "text-color":
                                                                "white"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            Taking...\r\n                                        "
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    item.status == "" ||
                                                    item.status == null
                                                      ? _c("v-chip", {
                                                          staticClass: "ma-2",
                                                          attrs: {
                                                            color: "transparent"
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
                                                      staticClass:
                                                        "text-center",
                                                      attrs: { cols: "12" }
                                                    },
                                                    [
                                                      _c(
                                                        "vue-element-loading",
                                                        {
                                                          attrs: {
                                                            active:
                                                              _vm.isFiltered,
                                                            duration: "0.7",
                                                            spinner:
                                                              "line-scale",
                                                            color: "#EF6C00",
                                                            size: "40"
                                                          }
                                                        }
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);