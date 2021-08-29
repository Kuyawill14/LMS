(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-confetti */ "./node_modules/vue-confetti/dist/vue-confetti.js");
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_confetti__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

Vue.use((vue_confetti__WEBPACK_IMPORTED_MODULE_1___default()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'expand'],
  components: {},
  data: function data() {
    return {
      loading: true,
      temp_id: null,
      showLecture: false,
      addLink: false,
      showClasswork: false,
      subModuleForm: {},
      mainModule_id: '',
      mainModule: [],
      studentSubModuleProgress: [],
      studentSubModuleProgressForm: {},
      timespent: 0,
      time: false,
      updateTime: false,
      percentage: 0,
      firstLoad: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentModuleProgress"])),
  methods: {
    subModuleClick: function subModuleClick(isPublished, itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress) {
      if (isPublished || this.role == 'Teacher') {
        this.setTimeSpent(itemModule_id, itemSubModule_id, studentSubModuleProgress);
        this.passToMainComponent(this.getSub_module(itemModule_id), itemSubModule_id);
        this.addSubStudentProgress(itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress);
      } else {
        this.toastInfo('Module not available, The instructor still not yet publish this module.');
      }
    },
    passToMainComponent: function passToMainComponent(sub_module, id) {
      var _sub_module = sub_module.find(function (item) {
        return item.id === id;
      });

      this.$emit('subModule', _sub_module);
    },
    student_sub_module_progress: function student_sub_module_progress(id) {
      var data;
    },
    getCount: function getCount(arr, mainModule_id) {
      var count = 0;
      var subModules_arr = this.getSub_module(mainModule_id); //   //console.log(subModules_arr);

      for (var i = 0; i < subModules_arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
          if (arr[j] !== undefined && subModules_arr[i] !== undefined) {
            if (arr[j].sub_module_id == subModules_arr[i].id) {
              if (arr[j].time_spent >= subModules_arr[i].required_time) {
                count++;
              }
            }
          }
        }
      }

      return count;
    },
    //  if (arr[i].sub_module_id == sub_module.id) {
    //             if (arr[i].time_spent >= time_spent) {
    //                 this.$store.dispatch('studentmodule_progress', this.$route.params.id);
    //                 this.$store.dispatch('fetchClassList')
    //                 check = true;
    //             }
    //         }
    addSubStudentProgress: function addSubStudentProgress(mainModule_id, subModule_id, type) {
      var _this = this;

      if (this.role == 'Student') {
        this.tempSubId = subModule_id;
        this.studentSubModuleProgressForm.main_module_id = mainModule_id;
        this.studentSubModuleProgressForm.sub_module_id = subModule_id;
        this.studentSubModuleProgressForm.type = type;
        this.studentSubModuleProgressForm.course_id = this.$route.params.id;
        axios.post("/api/student_sub_module/insert", {
          studentProgress: this.studentSubModuleProgressForm
        }).then(function (res) {
          _this.$store.dispatch('studentmodule_progress', _this.$route.params.id);

          _this.$store.dispatch('fetchClassList');

          _this.fetchStudentModuleProgress();
        });
      }
    },
    checkTimeSpent: function checkTimeSpent(arr, sub_module, time_spent) {
      var check = false;

      for (var i = 0; i < arr.length; i++) {
        if (arr[i].sub_module_id == sub_module.id) {
          if (arr[i].time_spent >= time_spent) {
            // this.$store.dispatch('studentmodule_progress', this.$route.params.id);
            // this.$store.dispatch('fetchClassList')
            check = true; //   if(this.firstLoad == false) {
            //               this.$confetti.start();
            //               setTimeout(() => {
            //                     this.$confetti.stop();
            //               }, 3000);
            //         }
          }
        }
      }

      return check;
    },
    fetchClass: function fetchClass() {
      this.$store.dispatch('fetchClassList').then(function () {//console.log('fetching class');
      });
    },
    getTimeSpent: function getTimeSpent(arr, sub_module_id) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].sub_module_id == sub_module_id) {
          return arr[i].time_spent;
        }
      }

      return 0;
    },
    convertTime: function convertTime(sub_module_id, dataTime) {
      if (dataTime == -1) {
        var time = this.getTimeSpent(this.studentSubModuleProgress, sub_module_id);

        if (time === undefined) {
          time = 0;
        }

        return new Date(parseInt(time) * 1000).toISOString().substr(11, 8);
      } else {
        return new Date(parseInt(dataTime) * 1000).toISOString().substr(11, 8);
      }
    },
    setTimeSpent: function setTimeSpent(mainModule_id, subModule_id, arr) {
      var _this2 = this;

      if (this.role == 'Student') {
        clearInterval(this.ctrTime);
        clearInterval(this.updateTime);
        this.timespent = this.getTimeSpent(this.studentSubModuleProgress, subModule_id);
        this.ctrTime = false;
        this.updateTime = false;
        this.ctrTime = setInterval(function () {
          _this2.timespent++;
          _this2.time = true;
        }, 1000);
        this.updateTime = setInterval(function () {
          _this2.updateStudentTimeProgress(mainModule_id, subModule_id, _this2.timespent);
        }, 30000);
      }
    },
    updateStudentTimeProgress: function updateStudentTimeProgress(main_module_id, subModule_id, time_spent) {
      var _this3 = this;

      var studentProgress = {};
      studentProgress.main_module_id = main_module_id;
      studentProgress.sub_module_id = subModule_id;
      studentProgress.time_spent = time_spent;
      var res = axios.post("/api/student_sub_module/updatetime", {
        studentProgress: studentProgress
      }).then(function (res) {
        var data = res.data['studentProgress'];

        for (var i = 0; i < _this3.studentSubModuleProgress.length; i++) {
          if (_this3.studentSubModuleProgress[i].sub_module_id == data.sub_module_id) {
            _this3.studentSubModuleProgress[i].time_spent = data.time_spent;

            _this3.$store.dispatch('studentmodule_progress', _this3.$route.params.id);

            _this3.$store.dispatch('fetchClassList');

            break;
          }
        }
      });
    },
    fetchStudentModuleProgress: function fetchStudentModuleProgress() {
      var _this4 = this;

      axios.get("/api/student_sub_module/all/".concat(this.$route.params.id)).then(function (res) {
        _this4.studentSubModuleProgress = res.data;
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this5.fetchClass();

              _this5.fetchStudentModuleProgress();

              _this5.$store.dispatch('fetchMainModule', _this5.$route.params.id);

              _this5.$store.dispatch('fetchSubModule', _this5.$route.params.id);

              _this5.$store.dispatch('studentmodule_progress', _this5.$route.params.id);

              _this5.loading = false;
              setTimeout(function () {
                _this5.firstLoad = false;
              }, 5000);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {
    this.firstLoad = true;
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.ctrTime);
    clearInterval(this.updateTime);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.pannel-btn {\n    position: absolute;\n    top: 15px;\n    right: 47px;\n    z-index: 100;\n}\n.v-expansion-panel-content__wrap {\n    padding: 0 !important;\n}\n.course_content_header {\n    display: flex;\n    align-items: center;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/vue-confetti/dist/vue-confetti.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-confetti/dist/vue-confetti.js ***!
  \********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";n.r(e);var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=parseFloat(t),i=parseFloat(e),o=Math.random()*(i-r)+r;return n?Math.round(o):o};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.color,r=void 0===n?"blue":n,i=e.size,o=void 0===i?10:i,a=e.dropRate,c=void 0===a?10:a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=r,this.size=o,this.dropRate=c}var e,n,o;return e=t,(n=[{key:"setup",value:function(t){var e=t.canvas,n=t.wind,i=t.windPosCoef,o=t.windSpeedMax,a=t.count;return this.canvas=e,this.wind=n,this.windPosCoef=i,this.windSpeedMax=o,this.x=r(-35,this.canvas.width+35),this.y=r(-30,-35),this.d=r(150)+10,this.particleSize=r(this.size,2*this.size),this.tilt=r(10),this.tiltAngleIncremental=(r(0,.08)+.04)*(r()<.5?-1:1),this.tiltAngle=0,this.angle=r(2*Math.PI),this.count=a+1,this.remove=!1,this}},{key:"update",value:function(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}},{key:"pastBottom",value:function(){return this.y>this.canvas.height}},{key:"draw",value:function(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}},{key:"kill",value:function(){this.remove=!0}}])&&i(e.prototype,n),o&&i(e,o),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(o,t);var e,n,r,i=l(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),i.apply(this,arguments)}return e=o,(n=[{key:"draw",value:function(){s(h(o.prototype),"draw",this).call(this),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}])&&c(e.prototype,n),r&&c(e,r),o}(o);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(o,t);var e,n,r,i=m(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),i.apply(this,arguments)}return e=o,(n=[{key:"draw",value:function(){d(g(o.prototype),"draw",this).call(this),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}])&&v(e.prototype,n),r&&v(e,r),o}(o);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M(t);if(e){var i=M(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(o,t);var e,n,r,i=k(o);function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),i.apply(this,arguments)}return e=o,(n=[{key:"draw",value:function(){var t=this;j(M(o.prototype),"draw",this).call(this);var e=function(e,n,r,i,o,a){t.canvas.ctx.bezierCurveTo(e*(t.particleSize/200),n*(t.particleSize/200),r*(t.particleSize/200),i*(t.particleSize/200),o*(t.particleSize/200),a*(t.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),e(75,37,70,25,50,25),e(20,25,20,62.5,20,62.5),e(20,80,40,102,75,120),e(110,102,130,80,130,62.5),e(130,62.5,130,25,100,25),e(85,25,75,37,75,40),this.canvas.ctx.fill()}}])&&S(e.prototype,n),r&&S(e,r),o}(o);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,e,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=B(t);if(e){var i=B(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return z(this,n)}}function z(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(o,t);var e,n,r,i=D(o);function o(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(n=i.call(this,t)).imgEl=e,n}return e=o,(n=[{key:"draw",value:function(){T(B(o.prototype),"draw",this).call(this),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}])&&C(e.prototype,n),r&&C(e,r),o}(o);function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var H=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cachedImages={}}var e,n,i;return e=t,(n=[{key:"createImageElement",value:function(t){var e=document.createElement("img");return e.setAttribute("src",t),e}},{key:"getImageElement",value:function(t){return this.cachedImages[t]||(this.cachedImages[t]=this.createImageElement(t)),this.cachedImages[t]}},{key:"getRandomParticle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.particles||[];return e.length<1?{}:e[Math.floor(Math.random()*e.length)]}},{key:"getDefaults",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:t.defaultType||"circle",size:t.defaultSize||10,dropRate:t.defaultDropRate||10,colors:t.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}},{key:"create",value:function(t){var e=this.getDefaults(t),n=this.getRandomParticle(t),i=Object.assign(e,n),o=r(0,i.colors.length-1,!0);if(i.color=i.colors[o],"circle"===i.type)return new p(i);if("rect"===i.type)return new O(i);if("heart"===i.type)return new R(i);if("image"===i.type)return new F(i,this.getImageElement(i.url));throw Error('Unknown particle type: "'.concat(i.type,'"'))}}])&&A(e.prototype,n),i&&A(e,i),t}();function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.pool=[],this.particleOptions=e,this.particleFactory=new H}var e,n,r;return e=t,(n=[{key:"update",value:function(){var t,e=this,n=[],r=[];this.items.forEach((function(t){t.update(),t.pastBottom()?t.remove||(t.setup(e.particleOptions),n.push(t)):r.push(t)})),(t=this.pool).push.apply(t,n),this.items=r}},{key:"draw",value:function(){this.items.forEach((function(t){return t.draw()}))}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}},{key:"refresh",value:function(){this.items.forEach((function(t){t.kill()})),this.pool=[]}}])&&L(e.prototype,n),r&&L(e,r),t}();function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var q=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);if(e&&!(e instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!e,this.canvas=e||t.createDefaultCanvas("confetti-canvas"),this.ctx=this.canvas.getContext("2d")}var e,n,r;return e=t,r=[{key:"createDefaultCanvas",value:function(t){var e=document.createElement("canvas");return e.style.display="block",e.style.position="fixed",e.style.pointerEvents="none",e.style.top=0,e.style.width="100vw",e.style.height="100vh",e.id=t,document.querySelector("body").appendChild(e),e}}],(n=[{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}},{key:"clear",value:function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}},{key:"updateDimensions",value:function(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}}])&&W(e.prototype,n),r&&W(e,r),t}();function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var V=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setDefaults()}var e,n,r;return e=t,(n=[{key:"setDefaults",value:function(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}},{key:"getParticleOptions",value:function(t){var e={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(e,t),e}},{key:"createParticles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getParticleOptions(t);this.particleManager=new G(e)}},{key:"getCanvasElementFromOptions",value:function(t){var e=t.canvasId,n=t.canvasElement,r=n;if(n&&!(n instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(e&&n)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(e&&!r&&(r=document.getElementById(e)),e&&!(r instanceof HTMLCanvasElement))throw new Error('Invalid options: element with id "'.concat(e,'" is not a valid HTMLCanvasElement'));return r}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.remove();var e=this.getCanvasElementFromOptions(t);this.canvas=new q(e),this.canvasEl=e,this.createParticles(t),this.setGlobalOptions(t),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}},{key:"setGlobalOptions",value:function(t){this.particlesPerFrame=t.particlesPerFrame||2,this.windSpeedMax=t.windSpeedMax||1}},{key:"stop",value:function(){this.killed=!0,this.particlesPerFrame=0}},{key:"update",value:function(t){var e=this.getCanvasElementFromOptions(t);this.canvas&&e!==this.canvasEl?this.start(t):(this.setGlobalOptions(t),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(t),this.particleManager.refresh()))}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}},{key:"mainLoop",value:function(t){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;for(var e=this.framesSinceDrop*this.particlesPerFrame;e>=1;)this.particleManager.add(),e-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}])&&U(e.prototype,n),r&&U(e,r),t}();n.d(e,"Confetti",(function(){return V}));e.default={install:function(t,e){this.installed||(this.installed=!0,t.prototype.$confetti=new V(e))}}},,,function(t,e,n){t.exports=n(0)}])}));

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=template&id=167dc25c& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&");
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c& ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=template&id=167dc25c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%" } },
    [
      _c(
        "v-card",
        { staticClass: "mb-2" },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    { staticClass: "course_content_header" },
                    [
                      _vm._v(
                        "\n                    Modules Content\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-tooltip",
                        {
                          attrs: { bottom: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-progress-circular",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "float-right",
                                          attrs: {
                                            value:
                                              _vm.getStudentModuleProgress
                                                .percentage,
                                            rotate: -90,
                                            size: 40,
                                            color: "green lighten-2"
                                          }
                                        },
                                        "v-progress-circular",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("span", [
                                        _vm._v(
                                          " " +
                                            _vm._s(
                                              _vm.getStudentModuleProgress
                                                .percentage
                                            )
                                        )
                                      ])
                                    ]
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              _vm._s(_vm.getStudentModuleProgress.completed) +
                                " of\n                            " +
                                _vm._s(
                                  _vm.getStudentModuleProgress.submodules_count
                                ) +
                                " complete"
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.expand
                ? _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              return _vm.$emit("listClose")
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { color: "grey lighten-1" } }, [
                            _vm._v("mdi-close")
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
      ),
      _vm._v(" "),
      _c(
        "v-expansion-panels",
        { staticStyle: { "margin-left": "1px" }, attrs: { focusable: "" } },
        _vm._l(_vm.getmain_module, function(itemModule, i) {
          return _c(
            "v-expansion-panel",
            { key: "module" + i },
            [
              _c("v-expansion-panel-header", [
                _c(
                  "span",
                  { staticStyle: { "font-size": "1.0rem" } },
                  [
                    _c("v-icon", { staticStyle: { "font-size": "1.0rem" } }, [
                      _vm._v(
                        "\n                        mdi-folder\n                    "
                      )
                    ]),
                    _vm._v(
                      "\n                    " +
                        _vm._s(itemModule.module_name) +
                        " "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.getCount(
                            _vm.studentSubModuleProgress,
                            itemModule.id
                          ) +
                            " / " +
                            _vm.getSub_module(itemModule.id).length
                        ) +
                        "\n\n\n                "
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                { staticClass: "pa-0" },
                _vm._l(_vm.getSub_module(itemModule.id), function(
                  itemSubModule,
                  i
                ) {
                  return _c(
                    "v-list-item",
                    {
                      key: "Submodule" + i,
                      staticClass: "pl-8",
                      attrs: { link: "" },
                      on: {
                        click: function($event) {
                          return _vm.subModuleClick(
                            itemModule.isPublished,
                            itemModule.id,
                            itemSubModule.id,
                            itemSubModule.type,
                            _vm.studentSubModuleProgress
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-avatar",
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "grey lighten-1",
                              attrs: { dark: "" }
                            },
                            [
                              _vm._v(
                                "\n                                mdi-folder\n                            "
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
                          _c("v-list-item-title", [
                            _vm._v(" " + _vm._s(itemSubModule.sub_module_name))
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(" " + _vm._s(itemSubModule.type))
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              " Time spent:\n                                " +
                                _vm._s(_vm.convertTime(itemSubModule.id, -1)) +
                                "\n\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              " Required time:\n                                " +
                                _vm._s(
                                  _vm.convertTime(
                                    -1,
                                    itemSubModule.required_time
                                  )
                                ) +
                                "\n\n                            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-action",
                        [
                          _c(
                            "v-icon",
                            {
                              attrs: {
                                color: _vm.checkTimeSpent(
                                  _vm.studentSubModuleProgress,
                                  itemSubModule,
                                  itemSubModule.required_time
                                )
                                  ? "success"
                                  : "lighten"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                mdi-check"
                              )
                            ]
                          )
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
        }),
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