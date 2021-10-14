"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var viewSubmission = function viewSubmission() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_submissionView_viewSubmission_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./submissionView/viewSubmission */ "./resources/js/components/Classwork_View/type/classworkType/submissionView/viewSubmission.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails', 'totalPoints', 'totalQuestion'],
  components: {
    viewSubmission: viewSubmission
  },
  data: function data() {
    return {
      status: null,
      updateDetails: {},
      isCommenting: false,
      comment: null,
      isLoaded: true,
      selected: 0,
      //statusDetails: [],
      isViewingSubmission: false,
      DateToday: null,
      ScrollPosistion: 0,
      isOpenQuiz: false,
      confirmStartDialog: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser', 'statusDetails'])),
  methods: {
    handleScroll: function handleScroll(event) {
      this.ScrollPosistion = window.scrollY;
    },
    CheckFileIcon: function CheckFileIcon(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') {
        return 'mdi-image';
      } else if (ext == 'pdf') {
        return 'mdi-file-pdf';
      } else if (ext == 'txt') {
        return 'mdi-note-text-outline';
      } else if (ext == 'docx' || ext == 'doc') {
        return 'mdi-file-word';
      } else if (ext == 'link') {
        return 'mdi-file-link';
      }
    },
    CheckFileIconColor: function CheckFileIconColor(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') {
        return 'info';
      } else if (ext == 'pdf') {
        return 'red';
      } else if (ext == 'txt') {
        return 'primary';
      } else if (ext == 'docx' || ext == 'doc') {
        return 'blue';
      } else if (ext == 'link') {
        return 'green';
      } else {
        return 'primary';
      }
    },
    format_date: function format_date(value) {
      if (value) {
        //return moment(String(value)).format('dddd, h:mm a')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
      }
    },
    format_date1: function format_date1(value) {
      if (value) {
        //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
      }
    },
    start: function start() {
      this.isOpenQuiz = true;

      if (this.totalQuestion != 0 && (this.status == null || this.status == '')) {
        //this.UpdateStatus( this.classworkDetails.id);
        this.$router.push({
          name: 'quizstart',
          params: {
            id: this.$route.params.id
          },
          query: {
            clwk: this.classworkDetails.id
          }
        });
      } else {
        this.isOpenQuiz = false;
      }
    },
    continueQuiz: function continueQuiz(id) {
      this.isOpenQuiz = true;
      this.$router.push({
        name: 'quizstart',
        params: {
          id: this.$route.params.id
        },
        query: {
          clwk: id
        }
      });
    },
    checkStatus: function checkStatus() {
      var _this = this;

      axios.get('/api/student/check-status/' + this.classworkDetails.id).then(function (res) {
        _this.status = res.data.status;
        _this.statusDetails = res.data;
        _this.isLoaded = false;
      });
    },
    UpdateStatus: function UpdateStatus(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.updateDetails.id = id;
                _this2.updateDetails.class_classwork_id = _this2.classworkDetails.class_classwork_id;
                _this2.updateDetails.type = _this2.classworkDetails.type;
                axios.post('/api/student/update-status', _this2.updateDetails).then(function (res) {
                  if (res.data.success == true) {
                    _this2.$router.push({
                      name: 'quizstart',
                      params: {
                        id: _this2.$route.params.id
                      },
                      query: {
                        clwk: _this2.classworkDetails.id
                      }
                    });
                  } else {
                    _this2.toastError('Something went wrong while loading this classwork!');
                  }
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addComment: function addComment(details) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {};
                _this3.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.course_id = _this3.$route.params.id;
                data.comment = _this3.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  //console.log(res.data);
                  if (res.status == 200) {
                    _this3.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic
                    });

                    _this3.comment = null;
                  }
                });
                _this3.isCommenting = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this4.classworkDetails.comments.splice(index, 1);
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    DownLoadFile: function DownLoadFile(file) {
      window.open(file, '_blank');
    }
  },
  created: function created() {//this.checkStatus();
    //this.isLoaded = false;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  mounted: function mounted() {
    this.isLoaded = false;
    var newDate = new Date();
    this.DateToday = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  /*   beforeRouteEnter(to, from, next) {
       next(vm => {
           //vm.isExamStart = true
           vm.checkStatus();
       });
   }, */

});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nspan img{\n    max-width: 100% !important;\n    max-height: 50rem !important;\n}\n/* width */\n::-webkit-scrollbar {\nwidth: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\nbackground: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\nbackground: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\nbackground: #555;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectiveComponent.vue?vue&type=template&id=1835845c& */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&");
/* harmony import */ var _ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectiveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ObjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=template&id=1835845c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c& ***!
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
    "div",
    [
      _c("vue-element-loading", {
        attrs: {
          active: _vm.isOpenQuiz,
          duration: "0.7",
          spinner: "line-scale",
          color: "#EF6C00",
          size: "50",
          "is-full-screen": ""
        }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        {
          class: _vm.$vuetify.breakpoint.mdAndUp ? "pa-3" : "pa-0",
          attrs: {
            justify: "center",
            "align-content": "center",
            "no-gutters": ""
          }
        },
        [
          !_vm.$vuetify.breakpoint.mdAndUp
            ? _c(
                "v-col",
                {
                  class: _vm.selected == 1 ? "mb-2" : "",
                  attrs: { cols: "12" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "pa-1",
                      attrs: { elevation: "1", outlined: "" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { top: "" },
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
                                                      rounded: "",
                                                      icon: "",
                                                      text: ""
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$router.push(
                                                          { name: "classwork" }
                                                        )
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
                                                  { attrs: { dark: "" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-arrow-left-thick"
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
                                    1749575868
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Back to classworks")])
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
          _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 1
            ? _c(
                "v-col",
                {
                  staticClass: "mb-0 pb-0 ",
                  attrs: { cols: "12", md: "12", lg: "4", xl: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "pa-3",
                      attrs: {
                        elevation: _vm.$vuetify.breakpoint.mdAndUp ? 1 : 0,
                        outlined: ""
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _vm.$vuetify.breakpoint.lgAndUp
                            ? _c(
                                "v-col",
                                {
                                  staticClass: "mb-0 pb-0",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { top: "" },
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
                                                          rounded: "",
                                                          icon: "",
                                                          text: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.$router.push(
                                                              {
                                                                name:
                                                                  "classwork"
                                                              }
                                                            )
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
                                                      { attrs: { dark: "" } },
                                                      [
                                                        _vm._v(
                                                          "mdi-arrow-left-thick"
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
                                        1749575868
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Back to classworks")])
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "ma-0 pa-0" },
                            [
                              _c(
                                "div",
                                { staticClass: "pt-2 pl-4 pr-4 pb-2" },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-comment")
                                  ]),
                                  _vm._v(
                                    "Private Comments\r\n                        "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                {
                                  staticClass: "mb-0 pb-0",
                                  staticStyle: {
                                    "overflow-y": "scroll",
                                    "scrollbar-width": "thin"
                                  },
                                  attrs: {
                                    "max-height": _vm.$vuetify.breakpoint
                                      .mdAndUp
                                      ? "350"
                                      : "500"
                                  }
                                },
                                _vm._l(_vm.classworkDetails.comments, function(
                                  item,
                                  i
                                ) {
                                  return _c(
                                    "v-list-item",
                                    { key: i, staticClass: "mb-0 pb-0" },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src:
                                                item.profile_pic == null ||
                                                item.profile_pic == ""
                                                  ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                    item.name
                                                  : item.profile_pic
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", {
                                            domProps: {
                                              innerHTML: _vm._s(item.name)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", {
                                            domProps: {
                                              innerHTML: _vm._s(item.content)
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-action",
                                        [
                                          _c(
                                            "v-menu",
                                            {
                                              attrs: { "offset-x": "" },
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
                                                                  icon: ""
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
                                                                  small: "",
                                                                  color:
                                                                    "grey lighten-1"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-dots-vertical"
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
                                              )
                                            },
                                            [
                                              _vm._v(" "),
                                              _c(
                                                "v-list",
                                                {
                                                  attrs: { dense: "", nav: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.DeleteComment(
                                                            item.id,
                                                            i
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v("Remove")
                                                      ])
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
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                { staticClass: "mb-0 pb-0 mt-0 pt-0" },
                                [
                                  _c(
                                    "v-list-item",
                                    { staticClass: "mb-0 pb-0" },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src:
                                                _vm.get_CurrentUser
                                                  .profile_pic == null ||
                                                _vm.get_CurrentUser
                                                  .profile_pic == ""
                                                  ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                    _vm.get_CurrentUser
                                                      .firstName +
                                                    " " +
                                                    _vm.get_CurrentUser.lastName
                                                  : _vm.get_CurrentUser
                                                      .profile_pic
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        { staticClass: "ma-0 pa-0" },
                                        [
                                          _c("v-textarea", {
                                            staticClass: "pa-0 mt-7",
                                            attrs: {
                                              loading: _vm.isCommenting,
                                              "prepend-avatar":
                                                "mdi-emoticon-dead",
                                              filled: "",
                                              rounded: "",
                                              dense: "",
                                              "auto-grow": "",
                                              rows: "1",
                                              "clear-icon": "mdi-close-circle",
                                              clearable: "",
                                              placeholder: "Comment",
                                              type: "text"
                                            },
                                            model: {
                                              value: _vm.comment,
                                              callback: function($$v) {
                                                _vm.comment = $$v
                                              },
                                              expression: "comment"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-action",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                loading: _vm.isCommenting,
                                                icon: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.addComment(
                                                    _vm.classworkDetails
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("mdi-send")]
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
            : _vm._e(),
          _vm._v(" "),
          !_vm.isViewingSubmission
            ? _c(
                "v-col",
                {
                  class: !_vm.$vuetify.breakpoint.mdAndUp
                    ? "mt-1 pl-0 pt-1"
                    : "pt-0 pl-5",
                  attrs: { cols: "12", md: "10", lg: "8", xl: "8" }
                },
                [
                  _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 0
                    ? _c(
                        "div",
                        [
                          _c("vue-element-loading", {
                            attrs: {
                              active: _vm.isLoaded,
                              spinner: "bar-fade-scale"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            {
                              staticClass: "pa-3",
                              attrs: {
                                elevation: _vm.$vuetify.breakpoint.mdAndUp
                                  ? 1
                                  : 0,
                                outlined: ""
                              }
                            },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-right pt-1" },
                                        [
                                          _vm.statusDetails.status ==
                                          "Submitted"
                                            ? _c(
                                                "v-chip",
                                                { attrs: { color: "success" } },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { left: "" } },
                                                    [_vm._v("mdi-check")]
                                                  ),
                                                  _vm._v(
                                                    " Score: " +
                                                      _vm._s(
                                                        _vm.statusDetails
                                                          .score +
                                                          "/" +
                                                          _vm.statusDetails
                                                            .totalPoints
                                                      )
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-row", {
                                        staticStyle: { height: "4vh" }
                                      }),
                                      _vm._v(" "),
                                      _vm.statusDetails.status == "Submitted"
                                        ? _c("v-divider")
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass:
                                            "d-flex flex-row justify-space-between",
                                          attrs: { "ma-0": "", "pa-0": "" }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "mx-2",
                                              attrs: {
                                                fab: "",
                                                dark: "",
                                                color:
                                                  _vm.statusDetails.status ==
                                                  "Submitted"
                                                    ? "success"
                                                    : "primary"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { "x-large": "" } },
                                                [
                                                  _vm._v(
                                                    "\r\n                                    " +
                                                      _vm._s(
                                                        _vm.statusDetails
                                                          .status == "Submitted"
                                                          ? "mdi-check"
                                                          : "mdi-book-open-variant"
                                                      ) +
                                                      "\r\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "float-right mt-3",
                                              attrs: { fab: "" }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "text-md-h5" },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: {
                                                        large: "",
                                                        color: "primary"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "mdi-book-clock-outline"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .duration
                                                      ) +
                                                      " mins"
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "caption ml-2" },
                                                [
                                                  _vm._v(
                                                    "Due " +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .availability
                                                          ? _vm.format_date(
                                                              _vm
                                                                .classworkDetails
                                                                .to_date
                                                            )
                                                          : "always Available"
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
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pl-7 pr-5",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-sm-body-2 text-md-h5 text-lg-h6 text-xl-h6"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.classworkDetails.title)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "pt-2 d-flex flex-row "
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "captions" },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-circle-medium")
                                              ]),
                                              _vm._v(
                                                _vm._s(_vm.totalQuestion) +
                                                  " Question"
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "captions" },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-circle-medium")
                                              ]),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.classworkDetails.points
                                                ) + " Points"
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider")
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pl-10 pr-5 pb-5",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "text-sm-body-2 ",
                                        staticStyle: { "max-width": "98%" },
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.classworkDetails.instruction
                                          )
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.classworkDetails.attachment != null
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: " pb-5 pl-5 pr-5",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _vm.classworkDetails.attachment !=
                                          null
                                            ? _c(
                                                "div",
                                                { staticClass: "overline" },
                                                [_vm._v("Attachments")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            { staticClass: "ma-0 pa-0" },
                                            _vm._l(
                                              _vm.classworkDetails.attachment,
                                              function(item, i) {
                                                return _c(
                                                  "v-list-item",
                                                  {
                                                    key: i,
                                                    staticClass: "ma-0 pa-0"
                                                  },
                                                  [
                                                    _c(
                                                      "v-list-item-avatar",
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              large: "",
                                                              color: _vm.CheckFileIconColor(
                                                                item.extension
                                                              )
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            " +
                                                                _vm._s(
                                                                  _vm.CheckFileIcon(
                                                                    item.extension
                                                                  )
                                                                ) +
                                                                "\r\n                                            "
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
                                                        _c("v-hover", {
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key: "default",
                                                                fn: function(
                                                                  ref
                                                                ) {
                                                                  var hover =
                                                                    ref.hover
                                                                  return [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        class: hover
                                                                          ? "blue--text"
                                                                          : "",
                                                                        staticStyle: {
                                                                          cursor:
                                                                            "pointer"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.DownLoadFile(
                                                                              item.attachment
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            item.name
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                }
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        })
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
                                  _vm.classworkDetails.availability == 0
                                    ? _c(
                                        "v-col",
                                        {
                                          class: _vm.$vuetify.breakpoint.mdAndUp
                                            ? "pl-10 pr-5 pb-5 text-right"
                                            : "pb-5",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          (_vm.statusDetails.status == null ||
                                            _vm.statusDetails.status == "") &&
                                          _vm.statusDetails.status !=
                                            "Submitted" &&
                                          _vm.classworkDetails.publish == null
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    block: !_vm.$vuetify
                                                      .breakpoint.mdAndUp,
                                                    rounded: "",
                                                    color: "primary",
                                                    loading: _vm.isOpenQuiz,
                                                    dark:
                                                      _vm.totalQuestion != 0,
                                                    disabled:
                                                      _vm.totalQuestion == 0
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      ;(_vm.statusDetails
                                                        .status == null ||
                                                        _vm.statusDetails
                                                          .status == "") &&
                                                      _vm.statusDetails
                                                        .status != "Submitted"
                                                        ? (_vm.confirmStartDialog = !_vm.confirmStartDialog)
                                                        : ""
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v("Take Quiz"),
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
                                                        "mdi-book-arrow-right-outline"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.statusDetails.status ==
                                            "Taking" &&
                                          _vm.classworkDetails.publish == null
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    block: !_vm.$vuetify
                                                      .breakpoint.mdAndUp,
                                                    rounded: "",
                                                    color: "primary",
                                                    loading: _vm.isOpenQuiz,
                                                    dark:
                                                      _vm.totalQuestion != 0,
                                                    disabled:
                                                      _vm.totalQuestion == 0
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.continueQuiz(
                                                        _vm.classworkDetails.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v("Continue"),
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
                                                        "mdi-book-arrow-right-outline"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.statusDetails.status ==
                                            "Submitted" &&
                                          _vm.statusDetails.reviewAnswer == 1
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    block: !_vm.$vuetify
                                                      .breakpoint.mdAndUp,
                                                    rounded: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.isViewingSubmission = !_vm.isViewingSubmission
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v("View Submission"),
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
                                                        "mdi-book-arrow-right-outline"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm.classworkDetails.availability == 1
                                    ? _c(
                                        "v-col",
                                        {
                                          class: _vm.$vuetify.breakpoint.mdAndUp
                                            ? "pl-10 pr-5 pb-5 text-right"
                                            : "pb-5",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _vm.DateToday >=
                                              _vm.format_date1(
                                                _vm.classworkDetails.from_date
                                              )
                                                ? _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      (_vm.statusDetails
                                                        .status == null ||
                                                        _vm.statusDetails
                                                          .status == "") &&
                                                      _vm.statusDetails
                                                        .status !=
                                                        "Submitted" &&
                                                      _vm.classworkDetails
                                                        .publish == null
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                block: !_vm
                                                                  .$vuetify
                                                                  .breakpoint
                                                                  .mdAndUp,
                                                                rounded: "",
                                                                loading:
                                                                  _vm.isOpenQuiz,
                                                                color:
                                                                  "primary",
                                                                dark:
                                                                  _vm.totalQuestion !=
                                                                  0,
                                                                disabled:
                                                                  _vm.totalQuestion ==
                                                                  0
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  ;(_vm
                                                                    .statusDetails
                                                                    .status ==
                                                                    null ||
                                                                    _vm
                                                                      .statusDetails
                                                                      .status ==
                                                                      "") &&
                                                                  _vm
                                                                    .statusDetails
                                                                    .status !=
                                                                    "Submitted"
                                                                    ? (_vm.confirmStartDialog = !_vm.confirmStartDialog)
                                                                    : ""
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Take Quiz"
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
                                                                    "mdi-book-arrow-right-outline"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.statusDetails
                                                        .status == "Taking" &&
                                                      _vm.classworkDetails
                                                        .publish == null
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                block: !_vm
                                                                  .$vuetify
                                                                  .breakpoint
                                                                  .mdAndUp,
                                                                rounded: "",
                                                                loading:
                                                                  _vm.isOpenQuiz,
                                                                color:
                                                                  "primary",
                                                                dark: ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.continueQuiz(
                                                                    _vm
                                                                      .classworkDetails
                                                                      .id
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                        Continue"
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
                                                                    "mdi-book-arrow-right-outline"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.statusDetails
                                                        .status ==
                                                        "Submitted" &&
                                                      _vm.statusDetails
                                                        .reviewAnswer == 1
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                block: !_vm
                                                                  .$vuetify
                                                                  .breakpoint
                                                                  .mdAndUp,
                                                                rounded: "",
                                                                color: "primary"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.isViewingSubmission = !_vm.isViewingSubmission
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "View Submission"
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
                                                                    "mdi-book-arrow-right-outline"
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                : _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _vm.classworkDetails
                                                        .publish == null
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                block: !_vm
                                                                  .$vuetify
                                                                  .breakpoint
                                                                  .mdAndUp,
                                                                rounded: "",
                                                                color:
                                                                  "primary",
                                                                disabled: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\r\n                                    Not Yet Available"
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
                                                                    "mdi-book-arrow-right-outline"
                                                                  )
                                                                ]
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
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-row", { staticStyle: { height: "1vh" } })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _c(
                "v-col",
                {
                  class: !_vm.$vuetify.breakpoint.mdAndUp
                    ? "mt-1 pl-0 pt-1"
                    : "pt-0 pl-5",
                  attrs: { cols: "12", md: "10", lg: "8", xl: "8" }
                },
                [
                  _c("vue-element-loading", {
                    attrs: { active: _vm.isLoaded, spinner: "bar-fade-scale" }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "pa-3",
                      attrs: { elevation: "1", outlined: "" }
                    },
                    [
                      _c("viewSubmission", {
                        attrs: {
                          classworkDetails: _vm.classworkDetails,
                          details: _vm.statusDetails
                        },
                        on: {
                          closeViewing: function($event) {
                            _vm.isViewingSubmission = !_vm.isViewingSubmission
                          }
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
      ),
      _vm._v(" "),
      !_vm.$vuetify.breakpoint.mdAndUp
        ? _c(
            "v-bottom-navigation",
            {
              attrs: {
                app: "",
                grow: "",
                value: _vm.selected,
                color: "primary"
              }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mb-12",
                  on: {
                    click: function($event) {
                      _vm.selected = 0
                    }
                  }
                },
                [
                  _c("span", [_vm._v("Details")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-book-information-variant")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.selected = 1
                    }
                  }
                },
                [
                  _c("span", [_vm._v("Comment")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-comment")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "320" },
          model: {
            value: _vm.confirmStartDialog,
            callback: function($$v) {
              _vm.confirmStartDialog = $$v
            },
            expression: "confirmStartDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h6" }, [
                _vm._v("\r\n          Start Quiz?\r\n        ")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\r\n          Are you sure to take this quiz?\r\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.confirmStartDialog = false
                        }
                      }
                    },
                    [_vm._v("\r\n            Cancel\r\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.start()
                        }
                      }
                    },
                    [_vm._v("\r\n            Start\r\n          ")]
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