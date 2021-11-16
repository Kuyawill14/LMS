(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_TeacherQuizPreview_previewTimer_vue"],{

/***/ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js":
/*!************************************************************************!*\
  !*** ./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js ***!
  \************************************************************************/
/***/ (function(module) {

/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  var MILLISECONDS_SECOND = 1000;
  var MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
  var MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
  var MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;
  var EVENT_VISIBILITY_CHANGE = 'visibilitychange';
  var index = {
    name: 'countdown',
    data: function data() {
      return {
        /**
         * It is counting down.
         * @type {boolean}
         */
        counting: false,

        /**
         * The absolute end time.
         * @type {number}
         */
        endTime: 0,

        /**
         * The remaining milliseconds.
         * @type {number}
         */
        totalMilliseconds: 0
      };
    },
    props: {
      /**
       * Starts the countdown automatically when initialized.
       */
      autoStart: {
        type: Boolean,
        default: true
      },

      /**
       * Emits the countdown events.
       */
      emitEvents: {
        type: Boolean,
        default: true
      },

      /**
       * The interval time (in milliseconds) of the countdown progress.
       */
      interval: {
        type: Number,
        default: 1000,
        validator: function validator(value) {
          return value >= 0;
        }
      },

      /**
       * Generate the current time of a specific time zone.
       */
      now: {
        type: Function,
        default: function _default() {
          return Date.now();
        }
      },

      /**
       * The tag name of the component's root element.
       */
      tag: {
        type: String,
        default: 'span'
      },

      /**
       * The time (in milliseconds) to count down from.
       */
      time: {
        type: Number,
        default: 0,
        validator: function validator(value) {
          return value >= 0;
        }
      },

      /**
       * Transforms the output props before render.
       */
      transform: {
        type: Function,
        default: function _default(props) {
          return props;
        }
      }
    },
    computed: {
      /**
       * Remaining days.
       * @returns {number} The computed value.
       */
      days: function days() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_DAY);
      },

      /**
       * Remaining hours.
       * @returns {number} The computed value.
       */
      hours: function hours() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_DAY / MILLISECONDS_HOUR);
      },

      /**
       * Remaining minutes.
       * @returns {number} The computed value.
       */
      minutes: function minutes() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_HOUR / MILLISECONDS_MINUTE);
      },

      /**
       * Remaining seconds.
       * @returns {number} The computed value.
       */
      seconds: function seconds() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_MINUTE / MILLISECONDS_SECOND);
      },

      /**
       * Remaining milliseconds.
       * @returns {number} The computed value.
       */
      milliseconds: function milliseconds() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_SECOND);
      },

      /**
       * Total remaining days.
       * @returns {number} The computed value.
       */
      totalDays: function totalDays() {
        return this.days;
      },

      /**
       * Total remaining hours.
       * @returns {number} The computed value.
       */
      totalHours: function totalHours() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_HOUR);
      },

      /**
       * Total remaining minutes.
       * @returns {number} The computed value.
       */
      totalMinutes: function totalMinutes() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_MINUTE);
      },

      /**
       * Total remaining seconds.
       * @returns {number} The computed value.
       */
      totalSeconds: function totalSeconds() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_SECOND);
      }
    },
    render: function render(createElement) {
      return createElement(this.tag, this.$scopedSlots.default ? [this.$scopedSlots.default(this.transform({
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        milliseconds: this.milliseconds,
        totalDays: this.totalDays,
        totalHours: this.totalHours,
        totalMinutes: this.totalMinutes,
        totalSeconds: this.totalSeconds,
        totalMilliseconds: this.totalMilliseconds
      }))] : this.$slots.default);
    },
    watch: {
      $props: {
        deep: true,
        immediate: true,

        /**
         * Update the countdown when props changed.
         */
        handler: function handler() {
          this.totalMilliseconds = this.time;
          this.endTime = this.now() + this.time;

          if (this.autoStart) {
            this.start();
          }
        }
      }
    },
    methods: {
      /**
       * Starts to countdown.
       * @public
       * @emits Countdown#start
       */
      start: function start() {
        if (this.counting) {
          return;
        }

        this.counting = true;

        if (this.emitEvents) {
          /**
           * Countdown start event.
           * @event Countdown#start
           */
          this.$emit('start');
        }

        if (document.visibilityState === 'visible') {
          this.continue();
        }
      },

      /**
       * Continues the countdown.
       * @private
       */
      continue: function _continue() {
        var _this = this;

        if (!this.counting) {
          return;
        }

        var delay = Math.min(this.totalMilliseconds, this.interval);

        if (delay > 0) {
          if (window.requestAnimationFrame) {
            var init;
            var prev;

            var step = function step(now) {
              if (!init) {
                init = now;
              }

              if (!prev) {
                prev = now;
              }

              var range = now - init;

              if (range >= delay // Avoid losing time about one second per minute (now - prev ≈ 16ms) (#43)
              || range + (now - prev) / 2 >= delay) {
                _this.progress();
              } else {
                _this.requestId = requestAnimationFrame(step);
              }

              prev = now;
            };

            this.requestId = requestAnimationFrame(step);
          } else {
            this.timeoutId = setTimeout(function () {
              _this.progress();
            }, delay);
          }
        } else {
          this.end();
        }
      },

      /**
       * Pauses the countdown.
       * @private
       */
      pause: function pause() {
        if (window.requestAnimationFrame) {
          cancelAnimationFrame(this.requestId);
        } else {
          clearTimeout(this.timeoutId);
        }
      },

      /**
       * Progresses to countdown.
       * @private
       * @emits Countdown#progress
       */
      progress: function progress() {
        if (!this.counting) {
          return;
        }

        this.totalMilliseconds -= this.interval;

        if (this.emitEvents && this.totalMilliseconds > 0) {
          /**
           * Countdown progress event.
           * @event Countdown#progress
           */
          this.$emit('progress', {
            days: this.days,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
            totalDays: this.totalDays,
            totalHours: this.totalHours,
            totalMinutes: this.totalMinutes,
            totalSeconds: this.totalSeconds,
            totalMilliseconds: this.totalMilliseconds
          });
        }

        this.continue();
      },

      /**
       * Aborts the countdown.
       * @public
       * @emits Countdown#abort
       */
      abort: function abort() {
        if (!this.counting) {
          return;
        }

        this.pause();
        this.counting = false;

        if (this.emitEvents) {
          /**
           * Countdown abort event.
           * @event Countdown#abort
           */
          this.$emit('abort');
        }
      },

      /**
       * Ends the countdown.
       * @public
       * @emits Countdown#end
       */
      end: function end() {
        if (!this.counting) {
          return;
        }

        this.pause();
        this.totalMilliseconds = 0;
        this.counting = false;

        if (this.emitEvents) {
          /**
           * Countdown end event.
           * @event Countdown#end
           */
          this.$emit('end');
        }
      },

      /**
       * Updates the count.
       * @private
       */
      update: function update() {
        if (this.counting) {
          this.totalMilliseconds = Math.max(0, this.endTime - this.now());
        }
      },

      /**
       * visibility change event handler.
       * @private
       */
      handleVisibilityChange: function handleVisibilityChange() {
        switch (document.visibilityState) {
          case 'visible':
            this.update();
            this.continue();
            break;

          case 'hidden':
            this.pause();
            break;
        }
      }
    },
    mounted: function mounted() {
      document.addEventListener(EVENT_VISIBILITY_CHANGE, this.handleVisibilityChange);
    },
    beforeDestroy: function beforeDestroy() {
      document.removeEventListener(EVENT_VISIBILITY_CHANGE, this.handleVisibilityChange);
      this.pause();
    }
  };

  return index;

})));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['duration'],
  components: {
    Countdown: (_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      EndDate: null,
      endAt: null,
      timeSpent: null,
      isTimesUps: false,
      StartTime: new Date().getTime(),
      CurrentUserTime: {},
      CurrentTime: new Date().getTime()
    };
  },
  methods: {
    startTimer: function startTimer() {
      var due = this.duration * 60 * 1000;
      this.EndDate = this.StartTime + due - this.CurrentTime;
      console.log(this.CurrentTime);
    }
  },
  mounted: function mounted() {
    this.startTimer();
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewTimer.vue?vue&type=template&id=42789c43& */ "./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43&");
/* harmony import */ var _previewTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewTimer.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _previewTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__.render,
  _previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewTimer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_previewTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_previewTimer_vue_vue_type_template_id_42789c43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./previewTimer.vue?vue&type=template&id=42789c43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/TeacherQuizPreview/previewTimer.vue?vue&type=template&id=42789c43& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "pb-0 mb-0" },
      [
        _c("countdown", {
          ref: "QuizTimer",
          staticClass: "mb-0 pb-0",
          attrs: { time: _vm.EndDate, interval: 100, tag: "p" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var hours = ref.hours
                var minutes = ref.minutes
                var seconds = ref.seconds
                return [
                  [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex justify-center mt-0 pt-0 mb-0 pb-0"
                      },
                      [
                        _c("div", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "text-md-h6" }, [
                            _vm._v(
                              " " + _vm._s(hours >= 10 ? hours : "0" + hours)
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "caption" }, [
                            _vm._v("hours")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-weight-bold mt-1" }, [
                          _vm._v(":")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "text-md-h6" }, [
                            _vm._v(
                              _vm._s(minutes >= 10 ? minutes : "0" + minutes)
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "caption" }, [
                            _vm._v("minutes")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-weight-bold mt-1" }, [
                          _vm._v(":")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("div", { staticClass: "text-md-h6" }, [
                            _vm._v(
                              _vm._s(seconds >= 10 ? seconds : "0" + seconds)
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "caption" }, [
                            _vm._v("seconds")
                          ])
                        ])
                      ]
                    )
                  ]
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);