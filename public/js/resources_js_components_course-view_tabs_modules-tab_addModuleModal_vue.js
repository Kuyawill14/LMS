(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_modules-tab_addModuleModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      dialog: false,
      moduleForm: new vform__WEBPACK_IMPORTED_MODULE_0__.default({
        module_name: '',
        description: '',
        course_id: ''
      }),
      class_details: ''
    };
  },
  methods: {
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Module Successfully Created", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    createModule: function createModule() {
      var _this = this;

      this.loading = true;
      this.moduleForm.course_id = this.$route.params.id;
      this.$store.dispatch('createMainModule', this.moduleForm).then(function (res) {
        console.log(res);

        if (res.status == 201) {
          _this.moduleForm.reset();

          _this.toastSuccess();

          _this.dialog = false;
        }

        if (res.status == 500) {}

        _this.loading = false;
      });
    }
  },
  created: function created() {
    this.class_details = localStorage.getItem('class_details');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.button-text-image[data-v-f06ede84] {\n    white-space: inherit;\n}\n.class-banner[data-v-f06ede84] {\n    /* background-image: url(https://gstatic.com/classroom/themes/Honors.jpg); */\n    color: #fff;\n    height: 200px;\n    background-color: #1E1E1C;\n}\n.top-container[data-v-f06ede84] {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n}\n.ttr-wrapper[data-v-f06ede84] {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    padding-top: 59px;\n}\n.transparent[data-v-f06ede84] {\n    background: transparent;\n    border: none;\n}\n.card-top[data-v-f06ede84] {\n    color: #fff !important;\n}\n.files input[data-v-f06ede84] {\n    outline: 2px dashed #92b0b3;\n    outline-offset: -10px;\n    transition: outline-offset .15s ease-in-out, background-color .15s linear;\n    padding: 120px 0px 85px 35%;\n    text-align: center !important;\n    margin: 0;\n    width: 100% !important;\n}\n.files input[data-v-f06ede84]:focus {\n    outline: 2px dashed #92b0b3;\n    outline-offset: -10px;\n    transition: outline-offset .15s ease-in-out, background-color .15s linear;\n    border: 1px solid #92b0b3;\n}\n.files[data-v-f06ede84] {\n    position: relative\n}\n.files[data-v-f06ede84]:after {\n    pointer-events: none;\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 50px;\n    right: 0;\n    height: 56px;\n    content: \"\";\n    background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);\n    display: block;\n    margin: 0 auto;\n    background-size: 100%;\n    background-repeat: no-repeat;\n}\n.color input[data-v-f06ede84] {\n    background-color: #f1f1f1;\n}\n.files[data-v-f06ede84]:before {\n    position: absolute;\n    bottom: 10px;\n    left: 0;\n    pointer-events: none;\n    width: 100%;\n    right: 0;\n    height: 57px;\n    content: \" or drag it here. \";\n    display: block;\n    margin: 0 auto;\n    color: #2ea591;\n    font-weight: 600;\n    text-transform: capitalize;\n    text-align: center;\n}\n.upload input[type='file'][data-v-f06ede84] {\n    text-indent: -999em;\n    outline: none;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true& */ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true&");
/* harmony import */ var _addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addModuleModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f06ede84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addModuleModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_style_index_0_id_f06ede84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
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
                        { attrs: { color: "primary", dark: "" } },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [_vm._v("\n                Create Module\n            ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [_vm._v("Add Module")])
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Module Name*", required: "" },
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  clearable: "",
                                  "clear-icon": "mdi-close-circle",
                                  label: "Description"
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
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    Close\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.createModule()
                        }
                      }
                    },
                    [_vm._v("\n                    Save\n                ")]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=style&index=0&id=f06ede84&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("382796fb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);