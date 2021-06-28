(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_gradebook-tab_gradebookComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectedClass: null,
      Deldialog: false,
      dialog: false,
      temp_id: '',
      loading: false,
      type: '',
      search: "",
      grading_criteria_form: {},
      grading_criteria: {},
      course_id: '',
      delId: '',
      classworkList: [],
      headers: [],
      classList: [],
      students: [],
      classworkTotalPoints: 0
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["get_gradingCriteria", "allClass", "StudentClassworkGrades"])),
  methods: {
    totalPercentHeader: function totalPercentHeader() {
      this.headers.push({
        text: 'Total Points' + ' (' + this.classworkTotalPoints + 'pts)',
        align: 'center',
        value: 'total'
      }, {
        text: 'Total Percentage',
        align: 'center',
        value: 'Percentage'
      });
    },
    classworkTotalPoins: function classworkTotalPoins() {},
    totalPoints: function totalPoints(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }

      return total;
    },
    totalPercentage: function totalPercentage(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }

      console.log('tota;', total);
      console.log('classworktoal', this.classworkTotalPoints);
      var result = total / this.classworkTotalPoints * 100;
      return isNaN(result) == true ? 0 : result.toFixed(2);
    },
    getStudentList: function getStudentList() {
      var _this = this;

      axios.get('/api/student/all_by_class/' + this.selectedClass).then(function (res) {
        _this.students = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAllGradeCriteria: function getAllGradeCriteria() {
      this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
    },
    getClassworkList: function getClassworkList() {
      var _this2 = this;

      var total = 0;
      this.getStudentList();
      this.headers = [];
      this.headers.push({
        text: 'Name',
        value: 'name'
      });
      axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
        _this2.classworkList = res.data;
        console.log(res.data);

        for (var i = 0; i < _this2.classworkList.length; i++) {
          // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
          if (_this2.classworkList[i]['grading_criteria_id'] == _this2.get_gradingCriteria[0].id) {
            _this2.headers.push({
              text: _this2.classworkList[i]['title'] + ' (' + _this2.classworkList[i]['points'] + 'pts)',
              align: 'center',
              value: _this2.classworkList[i]['title']
            });

            total += _this2.classworkList[i]['points'];
          }
        } //    console.log(grading_criteria_id)


        _this2.classworkTotalPoints = total;

        _this2.totalPercentHeader();
      });
      this.$store.dispatch('fetchStudentClassworkGrades', this.selectedClass);
    },
    _getClassworkListbyTab: function _getClassworkListbyTab(grading_criteria_id) {
      var _this3 = this;

      var total = 0;
      this.headers = [];
      this.headers.push({
        text: 'Name',
        value: 'name'
      });
      axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
        _this3.classworkList = res.data;
        console.log(res.data);

        for (var i = 0; i < _this3.classworkList.length; i++) {
          // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
          if (_this3.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
            _this3.headers.push({
              text: _this3.classworkList[i]['title'] + ' (' + _this3.classworkList[i]['points'] + 'pts)',
              align: 'center',
              value: _this3.classworkList[i]['title']
            });

            total += _this3.classworkList[i]['points'];
          }
        }

        _this3.classworkTotalPoints = total;

        _this3.totalPercentHeader();
      });
    },
    getStudentClassworksGrades: function getStudentClassworksGrades(grading_criteria_id) {
      var _this4 = this;

      axios.get('/api/grade-book/classworkGrades/' + this.selectedClass).then(function (res) {
        _this4.classworkList = res.data;
        console.log(res.data);

        for (var i = 0; i < _this4.classworkList.length; i++) {
          if (_this4.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {}
        }
      });
    },
    _totalPercent: function _totalPercent(percentage_data) {
      var total = 0;
      percentage_data.forEach(function (val) {
        total += parseFloat(val.percentage);
        console.log(total);
      });
      return total;
    },
    getClassList: function getClassList() {
      var _this5 = this;

      this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(function () {
        _this5.classList = _this5.allClass;
        _this5.selectedClass = _this5.classList[0].class_id;

        _this5.getClassworkList();

        _this5.getStudentList();

        console.log('class Liost: ', _this5.classList);
      });
    }
  },
  created: function created() {
    this.loading = true;
    this.getAllGradeCriteria();
    this.getClassList();
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-input__slot {\n    margin-bottom: 0 !important;\n}\n\n", ""]);
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

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradebookComponent.vue?vue&type=template&id=7d15dfc2& */ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2&");
/* harmony import */ var _gradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradebookComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _gradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__.render,
  _gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gradebookComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_template_id_7d15dfc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gradebookComponent.vue?vue&type=template&id=7d15dfc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=template&id=7d15dfc2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pt-4" },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [_vm._v("\n                Student Grades\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("v-select", {
                staticClass: "float-right",
                attrs: {
                  items: _vm.classList,
                  "item-text": "class_name",
                  "item-value": "class_id",
                  label: "Select Class"
                },
                on: {
                  change: function($event) {
                    return _vm.getClassworkList()
                  }
                },
                model: {
                  value: _vm.selectedClass,
                  callback: function($$v) {
                    _vm.selectedClass = $$v
                  },
                  expression: "selectedClass"
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
        "v-card",
        [
          _c(
            "v-tabs",
            { attrs: { color: "deep-purple accent-4", right: "" } },
            [
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab",
                  {
                    key: index,
                    on: {
                      click: function($event) {
                        return _vm._getClassworkListbyTab(gradingCriteria.id)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(gradingCriteria.name) +
                        "\n            "
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab-item",
                  { key: index },
                  [
                    _c(
                      "v-card-title",
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(gradingCriteria.name) +
                            "\n                    "
                        ),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            "append-icon": "mdi-magnify",
                            label: "Search",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.headers.length != 0
                      ? _c("v-data-table", {
                          attrs: { headers: _vm.headers, items: _vm.students },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "body",
                                fn: function(ref) {
                                  var items = ref.items
                                  return [
                                    _c(
                                      "tbody",
                                      _vm._l(items, function(student) {
                                        return _c(
                                          "tr",
                                          { key: student.id },
                                          [
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  student.lastName +
                                                    ", " +
                                                    student.firstName
                                                ) + " "
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.StudentClassworkGrades(
                                                student.id,
                                                gradingCriteria.id
                                              ),
                                              function(classworkGrades, index) {
                                                return _c(
                                                  "td",
                                                  {
                                                    key: index,
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          classworkGrades.points
                                                        ) +
                                                        "\n\n                                    "
                                                    ),
                                                    classworkGrades.points ==
                                                    null
                                                      ? _c(
                                                          "v-tooltip",
                                                          {
                                                            attrs: { top: "" },
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
                                                                                color:
                                                                                  "grey lighten-1"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                    mdi-close\n                                                "
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
                                                            ),
                                                            model: {
                                                              value: _vm.show,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.show = $$v
                                                              },
                                                              expression: "show"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c("span", [
                                                              _vm._v(
                                                                "No Submission"
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                )
                                              }
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.totalPoints(
                                                        _vm.StudentClassworkGrades(
                                                          student.id,
                                                          gradingCriteria.id
                                                        )
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.totalPercentage(
                                                        _vm.StudentClassworkGrades(
                                                          student.id,
                                                          gradingCriteria.id
                                                        )
                                                      )
                                                    ) +
                                                    "%\n                                "
                                                )
                                              ]
                                            )
                                          ],
                                          2
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        })
                      : _vm._e()
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./gradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/gradebookComponent.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ce826aca", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);