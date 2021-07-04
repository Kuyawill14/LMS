(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_student-list_studentListComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isloading: true,
      isGetting: true,
      search: "",
      isClassNameLoaded: false,
      classNames: [],
      defaultSelected: {
        class_id: "",
        class_name: "All Class",
        id: ""
      }
    };
  },
  computed: {
    getAllStudents: function getAllStudents() {
      var _this = this;

      if (this.search) {
        return this.students.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v);
          });
        });
      } else {
        return this.students;
      }
    }
  },
  methods: {
    getStudentList: function getStudentList() {
      var _this2 = this;

      axios.get('/api/student/all/' + this.$route.params.id).then(function (res) {
        _this2.students = res.data;
        setTimeout(function () {
          _this2.isGetting = false;
        }, 1000);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    fetchClassnames: function fetchClassnames() {
      var _this3 = this;

      axios.get('/api/class/allnames/' + this.$route.params.id).then(function (res) {
        _this3.classNames = res.data.allClass;
        _this3.isClassNameLoaded = true;
        setTimeout(function () {
          _this3.isClassNameLoaded = false;
        }, 5000);
        _this3.isloading = false;
        _this3.classNames = _this3.classNames || [];

        _this3.classNames.push({
          class_id: _this3.$route.params.id,
          class_name: 'All Class',
          id: _this3.$route.params.id
        });
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.getStudentList();
    setTimeout(function () {
      _this4.isloading = false;

      _this4.fetchClassnames();
    }, 5000);
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/student-list/studentListComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/student-list/studentListComponent.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentListComponent.vue?vue&type=template&id=e8c43516& */ "./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516&");
/* harmony import */ var _studentListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _studentListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/student-list/studentListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListComponent_vue_vue_type_template_id_e8c43516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentListComponent.vue?vue&type=template&id=e8c43516& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/student-list/studentListComponent.vue?vue&type=template&id=e8c43516& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _vm.isGetting
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
                      _c("v-icon", { staticStyle: { "font-size": "14rem" } }, [
                        _vm._v(
                          "\n                    mdi-account-group\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-subtitle-1 text-center",
                          attrs: { cols: "12" }
                        },
                        [_c("h2", [_vm._v(" Getting Student List ")])]
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
          !_vm.isGetting
            ? _c(
                "v-container",
                [
                  _c(
                    "v-row",
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
                                {
                                  staticClass: "mb-0 pb-0",
                                  attrs: { cols: "7", md: "10", lg: "10" }
                                },
                                [_c("h2", [_vm._v("Student List")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "mb-0 pb-0",
                                  attrs: { cols: "5", md: "2", lg: "2" }
                                },
                                [
                                  _c("v-select", {
                                    staticClass: "float-right",
                                    attrs: {
                                      items: _vm.classNames,
                                      loading: _vm.isloading,
                                      disabled: _vm.isloading,
                                      "item-text": "class_name",
                                      "item-value": "class_id",
                                      label: "All Class",
                                      dense: "",
                                      solo: ""
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
                    "v-row",
                    _vm._l(_vm.getAllStudents, function(item, index) {
                      return _c(
                        "v-col",
                        {
                          key: index,
                          staticClass: "pl-0 ml-0 pb-0 mb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-hover", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var hover = ref.hover
                                    return [
                                      _c(
                                        "v-container",
                                        {
                                          class: hover
                                            ? "grey lighten-3 rounded-lg"
                                            : "",
                                          staticStyle: { cursor: "pointer" }
                                        },
                                        [
                                          _c(
                                            "v-container",
                                            {
                                              staticClass:
                                                "pb-0 mb-0 pt-0 mt-0 d-flex flex-sm-row"
                                            },
                                            [
                                              _c(
                                                "v-avatar",
                                                { attrs: { size: "48" } },
                                                [
                                                  _c("v-img", {
                                                    staticClass:
                                                      "img-fluid rounded border",
                                                    attrs: {
                                                      src:
                                                        item.profile_pic ==
                                                          null ||
                                                        item.profile_pic == ""
                                                          ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                                            (item.firstName +
                                                              " " +
                                                              item.lastName)
                                                          : item.profile_pic
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-container",
                                                {
                                                  staticClass:
                                                    "pb-0 mb-0 pt-0 mt-0 d-flex flex-column ml-5",
                                                  attrs: {
                                                    "ma-0": "",
                                                    "pa-0": ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "text-left font-weight-light"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(item.firstName) +
                                                          " " +
                                                          _vm._s(item.lastName)
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("div", [
                                                    _vm._v(_vm._s(item.email))
                                                  ])
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
                              ],
                              null,
                              true
                            )
                          })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);