"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_monitor-teachers_teacherProfile_coursesProgress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//const modulesPublished = () => import('./courses/modules_publish')
var coursesummarypreview = function coursesummarypreview() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_admin_monitor-teachers_teacherProfile_courses_course_summary_preview_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./courses/course_summary_preview */ "./resources/js/components/admin/monitor-teachers/teacherProfile/courses/course_summary_preview.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['UserDetails'],
  data: function data() {
    return {
      school_year: [],
      semester: [],
      school_year_id: 0,
      semester_id: 0,
      allCoursesData: [],
      dialog: false,
      moduledialog: false,
      Coursedialog: false,
      isloading: true,
      coursesLength: null,
      details: [],
      course_id: null,
      allCourse: [],
      course_details: null,
      items: ['2020-2021', '2021-2022', '2022-2023', '2023-2024']
    };
  },
  components: {
    //modulesPublished,
    coursesummarypreview: coursesummarypreview
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['allClass']),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchCourseList'])), {}, {
    // async fetchCourses() {
    //     axios.get('/api/admin/teachers/profile/ClassesList/' + this.UserDetails.user_id)
    //         .then(res => {
    //             this.allCourse = res.data;
    //             this.isloading = false;
    //         })
    // },
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this.school_year = res.data.school_year;
        _this.semester = res.data.semester;
      });
    },
    semesterFilter: function semesterFilter() {
      var data = [];

      for (var key in this.allCourse) {
        if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id == this.semester_id) {
          data.push(this.allCourse[key]);
        }
      } //console.log(data);


      this.allCoursesData = data;
    },
    schoolYearFilter: function schoolYearFilter() {
      var data = []; //console.log(this.semester_id.length);

      for (var key in this.allCourse) {
        if (this.semester_id != '') {
          if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id == this.semester_id) {
            data.push(this.allCourse[key]);
          }
        } else {
          if (this.allCourse[key].school_year_id == this.school_year_id) {
            data.push(this.allCourse[key]);
          }
        }
      }

      console.log(data);
      this.allCoursesData = data;
    },
    fetchCourses: function fetchCourses() {
      var _this2 = this;

      this.isloading = true;
      this.school_year_id = 0;
      this.semester_id = 0;
      axios.get('/api/admin/teachers/profile/ClassesList/' + this.UserDetails.user_id).then(function (res) {
        _this2.allCourse = res.data;
        _this2.allCoursesData = res.data;
        _this2.coursesLength = _this2.allCourse.length;
        _this2.isloading = false;
      });
    }
  }),
  mounted: function mounted() {
    this.fetchCourses();
    this.fetchAllSchoolyear_semester();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=template&id=64d376ed& */ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&");
/* harmony import */ var _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.render,
  _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=template&id=64d376ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mb-0 pb-0", attrs: { cols: "12", lg: "5" } },
            [_c("h2", [_vm._v("Courses")])]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-right mt-2", attrs: { lg: "1" } },
            [
              _vm.school_year_id != 0 || _vm.semester_id != 0
                ? _c(
                    "v-btn",
                    { attrs: { icon: "" }, on: { click: _vm.fetchCourses } },
                    [
                      _c("v-icon", [
                        _vm._v(
                          "\n                    mdi-close\n                "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-right", attrs: { lg: "3" } },
            [
              _c("v-select", {
                staticClass: "mr-2 my-1",
                attrs: {
                  dense: "",
                  items: _vm.school_year,
                  "item-text": "schoolyear",
                  "item-value": "id",
                  label: "School Year",
                  outlined: "",
                  small: ""
                },
                on: {
                  change: function($event) {
                    return _vm.schoolYearFilter()
                  }
                },
                model: {
                  value: _vm.school_year_id,
                  callback: function($$v) {
                    _vm.school_year_id = $$v
                  },
                  expression: "school_year_id"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "text-right", attrs: { lg: "3" } },
            [
              _c("v-select", {
                staticClass: "mr-2 my-1",
                attrs: {
                  dense: "",
                  items: _vm.semester,
                  "item-text": "semester",
                  "item-value": "id",
                  disabled: _vm.school_year_id == 0,
                  label: "Semester",
                  outlined: "",
                  small: ""
                },
                on: {
                  change: function($event) {
                    return _vm.semesterFilter()
                  }
                },
                model: {
                  value: _vm.semester_id,
                  callback: function($$v) {
                    _vm.semester_id = $$v
                  },
                  expression: "semester_id"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isloading
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _vm.isloading
                ? _c(
                    "v-container",
                    { staticClass: "fill-height" },
                    [
                      _c(
                        "v-row",
                        {
                          attrs: {
                            "align-content": "center",
                            justify: "center"
                          }
                        },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "text-subtitle-1 text-center",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm._v(
                                "\n                    Loading\n                "
                              )
                            ]
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
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          !_vm.isloading
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.allCoursesData, function(item) {
                      return _c(
                        "v-col",
                        {
                          key: item.course_id,
                          attrs: { cols: "6", md: "3", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto",
                              staticStyle: { cursor: "pointer" },
                              attrs: {
                                link: "",
                                elevation: "2",
                                "max-width": "344",
                                outlined: ""
                              },
                              on: {
                                click: function($event) {
                                  ;(_vm.dialog = true),
                                    (_vm.course_details = item)
                                }
                              }
                            },
                            [
                              _c(
                                "v-toolbar",
                                {
                                  class:
                                    !_vm.$vuetify.breakpoint.xs &&
                                    !_vm.$vuetify.breakpoint.sm
                                      ? "d-flex justify-center"
                                      : "",
                                  attrs: {
                                    dense: "",
                                    dark: "",
                                    color: "primary"
                                  }
                                },
                                [
                                  _c(
                                    "v-toolbar-title",
                                    [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { top: "" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "div",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            staticClass:
                                                              "text-center "
                                                          },
                                                          "div",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                                            " +
                                                            _vm._s(
                                                              item.course_code +
                                                                " - " +
                                                                item.course_name
                                                            ) +
                                                            "\n                                        "
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
                                                item.course_code +
                                                  " - " +
                                                  item.course_name
                                              )
                                            )
                                          ])
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
                                "v-list-item",
                                [
                                  _c("v-list-item-content", [
                                    _c(
                                      "div",
                                      { staticClass: "pa-2" },
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c("v-col", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        item.total_students
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-center text-subtitle-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                Total Students\n                                            "
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-col", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        item.total_classes
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-center text-subtitle-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                Total Classes\n                                            "
                                                  )
                                                ]
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-center pl-4 pr-4" },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = true
                                          _vm.course_id = _vm.course_details = item
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-center " },
                                        [
                                          _vm._v(
                                            "\n                                    Modules Published: " +
                                              _vm._s(item.sub_modules_count) +
                                              "\n                                "
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