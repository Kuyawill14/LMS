"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_StudentPage_viewSubmittedPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      Alphabet: null
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getAll_questions"]),
  methods: {
    fetchQuestions: function fetchQuestions() {
      var _this = this;

      this.ViewSubmiisionConditions.showAnswer = this.details.showAnswer;
      this.ViewSubmiisionConditions.showAnswerType = this.details.showAnswerType;
      axios.get('/api/question/question-answer/' + this.$route.params.id + '/' + this.details.class_classwork_id).then(function (res) {
        //////console.log(res.data)
        _this.QuestionAndAnswer = res.data;
        var Submitted_length = _this.details.Submitted_Answers.length;
        var Question_length = _this.QuestionAndAnswer.Question.length;
        var diff = Question_length - Submitted_length;

        for (var i = 0; i < diff; i++) {
          if (_this.QuestionAndAnswer.Question[i].type == 'Multiple Choice' || _this.QuestionAndAnswer.Question[i].type == 'Identification' || _this.QuestionAndAnswer.Question[i].type == 'True or False' || _this.QuestionAndAnswer.Question[i].type == 'Essay') {
            _this.details.Submitted_Answers.push({
              Answer: null,
              Question_id: _this.QuestionAndAnswer.Question[i].id,
              timeConsume: null,
              type: _this.QuestionAndAnswer.Question[i].type
            });
          } else if (_this.QuestionAndAnswer.Question[i].type == 'Matching type') {}
        }

        var _loop = function _loop(_i) {
          for (var j = 0; j < _this.details.Submitted_Answers.length; j++) {
            if (_this.QuestionAndAnswer.Question[_i].id == _this.details.Submitted_Answers[j].Question_id) {
              if (_this.QuestionAndAnswer.Question[_i].type == 'Multiple Choice' || _this.QuestionAndAnswer.Question[_i].type == 'Identification' || _this.QuestionAndAnswer.Question[_i].type == 'True or False' || _this.QuestionAndAnswer.Question[_i].type == 'Essay') {
                _this.SubmittedAnswer[_i] = _this.details.Submitted_Answers[j];

                if (_this.QuestionAndAnswer.Question[_i].answer == _this.details.Submitted_Answers[j].Answer) {
                  _this.Check[_i] = true;
                } else {
                  _this.Check[_i] = false;
                }
              } else if (_this.QuestionAndAnswer.Question[_i].type == 'Matching type') {
                (function () {
                  var Ans = new Array();
                  var match_check = new Array();

                  _this.details.Submitted_Answers[j].Answer.forEach(function (item) {
                    for (var x = 0; x < _this.QuestionAndAnswer.Answer[_i].SubQuestion.length; x++) {
                      if (_this.QuestionAndAnswer.Answer[_i].SubQuestion[x].id == item.subquestion_id) {
                        Ans.push({
                          Ans_Letter: item.Ans_letter,
                          Answer: item.Answers,
                          SubQuestion: _this.QuestionAndAnswer.Answer[_i].SubQuestion[x].sub_question,
                          SubChoice: null
                        });
                      }
                    }
                  });

                  var tmpChoices = new Array();

                  _this.details.Submitted_Answers[j].Choices_id.forEach(function (item) {
                    _this.QuestionAndAnswer.Answer[_i].SubAnswer.forEach(function (choice) {
                      if (item.choice_id == choice.id) {
                        tmpChoices.push({
                          id: choice.id,
                          choice: choice.Choice
                        });
                      }
                    });
                  });

                  for (var a = 0; a < Ans.length; a++) {
                    Ans[a].SubChoice = tmpChoices[a].choice; ////console.log(tmpChoices[a].choice);
                  }

                  _this.SubmittedAnswer[_i] = Ans;
                })();
              }
            }
          }
        };

        for (var _i = 0; _i < _this.QuestionAndAnswer.Question.length; _i++) {
          _loop(_i);
        }

        _this.isLoading = false;
      });
      /* this.$store.dispatch('fetchQuestions', this.$route.params.id).then(res=>{
          //////console.log(res);
          this.Details = res[0];
          for (let i = 0; i < this.Details.Question.length; i++) {
              for (let j = 0; j < this.details.Submitted_Answers.length; j++) {
                  if(this.Details.Question[i].id == this.details.Submitted_Answers[j].Question_id){
                      this.SubmittedAnswer[i] =  this.details.Submitted_Answers[j];
                      if(this.Details.Question[i].answer == this.details.Submitted_Answers[j].Answer){
                          this.Check[i] = true;
                      }
                      else{
                          this.Check[i] = false;
                      }
                      
                  }
                  
              }
              
          }
          //////console.log(this.details.Submitted_Answers);
          this.isLoading = false;
      });
      */
    }
  },
  mounted: function mounted() {
    this.fetchQuestions();
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.Alphabet = alphabet; //////console.log(this.details);
    //////console.log(this.classworkDetails);
    //////console.log(this.details)
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered-input >>> input {\n      text-align: center\n}\n.post-content img{\n        \n     max-height: 8rem !important;\n}\n.centered-input input {\n  text-align: center\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmittedPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewSubmittedPage.vue?vue&type=template&id=381d3f97& */ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97&");
/* harmony import */ var _viewSubmittedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewSubmittedPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _viewSubmittedPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewSubmittedPage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _viewSubmittedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__.render,
  _viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmittedPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmittedPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viewSubmittedPage_vue_vue_type_template_id_381d3f97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./viewSubmittedPage.vue?vue&type=template&id=381d3f97& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/viewSubmittedPage.vue?vue&type=template&id=381d3f97& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
        "v-toolbar",
        { attrs: { dark: "", dense: "", color: "primary" } },
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "", rounded: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("closeDialog")
                }
              }
            },
            [_c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-close")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "700px" } },
            [
              _c("vue-element-loading", {
                attrs: {
                  active: _vm.isLoading,
                  text: "Loading",
                  duration: "0.7",
                  textStyle: { fontSize: "14px" },
                  spinner: "line-scale",
                  color: "#EF6C00",
                  size: "50"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "v-container",
            { staticClass: "mt-5" },
            [
              _c(
                "v-row",
                { staticClass: "mb-2" },
                [
                  _c(
                    "v-col",
                    { staticClass: "12", attrs: { md: "9", lg: "9" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { staticClass: "text-left", attrs: { cols: "6" } },
                            [_c("h3", [_vm._v(_vm._s(_vm.details.title))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-right",
                              attrs: { cols: "6", md: "4" }
                            },
                            [
                              _c(
                                "v-chip",
                                {
                                  staticClass: "ma-2",
                                  attrs: { color: "success" }
                                },
                                [
                                  _c("div", { staticClass: "body-2" }, [
                                    _vm._v(
                                      "Score: " +
                                        _vm._s(_vm.details.score) +
                                        " /" +
                                        _vm._s(_vm.details.totalPoints)
                                    )
                                  ])
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
              ),
              _vm._v(" "),
              _vm._l(_vm.QuestionAndAnswer.Question, function(item, index) {
                return _c(
                  "v-container",
                  { key: index, attrs: { "ma-0": "", "pa-0": "" } },
                  [
                    _c("v-container", { attrs: { "ma-0": "", "pa-0": "" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "subtitle-1 d-flex",
                          style: _vm.$vuetify.breakpoint.xs
                            ? "line-height:1.1"
                            : ""
                        },
                        [
                          _vm.details.showAnswer == true
                            ? _c("v-checkbox", {
                                staticClass: "mt-0 pt-0",
                                attrs: { readonly: "", color: "success" },
                                model: {
                                  value: _vm.Check[index],
                                  callback: function($$v) {
                                    _vm.$set(_vm.Check, index, $$v)
                                  },
                                  expression: "Check[index]"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("h3", { staticClass: "font-weight-bold" }, [
                            _vm._v(_vm._s(index + 1) + ".")
                          ]),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "post-content ml-1 mb-0 pb-0",
                            domProps: { innerHTML: _vm._s(item.question) }
                          }),
                          _vm._v(" "),
                          _c("small", { staticClass: "primary--text ml-1" }, [
                            _vm._v("(" + _vm._s(item.points + " points") + ")")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    item.type == "Multiple Choice"
                      ? _c(
                          "v-container",
                          { attrs: { "ml-0": "", "pl-0": "" } },
                          _vm._l(_vm.QuestionAndAnswer.Answer[index], function(
                            Ans,
                            i
                          ) {
                            return _c(
                              "v-container",
                              {
                                key: i,
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
                                      value: _vm.SubmittedAnswer[index].Answer,
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
                                    staticClass: "Subtitle-1 ma-0 pa-0 d-flex",
                                    staticStyle: { "line-height": "1.4" }
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "post-content",
                                      domProps: {
                                        innerHTML: _vm._s(Ans.Choice)
                                      }
                                    }),
                                    _vm._v(" "),
                                    item.answer == Ans.Choice
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
                          { attrs: { "ma-0": "", "pa-0": "" } },
                          [
                            _c(
                              "v-container",
                              {
                                staticClass: "ml-7 mt-0 pt-0",
                                attrs: { "ma-0": "", "pa-0": "" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "subtitle-2 font-weight-bold"
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
                                          _vm.SubmittedAnswer[index].Answer
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.SubmittedAnswer[index].Answer == null
                                      ? _c(
                                          "span",
                                          { staticClass: "post-content" },
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
                                      value: _vm.SubmittedAnswer[index].Answer,
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
                                _c("div", { staticClass: "Subtitle 1" }, [
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.inputCheck[n]) +
                                      "\n                       "
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
                                ])
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
                                      cols: "12",
                                      lg: "7",
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
                                                    cols: "1",
                                                    md: "1",
                                                    lg: "1"
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
                                                      md: "6",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                          Column A\n                                      "
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
                                                      "\n                                          Column B\n                                      "
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
                                                staticClass: "mb-0 pb-0"
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
                                                        attrs: {
                                                          cols: "2",
                                                          md: "1",
                                                          lg: "1"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          staticClass:
                                                            "centered-input",
                                                          attrs: {
                                                            readonly: ""
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
                                                        })
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
                                                          cols: "5",
                                                          md: "6",
                                                          lg: "6"
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
                                                                    i + 1 + ". "
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("span", {
                                                              staticClass:
                                                                "subquestion-content",
                                                              style: _vm
                                                                .$vuetify
                                                                .breakpoint.xs
                                                                ? "line-height:1.1"
                                                                : "line-height:1.5",
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  item.SubQuestion
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
                                                        attrs: {
                                                          cols: "5",
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
                                                                    _vm
                                                                      .Alphabet[
                                                                      i
                                                                    ] + ". "
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("span", {
                                                              staticClass:
                                                                "subchoices-content",
                                                              style: _vm
                                                                .$vuetify
                                                                .breakpoint.xs
                                                                ? "line-height:1.1"
                                                                : "line-height:1.5",
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  item.SubChoice
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
                          { attrs: { "ma-0": "", "pa-0": "" } },
                          [
                            _c(
                              "v-container",
                              {
                                staticClass: "ml-7 mt-0 pt-0",
                                attrs: { "ma-0": "", "pa-0": "" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "subtitle-2 font-weight-bold"
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
                                          _vm.SubmittedAnswer[index].Answer
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.SubmittedAnswer[index].Answer == null
                                      ? _c(
                                          "span",
                                          { staticClass: "post-content" },
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