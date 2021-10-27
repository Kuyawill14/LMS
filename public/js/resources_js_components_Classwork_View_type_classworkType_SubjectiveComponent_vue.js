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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    return {
      AttachLink: false,
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
      TempFile: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser', 'statusDetails'])), {}, {
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
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['checkClassworkStatus'])), {}, {
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
    format_date1: function format_date1(value) {
      if (value) {
        //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
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
    OpenFile: function OpenFile(file) {
      window.open(file, '_blank');
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
      this.AttachLink = !this.AttachLink;
      this.AddLinkInSubmittedAnswer();
    },
    AddLinkInSubmittedAnswer: function AddLinkInSubmittedAnswer() {
      var _this2 = this;

      var index = this.classworkDetails.Submitted_Answers.length - 1;
      var sub_id = this.tempId == null ? 'empty' : this.tempId;
      var fd = new FormData();
      fd.append('Submission_id', sub_id);
      fd.append('id', this.classworkDetails.id);
      fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
      fd.append('type', this.classworkDetails.type);
      fd.append('fileName', this.classworkDetails.Submitted_Answers[index].name);
      fd.append('fileSize', this.classworkDetails.Submitted_Answers[index].fileSize);
      fd.append('fileExte', this.classworkDetails.Submitted_Answers[index].fileExte);
      fd.append('file', this.classworkDetails.Submitted_Answers[index].link);
      axios.post('/api/student/linkAndstatus', fd).then(function (res) {
        _this2.AttachLink = false;
        _this2.linkName = null;
        _this2.linkFile = null;
        _this2.tempId = res.data;
        _this2.classworkDetails.status = "Submitting";
      });
    },
    UploadFile: function UploadFile() {
      //console.log('test123');
      //this.$refs.UploadAttachFile.click();
      this.$refs.UploadAttachFile.$refs.input.click();
    },
    UploadMoreFile: function UploadMoreFile() {
      console.log('test');

      if (this.file.length <= 4) {
        this.$refs.AttAchMoreFile.click();
      } else {}
    },
    format_date: function format_date(value) {
      if (value) {
        /* return moment(String(value)).format('dddd, h:mm a') */
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
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
    onChange: function onChange(file) {
      var _this3 = this;

      /* console.log(this.FileList.length);
      if(this.FileList.length > 1){
        let count = 0;
         this.FileList.forEach(item => {
            if(this.FileList[this.FileList.length-1].name == item.name){
              count++;
            }
        });
        this.FileList[this.FileList.length-1].name = count != 0 ? this.FileList[this.FileList.length-1].name+'('+count+')' : this.FileList[this.FileList.length-1].name;
      } */
      var fileData = this.FileList[this.FileList.length - 1];
      this.CheckeFileExtention = fileData;
      /* b */

      var Checker = false;
      this.acceptedFileType.forEach(function (item) {
        if (_this3.Checkextension == item) {
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
      var _this4 = this;

      this.isDeleting_id = index;
      this.isDeleting = true;
      axios.put('/api/submission/file-remove/' + this.tempId, {
        Fileindex: index
      }).then(function (res) {
        _this4.uploadPercentage = 0;

        _this4.file.splice(index, 1);

        _this4.tempId = null;
        _this4.isUploading[index] = false;
        _this4.isDeleting = false;
        _this4.isDeleting_id = null;
      });
    },
    test: function test() {
      var data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="' + this.link + '"></iframe><div><br></div>'; //console.log(data);
    },

    /*  async checkStatus(type){
       axios.get('/api/submission/check-sbj/'+this.classworkDetails.id)
       .then(res=>{
           this.myClasssworkStatus = res.data;
           this.tempId = res.data.Sub_id;
           if(type != 'submit'){
              this.isloading = !this.isloading;
           }
       })
    }, */
    checkStatus: function checkStatus(type) {
      var _this5 = this;

      var data = {};
      data.id = this.$route.query.clwk;
      data.type = this.classworkDetails.type;
      this.$store.dispatch('checkClassworkStatus', data).then(function () {
        _this5.myClasssworkStatus = _this5.statusDetails;
        _this5.tempId = _this5.statusDetails.Sub_id;

        if (type != 'submit') {
          _this5.isloading = !_this5.isloading;
        }
      });
    },
    UpdateSubmission: function UpdateSubmission(index) {
      var _this6 = this;

      var sub_id = this.tempId == null ? 'empty' : this.tempId;
      var fd = new FormData();
      fd.append('Submission_id', sub_id);
      fd.append('id', this.classworkDetails.id);
      fd.append('class_classwork_id', this.classworkDetails.class_classwork_id);
      fd.append('type', this.classworkDetails.type);
      fd.append('fileName', this.classworkDetails.Submitted_Answers[index].name);
      fd.append('fileSize', this.classworkDetails.Submitted_Answers[index].fileSize);
      fd.append('fileExte', this.classworkDetails.Submitted_Answers[index].fileExte);
      fd.append('file', this.classworkDetails.Submitted_Answers[index].file);
      axios.post('/api/student/update-status', fd, {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var total = progressEvent.total;
          var totalLength = progressEvent.lengthComputable ? total : null;

          if (totalLength != null) {
            _this6.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
          }
        }
      }).then(function (res) {
        /* if(this.classworkDetails.Submitted_Answers.length == 0){
           this.file[this.isUpIndex].link = res.data.link;
        }
        else{ */
        _this6.classworkDetails.Submitted_Answers[_this6.isUpIndex].link = res.data.link; //}

        _this6.tempId = _this6.tempId == null ? res.data.id : _this6.tempId;
        _this6.isUploadSaving = false;
        _this6.isUpIndex = null;
        _this6.classworkDetails.status = "Submitting";
      });
    },
    DeleteUpload: function DeleteUpload(index) {
      var _this7 = this;

      this.isDeleting_id = index;
      this.isDeleting = true;
      var type = 'submit';
      axios.put('/api/submission/file-remove/' + this.tempId, {
        Fileindex: index
      }).then(function (res) {
        _this7.classworkDetails.Submitted_Answers.splice(index, 1);

        if (_this7.FileList.length != 0) {
          _this7.FileList.splice(index, 1);
        }

        _this7.uploadPercentage = 0;
        _this7.isUploading[index] = false;
        _this7.isDeleting = false;
        _this7.isDeleting_id = null;
      });
    },
    SubmitClasswork: function SubmitClasswork() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var type;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this8.IsSaving = true;
                type = 'submit';
                axios.put('/api/student/submit-classwork/' + _this8.tempId).then(function (res) {
                  if (res.status == 200) {
                    //this.checkStatus(type);
                    _this8.classworkDetails.status = 'Submitted';
                    _this8.IsSaving = false;
                    _this8.isResubmit = false;
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addComment: function addComment(details) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {};
                _this9.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.type = 'Private';
                data.course_id = _this9.$route.params.id;
                data.comment = _this9.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  //console.log(res.data);
                  if (res.status == 200) {
                    _this9.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic
                    });

                    _this9.comment = null;
                  }
                });
                _this9.isCommenting = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    DeleteComment: function DeleteComment(id, index) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios["delete"]('/api/post/classwork/comment/delete/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this10.classworkDetails.comments.splice(index, 1);
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
    MarkAsSubmitting: function MarkAsSubmitting(id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios.put('/api/student/markAsSubmitting/' + id).then(function () {});

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    clickResubmit: function clickResubmit() {
      if (!this.isResubmit) {
        this.MarkAsSubmitting(this.classworkDetails.Sub_id);
        this.isResubmit = !this.isResubmit;
      } else {
        this.SubmitClasswork();
      }
    }
  }),
  created: function created() {//this.checkStatus();

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  mounted: function mounted() {
    this.isloading = !this.isloading;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
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
___CSS_LOADER_EXPORT___.push([module.id, "\nspan img{\n        max-width: 100% !important;\n        max-height: 20rem !important;\n}\n.dropZone {\n  width: 100%;\n  height: 7rem;\n  position: relative;\n  border: 2px dashed #eee;\n  border-radius: .3rem;\n}\n\n/* .dropZone:hover {\n  border: 1px dashed #2196F3;\n} */\n\n/* .dropZone:hover .dropZone-title {\n  color: #2196F3;\n} */\n.dropZone-info {\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.dropZone-title {\n  color: #787878;\n}\n.dropZone input {\n  position: absolute;\n  cursor: pointer;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.dropZone-upload-limit-info {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.dropZone-over {\n  background: #E0E0E0;\n  opacity: 0.8;\n}\n.dropZone-uploaded {\n  padding-top: 4rem;\n  height: auto;\n  position: relative;\n}\n.dropZone-uploaded-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.filePreview{\n  width: 100%;\n}\n.removeFile {\n  width: 200px;\n}\n /* width */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n    /* Track */\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n}\n    \n    /* Handle */\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n\n    /* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n", ""]);
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

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&lang=css&");


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
                { attrs: { elevation: "5", app: "", color: "primary" } },
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
                  _c("v-divider", { attrs: { vertical: "" } })
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
                                  rules: _vm.linkRules,
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
                          staticClass: "pa-7",
                          attrs: {
                            outlined: "",
                            elevation: _vm.$vuetify.breakpoint.mdAndUp ? 1 : 0
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
                                          _vm.classworkDetails.status ==
                                            "Submitted" &&
                                          !_vm.classworkDetails.graded &&
                                          (_vm.classworkDetails.availability ==
                                          1
                                            ? _vm.format_date1(_vm.DateToday) <=
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
                                                    click: function($event) {
                                                      return _vm.clickResubmit()
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.isResubmit
                                                        ? "Cancel"
                                                        : "Resubmit"
                                                    )
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.classworkDetails.graded
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
                                                            _c(
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
                                      _vm.classworkDetails.publish == null
                                        ? _c(
                                            "v-col",
                                            {
                                              staticClass: "ma-0 pa-0 mb-4 ",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _vm.isResubmit ||
                                              _vm.classworkDetails.status ==
                                                "Submitting" ||
                                                _vm.classworkDetails.status ==
                                                  null
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
                                                            key: "activator",
                                                            fn: function(ref) {
                                                              var on = ref.on
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
                                                                              _vm.DateToday
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
                                                                      "\r\n                                  " +
                                                                        _vm._s(
                                                                          attrs.expanded
                                                                        ) +
                                                                        "\r\n                                    Add "
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
                                                        3245075026
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
                                                                " Upload File\r\n                                  "
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
                                          )
                                        : _vm._e(),
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
                                                    _vm.DateToday
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
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$vuetify.breakpoint.mdAndUp || _vm.selected == 2
                    ? _c(
                        "v-card",
                        {
                          class: _vm.$vuetify.breakpoint.mdAndUp ? "mt-4" : "",
                          attrs: {
                            outlined: "",
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
                                  ? "350"
                                  : "450"
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
                                                            attrs: { icon: "" }
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
                  _c("span", [_vm._v("Submission")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-playlist-edit")])
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



/***/ })

}]);