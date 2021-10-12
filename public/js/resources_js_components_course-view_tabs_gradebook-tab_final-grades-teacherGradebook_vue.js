"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_gradebook-tab_final-grades-teacherGradebook_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['students', 'grading_criteria', 'floader'],
  data: function data() {
    return {
      loader: this.floader,
      search: '',
      loading: false,
      headers: [{
        text: 'ID',
        value: 'student_id',
        align: 'start'
      }, {
        text: 'Name',
        value: 'lastName',
        align: 'start'
      }],
      studentList: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["allStudentFinalGrades", "get_gradingCriteria"])), {}, {
    grading_criteria_data: function grading_criteria_data() {
      return this.grading_criteria;
    },
    filteredItems: function filteredItems() {
      var _this = this;

      if (this.search) {
        return this.students.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v) || item.middleName.toLowerCase().includes(v) || item.student_id == null ? item.lastName.toLowerCase().includes(v) : item.student_id.toString().includes(v);
          });
        });
      } else {
        return this.students;
      }
    }
  }),
  methods: {
    transmuteFinalGrade: function transmuteFinalGrade(grade) {
      var eq = "5.0";

      if (grade >= 98) {
        eq = "1.0";
      } else if (grade >= 95) {
        eq = "1.25";
      } else if (grade >= 92) {
        eq = "1.5";
      } else if (grade >= 89) {
        eq = "1.75";
      } else if (grade >= 86) {
        eq = "2.0";
      } else if (grade >= 83) {
        eq = "2.25";
      } else if (grade >= 80) {
        eq = "2.5";
      } else if (grade >= 77) {
        eq = " 2.75";
      } else if (grade >= 75) {
        eq = "3.0";
      } else {
        eq = "5.0";
      }

      return eq.toString();
    },
    gradingCategoryHeader: function gradingCategoryHeader() {
      if (this.loader) {}

      this.headers = [];
      this.headers.push({
        text: 'ID',
        value: 'student_id',
        align: 'start'
      }, {
        text: 'Name',
        value: 'lastName',
        align: 'start'
      });

      for (var i = 0; i < this.grading_criteria.length; i++) {
        this.headers.push({
          text: this.grading_criteria[i].name + " (".concat(this.grading_criteria[i].percentage, ")%"),
          value: 'percent' + this.grading_criteria[i].id,
          align: 'center'
        });
      }

      this.headers.push({
        text: 'Total Raw Grade',
        value: 'raw_grade',
        align: 'center'
      }, {
        text: 'Transmuted Grade',
        value: 'transmuted_grade',
        align: 'center'
      }, {
        text: 'Final Grade',
        value: 'final_grade',
        align: 'center'
      });
    },
    sumPercentage: function sumPercentage(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['grade_percentage'];
      }

      return total.toFixed(2);
    },
    sumTransmutedGrade: function sumTransmutedGrade(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['transmuted_grade_percentage'];
      }

      return total.toFixed(2);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loader = true;
    this.$store.dispatch('fetchGradingCriteria', this.$route.params.id).then(function () {
      _this2.gradingCategoryHeader();

      _this2.loader = false;
    });
    this.studentList = this.students;
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3& */ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3&");
/* harmony import */ var _final_grades_teacherGradebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-grades-teacherGradebook.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _final_grades_teacherGradebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__.render,
  _final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_grades_teacherGradebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./final-grades-teacherGradebook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_grades_teacherGradebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_final_grades_teacherGradebook_vue_vue_type_template_id_61cc2ec3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue?vue&type=template&id=61cc2ec3& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        [
          _vm._v("\n        Final Grades\n\n\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { width: "50%" } },
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.filteredItems,
          "items-per-page": 10,
          loading: _vm.loader
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
                    _vm._l(items, function(student) {
                      return _c(
                        "tr",
                        { key: student.id },
                        [
                          _c("td", { staticClass: "text-left" }, [
                            _vm._v(_vm._s(student.student_id) + " ")
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-left" }, [
                            _vm._v(
                              _vm._s(
                                student.lastName + ", " + student.firstName
                              ) + " "
                            )
                          ]),
                          _vm._v(" "),
                          _vm._l(
                            _vm.allStudentFinalGrades(student.id),
                            function(student_final, index) {
                              return _c(
                                "td",
                                { key: index, staticClass: "text-center" },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        (student[
                                          "percent" +
                                            student_final.grade_category_id
                                        ] = student_final.grade_percentage.toFixed(
                                          2
                                        ))
                                      ) +
                                      "\n\n                    "
                                  )
                                ]
                              )
                            }
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  (student["raw_grade"] = _vm.sumPercentage(
                                    _vm.allStudentFinalGrades(student.id)
                                  ))
                                ) +
                                "\n\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  (student[
                                    "transmuted_grade"
                                  ] = _vm.sumTransmutedGrade(
                                    _vm.allStudentFinalGrades(student.id)
                                  ))
                                ) +
                                "\n\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  (student[
                                    "final_grade"
                                  ] = _vm.transmuteFinalGrade(
                                    _vm.sumTransmutedGrade(
                                      _vm.allStudentFinalGrades(student.id)
                                    )
                                  ))
                                ) +
                                "\n\n                    "
                            )
                          ])
                        ],
                        2
                      )
                    }),
                    _vm._v(" "),
                    _vm.students.length == 0
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              attrs: { colspan: "100" }
                            },
                            [
                              _vm._v(
                                "\n                        No data available, please add or invite students.\n                    "
                              )
                            ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);