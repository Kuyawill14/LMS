(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_grading_criteria-tab_grading_criteriaComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: 'Grading Criteria',
        disabled: true,
        link: 'gradingCriteria'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["get_gradingCriteria"])),
  methods: {
    getAllGradeCriteria: function getAllGradeCriteria() {
      this.$store.dispatch('fetchGradingCriteria', this.$route.params.id);
    },
    openAdd: function openAdd() {
      this.type = 'add';
      this.grading_criteria_form.name = '';
      this.grading_criteria_form.percentage = '';
      this.dialog = true;
    },
    openEdit: function openEdit(name, percentage, id) {
      this.type = 'edit';
      this.dialog = true;
      this.grading_criteria_form.name = name;
      this.grading_criteria_form.percentage = percentage;
      this.grading_criteria_form.id = id;
      this.grading_criteria_form.course_id = this.$route.params.id;
      ;
    },
    openDelete: function openDelete(id) {
      this.delId = id;
      this.Deldialog = true;
    },
    addGradeCriteria: function addGradeCriteria() {
      var _this = this;

      if (this.grading_criteria_form.name.trim() != '' || this.grading_criteria_form.percentage.trim() != '') {
        this.loading = true;
        var errors = '';
        this.grading_criteria_form.course_id = this.$route.params.id;
        this.$store.dispatch('addGradingCriteria', this.grading_criteria_form).then(function (data) {
          _this.dialog = false;
        });
      } else {}
    },
    updateGradeCriteria: function updateGradeCriteria() {
      var _this2 = this;

      var errors = '';
      this.$store.dispatch('updateGradingCriteria', this.grading_criteria_form).then(function (data) {
        if (data[0] == 'error') {
          for (var i = 1; i < data.length; i++) {
            errors = data[i] + "<br>" + errors;
            console.log(data[i]);
          }

          _this2.loading = false;
        } else {
          _this2.loading = false;
          _this2.dialog = false;
        }
      }); //} 
    },
    removeGradeCriteria: function removeGradeCriteria() {
      var _this3 = this;

      this.loading = true;
      this.$store.dispatch('removeGradingCriteria', this.delId).then(function (message) {
        _this3.Deldialog = false;
        _this3.loading = false;
      });
    },
    _totalPercent: function _totalPercent(percentage_data) {
      var total = 0;
      percentage_data.forEach(function (val) {
        total += parseFloat(val.percentage);
      });
      return total;
    }
  },
  mounted: function mounted() {
    this.loading = true;
    this.getAllGradeCriteria();
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true& */ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true&");
/* harmony import */ var _grading_criteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grading_criteriaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _grading_criteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "77db8054",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./grading_criteriaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true& ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_template_id_77db8054_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_grading_criteriaComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=template&id=77db8054&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("\n        Grading Criteria\n    ")]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            bottom: "",
            color: "primary",
            dark: "",
            fab: "",
            fixed: "",
            right: ""
          },
          on: {
            click: function($event) {
              return _vm.openAdd()
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
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
                { attrs: { elevation: "2" } },
                [
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Criteria name\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Percentage (%)\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n                                    Action\n                                "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm._l(_vm.get_gradingCriteria, function(
                                  gradeCriteria,
                                  i
                                ) {
                                  return _c(
                                    "tr",
                                    { key: "get_gradingCriteria" + i },
                                    [
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(_vm._s(gradeCriteria.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(
                                          _vm._s(gradeCriteria.percentage) + "%"
                                        )
                                      ]),
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
                                                color: "success"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openEdit(
                                                    gradeCriteria.name,
                                                    gradeCriteria.percentage,
                                                    gradeCriteria.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "\n                                            mdi-pencil\n                                        "
                                                )
                                              ])
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "", color: "red" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.openDelete(
                                                    gradeCriteria.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  "\n                                            mdi-delete\n                                        "
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _vm.get_gradingCriteria.length != 0
                                  ? _c("tr", [
                                      _c("td", { staticClass: "text-center" }, [
                                        _c("strong", [_vm._v("Total")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._totalPercent(
                                                _vm.get_gradingCriteria
                                              )
                                            ) + "%"
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("td")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.get_gradingCriteria.length == 0
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-center",
                                          attrs: { colspan: "3" }
                                        },
                                        [_vm._v(" No data available")]
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              2
                            )
                          ]
                        },
                        proxy: true
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "400px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", {}, [
                _vm._v("\n                Grading Criteria\n            ")
              ]),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-2" },
                    [
                      _c(
                        "v-col",
                        { staticClass: "pa-0 ma-0", attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              color: "primary",
                              label: "Criteria Name"
                            },
                            model: {
                              value: _vm.grading_criteria_form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.grading_criteria_form, "name", $$v)
                              },
                              expression: "grading_criteria_form.name"
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
                          _c("v-text-field", {
                            attrs: {
                              filled: "",
                              color: "primary",
                              label: "Percentage (%)"
                            },
                            model: {
                              value: _vm.grading_criteria_form.percentage,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.grading_criteria_form,
                                  "percentage",
                                  $$v
                                )
                              },
                              expression: "grading_criteria_form.percentage"
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.type == "add"
                            ? _vm.addGradeCriteria()
                            : _vm.updateGradeCriteria()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.type == "add" ? "Add" : "Save")
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.Deldialog,
            callback: function($$v) {
              _vm.Deldialog = $$v
            },
            expression: "Deldialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  "\n                Are you sure you want to delete this?\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v("{some message} ")]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.Deldialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    No\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.removeGradeCriteria()
                        }
                      }
                    },
                    [_vm._v("\n                    Yes\n                ")]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./grading_criteriaComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/grading_criteria-tab/grading_criteriaComponent.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("991c13d8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);