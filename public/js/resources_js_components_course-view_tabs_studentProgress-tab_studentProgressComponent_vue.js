(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_studentProgress-tab_studentProgressComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['role'],
  data: function data() {
    return {
      Deldialog: false,
      dialog: false,
      temp_id: '',
      loading: true,
      type: '',
      search: "",
      grading_criteria_form: {},
      grading_criteria: {},
      course_id: '',
      delId: '',
      studentSubModuleProgress: [],
      totalTimeSpent: 0,
      students: [],
      classList: [],
      selectedClass: [],
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: this.role == "Teacher" ? 'Student Progress' : 'My Progress ',
        disabled: true,
        link: 'studentProgress'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getmain_module", "getSub_module", "getAll_sub_module", "getStudentMainModuleProgress", "SubModuleProgress", 'allClass'])),
  methods: {
    convertTime: function convertTime(time) {
      return new Date(parseInt(time) * 1000).toISOString().substr(11, 8);
    },
    checkTimeSpent: function checkTimeSpent(time_spent, required_time) {
      var color = time_spent >= required_time ? "green" : "red";
      return color;
    },
    getTotalCompleted: function getTotalCompleted(arr) {
      var total_complete = 0,
          length = 0,
          result = 0;

      for (var i = 0; i < arr.length; i++) {
        total_complete += arr[i].completed;
        length += arr[i].sub_module_length;
      }

      return total_complete + '/' + length;
    },
    getTotalPercent: function getTotalPercent(arr) {
      var total_complete = 0,
          length = 0,
          result = 0;

      for (var i = 0; i < arr.length; i++) {
        total_complete += arr[i].completed;
        length += arr[i].sub_module_length;
      }

      result = total_complete / length * 100;

      if (isNaN(result)) {
        result = 0;
      } //console.log('NAN bf' , result)


      return parseFloat(result.toFixed(2));
    },
    _mainTotalRequiredTimeSeconds: function _mainTotalRequiredTimeSeconds() {
      var total = 0;
      var allsubmodules = this.getAll_sub_module;

      for (var i = 0; i < allsubmodules.length; i++) {
        total += parseFloat(allsubmodules[i].required_time);
      } //   //console.log('time', allsubmodules)


      return total;
    },
    _mainTotalRequiredTime: function _mainTotalRequiredTime() {
      var total = 0;
      var allsubmodules = this.getAll_sub_module;

      for (var i = 0; i < allsubmodules.length; i++) {
        total += parseFloat(allsubmodules[i].required_time);
      } // //console.log('time', allsubmodules)


      return this.convertTime(total);
    },
    _totalRequiredTime: function _totalRequiredTime(mainModule_id) {
      var total = 0;
      var subModules_arr = this.getSub_module(mainModule_id); //   //console.log(subModules_arr);

      for (var i = 0; i < subModules_arr.length; i++) {
        total += parseFloat(subModules_arr[i].required_time);
      } //  //console.log('time', subModules_arr)


      return this.convertTime(total);
    },
    _totalTimeSpent: function _totalTimeSpent(data) {
      var total = 0;
      data.forEach(function (val) {
        total += parseFloat(val.time_spent); //    //console.log(total);
      });
      return total;
    },
    getProgress: function getProgress(id, user_id) {
      SubModuleProgress(main_module.id, main.student_id)[0];
    },
    fetchStudentModuleProgress: function fetchStudentModuleProgress() {
      var _this = this;

      axios.get("/api/student_sub_module/all/".concat(this.$route.params.id)).then(function (res) {
        _this.studentSubModuleProgress = res.data;
      });
      this.$store.dispatch('fetchMainModule', this.$route.params.id);
      this.$store.dispatch('fetchSubModule', this.$route.params.id);
      this.$store.dispatch('studentSubProgress', this.$route.params.id);
    },
    getStudentList: function getStudentList() {
      var _this2 = this;

      this.loading = true;
      axios.get('/api/student/all_by_class/' + this.selectedClass).then(function (res) {
        _this2.students = res.data;
      })["catch"](function (error) {//console.log(error)
      });
      this.$store.dispatch('studentMainProgress', this.selectedClass).then(function () {
        _this2.loading = false;
      });
    },
    getClassList: function getClassList() {
      var _this3 = this;

      this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(function () {
        _this3.classList = _this3.allClass;
        _this3.selectedClass = _this3.classList[0].class_id;

        _this3.getStudentList();

        _this3.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.loading = true;
    this.fetchStudentModuleProgress();
    this.getClassList();
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true& */ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true&");
/* harmony import */ var _studentProgressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentProgressComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studentProgressComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _studentProgressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0361821c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentProgressComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_template_id_0361821c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentProgressComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_studentProgressComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=template&id=0361821c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pt-1" },
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.role == "Teacher" ? "Student Progress" : "My Progress"
                  ) +
                  "\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _vm.role == "Teacher"
            ? _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-select", {
                    staticClass: "float-right",
                    attrs: {
                      items: _vm.classList,
                      "item-text": "class_name",
                      "item-value": "class_id",
                      label: "Select Class"
                    },
                    on: {
                      change: function($event) {
                        return _vm.getStudentList()
                      }
                    },
                    model: {
                      value: _vm.selectedClass,
                      callback: function($$v) {
                        _vm.selectedClass = $$v
                      },
                      expression: "selectedClass"
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-2" },
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-tabs",
                    { attrs: { color: "deep-purple accent-4", right: "" } },
                    [
                      _vm.role == "Teacher"
                        ? _c("v-tab", { attrs: { href: "#all" } }, [
                            _vm._v(
                              "\n                        All\n                    "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.getmain_module, function(main_module, index) {
                        return _c("v-tab", { key: index }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(main_module.module_name) +
                              "\n                    "
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.getmain_module, function(main_module, index) {
                        return _c(
                          "v-tab-item",
                          { key: index },
                          [
                            _c(
                              "v-card-title",
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(main_module.module_name) +
                                    "\n\n                            "
                                ),
                                _c("v-spacer")
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
                                            [
                                              _vm.role == "Teacher"
                                                ? _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            Student Name\n                                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.getSub_module(
                                                  main_module.id
                                                ),
                                                function(sub_module, index) {
                                                  return _c(
                                                    "th",
                                                    {
                                                      key: index,
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            sub_module.sub_module_name
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                      _c("br"),
                                                      _vm._v(
                                                        "(" +
                                                          _vm._s(
                                                            _vm.convertTime(
                                                              sub_module.required_time
                                                            )
                                                          ) +
                                                          ")\n                                        "
                                                      )
                                                    ]
                                                  )
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Total Time Spent "
                                                  ),
                                                  _c("br"),
                                                  _vm._v(
                                                    "\n                                            (" +
                                                      _vm._s(
                                                        _vm._totalRequiredTime(
                                                          main_module.id
                                                        )
                                                      ) +
                                                      ")\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tbody", [
                                          _c(
                                            "tr",
                                            [
                                              _vm._l(
                                                _vm.SubModuleProgress(
                                                  main_module.id,
                                                  _vm.student.id
                                                ),
                                                function(subModule, index) {
                                                  return _c(
                                                    "td",
                                                    {
                                                      key: index,
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            _vm.SubModuleProgress(
                                                              main_module.id,
                                                              _vm.student.id
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                      _c(
                                                        "v-chip",
                                                        {
                                                          attrs: {
                                                            color: _vm.checkTimeSpent(
                                                              subModule.time_spent,
                                                              subModule.required_time
                                                            ),
                                                            "text-color":
                                                              "white"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.convertTime(
                                                                  subModule.time_spent
                                                                )
                                                              ) +
                                                              "\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.convertTime(
                                                          _vm._totalTimeSpent(
                                                            _vm.SubModuleProgress(
                                                              main_module.id,
                                                              _vm.student.id
                                                            )
                                                          )
                                                        )
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentProgressComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/studentProgress-tab/studentProgressComponent.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("48ac89d4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);