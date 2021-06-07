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
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['openModal'],
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

          _this.loading = false;

          _this.$emit('createdModal');

          _this.openModal = false;

          _this.toastSuccess();
        }
      });
    }
  },
  created: function created() {
    this.class_details = localStorage.getItem('class_details');
  }
});

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
/* harmony import */ var _addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModuleModal.vue?vue&type=template&id=f06ede84& */ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&");
/* harmony import */ var _addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addModuleModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _addModuleModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__.render,
  _addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
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

/***/ "./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addModuleModal_vue_vue_type_template_id_f06ede84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addModuleModal.vue?vue&type=template&id=f06ede84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/modules-tab/addModuleModal.vue?vue&type=template&id=f06ede84& ***!
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
                    {
                      attrs: {
                        bottom: "",
                        color: "primary",
                        dark: "",
                        fab: "",
                        fixed: "",
                        right: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.openModal = !_vm.openModal
                        }
                      }
                    },
                    "v-btn",
                    attrs,
                    false
                  ),
                  on
                ),
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.openModal,
        callback: function($$v) {
          _vm.openModal = $$v
        },
        expression: "openModal"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-form",
            { ref: "registerForm" },
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
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        disabled: _vm.loading
                      },
                      on: {
                        click: function($event) {
                          _vm.openModal = false
                        }
                      }
                    },
                    [_vm._v("\n                    Close\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        disabled: _vm.loading
                      },
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



/***/ })

}]);