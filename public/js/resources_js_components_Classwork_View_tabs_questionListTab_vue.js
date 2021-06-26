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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      QuetionsList: {},
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    optionRemoveDialog: optionRemoveDialog
  },
  data: function data() {
    return {
      QuetionsList: {},
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
        this.isOptionIndex = index;
        this.isOptionRemove = true;
        this.dialog = true;
        /*  this.AnswerList.splice(index, 1);
         axios.delete('/api/question/'+id)
         .then(res=>{
             this.$store.dispatch('fetchQuestions', this.$route.query.clwk)
             .then(r=>{
                 this.Qlength = r[1];
             });
             
         }) */
      }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['number', 'Question', 'SubQuestion', 'Answers'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
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
          _this.$store.dispatch('fetchQuestions', _this.$route.query.clwk).then(function (r) {
            _this.Qlength = r[1];
          });
        });
      }
    }
  },
  created: function created() {
    this.QuetionsList = this.Question;
    this.AnswerList = this.Answers;
    this.SubQuestionList = this.SubQuestion;
  },
  mounted: function mounted() {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      inputCheck: ['True', 'False'],
      QuetionsList: {},
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
/* harmony import */ var _List_types_IndentificationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List-types/IndentificationList */ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue");
/* harmony import */ var _List_types_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List-types/MultipleChoiceList */ "./resources/js/components/Classwork_View/tabs/List-types/MultipleChoiceList.vue");
/* harmony import */ var _List_types_trueOrfalseList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List-types/trueOrfalseList */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue");
/* harmony import */ var _List_types_matchingType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List-types/matchingType */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue");
/* harmony import */ var _dialogs_deleteDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/deleteDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/deleteDialog.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    deleteDialog: _dialogs_deleteDialog__WEBPACK_IMPORTED_MODULE_4__.default,
    multipleChoiceList: _List_types_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_1__.default,
    indentificationList: _List_types_IndentificationList__WEBPACK_IMPORTED_MODULE_0__.default,
    trueOrfalseList: _List_types_trueOrfalseList__WEBPACK_IMPORTED_MODULE_2__.default,
    matchingType: _List_types_matchingType__WEBPACK_IMPORTED_MODULE_3__.default
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
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["getAll_questions"]),
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*  .ql-toolbar.ql-snow {\r\n        background: #f2f2f2;\r\n        border: none;\r\n } */\n.centered-input >>> input {\r\n    text-align: center\n}\n.ql-editor img{\r\n\r\n    max-height: 10rem !important;\n}\n.ql-container{\r\n    max-height: 50rem;\n}\n.post-content img{\r\n     max-height: 10rem !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndentificationList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
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
/* harmony import */ var _matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true& */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true&");
/* harmony import */ var _matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matchingType.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _matchingType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2e0bb8c4",
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
/* harmony import */ var _trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true& */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true&");
/* harmony import */ var _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "da29ddda",
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

/***/ "./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_matchingType_vue_vue_type_template_id_2e0bb8c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_da29ddda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true&");


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

/***/ "./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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
  return _c("v-hover", {
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
                    staticClass: "pl-3 pr-3 pt-8",
                    style:
                      _vm.preview || _vm.previewAll
                        ? "border-top:5px solid #EF6C00"
                        : "",
                    attrs: { elevation: _vm.preview && hover ? 20 : 5 }
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
                        !_vm.preview
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pl-4 pr-4 pt-2",
                                attrs: { cols: "12", md: "12" }
                              },
                              [
                                _c(
                                  "v-container",
                                  { staticClass: "mb-1" },
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
                                                  "\r\n                                        " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint.xs
                                                        ? ""
                                                        : "Delete"
                                                    ) +
                                                    "\r\n                                        "
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
                                                attrs: {
                                                  rounded: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.preview = !_vm.preview
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                        \r\n                                        " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint.xs
                                                        ? ""
                                                        : "Update"
                                                    ) +
                                                    "\r\n                                        "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v(
                                                    "mdi-square-edit-outline"
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
                                    _c("h2", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _vm._v(" "),
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
                                                        id: "editor-container",
                                                        placeholder: "Question",
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
                                _c(
                                  "v-container",
                                  {
                                    staticClass:
                                      "d-flex flex-row justify-space-between"
                                  },
                                  [
                                    _c("h2", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { rounded: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.previewAll
                                              ? (_vm.preview = false)
                                              : (_vm.preview = !_vm.preview)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                            " +
                                            _vm._s(
                                              _vm.$vuetify.breakpoint.xs
                                                ? ""
                                                : "Edit"
                                            ) +
                                            "\r\n                            "
                                        ),
                                        _c("v-icon", { attrs: { right: "" } }, [
                                          _vm._v("mdi-square-edit-outline")
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
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
                                      { staticClass: "subtitle-1 d-flex item" },
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
  return _c("v-hover", {
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
                    staticClass: "pl-3 pr-3 pt-8",
                    style:
                      _vm.preview || _vm.previewAll
                        ? "border-top:5px solid #EF6C00"
                        : "",
                    attrs: { elevation: _vm.preview && hover ? 20 : 5 }
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
                        !_vm.preview && !_vm.CheckPreview
                          ? _c(
                              "v-col",
                              {
                                staticClass: "pl-4 pr-4 pt-2",
                                attrs: { cols: "12", md: "12" }
                              },
                              [
                                _c(
                                  "v-container",
                                  { staticClass: "mb-1" },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass:
                                          "mb-3 d-flex flex-row justify-space-between",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
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
                                                      _vm.$vuetify.breakpoint.xs
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
                                                attrs: {
                                                  rounded: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.preview = !_vm.preview
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                    \r\n                                    " +
                                                    _vm._s(
                                                      _vm.$vuetify.breakpoint.xs
                                                        ? ""
                                                        : "Update"
                                                    ) +
                                                    "\r\n                                    "
                                                ),
                                                _c("v-icon", [
                                                  _vm._v(
                                                    "mdi-square-edit-outline"
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
                                    _c("h2", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _vm._v(" "),
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
                                                value: _vm.getQuestion.points,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.getQuestion,
                                                    "points",
                                                    $$v
                                                  )
                                                },
                                                expression: "getQuestion.points"
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
                                                expression: "getQuestion.type"
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
                                                        placeholder: "Question",
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
                                          { attrs: { "ma-0": "", "pa-0": "" } },
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
                                            _vm._l(_vm.getAnswerList, function(
                                              Ans,
                                              i
                                            ) {
                                              return _c(
                                                "v-col",
                                                {
                                                  key: Ans.id,
                                                  staticClass: "ma-0 pa-0",
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
                                                                      key: i,
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
                                                                  _c("editor", {
                                                                    attrs: {
                                                                      id:
                                                                        "editor-container",
                                                                      placeholder:
                                                                        "Option " +
                                                                        (i + 1),
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
                                                                  })
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
                                                                        icon: ""
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
                                            }),
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
                                                      cols: "8"
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
                                _c(
                                  "v-container",
                                  {
                                    staticClass:
                                      "d-flex flex-row justify-space-between"
                                  },
                                  [
                                    _c("h2", [
                                      _vm._v("Question #" + _vm._s(_vm.number))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { rounded: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.previewAll
                                              ? (_vm.preview = false)
                                              : (_vm.preview = !_vm.preview)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                            " +
                                            _vm._s(
                                              _vm.$vuetify.breakpoint.xs
                                                ? ""
                                                : "Edit"
                                            ) +
                                            "\r\n                            "
                                        ),
                                        _c("v-icon", { attrs: { right: "" } }, [
                                          _vm._v("mdi-square-edit-outline")
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
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
                                  _vm._l(_vm.getAnswerList, function(Ans, i) {
                                    return _c(
                                      "v-container",
                                      {
                                        key: i,
                                        staticClass: "d-flex flex-row ma-0 pa-0"
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
                                              expression: "getQuestion.answer"
                                            }
                                          },
                                          [
                                            _c("v-radio", {
                                              key: i,
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
                                          { staticClass: "Subtitle-1 d-flex" },
                                          [
                                            _c("span", {
                                              staticClass: "post-content",
                                              domProps: {
                                                innerHTML: _vm._s(Ans.Choice)
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.getQuestion.answer == Ans.Choice
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/matchingType.vue?vue&type=template&id=2e0bb8c4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "pl-3 pr-3 pt-8",
                style:
                  _vm.preview || _vm.previewAll
                    ? "border-top:5px solid #EF6C00"
                    : "",
                attrs: { elevation: _vm.preview && hover ? 20 : 5 }
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
                    !_vm.preview
                      ? _c(
                          "v-col",
                          {
                            staticClass: "pl-4 pr-4",
                            attrs: { cols: "12", md: "12" }
                          },
                          [
                            _c(
                              "v-container",
                              { staticClass: "mb-1" },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass:
                                      "mb-3 d-flex flex-row justify-space-between",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
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
                                                  _vm.$vuetify.breakpoint.xs
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
                                            attrs: {
                                              rounded: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.preview = !_vm.preview
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                    \r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? ""
                                                    : "Update"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-square-edit-outline")
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
                                _c("h2", [
                                  _vm._v("Question #" + _vm._s(_vm.number))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  { staticClass: "pa-0 ma-0" },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { cols: "3", md: "1", lg: "1" }
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
                                            expression: "QuetionsList.points"
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
                                        attrs: { cols: "9", md: "11", lg: "11" }
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "float-right pa-0 ma-0",
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
                                          { staticClass: "font-weight-medium" },
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
                                                staticStyle: { width: "100%" }
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
                                                      _vm.QuetionsList.question,
                                                    callback: function($$v) {
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
                                        _vm._l(_vm.SubQuestionList, function(
                                          Ans,
                                          i
                                        ) {
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
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "v-container",
                                                        {
                                                          staticClass:
                                                            "d-flex flex-row ma-0 pa-0"
                                                        },
                                                        [
                                                          _c(
                                                            "v-card",
                                                            {
                                                              staticClass:
                                                                "pa-3 mb-2",
                                                              staticStyle: {
                                                                width: "100%"
                                                              },
                                                              attrs: {
                                                                outlined: ""
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
                                                                        i + 1
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
                                                                  }
                                                                },
                                                                [
                                                                  _c("editor", {
                                                                    attrs: {
                                                                      rules:
                                                                        _vm.rules,
                                                                      id:
                                                                        "editor-container",
                                                                      placeholder:
                                                                        "Question " +
                                                                        (i + 1),
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
                                                                  })
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
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
                                                                        i + 1
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
                                                                  }
                                                                },
                                                                [
                                                                  _c("editor", {
                                                                    attrs: {
                                                                      id:
                                                                        "editor-container",
                                                                      placeholder:
                                                                        "Answer " +
                                                                        (i + 1),
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
                                                                  })
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
                                                                    icon: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-delete"
                                                                    )
                                                                  ])
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
                                        }),
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
                                                      click: function($event) {
                                                        return _vm.addNewMatch()
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
                            _c(
                              "v-container",
                              {
                                staticClass:
                                  "d-flex flex-row justify-space-between"
                              },
                              [
                                _c("h2", [
                                  _vm._v("Question #" + _vm._s(_vm.number))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { rounded: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.previewAll
                                          ? (_vm.preview = false)
                                          : (_vm.preview = !_vm.preview)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(
                                          _vm.$vuetify.breakpoint.xs
                                            ? ""
                                            : "Edit"
                                        ) +
                                        "\r\n                            "
                                    ),
                                    _c("v-icon", { attrs: { right: "" } }, [
                                      _vm._v("mdi-square-edit-outline")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
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
                                              "\r\n                                    Column A"
                                            ),
                                            _c("small", [_vm._v("(question)")])
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
                                              "\r\n                                     Column B"
                                            ),
                                            _c("small", [_vm._v("(answers)")])
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
                                _vm._l(_vm.SubQuestionList, function(List, i) {
                                  return _c(
                                    "v-container",
                                    { key: List.id, staticClass: "mb-0 pb-0" },
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
                                                          _vm.Alphabet[i] + ". "
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
                                                        _vm.AnswerList[i].Choice
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/trueOrfalseList.vue?vue&type=template&id=da29ddda&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "pl-3 pr-3 pt-8",
                style:
                  _vm.preview || _vm.previewAll
                    ? "border-top:5px solid #EF6C00"
                    : "",
                attrs: { elevation: _vm.preview && hover ? 20 : 5 }
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
                    !_vm.preview && !_vm.previewAll
                      ? _c(
                          "v-col",
                          {
                            staticClass: "pl-4 pr-4 pt-2",
                            attrs: { cols: "12", md: "12" }
                          },
                          [
                            _c(
                              "v-container",
                              { staticClass: "mb-1" },
                              [
                                _c(
                                  "v-container",
                                  {
                                    staticClass: "mb-3 d-flex flex-row",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
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
                                              "\r\n                                            " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? ""
                                                    : "Delete"
                                                ) +
                                                "\r\n                                            "
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
                                            attrs: {
                                              rounded: "",
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.preview = !_vm.preview
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                            \r\n                                            " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? ""
                                                    : "Update"
                                                ) +
                                                "\r\n                                            "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-square-edit-outline")
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
                                _c("h2", [
                                  _vm._v("Question #" + _vm._s(_vm.number))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  { staticClass: "pa-0 ma-0" },
                                  [
                                    _c("v-col", {
                                      staticClass: "pa-0 ma-0",
                                      attrs: { cols: "12", md: "12", lg: "12" }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { cols: "3", md: "1", lg: "1" }
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
                                            expression: "QuetionsList.points"
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
                                        attrs: { cols: "9", md: "11", lg: "11" }
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "float-right pa-0 ma-0",
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
                                                staticStyle: { width: "100%" }
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
                                                      _vm.QuetionsList.question,
                                                    callback: function($$v) {
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
                                      _vm._l(_vm.inputCheck, function(x, n) {
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
                                                        _vm.QuetionsList.answer,
                                                      callback: function($$v) {
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
                                                        value: _vm.inputCheck[n]
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
                                                    value: _vm.inputCheck[n],
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
                            _c(
                              "v-container",
                              {
                                staticClass:
                                  "d-flex flex-row justify-space-between"
                              },
                              [
                                _c("h2", [
                                  _vm._v("Question #" + _vm._s(_vm.number))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { rounded: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.previewAll
                                          ? (_vm.preview = false)
                                          : (_vm.preview = !_vm.preview)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(
                                          _vm.$vuetify.breakpoint.xs
                                            ? ""
                                            : "Edit"
                                        ) +
                                        "\r\n                            "
                                    ),
                                    _c("v-icon", { attrs: { right: "" } }, [
                                      _vm._v("mdi-square-edit-outline")
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
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
                                    _c("div", { staticClass: "Subtitle 1" }, [
                                      _vm._v(
                                        "\r\n                                " +
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
                                    ])
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
                    [_vm._v("\r\n            Loading\r\n        ")]
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
                  _c("v-icon", { staticStyle: { "font-size": "14rem" } }, [
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
                            name: "clwk",
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
            {
              staticClass: "pa-0 pa-0",
              attrs: { "pa-0": "", "ma-0": "", fluid: "" }
            },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "12", md: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "elevation-5",
                          staticStyle: { "border-top": "5px solid #EF6C00" }
                        },
                        [
                          _c(
                            "v-window",
                            [
                              _c(
                                "v-window-item",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _vm.Show && _vm.Qlength != 0
                                        ? _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "pl-8 pr-7 pt-10 pb-4 mb-0",
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
                                                        md: "9",
                                                        lg: "9"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass:
                                                            "ml-2 mt-2",
                                                          attrs: {
                                                            rounded: "",
                                                            outlined: "",
                                                            color: "primary"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              _vm.previewAll = !_vm.previewAll
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                                Preview All\r\n                                                "
                                                          ),
                                                          _c("v-icon", [
                                                            _vm._v(
                                                              "mdi-" +
                                                                _vm._s(
                                                                  _vm.previewAll
                                                                    ? "eye-off"
                                                                    : "eye"
                                                                )
                                                            )
                                                          ])
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
                                                      staticClass:
                                                        "text-right pb-0 mb-0",
                                                      attrs: {
                                                        cols: "6",
                                                        md: "3",
                                                        lg: "3"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "ml-3 mt-1 "
                                                        },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "ma-0 pa-0",
                                                              attrs: {
                                                                cols: "10"
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
                                                                  dense: "",
                                                                  solo: ""
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.ListType,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.ListType = $$v
                                                                  },
                                                                  expression:
                                                                    "ListType"
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
                                                    key: item.id,
                                                    staticClass:
                                                      "mb-1 pt-0 mt-0"
                                                  },
                                                  [
                                                    (item.type ==
                                                      "Multiple Choice" &&
                                                      _vm.ListType == "All") ||
                                                    _vm.ListType ==
                                                      "Multiple Choice"
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass: "mb-2"
                                                          },
                                                          [
                                                            item.type ==
                                                            "Multiple Choice"
                                                              ? _c(
                                                                  "multipleChoiceList",
                                                                  {
                                                                    attrs: {
                                                                      previewAll:
                                                                        _vm.previewAll,
                                                                      number:
                                                                        index +
                                                                        1,
                                                                      Question: item,
                                                                      Choices:
                                                                        _vm
                                                                          .getAll_questions
                                                                          .Answer[
                                                                          index
                                                                        ]
                                                                    },
                                                                    on: {
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
                                                    (item.type ==
                                                      "Identification" &&
                                                      _vm.ListType == "All") ||
                                                    _vm.ListType ==
                                                      "Identification"
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass: "mb-2"
                                                          },
                                                          [
                                                            item.type ==
                                                            "Identification"
                                                              ? _c(
                                                                  "indentificationList",
                                                                  {
                                                                    attrs: {
                                                                      previewAll:
                                                                        _vm.previewAll,
                                                                      number:
                                                                        index +
                                                                        1,
                                                                      Question: item
                                                                    },
                                                                    on: {
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
                                                    (item.type ==
                                                      "True or False" &&
                                                      _vm.ListType == "All") ||
                                                    _vm.ListType ==
                                                      "True or False"
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass: "mb-2"
                                                          },
                                                          [
                                                            item.type ==
                                                            "True or False"
                                                              ? _c(
                                                                  "trueOrfalseList",
                                                                  {
                                                                    attrs: {
                                                                      previewAll:
                                                                        _vm.previewAll,
                                                                      number:
                                                                        index +
                                                                        1,
                                                                      Question: item
                                                                    },
                                                                    on: {
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
                                                    (item.type ==
                                                      "Matching type" &&
                                                      _vm.ListType == "All") ||
                                                    _vm.ListType ==
                                                      "Matching type"
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass: "mb-2"
                                                          },
                                                          [
                                                            item.type ==
                                                            "Matching type"
                                                              ? _c(
                                                                  "matchingType",
                                                                  {
                                                                    attrs: {
                                                                      number:
                                                                        index +
                                                                        1,
                                                                      Question: item,
                                                                      SubQuestion:
                                                                        _vm
                                                                          .getAll_questions
                                                                          .Answer[
                                                                          index
                                                                        ]
                                                                          .SubQuestion,
                                                                      Answers:
                                                                        _vm
                                                                          .getAll_questions
                                                                          .Answer[
                                                                          index
                                                                        ]
                                                                          .SubAnswer
                                                                    },
                                                                    on: {
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/List-types/IndentificationList.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("353643b1", content, false, {});
// Hot Module Replacement
if(false) {}

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