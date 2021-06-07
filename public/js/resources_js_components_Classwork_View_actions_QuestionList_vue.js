(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_actions_QuestionList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _questionListTypes_IndentificationList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionListTypes/IndentificationList */ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue");
/* harmony import */ var _questionListTypes_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionListTypes/MultipleChoiceList */ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue");
/* harmony import */ var _questionListTypes_trueOrfalseList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionListTypes/trueOrfalseList */ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue");
/* harmony import */ var _questionListTypes_twoColumnsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionListTypes/twoColumnsList */ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue");
/* harmony import */ var _dialog_deleteDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/deleteDialog */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue");
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    deleteDialog: _dialog_deleteDialog__WEBPACK_IMPORTED_MODULE_4__.default,
    multipleChoiceList: _questionListTypes_MultipleChoiceList__WEBPACK_IMPORTED_MODULE_1__.default,
    indentificationList: _questionListTypes_IndentificationList__WEBPACK_IMPORTED_MODULE_0__.default,
    trueOrfalseList: _questionListTypes_trueOrfalseList__WEBPACK_IMPORTED_MODULE_2__.default,
    twoColumnsList: _questionListTypes_twoColumnsList__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      dialog: false,
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isEditing: false,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {}
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
      });
    }
  },
  mounted: function mounted() {
    //this.getAllQuestion();
    this.isLoading = true;
    this.Show = false;
    this.fetchQuestionsList();
    this.Show = true;
    this.isLoading = false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        _this.$emit('reloadList');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/deleteDialog */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'number'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      QuetionsList: {},
      preview: false,
      dialog: false,
      isRemoving: false,
      isEditing: false,
      DeleteDetails: {}
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
  mounted: function mounted() {
    this.QuetionsList = this.Question;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/deleteDialog */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'Choices', 'number'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      QuetionsList: {},
      AnswerList: {},
      preview: false,
      dialog: false,
      inputCheck: ['True', 'False'],
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isEditing: false,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {},
      message: ''
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
  mounted: function mounted() {
    this.QuetionsList = this.Question;
    this.AnswerList = this.Choices;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/deleteDialog */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Question', 'number'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      inputCheck: ['True', 'False'],
      QuetionsList: {},
      preview: false,
      dialog: false,
      isRemoving: false,
      isEditing: false,
      DeleteDetails: {}
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
  mounted: function mounted() {
    this.QuetionsList = this.Question;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
var deleteDialog = function deleteDialog() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/deleteDialog */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['number', 'Question', 'SubQuestion', 'Answers'],
  components: {
    deleteDialog: deleteDialog
  },
  data: function data() {
    return {
      QuetionsList: {},
      SubQuestionList: {},
      AnswerList: {},
      preview: false,
      dialog: false,
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isEditing: false,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {},
      message: ''
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
  mounted: function mounted() {
    this.QuetionsList = this.Question;
    this.AnswerList = this.Answers;
    this.SubQuestionList = this.SubQuestion;
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/QuestionList.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/QuestionList.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionList.vue?vue&type=template&id=1697e14f&scoped=true& */ "./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true&");
/* harmony import */ var _QuestionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuestionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1697e14f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/QuestionList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=template&id=34b26902& */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902&");
/* harmony import */ var _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndentificationList.vue?vue&type=template&id=17655afb&scoped=true& */ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true&");
/* harmony import */ var _IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndentificationList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17655afb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true& */ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true&");
/* harmony import */ var _MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleChoiceList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37d17354",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true& */ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true&");
/* harmony import */ var _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trueOrfalseList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "70fcb5ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true& */ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true&");
/* harmony import */ var _twoColumnsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twoColumnsList.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _twoColumnsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "783011d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./trueOrfalseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_twoColumnsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./twoColumnsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_twoColumnsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionList_vue_vue_type_template_id_1697e14f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionList.vue?vue&type=template&id=1697e14f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteDialog_vue_vue_type_template_id_34b26902___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteDialog.vue?vue&type=template&id=34b26902& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true& ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndentificationList_vue_vue_type_template_id_17655afb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndentificationList.vue?vue&type=template&id=17655afb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceList_vue_vue_type_template_id_37d17354_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_trueOrfalseList_vue_vue_type_template_id_70fcb5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_twoColumnsList_vue_vue_type_template_id_783011d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/QuestionList.vue?vue&type=template&id=1697e14f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      _c(
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
                { attrs: { cols: "12", sm: "12", md: "12" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-12" },
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
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "primary",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass:
                                            "d-flex flex-row justify-space-between"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "mt-1 text-sm-h3 text-md-h5 text-xl-h3 white--text"
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                            Question List  (" +
                                                  _vm._s(_vm.Qlength) +
                                                  ")"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "" },
                                              on: {
                                                click: function($event) {
                                                  _vm.Show = !_vm.Show
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "white" } },
                                                [
                                                  _vm._v(
                                                    "mdi-" +
                                                      _vm._s(
                                                        _vm.Show
                                                          ? "window-close"
                                                          : "eye"
                                                      )
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
                                  _vm.Show
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
                                                key: index,
                                                staticClass: "mb-1"
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
                                                                  number:
                                                                    index + 1,
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
                                                                  number:
                                                                    index + 1,
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
                                                item.type == "True or False"
                                                  ? _c(
                                                      "div",
                                                      { staticClass: "mb-2" },
                                                      [
                                                        item.type ==
                                                        "True or False"
                                                          ? _c(
                                                              "trueOrfalseList",
                                                              {
                                                                attrs: {
                                                                  number:
                                                                    index + 1,
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
                                                item.type ==
                                                "Two Colums Multiple Choice"
                                                  ? _c(
                                                      "div",
                                                      { staticClass: "mb-2" },
                                                      [
                                                        item.type ==
                                                        "Two Colums Multiple Choice"
                                                          ? _c(
                                                              "twoColumnsList",
                                                              {
                                                                attrs: {
                                                                  number:
                                                                    index + 1,
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
                                                                    ].SubAnswer
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/dialog/deleteDialog.vue?vue&type=template&id=34b26902& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/IndentificationList.vue?vue&type=template&id=17655afb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
                    _c(
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
                                    staticClass: "pa-0 ma-0",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mr-2 mb-xs-2",
                                        attrs: {
                                          color: _vm.isEditing ? "primary" : "",
                                          rounded: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.isEditing = !_vm.isEditing
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                              \r\n                                    " +
                                            _vm._s(
                                              _vm.$vuetify.breakpoint.xs
                                                ? _vm.isEditing
                                                  ? "Update"
                                                  : ""
                                                : _vm.isEditing
                                                ? "Update"
                                                : "Edit"
                                            ) +
                                            "\r\n                                    "
                                        ),
                                        _c("v-icon", [
                                          _vm._v("mdi-square-edit-outline")
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
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      rounded: "",
                                      disabled: _vm.isRemoving,
                                      outlined: "",
                                      loading: _vm.isRemoving,
                                      color: "primary"
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
                                      "\r\n                                    \r\n                                    " +
                                        _vm._s(
                                          _vm.$vuetify.breakpoint.xs
                                            ? ""
                                            : "Preview"
                                        ) +
                                        "\r\n                                    "
                                    ),
                                    _c("v-icon", [_vm._v("mdi-eye")])
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
                                        readonly: !_vm.isEditing,
                                        filled: "",
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
                                        attrs: { cols: "12", md: "9", lg: "9" }
                                      },
                                      [
                                        _c("v-textarea", {
                                          staticClass: "pa-0 ma-0",
                                          attrs: {
                                            rows: "1",
                                            readonly: !_vm.isEditing,
                                            filled: "",
                                            label: "Question",
                                            "auto-grow": "",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.QuetionsList.question,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.QuetionsList,
                                                "question",
                                                $$v
                                              )
                                            },
                                            expression: "QuetionsList.question"
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
                                          "pa-0 ma-0 pl-md-3 pl-sm-0",
                                        attrs: { cols: "12", md: "3", lg: "3" }
                                      },
                                      [
                                        _c("v-select", {
                                          staticClass: "pa-0 ma-0",
                                          attrs: {
                                            readonly: !_vm.isEditing,
                                            items: [
                                              "Multiple Choice",
                                              "Identification",
                                              "True or False",
                                              "Two Colums Multiple Choice"
                                            ],
                                            filled: "",
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
                                        _c("v-textarea", {
                                          staticClass: "pa-0 ma-0",
                                          attrs: {
                                            readonly: !_vm.isEditing,
                                            filled: "",
                                            label: "Answer",
                                            "auto-grow": ""
                                          },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/MultipleChoiceList.vue?vue&type=template&id=37d17354&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
                style: _vm.preview ? "border-top:5px solid #EF6C00" : "",
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
                                    staticClass:
                                      "mb-3 d-flex flex-row justify-space-between",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2 mb-xs-2",
                                            attrs: {
                                              color: _vm.isEditing
                                                ? "primary"
                                                : "",
                                              rounded: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.isEditing = !_vm.isEditing
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                              \r\n                                " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? _vm.isEditing
                                                      ? "Update"
                                                      : ""
                                                    : _vm.isEditing
                                                    ? "Update"
                                                    : "Edit"
                                                ) +
                                                "\r\n                                "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-square-edit-outline")
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          rounded: "",
                                          outlined: "",
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
                                                : "Preview"
                                            ) +
                                            "\r\n                                    "
                                        ),
                                        _c("v-icon", [_vm._v("mdi-eye")])
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
                                            readonly: !_vm.isEditing,
                                            filled: "",
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
                                              md: "9",
                                              lg: "9"
                                            }
                                          },
                                          [
                                            _c("v-textarea", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                rows: "1",
                                                readonly: !_vm.isEditing,
                                                filled: "",
                                                label: "Question",
                                                "auto-grow": "",
                                                required: ""
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 pl-md-3 pl-sm-0",
                                            attrs: {
                                              cols: "12",
                                              md: "3",
                                              lg: "3"
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                items: [
                                                  "Multiple Choice",
                                                  "Identification",
                                                  "True or False",
                                                  "Two Colums Multiple Choice"
                                                ],
                                                filled: "",
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
                                        _vm._l(_vm.AnswerList, function(
                                          Ans,
                                          i
                                        ) {
                                          return _c(
                                            "v-col",
                                            {
                                              key: i,
                                              staticClass: "ma-0 pa-0",
                                              attrs: {
                                                "ma-0": "",
                                                "pa-0": "",
                                                cols: "10",
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
                                                      staticClass: "pa-0 ma-0",
                                                      attrs: {
                                                        cols: "12",
                                                        lg: "8",
                                                        md: "8"
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
                                                                    .QuetionsList
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
                                                                      _vm.QuetionsList.answer
                                                                  }
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c("v-textarea", {
                                                            staticClass:
                                                              "pa-0 ma-0",
                                                            attrs: {
                                                              readonly: !_vm.isEditing,
                                                              rows: "1",
                                                              filled: "",
                                                              label:
                                                                "Choice " +
                                                                (i + 1),
                                                              "auto-grow": "",
                                                              required: ""
                                                            },
                                                            model: {
                                                              value: Ans.Choice,
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
                                                          }),
                                                          _vm._v(" "),
                                                          _vm.isEditing
                                                            ? _c(
                                                                "v-btn",
                                                                {
                                                                  staticClass:
                                                                    "mt-2 pl-2 pr-2",
                                                                  attrs: {
                                                                    icon: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-window-close"
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
                                                      click: function($event) {
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
                            _c("h2", [
                              _vm._v("Question #" + _vm._s(_vm.number))
                            ]),
                            _vm._v(" "),
                            _c("v-container", [
                              _c(
                                "div",
                                {
                                  staticClass: "title",
                                  staticStyle: { "line-height": "1.2" }
                                },
                                [_vm._v(_vm._s(_vm.QuetionsList.question))]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-container",
                              { staticClass: "pl-5 pr-5" },
                              _vm._l(_vm.AnswerList, function(Ans, i) {
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
                                          key: _vm.index,
                                          attrs: {
                                            readonly: !_vm.isEditing,
                                            color: "primary",
                                            value: Ans.Choice
                                          },
                                          on: {
                                            click: function($event) {
                                              ;(_vm.tempAnswer =
                                                _vm.QuetionsList.answer),
                                                _vm.test()
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
                                          _vm._s(Ans.Choice)
                                      ),
                                      _vm.QuetionsList.answer == Ans.Choice
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "caption primary--text ml-1"
                                            },
                                            [_vm._v("correct answer")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/trueOrfalseList.vue?vue&type=template&id=70fcb5ca&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
                                    staticClass:
                                      "mb-3 d-flex flex-row justify-space-between",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2 mb-xs-2",
                                            attrs: {
                                              color: _vm.isEditing
                                                ? "primary"
                                                : "",
                                              rounded: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.isEditing = !_vm.isEditing),
                                                  (_vm.QuetionsList.answer = "")
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                     \r\n                                    " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? _vm.isEditing
                                                      ? "Update"
                                                      : ""
                                                    : _vm.isEditing
                                                    ? "Update"
                                                    : "Edit"
                                                ) +
                                                "\r\n                                    "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-square-edit-outline")
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          rounded: "",
                                          outlined: "",
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
                                                : "Preview"
                                            ) +
                                            "\r\n                                    "
                                        ),
                                        _c("v-icon", [_vm._v("mdi-eye")])
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
                                            readonly: !_vm.isEditing,
                                            filled: "",
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
                                              md: "9",
                                              lg: "9"
                                            }
                                          },
                                          [
                                            _c("v-textarea", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                rows: "1",
                                                readonly: !_vm.isEditing,
                                                filled: "",
                                                label: "Question",
                                                "auto-grow": "",
                                                required: ""
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 pl-md-3 pl-sm-0",
                                            attrs: {
                                              cols: "12",
                                              md: "3",
                                              lg: "3"
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                items: [
                                                  "Multiple Choice",
                                                  "Identification",
                                                  "True or False",
                                                  "Two Colums Multiple Choice"
                                                ],
                                                filled: "",
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
                                                    filled: "",
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
                            _c("h2", [
                              _vm._v("Question #" + _vm._s(_vm.number))
                            ]),
                            _vm._v(" "),
                            _c("v-container", [
                              _c("div", { staticClass: "title" }, [
                                _vm._v(_vm._s(_vm.QuetionsList.question))
                              ])
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
                                            [_vm._v("correct answer")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/actions/questionListTypes/twoColumnsList.vue?vue&type=template&id=783011d4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
                                    staticClass:
                                      "mb-3 d-flex flex-row justify-space-between",
                                    attrs: { "ma-0": "", "pa-0": "" }
                                  },
                                  [
                                    _c(
                                      "v-container",
                                      {
                                        staticClass: "pa-0 ma-0",
                                        attrs: { "ma-0": "", "pa-0": "" }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mr-2 mb-xs-2",
                                            attrs: {
                                              color: _vm.isEditing
                                                ? "primary"
                                                : "",
                                              rounded: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                ;(_vm.isEditing = !_vm.isEditing),
                                                  (_vm.QuetionsList.answer = "")
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                              \r\n                                " +
                                                _vm._s(
                                                  _vm.$vuetify.breakpoint.xs
                                                    ? _vm.isEditing
                                                      ? "Update"
                                                      : ""
                                                    : _vm.isEditing
                                                    ? "Update"
                                                    : "Edit"
                                                ) +
                                                "\r\n                                "
                                            ),
                                            _c("v-icon", [
                                              _vm._v("mdi-square-edit-outline")
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          rounded: "",
                                          outlined: "",
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
                                                : "Preview"
                                            ) +
                                            "\r\n                                    "
                                        ),
                                        _c("v-icon", [_vm._v("mdi-eye")])
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
                                            readonly: !_vm.isEditing,
                                            filled: "",
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
                                              md: "9",
                                              lg: "9"
                                            }
                                          },
                                          [
                                            _c("v-textarea", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                rows: "1",
                                                readonly: !_vm.isEditing,
                                                filled: "",
                                                label: "Question",
                                                "auto-grow": "",
                                                required: ""
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass:
                                              "pa-0 ma-0 pl-md-3 pl-sm-0",
                                            attrs: {
                                              cols: "12",
                                              md: "3",
                                              lg: "3"
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              staticClass: "pa-0 ma-0",
                                              attrs: {
                                                readonly: !_vm.isEditing,
                                                items: [
                                                  "Multiple Choice",
                                                  "Identification",
                                                  "True or False",
                                                  "Two Colums Multiple Choice"
                                                ],
                                                filled: "",
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
                                          "v-col",
                                          {
                                            staticClass: "ma-0 pa-0 mb-3",
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
                                                  { attrs: { cols: "7" } },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "mt-1 text-sm-h3 text-md-h5 text-xl-h3"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\r\n                                            Column A \r\n                                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-col", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "mt-1 text-sm-h3 text-md-h5 text-xl-h3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                            Column B\r\n                                            "
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
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
                                                      staticClass:
                                                        "pt-0 pb-0 mt-0 mb-0",
                                                      attrs: { cols: "6" }
                                                    },
                                                    [
                                                      _c("v-textarea", {
                                                        staticClass:
                                                          "pa-0 ma-0",
                                                        attrs: {
                                                          rows: "1",
                                                          readonly: !_vm.isEditing,
                                                          filled: "",
                                                          label:
                                                            "Question " +
                                                            (i + 1),
                                                          "auto-grow": "",
                                                          required: ""
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
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "pt-0 pb-0 mt-0 mb-0",
                                                      attrs: { cols: "5" }
                                                    },
                                                    [
                                                      _c("v-textarea", {
                                                        staticClass:
                                                          "pa-0 ma-0",
                                                        attrs: {
                                                          rows: "1",
                                                          readonly: !_vm.isEditing,
                                                          filled: "",
                                                          label:
                                                            "Answer " + (i + 1),
                                                          "auto-grow": "",
                                                          required: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.AnswerList[i]
                                                              .Choice,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.AnswerList[i],
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
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.isEditing
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "pt-0 pb-0 mt-0 mb-0",
                                                          attrs: { cols: "1" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "mt-2 pl-2 pr-2",
                                                              attrs: {
                                                                icon: ""
                                                              }
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-window-close"
                                                                )
                                                              ])
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



/***/ })

}]);