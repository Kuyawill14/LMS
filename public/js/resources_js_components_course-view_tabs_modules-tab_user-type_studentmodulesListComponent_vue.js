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
      var subModules_arr = this.getSub_module(mainModule_id); //   console.log(subModules_arr);

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
      this.$store.dispatch('fetchClassList').then(function () {
        console.log('fetching class');
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pannel-btn {\n    position: absolute;\n    top: 15px;\n    right: 47px;\n    z-index: 100;\n}\n.v-expansion-panel-content__wrap {\n    padding: 0 !important;\n}\n.course_content_header {\n    display: flex;\n    align-items: center;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-confetti/dist/vue-confetti.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-confetti/dist/vue-confetti.js ***!
  \********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";n.r(e);var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=parseFloat(t),r=parseFloat(e),o=Math.random()*(r-i)+i;return n?Math.round(o):o};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.color,i=void 0===n?"blue":n,r=e.size,o=void 0===r?10:r,a=e.dropRate,s=void 0===a?10:a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=i,this.size=o,this.dropRate=s}var e,n,o;return e=t,(n=[{key:"setup",value:function(t){var e=t.canvas,n=t.wind,r=t.windPosCoef,o=t.windSpeedMax,a=t.count;return this.canvas=e,this.wind=n,this.windPosCoef=r,this.windSpeedMax=o,this.x=i(-35,this.canvas.width+35),this.y=i(-30,-35),this.d=i(150)+10,this.particleSize=i(this.size,2*this.size),this.tilt=i(10),this.tiltAngleIncremental=(i(0,.08)+.04)*(i()<.5?-1:1),this.tiltAngle=0,this.angle=i(2*Math.PI),this.count=a+1,this.remove=!1,this}},{key:"update",value:function(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}},{key:"pastBottom",value:function(){return this.y>this.canvas.height}},{key:"draw",value:function(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}},{key:"kill",value:function(){this.remove=!0}}])&&r(e.prototype,n),o&&r(e,o),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,u(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){l(u(e.prototype),"draw",this).call(this),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}])&&s(n.prototype,i),r&&s(n,r),e}(o);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t,e,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,b(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){v(b(e.prototype),"draw",this).call(this),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}])&&y(n.prototype,i),r&&y(n,r),e}(o);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t,e,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,j(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){var t=this;P(j(e.prototype),"draw",this).call(this);var n=function(e,n,i,r,o,a){t.canvas.ctx.bezierCurveTo(e*(t.particleSize/200),n*(t.particleSize/200),i*(t.particleSize/200),r*(t.particleSize/200),o*(t.particleSize/200),a*(t.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),n(75,37,70,25,50,25),n(20,25,20,62.5,20,62.5),n(20,80,40,102,75,120),n(110,102,130,80,130,62.5),n(130,62.5,130,25,100,25),n(85,25,75,37,75,40),this.canvas.ctx.fill()}}])&&O(n.prototype,i),r&&O(n,r),e}(o);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t,e,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var R=function(t){function e(t,n){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=_(this,T(e).call(this,t))).imgEl=n,i}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){C(T(e.prototype),"draw",this).call(this),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}])&&M(n.prototype,i),r&&M(n,r),e}(o);function D(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cachedImages={}}var e,n,r;return e=t,(n=[{key:"createImageElement",value:function(t){var e=document.createElement("img");return e.setAttribute("src",t),e}},{key:"getImageElement",value:function(t){return this.cachedImages[t]||(this.cachedImages[t]=this.createImageElement(t)),this.cachedImages[t]}},{key:"getRandomParticle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.particles||[];return e.length<1?{}:e[Math.floor(Math.random()*e.length)]}},{key:"getDefaults",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:t.defaultType||"circle",size:t.defaultSize||10,dropRate:t.defaultDropRate||10,colors:t.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}},{key:"create",value:function(t){var e=this.getDefaults(t),n=this.getRandomParticle(t),r=Object.assign(e,n),o=i(0,r.colors.length-1,!0);if(r.color=r.colors[o],"circle"===r.type)return new h(r);if("rect"===r.type)return new w(r);if("heart"===r.type)return new k(r);if("image"===r.type)return new R(r,this.getImageElement(r.url));throw Error('Unknown particle type: "'.concat(r.type,'"'))}}])&&D(e.prototype,n),r&&D(e,r),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.pool=[],this.particleOptions=e,this.particleFactory=new z}var e,n,i;return e=t,(n=[{key:"update",value:function(){var t,e=this,n=[],i=[];this.items.forEach((function(t){t.update(),t.pastBottom()?t.remove||(t.setup(e.particleOptions),n.push(t)):i.push(t)})),(t=this.pool).push.apply(t,n),this.items=i}},{key:"draw",value:function(){this.items.forEach((function(t){return t.draw()}))}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}},{key:"refresh",value:function(){this.items.forEach((function(t){t.kill()})),this.pool=[]}}])&&F(e.prototype,n),i&&F(e,i),t}();function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);if(e&&!(e instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!e,this.canvas=e||t.createDefaultCanvas("confetti-canvas"),this.ctx=this.canvas.getContext("2d")}var e,n,i;return e=t,i=[{key:"createDefaultCanvas",value:function(t){var e=document.createElement("canvas");return e.style.display="block",e.style.position="fixed",e.style.pointerEvents="none",e.style.top=0,e.style.width="100vw",e.style.height="100vh",e.id=t,document.querySelector("body").appendChild(e),e}}],(n=[{key:"clear",value:function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}},{key:"updateDimensions",value:function(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}},{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}}])&&H(e.prototype,n),i&&H(e,i),t}();function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var G=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setDefaults()}var e,n,i;return e=t,(n=[{key:"setDefaults",value:function(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}},{key:"getParticleOptions",value:function(t){var e={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(e,t),e}},{key:"createParticles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getParticleOptions(t);this.particleManager=new A(e)}},{key:"getCanvasElementFromOptions",value:function(t){var e=t.canvasId,n=t.canvasElement,i=n;if(n&&!(n instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(e&&n)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(e&&!i&&(i=document.getElementById(e)),e&&!(i instanceof HTMLCanvasElement))throw new Error('Invalid options: element with id "'.concat(e,'" is not a valid HTMLCanvasElement'));return i}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.remove();var e=this.getCanvasElementFromOptions(t);this.canvas=new L(e),this.canvasEl=e,this.createParticles(t),this.setGlobalOptions(t),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}},{key:"setGlobalOptions",value:function(t){this.particlesPerFrame=t.particlesPerFrame||2,this.windSpeedMax=t.windSpeedMax||1}},{key:"stop",value:function(){this.killed=!0,this.particlesPerFrame=0}},{key:"update",value:function(t){var e=this.getCanvasElementFromOptions(t);this.canvas&&e!==this.canvasEl?this.start(t):(this.setGlobalOptions(t),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(t),this.particleManager.refresh()))}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}},{key:"mainLoop",value:function(t){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;for(var e=this.framesSinceDrop*this.particlesPerFrame;e>=1;)this.particleManager.add(),e-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}])&&B(e.prototype,n),i&&B(e,i),t}();n.d(e,"Confetti",(function(){return G}));e.default={install:function(t,e){this.installed||(this.installed=!0,t.prototype.$confetti=new G(e))}}},,,function(t,e,n){t.exports=n(0)}])}));

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

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("38da8bd1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);