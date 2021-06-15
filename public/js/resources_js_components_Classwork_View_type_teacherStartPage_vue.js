(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_teacherStartPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails'],
  data: function data() {
    return {
      activeTab: "",
      ObjectIveTabs: [{
        name: "clwk",
        text: "CLASSWORK DETAILS",
        icon: "mdi-file-cog"
      }, {
        name: "add-question",
        text: "ADD QUESTION",
        icon: "mdi-text-box-plus-outline"
      }, {
        name: "question-list",
        text: "QUESTION LIST",
        icon: "mdi-clipboard-list"
      }, {
        name: "publish-to",
        text: "PUBLISH TO",
        icon: "mdi-publish"
      }, {
        name: "submission-list",
        text: "SUBMISSION LIST",
        icon: "mdi-notebook-check-outline"
      }, {
        name: "question-analytics",
        text: "QUESTION ANALYTICS",
        icon: "mdi-google-analytics"
      }],
      SubjectiveTabs: [{
        name: "clwk",
        text: "CLASSWORK DETAILS",
        icon: "mdi-file-cog"
      }, {
        name: "publish-to",
        text: "PUBLISH TO",
        icon: "mdi-publish"
      }, {
        name: "submission-list",
        text: "SUBMISSION LIST",
        icon: "mdi-notebook-check-outline"
      }],
      tabs: null
    };
  },
  mounted: function mounted() {
    if (this.classworkDetails.type == 'Subjective Type') {
      this.tabs = this.SubjectiveTabs;
    } else if (this.classworkDetails.type == 'Objective Type') {
      this.tabs = this.ObjectIveTabs;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/teacherStartPage.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/teacherStartPage.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacherStartPage.vue?vue&type=template&id=3042631b& */ "./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b&");
/* harmony import */ var _teacherStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacherStartPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _teacherStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__.render,
  _teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/teacherStartPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherStartPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherStartPage_vue_vue_type_template_id_3042631b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherStartPage.vue?vue&type=template&id=3042631b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/teacherStartPage.vue?vue&type=template&id=3042631b& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
        "v-tabs",
        {
          attrs: {
            rounded: "",
            "next-icon": "mdi-arrow-right-bold-box-outline",
            "prev-icon": "mdi-arrow-left-bold-box-outline",
            "show-arrows": "",
            centered: "",
            "icons-and-text": ""
          },
          model: {
            value: _vm.activeTab,
            callback: function($$v) {
              _vm.activeTab = $$v
            },
            expression: "activeTab"
          }
        },
        [
          _c("v-tabs-slider", { attrs: { color: "primary" } }),
          _vm._v(" "),
          _vm._l(_vm.tabs, function(item, index) {
            return _c(
              "v-tab",
              {
                key: index,
                attrs: {
                  to: {
                    name: item.name,
                    query: { clwk: _vm.$route.query.clwk }
                  }
                }
              },
              [
                _vm._v(
                  "\n\n          " +
                    _vm._s(_vm.$vuetify.breakpoint.xs ? "" : item.text) +
                    "\n            "
                ),
                _c("v-icon", { attrs: { left: "" } }, [
                  _vm._v(
                    "\n            " + _vm._s(item.icon) + "\n            "
                  )
                ])
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-tabs-items", { attrs: { value: _vm.activeTab } }, [
            _c(
              "div",
              { staticClass: "container" },
              [
                _c("router-view", {
                  attrs: { classworkDetails: _vm.classworkDetails }
                })
              ],
              1
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);