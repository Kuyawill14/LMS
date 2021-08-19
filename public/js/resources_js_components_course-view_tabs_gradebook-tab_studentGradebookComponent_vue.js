(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_gradebook-tab_studentGradebookComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueElementLoading: (vue_element_loading__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      shown: false,
      selectedClass: null,
      Deldialog: false,
      dialog: false,
      temp_id: '',
      loading: false,
      type: '',
      search: "",
      grading_criteria_form: {},
      grading_criteria: {},
      course_id: '',
      delId: '',
      classworkList: [],
      headers: [],
      classList: [],
      students: [],
      classworkTotalPoints: 0,
      finalGrades: [],
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: 'My grades',
        disabled: true,
        link: 'studentGradebook'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["get_gradingCriteria", "allClass", "StudentClassworkGrades"])),
  methods: {
    transmutedGrade: function transmutedGrade(total_score, percentage) {
      if (this.classworkTotalPoints) {
        return ((total_score / this.classworkTotalPoints * 100 / 2 + 50) * percentage / 100).toFixed(2);
      } else {
        return 0;
      }
    },
    totalPercentHeader: function totalPercentHeader() {
      this.headers.push({
        text: 'Total Points' + ' (' + this.classworkTotalPoints + 'pts)',
        align: 'center',
        value: 'total'
      }, {
        text: 'Total Percentage',
        align: 'center',
        value: 'Percentage'
      });
    },
    totalFinalPercentage: function totalFinalPercentage(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['transmuted_grade_percentage'];
      }

      return total.toFixed(2);
    },
    totalPoints: function totalPoints(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }

      return total;
    },
    totalPercentage: function totalPercentage(arr, total_percent) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }
      /*  console.log('tota;', total);
       console.log('classworktoal', this.classworkTotalPoints) */


      var result = total / this.classworkTotalPoints * total_percent;
      return isNaN(result) == true ? 0 : result.toFixed(2);
    },
    getStudentList: function getStudentList() {
      var _this = this;

      axios.get('/api/student/all_by_class/' + this.selectedClass).then(function (res) {
        _this.students = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAllGradeCriteria: function getAllGradeCriteria() {
      this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
    },
    getClassworkList: function getClassworkList() {
      var _this2 = this;

      var total = 0;
      this.getStudentList();
      this.headers = [];
      axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
        _this2.classworkList = res.data;
        console.log(res.data);

        for (var i = 0; i < _this2.classworkList.length; i++) {
          // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
          if (_this2.classworkList[i]['grading_criteria_id'] == _this2.get_gradingCriteria[0].id) {
            _this2.headers.push({
              text: _this2.classworkList[i]['title'] + ' (' + _this2.classworkList[i]['points'] + 'pts)',
              align: 'center',
              value: _this2.classworkList[i]['title']
            });

            total += _this2.classworkList[i]['points'];
          }
        } //    console.log(grading_criteria_id)


        _this2.classworkTotalPoints = total;

        _this2.totalPercentHeader();
      });
      this.$store.dispatch('fetchStudentClassworkGrades', this.selectedClass);
    },
    _getClassworkListbyTab: function _getClassworkListbyTab(grading_criteria_id) {
      var _this3 = this;

      var total = 0;
      this.headers = [];
      axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
        _this3.classworkList = res.data;
        console.log(res.data);

        for (var i = 0; i < _this3.classworkList.length; i++) {
          // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
          if (_this3.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
            _this3.headers.push({
              text: _this3.classworkList[i]['title'] + ' (' + _this3.classworkList[i]['points'] + 'pts)',
              align: 'center',
              value: _this3.classworkList[i]['title']
            });

            total += _this3.classworkList[i]['points'];
          }
        }

        _this3.classworkTotalPoints = total;

        _this3.totalPercentHeader();
      });
    },
    getStudentClassworksGrades: function getStudentClassworksGrades(grading_criteria_id) {
      var _this4 = this;

      axios.get('/api/grade-book/classworkGrades/' + this.selectedClass).then(function (res) {
        _this4.classworkList = res.data;
        /* console.log(res.data); */

        for (var i = 0; i < _this4.classworkList.length; i++) {
          if (_this4.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {}
        }
      });
    },
    _totalPercent: function _totalPercent(percentage_data) {
      var total = 0;
      percentage_data.forEach(function (val) {
        total += parseFloat(val.percentage);
        /* console.log(total); */
      });
      return total;
    },
    getClassList: function getClassList() {
      var _this5 = this;

      this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(function () {
        _this5.classList = _this5.allClass;
        _this5.selectedClass = _this5.classList[0].class_id;

        _this5.getClassworkList();

        _this5.getStudentList();

        _this5.getfinalGrades();

        console.log('class Liost: ', _this5.classList);
      });
    },
    getfinalGrades: function getfinalGrades() {
      var _this6 = this;

      axios.get('/api/grade-book/student-finalgrade/' + this.selectedClass + '/' + this.$route.params.id).then(function (res) {
        _this6.finalGrades = res.data;
      });
    }
  },
  mounted: function mounted() {
    this.loading = true;
    this.getAllGradeCriteria();
    this.getClassList();
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-input__slot {\n    margin-bottom: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentGradebookComponent.vue?vue&type=template&id=3a523b23& */ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23&");
/* harmony import */ var _studentGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentGradebookComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentGradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _studentGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentGradebookComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_template_id_3a523b23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentGradebookComponent.vue?vue&type=template&id=3a523b23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentGradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentGradebookComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=template&id=3a523b23& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-breadcrumbs", {
        staticClass: "ma-0 pa-0 mt-3",
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-breadcrumbs-item",
                  {
                    attrs: { to: { name: item.link }, disabled: item.disabled }
                  },
                  [
                    _vm._v(
                      "\n        " + _vm._s(item.text.toUpperCase()) + "\n    "
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-2" },
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [_vm._v("\n                Student Grades\n            ")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-tabs",
            { attrs: { color: "orange accent-4", right: "" } },
            [
              _c("v-tab", { attrs: { href: "#final_grades" } }, [
                _vm._v("\n                Final Grades\n            ")
              ]),
              _vm._v(" "),
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab",
                  {
                    key: index,
                    on: {
                      click: function($event) {
                        return _vm._getClassworkListbyTab(gradingCriteria.id)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(gradingCriteria.name) +
                        "\n            "
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { attrs: { id: "final_grades" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    Final Grades\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
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
                  ),
                  _vm._v(" "),
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c(
                                "tr",
                                [
                                  _vm._l(_vm.get_gradingCriteria, function(
                                    gradingCriteria,
                                    index
                                  ) {
                                    return _c(
                                      "th",
                                      {
                                        key: index,
                                        staticClass: "text-center"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(gradingCriteria.name) +
                                            " (" +
                                            _vm._s(gradingCriteria.percentage) +
                                            "%)"
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("th", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                                    Final Grades"
                                    )
                                  ])
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("tbody", [
                              _c(
                                "tr",
                                [
                                  _vm._l(_vm.finalGrades, function(
                                    final,
                                    index
                                  ) {
                                    return _c(
                                      "td",
                                      {
                                        key: index,
                                        staticClass: "text-center"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              final.transmuted_grade_percentage.toFixed(
                                                2
                                              )
                                            ) +
                                            "% "
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.totalFinalPercentage(
                                            _vm.finalGrades
                                          )
                                        ) +
                                        "% "
                                    )
                                  ])
                                ],
                                2
                              )
                            ])
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab-item",
                  { key: index },
                  [
                    _c(
                      "v-card-title",
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(gradingCriteria.name) +
                            " - " +
                            _vm._s(gradingCriteria.percentage) +
                            "%\n                    "
                        ),
                        _c("v-spacer"),
                        _vm._v(" "),
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
                    ),
                    _vm._v(" "),
                    _c("v-simple-table", {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c(
                                    "tr",
                                    _vm._l(_vm.headers, function(
                                      header,
                                      index
                                    ) {
                                      return _c(
                                        "th",
                                        {
                                          key: index,
                                          staticClass: "text-center"
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(header.text)
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]),
                                _vm._v(" "),
                                _c("tbody", [
                                  _c(
                                    "tr",
                                    [
                                      _vm._l(
                                        _vm.StudentClassworkGrades(
                                          gradingCriteria.id
                                        ),
                                        function(classworkGrades, index) {
                                          return _c(
                                            "td",
                                            {
                                              key: index,
                                              staticClass: "text-center"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    classworkGrades.points
                                                  ) +
                                                  "\n                                    "
                                              ),
                                              classworkGrades.points == null
                                                ? _c(
                                                    "v-tooltip",
                                                    {
                                                      attrs: { top: "" },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "activator",
                                                            fn: function(ref) {
                                                              var on = ref.on
                                                              var attrs =
                                                                ref.attrs
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  _vm._g(
                                                                    _vm._b(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
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
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "red"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                    mdi-close\n                                                "
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
                                                      ),
                                                      model: {
                                                        value: _vm.shown,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.shown = $$v
                                                        },
                                                        expression: "shown"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v("No Submission")
                                                      ])
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.totalPoints(
                                                _vm.StudentClassworkGrades(
                                                  gradingCriteria.id
                                                )
                                              )
                                            ) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.transmutedGrade(
                                                _vm.totalPoints(
                                                  _vm.StudentClassworkGrades(
                                                    gradingCriteria.id
                                                  )
                                                ),
                                                gradingCriteria.percentage
                                              )
                                            ) +
                                            "%\n                                "
                                        )
                                      ])
                                    ],
                                    2
                                  )
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              })
            ],
            2
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentGradebookComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/studentGradebookComponent.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7aea376e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);