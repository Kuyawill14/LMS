(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_course-setup_courseDetailsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      el: 2,
      isUpdating: false,
      courseDetails: [],
      school_year: [],
      semester: [],
      departmentsList: []
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getcourseInfo"]),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchScourse'])), {}, {
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this.school_year = res.data.school_year;
        _this.semester = res.data.semester;
      });
    },
    updateCourseDetails: function updateCourseDetails() {
      ////console.log(this.getcourseInfo.semester_id);
      if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this.course_code == '' || this.getcourseInfo.semester_id === undefined || this.getcourseInfo.school_year_id === undefined) {
        this.toastError('Please complete all the field to proceed to the next step');
      } else {
        this.isUpdating = true;
        this.$store.dispatch('updateCourse', this.getcourseInfo);
        this.isUpdating = false;
        this.$emit('changeStep', this.el);
      }
    },
    fetchDeparmentList: function fetchDeparmentList() {
      var _this2 = this;

      axios.get('/api/admin/department/all').then(function (res) {
        _this2.departmentsList = res.data;
      });
    }
  }),
  mounted: function mounted() {
    this.fetchAllSchoolyear_semester();
    this.fetchDeparmentList();
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courseDetailsComponent.vue?vue&type=template&id=522391e7& */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&");
/* harmony import */ var _courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/course-setup/courseDetailsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=template&id=522391e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-col",
        { staticClass: "pa-0", attrs: { cols: "12" } },
        [
          _c("v-text-field", {
            attrs: { outlined: "", color: "primary", label: "Course Code" },
            model: {
              value: _vm.getcourseInfo.course_code,
              callback: function($$v) {
                _vm.$set(_vm.getcourseInfo, "course_code", $$v)
              },
              expression: "getcourseInfo.course_code"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "pa-0 ", attrs: { cols: "12" } },
        [
          _c("v-text-field", {
            attrs: { outlined: "", color: "primary", label: "Course Name" },
            model: {
              value: _vm.getcourseInfo.course_name,
              callback: function($$v) {
                _vm.$set(_vm.getcourseInfo, "course_name", $$v)
              },
              expression: "getcourseInfo.course_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "pa-0 ", attrs: { cols: "12" } },
        [
          _c("small", { staticClass: "text-caption" }, [
            _vm._v("Generate google meet here: "),
            _c(
              "a",
              { attrs: { href: "https://meet.google.com/", target: "_blank" } },
              [_vm._v("meet.google.com ")]
            )
          ]),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              outlined: "",
              color: "primary",
              label: "Video Conference Link"
            },
            model: {
              value: _vm.getcourseInfo.v_classroom_link,
              callback: function($$v) {
                _vm.$set(_vm.getcourseInfo, "v_classroom_link", $$v)
              },
              expression: "getcourseInfo.v_classroom_link"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "pa-0 ", attrs: { cols: "12" } },
        [
          _c("v-select", {
            staticClass: "mr-2",
            attrs: {
              items: _vm.school_year,
              "item-text": "schoolyear",
              "item-value": "id",
              label: "School Year",
              outlined: ""
            },
            model: {
              value: _vm.getcourseInfo.school_year_id,
              callback: function($$v) {
                _vm.$set(_vm.getcourseInfo, "school_year_id", $$v)
              },
              expression: "getcourseInfo.school_year_id"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "pa-0 ", attrs: { cols: "12" } },
        [
          _c("v-select", {
            staticClass: "mr-2",
            attrs: {
              items: _vm.semester,
              "item-text": "semester",
              "item-value": "id",
              label: "Semester",
              outlined: ""
            },
            model: {
              value: _vm.getcourseInfo.semester_id,
              callback: function($$v) {
                _vm.$set(_vm.getcourseInfo, "semester_id", $$v)
              },
              expression: "getcourseInfo.semester_id"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { staticClass: "pa-0 ma-0", attrs: { cols: "12" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "pl-3 py-3",
                  staticStyle: { "font-size": "1rem", color: "grey" }
                },
                [_vm._v("Course Description\n            ")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("editor", {
                attrs: { theme: "snow" },
                model: {
                  value: _vm.getcourseInfo.course_description,
                  callback: function($$v) {
                    _vm.$set(_vm.getcourseInfo, "course_description", $$v)
                  },
                  expression: "getcourseInfo.course_description"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "float-right",
                  attrs: { color: "primary", disabled: _vm.isUpdating },
                  on: {
                    click: function($event) {
                      return _vm.updateCourseDetails()
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.isUpdating ? "Saving.." : "Next") +
                      "\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);