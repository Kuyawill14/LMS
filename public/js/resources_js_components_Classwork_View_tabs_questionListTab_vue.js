(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_questionListTab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);


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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'number', 'previewAll'],
  components: {
    deleteDialog: deleteDialog,
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      QuetionsList: {},
      isUpdating: null,
      preview: true,
      dialog: false,
      isRemoving: false,
      isEditing: false,
      DeleteDetails: {},
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  methods: {
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.type = 'Question';
      this.DeleteDetails.message = "This will permanently remove the question.";
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isRemoving = true;
      this.isRemoving_id = id;
      this.dialog = true;
      ;
    },
    updateQuestion: function updateQuestion() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('updateQuestion', _this.QuetionsList);

                _this.isUpdating = true;
                _this.isEditing = !_this.isEditing;
                setTimeout(function () {
                  return _this.isUpdating = false, _this.preview = !_this.preview;
                }, 1000);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.QuetionsList = this.Question;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);


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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"));
};

var optionRemoveDialog = function optionRemoveDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_optionRemoveDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/optionRemoveDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/optionRemoveDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'Choices', 'number', 'previewAll'],
  components: {
    deleteDialog: deleteDialog,
    optionRemoveDialog: optionRemoveDialog,
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      QuetionsList: {},
      isUpdating: null,
      AnswerList: {},
      preview: true,
      dialog: false,
      inputCheck: ['True', 'False'],
      isRemoving: false,
      isRemoving_id: null,
      isQuestionRemove: false,
      isOptionRemove: false,
      Qlength: '',
      isEditing: false,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {},
      message: '',
      isOptionIndex: null,
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  computed: {
    getQuestion: function getQuestion() {
      return this.QuetionsList;
    },
    getAnswerList: function getAnswerList() {
      return this.AnswerList;
    },
    CheckPreview: function CheckPreview() {
      return this.previewAll;
    }
  },
  methods: {
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isQuestionRemove = true;
      this.isRemoving_id = id;
      this.dialog = true;
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Question Successfully added", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    SliceOption: function SliceOption() {
      this.AnswerList.splice(this.isOptionIndex, 1);
    },
    removeOption: function removeOption(index, id, Anslength) {
      if (Anslength <= 2) {
        return this.$toasted.error("You must leave atlest two options!", {
          theme: "toasted-primary",
          position: "top-center",
          icon: "error",
          duration: 2000
        });
      } else {
        this.DeleteDetails.number = index + 1;
        this.DeleteDetails.id = id;
        this.DeleteDetails.type = 'Multiple Choice';
        this.isOptionIndex = index;
        this.isOptionRemove = true;
        this.dialog = true;
      }
    },
    add: function add() {
      var _this = this;

      this.getAnswerList.push({
        Choice: '',
        id: '',
        question_id: this.QuetionsList.id
      });
      axios.post('/api/question/addOption', {
        type: 'Multiple Choice',
        answers: this.getAnswerList[this.getAnswerList.length - 1]
      }).then(function (res) {
        if (res.status == 200) {
          _this.getAnswerList[_this.getAnswerList.length - 1].id = res.data.answer_id;
        }
      });
    },
    updateQuestion: function updateQuestion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.put('/api/question/update/' + _this2.QuetionsList.id, {
                  type: 'Multiple Choice',
                  question: _this2.QuetionsList,
                  options: _this2.AnswerList
                }).then(function (res) {
                  if (res.status == 200) {
                    _this2.isUpdating = true;
                    _this2.isEditing = !_this2.isEditing;
                    _this2.isEditing = !_this2.isEditing;
                    setTimeout(function () {
                      return _this2.isUpdating = false, _this2.preview = !_this2.preview;
                    }, 1000);

                    _this2.toastSuccess("Question Successfully updated");
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
    this.QuetionsList = this.Question;
    this.AnswerList = this.Choices;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);


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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"));
};

var optionRemoveDialog = function optionRemoveDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_optionRemoveDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/optionRemoveDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/optionRemoveDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['number', 'Question', 'SubQuestion', 'Answers'],
  components: {
    deleteDialog: deleteDialog,
    optionRemoveDialog: optionRemoveDialog,
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      isUpdating: false,
      OptionRemovedialog: false,
      isOptionIndex: null,
      Alphabet: "",
      QuetionsList: {},
      SubQuestionList: {},
      AnswerList: {},
      preview: true,
      dialog: false,
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isEditing: true,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {},
      message: '',
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  methods: {
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isRemoving = true;
      this.isRemoving_id = id;
      this.dialog = true;
      ;
    },
    toastSuccess: function toastSuccess() {
      this.toastSuccess("Question Successfully added");
    },
    SliceOption: function SliceOption() {
      this.SubQuestionList.splice(this.isOptionIndex, 1);
      this.AnswerList.splice(this.isOptionIndex, 1);
    },
    AddNewMatch: function AddNewMatch() {
      var _this = this;

      this.QuetionsList.points += 1;
      this.SubQuestionList.push({
        sub_question: '',
        id: '',
        question_id: this.QuetionsList.id
      });
      this.AnswerList.push({
        Choice: '',
        id: '',
        question_id: this.QuetionsList.id
      });
      axios.post('/api/question/addOption', {
        type: 'Matching Type',
        SubQuestion: this.SubQuestionList[this.SubQuestionList.length - 1],
        answer: this.AnswerList[this.AnswerList.length - 1]
      }).then(function (res) {
        if (res.status == 200) {
          _this.SubQuestionList[_this.SubQuestionList.length - 1].id = res.data.main_id;
          _this.AnswerList[_this.AnswerList.length - 1].id = res.data.answer_id;
        }
      });
    },
    removeAnswer: function removeAnswer(index, id, subQuestionLength) {
      if (subQuestionLength <= 2) {
        this.toastError('You must leave atleast two choices');
      } else {
        this.DeleteDetails.number = index + 1;
        this.DeleteDetails.id = id;
        this.DeleteDetails.type = 'Matching Type';
        this.isOptionIndex = index;
        this.OptionRemovedialog = true;
      }
    },
    updateQuestion: function updateQuestion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.put('/api/question/update/' + _this2.QuetionsList.id, {
                  type: 'Matching Type',
                  details: _this2.QuetionsList,
                  question: _this2.SubQuestionList,
                  options: _this2.AnswerList
                }).then(function (res) {
                  if (res.status == 200) {
                    _this2.isUpdating = true;
                    _this2.isEditing = false;
                    _this2.isEditing = false;
                    setTimeout(function () {
                      return _this2.isUpdating = false, _this2.preview = !_this2.preview;
                    }, 1000); //this.toastSuccess("Question Successfully updated");
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
  mounted: function mounted() {
    this.QuetionsList = this.Question;
    this.AnswerList = this.Answers;
    this.SubQuestionList = this.SubQuestion;
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.Alphabet = alphabet;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);


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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'number', 'previewAll'],
  components: {
    deleteDialog: deleteDialog,
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default())
  },
  data: function data() {
    return {
      inputCheck: ['True', 'False'],
      QuetionsList: {},
      isUpdating: null,
      preview: true,
      dialog: false,
      isRemoving: false,
      isEditing: false,
      DeleteDetails: {},
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  methods: {
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isRemoving = true;
      this.isRemoving_id = id;
      this.dialog = true;
      ;
    },
    updateQuestion: function updateQuestion() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('updateQuestion', _this.QuetionsList);

                _this.isUpdating = true;
                _this.isEditing = !_this.isEditing;
                setTimeout(function () {
                  return _this.isUpdating = false, _this.preview = !_this.preview;
                }, 1000);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.QuetionsList = this.Question;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['DeleteDetails'],
  data: function data() {
    return {
      DeleteData: {}
    };
  },
  methods: {
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Question Successfully re", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    RemoveQuestion: function RemoveQuestion(id) {
      var _this = this;

      axios["delete"]('/api/question/remove/' + id).then(function (res) {
        _this.DeleteData = {};

        _this.$emit('reloadList');
      });
    }
  },
  mounted: function mounted() {
    this.DeleteData = this.DeleteDetails;
    console.log(this.DeleteDetails);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List_types_IndentificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List-types/IndentificationList */ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue");
/* harmony import */ var _List_types_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List-types/MultipleChoiceList */ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue");
/* harmony import */ var _List_types_trueOrfalseList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List-types/trueOrfalseList */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue");
/* harmony import */ var _List_types_matchingType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List-types/matchingType */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue");
/* harmony import */ var _dialogs_deleteDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    deleteDialog: _dialogs_deleteDialog__WEBPACK_IMPORTED_MODULE_5__.default,
    multipleChoiceList: _List_types_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_2__.default,
    indentificationList: _List_types_IndentificationList__WEBPACK_IMPORTED_MODULE_1__.default,
    trueOrfalseList: _List_types_trueOrfalseList__WEBPACK_IMPORTED_MODULE_3__.default,
    matchingType: _List_types_matchingType__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      ListType: 'All',
      previewAll: false,
      dialog: false,
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isEditing: false,
      isEditing_Id: '',
      isloading: true,
      Show: true,
      DeleteDetails: {},
      QuestionsList: [],
      isFetching: true
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(["getAll_questions"]),
  methods: {
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isRemoving = true;
      this.isRemoving_id = id;
      this.dialog = true;
      ;
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Question Successfully added", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    removeAnswer: function removeAnswer(id, index) {
      var _this = this;

      if (index <= 2) {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'You must leave atleast two choices'
        });
      } else {
        axios["delete"]('/api/question/' + id).then(function (res) {
          _this.fetchQuestionsList();
        });
      }
    },
    fetchQuestionsList: function fetchQuestionsList() {
      var _this2 = this;

      this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(function (res) {
        _this2.Qlength = res[1];
        _this2.QuestionsList = res[0];
        _this2.isloading = false;
        _this2.isFetching = false;
      });
    },
    updateQuestion: function updateQuestion(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.put('/api/question/update/' + data.id, {
                  type: QuetionsList.type,
                  question: data
                }).then(function (res) {
                  if (res.status == 200) {
                    _this3.toastSuccess("Question Successfully updated");
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    //this.getAllQuestion();
    this.isLoading = true;
    this.Show = false;
    this.fetchQuestionsList();
    this.Show = true;
    this.isLoading = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#QuestionList[data-v-78dce45c]{\n    scroll-behavior:smooth !important;\n}\n      \n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-element-loading/lib/vue-element-loading.min.js ***!
  \*************************************************************************/
/***/ (function(module) {

/*!
 * vue-element-loading v2.0.2
 * (c) 2019-present biig_pongsatorn <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t={name:"spinner",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};function e(t,e,i,a,n,r,s,o,d,l){"function"==typeof s&&(d=o,o=s,s=!1);const u="function"==typeof i?i.options:i;let c;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,n&&(u.functional=!0)),a&&(u._scopeId=a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):e&&(c=s?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),c)if(u.functional){const t=u.render;u.render=function(e,i){return c.call(i),t(e,i)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,c):[c]}return i}const i=t;t.__file="spinner.vue";var a=e({render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.size,height:this.size,viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:this.color,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:this.duration,repeatCount:"indefinite"}})],1)])},staticRenderFns:[]},void 0,i,void 0,!1,void 0,void 0,void 0),n={name:"ring",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const r=n;n.__file="ring.vue";var s=e({render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.size,height:this.size,viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[e("path",{attrs:{opacity:"0.2",fill:this.color,d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),this._v(" "),e("path",{attrs:{fill:this.color,d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:this.duration,repeatCount:"indefinite"}})],1)])},staticRenderFns:[]},void 0,r,void 0,!1,void 0,void 0,void 0),o={name:"mini-spinner",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const d=o;o.__file="mini-spinner.vue";var l=e({render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:this.size,height:this.size,viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:this.color,d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:this.duration,repeatCount:"indefinite"}})],1)])},staticRenderFns:[]},void 0,d,void 0,!1,void 0,void 0,void 0),u={name:"line-wave",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const c=u;u.__file="line-wave.vue";var p=e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:t.size,height:t.size,viewBox:"0 0 24 30","xml:space":"preserve"}},[i("rect",{attrs:{x:"0",y:"0",width:"4",height:"10",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:t.duration,repeatCount:"indefinite"}})],1),t._v(" "),i("rect",{attrs:{x:"10",y:"0",width:"4",height:"10",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:t.duration,repeatCount:"indefinite"}})],1),t._v(" "),i("rect",{attrs:{x:"20",y:"0",width:"4",height:"10",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:t.duration,repeatCount:"indefinite"}})],1)])},staticRenderFns:[]},void 0,c,void 0,!1,void 0,void 0,void 0),v={name:"line-scale",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const m=v;v.__file="line-scale.vue";var f=e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:t.size,height:t.size,viewBox:"0 0 24 30","xml:space":"preserve"}},[i("rect",{attrs:{x:"0",y:"13",width:"4",height:"5",fill:t.color}},[i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"10",y:"13",width:"4",height:"5",fill:t.color}},[i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"20",y:"13",width:"4",height:"5",fill:t.color}},[i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:t.duration,repeatCount:"indefinite"}})])])},staticRenderFns:[]},void 0,m,void 0,!1,void 0,void 0,void 0),h={name:"line-down",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const y=h;h.__file="line-down.vue";var g=e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:t.size,height:t.size,viewBox:"0 0 24 24","xml:space":"preserve"}},[i("rect",{attrs:{x:"0",y:"0",width:"4",height:"7",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"scale",values:"1,1; 1,3; 1,1",begin:"0s",dur:t.duration,repeatCount:"indefinite"}})],1),t._v(" "),i("rect",{attrs:{x:"10",y:"0",width:"4",height:"7",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"scale",values:"1,1; 1,3; 1,1",begin:"0.2s",dur:t.duration,repeatCount:"indefinite"}})],1),t._v(" "),i("rect",{attrs:{x:"20",y:"0",width:"4",height:"7",fill:t.color}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"scale",values:"1,1; 1,3; 1,1",begin:"0.4s",dur:t.duration,repeatCount:"indefinite"}})],1)])},staticRenderFns:[]},void 0,y,void 0,!1,void 0,void 0,void 0),x={name:"bar-fade",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const b=x;x.__file="bar-fade.vue";var w=e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:t.size,height:t.size,viewBox:"0 0 24 30","xml:space":"preserve"}},[i("rect",{attrs:{x:"0",y:"0",width:"4",height:"20",fill:t.color}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"7",y:"0",width:"4",height:"20",fill:t.color}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0.2s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"14",y:"0",width:"4",height:"20",fill:t.color}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0.4s",dur:t.duration,repeatCount:"indefinite"}})])])},staticRenderFns:[]},void 0,b,void 0,!1,void 0,void 0,void 0),_={name:"bar-fade-scale",props:{color:{type:String,default:"#CCC"},size:{type:String,default:"40px"},duration:{type:String,default:"0.6s"}}};const C=_;_.__file="bar-fade-scale.vue";var S=e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:t.size,height:t.size,viewBox:"0 0 24 30","xml:space":"preserve"}},[i("rect",{attrs:{x:"0",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"8",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:t.duration,repeatCount:"indefinite"}})]),t._v(" "),i("rect",{attrs:{x:"16",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[i("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:t.duration,repeatCount:"indefinite"}}),t._v(" "),i("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:t.duration,repeatCount:"indefinite"}})])])},staticRenderFns:[]},void 0,C,void 0,!1,void 0,void 0,void 0),T={name:"vue-element-loading",props:{active:Boolean,spinner:{type:String,default:"spinner"},text:{type:String,default:""},textStyle:{type:Object,default:function(){return{}}},color:{type:String,default:"#000"},isFullScreen:{type:Boolean,default:!1},backgroundColor:{type:String,default:"rgba(255, 255, 255, .9)"},size:{type:String,default:"40"},duration:{type:String,default:"0.6"},delay:{type:[String,Number],default:0}},data:function(){return{isActive:this.active||!1,isActiveDelay:!1}},mounted:function(){if(this.$refs.velmld.parentNode.classList.add("velmld-parent"),this.delay){var t=1e3*+this.delay;this.delayActive(t)}},methods:{delayActive:function(t){var e=this;this.isActiveDelay=!0,setTimeout(function(){e.isActiveDelay=!1},t)}},watch:{active:function(t){this.isActive=t,t&&this.$refs.velmld.parentNode.classList.add("velmld-parent")}},components:{Spinner:a,Ring:s,MiniSpinner:l,LineWave:p,LineScale:f,LineDown:g,BarFade:w,BarFadeScale:S}};const N="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());const z=document.head||document.getElementsByTagName("head")[0],L={};const k=T;T.__file="index.vue";return e({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive||t.isActiveDelay,expression:"isActive || isActiveDelay"}],ref:"velmld",staticClass:"velmld-overlay",class:{"velmld-full-screen":t.isFullScreen},style:{backgroundColor:t.backgroundColor}},[i("div",{staticClass:"velmld-spinner"},[t._t("default",[i(t.spinner,{tag:"component",attrs:{color:t.color,size:t.size+"px",duration:t.duration+"s"}})]),t._v(" "),t.text.length?i("div",{style:Object.assign({},{color:t.color},t.textStyle)},[t._v("\n        "+t._s(t.text)+"\n      ")]):t._e()],2)])])},staticRenderFns:[]},function(t){t&&(t("data-v-27234dc7_0",{source:".fade-enter-active[data-v-27234dc7],.fade-leave-active[data-v-27234dc7]{transition:opacity .3s}.fade-enter[data-v-27234dc7],.fade-leave-to[data-v-27234dc7]{opacity:0}.velmld-overlay[data-v-27234dc7]{position:absolute;z-index:3000;margin:0;top:0;right:0;bottom:0;left:0;transition:opacity .3s}.velmld-spinner[data-v-27234dc7]{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;text-align:center}.velmld-full-screen[data-v-27234dc7]{position:fixed}",map:void 0,media:void 0}),t("data-v-27234dc7_1",{source:".velmld-parent{position:relative!important}",map:void 0,media:void 0}))},k,"data-v-27234dc7",!1,void 0,function(t){return(t,e)=>(function(t,e){const i=N?e.media||"default":t,a=L[i]||(L[i]={ids:new Set,styles:[]});if(!a.ids.has(t)){a.ids.add(t);let i=e.source;if(e.map&&(i+="\n/*# sourceURL="+e.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",e.media&&a.element.setAttribute("media",e.media),z.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(i),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const t=a.ids.size-1,e=document.createTextNode(i),n=a.element.childNodes;n[t]&&a.element.removeChild(n[t]),n.length?a.element.insertBefore(e,n[t]):a.element.appendChild(e)}}})(t,e)},void 0)});
//# sourceMappingURL=vue-element-loading.min.js.map


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndentificationList.vue?vue&type=template&id=106fea1a& */ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a&");
/* harmony import */ var _IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndentificationList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true& */ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true&");
/* harmony import */ var _MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleChoiceList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js&");
/* harmony import */ var _MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "78dce45c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchingType.vue?vue&type=template&id=2e0bb8c4& */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&");
/* harmony import */ var _matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchingType.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/List-types/matchingType.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=template&id=da29ddda& */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&");
/* harmony import */ var _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__.render,
  _trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=template&id=43071f3f& */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&");
/* harmony import */ var _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionListTab.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionListTab.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionListTab.vue?vue&type=template&id=cd0ead0e& */ "./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e&");
/* harmony import */ var _questionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionListTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _questionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/questionListTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./matchingType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./trueOrfalseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./questionListTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_questionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_106fea1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=template&id=106fea1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_78dce45c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./matchingType.vue?vue&type=template&id=2e0bb8c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./trueOrfalseList.vue?vue&type=template&id=da29ddda& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_43071f3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteDialog.vue?vue&type=template&id=43071f3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_questionListTab_vue_vue_type_template_id_cd0ead0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./questionListTab.vue?vue&type=template&id=cd0ead0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_style_index_0_id_78dce45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=template&id=106fea1a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-hover", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _c(
                  "v-expand-transition",
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "pl-3 pr-3 pt-4",
                        staticStyle: { cursor: "pointer" },
                        attrs: {
                          color: _vm.preview && hover ? "grey lighten-5" : "",
                          outlined: ""
                        }
                      },
                      [
                        _c(
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "370" },
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
                              ? _c("deleteDialog", {
                                  attrs: { DeleteDetails: _vm.DeleteDetails },
                                  on: {
                                    toggleDialog: function($event) {
                                      ;(_vm.dialog = !_vm.dialog),
                                        (_vm.isRemoving = false)
                                    },
                                    reloadList: function($event) {
                                      _vm.$emit("reloadList"),
                                        (_vm.dialog = !_vm.dialog),
                                        (_vm.isRemoving = false)
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
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12", classs: "ma-0 pa-0" } },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass: "mb-3 d-flex flex-row ",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "d-flex",
                                        attrs: { "mb-0": "", "pb-0": "" }
                                      },
                                      [
                                        _c("h3", [
                                          _vm._v(
                                            "Question #" + _vm._s(_vm.number)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            staticClass:
                                              "primary--text mt-1 ml-1"
                                          },
                                          [
                                            _vm._v(
                                              "(" +
                                                _vm._s(
                                                  _vm.QuetionsList.points
                                                ) +
                                                "points)"
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    !_vm.preview
                                      ? _c(
                                          "v-container",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 d-flex justify-end",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  color: "error",
                                                  rounded: "",
                                                  disabled: _vm.isRemoving,
                                                  loading: _vm.isRemoving
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.removePropt(
                                                      _vm.number,
                                                      _vm.QuetionsList.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Delete"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-delete-outline")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  rounded: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.updateQuestion()
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    \r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Update"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-check")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  rounded: "",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    ;(_vm.preview = !_vm.preview),
                                                      (_vm.isEditing = !_vm.isEditing)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Cancel"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-close")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.preview
                                      ? _c(
                                          "v-container",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 d-flex justify-end",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { rounded: "" },
                                                on: {
                                                  click: function($event) {
                                                    ;(_vm.preview = !_vm.preview),
                                                      (_vm.isEditing = !_vm.isEditing)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint.xs
                                                        ? ""
                                                        : "Edit"
                                                    ) +
                                                    "\r\n                                "
                                                ),
                                                _c(
                                                  "v-icon",
                                                  { attrs: { right: "" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-square-edit-outline"
                                                    )
                                                  ]
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
                                ),
                                _vm._v(" "),
                                _c("v-divider")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            !_vm.preview
                              ? _c(
                                  "v-col",
                                  {
                                    staticClass: "pa-5 mt-0 pt-0",
                                    attrs: { cols: "12", md: "12" }
                                  },
                                  [
                                    _c("vue-element-loading", {
                                      attrs: {
                                        active: _vm.isUpdating,
                                        spinner: "bar-fade-scale"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      { staticClass: "mb-1" },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pa-0 ma-0" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pa-0 ma-0",
                                                attrs: {
                                                  cols: "3",
                                                  md: "1",
                                                  lg: "1"
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  staticClass: "pa-0 ma-0",
                                                  attrs: {
                                                    min: "0",
                                                    readonly: !_vm.isEditing,
                                                    outlined: "",
                                                    type: "number",
                                                    label: "Points"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.QuetionsList.points,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.QuetionsList,
                                                        "points",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "QuetionsList.points"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "pa-0 ma-0 pl-2 pl-sm-0 text-right",
                                                attrs: {
                                                  cols: "9",
                                                  md: "11",
                                                  lg: "11"
                                                }
                                              },
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "float-right pa-0 ma-0",
                                                  attrs: {
                                                    readonly: !_vm.isEditing,
                                                    items: [
                                                      "Multiple Choice",
                                                      "Identification",
                                                      "True or False",
                                                      "Matching type"
                                                    ],
                                                    outlined: "",
                                                    label: "Type"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.QuetionsList.type,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.QuetionsList,
                                                        "type",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "QuetionsList.type"
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
                                          "v-container",
                                          {
                                            staticClass: "pa-0 ma-0",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-row",
                                              { staticClass: "pa-0 ma-0" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [_vm._v("Question")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    staticClass: "pa-0 ma-0",
                                                    attrs: {
                                                      cols: "12",
                                                      md: "12",
                                                      lg: "12"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        staticClass: "mb-3",
                                                        staticStyle: {
                                                          width: "100%"
                                                        }
                                                      },
                                                      [
                                                        _c("editor", {
                                                          ref: "Question",
                                                          attrs: {
                                                            readonly: !_vm.isEditing,
                                                            id:
                                                              "editor-container",
                                                            placeholder:
                                                              "Question",
                                                            theme: "snow",
                                                            options: _vm.options
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.QuetionsList
                                                                .question,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.QuetionsList,
                                                                "question",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "QuetionsList.question"
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-container",
                                          [
                                            _c(
                                              "v-row",
                                              {
                                                attrs: {
                                                  "ma-0": "",
                                                  "pa-0": ""
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [_vm._v("  Answer")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    staticClass: "ma-0 pa-0 ",
                                                    attrs: {
                                                      "ma-0": "",
                                                      "pa-0": "",
                                                      cols: "12"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        staticClass: "mb-3",
                                                        staticStyle: {
                                                          width: "100%"
                                                        }
                                                      },
                                                      [
                                                        _c("editor", {
                                                          ref: "Answer",
                                                          attrs: {
                                                            id:
                                                              "editor-container",
                                                            placeholder:
                                                              "Question",
                                                            theme: !_vm.isEditing
                                                              ? "bubble"
                                                              : "snow",
                                                            options: _vm.options
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.QuetionsList
                                                                .answer,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.QuetionsList,
                                                                "answer",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "QuetionsList.answer"
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
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.preview || _vm.previewAll
                              ? _c(
                                  "v-col",
                                  {
                                    staticClass: "pl-4 pr-4 pt-2",
                                    attrs: { cols: "12", md: "12" },
                                    on: {
                                      dblclick: function($event) {
                                        _vm.previewAll
                                          ? (_vm.preview = false)
                                          : (_vm.preview = !_vm.preview)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-container", [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "subtitle-2",
                                          style: _vm.$vuetify.breakpoint.xs
                                            ? "line-height:1.1"
                                            : "line-height:1.5"
                                        },
                                        [
                                          _c("span", {
                                            staticClass: "post-content",
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.QuetionsList.question
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      { staticClass: "pl-5 pr-5" },
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
                                              "subtitle-1 d-flex item"
                                          },
                                          [
                                            _c("span", {
                                              staticClass: "post-content",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.QuetionsList.answer
                                                )
                                              }
                                            })
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
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=template&id=78dce45c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-hover", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _c(
                  "v-expand-transition",
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "pl-3 pr-3 pt-4",
                        staticStyle: { cursor: "pointer" },
                        attrs: {
                          color: _vm.preview && hover ? "grey lighten-5" : "",
                          outlined: ""
                        }
                      },
                      [
                        _c(
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "370" },
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _vm.isQuestionRemove
                              ? _c("deleteDialog", {
                                  attrs: { DeleteDetails: _vm.DeleteDetails },
                                  on: {
                                    toggleDialog: function($event) {
                                      ;(_vm.dialog = !_vm.dialog),
                                        (_vm.isQuestionRemove = false)
                                    },
                                    reloadList: function($event) {
                                      _vm.$emit("reloadList"),
                                        (_vm.dialog = !_vm.dialog),
                                        (_vm.isQuestionRemove = false)
                                    }
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isOptionRemove
                              ? _c("optionRemoveDialog", {
                                  attrs: { DeleteDetails: _vm.DeleteDetails },
                                  on: {
                                    toggleOptionDialog: function($event) {
                                      ;(_vm.dialog = !_vm.dialog),
                                        (_vm.isOptionRemove = !_vm.isOptionRemove)
                                    },
                                    reloadOptionList: function($event) {
                                      _vm.SliceOption(),
                                        (_vm.dialog = !_vm.dialog),
                                        (_vm.isOptionRemove = !_vm.isOptionRemove)
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
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12", classs: "ma-0 pa-0" } },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass: "mb-3 d-flex flex-row ",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "d-flex",
                                        attrs: { "mb-0": "", "pb-0": "" }
                                      },
                                      [
                                        _c("h3", [
                                          _vm._v(
                                            "Question #" +
                                              _vm._s(_vm.number) +
                                              " "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            staticClass:
                                              "primary--text mt-1 ml-1"
                                          },
                                          [
                                            _vm._v(
                                              "(" +
                                                _vm._s(
                                                  _vm.QuetionsList.points
                                                ) +
                                                "points)"
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    !_vm.preview
                                      ? _c(
                                          "v-container",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 d-flex justify-end",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  color: "error",
                                                  rounded: "",
                                                  disabled: _vm.isRemoving,
                                                  loading: _vm.isRemoving
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.removePropt(
                                                      _vm.number,
                                                      _vm.QuetionsList.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Delete"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-delete-outline")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  rounded: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.updateQuestion()
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    \r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Update"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-check")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  rounded: "",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    ;(_vm.preview = !_vm.preview),
                                                      (_vm.isEditing = false)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint
                                                        .xs ||
                                                        _vm.$vuetify.breakpoint
                                                          .sm
                                                        ? ""
                                                        : "Cancel"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v("mdi-close")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.preview
                                      ? _c(
                                          "v-container",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 d-flex justify-end",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { rounded: "" },
                                                on: {
                                                  click: function($event) {
                                                    ;(_vm.preview = !_vm.preview),
                                                      (_vm.isEditing = true)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint.xs
                                                        ? ""
                                                        : "Edit"
                                                    ) +
                                                    "\r\n                                "
                                                ),
                                                _c(
                                                  "v-icon",
                                                  { attrs: { right: "" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-square-edit-outline"
                                                    )
                                                  ]
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
                                ),
                                _vm._v(" "),
                                _c("v-divider")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            !_vm.preview && !_vm.CheckPreview
                              ? _c(
                                  "v-col",
                                  {
                                    staticClass: "pa-5 mt-0 pt-0",
                                    attrs: { cols: "12", md: "12" }
                                  },
                                  [
                                    _c("vue-element-loading", {
                                      attrs: {
                                        active: _vm.isUpdating,
                                        spinner: "bar-fade-scale"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      { staticClass: "mb-1" },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pa-0 ma-0" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pa-0 ma-0",
                                                attrs: {
                                                  cols: "3",
                                                  md: "1",
                                                  lg: "1"
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  staticClass: "pa-0 ma-0",
                                                  attrs: {
                                                    min: "0",
                                                    readonly: !_vm.isEditing,
                                                    outlined: "",
                                                    type: "number",
                                                    label: "Points"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.getQuestion.points,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.getQuestion,
                                                        "points",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "getQuestion.points"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass:
                                                  "pa-0 ma-0 pl-2 pl-sm-0 text-right",
                                                attrs: {
                                                  cols: "9",
                                                  md: "11",
                                                  lg: "11"
                                                }
                                              },
                                              [
                                                _c("v-select", {
                                                  staticClass:
                                                    "float-right pa-0 ma-0",
                                                  attrs: {
                                                    readonly: !_vm.isEditing,
                                                    items: [
                                                      "Multiple Choice",
                                                      "Identification",
                                                      "True or False",
                                                      "Matching type"
                                                    ],
                                                    outlined: "",
                                                    label: "Type"
                                                  },
                                                  model: {
                                                    value: _vm.getQuestion.type,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.getQuestion,
                                                        "type",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "getQuestion.type"
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
                                          "v-container",
                                          {
                                            staticClass: "pa-0 ma-0",
                                            attrs: { "ma-0": "", "pa-0": "" }
                                          },
                                          [
                                            _c(
                                              "v-row",
                                              { staticClass: "pa-0 ma-0" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [_vm._v("Question")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    staticClass: "pa-0 ma-0",
                                                    attrs: {
                                                      cols: "12",
                                                      md: "12",
                                                      lg: "12"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        staticClass: "mb-3",
                                                        staticStyle: {
                                                          width: "100%"
                                                        }
                                                      },
                                                      [
                                                        _c("editor", {
                                                          ref: "Question",
                                                          attrs: {
                                                            placeholder:
                                                              "Question",
                                                            theme: "snow",
                                                            options: _vm.options
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.getQuestion
                                                                .question,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.getQuestion,
                                                                "question",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "getQuestion.question"
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-container",
                                          [
                                            _c(
                                              "v-row",
                                              {
                                                attrs: {
                                                  "ma-0": "",
                                                  "pa-0": ""
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [_vm._v("Options")]
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.getAnswerList,
                                                  function(Ans, i) {
                                                    return _c(
                                                      "v-col",
                                                      {
                                                        key: Ans.id,
                                                        staticClass:
                                                          "ma-0 pa-0",
                                                        attrs: {
                                                          "ma-0": "",
                                                          "pa-0": "",
                                                          cols: "12",
                                                          lg: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  lg: "12",
                                                                  md: "12"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-container",
                                                                  {
                                                                    staticClass:
                                                                      "d-flex flex-row ma-0 pa-0",
                                                                    attrs: {
                                                                      "ma-0":
                                                                        "",
                                                                      "pa-0": ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-radio-group",
                                                                      {
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .getQuestion
                                                                              .answer,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.getQuestion,
                                                                              "answer",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "getQuestion.answer"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-radio",
                                                                          {
                                                                            key:
                                                                              Ans.id,
                                                                            attrs: {
                                                                              readonly: !_vm.isEditing,
                                                                              color:
                                                                                "primary",
                                                                              name:
                                                                                "Answer",
                                                                              value:
                                                                                Ans.Choice
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                _vm.tempAnswer =
                                                                                  _vm.getQuestion.answer
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-card",
                                                                      {
                                                                        staticClass:
                                                                          "mb-3",
                                                                        staticStyle: {
                                                                          width:
                                                                            "100%"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "editor",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "editor-container",
                                                                              placeholder:
                                                                                "Option " +
                                                                                (i +
                                                                                  1),
                                                                              theme:
                                                                                "snow",
                                                                              options:
                                                                                _vm.options
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                Ans.Choice,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  Ans,
                                                                                  "Choice",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "Ans.Choice"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm.isEditing
                                                                      ? _c(
                                                                          "v-btn",
                                                                          {
                                                                            staticClass:
                                                                              "mt-2 pl-2 pr-2",
                                                                            attrs: {
                                                                              icon:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.removeOption(
                                                                                  i,
                                                                                  Ans.id,
                                                                                  _vm
                                                                                    .getAnswerList
                                                                                    .length
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-icon",
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-delete"
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
                                                ),
                                                _vm._v(" "),
                                                _vm.isEditing
                                                  ? _c(
                                                      "v-col",
                                                      {
                                                        staticClass:
                                                          "pa-0 ma-0 text-right",
                                                        attrs: {
                                                          "ma-0": "",
                                                          "pa-0": "",
                                                          cols: "10"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass: "mt-2",
                                                            attrs: {
                                                              rounded: "",
                                                              color: "primary",
                                                              dark: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.add()
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  dark: "",
                                                                  large: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-plus"
                                                                )
                                                              ]
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
                            _vm.preview || _vm.CheckPreview
                              ? _c(
                                  "v-col",
                                  {
                                    staticClass: "pl-4 pr-4 pt-2",
                                    attrs: { cols: "12", md: "12" },
                                    on: {
                                      dblclick: function($event) {
                                        _vm.CheckPreview
                                          ? (_vm.preview = false)
                                          : (_vm.preview = !_vm.preview)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-container", [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "subtitle-2",
                                          style: _vm.$vuetify.breakpoint.xs
                                            ? "line-height:1.1"
                                            : "line-height:1.5"
                                        },
                                        [
                                          _c("span", {
                                            staticClass: "post-content",
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.getQuestion.question
                                              )
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      { staticClass: "pl-5 pr-5" },
                                      _vm._l(_vm.getAnswerList, function(Ans) {
                                        return _c(
                                          "v-container",
                                          {
                                            key: Ans.id,
                                            staticClass:
                                              "d-flex flex-row ma-0 pa-0"
                                          },
                                          [
                                            _c(
                                              "v-radio-group",
                                              {
                                                staticClass: "ma-0 pa-0",
                                                model: {
                                                  value: _vm.getQuestion.answer,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.getQuestion,
                                                      "answer",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "getQuestion.answer"
                                                }
                                              },
                                              [
                                                _c("v-radio", {
                                                  key: Ans.id,
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
                                                staticClass: "Subtitle-1 d-flex"
                                              },
                                              [
                                                _c("span", {
                                                  staticClass: "post-content",
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      Ans.Choice
                                                    )
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.getQuestion.answer ==
                                                Ans.Choice
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
                                              ]
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
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-hover", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _c(
                  "v-card",
                  {
                    staticClass: "pl-3 pr-3 pt-4",
                    staticStyle: { cursor: "pointer" },
                    attrs: {
                      color: _vm.preview && hover ? "grey lighten-5" : "",
                      outlined: ""
                    }
                  },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "370" },
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
                          ? _c("deleteDialog", {
                              attrs: { DeleteDetails: _vm.DeleteDetails },
                              on: {
                                toggleDialog: function($event) {
                                  ;(_vm.dialog = !_vm.dialog),
                                    (_vm.isRemoving = false)
                                },
                                reloadList: function($event) {
                                  _vm.$emit("reloadList"),
                                    (_vm.dialog = !_vm.dialog),
                                    (_vm.isRemoving = false)
                                }
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "370" },
                        model: {
                          value: _vm.OptionRemovedialog,
                          callback: function($$v) {
                            _vm.OptionRemovedialog = $$v
                          },
                          expression: "OptionRemovedialog"
                        }
                      },
                      [
                        _vm.OptionRemovedialog
                          ? _c("optionRemoveDialog", {
                              attrs: { DeleteDetails: _vm.DeleteDetails },
                              on: {
                                toggleOptionDialog: function($event) {
                                  _vm.OptionRemovedialog = !_vm.OptionRemovedialog
                                },
                                reloadOptionList: function($event) {
                                  _vm.SliceOption(),
                                    (_vm.OptionRemovedialog = !_vm.OptionRemovedialog)
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
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", classs: "ma-0 pa-0" } },
                          [
                            _c(
                              "v-container",
                              {
                                staticClass: "mb-3 d-flex flex-row ",
                                attrs: { "ma-0": "", "pa-0": "" }
                              },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass: "d-flex",
                                    attrs: { "mb-0": "", "pb-0": "" }
                                  },
                                  [
                                    _c("h3", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _c(
                                      "small",
                                      {
                                        staticClass: "primary--text mt-1 ml-1"
                                      },
                                      [
                                        _vm._v(
                                          "(" +
                                            _vm._s(_vm.QuetionsList.points) +
                                            "points)"
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.preview
                                  ? _c(
                                      "v-container",
                                      {
                                        staticClass:
                                          "pa-0 ma-0 d-flex justify-end",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2",
                                            attrs: {
                                              color: "error",
                                              rounded: "",
                                              disabled: _vm.isRemoving,
                                              loading: _vm.isRemoving
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.removePropt(
                                                  _vm.number,
                                                  _vm.QuetionsList.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Delete"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-delete-outline")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2",
                                            attrs: {
                                              rounded: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.updateQuestion()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    \r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Update"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [_vm._v("mdi-check")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { rounded: "", text: "" },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.preview = !_vm.preview),
                                                  (_vm.isEditing = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Cancel"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [_vm._v("mdi-close")])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.preview
                                  ? _c(
                                      "v-container",
                                      {
                                        staticClass:
                                          "pa-0 ma-0 d-flex justify-end",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { rounded: "" },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.preview = !_vm.preview),
                                                  (_vm.isEditing = true)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? ""
                                                    : "Edit"
                                                ) +
                                                "\r\n                                "
                                            ),
                                            _c(
                                              "v-icon",
                                              { attrs: { right: "" } },
                                              [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
                                                )
                                              ]
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
                            ),
                            _vm._v(" "),
                            _c("v-divider")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        !_vm.preview
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pa-5 mt-0 pt-0",
                                attrs: { cols: "12", md: "12" }
                              },
                              [
                                _c("vue-element-loading", {
                                  attrs: {
                                    active: _vm.isUpdating,
                                    spinner: "bar-fade-scale"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  { staticClass: "mb-1" },
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "pa-0 ma-0" },
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "pa-0 ma-0",
                                            attrs: {
                                              cols: "3",
                                              md: "1",
                                              lg: "1"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                min: "0",
                                                readonly: !_vm.isEditing,
                                                outlined: "",
                                                type: "number",
                                                label: "Points"
                                              },
                                              model: {
                                                value: _vm.QuetionsList.points,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.QuetionsList,
                                                    "points",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "QuetionsList.points"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 pl-2 pl-sm-0 text-right",
                                            attrs: {
                                              cols: "9",
                                              md: "11",
                                              lg: "11"
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              staticClass:
                                                "float-right pa-0 ma-0",
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                items: [
                                                  "Multiple Choice",
                                                  "Identification",
                                                  "True or False",
                                                  "Matching type"
                                                ],
                                                outlined: "",
                                                label: "Type"
                                              },
                                              model: {
                                                value: _vm.QuetionsList.type,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.QuetionsList,
                                                    "type",
                                                    $$v
                                                  )
                                                },
                                                expression: "QuetionsList.type"
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
                                      "v-container",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "font-weight-medium"
                                              },
                                              [_vm._v("Insructions")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "mb-5",
                                                attrs: {
                                                  cols: "12",
                                                  md: "12",
                                                  lg: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-card",
                                                  {
                                                    staticClass: "mb-3",
                                                    staticStyle: {
                                                      width: "100%"
                                                    }
                                                  },
                                                  [
                                                    _c("editor", {
                                                      ref: "Question",
                                                      attrs: {
                                                        readonly: !_vm.isEditing,
                                                        id: "editor-container",
                                                        placeholder: "Question",
                                                        theme: "snow",
                                                        options: _vm.options
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.QuetionsList
                                                            .question,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.QuetionsList,
                                                            "question",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "QuetionsList.question"
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
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _vm._l(
                                              _vm.SubQuestionList,
                                              function(Ans, i) {
                                                return _c(
                                                  "v-col",
                                                  {
                                                    key: i,
                                                    staticClass: "ma-0 pa-0",
                                                    attrs: {
                                                      cols: "12",
                                                      lg: "12",
                                                      md: "12"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-container",
                                                              {
                                                                staticClass:
                                                                  "d-flex flex-row ma-0 pa-0"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "pr-2",
                                                                    staticStyle: {
                                                                      width:
                                                                        "100%"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "font-weight-medium"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            "Question "
                                                                          ) +
                                                                            _vm._s(
                                                                              i +
                                                                                1
                                                                            )
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-card",
                                                                      {
                                                                        staticClass:
                                                                          "mb-3",
                                                                        staticStyle: {
                                                                          width:
                                                                            "100%"
                                                                        },
                                                                        attrs: {
                                                                          elevation:
                                                                            "0",
                                                                          outlined:
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "editor",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "editor-container",
                                                                              placeholder:
                                                                                "Question " +
                                                                                (i +
                                                                                  1),
                                                                              theme:
                                                                                "snow",
                                                                              options:
                                                                                _vm.options
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                Ans.sub_question,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  Ans,
                                                                                  "sub_question",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "Ans.sub_question"
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
                                                                  "div",
                                                                  {
                                                                    staticStyle: {
                                                                      width:
                                                                        "100%"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "font-weight-medium"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            "Answer "
                                                                          ) +
                                                                            _vm._s(
                                                                              i +
                                                                                1
                                                                            )
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-card",
                                                                      {
                                                                        staticClass:
                                                                          "mb-3",
                                                                        staticStyle: {
                                                                          width:
                                                                            "100%"
                                                                        },
                                                                        attrs: {
                                                                          elevation:
                                                                            "0",
                                                                          outlined:
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "editor",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "editor-container",
                                                                              placeholder:
                                                                                "Answer " +
                                                                                (i +
                                                                                  1),
                                                                              theme:
                                                                                "snow",
                                                                              options:
                                                                                _vm.options
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .AnswerList[
                                                                                  i
                                                                                ]
                                                                                  .Choice,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm
                                                                                    .AnswerList[
                                                                                    i
                                                                                  ],
                                                                                  "Choice",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "AnswerList[i].Choice"
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
                                                                _vm.isEditing
                                                                  ? _c(
                                                                      "v-btn",
                                                                      {
                                                                        staticClass:
                                                                          "mt-12 pl-2 pr-2",
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.removeAnswer(
                                                                              i,
                                                                              Ans.id,
                                                                              _vm
                                                                                .SubQuestionList
                                                                                .length
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-delete"
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
                                            ),
                                            _vm._v(" "),
                                            _vm.isEditing
                                              ? _c(
                                                  "v-col",
                                                  {
                                                    staticClass:
                                                      "ma-0 pa-0 pb-5 text-right"
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mt-2",
                                                        attrs: {
                                                          rounded: "",
                                                          color: "primary"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.AddNewMatch()
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              dark: "",
                                                              large: ""
                                                            }
                                                          },
                                                          [_vm._v("mdi-plus")]
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
                        _vm.preview
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pl-4 pr-4 pt-2",
                                attrs: { cols: "12", md: "12" },
                                on: {
                                  dblclick: function($event) {
                                    _vm.preview = !_vm.preview
                                  }
                                }
                              },
                              [
                                _c("v-container", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "subtitle-2",
                                      style: _vm.$vuetify.breakpoint.xs
                                        ? "line-height:1.1"
                                        : "line-height:1.5"
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "post-content",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.QuetionsList.question
                                          )
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  { staticClass: "pl-5 pr-5" },
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
                                                staticClass: "font-weight-bold",
                                                attrs: { cols: "7" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                        Column A"
                                                ),
                                                _c("small", [
                                                  _vm._v("(question)")
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "font-weight-bold",
                                                attrs: { cols: "5" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                        Column B"
                                                ),
                                                _c("small", [
                                                  _vm._v("(answers)")
                                                ])
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
                                      "div",
                                      { staticClass: "mb-5" },
                                      [_c("v-divider")],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.SubQuestionList, function(
                                      List,
                                      i
                                    ) {
                                      return _c(
                                        "v-container",
                                        {
                                          key: List.id,
                                          staticClass: "mb-0 pb-0 pt-2"
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "mb-1 pb-0 pt-0 mt-0",
                                                  attrs: { cols: "7" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-medium mr-1"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(i + 1 + ". ")
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("span", {
                                                        staticClass:
                                                          "subquestion-content",
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            List.sub_question
                                                          )
                                                        }
                                                      })
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
                                                  attrs: { cols: "5" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
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
                                                              _vm.Alphabet[i] +
                                                                ". "
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("span", {
                                                        staticClass:
                                                          "subchoices-content",
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            _vm.AnswerList[i]
                                                              .Choice
                                                          )
                                                        }
                                                      })
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
                                    })
                                  ],
                                  2
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
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-hover", {
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _c(
                  "v-card",
                  {
                    staticClass: "pl-3 pr-3 pt-4",
                    staticStyle: { cursor: "pointer" },
                    attrs: {
                      color: _vm.preview && hover ? "grey lighten-5" : "",
                      outlined: ""
                    }
                  },
                  [
                    _c(
                      "v-dialog",
                      {
                        attrs: { persistent: "", "max-width": "370" },
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
                          ? _c("deleteDialog", {
                              attrs: { DeleteDetails: _vm.DeleteDetails },
                              on: {
                                toggleDialog: function($event) {
                                  ;(_vm.dialog = !_vm.dialog),
                                    (_vm.isRemoving = false)
                                },
                                reloadList: function($event) {
                                  _vm.$emit("reloadList"),
                                    (_vm.dialog = !_vm.dialog),
                                    (_vm.isRemoving = false)
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
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", classs: "ma-0 pa-0" } },
                          [
                            _c(
                              "v-container",
                              {
                                staticClass: "mb-3 d-flex flex-row ",
                                attrs: { "ma-0": "", "pa-0": "" }
                              },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass: "d-flex",
                                    attrs: { "mb-0": "", "pb-0": "" }
                                  },
                                  [
                                    _c("h3", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _c(
                                      "small",
                                      {
                                        staticClass: "primary--text mt-1 ml-1"
                                      },
                                      [
                                        _vm._v(
                                          "(" +
                                            _vm._s(_vm.QuetionsList.points) +
                                            "points)"
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.preview
                                  ? _c(
                                      "v-container",
                                      {
                                        staticClass:
                                          "pa-0 ma-0 d-flex justify-end",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2",
                                            attrs: {
                                              color: "error",
                                              rounded: "",
                                              disabled: _vm.isRemoving,
                                              loading: _vm.isRemoving
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.removePropt(
                                                  _vm.number,
                                                  _vm.QuetionsList.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Delete"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-delete-outline")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2",
                                            attrs: {
                                              rounded: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.updateQuestion()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    \r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Update"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [_vm._v("mdi-check")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { rounded: "", text: "" },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.preview = !_vm.preview),
                                                  (_vm.isEditing = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs ||
                                                    _vm.$vuetify.breakpoint.sm
                                                    ? ""
                                                    : "Cancel"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [_vm._v("mdi-close")])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.preview
                                  ? _c(
                                      "v-container",
                                      {
                                        staticClass:
                                          "pa-0 ma-0 d-flex justify-end",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { rounded: "" },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.preview = !_vm.preview),
                                                  (_vm.isEditing = true)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? ""
                                                    : "Edit"
                                                ) +
                                                "\r\n                                "
                                            ),
                                            _c(
                                              "v-icon",
                                              { attrs: { right: "" } },
                                              [
                                                _vm._v(
                                                  "mdi-square-edit-outline"
                                                )
                                              ]
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
                            ),
                            _vm._v(" "),
                            _c("v-divider")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        !_vm.preview && !_vm.previewAll
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pa-5 mt-0 pt-0",
                                attrs: { cols: "12", md: "12" }
                              },
                              [
                                _c("vue-element-loading", {
                                  attrs: {
                                    active: _vm.isUpdating,
                                    spinner: "bar-fade-scale"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  { staticClass: "mb-1" },
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "pa-0 ma-0" },
                                      [
                                        _c("v-col", {
                                          staticClass: "pa-0 ma-0",
                                          attrs: {
                                            cols: "12",
                                            md: "12",
                                            lg: "12"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "pa-0 ma-0",
                                            attrs: {
                                              cols: "3",
                                              md: "1",
                                              lg: "1"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                min: "0",
                                                readonly: !_vm.isEditing,
                                                outlined: "",
                                                type: "number",
                                                label: "Points"
                                              },
                                              model: {
                                                value: _vm.QuetionsList.points,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.QuetionsList,
                                                    "points",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "QuetionsList.points"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 pl-2 pl-sm-0 text-right",
                                            attrs: {
                                              cols: "9",
                                              md: "11",
                                              lg: "11"
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              staticClass:
                                                "float-right pa-0 ma-0",
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                items: [
                                                  "Multiple Choice",
                                                  "Identification",
                                                  "True or False",
                                                  "Matching type"
                                                ],
                                                outlined: "",
                                                label: "Type"
                                              },
                                              model: {
                                                value: _vm.QuetionsList.type,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.QuetionsList,
                                                    "type",
                                                    $$v
                                                  )
                                                },
                                                expression: "QuetionsList.type"
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
                                      "v-container",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pa-0 ma-0" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pa-0 ma-0",
                                                attrs: {
                                                  cols: "12",
                                                  md: "12",
                                                  lg: "12"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-card",
                                                  {
                                                    staticClass: "mb-3",
                                                    staticStyle: {
                                                      width: "100%"
                                                    }
                                                  },
                                                  [
                                                    _c("editor", {
                                                      attrs: {
                                                        id: "editor-container",
                                                        placeholder: "Question",
                                                        theme: "snow",
                                                        options: _vm.options
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.QuetionsList
                                                            .question,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.QuetionsList,
                                                            "question",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "QuetionsList.question"
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
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          { attrs: { "ma-0": "", "pa-0": "" } },
                                          _vm._l(_vm.inputCheck, function(
                                            x,
                                            n
                                          ) {
                                            return _c(
                                              "v-col",
                                              {
                                                key: n,
                                                staticClass: "ma-0 pa-0",
                                                attrs: {
                                                  "ma-0": "",
                                                  "pa-0": "",
                                                  cols: "8"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-container",
                                                  {
                                                    staticClass:
                                                      "d-flex flex-row ma-0 pa-0",
                                                    attrs: {
                                                      "ma-0": "",
                                                      "pa-0": ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-radio-group",
                                                      {
                                                        model: {
                                                          value:
                                                            _vm.QuetionsList
                                                              .answer,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.QuetionsList,
                                                              "answer",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "QuetionsList.answer"
                                                        }
                                                      },
                                                      [
                                                        _c("v-radio", {
                                                          key: n,
                                                          attrs: {
                                                            readonly: !_vm.isEditing,
                                                            color: "primary",
                                                            name: "Answer",
                                                            value:
                                                              _vm.inputCheck[n]
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-textarea", {
                                                      staticClass: "pa-0 ma-0",
                                                      attrs: {
                                                        readonly: "",
                                                        rows: "1",
                                                        outlined: "",
                                                        value:
                                                          _vm.inputCheck[n],
                                                        "auto-grow": "",
                                                        required: ""
                                                      }
                                                    })
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.preview || _vm.previewAll
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pl-4 pr-4 pt-2",
                                attrs: { cols: "12", md: "12" },
                                on: {
                                  dblclick: function($event) {
                                    _vm.previewAll
                                      ? (_vm.preview = false)
                                      : (_vm.preview = !_vm.preview)
                                  }
                                }
                              },
                              [
                                _c("v-container", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "subtitle-2",
                                      style: _vm.$vuetify.breakpoint.xs
                                        ? "line-height:1.1"
                                        : "line-height:1.5"
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "post-content",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.QuetionsList.question
                                          )
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  { staticClass: "pl-5 pr-5" },
                                  _vm._l(_vm.inputCheck, function(x, n) {
                                    return _c(
                                      "v-container",
                                      {
                                        key: n,
                                        staticClass: "d-flex flex-row ma-0 pa-0"
                                      },
                                      [
                                        _c(
                                          "v-radio-group",
                                          {
                                            staticClass: "ma-0 pa-0",
                                            model: {
                                              value: _vm.QuetionsList.answer,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.QuetionsList,
                                                  "answer",
                                                  $$v
                                                )
                                              },
                                              expression: "QuetionsList.answer"
                                            }
                                          },
                                          [
                                            _c("v-radio", {
                                              key: n,
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                color: "primary",
                                                value: _vm.inputCheck[n]
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.tempAnswer =
                                                    _vm.QuetionsList.answer
                                                }
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
                                                _vm._s(_vm.inputCheck[n])
                                            ),
                                            _vm.QuetionsList.answer ==
                                            _vm.inputCheck[n]
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "caption primary--text ml-1"
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
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue?vue&type=template&id=43071f3f& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("v-card-title", { staticClass: "text-h5" }, [
        _vm._v(
          "\n      Delete Question " +
            _vm._s(_vm.DeleteDetails.number) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [_vm._v("This will permanently remove the question.")])
      ]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "pb-5" },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", rounded: "", outlined: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggleDialog")
                }
              }
            },
            [_vm._v("\n        Cancel\n      ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", rounded: "" },
              on: {
                click: function($event) {
                  return _vm.RemoveQuestion(_vm.DeleteDetails.id)
                }
              }
            },
            [_vm._v("\n        Confirm\n      ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/questionListTab.vue?vue&type=template&id=cd0ead0e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-1" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "370" },
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
            ? _c("deleteDialog", {
                attrs: { DeleteDetails: _vm.DeleteDetails },
                on: {
                  toggleDialog: function($event) {
                    ;(_vm.dialog = !_vm.dialog), (_vm.isRemoving = false)
                  },
                  reloadList: function($event) {
                    _vm.fetchQuestions(),
                      (_vm.dialog = !_vm.dialog),
                      (_vm.isRemoving = false)
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
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
                    [_vm._v("\r\n                Loading\r\n            ")]
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
      _vm.Qlength == 0 && !_vm.isFetching
        ? _c(
            "v-row",
            { attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                {
                  staticClass: "text-center",
                  attrs: { cols: "12", sm: "8", md: "4" }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "10rem" } }, [
                    _vm._v("\r\n            mdi-book-open-variant\r\n        ")
                  ]),
                  _vm._v(" "),
                  _c("h1", [_vm._v(" Empty Question ")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(" Start adding question for this classwork.")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.$router.push({
                            name: "add-question",
                            query: { clwk: _vm.$route.query.clwk }
                          })
                        }
                      }
                    },
                    [_vm._v(" Add Question ")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isloading && _vm.Qlength != 0
        ? _c(
            "v-container",
            { attrs: { "pa-0": "", "ma-0": "", fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8", lg: "9", xl: "9" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "pa-3",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        [
                          _c(
                            "v-row",
                            [
                              _vm.Show && _vm.Qlength != 0
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "pl-8 pr-8 pt-10 pb-4 mb-0",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "text-left pb-0 mb-0",
                                              attrs: {
                                                cols: "6",
                                                md: "8",
                                                lg: "8"
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  outlined: "",
                                                  "prepend-icon-inner":
                                                    "mdi-magnify",
                                                  label: "Search"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "text-right pb-0 mb-0",
                                              attrs: {
                                                cols: "6",
                                                md: "4",
                                                lg: "4"
                                              }
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  items: [
                                                    "All",
                                                    "Multiple Choice",
                                                    "Identification",
                                                    "True or False",
                                                    "Matching type"
                                                  ],
                                                  label: "Type",
                                                  outlined: ""
                                                },
                                                model: {
                                                  value: _vm.ListType,
                                                  callback: function($$v) {
                                                    _vm.ListType = $$v
                                                  },
                                                  expression: "ListType"
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
                              _vm.Show && _vm.Qlength != 0
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "pl-5 pr-5 pt-1",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    _vm._l(
                                      _vm.getAll_questions.Question,
                                      function(item, index) {
                                        return _c(
                                          "v-container",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ListType == "All" ||
                                                  _vm.ListType == item.type,
                                                expression:
                                                  "ListType == 'All' || ListType == item.type"
                                              }
                                            ],
                                            key: item.id,
                                            staticClass: "mb-1 pt-0 mt-0"
                                          },
                                          [
                                            item.type == "Multiple Choice"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "mb-2" },
                                                  [
                                                    item.type ==
                                                    "Multiple Choice"
                                                      ? _c(
                                                          "multipleChoiceList",
                                                          {
                                                            attrs: {
                                                              previewAll:
                                                                _vm.previewAll,
                                                              number: index + 1,
                                                              Question: item,
                                                              Choices:
                                                                _vm
                                                                  .getAll_questions
                                                                  .Answer[index]
                                                            },
                                                            on: {
                                                              updateQuestion:
                                                                _vm.updateQuestion,
                                                              reloadList: function(
                                                                $event
                                                              ) {
                                                                return _vm.fetchQuestionsList()
                                                              }
                                                            }
                                                          }
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "Identification"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "mb-2" },
                                                  [
                                                    item.type ==
                                                    "Identification"
                                                      ? _c(
                                                          "indentificationList",
                                                          {
                                                            attrs: {
                                                              previewAll:
                                                                _vm.previewAll,
                                                              number: index + 1,
                                                              Question: item
                                                            },
                                                            on: {
                                                              updateQuestion:
                                                                _vm.updateQuestion,
                                                              reloadList: function(
                                                                $event
                                                              ) {
                                                                return _vm.fetchQuestionsList()
                                                              }
                                                            }
                                                          }
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "True or False"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "mb-2" },
                                                  [
                                                    item.type == "True or False"
                                                      ? _c("trueOrfalseList", {
                                                          attrs: {
                                                            previewAll:
                                                              _vm.previewAll,
                                                            number: index + 1,
                                                            Question: item
                                                          },
                                                          on: {
                                                            updateQuestion:
                                                              _vm.updateQuestion,
                                                            reloadList: function(
                                                              $event
                                                            ) {
                                                              return _vm.fetchQuestionsList()
                                                            }
                                                          }
                                                        })
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.type == "Matching type"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "mb-2" },
                                                  [
                                                    item.type == "Matching type"
                                                      ? _c("matchingType", {
                                                          attrs: {
                                                            number: index + 1,
                                                            Question: item,
                                                            SubQuestion:
                                                              _vm
                                                                .getAll_questions
                                                                .Answer[index]
                                                                .SubQuestion,
                                                            Answers:
                                                              _vm
                                                                .getAll_questions
                                                                .Answer[index]
                                                                .SubAnswer
                                                          },
                                                          on: {
                                                            reloadList: function(
                                                              $event
                                                            ) {
                                                              return _vm.fetchQuestionsList()
                                                            }
                                                          }
                                                        })
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      }
                                    ),
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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue?vue&type=style&index=0&id=78dce45c&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3c5a05f1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);