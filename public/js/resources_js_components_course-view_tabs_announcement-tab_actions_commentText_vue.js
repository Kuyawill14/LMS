"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_actions_commentText_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['itemData', 'mainindex', 'postDetails_id'],
  data: function data() {
    return {
      readMore: {
        IsreadMore: false,
        isLongText: false
      },
      loaded: false
    };
  },
  methods: {
    checkContainerHeight: function checkContainerHeight() {
      var testData = 'commentContainer' + this.mainindex;
      console.log(testData);
      var element = this.$refs[testData].clientHeight; //let element = this.$refs.commentContainer.clientHeight;

      console.log(element);

      if (element > 160) {
        this.readMore.IsreadMore = true;
        this.readMore.isLongText = false;
      } else {
        this.readMore.IsreadMore = false;
        this.readMore.isLongText = false;
      } //this.checkContainerHeight();

    }
  },
  mounted: function mounted() {
    this.checkContainerHeight();
  }
  /* updated() {
      this.$nextTick(function () {
          this.checkContainerHeight();
      })
  } */

});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentText.vue?vue&type=template&id=1d66c058& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058&");
/* harmony import */ var _commentText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentText.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _commentText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__.render,
  _commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentText_vue_vue_type_template_id_1d66c058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentText.vue?vue&type=template&id=1d66c058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentText.vue?vue&type=template&id=1d66c058& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    { ref: "commentContainer" + _vm.mainindex },
    [
      _c("div", [
        _vm._v(
          "\n      dasa\n      sasa\n      sas\n      sas\n      sa\n      avataraa\n      avataraaaa\n      \n  "
        )
      ]),
      _vm._v(" "),
      _c("v-textarea", {
        staticClass: "mt-0 pt-0 ml-0 pl-0 area-text text-field-transparent",
        style: !_vm.$vuetify.breakpoint.mdAndUp
          ? _vm.readMore.isLongText
            ? "line-height:1.5;font-size:0.9rem;background-color:transparent"
            : "line-height:1.5;font-size:0.9rem;background-color:transparent;max-height:120px"
          : _vm.readMore.isLongText
          ? "line-height:1.5;font-size:0.95rem;"
          : "line-height:1.5;font-size:0.95rem;max-height:165px;overflow:hidden",
        attrs: {
          rounded: "",
          readonly: "",
          "hide-details": "",
          flat: "",
          rows: "1",
          "auto-grow": "",
          type: "text"
        },
        model: {
          value: _vm.itemData.content,
          callback: function($$v) {
            _vm.$set(_vm.itemData, "content", $$v)
          },
          expression: "itemData.content"
        }
      }),
      _vm._v(" "),
      _vm.readMore.IsreadMore == true
        ? _c("div", { staticClass: "text-right" }, [
            !_vm.readMore.isLongText
              ? _c(
                  "a",
                  {
                    staticClass: "mr-5",
                    staticStyle: {
                      "text-decoration": "none",
                      "font-size": "12px"
                    },
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.readMore.isLongText = true
                      }
                    }
                  },
                  [_vm._v("Read more..")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.readMore.isLongText
              ? _c(
                  "a",
                  {
                    staticClass: "mr-5",
                    staticStyle: {
                      "text-decoration": "none",
                      "font-size": "12px"
                    },
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.readMore.isLongText = false
                      }
                    }
                  },
                  [_vm._v("Read less..")]
                )
              : _vm._e()
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);