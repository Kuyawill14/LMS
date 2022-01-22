"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_vaccine_vaccineComponents_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
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
      tab: null,
      items: [{
        tab: 'Search by Student ID',
        href: '#by_student_id'
      }, {
        tab: 'Search by Name',
        href: '#by_name'
      }],
      students: [{
        student_id: '18-1039',
        name: 'Mark Joshua Elimar Mandigma',
        program: 'BSIT',
        vaccine_brand: 'SPUTNIK V',
        first_dose: '11/03/21',
        second_dose: '11/23/21'
      }, {
        student_id: '18-1039',
        name: 'Mark Joshua Elimar Mandigma',
        program: 'BSIT',
        vaccine_brand: 'SPUTNIK V',
        first_dose: '11/03/21',
        second_dose: '11/23/21'
      }, {
        student_id: '18-1039',
        name: 'Mark Joshua Elimar Mandigma',
        program: 'BSIT',
        vaccine_brand: 'SPUTNIK V',
        first_dose: '11/03/21',
        second_dose: '11/23/21'
      }],
      json_gen: [{
        "student_id": "18-1010",
        "name": "Terrell Hayes",
        "program": "COMBOGENE",
        "vaccine_brand": "blue",
        "first_dose": "2020-10-31",
        "second_dose": "2020-02-19"
      }, {
        "student_id": "18-1011",
        "name": "Emily Dixon",
        "program": "ULTRASURE",
        "vaccine_brand": "blue",
        "first_dose": "2018-10-07",
        "second_dose": "2017-11-01"
      }, {
        "student_id": "18-1012",
        "name": "Durham Stanton",
        "program": "MEDALERT",
        "vaccine_brand": "brown",
        "first_dose": "2017-08-26",
        "second_dose": "2020-06-07"
      }, {
        "student_id": "18-1013",
        "name": "Miranda James",
        "program": "COMVOY",
        "vaccine_brand": "brown",
        "first_dose": "2016-03-20",
        "second_dose": "2019-08-02"
      }, {
        "student_id": "18-1014",
        "name": "Elvia Stafford",
        "program": "ZILLACON",
        "vaccine_brand": "green",
        "first_dose": "2021-10-07",
        "second_dose": "2017-07-22"
      }],
      search: '',
      searching: false,
      studentFound: [],
      color: '',
      isFoundstudent: false
    };
  },
  computed: {
    filteredItemsbyStudent_id: function filteredItemsbyStudent_id() {
      var _this = this;

      if (this.search) {
        axios.get("api/vaccination/".concat(this.search, "/By_student_id")).then(function (res) {
          _this.searching = false;
          console.log(res.data);
          _this.studentFound = res.data;
        })["catch"](function (err) {
          _this.toastError('Something went wrong');

          _this.studentFound = [];
        });
      } else {
        return this.students;
      }
    },
    filteredItemsby_name: function filteredItemsby_name() {
      var _this2 = this;

      if (this.search) {
        return this.students.filter(function (item) {
          return _this2.search.toLowerCase().split(' ').every(function (v) {
            return item.name.toLowerCase();
          });
        });
      } else {
        return this.students;
      }
    }
  },
  methods: {
    searchById: function searchById() {
      var _this3 = this;

      this.studentFound = [];

      if (this.search.length > 5) {
        this.searching = true;
        axios.get("api/vaccination/".concat(this.search.trim(), "/By_student_id")).then(function (res) {
          _this3.studentFound = res.data;
          _this3.searching = false;
        })["catch"](function (err) {
          _this3.toastError('Something went wrong, Please refresh the page and try again!');

          _this3.studentFound = [];
          _this3.searching = false;
          _this3.isFoundstudent = true;
        });
      }
    },
    vaccineStatus: function vaccineStatus(val) {
      if (val.trim() == 'A') {
        this.color = '#F44336';
        return 'Unvaccinated';
      }

      if (val.trim() == 'B') {
        this.color = '#03A9F4';
        return 'First Dose';
      }

      if (val.trim() == 'C') {
        this.color = '#4CAF50';
        return 'Fully Vaccinated';
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.json_gen.forEach(function (item) {
      _this4.students.push(JSON.parse(JSON.stringify(item)));
    }); // this.students.push(JSON.parse(this.json_gen[0]));

    console.log(this.students);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered-input[data-v-0589b896] input {\n    text-align: center\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_style_index_0_id_0589b896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_style_index_0_id_0589b896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_style_index_0_id_0589b896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/vaccine/vaccineComponents.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/vaccine/vaccineComponents.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true& */ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true&");
/* harmony import */ var _vaccineComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaccineComponents.vue?vue&type=script&lang=js& */ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js&");
/* harmony import */ var _vaccineComponents_vue_vue_type_style_index_0_id_0589b896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& */ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _vaccineComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0589b896",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vaccine/vaccineComponents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vaccineComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_style_index_0_id_0589b896_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=style&index=0&id=0589b896&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vaccineComponents_vue_vue_type_template_id_0589b896_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vaccine/vaccineComponents.vue?vue&type=template&id=0589b896&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { staticStyle: { width: "800px" } },
        [
          _c("h2", { staticClass: "text-center" }, [
            _vm._v("Vaccination Checker")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "px-4", attrs: { flat: "", elevation: "2" } },
            [
              _c("v-card-text", { staticClass: "text-center" }, [
                _vm._v("Enter Student ID")
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "px-4" },
                [
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        staticClass: "centered-input",
                        attrs: {
                          clearable: "",
                          outlined: "",
                          placeholder: "eg. 20-1234"
                        },
                        on: { input: _vm.searchById },
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
              _c("v-divider"),
              _vm._v(" "),
              _vm.searching == true
                ? _c(
                    "div",
                    { staticClass: "text-center pt-3" },
                    [
                      _c("v-skeleton-loader", {
                        staticStyle: { margin: "auto", width: "30%" },
                        attrs: { type: "text" }
                      }),
                      _vm._v(" "),
                      _c("v-skeleton-loader", {
                        staticStyle: { margin: "auto", width: "50%" },
                        attrs: { type: "text" }
                      }),
                      _vm._v(" "),
                      _c("v-skeleton-loader", {
                        staticStyle: { margin: "auto", width: "30%" },
                        attrs: { type: "text" }
                      }),
                      _vm._v(" "),
                      _c("v-skeleton-loader", {
                        staticStyle: { height: "225px" },
                        attrs: { loading: "true", type: "table" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.studentFound != ""
                ? _c(
                    "div",
                    [
                      _c("div", { staticClass: "text-center pt-4" }, [
                        _c("h4", [_vm._v("Vaccination Status")]),
                        _vm._v(" "),
                        _c("h2", { style: "color:" + _vm.color }, [
                          _vm._v(
                            _vm._s(
                              _vm.vaccineStatus(_vm.studentFound.vaccine_status)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("h3", [
                          _vm._v(_vm._s(_vm.studentFound.vaccine_brand))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-simple-table", [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticStyle: { width: "100px" } }, [
                              _vm._v("Student ID")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticStyle: { width: "230px" } }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Course/Year")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Brand of Vaccine")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("First Dose")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Second Dose")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", [
                            _c("td", [
                              _vm._v(_vm._s(_vm.studentFound.student_id))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.studentFound.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.studentFound.program +
                                    " " +
                                    _vm.studentFound.year_level
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.studentFound.vaccine_brand))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.studentFound.first_dose))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.studentFound.second_dose))
                            ])
                          ])
                        ])
                      ])
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