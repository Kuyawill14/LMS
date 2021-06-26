(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      file: '',
      fileSize: null,
      dragging: false,
      link: "test12"
    };
  },
  computed: {
    extension: function extension() {
      return this.file ? this.file.name.split('.').pop() : '';
    },
    Fileextension: function Fileextension() {
      var attach = this.classworkDetails.attachment;
      return attach.split('.').pop();
    }
  },
  methods: {
    UploadFile: function UploadFile() {
      this.$refs.UploadAttachFile.click();
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).format('dddd, h:mm a');
      }
    },
    start: function start() {
      if (this.totalQuestion != 0) {
        localStorage.removeItem('time_remaining');
        this.$router.push({
          name: 'quizstart',
          params: {
            id: this.$route.params.id
          },
          query: {
            clwk: this.classworkDetails.id
          }
        });
      }
    },
    DownLoadFile: function DownLoadFile(file) {
      window.location = "/storage/" + file;
    },
    onChange: function onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile: function createFile(file) {
      this.file = file;
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

      this.dragging = false;
    },
    removeFile: function removeFile() {
      this.file = '';
    },
    test: function test() {
      var data = '<iframe class="ql-video" frameborder="0" allowfullscreen="true" src="' + this.link + '"></iframe><div><br></div>';
      console.log(data);
    }
  },
  mounted: function mounted() {
    this.test();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropZone[data-v-5b2cbc49] {\n  width: 100%;\n  height: 7rem;\n  position: relative;\n  border: 2px dashed #eee;\n  border-radius: .3rem;\n}\n\n/* .dropZone:hover {\n  border: 1px dashed #2196F3;\n} */\n\n/* .dropZone:hover .dropZone-title {\n  color: #2196F3;\n} */\n.dropZone-info[data-v-5b2cbc49] {\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.dropZone-title[data-v-5b2cbc49] {\n  color: #787878;\n}\n.dropZone input[data-v-5b2cbc49] {\n  position: absolute;\n  cursor: pointer;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.dropZone-upload-limit-info[data-v-5b2cbc49] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.dropZone-over[data-v-5b2cbc49] {\n  background: #E0E0E0;\n  opacity: 0.8;\n}\n.dropZone-uploaded[data-v-5b2cbc49] {\n  padding-top: 4rem;\n  height: auto;\n  position: relative;\n}\n.dropZone-uploaded-info[data-v-5b2cbc49] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #A8A8A8;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n  text-align: center;\n}\n.filePreview[data-v-5b2cbc49]{\n  width: 100%;\n}\n.removeFile[data-v-5b2cbc49] {\n  width: 200px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_template_id_5b2cbc49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubjectiveComponent_vue_vue_type_style_index_0_id_5b2cbc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=template&id=5b2cbc49&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
          _vm.AttachLink
            ? _c("attachlinkDiaglog", {
                on: {
                  toggleCancelDialog: function($event) {
                    _vm.AttachLink = !_vm.AttachLink
                  },
                  ToggleRefresh: function($event) {
                    _vm.$emit("ToggleRefresh"),
                      (_vm.AttachLink = !_vm.AttachLink)
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4", lg: "4" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", elevation: "0" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-5",
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
                                                    _vm.format_date(
                                                      _vm.classworkDetails
                                                        .due_date
                                                    )
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
                                  staticClass: " pb-10 pl-4 pr-4",
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
                                          _c("v-hover", {
                                            scopedSlots: _vm._u([
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var hover = ref.hover
                                                  return [
                                                    _c(
                                                      "v-alert",
                                                      {
                                                        class: hover
                                                          ? "grey lighten-2"
                                                          : "",
                                                        staticStyle: {
                                                          cursor: "pointer"
                                                        },
                                                        attrs: {
                                                          outlined: "",
                                                          icon:
                                                            _vm.Fileextension ==
                                                            "pdf"
                                                              ? "mdi-file-pdf"
                                                              : _vm.Fileextension ==
                                                                "docx"
                                                              ? "mdi-file-word"
                                                              : "",
                                                          color:
                                                            _vm.Fileextension ==
                                                            "pdf"
                                                              ? "red"
                                                              : _vm.Fileextension ==
                                                                "docx"
                                                              ? "blue"
                                                              : ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                staticClass:
                                                                  " text-left",
                                                                staticStyle: {
                                                                  overflow:
                                                                    "hidden"
                                                                },
                                                                attrs: {
                                                                  cols: "9"
                                                                }
                                                              },
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
                                                                                "div",
                                                                                _vm._g(
                                                                                  _vm._b(
                                                                                    {
                                                                                      class: hover
                                                                                        ? "text-decoration-underline "
                                                                                        : "",
                                                                                      staticStyle: {
                                                                                        "line-height":
                                                                                          "1.2",
                                                                                        height:
                                                                                          "20px",
                                                                                        overflow:
                                                                                          "hidden"
                                                                                      },
                                                                                      on: {
                                                                                        click: function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.DownLoadFile(
                                                                                            _vm
                                                                                              .classworkDetails
                                                                                              .attachment
                                                                                          )
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    "div",
                                                                                    attrs,
                                                                                    false
                                                                                  ),
                                                                                  on
                                                                                ),
                                                                                [
                                                                                  _vm._v(
                                                                                    "\r\n                                                         " +
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .classworkDetails
                                                                                          .attachment_name
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
                                                                  },
                                                                  [
                                                                    _vm._v(" "),
                                                                    _c("span", [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .classworkDetails
                                                                            .attachment_name
                                                                        )
                                                                      )
                                                                    ])
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "3"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "black--text"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm
                                                                          .classworkDetails
                                                                          .attachment_size
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
                                                    )
                                                  ]
                                                }
                                              }
                                            ])
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
            { attrs: { cols: "12", md: "8", lg: "8" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "pl-5 pr-5 pb-5 pt-3",
                  attrs: { outlined: "", elevation: "0" }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "pl-1 pr-1 pb-0 mb-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "font-weight-medium text-sm-body-2 text-md-h6 text-xl-h5"
                            },
                            [_vm._v("SUBMIT ANSWER")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pl-1 pr-1", attrs: { cols: "12" } },
                        [_c("v-divider")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          !_vm.file
                            ? _c(
                                "v-container",
                                { attrs: { "ma-0": "", "pa-0": "" } },
                                [
                                  _c(
                                    "div",
                                    {
                                      class: [
                                        "dropZone",
                                        _vm.dragging ? "dropZone-over" : ""
                                      ],
                                      on: {
                                        dragenter: function($event) {
                                          _vm.dragging = true
                                        },
                                        dragleave: function($event) {
                                          _vm.dragging = false
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-container",
                                        {
                                          staticClass: "dropZone-info",
                                          on: { drag: _vm.onChange }
                                        },
                                        [
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  staticClass: "dropZone-title",
                                                  staticStyle: {
                                                    "font-size": "4rem"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "mdi-cloud-upload-outline"
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "dropZone-title" },
                                            [_vm._v("Your work is empty.")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        ref: "UploadAttachFile",
                                        attrs: { type: "file" },
                                        on: { change: _vm.onChange }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mt-4" }, [
                                    _c(
                                      "div",
                                      [
                                        _c(
                                          "v-menu",
                                          {
                                            attrs: { "offset-y": "" },
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
                                                                color:
                                                                  "primary",
                                                                dark: ""
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
                                                              "\r\n                                          Attach "
                                                          ),
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                right: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-chevron-up"
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
                                              1194639940
                                            )
                                          },
                                          [
                                            _vm._v(" "),
                                            _c(
                                              "v-list",
                                              [
                                                _c(
                                                  "v-list-item",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          block: "",
                                                          text: "",
                                                          rounded: ""
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
                                                            attrs: { left: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-cloud-upload-outline"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(
                                                          " Upload File\r\n                                             "
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-list-item",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          block: "",
                                                          text: "",
                                                          rounded: ""
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
                                                            attrs: { left: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-link-variant"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(
                                                          "Attach Link\r\n                                             "
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
                                  ])
                                ]
                              )
                            : _c(
                                "v-container",
                                {
                                  staticClass: "dropZone-uploaded",
                                  attrs: { "pl-0": "" }
                                },
                                [
                                  _c(
                                    "v-container",
                                    {
                                      staticClass: "dropZone-uploaded-info",
                                      attrs: { "ma-0": "", "pa-0": "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "filePreview " },
                                        [
                                          _c("v-hover", {
                                            scopedSlots: _vm._u([
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var hover = ref.hover
                                                  return [
                                                    _c(
                                                      "v-alert",
                                                      {
                                                        class: hover
                                                          ? "grey lighten-2"
                                                          : "",
                                                        staticStyle: {
                                                          cursor: "pointer"
                                                        },
                                                        attrs: {
                                                          outlined: "",
                                                          icon:
                                                            _vm.extension ==
                                                            "pdf"
                                                              ? "mdi-file-pdf"
                                                              : _vm.extension ==
                                                                "docx"
                                                              ? "mdi-file-word"
                                                              : "",
                                                          color:
                                                            _vm.extension ==
                                                            "pdf"
                                                              ? "red"
                                                              : _vm.extension ==
                                                                "docx"
                                                              ? "blue"
                                                              : ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            attrs: {
                                                              align: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                staticClass:
                                                                  "grow text-left"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    class: hover
                                                                      ? "text-decoration-underline"
                                                                      : ""
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .file
                                                                            .name
                                                                        )
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
                                                                  "shrink d-flex"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "black--text mt-1 mr-2"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.fileSize
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  [
                                                                    _c(
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
                                                                                            click:
                                                                                              _vm.removeFile
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
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                }
                                              }
                                            ])
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "uploadedFile-info" }, [
                            _c("div", [
                              _vm._v("fileName: " + _vm._s(_vm.file.name))
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "fileZise(bytes): " + _vm._s(_vm.file.size)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v("extension：" + _vm._s(_vm.extension))
                            ])
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
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue?vue&type=style&index=0&id=5b2cbc49&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("11713c42", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);