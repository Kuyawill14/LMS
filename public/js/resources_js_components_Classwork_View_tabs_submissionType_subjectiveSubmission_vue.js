"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_subjectiveSubmission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var checksubjective = function checksubjective() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./check-submission/check-subjective */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue"));
};

var resetStudentSubjectiveSubmission = function resetStudentSubjectiveSubmission() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-646f9a").then(__webpack_require__.bind(__webpack_require__, /*! ./resetAllSubmission/resetStudentSubjectiveSubmission */ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubjectiveSubmission.vue"));
};

var multipleAlertStudent = function multipleAlertStudent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_submissionType_AlertSudent_MultipleAlertStudent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./AlertSudent/MultipleAlertStudent */ "./resources/js/components/Classwork_View/tabs/submissionType/AlertSudent/MultipleAlertStudent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["ListData", "classworkDetails", "Submitted", "Graded", "ClassList"],
  components: {
    checksubjective: checksubjective,
    resetStudentSubjectiveSubmission: resetStudentSubjectiveSubmission,
    multipleAlertStudent: multipleAlertStudent
  },
  data: function data() {
    return {
      isloading: true,
      selectedTasks: [],
      CheckData: null,
      search: "",
      Class: this.ClassList[0].class_id,
      dialog: false,
      headers: [{
        text: 'id',
        align: 'start',
        value: 'id'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Status',
        value: 'status',
        align: 'center'
      }, {
        text: 'Graded',
        value: 'graded',
        align: 'center'
      }, {
        text: 'Points',
        value: 'points'
      }, {
        text: 'Actions',
        sortable: false
      }],
      isSavingScore: false,
      score: null,
      StatusType: ['Submitted', 'Graded', 'No Submission'],
      selectedStatus: 'Submitted',
      SortType: ['Name', 'Highest Score', 'Lowest Score'],
      selectedShowNumber: 24,
      ShowNumber: [24, 36, 48, 'all'],
      selectedSort: 'Name',
      isStarting: false,
      isFiltered: false,
      Over_total: 0,
      Submitted_count: 0,
      selected_index: null,
      AllData: null,
      pointsRules: [function (v) {
        return v && v > 0 || "Points should be above or equal to 0";
      }],
      valid: true,
      resetdialog: false,
      alertDialog: false,
      oldLimit: null,
      CheckDataSection: null
    };
  },
  computed: {
    GradedStudent: function GradedStudent() {
      var _this = this;

      var Filterddata = this.ListData;
      Filterddata = Filterddata.filter(function (item) {
        if (_this.Class == _this.$route.params.id) {
          return item.graded == 1;
        } else {
          return item.graded == 1 && item.class_id == _this.Class;
        }
      });
      return Filterddata.length;
    },
    studentSubmissionList: function studentSubmissionList() {
      var _this2 = this;

      if (this.search) {
        var data = this.search;
        return this.ListData.filter(function (item) {
          return item.firstName.toLowerCase().includes(_this2.search.toLowerCase()) || item.lastName.toLowerCase().includes(_this2.search.toLowerCase());
        });
      } else {
        if (this.selectedStatus == "All") {
          var Filterddata = this.ListData;

          if (this.selectedSort == "Name") {
            if (this.selectedShowNumber != 'all') {
              var data2 = Filterddata.sort();
              return data2.splice(0, this.selectedShowNumber);
            } else {
              return Filterddata.sort();
            }
          }
        } else if (this.selectedStatus == "Submitted") {
          var _Filterddata = this.ListData;
          _Filterddata = _Filterddata.filter(function (item) {
            if (_this2.Class == _this2.$route.params.id) {
              return item.status == "Submitted" && item.graded == 0;
            } else {
              return item.status == "Submitted" && item.graded == 0 && item.class_id == _this2.Class;
            }
          });
          this.Submitted_count = _Filterddata.length;

          if (this.selectedSort == "Name") {
            if (this.selectedShowNumber != 'all') {
              var _data = _Filterddata.sort();

              return _data.splice(0, this.selectedShowNumber);
            } else {
              return _Filterddata.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data2 = _Filterddata.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              return _data2.splice(0, this.selectedShowNumber);
            } else {
              return _data2;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data3 = _Filterddata.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              var _data4 = _data3.reverse();

              return _data4.splice(0, this.selectedShowNumber);
            } else {
              return _data3.reverse();
            }
          }
        } else if (this.selectedStatus == "Graded") {
          var _Filterddata2 = this.ListData;
          _Filterddata2 = _Filterddata2.filter(function (item) {
            if (_this2.Class == _this2.$route.params.id) {
              return item.graded == 1;
            } else {
              return item.graded == 1 && item.class_id == _this2.Class;
            }
          });
          this.Submitted_count = _Filterddata2.length;

          if (this.selectedSort == "Name") {
            if (this.selectedShowNumber != 'all') {
              var _data5 = _Filterddata2.sort();

              return _data5.splice(0, this.selectedShowNumber);
            } else {
              return _Filterddata2.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data6 = _Filterddata2.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              return _data6.splice(0, this.selectedShowNumber);
            } else {
              return _data6;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data7 = _Filterddata2.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              var _data8 = _data7.reverse();

              return _data8.splice(0, this.selectedShowNumber);
            } else {
              return _data7.reverse();
            }
          }
        } else if (this.selectedStatus == "No Submission") {
          var _Filterddata3 = this.ListData;
          _Filterddata3 = _Filterddata3.filter(function (item) {
            if (_this2.Class == _this2.$route.params.id) {
              return item.status != 'Submitted';
            } else {
              return item.status != 'Submitted' && item.class_id == _this2.Class;
            }
          });
          this.Submitted_count = _Filterddata3.length;

          if (this.selectedSort == "Name") {
            if (this.selectedShowNumber != 'all') {
              var _data9 = _Filterddata3.sort();

              return _data9.splice(0, this.selectedShowNumber);
            } else {
              return _Filterddata3.sort();
            }
          } else if (this.selectedSort == "Lowest Score") {
            var _data10 = _Filterddata3.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              return _data10.splice(0, this.selectedShowNumber);
            } else {
              return _data10;
            }
          } else if (this.selectedSort == "Highest Score") {
            var _data11 = _Filterddata3.sort(function (a, b) {
              return a.points - b.points;
            });

            if (this.selectedShowNumber != 'all') {
              var _data12 = _data11.reverse();

              return _data12.splice(0, this.selectedShowNumber);
            } else {
              return _data11.reverse();
            }
          }
        }
      }
    }
  },
  methods: {
    CheckFileIcon: function CheckFileIcon(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') {
        return ['mdi-image', 'info'];
      } else if (ext == 'pdf') {
        return ['mdi-file-pdf', 'red'];
      } else if (ext == 'txt') {
        return ['mdi-note-text-outline', 'primary'];
      } else if (ext == 'docx' || ext == 'doc') {
        return ['mdi-file-word', 'blue'];
      } else if (ext == 'link') {
        return ['mdi-file-link', 'green'];
      }
    },
    CheckFileIconColor: function CheckFileIconColor(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') {
        return 'info';
      } else if (ext == 'pdf') {
        return 'red';
      } else if (ext == 'txt') {
        return 'primary';
      } else if (ext == 'docx' || ext == 'doc') {
        return 'blue';
      } else if (ext == 'link') {
        return 'green';
      } else {
        return 'primary';
      }
    },
    format_date: function format_date(value) {
      if (value) {
        //return moment(String(value)).format('MM/d/YYYY, hh:mm A')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
      }
    },
    validate: function validate(id, points) {
      this.SaveScore(id, points);
      /*  if (this.$refs.pointsform.validate()) {
          
       } */
    },
    SaveScore: function SaveScore(id, points) {
      clearTimeout(this.timeout);
      var self = this;
      this.timeout = setTimeout(function () {
        self.score = points;
        self.isSavingScore = !self.isSavingScore;
        self.UpdateScore(id);
      }, 1000);
    },
    UpdateScore: function UpdateScore(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var rubrics_score;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rubrics_score = [];

                if (_this3.score <= _this3.classworkDetails.points && _this3.score >= 0) {
                  axios.put('/api/submission/update-score/' + id, {
                    score: _this3.score,
                    data: rubrics_score
                  }).then(function (res) {
                    if (res.status == 200) {
                      _this3.toastSuccess("Score Updated");

                      _this3.isSavingScore = !_this3.isSavingScore;

                      _this3.$emit('UpdateSubmission');

                      _this3.ListData.forEach(function (data) {
                        if (data.id == id) {
                          data.graded = 1;
                        }
                      });
                    }
                  });
                } else {
                  _this3.isSavingScore = !_this3.isSavingScore;

                  _this3.toastError('The set points is invalid!');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ResetSubmission: function ResetSubmission(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.studentSubmissionList.forEach(function (item) {
                  if (item.id == id) {
                    item.id = null;
                    item.Submitted_Answers = null;
                    item.status = null;
                    item.points = null;
                    item.updated_at = null;
                    item.rubrics_score = null;
                    item.graded = 0; //this.dialog = !this.dialog;

                    return false;
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    MultipleResetSubmission: function MultipleResetSubmission(data) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var ResetData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ResetData = {};
                ResetData.data = data;
                ResetData.type = 'Subjective_Type';
                axios.post('/api/teacher/resetStudentSubmissions', ResetData).then(function () {
                  data.forEach(function (item) {
                    _this5.studentSubmissionList.forEach(function (sb) {
                      if (item.id == sb.id) {
                        sb.status = null;
                        sb.points = 0;
                        sb.Submitted_Answers = null;
                      }
                    });
                  });
                  _this5.resetdialog = !_this5.resetdialog;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    MarkAsGraded: function MarkAsGraded(id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this6.studentSubmissionList.forEach(function (item) {
                  if (id == item.user_id) {
                    item.graded = 1;
                    item.status = "Submitted";
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    ShowLoading: function ShowLoading() {
      var _this7 = this;

      this.isFiltered = true;
      setTimeout(function () {
        return _this7.isFiltered = false;
      }, 400);
    },
    FilteredClass: function FilteredClass() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this8.ShowLoading(); //this.$emit('reloadSubmission', this.Class);

                /* this.Over_total = 0;
                this.Submitted_count = 0;
                this.ShowLoading();
                //if(this.Class != this.$route.params.id){
                     this.ListData.forEach(item => {
                        if(item.class_id == this.Class){
                            this.Over_total++;
                            if(item.status == 'Submitted'){
                                this.Submitted_count++;
                            }
                        }
                    });
                //} */


              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    ViewSubmission: function ViewSubmission(data, index) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this9.oldLimit = _this9.selectedShowNumber;
                _this9.selectedShowNumber = 'all';
                _this9.AllData = _this9.studentSubmissionList;
                _this9.CheckData = data;

                _this9.ClassList.forEach(function (item) {
                  if (item.class_id == _this9.CheckData.class_id) {
                    _this9.CheckDataSection = item.class_name;
                  }
                });

                _this9.selected_index = index;
                _this9.dialog = true;
                _this9.isStarting = true;

                _this9.$store.dispatch("isViewingSubmission");

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    isNotViewing: function isNotViewing() {
      this.selectedShowNumber = this.oldLimit;
      this.CheckData = [];
      this.selected_index = null;
      this.dialog = false;
      this.isStarting = false;
      this.$store.dispatch("isNotViewingSubmission");
    },
    GotoNextStudent: function GotoNextStudent() {
      var _this10 = this;

      this.CheckData = null;
      this.selected_index = this.selected_index + 1;
      this.CheckData = this.AllData[this.selected_index];
      this.ClassList.forEach(function (item) {
        if (item.class_id == _this10.CheckData.class_id) {
          _this10.CheckDataSection = item.class_name;
        }
      });
    },
    GotoPrevStudent: function GotoPrevStudent() {
      var _this11 = this;

      this.CheckData = null;
      this.selected_index = this.selected_index - 1;
      ;
      this.CheckData = this.AllData[this.selected_index];
      this.ClassList.forEach(function (item) {
        if (item.class_id == _this11.CheckData.class_id) {
          _this11.CheckDataSection = item.class_name;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-input__control[data-v-6fc79489]{\r\n    padding: 0px;\r\n    margin: 0px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_style_index_0_id_6fc79489_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_style_index_0_id_6fc79489_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_style_index_0_id_6fc79489_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true& */ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true&");
/* harmony import */ var _subjectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjectiveSubmission.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js&");
/* harmony import */ var _subjectiveSubmission_vue_vue_type_style_index_0_id_6fc79489_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _subjectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6fc79489",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./subjectiveSubmission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_style_index_0_id_6fc79489_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=style&index=0&id=6fc79489&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subjectiveSubmission_vue_vue_type_template_id_6fc79489_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/subjectiveSubmission.vue?vue&type=template&id=6fc79489&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
                    ? _c("checksubjective", {
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
                          SubmittedLength: _vm.AllData.length,
                          classworkDetails: _vm.classworkDetails,
                          ClassList: _vm.ClassList,
                          CheckDataSection: _vm.CheckDataSection,
                          CheckData: _vm.CheckData
                        },
                        on: {
                          SubmissionReset: _vm.ResetSubmission,
                          isMounted: function($event) {
                            _vm.isStarting = false
                          },
                          UpdateSubmission: _vm.MarkAsGraded,
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
            [
              _c(
                "v-col",
                { staticClass: "pa-3 pl-6", attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
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
                            { staticClass: "pb-1" },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "3", sm: "3", md: "2" } },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex flex-column" },
                                    [
                                      _c("h1", [
                                        _vm._v(
                                          _vm._s(_vm.Submitted_count) + " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(_vm._s(_vm.selectedStatus))
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "3", sm: "3", md: "2" } },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex flex-column" },
                                    [
                                      _c("h1", [
                                        _vm._v(_vm._s(_vm.GradedStudent))
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v("Graded")])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-right",
                                  attrs: { cols: "6", sm: "6", md: "8" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "pt-5" },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: { "offset-y": "" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var menu = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-tooltip",
                                                      {
                                                        attrs: { top: "" },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "activator",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var tooltip =
                                                                  ref.on
                                                                return [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          attrs: {
                                                                            text:
                                                                              "",
                                                                            rounded:
                                                                              ""
                                                                          }
                                                                        },
                                                                        "v-btn",
                                                                        attrs,
                                                                        false
                                                                      ),
                                                                      Object.assign(
                                                                        {},
                                                                        tooltip,
                                                                        menu
                                                                      )
                                                                    ),
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                            Settings\r\n                                            "
                                                                      ),
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            right:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-cog-outline"
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
                                                          _vm._v("Menu")
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            false,
                                            2517787081
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            { staticClass: "pa-2" },
                                            [
                                              _c(
                                                "v-list-item",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      _vm.resetdialog = !_vm.resetdialog
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-title",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { left: "" } },
                                                        [_vm._v("mdi-restart")]
                                                      ),
                                                      _vm._v(
                                                        " Reset Submission"
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
                                                  on: {
                                                    click: function($event) {
                                                      _vm.alertDialog = !_vm.alertDialog
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-title",
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { left: "" } },
                                                        [
                                                          _vm._v(
                                                            "mdi-account-alert"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" Alert Students")
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
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",
                          attrs: { cols: "6", sm: "6", lg: "2", xl: "2" }
                        },
                        [
                          _c("v-select", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              outlined: "",
                              dense: "",
                              label: "Class",
                              items: _vm.ClassList,
                              "hide-details": "",
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
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",
                          attrs: { cols: "6", md: "6", lg: "2", xl: "2" }
                        },
                        [
                          _c("v-select", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
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
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",
                          attrs: { cols: "12", md: "4", lg: "2", xl: "2" }
                        },
                        [
                          _c("v-select", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              label: "Sort By",
                              disabled: _vm.selectedStatus == "All",
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
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-3 pr-1 pb-3",
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
                          staticClass: "pt-0 mt-0 pb-0 mb-0 pt-3 pb-3",
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
                          !_vm.isFiltered &&
                          _vm.studentSubmissionList.length == 0
                            ? _c(
                                "v-row",
                                {
                                  staticClass: "mt-12 pt-12",
                                  attrs: {
                                    justify: "center",
                                    "align-content": "center"
                                  }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center pb-12 mb-12",
                                      attrs: { cols: "12", sm: "8", md: "4" }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "6rem" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                            mdi-notebook-remove-outline\r\n                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h1", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.selectedStatus == "Submitted"
                                              ? "No Student Submitted"
                                              : _vm.selectedStatus == "Graded"
                                              ? "No Student Graded"
                                              : "No Submission"
                                          ) + " "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _c(
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
                                          link: "",
                                          cols: "12",
                                          md: "6",
                                          lg: "4",
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
                                                        return _vm.ViewSubmission(
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
                                                        return _vm.ViewSubmission(
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
                                                      {
                                                        staticClass:
                                                          "success--text"
                                                      },
                                                      [
                                                        item.graded == 1
                                                          ? _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
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
                                                          "Submitted" &&
                                                        item.graded == 0
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
                                                              "Submitted" &&
                                                            item.graded == 1
                                                          ? _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "success--text"
                                                              },
                                                              [_vm._v("Graded")]
                                                            )
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
                                                item.status != null &&
                                                item.status != "Submitting"
                                                  ? _c(
                                                      "v-list-item-action",
                                                      {
                                                        staticStyle: {
                                                          "max-width":
                                                            "150px !important"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-form",
                                                          {
                                                            ref: "pointsform",
                                                            refInFor: true,
                                                            attrs: {
                                                              "lazy-validation":
                                                                ""
                                                            },
                                                            on: {
                                                              submit: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.validate(
                                                                  item.id,
                                                                  item.points
                                                                )
                                                              }
                                                            },
                                                            model: {
                                                              value: _vm.valid,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.valid = $$v
                                                              },
                                                              expression:
                                                                "valid"
                                                            }
                                                          },
                                                          [
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "ma-0 pa-0",
                                                              attrs: {
                                                                "hide-details":
                                                                  _vm.valid,
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
                                                                  .length
                                                              },
                                                              model: {
                                                                value:
                                                                  item.points,
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
                                            "v-row",
                                            _vm._l(20, function(i) {
                                              return _c(
                                                "v-col",
                                                {
                                                  key: i,
                                                  attrs: {
                                                    cols: "12",
                                                    md: "6",
                                                    lg: "3",
                                                    xl: "3"
                                                  }
                                                },
                                                [
                                                  _vm.isFiltered
                                                    ? _c(
                                                        "v-card",
                                                        {
                                                          staticClass:
                                                            "pl-2 pr-2 pt-3 pb-3",
                                                          attrs: {
                                                            elevation: "0"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list",
                                                            [
                                                              _c(
                                                                "v-list-item",
                                                                [
                                                                  _c(
                                                                    "v-list-item-content",
                                                                    [
                                                                      _c(
                                                                        "v-skeleton-loader",
                                                                        {
                                                                          staticClass:
                                                                            "mx-auto",
                                                                          attrs: {
                                                                            type:
                                                                              "list-item-avatar-two-line"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-list-item-action",
                                                                    [
                                                                      _c(
                                                                        "v-skeleton-loader",
                                                                        {
                                                                          staticClass:
                                                                            "mx-auto",
                                                                          attrs: {
                                                                            type:
                                                                              "chip"
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
        : _vm._e(),
      _vm._v(" "),
      _vm.resetdialog
        ? _c(
            "v-row",
            [
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "650" },
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
                    ? _c("resetStudentSubjectiveSubmission", {
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
        : _vm._e(),
      _vm._v(" "),
      _vm.alertDialog
        ? _c(
            "v-row",
            [
              _c(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "650" },
                  model: {
                    value: _vm.alertDialog,
                    callback: function($$v) {
                      _vm.alertDialog = $$v
                    },
                    expression: "alertDialog"
                  }
                },
                [
                  _vm.alertDialog
                    ? _c("multipleAlertStudent", {
                        attrs: {
                          scrollable: "",
                          ListData: _vm.ListData,
                          ClassList: _vm.ClassList,
                          classworkDetails: _vm.classworkDetails
                        },
                        on: {
                          toggleDialog: function($event) {
                            _vm.alertDialog = !_vm.alertDialog
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);