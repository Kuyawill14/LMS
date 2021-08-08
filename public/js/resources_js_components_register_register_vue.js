(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_register_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      isRegistering: false,
      valid: true,
      role: ['Teacher', 'Student'],
      invalid_classcode_message: null,
      form: new Form({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        class_code: "",
        role: "Student"
      }),
      loginForm: new Form({
        email: "",
        password: ""
      }),
      nameRules: [function (v) {
        return !!v || 'Field is required';
      }, function (v) {
        return v && v.length <= 20 || 'Name must be less than 20 characters';
      }],
      loginEmailRules: [function (v) {
        return !!v || "Field is required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      RoleRules: [function (v) {
        return !!v || "Field is required";
      }],
      ClassCodeRules: [function (v) {
        return !!v || "Class code is required";
      }],
      show: false,
      show1: false,
      rules: {
        required: function required(value) {
          return !!value || "Field is required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "min 6 characters";
        }
      }
    };
  },
  computed: {
    passwordMatch: function passwordMatch() {
      var _this = this;

      return function () {
        return _this.password === _this.password_confirmation || "Password must match";
      };
    }
  },
  methods: {
    Test: function Test() {
      console.log(this.form);
    },
    validate: function validate() {
      var _this2 = this;

      if (this.$refs.RegisterForm.validate()) {
        this.isRegistering = true;
        this.form.post('/api/register').then(function (res) {
          if (res.status == 201) {
            _this2.toastSuccess('User Registration Successfull!');

            _this2.login(res.data.email, _this2.form.password);

            _this2.$refs.RegisterForm.reset();

            _this2.valid = true;
          } else if (res.status == 202) {
            _this2.toastError(res.data.message);

            _this2.invalid_classcode_message = res.data.message;
          }
        })["catch"](function (e) {
          _this2.toastError('Something went wrong while registering!');
        });
        this.isRegistering = false;
      }
    },
    login: function login(email, password) {
      var _this3 = this;

      this.loginForm.email = email;
      this.loginForm.password = password;
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        _this3.loginForm.post('/api/login').then(function (res) {
          if (res.status == 200) {
            _this3.$store.dispatch('clear_current_user');

            _this3.$router.push({
              path: "/"
            });
          } else {
            _this3.toastError(res.data);
          }
        });
      });
    }
  }
});

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

/***/ "./resources/js/components/register/register.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/register/register.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=98047358& */ "./resources/js/components/register/register.vue?vue&type=template&id=98047358&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/register/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/register/register.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/register/register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/register/register.vue?vue&type=template&id=98047358&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/register/register.vue?vue&type=template&id=98047358& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_98047358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=98047358& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/register/register.vue?vue&type=template&id=98047358& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-container",
        {
          class:
            _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
              ? ""
              : "fill-height",
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                {
                  staticClass: "ma-0 pa-0",
                  attrs: { cols: "12", sm: "12", md: "12" }
                },
                [
                  _c(
                    "v-row",
                    {
                      class:
                        _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                          ? "fill-height"
                          : "",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("v-col", {
                        staticClass: "primary ma-0 pa-0",
                        style:
                          _vm.$vuetify.breakpoint.xs ||
                          _vm.$vuetify.breakpoint.sm
                            ? "height:30vh;"
                            : "height:100vh",
                        attrs: { cols: "12", md: "4" }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.xs
                            ? "ma-0 pa-5"
                            : "ma-0 pa-0",
                          attrs: { cols: "12", md: "8" }
                        },
                        [
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-left",
                                  attrs: { cols: "12", md: "8", sm: "10" }
                                },
                                [
                                  _c("vue-element-loading", {
                                    attrs: {
                                      active: _vm.isRegistering,
                                      spinner: "bar-fade-scale"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "RegisterForm",
                                          staticClass: "text-center ",
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
                                            {
                                              attrs: {
                                                align: "center",
                                                justify: "center"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 text-left mt-5",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "h1",
                                                    {
                                                      staticClass:
                                                        " display-1 font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v("Sign Up "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-regular"
                                                        },
                                                        [_vm._v("Now")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    { staticClass: "mt-2" },
                                                    [
                                                      _vm._v(
                                                        "Login Your Account "
                                                      ),
                                                      _c(
                                                        "router-link",
                                                        {
                                                          staticClass:
                                                            "blue--text",
                                                          attrs: {
                                                            to: {
                                                              name: "login"
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Click here")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "ma-0 pa-0 mt-2 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      rules: _vm.nameRules,
                                                      label: "First Name",
                                                      name: "firstName",
                                                      type: "text",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value: _vm.form.firstName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "firstName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.firstName"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "middleName"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Middle Name",
                                                      rules: _vm.nameRules,
                                                      name: "middleName",
                                                      type: "text",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.middleName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "middleName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.middleName"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "lastName"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Last Name",
                                                      rules: _vm.nameRules,
                                                      name: "lastname",
                                                      type: "text",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value: _vm.form.lastName,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "lastName",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.lastName"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "email"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "Email",
                                                      name: "Email",
                                                      rules:
                                                        _vm.loginEmailRules,
                                                      type: "email",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value: _vm.form.email,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "email",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.email"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("HasError", {
                                                    staticClass: "error--text",
                                                    attrs: {
                                                      form: _vm.form,
                                                      field: "password"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "append-icon": _vm.show
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      id: "password",
                                                      label: "Password",
                                                      name: "password",
                                                      type: _vm.show
                                                        ? "text"
                                                        : "password",
                                                      color: "primary",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.rules.min
                                                      ],
                                                      counter: ""
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.show = !_vm.show
                                                      }
                                                    },
                                                    model: {
                                                      value: _vm.form.password,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "password",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.password"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "append-icon": _vm.show1
                                                        ? "mdi-eye"
                                                        : "mdi-eye-off",
                                                      id:
                                                        "passwordConfirmation",
                                                      label: "Confirm Password",
                                                      name: "password",
                                                      type: _vm.show1
                                                        ? "text"
                                                        : "password",
                                                      color: "primary",
                                                      rules: [
                                                        _vm.rules.required,
                                                        _vm.passwordMatch
                                                      ],
                                                      counter: ""
                                                    },
                                                    on: {
                                                      "click:append": function(
                                                        $event
                                                      ) {
                                                        _vm.show1 = !_vm.show1
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form
                                                          .password_confirmation,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "password_confirmation",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.password_confirmation"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mb-0 pb-0",
                                                    attrs: {
                                                      label: "Class Code",
                                                      rules: _vm.ClassCodeRules,
                                                      name: "lastname",
                                                      hint:
                                                        "Please provide a valid class code to be able to register",
                                                      type: "text",
                                                      color: "primary"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.class_code,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "class_code",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.class_code"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass: "error--text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.invalid_classcode_message
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass: "ma-0 pa-0 mb-1",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      items: _vm.role,
                                                      rules: _vm.RoleRules,
                                                      label: "Role"
                                                    },
                                                    model: {
                                                      value: _vm.form.role,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "role",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.role"
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
                                                    "ma-0 pa-0 text-left mt-2",
                                                  attrs: { cols: "12", md: "8" }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "mb-5",
                                                      attrs: {
                                                        loading:
                                                          _vm.isRegistering,
                                                        disabled: !_vm.valid,
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: _vm.validate
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { staticClass: "mr-3" },
                                                        [_vm._v("mdi-login")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                                            Sign Up\n                                                        "
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
                          ),
                          _vm._v(" "),
                          _c("v-container", {
                            staticClass: "pb-5 pl-5 pr-5",
                            attrs: { "ma-0": "", "pa-0": "" }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);