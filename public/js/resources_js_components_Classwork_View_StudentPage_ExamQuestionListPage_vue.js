(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_StudentPage_ExamQuestionListPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      valid: false,
      checker: [],
      dialog: false,
      inputCheck: ['True', 'False'],
      isRemoving: false,
      isRemoving_id: null,
      Qlength: '',
      isStart: false,
      isEditing_Id: '',
      isLoading: true,
      Show: true,
      DeleteDetails: {},
      IdentificationAns: [],
      PickAnswers: {},
      PickAnswers_id: {},
      FinalAnswers: [],
      AnswerRadio: [],
      Questype: "",
      questionIndex: 0
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getAll_questions"]),
  methods: {
    reset: function reset(value, index) {
      var _this = this;

      if (this.AnswerRadio[index] === value) {
        this.$nextTick(function () {
          _this.AnswerRadio[index] = null;
        });
      }
    },
    removePropt: function removePropt(num, id) {
      this.DeleteDetails.number = num;
      this.DeleteDetails.id = id;
      this.isRemoving = true;
      this.isRemoving_id = id;
      this.dialog = true;
      ;
    },
    next: function next() {
      if (this.Questype == 'Multiple Choice' || this.Questype == 'True or False') {
        if (this.FinalAnswers.length != 0) {
          var check = false;
          var index = 0;

          for (var i = 0; i < this.FinalAnswers.length; i++) {
            if (this.FinalAnswers[i].Question_id == this.PickAnswers_id.quesId) {
              check = true;
              index = i;
            }
          }

          if (check == true) {
            this.FinalAnswers[index] = {
              Answer: this.PickAnswers.ans,
              Question_id: this.PickAnswers_id.quesId,
              type: this.Questype
            };
            console.log(this.FinalAnswers);
          } else {
            this.FinalAnswers.push({
              Answer: this.PickAnswers.ans,
              Question_id: this.PickAnswers_id.quesId,
              type: this.Questype
            });
            console.log(this.FinalAnswers);
          }
        } else {
          this.FinalAnswers.push({
            Answer: this.PickAnswers.ans,
            Question_id: this.PickAnswers_id.quesId,
            type: this.Questype
          });
          console.log(this.FinalAnswers);
        }
      }

      if (this.Questype == 'Identification') {
        if (this.FinalAnswers.length != 0) {
          var _check = false;
          var _index = 0;

          for (var _i = 0; _i < this.FinalAnswers.length; _i++) {
            if (this.FinalAnswers[_i].Question_id == this.PickAnswers_id.quesId) {
              _check = true;
              _index = _i;
            }
          }

          if (_check == true) {
            this.FinalAnswers[_index] = {
              Answer: this.IdentificationAns[this.questionIndex],
              Question_id: this.PickAnswers_id.quesId,
              type: this.Questype
            };
            console.log(this.FinalAnswers);
          } else {
            this.FinalAnswers.push({
              Answer: this.IdentificationAns[this.questionIndex],
              Question_id: this.PickAnswers_id.quesId,
              type: this.Questype
            });
            console.log(this.FinalAnswers);
          }
        } else {
          this.FinalAnswers.push({
            Answer: this.IdentificationAns[this.questionIndex],
            Question_id: this.PickAnswers_id.quesId,
            type: this.Questype
          });
          console.log(this.FinalAnswers);
        }
      }

      if (this.Questype == 4) {
        if (this.FinalAnswers.length != 0) {
          var _check2 = false;
          var _index2 = 0;

          for (var _i2 = 0; _i2 < this.FinalAnswers.length; _i2++) {
            if (this.FinalAnswers[_i2].Question_id == this.PickAnswers_id.quesId) {
              _check2 = true;
              _index2 = _i2;
            }
          }

          if (_check2 == true) {
            var Ans = new Array();

            for (var _i3 = 0; _i3 < this.Questions.Answer[this.questionIndex].SubAnswer.length; _i3++) {
              for (var x = 0; x < this.Questions.Answer[this.questionIndex].SubAnswer.length; x++) {
                if (this.Alphabet[x].toUpperCase() == this.SubAnswers[_i3].toUpperCase()) {
                  Ans[_i3] = this.Questions.Answer[this.questionIndex].SubAnswer[x].Choice;
                }
              }
            }

            this.FinalAnswers[_index2] = {
              Answer: this.SubAnswers,
              Question_id: this.PickAnswers_id.quesId,
              SubQuestion_id: this.quesNumber,
              type: this.Questype
            };
            console.log(this.FinalAnswers);
          } else {
            var _Ans = new Array();

            for (var _i4 = 0; _i4 < this.Questions.Answer[this.questionIndex].SubAnswer.length; _i4++) {
              for (var _x = 0; _x < this.Questions.Answer[this.questionIndex].SubAnswer.length; _x++) {
                if (this.Alphabet[_x].toUpperCase() == this.SubAnswers[_i4].toUpperCase()) {
                  _Ans[_i4] = this.Questions.Answer[this.questionIndex].SubAnswer[_x].Choice;
                }
              }
            }

            this.FinalAnswers.push({
              Answer: _Ans,
              Question_id: this.PickAnswers_id.quesId,
              SubQuestion_id: this.quesNumber,
              type: this.Questype
            });
            console.log(this.FinalAnswers);
          }
        } else {
          var _Ans2 = new Array();

          for (var _i5 = 0; _i5 < this.Questions.Answer[this.questionIndex].SubAnswer.length; _i5++) {
            for (var _x2 = 0; _x2 < this.Questions.Answer[this.questionIndex].SubAnswer.length; _x2++) {
              if (this.Alphabet[_x2].toUpperCase() == this.SubAnswers[_i5].toUpperCase()) {
                _Ans2[_i5] = this.Questions.Answer[this.questionIndex].SubAnswer[_x2].Choice;
              }
            }
          }

          this.FinalAnswers.push({
            Answer: _Ans2,
            Question_id: this.PickAnswers_id.quesId,
            SubQuestion_id: this.quesNumber,
            type: this.Questype
          });
          console.log(this.FinalAnswers);
        }
      }

      this.Questype = "";
      this.PickAnswers.ans = "";
      this.PickAnswers_id.quesId = "";

      if (this.questionIndex != this.Qlength - 1) {
        this.questionIndex++;
      }
    },
    // Go to previous question
    prev: function prev() {
      this.questionIndex--;
    },
    fetchQuestions: function fetchQuestions() {
      var _this2 = this;

      this.$store.dispatch('fetchQuestions', this.$route.query.clwk).then(function (res) {
        _this2.Qlength = res[1];
        _this2.isLoading = false;
      });
    },
    preventNav: function preventNav(event) {
      if (!this.isStart) return;
      event.preventDefault(); // Chrome requires returnValue to be set.

      event.returnValue = "";
    }
  },

  /*     beforeMount() {
          window.addEventListener("beforeunload", this.preventNav);
          this.$once("hook:beforeDestroy", () => {
          window.removeEventListener("beforeunload", this.preventNav);
          });
  
         
      }, */
  mounted: function mounted() {
    this.isStart = true; //this.getAllQuestion();

    this.Show = false;
    this.fetchQuestions();
    this.Show = true;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-38e5e010]{\n      cursor: pointer !important;\n}\ninput[data-v-38e5e010],select[data-v-38e5e010]{\n      border-left: none;\n      border-right: none;\n      border-top: none;\n}\ntextarea[data-v-38e5e010]{\n  box-shadow: none;\n  height: 39px;\n  font-size: 13px;\n  line-height: 20px;\n  padding: 9px 12px;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  resize: none;\n  min-height: 38px;\n  max-height: 150px;\n  border: 1px solid #e1e6eb ;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  outline: none;\n}\nselect[data-v-38e5e010] {\n      font-family: 'FontAwesome', Arial;\n}\n.addInput[data-v-38e5e010]{\n      text-align: left !important;\n      margin-right: 0 ;\n}\n@media only screen and (max-width: 600px) {\n.form-check-input[data-v-38e5e010]{\n        margin-left: 8px !important;\n}\n}\n.row[data-v-38e5e010]{\n      transition: height 2s !important;\n}\n      \n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true& */ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true&");
/* harmony import */ var _ExamQuestionListPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamQuestionListPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ExamQuestionListPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38e5e010",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionListPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_template_id_38e5e010_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionListPage_vue_vue_type_style_index_0_id_38e5e010_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=template&id=38e5e010&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.isLoading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "600px" } },
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
                    [_vm._v("\r\n            Loading Questions\r\n        ")]
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
      !_vm.isLoading
        ? _c("v-hover", {
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function(ref) {
                    var hover = ref.hover
                    return [
                      _c(
                        "v-container",
                        { staticClass: "fill-height", attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "2",
                                    sm: "3",
                                    lg: "1",
                                    md: "1"
                                  }
                                },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-window",
                                        [
                                          _c(
                                            "v-window-item",
                                            _vm._l(
                                              _vm.getAll_questions.Question,
                                              function(item, index) {
                                                return _c(
                                                  "v-container",
                                                  {
                                                    key: index,
                                                    attrs: {
                                                      align: "center",
                                                      "ma-0": "",
                                                      "pa-0": ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-container",
                                                      {
                                                        staticClass:
                                                          "pa-0 ma-0 pl-sm-4 pr-3 pt-2 pb-2 d-flex flex-row"
                                                      },
                                                      [
                                                        _c(
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
                                                                  color:
                                                                    _vm.checker[
                                                                      index
                                                                    ] != null ||
                                                                    _vm.checker[
                                                                      index
                                                                    ] != ""
                                                                      ? "primary"
                                                                      : "",
                                                                  left: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.checker[
                                                                      index
                                                                    ] == null ||
                                                                      _vm
                                                                        .checker[
                                                                        index
                                                                      ] == ""
                                                                      ? "mdi-checkbox-blank-outline"
                                                                      : "mdi-checkbox-marked"
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(
                                                              "\r\n                                         " +
                                                                _vm._s(
                                                                  index + 1
                                                                ) +
                                                                "\r\n                                            \r\n                                       "
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
                                { attrs: { cols: "10", sm: "19", md: "7" } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { elevation: hover ? 12 : 5 } },
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
                                                    "v-row",
                                                    [
                                                      _c("v-col", {
                                                        staticClass: "primary",
                                                        attrs: {
                                                          cols: "12",
                                                          md: "12"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          staticClass: "pa-10",
                                                          attrs: {
                                                            cols: "12",
                                                            md: "12"
                                                          }
                                                        },
                                                        [
                                                          _vm._l(
                                                            _vm.getAll_questions
                                                              .Question,
                                                            function(
                                                              item,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "v-container",
                                                                {
                                                                  key: index,
                                                                  attrs: {
                                                                    "ma-0": "",
                                                                    "pa-0": ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      directives: [
                                                                        {
                                                                          name:
                                                                            "show",
                                                                          rawName:
                                                                            "v-show",
                                                                          value:
                                                                            index ===
                                                                            _vm.questionIndex,
                                                                          expression:
                                                                            "index === questionIndex"
                                                                        }
                                                                      ]
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-row",
                                                                        {
                                                                          attrs: {
                                                                            "ma-0":
                                                                              "",
                                                                            "pa-0":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-col",
                                                                            {
                                                                              staticClass:
                                                                                "mb-0 pb-0",
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
                                                                                    "pa-0 ma-0 d-flex flex-row justify-space-between"
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "h3",
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Question #" +
                                                                                          _vm._s(
                                                                                            index +
                                                                                              1
                                                                                          )
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "p",
                                                                                    {
                                                                                      staticClass:
                                                                                        "mr-5"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          item.points
                                                                                        ) +
                                                                                          " Points"
                                                                                      )
                                                                                    ]
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
                                                                            "v-col",
                                                                            {
                                                                              staticClass:
                                                                                " mt-0 pt-1",
                                                                              attrs: {
                                                                                cols:
                                                                                  "12",
                                                                                md:
                                                                                  "11",
                                                                                lg:
                                                                                  "11"
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-container",
                                                                                {
                                                                                  staticClass:
                                                                                    "ma-0 pa-0",
                                                                                  attrs: {
                                                                                    "ma-0":
                                                                                      "",
                                                                                    "pa-0":
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "subtitle-1",
                                                                                      style: _vm
                                                                                        .$vuetify
                                                                                        .breakpoint
                                                                                        .xs
                                                                                        ? "line-height:1.2"
                                                                                        : ""
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          item.question
                                                                                        )
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
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      item.type ==
                                                                      "Multiple Choice"
                                                                        ? _c(
                                                                            "v-container",
                                                                            [
                                                                              _c(
                                                                                "v-form",
                                                                                {
                                                                                  ref:
                                                                                    "form",
                                                                                  refInFor: true,
                                                                                  attrs: {
                                                                                    "lazy-validation":
                                                                                      ""
                                                                                  },
                                                                                  model: {
                                                                                    value:
                                                                                      _vm.valid,
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
                                                                                  _c(
                                                                                    "v-container",
                                                                                    {
                                                                                      attrs: {
                                                                                        "ma-0":
                                                                                          "",
                                                                                        "pa-0":
                                                                                          ""
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._l(
                                                                                        _vm
                                                                                          .getAll_questions
                                                                                          .Answer[
                                                                                          index
                                                                                        ],
                                                                                        function(
                                                                                          Ans,
                                                                                          i
                                                                                        ) {
                                                                                          return _c(
                                                                                            "v-container",
                                                                                            {
                                                                                              key: i,
                                                                                              staticClass:
                                                                                                "d-flex flex-row ma-0 pa-0 mb-1"
                                                                                            },
                                                                                            [
                                                                                              _c(
                                                                                                "v-radio-group",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "ma-0 pa-0",
                                                                                                  attrs: {
                                                                                                    name:
                                                                                                      "option" +
                                                                                                      index
                                                                                                  },
                                                                                                  model: {
                                                                                                    value:
                                                                                                      _vm
                                                                                                        .AnswerRadio[
                                                                                                        index
                                                                                                      ],
                                                                                                    callback: function(
                                                                                                      $$v
                                                                                                    ) {
                                                                                                      _vm.$set(
                                                                                                        _vm.AnswerRadio,
                                                                                                        index,
                                                                                                        $$v
                                                                                                      )
                                                                                                    },
                                                                                                    expression:
                                                                                                      "AnswerRadio[index]"
                                                                                                  }
                                                                                                },
                                                                                                [
                                                                                                  _c(
                                                                                                    "v-radio",
                                                                                                    {
                                                                                                      key: index,
                                                                                                      attrs: {
                                                                                                        color:
                                                                                                          "primary",
                                                                                                        value:
                                                                                                          Ans.Choice
                                                                                                      },
                                                                                                      on: {
                                                                                                        click: function(
                                                                                                          $event
                                                                                                        ) {
                                                                                                          ;(_vm.PickAnswers.ans =
                                                                                                            _vm.AnswerRadio[
                                                                                                              index
                                                                                                            ]),
                                                                                                            (_vm.PickAnswers_id.quesId =
                                                                                                              item.id),
                                                                                                            (_vm.Questype =
                                                                                                              item.type),
                                                                                                            (_vm.checker[
                                                                                                              index
                                                                                                            ] =
                                                                                                              _vm.AnswerRadio[
                                                                                                                index
                                                                                                              ])
                                                                                                        },
                                                                                                        mouseup: function(
                                                                                                          $event
                                                                                                        ) {
                                                                                                          return _vm.reset(
                                                                                                            index,
                                                                                                            index
                                                                                                          )
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
                                                                                                "div",
                                                                                                {
                                                                                                  staticClass:
                                                                                                    "Subtitle-1 ma-0 pa-0",
                                                                                                  staticStyle: {
                                                                                                    "line-height":
                                                                                                      "1.4"
                                                                                                  }
                                                                                                },
                                                                                                [
                                                                                                  _vm._v(
                                                                                                    "\r\n                                                                " +
                                                                                                      _vm._s(
                                                                                                        Ans.Choice
                                                                                                      ) +
                                                                                                      "\r\n                                                            "
                                                                                                  )
                                                                                                ]
                                                                                              )
                                                                                            ],
                                                                                            1
                                                                                          )
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "v-container",
                                                                                        {
                                                                                          staticClass:
                                                                                            "mb-0 pb-0 d-flex flex-row-reverse"
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "v-btn",
                                                                                            {
                                                                                              attrs: {
                                                                                                text:
                                                                                                  "",
                                                                                                rounded:
                                                                                                  "",
                                                                                                small:
                                                                                                  ""
                                                                                              },
                                                                                              on: {
                                                                                                click: function(
                                                                                                  $event
                                                                                                ) {
                                                                                                  return _vm.reset(
                                                                                                    index,
                                                                                                    index
                                                                                                  )
                                                                                                }
                                                                                              }
                                                                                            },
                                                                                            [
                                                                                              _vm._v(
                                                                                                "Reset selection"
                                                                                              )
                                                                                            ]
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
                                                                            ],
                                                                            1
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      item.type ==
                                                                      "Identification"
                                                                        ? _c(
                                                                            "v-container",
                                                                            [
                                                                              _c(
                                                                                "v-row",
                                                                                {
                                                                                  attrs: {
                                                                                    "ma-0":
                                                                                      "",
                                                                                    "pa-0":
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "v-col",
                                                                                    {
                                                                                      staticClass:
                                                                                        "ma-0 pa-0 mt-5",
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
                                                                                        "v-textarea",
                                                                                        {
                                                                                          staticClass:
                                                                                            "pa-0 ma-0",
                                                                                          attrs: {
                                                                                            filled:
                                                                                              "",
                                                                                            label:
                                                                                              "Answer",
                                                                                            "auto-grow":
                                                                                              ""
                                                                                          },
                                                                                          on: {
                                                                                            change: function(
                                                                                              $event
                                                                                            ) {
                                                                                              ;(_vm.PickAnswers_id.quesId =
                                                                                                item.id),
                                                                                                (_vm.Questype =
                                                                                                  item.type),
                                                                                                (_vm.checker[
                                                                                                  index
                                                                                                ] =
                                                                                                  _vm.IdentificationAns[
                                                                                                    index
                                                                                                  ])
                                                                                            }
                                                                                          },
                                                                                          model: {
                                                                                            value:
                                                                                              _vm
                                                                                                .IdentificationAns[
                                                                                                index
                                                                                              ],
                                                                                            callback: function(
                                                                                              $$v
                                                                                            ) {
                                                                                              _vm.$set(
                                                                                                _vm.IdentificationAns,
                                                                                                index,
                                                                                                $$v
                                                                                              )
                                                                                            },
                                                                                            expression:
                                                                                              "IdentificationAns[index]"
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
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      item.type ==
                                                                      "True or False"
                                                                        ? _c(
                                                                            "v-container",
                                                                            [
                                                                              _c(
                                                                                "v-container",
                                                                                {
                                                                                  attrs: {
                                                                                    "ma-0":
                                                                                      "",
                                                                                    "pa-0":
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                _vm._l(
                                                                                  _vm.inputCheck,
                                                                                  function(
                                                                                    x,
                                                                                    n
                                                                                  ) {
                                                                                    return _c(
                                                                                      "v-container",
                                                                                      {
                                                                                        key: n,
                                                                                        staticClass:
                                                                                          "d-flex flex-row ma-0 pa-0"
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-radio-group",
                                                                                          {
                                                                                            staticClass:
                                                                                              "ma-0 pa-0",
                                                                                            attrs: {
                                                                                              name:
                                                                                                "option" +
                                                                                                index
                                                                                            },
                                                                                            model: {
                                                                                              value:
                                                                                                _vm
                                                                                                  .AnswerRadio[
                                                                                                  index
                                                                                                ],
                                                                                              callback: function(
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm.AnswerRadio,
                                                                                                  index,
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                              expression:
                                                                                                "AnswerRadio[index]"
                                                                                            }
                                                                                          },
                                                                                          [
                                                                                            _c(
                                                                                              "v-radio",
                                                                                              {
                                                                                                key: index,
                                                                                                attrs: {
                                                                                                  color:
                                                                                                    "primary",
                                                                                                  value:
                                                                                                    _vm
                                                                                                      .inputCheck[
                                                                                                      n
                                                                                                    ]
                                                                                                },
                                                                                                on: {
                                                                                                  click: function(
                                                                                                    $event
                                                                                                  ) {
                                                                                                    ;(_vm.PickAnswers.ans =
                                                                                                      _vm.AnswerRadio[
                                                                                                        index
                                                                                                      ]),
                                                                                                      (_vm.PickAnswers_id.quesId =
                                                                                                        item.id),
                                                                                                      (_vm.Questype =
                                                                                                        item.type),
                                                                                                      (_vm.checker[
                                                                                                        index
                                                                                                      ] =
                                                                                                        _vm.AnswerRadio[
                                                                                                          index
                                                                                                        ])
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
                                                                                          "div",
                                                                                          {
                                                                                            staticClass:
                                                                                              "Subtitle 1"
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\r\n                                                                " +
                                                                                                _vm._s(
                                                                                                  _vm
                                                                                                    .inputCheck[
                                                                                                    n
                                                                                                  ]
                                                                                                ) +
                                                                                                "\r\n                                                            "
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
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-container",
                                                            [
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  attrs: {
                                                                    rounded: "",
                                                                    color:
                                                                      "primary",
                                                                    outlined:
                                                                      "",
                                                                    disabled:
                                                                      _vm.questionIndex <=
                                                                      0
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.prev
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-arrow-left"
                                                                    )
                                                                  ]),
                                                                  _vm._v(
                                                                    "\r\n                                                " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs
                                                                          ? ""
                                                                          : "previous"
                                                                      ) +
                                                                      "\r\n                                                \r\n                                                "
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
                                                                    color:
                                                                      "primary"
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      _vm.next
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                  " +
                                                                      _vm._s(
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs
                                                                          ? ""
                                                                          : "Next"
                                                                      ) +
                                                                      "\r\n                                                 "
                                                                  ),
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-arrow-right"
                                                                    )
                                                                  ])
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
              ],
              null,
              false,
              3321290850
            )
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/StudentPage/ExamQuestionListPage.vue?vue&type=style&index=0&id=38e5e010&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3b780d62", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);