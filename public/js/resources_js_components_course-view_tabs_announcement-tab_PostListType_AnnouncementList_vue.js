"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue"],{

/***/ "./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnouncementList.vue?vue&type=template&id=025877ba& */ "./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnouncementList_vue_vue_type_template_id_025877ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnouncementList.vue?vue&type=template&id=025877ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue?vue&type=template&id=025877ba& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-row user-info" },
    [
      _c(
        "v-avatar",
        { attrs: { size: "45" } },
        [
          _c("v-img", {
            staticClass: "rounded-circle",
            attrs: {
              src:
                _vm.post.profile_pic == null || _vm.post.profile_pic == ""
                  ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                    _vm.post.name
                  : _vm.post.profile_pic
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-column justify-content-start ml-2 mt-1" },
        [
          _c("span", { staticClass: "d-block font-weight-bold name" }, [
            _vm._v(_vm._s(_vm.post.name))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "date text-black-50" }, [
            _vm._v(_vm._s(_vm.format_date(_vm.post.created_at)))
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);