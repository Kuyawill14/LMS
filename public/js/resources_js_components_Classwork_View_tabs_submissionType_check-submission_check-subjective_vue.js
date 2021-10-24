"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_check-submission_check-subjective_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['CheckData', 'classworkDetails'],
  data: function data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      Details: null,
      timeout: null,
      value: '',
      score: '',
      path: null,
      isSavingScore: false,
      isCommenting: false,
      comment: null,
      RubricsPoints: [],
      SaveRubricsData: [],
      OpenFileType: null,
      isOpening: true,
      SelectedNav: 0
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser'])),
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
        //return moment(String(value)).format('MM/d/YYYY, hh:mm A')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('MM/d/YYYY, hh:mm A');
      }
    },
    DownloadFile: function DownloadFile(link) {
      //var host = window.location.protocol + "//" + window.location.host;
      //window.location = link
      window.open(link, '_blank');
    },
    SaveScore: function SaveScore() {
      clearTimeout(this.timeout);
      var self = this;
      this.timeout = setTimeout(function () {
        self.score = self.CheckData.points;
        self.isSavingScore = !self.isSavingScore;
        self.UpdateScore();
      }, 1000);
    },
    SaveRubricsScore: function SaveRubricsScore() {
      var _this = this;

      var TotalRubics = 0;
      var TotalPointsInRubrics = 0;
      var ctr = 0;
      this.classworkDetails.rubrics.forEach(function (item) {
        TotalRubics += item.points;
        TotalPointsInRubrics += parseInt(_this.CheckData.rubrics_score[ctr].points);

        _this.SaveRubricsData.push({
          id: item.id,
          points: _this.RubricsPoints[ctr]
        });

        ctr++;
      });
      var score = TotalPointsInRubrics / TotalRubics * this.classworkDetails.points;
      this.CheckData.points = Math.round(score);
      this.score = Math.round(this.CheckData.points);
      this.isSavingScore = !this.isSavingScore;
      this.UpdateScore();
    },
    UpdateScore: function UpdateScore() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.score <= _this2.classworkDetails.points) {
                  axios.put('/api/submission/update-score/' + _this2.CheckData.id, {
                    score: _this2.score,
                    data: _this2.CheckData.rubrics_score
                  }).then(function (res) {
                    if (res.status == 200) {
                      _this2.toastSuccess("Score Updated");

                      _this2.isSavingScore = !_this2.isSavingScore;

                      _this2.$emit('UpdateSubmission', _this2.CheckData.id);
                    }
                  });
                } else {
                  _this2.isSavingScore = !_this2.isSavingScore;

                  _this2.toastError('Score is higher than the set points!');
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    alertStudent: function alertStudent() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {};
                _this3.isAlerting = true;
                data.user_id = _this3.CheckData.user_id;
                data.classwork_name = _this3.classworkDetails.title;
                data.classwork_id = _this3.classworkDetails.id;
                data.course_id = _this3.classworkDetails.course_id;
                data.firstName = _this3.CheckData.firstName;
                axios.post('/api/teacher/alert-student', data).then(function (res) {
                  if (res.data.success == true) {
                    _this3.toastSuccess(res.data.message);

                    _this3.isAlerting = false;
                  }
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    OpenFile: function OpenFile(extension, link) {
      var _this4 = this;

      this.SelectedNav = 1;
      this.isOpening = true;

      if (extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp') {
        this.OpenFileType = 'media';
        this.path = link;
        setTimeout(function () {
          return _this4.isOpening = false;
        }, 500);
      } else if (extension == 'link') {
        this.OpenFileType = 'link';
        var str = link;

        if (str.includes('www.youtube.com') || str.includes('m.youtube.com')) {
          var res = str.split("=");
          var id = res[1].split("&");
          var embeddedUrl = "https://www.youtube.com/embed/" + id[0];
          this.path = embeddedUrl;
        } else if (str.includes('youtu.be')) {
          var newpath = str.replace('youtu.be/', 'www.youtube.com/embed/');
          this.path = newpath;
        } else if (str.includes('drive.google.com')) {
          var d = str.replace(/.*\/d\//, '').replace(/\/.*/, '');
          var path = "https://drive.google.com/file/d/" + d + "/preview";
          this.path = path;
        } else {
          this.path = link;
        }

        setTimeout(function () {
          return _this4.isOpening = false;
        }, 500);
      } else {
        this.OpenFileType = 'document';
        this.path = link;
        setTimeout(function () {
          return _this4.isOpening = false;
        }, 500);
      }
    },
    addComment: function addComment(details) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this5.isCommenting = true;
                data.classwork_id = details.classwork_id;
                data.course_id = _this5.$route.params.id;
                data.to_user = details.user_id;
                data.comment = _this5.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  if (res.status == 200) {
                    _this5.CheckData.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic
                    });

                    _this5.comment = null;
                  }
                });
                _this5.isCommenting = false;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    checkRubrics: function checkRubrics() {
      var _this6 = this;

      if (this.classworkDetails.rubrics.length != 0) {
        if (this.CheckData.rubrics_score == false) {
          this.CheckData.rubrics_score = [];
          this.classworkDetails.rubrics.forEach(function (item) {
            _this6.CheckData.rubrics_score.push({
              id: item.id,
              points: null
            });
          });
        }
      }
    },
    ResetSubmission: function ResetSubmission(data) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(data);
                axios.put('/api/teacher/reset-sbj/' + data.id, {
                  files: data.Submitted_Answers
                }).then(function () {
                  _this7.$emit('SubmissionReset', data.id);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    if (this.CheckData.Submitted_Answers != null && this.CheckData.Submitted_Answers != '') {
      var path = this.CheckData.Submitted_Answers[0].link;
      var extension = this.CheckData.Submitted_Answers[0].fileExte;

      if (extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'bmp') {
        this.OpenFileType = 'media';
        this.path = path;
        this.isOpening = false;
      } else if (extension == 'link') {
        this.OpenFileType = 'link';
        var str = path;

        if (str.includes('www.youtube.com')) {
          var res = str.split("=");
          var id = res[1].split("&");
          var embeddedUrl = "https://www.youtube.com/embed/" + id[0];
          this.path = embeddedUrl;
        } else if (str.includes('drive.google.com')) {
          var d = str.replace(/.*\/d\//, '').replace(/\/.*/, '');
          var pathLink = "https://drive.google.com/file/d/" + d + "/preview";
          this.path = pathLink;
        } else {
          this.path = path;
        }

        this.isOpening = false;
      } else {
        this.OpenFileType = 'document';
        this.path = path;
        this.isOpening = false;
      } //var host = window.location.protocol + "//" + window.location.host;
      //console.log(host)
      //let viewer ="https://docs.google.com/gview?url=https://path.com/to/your/pdf.pdf&embedded=true";
      //this.pdf_path = path;

    }

    this.checkRubrics();
    this.$emit('isMounted');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.doc[data-v-2cc7d58e] {\n    width: 100%;\n    height: 70vh;\n}\n.fixed-bar[data-v-2cc7d58e] {\n    position: sticky;\n    position: -webkit-sticky; /* for Safari */\n    top: 0em;\n    z-index: 2;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    /* display: none; <- Crashes Chrome on hover */\r\n    -webkit-appearance: none;\r\n    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */\n}\ninput[type=number] {\r\n    -moz-appearance:textfield; /* Firefox */\n}\r\n/* width */\n::-webkit-scrollbar {\r\n  width: 8px;\n}\r\n\r\n/* Track */\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n \r\n/* Handle */\n::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\r\n\r\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_0_id_2cc7d58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_0_id_2cc7d58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_0_id_2cc7d58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true&");
/* harmony import */ var _check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&");
/* harmony import */ var _check_subjective_vue_vue_type_style_index_0_id_2cc7d58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&");
/* harmony import */ var _check_subjective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-subjective.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2cc7d58e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_0_id_2cc7d58e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=0&id=2cc7d58e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=style&index=1&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_check_subjective_vue_vue_type_template_id_2cc7d58e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/check-submission/check-subjective.vue?vue&type=template&id=2cc7d58e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-toolbar",
        {
          staticClass: "fixed-bar",
          attrs: {
            dense: "",
            shaped: "",
            floating: "",
            color: "primary",
            app: ""
          }
        },
        [
          _c(
            "v-btn",
            {
              attrs: { dark: "", icon: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("closeDialog")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        {
          staticClass: "ma-0 pa-0 pl-1 pr-1 ",
          staticStyle: { "margin-bottom": "10rem" }
        },
        [
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                {
                  class: !_vm.$vuetify.breakpoint.mdAndUp ? "" : "pr-3",
                  attrs: { cols: "12", md: "4", lg: "4" }
                },
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "", "ma-0": "", "pa-0": "" } },
                    [
                      _c(
                        "v-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$vuetify.breakpoint.mdAndUp ||
                                _vm.SelectedNav == 0,
                              expression:
                                "$vuetify.breakpoint.mdAndUp || SelectedNav == 0"
                            }
                          ],
                          staticClass: "pa-5 pb-8 pt-0",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        [
                          _c(
                            "v-row",
                            { attrs: { "no-gutters": "" } },
                            [
                              _c(
                                "v-col",
                                { staticClass: "ma-0 pa-0" },
                                [
                                  _c(
                                    "v-list",
                                    { staticClass: "ma-0 pa-0" },
                                    [
                                      _c(
                                        "v-list-item",
                                        { staticClass: "ma-0 pa-0" },
                                        [
                                          _c(
                                            "v-list-item-avatar",
                                            { attrs: { color: "secondary" } },
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  alt: "Profile",
                                                  src:
                                                    _vm.CheckData.profile_pic ==
                                                      null ||
                                                    _vm.CheckData.profile_pic ==
                                                      ""
                                                      ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                        (_vm.CheckData
                                                          .firstName +
                                                          " " +
                                                          _vm.CheckData
                                                            .lastName)
                                                      : _vm.CheckData
                                                          .profile_pic
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c(
                                                "v-list-item-title",
                                                {
                                                  staticClass:
                                                    "font-weight-medium"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.CheckData.firstName +
                                                        " " +
                                                        _vm.CheckData.lastName
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item-subtitle",
                                                {
                                                  class:
                                                    _vm.CheckData.status ==
                                                    "Submitted"
                                                      ? "success--text"
                                                      : ""
                                                },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.CheckData.status ==
                                                          "Submitted"
                                                          ? "Submitted: " +
                                                              _vm.format_date(
                                                                _vm.CheckData
                                                                  .updated_at
                                                              )
                                                          : _vm.CheckData
                                                              .status ==
                                                            "Submitting"
                                                          ? "Submitting..."
                                                          : ""
                                                      )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.CheckData.status == "Submitted"
                                            ? _c(
                                                "v-list-item-action",
                                                { staticClass: "mt-8" },
                                                [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      rounded: "",
                                                      "hide-details": "",
                                                      loading:
                                                        _vm.isSavingScore,
                                                      dense: "",
                                                      outlined: "",
                                                      label: "Score",
                                                      type: "number",
                                                      suffix:
                                                        "/" +
                                                        _vm.classworkDetails
                                                          .points,
                                                      max:
                                                        _vm.classworkDetails
                                                          .points,
                                                      min: "0"
                                                    },
                                                    on: {
                                                      keyup: function($event) {
                                                        return _vm.SaveScore()
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.CheckData.points,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.CheckData,
                                                          "points",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "CheckData.points"
                                                    }
                                                  })
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 pb-4",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _vm.CheckData.status != null &&
                                  _vm.CheckData.status != "" &&
                                  _vm.CheckData.status != "Submitting"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            color: "primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.ResetSubmission(
                                                _vm.CheckData
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "" } },
                                            [_vm._v("mdi-restart")]
                                          ),
                                          _vm._v(" Reset Submission")
                                        ],
                                        1
                                      )
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
                                    "v-row",
                                    [
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("h2", [
                                          _vm._v(
                                            _vm._s(_vm.classworkDetails.title)
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm.CheckData.Submitted_Answers != null &&
                                      _vm.CheckData.Submitted_Answers != ""
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  attrs: {
                                                    nav: "",
                                                    outlined: ""
                                                  }
                                                },
                                                _vm._l(
                                                  _vm.CheckData
                                                    .Submitted_Answers,
                                                  function(item, index) {
                                                    return _c(
                                                      "v-list-item",
                                                      {
                                                        key: index,
                                                        staticClass: "rounded",
                                                        attrs: { link: "" }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-icon",
                                                          {
                                                            staticClass:
                                                              "pr-0 mr-0 mr-1"
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  large: "",
                                                                  color: _vm.CheckFileIconColor(
                                                                    item.fileExte
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                                              " +
                                                                    _vm._s(
                                                                      _vm.CheckFileIcon(
                                                                        item.fileExte
                                                                      )
                                                                    ) +
                                                                    "\n                                                                          "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-content",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.OpenFile(
                                                                  item.fileExte,
                                                                  item.link
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              [
                                                                _vm._v(
                                                                  "\n                                                                          " +
                                                                    _vm._s(
                                                                      item.name
                                                                    ) +
                                                                    "\n                                                                      "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-action",
                                                          [
                                                            _c(
                                                              "v-tooltip",
                                                              {
                                                                attrs: {
                                                                  top: ""
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
                                                                                    rounded:
                                                                                      "",
                                                                                    small:
                                                                                      "",
                                                                                    icon:
                                                                                      "",
                                                                                    text:
                                                                                      ""
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.DownloadFile(
                                                                                        item.link
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
                                                                                {
                                                                                  attrs: {
                                                                                    color:
                                                                                      "blue"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "mdi-download"
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
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "Download"
                                                                  )
                                                                ])
                                                              ]
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
                          _c(
                            "div",
                            { staticClass: "pt-5 pb-1" },
                            [_c("v-divider")],
                            1
                          ),
                          _vm._v(" "),
                          _vm.classworkDetails.rubrics.length != 0 &&
                          _vm.CheckData.status == "Submitted"
                            ? _c(
                                "v-list",
                                _vm._l(_vm.classworkDetails.rubrics, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "v-list-item",
                                    { key: index, staticClass: "mb-0 pb-0" },
                                    [
                                      _c(
                                        "v-list-item-avatar",
                                        { attrs: { tile: "" } },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "font-weight-bold" },
                                            [_vm._v(_vm._s(item.points) + "%")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c(
                                            "v-list-item-title",
                                            {
                                              staticClass: "font-weight-medium"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                      " +
                                                  _vm._s(item.criteria_name) +
                                                  "\n                                  "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("p", [
                                              _vm._v(_vm._s(item.description))
                                            ])
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-action",
                                        { staticStyle: { width: "30%" } },
                                        [
                                          _c("v-text-field", {
                                            staticClass: "ma-0 pa-0",
                                            attrs: {
                                              rounded: "",
                                              "hide-details": "",
                                              type: "number",
                                              suffix: "/" + item.points,
                                              dense: "",
                                              outlined: "",
                                              label: item.criteria_name
                                            },
                                            model: {
                                              value:
                                                _vm.CheckData.rubrics_score[
                                                  index
                                                ].points,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.CheckData.rubrics_score[
                                                    index
                                                  ],
                                                  "points",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "CheckData.rubrics_score[index].points"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.classworkDetails.rubrics.length != 0 &&
                          _vm.CheckData.status == "Submitted"
                            ? _c(
                                "div",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "primary",
                                      attrs: { small: "", dark: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.SaveRubricsScore()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                              Save\n                          "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$vuetify.breakpoint.mdAndUp ||
                                _vm.SelectedNav == 2,
                              expression:
                                "$vuetify.breakpoint.mdAndUp || SelectedNav == 2"
                            }
                          ],
                          staticClass: "mt-2 scrollComment",
                          attrs: { elevation: "1", outlined: "" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "pt-3 pl-4 pr-4 pb-2" },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-comment")
                              ]),
                              _vm._v("Private Comments\n                      ")
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
                              attrs: { "max-height": "350" }
                            },
                            _vm._l(_vm.CheckData.comments, function(item, i) {
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
                                              ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
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
                                      _c("v-list-item-title", [
                                        _vm._v(
                                          "\n                                  " +
                                            _vm._s(item.name) +
                                            "\n                              "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c("p", [_vm._v(_vm._s(item.content))])
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                small: "",
                                                color: "grey lighten-1"
                                              }
                                            },
                                            [_vm._v("mdi-dots-vertical")]
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
                                    { attrs: { color: "secondary" } },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            _vm.get_CurrentUser.profile_pic ==
                                              null ||
                                            _vm.get_CurrentUser.profile_pic ==
                                              ""
                                              ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                                _vm.get_CurrentUser.firstName +
                                                " " +
                                                _vm.get_CurrentUser.lastName
                                              : _vm.get_CurrentUser.profile_pic
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
                                          "prepend-avatar": "mdi-emoticon-dead",
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
                                                _vm.CheckData
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "pt-1",
                  attrs: { cols: "12", md: "8", lg: "8" }
                },
                [
                  (_vm.CheckData.Submitted_Answers == null ||
                    _vm.CheckData.Submitted_Answers == "") &&
                  (_vm.$vuetify.breakpoint.mdAndUp || _vm.SelectedNav == 1)
                    ? _c(
                        "v-container",
                        {
                          staticClass: "pt-1",
                          attrs: { fluid: "", "ma-0": "", "pa-0": "" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "pa-2",
                              staticStyle: { height: "40rem" }
                            },
                            [
                              _c(
                                "v-row",
                                {
                                  attrs: {
                                    justify: "center",
                                    "align-content": "center"
                                  }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { "margin-top": "10rem" },
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "8rem" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                  mdi-notebook-remove-outline\n                              "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("h2", [_vm._v(" Empty Submission ")]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0 pb-0" }, [
                                        _vm._v(
                                          " This student did not submit yet!"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.alertStudent()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v("Alert Student "),
                                          _c(
                                            "v-icon",
                                            { attrs: { right: "" } },
                                            [_vm._v("mdi-account-alert")]
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
                  _vm.CheckData.Submitted_Answers != null &&
                  _vm.CheckData.Submitted_Answers != "" &&
                  (_vm.$vuetify.breakpoint.mdAndUp || _vm.SelectedNav == 1)
                    ? _c(
                        "v-container",
                        { attrs: { fluid: "", "ma-0": "", "pa-0": "" } },
                        [
                          _c("v-card", [
                            _c(
                              "div",
                              {
                                staticClass: "pa-3",
                                style:
                                  _vm.OpenFileType == "document"
                                    ? _vm.$vuetify.breakpoint.mdAndUp
                                      ? "height:90vh !important;"
                                      : "height:85vh !important;"
                                    : _vm.$vuetify.breakpoint.mdAndUp
                                    ? "height:90vh !important"
                                    : "height:85vh !important"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "pa-3 text-center" },
                                  [
                                    _vm.isOpening
                                      ? _c("v-progress-circular", {
                                          staticStyle: {
                                            "margin-top": "23rem"
                                          },
                                          attrs: {
                                            size: 50,
                                            color: "primary",
                                            indeterminate: ""
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                !_vm.isOpening && _vm.OpenFileType == "document"
                                  ? _c("div", [
                                      _c("iframe", {
                                        staticStyle: {
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          width: "100% !important",
                                          height: "100% !important"
                                        },
                                        attrs: {
                                          title: "google pdf viewer",
                                          id: "pdf-iframe",
                                          src:
                                            "https://docs.google.com/viewer?embedded=true&url=" +
                                            _vm.path,
                                          sandbox:
                                            "allow-same-origin allow-scripts allow-popups allow-forms"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.isOpening && _vm.OpenFileType == "link"
                                  ? _c("div", [
                                      _c("iframe", {
                                        staticStyle: {
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          width: "100% !important",
                                          height: "100% !important"
                                        },
                                        attrs: {
                                          title: "Link",
                                          src: _vm.path,
                                          sandbox:
                                            "allow-same-origin allow-scripts allow-popups allow-forms"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.isOpening && _vm.OpenFileType == "media"
                                  ? _c(
                                      "div",
                                      [
                                        _c("v-img", {
                                          attrs: {
                                            src: _vm.path,
                                            "max-width": "100%",
                                            "max-height": "80vh",
                                            contain: ""
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "placeholder",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "v-row",
                                                      {
                                                        staticClass:
                                                          "fill-height ma-0",
                                                        attrs: {
                                                          align: "center",
                                                          justify: "center"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-progress-circular",
                                                          {
                                                            attrs: {
                                                              indeterminate: "",
                                                              color:
                                                                "grey lighten-5"
                                                            }
                                                          }
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            false,
                                            4034393411
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pt-10" },
        [
          !_vm.$vuetify.breakpoint.mdAndUp
            ? _c(
                "v-bottom-navigation",
                {
                  attrs: {
                    fixed: "",
                    grow: "",
                    value: _vm.SelectedNav,
                    color: "primary"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.SelectedNav = 0
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("Submitted Files")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("mdi-file")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.SelectedNav = 1
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("Viewer")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("mdi-file-eye")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      on: {
                        click: function($event) {
                          _vm.SelectedNav = 2
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("Comments")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("mdi-comment")])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);