"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_dialogs_reviewAndPublishDialog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails'],
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getAll_questions"]),
  data: function data() {
    return {
      questionIndex: 0,
      TempAnswers: [],
      isloaded: false,
      editorOption: {
        placeholder: 'type here ...',
        blur: true,
        modules: {
          toolbar: [['bold', 'italic', 'underline'], [{
            'list': 'bullet'
          }], ['image']],
          syntax: {
            highlight: function highlight(text) {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      },
      inputCheck: ['True', 'False'],
      Alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      QuestionList: [],
      AnswerList: []
    };
  },
  methods: {
    CloseDialog: function CloseDialog() {
      var _this = this;

      var counter = 0;
      this.getAll_questions.Question.forEach(function (item) {
        if (item.type == 'Matching type') {
          _this.getAll_questions.Answer[counter].Destructors.forEach(function (des) {
            var tmp = 0;

            _this.getAll_questions.Answer[counter].SubAnswer.forEach(function (sub) {
              if (des.id == sub.id) {
                _this.getAll_questions.Answer[counter].SubAnswer.splice(tmp, 1);
              }

              tmp++;
            });
          });
        }

        counter++;
      });
      /* 
                if(counter == this.Question.Question.length){
                    
                } */

      this.$emit('closeDialog');
    },
    MakeTempAnswer: function MakeTempAnswer() {
      var _this2 = this;

      this.getAll_questions.Question.forEach(function (item) {
        _this2.TempAnswers.push({
          answer: null
        });
      });
    },
    SuffleQuestion: function SuffleQuestion() {
      var _this3 = this;

      var tmpquestion = this.getAll_questions.Question;
      this.QuestionList = this.Shuffle(tmpquestion);
      this.QuestionList.forEach(function (item) {
        if (item.type == 'Multiple Choice' || item.type == 'Matching type') {
          _this3.getAll_questions.Answer.forEach(function (element) {
            if (item.type == 'Multiple Choice') {
              if (element.options.length != 0) {
                if (element.options[0].question_id == item.id) {
                  _this3.AnswerList.push(element);
                }
              }
            } else if (item.type == 'Matching type') {
              if (element.SubAnswer.length != 0) {
                if (element.SubAnswer[0].question_id == item.id) {
                  _this3.AnswerList.push(element);
                }
              }
            }
          });
        } else {
          _this3.AnswerList.push({
            options: [],
            SubQuestion: [],
            SubAnswer: []
          });
        }
      });
    },
    LoadDestructor: function LoadDestructor() {
      var _this4 = this;

      var counter = 0;
      this.getAll_questions.Question.forEach(function (item) {
        if (item.type == 'Matching type') {
          _this4.getAll_questions.Answer[counter].Destructors.forEach(function (des) {
            _this4.getAll_questions.Answer[counter].SubAnswer.push(des);
          });
        }

        counter++;
      });
    },
    Shuffle: function Shuffle(array) {
      var currentIndex = array.length,
          randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var _ref = [array[randomIndex], array[currentIndex]];
        array[currentIndex] = _ref[0];
        array[randomIndex] = _ref[1];
      }

      return array;
    },
    loadQuestionAll: function loadQuestionAll() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this5.getAll_questions.length == 0) {
                  _this5.$store.dispatch('fetchQuestions', _this5.$route.query.clwk).then(function (res) {
                    _this5.LoadDestructor();

                    _this5.isloaded = true;
                  });
                } else {
                  _this5.LoadDestructor();

                  _this5.isloaded = true;
                }

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
    this.loadQuestionAll();
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit('closeDialog');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered-input[data-v-d9d1e1f8] input{\r\n        text-align: center !important;\n}\n.post-content  img[data-v-d9d1e1f8]{\r\n        max-height: 15rem !important;\n}\n.Essayeditor[data-v-d9d1e1f8]{\r\n        height: 10rem !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_style_index_0_id_d9d1e1f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_style_index_0_id_d9d1e1f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_style_index_0_id_d9d1e1f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true& */ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true&");
/* harmony import */ var _reviewAndPublishDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewAndPublishDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _reviewAndPublishDialog_vue_vue_type_style_index_0_id_d9d1e1f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _reviewAndPublishDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d9d1e1f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reviewAndPublishDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_style_index_0_id_d9d1e1f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=style&index=0&id=d9d1e1f8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reviewAndPublishDialog_vue_vue_type_template_id_d9d1e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/dialogs/reviewAndPublishDialog.vue?vue&type=template&id=d9d1e1f8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.isloaded
        ? _c(
            "v-row",
            { staticClass: "ma-0 pa-0" },
            [
              _c(
                "v-col",
                { staticClass: "mb-2 ", attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "pl-2 pr-4",
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
                                        " \n                                mdi-book-open-variant\n                            "
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
                                        "\n                                " +
                                          _vm._s(_vm.classworkDetails.title) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-subtitle",
                                    { staticClass: "font-weight-medium" },
                                    [
                                      _vm._v(
                                        "\n                                Total Points: " +
                                          _vm._s(_vm.classworkDetails.points) +
                                          "\n                            "
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
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
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
                                                              small: "",
                                                              color: "red",
                                                              dark: "",
                                                              rounded: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.CloseDialog()
                                                              }
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
                                                            attrs: { small: "" }
                                                          },
                                                          [_vm._v("mdi-close")]
                                                        ),
                                                        _vm._v(
                                                          " Cancel\n                                            "
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
                                            1799323582
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Cancel Publish")])
                                        ]
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
                { staticClass: "mb-0 mt-0", attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex mb-0 pb-0",
                          attrs: { cols: "12", md: "8" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { dark: "", color: "red" },
                              on: {
                                click: function($event) {
                                  return _vm.$router.push({
                                    name: "add-question",
                                    query: { clwk: _vm.$route.query.clwk }
                                  })
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-pencil")
                              ]),
                              _vm._v(" Edit Question\n                    ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "pl-3 pr-3" }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { dark: "", color: "green" },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("continuePublish")
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-share")
                              ]),
                              _vm._v(
                                "Continue Publishing \n                    "
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
                { staticClass: "mt-1", attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center", justify: "center" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-10",
                          attrs: { cols: "12", md: "8" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "pa-3 pt-8",
                              attrs: {
                                "min-height": "400",
                                elevation: "5",
                                outlined: ""
                              }
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
                                                                      left: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "mdi-checkbox-blank-outline"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(
                                                                  "\n                                        " +
                                                                    _vm._s(
                                                                      index + 1
                                                                    ) +
                                                                    "\n                                        "
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
                                            "\n                                    Previous\n                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.questionIndex !=
                                      _vm.getAll_questions.Question.length - 1
                                        ? _c(
                                            "v-btn",
                                            {
                                              staticClass: "pl-9 pr-9",
                                              attrs: {
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
                                                "\n                                    Next\n                                "
                                              )
                                            ]
                                          )
                                        : _c(
                                            "v-btn",
                                            {
                                              staticClass: "pl-9 pr-9",
                                              attrs: {
                                                dark: "",
                                                color: "green",
                                                rounded: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.$emit(
                                                    "continuePublish"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [_vm._v("mdi-share")]
                                              ),
                                              _vm._v(
                                                "Continue Publishing\n                                "
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
                                "div",
                                _vm._l(_vm.getAll_questions.Question, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "v-row",
                                    {
                                      key: index,
                                      attrs: { "ma-0": "", "pa-0": "" }
                                    },
                                    [
                                      index == _vm.questionIndex
                                        ? _c(
                                            "v-col",
                                            {
                                              staticClass: "pa-7",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "mb-0 pb-0",
                                                      attrs: { cols: "12" }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex justify-space-between",
                                                          style: !_vm.$vuetify
                                                            .breakpoint.mdAndUp
                                                            ? "line-height:1.1"
                                                            : "line-height:1.5"
                                                        },
                                                        [
                                                          _c("span", {
                                                            staticClass:
                                                              "post-content",
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                item.question
                                                              )
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.points
                                                              ) + " point"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  item.type == "Multiple Choice"
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "v-list",
                                                                {
                                                                  staticClass:
                                                                    "pl-8"
                                                                },
                                                                _vm._l(
                                                                  _vm
                                                                    .getAll_questions
                                                                    .Answer[
                                                                    index
                                                                  ].options,
                                                                  function(
                                                                    Ans,
                                                                    i
                                                                  ) {
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
                                                                                    item.id
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
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-radio",
                                                                                  {
                                                                                    key:
                                                                                      Ans.id,
                                                                                    style: _vm
                                                                                      .$vuetify
                                                                                      .breakpoint
                                                                                      .mdAndUp
                                                                                      ? "transform: scale(1.3)"
                                                                                      : "transform: scale(1.35)",
                                                                                    attrs: {
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
                                                                        _vm._v(
                                                                          " "
                                                                        ),
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
                                                                                )
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
                                                            "mt-0 pt-0",
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "font-weight-bold"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Answers: "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list",
                                                                [
                                                                  _c(
                                                                    "v-list-item",
                                                                    {
                                                                      staticClass:
                                                                        "mb-0 pb-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-list-item-content",
                                                                        {
                                                                          staticClass:
                                                                            "d-flex mb-0 pb-0"
                                                                        },
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
                                                                                  "d-flex mb-0 pb-0"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "pr-2 green--text"
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
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "v-list",
                                                                {
                                                                  staticClass:
                                                                    "pl-8"
                                                                },
                                                                _vm._l(
                                                                  _vm.inputCheck,
                                                                  function(
                                                                    x,
                                                                    n
                                                                  ) {
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
                                                                                attrs: {
                                                                                  "hide-details":
                                                                                    ""
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
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-radio",
                                                                                  {
                                                                                    key: n,
                                                                                    style: _vm
                                                                                      .$vuetify
                                                                                      .breakpoint
                                                                                      .mdAndUp
                                                                                      ? "transform: scale(1.3)"
                                                                                      : "transform: scale(1.35)",
                                                                                    attrs: {
                                                                                      readonly:
                                                                                        "",
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
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
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
                                                                                      "mt-4"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .inputCheck[
                                                                                          n
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
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
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
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
                                                                              "1"
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
                                                                              "5"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                                                Column A"
                                                                          ),
                                                                          _c(
                                                                            "small",
                                                                            [
                                                                              _vm._v(
                                                                                "(question)"
                                                                              )
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
                                                                            "font-weight-bold",
                                                                          attrs: {
                                                                            cols:
                                                                              "5"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                                                Column B"
                                                                          ),
                                                                          _c(
                                                                            "small",
                                                                            [
                                                                              _vm._v(
                                                                                "(answers)"
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
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "mb-5"
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-divider"
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-container",
                                                                {
                                                                  staticClass:
                                                                    "mb-0 pb-0 "
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "mb-0 pb-0"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-col",
                                                                        {
                                                                          attrs: {
                                                                            cols:
                                                                              "6"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-row",
                                                                            _vm._l(
                                                                              _vm
                                                                                .getAll_questions
                                                                                .Answer[
                                                                                index
                                                                              ]
                                                                                .SubQuestion,
                                                                              function(
                                                                                List,
                                                                                i
                                                                              ) {
                                                                                return _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    key:
                                                                                      List.id,
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
                                                                                              ? "max-width:80px"
                                                                                              : "max-width:60px",
                                                                                            attrs: {
                                                                                              outlined:
                                                                                                "",
                                                                                              dense:
                                                                                                "",
                                                                                              "hide-details":
                                                                                                ""
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
                                                                                          "d-flex flex-row mt-3 pl-2"
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
                                                                                                List.sub_question
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-col",
                                                                        {
                                                                          attrs: {
                                                                            cols:
                                                                              "6"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-row",
                                                                            _vm._l(
                                                                              _vm
                                                                                .getAll_questions
                                                                                .Answer[
                                                                                index
                                                                              ]
                                                                                .SubAnswer,
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
                                                                                          "d-flex flex-row mt-3"
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
                                                                                                pairList.Choice
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
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  item.type == "Essay"
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "v-list",
                                                                {
                                                                  staticClass:
                                                                    "pl-3"
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
                                                                            "ma-0 pa-0"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "quill-editor",
                                                                            {
                                                                              ref:
                                                                                "myTextEditor",
                                                                              refInFor: true,
                                                                              staticClass:
                                                                                "Essayeditor",
                                                                              attrs: {
                                                                                options:
                                                                                  _vm.editorOption
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .TempAnswers[
                                                                                    index
                                                                                  ]
                                                                                    .answer,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .TempAnswers[
                                                                                      index
                                                                                    ],
                                                                                    "answer",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "TempAnswers[index].answer"
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
                                                        ]
                                                      )
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
                                }),
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