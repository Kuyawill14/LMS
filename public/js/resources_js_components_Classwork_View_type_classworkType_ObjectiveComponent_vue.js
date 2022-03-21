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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isUpdatingComment: false,
      isUpdatingComment_id: null,
      isUpdatingComment_old_data: null,
      status: null,
      updateDetails: {},
      isCommenting: false,
      comment: '',
      isLoaded: true,
      selected: 0,
      //statusDetails: [],
      isViewingSubmission: false,
      DateToday: null,
      ScrollPosistion: 0,
      isOpenQuiz: false,
      confirmStartDialog: false,
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser', 'statusDetails'])),
  methods: {
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
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('MMMM, D YYYY, h:mm a');
      }
    },
    comment_date: function comment_date(value) {
      if (value) {
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('MMMM, DD YYYY, h:mm a');
      }
    },
    format_date1: function format_date1(value) {
      if (value) {
        //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
      }
    },
    saveActivityLog: function saveActivityLog(description) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/objective-logs/logs', {
                  classwork_id: _this.$route.query.clwk,
                  description: description
                }).then(function (res) {
                  console.log('saved activity');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    start: function start() {
      this.classworkDetails.status = "Taking";
      this.isOpenQuiz = true;

      if (this.totalQuestion != 0 && (this.status == null || this.status == '')) {
        //this.UpdateStatus( this.classworkDetails.id);

        /*   let routeData = this.$router.resolve({
              name: 'quizstart',
              params: {
                  id: this.$route.params.id
              },
              query: {
                  clwk: this.classworkDetails.id
              }
          })
         
          window.open(routeData.href, 'winname',
              "directories=0,titlebar=0,toolbar=no,location=0,status=0,menubar=no,scrollbars=yes,resizable=no,width=" +
              screen.availWidth + ",height=" + screen.availHeight,
              "screenX=1,screenY=1,left=1,top=1,fullscreen=yes"); */
        this.confirmStartDialog = false;
        this.saveActivityLog('Student started taking the exam').then(function () {//location.reload();
        });
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
      /*  let routeData = this.$router.resolve({
           name: 'quizstart',
           params: {
               id: this.$route.params.id
           },
           query: {
               clwk: id
           }
       })
        window.open(routeData.href, 'winname',
           "directories=0,titlebar=0,toolbar=no,location=0,status=0,menubar=no,scrollbars=yes,resizable=no,width=" +
           screen.availWidth + ",height=" + screen.availHeight,
           "screenX=1,screenY=1,left=1,top=1,fullscreen=1");
       this.saveActivityLog('Student continue taking the exam').then(() => {
           location.reload();
       }); */
    },
    checkStatus: function checkStatus() {
      var _this2 = this;

      axios.get('/api/student/check-status/' + this.classworkDetails.id).then(function (res) {
        _this2.status = res.data.status;
        _this2.statusDetails = res.data;
        _this2.isLoaded = false;
      });
    },
    UpdateStatus: function UpdateStatus(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.updateDetails.id = id;
                _this3.updateDetails.class_classwork_id = _this3.classworkDetails.class_classwork_id;
                _this3.updateDetails.type = _this3.classworkDetails.type;
                axios.post('/api/student/update-status', _this3.updateDetails).then(function (res) {
                  if (res.data.success == true) {
                    _this3.$router.push({
                      name: 'quizstart',
                      params: {
                        id: _this3.$route.params.id
                      },
                      query: {
                        clwk: _this3.classworkDetails.id
                      }
                    });
                  } else {
                    _this3.toastError('Something went wrong while loading this classwork!');
                  }
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addComment: function addComment(details) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this4.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.course_id = _this4.$route.params.id;
                data.comment = _this4.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  if (res.status == 200) {
                    _this4.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic,
                      u_id: _this4.get_CurrentUser.user_id,
                      comment_date: new Date()
                    });

                    _this4.comment = '';
                  }
                });
                _this4.isCommenting = false;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this5.classworkDetails.comments.splice(index, 1);
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    UpdateComment: function UpdateComment(content, id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                axios.put('/api/post/comment/update/' + id, {
                  comment: content
                }).then(function (res) {
                  _this6.isUpdatingComment = false;
                  _this6.isUpdatingComment_id = null;
                  _this6.isUpdatingComment_old_data = null;
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    DownLoadFile: function DownLoadFile(file) {
      window.open(file, '_blank');
    },
    CheckScore: function CheckScore() {
      var _this7 = this;

      if (this.classworkDetails.Sub_id != null && this.classworkDetails.status == 'Submitted') {
        axios.get('/api/question/StudentScore/' + this.classworkDetails.Sub_id).then(function (res) {
          _this7.classworkDetails.score = res.data;
        });
      }
    }
  },
  created: function created() {//this.checkStatus();
    //this.isLoaded = false;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  mounted: function mounted() {
    this.isLoaded = false;
    var newDate = new Date();
    this.DateToday = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
    this.CheckScore();
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
___CSS_LOADER_EXPORT___.push([module.id, "\nspan img {\n    max-width: 100% !important;\n    max-height: 50rem !important;\n}\n\n/* width */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n.commentContent img {\n    max-width: 100% !important;\n    max-height: 20rem !important;\n}\n.commentContent img {\n    max-height: 10rem !important;\n}\n.CommentEditor>iframe {\n    width: 100% !important;\n    height: 20rem !important;\n}\n.CommentEditor>.ql-editor img {\n\n    max-height: 25rem !important;\n}\n.CommentEditor>.ql-container {\n    max-height: 70rem;\n}\ndiv.ql-tooltip {\n    left: 0px !important;\n    top: -8px !important;\n}\ndiv>.ql-tooltip-arrow {\n    display: none !important;\n}\n\n", ""]);
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
      _c(
        "div",
        { attrs: { transition: "slide-y-reverse-transition" } },
        [
          !_vm.$vuetify.breakpoint.mdAndUp
            ? _c(
                "v-app-bar",
                { attrs: { flat: "", app: "", color: "primary" } },
                [
                  !_vm.$vuetify.breakpoint.mdAndUp
                    ? _c(
                        "v-btn",
                        {
                          attrs: { dark: "", rounded: "", icon: "", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.$router.push({ name: "classwork" })
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-arrow-left-thick")])],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-divider", { attrs: { vertical: "" } }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.classworkDetails.status == "Submitted"
                    ? _c("div", { staticClass: "white--text Subtitle-1" }, [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v("Score: ")
                        ]),
                        _vm._v(" "),
                        _c("span", {}, [
                          _vm._v(
                            _vm._s(
                              _vm.classworkDetails.score.toFixed() +
                                " / " +
                                _vm.classworkDetails.points
                            )
                          )
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("vue-element-loading", {
        attrs: {
          active: _vm.isOpenQuiz,
          duration: "0.7",
          text: "Loading Quiz",
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
          _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 1
            ? _c(
                "v-col",
                {
                  staticClass: "mb-0 pb-0 ",
                  attrs: { cols: "12", md: "4", lg: "4", xl: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      class: _vm.$vuetify.breakpoint.mdAndUp ? "pa-3" : "pa-1",
                      attrs: {
                        elevation: _vm.$vuetify.breakpoint.mdAndUp ? 1 : 0,
                        outlined: _vm.$vuetify.breakpoint.mdAndUp
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _vm.$vuetify.breakpoint.mdAndUp
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
                                    "Private Comments\n                            "
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
                                      ? "550"
                                      : "500"
                                  }
                                },
                                _vm._l(_vm.classworkDetails.comments, function(
                                  item,
                                  i
                                ) {
                                  return _c(
                                    "v-list-item",
                                    {
                                      key: i,
                                      staticClass: "mb-0 pb-0 mt-0 pt-0"
                                    },
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
                                          _vm.isUpdatingComment &&
                                          _vm.isUpdatingComment_id == item.id
                                            ? _c(
                                                "div",
                                                [
                                                  _c("v-list-item-title", {
                                                    staticClass: "mb-2",
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("editor", {
                                                    staticClass:
                                                      "CommentEditor",
                                                    attrs: {
                                                      options: _vm.options,
                                                      placeholder: "Comment",
                                                      theme: "bubble"
                                                    },
                                                    model: {
                                                      value: item.content,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "content",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "item.content"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-end mt-2"
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass: "mr-2",
                                                          attrs: {
                                                            small: "",
                                                            dark: "",
                                                            color: "success"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.UpdateComment(
                                                                item.content,
                                                                item.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("update")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            small: "",
                                                            dark: "",
                                                            color: "red"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              ;(_vm.isUpdatingComment = false),
                                                                (_vm.isUpdatingComment_id = null),
                                                                (item.content =
                                                                  _vm.isUpdatingComment_old_data)
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Cancel")]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _c(
                                                "v-alert",
                                                {
                                                  staticClass:
                                                    "rounded-xl mt-0 mb-0",
                                                  attrs: { color: "#F5F5F5" }
                                                },
                                                [
                                                  _c("v-list-item-title", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-space-between"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            class:
                                                              item.u_id ==
                                                              _vm
                                                                .get_CurrentUser
                                                                .id
                                                                ? "mb-0 pb-0 pt-2"
                                                                : "pt-2 pb-2",
                                                            staticStyle: {
                                                              "max-width": "90%"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.name)
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        item.u_id ==
                                                        _vm.get_CurrentUser.id
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mb-0 pb-0 mt-0"
                                                              },
                                                              [
                                                                _c(
                                                                  "v-menu",
                                                                  {
                                                                    attrs: {
                                                                      "offset-x":
                                                                        ""
                                                                    },
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
                                                                                        small:
                                                                                          "",
                                                                                        color:
                                                                                          "grey lighten-1"
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                                                    mdi-dots-vertical"
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
                                                                        attrs: {
                                                                          dense:
                                                                            "",
                                                                          nav:
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-list-item",
                                                                          {
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                ;(_vm.isUpdatingComment = true),
                                                                                  (_vm.isUpdatingComment_id =
                                                                                    item.id),
                                                                                  (_vm.isUpdatingComment_old_data =
                                                                                    item.content)
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-list-item-title",
                                                                              [
                                                                                _vm._v(
                                                                                  "Edit"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ],
                                                                          1
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
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
                                                                            _c(
                                                                              "v-list-item-title",
                                                                              [
                                                                                _vm._v(
                                                                                  "Remove"
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
                                                      ]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-subtitle",
                                                    { staticClass: "mb-3" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.comment_date(
                                                            item.comment_date
                                                          )
                                                        ) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("div", [
                                                    _c("span", {
                                                      staticClass:
                                                        "commentContent",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          item.content
                                                        )
                                                      }
                                                    })
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
                                          _c("editor", {
                                            staticClass: "CommentEditor",
                                            attrs: {
                                              options: _vm.options,
                                              placeholder: "Comment",
                                              theme: "bubble"
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
                  attrs: { cols: "12", md: "8", lg: "8", xl: "8" }
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
                              class: _vm.$vuetify.breakpoint.mdAndUp
                                ? "pa-3"
                                : "pa-1",
                              attrs: {
                                elevation: _vm.$vuetify.breakpoint.mdAndUp
                                  ? 1
                                  : 0,
                                outlined: _vm.$vuetify.breakpoint.mdAndUp
                              }
                            },
                            [
                              _c(
                                "v-row",
                                [
                                  _vm.$vuetify.breakpoint.mdAndUp
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "text-right pt-1" },
                                            [
                                              _vm.classworkDetails.status ==
                                              "Submitted"
                                                ? _c(
                                                    "v-chip",
                                                    {
                                                      attrs: {
                                                        color: "success"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        { attrs: { left: "" } },
                                                        [_vm._v("mdi-check")]
                                                      ),
                                                      _vm._v(
                                                        " Score:\n                                    " +
                                                          _vm._s(
                                                            _vm.classworkDetails.score.toFixed() +
                                                              "/" +
                                                              _vm
                                                                .classworkDetails
                                                                .points
                                                          ) +
                                                          "\n                                "
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
                                          _vm.classworkDetails.status ==
                                          "Submitted"
                                            ? _c("v-divider")
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e(),
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
                                                color: "primary"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { large: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                        mdi-book-open-variant\n                                    "
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
                                                    "\n                                        " +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .duration
                                                      ) +
                                                      "\n                                        " +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .duration > 1
                                                          ? "mins"
                                                          : "min"
                                                      ) +
                                                      "\n                                    "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _vm.classworkDetails.status !=
                                              "Submitted"
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "caption ml-2"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Due\n                                        " +
                                                          _vm._s(
                                                            _vm.classworkDetails
                                                              .availability
                                                              ? _vm.format_date(
                                                                  _vm
                                                                    .classworkDetails
                                                                    .to_date
                                                                )
                                                              : "always Available"
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                : _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "caption ml-2 pr-1"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-medium"
                                                        },
                                                        [_vm._v("Submitted:")]
                                                      ),
                                                      _vm._v(
                                                        " \n                                        " +
                                                          _vm._s(
                                                            _vm.classworkDetails
                                                              .Submitted_at !=
                                                              null
                                                              ? _vm.format_date(
                                                                  _vm
                                                                    .classworkDetails
                                                                    .Submitted_at
                                                                )
                                                              : _vm.format_date(
                                                                  _vm
                                                                    .classworkDetails
                                                                    .updated_at
                                                                )
                                                          ) +
                                                          "\n                                    "
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
                                            _vm._s(_vm.classworkDetails.title) +
                                              "\n                            "
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
                                                  " Question\n                                "
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
                                                ) +
                                                  " Points\n                                "
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
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.CheckFileIcon(
                                                                    item.extension
                                                                  )
                                                                ) +
                                                                "\n                                        "
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
                                                                          "\n                                                " +
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
                                          (_vm.classworkDetails.status ==
                                            null ||
                                            _vm.classworkDetails.status ==
                                              "") &&
                                          _vm.classworkDetails.status !=
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
                                                      ;(_vm.classworkDetails
                                                        .status == null ||
                                                        _vm.classworkDetails
                                                          .status == "") &&
                                                      _vm.classworkDetails
                                                        .status != "Submitted"
                                                        ? (_vm.confirmStartDialog = !_vm.confirmStartDialog)
                                                        : ""
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                Take Quiz"
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
                                          _vm.classworkDetails.status ==
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
                                                  _vm._v(
                                                    "Continue\n                                "
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
                                          _vm.classworkDetails.status ==
                                            "Submitted" &&
                                          _vm.classworkDetails.reviewAnswer == 1
                                            ? _c(
                                                "div",
                                                [
                                                  _vm.classworkDetails
                                                    .showAnswerType == null
                                                    ? _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            block: !_vm.$vuetify
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
                                                            "View\n                                    Submission"
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
                                                  _vm.classworkDetails
                                                    .showAnswerType == 0
                                                    ? _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            block: !_vm.$vuetify
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
                                                            "View\n                                    Submission"
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
                                                  _vm.classworkDetails
                                                    .showAnswerType == 1 &&
                                                  _vm.format_date1(
                                                    _vm.classworkDetails
                                                      .currentDate
                                                  ) >=
                                                    _vm.format_date1(
                                                      _vm.classworkDetails
                                                        .showDateFrom
                                                    ) &&
                                                    _vm.format_date1(
                                                      _vm.classworkDetails
                                                        .currentDate
                                                    ) <=
                                                      _vm.format_date1(
                                                        _vm.classworkDetails
                                                          .showDateTo
                                                      )
                                                    ? _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            block: !_vm.$vuetify
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
                                                            "\n                                    View Submission"
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
                                              _c(
                                                "v-col",
                                                { attrs: { cols: "12" } },
                                                [
                                                  (_vm.format_date1(
                                                    _vm.classworkDetails
                                                      .currentDate
                                                  ) >=
                                                    _vm.format_date1(
                                                      _vm.classworkDetails
                                                        .from_date
                                                    ) &&
                                                    _vm.format_date1(
                                                      _vm.classworkDetails
                                                        .currentDate
                                                    ) <=
                                                      _vm.format_date1(
                                                        _vm.classworkDetails
                                                          .to_date
                                                      )) ||
                                                  _vm.classworkDetails
                                                    .allow_resubmit == 1
                                                    ? _c(
                                                        "div",
                                                        [
                                                          (_vm.classworkDetails
                                                            .status == null ||
                                                            _vm.classworkDetails
                                                              .status == "") &&
                                                          _vm.classworkDetails
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
                                                                      _vm
                                                                        .classworkDetails
                                                                        .status !=
                                                                      "Submitted"
                                                                        ? (_vm.confirmStartDialog = !_vm.confirmStartDialog)
                                                                        : ""
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                            Take Quiz"
                                                                  ),
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        right:
                                                                          "",
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
                                                          _vm.classworkDetails
                                                            .status ==
                                                            "Taking" &&
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
                                                                    "\n                                            Continue"
                                                                  ),
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        right:
                                                                          "",
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
                                                    : _c("div", [
                                                        (_vm.format_date1(
                                                          _vm.classworkDetails
                                                            .currentDate
                                                        ) >
                                                          _vm.format_date1(
                                                            _vm.classworkDetails
                                                              .to_date
                                                          ) &&
                                                          _vm.classworkDetails
                                                            .response_late ==
                                                            1) ||
                                                        _vm.classworkDetails
                                                          .allow_resubmit == 1
                                                          ? _c(
                                                              "div",
                                                              [
                                                                (_vm
                                                                  .classworkDetails
                                                                  .status ==
                                                                  null ||
                                                                  _vm
                                                                    .classworkDetails
                                                                    .status ==
                                                                    "") &&
                                                                _vm
                                                                  .classworkDetails
                                                                  .status !=
                                                                  "Submitted" &&
                                                                _vm
                                                                  .classworkDetails
                                                                  .publish ==
                                                                  null
                                                                  ? _c(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          block: !_vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .mdAndUp,
                                                                          rounded:
                                                                            "",
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
                                                                            _vm
                                                                              .classworkDetails
                                                                              .status !=
                                                                            "Submitted"
                                                                              ? (_vm.confirmStartDialog = !_vm.confirmStartDialog)
                                                                              : ""
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                Take Quiz"
                                                                        ),
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              right:
                                                                                "",
                                                                              dark:
                                                                                ""
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
                                                                _vm
                                                                  .classworkDetails
                                                                  .status ==
                                                                  "Taking" &&
                                                                _vm
                                                                  .classworkDetails
                                                                  .publish ==
                                                                  null
                                                                  ? _c(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          block: !_vm
                                                                            .$vuetify
                                                                            .breakpoint
                                                                            .mdAndUp,
                                                                          rounded:
                                                                            "",
                                                                          loading:
                                                                            _vm.isOpenQuiz,
                                                                          color:
                                                                            "primary",
                                                                          dark:
                                                                            ""
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
                                                                          "\n                                                Continue"
                                                                        ),
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              right:
                                                                                "",
                                                                              dark:
                                                                                ""
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
                                                          : _vm._e()
                                                      ]),
                                                  _vm._v(" "),
                                                  _vm.classworkDetails.status ==
                                                    "Submitted" &&
                                                  _vm.classworkDetails
                                                    .reviewAnswer == 1
                                                    ? _c(
                                                        "div",
                                                        [
                                                          _vm.classworkDetails
                                                            .showAnswerType == 0
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
                                                                      "primary"
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
                                                                    "View\n                                            Submission"
                                                                  ),
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        right:
                                                                          "",
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
                                                          _vm.classworkDetails
                                                            .showAnswerType ==
                                                            1 &&
                                                          _vm.format_date1(
                                                            _vm.classworkDetails
                                                              .currentDate
                                                          ) >=
                                                            _vm.format_date1(
                                                              _vm
                                                                .classworkDetails
                                                                .showDateFrom
                                                            ) &&
                                                            _vm.format_date1(
                                                              _vm
                                                                .classworkDetails
                                                                .currentDate
                                                            ) <=
                                                              _vm.format_date1(
                                                                _vm
                                                                  .classworkDetails
                                                                  .showDateTo
                                                              )
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
                                                                      "primary"
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
                                                                    "\n                                            View Submission"
                                                                  ),
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        right:
                                                                          "",
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
                                                    : _vm._e()
                                                ]
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
                      class: _vm.$vuetify.breakpoint.mdAndUp ? "pa-3" : "pa-1",
                      attrs: {
                        elevation: !_vm.$vuetify.breakpoint.mdAndUp ? "0" : "1",
                        outlined: _vm.$vuetify.breakpoint.mdAndUp
                      }
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
                  _c("span", [_vm._v("Classwork Details")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-text-box-outline")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      ;(_vm.selected = 1),
                        (_vm.isViewingSubmission = _vm.isViewingSubmission
                          ? (_vm.isViewingSubmission = false)
                          : _vm.isViewingSubmission)
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
                _vm._v("\n                Start Quiz?\n            ")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure to take this quiz?\n            "
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
                    [_vm._v("\n                    Cancel\n                ")]
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
                    [_vm._v("\n                    Start\n                ")]
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