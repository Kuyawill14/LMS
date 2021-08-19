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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['moduleId'],
  data: function data() {
    return {
      sending: false,
      loading: '',
      addLink: false,
      showClasswork: false,
      subModuleForm: {},
      ext: '',
      file: null,
      allowedExt: ['pdf', 'pptx', 'ppt', 'xls', 'xlsx', 'doc', 'docx', 'mp4'],
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
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"]),
  methods: {
    getFileExt: function getFileExt(filename) {
      var split = filename.split('.');
      return split[split.length - 1];
    },
    onFileChange: function onFileChange(file) {
      var _this = this;

      console.log('selected file', file.name);
      this.ext = this.getFileExt(file.name);
      this.allowedExt.forEach(function (_ext) {
        if (_ext != _this.ext) {
          console.log('Invalid File type');
        } else {
          if (_this.ext == 'mp4') {
            _this.type = 'Video';
          } else {
            _this.type = 'Document';

            if (_this.ext != 'pdf') {
              alert('Invalid File Type, Convert file document to pdf!');
            }
          }
        }
      });
      this.file = file;
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Lecture Successfully Created", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    addFile: function addFile() {
      var _this2 = this;

      var fd = new FormData();
      fd.append('file', this.file);
      fd.append('main_module_id', this.moduleId);
      fd.append('description', this.subModuleForm.description);
      fd.append('required_time', this.subModuleForm.required_time * 60);
      fd.append('type', this.type);
      fd.append('sub_module_name', this.subModuleForm.sub_module_name);
      this.sending = true;
      this.$store.dispatch('createSubModule', fd).then(function (res) {
        _this2.subModuleForm.sub_module_name = '';
        _this2.subModuleForm.description = '';

        _this2.$refs.inputFile.reset();

        _this2.$emit('CloseLecture');

        _this2.toastSuccess();

        setTimeout(function () {
          _this2.sending = false;
        }, 1000);
      });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['moduleId'],
  data: function data() {
    return {
      sending: false,
      loading: '',
      addLink: false,
      showClasswork: false,
      linkForm: {},
      file: null
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"]),
  methods: {
    onFileChange: function onFileChange(file) {
      console.log('selected file', file);
      this.file = file;
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Lecture Successfully Created", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    addLecture: function addLecture() {
      var _this = this;

      this.linkForm.type = 'Link';
      this.linkForm.main_module_id = this.moduleId;
      this.$store.dispatch('createSubModule', this.linkForm).then(function (res) {
        _this.linkForm.sub_module_name = '';
        _this.linkForm.link = '';
        _this.linkForm.type = '';

        _this.$emit('CloseLecture');

        _this.toastSuccess();

        setTimeout(function () {
          _this.sending = false;
        }, 1000);
      });
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
      })["catch"](function (e) {
        console.log(e);
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
      id: ''
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

      this.$store.dispatch('deleteMainModule', this.id).then(function (res) {
        console.log(res);
        _this.loading = false;

        _this.$emit('closeModal');

        _this.toastSuccess("Module Successfully Deleted");
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
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Forms_FileForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Forms/FileForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/FileForm.vue");
/* harmony import */ var _Forms_LinkForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms/LinkForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/LinkForm.vue");
/* harmony import */ var _Forms_ModuleForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms/ModuleForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/ModuleForm.vue");
/* harmony import */ var _Forms_deleteForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Forms/deleteForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/deleteForm.vue");
/* harmony import */ var _Forms_NewClassworkForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms/NewClassworkForm */ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_2___default()),
    fileForm: _Forms_FileForm__WEBPACK_IMPORTED_MODULE_3__.default,
    linkForm: _Forms_LinkForm__WEBPACK_IMPORTED_MODULE_4__.default,
    newClassworkForm: _Forms_NewClassworkForm__WEBPACK_IMPORTED_MODULE_7__.default,
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default()),
    moduleFormEdit: _Forms_ModuleForm__WEBPACK_IMPORTED_MODULE_5__.default,
    deleteForm: _Forms_deleteForm__WEBPACK_IMPORTED_MODULE_6__.default
  },
  data: function data() {
    return {
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
      mainModule: [],
      propModule: [],
      studentSubModuleProgress: [],
      studentSubModuleProgressForm: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module"])), {}, {
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
    onEnd: function onEnd() {
      var _this = this;

      this.isDrag = true;
      axios.post("/api/main_module/arrange", {
        mainModules: this.mainModule
      }).then(function (res) {
        _this.isDrag = false;
      });
    },
    getdata: function getdata() {
      this.mainModule = this.getmain_module;
    },
    deleteMoudleBtn: function deleteMoudleBtn(module_id) {
      this.itemDialog = !this.itemDialog;
      this.itemType = 'delete_module';
      this.mainModule_id = module_id;
    },
    editModuleBtn: function editModuleBtn(module_id, itemModule) {
      this.itemDialog = !this.itemDialog;
      this.propModule = itemModule;
      console.log(this.propModule);
      this.mainModule_id = module_id;
      this.itemType = 'edit_module';
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
  }), _defineProperty(_methods, "addSubStudentProgress", function addSubStudentProgress(mainModule_id, subModule_id, type) {
    var _this2 = this;

    this.tempSubId = subModule_id;
    this.studentSubModuleProgressForm.main_module_id = mainModule_id;
    this.studentSubModuleProgressForm.sub_module_id = subModule_id;
    this.studentSubModuleProgressForm.type = type;
    this.studentSubModuleProgressForm.course_id = this.$route.params.id;
    axios.post("/api/student_sub_module/insert", {
      studentProgress: this.studentSubModuleProgressForm
    }).then(function (res) {
      _this2.studentSubModuleProgress.push(res.data);
    });
  }), _defineProperty(_methods, "checkSubModule", function checkSubModule(arr, sub_module_id) {
    var check = false; //console.log(arr);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].sub_module_id == sub_module_id) {
        check = true;
      }
    }

    return check;
  }), _methods),
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this3.getdata(); // axios.get(
              //     `/api/student_sub_module/all/${this.$route.params.id}`
              // ).then((res) => {
              //     this.studentSubModuleProgress = res.data;
              //     this.getCount(this.studentSubModuleProgress, 23);
              //     this.$store.dispatch('fetchMainModule', this.$route.params.id);
              //     this.$store.dispatch('fetchSubModule', this.$route.params.id);
              // }).catch((error) => {
              //     console.log(error)
              // })


            case 1:
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flip-list-move {\n  transition: transform 0.5s !important;\n}\n.no-move {\n  transition: transform 0s !important;\n}\n.pannel-btn {\n  position: absolute;\n  top: 15px;\n  right: 47px;\n  z-index: 100;\n}\n.v-expansion-panel-content__wrap {\n  padding: 0 !important;\n}\n.ghost {\n  border-left: 10px solid #FF5400 !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-253ea14b], select[data-v-253ea14b]{\n    border-left: none;\n    border-right: none;\n    border-top: none;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_modulesListComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewClassworkForm_vue_vue_type_style_index_0_id_253ea14b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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
  return _c("v-card", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addFile($event)
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Title", required: "" },
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("editor", {
                          staticStyle: { outline: "none" },
                          attrs: {
                            placeholder: "Description",
                            theme: "snow",
                            options: _vm.options
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label:
                              "Required time spent for Completion (minutes)",
                            type: "number",
                            required: ""
                          },
                          model: {
                            value: _vm.subModuleForm.required_time,
                            callback: function($$v) {
                              _vm.$set(_vm.subModuleForm, "required_time", $$v)
                            },
                            expression: "subModuleForm.required_time"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-file-input", {
                      ref: "inputFile",
                      attrs: { "show-size": "", label: "Attach File" },
                      on: { change: _vm.onFileChange }
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
          [
            _c("v-spacer"),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                attrs: { color: "blue darken-1", text: "" },
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
                  color: "blue darken-1",
                  text: "",
                  loading: _vm.sending
                },
                on: {
                  click: function($event) {
                    return _vm.addFile()
                  }
                }
              },
              [_vm._v("\n                Add\n            ")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
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
  return _c("v-card", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addLecture($event)
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Title", required: "" },
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("v-text-field", {
                          attrs: { label: "Link", type: "url", required: "" },
                          model: {
                            value: _vm.linkForm.link,
                            callback: function($$v) {
                              _vm.$set(_vm.linkForm, "link", $$v)
                            },
                            expression: "linkForm.link"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("label", [_vm._v(" Description ")]),
                        _vm._v(" "),
                        _c("v-textarea", {
                          attrs: {
                            label: "Description",
                            counter: "",
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
                      { attrs: { cols: "12 pb-0" } },
                      [
                        _c("v-text-field", {
                          attrs: {
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
                attrs: { color: "blue darken-1", text: "" },
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
                  color: "blue darken-1",
                  text: "",
                  loading: _vm.sending
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
  ])
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
      _c(
        "v-form",
        { ref: "registerForm" },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Confirmation")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _vm._v(
                      "\n                    Are you sure you want to delete this item?\n                "
                    )
                  ])
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
                  attrs: { color: "blue darken-1", text: "" },
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
                    color: "blue darken-1",
                    text: "",
                    loading: _vm.loading
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
                _vm._l(_vm.mainModule, function(itemModule, i) {
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
                                    itemModule
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
                                  return _vm.deleteMoudleBtn(itemModule.id)
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
                              "v-icon",
                              { staticStyle: { "font-size": "2.25rem" } },
                              [
                                _vm._v(
                                  "\n                                mdi-folder\n                            "
                                )
                              ]
                            ),
                            _vm._v(
                              "\n                            " +
                                _vm._s(itemModule.module_name) +
                                "\n\n                        "
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
                                          "\n                                    mdi-folder\n                                "
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
                                                    return _vm.editFileBtn(
                                                      itemModule.id
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
                                                    return _vm.editLinkBtn(
                                                      itemModule.id
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
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              { attrs: { link: "" } },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Archive")
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
                                                          "\n                                                mdi-plus\n                                            "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            Add item\n                                        "
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
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item",
                                            { attrs: { link: "" } },
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Classwork")
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
          attrs: { persistent: "", "max-width": "600px" },
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
          _vm.itemType == "add_file"
            ? _c("fileForm", {
                attrs: { moduleId: _vm.mainModule_id },
                on: {
                  CloseLecture: function($event) {
                    _vm.itemDialog = false
                    _vm.itemType = ""
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.itemType == "add_link"
            ? _c("linkForm", {
                attrs: { moduleId: _vm.mainModule_id },
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modulesListComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/modulesListComponent.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("729d7876", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/Forms/NewClassworkForm.vue?vue&type=style&index=0&id=253ea14b&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("587f7ab6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);