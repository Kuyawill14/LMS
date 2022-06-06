"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_campus-director_monitor-departments_overview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
      semester_id: null,
      school_year: [],
      semester: [],
      school_year_id: null
    }, _defineProperty(_ref, "semester_id", null), _defineProperty(_ref, "Deldialog", false), _defineProperty(_ref, "dialog", false), _defineProperty(_ref, "temp_id", ''), _defineProperty(_ref, "IsDeleting", false), _defineProperty(_ref, "IsAddUpdating", false), _defineProperty(_ref, "IsResetting", false), _defineProperty(_ref, "type", ''), _defineProperty(_ref, "search", ""), _defineProperty(_ref, "valid", true), _defineProperty(_ref, "headers", [{
      text: 'ID',
      value: 'user_id',
      align: 'start'
    }, {
      text: 'Name',
      value: 'name',
      align: 'start'
    }, {
      text: 'Total Courses',
      value: 'course_count',
      align: 'center'
    }, {
      text: 'Total Classes',
      value: 'total_classes',
      align: 'center'
    }, {
      text: ' Total Modules Created',
      value: 'sub_modules_count',
      align: 'center'
    }, {
      text: 'Total Classwork Created',
      value: 'classwork_count',
      align: 'center'
    }, {
      text: 'Actions',
      sortable: false
    }]), _defineProperty(_ref, "teacherSummary", []), _defineProperty(_ref, "loading", true), _ref;
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      if (this.search) {
        return this.teacherSummary.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v) || item.middleName.toLowerCase().includes(v) || item.user_id.toString().includes(v);
          });
        });
      } else {
        return this.teacherSummary;
      }
    }
  },
  methods: {
    limitChar: function limitChar(title) {
      if (title.length > 40) {
        return title.substring(0, 40) + '...';
      } else {
        return title;
      }
    },
    getDeparmentsData: function getDeparmentsData() {
      var _this2 = this;

      axios.get('/api/department/data/all').then(function (res) {
        if (res.status == 200) {
          _this2.departments = res.data;
        }
      });
    },
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this3 = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this3.school_year = res.data.school_year;
        _this3.semester = res.data.semester;
      });
    },
    getTeacherSummary: function getTeacherSummary(clear) {
      var _this4 = this;

      if (clear) {
        this.school_year_id = null;
        this.semester_id = null;
      }

      axios.get("/api/admin/teachers/all/summarry", {
        params: {
          school_year_id: this.school_year_id != 0 ? this.school_year_id : null,
          semester_id: this.semester_id != 0 ? this.semester_id : null,
          department_id: this.$route.params.id
        }
      }).then(function (res) {
        if (res.status == 200) {
          _this4.teacherSummary = res.data;
          _this4.teacherSummary['overview'] = res.data.overview;
          console.log(res.data);
        } else {
          _this4.toastError('Oops! Something went wrong, please reload the page');
        }

        _this4.loading = false;
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.fetchAllSchoolyear_semester();
    this.getTeacherSummary();
    setTimeout(function () {
      _this5.summarryLoading = false;
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#department_logo>div.v-image.v-responsive.white--text.align-end.theme--light>div.v-image__image.v-image__image--cover[data-v-a503bebc] {\n    background-size: contain !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_a503bebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_a503bebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_a503bebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/overview.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/overview.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.vue?vue&type=template&id=a503bebc&scoped=true& */ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true&");
/* harmony import */ var _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.vue?vue&type=script&lang=js& */ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js&");
/* harmony import */ var _overview_vue_vue_type_style_index_0_id_a503bebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& */ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a503bebc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/.campus-director/monitor-departments/overview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_a503bebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=style&index=0&id=a503bebc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_template_id_a503bebc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overview.vue?vue&type=template&id=a503bebc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/.campus-director/monitor-departments/overview.vue?vue&type=template&id=a503bebc&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            [
              _vm.loading
                ? _c(
                    "v-card",
                    [
                      _c("v-skeleton-loader", {
                        attrs: { loading: _vm.loading, type: "table" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loading
                ? _c(
                    "v-card",
                    { attrs: { elevation: "2" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    Teachers\n\n                    "
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
                      !_vm.loading
                        ? _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.filteredItems,
                              "items-per-page": 10
                            },
                            scopedSlots: _vm._u(
                              [
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
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      (item["item"] =
                                                        item.user_id)
                                                    ) +
                                                    " "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  " " +
                                                    _vm._s(
                                                      (item["name"] =
                                                        item.lastName +
                                                        ", " +
                                                        item.firstName +
                                                        " " +
                                                        item.middleName)
                                                    ) +
                                                    " "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        (item["course_count"] =
                                                          item.overview.total_courses)
                                                      )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        (item["total_classes"] =
                                                          item.overview.total_classes)
                                                      ) +
                                                      " "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        (item[
                                                          "sub_modules_count"
                                                        ] =
                                                          item.overview.total_modules)
                                                      ) +
                                                      " "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        (item[
                                                          "classwork_count"
                                                        ] =
                                                          item.overview.total_classwork)
                                                      ) +
                                                      " "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        icon: "",
                                                        color: "success",
                                                        link: "",
                                                        to: {
                                                          name:
                                                            "departmentMonitorTeacher_id",
                                                          query: {
                                                            id: item.user_id
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "\n                                            mdi-eye\n                                        "
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
                              ],
                              null,
                              false,
                              268121571
                            )
                          })
                        : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);