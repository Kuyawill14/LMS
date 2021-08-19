(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_archivesList_ArchiveComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var archiveCourses = function archiveCourses() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_archivesList_ArchiveType_courses-archive_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ArchiveType/courses-archive */ "./resources/js/components/archivesList/ArchiveType/courses-archive.vue"));
};

var archiveClasswork = function archiveClasswork() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_archivesList_ArchiveType_classwork-archive_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ArchiveType/classwork-archive */ "./resources/js/components/archivesList/ArchiveType/classwork-archive.vue"));
};

var archiveClasses = function archiveClasses() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_archivesList_ArchiveType_classes-archive_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ArchiveType/classes-archive */ "./resources/js/components/archivesList/ArchiveType/classes-archive.vue"));
};
/*   const changePassword = () => import('./changePassword')
  const coursesProgress = () => import('./coursesProgress')
  const aboutTab = () => import('./aboutTab')
  const myCalendar = () => import('./myCalendar') */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'UserDetails'],
  components: {
    archiveCourses: archiveCourses,
    archiveClasswork: archiveClasswork,
    archiveClasses: archiveClasses
  },
  data: function data() {
    return {
      tab: null,
      imageFile: '',
      Details: null,
      loading: false,
      isloading: true,
      message: null,
      type: null
    };
  },
  methods: {},
  mounted: function mounted() {
    this.isloading = !this.isloading;
  }
});

/***/ }),

/***/ "./resources/js/components/archivesList/ArchiveComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/archivesList/ArchiveComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArchiveComponent.vue?vue&type=template&id=98df3ec0& */ "./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0&");
/* harmony import */ var _ArchiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArchiveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ArchiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/archivesList/ArchiveComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArchiveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchiveComponent_vue_vue_type_template_id_98df3ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArchiveComponent.vue?vue&type=template&id=98df3ec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/ArchiveComponent.vue?vue&type=template&id=98df3ec0& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "" } },
    [
      _vm.isloading
        ? _c(
            "v-container",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "10rem" } }, [
                    _vm._v("\n                mdi-account\n            ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "text-subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [_c("h3", [_vm._v(" Loading Profile ")])]
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
      !_vm.isloading ? _c("h2", [_vm._v("Archives")]) : _vm._e(),
      _vm._v(" "),
      !_vm.isloading
        ? _c(
            "v-row",
            { staticClass: "mt-2" },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "pl-3", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-tabs",
                            {
                              staticClass: "mt-2",
                              attrs: {
                                centered:
                                  _vm.$vuetify.breakpoint.xs ||
                                  _vm.$vuetify.breakpoint.sm,
                                "icons-and-text":
                                  _vm.$vuetify.breakpoint.xs ||
                                  _vm.$vuetify.breakpoint.sm
                              },
                              model: {
                                value: _vm.tab,
                                callback: function($$v) {
                                  _vm.tab = $$v
                                },
                                expression: "tab"
                              }
                            },
                            [
                              _vm.role == "Teacher"
                                ? _c(
                                    "v-tab",
                                    { staticClass: "d-flex justify-start" },
                                    [
                                      _vm._v(
                                        "\n                           Courses\n                            "
                                      ),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            right:
                                              !_vm.$vuetify.breakpoint.xs ||
                                              !_vm.$vuetify.breakpoint.sm
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                mdi-contacts\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.role == "Teacher" || _vm.role == "Student"
                                ? _c(
                                    "v-tab",
                                    { staticClass: "d-flex justify-start" },
                                    [
                                      _vm._v(
                                        "\n                            Classes\n                            "
                                      ),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            right:
                                              !_vm.$vuetify.breakpoint.xs ||
                                              !_vm.$vuetify.breakpoint.sm
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-google-classroom\n                            "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.role == "Teacher" || _vm.role == "Student"
                                ? _c(
                                    "v-tab",
                                    { staticClass: "d-flex justify-start" },
                                    [
                                      _vm._v(
                                        "\n                            Classwork\n                            "
                                      ),
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: {
                                            right:
                                              !_vm.$vuetify.breakpoint.xs ||
                                              !_vm.$vuetify.breakpoint.sm
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                            mdi-book-open-variant\n                            "
                                          )
                                        ]
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-tabs-items",
                            { attrs: { value: _vm.tab } },
                            [
                              _vm.role == "Teacher"
                                ? _c(
                                    "v-tab-item",
                                    [
                                      _c("archiveCourses", {
                                        attrs: { role: _vm.role }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.role == "Teacher" || _vm.role == "Student"
                                ? _c(
                                    "v-tab-item",
                                    [
                                      _c("archiveClasses", {
                                        attrs: { role: _vm.role }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.role == "Teacher" || _vm.role == "Student"
                                ? _c(
                                    "v-tab-item",
                                    [
                                      _c("archiveClasswork", {
                                        attrs: { UserDetails: _vm.UserDetails }
                                      })
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);