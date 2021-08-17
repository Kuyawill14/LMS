(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_lazytube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-lazytube */ "./node_modules/vue-lazytube/dist/vue-lazytube.umd.min.js");
/* harmony import */ var vue_lazytube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_lazytube__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var pdfviewer = function pdfviewer() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_modules-tab_user-type_pdfview_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pdfview */ "./resources/js/components/course-view/tabs/modules-tab/user-type/pdfview.vue"));
};


 //import modulesListComponent from './modulesListComponent'

var modulesListComponent = function modulesListComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./studentmodulesListComponent */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default()),
    modulesListComponent: modulesListComponent,
    LazyYoutube: vue_lazytube__WEBPACK_IMPORTED_MODULE_0__.LazyYoutube,
    pdfviewer: pdfviewer
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getmain_module"])),
  data: function data() {
    return {
      pdfdialog: false,
      config: {
        toolbar: {
          toolbarViewerLeft: {
            findbar: false
          }
        }
      },
      contentHover: false,
      removeX: true,
      listDialaog: false,
      loading: false,
      subModuleData: null,
      googledocsParams: '?pid=explorer&efh=false&a=v&chrome=false&embedded=true',
      allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx'],
      type: '',
      ext: null,
      iframeSrc: null,
      isSelectedModule: false,
      isExpand: false,
      isChangeSize: false,
      screenWidth: window.innerWidth
    };
  },
  methods: {
    getMainModulebyId: function getMainModulebyId(id) {
      for (var i = 0; this.getmain_module.length; i++) {
        if (this.getmain_module[i].id == id) {
          return this.getmain_module[i];
        }
      }
    },
    expandContent: function expandContent() {
      this.isExpand = !this.isExpand;
    },
    getFileExt: function getFileExt(filename) {
      if (this.subModuleData.file_attachment) {
        var split = filename.split('.');
        return split[split.length - 1];
      }
    },
    getsubModuleData: function getsubModuleData(value) {
      this.isSelectedModule = true;
      this.subModuleData = value;
      this.ext = this.getFileExt(value.file_attachment);
      this.type = this.subModuleData.type;
      this.documentUrl(value.file_attachment);
      this.pdfdialog = true;
    },
    documentUrl: function documentUrl(file) {
      var origin_url = window.location.origin;
      var base_src = 'https://drive.google.com/viewerng/viewer?url=' + origin_url;
      this.iframeSrc = base_src + '/storage/' + file;
    }
  },
  created: function created() {
    var _this = this;

    console.log(this.role);

    if (this.subModuleData) {
      this.loading = true;
    }

    setInterval(function () {
      if (window.innerWidth < 1264) {
        _this.isChangeSize = true;
      } else {
        _this.isChangeSize = false;
      }
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.exitFullscreen[data-v-2a6a4450] {\n    position: absolute;\n    border-radius: 0;\n    right: 0;\n    top: 70px;\n    z-index: 99;\n}\n.bottom-content[data-v-2a6a4450] {\n\n    padding-left: 30px;\n}\n.video-c[data-v-2a6a4450] {\n    min-height: 470px;\n}\n.border[data-v-2a6a4450] {\n    border-left: 1px solid #e0e0e0;\n}\n.ipOhDr[data-v-2a6a4450] {\n    max-width: 100%;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-dialog--active {\n    overflow: hidden;\n}\n\n", ""]);
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

/***/ "./node_modules/vue-lazytube/dist/vue-lazytube.umd.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-lazytube/dist/vue-lazytube.umd.min.js ***!
  \****************************************************************/
/***/ (function(module) {

(function(e,t){ true?module.exports=t():0})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("c04e"),s=n("5135"),u=n("0cfb"),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t,!0),u)try{return f(e,t)}catch(n){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},"0a06":function(e,t,n){"use strict";var r=n("c532"),i=n("30b5"),o=n("f6b4"),a=n("5270"),c=n("4a7b");function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=c(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(c(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,r){return this.request(c(r||{},{method:e,url:t,data:n}))}})),e.exports=s},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),f=n("14c3"),l=n("9263"),d=n("d039"),p=[].push,h=Math.min,b=4294967295,v=!d((function(){return!RegExp(b,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),o=void 0===n?b:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var c,s,u,f=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=new RegExp(e.source,d+"g");while(c=l.call(v,r)){if(s=v.lastIndex,s>h&&(f.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&p.apply(f,c.slice(1)),u=c[0].length,h=s,f.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return h===r.length?!u&&v.test("")||f.push(""):f.push(r.slice(h)),f.length>o?f.slice(0,o):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var l=o(e),d=String(this),p=c(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),y=new p(v?l:"^(?:"+l.source+")",m),x=void 0===i?b:i>>>0;if(0===x)return[];if(0===d.length)return null===f(y,d)?[d]:[];var w=0,A=0,S=[];while(A<d.length){y.lastIndex=v?A:0;var k,C=f(y,v?d:d.slice(A));if(null===C||(k=h(u(y.lastIndex+(v?0:A)),d.length))===w)A=s(d,A,g);else{if(S.push(d.slice(w,A)),S.length===x)return S;for(var E=1;E<=C.length-1;E++)if(S.push(C[E]),S.length===x)return S;A=w=k}}return S.push(d.slice(w)),S}]}),!v)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"21c1":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VideoWrapper",{attrs:{aspectRatioValue:e.aspectRatioValue,maxWidth:e.maxWidth}},[!e.onceLoaded&&e.videoID?n("Preview",{on:{click:function(t){return e.createIframe(e.isVideoFound,"vimeo")}}},[e.isVideoFound?[e.isCustomThumbnailExist?n("img",{attrs:{src:e.customThumbnail,alt:""},on:{error:function(t){t.target.src=e.getVimeoThumbnail(e.videoID,e.thumbnailQuality)}}}):n("img",{attrs:{src:e.getVimeoThumbnail(e.videoID,e.thumbnailQuality),alt:""},on:{error:function(t){t.target.src=e.videoInfo.thumbnail_url}}}),e.showTitle?[n("span",{staticClass:"ly-text"},[e._v(e._s(e.isCustomTitleExist?e.customTitle:e.getTitle))])]:e._e(),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.clicked,expression:"!clicked"}],staticClass:"ly-button-wrapper"},[e._t("button",[n("svg",{attrs:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"}},[n("path",{staticClass:"ly-large-play-button-bg--v",attrs:{d:"M 63 0 C 55.79 0.13 34 0 34 0 S 12.21 0.13 0 0 C 0.06 13.05 0 24 0 24 s 0.06 10.95 0 24 C 12.21 47.87 34 48 34 48 s 21.79 -0.13 34 -0 C 67.94 34.95 68 24 68 24 S 67.94 13.05 68 0 z",fill:"#00adef"}}),n("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.clicked,expression:"clicked"}],staticClass:"ly-loader-wrapper"},[e._t("loader",[n("span",{staticClass:"ly-ring"},[n("span"),n("span"),n("span")])])],2)]:e.fetchingInfo?e._e():[n("div",{staticClass:"ly-error-container"},[n("span",{staticClass:"ly-error-icon"},[n("svg",{attrs:{fill:"#fff",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M0 0h48v48H0V0z",fill:"none"}}),n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z","fill-opacity":"0.7"}})])]),n("span",{staticClass:"ly-error-content"},[n("span",{staticClass:"ly-error-content__reason"},[n("span",[e._v("Video unavailable")])]),n("span",{staticClass:"ly-error-content__subreason"},[n("span",[e._v("This video is unavailable or embed permissions are disabled for this video")])])])])]],2):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:e.onceLoaded,expression:"onceLoaded"}],staticClass:"ly-iframe-wrapper"})],1)},i=[],o=(n("498a"),{methods:{playVideo:function(){this.isPostMessageSupported&&(null!==this.iframeEl?this.iframeEl.contentWindow.postMessage('{"method":"play"}',"*"):this.createIframe(this.isVideoFound,"vimeo"))},pauseVideo:function(){this.isPostMessageSupported&&null!==this.iframeEl&&this.iframeEl.contentWindow.postMessage('{"method":"pause"}',"*")},stopVideo:function(){this.isPostMessageSupported&&null!==this.iframeEl&&this.iframeEl.contentWindow.postMessage('{"method":"pause"}',"*")},getVimeoThumbnail:function(e,t){var n;if(e){"undefined"==typeof t&&(t="high");var r="960x540";return"default"===t?r="200x150":"medium"===t?r="295x166":"high"===t?r="640x360":"standard"===t?r="960x540":"maxres"===t&&(r="1280x720"),n="https://i.vimeocdn.com/video/"+e+"_"+r+".jpg",n}return!1}}}),a=n("4018"),c=n("727b"),s=n("777d"),u={name:"LazyVimeo",mixins:[a["a"],o],data:function(){return{videoID:null}},props:{src:{type:String,required:!0},aspectRatio:{type:String,default:"16:9",validator:function(e){return/^\d+:\d+$/.test(e)}},showTitle:{type:Boolean,default:!0},maxWidth:{type:String,default:"560px"},autoplay:{type:Boolean,default:!1},thumbnailQuality:{type:String,default:"standard"},iframeClass:{type:String,default:"ly-iframe"},customTitle:{type:String,default:""},customThumbnail:{type:String,default:""}},components:{VideoWrapper:s["a"],Preview:c["a"]},mounted:function(){this.$nextTick((function(){this.fetchingOembed("vimeo")}))},computed:{aspectRatioValue:function(){return this.calcAspect(this.aspectRatio)},getTitle:function(){return null!==this.videoInfo&&this.videoInfo.title?this.videoInfo.title:""},isCustomTitleExist:function(){return this.customTitle.trim().length>0},isCustomThumbnailExist:function(){return this.customThumbnail.trim().length>0}},watch:{src:function(e,t){e!==t&&(this.resetState(),this.fetchingOembed("vimeo"))}}},f=u,l=n("2877"),d=Object(l["a"])(f,r,i,!1,null,"65dba21d",null);t["a"]=d.exports},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),a=n("6eeb"),c=n("ce4e"),s=n("e893"),u=n("94ca");e.exports=function(e,t){var n,f,l,d,p,h,b=e.target,v=e.global,g=e.stat;if(f=v?r:g?r[b]||c(b,{}):(r[b]||{}).prototype,f)for(l in t){if(p=t[l],e.noTargetGet?(h=i(f,l),d=h&&h.value):d=f[l],n=u(v?l:b+(g?".":"#")+l,e.forced),!n&&void 0!==d){if(typeof p===typeof d)continue;s(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),a(f,l,p,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),i=n("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var s={adapter:c(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(o)})),e.exports=s}).call(this,n("4362"))},2877:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,c){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(e,t){return s.call(t),f(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},"2d00":function(e,t,n){var r,i,o=n("da84"),a=n("342f"),c=o.process,s=c&&c.versions,u=s&&s.v8;u?(r=u.split("."),i=r[0]+r[1]):a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=a(t),c=r.length,s=0;while(c>s)i.f(e,n=r[s++],t[n]);return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},4018:function(e,t,n){"use strict";n("1276"),n("ac1f");var r=n("bc3a").default;t["a"]={data:function(){return{clicked:!1,onceLoaded:!1,iframeEl:null,videoInfo:null,fetchingInfo:!0,isVideoFound:!1}},methods:{fetchingOembed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"youtube",t=this,n="";n="youtube"===e?"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=".concat(this.videoID,"&format=json"):"https://vimeo.com/api/oembed.json?url=".concat(this.src),r.get(n).then((function(n){t.videoInfo=n.data,"vimeo"===e&&(t.videoID=n.data.video_id),t.isVideoFound=!0})).catch((function(){t.videoInfo=null,t.isVideoFound=!1})).then((function(){t.fetchingInfo=!1,t.autoplay&&t.playVideo()}))},isPostMessageSupported:function(){return!!window.postMessage||(console.info("Client does not support postMessage"),!1)},createIframe:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"youtube";null===this.iframeEl&&e&&(this.clicked=!0,this.iframeEl=document.createElement("iframe"),"youtube"===t?this.iframeEl.setAttribute("src","https://www.youtube.com/embed/".concat(this.videoID,"?enablejsapi=1&autoplay=1")):this.iframeEl.setAttribute("src","https://player.vimeo.com/video/".concat(this.videoID,"?autoplay=1")),this.iframeEl.setAttribute("frameborder","0"),this.iframeEl.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),this.iframeEl.setAttribute("allowfullscreen","1"),this.iframeEl.setAttribute("title","".concat(this.getTitle)),this.iframeEl.setAttribute("class","".concat(this.iframeClass)),this.iframeEl.addEventListener("load",this.handleLoad),this.$el.lastChild.appendChild(this.iframeEl),this.iframeEl.focus())},resetView:function(){null!==this.iframeEl&&(this.iframeEl.remove(),this.iframeEl=null,this.clicked=!1,this.onceLoaded=!1)},resetState:function(){this.resetView(),this.clicked=!1,this.onceLoaded=!1,this.iframeEl=null,this.videoInfo=null,this.fetchingInfo=!0,this.isVideoFound=!1},calcAspect:function(e){var t=e.split(":");return"undefined"===typeof t[1]?56.25:t[1]/t[0]*100},handleLoad:function(){if(!1===this.fetchingInfo&&!this.onceLoaded)return this.onceLoaded=!0,void console.info("Video is loaded")}}}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},4840:function(e,t,n){var r=n("825a"),i=n("1c0b"),o=n("b622"),a=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[a])?t:i(n)}},4930:function(e,t,n){var r=n("605d"),i=n("2d00"),o=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!Symbol.sham&&(r?38===i:i>37&&i<41)}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=s(void 0,e[i])):n[i]=s(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),r.forEach(o,u),r.forEach(a,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=s(void 0,e[i])):n[i]=s(void 0,t[i])})),r.forEach(c,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var f=i.concat(o).concat(a).concat(c),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),a=function(e){return function(t,n,a){var c,s=r(t),u=i(s.length),f=o(a,u);if(e&&n!=n){while(u>f)if(c=s[f++],c!=c)return!0}else for(;u>f;f++)if((e||f in s)&&s[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5135:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},5270:function(e,t,n){"use strict";var r=n("c532"),i=n("c401"),o=n("2e67"),a=n("2444");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return c(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"55b3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VideoWrapper",{attrs:{aspectRatioValue:e.aspectRatioValue,maxWidth:e.maxWidth}},[e.onceLoaded?e._e():n("Preview",{on:{click:function(t){return e.createIframe(e.isVideoFound,"youtube")}}},[e.isVideoFound?[e.isCustomThumbnailExist?n("img",{attrs:{src:e.customThumbnail,alt:""},on:{error:function(t){t.target.src=e.getYoutubeThumbnail(e.videoID,e.thumbnailQuality)}}}):n("img",{attrs:{src:e.getYoutubeThumbnail(e.videoID,e.thumbnailQuality),alt:""}}),e.showTitle?[n("span",{staticClass:"ly-text"},[e._v(e._s(e.isCustomTitleExist?e.customTitle:e.getTitle))])]:e._e(),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.clicked,expression:"!clicked"}],staticClass:"ly-button-wrapper"},[e._t("button",[n("svg",{attrs:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"}},[n("path",{staticClass:"ly-large-play-button-bg",attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),n("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.clicked,expression:"clicked"}],staticClass:"ly-loader-wrapper"},[e._t("loader",[n("span",{staticClass:"ly-ring"},[n("span"),n("span"),n("span")])])],2)]:e.fetchingInfo?e._e():[n("div",{staticClass:"ly-error-container"},[n("span",{staticClass:"ly-error-icon"},[n("svg",{attrs:{fill:"#fff",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M0 0h48v48H0V0z",fill:"none"}}),n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z","fill-opacity":"0.7"}})])]),n("span",{staticClass:"ly-error-content"},[n("span",{staticClass:"ly-error-content__reason"},[n("span",[e._v("Video unavailable")])]),n("span",{staticClass:"ly-error-content__subreason"},[n("span",[e._v("This video is unavailable.")])])])])]],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.onceLoaded,expression:"onceLoaded"}],staticClass:"ly-iframe-wrapper"})],1)},i=[],o=(n("498a"),n("1276"),n("ac1f"),{methods:{getYouTubeID:function(e){return e=e.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),void 0!==e[2]?e[2].split(/[^0-9a-z_\-]/i)[0]:e[0]},pauseVideo:function(){this.isPostMessageSupported&&null!==this.iframeEl&&this.iframeEl.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")},playVideo:function(){this.isPostMessageSupported&&(null!==this.iframeEl?this.iframeEl.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.createIframe(this.isVideoFound,"youtube"))},stopVideo:function(){this.isPostMessageSupported&&null!==this.iframeEl&&this.iframeEl.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")},getYoutubeThumbnail:function(e,t){var n;if(e){"undefined"==typeof t&&(t="high");var r="maxresdefault";return"default"===t?r="default":"medium"===t?r="mqdefault":"high"===t?r="hqdefault":"standard"===t?r="sddefault":"maxres"===t&&(r="maxresdefault"),n="http://img.youtube.com/vi/"+e+"/"+r+".jpg",n}return!1}}}),a=n("4018"),c=n("777d"),s=n("727b"),u={name:"LazyYoutube",mixins:[a["a"],o],components:{VideoWrapper:c["a"],Preview:s["a"]},props:{src:{type:String,required:!0},aspectRatio:{type:String,default:"16:9",validator:function(e){return/^\d+:\d+$/.test(e)}},showTitle:{type:Boolean,default:!0},maxWidth:{type:String,default:"560px"},autoplay:{type:Boolean,default:!1},thumbnailQuality:{type:String,default:"standard"},iframeClass:{type:String,default:"ly-iframe"},customTitle:{type:String,default:""},customThumbnail:{type:String,default:""}},computed:{videoID:function(){return this.getYouTubeID(this.src)},aspectRatioValue:function(){return this.calcAspect(this.aspectRatio)},getTitle:function(){return null!==this.videoInfo?this.videoInfo.title:""},isCustomTitleExist:function(){return this.customTitle.trim().length>0},isCustomThumbnailExist:function(){return this.customThumbnail.trim().length>0}},mounted:function(){this.$nextTick((function(){this.fetchingOembed("youtube")}))},watch:{src:function(e,t){e!==t&&(this.resetState(),this.fetchingOembed("youtube"))}}},f=u,l=n("2877"),d=Object(l["a"])(f,r,i,!1,null,null,null);t["a"]=d.exports},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),a=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),a=n("7418"),c=n("d1e7"),s=n("7b0b"),u=n("44ad"),f=Object.assign,l=Object.defineProperty;e.exports=!f||i((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||o(f({},t)).join("")!=i}))?function(e,t){var n=s(e),i=arguments.length,f=1,l=a.f,d=c.f;while(i>f){var p,h=u(arguments[f++]),b=l?o(h).concat(l(h)):o(h),v=b.length,g=0;while(v>g)p=b[g++],r&&!d.call(h,p)||(n[p]=h[p])}return n}:f},6547:function(e,t,n){var r=n("a691"),i=n("1d80"),o=function(e){return function(t,n){var o,a,c=String(i(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"69f3":function(e,t,n){var r,i,o,a=n("7f9a"),c=n("da84"),s=n("861d"),u=n("9112"),f=n("5135"),l=n("c6cd"),d=n("f772"),p=n("d012"),h=c.WeakMap,b=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!s(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(a){var g=l.state||(l.state=new h),m=g.get,y=g.has,x=g.set;r=function(e,t){return t.facade=e,x.call(g,e,t),t},i=function(e){return m.call(g,e)||{}},o=function(e){return y.call(g,e)}}else{var w=d("state");p[w]=!0,r=function(e,t){return t.facade=e,u(e,w,t),t},i=function(e){return f(e,w)?e[w]:{}},o=function(e){return f(e,w)}}e.exports={set:r,get:i,has:o,enforce:b,getterFor:v}},"6eeb":function(e,t,n){var r=n("da84"),i=n("9112"),o=n("5135"),a=n("ce4e"),c=n("8925"),s=n("69f3"),u=s.get,f=s.enforce,l=String(String).split("String");(e.exports=function(e,t,n,c){var s,u=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||i(n,"name",t),s=f(n),s.source||(s.source=l.join("string"==typeof t?t:""))),e!==r?(u?!p&&e[t]&&(d=!0):delete e[t],d?e[t]=n:i(e,t,n)):d?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},7156:function(e,t,n){var r=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,a;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},"727b":function(e,t,n){"use strict";var r,i=n("8785"),o=n("9c56");t["a"]=Object(o["a"])("a")(r||(r=Object(i["a"])(['\n  text-decoration: none;\n  padding: 21px !important;\n  color: #ffffff;\n\n  img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n  }\n\n  background-size: cover;\n\n  display: block;\n  height: 100%;\n  width: 100%;\n\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n\n  &:after {\n    background: radial-gradient(circle,rgba(19, 19, 27, 0.13) 0%,rgba(0,0,0,0) 40%,rgba(86, 88, 88, 0.09) 100%) no-repeat center center fixed;\n    content: "";\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n  }\n\n  &:before {\n    content: "";\n    height: 60px;\n    padding-bottom: 50px;\n    top: 0;\n    left: 0;\n    z-index: 25;\n    background-position: top;\n    width: 100%;\n    position: absolute;\n    background-repeat: repeat-x;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n    -moz-transition: opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n    -webkit-transition: opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n    transition: opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n    pointer-events: none;\n    opacity: 0.9;\n  }\n\n  .ly-error-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background: #282828;\n\n    padding: 0 4rem;\n  }\n\n  .ly-error-icon {\n    height: 64px;\n    width: 64px;\n    min-width: 64px;\n    min-height: 64px;\n    margin-right: 12px;\n    margin-top: -4px;\n  }\n\n  .ly-error-content {\n    display: flex;\n    flex-direction: column;\n\n    text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n    font-family: "YouTube Noto", Roboto, Arial, Helvetica, sans-serif;\n\n    &__reason {\n      font-size: 22px;\n      padding-bottom: 10px;\n    }\n\n    &__subreason {\n      font-size: 18px;\n    }\n  }\n\n  button {\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: inherit;\n    text-align: inherit;\n    font-size: 100%;\n    font-family: inherit;\n    cursor: pointer;\n    line-height: inherit;\n\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 68px;\n    height: 48px;\n    transform: translate(-50%, -50%);\n    -webkit-transition: opacity .25s cubic-bezier(0, 0, 0.2, 1);\n    transition: opacity .25s cubic-bezier(0, 0, 0.2, 1);\n    z-index: 63;\n\n  }\n\n  .ly-text {\n    position: relative;\n    z-index: 26;\n    text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n    font-family: "YouTube Noto", Roboto, Arial, Helvetica, sans-serif;\n    width: 82%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    font-size: 18px;\n    color: #ffffff;\n  }\n\n  .ly-large-play-button-bg, .ly-large-play-button-bg--v {\n    -webkit-transition: fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1);\n    transition: fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1);\n    fill: #1b1b1b;\n    fill-opacity: .9\n  }\n\n  .ly-large-play-button-bg:hover, &:hover .ly-large-play-button-bg {\n    -webkit-transition: fill .1s cubic-bezier(0, 0, 0.2, 1), fill-opacity .1s cubic-bezier(0, 0, 0.2, 1);\n    transition: fill .1s cubic-bezier(0, 0, 0.2, 1), fill-opacity .1s cubic-bezier(0, 0, 0.2, 1);\n    fill: #f00;\n    fill-opacity: 1\n  }\n\n  .ly-large-play-button-bg--v:hover, &:hover .ly-large-play-button-bg--v {\n    -webkit-transition: fill .1s cubic-bezier(0, 0, 0.2, 1), fill-opacity .1s cubic-bezier(0, 0, 0.2, 1);\n    transition: fill .1s cubic-bezier(0, 0, 0.2, 1), fill-opacity .1s cubic-bezier(0, 0, 0.2, 1);\n    fill: #00adef;\n    fill-opacity: 1\n  }\n\n\n  .ly-ring {\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    z-index: 8;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    \n\n    span {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      width: 67px;\n      height: 67px;\n      margin: 6px;\n      border: 7px solid #ffffff;\n      border-radius: 50%;\n      animation: ly-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #FFFFFF transparent transparent transparent;\n\n      &:nth-child(1) {\n        animation-delay: -0.45s;\n      }\n\n      &:nth-child(2) {\n        animation-delay: -0.3s;\n      }\n\n      &:nth-child(3) {\n        animation-delay: -0.15s;\n      }\n\n    }\n  }\n\n  @keyframes ly-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n'])))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"777d":function(e,t,n){"use strict";var r,i=n("8785"),o=(n("a9e3"),n("9c56")),a={aspectRatioValue:String|Number,maxWidth:String};t["a"]=Object(o["a"])("div",a)(r||(r=Object(i["a"])(["\n\n  --aspect-ratio:  ","\n  max-width:  ",'\n  width: 100%;\n  display: inline-block;\n \n  background-color: #000000;\n  position: relative;\n  \n  & * {\n    padding:0;margin:0;overflow:hidden; box-sizing: border-box;\n  }\n\n  &:before {\n    display: block;\n    padding-top: 56.25%; /* 16:9 */\n\n    /* falls back to 16/9, but otherwise uses ratio from HTML */\n    padding-top: calc(var(--aspect-ratio) * 1%);\n    content: "";\n  }\n\n  iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n'])),(function(e){return e.aspectRatioValue?e.aspectRatioValue:56}),(function(e){return e.maxWidth?e.maxWidth:"560px"}))},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,i,o,a){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(i)&&c.push("path="+i),r.isString(o)&&c.push("domain="+o),!0===a&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),a=n("7839"),c=n("d012"),s=n("1be4"),u=n("cc12"),f=n("f772"),l=">",d="<",p="prototype",h="script",b=f("IE_PROTO"),v=function(){},g=function(e){return d+h+l+e+d+"/"+h+l},m=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+h+":";return t.style.display="none",s.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}x=r?m(r):y();var e=a.length;while(e--)delete x[p][a[e]];return x()};c[b]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[p]=i(e),n=new v,v[p]=null,n[b]=e):n=x(),void 0===t?n:o(n,t)}},"7f9a":function(e,t,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"83b9":function(e,t,n){"use strict";var r=n("d925"),i=n("e683");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8785:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("fb6a"),n("dca8");function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},8875:function(e,t,n){var r,i,o;(function(n,a){i=[],r=a,o="function"===typeof r?r.apply(t,i):r,void 0===o||(e.exports=o)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,r,i,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,c=o.exec(p.stack)||a.exec(p.stack),s=c&&c[1]||!1,u=c&&c[2]||!1,f=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");s===f&&(n=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=n.replace(r,"$1").trim());for(var d=0;d<l.length;d++){if("interactive"===l[d].readyState)return l[d];if(l[d].src===s)return l[d];if(s===f&&l[d].innerHTML&&l[d].innerHTML.trim()===i)return l[d]}return null}}return e}))},8925:function(e,t,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=n("5692"),a=RegExp.prototype.exec,c=o("native-string-replace",String.prototype.replace),s=a,u=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=u||l||f;d&&(s=function(e){var t,n,i,o,s=this,d=f&&s.sticky,p=r.call(s),h=s.source,b=0,v=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,b++),n=new RegExp("^(?:"+h+")",p)),l&&(n=new RegExp("^"+h+"$(?!\\s)",p)),u&&(t=s.lastIndex),i=a.call(d?n:s,v),d?i?(i.input=i.input.slice(b),i[0]=i[0].slice(b),i.index=s.lastIndex,s.lastIndex+=i[0].length):s.lastIndex=0:u&&i&&(s.lastIndex=s.global?i.index+i[0].length:t),l&&i&&i.length>1&&c.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),e.exports=s},"94ca":function(e,t,n){var r=n("d039"),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=s&&("function"==typeof t?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},s=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),a=n("c04e"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9c56":function(e,t,n){"use strict";var r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=function e(t){var n=r[t%r.length];return t>r.length?"".concat(e(Math.floor(t/r.length))).concat(n):n},o=function(e,t){return t.reduce((function(t,n,r){return t.concat(n,e[r+1])}),[e[0]])};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){return p(e)||h(e)||b(e)||g()}function p(e){if(Array.isArray(e))return v(e)}function h(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function b(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m="[object Object]";function y(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}function x(e,t){return function(n){return e(t(n))}}var w=Function.prototype,A=Object.prototype,S=w.toString,k=A.hasOwnProperty,C=S.call(Object),E=A.toString,j=x(Object.getPrototypeOf,Object);function O(e){return!!e&&"object"==typeof e}function T(e){if(!O(e)||E.call(e)!=m||y(e))return!1;var t=j(e);if(null===t)return!0;var n=k.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&S.call(n)==C}var R=T,_=/([A-Z])/g,I=/^ms-/;function P(e){return e.replace(_,"-$1").toLowerCase()}function N(e){return P(e).replace(I,"-ms-")}var z=N,V=function e(t,n){var r=Object.keys(t).map((function(n){return R(t[n])?e(t[n],n):"".concat(z(n),": ").concat(t[n],";")})).join(" ");return n?"".concat(n," {\n  ").concat(r,"\n}"):r},L=function e(t,n){return t.reduce((function(t,r){return void 0===r||null===r||!1===r||""===r?t:Array.isArray(r)?[].concat(d(t),d(e(r,n))):"function"===typeof r?n?t.concat.apply(t,d(e([r(n)],n))):t.concat(r):t.concat(R(r)?V(r):r.toString())}),[])},M=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return L(o(e,n))};function $(e){return e[e.length-1]}function F(e){for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}var D=function(e){return"development"===e||!e}("development"),U=!1,B="undefined"!==typeof document&&!U,q=function(){if(B){var e=document.createElement("div");return e.innerHTML="\x3c!--[if lt IE 10]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}}();function W(){var e=document.createElement("style");return e.type="text/css",e.appendChild(document.createTextNode("")),(document.head||document.getElementsByTagName("head")[0]).appendChild(e),e}var H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.speedy,r=void 0===n?!D&&!U:n,i=t.maxLength,o=void 0===i?B&&q?4e3:65e3:i;a(this,e),this.isSpeedy=r,this.sheet=void 0,this.tags=[],this.maxLength=o,this.ctr=0}return s(e,[{key:"inject",value:function(){var e=this;if(this.injected)throw new Error("already injected stylesheet!");B?(this.tags[0]=W(),this.sheet=F(this.tags[0])):this.sheet={cssRules:[],insertRule:function(t){var n={cssText:t};return e.sheet.cssRules.push(n),{serverRule:n,appendRule:function(e){return n.cssText+=e}}}},this.injected=!0}},{key:"speedy",value:function(e){if(0!==this.ctr)throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy(".concat(e,") earlier in your app, or call flush() before speedy(").concat(e,")"));this.isSpeedy=!!e}},{key:"_insert",value:function(e){try{this.sheet.insertRule(e,this.sheet.cssRules.length)}catch(t){D&&console.warn("whoops, illegal rule inserted",e)}}},{key:"insert",value:function(e){var t;if(B)if(this.isSpeedy&&this.sheet.insertRule)this._insert(e);else{var n=document.createTextNode(e);$(this.tags).appendChild(n),t={textNode:n,appendRule:function(e){return n.appendData(e)}},this.isSpeedy||(this.sheet=F($(this.tags)))}else t=this.sheet.insertRule(e);return this.ctr++,B&&this.ctr%this.maxLength===0&&(this.tags.push(W()),this.sheet=F($(this.tags))),t}},{key:"flush",value:function(){B?(this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.sheet=null,this.ctr=0):this.sheet.cssRules=[],this.injected=!1}},{key:"rules",value:function(){if(!B)return this.sheet.cssRules;var e=[];return this.tags.forEach((function(t){return e.splice.apply(e,[e.length,0].concat(d(Array.from(F(t).cssRules))))})),e}}]),e}(),Y=function(){function e(){a(this,e),this.globalStyleSheet=new H({speedy:!1}),this.componentStyleSheet=new H({speedy:!1,maxLength:40})}return s(e,[{key:"inject",value:function(){this.globalStyleSheet.inject(),this.componentStyleSheet.inject()}},{key:"flush",value:function(){this.globalStyleSheet.sheet&&this.globalStyleSheet.flush(),this.componentStyleSheet.sheet&&this.componentStyleSheet.flush()}},{key:"insert",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{global:!1},n=t.global?this.globalStyleSheet:this.componentStyleSheet;return n.insert(e)}},{key:"rules",value:function(){return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules())}},{key:"injected",get:function(){return this.globalStyleSheet.injected&&this.componentStyleSheet.injected}}]),e}(),Q=new Y;function X(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function G(e,t){return t={exports:{}},e(t,t.exports),t.exports}var J=G((function(e,t){function n(e,t){var n=1540483477,a=24,c=t^e.length,s=e.length,u=0;while(s>=4){var f=r(e,u);f=o(f,n),f^=f>>>a,f=o(f,n),c=o(c,n),c^=f,u+=4,s-=4}switch(s){case 3:c^=i(e,u),c^=e.charCodeAt(u+2)<<16,c=o(c,n);break;case 2:c^=i(e,u),c=o(c,n);break;case 1:c^=e.charCodeAt(u),c=o(c,n);break}return c^=c>>>13,c=o(c,n),c^=c>>>15,c>>>0}function r(e,t){return e.charCodeAt(t++)+(e.charCodeAt(t++)<<8)+(e.charCodeAt(t++)<<16)+(e.charCodeAt(t)<<24)}function i(e,t){return e.charCodeAt(t++)+(e.charCodeAt(t++)<<8)}function o(e,t){e|=0,t|=0;var n=65535&e,r=e>>>16,i=n*t+((r*t&65535)<<16)|0;return i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n})),K=X(J),Z=G((function(e,t){
/*
   *          __        ___
   *    _____/ /___  __/ (_)____
   *   / ___/ __/ / / / / / ___/
   *  (__  ) /_/ /_/ / / (__  )
   * /____/\__/\__, /_/_/____/
   *          /____/
   *
   * light - weight css preprocessor @licence MIT
   */
(function(t){e["exports"]=t(null)})((function e(t){var n=/^\0+/g,r=/[\0\r\f]/g,i=/: */g,o=/zoo|gra/,a=/([,: ])(transform)/g,c=/,+\s*(?![^(]*[)])/g,s=/ +\s*(?![^(]*[)])/g,u=/ *[\0] */g,f=/,\r+?/g,l=/([\t\r\n ])*\f?&/g,d=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,h=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,m=/([[}=:>])\s+/g,y=/(\{[^{]+?);(?=\})/g,x=/\s{2,}/g,w=/([^\(])(:+) */g,A=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,C=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,T="-webkit-",R="-moz-",_="-ms-",I=59,P=125,N=123,z=40,V=41,L=91,M=93,$=10,F=13,D=9,U=64,B=32,q=38,W=45,H=95,Y=42,Q=44,X=58,G=39,J=34,K=47,Z=62,ee=43,te=126,ne=0,re=12,ie=11,oe=107,ae=109,ce=115,se=112,ue=111,fe=105,le=99,de=100,pe=112,he=1,be=1,ve=0,ge=1,me=1,ye=1,xe=0,we=0,Ae=0,Se=[],ke=[],Ce=0,Ee=null,je=-2,Oe=-1,Te=0,Re=1,_e=2,Ie=3,Pe=0,Ne=1,ze="",Ve="",Le="";function Me(e,t,i,o,a){var c,s,u=0,f=0,l=0,d=0,p=0,g=0,m=0,y=0,x=0,w=0,A=0,k=0,C=0,E=0,j=0,O=0,H=0,ye=0,xe=0,ke=i.length,Ee=ke-1,je="",Oe="",Fe="",qe="",Qe="",Xe="";while(j<ke){if(m=i.charCodeAt(j),j===Ee&&f+d+l+u!==0&&(0!==f&&(m=f===K?$:K),d=l=u=0,ke++,Ee++),f+d+l+u===0){if(j===Ee&&(O>0&&(Oe=Oe.replace(r,"")),Oe.trim().length>0)){switch(m){case B:case D:case I:case F:case $:break;default:Oe+=i.charAt(j)}m=I}if(1===H)switch(m){case N:case P:case I:case J:case G:case z:case V:case Q:H=0;case D:case F:case $:case B:break;default:H=0,xe=j,p=m,j--,m=I;while(xe<ke)switch(i.charCodeAt(xe++)){case $:case F:case I:++j,m=p,xe=ke;break;case X:O>0&&(++j,m=p);case N:xe=ke}}switch(m){case N:Oe=Oe.trim(),p=Oe.charCodeAt(0),A=1,xe=++j;while(j<ke){switch(m=i.charCodeAt(j)){case N:A++;break;case P:A--;break;case K:switch(g=i.charCodeAt(j+1)){case Y:case K:j=Ye(g,j,Ee,i)}break;case L:m++;case z:m++;case J:case G:while(j++<Ee)if(i.charCodeAt(j)===m)break}if(0===A)break;j++}switch(Fe=i.substring(xe,j),p===ne&&(p=(Oe=Oe.replace(n,"").trim()).charCodeAt(0)),p){case U:switch(O>0&&(Oe=Oe.replace(r,"")),g=Oe.charCodeAt(1),g){case de:case ae:case ce:case W:c=t;break;default:c=Se}if(Fe=Me(t,c,Fe,g,a+1),xe=Fe.length,Ae>0&&0===xe&&(xe=Oe.length),Ce>0&&(c=$e(Se,Oe,ye),s=He(Ie,Fe,c,t,be,he,xe,g,a,o),Oe=c.join(""),void 0!==s&&0===(xe=(Fe=s.trim()).length)&&(g=0,Fe="")),xe>0)switch(g){case ce:Oe=Oe.replace(S,Be);case de:case ae:case W:Fe=Oe+"{"+Fe+"}";break;case oe:Oe=Oe.replace(h,"$1 $2"+(Ne>0?ze:"")),Fe=Oe+"{"+Fe+"}",Fe=1===me||2===me&&Ue("@"+Fe,3)?"@"+T+Fe+"@"+Fe:"@"+Fe;break;default:Fe=Oe+Fe,o===pe&&(qe+=Fe,Fe="")}else Fe="";break;default:Fe=Me(t,$e(t,Oe,ye),Fe,o,a+1)}Qe+=Fe,k=0,H=0,E=0,O=0,ye=0,C=0,Oe="",Fe="",m=i.charCodeAt(++j);break;case P:case I:if(Oe=(O>0?Oe.replace(r,""):Oe).trim(),(xe=Oe.length)>1)switch(0===E&&(p=Oe.charCodeAt(0),(p===W||p>96&&p<123)&&(xe=(Oe=Oe.replace(" ",":")).length)),Ce>0&&void 0!==(s=He(Re,Oe,t,e,be,he,qe.length,o,a,o))&&0===(xe=(Oe=s.trim()).length)&&(Oe="\0\0"),p=Oe.charCodeAt(0),g=Oe.charCodeAt(1),p){case ne:break;case U:if(g===fe||g===le){Xe+=Oe+i.charAt(j);break}default:if(Oe.charCodeAt(xe-1)===X)break;qe+=De(Oe,p,g,Oe.charCodeAt(2))}k=0,H=0,E=0,O=0,ye=0,Oe="",m=i.charCodeAt(++j);break}}switch(m){case F:case $:if(f+d+l+u+we===0)switch(w){case V:case G:case J:case U:case te:case Z:case Y:case ee:case K:case W:case X:case Q:case I:case N:case P:break;default:E>0&&(H=1)}f===K?f=0:ge+k===0&&o!==oe&&Oe.length>0&&(O=1,Oe+="\0"),Ce*Pe>0&&He(Te,Oe,t,e,be,he,qe.length,o,a,o),he=1,be++;break;case I:case P:if(f+d+l+u===0){he++;break}default:switch(he++,je=i.charAt(j),m){case D:case B:if(d+u+f===0)switch(y){case Q:case X:case D:case B:je="";break;default:m!==B&&(je=" ")}break;case ne:je="\\0";break;case re:je="\\f";break;case ie:je="\\v";break;case q:d+f+u===0&&ge>0&&(ye=1,O=1,je="\f"+je);break;case 108:if(d+f+u+ve===0&&E>0)switch(j-E){case 2:y===se&&i.charCodeAt(j-3)===X&&(ve=y);case 8:x===ue&&(ve=x)}break;case X:d+f+u===0&&(E=j);break;case Q:f+l+d+u===0&&(O=1,je+="\r");break;case J:case G:0===f&&(d=d===m?0:0===d?m:d);break;case L:d+f+l===0&&u++;break;case M:d+f+l===0&&u--;break;case V:d+f+u===0&&l--;break;case z:if(d+f+u===0){if(0===k)switch(2*y+3*x){case 533:break;default:A=0,k=1}l++}break;case U:f+l+d+u+E+C===0&&(C=1);break;case Y:case K:if(d+u+l>0)break;switch(f){case 0:switch(2*m+3*i.charCodeAt(j+1)){case 235:f=K;break;case 220:xe=j,f=Y;break}break;case Y:m===K&&y===Y&&xe+2!==j&&(33===i.charCodeAt(xe+2)&&(qe+=i.substring(xe,j+1)),je="",f=0)}}if(0===f){if(ge+d+u+C===0&&o!==oe&&m!==I)switch(m){case Q:case te:case Z:case ee:case V:case z:if(0===k){switch(y){case D:case B:case $:case F:je+="\0";break;default:je="\0"+je+(m===Q?"":"\0")}O=1}else switch(m){case z:E+7===j&&108===y&&(E=0),k=++A;break;case V:0===(k=--A)&&(O=1,je+="\0");break}break;case D:case B:switch(y){case ne:case N:case P:case I:case Q:case re:case D:case B:case $:case F:break;default:0===k&&(O=1,je+="\0")}}Oe+=je,m!==B&&m!==D&&(w=m)}}x=y,y=m,j++}if(xe=qe.length,Ae>0&&0===xe&&0===Qe.length&&0===t[0].length===!1&&(o!==ae||1===t.length&&(ge>0?Ve:Le)===t[0])&&(xe=t.join(",").length+2),xe>0){if(c=0===ge&&o!==oe?We(t):t,Ce>0&&(s=He(_e,qe,c,e,be,he,xe,o,a,o),void 0!==s&&0===(qe=s).length))return Xe+qe+Qe;if(qe=c.join(",")+"{"+qe+"}",me*ve!==0){switch(2!==me||Ue(qe,2)||(ve=0),ve){case ue:qe=qe.replace(v,":"+R+"$1")+qe;break;case se:qe=qe.replace(b,"::"+T+"input-$1")+qe.replace(b,"::"+R+"$1")+qe.replace(b,":"+_+"input-$1")+qe;break}ve=0}}return Xe+qe+Qe}function $e(e,t,n){var r=t.trim().split(f),i=r,o=r.length,a=e.length;switch(a){case 0:case 1:for(var c=0,s=0===a?"":e[0]+" ";c<o;++c)i[c]=Fe(s,i[c],n,a).trim();break;default:c=0;var u=0;for(i=[];c<o;++c)for(var l=0;l<a;++l)i[u++]=Fe(e[l]+" ",r[c],n,a).trim()}return i}function Fe(e,t,n,r){var i=t,o=i.charCodeAt(0);switch(o<33&&(o=(i=i.trim()).charCodeAt(0)),o){case q:switch(ge+r){case 0:case 1:if(0===e.trim().length)break;default:return i.replace(l,"$1"+e.trim())}break;case X:switch(i.charCodeAt(1)){case 103:if(ye>0&&ge>0)return i.replace(d,"$1").replace(l,"$1"+Le);break;default:return e.trim()+i.replace(l,"$1"+e.trim())}default:if(n*ge>0&&i.indexOf("\f")>0)return i.replace(l,(e.charCodeAt(0)===X?"":"$1")+e.trim())}return e+i}function De(e,t,n,r){var c,s=0,u=e+";",f=2*t+3*n+4*r;if(944===f)return qe(u);if(0===me||2===me&&!Ue(u,1))return u;switch(f){case 1015:return 97===u.charCodeAt(10)?T+u+u:u;case 951:return 116===u.charCodeAt(3)?T+u+u:u;case 963:return 110===u.charCodeAt(5)?T+u+u:u;case 1009:if(100!==u.charCodeAt(4))break;case 969:case 942:return T+u+u;case 978:return T+u+R+u+u;case 1019:case 983:return T+u+R+u+_+u+u;case 883:return u.charCodeAt(8)===W?T+u+u:u.indexOf("image-set(",11)>0?u.replace(O,"$1"+T+"$2")+u:u;case 932:if(u.charCodeAt(4)===W)switch(u.charCodeAt(5)){case 103:return T+"box-"+u.replace("-grow","")+T+u+_+u.replace("grow","positive")+u;case 115:return T+u+_+u.replace("shrink","negative")+u;case 98:return T+u+_+u.replace("basis","preferred-size")+u}return T+u+_+u+u;case 964:return T+u+_+"flex-"+u+u;case 1023:if(99!==u.charCodeAt(8))break;return c=u.substring(u.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),T+"box-pack"+c+T+u+_+"flex-pack"+c+u;case 1005:return o.test(u)?u.replace(i,":"+T)+u.replace(i,":"+R)+u:u;case 1e3:switch(c=u.substring(13).trim(),s=c.indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(s)){case 226:c=u.replace(A,"tb");break;case 232:c=u.replace(A,"tb-rl");break;case 220:c=u.replace(A,"lr");break;default:return u}return T+u+_+c+u;case 1017:if(-1===u.indexOf("sticky",9))return u;case 975:switch(s=(u=e).length-10,c=(33===u.charCodeAt(s)?u.substring(0,s):u).substring(e.indexOf(":",7)+1).trim(),f=c.charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:u=u.replace(c,T+c)+";"+u;break;case 207:case 102:u=u.replace(c,T+(f>102?"inline-":"")+"box")+";"+u.replace(c,T+c)+";"+u.replace(c,_+c+"box")+";"+u}return u+";";case 938:if(u.charCodeAt(5)===W)switch(u.charCodeAt(6)){case 105:return c=u.replace("-items",""),T+u+T+"box-"+c+_+"flex-"+c+u;case 115:return T+u+_+"flex-item-"+u.replace(C,"")+u;default:return T+u+_+"flex-line-pack"+u.replace("align-content","").replace(C,"")+u}break;case 973:case 989:if(u.charCodeAt(3)!==W||122===u.charCodeAt(4))break;case 931:case 953:if(!0===j.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?De(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):u.replace(c,T+c)+u.replace(c,R+c.replace("fill-",""))+u;break;case 962:if(u=T+u+(102===u.charCodeAt(5)?_+u:"")+u,n+r===211&&105===u.charCodeAt(13)&&u.indexOf("transform",10)>0)return u.substring(0,u.indexOf(";",27)+1).replace(a,"$1"+T+"$2")+u;break}return u}function Ue(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10),i=e.substring(n+1,e.length-1);return Ee(2!==t?r:r.replace(E,"$1"),i,t)}function Be(e,t){var n=De(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function qe(e){var t=e.length,n=e.indexOf(":",9)+1,r=e.substring(0,n).trim(),i=e.substring(n,t-1).trim();switch(e.charCodeAt(9)*Ne){case 0:break;case W:if(110!==e.charCodeAt(10))break;default:var o=i.split((i="",c)),a=0;for(n=0,t=o.length;a<t;n=0,++a){var u=o[a],f=u.split(s);while(u=f[n]){var l=u.charCodeAt(0);if(1===Ne&&(l>U&&l<90||l>96&&l<123||l===H||l===W&&u.charCodeAt(1)!==W))switch(isNaN(parseFloat(u))+(-1!==u.indexOf("("))){case 1:switch(u){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:u+=ze}}f[n++]=u}i+=(0===a?"":",")+f.join(" ")}}return i=r+i+";",1===me||2===me&&Ue(i,1)?T+i+i:i}function We(e){for(var t,n,i=0,o=e.length,a=Array(o);i<o;++i){for(var c=e[i].split(u),s="",f=0,l=0,d=0,p=0,h=c.length;f<h;++f)if(!(0===(l=(n=c[f]).length)&&h>1)){if(d=s.charCodeAt(s.length-1),p=n.charCodeAt(0),t="",0!==f)switch(d){case Y:case te:case Z:case ee:case B:case z:break;default:t=" "}switch(p){case q:n=t+Ve;case te:case Z:case ee:case B:case V:case z:break;case L:n=t+n+Ve;break;case X:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(ye>0){n=t+n.substring(8,l-1);break}default:(f<1||c[f-1].length<1)&&(n=t+Ve+n)}break;case Q:t="";default:n=l>1&&n.indexOf(":")>0?t+n.replace(w,"$1"+Ve+"$2"):t+n+Ve}s+=n}a[i]=s.replace(r,"").trim()}return a}function He(e,t,n,r,i,o,a,c,s,u){for(var f,l=0,d=t;l<Ce;++l)switch(f=ke[l].call(Je,e,d,n,r,i,o,a,c,s,u)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==t)return d}function Ye(e,t,n,r){for(var i=t+1;i<n;++i)switch(r.charCodeAt(i)){case K:if(e===Y&&r.charCodeAt(i-1)===Y&&t+2!==i)return i+1;break;case $:if(e===K)return i+1}return i}function Qe(e){return e.replace(r,"").replace(g,"").replace(m,"$1").replace(y,"$1").replace(x," ")}function Xe(e){switch(e){case void 0:case null:Ce=ke.length=0;break;default:if("function"===typeof e)ke[Ce++]=e;else if("object"===typeof e)for(var t=0,n=e.length;t<n;++t)Xe(e[t]);else Pe=0|!!e}return Xe}function Ge(e){for(var t in e){var n=e[t];switch(t){case"keyframe":Ne=0|n;break;case"global":ye=0|n;break;case"cascade":ge=0|n;break;case"compress":xe=0|n;break;case"semicolon":we=0|n;break;case"preserve":Ae=0|n;break;case"prefix":Ee=null,n?"function"!==typeof n?me=1:(me=2,Ee=n):me=0}}return Ge}function Je(t,n){if(void 0!==this&&this.constructor===Je)return e(t);var r=t,i=r.charCodeAt(0);i<33&&(i=(r=r.trim()).charCodeAt(0)),Ne>0&&(ze=r.replace(p,i===L?"":"-")),i=1,1===ge?Le=r:Ve=r;var o,a=[Le];Ce>0&&(o=He(Oe,n,a,a,be,he,0,0,0,0),void 0!==o&&"string"===typeof o&&(n=o));var c=Me(Se,a,n,0,0);return Ce>0&&(o=He(je,c,a,a,be,he,c.length,0,0,0),void 0!==o&&"string"!==typeof(c=o)&&(i=0)),ze="",Le="",Ve="",ve=0,be=1,he=1,xe*i===0?c:Qe(c)}return Je["use"]=Xe,Je["set"]=Ge,void 0!==t&&Ge(t),Je}))})),ee=(function(){function e(t,n){a(this,e),this.rules=t,this.selector=n}s(e,[{key:"generateAndInject",value:function(){Q.injected||Q.inject();var e=L(this.rules).join(""),t=this.selector?"".concat(this.selector," { ").concat(e," }"):e,n=Z("",t,!1,!1);Q.insert(n,{global:!0})}}])}(),Object.prototype),te=ee.hasOwnProperty;function ne(e,t,n){var r=e[t];te.call(e,t)&&oe(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function re(e,t,n){var r=-1,i=e.length,o=t.length,a={};while(++r<i){var c=r<o?t[r]:void 0;n(a,e[r],c)}return a}function ie(e,t){return re(e||[],t||[],ne)}function oe(e,t){return e===t||e!==e&&t!==t}var ae=ie;function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?ae(e):e}function se(e){return e&&("function"===typeof e.render||"string"===typeof e.template)}var ue=function(e){var t=function t(n,r,i,o){var a=o.attrs,c=void 0===a?[]:a,s=new e(r),u=ce(i),f=ce(n.props),d={inject:{$theme:{default:function(){return function(){return{}}}}},props:l({as:[String,Object],value:null},u,{},f),data:function(){return{localValue:this.value}},render:function(e){var t=this,r=[];for(var i in this.$slots)"default"===i?r.push(this.$slots[i]):r.push(e("template",{slot:i},this.$slots[i]));return e(se(n)?n:this.$props.as||n,{class:[this.generatedClassName],props:this.$props,domProps:l({},this.attrs,{value:this.localValue}),on:l({},this.$listeners,{input:function(e){e&&e.target&&(t.localValue=e.target.value)}}),scopedSlots:this.$scopedSlots},r)},methods:{generateAndInjectStyles:function(e){return s.generateAndInjectStyles(e)}},computed:{generatedClassName:function(){var e=this.context,t=this.attrs,n=l({},e,{},t);return this.generateAndInjectStyles(n)},theme:function(){return this.$theme()},context:function(){return l({theme:this.theme},this.$props)},attrs:function(){var e={},t=this.context;return c.forEach((function(n){var r=n;for(var i in"function"===typeof r&&(r=r(t)),r)t[i]=e[i]=r[i]})),e}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit("input",this.localValue)}},extend:function(e){for(var a=arguments.length,c=new Array(a>1?a-1:0),s=1;s<a;s++)c[s-1]=arguments[s];var u=M.apply(void 0,[e].concat(c));return t(n,r.concat(u),i,o)},withComponent:function(e){return t(e,r,i,o)}};return d};return t},fe=function(e){var t={},n=function(){function n(e){a(this,n),this.rules=e,Z.set({keyframe:!1}),Q.injected||Q.inject(),this.insertedRule=Q.insert("")}return s(n,[{key:"generateAndInjectStyles",value:function(n){var r=L(this.rules,n).join("").replace(/^\s*\/\/.*$/gm,""),i=K(r);if(!t[i]){var o=e(i);t[i]=o;var a=Z(".".concat(o),r);this.insertedRule.appendRule(a)}return t[i]}}]),n}();return n},le=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];function de(e){if("string"===typeof e)return-1!==le.indexOf(e)}function pe(e){return e&&e.methods&&"function"===typeof e.methods.generateAndInjectStyles}function he(e){return pe(e)||se(e)||de(e)}var be=function(e){var t=function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!he(n))throw new Error(n+" is not allowed for styled tag type.");var o=function(t){for(var o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];return e(n,M.apply(void 0,[t].concat(a)),r,i)};return o.attrs=function(e){return t(n,r,l({},i,{attrs:Array.prototype.concat(i.attrs,e).filter(Boolean)}))},o};return le.forEach((function(e){t[e]=t(e)})),t},ve=be(ue(fe(i)));t["a"]=ve},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),a=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),f=n("c04e"),l=n("d039"),d=n("7c73"),p=n("241c").f,h=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,g="Number",m=i[g],y=m.prototype,x=s(d(y))==g,w=function(e){var t,n,r,i,o,a,c,s,u=f(e,!1);if("string"==typeof u&&u.length>2)if(u=v(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),a=o.length,c=0;c<a;c++)if(s=o.charCodeAt(c),s<48||s>i)return NaN;return parseInt(o,r)}return+u};if(o(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var A,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(x?l((function(){y.valueOf.call(n)})):s(n)!=g)?u(new m(w(t)),n,S):w(t)},k=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;k.length>C;C++)c(m,A=k[C])&&!c(S,A)&&b(S,A,h(m,A));S.prototype=y,y.constructor=S,a(i,g,S)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b50d:function(e,t,n){"use strict";var r=n("c532"),i=n("467f"),o=n("7aac"),a=n("30b5"),c=n("83b9"),s=n("c345"),u=n("3934"),f=n("2d83");e.exports=function(e){return new Promise((function(t,n){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+b)}var v=c(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:o,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};i(t,n,a),p=null}},p.onabort=function(){p&&(n(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(m){if("json"!==e.responseType)throw m}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),l||(l=null),p.send(l)}))}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("5135"),a=n("90e3"),c=n("4930"),s=n("fdbf"),u=i("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||a;e.exports=function(e){return o(u,e)&&(c||"string"==typeof u[e])||(c&&o(f,e)?u[e]=f[e]:u[e]=l("Symbol."+e)),u[e]}},b635:function(e,t,n){"use strict";(function(e){n("cca6");var r=n("55b3");n.d(t,"b",(function(){return r["a"]}));var i=n("21c1");function o(e){e.component("LazyYoutube",r["a"]),e.component("LazyVimeo",i["a"])}n.d(t,"a",(function(){return i["a"]}));var a={install:function(e){var t=Object.assign({},{installComponents:!0});t.installComponents&&o(e)}};t["c"]=a;var c=null;"undefined"!==typeof window?c=window.Vue:"undefined"!==typeof e&&(c=e.Vue),c&&c.use(a)}).call(this,n("c8ba"))},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},bc3a:function(e,t,n){e.exports=n("cee4")},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},c345:function(e,t,n){"use strict";var r=n("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c430:function(e,t){e.exports=!1},c532:function(e,t,n){"use strict";var r=n("1d2b"),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return"undefined"===typeof e}function c(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function s(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function b(e){return"[object Date]"===i.call(e)}function v(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function m(e){return"[object Function]"===i.call(e)}function y(e){return p(e)&&m(e.pipe)}function x(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function A(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function k(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=k(e[n],t):h(t)?e[n]=k({},t):o(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function C(e,t,n){return S(t,(function(t,i){e[i]=n&&"function"===typeof t?r(t,n):t})),e}function E(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:o,isArrayBuffer:s,isBuffer:c,isFormData:u,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:a,isDate:b,isFile:v,isBlob:g,isFunction:m,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:A,forEach:S,merge:k,extend:C,trim:w,stripBOM:E}},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("d039"),i=n("5899"),o="​᠎";e.exports=function(e){return r((function(){return!!i[e]()||o[e]()!=o||i[e].name!==e}))}},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,a=n("d012");e.exports=function(e,t){var n,c=i(e),s=0,u=[];for(n in c)!r(a,n)&&r(c,n)&&u.push(n);while(t.length>s)r(c,n=t[s++])&&(~o(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},ce4e:function(e,t,n){var r=n("da84"),i=n("9112");e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},cee4:function(e,t,n){"use strict";var r=n("c532"),i=n("1d2b"),o=n("0a06"),a=n("4a7b"),c=n("2444");function s(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var u=s(c);u.Axios=o,u.create=function(e){return s(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),i=n("da84"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),c=n("9112"),s=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=o("replace"),d=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,l){var h=o(e),b=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),v=b&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!b||!v||"replace"===e&&(!u||!f||d)||"split"===e&&!p){var g=/./[h],m=n(h,""[e],(function(e,t,n,r,i){return t.exec===a?b&&!i?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=m[0],x=m[1];r(String.prototype,e,y),r(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}l&&c(RegExp.prototype[h],"sham",!0)}},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dca8:function(e,t,n){var r=n("23e7"),i=n("bb2f"),o=n("d039"),a=n("861d"),c=n("f183").onFreeze,s=Object.freeze,u=o((function(){s(1)}));r({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(e){return s&&a(e)?s(c(e)):e}})},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),c=a,s=0;s<a;s++)if(i[s]!==o[s]){c=s;break}var u=[];for(s=c;s<i.length;s++)u.push("..");return u=u.concat(o.slice(c)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===r&&(i=!1,r=a+1),46===c?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=a+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o= true?function(e,t,n){return e.substr(t,n)}:0}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),a=n("9bf2");e.exports=function(e,t){for(var n=i(t),c=a.f,s=o.f,u=0;u<n.length;u++){var f=n[u];r(e,f)||c(e,f,s(t,f))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f183:function(e,t,n){var r=n("d012"),i=n("861d"),o=n("5135"),a=n("9bf2").f,c=n("90e3"),s=n("bb2f"),u=c("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(e){a(e,u,{value:{objectID:"O"+ ++f,weakData:{}}})},p=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,u)){if(!l(e))return"F";if(!t)return"E";d(e)}return e[u].objectID},h=function(e,t){if(!o(e,u)){if(!l(e))return!0;if(!t)return!1;d(e)}return e[u].weakData},b=function(e){return s&&v.REQUIRED&&l(e)&&!o(e,u)&&d(e),e},v=e.exports={REQUIRED:!1,fastKey:p,getWeakData:h,onFreeze:b};r[u]=!0},f6b4:function(e,t,n){"use strict";var r=n("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fb15:function(e,t,n){"use strict";if(n.r(t),n.d(t,"LazyYoutube",(function(){return a["b"]})),n.d(t,"LazyVimeo",(function(){return a["a"]})),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var a=n("b635");t["default"]=a["c"]},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),a=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),f=n("b622"),l=n("1dde"),d=l("slice"),p=f("species"),h=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var n,r,f,l=s(this),d=c(l.length),v=a(e,d),g=a(void 0===t?d:t,d);if(o(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(l,v,g);for(r=new(void 0===n?Array:n)(b(g-v,0)),f=0;v<g;v++,f++)v in l&&u(r,f,l[v]);return r.length=f,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})}));
//# sourceMappingURL=vue-lazytube.umd.min.js.map

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true&");
/* harmony import */ var _studentmodulesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentmodulesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&");
/* harmony import */ var _studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studentmodulesComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _studentmodulesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a6a4450",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_template_id_2a6a4450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_0_id_2a6a4450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=template&id=2a6a4450&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "pa-0",
              attrs: {
                lg: _vm.isExpand == true ? 12 : 8,
                sm: "12",
                md: "12",
                cols: "12"
              }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-container",
                        {
                          staticClass: "pa-0",
                          attrs: { fluid: "" },
                          on: {
                            mouseover: function($event) {
                              _vm.contentHover = true
                            },
                            mouseleave: function($event) {
                              _vm.contentHover = false
                            }
                          }
                        },
                        [
                          _vm.isExpand && _vm.contentHover
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "exitFullscreen",
                                  attrs: {
                                    bottom: "",
                                    color: "secondary",
                                    dark: "",
                                    right: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.isExpand = false
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.type == "Link"
                            ? _c("LazyYoutube", {
                                ref: "youtubeLazyVideo",
                                staticStyle: {
                                  width: "100% !important",
                                  height: "100%"
                                },
                                attrs: {
                                  src: _vm.subModuleData.link,
                                  "aspect-ratio": "16:9",
                                  "thumbnail-quality": "standard"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "player-container" },
                            [
                              _vm.ext == "mp4" && _vm.type == "Video"
                                ? _c("vue-core-video-player", {
                                    attrs: {
                                      src:
                                        "/storage/" +
                                        _vm.subModuleData.file_attachment
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.type == "Document" && _vm.isSelectedModule
                            ? _c("pdfviewer", {
                                key: _vm.subModuleData.sub_module_name + 1,
                                attrs: {
                                  title: _vm.subModuleData.sub_module_name,
                                  pdf_file:
                                    "/storage/" +
                                    _vm.subModuleData.file_attachment
                                },
                                on: {
                                  closePdf: function($event) {
                                    _vm.pdfdialog = false
                                  }
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
              _vm.isSelectedModule
                ? _c(
                    "v-row",
                    { staticClass: "px-5 pt-0" },
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-tabs",
                            { attrs: { color: "primary", center: "" } },
                            [
                              _c("v-tab", { attrs: { href: "#overview" } }, [
                                _vm._v(
                                  "\n                               Overview\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-tab", { attrs: { href: "#description" } }, [
                                _vm._v(
                                  "\n                               Description\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                { attrs: { id: "overview" } },
                                [
                                  _c("v-card-title", [
                                    _c("h2", [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.getMainModulebyId(
                                              _vm.subModuleData.main_module_id
                                            ).module_name
                                          ) +
                                          " -\n                                       " +
                                          _vm._s(
                                            _vm.subModuleData.sub_module_name
                                          ) +
                                          " "
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text--primary" },
                                    [
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.getMainModulebyId(
                                              _vm.subModuleData.main_module_id
                                            ).description
                                          )
                                        }
                                      })
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                { attrs: { id: "description" } },
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text--primary" },
                                    [
                                      _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.subModuleData.description
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href:
                                              "/storage/" +
                                              _vm.subModuleData.file_attachment,
                                            target: "_blank"
                                          }
                                        },
                                        [_vm._v("Download")]
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
                : _vm._e(),
              _vm._v(" "),
              !_vm.isSelectedModule
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
                          attrs: { cols: "12", sm: "8", md: "6" }
                        },
                        [
                          _c(
                            "v-icon",
                            { staticStyle: { "font-size": "14rem" } },
                            [
                              _vm._v(
                                "\n                           mdi-book-variant-multiple\n                       "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("h1", [_vm._v(" Select Module ")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              " Selecting Module, you'll be able to view and download course content. "
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
          ),
          _vm._v(" "),
          _vm.isExpand == false && _vm.isChangeSize == false
            ? _c(
                "v-col",
                {
                  staticClass: "pa-0 border",
                  attrs: { lg: "4", cols: "12", sm: "12", md: "12" }
                },
                [
                  _c("modulesListComponent", {
                    staticStyle: { height: "100vh" },
                    attrs: { role: _vm.role, expand: _vm.removeX },
                    on: {
                      subModule: _vm.getsubModuleData,
                      listClose: _vm.expandContent
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              staticClass: "list_modal",
              attrs: { "max-width": "600px" },
              model: {
                value: _vm.listDialaog,
                callback: function($$v) {
                  _vm.listDialaog = $$v
                },
                expression: "listDialaog"
              }
            },
            [
              _vm.listDialaog
                ? _c("modulesListComponent", {
                    attrs: { expand: !_vm.removeX },
                    on: {
                      subModule: _vm.getsubModuleData,
                      listClose: _vm.expandContent
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isExpand || _vm.isChangeSize
        ? _c(
            "v-btn",
            {
              staticStyle: { "z-index": "999" },
              attrs: {
                bottom: "",
                color: "primary",
                dark: "",
                fab: "",
                fixed: "",
                right: ""
              },
              on: {
                click: function($event) {
                  _vm.listDialaog = true
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-menu")])],
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=0&id=2a6a4450&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4ad3da32", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesComponent.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2a255cac", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);