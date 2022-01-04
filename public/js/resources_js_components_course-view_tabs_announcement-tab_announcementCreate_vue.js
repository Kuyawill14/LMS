"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_announcementCreate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['UserDetails', 'classNames'],
  data: function data() {
    return {
      isLoadingClassNames: true,
      isLoaded: false,
      //classNames:[],
      notifyDetails: {},
      selectedFile: null,
      isSelecting: false,
      isloading: false,
      value: '',
      content: '',
      class_id: this.$route.params.id,
      announcement: {
        content: "",
        file: "",
        class_id: ""
      },
      options: {
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
            /* handlers: {
                image: this.imageHandler
            } */

          }
        }
      },
      pasteText: true,
      editorData: null
    };
  },
  computed: {
    buttonText: function buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText;
    }
  },
  methods: (_methods = {
    val: function val() {
      this.value = "This's new value";
    },
    onChange: function onChange(html, text) {////console.log(html);
    },
    createPost: function createPost() {
      var _this = this;

      if (this.announcement.content != '') {
        this.isloading = true;
        this.announcement.file = "sample";
        this.announcement.course_id = this.$route.params.id == this.class_id ? this.$route.params.id : null;
        this.announcement.class_id = this.$route.params.id != this.class_id ? this.class_id : null;
        ;
        this.announcement.content = this.announcement.content.replaceAll('p>', 'div>');
        this.$store.dispatch('createClassPost', this.announcement).then(function (res) {
          if (res.status == 200) {
            _this.isloading = false;

            _this.newNotification(res.data.announcement_id, _this.announcement.content);

            _this.announcement.content = '';
          } else {
            _this.isloading = false;
          }
        });
        this.$emit("SetShowComment");
      }
    },
    onButtonClick: function onButtonClick() {
      var _this2 = this;

      this.isSelecting = true;
      window.addEventListener('focus', function () {
        _this2.isSelecting = false;
      }, {
        once: true
      });
      this.$refs.uploader.click();
    },
    onFileChanged: function onFileChanged(e) {
      this.selectedFile = e.target.files[0];
    },
    onEditorBlur: function onEditorBlur(editor) {
      this.editorData = editor;
    },
    onEditorFocus: function onEditorFocus(editor) {
      this.editorData = editor;
    },
    onEditorReady: function onEditorReady(editor) {
      this.editorData = editor;
    },
    imageHandler: function imageHandler() {
      var editor = this.editorData;
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.onchange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var file, formData, range;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = input.files[0];
                formData = new FormData();
                formData.append('file', file);
                formData.append('type', 'Announcement'); // Save current cursor state

                range = editor.getSelection(true);
                editor.setSelection(range.index + 1);
                _context2.next = 8;
                return axios.post('/api/classwork/newAttachment', formData).then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
                    var data;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            data = _ref2.data;
                            _context.next = 3;
                            return editor.insertEmbed(range.index, 'image', data.link);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }())["catch"](function (_ref4) {
                  var response = _ref4.response;
                  alert('error');
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, _defineProperty(_methods, "onChange", function onChange(quill, html, text) {////console.log(this.announcement.content);
  }), _defineProperty(_methods, "fetchClassnames", function fetchClassnames() {
    var _this3 = this;

    if (this.UserDetails.role == 'Teacher') {
      axios.get('/api/class/allnames/' + this.$route.params.id + '/' + 0).then(function (res) {
        _this3.classNames = res.data;
        _this3.isLoadingClassNames = false;
        _this3.isLoaded = true;

        _this3.classNames.push({
          class_id: _this3.$route.params.id,
          class_name: 'All Class',
          id: _this3.$route.params.id
        });
      });
    }
  }), _defineProperty(_methods, "newNotification", function newNotification(announcement_id, content) {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this4.notifyDetails.class_id = _this4.$route.params.id != _this4.class_id ? _this4.class_id : null;
              _this4.notifyDetails.course_id = _this4.$route.params.id == _this4.class_id ? _this4.$route.params.id : null;
              _this4.notifyDetails.course_find_id = _this4.$route.params.id;
              _this4.notifyDetails.announcement_id = announcement_id;
              _this4.notifyDetails.content = content;
              _this4.notifyDetails.type = 'announcement';
              axios.post('/api/notification/new', _this4.notifyDetails);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }), _methods)
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.AnnoumentEditor > .quill-editor {\r\n        position: relative;\r\n        background: #d0cece;\n}\n.AnnoumentEditor >  .ql-container.ql-snow {\r\n        border: none !important;\n}\n.AnnoumentEditor >  .ql-toolbar.ql-snow {\r\n        background: #f2f2f2;\r\n        border: none;\n}\n.AnnoumentEditor > \r\n    .ql-bold,.ql-italic,.ql-underline, .ql-strike\r\n    ,.ql-picker-label,.ql-align,.ql-list,.ql-link\r\n    ,.ql-image,.ql-video\r\n    {\r\n        outline: none !important;\r\n        border:none !important;\n}\n.AnnoumentEditor >  .ql-tooltip, .ql-editing{\r\n        z-index: 1;\n}\n.AnnoumentEditor iframe{\r\n            width: 60% !important;\r\n            height: 20rem !important;\n}\n.AnnoumentEditor .ql-editor img{\r\n            max-height: 25rem !important;\n}\r\n        \r\n    \r\n        \r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcementCreate.vue?vue&type=template&id=27b00cd5& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5&");
/* harmony import */ var _announcementCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcementCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js&");
/* harmony import */ var _announcementCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcementCreate.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _announcementCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__.render,
  _announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementCreate_vue_vue_type_template_id_27b00cd5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementCreate.vue?vue&type=template&id=27b00cd5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementCreate.vue?vue&type=template&id=27b00cd5& ***!
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
        attrs: { active: _vm.isloading, spinner: "bar-fade-scale" }
      }),
      _vm._v(" "),
      _c("editor", {
        staticClass: "AnnoumentEditor",
        attrs: {
          placeholder: "Announce something in your class!",
          theme: "snow",
          options: _vm.options
        },
        on: {
          blur: function($event) {
            return _vm.onEditorBlur($event)
          },
          focus: function($event) {
            return _vm.onEditorFocus($event)
          },
          ready: function($event) {
            return _vm.onEditorReady($event)
          },
          change: _vm.onChange
        },
        model: {
          value: _vm.announcement.content,
          callback: function($$v) {
            _vm.$set(_vm.announcement, "content", $$v)
          },
          expression: "announcement.content"
        }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pl-3" },
        [
          _c("v-col", { attrs: { cols: "5", md: "8", lg: "8" } }),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "text-right",
              attrs: { cols: "7", md: "4", lg: "4" }
            },
            [
              _c(
                "v-container",
                {
                  class:
                    _vm.UserDetails.role != "Student"
                      ? "ma-0 pa-0 d-flex flex-row"
                      : "ma-0 pa-0",
                  attrs: { "ma-0": "", "pa-0": "" }
                },
                [
                  _vm.UserDetails.role != "Student"
                    ? _c("v-select", {
                        staticClass: "mr-2 ma-0 pa-0",
                        attrs: {
                          "hide-details": "",
                          items: _vm.classNames,
                          "item-text": "class_name",
                          "item-value": "class_id",
                          label: "All Class",
                          dense: "",
                          solo: ""
                        },
                        model: {
                          value: _vm.class_id,
                          callback: function($$v) {
                            _vm.class_id = $$v
                          },
                          expression: "class_id"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-0 pb-0 mt-1",
                      attrs: {
                        depressed: "",
                        disabled:
                          _vm.announcement.content == "" ||
                          _vm.announcement.content == null,
                        type: "submit",
                        name: "create_post",
                        color: "primary"
                      },
                      on: { click: _vm.createPost }
                    },
                    [_vm._v("Post")]
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