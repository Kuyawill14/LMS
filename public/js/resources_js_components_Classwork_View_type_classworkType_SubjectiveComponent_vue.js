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
/* harmony import */ var _dialog_typedAnswerDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog/typedAnswerDialog */ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_dialog_attachLinkDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/attachLinkDialog */ "./resources/js/components/Classwork_View/type/classworkType/dialog/attachLinkDialog.vue"));
};




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails'],
  components: {
    attachlinkDiaglog: attachlinkDiaglog,
    typeAnswerDialog: _dialog_typedAnswerDialog__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    var _this = this;

    return {
      isUpdatingComment: false,
      isUpdatingComment_id: null,
      isUpdatingComment_old_data: null,
      AttachLink: false,
      IsTypeAnswer: false,
      isTypeAnswerType: 'add',
      FileList: [],
      file: [],
      fileSize: null,
      dragging: false,
      link: "test12",
      myClasssworkStatus: [],
      uploadPercentage: 0,
      isUploading: [],
      tempId: this.classworkDetails.Sub_id,
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
      isDeleting: false,
      isDeleting_id: null,
      isUploadSaving: false,
      isUploaded: false,
      valid: true,
      linkRules: [function (value) {
        return !!value || "Required.";
      }, function (value) {
        return _this.isURL(value) || "URL is not valid";
      }],
      linkNameRule: [function (value) {
        return !!value || "Required.";
      }],
      DateToday: new Date(),
      CheckeFileExtention: null,
      fileType: ['pdf', 'txt', 'docx', 'doc', 'jpg', 'jpeg', 'gif', 'svg', 'png', 'bmp', 'link'],
      extensionIcon: ['mdi-file-pdf', 'mdi-note-text-outline', 'mdi-file-word', 'mdi-file-link', 'mdi-image'],
      acceptedFileType: ['xlsx', 'xls', 'jpg', 'jpeg', 'gif', 'svg', 'png', 'bmp', 'doc', 'docx', 'ppt', 'pptx', 'pdf', 'text'],
      selected: 0,
      ScrollPosistion: 0,
      TempFile: "",
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      },
      editorOption: {
        placeholder: 'type here ...',
        theme: 'snow',
        blur: true,
        editorData: null,
        modules: {
          toolbar: {
            container: [['bold', 'italic', 'underline'], [{
              'color': []
            }], [{
              'list': 'bullet'
            }]]
          },
          syntax: {
            highlight: function highlight(text) {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      },
      editTextData: {
        title: '',
        text: ''
      },
      editTextDataIndex: null,
      pickerApiLoaded: false,
      developerKey: "AIzaSyAV2WNoaDpoda71hBAprjg_zlDHeNmiUxI",
      clientId: "469226994610-7lscojpu541au8r0ve5i7td4gmv26ol5.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive",
      oauthToken: null,
      appId: "469226994610"
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(['get_CurrentUser', 'statusDetails'])), {}, {
    extension: function extension() {
      return this.tempFile ? this.tempFile.name.split('.').pop() : '';
    },
    Checkextension: function Checkextension() {
      return this.CheckeFileExtention ? this.CheckeFileExtention.name.split('.').pop() : '';
    },
    Fileextension: function Fileextension() {
      var attach = this.classworkDetails.attachment;
      return attach.split('.').pop();
    },
    SubmittedFilextension: function SubmittedFilextension() {
      var attach = this.classworkDetails.Submitted_Answers[0].name;
      return attach.split('.').pop();
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)(['checkClassworkStatus'])), {}, {
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
      } else if (ext == 'type_answer') {
        return 'mdi-format-text';
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
      } else if (ext == 'type_answer') {
        return 'success';
      } else {
        return 'primary';
      }
    },
    format_date1: function format_date1(value) {
      if (value) {
        //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
      }
    },
    format_date: function format_date(value) {
      if (value) {
        /* return moment(String(value)).format('dddd, h:mm a') */
        return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(String(value)).tz("Asia/Manila").format('MMMM DD, YYYY, h:mm a');
      }
    },
    comment_date: function comment_date(value) {
      if (value) {
        return moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()(String(value)).tz("Asia/Manila").format('MMMM, DD YYYY, h:mm a');
      }
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.scrapeDocID();
      }
    },
    isURL: function isURL(str) {
      var url;

      try {
        url = new URL(str);
      } catch (_) {
        return false;
      }

      return url.protocol === "http:" || url.protocol === "https:";
    },
    OpenFile: function OpenFile(name, file, ext, index) {
      if (ext == 'type_answer') {
        if (this.classworkDetails.status == 'Submitted') {
          this.isTypeAnswerType = 'view';
        } else {
          this.isTypeAnswerType = 'edit';
        }

        this.editTextDataIndex = index;
        this.editTextData.title = name;
        this.editTextData.text = file;
        this.IsTypeAnswer = true;
      } else {
        window.open(file, '_blank');
      }
    },
    scrapeDocID: function scrapeDocID() {
      var path = this.linkFile;
      this.classworkDetails.Submitted_Answers.push({
        name: this.linkName,
        fileSize: '',
        fileExte: 'link',
        link: path
      });
      this.isUpIndex = this.classworkDetails.Submitted_Answers.length;
      this.AttachLink = false;
      this.AddLinkInSubmittedAnswer();
    },
    AddLinkInSubmittedAnswer: function AddLinkInSubmittedAnswer() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var index, sub_id, fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = _this2.classworkDetails.Submitted_Answers.length - 1;
                sub_id = _this2.tempId == null ? 'empty' : _this2.tempId;
                fd = new FormData();
                fd.append('Submission_id', sub_id);
                fd.append('id', _this2.classworkDetails.id);
                fd.append('class_classwork_id', _this2.classworkDetails.class_classwork_id);
                fd.append('type', _this2.classworkDetails.type);
                fd.append('fileName', _this2.classworkDetails.Submitted_Answers[index].name);
                fd.append('fileSize', _this2.classworkDetails.Submitted_Answers[index].fileSize);
                fd.append('fileExte', _this2.classworkDetails.Submitted_Answers[index].fileExte);
                fd.append('file', _this2.classworkDetails.Submitted_Answers[index].link);
                _context.next = 13;
                return axios.post('/api/student/linkAndstatus', fd).then(function (res) {
                  _this2.AttachLink = false;
                  _this2.linkName = null;
                  _this2.linkFile = null;
                  _this2.tempId = res.data;
                  _this2.classworkDetails.status = "Submitting";
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    AddTypeAnswer: function AddTypeAnswer() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var index, sub_id, fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.classworkDetails.Submitted_Answers.push({
                  name: _this3.editTextData.title,
                  fileSize: '',
                  fileExte: 'type_answer',
                  link: _this3.editTextData.text
                });

                index = _this3.classworkDetails.Submitted_Answers.length - 1;
                sub_id = _this3.tempId == null ? 'empty' : _this3.tempId;
                fd = new FormData();
                fd.append('Submission_id', sub_id);
                fd.append('id', _this3.classworkDetails.id);
                fd.append('class_classwork_id', _this3.classworkDetails.class_classwork_id);
                fd.append('type', _this3.classworkDetails.type);
                fd.append('fileName', _this3.classworkDetails.Submitted_Answers[index].name);
                fd.append('fileSize', _this3.classworkDetails.Submitted_Answers[index].fileSize);
                fd.append('fileExte', _this3.classworkDetails.Submitted_Answers[index].fileExte);
                fd.append('file', _this3.classworkDetails.Submitted_Answers[index].link);
                _context2.next = 14;
                return axios.post('/api/student/linkAndstatus', fd).then(function (res) {
                  _this3.tempId = res.data;
                  _this3.IsTypeAnswer = false;
                  _this3.isTypeAnswerType = '';
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    UpdateTypeAnswer: function UpdateTypeAnswer() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.classworkDetails.Submitted_Answers[_this4.editTextDataIndex].link = _this4.editTextData.text;
                _this4.classworkDetails.Submitted_Answers[_this4.editTextDataIndex].name = _this4.editTextData.title;
                _context3.next = 4;
                return axios.put('/api/student/update_answer/' + _this4.classworkDetails.Sub_id, {
                  answers: _this4.classworkDetails.Submitted_Answers
                }).then(function (res) {
                  _this4.IsTypeAnswer = false;
                  _this4.isTypeAnswerType = '';
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    UploadFile: function UploadFile() {
      this.$refs.UploadAttachFile.$refs.input.click();
    },
    UploadMoreFile: function UploadMoreFile() {
      if (this.file.length <= 4) {
        this.$refs.AttAchMoreFile.click();
      } else {}
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
    onChange: function onChange(file) {
      var _this5 = this;

      var fileData = this.FileList[this.FileList.length - 1];
      this.CheckeFileExtention = fileData;
      var Checker = false;
      this.acceptedFileType.forEach(function (item) {
        if (_this5.Checkextension == item) {
          Checker = true;
          return;
        }
      });

      if (Checker == true) {
        if (fileData.size <= 10000000) {
          this.createFile(fileData);
        } else {
          this.toastError('Your file is to big, maximum file size is 10mb only!');
        }
      } else {
        this.toastError('This file format is not yet supported for upload!');
      }
    },
    createFile: function createFile(file) {
      var IndexFile;
      IndexFile = this.classworkDetails.Submitted_Answers.length;
      this.isUploading[IndexFile] = true;
      this.fileIndex = IndexFile;
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
      }

      this.isUpIndex = this.classworkDetails.Submitted_Answers.length;
      this.classworkDetails.Submitted_Answers.push({
        name: this.tempFile.name,
        fileSize: this.fileSize,
        fileExte: this.extension,
        link: '',
        file: this.tempFile
      });
      this.fileIndex = this.file.length;
      this.isUploadSaving = true;
      this.UpdateSubmission(this.classworkDetails.Submitted_Answers.length - 1);
    },
    removeFile: function removeFile(index) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this6.isDeleting_id = index;
                _this6.isDeleting = true;
                _context4.next = 4;
                return axios.put('/api/submission/file-remove/' + _this6.tempId, {
                  Fileindex: index
                }).then(function (res) {
                  _this6.uploadPercentage = 0;

                  _this6.file.splice(index, 1);

                  _this6.tempId = null;
                  _this6.isUploading[index] = false;
                  _this6.isDeleting = false;
                  _this6.isDeleting_id = null;
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    test: function test() {
      var data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="' + this.link + '"></iframe><div><br></div>'; ////console.log(data);
    },
    checkStatus: function checkStatus(type) {
      var _this7 = this;

      var data = {};
      data.id = this.$route.query.clwk;
      data.type = this.classworkDetails.type;
      this.$store.dispatch('checkClassworkStatus', data).then(function () {
        _this7.myClasssworkStatus = _this7.statusDetails;
        _this7.tempId = _this7.statusDetails.Sub_id;

        if (type != 'submit') {
          _this7.isloading = !_this7.isloading;
        }
      });
    },
    UpdateSubmission: function UpdateSubmission(index) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var sub_id, fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sub_id = _this8.tempId == null ? 'empty' : _this8.tempId;
                fd = new FormData();
                fd.append('Submission_id', sub_id);
                fd.append('id', _this8.classworkDetails.id);
                fd.append('class_classwork_id', _this8.classworkDetails.class_classwork_id);
                fd.append('type', _this8.classworkDetails.type);
                fd.append('fileName', _this8.classworkDetails.Submitted_Answers[index].name);
                fd.append('fileSize', _this8.classworkDetails.Submitted_Answers[index].fileSize);
                fd.append('fileExte', _this8.classworkDetails.Submitted_Answers[index].fileExte);
                fd.append('file', _this8.classworkDetails.Submitted_Answers[index].file);
                _context5.next = 12;
                return axios.post('/api/student/update-status', fd, {
                  onUploadProgress: function onUploadProgress(progressEvent) {
                    var total = progressEvent.total;
                    var totalLength = progressEvent.lengthComputable ? total : null;

                    if (totalLength != null) {
                      _this8.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
                    }
                  }
                }).then(function (res) {
                  /* if(this.classworkDetails.Submitted_Answers.length == 0){
                     this.file[this.isUpIndex].link = res.data.link;
                  }
                  else{ */
                  _this8.classworkDetails.Submitted_Answers[_this8.isUpIndex].link = res.data.link; //}

                  //}
                  _this8.tempId = _this8.tempId == null ? res.data.id : _this8.tempId;
                  _this8.isUploadSaving = false;
                  _this8.isUpIndex = null;
                  _this8.classworkDetails.status = "Submitting";
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    DeleteUpload: function DeleteUpload(index) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this9.isDeleting_id = index;
                _this9.isDeleting = true;
                type = 'submit';
                _context6.next = 5;
                return axios.put('/api/submission/file-remove/' + _this9.tempId, {
                  Fileindex: index
                }).then(function (res) {
                  _this9.classworkDetails.Submitted_Answers.splice(index, 1);

                  if (_this9.FileList.length != 0) {
                    _this9.FileList.splice(index, 1);
                  }

                  if (_this9.classworkDetails.Submitted_Answers.length == 0) {
                    _this9.classworkDetails.Sub_id = null;
                    _this9.tempId = null;
                  }

                  _this9.uploadPercentage = 0;
                  _this9.isUploading[index] = false;
                  _this9.isDeleting = false;
                  _this9.isDeleting_id = null;
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    SubmitClasswork: function SubmitClasswork() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this10.IsSaving = true;
                type = 'submit';
                _context7.next = 4;
                return axios.put('/api/student/submit-classwork/' + _this10.tempId).then(function (res) {
                  if (res.status == 200) {
                    //this.checkStatus(type);
                    _this10.classworkDetails.status = 'Submitted';
                    _this10.IsSaving = false;
                    _this10.isResubmit = false;
                  }
                });

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    addComment: function addComment(details) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                data = {};
                _this11.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.course_id = _this11.$route.params.id;
                data.comment = _this11.comment;
                _context8.next = 9;
                return axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  ////console.log(res.data);
                  if (res.status == 200) {
                    _this11.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic,
                      u_id: _this11.get_CurrentUser.user_id,
                      comment_date: new Date()
                    });

                    _this11.comment = '';
                  }
                });

              case 9:
                _this11.isCommenting = false;

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this12.classworkDetails.comments.splice(index, 1);
                  }
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    UpdateComment: function UpdateComment(content, id) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios.put('/api/post/comment/update/' + id, {
                  comment: content
                }).then(function (res) {
                  _this13.isUpdatingComment = false;
                  _this13.isUpdatingComment_id = null;
                  _this13.isUpdatingComment_old_data = null;
                });

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    MarkAsSubmitting: function MarkAsSubmitting(id) {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios.put('/api/student/markAsSubmitting/' + id).then(function () {
                  _this14.classworkDetails.status = 'Submitting';
                });

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    clickResubmit: function clickResubmit() {
      if (!this.isResubmit) {
        this.MarkAsSubmitting(this.classworkDetails.Sub_id);
        this.isResubmit = !this.isResubmit;
      } else {
        this.SubmitClasswork();
      }
    },
    driveIconClicked: function driveIconClicked() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return gapi.load("auth2", function () {
                  gapi.auth2.authorize({
                    client_id: _this15.clientId,
                    scope: _this15.scope,
                    immediate: false
                  }, _this15.handleAuthResult);
                });

              case 2:
                gapi.load("picker", function () {
                  _this15.pickerApiLoaded = true;

                  _this15.createPicker();
                });

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    handleAuthResult: function handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },
    createPicker: function createPicker() {
      var docsView = new google.picker.DocsView(google.picker.ViewId.DOCS).setIncludeFolders(true).setSelectFolderEnabled(true);

      if (this.pickerApiLoaded && this.oauthToken) {
        var picker = new google.picker.PickerBuilder().enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED).enableFeature(google.picker.Feature.MULTISELECT_ENABLED).setAppId(this.appId).addView(docsView).addView(new google.picker.DocsUploadView()).setOAuthToken(this.oauthToken).setDeveloperKey(this.developerKey).setCallback(this.pickerCallback).build();
        picker.setVisible(true);
      }
    },
    pickerCallback: function pickerCallback(data) {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13() {
        var url, name, doc, fileID, gdurl, type, role;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                //console.log("PickerCallback", data);
                url = "nothing";
                name = "nothing";
                doc = "";
                fileID = "";
                gdurl = "";
                type = "anyone";
                role = "editor";

                if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
                  //alert(data.docs.length);
                  data.docs.forEach(function (item) {
                    //console.log(item.name);
                    _this16.linkName = data.docs[0].name;
                    _this16.linkFile = data.docs[0].url;

                    _this16.scrapeDocID();
                  }); //console.log(data.length);

                  /*   this.linkName = data.docs[0].name;
                    this.linkFile = data.docs[0].url;
                    this.scrapeDocID(); */
                }

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    }
  }),
  created: function created() {//this.checkStatus();

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  },
  mounted: function mounted() {
    this.isloading = !this.isloading;
    window.addEventListener('scroll', this.handleScroll);
    var gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Type', 'answerData'],
  data: function data() {
    return {
      editorOption: {
        placeholder: 'type here ...',
        theme: 'snow',
        blur: true,
        editorData: null,
        modules: {
          toolbar: {
            container: [['bold', 'italic', 'underline'], [{
              'color': []
            }], [{
              'list': 'bullet'
            }]]
            /* handlers: {
                image: this.imageHandler
            } */

          },
          syntax: {
            highlight: function highlight(text) {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      },
      Answer: {
        title: '',
        text: ''
      },
      isAdding: false
    };
  },
  watch: {
    'Type': function Type(arMsg) {
      if (arMsg == 'edit' || arMsg == 'view') {
        this.Answer.title = this.answerData.title;
        this.Answer.text = this.answerData.text;
      } else {
        this.Answer.title = '';
        this.Answer.text = '';
      }
    }
  },
  methods: {
    SaveAnswer: function SaveAnswer() {
      var _this = this;

      if (this.Type == 'add') {
        this.isAdding = true;
        this.$emit('SaveAnswer', this.Answer);
        setTimeout(function () {
          _this.isAdding = false;
        }, 600);
      } else if (this.Type == 'edit') {
        this.isAdding = true;
        this.$emit('UpdateAnswer', this.Answer);
        setTimeout(function () {
          _this.isAdding = false;
        }, 600);
      }
    }
  },
  mounted: function mounted() {
    if (this.Type == 'edit' || this.Type == 'view') {
      this.Answer = this.answerData;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nspan img{\n        max-width: 100% !important;\n        max-height: 20rem !important;\n}\n.dropZone {\n  width: 100%;\n  height: 7rem;\n  position: relative;\n  border: 2px dashed #eee;\n  border-radius: .3rem;\n}\n\n/* .dropZone:hover {\n  border: 1px dashed #2196F3;\n} */\n\n/* .dropZone:hover .dropZone-title {\n  color: #2196F3;\n} */\n.dropZone-info {\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.dropZone-title {\n  color: #787878;\n}\n.dropZone input {\n  position: absolute;\n  cursor: pointer;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.dropZone-upload-limit-info {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.dropZone-over {\n  background: #E0E0E0;\n  opacity: 0.8;\n}\n.dropZone-uploaded {\n  padding-top: 4rem;\n  height: auto;\n  position: relative;\n}\n.dropZone-uploaded-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.filePreview{\n  width: 100%;\n}\n.removeFile {\n  width: 200px;\n}\n /* width */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n    \n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n.commentContent  img{\n        max-width: 100% !important;\n        max-height: 20rem !important;\n}\n.commentContent img{\n            max-height: 10rem !important;\n}\n.CommentEditor >  iframe{\n        width: 100% !important;\n    height: 20rem !important;\n}\n.CommentEditor >  .ql-editor img{\n\n        max-height: 25rem !important;\n}\n.CommentEditor >  .ql-container{\n        max-height: 70rem;\n}\ndiv.ql-tooltip{\n        left: 0px !important;\n        top: -8px !important;\n}\ndiv>.ql-tooltip-arrow{\n        display: none !important;\n}\n\n    \n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-in-enter-active {\r\n  transition: all 0.5s ease;\n}\n.fade-in-leave-active {\r\n  transition: all 0.5s ease;\n}\n.fade-in-enter, .fade-in-leave-to {\r\n  position: absolute; /* add for smooth transition between elements */\r\n  opacity: 0;\n}\n.centered{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\r\n\r\n\r\n /* .ql-toolbar.ql-snow {\r\n        background: #f2f2f2;\r\n        border: none;\r\n }\r\n .ql-bold,.ql-italic,.ql-underline, .ql-strike\r\n    ,.ql-picker-label,.ql-align,.ql-list,.ql-link\r\n    ,.ql-image,.ql-video\r\n    {\r\n        outline: none !important;\r\n        border:none !important;\r\n    }  */\n.centered-input >>> input {\r\n    text-align: center\n}\n.editor .ql-editor img{\r\n   \r\n    max-height: 10rem !important;\n}\n.editor .ql-container{\r\n    max-height: 50rem;\n}\n.editor .ql-editor{\r\n    min-height: 400px !important;\r\n    max-height: 600px !important;\n}\r\n\r\n/* .editor .ql-editor input{\r\n    color: black !important;\r\n} */\r\n\r\n\r\n \r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typedAnswerDialog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=template&id=5b2cbc49& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&");
/* harmony import */ var _SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typedAnswerDialog.vue?vue&type=template&id=99453dbe& */ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe&");
/* harmony import */ var _typedAnswerDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typedAnswerDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _typedAnswerDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typedAnswerDialog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _typedAnswerDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__.render,
  _typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue"
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

/***/ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typedAnswerDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typedAnswerDialog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=template&id=5b2cbc49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typedAnswerDialog_vue_vue_type_template_id_99453dbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typedAnswerDialog.vue?vue&type=template&id=99453dbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
                  _vm.classworkDetails.graded
                    ? _c("div", { staticClass: "white--text Subtitle-1" }, [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v("Score: ")
                        ]),
                        _vm._v(" "),
                        _c("span", {}, [
                          _vm._v(
                            _vm._s(
                              _vm.classworkDetails.score +
                                " /" +
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
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.validate()
                }
              },
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
                      _c(
                        "span",
                        { staticClass: "text-h6" },
                        [
                          _vm._v(
                            " Attach Link \r\n                    \r\n                     "
                          ),
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
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                color: "primary",
                                                dark: ""
                                              }
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            "\r\n                              mdi-information\r\n                            "
                                          )
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
                                  "\r\n                                Supported Links:\r\n                                "
                                ),
                                _c("ul", [
                                  _c("li", [
                                    _vm._v(
                                      "https://docs.google.com/presentation/d/[document-id]"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(
                                      "https://docs.google.com/document/d/[document-id]"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(
                                      "https://www.youtube.com/watch?v=[video-id]"
                                    )
                                  ])
                                ]),
                                _vm._v(
                                  "\r\n                                  Note:\r\n                                "
                                ),
                                _c("ul", [
                                  _c("li", [
                                    _vm._v(
                                      "If a link is from google drive make sure to that the link is shared to anyone."
                                    )
                                  ])
                                ])
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
                            { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  rules: _vm.linkNameRule,
                                  outlined: "",
                                  dense: _vm.$vuetify.breakpoint.mdAndUp,
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
                                  rules: _vm.linkRules,
                                  outlined: "",
                                  dense: _vm.$vuetify.breakpoint.mdAndUp,
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
                          attrs: {
                            color: "primary",
                            block: "",
                            rounded: "",
                            type: "submit",
                            disabled: !_vm.valid
                          }
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        {
          ref: "ContainerSize",
          class: _vm.$vuetify.breakpoint.mdAndUp ? "pa-3" : "pa-0",
          attrs: { justify: "center", "no-gutters": "" }
        },
        [
          (_vm.$vuetify.breakpoint.mdAndUp
          ? true
          : _vm.selected == 1 || _vm.selected == 2)
            ? _c(
                "v-col",
                {
                  staticClass: "mb-0 pb-0",
                  attrs: { cols: "12", md: "4", lg: "4", xl: "4" }
                },
                [
                  _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 1
                    ? _c(
                        "v-card",
                        {
                          class: _vm.$vuetify.breakpoint.mdAndUp
                            ? "pa-7"
                            : "pa-4",
                          attrs: {
                            outlined: _vm.$vuetify.breakpoint.mdAndUp,
                            elevation: _vm.$vuetify.breakpoint.mdAndUp
                              ? "1"
                              : "0"
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
                                      staticClass: "ma-0 pa-0",
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
                                                          {
                                                            attrs: { dark: "" }
                                                          },
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
                                          _c("span", [
                                            _vm._v("Back to classworks")
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
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
                                      staticClass:
                                        "font-weight-medium text-body-2 mt-3"
                                    },
                                    [_vm._v("Your Work")]
                                  ),
                                  _vm._v(" "),
                                  _vm.classworkDetails.publish == null
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "div",
                                            [
                                              _vm.classworkDetails.status ==
                                                "Submitted" &&
                                              !_vm.classworkDetails.graded &&
                                              (_vm.classworkDetails
                                                .availability == 1
                                                ? _vm.format_date1(
                                                    _vm.classworkDetails
                                                      .currentDate
                                                  ) <=
                                                  _vm.format_date1(
                                                    _vm.classworkDetails.to_date
                                                  )
                                                : true)
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "blue--text",
                                                      attrs: {
                                                        rounded: "",
                                                        text: ""
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.clickResubmit()
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.isResubmit
                                                            ? ""
                                                            : "Resubmit"
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.classworkDetails.graded &&
                                          _vm.$vuetify.breakpoint.mdAndUp
                                            ? _c(
                                                "v-chip",
                                                {
                                                  staticClass: "ma-2",
                                                  attrs: {
                                                    color: "green",
                                                    outlined: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                            Graded: " +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .score
                                                      ) +
                                                      " /" +
                                                      _vm._s(
                                                        _vm.classworkDetails
                                                          .points
                                                      ) +
                                                      "\r\n                            "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "pl-1 pr-1",
                                  attrs: { cols: "12" }
                                },
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
                              _c("v-file-input", {
                                ref: "UploadAttachFile",
                                staticClass: "d-none",
                                attrs: {
                                  multiple: "",
                                  accept:
                                    ".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain"
                                },
                                on: { change: _vm.onChange },
                                model: {
                                  value: _vm.FileList,
                                  callback: function($$v) {
                                    _vm.FileList = $$v
                                  },
                                  expression: "FileList"
                                }
                              }),
                              _vm._v(" "),
                              !_vm.isloading
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "ma-0 pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "mb-0 pb-0",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            {
                                              staticClass: "mb-2",
                                              attrs: { "ma-0": "", "pa-0": "" }
                                            },
                                            _vm._l(
                                              _vm.classworkDetails
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
                                                            attrs: {
                                                              link: "",
                                                              disabled:
                                                                _vm.isUpIndex ==
                                                                  index &&
                                                                _vm.isUploadSaving
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item-avatar",
                                                              {
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.OpenFile(
                                                                      item.name,
                                                                      item.link,
                                                                      item.fileExte,
                                                                      index
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      color: _vm.CheckFileIconColor(
                                                                        item.fileExte
                                                                      )
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\r\n                                                " +
                                                                        _vm._s(
                                                                          _vm.CheckFileIcon(
                                                                            item.fileExte
                                                                          )
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
                                                                      item.name,
                                                                      item.link,
                                                                      item.fileExte,
                                                                      index
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
                                                                ),
                                                                _vm._v(" "),
                                                                _vm.isUploading[
                                                                  index
                                                                ] &&
                                                                _vm.isUploadSaving
                                                                  ? _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _vm.isUpIndex ==
                                                                        index
                                                                          ? _c(
                                                                              "v-progress-linear",
                                                                              {
                                                                                attrs: {
                                                                                  color:
                                                                                    "primary",
                                                                                  indeterminate:
                                                                                    "",
                                                                                  rounded:
                                                                                    "",
                                                                                  height:
                                                                                    "5"
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
                                                            !_vm
                                                              .classworkDetails
                                                              .graded &&
                                                            (_vm
                                                              .classworkDetails
                                                              .availability == 1
                                                              ? _vm.format_date1(
                                                                  _vm
                                                                    .classworkDetails
                                                                    .currentDate
                                                                ) <=
                                                                _vm.format_date1(
                                                                  _vm
                                                                    .classworkDetails
                                                                    .to_date
                                                                )
                                                              : true)
                                                              ? _c(
                                                                  "v-list-item-action",
                                                                  [
                                                                    (_vm
                                                                      .classworkDetails
                                                                      .status ==
                                                                      "Submitting" ||
                                                                      _vm.isResubmit) &&
                                                                    _vm
                                                                      .classworkDetails
                                                                      .publish ==
                                                                      null
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
                                                                                              directives: [
                                                                                                {
                                                                                                  name:
                                                                                                    "show",
                                                                                                  rawName:
                                                                                                    "v-show",
                                                                                                  value:
                                                                                                    _vm.isUpIndex !=
                                                                                                    index,
                                                                                                  expression:
                                                                                                    "isUpIndex != index"
                                                                                                }
                                                                                              ],
                                                                                              attrs: {
                                                                                                loading:
                                                                                                  _vm.isDeleting &&
                                                                                                  _vm.isDeleting_id ==
                                                                                                    index,
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
                                          staticClass: "ma-0 pa-0 mb-4 ",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _vm.classworkDetails.availability == 0
                                            ? _c(
                                                "div",
                                                [
                                                  _vm.isResubmit ||
                                                  _vm.classworkDetails.status ==
                                                    "Submitting" ||
                                                    _vm.classworkDetails
                                                      .status == null
                                                    ? _c(
                                                        "v-menu",
                                                        {
                                                          attrs: {
                                                            "max-width": "250",
                                                            transition:
                                                              "scale-transition",
                                                            "offset-y": ""
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
                                                                            staticClass:
                                                                              "pl-12 pr-12 pb-3 pt-3",
                                                                            attrs: {
                                                                              loading:
                                                                                _vm.isUploadSaving,
                                                                              block:
                                                                                "",
                                                                              color:
                                                                                "primary",
                                                                              dark:
                                                                                "",
                                                                              disabled:
                                                                                _vm
                                                                                  .classworkDetails
                                                                                  .availability ==
                                                                                  1 &&
                                                                                _vm.format_date1(
                                                                                  _vm
                                                                                    .classworkDetails
                                                                                    .currentDate
                                                                                ) <
                                                                                  _vm.format_date1(
                                                                                    _vm
                                                                                      .classworkDetails
                                                                                      .from_date
                                                                                  ),
                                                                              outlined:
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
                                                                        _vm._v(
                                                                          "\r\n                                      " +
                                                                            _vm._s(
                                                                              _vm.isUploadSaving
                                                                                ? "Uploading.."
                                                                                : "Add"
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              right:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-plus"
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
                                                            2279035836
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list",
                                                            {
                                                              attrs: {
                                                                nav: "",
                                                                dense: ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-list-item",
                                                                {
                                                                  attrs: {
                                                                    link: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      ;(_vm.IsTypeAnswer = !_vm.IsTypeAnswer),
                                                                        (_vm.editTextData.title =
                                                                          ""),
                                                                        (_vm.editTextData.text =
                                                                          ""),
                                                                        (_vm.isTypeAnswerType =
                                                                          "add")
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "red",
                                                                        left: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-text"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Write Answer\r\n                                    "
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item",
                                                                {
                                                                  attrs: {
                                                                    link: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.UploadFile()
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        left: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-cloud-upload-outline"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    " Upload File\r\n                                    "
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-list-item",
                                                                {
                                                                  attrs: {
                                                                    link: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      _vm.AttachLink = !_vm.AttachLink
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "blue",
                                                                        left: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-link-variant"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "Attach Link\r\n                                    "
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _vm
                                                                .get_CurrentUser
                                                                .id == 8778
                                                                ? _c(
                                                                    "v-list-item",
                                                                    {
                                                                      attrs: {
                                                                        link: ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.driveIconClicked()
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            color:
                                                                              "green",
                                                                            left:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-google-drive"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        "Google Drive\r\n                                    "
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
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.classworkDetails.availability == 1
                                            ? _c("div", [
                                                (!_vm.classworkDetails.graded &&
                                                  _vm.classworkDetails
                                                    .publish == null &&
                                                  (_vm.classworkDetails
                                                    .availability == 1
                                                    ? _vm.format_date1(
                                                        _vm.classworkDetails
                                                          .currentDate
                                                      ) <=
                                                      _vm.format_date1(
                                                        _vm.classworkDetails
                                                          .to_date
                                                      )
                                                    : true)) ||
                                                _vm.classworkDetails
                                                  .allow_resubmit == 1
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _vm.isResubmit ||
                                                        _vm.classworkDetails
                                                          .status ==
                                                          "Submitting" ||
                                                          _vm.classworkDetails
                                                            .status == null
                                                          ? _c(
                                                              "v-menu",
                                                              {
                                                                attrs: {
                                                                  "max-width":
                                                                    "250",
                                                                  transition:
                                                                    "scale-transition",
                                                                  "offset-y": ""
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
                                                                                  staticClass:
                                                                                    "pl-12 pr-12 pb-3 pt-3",
                                                                                  attrs: {
                                                                                    loading:
                                                                                      _vm.isUploadSaving,
                                                                                    block:
                                                                                      "",
                                                                                    color:
                                                                                      "primary",
                                                                                    dark:
                                                                                      "",
                                                                                    disabled:
                                                                                      _vm
                                                                                        .classworkDetails
                                                                                        .availability ==
                                                                                        1 &&
                                                                                      _vm.format_date1(
                                                                                        _vm
                                                                                          .classworkDetails
                                                                                          .currentDate
                                                                                      ) <
                                                                                        _vm.format_date1(
                                                                                          _vm
                                                                                            .classworkDetails
                                                                                            .from_date
                                                                                        ),
                                                                                    outlined:
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
                                                                              _vm._v(
                                                                                "\r\n                                      " +
                                                                                  _vm._s(
                                                                                    attrs.expanded
                                                                                  ) +
                                                                                  "\r\n                                        " +
                                                                                  _vm._s(
                                                                                    _vm.isUploadSaving
                                                                                      ? "Uploading.."
                                                                                      : "Add"
                                                                                  ) +
                                                                                  " "
                                                                              ),
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    right:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "mdi-plus"
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
                                                                  3857390564
                                                                )
                                                              },
                                                              [
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list",
                                                                  {
                                                                    attrs: {
                                                                      nav: "",
                                                                      dense: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            ;(_vm.IsTypeAnswer = !_vm.IsTypeAnswer),
                                                                              (_vm.editTextData.title =
                                                                                ""),
                                                                              (_vm.editTextData.text =
                                                                                ""),
                                                                              (_vm.isTypeAnswerType =
                                                                                "add")
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "red",
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-text"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "Write Answer\r\n                                    "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.UploadFile()
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-cloud-upload-outline"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " Upload File\r\n                                      "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.AttachLink = !_vm.AttachLink
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "blue",
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-link-variant"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "Attach Link\r\n                                      "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm
                                                                      .get_CurrentUser
                                                                      .id ==
                                                                    8778
                                                                      ? _c(
                                                                          "v-list-item",
                                                                          {
                                                                            attrs: {
                                                                              link:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.driveIconClicked()
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-icon",
                                                                              {
                                                                                attrs: {
                                                                                  color:
                                                                                    "green",
                                                                                  left:
                                                                                    ""
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-google-drive"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              "Google Drive\r\n                                      "
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
                                                          : _vm._e()
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.classworkDetails
                                                  .response_late == 1 &&
                                                _vm.format_date1(
                                                  _vm.classworkDetails
                                                    .currentDate
                                                ) >
                                                  _vm.format_date1(
                                                    _vm.classworkDetails
                                                      .from_date
                                                  )
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _vm.isResubmit ||
                                                        _vm.classworkDetails
                                                          .status ==
                                                          "Submitting" ||
                                                          _vm.classworkDetails
                                                            .status == null
                                                          ? _c(
                                                              "v-menu",
                                                              {
                                                                attrs: {
                                                                  "max-width":
                                                                    "250",
                                                                  transition:
                                                                    "scale-transition",
                                                                  "offset-y": ""
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
                                                                                  staticClass:
                                                                                    "pl-12 pr-12 pb-3 pt-3",
                                                                                  attrs: {
                                                                                    loading:
                                                                                      _vm.isUploadSaving,
                                                                                    block:
                                                                                      "",
                                                                                    color:
                                                                                      "primary",
                                                                                    dark:
                                                                                      "",
                                                                                    disabled:
                                                                                      _vm
                                                                                        .classworkDetails
                                                                                        .availability ==
                                                                                        1 &&
                                                                                      _vm.format_date1(
                                                                                        _vm
                                                                                          .classworkDetails
                                                                                          .currentDate
                                                                                      ) <
                                                                                        _vm.format_date1(
                                                                                          _vm
                                                                                            .classworkDetails
                                                                                            .from_date
                                                                                        ),
                                                                                    outlined:
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
                                                                              _vm._v(
                                                                                "\r\n                                        " +
                                                                                  _vm._s(
                                                                                    attrs.expanded
                                                                                  ) +
                                                                                  "\r\n                                          " +
                                                                                  _vm._s(
                                                                                    _vm.isUploadSaving
                                                                                      ? "Uploading.."
                                                                                      : "Add"
                                                                                  ) +
                                                                                  " "
                                                                              ),
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    right:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "mdi-plus"
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
                                                                  2000770276
                                                                )
                                                              },
                                                              [
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list",
                                                                  {
                                                                    attrs: {
                                                                      nav: "",
                                                                      dense: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            ;(_vm.IsTypeAnswer = !_vm.IsTypeAnswer),
                                                                              (_vm.editTextData.title =
                                                                                ""),
                                                                              (_vm.editTextData.text =
                                                                                ""),
                                                                              (_vm.isTypeAnswerType =
                                                                                "add")
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "red",
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-text"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "Write Answer\r\n                                      "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.UploadFile()
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-cloud-upload-outline"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " Upload File\r\n                                        "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item",
                                                                      {
                                                                        attrs: {
                                                                          link:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.AttachLink = !_vm.AttachLink
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-icon",
                                                                          {
                                                                            attrs: {
                                                                              color:
                                                                                "blue",
                                                                              left:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "mdi-link-variant"
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "Attach Link\r\n                                        "
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm
                                                                      .get_CurrentUser
                                                                      .id ==
                                                                    8778
                                                                      ? _c(
                                                                          "v-list-item",
                                                                          {
                                                                            attrs: {
                                                                              link:
                                                                                ""
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.driveIconClicked()
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-icon",
                                                                              {
                                                                                attrs: {
                                                                                  color:
                                                                                    "green",
                                                                                  left:
                                                                                    ""
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-google-drive"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              "Google Drive\r\n                                        "
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
                                                          : _vm._e()
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ])
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.classworkDetails.availability == 0
                                        ? _c(
                                            "v-col",
                                            {
                                              staticClass: "ma-0 pa-0 mb-1 ",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass:
                                                    "pl-12 pr-12 pb-3 pt-3",
                                                  attrs: {
                                                    disabled:
                                                      _vm.classworkDetails
                                                        .Submitted_Answers
                                                        .length == 0 ||
                                                      _vm.classworkDetails
                                                        .publish != null,
                                                    block: "",
                                                    loading: _vm.IsSaving,
                                                    color:
                                                      _vm.classworkDetails
                                                        .status ==
                                                        "Submitted" &&
                                                      !_vm.isResubmit
                                                        ? "success"
                                                        : "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.classworkDetails
                                                        .status ==
                                                        "Submitted" &&
                                                      !_vm.isResubmit
                                                        ? ""
                                                        : _vm.SubmitClasswork()
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm.classworkDetails.status ==
                                                    "Submitted" &&
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
                                                        _vm.classworkDetails
                                                          .status ==
                                                          "Submitted" &&
                                                          !_vm.isResubmit
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
                                        : _c(
                                            "v-col",
                                            {
                                              staticClass: "ma-0 pa-0 mb-1 ",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _vm.format_date1(
                                                    _vm.classworkDetails
                                                      .currentDate
                                                  ) >=
                                                  _vm.format_date1(
                                                    _vm.classworkDetails
                                                      .from_date
                                                  )
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "pl-12 pr-12 pb-3 pt-3",
                                                              attrs: {
                                                                disabled:
                                                                  _vm
                                                                    .classworkDetails
                                                                    .Submitted_Answers
                                                                    .length ==
                                                                  0,
                                                                block: "",
                                                                loading:
                                                                  _vm.IsSaving,
                                                                color:
                                                                  _vm
                                                                    .classworkDetails
                                                                    .status ==
                                                                    "Submitted" &&
                                                                  !_vm.isResubmit
                                                                    ? "success"
                                                                    : "primary"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm
                                                                    .classworkDetails
                                                                    .status ==
                                                                    "Submitted" &&
                                                                  !_vm.isResubmit
                                                                    ? ""
                                                                    : _vm.SubmitClasswork()
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm
                                                                .classworkDetails
                                                                .status ==
                                                                "Submitted" &&
                                                              !_vm.isResubmit
                                                                ? _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        left: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-check"
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(
                                                                "\r\n                                    " +
                                                                  _vm._s(
                                                                    _vm
                                                                      .classworkDetails
                                                                      .status ==
                                                                      "Submitted" &&
                                                                      !_vm.isResubmit
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
                                                    : _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                block: "",
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
                                      _vm.classworkDetails.graded
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "font-weight-medium text-body-2 mt-3"
                                                },
                                                [_vm._v("Graded Work")]
                                              ),
                                              _vm._v(" "),
                                              _c("v-divider", {
                                                staticClass: "pr-1 pl-1 mt-1"
                                              })
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
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 2
                    ? _c(
                        "v-card",
                        {
                          class: _vm.$vuetify.breakpoint.mdAndUp ? "mt-4" : "",
                          attrs: {
                            outlined: _vm.$vuetify.breakpoint.mdAndUp,
                            elevation: _vm.$vuetify.breakpoint.mdAndUp ? 1 : 0
                          }
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
                            {
                              staticClass: "mb-0 pb-0",
                              staticStyle: {
                                "overflow-y": "scroll",
                                "scrollbar-width": "thin"
                              },
                              attrs: {
                                "max-height": _vm.$vuetify.breakpoint.mdAndUp
                                  ? "500"
                                  : "500"
                              }
                            },
                            _vm._l(_vm.classworkDetails.comments, function(
                              item,
                              i
                            ) {
                              return _c(
                                "v-list-item",
                                { key: i, staticClass: "mb-0 pb-0 mt-0 pt-0" },
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
                                                  innerHTML: _vm._s(item.name)
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("editor", {
                                                staticClass: "CommentEditor",
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
                                                          _vm.get_CurrentUser.id
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
                                                                  "offset-x": ""
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
                                                                    attrs: {
                                                                      dense: "",
                                                                      nav: ""
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
                                                                    _vm._v(" "),
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
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("div", [
                                                _c("span", {
                                                  staticClass: "commentContent",
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
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 0
            ? _c(
                "v-col",
                {
                  class: !_vm.$vuetify.breakpoint.mdAndUp
                    ? "mt-0 pl-0 pt-0"
                    : "pt-0 pl-5",
                  attrs: { cols: "12", md: "8", lg: "8", xl: "8" }
                },
                [
                  _c(
                    "v-card",
                    {
                      class: _vm.$vuetify.breakpoint.mdAndUp ? "pa-5" : "pa-1",
                      attrs: {
                        outlined: _vm.$vuetify.breakpoint.mdAndUp,
                        elevation: _vm.$vuetify.breakpoint.mdAndUp ? 1 : 0
                      }
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
                                    {
                                      staticClass: "pr-7",
                                      attrs: { cols: "12" }
                                    },
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
                                      _c("span", {
                                        staticClass: "text-sm-body-2 ",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.classworkDetails.instruction
                                          )
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.classworkDetails.rubrics.length != 0
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: " pb-5 pl-4 pr-4",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "overline" },
                                            [_vm._v("Rubrics")]
                                          ),
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
                                                              _vm._s(
                                                                item.points
                                                              ) + "%"
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
                                                              _vm._s(
                                                                item.criteria_name
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-subtitle",
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.description
                                                              )
                                                            )
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.classworkDetails.attachment != null
                                    ? _c(
                                        "v-col",
                                        {
                                          staticClass: " pb-5 pl-4 pr-4",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "overline" },
                                            [_vm._v("Attachments")]
                                          ),
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
                                                              "\r\n                                                    " +
                                                                _vm._s(
                                                                  _vm.CheckFileIcon(
                                                                    item.extension
                                                                  )
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
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            scrollable: "",
            persistent: _vm.isTypeAnswerType != "view",
            "max-width": "700"
          },
          model: {
            value: _vm.IsTypeAnswer,
            callback: function($$v) {
              _vm.IsTypeAnswer = $$v
            },
            expression: "IsTypeAnswer"
          }
        },
        [
          _vm.isTypeAnswerType != "view"
            ? _c(
                "v-card",
                { staticClass: "pa-1" },
                [
                  _c("v-text-field", {
                    staticClass: "mb-2 mt-1",
                    attrs: { label: "Title", "hide-details": "", outlined: "" },
                    model: {
                      value: _vm.editTextData.title,
                      callback: function($$v) {
                        _vm.$set(_vm.editTextData, "title", $$v)
                      },
                      expression: "editTextData.title"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("editor", {
                        ref: "myTextEditor",
                        staticClass: "editor",
                        staticStyle: {
                          "min-height": "400px !important",
                          "max-height": "700px !important"
                        },
                        attrs: {
                          theme: "snow",
                          placeholder: "Typed answer",
                          options: _vm.editorOption
                        },
                        model: {
                          value: _vm.editTextData.text,
                          callback: function($$v) {
                            _vm.$set(_vm.editTextData, "text", $$v)
                          },
                          expression: "editTextData.text"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex pt-1 mb-1" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "secondary" },
                          on: {
                            click: function($event) {
                              ;(_vm.isTypeAnswerType = ""),
                                (_vm.IsTypeAnswer = false),
                                (_vm.editTextData.title = ""),
                                (_vm.editTextData.text = "")
                            }
                          }
                        },
                        [_vm._v("  Cancel")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.isTypeAnswerType == "add"
                                ? _vm.AddTypeAnswer()
                                : _vm.UpdateTypeAnswer()
                            }
                          }
                        },
                        [
                          _vm._v(
                            " \r\n                  " +
                              _vm._s(
                                _vm.isTypeAnswerType == "add"
                                  ? "Save"
                                  : "Update"
                              ) +
                              "\r\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _c("v-card", [
                _c(
                  "div",
                  {
                    staticClass: "pa-5",
                    staticStyle: {
                      "max-height": "650px",
                      "overflow-y": "scroll"
                    }
                  },
                  [
                    _c("span", {
                      staticStyle: { "font-size": "15px" },
                      domProps: { innerHTML: _vm._s(_vm.editTextData.text) }
                    })
                  ]
                )
              ])
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
                  on: {
                    click: function($event) {
                      _vm.selected = 0
                    }
                  }
                },
                [
                  _c("span", [_vm._v("Details")]),
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
                      _vm.selected = 1
                    }
                  }
                },
                [
                  _c("span", [_vm._v("Submission")]),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      attrs: {
                        color:
                          _vm.classworkDetails.status == "Submitted"
                            ? "green"
                            : ""
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.classworkDetails.status != "Submitted"
                            ? "mdi-file-edit"
                            : "mdi-file-check"
                        )
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.selected = 2
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/dialog/typedAnswerDialog.vue?vue&type=template&id=99453dbe& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.Type != "view"
        ? _c(
            "v-card",
            { staticClass: "pa-1" },
            [
              _c("v-text-field", {
                staticClass: "mb-2 mt-1",
                attrs: { label: "Title", "hide-details": "", outlined: "" },
                model: {
                  value: _vm.Answer.title,
                  callback: function($$v) {
                    _vm.$set(_vm.Answer, "title", $$v)
                  },
                  expression: "Answer.title"
                }
              }),
              _vm._v(" "),
              _c("editor", {
                ref: "myTextEditor",
                staticClass: "editor",
                attrs: {
                  theme: "snow",
                  placeholder: "Typed answer",
                  options: _vm.editorOption
                },
                model: {
                  value: _vm.Answer.text,
                  callback: function($$v) {
                    _vm.$set(_vm.Answer, "text", $$v)
                  },
                  expression: "Answer.text"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex pt-1" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "secondary" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("CloseDialog")
                        }
                      }
                    },
                    [_vm._v("  Cancel")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { loading: _vm.isAdding, color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.SaveAnswer()
                        }
                      }
                    },
                    [_vm._v(" Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "mb-0 pb-0" }, [
                _c("span", { staticClass: "text-h4" }, [
                  _vm._v(_vm._s(_vm.Answer.title))
                ])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticStyle: { "max-height": "600px", "overflow-y": "scroll" }
                },
                [
                  _c("span", {
                    domProps: { innerHTML: _vm._s(_vm.Answer.text) }
                  })
                ]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { block: "", color: "secondary" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("CloseDialog")
                        }
                      }
                    },
                    [_vm._v("  Close")]
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