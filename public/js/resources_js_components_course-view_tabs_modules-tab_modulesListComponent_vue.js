(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_modulesListComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['moduleId', 'submodule', 'type_action'],
  data: function data() {
    return {
      isSaving: false,
      isDeleting: false,
      oldFIle: {},
      oldFileInput: false,
      isRemove: false,
      uploadPercentage: 0,
      progress: false,
      sending: false,
      loading: '',
      addLink: false,
      showClasswork: false,
      subModuleForm: {},
      ext: '',
      file: null,
      allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx', 'mp4'],
      isInvalidFileType: false,
      isFileSize: null,
      main_module_id: null,
      type: ''
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"]),
  methods: {
    getFileExt: function getFileExt(filename) {
      var split = filename.split('.');
      return split[split.length - 1];
    },
    onFileChange: function onFileChange(file) {
      //console.log('selected file', file);
      if (file != null) {
        this.ext = this.getFileExt(file.name); //console.log(this.ext);

        this.isInvalidFileSize = false;
        this.isInvalidFileType = false;

        if (file.size >= 10000000) {
          this.isInvalidFileSize = true;
          this.$refs.inputFile.value = null;
          this.toastError('File size must be less than 10MB');
        }

        if (this.ext == 'mp4') {
          this.type = 'Video';
        } else if (this.ext == 'pdf' || this.ext == 'docx' || this.ext == 'doc' || this.ext == 'pptx' || this.ext == 'ppt') {
          this.type = 'Document';
        } else {
          this.isInvalidFileType = true;
          this.toastError('Invalid File Type, (.pdf , .docx and .mp4 are allowed)');
          this.$refs.inputFile.value = null;
        }
      }

      this.file = file;
    },
    removeFile: function removeFile(id) {
      var _this = this;

      this.isDeleting = true;
      axios.put('/api/sub_module/file-remove/' + id, {
        file: this.submodule.file_attachment
      }).then(function (res) {
        _this.oldFileInput = false; //console.log(res);

        _this.isDeleting = false;
        _this.isRemove = true;
      });
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Lecture Successfully saved", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    addFile: function addFile() {
      //console.log(this.file);
      //console.log('this.isInvalidFileType', this.isInvalidFileType);
      if (this.type_action == 'edit_file') {
        if (this.subModuleForm.sub_module_name == '' || this.subModuleForm.description == '' || this.subModuleForm.required_time == '') {
          this.toastError('Please Complete all the fields');
        } else if (this.file != null) {
          var good = true;

          if (this.isInvalidFileSize) {
            this.toastError('File must be less than 10mb');
            good = false;
          }

          if (this.isInvalidFileType == null || this.isInvalidFileType == true) {
            this.toastError('something went wrong, refresh the page and try again');
            good = false;
          }

          if (good) {
            this.addUpdate();
          }
        } else {
          if (this.isRemove) {
            this.toastError('Please Complete all the fields');
          } else {
            this.addUpdate();
          }
        }
      } else {
        if (this.subModuleForm.sub_module_name == '' || this.subModuleForm.description == '' || this.subModuleForm.required_time == '' || this.file == null) {
          this.toastError('Please Complete all the fields');
        } else if (this.file != null) {
          var good = true;

          if (this.isInvalidFileSize) {
            this.toastError('File must be less than 10mb');
            good = false;
          }

          if (this.isInvalidFileType == null || this.isInvalidFileType == true) {
            this.toastError('something went wrong, refresh the page and try again');
            good = false;
          }

          if (good) {
            this.addUpdate();
          }
        }
      }
    },
    detectExt: function detectExt(ext) {
      var type = '';

      if (ext == 'mp4') {
        type = 'Video';
      }

      if (ext == 'pdf' || ext == 'docx' || ext == 'doc' || ext == 'pptx' || ext == 'ppt') {
        type = 'Document';
      }

      return type;
    },
    addUpdate: function addUpdate() {
      var _this2 = this;

      var tmp, edit_ext_type;
      this.main_module_id = this.moduleId;

      if (this.type_action == 'edit_file') {
        tmp = this.oldFIle.file_name.split('.');
        edit_ext_type = tmp[tmp.length - 1];
        this.main_module_id = this.subModuleForm.main_module_id;
        this.type = this.type == '' ? this.detectExt(edit_ext_type) : this.type;
      }

      this.isSaving = true;
      var fd = new FormData();
      fd.append('file', this.file);
      fd.append('submodule_id', this.subModuleForm.id);
      fd.append('main_module_id', this.main_module_id);
      fd.append('description', this.subModuleForm.description);
      fd.append('required_time', this.subModuleForm.required_time);
      fd.append('type', this.type);
      fd.append('sub_module_name', this.subModuleForm.sub_module_name);
      this.sending = true;
      axios.post("/api/sub_module/insert", fd, {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var total = progressEvent.total;
          var totalLength = progressEvent.lengthComputable ? total : null;

          if (totalLength != null) {
            _this2.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
          }
        }
      }).then(function (res) {
        _this2.isSaving = false;

        _this2.$store.dispatch('fetchMainModule', _this2.$route.params.id);

        _this2.subModuleForm.sub_module_name = '';
        _this2.subModuleForm.description = '';

        if (_this2.$refs.inputFile != null) {
          _this2.$refs.inputFile.reset();
        }

        _this2.$emit('CloseLecture'); // this.toastSuccess();


        _this2.sending = false;
      })["catch"](function (err) {
        _this2.toastError('There is something went wrong on the file');

        _this2.isSaving = false;
        _this2.sending = false;

        if (_this2.$refs.inputFile != null) {
          _this2.$refs.inputFile.reset();
        }

        _this2.uploadPercentage = 0;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    if (this.type_action == 'edit_file') {
      this.submodule['required_time'] = this.submodule['required_time'] / 60;
      this.subModuleForm = this.submodule;
      var newfile = new File([""], window.location.origin + '/' + this.submodule.file_attachment);
      ;
      var name = newfile.name.split('/');
      this.oldFIle.file_name = name[name.length - 1]; //console.log(this.oldFIle.file_name);

      if (this.oldFIle.file_name == -1) {
        this.oldFileInput = false;
      } else {
        this.oldFileInput = true;
      }
    } else {
      this.subModuleForm = {
        sub_module_name: '',
        description: '',
        required_time: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['submodule', 'moduleId', 'sub_module_id', 'type_action'],
  data: function data() {
    return {
      isAdding: false,
      sending: false,
      loading: '',
      addLink: false,
      showClasswork: false,
      linkForm: {
        sub_module_name: '',
        description: '',
        required_time: '',
        link: ''
      },
      file: null
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"]),
  methods: {
    onFileChange: function onFileChange(file) {
      ////console.log('selected file', file);
      this.file = file;
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Lecture Successfully saved", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    addLecture: function addLecture() {
      var _this = this;

      if (this.linkForm.sub_module_name == '' || this.linkForm.description == '' || this.linkForm.required_time == '' || this.linkForm.link == '') {
        this.toastError('Please Complete all the fields');
      } else {
        this.isAdding = true;
        this.linkForm.type = 'Link';
        this.linkForm.main_module_id = this.moduleId;
        this.linkForm.submodule_id = this.type_action == 'edit_link' ? this.sub_module_id : '';
        this.$store.dispatch('createSubModule', this.linkForm).then(function (res) {
          _this.$store.dispatch('fetchMainModule', _this.$route.params.id);

          _this.linkForm.sub_module_name = '';
          _this.linkForm.link = '';
          _this.linkForm.type = '';

          _this.$emit('CloseLecture');

          _this.toastSuccess();

          setTimeout(function () {
            _this.sending = false;
            _this.isAdding = false;
          }, 1000);
        });
      }
    }
  },
  mounted: function mounted() {
    if (this.type_action == 'edit_link') {
      this.linkForm = this.submodule;
      this.linkForm['required_time'] = this.submodule['required_time'] / 60;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['propModule', 'type'],
  data: function data() {
    return {
      isSubmitting: false,
      dialog: false,
      moduleForm: new Form({
        module_name: '',
        description: '',
        course_id: ''
      }),
      class_details: '',
      valid: true,
      rules: [function (v) {
        return !!v || 'Field is required';
      }],
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'header': [1, 2, 3, 4, 5, false]
          }], [{
            'align': []
          }], [{
            'color': []
          }], [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }], ['link', 'image', 'video']]
        }
      }
    };
  },
  methods: {
    toastSuccess: function toastSuccess(message) {
      return this.$toasted.success(message, {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        if (this.type == 'edit') {
          this.updateModule();
        } else {
          this.createModule();
        }
      } else {
        this.toastError('Please Fill up all the fields!.');
      }
    },
    createModule: function createModule() {
      var _this = this;

      this.isSubmitting = true;
      this.moduleForm.course_id = this.$route.params.id;

      if (this.moduleForm.module_name.trim().length > 0 && this.moduleForm.description.trim().length > 0) {
        this.$store.dispatch('createMainModule', this.moduleForm).then(function (res) {
          _this.$emit('createdModule');

          _this.moduleForm.reset();

          _this.$refs.form.resetValidation();

          _this.isSubmitting = false;

          _this.toastSuccess("Module Successfully Created");
        });
      } else {
        this.toastError('Please Fill up all the fields!.');
        this.isSubmitting = false;
      }
    },
    updateModule: function updateModule() {
      var _this2 = this;

      this.isSubmitting = true;
      this.moduleForm.course_id = this.$route.params.id;

      if (this.moduleForm.module_name.trim().length > 0 && this.moduleForm.description.trim().length > 0) {
        this.$store.dispatch('updateMainModule', this.moduleForm).then(function (res) {
          _this2.$emit('closeModal');

          _this2.isSubmitting = false;

          _this2.toastSuccess("Module Successfully updated");
        });
      } else {
        this.toastError('Please Fill up all the fields!.');
        this.isSubmitting = false;
      }
    }
  },
  mounted: function mounted() {
    if (this.type == 'edit') {
      this.moduleForm = this.propModule;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isSaving: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.default({})
    };
  },
  methods: {
    SaveClasswork: function SaveClasswork() {
      var _this = this;

      this.isSaving = true;
      this.form.class_id = this.$route.params.id;
      axios.post('/api/classwork/insert', this.form).then(function (res) {
        if (res.status == 201) {
          _this.form.reset();

          $('#Classworkmodal').modal('hide');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Classwork Successfully Created',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })["catch"](function (e) {////console.log(e);
      });
      this.isSaving = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['type', 'moduleId'],
  data: function data() {
    return {
      loading: false,
      dialog: false,
      moduleForm: new Form({
        module_name: '',
        description: '',
        course_id: ''
      }),
      class_details: '',
      id: '',
      isDeleting: false
    };
  },
  methods: {
    toastSuccess: function toastSuccess(message) {
      return this.$toasted.success(message, {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    deleteModule: function deleteModule() {
      var _this = this;

      this.isDeleting = true;
      axios["delete"]("/api/main_module/delete/".concat(this.moduleId)).then(function (res) {
        _this.loading = false;

        if (res.data.status == 1) {
          _this.toastSuccess(res.data.message);

          _this.$store.dispatch('fetchMainModule', _this.$route.params.id).then(function () {
            _this.$emit('deleted_module');
          });
        } else {
          _this.toastError(res.data.message);
        }

        _this.isDeleting = false;

        _this.$emit('closeModal');
      });
    }
  },
  mounted: function mounted() {
    if (this.type == 'delete_module') {
      this.id = this.moduleId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['type', 'sub_module_id'],
  data: function data() {
    return {
      loading: false,
      dialog: false,
      moduleForm: new Form({
        module_name: '',
        description: '',
        course_id: ''
      }),
      class_details: '',
      id: '',
      isDeleting: false
    };
  },
  methods: {
    toastSuccess: function toastSuccess(message) {
      return this.$toasted.success(message, {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    deleteModule: function deleteModule() {
      var _this = this;

      this.isDeleting = true;
      axios["delete"]("/api/sub_module/delete/".concat(this.sub_module_id)).then(function (res) {
        _this.loading = false;

        _this.$emit('closeModal');

        if (res.data.status == 1) {
          _this.toastSuccess(res.data.message);

          _this.$store.dispatch('fetchMainModule', _this.$route.params.id);
        } else {
          _this.toastError(res.data.message);
        }

        _this.isDeleting = false;
      })["catch"](function (err) {
        _this.toastError('Something went wrong');

        _this.isDeleting = false;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Forms_FileForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Forms/FileForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue");
/* harmony import */ var _Forms_LinkForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms/LinkForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue");
/* harmony import */ var _Forms_ModuleForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms/ModuleForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue");
/* harmony import */ var _Forms_deleteForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Forms/deleteForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue");
/* harmony import */ var _Forms_NewClassworkForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms/NewClassworkForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue");
/* harmony import */ var _Forms_deleteItemForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Forms/deleteItemForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _methods;



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









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    fileForm: _Forms_FileForm__WEBPACK_IMPORTED_MODULE_3__.default,
    linkForm: _Forms_LinkForm__WEBPACK_IMPORTED_MODULE_4__.default,
    newClassworkForm: _Forms_NewClassworkForm__WEBPACK_IMPORTED_MODULE_7__.default,
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_2___default()),
    moduleFormEdit: _Forms_ModuleForm__WEBPACK_IMPORTED_MODULE_5__.default,
    deleteForm: _Forms_deleteForm__WEBPACK_IMPORTED_MODULE_6__.default,
    deleteItemForm: _Forms_deleteItemForm__WEBPACK_IMPORTED_MODULE_8__.default
  },
  data: function data() {
    return {
      tip: true,
      tipCheckBox: false,
      pass_submodule: null,
      isPublishing: false,
      isPublishing_id: null,
      moduleName: '',
      isEdit: false,
      itemType: '',
      isDrag: false,
      itemDialog: false,
      temp_id: null,
      showLecture: false,
      addLink: false,
      showClasswork: false,
      subModuleForm: {},
      mainModule_id: '',
      sub_module_id: null,
      mainModule: [],
      propModule: [],
      studentSubModuleProgress: [],
      studentSubModuleProgressForm: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"])), {}, {
    dragOptions: function dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }),
  methods: (_methods = {
    deleteModule: function deleteModule() {
      var _this = this;

      alert('asdfsadfsd');
      this.mainModule = this.mainModule.filter(function (item) {
        return item.id != _this.module_id;
      });
    },
    showHandler: function showHandler() {
      localStorage.setItem("tip_module_show", !this.tipCheckBox);
    },
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_1__.default)(String(value)).format('MMMM Do YYYY, hh:mm A');
      }
    },
    publishModule: function publishModule(module_name, id, isPublished) {
      var _this2 = this;

      this.isPublishing = true;
      isPublished = isPublished ? 1 : 0;
      axios.post("/api/main_module/publish/".concat(id), {
        isPublished: isPublished
      }).then(function (res) {
        if (isPublished == 1) {
          _this2.toastSuccess(module_name + ' Successfully Published');

          _this2.isPublishing = false;
        } else {
          _this2.toastSuccess(module_name + ' Successfully Unpublished');

          _this2.isPublishing = false;
        }
      });
    },
    onEnd: function onEnd() {
      var _this3 = this;

      this.isDrag = true;
      axios.post("/api/main_module/arrange", {
        mainModules: this.mainModule
      }).then(function (res) {
        //  this.getmain_module = this.mainModule;
        _this3.$store.dispatch('fetchMainModule', _this3.$route.params.id).then(function () {
          _this3.isDrag = false;
        });
      });
    },
    getdata: function getdata() {
      this.mainModule = this.getmain_module;
    },
    deleteMoudleBtn: function deleteMoudleBtn(module_id, isPublished, student_progress_count) {
      if (isPublished == 1) {
        this.toastInfo("Unable to delete this module. Please unpublished the module to proceed");
      } else {
        if (student_progress_count > 0) {
          this.toastInfo("Unable to delete this module. Students have already progress in this module");
        } else {
          this.itemDialog = !this.itemDialog;
          this.itemType = 'delete_module';
          this.mainModule_id = module_id;
        }
      }
    },
    deleteItemModuleBtn: function deleteItemModuleBtn(sub_module_id, isPublished, student_progress_count) {
      if (isPublished == 1) {
        this.toastInfo("Unable to delete this item. Please unpublished the module to proceed");
      } else {
        if (student_progress_count > 0) {
          this.toastInfo("Unable to delete this item. Students have already progress in this item");
        } else {
          this.itemDialog = !this.itemDialog;
          this.itemType = 'delete_item_module';
          this.sub_module_id = sub_module_id;
        }
      }
    },
    editModuleBtn: function editModuleBtn(module_id, itemModule, isPublished) {
      if (isPublished == 1) {
        this.toastInfo("Unable to edit this module. Please unpublished the module to proceed");
      } else {
        this.itemDialog = !this.itemDialog;
        this.propModule = itemModule; ////console.log(this.propModule);

        this.mainModule_id = module_id;
        this.itemType = 'edit_module';
      }
    },
    addFileBtn: function addFileBtn(module_id) {
      this.itemDialog = !this.itemDialog;
      this.mainModule_id = module_id;
      this.itemType = 'add_file';
    },
    addLinkBtn: function addLinkBtn(module_id) {
      this.itemDialog = !this.itemDialog;
      this.mainModule_id = module_id;
      this.itemType = 'add_link';
    },
    editItemBtn: function editItemBtn(itemModule, sub_module_id, type, isPublished) {
      if (isPublished == 1) {
        this.toastInfo("Unable to edit this item. Please unpublished the module to proceed");
      } else {
        this.pass_submodule = itemModule;
        this.itemDialog = !this.itemDialog;
        this.sub_module_id = sub_module_id;
        this.itemType = type == 'Link' ? 'edit_link' : 'edit_file';
      }
    },
    classworkBtn: function classworkBtn() {
      $('#itemTypeModal').modal('hide');
      $('#Classworkmodal').modal('show');
    },
    student_sub_module_progress: function student_sub_module_progress(id) {
      var data;
    },
    getCount: function getCount(module_id) {
      var count = 0;

      for (var i = 0; i < this.studentSubModuleProgress.length; i++) {
        if (this.studentSubModuleProgress.main_module_id == module_id) {
          count++;
        }
      }

      return count;
    }
  }, _defineProperty(_methods, "getCount", function getCount(arr, mainModule_id) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].main_module_id == mainModule_id) {
        count++;
      }
    }

    return count;
  }), _defineProperty(_methods, "checkSubModule", function checkSubModule(arr, sub_module_id) {
    var check = false; //////console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].sub_module_id == sub_module_id) {
        check = true;
      }
    }

    return check;
  }), _methods),
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this4.getdata();

              _this4.$emit('closeModuleDialog');

              if (localStorage.getItem("tip_module_show") === null) {
                _this4.tip = true;
              } else {
                _this4.tip = localStorage.getItem("tip_module_show") == true;
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flip-list-move {\n  transition: transform 0.5s !important;\n}\n.no-move {\n  transition: transform 0s !important;\n}\n.pannel-btn {\n  position: absolute;\n  top: 15px;\n  right: 47px;\n  z-index: 100;\n}\n.v-expansion-panel-content__wrap {\n  padding: 0 !important;\n}\n.ghost {\n  border-left: 10px solid #FF5400 !important;\n}\n.module-switch {\n  position: absolute;\n  right: 125px;\n  top: 2px;\n  z-index: 999;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-253ea14b], select[data-v-253ea14b]{\n    border-left: none;\n    border-right: none;\n    border-top: none;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/moment/src/lib/create/check-overflow.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/check-overflow.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkOverflow)
/* harmony export */ });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function checkOverflow(m) {
    var overflow,
        a = m._a;

    if (a && (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).overflow === -2) {
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH] > 11
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE] > (0,_units_month__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.YEAR], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH])
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] < 0 ||
                  a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] > 24 ||
                  (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] === 24 &&
                      (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] !== 0))
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] > 999
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND
                : -1;

        if (
            (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowDayOfYear &&
            (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__.YEAR || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE)
        ) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE;
        }
        if ((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.WEEK;
        }
        if ((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY;
        }

        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).overflow = overflow;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/date-from-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/date-from-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDate": () => (/* binding */ createDate),
/* harmony export */   "createUTCDate": () => (/* binding */ createUTCDate)
/* harmony export */ });
function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-anything.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-anything.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareConfig": () => (/* binding */ prepareConfig),
/* harmony export */   "createLocalOrUTC": () => (/* binding */ createLocalOrUTC)
/* harmony export */ });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-string-and-array */ "./node_modules/moment/src/lib/create/from-string-and-array.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-object */ "./node_modules/moment/src/lib/create/from-object.js");




















function createFromConfig(config) {
    var res = new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__.Moment((0,_check_overflow__WEBPACK_IMPORTED_MODULE_11__.default)(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || (0,_locale_locales__WEBPACK_IMPORTED_MODULE_9__.getLocale)(config._l);

    if (input === null || (format === undefined && input === '')) {
        return (0,_valid__WEBPACK_IMPORTED_MODULE_7__.createInvalid)({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if ((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_8__.isMoment)(input)) {
        return new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__.Moment((0,_check_overflow__WEBPACK_IMPORTED_MODULE_11__.default)(input));
    } else if ((0,_utils_is_date__WEBPACK_IMPORTED_MODULE_5__.default)(input)) {
        config._d = input;
    } else if ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
        (0,_from_string_and_array__WEBPACK_IMPORTED_MODULE_12__.configFromStringAndArray)(config);
    } else if (format) {
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_13__.configFromStringAndFormat)(config);
    } else {
        configFromInput(config);
    }

    if (!(0,_valid__WEBPACK_IMPORTED_MODULE_7__.isValid)(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if ((0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__.default)(input)) {
        config._d = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_10__.hooks.now());
    } else if ((0,_utils_is_date__WEBPACK_IMPORTED_MODULE_5__.default)(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_14__.configFromString)(config);
    } else if ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(input)) {
        config._a = (0,_utils_map__WEBPACK_IMPORTED_MODULE_6__.default)(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        (0,_from_array__WEBPACK_IMPORTED_MODULE_15__.configFromArray)(config);
    } else if ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_1__.default)(input)) {
        (0,_from_object__WEBPACK_IMPORTED_MODULE_16__.configFromObject)(config);
    } else if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_10__.hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
        strict = format;
        format = undefined;
    }

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if (
        ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_1__.default)(input) && (0,_utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__.default)(input)) ||
        ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(input) && input.length === 0)
    ) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-array.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromArray": () => (/* binding */ configFromArray)
/* harmony export */ });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/defaults */ "./node_modules/moment/src/lib/utils/defaults.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");









function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.now());
    if (config._useUTC) {
        return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(),
        ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.DATE] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR]);

        if (
            config._dayOfYear > (0,_units_year__WEBPACK_IMPORTED_MODULE_2__.daysInYear)(yearToUse) ||
            config._dayOfYear === 0
        ) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowDayOfYear = true;
        }

        date = (0,_date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate)(yearToUse, 0, config._dayOfYear);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MONTH] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MINUTE] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.SECOND] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MILLISECOND] === 0
    ) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] = 0;
    }

    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate : _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createDate).apply(
        null,
        input
    );
    expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] = 24;
    }

    // check for mismatching day of week
    if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
    ) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(
            w.GG,
            config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR],
            (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weekOfYear)((0,_local__WEBPACK_IMPORTED_MODULE_5__.createLocal)(), 1, 4).year
        );
        week = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.W, 1);
        weekday = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        curWeek = (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weekOfYear)((0,_local__WEBPACK_IMPORTED_MODULE_5__.createLocal)(), dow, doy);

        weekYear = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR], curWeek.year);

        // Default to current week.
        week = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to beginning of week
            weekday = dow;
        }
    }
    if (week < 1 || week > (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weeksInYear)(weekYear, dow, doy)) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowWeekday = true;
    } else {
        temp = (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-object.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-object.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromObject": () => (/* binding */ configFromObject)
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/map */ "./node_modules/moment/src/lib/utils/map.js");




function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = (0,_utils_map__WEBPACK_IMPORTED_MODULE_2__.default)(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    (0,_from_array__WEBPACK_IMPORTED_MODULE_1__.configFromArray)(config);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-array.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromStringAndArray": () => (/* binding */ configFromStringAndArray)
/* harmony export */ });
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");






// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false;

    if (config._f.length === 0) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_0__.copyConfig)({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_1__.configFromStringAndFormat)(tempConfig);

        if ((0,_valid__WEBPACK_IMPORTED_MODULE_3__.isValid)(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).charsLeftOver;

        //or tokens
        currentScore += (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).unusedTokens.length * 10;

        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    (0,_utils_extend__WEBPACK_IMPORTED_MODULE_4__.default)(config, bestMoment || tempConfig);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string-and-format.js":
/*!**********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-format.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromStringAndFormat": () => (/* binding */ configFromStringAndFormat)
/* harmony export */ });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ "./node_modules/moment/src/lib/create/from-string.js");
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ "./node_modules/moment/src/lib/create/from-array.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-overflow */ "./node_modules/moment/src/lib/create/check-overflow.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");










// constant that refers to the ISO standard
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.ISO_8601) {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_0__.configFromISO)(config);
        return;
    }
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.RFC_2822) {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_0__.configFromRFC2822)(config);
        return;
    }
    config._a = [];
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era;

    tokens =
        (0,_format_format__WEBPACK_IMPORTED_MODULE_4__.expandFormat)(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_4__.formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match((0,_parse_regex__WEBPACK_IMPORTED_MODULE_2__.getParseRegexForToken)(token, config)) ||
            [])[0];
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedInput.push(skipped);
            }
            string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_4__.formatTokenFunctions[token]) {
            if (parsedInput) {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).empty = false;
            } else {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedTokens.push(token);
            }
            (0,_parse_token__WEBPACK_IMPORTED_MODULE_3__.addTimeToArrayFromToken)(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).charsLeftOver =
        stringLength - totalParsedInputLength;
    if (string.length > 0) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] <= 12 &&
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] > 0
    ) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).bigHour = undefined;
    }

    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).parsedDateParts = config._a.slice(0);
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = meridiemFixWrap(
        config._locale,
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR],
        config._meridiem
    );

    // handle era
    era = (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).era;
    if (era !== null) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR] = config._locale.erasConvertYear(era, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR]);
    }

    (0,_from_array__WEBPACK_IMPORTED_MODULE_1__.configFromArray)(config);
    (0,_check_overflow__WEBPACK_IMPORTED_MODULE_5__.default)(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/from-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromISO": () => (/* binding */ configFromISO),
/* harmony export */   "configFromRFC2822": () => (/* binding */ configFromRFC2822),
/* harmony export */   "configFromString": () => (/* binding */ configFromString)
/* harmony export */ });
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string-and-format */ "./node_modules/moment/src/lib/create/from-string-and-format.js");
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");








// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, false],
        ['YYYY', /\d{4}/, false],
    ],
    // iso time formats and regexes
    isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

// date from iso format
function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_0__.configFromStringAndFormat)(config);
    } else {
        config._isValid = false;
    }
}

function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr
) {
    var result = [
        untruncateYear(yearStr),
        _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__.defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2]
            ).getDay();
        if (weekdayProvided !== weekdayActual) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
    if (match) {
        parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    if (config._strict) {
        config._isValid = false;
    } else {
        // Final attempt, use Input Fallback
        _utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.createFromInputFallback(config);
    }
}

_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.createFromInputFallback = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);


/***/ }),

/***/ "./node_modules/moment/src/lib/create/local.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/local.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocal": () => (/* binding */ createLocal)
/* harmony export */ });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createLocal(input, format, locale, strict) {
    return (0,_from_anything__WEBPACK_IMPORTED_MODULE_0__.createLocalOrUTC)(input, format, locale, strict, false);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/parsing-flags.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/parsing-flags.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParsingFlags)
/* harmony export */ });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/utc.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/create/utc.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUTC": () => (/* binding */ createUTC)
/* harmony export */ });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");


function createUTC(input, format, locale, strict) {
    return (0,_from_anything__WEBPACK_IMPORTED_MODULE_0__.createLocalOrUTC)(input, format, locale, strict, true).utc();
}


/***/ }),

/***/ "./node_modules/moment/src/lib/create/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/valid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "createInvalid": () => (/* binding */ createInvalid)
/* harmony export */ });
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/some */ "./node_modules/moment/src/lib/utils/some.js");





function isValid(m) {
    if (m._isValid == null) {
        var flags = (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m),
            parsedParts = _utils_some__WEBPACK_IMPORTED_MODULE_3__.default.call(flags.parsedDateParts, function (i) {
                return i != null;
            }),
            isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = (0,_utc__WEBPACK_IMPORTED_MODULE_1__.createUTC)(NaN);
    if (flags != null) {
        (0,_utils_extend__WEBPACK_IMPORTED_MODULE_0__.default)((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m), flags);
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).userInvalidated = true;
    }

    return m;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/abs.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/abs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs)
/* harmony export */ });
var mathAbs = Math.abs;

function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/add-subtract.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/add-subtract.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function addSubtract(duration, input, value, direction) {
    var other = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add(input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract(input, value) {
    return addSubtract(this, input, value, -1);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/as.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/as.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "as": () => (/* binding */ as),
/* harmony export */   "valueOf": () => (/* binding */ valueOf),
/* harmony export */   "asMilliseconds": () => (/* binding */ asMilliseconds),
/* harmony export */   "asSeconds": () => (/* binding */ asSeconds),
/* harmony export */   "asMinutes": () => (/* binding */ asMinutes),
/* harmony export */   "asHours": () => (/* binding */ asHours),
/* harmony export */   "asDays": () => (/* binding */ asDays),
/* harmony export */   "asWeeks": () => (/* binding */ asWeeks),
/* harmony export */   "asMonths": () => (/* binding */ asMonths),
/* harmony export */   "asQuarters": () => (/* binding */ asQuarters),
/* harmony export */   "asYears": () => (/* binding */ asYears)
/* harmony export */ });
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days,
        months,
        milliseconds = this._milliseconds;

    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + (0,_bubble__WEBPACK_IMPORTED_MODULE_0__.daysToMonths)(days);
        switch (units) {
            case 'month':
                return months;
            case 'quarter':
                return months / 3;
            case 'year':
                return months / 12;
        }
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round((0,_bubble__WEBPACK_IMPORTED_MODULE_0__.monthsToDays)(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(this._months / 12) * 31536e6
    );
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');




/***/ }),

/***/ "./node_modules/moment/src/lib/duration/bubble.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/bubble.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubble": () => (/* binding */ bubble),
/* harmony export */   "daysToMonths": () => (/* binding */ daysToMonths),
/* harmony export */   "monthsToDays": () => (/* binding */ monthsToDays)
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ "./node_modules/moment/src/lib/utils/abs-ceil.js");



function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += (0,_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__.default)(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(seconds / 60);
    data.minutes = minutes % 60;

    hours = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(minutes / 60);
    data.hours = hours % 24;

    days += (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(hours / 24);

    // convert days to months
    monthsFromDays = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(daysToMonths(days));
    months += monthsFromDays;
    days -= (0,_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__.default)(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/clone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/clone.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


function clone() {
    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/constructor.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/constructor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Duration": () => (/* binding */ Duration),
/* harmony export */   "isDuration": () => (/* binding */ isDuration)
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid.js */ "./node_modules/moment/src/lib/duration/valid.js");




function Duration(duration) {
    var normalizedInput = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = (0,_valid_js__WEBPACK_IMPORTED_MODULE_2__.default)(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = (0,_locale_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)();

    this._bubble();
}

function isDuration(obj) {
    return obj instanceof Duration;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/create.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/create.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDuration": () => (/* binding */ createDuration)
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");










// ASP.NET json date format regex
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months,
        };
    } else if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_1__.default)(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
            duration[key] = +input;
        } else {
            duration.milliseconds = +input;
        }
    } else if ((match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.DATE]) * sign,
            h: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.HOUR]) * sign,
            m: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.MINUTE]) * sign,
            s: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.SECOND]) * sign,
            ms: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_3__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
    } else if ((match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign),
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
    ) {
        diffRes = momentsDifference(
            (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(duration.from),
            (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(duration.to)
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration(duration);

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input) && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__.default)(input, '_locale')) {
        ret._locale = input._locale;
    }

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input) && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__.default)(input, '_isValid')) {
        ret._isValid = input._isValid;
    }

    return ret;
}

createDuration.fn = _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration.prototype;
createDuration.invalid = _valid__WEBPACK_IMPORTED_MODULE_8__.createInvalid;

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = (0,_units_offset__WEBPACK_IMPORTED_MODULE_6__.cloneWithOffset)(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/duration.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/duration.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDuration": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "isDuration": () => (/* reexport safe */ _constructor__WEBPACK_IMPORTED_MODULE_2__.isDuration),
/* harmony export */   "getSetRelativeTimeRounding": () => (/* reexport safe */ _humanize__WEBPACK_IMPORTED_MODULE_3__.getSetRelativeTimeRounding),
/* harmony export */   "getSetRelativeTimeThreshold": () => (/* reexport safe */ _humanize__WEBPACK_IMPORTED_MODULE_3__.getSetRelativeTimeThreshold)
/* harmony export */ });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/duration/prototype.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
// Side effect imports









/***/ }),

/***/ "./node_modules/moment/src/lib/duration/get.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/get.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "milliseconds": () => (/* binding */ milliseconds),
/* harmony export */   "seconds": () => (/* binding */ seconds),
/* harmony export */   "minutes": () => (/* binding */ minutes),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "days": () => (/* binding */ days),
/* harmony export */   "months": () => (/* binding */ months),
/* harmony export */   "years": () => (/* binding */ years),
/* harmony export */   "weeks": () => (/* binding */ weeks)
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");



function get(units) {
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');



function weeks() {
    return (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__.default)(this.days() / 7);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/humanize.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/humanize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetRelativeTimeRounding": () => (/* binding */ getSetRelativeTimeRounding),
/* harmony export */   "getSetRelativeTimeThreshold": () => (/* binding */ getSetRelativeTimeThreshold),
/* harmony export */   "humanize": () => (/* binding */ humanize)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");


var round = Math.round,
    thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month/week
        w: null, // weeks to month
        M: 11, // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        weeks = round(duration.as('w')),
        years = round(duration.as('y')),
        a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
        a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var withSuffix = false,
        th = thresholds,
        locale,
        output;

    if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
        }
    }

    locale = this.localeData();
    output = relativeTime(this, !withSuffix, th, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/iso-string.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/iso-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toISOString": () => (/* binding */ toISOString)
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");

var abs = Math.abs;

function sign(x) {
    return (x > 0) - (x < 0) || +x;
}

function toISOString() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs(this._milliseconds) / 1000,
        days = abs(this._days),
        months = abs(this._months),
        minutes,
        hours,
        years,
        s,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(seconds / 60);
    hours = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
        totalSign +
        'P' +
        (years ? ymSign + years + 'Y' : '') +
        (months ? ymSign + months + 'M' : '') +
        (days ? daysSign + days + 'D' : '') +
        (hours || minutes || seconds ? 'T' : '') +
        (hours ? hmsSign + hours + 'H' : '') +
        (minutes ? hmsSign + minutes + 'M' : '') +
        (seconds ? hmsSign + s + 'S' : '')
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/prototype.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/prototype.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/duration/constructor.js");
/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abs */ "./node_modules/moment/src/lib/duration/abs.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/duration/add-subtract.js");
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as */ "./node_modules/moment/src/lib/duration/as.js");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble */ "./node_modules/moment/src/lib/duration/bubble.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/duration/clone.js");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ "./node_modules/moment/src/lib/duration/get.js");
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanize */ "./node_modules/moment/src/lib/duration/humanize.js");
/* harmony import */ var _iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iso-string */ "./node_modules/moment/src/lib/duration/iso-string.js");
/* harmony import */ var _moment_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moment/locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/duration/valid.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration.prototype;












proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_10__.isValid;
proto.abs = _abs__WEBPACK_IMPORTED_MODULE_1__.abs;
proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_2__.add;
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_2__.subtract;
proto.as = _as__WEBPACK_IMPORTED_MODULE_3__.as;
proto.asMilliseconds = _as__WEBPACK_IMPORTED_MODULE_3__.asMilliseconds;
proto.asSeconds = _as__WEBPACK_IMPORTED_MODULE_3__.asSeconds;
proto.asMinutes = _as__WEBPACK_IMPORTED_MODULE_3__.asMinutes;
proto.asHours = _as__WEBPACK_IMPORTED_MODULE_3__.asHours;
proto.asDays = _as__WEBPACK_IMPORTED_MODULE_3__.asDays;
proto.asWeeks = _as__WEBPACK_IMPORTED_MODULE_3__.asWeeks;
proto.asMonths = _as__WEBPACK_IMPORTED_MODULE_3__.asMonths;
proto.asQuarters = _as__WEBPACK_IMPORTED_MODULE_3__.asQuarters;
proto.asYears = _as__WEBPACK_IMPORTED_MODULE_3__.asYears;
proto.valueOf = _as__WEBPACK_IMPORTED_MODULE_3__.valueOf;
proto._bubble = _bubble__WEBPACK_IMPORTED_MODULE_4__.bubble;
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_5__.clone;
proto.get = _get__WEBPACK_IMPORTED_MODULE_6__.get;
proto.milliseconds = _get__WEBPACK_IMPORTED_MODULE_6__.milliseconds;
proto.seconds = _get__WEBPACK_IMPORTED_MODULE_6__.seconds;
proto.minutes = _get__WEBPACK_IMPORTED_MODULE_6__.minutes;
proto.hours = _get__WEBPACK_IMPORTED_MODULE_6__.hours;
proto.days = _get__WEBPACK_IMPORTED_MODULE_6__.days;
proto.weeks = _get__WEBPACK_IMPORTED_MODULE_6__.weeks;
proto.months = _get__WEBPACK_IMPORTED_MODULE_6__.months;
proto.years = _get__WEBPACK_IMPORTED_MODULE_6__.years;
proto.humanize = _humanize__WEBPACK_IMPORTED_MODULE_7__.humanize;
proto.toISOString = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.toString = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.toJSON = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.locale = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.locale;
proto.localeData = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.localeData;

// Deprecations


proto.toIsoString = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_11__.deprecate)(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString
);
proto.lang = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.lang;


/***/ }),

/***/ "./node_modules/moment/src/lib/duration/valid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/valid.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDurationValid),
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "createInvalid": () => (/* binding */ createInvalid)
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ "./node_modules/moment/src/lib/duration/create.js");





var ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
];

function isDurationValid(m) {
    var key,
        unitHasDecimal = false,
        i;
    for (key in m) {
        if (
            (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(m, key) &&
            !(
                _utils_index_of__WEBPACK_IMPORTED_MODULE_2__.default.call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
            )
        ) {
            return false;
        }
    }

    for (i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_1__.default)(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return (0,_create__WEBPACK_IMPORTED_MODULE_3__.createDuration)(NaN);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/format/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/format/format.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formattingTokens": () => (/* binding */ formattingTokens),
/* harmony export */   "formatTokenFunctions": () => (/* binding */ formatTokenFunctions),
/* harmony export */   "addFormatToken": () => (/* binding */ addFormatToken),
/* harmony export */   "formatMoment": () => (/* binding */ formatMoment),
/* harmony export */   "expandFormat": () => (/* binding */ expandFormat)
/* harmony export */ });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");



var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};



// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(
                func.apply(this, arguments),
                token
            );
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '',
            i;
        for (i = 0; i < length; i++) {
            output += (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_1__.default)(array[i])
                ? array[i].call(mom, format)
                : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/base-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/base-config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseConfig": () => (/* binding */ baseConfig)
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");






// months


// week


// weekdays


// meridiem


var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_0__.defaultCalendar,
    longDateFormat: _formats__WEBPACK_IMPORTED_MODULE_1__.defaultLongDateFormat,
    invalidDate: _invalid__WEBPACK_IMPORTED_MODULE_2__.defaultInvalidDate,
    ordinal: _ordinal__WEBPACK_IMPORTED_MODULE_3__.defaultOrdinal,
    dayOfMonthOrdinalParse: _ordinal__WEBPACK_IMPORTED_MODULE_3__.defaultDayOfMonthOrdinalParse,
    relativeTime: _relative__WEBPACK_IMPORTED_MODULE_4__.defaultRelativeTime,

    months: _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonths,
    monthsShort: _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonthsShort,

    week: _units_week__WEBPACK_IMPORTED_MODULE_6__.defaultLocaleWeek,

    weekdays: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdays,
    weekdaysMin: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdaysMin,
    weekdaysShort: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdaysShort,

    meridiemParse: _units_hour__WEBPACK_IMPORTED_MODULE_8__.defaultLocaleMeridiemParse,
};


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/calendar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCalendar": () => (/* binding */ defaultCalendar),
/* harmony export */   "calendar": () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};



function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(output) ? output.call(mom, now) : output;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/constructor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Locale": () => (/* binding */ Locale)
/* harmony export */ });
function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/en.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/en.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




(0,_locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale)('en', {
    eras: [
        {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
        },
        {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
        },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                    ? 'st'
                    : b === 2
                    ? 'nd'
                    : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
    },
});


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/formats.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/formats.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLongDateFormat": () => (/* binding */ defaultLongDateFormat),
/* harmony export */   "longDateFormat": () => (/* binding */ longDateFormat)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
};

function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper
        .match(_format_format__WEBPACK_IMPORTED_MODULE_0__.formattingTokens)
        .map(function (tok) {
            if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
            ) {
                return tok.slice(1);
            }
            return tok;
        })
        .join('');

    return this._longDateFormat[key];
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/invalid.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/invalid.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultInvalidDate": () => (/* binding */ defaultInvalidDate),
/* harmony export */   "invalidDate": () => (/* binding */ invalidDate)
/* harmony export */ });
var defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/lists.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/lists.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listMonths": () => (/* binding */ listMonths),
/* harmony export */   "listMonthsShort": () => (/* binding */ listMonthsShort),
/* harmony export */   "listWeekdays": () => (/* binding */ listWeekdays),
/* harmony export */   "listWeekdaysShort": () => (/* binding */ listWeekdaysShort),
/* harmony export */   "listWeekdaysMin": () => (/* binding */ listWeekdaysMin)
/* harmony export */ });
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");




function get(format, index, field, setter) {
    var locale = (0,_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)(),
        utc = (0,_create_utc__WEBPACK_IMPORTED_MODULE_2__.createUTC)().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = (0,_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locale.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetGlobalLocale": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale),
/* harmony export */   "defineLocale": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.defineLocale),
/* harmony export */   "updateLocale": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.updateLocale),
/* harmony export */   "getLocale": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.getLocale),
/* harmony export */   "listLocales": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.listLocales),
/* harmony export */   "listMonths": () => (/* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listMonths),
/* harmony export */   "listMonthsShort": () => (/* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listMonthsShort),
/* harmony export */   "listWeekdays": () => (/* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdays),
/* harmony export */   "listWeekdaysShort": () => (/* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdaysShort),
/* harmony export */   "listWeekdaysMin": () => (/* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdaysMin)
/* harmony export */ });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/locale/prototype.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ "./node_modules/moment/src/lib/locale/lists.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en */ "./node_modules/moment/src/lib/locale/en.js");
// Side effect imports











_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.lang = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'moment.lang is deprecated. Use moment.locale instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale
);
_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.langData = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'moment.langData is deprecated. Use moment.localeData instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__.getLocale
);



/***/ }),

/***/ "./node_modules/moment/src/lib/locale/locales.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locales.js ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetGlobalLocale": () => (/* binding */ getSetGlobalLocale),
/* harmony export */   "defineLocale": () => (/* binding */ defineLocale),
/* harmony export */   "updateLocale": () => (/* binding */ updateLocale),
/* harmony export */   "getLocale": () => (/* binding */ getLocale),
/* harmony export */   "listLocales": () => (/* binding */ listLocales)
/* harmony export */ });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keys */ "./node_modules/moment/src/lib/utils/keys.js");
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-config */ "./node_modules/moment/src/lib/locale/base-config.js");
/* module decorator */ module = __webpack_require__.hmd(module);









// internal storage for locale config files
var locales = {},
    localeFamilies = {},
    globalLocale;

function commonPrefix(arr1, arr2) {
    var i,
        minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return i;
        }
    }
    return minl;
}

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
            ) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null,
        aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
        locales[name] === undefined &&
        "object" !== 'undefined' &&
        module &&
        module.exports
    ) {
        try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if ((0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(values)) {
            data = getLocale(key);
        } else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                    'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale(name, config) {
    if (config !== null) {
        var locale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__.baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_2__.deprecateSimple)(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                'an existing locale. moment.defineLocale(localeName, ' +
                'config) should only be used for creating a new locale ' +
                'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            );
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                    });
                    return null;
                }
            }
        }
        locales[name] = new _constructor__WEBPACK_IMPORTED_MODULE_4__.Locale((0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__.baseConfig;

        if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set((0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(locales[name]._config, config));
        } else {
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = (0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(parentConfig, config);
            if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
            }
            locale = new _constructor__WEBPACK_IMPORTED_MODULE_4__.Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
        }

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                    getSetGlobalLocale(name);
                }
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!(0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return (0,_utils_keys__WEBPACK_IMPORTED_MODULE_5__.default)(locales);
}

/***/ }),

/***/ "./node_modules/moment/src/lib/locale/ordinal.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/ordinal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultOrdinal": () => (/* binding */ defaultOrdinal),
/* harmony export */   "defaultDayOfMonthOrdinalParse": () => (/* binding */ defaultDayOfMonthOrdinalParse),
/* harmony export */   "ordinal": () => (/* binding */ ordinal)
/* harmony export */ });
var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;



function ordinal(number) {
    return this._ordinal.replace('%d', number);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/pre-post-format.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/pre-post-format.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preParsePostFormat": () => (/* binding */ preParsePostFormat)
/* harmony export */ });
function preParsePostFormat(string) {
    return string;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/prototype.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/locale/constructor.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/locale/calendar.js");
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats */ "./node_modules/moment/src/lib/locale/formats.js");
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid */ "./node_modules/moment/src/lib/locale/invalid.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/moment/src/lib/locale/ordinal.js");
/* harmony import */ var _pre_post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-post-format */ "./node_modules/moment/src/lib/locale/pre-post-format.js");
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relative */ "./node_modules/moment/src/lib/locale/relative.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ "./node_modules/moment/src/lib/locale/set.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Locale.prototype;









proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_1__.calendar;
proto.longDateFormat = _formats__WEBPACK_IMPORTED_MODULE_2__.longDateFormat;
proto.invalidDate = _invalid__WEBPACK_IMPORTED_MODULE_3__.invalidDate;
proto.ordinal = _ordinal__WEBPACK_IMPORTED_MODULE_4__.ordinal;
proto.preparse = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__.preParsePostFormat;
proto.postformat = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__.preParsePostFormat;
proto.relativeTime = _relative__WEBPACK_IMPORTED_MODULE_6__.relativeTime;
proto.pastFuture = _relative__WEBPACK_IMPORTED_MODULE_6__.pastFuture;
proto.set = _set__WEBPACK_IMPORTED_MODULE_7__.set;

// Eras

proto.eras = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeEras;
proto.erasParse = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeErasParse;
proto.erasConvertYear = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeErasConvertYear;
proto.erasAbbrRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasAbbrRegex;
proto.erasNameRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasNameRegex;
proto.erasNarrowRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasNarrowRegex;

// Month


proto.months = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonths;
proto.monthsShort = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonthsShort;
proto.monthsParse = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonthsParse;
proto.monthsRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__.monthsRegex;
proto.monthsShortRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__.monthsShortRegex;

// Week

proto.week = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeWeek;
proto.firstDayOfYear = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeFirstDayOfYear;
proto.firstDayOfWeek = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeFirstDayOfWeek;

// Day of Week


proto.weekdays = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdays;
proto.weekdaysMin = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysMin;
proto.weekdaysShort = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysShort;
proto.weekdaysParse = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysParse;

proto.weekdaysRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysRegex;
proto.weekdaysShortRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysShortRegex;
proto.weekdaysMinRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysMinRegex;

// Hours


proto.isPM = _units_hour__WEBPACK_IMPORTED_MODULE_12__.localeIsPM;
proto.meridiem = _units_hour__WEBPACK_IMPORTED_MODULE_12__.localeMeridiem;


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/relative.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/relative.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRelativeTime": () => (/* binding */ defaultRelativeTime),
/* harmony export */   "relativeTime": () => (/* binding */ relativeTime),
/* harmony export */   "pastFuture": () => (/* binding */ pastFuture)
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
};



function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(format) ? format(output) : format.replace(/%s/i, output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/locale/set.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/set.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "mergeConfigs": () => (/* binding */ mergeConfigs)
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");





function set(config) {
    var prop, i;
    for (i in config) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(config, i)) {
            prop = config[i];
            if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
    );
}

function mergeConfigs(parentConfig, childConfig) {
    var res = (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(childConfig, prop)) {
            if ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(parentConfig[prop]) && (0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(childConfig[prop])) {
                res[prop] = {};
                (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)(res[prop], parentConfig[prop]);
                (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (
            (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(parentConfig, prop) &&
            !(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(childConfig, prop) &&
            (0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(parentConfig[prop])
        ) {
            // make sure changes to properties don't modify parent config
            res[prop] = (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, res[prop]);
        }
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/add-subtract.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/add-subtract.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSubtract": () => (/* binding */ addSubtract),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abs-round */ "./node_modules/moment/src/lib/utils/abs-round.js");







// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecateSimple)(
                name,
                'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            );
            tmp = val;
            val = period;
            period = tmp;
        }

        dur = (0,_duration_create__WEBPACK_IMPORTED_MODULE_2__.createDuration)(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = (0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__.default)(duration._days),
        months = (0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__.default)(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        (0,_units_month__WEBPACK_IMPORTED_MODULE_1__.setMonth)(mom, (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(mom, 'Month') + months * isAdding);
    }
    if (days) {
        (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.set)(mom, 'Date', (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.updateOffset(mom, days || months);
    }
}

var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/calendar.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/calendar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCalendarFormat": () => (/* binding */ getCalendarFormat),
/* harmony export */   "calendar": () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-moment-input */ "./node_modules/moment/src/lib/utils/is-moment-input.js");
/* harmony import */ var _utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-calendar-spec */ "./node_modules/moment/src/lib/utils/is-calendar-spec.js");







function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6
        ? 'sameElse'
        : diff < -1
        ? 'lastWeek'
        : diff < 0
        ? 'lastDay'
        : diff < 1
        ? 'sameDay'
        : diff < 2
        ? 'nextDay'
        : diff < 7
        ? 'nextWeek'
        : 'sameElse';
}

function calendar(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
        if (!arguments[0]) {
            time = undefined;
            formats = undefined;
        } else if ((0,_utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__.isMomentInput)(arguments[0])) {
            time = arguments[0];
            formats = undefined;
        } else if ((0,_utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__.default)(arguments[0])) {
            formats = arguments[0];
            time = undefined;
        }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(),
        sod = (0,_units_offset__WEBPACK_IMPORTED_MODULE_1__.cloneWithOffset)(now, this).startOf('day'),
        format = _utils_hooks__WEBPACK_IMPORTED_MODULE_3__.hooks.calendarFormat(this, sod) || 'sameElse',
        output =
            formats &&
            ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_2__.default)(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

    return this.format(
        output || this.localeData().calendar(format, this, (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(now))
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/clone.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/clone.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");


function clone() {
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__.Moment(this);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/compare.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/compare.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAfter": () => (/* binding */ isAfter),
/* harmony export */   "isBefore": () => (/* binding */ isBefore),
/* harmony export */   "isBetween": () => (/* binding */ isBetween),
/* harmony export */   "isSame": () => (/* binding */ isSame),
/* harmony export */   "isSameOrAfter": () => (/* binding */ isSameOrAfter),
/* harmony export */   "isSameOrBefore": () => (/* binding */ isSameOrBefore)
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");




function isAfter(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    var localFrom = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(from) ? from : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(from),
        localTo = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(to) ? to : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
    }
    inclusivity = inclusivity || '()';
    return (
        (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
    );
}

function isSame(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
        );
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/constructor.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/constructor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyConfig": () => (/* binding */ copyConfig),
/* harmony export */   "Moment": () => (/* binding */ Moment),
/* harmony export */   "isMoment": () => (/* binding */ isMoment)
/* harmony export */ });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = (_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.momentProperties = []),
    updateInProgress = false;

function copyConfig(to, from) {
    var i, prop, val;

    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._i)) {
        to._i = from._i;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._f)) {
        to._f = from._f;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._l)) {
        to._l = from._l;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._strict)) {
        to._strict = from._strict;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._offset)) {
        to._offset = from._offset;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._pf)) {
        to._pf = (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(from);
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/creation-data.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/creation-data.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creationData": () => (/* binding */ creationData)
/* harmony export */ });
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
    };
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/diff.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/diff.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diff": () => (/* binding */ diff)
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");




function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = (0,_units_offset__WEBPACK_IMPORTED_MODULE_1__.cloneWithOffset)(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_2__.normalizeUnits)(units);

    switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1e3;
            break; // 1000
        case 'minute':
            output = (this - that) / 6e4;
            break; // 1000 * 60
        case 'hour':
            output = (this - that) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = this - that;
    }

    return asFloat ? output : (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(output);
}

function monthDiff(a, b) {
    if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/format.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/format.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "toISOString": () => (/* binding */ toISOString),
/* harmony export */   "inspect": () => (/* binding */ inspect),
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");




_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true,
        m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(
            m,
            utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }
    if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_2__.default)(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(m, 'Z'));
        }
    }
    return (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
    );
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
        zone = '',
        prefix,
        year,
        datetime,
        suffix;
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc()
            ? _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormatUtc
            : _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormat;
    }
    var output = (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(this, inputString);
    return this.localeData().postformat(output);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/from.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/from.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "fromNow": () => (/* binding */ fromNow)
/* harmony export */ });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function from(time, withoutSuffix) {
    if (
        this.isValid() &&
        (((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_2__.isMoment)(time) && time.isValid()) || (0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(time).isValid())
    ) {
        return (0,_duration_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from((0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/get-set.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/get-set.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGetSet": () => (/* binding */ makeGetSet),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "stringGet": () => (/* binding */ stringGet),
/* harmony export */   "stringSet": () => (/* binding */ stringSet)
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _units_priorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (
            unit === 'FullYear' &&
            (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__.isLeapYear)(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
        ) {
            value = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(value);
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                (0,_units_month__WEBPACK_IMPORTED_MODULE_4__.daysInMonth)(value, mom.month())
            );
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_3__.default)(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if (typeof units === 'object') {
        units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(units);
        var prioritized = (0,_units_priorities__WEBPACK_IMPORTED_MODULE_1__.getPrioritizedUnits)(units),
            i;
        for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
        if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_3__.default)(this[units])) {
            return this[units](value);
        }
    }
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/locale.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/locale.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale),
/* harmony export */   "lang": () => (/* binding */ lang),
/* harmony export */   "localeData": () => (/* binding */ localeData)
/* harmony export */ });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");



// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = (0,_locale_locales__WEBPACK_IMPORTED_MODULE_0__.getLocale)(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_1__.deprecate)(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData() {
    return this._locale;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/min-max.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/min-max.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prototypeMin": () => (/* binding */ prototypeMin),
/* harmony export */   "prototypeMax": () => (/* binding */ prototypeMax),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "max": () => (/* binding */ max)
/* harmony export */ });
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");





var prototypeMin = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return (0,_create_valid__WEBPACK_IMPORTED_MODULE_3__.createInvalid)();
            }
        }
    ),
    prototypeMax = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return (0,_create_valid__WEBPACK_IMPORTED_MODULE_3__.createInvalid)();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_1__.default)(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/moment.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/moment.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* reexport safe */ _now__WEBPACK_IMPORTED_MODULE_5__.now),
/* harmony export */   "min": () => (/* reexport safe */ _min_max__WEBPACK_IMPORTED_MODULE_4__.min),
/* harmony export */   "max": () => (/* reexport safe */ _min_max__WEBPACK_IMPORTED_MODULE_4__.max),
/* harmony export */   "isMoment": () => (/* reexport safe */ _constructor__WEBPACK_IMPORTED_MODULE_3__.isMoment),
/* harmony export */   "createUTC": () => (/* reexport safe */ _create_utc__WEBPACK_IMPORTED_MODULE_1__.createUTC),
/* harmony export */   "createUnix": () => (/* binding */ createUnix),
/* harmony export */   "createLocal": () => (/* reexport safe */ _create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal),
/* harmony export */   "createInZone": () => (/* binding */ createInZone),
/* harmony export */   "createInvalid": () => (/* reexport safe */ _create_valid__WEBPACK_IMPORTED_MODULE_2__.createInvalid),
/* harmony export */   "momentPrototype": () => (/* reexport safe */ _prototype__WEBPACK_IMPORTED_MODULE_6__.default)
/* harmony export */ });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./now */ "./node_modules/moment/src/lib/moment/now.js");
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ "./node_modules/moment/src/lib/moment/prototype.js");








function createUnix(input) {
    return (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(input * 1000);
}

function createInZone() {
    return _create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal.apply(null, arguments).parseZone();
}




/***/ }),

/***/ "./node_modules/moment/src/lib/moment/now.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/now.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": () => (/* binding */ now)
/* harmony export */ });
var now = function () {
    return Date.now ? Date.now() : +new Date();
};


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/prototype.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/prototype.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ "./node_modules/moment/src/lib/moment/clone.js");
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare */ "./node_modules/moment/src/lib/moment/compare.js");
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diff */ "./node_modules/moment/src/lib/moment/diff.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format */ "./node_modules/moment/src/lib/moment/format.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from */ "./node_modules/moment/src/lib/moment/from.js");
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to */ "./node_modules/moment/src/lib/moment/to.js");
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ "./node_modules/moment/src/lib/moment/locale.js");
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./min-max */ "./node_modules/moment/src/lib/moment/min-max.js");
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-end-of */ "./node_modules/moment/src/lib/moment/start-end-of.js");
/* harmony import */ var _to_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-type */ "./node_modules/moment/src/lib/moment/to-type.js");
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./valid */ "./node_modules/moment/src/lib/moment/valid.js");
/* harmony import */ var _creation_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./creation-data */ "./node_modules/moment/src/lib/moment/creation-data.js");
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/era */ "./node_modules/moment/src/lib/units/era.js");
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../units/week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../units/quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../units/month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../units/week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../units/day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../units/day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../units/day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../units/hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _units_minute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../units/minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _units_second__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _units_millisecond__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../units/millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../units/offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../units/timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/deprecate */ "./node_modules/moment/src/lib/utils/deprecate.js");


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Moment.prototype;

















proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_1__.add;
proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_2__.calendar;
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_3__.clone;
proto.diff = _diff__WEBPACK_IMPORTED_MODULE_5__.diff;
proto.endOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__.endOf;
proto.format = _format__WEBPACK_IMPORTED_MODULE_6__.format;
proto.from = _from__WEBPACK_IMPORTED_MODULE_7__.from;
proto.fromNow = _from__WEBPACK_IMPORTED_MODULE_7__.fromNow;
proto.to = _to__WEBPACK_IMPORTED_MODULE_8__.to;
proto.toNow = _to__WEBPACK_IMPORTED_MODULE_8__.toNow;
proto.get = _get_set__WEBPACK_IMPORTED_MODULE_9__.stringGet;
proto.invalidAt = _valid__WEBPACK_IMPORTED_MODULE_14__.invalidAt;
proto.isAfter = _compare__WEBPACK_IMPORTED_MODULE_4__.isAfter;
proto.isBefore = _compare__WEBPACK_IMPORTED_MODULE_4__.isBefore;
proto.isBetween = _compare__WEBPACK_IMPORTED_MODULE_4__.isBetween;
proto.isSame = _compare__WEBPACK_IMPORTED_MODULE_4__.isSame;
proto.isSameOrAfter = _compare__WEBPACK_IMPORTED_MODULE_4__.isSameOrAfter;
proto.isSameOrBefore = _compare__WEBPACK_IMPORTED_MODULE_4__.isSameOrBefore;
proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_14__.isValid;
proto.lang = _locale__WEBPACK_IMPORTED_MODULE_10__.lang;
proto.locale = _locale__WEBPACK_IMPORTED_MODULE_10__.locale;
proto.localeData = _locale__WEBPACK_IMPORTED_MODULE_10__.localeData;
proto.max = _min_max__WEBPACK_IMPORTED_MODULE_11__.prototypeMax;
proto.min = _min_max__WEBPACK_IMPORTED_MODULE_11__.prototypeMin;
proto.parsingFlags = _valid__WEBPACK_IMPORTED_MODULE_14__.parsingFlags;
proto.set = _get_set__WEBPACK_IMPORTED_MODULE_9__.stringSet;
proto.startOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__.startOf;
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_1__.subtract;
proto.toArray = _to_type__WEBPACK_IMPORTED_MODULE_13__.toArray;
proto.toObject = _to_type__WEBPACK_IMPORTED_MODULE_13__.toObject;
proto.toDate = _to_type__WEBPACK_IMPORTED_MODULE_13__.toDate;
proto.toISOString = _format__WEBPACK_IMPORTED_MODULE_6__.toISOString;
proto.inspect = _format__WEBPACK_IMPORTED_MODULE_6__.inspect;
if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
    };
}
proto.toJSON = _to_type__WEBPACK_IMPORTED_MODULE_13__.toJSON;
proto.toString = _format__WEBPACK_IMPORTED_MODULE_6__.toString;
proto.unix = _to_type__WEBPACK_IMPORTED_MODULE_13__.unix;
proto.valueOf = _to_type__WEBPACK_IMPORTED_MODULE_13__.valueOf;
proto.creationData = _creation_data__WEBPACK_IMPORTED_MODULE_15__.creationData;

// Era

proto.eraName = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraName;
proto.eraNarrow = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraNarrow;
proto.eraAbbr = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraAbbr;
proto.eraYear = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraYear;

// Year

proto.year = _units_year__WEBPACK_IMPORTED_MODULE_17__.getSetYear;
proto.isLeapYear = _units_year__WEBPACK_IMPORTED_MODULE_17__.getIsLeapYear;

// Week Year

proto.weekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getSetWeekYear;
proto.isoWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getSetISOWeekYear;

// Quarter

proto.quarter = proto.quarters = _units_quarter__WEBPACK_IMPORTED_MODULE_19__.getSetQuarter;

// Month

proto.month = _units_month__WEBPACK_IMPORTED_MODULE_20__.getSetMonth;
proto.daysInMonth = _units_month__WEBPACK_IMPORTED_MODULE_20__.getDaysInMonth;

// Week

proto.week = proto.weeks = _units_week__WEBPACK_IMPORTED_MODULE_21__.getSetWeek;
proto.isoWeek = proto.isoWeeks = _units_week__WEBPACK_IMPORTED_MODULE_21__.getSetISOWeek;
proto.weeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getWeeksInYear;
proto.weeksInWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getWeeksInWeekYear;
proto.isoWeeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getISOWeeksInISOWeekYear;

// Day



proto.date = _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__.getSetDayOfMonth;
proto.day = proto.days = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetDayOfWeek;
proto.weekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetLocaleDayOfWeek;
proto.isoWeekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetISODayOfWeek;
proto.dayOfYear = _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__.getSetDayOfYear;

// Hour

proto.hour = proto.hours = _units_hour__WEBPACK_IMPORTED_MODULE_25__.getSetHour;

// Minute

proto.minute = proto.minutes = _units_minute__WEBPACK_IMPORTED_MODULE_26__.getSetMinute;

// Second

proto.second = proto.seconds = _units_second__WEBPACK_IMPORTED_MODULE_27__.getSetSecond;

// Millisecond

proto.millisecond = proto.milliseconds = _units_millisecond__WEBPACK_IMPORTED_MODULE_28__.getSetMillisecond;

// Offset

proto.utcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.getSetOffset;
proto.utc = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToUTC;
proto.local = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToLocal;
proto.parseZone = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToParsedOffset;
proto.hasAlignedHourOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.hasAlignedHourOffset;
proto.isDST = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isDaylightSavingTime;
proto.isLocal = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isLocal;
proto.isUtcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtcOffset;
proto.isUtc = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtc;
proto.isUTC = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtc;

// Timezone

proto.zoneAbbr = _units_timezone__WEBPACK_IMPORTED_MODULE_30__.getZoneAbbr;
proto.zoneName = _units_timezone__WEBPACK_IMPORTED_MODULE_30__.getZoneName;

// Deprecations

proto.dates = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'dates accessor is deprecated. Use date instead.',
    _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__.getSetDayOfMonth
);
proto.months = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'months accessor is deprecated. Use month instead',
    _units_month__WEBPACK_IMPORTED_MODULE_20__.getSetMonth
);
proto.years = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'years accessor is deprecated. Use year instead',
    _units_year__WEBPACK_IMPORTED_MODULE_17__.getSetYear
);
proto.zone = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__.getSetZone
);
proto.isDSTShifted = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__.isDaylightSavingTimeShifted
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proto);


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/start-end-of.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/start-end-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startOf": () => (/* binding */ startOf),
/* harmony export */   "endOf": () => (/* binding */ endOf)
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");



var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

function startOf(units) {
    var time, startOfDate;
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.updateOffset(this, true);
    return this;
}

function endOf(units) {
    var time, startOfDate;
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.updateOffset(this, true);
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to-type.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to-type.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueOf": () => (/* binding */ valueOf),
/* harmony export */   "unix": () => (/* binding */ unix),
/* harmony export */   "toDate": () => (/* binding */ toDate),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "toObject": () => (/* binding */ toObject),
/* harmony export */   "toJSON": () => (/* binding */ toJSON)
/* harmony export */ });
function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
    return Math.floor(this.valueOf() / 1000);
}

function toDate() {
    return new Date(this.valueOf());
}

function toArray() {
    var m = this;
    return [
        m.year(),
        m.month(),
        m.date(),
        m.hour(),
        m.minute(),
        m.second(),
        m.millisecond(),
    ];
}

function toObject() {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds(),
    };
}

function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/to.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "to": () => (/* binding */ to),
/* harmony export */   "toNow": () => (/* binding */ toNow)
/* harmony export */ });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");




function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        (((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_2__.isMoment)(time) && time.isValid()) || (0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(time).isValid())
    ) {
        return (0,_duration_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to((0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(), withoutSuffix);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/moment/valid.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/valid.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "parsingFlags": () => (/* binding */ parsingFlags),
/* harmony export */   "invalidAt": () => (/* binding */ invalidAt)
/* harmony export */ });
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/valid */ "./node_modules/moment/src/lib/create/valid.js");
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");




function isValid() {
    return (0,_create_valid__WEBPACK_IMPORTED_MODULE_0__.isValid)(this);
}

function parsingFlags() {
    return (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(this));
}

function invalidAt() {
    return (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(this).overflow;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/regex.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/regex.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match1": () => (/* binding */ match1),
/* harmony export */   "match2": () => (/* binding */ match2),
/* harmony export */   "match3": () => (/* binding */ match3),
/* harmony export */   "match4": () => (/* binding */ match4),
/* harmony export */   "match6": () => (/* binding */ match6),
/* harmony export */   "match1to2": () => (/* binding */ match1to2),
/* harmony export */   "match3to4": () => (/* binding */ match3to4),
/* harmony export */   "match5to6": () => (/* binding */ match5to6),
/* harmony export */   "match1to3": () => (/* binding */ match1to3),
/* harmony export */   "match1to4": () => (/* binding */ match1to4),
/* harmony export */   "match1to6": () => (/* binding */ match1to6),
/* harmony export */   "matchUnsigned": () => (/* binding */ matchUnsigned),
/* harmony export */   "matchSigned": () => (/* binding */ matchSigned),
/* harmony export */   "matchOffset": () => (/* binding */ matchOffset),
/* harmony export */   "matchShortOffset": () => (/* binding */ matchShortOffset),
/* harmony export */   "matchTimestamp": () => (/* binding */ matchTimestamp),
/* harmony export */   "matchWord": () => (/* binding */ matchWord),
/* harmony export */   "addRegexToken": () => (/* binding */ addRegexToken),
/* harmony export */   "getParseRegexForToken": () => (/* binding */ getParseRegexForToken),
/* harmony export */   "regexEscape": () => (/* binding */ regexEscape)
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ "./node_modules/moment/src/lib/utils/is-function.js");
var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;






regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_1__.default)(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

function getParseRegexForToken(token, config) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                matched,
                p1,
                p2,
                p3,
                p4
            ) {
                return p1 || p2 || p3 || p4;
            })
    );
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/parse/token.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/token.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addParseToken": () => (/* binding */ addParseToken),
/* harmony export */   "addWeekParseToken": () => (/* binding */ addWeekParseToken),
/* harmony export */   "addTimeToArrayFromToken": () => (/* binding */ addTimeToArrayFromToken)
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");




var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_1__.default)(callback)) {
        func = function (input, array) {
            array[callback] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/aliases.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/aliases.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnitAlias": () => (/* binding */ addUnitAlias),
/* harmony export */   "normalizeUnits": () => (/* binding */ normalizeUnits),
/* harmony export */   "normalizeObjectUnits": () => (/* binding */ normalizeObjectUnits)
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var aliases = {};

function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/constants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YEAR": () => (/* binding */ YEAR),
/* harmony export */   "MONTH": () => (/* binding */ MONTH),
/* harmony export */   "DATE": () => (/* binding */ DATE),
/* harmony export */   "HOUR": () => (/* binding */ HOUR),
/* harmony export */   "MINUTE": () => (/* binding */ MINUTE),
/* harmony export */   "SECOND": () => (/* binding */ SECOND),
/* harmony export */   "MILLISECOND": () => (/* binding */ MILLISECOND),
/* harmony export */   "WEEK": () => (/* binding */ WEEK),
/* harmony export */   "WEEKDAY": () => (/* binding */ WEEKDAY)
/* harmony export */ });
var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-month.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-month.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetDayOfMonth": () => (/* binding */ getSetDayOfMonth)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('D', ['DD', 2], 'Do', 'date');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('date', 'D');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('date', 9);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('D', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_6__.DATE);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Do', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.DATE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Date', true);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-week.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-week.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLocaleWeekdays": () => (/* binding */ defaultLocaleWeekdays),
/* harmony export */   "defaultLocaleWeekdaysShort": () => (/* binding */ defaultLocaleWeekdaysShort),
/* harmony export */   "defaultLocaleWeekdaysMin": () => (/* binding */ defaultLocaleWeekdaysMin),
/* harmony export */   "localeWeekdays": () => (/* binding */ localeWeekdays),
/* harmony export */   "localeWeekdaysShort": () => (/* binding */ localeWeekdaysShort),
/* harmony export */   "localeWeekdaysMin": () => (/* binding */ localeWeekdaysMin),
/* harmony export */   "localeWeekdaysParse": () => (/* binding */ localeWeekdaysParse),
/* harmony export */   "getSetDayOfWeek": () => (/* binding */ getSetDayOfWeek),
/* harmony export */   "getSetLocaleDayOfWeek": () => (/* binding */ getSetLocaleDayOfWeek),
/* harmony export */   "getSetISODayOfWeek": () => (/* binding */ getSetISODayOfWeek),
/* harmony export */   "weekdaysRegex": () => (/* binding */ weekdaysRegex),
/* harmony export */   "weekdaysShortRegex": () => (/* binding */ weekdaysShortRegex),
/* harmony export */   "weekdaysMinRegex": () => (/* binding */ weekdaysMinRegex)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");












// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('d', 0, 'do', 'day');

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('e', 0, 0, 'weekday');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('E', 0, 0, 'isoWeekday');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('day', 'd');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('weekday', 'e');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeekday', 'E');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('day', 11);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('weekday', 11);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeekday', 11);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('d', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('e', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('E', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__.default)(config).invalidWeekday = input;
    }
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES
function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord,
    defaultWeekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord,
    defaultWeekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord;



function localeWeekdays(m, format) {
    var weekdays = (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_6__.default)(this._weekdays)
        ? this._weekdays
        : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
          ];
    return m === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m
        ? weekdays[m.day()]
        : weekdays;
}

function localeWeekdaysShort(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
}

function localeWeekdaysMin(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ''
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
        }
        if (!this._weekdaysParse[i]) {
            regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex;
    }
}

function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex;
    }
}

function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
        minp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdaysMin(mom, ''));
        shortp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdaysShort(mom, ''));
        longp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
    this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/day-of-year.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-year.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetDayOfYear": () => (/* binding */ getSetDayOfYear)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");







// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('dayOfYear', 'DDD');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('dayOfYear', 4);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to3);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match3);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addParseToken)(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear(input) {
    var dayOfYear =
        Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/era.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/units/era.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeEras": () => (/* binding */ localeEras),
/* harmony export */   "localeErasParse": () => (/* binding */ localeErasParse),
/* harmony export */   "localeErasConvertYear": () => (/* binding */ localeErasConvertYear),
/* harmony export */   "getEraName": () => (/* binding */ getEraName),
/* harmony export */   "getEraNarrow": () => (/* binding */ getEraNarrow),
/* harmony export */   "getEraAbbr": () => (/* binding */ getEraAbbr),
/* harmony export */   "getEraYear": () => (/* binding */ getEraYear),
/* harmony export */   "erasNameRegex": () => (/* binding */ erasNameRegex),
/* harmony export */   "erasAbbrRegex": () => (/* binding */ erasAbbrRegex),
/* harmony export */   "erasNarrowRegex": () => (/* binding */ erasNarrowRegex)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locales */ "./node_modules/moment/src/lib/locale/locales.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");









(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('N', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NN', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNN', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNNN', 0, 0, 'eraName');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNNNN', 0, 0, 'eraNarrow');

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['y', 1], 'yo', 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yy', 2], 0, 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yyy', 3], 0, 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yyyy', 4], 0, 'eraYear');

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('N', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NN', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNN', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNNN', matchEraName);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNNNN', matchEraNarrow);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
    input,
    array,
    config,
    token
) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__.default)(config).era = era;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__.default)(config).invalidEra = input;
    }
});

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('y', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yyyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yo', matchEraYearOrdinal);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['y', 'yy', 'yyy', 'yyyy'], _constants__WEBPACK_IMPORTED_MODULE_3__.YEAR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__.YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__.YEAR] = parseInt(input, 10);
    }
});

function localeEras(m, format) {
    var i,
        l,
        date,
        eras = this._eras || (0,_locale_locales__WEBPACK_IMPORTED_MODULE_5__.getLocale)('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
            case 'string':
                // truncate time
                date = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
        }

        switch (typeof eras[i].until) {
            case 'undefined':
                eras[i].until = +Infinity;
                break;
            case 'string':
                // truncate time
                date = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
        }
    }
    return eras;
}

function localeErasParse(eraName, format, strict) {
    var i,
        l,
        eras = this.eras(),
        name,
        abbr,
        narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
            switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNN':
                    if (name === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNNN':
                    if (narrow === eraName) {
                        return eras[i];
                    }
                    break;
            }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
        }
    }
}

function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
        return (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(era.since).year();
    } else {
        return (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(era.since).year() + (year - era.offset) * dir;
    }
}

function getEraName() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
        }
    }

    return '';
}

function getEraNarrow() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
        }
    }

    return '';
}

function getEraAbbr() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
        }
    }

    return '';
}

function getEraYear() {
    var i,
        l,
        dir,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1;

        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
        ) {
            return (
                (this.year() - (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].since).year()) * dir +
                eras[i].offset
            );
        }
    }

    return this.year();
}

function erasNameRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasNameRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
}

function erasAbbrRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
}

function erasNarrowRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
}

function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
}

function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
}

function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
}

function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned;
}

function computeErasParse() {
    var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i,
        l,
        eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].name));
        abbrPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].abbr));
        narrowPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].narrow));

        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].name));
        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].abbr));
        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
        '^(' + narrowPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/hour.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/hour.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeIsPM": () => (/* binding */ localeIsPM),
/* harmony export */   "defaultLocaleMeridiemParse": () => (/* binding */ defaultLocaleMeridiemParse),
/* harmony export */   "getSetHour": () => (/* binding */ getSetHour),
/* harmony export */   "localeMeridiem": () => (/* binding */ localeMeridiem)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");











// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('H', ['HH', 2], 0, 'hour');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('h', ['hh', 2], 0, hFormat);
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('k', ['kk', 2], 0, kFormat);

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('hmmss', 0, 0, function () {
    return (
        '' +
        hFormat.apply(this) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.seconds(), 2)
    );
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Hmm', 0, 0, function () {
    return '' + this.hours() + (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Hmmss', 0, 0, function () {
    return (
        '' +
        this.hours() +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.seconds(), 2)
    );
});

function meridiem(token, lowercase) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(token, 0, 0, function () {
        return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
        );
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('hour', 'h');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('a', matchMeridiem);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('A', matchMeridiem);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('H', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('h', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('k', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3to4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match5to6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3to4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match5to6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_6__.HOUR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['k', 'kk'], function (input, array, config) {
    var kInput = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = kInput === 24 ? 0 : kInput;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input);
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos));
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.SECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos2));
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos));
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.SECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Hours', true);

function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/millisecond.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/millisecond.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetMillisecond": () => (/* binding */ getSetMillisecond)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");









// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSS', 3], 0, 'millisecond');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('millisecond', 'ms');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('millisecond', 16);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('S', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3);

var token, getSetMillisecond;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    (0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)(token, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.matchUnsigned);
}

function parseMs(input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MILLISECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    (0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(token, parseMs);
}

getSetMillisecond = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Milliseconds', false);




/***/ }),

/***/ "./node_modules/moment/src/lib/units/minute.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/minute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetMinute": () => (/* binding */ getSetMinute)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('m', ['mm', 2], 0, 'minute');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('minute', 'm');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('minute', 14);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('m', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE);

// MOMENTS

var getSetMinute = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Minutes', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/month.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/month.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInMonth": () => (/* binding */ daysInMonth),
/* harmony export */   "defaultLocaleMonths": () => (/* binding */ defaultLocaleMonths),
/* harmony export */   "defaultLocaleMonthsShort": () => (/* binding */ defaultLocaleMonthsShort),
/* harmony export */   "localeMonths": () => (/* binding */ localeMonths),
/* harmony export */   "localeMonthsShort": () => (/* binding */ localeMonthsShort),
/* harmony export */   "localeMonthsParse": () => (/* binding */ localeMonthsParse),
/* harmony export */   "setMonth": () => (/* binding */ setMonth),
/* harmony export */   "getSetMonth": () => (/* binding */ getSetMonth),
/* harmony export */   "getDaysInMonth": () => (/* binding */ getDaysInMonth),
/* harmony export */   "monthsShortRegex": () => (/* binding */ monthsShortRegex),
/* harmony export */   "monthsRegex": () => (/* binding */ monthsRegex)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-array */ "./node_modules/moment/src/lib/utils/is-array.js");
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _utils_mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mod */ "./node_modules/moment/src/lib/utils/mod.js");
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/index-of */ "./node_modules/moment/src/lib/utils/index-of.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../create/parsing-flags */ "./node_modules/moment/src/lib/create/parsing-flags.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");


















function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = (0,_utils_mod__WEBPACK_IMPORTED_MODULE_12__.default)(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
        ? (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__.isLeapYear)(year)
            ? 29
            : 28
        : 31 - ((modMonth % 7) % 2);
}

// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_3__.addUnitAlias)('month', 'M');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_4__.addUnitPriority)('month', 8);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('M', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['M', 'MM'], function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.MONTH] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) - 1;
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_8__.MONTH] = month;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__.default)(config).invalidMonth = input;
    }
});

// LOCALES

var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
        '_'
    ),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchWord,
    defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchWord;



function localeMonths(m, format) {
    if (!m) {
        return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._months)
            ? this._months
            : this._months['standalone'];
    }
    return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._months)
        ? this._months[m.month()]
        : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
          ][m.month()];
}

function localeMonthsShort(m, format) {
    if (!m) {
        return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone'];
    }
    return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i'
            );
            this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i'
            );
        }
        if (!strict && !this._monthsParse[i]) {
            regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!(0,_utils_is_number__WEBPACK_IMPORTED_MODULE_11__.default)(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth(value) {
    if (value != null) {
        setMonth(this, value);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.updateOffset(this, true);
        return this;
    } else {
        return (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(this, 'Month');
    }
}

function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
}

function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
    }
}

function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex;
    }
}

function computeMonthsParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(shortPieces[i]);
        longPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/offset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneWithOffset": () => (/* binding */ cloneWithOffset),
/* harmony export */   "getSetOffset": () => (/* binding */ getSetOffset),
/* harmony export */   "getSetZone": () => (/* binding */ getSetZone),
/* harmony export */   "setOffsetToUTC": () => (/* binding */ setOffsetToUTC),
/* harmony export */   "setOffsetToLocal": () => (/* binding */ setOffsetToLocal),
/* harmony export */   "setOffsetToParsedOffset": () => (/* binding */ setOffsetToParsedOffset),
/* harmony export */   "hasAlignedHourOffset": () => (/* binding */ hasAlignedHourOffset),
/* harmony export */   "isDaylightSavingTime": () => (/* binding */ isDaylightSavingTime),
/* harmony export */   "isDaylightSavingTimeShifted": () => (/* binding */ isDaylightSavingTimeShifted),
/* harmony export */   "isLocal": () => (/* binding */ isLocal),
/* harmony export */   "isUtcOffset": () => (/* binding */ isUtcOffset),
/* harmony export */   "isUtc": () => (/* binding */ isUtc)
/* harmony export */ });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../duration/create */ "./node_modules/moment/src/lib/duration/create.js");
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/add-subtract */ "./node_modules/moment/src/lib/moment/add-subtract.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ "./node_modules/moment/src/lib/create/local.js");
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/from-anything */ "./node_modules/moment/src/lib/create/from-anything.js");
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ "./node_modules/moment/src/lib/create/utc.js");
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-undefined */ "./node_modules/moment/src/lib/utils/is-undefined.js");
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/compare-arrays */ "./node_modules/moment/src/lib/utils/compare-arrays.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
















// FORMATTING

function offset(token, separator) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_4__.addFormatToken)(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return (
            sign +
            (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(~~(offset / 60), 2) +
            separator +
            (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(~~offset % 60, 2)
        );
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
        chunk,
        parts,
        minutes;

    if (matches === null) {
        return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_11__.default)(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff =
            ((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_3__.isMoment)(input) || (0,_utils_is_date__WEBPACK_IMPORTED_MODULE_10__.default)(input)
                ? input.valueOf()
                : (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset(res, false);
        return res;
    } else {
        return (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).local();
    }
}

function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
_utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                (0,_moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__.addSubtract)(
                    this,
                    (0,_duration_create__WEBPACK_IMPORTED_MODULE_1__.createDuration)(input - offset, 'm'),
                    1,
                    false
                );
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                _utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone(input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset() {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        } else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted() {
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__.default)(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {},
        other;

    (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_3__.copyConfig)(c, this);
    c = (0,_create_from_anything__WEBPACK_IMPORTED_MODULE_8__.prepareConfig)(c);

    if (c._a) {
        other = c._isUTC ? (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)(c._a) : (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(c._a);
        this._isDSTShifted =
            this.isValid() && (0,_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__.default)(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal() {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
}

function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/priorities.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/priorities.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnitPriority": () => (/* binding */ addUnitPriority),
/* harmony export */   "getPrioritizedUnits": () => (/* binding */ getPrioritizedUnits)
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [],
        u;
    for (u in unitsObj) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
        }
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/quarter.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/quarter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetQuarter": () => (/* binding */ getSetQuarter)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('Q', 0, 'Qo', 'quarter');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('quarter', 'Q');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('quarter', 7);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addParseToken)('Q', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__.MONTH] = ((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/second.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/second.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetSecond": () => (/* binding */ getSetSecond)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('s', ['ss', 2], 0, 'second');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('second', 's');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('second', 15);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('s', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_6__.SECOND);

// MOMENTS

var getSetSecond = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Seconds', false);


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timestamp.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timestamp.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");





// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('X', 0, 0, 'unix');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('x', 0, 0, 'valueOf');

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('x', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('X', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchTimestamp);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)('x', function (input, array, config) {
    config._d = new Date((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_3__.default)(input));
});


/***/ }),

/***/ "./node_modules/moment/src/lib/units/timezone.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timezone.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getZoneAbbr": () => (/* binding */ getZoneAbbr),
/* harmony export */   "getZoneName": () => (/* binding */ getZoneName)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");


// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('z', 0, 0, 'zoneAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/units.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/units.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeUnits": () => (/* reexport safe */ _aliases__WEBPACK_IMPORTED_MODULE_15__.normalizeUnits)
/* harmony export */ });
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-of-month */ "./node_modules/moment/src/lib/units/day-of-month.js");
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-of-week */ "./node_modules/moment/src/lib/units/day-of-week.js");
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ "./node_modules/moment/src/lib/units/day-of-year.js");
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour */ "./node_modules/moment/src/lib/units/hour.js");
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond */ "./node_modules/moment/src/lib/units/millisecond.js");
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minute */ "./node_modules/moment/src/lib/units/minute.js");
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month */ "./node_modules/moment/src/lib/units/month.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offset */ "./node_modules/moment/src/lib/units/offset.js");
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quarter */ "./node_modules/moment/src/lib/units/quarter.js");
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second */ "./node_modules/moment/src/lib/units/second.js");
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ "./node_modules/moment/src/lib/units/timestamp.js");
/* harmony import */ var _timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timezone */ "./node_modules/moment/src/lib/units/timezone.js");
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./week-year */ "./node_modules/moment/src/lib/units/week-year.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week */ "./node_modules/moment/src/lib/units/week.js");
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
// Side effect imports





















/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-calendar-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-calendar-utils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayOfYearFromWeeks": () => (/* binding */ dayOfYearFromWeeks),
/* harmony export */   "weekOfYear": () => (/* binding */ weekOfYear),
/* harmony export */   "weeksInYear": () => (/* binding */ weeksInYear)
/* harmony export */ });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ "./node_modules/moment/src/lib/units/year.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");



// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + (0,_create_date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate)(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(resYear) + dayOfYear;
    } else if (dayOfYear > (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear,
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear,
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return ((0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year) - weekOffset + weekOffsetNext) / 7;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week-year.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-year.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetWeekYear": () => (/* binding */ getSetWeekYear),
/* harmony export */   "getSetISOWeekYear": () => (/* binding */ getSetISOWeekYear),
/* harmony export */   "getISOWeeksInYear": () => (/* binding */ getISOWeeksInYear),
/* harmony export */   "getISOWeeksInISOWeekYear": () => (/* binding */ getISOWeeksInISOWeekYear),
/* harmony export */   "getWeeksInYear": () => (/* binding */ getWeeksInYear),
/* harmony export */   "getWeeksInWeekYear": () => (/* binding */ getWeeksInWeekYear)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ "./node_modules/moment/src/lib/create/date-from-array.js");










// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('weekYear', 'gg');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeekYear', 'GG');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('weekYear', 1);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeekYear', 1);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 2)] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(input);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['gg', 'GG'], function (input, week, config, token) {
    week[token] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
    );
}

function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
    );
}

function getISOWeeksInYear() {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.year(), 1, 4);
}

function getISOWeeksInISOWeekYear() {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.isoWeekYear(), 1, 4);
}

function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.year(), weekInfo.dow, weekInfo.doy);
}

function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.weekYear(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weekOfYear)(this, dow, doy).year;
    } else {
        weeksTarget = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy),
        date = (0,_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__.createUTCDate)(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/week.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeWeek": () => (/* binding */ localeWeek),
/* harmony export */   "defaultLocaleWeek": () => (/* binding */ defaultLocaleWeek),
/* harmony export */   "localeFirstDayOfWeek": () => (/* binding */ localeFirstDayOfWeek),
/* harmony export */   "localeFirstDayOfYear": () => (/* binding */ localeFirstDayOfYear),
/* harmony export */   "getSetWeek": () => (/* binding */ getSetWeek),
/* harmony export */   "getSetISOWeek": () => (/* binding */ getSetISOWeek)
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-calendar-utils */ "./node_modules/moment/src/lib/units/week-calendar-utils.js");








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('w', ['ww', 2], 'wo', 'week');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('week', 'w');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeek', 'W');

// PRIORITIES

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('week', 5);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeek', 5);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('w', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('W', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['w', 'ww', 'W', 'WW'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 1)] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

// LOCALES

function localeWeek(mom) {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.weekOfYear)(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

function localeFirstDayOfWeek() {
    return this._week.dow;
}

function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
    var week = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.weekOfYear)(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}


/***/ }),

/***/ "./node_modules/moment/src/lib/units/year.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/year.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "isLeapYear": () => (/* reexport safe */ _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear),
/* harmony export */   "getSetYear": () => (/* binding */ getSetYear),
/* harmony export */   "getIsLeapYear": () => (/* binding */ getIsLeapYear)
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ "./node_modules/moment/src/lib/moment/get-set.js");
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ "./node_modules/moment/src/lib/format/format.js");
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ "./node_modules/moment/src/lib/units/aliases.js");
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ "./node_modules/moment/src/lib/units/priorities.js");
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ "./node_modules/moment/src/lib/parse/regex.js");
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ "./node_modules/moment/src/lib/parse/token.js");
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-leap-year */ "./node_modules/moment/src/lib/utils/is-leap-year.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/moment/src/lib/units/constants.js");
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ "./node_modules/moment/src/lib/utils/to-int.js");
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/zero-fill */ "./node_modules/moment/src/lib/utils/zero-fill.js");












// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__.default)(y, 4) : '+' + y;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYY', 4], 0, 'year');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYYY', 5], 0, 'year');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('year', 'y');

// PRIORITIES

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('year', 1);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_8__.YEAR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('YYYY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] =
        input.length === 2 ? _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input) : (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('YY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Y', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear)(year) ? 366 : 365;
}



// HOOKS

_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear = function (input) {
    return (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) + ((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('FullYear', true);

function getIsLeapYear() {
    return (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear)(this.year());
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-ceil.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-ceil.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ absCeil)
/* harmony export */ });
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-floor.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-floor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ absFloor)
/* harmony export */ });
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/abs-round.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-round.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ absRound)
/* harmony export */ });
function absRound(number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/compare-arrays.js":
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/compare-arrays.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareArrays)
/* harmony export */ });
/* harmony import */ var _to_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-int */ "./node_modules/moment/src/lib/utils/to-int.js");


// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && (0,_to_int__WEBPACK_IMPORTED_MODULE_0__.default)(array1[i]) !== (0,_to_int__WEBPACK_IMPORTED_MODULE_0__.default)(array2[i]))
        ) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/defaults.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/defaults.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaults)
/* harmony export */ });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/deprecate.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/deprecate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecate": () => (/* binding */ deprecate),
/* harmony export */   "deprecateSimple": () => (/* binding */ deprecateSimple)
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./node_modules/moment/src/lib/utils/extend.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");




function warn(msg) {
    if (
        _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
    ) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return (0,_extend__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
        if (_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler != null) {
            _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [],
                arg,
                i,
                key;
            for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0]) {
                        if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_2__.default)(arguments[0], key)) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(
                msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
            );
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler != null) {
        _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.suppressDeprecationWarnings = false;
_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler = null;


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/extend.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/extend.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extend)
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function extend(a, b) {
    for (var i in b) {
        if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, i)) {
            a[i] = b[i];
        }
    }

    if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, 'toString')) {
        a.toString = b.toString;
    }

    if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/has-own-prop.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/has-own-prop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasOwnProp)
/* harmony export */ });
function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/hooks.js":
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/hooks.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": () => (/* binding */ hooks),
/* harmony export */   "setHookCallback": () => (/* binding */ setHookCallback)
/* harmony export */ });


var hookCallback;

function hooks() {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
    hookCallback = callback;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/index-of.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/index-of.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ indexOf)
/* harmony export */ });
var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-array.js":
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-array.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isArray)
/* harmony export */ });
function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-calendar-spec.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-calendar-spec.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCalendarSpec)
/* harmony export */ });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");




function isCalendarSpec(input) {
    var objectTest = (0,_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(input) && !(0,_is_object_empty__WEBPACK_IMPORTED_MODULE_0__.default)(input),
        propertyTest = false,
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || (0,_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(input, property);
    }

    return objectTest && propertyTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-date.js":
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-date.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-function.js":
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-function.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-leap-year.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-leap-year.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLeapYear": () => (/* binding */ isLeapYear)
/* harmony export */ });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-moment-input.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-moment-input.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMomentInput": () => (/* binding */ isMomentInput),
/* harmony export */   "isMomentInputObject": () => (/* binding */ isMomentInputObject)
/* harmony export */ });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ "./node_modules/moment/src/lib/utils/is-object-empty.js");
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ "./node_modules/moment/src/lib/utils/is-object.js");
/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-number */ "./node_modules/moment/src/lib/utils/is-number.js");
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-string */ "./node_modules/moment/src/lib/utils/is-string.js");
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moment/constructor */ "./node_modules/moment/src/lib/moment/constructor.js");
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-array */ "./node_modules/moment/src/lib/utils/is-array.js");









// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input) {
    return (
        (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_6__.isMoment)(input) ||
        (0,_is_date__WEBPACK_IMPORTED_MODULE_3__.default)(input) ||
        (0,_is_string__WEBPACK_IMPORTED_MODULE_5__.default)(input) ||
        (0,_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === undefined
    );
}

function isMomentInputObject(input) {
    var objectTest = (0,_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(input) && !(0,_is_object_empty__WEBPACK_IMPORTED_MODULE_0__.default)(input),
        propertyTest = false,
        properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || (0,_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(input, property);
    }

    return objectTest && propertyTest;
}

function isNumberOrStringArray(input) {
    var arrayTest = (0,_is_array__WEBPACK_IMPORTED_MODULE_7__.default)(input),
        dataTypeTest = false;
    if (arrayTest) {
        dataTypeTest =
            input.filter(function (item) {
                return !(0,_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(item) && (0,_is_string__WEBPACK_IMPORTED_MODULE_5__.default)(input);
            }).length === 0;
    }
    return arrayTest && dataTypeTest;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-number.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-number.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNumber)
/* harmony export */ });
function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object-empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object-empty.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObjectEmpty)
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var k;
        for (k in obj) {
            if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(obj, k)) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-object.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-string.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-string.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isString)
/* harmony export */ });
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/is-undefined.js":
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-undefined.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isUndefined)
/* harmony export */ });
function isUndefined(input) {
    return input === void 0;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/keys.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/keys.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keys)
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ "./node_modules/moment/src/lib/utils/has-own-prop.js");


var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i,
            res = [];
        for (i in obj) {
            if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/map.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/map.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ map)
/* harmony export */ });
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/mod.js":
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/mod.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mod)
/* harmony export */ });
function mod(n, x) {
    return ((n % x) + x) % x;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/some.js":
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/some.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ some)
/* harmony export */ });
var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}




/***/ }),

/***/ "./node_modules/moment/src/lib/utils/to-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/to-int.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInt)
/* harmony export */ });
/* harmony import */ var _abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs-floor */ "./node_modules/moment/src/lib/utils/abs-floor.js");


function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = (0,_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(coercedNumber);
    }

    return value;
}


/***/ }),

/***/ "./node_modules/moment/src/lib/utils/zero-fill.js":
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/zero-fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ zeroFill)
/* harmony export */ });
function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
    );
}


/***/ }),

/***/ "./node_modules/moment/src/moment.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/src/moment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/hooks */ "./node_modules/moment/src/lib/utils/hooks.js");
/* harmony import */ var _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/moment/moment */ "./node_modules/moment/src/lib/moment/moment.js");
/* harmony import */ var _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/moment/calendar */ "./node_modules/moment/src/lib/moment/calendar.js");
/* harmony import */ var _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/locale/locale */ "./node_modules/moment/src/lib/locale/locale.js");
/* harmony import */ var _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/duration/duration */ "./node_modules/moment/src/lib/duration/duration.js");
/* harmony import */ var _lib_units_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/units/units */ "./node_modules/moment/src/lib/units/units.js");
/* harmony import */ var _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/is-date */ "./node_modules/moment/src/lib/utils/is-date.js");
//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com



_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.version = '2.29.1';













(0,_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.setHookCallback)(_lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createLocal);

_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.fn = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.momentPrototype;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.min = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.min;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.max = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.max;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.now = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.now;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.utc = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createUTC;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.unix = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createUnix;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.months = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listMonths;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isDate = _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__.default;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.locale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.getSetGlobalLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.invalid = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createInvalid;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.duration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.createDuration;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isMoment = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.isMoment;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdays = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdays;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.parseZone = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createInZone;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.localeData = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.getLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isDuration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.isDuration;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.monthsShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listMonthsShort;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdaysMin = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdaysMin;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.defineLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.defineLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.updateLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.updateLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.locales = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listLocales;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdaysShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdaysShort;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.normalizeUnits = _lib_units_units__WEBPACK_IMPORTED_MODULE_5__.normalizeUnits;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.relativeTimeRounding = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.getSetRelativeTimeRounding;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.relativeTimeThreshold = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.getSetRelativeTimeThreshold;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.calendarFormat = _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__.getCalendarFormat;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.prototype = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.momentPrototype;

// currently HTML5 input type only supports 24-hour formats
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks);


/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "MultiDrag": () => (/* binding */ MultiDragPlugin),
/* harmony export */   "Sortable": () => (/* binding */ Sortable),
/* harmony export */   "Swap": () => (/* binding */ SwapPlugin)
/* harmony export */ });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileForm.vue?vue&type=template&id=27765afe& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe&");
/* harmony import */ var _FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkForm.vue?vue&type=template&id=90649108& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108&");
/* harmony import */ var _LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__.render,
  _LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleForm.vue?vue&type=template&id=72ea326e& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e&");
/* harmony import */ var _ModuleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModuleForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ModuleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true&");
/* harmony import */ var _NewClassworkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewClassworkForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _NewClassworkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "253ea14b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteForm.vue?vue&type=template&id=0372d2e6& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6&");
/* harmony import */ var _deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteItemForm.vue?vue&type=template&id=da4c9b80& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80&");
/* harmony import */ var _deleteItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteItemForm.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _deleteItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__.render,
  _deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulesListComponent.vue?vue&type=template&id=2678f1b6& */ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6&");
/* harmony import */ var _modulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulesListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulesListComponent.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _modulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LinkForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModuleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModuleForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModuleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteItemForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileForm_vue_vue_type_template_id_27765afe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileForm.vue?vue&type=template&id=27765afe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkForm_vue_vue_type_template_id_90649108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LinkForm.vue?vue&type=template&id=90649108& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModuleForm_vue_vue_type_template_id_72ea326e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModuleForm.vue?vue&type=template&id=72ea326e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_template_id_253ea14b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteForm_vue_vue_type_template_id_0372d2e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteForm.vue?vue&type=template&id=0372d2e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deleteItemForm_vue_vue_type_template_id_da4c9b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deleteItemForm.vue?vue&type=template&id=da4c9b80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_template_id_2678f1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=template&id=2678f1b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue?vue&type=template&id=27765afe& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("vue-element-loading", {
        attrs: { active: _vm.isSaving, spinner: "bar-fade-scale" }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addFile.apply(null, arguments)
            }
          }
        },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Add File")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "py-0 my-0", attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Title",
                              required: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.subModuleForm.sub_module_name,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.subModuleForm,
                                  "sub_module_name",
                                  $$v
                                )
                              },
                              expression: "subModuleForm.sub_module_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "py-0 my-0", attrs: { cols: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              outlined: "",
                              label: "Description",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.subModuleForm.description,
                              callback: function($$v) {
                                _vm.$set(_vm.subModuleForm, "description", $$v)
                              },
                              expression: "subModuleForm.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "py-0 my-0", attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label:
                                "Required time spent for Completion (minutes)",
                              outlined: "",
                              type: "number",
                              required: ""
                            },
                            model: {
                              value: _vm.subModuleForm.required_time,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.subModuleForm,
                                  "required_time",
                                  $$v
                                )
                              },
                              expression: "subModuleForm.required_time"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.oldFileInput == false
                        ? _c(
                            "v-col",
                            { staticClass: "py-0 my-0", attrs: { cols: "12" } },
                            [
                              _c("v-file-input", {
                                ref: "inputFile",
                                attrs: {
                                  "show-size": "",
                                  outlined: "",
                                  label: "Attach File",
                                  "prepend-inner-icon": "mdi-file",
                                  "prepend-icon": ""
                                },
                                on: { change: _vm.onFileChange }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-top": "-20px",
                                    position: "relative",
                                    "z-index": "90999"
                                  }
                                },
                                [
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { right: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "span",
                                                  _vm._g(
                                                    _vm._b(
                                                      {},
                                                      "span",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "info" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-information-outline"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                                        Supported files\n                                    "
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
                                        2546136041
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                                    Supported files:\n                                    "
                                        ),
                                        _c("ul", [
                                          _c("li", [_vm._v(".pdf")]),
                                          _vm._v(" "),
                                          _c("li", [_vm._v(".doc .docx")]),
                                          _vm._v(" "),
                                          _c("li", [_vm._v(".pptx .ppt")]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _vm._v(
                                              "File must be less than 10 mb"
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
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("vue-element-loading", {
                        attrs: {
                          active: _vm.isDeleting,
                          spinner: "bar-fade-scale"
                        }
                      }),
                      _vm._v(" "),
                      _vm.oldFileInput == true
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12 py-0 my-0" } },
                            [
                              _c(
                                "v-row",
                                {
                                  staticStyle: {
                                    height: "55px",
                                    border: "1px solid",
                                    "border-radius": "4px",
                                    width: "100%",
                                    margin: "auto"
                                  },
                                  attrs: { align: "center", justify: "center" }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        "grow text-left py-0 pr-0 col-1"
                                    },
                                    [_c("v-icon", [_vm._v("mdi-file")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "grow text-left py-0  pl-0"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-decoration-underline':''"
                                        },
                                        [
                                          _vm._v(
                                            " " + _vm._s(_vm.oldFIle.file_name)
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass:
                                        "shrink d-flex py-0 shrink d-flex"
                                    },
                                    [
                                      _c("div", {
                                        staticClass: "black--text mt-1 mr-2"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "py-0" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                small: "",
                                                icon: "",
                                                text: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.removeFile(
                                                    _vm.submodule.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-close")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
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
                                  staticStyle: {
                                    "margin-top": "10px",
                                    position: "relative",
                                    "z-index": "90999"
                                  }
                                },
                                [
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { right: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "span",
                                                  _vm._g(
                                                    _vm._b(
                                                      {},
                                                      "span",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "info" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-information-outline"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                                        Supported files\n                                    "
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
                                        2546136041
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                                    Supported files:\n                                    "
                                        ),
                                        _c("ul", [
                                          _c("li", [_vm._v(".pdf")]),
                                          _vm._v(" "),
                                          _c("li", [_vm._v(".doc .docx")]),
                                          _vm._v(" "),
                                          _c("li", [_vm._v(".pptx .ppt")]),
                                          _vm._v(" "),
                                          _c("li", [
                                            _vm._v(
                                              "File must be less than 10 mb"
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
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12 py-0 my-0" } },
                        [
                          _vm.uploadPercentage != 0
                            ? _c(
                                "v-progress-linear",
                                {
                                  attrs: {
                                    rounded: "",
                                    value: _vm.uploadPercentage,
                                    height: "14px"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { color: "#fff" } },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.uploadPercentage + "%") + " "
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
          ),
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
                      return _vm.$emit("CloseLecture")
                    }
                  }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    text: "",
                    loading: _vm.sending,
                    disabled: _vm.sending
                  },
                  on: {
                    click: function($event) {
                      return _vm.addFile()
                    }
                  }
                },
                [_vm._v("\n                Save\n            ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue?vue&type=template&id=90649108& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("vue-element-loading", {
        attrs: { active: _vm.isAdding, spinner: "bar-fade-scale" }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addLecture.apply(null, arguments)
            }
          }
        },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Add Link")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12  py-0 my-0" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Title",
                              outlined: "",
                              required: ""
                            },
                            model: {
                              value: _vm.linkForm.sub_module_name,
                              callback: function($$v) {
                                _vm.$set(_vm.linkForm, "sub_module_name", $$v)
                              },
                              expression: "linkForm.sub_module_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12  py-0 my-0" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Link",
                              type: "url",
                              outlined: "",
                              required: ""
                            },
                            model: {
                              value: _vm.linkForm.link,
                              callback: function($$v) {
                                _vm.$set(_vm.linkForm, "link", $$v)
                              },
                              expression: "linkForm.link"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "margin-top": "-25px",
                                position: "relative",
                                "z-index": "90999"
                              }
                            },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { right: "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "span",
                                            _vm._g(
                                              _vm._b({}, "span", attrs, false),
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "info" } },
                                                [
                                                  _vm._v(
                                                    "mdi-information-outline"
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n                                        Supported Links, click here for tutorial\n                                    "
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
                                  _c("span", [
                                    _vm._v(
                                      "\n                                    Supported Links:\n                                    "
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
                        "v-col",
                        { attrs: { cols: "12  col-12  pb-0 my-0" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              label: "Description",
                              counter: "",
                              outlined: "",
                              "full-width": "",
                              "single-line": ""
                            },
                            model: {
                              value: _vm.linkForm.description,
                              callback: function($$v) {
                                _vm.$set(_vm.linkForm, "description", $$v)
                              },
                              expression: " linkForm.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12  py-0 my-0" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              label:
                                "Required time spent for Completion (minutes)",
                              type: "number",
                              required: ""
                            },
                            model: {
                              value: _vm.linkForm.required_time,
                              callback: function($$v) {
                                _vm.$set(_vm.linkForm, "required_time", $$v)
                              },
                              expression: "linkForm.required_time"
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
            ],
            1
          ),
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
                      return _vm.$emit("CloseLecture")
                    }
                  }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    text: "",
                    loading: _vm.sending,
                    disabled: _vm.sending
                  },
                  on: {
                    click: function($event) {
                      return _vm.addLecture()
                    }
                  }
                },
                [_vm._v("\n                Save\n            ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue?vue&type=template&id=72ea326e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.type == "edit" ? "Edit Module" : "Add Module"))
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "py-0 my-0", attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.rules,
                              label: "Module Name*",
                              outlined: "",
                              required: ""
                            },
                            model: {
                              value: _vm.moduleForm.module_name,
                              callback: function($$v) {
                                _vm.$set(_vm.moduleForm, "module_name", $$v)
                              },
                              expression: "moduleForm.module_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "py-0 my-0", attrs: { cols: "12 " } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rules: _vm.rules,
                              outlined: "",
                              label: "Description",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.moduleForm.description,
                              callback: function($$v) {
                                _vm.$set(_vm.moduleForm, "description", $$v)
                              },
                              expression: "moduleForm.description"
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
            ],
            1
          ),
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
                      return _vm.$emit("closeModal")
                    }
                  }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    text: "",
                    loading: _vm.isSubmitting
                  },
                  on: { click: _vm.validate }
                },
                [_vm._v("\n                Save\n            ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=template&id=253ea14b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade",
      attrs: {
        id: "Classworkmodal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-8" }, [
                      _c("label", { attrs: { for: "inputTitle" } }, [
                        _vm._v("Title")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "inputTitle",
                          placeholder: "Title"
                        },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-4" }, [
                      _c("label", { attrs: { for: "inputType" } }, [
                        _vm._v("Type")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.type,
                              expression: "form.type"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "inputType" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Quiz")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Assignment")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Activity")
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-12" }, [
                      _c("label", { attrs: { for: "inputDescription" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.description,
                            expression: "form.description"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "inputDescription", rows: "3" },
                        domProps: { value: _vm.form.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "inputDueDate" } }, [
                        _vm._v("Due Date")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.due_date,
                            expression: "form.due_date"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "datetime-local",
                          id: "inputDueDate",
                          placeholder: "Due date"
                        },
                        domProps: { value: _vm.form.due_date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "due_date", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn-secondry",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", loading: _vm.isSaving },
                      on: {
                        click: function($event) {
                          return _vm.SaveClasswork()
                        }
                      }
                    },
                    [_vm._v("Save")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "" } }, [
        _vm._v("Create Classwork")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue?vue&type=template&id=0372d2e6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c("v-card-title", [
        _c("span", { staticClass: "headline" }, [_vm._v("Confirmation")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _vm._v("\n        Are you sure you want to delete this module?\n    ")
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
                  return _vm.$emit("closeModal")
                }
              }
            },
            [_vm._v("\n            Cancel\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                color: "red",
                text: "",
                loading: _vm.isDeleting,
                disabled: _vm.isDeleting
              },
              on: {
                click: function($event) {
                  return _vm.deleteModule()
                }
              }
            },
            [_vm._v("\n            Delete\n        ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/deleteItemForm.vue?vue&type=template&id=da4c9b80& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-form",
        { ref: "registerForm" },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Confirmation")])
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "\n            Are you sure you want to delete this item?\n        "
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
                      return _vm.$emit("closeModal")
                    }
                  }
                },
                [_vm._v("\n                Cancel\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "red",
                    text: "",
                    loading: _vm.isDeleting,
                    disabled: _vm.isDeleting
                  },
                  on: {
                    click: function($event) {
                      return _vm.deleteModule()
                    }
                  }
                },
                [_vm._v("\n                Delete\n            ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=template&id=2678f1b6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    "v-col",
    [
      _c("vue-element-loading", {
        attrs: {
          active: _vm.isDrag,
          spinner: "bar-fade-scale",
          color: "#FF6700"
        }
      }),
      _vm._v(" "),
      _c(
        "v-alert",
        {
          attrs: {
            border: "bottom",
            "close-text": "Close Alert",
            type: "info",
            dismissible: ""
          },
          model: {
            value: _vm.tip,
            callback: function($$v) {
              _vm.tip = $$v
            },
            expression: "tip"
          }
        },
        [
          _vm._v(
            "\nTips: You can change your modules arrangement by dragging your modules into a certain position.\n\n    "
          ),
          _c("v-checkbox", {
            staticClass: "pa-0 mb-0",
            attrs: { label: "Don't show me again." },
            on: {
              change: function($event) {
                return _vm.showHandler()
              }
            },
            model: {
              value: _vm.tipCheckBox,
              callback: function($$v) {
                _vm.tipCheckBox = $$v
              },
              expression: "tipCheckBox"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-expansion-panels",
        { attrs: { focusable: "" } },
        [
          _c(
            "draggable",
            _vm._b(
              {
                staticStyle: { width: "100%" },
                on: {
                  change: _vm.onEnd,
                  start: function($event) {
                    _vm.isDragging = true
                  },
                  end: function($event) {
                    _vm.isDragging = false
                  }
                },
                model: {
                  value: _vm.mainModule,
                  callback: function($$v) {
                    _vm.mainModule = $$v
                  },
                  expression: "mainModule"
                }
              },
              "draggable",
              _vm.dragOptions,
              false
            ),
            [
              _c(
                "transition-group",
                { attrs: { type: "transition", name: "flip-list" } },
                _vm._l(_vm.getmain_module, function(itemModule, i) {
                  return _c(
                    "v-expansion-panel",
                    { key: "module" + i, attrs: { draggable: "true" } },
                    [
                      _c(
                        "span",
                        { staticClass: "text-right pannel-btn" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", "float-right": "" },
                              on: {
                                click: function($event) {
                                  return _vm.editModuleBtn(
                                    itemModule.id,
                                    itemModule,
                                    itemModule.isPublished
                                  )
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-pencil")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", right: "" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteMoudleBtn(
                                    itemModule.id,
                                    itemModule.isPublished,
                                    itemModule.student_progress_count
                                  )
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-delete")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-expansion-panel-header", [
                        _c(
                          "span",
                          { staticStyle: { "font-size": "1.5rem" } },
                          [
                            _c(
                              "v-tooltip",
                              {
                                attrs: { top: "", color: "black" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "div",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  staticClass: "module-switch",
                                                  staticStyle: {
                                                    width: "min-content"
                                                  }
                                                },
                                                "div",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c(
                                                "v-switch",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        inset: "",
                                                        loading:
                                                          _vm.isPublishing &&
                                                          _vm.isPublishing_id ==
                                                            itemModule.id,
                                                        color: "success",
                                                        disabled:
                                                          _vm.isPublishing
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          ;(_vm.isPublishing_id =
                                                            itemModule.id),
                                                            _vm.publishModule(
                                                              itemModule.module_name,
                                                              itemModule.id,
                                                              itemModule.isPublished
                                                            )
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          itemModule.isPublished,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            itemModule,
                                                            "isPublished",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "itemModule.isPublished"
                                                      }
                                                    },
                                                    "v-switch",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                )
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
                                    _vm._s(
                                      itemModule.isPublished
                                        ? "Unpublished"
                                        : "Publish"
                                    )
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              { staticStyle: { "font-size": "2.25rem" } },
                              [
                                _vm._v(
                                  "\n                                   mdi-folder\n                               "
                                )
                              ]
                            ),
                            _vm._v(
                              "\n                               " +
                                _vm._s(itemModule.module_name) +
                                "\n\n                           "
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        [
                          _vm._l(_vm.getSub_module(itemModule.id), function(
                            itemSubModule,
                            i
                          ) {
                            return _c(
                              "v-list-item",
                              {
                                key: "Submodule" + i,
                                staticClass: "pl-8",
                                attrs: { link: "" }
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
                                          "\n                                       mdi-folder\n                                   "
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
                                      _vm._v(
                                        " " +
                                          _vm._s(itemSubModule.sub_module_name)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(" " + _vm._s(itemSubModule.type))
                                    ]),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(
                                        " Created: " +
                                          _vm._s(
                                            _vm.format_date(
                                              itemSubModule.created_at
                                            )
                                          ) +
                                          "\n                                   "
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
                                      "v-menu",
                                      {
                                        attrs: {
                                          transition: "slide-y-transition",
                                          bottom: ""
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
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                attrs: { link: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editItemBtn(
                                                      itemSubModule,
                                                      itemSubModule.id,
                                                      itemSubModule.type,
                                                      itemModule.isPublished
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Edit")
                                                ])
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
                                                    return _vm.deleteItemModuleBtn(
                                                      itemSubModule.id,
                                                      itemModule.isPublished,
                                                      itemModule.student_progress_count
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Delete")
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
                          _vm._v(" "),
                          _vm.getSub_module(itemModule.id).length != 0
                            ? _c("hr")
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title"),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle")
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
                                      attrs: {
                                        transition: "slide-y-transition",
                                        bottom: ""
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
                                                          "secondary",
                                                        attrs: { tile: "" }
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
                                                      { attrs: { left: "" } },
                                                      [
                                                        _vm._v(
                                                          "\n                                                   mdi-plus\n                                               "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                                               Add item\n                                           "
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
                                        [
                                          _c(
                                            "v-list-item",
                                            {
                                              attrs: { link: "" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.addFileBtn(
                                                    itemModule.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("File")
                                              ])
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
                                                  return _vm.addLinkBtn(
                                                    itemModule.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Link")
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
                        ],
                        2
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px" },
          model: {
            value: _vm.itemDialog,
            callback: function($$v) {
              _vm.itemDialog = $$v
            },
            expression: "itemDialog"
          }
        },
        [
          _vm.itemType == "edit_module"
            ? _c("moduleFormEdit", {
                attrs: { propModule: _vm.propModule, type: "edit" },
                on: {
                  closeModal: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.itemType == "add_file" || _vm.itemType == "edit_file"
            ? _c("fileForm", {
                attrs: {
                  moduleId: _vm.mainModule_id,
                  submodule: _vm.pass_submodule,
                  type_action: _vm.itemType
                },
                on: {
                  CloseLecture: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.itemType == "add_link" || _vm.itemType == "edit_link"
            ? _c("linkForm", {
                attrs: {
                  submodule: _vm.pass_submodule,
                  sub_module_id: _vm.sub_module_id,
                  moduleId: _vm.mainModule_id,
                  type_action: _vm.itemType
                },
                on: {
                  CloseLecture: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.itemType == "delete_module"
            ? _c("deleteForm", {
                attrs: { moduleId: _vm.mainModule_id, type: "delete_module" },
                on: {
                  closeModal: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  },
                  deleted_module: _vm.deleteModule
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.itemType == "delete_item_module"
            ? _c("deleteItemForm", {
                attrs: {
                  sub_module_id: _vm.sub_module_id,
                  type: "delete_module"
                },
                on: {
                  closeModal: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  }
                }
              })
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



/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js":
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_688__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_688__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_688__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_688__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_688__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_688__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_688__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_688__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_688__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_688__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_688__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_688__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_688__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_688__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_688__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_688__(__nested_webpack_require_688__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_4164__) {

"use strict";

var LIBRARY = __nested_webpack_require_4164__("2d00");
var $export = __nested_webpack_require_4164__("5ca1");
var redefine = __nested_webpack_require_4164__("2aba");
var hide = __nested_webpack_require_4164__("32e9");
var Iterators = __nested_webpack_require_4164__("84f2");
var $iterCreate = __nested_webpack_require_4164__("41a0");
var setToStringTag = __nested_webpack_require_4164__("7f20");
var getPrototypeOf = __nested_webpack_require_4164__("38fd");
var ITERATOR = __nested_webpack_require_4164__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_7070__) {

var toInteger = __nested_webpack_require_7070__("4588");
var defined = __nested_webpack_require_7070__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_7783__) {

"use strict";

var at = __nested_webpack_require_7783__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_8134__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_8134__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_8593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_8593__("ce10");
var enumBugKeys = __nested_webpack_require_8593__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_8892__) {

var dP = __nested_webpack_require_8892__("86cc");
var anObject = __nested_webpack_require_8892__("cb7c");
var getKeys = __nested_webpack_require_8892__("0d58");

module.exports = __nested_webpack_require_8892__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_9392__) {

"use strict";

__nested_webpack_require_9392__("b0c5");
var redefine = __nested_webpack_require_9392__("2aba");
var hide = __nested_webpack_require_9392__("32e9");
var fails = __nested_webpack_require_9392__("79e5");
var defined = __nested_webpack_require_9392__("be13");
var wks = __nested_webpack_require_9392__("2b4c");
var regexpExec = __nested_webpack_require_9392__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_12849__) {

var isObject = __nested_webpack_require_12849__("d3f4");
var document = __nested_webpack_require_12849__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_13233__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_13233__("2d95");
var TAG = __nested_webpack_require_13233__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_14160__) {

var global = __nested_webpack_require_14160__("7726");
var hide = __nested_webpack_require_14160__("32e9");
var has = __nested_webpack_require_14160__("69a8");
var SRC = __nested_webpack_require_14160__("ca5a")('src');
var $toString = __nested_webpack_require_14160__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_14160__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_15334__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_15334__("cb7c");
var dPs = __nested_webpack_require_15334__("1495");
var enumBugKeys = __nested_webpack_require_15334__("e11e");
var IE_PROTO = __nested_webpack_require_15334__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_15334__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_15334__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_16945__) {

var store = __nested_webpack_require_16945__("5537")('wks');
var uid = __nested_webpack_require_16945__("ca5a");
var Symbol = __nested_webpack_require_16945__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_17667__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_17667__("5ca1");
var context = __nested_webpack_require_17667__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_17667__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_18235__) {

var dP = __nested_webpack_require_18235__("86cc");
var createDesc = __nested_webpack_require_18235__("4630");
module.exports = __nested_webpack_require_18235__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_18611__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_18611__("69a8");
var toObject = __nested_webpack_require_18611__("4bf8");
var IE_PROTO = __nested_webpack_require_18611__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_19205__) {

"use strict";

var create = __nested_webpack_require_19205__("2aeb");
var descriptor = __nested_webpack_require_19205__("4630");
var setToStringTag = __nested_webpack_require_19205__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_19205__("32e9")(IteratorPrototype, __nested_webpack_require_19205__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_19831__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19831__("4bf8");
var $keys = __nested_webpack_require_19831__("0d58");

__nested_webpack_require_19831__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_20609__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_20609__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_20831__) {

var MATCH = __nested_webpack_require_20831__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_21176__) {

"use strict";


var regexpFlags = __nested_webpack_require_21176__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_23109__) {

var core = __nested_webpack_require_23109__("8378");
var global = __nested_webpack_require_23109__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_23109__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_23642__) {

var global = __nested_webpack_require_23642__("7726");
var core = __nested_webpack_require_23642__("8378");
var hide = __nested_webpack_require_23642__("32e9");
var redefine = __nested_webpack_require_23642__("2aba");
var ctx = __nested_webpack_require_23642__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_25367__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_25367__("5ca1");
var core = __nested_webpack_require_25367__("8378");
var fails = __nested_webpack_require_25367__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_25845__) {

"use strict";


var classof = __nested_webpack_require_25845__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_26551__) {

var shared = __nested_webpack_require_26551__("5537")('keys');
var uid = __nested_webpack_require_26551__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_26811__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_26811__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_27194__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_27194__("5ca1");
var $includes = __nested_webpack_require_27194__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_27194__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_27659__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_27659__("626a");
var defined = __nested_webpack_require_27659__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_28155__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_28155__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_28898__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __nested_webpack_require_28898__("0d58");
var gOPS = __nested_webpack_require_28898__("2621");
var pIE = __nested_webpack_require_28898__("52a7");
var toObject = __nested_webpack_require_28898__("4bf8");
var IObject = __nested_webpack_require_28898__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_28898__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_30635__) {

var toInteger = __nested_webpack_require_30635__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_31112__) {

var def = __nested_webpack_require_31112__("86cc").f;
var has = __nested_webpack_require_31112__("69a8");
var TAG = __nested_webpack_require_31112__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_31751__) {

var anObject = __nested_webpack_require_31751__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_31751__("c69a");
var toPrimitive = __nested_webpack_require_31751__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_31751__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_32441__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_32441__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_33048__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_33048__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_33048__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_33448__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_33448__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_33750__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_33750__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_34139__) {

"use strict";


var anObject = __nested_webpack_require_34139__("cb7c");
var toObject = __nested_webpack_require_34139__("4bf8");
var toLength = __nested_webpack_require_34139__("9def");
var toInteger = __nested_webpack_require_34139__("4588");
var advanceStringIndex = __nested_webpack_require_34139__("0390");
var regExpExec = __nested_webpack_require_34139__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_34139__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_38885__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_38885__("d3f4");
var cof = __nested_webpack_require_38885__("2d95");
var MATCH = __nested_webpack_require_38885__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_39282__) {

var $iterators = __nested_webpack_require_39282__("cadf");
var getKeys = __nested_webpack_require_39282__("0d58");
var redefine = __nested_webpack_require_39282__("2aba");
var global = __nested_webpack_require_39282__("7726");
var hide = __nested_webpack_require_39282__("32e9");
var Iterators = __nested_webpack_require_39282__("84f2");
var wks = __nested_webpack_require_39282__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_41209__) {

"use strict";

var regexpExec = __nested_webpack_require_41209__("520a");
__nested_webpack_require_41209__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_41706__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_41706__("6821");
var toLength = __nested_webpack_require_41706__("9def");
var toAbsoluteIndex = __nested_webpack_require_41706__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42729__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42729__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42729__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_42729__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44512__) {

module.exports = !__nested_webpack_require_44512__("9e1e") && !__nested_webpack_require_44512__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44512__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_45568__) {

"use strict";

var addToUnscopables = __nested_webpack_require_45568__("9c6c");
var step = __nested_webpack_require_45568__("d53b");
var Iterators = __nested_webpack_require_45568__("84f2");
var toIObject = __nested_webpack_require_45568__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_45568__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_46777__) {

var isObject = __nested_webpack_require_46777__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_47019__) {

var has = __nested_webpack_require_47019__("69a8");
var toIObject = __nested_webpack_require_47019__("6821");
var arrayIndexOf = __nested_webpack_require_47019__("c366")(false);
var IE_PROTO = __nested_webpack_require_47019__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_47655__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_47655__("aae3");
var defined = __nested_webpack_require_47655__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __nested_webpack_require_48796__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __nested_webpack_require_48796__("5ca1");
var toLength = __nested_webpack_require_48796__("9def");
var context = __nested_webpack_require_48796__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __nested_webpack_require_48796__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_50913__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_50913__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_50913__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_51166__) {

module.exports = __nested_webpack_require_51166__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_51344__) {

var document = __nested_webpack_require_51344__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51548__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_51548__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_51548__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_51548__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_51548__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __nested_webpack_require_51548__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_51548__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_51548__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_51548__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_51548__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_51548__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_51548__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_51548__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __nested_webpack_require_51548__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ })

}]);