(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_settingsTab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails'],
  data: function data() {
    return {
      Details: {},
      isUpdating: false,
      isUpdatingSnackBar: false,
      isloading: true
    };
  },
  methods: {
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Classwork successfully updated", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    UpdateClasswork: function UpdateClasswork() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isUpdatingSnackBar = true;
                _this.isUpdating = true;
                axios.put('/api/classwork/update/' + _this.Details.id, _this.Details).then(function (res) {
                  _this.toastSuccess();

                  _this.isUpdating = false;
                  /*   setTimeout(() => {
                            this.isGetting = false;
                        this.classLength = this.allClass.length;
                    }, 1000); */
                })["catch"](function (e) {});

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.Details = this.classworkDetails;
    this.isloading = !this.isloading;
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/settingsTab.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/settingsTab.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsTab.vue?vue&type=template&id=a30413cc&scoped=true& */ "./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true&");
/* harmony import */ var _settingsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _settingsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a30413cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/settingsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settingsTab_vue_vue_type_template_id_a30413cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settingsTab.vue?vue&type=template&id=a30413cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/settingsTab.vue?vue&type=template&id=a30413cc&scoped=true& ***!
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
    "v-app",
    [
      _vm.isloading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "500px" } },
            [
              _c(
                "v-row",
                { attrs: { "align-content": "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "text-subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [_vm._v("\r\n            Loading\r\n        ")]
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
                          height: "6"
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
        : _vm._e(),
      _vm._v(" "),
      !_vm.isloading
        ? _c(
            "v-container",
            {
              staticClass: "pa-0 pa-0",
              attrs: { "pa-0": "", "ma-0": "", fluid: "" }
            },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "12", md: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "elevation-5 pa-5",
                          staticStyle: { "border-top": "5px solid #EF6C00" }
                        },
                        [
                          _c(
                            "v-window",
                            [
                              _c(
                                "v-window-item",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "mt-2",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              outlined: "",
                                              items: ["Quiz", "test"],
                                              label: "Type"
                                            },
                                            model: {
                                              value: _vm.Details.type,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.Details,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "Details.type"
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
                                          _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Title",
                                              type: "text",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.Details.title,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.Details,
                                                  "title",
                                                  $$v
                                                )
                                              },
                                              expression: "Details.title"
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
                                              outlined: "",
                                              label: "Instruction",
                                              "auto-grow": ""
                                            },
                                            model: {
                                              value: _vm.Details.instruction,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.Details,
                                                  "instruction",
                                                  $$v
                                                )
                                              },
                                              expression: "Details.instruction"
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
                                          _c("v-text-field", {
                                            staticClass: "mb-0 pb-0 pt-0 mt-0",
                                            attrs: {
                                              "append-icon": "mdi-timer",
                                              outlined: "",
                                              hint: "mins",
                                              label: "Time Limit",
                                              type: "number"
                                            },
                                            model: {
                                              value: _vm.Details.duration,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.Details,
                                                  "duration",
                                                  $$v
                                                )
                                              },
                                              expression: "Details.duration"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12 text-left" } },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "ma-2 white--text",
                                              attrs: {
                                                rounded: "",
                                                loading: _vm.isUpdating,
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.UpdateClasswork()
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                Update\r\n                                                "
                                              ),
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: { right: "", dark: "" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                    mdi-update\r\n                                                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);