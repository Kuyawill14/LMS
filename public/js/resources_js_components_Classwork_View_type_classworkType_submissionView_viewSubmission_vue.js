"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_classworkType_submissionView_viewSubmission_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["classworkDetails", "details"],
  data: function data() {
    return {
      Qlength: null,
      Details: [],
      Check: [],
      isLoading: true,
      inputCheck: ['True', 'False'],
      SubmittedAnswer: [],
      UpdateDetails: {},
      ViewSubmiisionConditions: {},
      Alphabet: null,
      question_index: 0
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getAll_questions"]),
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format('MM/d/YYYY, hh:mm A');
      }
    },
    fetchQuestions: function fetchQuestions() {
      var _this = this;

      this.ViewSubmiisionConditions.showAnswer = this.classworkDetails.showAnswer;
      this.ViewSubmiisionConditions.showAnswerType = this.classworkDetails.showAnswerType;
      axios.get('/api/question/question-answer/' + this.classworkDetails.id + '/' + this.classworkDetails.class_classwork_id).then(function (res) {
        _this.QuestionAndAnswer = res.data;
        var Submitted_length = _this.classworkDetails.Submitted_Answers.length;
        var Question_length = _this.QuestionAndAnswer.Question.length;
        var diff = Question_length - Submitted_length;

        for (var i = 0; i < diff; i++) {
          if (_this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || _this.QuestionAndAnswer.Question[i].type == 'Identification' || _this.QuestionAndAnswer.Question[i].type == 'True or False' || _this.QuestionAndAnswer.Question[i].type == 'Essay') {
            _this.classworkDetails.Submitted_Answers.push({
              Answer: null,
              Question_id: _this.QuestionAndAnswer.Question[i].id,
              timeConsume: null,
              type: _this.QuestionAndAnswer.Question[i].type
            });
          } else if (_this.QuestionAndAnswer.Question[i].type == 'Matching type') {}
        }

        var _loop = function _loop(_i) {
          var _loop2 = function _loop2(j) {
            if (_this.QuestionAndAnswer.Question[_i].id == _this.classworkDetails.Submitted_Answers[j].Question_id) {
              if (_this.QuestionAndAnswer.Question[_i].type == 'Multiple Choice' || _this.QuestionAndAnswer.Question[_i].type == 'Identification' || _this.QuestionAndAnswer.Question[_i].type == 'True or False') {
                var student_ans;
                _this.SubmittedAnswer[_i] = _this.classworkDetails.Submitted_Answers[j];

                if (_this.QuestionAndAnswer.Question[_i].type == 'Identification') {
                  var hasKey = ('check' in _this.classworkDetails.Submitted_Answers[j]);

                  if (hasKey) {
                    if (_this.classworkDetails.Submitted_Answers[j].check == true) {
                      _this.Check[_i] = true;
                    } else {
                      _this.Check[_i] = false;
                    }
                  } else {
                    student_ans = _this.QuestionAndAnswer.Question[_i].sensitivity ? _this.classworkDetails.Submitted_Answers[j].Answer : _this.classworkDetails.Submitted_Answers[j].Answer != null && _this.classworkDetails.Submitted_Answers[j].Answer != '' ? _this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : _this.classworkDetails.Submitted_Answers[j].Answer;
                    _this.Check[_i] = false;

                    _this.QuestionAndAnswer.Answer[_i].forEach(function (item) {
                      var Question_answer = _this.QuestionAndAnswer.Question[_i].sensitivity ? item.Choice : item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() : item.Choice;

                      if (Question_answer != null) {
                        Question_answer = Question_answer.replace('<p>', '').trim();
                        Question_answer = Question_answer.replace('</p>', '').trim();
                        Question_answer = Question_answer.replace('&nbsp;', '').trim();
                        Question_answer = Question_answer.trim();
                      }

                      if (student_ans != null) {
                        student_ans = student_ans.replace('<p>', '').trim();
                        student_ans = student_ans.replace('</p>', '').trim();
                        student_ans = student_ans.replace('&nbsp;', '').trim();
                        student_ans = student_ans.trim();
                      }

                      if (student_ans == Question_answer) {
                        _this.Check[_i] = true;
                      }
                    });
                  }
                } else if (_this.QuestionAndAnswer.Question[_i].type == 'Multiple Choice') {
                  var _hasKey = ('check' in _this.classworkDetails.Submitted_Answers[j]);

                  if (_hasKey) {
                    _this.Check[_i] = _this.classworkDetails.Submitted_Answers[j].check == true ? true : false;
                  } else {
                    if (_this.QuestionAndAnswer.Question[_i].isNew) {
                      student_ans = _this.classworkDetails.Submitted_Answers[j].Answer;
                      var Question_answer = _this.QuestionAndAnswer.Question[_i].answer;
                      _this.SubmittedAnswer[_i] = _this.classworkDetails.Submitted_Answers[j];

                      if (Question_answer == student_ans) {
                        _this.Check[_i] = true;
                      } else {
                        _this.Check[_i] = false;
                      }
                    } else {
                      console.log(_this.classworkDetails.Submitted_Answers[j].Answer);
                      student_ans = _this.QuestionAndAnswer.Question[_i].sensitivity ? _this.classworkDetails.Submitted_Answers[j].Answer : _this.classworkDetails.Submitted_Answers[j].Answer != null && _this.classworkDetails.Submitted_Answers[j].Answer != '' ? _this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : _this.classworkDetails.Submitted_Answers[j].Answer;
                      _this.SubmittedAnswer[_i] = _this.classworkDetails.Submitted_Answers[j];

                      var _Question_answer = _this.QuestionAndAnswer.Question[_i].sensitivity ? _this.QuestionAndAnswer.Question[_i].answer : _this.QuestionAndAnswer.Question[_i].answer != null && _this.QuestionAndAnswer.Question[_i].answer != '' ? _this.QuestionAndAnswer.Question[_i].answer.toLowerCase() : _this.QuestionAndAnswer.Question[_i].answer;

                      if (_Question_answer == student_ans) {
                        _this.Check[_i] = true;
                      } else {
                        _this.Check[_i] = false;
                      }
                    }
                  }
                } else if (_this.QuestionAndAnswer.Question[_i].type == 'True or False') {
                  var _hasKey2 = ('check' in _this.classworkDetails.Submitted_Answers[j]);

                  if (_hasKey2) {
                    _this.Check[_i] = _this.classworkDetails.Submitted_Answers[j].check == true ? true : false;
                  } else {
                    _this.Check[_i] = false;
                    student_ans = _this.QuestionAndAnswer.Question[_i].sensitivity ? _this.classworkDetails.Submitted_Answers[j].Answer : _this.classworkDetails.Submitted_Answers[j].Answer != null && _this.classworkDetails.Submitted_Answers[j].Answer != '' ? _this.classworkDetails.Submitted_Answers[j].Answer.toLowerCase() : _this.classworkDetails.Submitted_Answers[j].Answer;

                    var _Question_answer2 = _this.QuestionAndAnswer.Question[_i].sensitivity ? _this.QuestionAndAnswer.Question[_i].answer : _this.QuestionAndAnswer.Question[_i].answer != null && _this.QuestionAndAnswer.Question[_i].answer != '' ? _this.QuestionAndAnswer.Question[_i].answer.toLowerCase() : _this.QuestionAndAnswer.Question[_i].answer;

                    if (_Question_answer2 == student_ans) {
                      _this.Check[_i] = true;
                    }
                  }
                }
              } else if (_this.QuestionAndAnswer.Question[_i].type == 'Essay') {
                var _hasKey3 = ('score' in _this.classworkDetails.Submitted_Answers[j]);

                if (!_hasKey3) {
                  _this.classworkDetails.Submitted_Answers[j].score = 0;
                  _this.classworkDetails.Submitted_Answers[j].check = false;
                }

                _this.SubmittedAnswer[_i] = _this.classworkDetails.Submitted_Answers[j];
              } else if (_this.QuestionAndAnswer.Question[_i].type == 'Matching type') {
                var Ans = new Array();
                var match_check = new Array();
                var counter = 0;
                /* this.classworkDetails.Submitted_Answers[j].Answer.forEach(item => {
                   for (let x = 0; x < this.QuestionAndAnswer.Answer[i].SubQuestion.length; x++) {
                         if (this.QuestionAndAnswer.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                           match_check[counter] = true;
                           if (this.QuestionAndAnswer.Answer[i].SubQuestion[x].answer_id == item.Ans_id) {
                               match_check[counter] = true;
                               //this.ViewDetails.points += matchpoints;
                             } else {
                               match_check[counter] = false;
                           }
                       }
                   }
                   counter+=1;   
                });  */

                var Ans_list = {};
                Ans_list.SubQuestion = [];
                Ans_list.SubAnswer = [];
                var sub_ques_count = 0;

                _this.classworkDetails.Submitted_Answers[j].question_pattern.SubQuestion.forEach(function (sub_ques) {
                  _this.QuestionAndAnswer.Answer[_i].SubQuestion.forEach(function (subQuestion) {
                    if (sub_ques.id == subQuestion.id) {
                      Ans_list.SubQuestion.push({
                        Ans_Letter: null,
                        Answer: null,
                        SubQuestion: subQuestion.sub_question,
                        SubQuestion_id: subQuestion.id,
                        is_correct: true,
                        Correct_Answer: subQuestion.answer_id,
                        correct_ans_letter: null,
                        isCheck: null
                      });
                    }
                  });

                  _this.classworkDetails.Submitted_Answers[j].Answer.forEach(function (user_ans) {
                    Ans_list.SubQuestion.forEach(function (ans) {
                      if (user_ans.subquestion_id == ans.SubQuestion_id) {
                        ans.Ans_Letter = user_ans.Ans_letter;
                        ans.Answer = user_ans.Answers;
                        ans.user_ans_id = user_ans.Ans_id;

                        var _hasKey4 = ('isCheck' in user_ans);

                        if (_hasKey4) {
                          ans.isCheck = user_ans.isCheck;
                        } else {
                          ans.isCheck = null;
                        }
                      }
                    });
                  });
                });

                _this.classworkDetails.Submitted_Answers[j].question_pattern.SubAnswer.forEach(function (sub_ans) {
                  _this.QuestionAndAnswer.Answer[_i].SubAnswer.forEach(function (subAnswer) {
                    if (sub_ans.id == subAnswer.id) {
                      Ans_list.SubAnswer.push({
                        SubChoice: subAnswer.Choice,
                        SubChoice_id: subAnswer.id
                      });
                    }
                  });
                });

                Ans_list.SubQuestion.forEach(function (sub) {
                  if (sub.isCheck == null) {
                    var string = sub.Ans_Letter != null ? sub.Ans_Letter.replace(/\./g, '') : sub.Ans_Letter;
                    var letter = string != null ? string.trim() : null;

                    if (letter != null ? letter.toUpperCase() == sub.correct_ans_letter.toUpperCase() : false) {
                      match_check[counter] = true;

                      _this.classworkDetails.Submitted_Answers.forEach(function (submi_ans) {
                        if (submi_ans.Question_id == _this.QuestionAndAnswer.Question[_i].id) {
                          submi_ans.Answer.forEach(function (submitted_as) {
                            if (submitted_as.subquestion_id == sub.SubQuestion_id) {
                              submitted_as.Ans_id = sub.Correct_Answer;
                              submitted_as.isCheck = true;
                              return;
                            }
                          });
                          return;
                        }
                      });
                    } else {
                      _this.classworkDetails.Submitted_Answers.forEach(function (submi_ans) {
                        if (submi_ans.Question_id == _this.QuestionAndAnswer.Question[_i].id) {
                          submi_ans.Answer.forEach(function (submitted_as) {
                            if (submitted_as.subquestion_id == sub.SubQuestion_id) {
                              submitted_as.isCheck = false;
                              return;
                            }
                          });
                          return;
                        }
                      });

                      match_check[counter] = false;
                    }
                  } else {
                    match_check[counter] = sub.isCheck ? true : false;
                  }

                  counter += 1;
                });
                var tmpChoices = new Array();

                _this.classworkDetails.Submitted_Answers[j].Choices_id.forEach(function (item) {
                  _this.QuestionAndAnswer.Answer[_i].SubAnswer.forEach(function (choice) {
                    if (item.choice_id == choice.id) {
                      tmpChoices.push({
                        id: choice.id,
                        choice: choice.Choice
                      });
                    }
                  });
                });

                _this.SubmittedAnswer[_i] = Ans_list;
                _this.Check[_i] = match_check;
              }
            }
          };

          for (var j = 0; j < _this.classworkDetails.Submitted_Answers.length; j++) {
            _loop2(j);
          }
        };

        for (var _i = 0; _i < _this.QuestionAndAnswer.Question.length; _i++) {
          _loop(_i);
        }

        _this.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    this.fetchQuestions();
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.Alphabet = alphabet;
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered-input >>> input {\n      text-align: center\n}\n.post-content img{\n        \n     max-height: 8rem !important;\n}\n.centered-input input {\n  text-align: center\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmission.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSubmission.vue?vue&type=template&id=5124b4c7& */ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7&");
/* harmony import */ var _viewSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewSubmission.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js&");
/* harmony import */ var _viewSubmission_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewSubmission.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _viewSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__.render,
  _viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmission.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmission_vue_vue_type_template_id_5124b4c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmission.vue?vue&type=template&id=5124b4c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue?vue&type=template&id=5124b4c7& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.isLoading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "500px" } },
            [
              _c(
                "v-row",
                { attrs: { "align-content": "center", justify: "center" } },
                [
                  _c("vue-element-loading", {
                    attrs: {
                      active: _vm.isLoading,
                      text: "Loading",
                      duration: "0.7",
                      textStyle: { fontSize: "18px" },
                      spinner: "line-scale",
                      color: "#EF6C00",
                      size: "50"
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
      !_vm.isLoading
        ? _c(
            "div",
            { staticClass: "pl-1 pr-1" },
            [
              _c(
                "v-row",
                { staticClass: "mb-4" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-left pl-0",
                              attrs: { cols: "6" }
                            },
                            [
                              _vm.$vuetify.breakpoint.mdAndUp
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "", rounded: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$emit("closeViewing")
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v("mdi-close")
                                      ]),
                                      _vm._v(
                                        " Close\n                          "
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "text-right", attrs: { cols: "6" } },
                            [
                              _vm.$vuetify.breakpoint.mdAndUp
                                ? _c(
                                    "v-chip",
                                    {
                                      staticClass: "ma-2",
                                      attrs: { color: "success" }
                                    },
                                    [
                                      _c("div", { staticClass: "body-2" }, [
                                        _vm._v(
                                          "Score: " +
                                            _vm._s(_vm.classworkDetails.score) +
                                            " /" +
                                            _vm._s(_vm.classworkDetails.points)
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c(
                              "div",
                              { staticClass: "d-flex" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mr-2",
                                    attrs: {
                                      small: _vm.$vuetify.breakpoint.xs,
                                      disabled: _vm.question_index == 0,
                                      color: "primary",
                                      outlined: "",
                                      rounded: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.question_index--
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Previous\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.$vuetify.breakpoint.mdAndUp
                                  ? _c("v-spacer")
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "pl-9 pr-9",
                                    attrs: {
                                      small: _vm.$vuetify.breakpoint.xs,
                                      disabled:
                                        _vm.question_index + 1 ==
                                        _vm.QuestionAndAnswer.Question.length,
                                      color: "primary",
                                      rounded: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.question_index++
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Next\n                                "
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
              ),
              _vm._v(" "),
              _vm._l(_vm.QuestionAndAnswer.Question, function(item, index) {
                return _c(
                  "v-container",
                  { key: index, attrs: { "ma-0": "", "pa-0": "" } },
                  [
                    _vm.question_index == index
                      ? _c(
                          "div",
                          { staticClass: "ma-0 pa-0" },
                          [
                            _c(
                              "v-container",
                              { attrs: { "ma-0": "", "pa-0": "" } },
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
                                    _vm.classworkDetails.showAnswer == true &&
                                    item.type != "Matching type" &&
                                      item.type != "Essay"
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  color: _vm.Check[index]
                                                    ? "success"
                                                    : "red"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      _vm.Check[index]
                                                        ? "mdi-checkbox-marked"
                                                        : "mdi-close-box-outline"
                                                    )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.classworkDetails.showAnswer == true &&
                                    item.type == "Essay"
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "v-chip",
                                              {
                                                staticClass:
                                                  "mr-2 mb-2 mt-0 pt-0",
                                                attrs: {
                                                  outlined: "",
                                                  color: "blue"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "body-2" },
                                                  [
                                                    _vm._v(
                                                      "Score: " +
                                                        _vm._s(
                                                          _vm.SubmittedAnswer[
                                                            index
                                                          ].score
                                                        ) +
                                                        " /" +
                                                        _vm._s(item.points)
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "d-flex mt-1" }, [
                                      _c(
                                        "h3",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v(_vm._s(index + 1) + ".")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass:
                                          "post-content ml-1 mb-0 pb-0",
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
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                item.attachments
                                  ? _c(
                                      "v-row",
                                      _vm._l(item.attachments, function(
                                        attach,
                                        num
                                      ) {
                                        return _c(
                                          "v-col",
                                          {
                                            key: num,
                                            attrs: { cols: "12", md: "4" }
                                          },
                                          [
                                            _c("v-img", {
                                              staticClass:
                                                "white--text ma-0 pa-0 ",
                                              staticStyle: {
                                                border: "1px solid black",
                                                "max-width": "100%",
                                                "max-height": "23rem !important"
                                              },
                                              attrs: {
                                                alt: "Image",
                                                contain: "",
                                                src: attach.link
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "placeholder",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            staticClass:
                                                              "fill-height ma-0",
                                                            attrs: {
                                                              align: "center",
                                                              justify: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color: "red"
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
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
                            ),
                            _vm._v(" "),
                            item.type == "Multiple Choice"
                              ? _c(
                                  "v-container",
                                  { attrs: { "ml-0": "", "pl-0": "" } },
                                  _vm._l(
                                    _vm.QuestionAndAnswer.Answer[index],
                                    function(Ans, i) {
                                      return _c(
                                        "v-container",
                                        {
                                          key: i,
                                          class: !_vm.$vuetify.breakpoint.xs
                                            ? "d-flex flex-row ma-0 pa-0 mb-1 ml-8"
                                            : "d-flex flex-row ma-0 pa-0 pl-2"
                                        },
                                        [
                                          item.isNew
                                            ? _c(
                                                "v-radio-group",
                                                {
                                                  staticClass: "ma-0 pa-0",
                                                  attrs: {
                                                    name: "option" + index
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.SubmittedAnswer[index]
                                                        .Answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.SubmittedAnswer[
                                                          index
                                                        ],
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
                                                      readonly: "",
                                                      color: "primary",
                                                      value: Ans.id
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c(
                                                "v-radio-group",
                                                {
                                                  staticClass: "ma-0 pa-0",
                                                  attrs: {
                                                    name: "option" + index
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.SubmittedAnswer[index]
                                                        .Answer,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.SubmittedAnswer[
                                                          index
                                                        ],
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
                                                      readonly: "",
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
                                              item.isNew
                                                ? _c("span", [
                                                    item.answer == Ans.id
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "caption primary--text ml-1 mt-1"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "(correct answer)"
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("span", [
                                                item.answer == Ans.Choice
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "caption primary--text ml-1 mt-1"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "(correct answer)"
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ])
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }
                                  ),
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            item.type == "Identification"
                              ? _c(
                                  "v-container",
                                  { attrs: { "ma-0": "", "pa-0": "" } },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "pl-3 mt-0 pt-0",
                                        attrs: {
                                          ntainer: "",
                                          "ma-0": "",
                                          "pa-0": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Correct Answer(s)")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.QuestionAndAnswer.Answer[index],
                                          function(Ans, i) {
                                            return _c(
                                              "div",
                                              {
                                                key: i,
                                                staticClass:
                                                  " ma-0 pa-0 d-flex pl-3 success--text"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "pr-2" },
                                                  [_vm._v("• ")]
                                                ),
                                                _vm._v(" "),
                                                _c("span", {
                                                  staticClass:
                                                    "post-content pa-0 ma-0",
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      Ans.Choice
                                                    )
                                                  }
                                                })
                                              ]
                                            )
                                          }
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "subtitle-2 font-weight-bold"
                                          },
                                          [_vm._v("Your Answer")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "subtitle-1 d-flex item ml-4 mt-0 pt-0"
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
                                            _vm.SubmittedAnswer[index].Answer ==
                                            null
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "post-content"
                                                  },
                                                  [_vm._v(" N/A")]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            item.type == "True or False"
                              ? _c(
                                  "v-container",
                                  { attrs: { "ma-0": "", "pa-0": "" } },
                                  _vm._l(_vm.inputCheck, function(x, n) {
                                    return _c(
                                      "v-container",
                                      {
                                        key: n,
                                        class: !_vm.$vuetify.breakpoint.xs
                                          ? "d-flex flex-row ma-0 pa-0 mb-1 ml-8"
                                          : "d-flex flex-row ma-0 pa-0 pl-2"
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
                                                readonly: "",
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
                                              "\n                        " +
                                                _vm._s(_vm.inputCheck[n]) +
                                                "\n                         "
                                            ),
                                            item.answer == _vm.inputCheck[n]
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
                                  { attrs: { "ma-0": "", "pa-0": "" } },
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
                                              cols: "12"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-container",
                                              { staticClass: "ma-0 pa-0" },
                                              [
                                                _c(
                                                  "v-container",
                                                  { staticClass: "mb-0 pb-0" },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c("v-col", {
                                                          attrs: { cols: "1" }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticClass:
                                                              "font-weight-bold",
                                                            attrs: { cols: "6" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Column A\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticClass:
                                                              "font-weight-bold",
                                                            attrs: { cols: "5" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            Column B\n                                        "
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
                                                _c(
                                                  "v-container",
                                                  {
                                                    staticClass:
                                                      "pl-0 mb-0 pb-0 mt-2"
                                                  },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      {
                                                        staticClass: "mb-0 pb-0"
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: { cols: "7" }
                                                          },
                                                          [
                                                            _c(
                                                              "v-row",
                                                              _vm._l(
                                                                _vm
                                                                  .SubmittedAnswer[
                                                                  index
                                                                ].SubQuestion,
                                                                function(
                                                                  item,
                                                                  i
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      key:
                                                                        item.id,
                                                                      class: _vm
                                                                        .$vuetify
                                                                        .breakpoint
                                                                        .mdAndUp
                                                                        ? "d-flex flex-row pa-0 pl-12"
                                                                        : "d-flex flex-row pa-0 pl-5",
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm
                                                                        .classworkDetails
                                                                        .showAnswer ==
                                                                      true
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "mt-0 pt-0 mb-0 pb-0 pa-0"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  staticClass:
                                                                                    "mt-2 mr-2",
                                                                                  attrs: {
                                                                                    color: _vm
                                                                                      .Check[
                                                                                      index
                                                                                    ][
                                                                                      i
                                                                                    ]
                                                                                      ? "success"
                                                                                      : "red"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    " " +
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .Check[
                                                                                          index
                                                                                        ][
                                                                                          i
                                                                                        ]
                                                                                          ? "mdi-checkbox-marked"
                                                                                          : "mdi-close-box-outline"
                                                                                      )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "mt-0 pt-0 mb-0 pb-0 pa-0"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-text-field",
                                                                            {
                                                                              staticClass:
                                                                                "centered-input pt-0 mt-0",
                                                                              style: _vm
                                                                                .$vuetify
                                                                                .breakpoint
                                                                                .mdAndUp
                                                                                ? "max-width:60px"
                                                                                : "max-width:80px",
                                                                              attrs: {
                                                                                "hide-details":
                                                                                  "",
                                                                                outlined:
                                                                                  "",
                                                                                readonly:
                                                                                  "",
                                                                                dense:
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "d-flex flex-row mt-2 pl-2",
                                                                          style: !_vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .mdAndUp
                                                                            ? "width:100%;font-size:15px;"
                                                                            : "width:100%;"
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
                                                                  )
                                                                }
                                                              ),
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: { cols: "5" }
                                                          },
                                                          [
                                                            _c(
                                                              "v-row",
                                                              _vm._l(
                                                                _vm
                                                                  .SubmittedAnswer[
                                                                  index
                                                                ].SubAnswer,
                                                                function(
                                                                  pairList,
                                                                  i
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      key: i,
                                                                      staticClass:
                                                                        "d-flex flex-row pa-0",
                                                                      attrs: {
                                                                        cols:
                                                                          "12"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "d-flex flex-row mt-2 pl-4",
                                                                          style: !_vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .mdAndUp
                                                                            ? "width:100%;font-size:15px;"
                                                                            : "width:100%;"
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
                                                                              domProps: {
                                                                                innerHTML: _vm._s(
                                                                                  pairList.SubChoice
                                                                                )
                                                                              }
                                                                            }
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                }
                                                              ),
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
                              : _vm._e(),
                            _vm._v(" "),
                            item.type == "Essay"
                              ? _c(
                                  "v-container",
                                  { attrs: { "ma-0": "", "pa-0": "" } },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "pl-3 mt-1 pt-0",
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
                                              "subtitle-1 d-flex item ml-4 mt-0 pt-0"
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
                                            _vm.SubmittedAnswer[index].Answer ==
                                            null
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "post-content"
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
                      : _vm._e()
                  ]
                )
              })
            ],
            2
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