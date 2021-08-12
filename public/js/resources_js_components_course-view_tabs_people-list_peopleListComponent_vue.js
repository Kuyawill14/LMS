(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_people-list_peopleListComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
var instructorView = function instructorView() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_InstructorListView_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./InstructorListView */ "./resources/js/components/course-view/tabs/people-list/InstructorListView.vue"));
};

var studentView = function studentView() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_studentListView_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./studentListView */ "./resources/js/components/course-view/tabs/people-list/studentListView.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'UserDetails', 'getcourseInfo'],
  components: {
    instructorView: instructorView,
    studentView: studentView
  },
  data: function data() {
    return {
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: 'People',
        disabled: true,
        link: 'Student-list'
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peopleListComponent.vue?vue&type=template&id=150a59ef& */ "./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef&");
/* harmony import */ var _peopleListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peopleListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _peopleListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__.render,
  _peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/people-list/peopleListComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_peopleListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./peopleListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_peopleListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_peopleListComponent_vue_vue_type_template_id_150a59ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./peopleListComponent.vue?vue&type=template&id=150a59ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListComponent.vue?vue&type=template&id=150a59ef& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
                      "\n            " +
                        _vm._s(item.text.toUpperCase()) +
                        "\n        "
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
        [
          _vm.role == "Teacher"
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _vm.role == "Teacher"
                    ? _c("instructorView", {
                        attrs: {
                          getcourseInfo: _vm.getcourseInfo,
                          role: _vm.role,
                          UserDetails: _vm.UserDetails
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.role == "Student"
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _vm.role == "Student"
                    ? _c("studentView", {
                        attrs: { role: _vm.role, UserDetails: _vm.UserDetails }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);