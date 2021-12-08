"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-objective_v-5caf841"],{

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
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["classworkDetails", "ViewDetails", "SubmittedLength", "currentIndex"],
  components: {
    resetConfirmation: resetConfirmation
  },
  data: function data() {
    return {
      isUpdatingComment: false,
      isUpdatingComment_id: null,
      isUpdatingComment_old_data: null,
      Qlength: null,
      Check: [],
      isLoading: true,
      inputCheck: ['True', 'False'],
      TrueOrFalse: ['<p>True</p>', '<p>False</p>'],
      SubmittedAnswer: [],
      UpdateDetails: {},
      dialog: false,
      Alphabet: null,
      isCommenting: false,
      comment: '',
      isAlerting: false,
      isReseting: false,
      isScrolling: false,
      isLoaded: false,
      questionIndex: 0,
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      },
      pointsRules: [function (v) {
        return !!v || 'Points is required';
      }, function (v) {
        return v && v >= 0 || "Points should be above or equal to 0";
      }]
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser', 'getAll_questions']),
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('MMMM, DD YYYY, h:mm a');
      }
    },
    fetchQuestions: function fetchQuestions() {
      var _this = this;

      this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(function (res) {
        var Submitted_length = _this.ViewDetails.Submitted_Answers.length;
        var Question_length = _this.getAll_questions.Question.length;
        var diff = Question_length - Submitted_length;
        var counter;

        var _loop = function _loop(j) {
          counter = 0;

          for (var k = 0; k < Submitted_length; k++) {
            if (_this.getAll_questions.Question[j].id != _this.ViewDetails.Submitted_Answers[k].Question_id) {
              counter++;
            }
          }

          if (counter == Submitted_length) {
            if (_this.getAll_questions.Question[j].type == 'Multiple Choice' || _this.getAll_questions.Question[j].type == 'Identification' || _this.getAll_questions.Question[j].type == 'True or False') {
              _this.ViewDetails.Submitted_Answers.push({
                Answer: null,
                Question_id: _this.getAll_questions.Question[j].id,
                timeConsume: null,
                type: _this.getAll_questions.Question[j].type
              });
            } else if (_this.getAll_questions.Question[j].type == 'Essay') {
              _this.ViewDetails.Submitted_Answers.push({
                Answer: null,
                Question_id: _this.getAll_questions.Question[j].id,
                timeConsume: null,
                type: _this.getAll_questions.Question[j].type,
                check: false
              });
            } else if (_this.getAll_questions.Question[j].type == 'Matching type') {
              _this.ViewDetails.Submitted_Answers.push({
                Answer: [],
                type: 'Matching type',
                Question_id: _this.getAll_questions.Question[j].id,
                Choices_id: []
              });

              var _counter = 0;

              _this.getAll_questions.Answer[j].SubQuestion.forEach(function (item) {
                _this.ViewDetails.Submitted_Answers[_this.ViewDetails.Submitted_Answers.length - 1].Choices_id.push({
                  choice_id: _this.getAll_questions.Answer[j].SubAnswer[_counter].id
                });

                _this.ViewDetails.Submitted_Answers[_this.ViewDetails.Submitted_Answers.length - 1].Answer.push({
                  Ans_id: null,
                  Ans_letter: null,
                  Answers: null,
                  subquestion_id: item.id
                });

                _counter++;
              });
            }
          }
        };

        for (var j = 0; j < Question_length; j++) {
          _loop(j);
        }

        var _loop2 = function _loop2(i) {
          for (var _j = 0; _j < _this.ViewDetails.Submitted_Answers.length; _j++) {
            if (_this.getAll_questions.Question[i].id == _this.ViewDetails.Submitted_Answers[_j].Question_id) {
              if (_this.getAll_questions.Question[i].type == 'Multiple Choice' || _this.getAll_questions.Question[i].type == 'Identification' || _this.getAll_questions.Question[i].type == 'True or False') {
                (function () {
                  var student_ans = _this.getAll_questions.Question[i].sensitivity ? _this.ViewDetails.Submitted_Answers[_j].Answer : _this.ViewDetails.Submitted_Answers[_j].Answer != null && _this.ViewDetails.Submitted_Answers[_j].Answer != '' ? _this.ViewDetails.Submitted_Answers[_j].Answer.toLowerCase() : _this.ViewDetails.Submitted_Answers[_j].Answer;
                  _this.SubmittedAnswer[i] = _this.ViewDetails.Submitted_Answers[_j];

                  if (_this.getAll_questions.Question[i].type == 'Identification') {
                    if (_this.getAll_questions.Answer[i].options.length == 0) {
                      var Question_answer = _this.getAll_questions.Question[i].sensitivity ? _this.getAll_questions.Question[i].answer : _this.getAll_questions.Question[i].answer != null && _this.getAll_questions.Question[i].answer != '' ? _this.getAll_questions.Question[i].answer.toLowerCase() : _this.getAll_questions.Question[i].answer;

                      if (Question_answer == student_ans) {
                        _this.Check[i] = true;
                      } else {
                        _this.Check[i] = false;
                      }
                    } else {
                      _this.Check[i] = false;

                      _this.getAll_questions.Answer[i].options.forEach(function (item) {
                        var Question_answer = _this.getAll_questions.Question[i].sensitivity ? item.Choice : item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() : item.Choice;

                        if (student_ans == Question_answer) {
                          _this.Check[i] = true;
                        }
                      });
                    }
                  } else {
                    var _Question_answer = _this.getAll_questions.Question[i].sensitivity ? _this.getAll_questions.Question[i].answer : _this.getAll_questions.Question[i].answer != null && _this.getAll_questions.Question[i].answer != '' ? _this.getAll_questions.Question[i].answer.toLowerCase() : _this.getAll_questions.Question[i].answer;

                    if (_Question_answer == student_ans) {
                      _this.Check[i] = true;
                    } else {
                      _this.Check[i] = false;
                    }
                  }
                })();
              } else if (_this.getAll_questions.Question[i].type == 'Essay') {
                _this.SubmittedAnswer[i] = _this.ViewDetails.Submitted_Answers[_j];
                _this.Check[i] = _this.ViewDetails.Submitted_Answers[_j].check;
              } else if (_this.getAll_questions.Question[i].type == 'Matching type') {
                (function () {
                  var Ans = new Array();
                  var match_check = new Array();
                  var counter = 0;

                  _this.ViewDetails.Submitted_Answers[_j].Answer.forEach(function (item) {
                    for (var x = 0; x < _this.getAll_questions.Answer[i].SubQuestion.length; x++) {
                      if (_this.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                        Ans.push({
                          Ans_Letter: item.Ans_letter,
                          Answer: item.Answers,
                          SubQuestion: _this.getAll_questions.Answer[i].SubQuestion[x].sub_question,
                          SubChoice: _this.getAll_questions.Answer[i].SubAnswer[x].Choice,
                          Correct_Answer: null
                        });

                        if (_this.getAll_questions.Answer[i].SubAnswer[x].Choice == item.Answers) {
                          match_check[counter] = true;
                        } else {
                          match_check[counter] = false; //Ans[x].Correct_Answer = this.Alphabet[x]
                        }
                      }
                    }

                    counter += 1;
                  });

                  var tmpChoices = new Array();

                  _this.ViewDetails.Submitted_Answers[_j].Choices_id.forEach(function (item) {
                    _this.getAll_questions.Answer[i].SubAnswer.forEach(function (choice) {
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

                  _this.SubmittedAnswer[i] = Ans;
                  _this.Check[i] = match_check;
                })();
              }
            }
          }
        };

        for (var i = 0; i < _this.getAll_questions.Question.length; i++) {
          _loop2(i);
        }

        _this.isLoaded = true;

        _this.$emit('isMounted');
      });
    },
    ReMatchQuestions: function ReMatchQuestions() {
      var _this2 = this;

      var Submitted_length = this.ViewDetails.Submitted_Answers.length;
      var Question_length = this.getAll_questions.Question.length;
      var diff = Question_length - Submitted_length;
      var counter;

      var _loop3 = function _loop3(j) {
        counter = 0;

        for (var k = 0; k < Submitted_length; k++) {
          if (_this2.getAll_questions.Question[j].id != _this2.ViewDetails.Submitted_Answers[k].Question_id) {
            counter++;
          }
        }

        if (counter == Submitted_length) {
          if (_this2.getAll_questions.Question[j].type == 'Multiple Choice' || _this2.getAll_questions.Question[j].type == 'Identification' || _this2.getAll_questions.Question[j].type == 'True or False') {
            _this2.ViewDetails.Submitted_Answers.push({
              Answer: null,
              Question_id: _this2.getAll_questions.Question[j].id,
              timeConsume: null,
              type: _this2.getAll_questions.Question[j].type
            });
          } else if (_this2.getAll_questions.Question[j].type == 'Essay') {
            _this2.ViewDetails.Submitted_Answers.push({
              Answer: null,
              Question_id: _this2.getAll_questions.Question[j].id,
              timeConsume: null,
              type: _this2.getAll_questions.Question[j].type,
              check: false
            });
          } else if (_this2.getAll_questions.Question[j].type == 'Matching type') {
            _this2.ViewDetails.Submitted_Answers.push({
              Answer: [],
              type: 'Matching type',
              Question_id: _this2.getAll_questions.Question[j].id,
              Choices_id: []
            });

            var _counter2 = 0;

            _this2.getAll_questions.Answer[j].SubQuestion.forEach(function (item) {
              _this2.ViewDetails.Submitted_Answers[_this2.ViewDetails.Submitted_Answers.length - 1].Choices_id.push({
                choice_id: _this2.getAll_questions.Answer[j].SubAnswer[_counter2].id
              });

              _this2.ViewDetails.Submitted_Answers[_this2.ViewDetails.Submitted_Answers.length - 1].Answer.push({
                Ans_id: null,
                Ans_letter: null,
                Answers: null,
                subquestion_id: item.id
              });

              _counter2++;
            });
          }
        }
      };

      for (var j = 0; j < Question_length; j++) {
        _loop3(j);
      }

      var _loop4 = function _loop4(i) {
        for (var _j2 = 0; _j2 < _this2.ViewDetails.Submitted_Answers.length; _j2++) {
          if (_this2.getAll_questions.Question[i].id == _this2.ViewDetails.Submitted_Answers[_j2].Question_id) {
            (function () {
              var student_ans = _this2.getAll_questions.Question[i].sensitivity ? _this2.ViewDetails.Submitted_Answers[_j2].Answer : _this2.ViewDetails.Submitted_Answers[_j2].Answer != null && _this2.ViewDetails.Submitted_Answers[_j2].Answer != '' ? _this2.ViewDetails.Submitted_Answers[_j2].Answer.toLowerCase() : _this2.ViewDetails.Submitted_Answers[_j2].Answer;

              if (_this2.getAll_questions.Question[i].type == 'Multiple Choice' || _this2.getAll_questions.Question[i].type == 'Identification' || _this2.getAll_questions.Question[i].type == 'True or False') {
                _this2.SubmittedAnswer[i] = _this2.ViewDetails.Submitted_Answers[_j2];

                if (_this2.getAll_questions.Question[i].type == 'Identification') {
                  if (_this2.getAll_questions.Answer[i].options.length == 0) {
                    var Question_answer = _this2.getAll_questions.Question[i].sensitivity ? _this2.getAll_questions.Question[i].answer : _this2.getAll_questions.Question[i].answer != null && _this2.getAll_questions.Question[i].answer != '' ? _this2.getAll_questions.Question[i].answer.toLowerCase() : _this2.getAll_questions.Question[i].answer;

                    if (Question_answer == student_ans) {
                      _this2.Check[i] = true;
                    } else {
                      _this2.Check[i] = false;
                    }
                  } else {
                    _this2.Check[i] = false;

                    _this2.getAll_questions.Answer[i].options.forEach(function (item) {
                      var Question_answer = _this2.getAll_questions.Question[i].sensitivity ? item.Choice : item.Choice != null && item.Choice != '' ? item.Choice.toLowerCase() : item.Choice;

                      if (student_ans == Question_answer) {
                        _this2.Check[i] = true;
                      }
                    });
                  }
                } else {
                  var _Question_answer2 = _this2.getAll_questions.Question[i].sensitivity ? _this2.getAll_questions.Question[i].answer : _this2.getAll_questions.Question[i].answer != null && _this2.getAll_questions.Question[i].answer != '' ? _this2.getAll_questions.Question[i].answer.toLowerCase() : _this2.getAll_questions.Question[i].answer;

                  if (_Question_answer2 == student_ans) {
                    _this2.Check[i] = true;
                  } else {
                    _this2.Check[i] = false;
                  }
                }
              } else if (_this2.getAll_questions.Question[i].type == 'Essay') {
                _this2.SubmittedAnswer[i] = _this2.ViewDetails.Submitted_Answers[_j2];
                _this2.Check[i] = _this2.ViewDetails.Submitted_Answers[_j2].check;
              } else if (_this2.getAll_questions.Question[i].type == 'Matching type') {
                var Ans = new Array();
                var match_check = new Array();
                var _counter3 = 0;

                _this2.ViewDetails.Submitted_Answers[_j2].Answer.forEach(function (item) {
                  for (var x = 0; x < _this2.getAll_questions.Answer[i].SubQuestion.length; x++) {
                    if (_this2.getAll_questions.Answer[i].SubQuestion[x].id == item.subquestion_id) {
                      Ans.push({
                        Ans_Letter: item.Ans_letter,
                        Answer: item.Answers,
                        SubQuestion: _this2.getAll_questions.Answer[i].SubQuestion[x].sub_question,
                        SubChoice: _this2.getAll_questions.Answer[i].SubAnswer[x].Choice,
                        Correct_Answer: null
                      });

                      if (_this2.getAll_questions.Answer[i].SubAnswer[x].Choice == item.Answers) {
                        match_check[_counter3] = true;
                      } else {
                        match_check[_counter3] = false; //Ans[x].Correct_Answer = this.Alphabet[x]
                      }
                    }
                  }

                  _counter3 += 1;
                });

                var tmpChoices = new Array();

                _this2.ViewDetails.Submitted_Answers[_j2].Choices_id.forEach(function (item) {
                  _this2.getAll_questions.Answer[i].SubAnswer.forEach(function (choice) {
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

                _this2.SubmittedAnswer[i] = Ans;
                _this2.Check[i] = match_check;
              }
            })();
          }
        }
      };

      for (var i = 0; i < this.getAll_questions.Question.length; i++) {
        _loop4(i);
      }

      this.isLoaded = true;
    },
    UpdateScore: function UpdateScore(type, id, data, points, index, answer) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.UpdateDetails.check = data;
                _this3.UpdateDetails.points = points;
                _this3.UpdateDetails.question_id = id;
                _this3.UpdateDetails.answer = answer;
                _this3.UpdateDetails.user_id = _this3.ViewDetails.user_id; //this.UpdateDetails.type = type;

                axios.put('/api/teacher/update-score/' + _this3.ViewDetails.id, _this3.UpdateDetails).then(function (res) {
                  if (res.status == 200) {
                    if (type == 'Essay') {
                      if (data == true) {
                        _this3.ViewDetails.points = _this3.ViewDetails.points + points;
                      } else {
                        _this3.ViewDetails.points = _this3.ViewDetails.points - points;
                      }
                    } else {
                      if (data == true) {
                        _this3.SubmittedAnswer[index] = answer;
                        _this3.ViewDetails.points = _this3.ViewDetails.points + points;
                      } else {
                        _this3.SubmittedAnswer[index] = "";
                        _this3.ViewDetails.points = _this3.ViewDetails.points - points;
                      }
                    }
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    ResetSubmission: function ResetSubmission() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //////console.log(this.ListData[this.resetIndex].points)
                _this4.isReseting = true;

                if (_this4.ViewDetails.status != null && _this4.ViewDetails.status != '') {
                  axios.put('/api/teacher/reset-obj/' + _this4.ViewDetails.id).then(function (res) {
                    if (res.status == 200) {
                      _this4.dialog = !_this4.dialog;
                      _this4.isReseting = false;

                      _this4.$emit('RestSubmission');
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
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this5.isCommenting = true;
                data.classwork_id = details.classwork_id;
                data.course_id = _this5.$route.params.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.comment = _this5.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  if (res.status == 200) {
                    _this5.ViewDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: _this5.get_CurrentUser.firstName + ' ' + _this5.get_CurrentUser.lastName,
                      profile_pic: _this5.get_CurrentUser.profile_pic,
                      u_id: _this5.get_CurrentUser.user_id,
                      comment_date: new Date()
                    });

                    _this5.comment = '';
                  }
                });
                _this5.isCommenting = false;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this6.ViewDetails.comments.splice(index, 1);
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
    UpdateComment: function UpdateComment(content, id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                axios.put('/api/post/comment/update/' + id, {
                  comment: content
                }).then(function (res) {
                  _this7.isUpdatingComment = false;
                  _this7.isUpdatingComment_id = null;
                  _this7.isUpdatingComment_old_data = null;
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    alertStudent: function alertStudent() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = {};
                _this8.isAlerting = true;
                data.user_id = _this8.ViewDetails.user_id;
                data.classwork_name = _this8.classworkDetails.title;
                data.classwork_id = _this8.classworkDetails.id;
                data.course_id = _this8.classworkDetails.course_id;
                data.firstName = _this8.ViewDetails.firstName;
                axios.post('/api/teacher/alert-student', data).then(function (res) {
                  if (res.data.success == true) {
                    _this8.toastSuccess(res.data.message);

                    _this8.isAlerting = false;
                  }
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    NextStudent: function NextStudent() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this9.questionIndex = 0;
                _this9.SubmittedAnswer = [];
                _this9.Check = [];
                _this9.isLoaded = false;

                _this9.$emit("nextStudent");

                setTimeout(function () {
                  return _this9.ReMatchQuestions();
                }, 300);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    PrevStudent: function PrevStudent() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this10.questionIndex = 0;
                _this10.SubmittedAnswer = [];
                _this10.Check = [];
                _this10.isLoaded = false;

                _this10.$emit("prevStudent");

                setTimeout(function () {
                  return _this10.ReMatchQuestions();
                }, 300);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit('closeDialog');
  },
  mounted: function mounted() {
    if (this.ViewDetails.Submitted_Answers != null && this.ViewDetails.Submitted_Answers != '') {
      this.fetchQuestions();
    } else {
      this.isLoaded = true;
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.post-content  img[data-v-6ded7147]{\r\n        max-height: 15rem !important;\n}\n.fixed-bar[data-v-6ded7147] {\r\n    position: sticky;\r\n    position: -webkit-sticky; /* for Safari */\r\n    top: 0em;\r\n    z-index: 2;\n}\r\n    /* width */\n[data-v-6ded7147]::-webkit-scrollbar {\r\n  width: 5px;\n}\r\n\r\n/* Track */\n[data-v-6ded7147]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n \r\n/* Handle */\n[data-v-6ded7147]::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n   border-radius: 3px\n}\r\n\r\n/* Handle on hover */\n[data-v-6ded7147]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\n.centered-input[data-v-6ded7147] input {\r\n      text-align: center\n}\n.post-content img[data-v-6ded7147]{\r\n        \r\n     max-height: 8rem !important;\n}\n.centered-input input[data-v-6ded7147] {\r\n  text-align: center\n}\r\n /* width */\n[data-v-6ded7147]::-webkit-scrollbar {\r\n  width: 8px;\n}\r\n\r\n/* Track */\n[data-v-6ded7147]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n \r\n/* Handle */\n[data-v-6ded7147]::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\r\n\r\n/* Handle on hover */\n[data-v-6ded7147]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\n.CommentEditor >  iframe[data-v-6ded7147]{\r\n    width: 100% !important;\r\nheight: 20rem !important;\n}\n.CommentEditor >  .ql-editor img[data-v-6ded7147]{\r\n\r\n    max-height: 25rem !important;\n}\n.CommentEditor >  .ql-container[data-v-6ded7147]{\r\n    max-height: 70rem;\n}\r\n\r\n        \r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.commentContent  img{\n    max-width: 100% !important;\n    max-height: 10rem !important;\n}\ndiv.ql-tooltip{\n    left: 0px !important;\n    top: -10px !important;\n}\ndiv>.ql-tooltip-arrow{\n    display: none !important;\n}\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _check_objective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-objective.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
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

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_objective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-objective.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-objective.vue?vue&type=style&index=1&lang=css&");


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
    "div",
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
        "v-row",
        { attrs: { "no-gutters": "", align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { staticClass: "mb-2 mt-0 pt-0", attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "pl-2 pr-4 pb-2",
                  attrs: { elevation: "2", outlined: "" }
                },
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            { attrs: { size: "52", color: "primary" } },
                            [
                              _c(
                                "v-icon",
                                { attrs: { color: "white", size: "30" } },
                                [
                                  _vm._v(
                                    " \r\n                                           mdi-book-open-variant\r\n                                       "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                {
                                  staticClass: "font-weight-bold",
                                  staticStyle: { "font-size": "22px" }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                           " +
                                      _vm._s(_vm.classworkDetails.title) +
                                      "\r\n                                       "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "font-weight-medium" },
                                [
                                  _vm._v(
                                    "\r\n                                           Due: " +
                                      _vm._s(
                                        _vm.ViewDetails.availability == 1
                                          ? _vm.format_date(
                                              _vm.ViewDetails.to_date
                                            )
                                          : "No due date"
                                      ) +
                                      "\r\n                                       "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-list-item-action-text",
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
                                          return _vm.$emit("closeDialog")
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { small: "" } }, [
                                        _vm._v("mdi-close")
                                      ]),
                                      _vm._v(
                                        " Close\r\n                                                "
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
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
            { attrs: { cols: "12", md: "12", lg: "10" } },
            [
              _c(
                "v-row",
                { attrs: { "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    {
                      class: !_vm.$vuetify.breakpoint.mdAndUp ? "" : "pr-3",
                      attrs: { cols: "12", md: "4", lg: "4" }
                    },
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "", "ma-0": "", "pa-0": "" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "pt-1 mt-1 pl-4 pr-4 pb-2",
                              attrs: { elevation: "2", outlined: "" }
                            },
                            [
                              _c(
                                "v-row",
                                { staticClass: "mb-0 pb-0" },
                                [
                                  _c("v-col", {
                                    staticClass: "text-center",
                                    attrs: { cols: "12" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "mb-0 pb-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "d-flex mb-2 " },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.SubmittedLength == 1 ||
                                                  _vm.currentIndex == 0,
                                                icon: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.PrevStudent()
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-chevron-left")
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "text-center" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-weight-medium"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                        " +
                                                      _vm._s(
                                                        _vm.currentIndex +
                                                          1 +
                                                          "/" +
                                                          _vm.SubmittedLength
                                                      ) +
                                                      "\r\n                                                    "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("div", [
                                                _c(
                                                  "small",
                                                  { staticClass: "mt-3" },
                                                  [_vm._v("Switch Student")]
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.currentIndex ==
                                                  _vm.SubmittedLength - 1,
                                                icon: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.NextStudent()
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-chevron-right")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider")
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
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
                                                _vm.ViewDetails.profile_pic ==
                                                  ""
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
                                            {
                                              staticClass: "font-weight-medium"
                                            },
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
                                                        _vm.ViewDetails
                                                          .updated_at
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
                                                  "hide-details": "",
                                                  rounded: "",
                                                  rules: _vm.pointsRules,
                                                  dense: "",
                                                  outlined: "",
                                                  label: "Score",
                                                  type: "number",
                                                  suffix:
                                                    "/" +
                                                    _vm.classworkDetails.points,
                                                  max:
                                                    _vm.classworkDetails.points,
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
                                                  expression:
                                                    "ViewDetails.points"
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
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Time Spent: ")]
                                  ),
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.ViewDetails.timeSpent != null
                                          ? _vm.ViewDetails.timeSpent +
                                              " minutes"
                                          : ""
                                      )
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 pb-2 mt-1",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _vm.ViewDetails.status == "Submitted"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            block: "",
                                            text: "",
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
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "" } },
                                            [_vm._v("mdi-restart")]
                                          ),
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
                              staticClass: "mt-2 mb-1",
                              attrs: { elevation: "2", outlined: "" }
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
                                {
                                  staticClass: "mb-0 pb-0",
                                  staticStyle: {
                                    "overflow-y": "scroll",
                                    "scrollbar-width": "thin"
                                  },
                                  attrs: { "max-height": "350" }
                                },
                                _vm._l(_vm.ViewDetails.comments, function(
                                  item,
                                  i
                                ) {
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
                                          _vm.isUpdatingComment &&
                                          _vm.isUpdatingComment_id == item.id
                                            ? _c(
                                                "div",
                                                [
                                                  _c("v-list-item-title", {
                                                    staticClass: "mb-2",
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("editor", {
                                                    staticClass:
                                                      "CommentEditor",
                                                    attrs: {
                                                      options: _vm.options,
                                                      placeholder: "Comment",
                                                      theme: "bubble"
                                                    },
                                                    model: {
                                                      value: item.content,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "content",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "item.content"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-end mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass: "mr-2",
                                                          attrs: {
                                                            small: "",
                                                            dark: "",
                                                            color: "success"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.UpdateComment(
                                                                item.content,
                                                                item.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("update")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            dark: "",
                                                            color: "red"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              ;(_vm.isUpdatingComment = false),
                                                                (_vm.isUpdatingComment_id = null),
                                                                (item.content =
                                                                  _vm.isUpdatingComment_old_data)
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Cancel")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _c(
                                                "v-alert",
                                                {
                                                  staticClass:
                                                    "rounded-xl mt-0 mb-0 pb-0",
                                                  attrs: { color: "#F5F5F5" }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-space-between"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            class:
                                                              item.u_id ==
                                                              _vm
                                                                .get_CurrentUser
                                                                .id
                                                                ? "mb-0 pb-0 pt-2"
                                                                : "pt-2 pb-2",
                                                            staticStyle: {
                                                              "max-width": "90%"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.name)
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        item.u_id ==
                                                        _vm.get_CurrentUser
                                                          .user_id
                                                          ? _c(
                                                              "div",
                                                              [
                                                                _c(
                                                                  "v-menu",
                                                                  {
                                                                    attrs: {
                                                                      "offset-x":
                                                                        ""
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
                                                                                        dark:
                                                                                          "",
                                                                                        small:
                                                                                          ""
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "mdi-dots-vertical"
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
                                                                    _c(
                                                                      "v-list",
                                                                      {
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          nav:
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-list-item",
                                                                          {
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                ;(_vm.isUpdatingComment = true),
                                                                                  (_vm.isUpdatingComment_id =
                                                                                    item.id),
                                                                                  (_vm.isUpdatingComment_old_data =
                                                                                    item.content)
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-list-item-title",
                                                                              [
                                                                                _vm._v(
                                                                                  "Edit"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-list-item",
                                                                          {
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.DeleteComment(
                                                                                  item.id,
                                                                                  i
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-list-item-title",
                                                                              [
                                                                                _vm._v(
                                                                                  "Remove"
                                                                                )
                                                                              ]
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
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-subtitle",
                                                    { staticClass: "mb-3" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.format_date(
                                                            item.comment_date
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "ml-2" },
                                                    [
                                                      _c("span", {
                                                        staticClass:
                                                          "commentContent",
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            item.content
                                                          )
                                                        }
                                                      })
                                                    ]
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
                                                _vm.get_CurrentUser
                                                  .profile_pic == null ||
                                                _vm.get_CurrentUser
                                                  .profile_pic == ""
                                                  ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                    _vm.get_CurrentUser
                                                      .firstName +
                                                    " " +
                                                    _vm.get_CurrentUser.lastName
                                                  : _vm.get_CurrentUser
                                                      .profile_pic
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
                                          _c("editor", {
                                            staticClass: "CommentEditor",
                                            attrs: {
                                              options: _vm.options,
                                              placeholder: "Comment",
                                              theme: "bubble"
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
                    { attrs: { cols: "12", md: "8", lg: "8" } },
                    [
                      !_vm.isLoaded
                        ? _c(
                            "v-card",
                            {
                              staticClass: " pa-4 mt-1",
                              staticStyle: { height: "50vh" },
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
                                        "div",
                                        {
                                          staticStyle: { "margin-top": "8rem" }
                                        },
                                        [
                                          _c("vue-element-loading", {
                                            attrs: {
                                              active: !_vm.isLoaded,
                                              text: "Loading",
                                              duration: "0.7",
                                              textStyle: { fontSize: "20px" },
                                              spinner: "line-scale",
                                              color: "#EF6C00",
                                              size: "60"
                                            }
                                          })
                                        ],
                                        1
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
                      _vm.ViewDetails.Submitted_Answers == null ||
                      (_vm.ViewDetails.Submitted_Answers == "" && _vm.isLoaded)
                        ? _c(
                            "v-card",
                            {
                              staticClass: " pa-4 ",
                              attrs: { outlined: "", elevation: "2" }
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
                                        {
                                          staticStyle: { "font-size": "7rem" }
                                        },
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
                                          _c(
                                            "v-icon",
                                            { attrs: { right: "" } },
                                            [_vm._v("mdi-account-alert")]
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
                      _vm.ViewDetails.Submitted_Answers != null &&
                      _vm.ViewDetails.Submitted_Answers != "" &&
                      _vm.isLoaded
                        ? _c(
                            "v-card",
                            {
                              staticClass: "pa-5 mt-1",
                              attrs: { elevation: "2", outlined: "" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex mb-2" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex" },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          staticStyle: {
                                            "overflow-y": "scroll"
                                          },
                                          attrs: {
                                            "offset-y": "",
                                            "max-height": "600"
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
                                                              icon: "",
                                                              dark: ""
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
                                                              color: "primary"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-format-list-numbered"
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
                                            false,
                                            833248113
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            _vm._l(
                                              _vm.getAll_questions.Question,
                                              function(item, index) {
                                                return _c(
                                                  "v-list-item",
                                                  {
                                                    key: index,
                                                    staticClass: "ma-0 pa-0"
                                                  },
                                                  [
                                                    _c(
                                                      "v-list-item-title",
                                                      [
                                                        item.type ==
                                                          "Multiple Choice" ||
                                                        item.type ==
                                                          "Identification" ||
                                                        item.type ==
                                                          "True or False" ||
                                                        item.type == "Essay"
                                                          ? _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  text: "",
                                                                  rounded: ""
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.questionIndex = index
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      color: !_vm
                                                                        .Check[
                                                                        index
                                                                      ]
                                                                        ? ""
                                                                        : "success",
                                                                      left: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        !_vm
                                                                          .Check[
                                                                          index
                                                                        ]
                                                                          ? "mdi-checkbox-blank-outline"
                                                                          : "mdi-checkbox-marked"
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(
                                                                  "\r\n                                    " +
                                                                    _vm._s(
                                                                      index + 1
                                                                    ) +
                                                                    "\r\n                                    "
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
                                              }
                                            ),
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "pl-1 mt-2" }, [
                                        _vm._v(
                                          "Question " +
                                            _vm._s(_vm.questionIndex + 1)
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-1",
                                          attrs: {
                                            disabled: _vm.questionIndex == 0,
                                            color: "primary",
                                            outlined: "",
                                            rounded: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.questionIndex--
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                Previous\r\n                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "pl-9 pr-9",
                                          attrs: {
                                            disabled:
                                              _vm.questionIndex ==
                                              _vm.getAll_questions.Question
                                                .length -
                                                1,
                                            color: "primary",
                                            rounded: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.questionIndex++
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                Next\r\n                            "
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
                              _vm._l(_vm.getAll_questions.Question, function(
                                item,
                                index
                              ) {
                                return _c(
                                  "v-container",
                                  {
                                    key: index,
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    index === _vm.questionIndex
                                      ? _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "mt-0 pt-0 mb-0 pb-0",
                                                attrs: { cols: "12" }
                                              },
                                              [
                                                _c(
                                                  "v-list",
                                                  [
                                                    _c(
                                                      "v-list-item",
                                                      {
                                                        staticClass: "ma-0 pa-0"
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-icon",
                                                          {
                                                            staticClass:
                                                              "ma-0 pa-0 mt-2"
                                                          },
                                                          [
                                                            item.type !=
                                                            "Matching type"
                                                              ? _c(
                                                                  "v-checkbox",
                                                                  {
                                                                    staticClass:
                                                                      "mt-0 pt-0",
                                                                    attrs: {
                                                                      "hide-details":
                                                                        "",
                                                                      color:
                                                                        "success"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.UpdateScore(
                                                                          item.type,
                                                                          item.id,
                                                                          _vm
                                                                            .Check[
                                                                            index
                                                                          ],
                                                                          item.points,
                                                                          index,
                                                                          item.answer
                                                                        )
                                                                      }
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .Check[
                                                                          index
                                                                        ],
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.Check,
                                                                          index,
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "Check[index]"
                                                                    }
                                                                  }
                                                                )
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-content",
                                                          {
                                                            staticClass:
                                                              "subtitle-1 "
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex"
                                                              },
                                                              [
                                                                _c("div", {
                                                                  staticClass:
                                                                    "post-content pl-1",
                                                                  staticStyle: {
                                                                    width: "90%"
                                                                  },
                                                                  domProps: {
                                                                    innerHTML: _vm._s(
                                                                      item.question
                                                                    )
                                                                  }
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-action",
                                                          {
                                                            staticClass:
                                                              "ma-0 pa-0"
                                                          },
                                                          [
                                                            _c(
                                                              "small",
                                                              {
                                                                staticClass:
                                                                  "primary--text "
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "(" +
                                                                    _vm._s(
                                                                      item.points +
                                                                        " points"
                                                                    ) +
                                                                    ")"
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
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            item.type == "Multiple Choice"
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "mt-0 pt-0 mb-0 pb-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "v-list",
                                                          {
                                                            staticClass: "pl-6"
                                                          },
                                                          _vm._l(
                                                            _vm.getAll_questions
                                                              .Answer[index]
                                                              .options,
                                                            function(Ans, i) {
                                                              return _c(
                                                                "v-list-item",
                                                                {
                                                                  key: i,
                                                                  staticClass:
                                                                    "ma-0 pa-0"
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-icon",
                                                                    {
                                                                      staticClass:
                                                                        "ma-0 pa-0 "
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-radio-group",
                                                                        {
                                                                          staticClass:
                                                                            "ma-0 pa-0 mt-1",
                                                                          attrs: {
                                                                            "hide-details":
                                                                              "",
                                                                            name:
                                                                              "option" +
                                                                              index
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .SubmittedAnswer[
                                                                                index
                                                                              ]
                                                                                .Answer,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm
                                                                                  .SubmittedAnswer[
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
                                                                          _c(
                                                                            "v-radio",
                                                                            {
                                                                              key: index,
                                                                              style: _vm
                                                                                .$vuetify
                                                                                .breakpoint
                                                                                .mdAndUp
                                                                                ? "transform: scale(1.3)"
                                                                                : "transform: scale(1.35)",
                                                                              attrs: {
                                                                                "hide-details":
                                                                                  "",
                                                                                color:
                                                                                  "primary",
                                                                                value:
                                                                                  Ans.Choice
                                                                              }
                                                                            }
                                                                          )
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
                                                                      staticClass:
                                                                        "ma-0 pa-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "Subtitle-1 ma-0 pa-0 d-flex",
                                                                          staticStyle: {
                                                                            "line-height":
                                                                              "1.4"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "post-content",
                                                                              domProps: {
                                                                                innerHTML: _vm._s(
                                                                                  Ans.Choice
                                                                                )
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          item.answer ==
                                                                          Ans.Choice
                                                                            ? _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "caption primary--text ml-1"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "(correct answer)"
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e()
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            }
                                                          ),
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "Identification"
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "mt-0 pt-0 mb-0 pb-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "v-list",
                                                          {
                                                            staticClass: "pl-6"
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item",
                                                              {
                                                                staticClass:
                                                                  "ma-0 pa-0"
                                                              },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  {
                                                                    staticClass:
                                                                      "ma-0 pa-0 "
                                                                  },
                                                                  [
                                                                    _c("div", [
                                                                      _vm._v(
                                                                        "\r\n                                                    Correct Answer(s):\r\n                                                "
                                                                      )
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _vm
                                                                      .getAll_questions
                                                                      .Answer[
                                                                      index
                                                                    ].options
                                                                      .length ==
                                                                    0
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              " ma-0 pa-0 d-flex pl-3 success--text"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "pr-2"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "• "
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
                                                                                  "post-content pa-0 ma-0",
                                                                                domProps: {
                                                                                  innerHTML: _vm._s(
                                                                                    item.answer
                                                                                  )
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e(),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      _vm._l(
                                                                        _vm
                                                                          .getAll_questions
                                                                          .Answer[
                                                                          index
                                                                        ]
                                                                          .options,
                                                                        function(
                                                                          Ans,
                                                                          i
                                                                        ) {
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
                                                                                {
                                                                                  staticClass:
                                                                                    "pr-2"
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "• "
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
                                                                                    "post-content pa-0 ma-0",
                                                                                  domProps: {
                                                                                    innerHTML: _vm._s(
                                                                                      Ans.Choice
                                                                                    )
                                                                                  }
                                                                                }
                                                                              )
                                                                            ]
                                                                          )
                                                                        }
                                                                      ),
                                                                      0
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "primary--text"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\r\n                                                    Student Answer:\r\n                                                "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "Subtitle-1 ma-0 pa-0 d-flex pl-3 primary--text",
                                                                        staticStyle: {
                                                                          "line-height":
                                                                            "1.4"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "pr-2"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "• "
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
                                                                              "post-content",
                                                                            domProps: {
                                                                              innerHTML: _vm._s(
                                                                                _vm
                                                                                  .SubmittedAnswer[
                                                                                  index
                                                                                ]
                                                                                  .Answer
                                                                              )
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _vm
                                                                          .SubmittedAnswer[
                                                                          index
                                                                        ]
                                                                          .Answer ==
                                                                        null
                                                                          ? _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "post-content"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  " N/A"
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
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
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "True or False"
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "mt-0 pt-0 mb-0 pb-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "v-list",
                                                          {
                                                            staticClass: "pl-6"
                                                          },
                                                          _vm._l(
                                                            _vm.inputCheck,
                                                            function(x, n) {
                                                              return _c(
                                                                "v-list-item",
                                                                {
                                                                  key: n,
                                                                  staticClass:
                                                                    "ma-0 pa-0"
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-icon",
                                                                    {
                                                                      staticClass:
                                                                        "ma-0 pa-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-radio-group",
                                                                        {
                                                                          staticClass:
                                                                            "ma-0 pa-0 mt-1",
                                                                          attrs: {
                                                                            "hide-details":
                                                                              "",
                                                                            name:
                                                                              "option" +
                                                                              index
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .SubmittedAnswer[
                                                                                index
                                                                              ]
                                                                                .Answer,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm
                                                                                  .SubmittedAnswer[
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
                                                                          _c(
                                                                            "v-radio",
                                                                            {
                                                                              key: index,
                                                                              style: _vm
                                                                                .$vuetify
                                                                                .breakpoint
                                                                                .mdAndUp
                                                                                ? "transform: scale(1.3)"
                                                                                : "transform: scale(1.35)",
                                                                              attrs: {
                                                                                color:
                                                                                  "primary",
                                                                                name:
                                                                                  "Answer",
                                                                                value:
                                                                                  _vm
                                                                                    .inputCheck[
                                                                                    n
                                                                                  ]
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\r\n                                                    >"
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
                                                                    "v-list-item-content",
                                                                    {
                                                                      staticClass:
                                                                        "ma-0 pa-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "Subtitle-1 ma-0 pa-0 d-flex",
                                                                          staticStyle: {
                                                                            "line-height":
                                                                              "1.4"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              domProps: {
                                                                                innerHTML: _vm._s(
                                                                                  _vm
                                                                                    .TrueOrFalse[
                                                                                    n
                                                                                  ]
                                                                                )
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm
                                                                            .inputCheck[
                                                                            n
                                                                          ] ==
                                                                          _vm
                                                                            .SubmittedAnswer[
                                                                            index
                                                                          ]
                                                                            .Answer
                                                                            ? _c(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "caption primary--text ml-1 "
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "(correct answer)"
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e()
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            }
                                                          ),
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "Matching type"
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "mt-0 pt-0 mb-5 pb-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      { staticClass: "pl-5" },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            attrs: {
                                                              "no-gutters": ""
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                staticClass:
                                                                  "ma-0 pa-0",
                                                                attrs: {
                                                                  "ma-0": "",
                                                                  "pa-0": "",
                                                                  cols: "12"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-container",
                                                                  {
                                                                    staticClass:
                                                                      "ma-0 pa-0"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-container",
                                                                      [
                                                                        _c(
                                                                          "v-row",
                                                                          [
                                                                            _c(
                                                                              "v-col",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                attrs: {
                                                                                  cols:
                                                                                    "2",
                                                                                  md:
                                                                                    "2",
                                                                                  lg:
                                                                                    "2"
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-col",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                attrs: {
                                                                                  cols:
                                                                                    "5",
                                                                                  md:
                                                                                    "5",
                                                                                  lg:
                                                                                    "5"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "\r\n                                                            Column A\r\n                                                        "
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-col",
                                                                              {
                                                                                staticClass:
                                                                                  "font-weight-bold",
                                                                                attrs: {
                                                                                  cols:
                                                                                    "5"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "\r\n                                                            Column B\r\n                                                        "
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
                                                                      "v-divider"
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm._l(
                                                                      _vm
                                                                        .SubmittedAnswer[
                                                                        index
                                                                      ],
                                                                      function(
                                                                        item,
                                                                        i
                                                                      ) {
                                                                        return _c(
                                                                          "v-container",
                                                                          {
                                                                            key:
                                                                              item.id,
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
                                                                                      "mb-1 pb-0 pt-0 mt-0 mr-0 pr-0  text-center",
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "2",
                                                                                      md:
                                                                                        "1",
                                                                                      lg:
                                                                                        "1"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "v-checkbox",
                                                                                      {
                                                                                        staticClass:
                                                                                          "mt-4 pr-0 mr-0",
                                                                                        attrs: {
                                                                                          "hide-details":
                                                                                            "",
                                                                                          color:
                                                                                            "success"
                                                                                        },
                                                                                        model: {
                                                                                          value:
                                                                                            _vm
                                                                                              .Check[
                                                                                              index
                                                                                            ][
                                                                                              i
                                                                                            ],
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
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    staticClass:
                                                                                      "ml-0 pl-0 mb-1 pb-0 pt-0 mt-0",
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "2",
                                                                                      md:
                                                                                        "1",
                                                                                      lg:
                                                                                        "1"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "v-text-field",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ml-0 pl-0 centered-input",
                                                                                        attrs: {
                                                                                          "hide-details":
                                                                                            "",
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
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    staticClass:
                                                                                      "mb-1 pb-0 pt-0 mt-0",
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "4",
                                                                                      md:
                                                                                        "5",
                                                                                      lg:
                                                                                        "5"
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
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        !_vm
                                                                                          .Check[
                                                                                          index
                                                                                        ][
                                                                                          i
                                                                                        ]
                                                                                          ? _c(
                                                                                              "small",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "primary--text"
                                                                                              }
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    staticClass:
                                                                                      "mb-1 pb-0 pt-0 mt-0",
                                                                                    attrs: {
                                                                                      cols:
                                                                                        "4",
                                                                                      md:
                                                                                        "4",
                                                                                      lg:
                                                                                        "5"
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
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "Essay"
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "mt-0 pt-0 mb-0 pb-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "mt-0 pt-0"
                                                      },
                                                      [
                                                        _c(
                                                          "v-list",
                                                          {
                                                            staticClass: "pl-6"
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item",
                                                              {
                                                                staticClass:
                                                                  "ma-0 pa-0"
                                                              },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  {
                                                                    staticClass:
                                                                      "ma-0 pa-0 "
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "primary--text"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\r\n                                                    Student Answer:\r\n                                                "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "Subtitle-1 ma-0 pa-0 d-flex pl-3",
                                                                        staticStyle: {
                                                                          "line-height":
                                                                            "1.4"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "pr-2"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "• "
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
                                                                              "post-content",
                                                                            domProps: {
                                                                              innerHTML: _vm._s(
                                                                                _vm
                                                                                  .SubmittedAnswer[
                                                                                  index
                                                                                ]
                                                                                  .Answer
                                                                              )
                                                                            }
                                                                          }
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _vm
                                                                          .SubmittedAnswer[
                                                                          index
                                                                        ]
                                                                          .Answer ==
                                                                        null
                                                                          ? _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "post-content"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  " N/A"
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
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
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      : _vm._e()
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