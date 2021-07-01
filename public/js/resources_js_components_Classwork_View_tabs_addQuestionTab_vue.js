(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_addQuestionTab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isloading: true,
      inputIndex: '',
      checker: '',
      testDetails: '',
      selectedImage: [],
      valid: false,
      tempAnswer: null,
      inputCheck: ['True', 'False'],
      temp_id: '',
      checked: false,
      ShowAdd: true,
      check: true,
      finalData: {},
      quesForm: {
        question: '',
        answer: '',
        points: 0,
        Required: false,
        Sensitive: false,
        type: 'Multiple Choice'
      },
      form: [{
        answer: ''
      }],
      MatchQuestion: [{
        question: '',
        answer: ''
      }],
      rules: [function (v) {
        return !!v || 'required';
      }],
      PointsRule: [function (v) {
        return !!v || 'required';
      }, function (v) {
        return v && v != 0 || 'Must assign atleast 1 points';
      }],
      Imagerules: [function (value) {
        return !value || value.size < 5000000 || 'Avatar size should be less than 5 MB!';
      }],
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
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Question Successfully added", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    onFileChange: function onFileChange(element) {
      var _this = this;

      if (this.selectedImage[this.inputIndex] != '' || null) {
        console.log(this.inputIndex);
        var file = element;
        console.log(file);
        var reader = new FileReader();
        var baseData;

        reader.onloadend = function (res) {
          _this.form[_this.inputIndex].answer = '<div>' + '<img src="' + reader.result + '">' + '</div>'; //console.log('Result', reader.result);
        };

        reader.readAsDataURL(file);
        this.checker = "Success";
      }
    },
    onButtonClick: function onButtonClick(i) {
      /* this.isSelecting = true
      window.addEventListener('focus', () => {
      this.isSelecting = false
      }, { once: true })
        this.$refs.form.$refs.input.click(); */
      $("#uploader" + i).click();
    },
    validateChoice: function validateChoice() {
      this.$refs.Choice.validate();
      this.add();
    },
    validate: function validate() {
      this.$refs.form.validate();
      this.AddQuestion();
    },
    test: function test() {
      console.log(this.tempAnswer);
    },
    add: function add() {
      if (this.form.length == 0) {
        this.check = true;
        this.form.push({
          answer: ''
        }); //this.form.push({ answer: '' , image : null});
      } else {
        if (this.form[this.form.length - 1].answer != ''
        /* || this.form[this.form.length-1].image != null */
        ) {
            this.check = true;
            this.form.push({
              answer: ''
            });
          } else {
          this.check = false;
        }
      }
    },
    remove: function remove(index) {
      this.form.splice(index, 1);
    },
    addNewMatch: function addNewMatch() {
      this.quesForm.points++;
      this.MatchQuestion.push({
        question: '',
        answer: ''
      });
    },
    removeMatch: function removeMatch(index) {
      this.MatchQuestion.splice(index, 1);
    },
    AddQuestion: function AddQuestion() {
      var _this2 = this;

      if (this.quesForm.type == 'Multiple Choice') {
        if (this.form.length >= 2 && this.quesForm.answer != '' && this.quesForm.points != 0) {
          this.finalData.ansLength = this.form.length;
          this.finalData.clw = this.$route.query.clwk;
          /*  this.quesForm.answer = '<div>'+'<img src="'+this.quesForm.answer+'">'+'</div>'; */

          this.finalData.questions = this.quesForm;
          this.finalData.answers = this.form;
          this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
            _this2.toastSuccess(); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


            _this2.CallReset();
          });
        } else if (this.quesForm.question == "") {
          return this.$toasted.error("Question is required!", {
            theme: "toasted-primary",
            position: "top-center",
            icon: "error",
            duration: 3000
          });
        } else if (this.quesForm.answer != '' && this.quesForm.points == 0) {
          /*  Swal.fire({
               icon: 'info',
               title: 'Oops...',
               text: 'You must atleast allocate one points to this question',
           }) */
        } else if (this.quesForm.answer == '') {
          /*  Swal.fire({
               icon: 'info',
               title: 'Oops...',
               text: 'You must atleast pick one answer',
           }) */
        } else {
            /*   Swal.fire({
                 icon: 'info',
                 title: 'Oops...',
                 text: 'You must atleast enter two choices',
             }) */
          }
      } else if (this.quesForm.type == 'Identification' || this.quesForm.type == 'True or False') {
        if (this.quesForm.answer != '' && this.quesForm.points != 0 || '') {
          this.finalData.ansLength = this.form.length;
          this.finalData.clw = this.$route.query.clwk;
          this.finalData.questions = this.quesForm;
          this.finalData.answers = this.form;
          this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
            _this2.toastSuccess(); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


            _this2.CallReset();
          });
        } else {
          /*  Swal.fire({
              icon: 'info',
              title: 'Oops...',
              text: 'You must atleast write/pick one answer',
          }) */
        }
      } else if (this.quesForm.type == 'Matching type') {
        this.quesForm.answer = 'Matching Type';
        this.finalData.ansLength = this.MatchQuestion.length;
        this.finalData.clw = this.$route.query.clwk;
        this.finalData.questions = this.quesForm;
        this.finalData.answers = this.MatchQuestion;
        this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
          _this2.toastSuccess(); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


          _this2.CallReset();
        });
      }
    },
    CallReset: function CallReset() {
      this.$refs.form.resetValidation();
      this.quesForm.question = '';
      this.quesForm.answer = '';
      this.quesForm.points = 0;

      if (this.quesForm.type == 'Multiple Choice') {
        for (var i = 0; i < this.form.length; i++) {
          this.form[i].answer = '';
          this.selectedImage[i] = '';
        }
      }

      if (this.quesForm.type == 'Matching type') {
        for (var _i = 0; _i < this.MatchQuestion.length; _i++) {
          this.MatchQuestion[_i].question = '';
          this.MatchQuestion[_i].answer = '';
        }
      }
    }
  },
  beforeMount: function beforeMount() {
    this.isloading = !this.isloading;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*  .ql-toolbar.ql-snow {\r\n        background: #f2f2f2;\r\n        border: none;\r\n } */\n.centered-input >>> input {\r\n    text-align: center\n}\n.ql-editor img{\r\n\r\n    max-height: 10rem !important;\n}\n.ql-container{\r\n    max-height: 50rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/addQuestionTab.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addQuestionTab.vue?vue&type=template&id=2dc223f6& */ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6&");
/* harmony import */ var _addQuestionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addQuestionTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addQuestionTab.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _addQuestionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/addQuestionTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addQuestionTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_template_id_2dc223f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addQuestionTab.vue?vue&type=template&id=2dc223f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addQuestionTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addQuestionTab_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=template&id=2dc223f6& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
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
      !_vm.isloading
        ? _c(
            "v-container",
            {
              staticClass: "pa-0 ma-0",
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
                                    "v-form",
                                    {
                                      ref: "form",
                                      attrs: { "lazy-validation": "" },
                                      model: {
                                        value: _vm.valid,
                                        callback: function($$v) {
                                          _vm.valid = $$v
                                        },
                                        expression: "valid"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _vm.ShowAdd
                                            ? _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "pl-7 pr-9 pt-10",
                                                  attrs: {
                                                    cols: "12",
                                                    md: "12"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-row",
                                                    {
                                                      staticClass: "pa-0 ma-0",
                                                      attrs: {
                                                        "mb-0": "",
                                                        "pb-0": ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-col",
                                                        {
                                                          staticClass:
                                                            "pa-0 ma-0",
                                                          attrs: {
                                                            cols: "3",
                                                            md: "1",
                                                            lg: "1"
                                                          }
                                                        },
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass:
                                                              "centered-input pa-0 ma-0",
                                                            attrs: {
                                                              min: "0",
                                                              rules:
                                                                _vm.PointsRule,
                                                              outlined: "",
                                                              type: "number",
                                                              label: "Points"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.quesForm
                                                                  .points,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.quesForm,
                                                                  "points",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "quesForm.points"
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
                                                              "pa-0 ma-0 float-right",
                                                            attrs: {
                                                              items: [
                                                                "Multiple Choice",
                                                                "Identification",
                                                                "True or False",
                                                                "Matching type"
                                                              ],
                                                              outlined: "",
                                                              label:
                                                                "Question Type"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.quesForm
                                                                  .type,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.quesForm,
                                                                  "type",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "quesForm.type"
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
                                                        [_vm._v("Question")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "pa-0 ma-0"
                                                        },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              staticClass:
                                                                "pa-0 ma-0 mt-2 mb-2",
                                                              attrs: {
                                                                cols: "12"
                                                              }
                                                            },
                                                            [
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
                                                                    staticClass:
                                                                      "outlined",
                                                                    attrs: {
                                                                      required:
                                                                        "",
                                                                      rules:
                                                                        _vm.rules,
                                                                      id:
                                                                        "editor-container",
                                                                      placeholder:
                                                                        "Question",
                                                                      theme:
                                                                        "snow",
                                                                      options:
                                                                        _vm.options
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .quesForm
                                                                          .question,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.quesForm,
                                                                          "question",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "quesForm.question"
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
                                                  _vm.quesForm.type ==
                                                  "Multiple Choice"
                                                    ? _c(
                                                        "v-container",
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
                                                                [
                                                                  _vm._v(
                                                                    "Options"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _vm._l(
                                                                _vm.form,
                                                                function(
                                                                  item,
                                                                  i
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      key: i,
                                                                      staticClass:
                                                                        "ma-0 pa-0 ml-2 mt-1",
                                                                      attrs: {
                                                                        cols:
                                                                          "12",
                                                                        lg:
                                                                          "12",
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
                                                                                cols:
                                                                                  "12",
                                                                                lg:
                                                                                  "12",
                                                                                md:
                                                                                  "12"
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
                                                                                    "v-radio-group",
                                                                                    {
                                                                                      attrs: {
                                                                                        rules:
                                                                                          _vm.rules
                                                                                      },
                                                                                      model: {
                                                                                        value:
                                                                                          _vm
                                                                                            .quesForm
                                                                                            .answer,
                                                                                        callback: function(
                                                                                          $$v
                                                                                        ) {
                                                                                          _vm.$set(
                                                                                            _vm.quesForm,
                                                                                            "answer",
                                                                                            $$v
                                                                                          )
                                                                                        },
                                                                                        expression:
                                                                                          "quesForm.answer"
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "v-radio",
                                                                                        {
                                                                                          key: i,
                                                                                          staticClass:
                                                                                            "pa-0 ma-0",
                                                                                          attrs: {
                                                                                            color:
                                                                                              "primary",
                                                                                            disabled:
                                                                                              item
                                                                                                .answer
                                                                                                .length ==
                                                                                              0,
                                                                                            name:
                                                                                              "Answer",
                                                                                            value:
                                                                                              item.answer
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              ;(_vm.tempAnswer =
                                                                                                item.answer),
                                                                                                _vm.test()
                                                                                            }
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
                                                                                            rules:
                                                                                              _vm.rules,
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
                                                                                          on: {
                                                                                            change: function(
                                                                                              $event
                                                                                            ) {
                                                                                              _vm.checker =
                                                                                                item.answer
                                                                                            }
                                                                                          },
                                                                                          model: {
                                                                                            value:
                                                                                              item.answer,
                                                                                            callback: function(
                                                                                              $$v
                                                                                            ) {
                                                                                              _vm.$set(
                                                                                                item,
                                                                                                "answer",
                                                                                                $$v
                                                                                              )
                                                                                            },
                                                                                            expression:
                                                                                              "item.answer"
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
                                                                                          item.answer ==
                                                                                          _vm
                                                                                            .quesForm
                                                                                            .answer
                                                                                            ? (_vm.remove(
                                                                                                i
                                                                                              ),
                                                                                              (_vm.quesForm.answer =
                                                                                                ""))
                                                                                            : (_vm.remove(
                                                                                                i
                                                                                              ),
                                                                                              (_vm.quesForm.answer =
                                                                                                _vm.tempAnswer))
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
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "pa-0 ma-0 text-right",
                                                                  attrs: {
                                                                    "ma-0": "",
                                                                    "pa-0": "",
                                                                    cols: "12",
                                                                    md: "10",
                                                                    lg: "10"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      staticClass:
                                                                        "mt-2",
                                                                      attrs: {
                                                                        disabled:
                                                                          _vm
                                                                            .checker
                                                                            .length ==
                                                                            0 &&
                                                                          _vm
                                                                            .form
                                                                            .length >=
                                                                            1,
                                                                        rounded:
                                                                          "",
                                                                        color:
                                                                          "primary"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          _vm.add(),
                                                                            (_vm.checker =
                                                                              "")
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            dark:
                                                                              "",
                                                                            large:
                                                                              ""
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
                                                            ],
                                                            2
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.quesForm.type ==
                                                  "Identification"
                                                    ? _c(
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
                                                                [
                                                                  _vm._v(
                                                                    "Answer"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "ma-0 pa-0 pl-9 pr-7 mt-2",
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
                                                                            rules:
                                                                              _vm.rules,
                                                                            id:
                                                                              "editor-container",
                                                                            placeholder:
                                                                              "Answer",
                                                                            theme:
                                                                              "snow",
                                                                            options:
                                                                              _vm.options
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              _vm
                                                                                .quesForm
                                                                                .answer,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm.quesForm,
                                                                                "answer",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "quesForm.answer"
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
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.quesForm.type ==
                                                  "True or False"
                                                    ? _c(
                                                        "v-container",
                                                        {
                                                          staticClass:
                                                            "ma-0 pa-0 mt-2 pl-3 pr-4"
                                                        },
                                                        [
                                                          _c(
                                                            "v-row",
                                                            _vm._l(
                                                              _vm.inputCheck,
                                                              function(x, n) {
                                                                return _c(
                                                                  "v-col",
                                                                  {
                                                                    key: n,
                                                                    staticClass:
                                                                      "ma-0 pa-0",
                                                                    attrs: {
                                                                      cols: "11"
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
                                                                          "v-radio-group",
                                                                          {
                                                                            attrs: {
                                                                              rules:
                                                                                _vm.rules
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .quesForm
                                                                                  .answer,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.quesForm,
                                                                                  "answer",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "quesForm.answer"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-radio",
                                                                              {
                                                                                key: n,
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
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-textarea",
                                                                          {
                                                                            staticClass:
                                                                              "pa-0 ma-0",
                                                                            attrs: {
                                                                              readonly:
                                                                                "",
                                                                              rows:
                                                                                "1",
                                                                              outlined:
                                                                                "",
                                                                              value:
                                                                                _vm
                                                                                  .inputCheck[
                                                                                  n
                                                                                ],
                                                                              "auto-grow":
                                                                                "",
                                                                              required:
                                                                                ""
                                                                            }
                                                                          }
                                                                        )
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
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.quesForm.type ==
                                                  "Matching type"
                                                    ? _c(
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
                                                              _vm._l(
                                                                _vm.MatchQuestion,
                                                                function(
                                                                  item,
                                                                  i
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      key: i,
                                                                      staticClass:
                                                                        "ma-0 pa-0",
                                                                      attrs: {
                                                                        "ma-0":
                                                                          "",
                                                                        "pa-0":
                                                                          "",
                                                                        cols:
                                                                          "12"
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
                                                                                cols:
                                                                                  "12"
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
                                                                                    "v-card",
                                                                                    {
                                                                                      staticClass:
                                                                                        "pa-3 mb-2",
                                                                                      staticStyle: {
                                                                                        width:
                                                                                          "100%"
                                                                                      },
                                                                                      attrs: {
                                                                                        outlined:
                                                                                          ""
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
                                                                                              "Pair "
                                                                                            ) +
                                                                                              _vm._s(
                                                                                                i +
                                                                                                  1
                                                                                              )
                                                                                          )
                                                                                        ]
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
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
                                                                                                rules:
                                                                                                  _vm.rules,
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
                                                                                              on: {
                                                                                                change: function(
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.checker =
                                                                                                    item.answer
                                                                                                }
                                                                                              },
                                                                                              model: {
                                                                                                value:
                                                                                                  item.question,
                                                                                                callback: function(
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    item,
                                                                                                    "question",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                                expression:
                                                                                                  "item.question"
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
                                                                                                rules:
                                                                                                  _vm.rules,
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
                                                                                              on: {
                                                                                                change: function(
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.checker =
                                                                                                    item.answer
                                                                                                }
                                                                                              },
                                                                                              model: {
                                                                                                value:
                                                                                                  item.answer,
                                                                                                callback: function(
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    item,
                                                                                                    "answer",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                                expression:
                                                                                                  "item.answer"
                                                                                              }
                                                                                            }
                                                                                          )
                                                                                        ],
                                                                                        1
                                                                                      )
                                                                                    ],
                                                                                    1
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
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
                                                                                          return _vm.removeMatch(
                                                                                            i
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
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "ma-0 pa-0 text-right"
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      staticClass:
                                                                        "mt-2",
                                                                      attrs: {
                                                                        rounded:
                                                                          "",
                                                                        color:
                                                                          "primary"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.addNewMatch()
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            dark:
                                                                              "",
                                                                            large:
                                                                              ""
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
                                                            ],
                                                            2
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-container",
                                                    {
                                                      staticClass: "pt-0 mt-0"
                                                    },
                                                    [
                                                      _vm.quesForm.type ==
                                                      "Identification"
                                                        ? _c("v-switch", {
                                                            staticClass:
                                                              "float-right",
                                                            attrs: {
                                                              label:
                                                                "Case Sensitive"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.quesForm
                                                                  .Sensitive,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.quesForm,
                                                                  "Sensitive",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "quesForm.Sensitive"
                                                            }
                                                          })
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "float-right mr-2",
                                                        attrs: {
                                                          label: "Required"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.quesForm
                                                              .Required,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.quesForm,
                                                              "Required",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "quesForm.Required"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-container",
                                                    { staticClass: "mb-5" },
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
                                                            click: _vm.validate
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                        Add Question"
                                                          ),
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                right: "",
                                                                dark: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-note-plus-outline"
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addQuestionTab.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/addQuestionTab.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7e877ff0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);