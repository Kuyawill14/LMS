"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_user-type_studentmodulesListComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_idle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-idle */ "./node_modules/v-idle/build/vidle.min.js");
/* harmony import */ var v_idle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_idle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _warningDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warningDialog */ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//
//
//
//
//
//

Vue.use((v_idle__WEBPACK_IMPORTED_MODULE_1___default()));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'expand'],
  components: {
    dialogWarning: _warningDialog__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      renderComponent: true,
      warning_count: 0,
      idleTimer: 30,
      idleTimer_reminder: [10, 20],
      click_id: null,
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
      firstLoad: false,
      warningDialog: false,
      confirmWarning: false,
      _mainModule_id: '',
      _subModule_id: '',
      isSelectedModule: false,
      warning_type: 0
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentModuleProgress"])),
  methods: {
    subModuleClick: function subModuleClick(isPublished, itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress) {
      if (isPublished || this.role == 'Teacher') {
        this.setTimeSpent(itemModule_id, itemSubModule_id, studentSubModuleProgress);
        this.passToMainComponent(this.getSub_module(itemModule_id), itemSubModule_id);
        this.addSubStudentProgress(itemModule_id, itemSubModule_id, itemSubModule_type, studentSubModuleProgress);
        this.isSelectedModule = true;
      } else {
        this.toastInfo('Module not available, The instructor still not yet publish this module.');
        this.isSelectedModule = false;
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
          _this.$store.dispatch('studentmodule_progress', _this.$route.params.id); // this.$store.dispatch('fetchClassList')


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
            check = true;
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
    setTimeSpent: function setTimeSpent(mainModule_id, subModule_id) {
      var _this2 = this;

      if (this.role == 'Student') {
        this._mainModule_id = mainModule_id;
        this._subModule_id = subModule_id;
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

            _this3.$store.dispatch('studentmodule_progress', _this3.$route.params.id); // this.$store.dispatch('fetchClassList')


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
    },
    confirmWarning_fn: function confirmWarning_fn() {
      this.warningDialog = !this.warningDialog;

      if (this.confirmWarning = true) {
        console.log('continue the timer');
        this.warningDialog = false;
        this.setTimeSpent(this._mainModule_id, this._subModule_id);
        this.confirmWarning = false;
      }
    },
    triggerWarning: function triggerWarning() {
      if (this.isSelectedModule) {
        this.warningDialog = true;
        this.confirmWarning = false;
        clearInterval(this.ctrTime);
        clearInterval(this.updateTime);
      }
    },
    onidle: function onidle(time) {
      this.triggerWarning();
      this.warning_type = 1;
    },
    forceRerender: function forceRerender() {
      var _this5 = this;

      // Remove my-component from the DOM
      this.renderComponent = false;
      this.$nextTick(function () {
        // Add the component back in
        _this5.renderComponent = true;
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // this.fetchClass();
              _this6.fetchStudentModuleProgress();

              _this6.$store.dispatch('fetchMainModule', _this6.$route.params.id);

              _this6.$store.dispatch('studentmodule_progress', _this6.$route.params.id);

              _this6.loading = false;
              setTimeout(function () {
                _this6.firstLoad = false;
              }, 5000);

            case 5:
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
  beforeMount: function beforeMount() {
    var self = this;
    $(window).bind('touchstart', function () {
      self.forceRerender();
    });
    $(window).bind('touchmove', function () {
      self.forceRerender();
    });
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    window.addEventListener("onbeforeunload", this.preventNav);
    $(window).blur(function () {
      var _this7 = this;

      var blurTimer = setTimeout(function () {
        var activeElement = document.activeElement;
        var iframeElement = document.querySelector('iframe');

        if (activeElement === iframeElement) {
          //execute your code here
          //we only want to listen for the first time we click into the iframe
          window.removeEventListener('blur', _this7.onBlur);
          iframeElement.blur();
          clearInterval('blurTimer');
        } else {
          self.triggerWarning();
        }
      }, 0);
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.ctrTime);
    clearInterval(this.updateTime);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['timer_count', 'warning_type'],
  data: function data() {
    return {
      timer: 3,
      failed_timer: 5,
      isTimerClickedFailed: true,
      isTimerDone: false,
      _warning_type: this.warning_type,
      tmp_timer: null,
      counter: 1
    };
  },
  methods: {
    fn_timer_done: function fn_timer_done() {
      if (this.isTimerDone) {
        this.$emit('toggleCloaseDialog');
      }
    },
    checkTimerDone: function checkTimerDone(failed_timer) {
      var _this = this;

      this.timer = this.warning_type == 0 ? this.timer : this.timer_count;

      if (failed_timer != null) {
        this.timer = failed_timer;
      }

      var tmp_timer = setInterval(function () {
        _this.timer = _this.timer - 1;

        if (_this.timer == 0) {
          _this.isTimerDone = true;
          clearInterval(tmp_timer);

          _this.checkTimerFailed();
        }
      }, 1000);
    },
    checkTimerFailed: function checkTimerFailed() {
      var _this2 = this;

      var _failed_timer = 30;
      this.failed_timer = 10;
      this.isTimerClickedFailed = false;
      var tmp_timer_failed = setInterval(function () {
        _this2.failed_timer = _this2.failed_timer - 1;

        if (_this2.failed_timer == 0) {
          _this2.isTimerClickedFailed = true;
          _this2.isTimerDone = false;

          _this2.checkTimerDone(_failed_timer * _this2.counter);

          clearInterval(tmp_timer_failed);
          _this2.counter++;
        }
      }, 1000);
    }
  },
  mounted: function mounted() {
    this.checkTimerDone();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-list-item--disabled[data-v-167dc25c] {\n    background: #F6F6F6;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_1_id_167dc25c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_1_id_167dc25c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_1_id_167dc25c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/v-idle/build/vidle.min.js":
/*!************************************************!*\
  !*** ./node_modules/v-idle/build/vidle.min.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var Vue=_interopDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")),Vidle=Vue.extend({render:function(t){return t("div",{class:"v-idle"},this.display)},props:{duration:{type:Number,default:300},events:{type:Array,default:function(){return["mousemove","keypress"]}},loop:{type:Boolean,default:!1},reminders:{type:Array,default:function(){return[]}},wait:{type:Number,default:0}},data:function(){return{display:"",timer:void 0,start:0,counter:void 0,diff:0,minutes:"",seconds:""}},mounted:function(){var e=this;setTimeout(function(){e.start=Date.now(),e.setDisplay(),e.$nextTick(function(){e.setTimer();for(var t=e.events.length-1;0<=t;--t)window.addEventListener(e.events[t],e.clearTimer)})},1e3*this.wait)},methods:{setDisplay:function(){var t,e;this.diff=this.duration-((Date.now()-this.start)/1e3|0),this.diff<0&&!this.loop||(this.shouldRemind(),t=this.diff/60|0,e=this.diff%60|0,this.minutes=""+(t<10?"0"+t:t),this.seconds=""+(e<10?"0"+e:e),this.display=this.minutes+":"+this.seconds)},shouldRemind:function(){0<this.reminders.length&&this.reminders.includes(this.diff)&&this.remind()},countdown:function(){this.setDisplay(),this.diff<=0&&this.loop&&(this.start=Date.now()+1e3)},idle:function(){this.$emit("idle")},remind:function(){this.$emit("remind",this.diff)},setTimer:function(){this.timer=window.setInterval(this.idle,1e3*this.duration),this.counter=window.setInterval(this.countdown,1e3)},clearTimer:function(){clearInterval(this.timer),clearInterval(this.counter),this.setDisplay(),this.start=Date.now(),this.diff=0,this.setTimer()}},beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.counter);for(var t=this.events.length-1;0<=t;--t)window.removeEventListener(this.events[t],this.clearTimer)}}),Vidle$1={install:function(t){t.component("v-idle",Vidle)}};module.exports=Vidle$1;


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true&");
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _studentmodulesListComponent_vue_vue_type_style_index_1_id_167dc25c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "167dc25c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warningDialog.vue?vue&type=template&id=3b022bba& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba&");
/* harmony import */ var _warningDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warningDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _warningDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__.render,
  _warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./warningDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_style_index_1_id_167dc25c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=style&index=1&id=167dc25c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true& ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentmodulesListComponent_vue_vue_type_template_id_167dc25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_warningDialog_vue_vue_type_template_id_3b022bba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./warningDialog.vue?vue&type=template&id=3b022bba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/studentmodulesListComponent.vue?vue&type=template&id=167dc25c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.warningDialog,
            callback: function($$v) {
              _vm.warningDialog = $$v
            },
            expression: "warningDialog"
          }
        },
        [
          _vm.warningDialog
            ? _c("dialogWarning", {
                attrs: {
                  timer_count: _vm.idleTimer,
                  warning_type: _vm.warning_type
                },
                on: { toggleCloaseDialog: _vm.confirmWarning_fn }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
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
                      _vm.isSelectedModule && _vm.renderComponent
                        ? _c("v-idle", {
                            staticStyle: { opacity: "0%" },
                            attrs: {
                              reminders: _vm.idleTimer_reminder,
                              loop: true,
                              duration: _vm.idleTimer
                            },
                            on: { idle: _vm.onidle }
                          })
                        : _vm._e(),
                      _vm._v(" "),
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
                      attrs: {
                        link: "",
                        disabled: _vm.click_id == itemSubModule.id
                      },
                      on: {
                        click: function($event) {
                          ;(_vm.click_id = itemSubModule.id),
                            _vm.subModuleClick(
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
                                "\n                            mdi-folder\n                        "
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
                              " Time spent:\n                            " +
                                _vm._s(_vm.convertTime(itemSubModule.id, -1)) +
                                "\n\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [
                            _vm._v(
                              " Required time:\n                            " +
                                _vm._s(
                                  _vm.convertTime(
                                    -1,
                                    itemSubModule.required_time
                                  )
                                ) +
                                "\n\n                        "
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
                            [_vm._v("\n                            mdi-check")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/user-type/warningDialog.vue?vue&type=template&id=3b022bba& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-3" },
    [
      _c(
        "div",
        { staticClass: "mb-3 pa-2" },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { staticClass: "text-center mb-0 pb-0", attrs: { cols: "12" } },
                [
                  _c(
                    "v-avatar",
                    { attrs: { tile: "", size: "120" } },
                    [
                      _c("v-img", {
                        attrs: {
                          src:
                            "https://c.tenor.com/jFesPO4xs8kAAAAM/cat-watching-you.gif"
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
                "v-col",
                { staticClass: "text-center mt-0 pt-0", attrs: { cols: "12" } },
                [
                  _c("div", { staticClass: "primary--text display-1" }, [
                    _vm._v("Oops...")
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
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "text-center" },
                [
                  _c("p", { staticClass: "body-1" }, [
                    _vm._v(
                      "\n\n                    " +
                        _vm._s(
                          _vm.warning_type == 1
                            ? "You have been inactive for " +
                                _vm.timer_count +
                                " seconds. Your timer will be paused."
                            : "You have leave the module's page. Your timer will be paused."
                        ) +
                        "\n                    \n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ml-3 mr-3 mt-2",
                      attrs: {
                        color: "primary",
                        disabled:
                          !_vm.isTimerDone || _vm.isTimerClickedFailed == true,
                        rounded: "",
                        large: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.fn_timer_done()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Confirm " +
                          _vm._s(_vm.timer == 0 ? "" : _vm.timer) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  !_vm.isTimerClickedFailed
                    ? _c("span", [
                        _vm._v(" Please click "),
                        _c("b", [_vm._v("Confirm")]),
                        _vm._v(
                          " before " + _vm._s(_vm.failed_timer) + " seconds"
                        )
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);