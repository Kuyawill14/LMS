"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_campus-director_monitor-departments_teacherProfile_coursesProgress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//
//
//
//
//
//const modulesPublished = () => import('./courses/modules_publish')
var coursesummarypreview = function coursesummarypreview() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_campus-director_monitor-departments_teacherProfile_courses_course_sum-5156a9").then(__webpack_require__.bind(__webpack_require__, /*! ./courses/course_summary_preview */ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/courses/course_summary_preview.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['courses'],
  data: function data() {
    return {
      allCoursesData: this.courses,
      dialog: false,
      moduledialog: false,
      Coursedialog: false,
      isloading: true,
      coursesLength: null,
      details: [],
      course_id: null,
      allCourse: [],
      course_details: null,
      headers: [{
        text: 'Course Code',
        value: 'course_code',
        align: 'start'
      }, {
        text: 'Course Name',
        value: 'course_title',
        align: 'start'
      }, {
        text: 'Total Classes',
        value: 'total_classes',
        align: 'center'
      }, {
        text: 'Total Student',
        value: 'total_student',
        align: 'center'
      }, {
        text: ' Total Modules',
        value: 'total_modules',
        align: 'center'
      }, {
        text: 'Total Classwork',
        value: 'total_classwork',
        align: 'center'
      }, {
        text: 'Actions',
        sortable: false
      }]
    };
  },
  components: {
    //modulesPublished,
    coursesummarypreview: coursesummarypreview
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=template&id=3abcc1c6& */ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6&");
/* harmony import */ var _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_3abcc1c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=template&id=3abcc1c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/teacherProfile/coursesProgress.vue?vue&type=template&id=3abcc1c6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        [
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _vm.dialog
                ? _c("coursesummarypreview", {
                    attrs: { course_details: _vm.course_details },
                    on: {
                      closeDialog: function($event) {
                        _vm.dialog = false
                      }
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
       false
        ? 0
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.allCoursesData,
                  loading: _vm.isLoading,
                  "items-per-page": 10
                },
                scopedSlots: _vm._u([
                  {
                    key: "body",
                    fn: function(ref) {
                      var items = ref.items
                      return [
                        _c(
                          "tbody",
                          [
                            _vm._l(items, function(item) {
                              return _c("tr", { key: item.id }, [
                                _c("td", [
                                  _vm._v(" " + _vm._s(item.course_code) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(" " + _vm._s(item.course_name) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(" " + _vm._s(item.total_classes) + " ")
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    " " + _vm._s(item.total_students) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    " " + _vm._s(item.sub_modules_count) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    " " + _vm._s(item.total_classworks) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          icon: "",
                                          color: "success",
                                          link: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.dialog = true
                                            _vm.course_details = item
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", [
                                          _vm._v(
                                            "\n                                        mdi-eye\n                                    "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            }),
                            _vm._v(" "),
                            items.length == 0
                              ? _c("tr", [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "text-center",
                                      attrs: { colspan: "42" }
                                    },
                                    [_vm._v(" No data available")]
                                  )
                                ])
                              : _vm._e()
                          ],
                          2
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);