"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69321"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      valid: false,
      isTimer: false,
      file: [],
      fileSize: [],
      loading: false,
      dialog: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({}),
      nullDatetime: null,
      datetime: new Date(),
      datetimeString: '2019-01-01 12:00',
      formattedDatetime: '09/01/2019 12:00',
      textFieldProps: {
        appendIcon: 'event'
      },
      dateProps: {
        headerColor: 'primary'
      },
      timeProps: {
        useSeconds: true,
        ampmInTitle: true
      },
      FieldRules: [function (v) {
        return !!v || 'Field is required';
      }],
      pointsRules: [function (v) {
        return !!v || 'Points is required';
      }, function (v) {
        return v && v >= 1 || "Points should be above or 0";
      }],
      file_name: [],
      counter: 0,
      tmpName: [],
      uploadPercentage: 0,
      uploadIndex: null,
      options: {
        placeholder: 'type here ...',
        blur: true,
        editorData: null,
        modules: {
          toolbar: {
            container: [['bold', 'italic', 'underline'], [{
              'header': [1, 2, 3, 4, 5, false]
            }], [{
              'color': []
            }], [{
              'list': 'ordered'
            }, {
              'list': 'bullet'
            }], ['link', 'image', 'video']]
            /*  handlers: {
                 image: this.imageHandler
             } */

          },
          syntax: {
            highlight: function highlight(text) {
              return hljs.highlightAuto(text).value;
            }
          }
        }
      }
    };
  },
  computed: {
    extension: function extension() {
      return this.file[this.counter] ? this.file[this.counter].name.split('.').pop() : '';
    }
  },
  methods: {
    RemoveFile: function RemoveFile(index) {
      this.file_name.splice(index, 1);
      this.file.splice(index, 1); //console.log(this.file);
    },
    validate: function validate() {
      var _this = this;

      this.loading = !this.loading;

      if (this.$refs.NewClassworkForm.validate()) {
        this.SaveClasswork();
      } else {
        setTimeout(function () {
          _this.loading = !_this.loading;
        }, 1000);
      }
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Classwork Successfully added", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    SaveClasswork: function SaveClasswork() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd, index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('course_id', _this2.$route.params.id);
                fd.append('type', _this2.form.type);
                fd.append('title', _this2.form.title);
                fd.append('instruction', _this2.form.instruction);

                if (_this2.form.type == 'Objective Type') {
                  _this2.form.points = '';
                } else if (_this2.form.type == 'Subjective Type') {
                  _this2.form.duration = '';
                }

                fd.append('points', _this2.form.points);
                fd.append('duration', _this2.form.duration);

                for (index = 0; index < _this2.file.length; index++) {
                  fd.append('file[' + index + ']', _this2.file[index]);
                  fd.append('attachment_name[' + index + ']', _this2.file_name[index].name);
                  fd.append('attachment_size[' + index + ']', _this2.file_name[index].size);
                  fd.append('attachment_extension[' + index + ']', _this2.file_name[index].extesion);
                } //this.form.course_id = this.$route.params.id;


                _this2.$store.dispatch('createClasswork', fd).then(function (res) {
                  if (res.status == 201) {
                    _this2.toastSuccess();

                    if (_this2.form.type == 'Objective Type') {
                      _this2.$router.push({
                        name: 'add-question',
                        params: {
                          id: res.data.course_id
                        },
                        query: {
                          clwk: res.data.id
                        }
                      });
                    } else if (_this2.form.type == 'Subjective Type') {
                      _this2.$router.push({
                        name: 'clwk',
                        params: {
                          id: res.data.course_id
                        },
                        query: {
                          clwk: res.data.id
                        }
                      });
                    } //this.$refs.NewClassworkForm.reset()
                    //this.loading = !this.loading;


                    _this2.$emit('realodClassworks');
                  }
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addFile: function addFile() {
      var _this3 = this;

      var fd = new FormData();
      fd.append('type', "Classwork");
      fd.append('file', this.file[this.counter]);
      axios.post('/api/classwork/newAttachment', fd, {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var total = progressEvent.total;
          var totalLength = progressEvent.lengthComputable ? total : null;

          if (totalLength != null) {
            _this3.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
          }
        }
      }).then(function (res) {
        _this3.counter++;
      });
    },
    onFileChange: function onFileChange(element) {
      this.uploadIndex = this.counter; //this.file[this.counter] = element[0];

      this.file.push(element[0]); //this.tmpName[this.counter] = element[0].name;

      if (element[0].size > 1000000) {
        var kbsize = element[0].size * 0.001;
        var mbsize = kbsize * 0.001;
        var finalSize = parseInt(mbsize);
        this.fileSize[this.counter] = finalSize + 'mb';
      } else {
        var sizeFile = element[0].size * 0.001;

        var _finalSize = parseInt(sizeFile);

        this.fileSize[this.counter] = _finalSize + 'kb';
      }

      this.file_name.push({
        name: element[0].name,
        size: this.fileSize[this.counter],
        extesion: this.extension
      });
      this.addFile(); //this.counter++;
      //this.ext = this.getFileExt(file.name);
      //this.file = file;
    }
  },
  beforeMount: function beforeMount() {
    /* this.form.type = 'Objective Type'; */
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\niframe{\n    width: 100% !important;\n    height: 20rem !important;\n}\n.intruction .ql-editor img{\n\n    max-height: 25rem !important;\n}\n.intruction ql-container{\n    max-height: 70rem;\n}\ndiv.ql-tooltip{\n    left: 0px !important;\n    top: 28px !important;\n}\n    \n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newClassworkModal.vue?vue&type=template&id=753c8b50& */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&");
/* harmony import */ var _newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newClassworkModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _newClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.render,
  _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=template&id=753c8b50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ma-0 pa-0" },
    [
      _c("vue-element-loading", {
        attrs: { active: _vm.loading, spinner: "bar-fade-scale" }
      }),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "NewClassworkForm",
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
          _c(
            "v-card-title",
            [
              _c(
                "v-btn",
                {
                  attrs: { large: "", icon: "", disabled: _vm.loading },
                  on: {
                    click: function($event) {
                      return _vm.$emit("CloseDialog")
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
              _vm._v(" "),
              _c("span", { staticClass: "h6" }, [_vm._v("New Classwork")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { "mb-0": "", "pb-0": "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              outlined: "",
                              rules: _vm.FieldRules,
                              items: ["Objective Type", "Subjective Type"],
                              label: "Type"
                            },
                            model: {
                              value: _vm.form.type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "type", $$v)
                              },
                              expression: "form.type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: "1",
                              outlined: "",
                              rules: _vm.FieldRules,
                              label: "Title",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.form.title,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-8 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("editor", {
                            staticClass: "intruction",
                            attrs: {
                              placeholder: "Instruction",
                              theme: "snow",
                              options: _vm.options
                            },
                            model: {
                              value: _vm.form.instruction,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "instruction", $$v)
                              },
                              expression: "form.instruction"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.type == "Objective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.FieldRules,
                                  "append-icon":
                                    "mdi-" +
                                    (_vm.isTimer ? "timer" : "timer-off"),
                                  outlined: "",
                                  min: "0",
                                  hint: "mins",
                                  label: "Time Limit",
                                  type: "number"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.isTimer = !_vm.isTimer
                                  }
                                },
                                model: {
                                  value: _vm.form.duration,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "duration", $$v)
                                  },
                                  expression: "form.duration"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.type == "Subjective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm.form.type == "Subjective Type"
                                ? _c("v-text-field", {
                                    staticClass: "mb-0 pb-0",
                                    attrs: {
                                      rules: _vm.pointsRules,
                                      outlined: "",
                                      min: "1",
                                      label: "Points",
                                      type: "number"
                                    },
                                    model: {
                                      value: _vm.form.points,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "points", $$v)
                                      },
                                      expression: "form.points"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.type == "Subjective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    color: "primary",
                                    text: "",
                                    rounded: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.inputFile.$refs.input.click()
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v(
                                      "\n                                  mdi-attachment\n                              "
                                    )
                                  ]),
                                  _vm._v(
                                    "\n                              Attach file\n                          "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-file-input", {
                                staticClass: "d-none",
                                attrs: {
                                  multiple: "",
                                  accept:
                                    ".xlsx,.xls,image/*,.doc,.docx,.ppt, .pptx,.txt,.pdf,text/plain"
                                },
                                on: { change: _vm.onFileChange }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                {
                                  staticClass: "ma-0 pa-0",
                                  attrs: { dense: "" }
                                },
                                _vm._l(_vm.file_name, function(item, index) {
                                  return _c(
                                    "v-list-item",
                                    { key: index, staticClass: "ma-0 pa-0" },
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
                                                  item.extension == "pdf"
                                                    ? "red"
                                                    : item.extension == "docx"
                                                    ? "blue"
                                                    : item.extension == "link"
                                                    ? "green"
                                                    : item.extension == "jpg" ||
                                                      item.extension ==
                                                        "jpeg" ||
                                                      item.extension == "gif" ||
                                                      item.extension == "svg" ||
                                                      item.extension == "png" ||
                                                      item.extension == "bmp"
                                                    ? "info"
                                                    : ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                              " +
                                                  _vm._s(
                                                    item.extension == "pdf"
                                                      ? "mdi-file-pdf"
                                                      : item.extension == "txt"
                                                      ? "mdi-file-pdf"
                                                      : item.extension == "docx"
                                                      ? "mdi-file-word"
                                                      : item.extension == "link"
                                                      ? "mdi-file-link"
                                                      : item.extension ==
                                                          "jpg" ||
                                                        item.extension ==
                                                          "jpeg" ||
                                                        item.extension ==
                                                          "gif" ||
                                                        item.extension ==
                                                          "svg" ||
                                                        item.extension ==
                                                          "png" ||
                                                        item.extension == "bmp"
                                                      ? "mdi-image"
                                                      : ""
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
                                          _c("v-list-item-title", [
                                            _vm._v(_vm._s(item.name))
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-list-item-subtitle",
                                            [
                                              _vm.uploadIndex == index
                                                ? _c("v-progress-linear", {
                                                    attrs: {
                                                      color: "primary",
                                                      indeterminate: "",
                                                      rounded: "",
                                                      height: "5"
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
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
                                              attrs: { icon: "" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.RemoveFile(index)
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "\n                                        mdi-close\n                                        "
                                                )
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
            "v-card-actions",
            { staticClass: "pl-5 pr-5" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    block: "",
                    disabled:
                      _vm.form.type == "Subjective Type"
                        ? _vm.form.title == null ||
                          _vm.form.title == "" ||
                          _vm.form.type == null || _vm.form.type == "" ||
                          _vm.form.instruction == null ||
                            _vm.form.instruction == "" ||
                          _vm.form.points == null || _vm.form.points == ""
                        : _vm.form.title == null ||
                          _vm.form.title == "" ||
                          _vm.form.type == null || _vm.form.type == "" ||
                          _vm.form.instruction == null ||
                            _vm.form.instruction == "" ||
                          _vm.form.duration == null || _vm.form.duration == "",
                    color: "primary",
                    rounded: "",
                    loading: _vm.loading
                  },
                  on: {
                    click: function($event) {
                      return _vm.validate()
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



/***/ })

}]);