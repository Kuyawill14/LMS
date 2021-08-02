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
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      isloading: true,
      isAdding: false,
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

      this.isAdding = true;

      if (this.quesForm.type == 'Multiple Choice') {
        if (this.form.length >= 2 && this.quesForm.answer != '' && this.quesForm.points != 0) {
          this.finalData.ansLength = this.form.length;
          this.finalData.clw = this.$route.query.clwk;
          /*  this.quesForm.answer = '<div>'+'<img src="'+this.quesForm.answer+'">'+'</div>'; */

          this.finalData.questions = this.quesForm;
          this.finalData.answers = this.form;
          this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
            _this2.toastSuccess("Question Successfully added"); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


            _this2.CallReset();
          });
        } else if (this.quesForm.question == "") {
          this.toastError('Question is required!');
        } else if (this.quesForm.answer != '' && this.quesForm.points == 0) {
          this.toastError('You must atleast allocate one points to this question!');
        } else if (this.quesForm.answer == '') {
          this.toastError('You must atleast write/pick one answer');
        } else {
          this.toastError('You must atleast enter two choices');
        }

        setTimeout(function () {
          return _this2.isAdding = false;
        }, 1000); //this.isAdding = false;
      } else if (this.quesForm.type == 'Identification' || this.quesForm.type == 'True or False') {
        if (this.quesForm.answer != '' && this.quesForm.points != 0 || '') {
          this.finalData.ansLength = this.form.length;
          this.finalData.clw = this.$route.query.clwk;
          this.finalData.questions = this.quesForm;
          this.finalData.answers = this.form;
          this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
            _this2.toastSuccess("Question Successfully added"); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


            _this2.CallReset();
          });
        } else {
          this.toastError('You must atleast write/pick one answer');
        }

        setTimeout(function () {
          return _this2.isAdding = false;
        }, 1000); //this.isAdding = false;
      } else if (this.quesForm.type == 'Matching type') {
        this.quesForm.answer = 'Matching Type';
        this.finalData.ansLength = this.MatchQuestion.length;
        this.finalData.clw = this.$route.query.clwk;
        this.finalData.questions = this.quesForm;
        this.finalData.answers = this.MatchQuestion;
        this.$store.dispatch('addQuestions', this.finalData).then(function (success) {
          _this2.toastSuccess("Question Successfully added"); //this.$store.dispatch('fetchQuestions', this.$route.query.clwk);


          _this2.CallReset();
        });
        setTimeout(function () {
          return _this2.isAdding = false;
        }, 1000); //this.isAdding = false;
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n /* .ql-toolbar.ql-snow {\n        background: #f2f2f2;\n        border: none;\n }\n .ql-bold,.ql-italic,.ql-underline, .ql-strike\n    ,.ql-picker-label,.ql-align,.ql-list,.ql-link\n    ,.ql-image,.ql-video\n    {\n        outline: none !important;\n        border:none !important;\n    }  */\n.centered-input >>> input {\n    text-align: center\n}\n.ql-editor img{\n\n    max-height: 15rem !important;\n}\n.ql-container{\n    max-height: 50rem;\n}\n", ""]);
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
    "div",
    { staticClass: "pa-1" },
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
                            "v-window",
                            [
                              _c(
                                "v-window-item",
                                [
                                  _c("vue-element-loading", {
                                    attrs: {
                                      active: _vm.isAdding,
                                      spinner: "bar-fade-scale"
                                    }
                                  }),
                                  _vm._v(" "),
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
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "mb-3"
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-card",
                                                                    {
                                                                      staticStyle: {
                                                                        width:
                                                                          "100%"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "editor",
                                                                        {
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
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  !_vm.valid &&
                                                                  _vm.quesForm
                                                                    .question ==
                                                                    ""
                                                                    ? _c(
                                                                        "small",
                                                                        {
                                                                          staticClass:
                                                                            "error--text"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "*This field is required"
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e()
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
                                                                    cols: "12",
                                                                    md: "12",
                                                                    lg: "12"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      staticClass:
                                                                        "mt-2 mb-0 pb-0",
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
                                                                            left:
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
                                                                      ),
                                                                      _vm._v(
                                                                        "\r\n                                            Add Choice\r\n                                            "
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
                                                        {
                                                          attrs: {
                                                            "mb-0": "",
                                                            "pb-0": ""
                                                          }
                                                        },
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
                                                        : _vm._e()
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
                                                            loading:
                                                              _vm.isAdding,
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