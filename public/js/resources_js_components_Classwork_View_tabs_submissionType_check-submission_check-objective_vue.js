"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
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
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_resetConfirmation_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../dialogs/resetConfirmation */ "./resources/js/components/Classwork_View/tabs/dialogs/resetConfirmation.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["classworkDetails", "ViewDetails"],
  components: {
    resetConfirmation: resetConfirmation
  },
  data: function data() {
    return {
      Qlength: null,
      Details: [],
      Check: [],
      isLoading: true,
      inputCheck: ['True', 'False'],
      SubmittedAnswer: [],
      UpdateDetails: {},
      dialog: false,
      Alphabet: null,
      isCommenting: false,
      comment: null,
      isAlerting: false,
      isReseting: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser', 'getAll_questions']),
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_1__.default)(String(value)).format('MM/d/YYYY, hh:mm A');
      }
    },
    fetchQuestions: function fetchQuestions() {
      var _this = this;

      this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(function (res) {
        _this.Details = _this.getAll_questions;
        var Submitted_length = _this.ViewDetails.Submitted_Answers.length;
        var Question_length = _this.getAll_questions.Question.length;
        var diff = Question_length - Submitted_length;

        for (var i = 0; i < diff; i++) {
          if (_this.Details.Question[i].type == 'Multiple Choice' || _this.Details.Question[i].type == 'Identification' || _this.Details.Question[i].type == 'True or False') {
            _this.ViewDetails.Submitted_Answers.push({
              Answer: null,
              Question_id: _this.Details.Question[i].id,
              timeConsume: null,
              type: _this.Details.Question[i].type
            });
          } else if (_this.Details.Question[i].type == 'Essay') {
            _this.ViewDetails.Submitted_Answers.push({
              Answer: null,
              Question_id: _this.Details.Question[i].id,
              timeConsume: null,
              type: _this.Details.Question[i].type,
              check: false
            });
          } else if (_this.Details.Question[i].type == 'Matching type') {}
        } ////console.log(this.Details.Question)


        var _loop = function _loop(_i) {
          for (var j = 0; j < _this.ViewDetails.Submitted_Answers.length; j++) {
            if (_this.Details.Question[_i].id == _this.ViewDetails.Submitted_Answers[j].Question_id) {
              if (_this.Details.Question[_i].type == 'Multiple Choice' || _this.Details.Question[_i].type == 'Identification' || _this.Details.Question[_i].type == 'True or False') {
                _this.SubmittedAnswer[_i] = _this.ViewDetails.Submitted_Answers[j];

                if (_this.Details.Question[_i].answer == _this.ViewDetails.Submitted_Answers[j].Answer) {
                  _this.Check[_i] = true;
                } else {
                  _this.Check[_i] = false;
                }
              } else if (_this.Details.Question[_i].type == 'Essay') {
                _this.SubmittedAnswer[_i] = _this.ViewDetails.Submitted_Answers[j];
                _this.Check[_i] = _this.ViewDetails.Submitted_Answers[j].check;
              } else if (_this.Details.Question[_i].type == 'Matching type') {
                (function () {
                  var Ans = new Array();
                  var match_check = new Array();
                  var counter = 0;

                  _this.ViewDetails.Submitted_Answers[j].Answer.forEach(function (item) {
                    for (var x = 0; x < _this.Details.Answer[_i].SubQuestion.length; x++) {
                      if (_this.Details.Answer[_i].SubQuestion[x].id == item.subquestion_id) {
                        Ans.push({
                          Ans_Letter: item.Ans_letter,
                          Answer: item.Answers,
                          SubQuestion: _this.Details.Answer[_i].SubQuestion[x].sub_question,
                          SubChoice: null
                        });

                        if (_this.Details.Answer[_i].SubAnswer[x].Choice == item.Answers) {
                          match_check[counter] = true;
                        } else {
                          match_check[counter] = false;
                        }
                      }
                    }

                    counter += 1;
                  });

                  var tmpChoices = new Array();

                  _this.ViewDetails.Submitted_Answers[j].Choices_id.forEach(function (item) {
                    _this.Details.Answer[_i].SubAnswer.forEach(function (choice) {
                      if (item.choice_id == choice.id) {
                        tmpChoices.push({
                          id: choice.id,
                          choice: choice.Choice
                        });
                      }
                    });
                  });

                  for (var a = 0; a < Ans.length; a++) {
                    Ans[a].SubChoice = tmpChoices[a].choice;
                  }

                  _this.SubmittedAnswer[_i] = Ans;
                  _this.Check[_i] = match_check; //console.log(this.Check);
                })();
              }
            }
          }
        };

        for (var _i = 0; _i < _this.getAll_questions.Question.length; _i++) {
          _loop(_i);
        } ////console.log(this.ViewDetails.Submitted_Answers);


        _this.$emit('isMounted');
      });
    },
    UpdateScore: function UpdateScore(type, id, data, points, index, answer) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.UpdateDetails.check = data;
                _this2.UpdateDetails.points = points;
                _this2.UpdateDetails.question_id = id;
                _this2.UpdateDetails.answer = answer; //this.UpdateDetails.type = type;

                axios.put('/api/teacher/update-score/' + _this2.ViewDetails.id, _this2.UpdateDetails).then(function (res) {
                  if (res.status == 200) {
                    if (type == 'Essay') {
                      if (data == true) {
                        _this2.ViewDetails.points = _this2.ViewDetails.points + points;
                      } else {
                        _this2.ViewDetails.points = _this2.ViewDetails.points - points;
                      }
                    } else {
                      if (data == true) {
                        _this2.SubmittedAnswer[index] = answer;
                        _this2.ViewDetails.points = _this2.ViewDetails.points + points;
                      } else {
                        _this2.SubmittedAnswer[index] = "";
                        _this2.ViewDetails.points = _this2.ViewDetails.points - points;
                      }
                    }
                  }
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ResetSubmission: function ResetSubmission() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ////console.log(this.ListData[this.resetIndex].points)
                _this3.isReseting = true;

                if (_this3.ViewDetails.status != null && _this3.ViewDetails.status != '') {
                  axios.put('/api/teacher/reset-obj/' + _this3.ViewDetails.id).then(function (res) {
                    if (res.status == 200) {
                      _this3.dialog = !_this3.dialog;
                      _this3.isReseting = false;

                      _this3.$emit('RestSubmission');
                    }
                  });
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addComment: function addComment(details) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this4.isCommenting = true;
                data.classwork_id = details.classwork_id;
                data.course_id = _this4.$route.params.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.comment = _this4.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  if (res.status == 200) {
                    _this4.ViewDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: _this4.get_CurrentUser.firstName + ' ' + _this4.get_CurrentUser.lastName,
                      profile_pic: _this4.get_CurrentUser.profile_pic
                    });

                    _this4.comment = null;
                  }
                });
                _this4.isCommenting = false;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    alertStudent: function alertStudent() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = {};
                _this5.isAlerting = true;
                data.user_id = _this5.ViewDetails.user_id;
                data.classwork_name = _this5.classworkDetails.title;
                data.classwork_id = _this5.classworkDetails.id;
                data.course_id = _this5.classworkDetails.course_id;
                data.firstName = _this5.ViewDetails.firstName;
                axios.post('/api/teacher/alert-student', data).then(function (res) {
                  if (res.data.success == true) {
                    _this5.toastSuccess(res.data.message);

                    _this5.isAlerting = false;
                  }
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    if (this.ViewDetails.Submitted_Answers != null && this.ViewDetails.Submitted_Answers != '') {
      this.fetchQuestions();
    } else {
      this.$emit('isMounted');
    }

    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.Alphabet = alphabet;
  },
  created: function created() {
    this.$emit('isMounted');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /* width */\n[data-v-6ded7147]::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n[data-v-6ded7147]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n \n/* Handle */\n[data-v-6ded7147]::-webkit-scrollbar-thumb {\n  background: #888; \n   border-radius: 3px\n}\n\n/* Handle on hover */\n[data-v-6ded7147]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.centered-input[data-v-6ded7147] input {\n      text-align: center\n}\n.post-content img[data-v-6ded7147]{\n        \n     max-height: 8rem !important;\n}\n.centered-input input[data-v-6ded7147] {\n  text-align: center\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_0_id_6ded7147_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_0_id_6ded7147_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_0_id_6ded7147_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-objective.vue?vue&type=template&id=6ded7147&scoped=true& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true&");
/* harmony import */ var _check_objective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-objective.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js&");
/* harmony import */ var _check_objective_vue_vue_type_style_index_0_id_6ded7147_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _check_objective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ded7147",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_0_id_6ded7147_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=0&id=6ded7147&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_template_id_6ded7147_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=template&id=6ded7147&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=template&id=6ded7147&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
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
            ? _c("resetConfirmation", {
                attrs: { ViewDetails: _vm.ViewDetails },
                on: {
                  toggleCancelDialog: function($event) {
                    _vm.dialog = !_vm.dialog
                  },
                  toggleconfirm: function($event) {
                    return _vm.ResetSubmission()
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { color: "primary" } },
        [
          _c(
            "v-btn",
            {
              attrs: { dark: "", icon: "" },
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
        "v-card-text",
        { staticClass: "ma-0 pa-0 pa-2" },
        [
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                {
                  class: _vm.$vuetify.breakpoint.xs ? "pt-2" : "pt-2 pr-3",
                  attrs: { cols: "12", md: "4", lg: "4" }
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "", "ma-0": "", "pa-0": "" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "pt-3 pl-4 pr-4 pb-2" },
                        [
                          _c(
                            "v-list",
                            { staticClass: "pa-0 ma-0" },
                            [
                              _c(
                                "v-list-item",
                                { staticClass: "ma-0 pa-0" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { color: "secondary" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          alt: "Profile",
                                          src:
                                            _vm.ViewDetails.profile_pic ==
                                              null ||
                                            _vm.ViewDetails.profile_pic == ""
                                              ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                _vm.ViewDetails.firstName +
                                                " " +
                                                _vm.ViewDetails.lastName
                                              : _vm.ViewDetails.profile_pic
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c(
                                        "v-list-item-title",
                                        { staticClass: "font-weight-medium" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.ViewDetails.firstName +
                                                " " +
                                                _vm.ViewDetails.lastName
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.ViewDetails.status != null &&
                                      _vm.ViewDetails.status != "" &&
                                      _vm.ViewDetails.status != "Taking"
                                        ? _c("v-list-item-subtitle", [
                                            _vm._v(
                                              "Submitted: " +
                                                _vm._s(
                                                  _vm.format_date(
                                                    _vm.ViewDetails.updated_at
                                                  )
                                                )
                                            )
                                          ])
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    { staticClass: "mt-8" },
                                    [
                                      _vm.ViewDetails.status == "Submitted"
                                        ? _c("v-text-field", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              label: "Score",
                                              type: "number",
                                              suffix:
                                                "/" +
                                                _vm.classworkDetails.points,
                                              max: _vm.classworkDetails.points,
                                              min: "0"
                                            },
                                            model: {
                                              value: _vm.ViewDetails.points,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.ViewDetails,
                                                  "points",
                                                  $$v
                                                )
                                              },
                                              expression: "ViewDetails.points"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 pb-4",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm.ViewDetails.status != null &&
                              _vm.ViewDetails.status != ""
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        rounded: "",
                                        loading: _vm.isReseting,
                                        color: "primary"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = !_vm.dialog
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v("mdi-restart")
                                      ]),
                                      _vm._v(" Reset Submission")
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
                      _c(
                        "v-card",
                        {
                          staticClass: "mt-2 ",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "pt-3 pl-4 pr-4 pb-2" },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-comment")
                              ]),
                              _vm._v(
                                "Private Comments\r\n                                    "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0" },
                            _vm._l(_vm.ViewDetails.comments, function(item, i) {
                              return _c(
                                "v-list-item",
                                { key: i, staticClass: "mb-0 pb-0" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { color: "secondary" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            item.profile_pic == null ||
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
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.name)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", {
                                        domProps: {
                                          innerHTML: _vm._s(item.content)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                small: "",
                                                color: "grey lighten-1"
                                              }
                                            },
                                            [_vm._v("mdi-dots-vertical")]
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
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0 mt-0 pt-0" },
                            [
                              _c(
                                "v-list-item",
                                { staticClass: "mb-0 pb-0" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    { attrs: { color: "secondary" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            _vm.get_CurrentUser.profile_pic ==
                                              null ||
                                            _vm.get_CurrentUser.profile_pic ==
                                              ""
                                              ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                _vm.get_CurrentUser.firstName +
                                                " " +
                                                _vm.get_CurrentUser.lastName
                                              : _vm.get_CurrentUser.profile_pic
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    { staticClass: "ma-0 pa-0" },
                                    [
                                      _c("v-textarea", {
                                        staticClass: "pa-0 mt-7",
                                        attrs: {
                                          loading: _vm.isCommenting,
                                          "prepend-avatar": "mdi-emoticon-dead",
                                          filled: "",
                                          rounded: "",
                                          dense: "",
                                          "auto-grow": "",
                                          rows: "1",
                                          "clear-icon": "mdi-close-circle",
                                          clearable: "",
                                          placeholder: "Comment",
                                          type: "text"
                                        },
                                        model: {
                                          value: _vm.comment,
                                          callback: function($$v) {
                                            _vm.comment = $$v
                                          },
                                          expression: "comment"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            loading: _vm.isCommenting,
                                            icon: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.addComment(
                                                _vm.ViewDetails
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "primary" } },
                                            [_vm._v("mdi-send")]
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "pt-2",
                  attrs: { cols: "12", md: "8", lg: "8" }
                },
                [
                  _vm.ViewDetails.Submitted_Answers == null ||
                  _vm.ViewDetails.Submitted_Answers == ""
                    ? _c(
                        "v-card",
                        {
                          staticClass: " pa-4 ",
                          attrs: { outlined: "", elevation: "1" }
                        },
                        [
                          _c(
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
                                    { staticStyle: { "font-size": "7rem" } },
                                    [
                                      _vm._v(
                                        "\r\n                            mdi-notebook-remove-outline\r\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h1", [_vm._v(" Empty Submission ")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      " This student did not take the classwork yet!"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        loading: _vm.isAlerting,
                                        color: "primary"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.alertStudent()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v("Alert Student "),
                                      _c("v-icon", { attrs: { right: "" } }, [
                                        _vm._v("mdi-account-alert")
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
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.ViewDetails.Submitted_Answers != null &&
                  _vm.ViewDetails.Submitted_Answers != ""
                    ? _c(
                        "v-card",
                        {
                          staticClass: "pa-4",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        _vm._l(_vm.Details.Question, function(item, index) {
                          return _c(
                            "v-container",
                            { key: index, attrs: { "ma-0": "", "pa-0": "" } },
                            [
                              _c(
                                "v-container",
                                {
                                  staticClass: "ma-0 pa-0",
                                  attrs: { "ma-0": "", "pa-0": "" }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "subtitle-1 d-flex",
                                      style: _vm.$vuetify.breakpoint.xs
                                        ? "line-height:1.1"
                                        : ""
                                    },
                                    [
                                      _c("v-checkbox", {
                                        staticClass: "mt-0 pt-0",
                                        attrs: { color: "success" },
                                        on: {
                                          click: function($event) {
                                            return _vm.UpdateScore(
                                              item.type,
                                              item.id,
                                              _vm.Check[index],
                                              item.points,
                                              index,
                                              item.answer
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.Check[index],
                                          callback: function($$v) {
                                            _vm.$set(_vm.Check, index, $$v)
                                          },
                                          expression: "Check[index]"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "h3",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v(_vm._s(index + 1) + ".")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "post-content ml-1",
                                        staticStyle: { width: "90%" },
                                        domProps: {
                                          innerHTML: _vm._s(item.question)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "primary--text ml-1" },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(item.points + " points") +
                                              ")"
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              item.type == "Multiple Choice"
                                ? _c(
                                    "v-container",
                                    { attrs: { "ml-0": "", "pl-0": "" } },
                                    _vm._l(_vm.Details.Answer[index], function(
                                      Ans,
                                      i
                                    ) {
                                      return _c(
                                        "v-container",
                                        {
                                          key: i,
                                          class: !_vm.$vuetify.breakpoint.xs
                                            ? "d-flex flex-row ma-0 pa-0 mb-1 ml-8"
                                            : "d-flex flex-row ma-0 pa-0"
                                        },
                                        [
                                          _c(
                                            "v-radio-group",
                                            {
                                              staticClass: "ma-0 pa-0",
                                              attrs: { name: "option" + index },
                                              model: {
                                                value:
                                                  _vm.SubmittedAnswer[index]
                                                    .Answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.SubmittedAnswer[index],
                                                    "Answer",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "SubmittedAnswer[index].Answer"
                                              }
                                            },
                                            [
                                              _c("v-radio", {
                                                key: index,
                                                attrs: {
                                                  color: "primary",
                                                  value: Ans.Choice
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
                                                "Subtitle-1 ma-0 pa-0 d-flex",
                                              staticStyle: {
                                                "line-height": "1.4"
                                              }
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "post-content",
                                                domProps: {
                                                  innerHTML: _vm._s(Ans.Choice)
                                                }
                                              }),
                                              _vm._v(" "),
                                              item.Answer == Ans.Choice
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption primary--text ml-1 mt-1"
                                                    },
                                                    [_vm._v("(correct answer)")]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.type == "Identification"
                                ? _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass: "ml-7",
                                          attrs: { "ma-0": "", "pa-0": "" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [_vm._v("Answer")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-1 d-flex item ml-4"
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "post-content",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.SubmittedAnswer[index]
                                                      .Answer
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.SubmittedAnswer[index]
                                                .Answer == null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "post-content"
                                                    },
                                                    [_vm._v(" N/A")]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.type == "True or False"
                                ? _c(
                                    "v-container",
                                    _vm._l(_vm.inputCheck, function(x, n) {
                                      return _c(
                                        "v-container",
                                        {
                                          key: n,
                                          class: !_vm.$vuetify.breakpoint.xs
                                            ? "d-flex flex-row ma-0 pa-0 mb-1 ml-8"
                                            : "d-flex flex-row ma-0 pa-0"
                                        },
                                        [
                                          _c(
                                            "v-radio-group",
                                            {
                                              staticClass: "ma-0 pa-0",
                                              attrs: { name: "option" + index },
                                              model: {
                                                value:
                                                  _vm.SubmittedAnswer[index]
                                                    .Answer,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.SubmittedAnswer[index],
                                                    "Answer",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "SubmittedAnswer[index].Answer"
                                              }
                                            },
                                            [
                                              _c("v-radio", {
                                                key: index,
                                                attrs: {
                                                  color: "primary",
                                                  value: _vm.inputCheck[n]
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "Subtitle 1" },
                                            [
                                              _vm._v(
                                                "\r\n                                    " +
                                                  _vm._s(_vm.inputCheck[n]) +
                                                  " \r\n                                    "
                                              ),
                                              _vm.inputCheck[n] ==
                                              _vm.SubmittedAnswer[index].Answer
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "caption primary--text ml-1 mt-1"
                                                    },
                                                    [_vm._v("(correct answer)")]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.type == "Matching type"
                                ? _c(
                                    "v-container",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { "ma-0": "", "pa-0": "" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "ma-0 pa-0",
                                              attrs: {
                                                "ma-0": "",
                                                "pa-0": "",
                                                cols: "12",
                                                lg: "10",
                                                md: "12"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-container",
                                                { staticClass: "ma-0 pa-0" },
                                                [
                                                  _c(
                                                    "v-container",
                                                    [
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c("v-col", {
                                                            staticClass:
                                                              "font-weight-bold",
                                                            attrs: {
                                                              cols: "2",
                                                              md: "2",
                                                              lg: "2"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold",
                                                              attrs: {
                                                                cols: "5",
                                                                md: "5",
                                                                lg: "5"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                                        Column A\r\n                                                    "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold",
                                                              attrs: {
                                                                cols: "5"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                                        Column B\r\n                                                    "
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
                                                  _c("v-divider"),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.SubmittedAnswer[index],
                                                    function(item, i) {
                                                      return _c(
                                                        "v-container",
                                                        {
                                                          key: item.id,
                                                          staticClass:
                                                            "mb-0 pb-0"
                                                        },
                                                        [
                                                          _c(
                                                            "v-row",
                                                            [
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "mb-1 pb-0 pt-0 mt-0 mr-0 pr-0",
                                                                  attrs: {
                                                                    cols: "2",
                                                                    md: "1",
                                                                    lg: "1"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-checkbox",
                                                                    {
                                                                      staticClass:
                                                                        "mt-4 pr-0 mr-0",
                                                                      attrs: {
                                                                        color:
                                                                          "success"
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .Check[
                                                                            index
                                                                          ][i],
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm
                                                                              .Check[
                                                                              index
                                                                            ],
                                                                            i,
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "Check[index][i]"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "ml-0 pl-0 mb-1 pb-0 pt-0 mt-0",
                                                                  attrs: {
                                                                    cols: "2",
                                                                    md: "1",
                                                                    lg: "1"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      staticClass:
                                                                        "ml-0 pl-0 centered-input",
                                                                      attrs: {
                                                                        readonly:
                                                                          ""
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          item.Ans_Letter,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            item,
                                                                            "Ans_Letter",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "item.Ans_Letter"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "mb-1 pb-0 pt-0 mt-0",
                                                                  attrs: {
                                                                    cols: "4",
                                                                    md: "5",
                                                                    lg: "5"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "d-flex mt-7"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-weight-medium mr-1"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              i +
                                                                                1 +
                                                                                ". "
                                                                            )
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "subquestion-content",
                                                                          style: _vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .xs
                                                                            ? "line-height:1.1"
                                                                            : "line-height:1.5",
                                                                          domProps: {
                                                                            innerHTML: _vm._s(
                                                                              item.SubQuestion
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
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "mb-1 pb-0 pt-0 mt-0",
                                                                  attrs: {
                                                                    cols: "4",
                                                                    md: "4",
                                                                    lg: "5"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "d-flex mt-7"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-weight-medium mr-1"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              _vm
                                                                                .Alphabet[
                                                                                i
                                                                              ] +
                                                                                ". "
                                                                            )
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "subchoices-content",
                                                                          style: _vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .xs
                                                                            ? "line-height:1.1"
                                                                            : "line-height:1.5",
                                                                          domProps: {
                                                                            innerHTML: _vm._s(
                                                                              item.SubChoice
                                                                            )
                                                                          }
                                                                        }
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
                                                    }
                                                  )
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
                              item.type == "Essay"
                                ? _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass: "ml-7",
                                          attrs: { "ma-0": "", "pa-0": "" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-2 font-weight-bold"
                                            },
                                            [_vm._v("Answer")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "subtitle-1 d-flex item pl-4 pr-4"
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "post-content",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.SubmittedAnswer[index]
                                                      .Answer
                                                  )
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.SubmittedAnswer[index]
                                                .Answer == null
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "post-content"
                                                    },
                                                    [_vm._v(" N/A")]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]
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