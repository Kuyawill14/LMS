"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var attachlinkDiaglog = function attachlinkDiaglog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_attachLinkDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./attachLinkDialog */ "./resources/js/components/Classwork_View/type/classworkType/attachLinkDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails'],
  components: {
    attachlinkDiaglog: attachlinkDiaglog
  },
  data: function data() {
    return {
      AttachLink: false,
      file: [],
      fileSize: null,
      dragging: false,
      link: "test12",
      StatusDetails: [],
      uploadPercentage: 0,
      isUploading: [],
      tempId: '',
      isResubmit: false,
      isloading: true,
      fileIndex: null,
      tempFile: null,
      isUpIndex: null,
      comment: null,
      isCommenting: false,
      linkName: null,
      linkFile: null,
      IsSaving: false,
      isDeleting: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser'])), {}, {
    extension: function extension() {
      return this.tempFile ? this.tempFile.name.split('.').pop() : '';
    },
    Fileextension: function Fileextension() {
      var attach = this.classworkDetails.attachment;
      return attach.split('.').pop();
    },
    SubmittedFilextension: function SubmittedFilextension() {
      var attach = this.StatusDetails.Submitted_Answers[0].name;
      return attach.split('.').pop();
    }
  }),
  methods: {
    OpenFile: function OpenFile(file) {
      window.open(file, '_blank');
    },
    scrapeDocID: function scrapeDocID() {
      var d = this.linkFile.replace(/.*\/d\//, '').replace(/\/.*/, '');
      var path = "https://drive.google.com/file/d/" + d + "/preview";

      if (this.StatusDetails.length == 0) {
        this.file.push({
          fileName: this.linkName,
          fileSize: '',
          fileExte: 'link',
          file: path
        });
      } else {
        this.file.push({
          fileName: this.linkName,
          fileSize: '',
          fileExte: 'link',
          file: path
        });
        this.StatusDetails.Submitted_Answers.push({
          name: this.linkName,
          fileSize: '',
          fileExte: 'link',
          link: path
        });
      }

      this.AddLinkInSubmittedAnswer(); // this.AddLinkInSubmittedAnswer(index);
    },
    AddLinkInSubmittedAnswer: function AddLinkInSubmittedAnswer() {
      var _this = this;

      var index = this.file.length - 1;
      var sub_id = this.tempId == null ? 'empty' : this.tempId;
      var fd = new FormData();
      fd.append('Submission_id', sub_id);
      fd.append('id', this.classworkDetails.id);
      fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
      fd.append('type', this.classworkDetails.type);
      fd.append('fileName', this.file[index].fileName);
      fd.append('fileSize', this.file[index].fileSize);
      fd.append('fileExte', this.file[index].fileExte);
      fd.append('file', this.file[index].file);
      axios.post('/api/student/linkAndstatus', fd).then(function (res) {
        _this.AttachLink = false;
        _this.linkName = null;
        _this.linkFile = null;
      });
    },
    UploadFile: function UploadFile() {
      this.$refs.UploadAttachFile.click();
    },
    UploadMoreFile: function UploadMoreFile() {
      if (this.file.length <= 4) {
        this.$refs.AttAchMoreFile.click();
      } else {}
    },
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_1__.default)(String(value)).format('dddd, h:mm a');
      }
    },
    DownLoadFile: function DownLoadFile(file, extension) {
      var link;

      if (extension == 'docx') {
        link = 'https://view.officeapps.live.com/op/view.aspx?src=' + file;
      } else {
        link = file;
      }

      window.open(link, '_blank');
    },
    onChange: function onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      /*  if (!files.length) {
           this.dragging = false;
           return;
       } */

      this.createFile(files[0]);
    },
    createFile: function createFile(file) {
      var IndexFile = this.file.length;
      this.isUploading[IndexFile] = true;
      this.fileIndex = IndexFile; ////console.log(this.file.length)

      this.tempFile = file;
      var tempSize = file.size;

      if (tempSize > 1000000) {
        var kbsize = tempSize * 0.001;
        var mbsize = kbsize * 0.001;
        var finalSize = parseInt(mbsize);
        this.fileSize = finalSize + 'mb';
      } else {
        var sizeFile = tempSize * 0.001;

        var _finalSize = parseInt(sizeFile);

        this.fileSize = _finalSize + 'kb';
      } //this.dragging = false;
      //


      if (this.StatusDetails.length == 0) {
        this.file.push({
          fileName: this.tempFile.name,
          fileSize: this.fileSize,
          fileExte: this.extension,
          file: this.tempFile
        });
      } else {
        this.file.push({
          fileName: this.tempFile.name,
          fileSize: this.fileSize,
          fileExte: this.extension,
          file: this.tempFile
        });
        this.StatusDetails.Submitted_Answers.push({
          name: this.tempFile.name,
          fileSize: this.fileSize,
          fileExte: this.extension
        });
      }

      this.fileIndex = this.file.length;
      this.isUpIndex = this.file.length - 1; ////console.log(this.fileIndex);

      this.UpdateSubmission(this.file.length - 1);
    },
    removeFile: function removeFile(index) {
      var _this2 = this;

      this.isDeleting = true;
      axios.put('/api/submission/file-remove/' + this.tempId, {
        Fileindex: index
      }).then(function (res) {
        _this2.uploadPercentage = 0;
        _this2.file = '';
        _this2.tempId = null;
        _this2.isUploading[index] = false;
        _this2.isDeleting = false;
      });
    },
    test: function test() {
      var data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="' + this.link + '"></iframe><div><br></div>'; //console.log(data);
    },
    checkStatus: function checkStatus(type) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/submission/check-sbj/' + _this3.classworkDetails.id).then(function (res) {
                  _this3.StatusDetails = res.data;
                  _this3.tempId = res.data.Sub_id;

                  if (type != 'submit') {
                    _this3.isloading = !_this3.isloading;
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    UpdateSubmission: function UpdateSubmission(index) {
      var _this4 = this;

      var sub_id = this.tempId == null ? 'empty' : this.tempId;
      var fd = new FormData();
      fd.append('Submission_id', sub_id);
      fd.append('id', this.classworkDetails.id);
      fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
      fd.append('type', this.classworkDetails.type);
      fd.append('fileName', this.file[index].fileName);
      fd.append('fileSize', this.file[index].fileSize);
      fd.append('fileExte', this.extension);
      fd.append('file', this.file[index].file);
      axios.post('/api/student/update-status', fd, {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var total = progressEvent.total;
          var totalLength = progressEvent.lengthComputable ? total : null;

          if (totalLength != null) {
            _this4.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
          }
        }
      }).then(function (res) {
        _this4.tempId = _this4.tempId == null ? res.data : _this4.tempId;
      });
    },
    DeleteUpload: function DeleteUpload(index) {
      var _this5 = this;

      this.isDeleting = true;
      var type = 'submit';
      axios.put('/api/submission/file-remove/' + this.tempId, {
        Fileindex: index
      }).then(function (res) {
        _this5.checkStatus(type);

        _this5.uploadPercentage = 0;
        _this5.isUploading[index] = false;
        _this5.isDeleting = false;
      });
    },
    SubmitClasswork: function SubmitClasswork() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var rubrics, type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rubrics = [];

                if (_this6.classworkDetails.rubrics.length != 0) {
                  _this6.classworkDetails.rubrics.forEach(function (item) {
                    rubrics.push({
                      id: item.id,
                      points: null
                    });
                  });
                }

                _this6.IsSaving = true;
                type = 'submit';
                axios.put('/api/student/submit-classwork/' + _this6.tempId, {
                  data: rubrics
                }).then(function (res) {
                  if (res.status == 200) {
                    _this6.checkStatus(type);

                    _this6.IsSaving = false;
                    _this6.isResubmit = false;
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addComment: function addComment(details) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this7.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.course_id = _this7.$route.params.id;
                data.comment = _this7.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  //console.log(res.data);
                  if (res.status == 200) {
                    _this7.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic
                    });

                    _this7.comment = null;
                  }
                });
                _this7.isCommenting = false;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this8.classworkDetails.comments.splice(index, 1);
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    this.checkStatus();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropZone[data-v-5b2cbc49] {\n  width: 100%;\n  height: 7rem;\n  position: relative;\n  border: 2px dashed #eee;\n  border-radius: .3rem;\n}\n\n/* .dropZone:hover {\n  border: 1px dashed #2196F3;\n} */\n\n/* .dropZone:hover .dropZone-title {\n  color: #2196F3;\n} */\n.dropZone-info[data-v-5b2cbc49] {\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.dropZone-title[data-v-5b2cbc49] {\n  color: #787878;\n}\n.dropZone input[data-v-5b2cbc49] {\n  position: absolute;\n  cursor: pointer;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.dropZone-upload-limit-info[data-v-5b2cbc49] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.dropZone-over[data-v-5b2cbc49] {\n  background: #E0E0E0;\n  opacity: 0.8;\n}\n.dropZone-uploaded[data-v-5b2cbc49] {\n  padding-top: 4rem;\n  height: auto;\n  position: relative;\n}\n.dropZone-uploaded-info[data-v-5b2cbc49] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.filePreview[data-v-5b2cbc49]{\n  width: 100%;\n}\n.removeFile[data-v-5b2cbc49] {\n  width: 200px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&");
/* harmony import */ var _SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5b2cbc49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pt-5" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.AttachLink,
            callback: function($$v) {
              _vm.AttachLink = $$v
            },
            expression: "AttachLink"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.AttachLink = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-h6" }, [
                    _vm._v(" Attach Link")
                  ])
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
                        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              outlined: "",
                              dense: "",
                              rows: "1",
                              label: "Title",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.linkName,
                              callback: function($$v) {
                                _vm.linkName = $$v
                              },
                              expression: "linkName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 mt-0 pt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-textarea", {
                            staticClass: "mb-0 pb-0",
                            attrs: {
                              outlined: "",
                              dense: "",
                              rows: "1",
                              label: "Link",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.linkFile,
                              callback: function($$v) {
                                _vm.linkFile = $$v
                              },
                              expression: "linkFile"
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
              _c(
                "v-card-actions",
                { staticClass: "pb-2 pl-5 pr-5" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", block: "", rounded: "" },
                      on: { click: _vm.scrapeDocID }
                    },
                    [
                      _vm._v(
                        "\r\n                    Confirm\r\n                  "
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-2", attrs: { justify: "center", "no-gutters": "" } },
        [
          _c(
            "v-col",
            {
              staticClass: "mb-0 pb-0",
              attrs: { cols: "12", md: "5", lg: "4" }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-7",
                  attrs: { outlined: "", elevation: "1" }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { top: "" },
                              scopedSlots: _vm._u([
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
                                                  return _vm.$router.push({
                                                    name: "classwork"
                                                  })
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
                                            [_vm._v("mdi-arrow-left-thick")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("span", [_vm._v("Back to classworks")])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass:
                            "pt-0 mt-0 pl-1 pr-1 pb-0 mb-0 d-flex justify-space-between",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "font-weight-medium text-body-2 mt-3"
                            },
                            [_vm._v("Your Work")]
                          ),
                          _vm._v(" "),
                          _vm.StatusDetails.status == "Submitted" &&
                          !_vm.StatusDetails.graded
                            ? _c(
                                "v-btn",
                                {
                                  staticClass: "blue--text",
                                  attrs: { rounded: "", text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.isResubmit = !_vm.isResubmit
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.isResubmit ? "Cancel" : "Resubmit"
                                    )
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.StatusDetails.graded
                            ? _c(
                                "v-chip",
                                {
                                  staticClass: "ma-2",
                                  attrs: { color: "green", outlined: "" }
                                },
                                [
                                  _vm._v(
                                    "\r\n                         Graded: " +
                                      _vm._s(_vm.StatusDetails.score) +
                                      " /" +
                                      _vm._s(_vm.StatusDetails.totalPoints) +
                                      "\r\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pl-1 pr-1", attrs: { cols: "12" } },
                        [_c("v-divider")],
                        1
                      ),
                      _vm._v(" "),
                      _vm.isloading
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _vm.isloading
                                ? _c(
                                    "v-container",
                                    { staticClass: "fill-height" },
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            "align-content": "center",
                                            justify: "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "text-subtitle-1 text-center",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                Loading\r\n                            "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("v-progress-linear", {
                                                attrs: {
                                                  color: "primary",
                                                  indeterminate: "",
                                                  rounded: "",
                                                  height: "3"
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
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        ref: "AttAchMoreFile",
                        staticClass: "d-none",
                        attrs: {
                          accept:
                            "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",
                          type: "file"
                        },
                        on: { change: _vm.onChange }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "UploadAttachFile",
                        staticClass: "d-none",
                        attrs: {
                          accept:
                            "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",
                          type: "file"
                        },
                        on: { change: _vm.onChange }
                      }),
                      _vm._v(" "),
                      !_vm.isloading
                        ? _c(
                            "v-col",
                            { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
                            [
                              _vm.file[0] != "" || _vm.file[0] != null
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "mb-0 pb-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _vm.StatusDetails.status !=
                                        "Submitting" &&
                                      _vm.StatusDetails.status != "Submitted"
                                        ? _c(
                                            "v-row",
                                            { staticClass: "mb-5" },
                                            _vm._l(_vm.file, function(
                                              item,
                                              index
                                            ) {
                                              return _c(
                                                "v-col",
                                                {
                                                  key: index,
                                                  staticClass: "ma-0 pa-0 ",
                                                  attrs: { cols: "12" }
                                                },
                                                [
                                                  _c(
                                                    "v-list",
                                                    {
                                                      attrs: {
                                                        dense: "",
                                                        nav: "",
                                                        outlined: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-list-item",
                                                        { attrs: { link: "" } },
                                                        [
                                                          _c(
                                                            "v-list-item-avatar",
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      item.fileExte ==
                                                                      "pdf"
                                                                        ? "red"
                                                                        : item.fileExte ==
                                                                          "docx"
                                                                        ? "blue"
                                                                        : item.fileExte ==
                                                                          "link"
                                                                        ? "green"
                                                                        : item.fileExte ==
                                                                            "jpg" ||
                                                                          item.fileExte ==
                                                                            "png" ||
                                                                          item.fileExte ==
                                                                            "bmp"
                                                                        ? "info"
                                                                        : ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                " +
                                                                      _vm._s(
                                                                        item.fileExte ==
                                                                          "pdf"
                                                                          ? "mdi-file-pdf"
                                                                          : item.fileExte ==
                                                                            "docx"
                                                                          ? "mdi-file-word"
                                                                          : item.fileExte ==
                                                                            "link"
                                                                          ? "mdi-file-link"
                                                                          : item.fileExte ==
                                                                              "jpg" ||
                                                                            item.fileExte ==
                                                                              "png" ||
                                                                            item.fileExte ==
                                                                              "bmp"
                                                                          ? "mdi-folder-multiple-image"
                                                                          : ""
                                                                      ) +
                                                                      "\r\n                                              "
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
                                                                    "\r\n                                                    " +
                                                                      _vm._s(
                                                                        item.fileName
                                                                      ) +
                                                                      "\r\n                                                "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _vm.isUploading[
                                                                index
                                                              ] &&
                                                              _vm.uploadPercentage !=
                                                                100
                                                                ? _c(
                                                                    "div",
                                                                    [
                                                                      _vm.isUpIndex ==
                                                                      index
                                                                        ? _c(
                                                                            "v-progress-linear",
                                                                            {
                                                                              attrs: {
                                                                                rounded:
                                                                                  "",
                                                                                value:
                                                                                  _vm.uploadPercentage
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-action",
                                                            [
                                                              !_vm.isUploading[
                                                                index
                                                              ] ||
                                                              _vm.uploadPercentage ==
                                                                100
                                                                ? _c(
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
                                                                                        staticStyle: {
                                                                                          "z-index":
                                                                                            "10"
                                                                                        },
                                                                                        attrs: {
                                                                                          rounded:
                                                                                            "",
                                                                                          small:
                                                                                            "",
                                                                                          loading:
                                                                                            _vm.isDeleting,
                                                                                          icon:
                                                                                            "",
                                                                                          text:
                                                                                            ""
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            return _vm.removeFile(
                                                                                              index
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
                                                                                      [
                                                                                        _vm._v(
                                                                                          "mdi-close"
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
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        [
                                                                          _vm._v(
                                                                            "Delete"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
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
                                                ],
                                                1
                                              )
                                            }),
                                            1
                                          )
                                        : _c(
                                            "v-row",
                                            {
                                              staticClass: "mb-2",
                                              attrs: { "ma-0": "", "pa-0": "" }
                                            },
                                            _vm._l(
                                              _vm.StatusDetails
                                                .Submitted_Answers,
                                              function(item, index) {
                                                return _c(
                                                  "v-col",
                                                  {
                                                    key: index,
                                                    staticClass: "ma-0 pa-0",
                                                    attrs: { cols: "12" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-list",
                                                      {
                                                        attrs: {
                                                          dense: "",
                                                          nav: "",
                                                          outlined: ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item",
                                                          {
                                                            attrs: { link: "" }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-avatar",
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        item.fileExte ==
                                                                        "pdf"
                                                                          ? "red"
                                                                          : item.fileExte ==
                                                                            "docx"
                                                                          ? "blue"
                                                                          : item.fileExte ==
                                                                            "link"
                                                                          ? "green"
                                                                          : item.fileExte ==
                                                                              "jpg" ||
                                                                            item.fileExte ==
                                                                              "png" ||
                                                                            item.fileExte ==
                                                                              "bmp"
                                                                          ? "info"
                                                                          : ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\r\n                                                " +
                                                                        _vm._s(
                                                                          item.fileExte ==
                                                                            "pdf"
                                                                            ? "mdi-file-pdf"
                                                                            : item.fileExte ==
                                                                              "docx"
                                                                            ? "mdi-file-word"
                                                                            : item.fileExte ==
                                                                              "link"
                                                                            ? "mdi-file-link"
                                                                            : item.fileExte ==
                                                                                "jpg" ||
                                                                              item.fileExte ==
                                                                                "png" ||
                                                                              item.fileExte ==
                                                                                "bmp"
                                                                            ? "mdi-folder-multiple-image"
                                                                            : ""
                                                                        ) +
                                                                        "\r\n                                              "
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
                                                                      "\r\n                                                    " +
                                                                        _vm._s(
                                                                          item.name
                                                                        ) +
                                                                        "\r\n                                                "
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
                                                                _vm
                                                                  .StatusDetails
                                                                  .status ==
                                                                  "Submitting" ||
                                                                _vm.isResubmit
                                                                  ? _c(
                                                                      "v-tooltip",
                                                                      {
                                                                        attrs: {
                                                                          top:
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
                                                                                          staticStyle: {
                                                                                            "z-index":
                                                                                              "10"
                                                                                          },
                                                                                          attrs: {
                                                                                            loading:
                                                                                              _vm.isDeleting,
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
                                                                                              return _vm.DeleteUpload(
                                                                                                index
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
                                                                                        [
                                                                                          _vm._v(
                                                                                            "mdi-close"
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
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Delete"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
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
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 mb-4 ",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _vm.isResubmit ||
                                  _vm.StatusDetails.status == "Submitting" ||
                                    _vm.StatusDetails.status == null
                                    ? _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "max-width": "250",
                                            transition: "scale-transition",
                                            "offset-y": ""
                                          },
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
                                                            staticClass:
                                                              "pl-12 pr-12 pb-3 pt-3",
                                                            attrs: {
                                                              block: "",
                                                              color: "primary",
                                                              dark: "",
                                                              outlined: ""
                                                            }
                                                          },
                                                          "v-btn",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\r\n                                  " +
                                                            _vm._s(
                                                              attrs.expanded
                                                            ) +
                                                            "\r\n                                    Add "
                                                        ),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: { right: "" }
                                                          },
                                                          [_vm._v("mdi-plus")]
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
                                            857056327
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            { attrs: { nav: "", dense: "" } },
                                            [
                                              _c(
                                                "v-list-item",
                                                {
                                                  attrs: { link: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.file[
                                                        _vm.fileIndex - 1
                                                      ] || _vm.isResubmit
                                                        ? _vm.UploadMoreFile()
                                                        : _vm.UploadFile()
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { left: "" } },
                                                    [
                                                      _vm._v(
                                                        "mdi-cloud-upload-outline"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(
                                                    " Upload File\r\n                                  "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-item",
                                                {
                                                  attrs: { link: "" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.AttachLink = !_vm.AttachLink
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { left: "" } },
                                                    [_vm._v("mdi-link-variant")]
                                                  ),
                                                  _vm._v(
                                                    "Attach Link\r\n                                  "
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
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 mb-1 ",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "pl-12 pr-12 pb-3 pt-3",
                                      attrs: {
                                        block: "",
                                        loading: _vm.IsSaving,
                                        color:
                                          _vm.StatusDetails.status ==
                                            "Submitted" && !_vm.isResubmit
                                            ? "success"
                                            : "primary"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.StatusDetails.status ==
                                            "Submitted" && !_vm.isResubmit
                                            ? ""
                                            : _vm.SubmitClasswork()
                                        }
                                      }
                                    },
                                    [
                                      _vm.StatusDetails.status == "Submitted" &&
                                      !_vm.isResubmit
                                        ? _c(
                                            "v-icon",
                                            { attrs: { left: "" } },
                                            [_vm._v("mdi-check")]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        "\r\n                                " +
                                          _vm._s(
                                            _vm.StatusDetails.status ==
                                              "Submitted" && !_vm.isResubmit
                                              ? "Submitted"
                                              : "Submit Classwork"
                                          )
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
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "mt-4",
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
                      _vm._v("Private Comments\r\n            ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { staticClass: "mb-0 pb-0" },
                    _vm._l(_vm.classworkDetails.comments, function(item, i) {
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
                                domProps: { innerHTML: _vm._s(item.name) }
                              }),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: { innerHTML: _vm._s(item.content) }
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
                                                  { attrs: { icon: "" } },
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
                                                      color: "grey lighten-1"
                                                    }
                                                  },
                                                  [_vm._v("mdi-dots-vertical")]
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
                                    { attrs: { dense: "", nav: "" } },
                                    [
                                      _c(
                                        "v-list-item",
                                        {
                                          on: {
                                            click: function($event) {
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
                                    _vm.get_CurrentUser.profile_pic == null ||
                                    _vm.get_CurrentUser.profile_pic == ""
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              class:
                _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                  ? "mt-2 pl-0 pt-2"
                  : "pt-0 pl-5",
              attrs: { cols: "12", md: "7", lg: "8" }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-5",
                  attrs: { elevation: "1", outlined: "" }
                },
                [
                  _c(
                    "v-row",
                    { staticClass: "mb-0 pb-0" },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "ma-0",
                          attrs: { cols: "12", md: "12" }
                        },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticClass: "pr-7", attrs: { cols: "12" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex flex-row justify-space-between"
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mt-3 ml-5",
                                          attrs: {
                                            fab: "",
                                            dark: "",
                                            small: "",
                                            color: "primary"
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v(
                                              "\r\n                                    mdi-book-open-variant\r\n                                    "
                                            )
                                          ])
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
                                                          _vm.classworkDetails
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
                                ]
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
                                        "font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5"
                                    },
                                    [_vm._v(_vm._s(_vm.classworkDetails.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "pt-2 d-flex flex-row " },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "font-weight-bold" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.classworkDetails.points
                                            ) + " Points"
                                          )
                                        ]
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
                                  staticClass: "pl-7 pr-5",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("div", { staticClass: "text-sm-body-2" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.classworkDetails.instruction)
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: " pb-5 pl-4 pr-4",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("div", { staticClass: "overline" }, [
                                    _vm._v("Rubrics")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list",
                                    _vm._l(
                                      _vm.classworkDetails.rubrics,
                                      function(item, index) {
                                        return _c(
                                          "v-list-item",
                                          { key: index },
                                          [
                                            _c(
                                              "v-list-item-avatar",
                                              { attrs: { tile: "" } },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.points) + "%"
                                                    )
                                                  ]
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
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(item.criteria_name)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(item.description)
                                                  )
                                                ])
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: " pb-5 pl-4 pr-4",
                                  attrs: { cols: "12" }
                                },
                                [
                                  _c("div", { staticClass: "overline" }, [
                                    _vm._v("Attachments")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list",
                                    {
                                      staticClass: "ma-0 pa-0",
                                      attrs: { dense: "" }
                                    },
                                    _vm._l(
                                      _vm.classworkDetails.attachment,
                                      function(item, i) {
                                        return _c(
                                          "v-list-item",
                                          { key: i, staticClass: "ma-0 pa-0" },
                                          [
                                            _c(
                                              "v-list-item-avatar",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      large: "",
                                                      color:
                                                        item.extension == "docx"
                                                          ? "blue"
                                                          : "red"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\r\n                                                    " +
                                                        _vm._s(
                                                          item.extension ==
                                                            "docx"
                                                            ? "mdi-file-word"
                                                            : "mdi-file-pdf"
                                                        ) +
                                                        "\r\n                                                    "
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
                                                        fn: function(ref) {
                                                          var hover = ref.hover
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
                                                                      item.attachment,
                                                                      item.extension
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);