"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_classworkListType_classworkListStudent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var previewClassworkModal = function previewClassworkModal() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_classwork-tab_dialogs_previewClassworkModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialogs/previewClassworkModal */ "./resources/js/components/course-view/tabs/classwork-tab/dialogs/previewClassworkModal.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworks'],
  components: {
    previewClassworkModal: previewClassworkModal
  },
  data: function data() {
    return {
      Previewdialog: false,
      Preview_id: null,
      DateToday: '',
      SelectedFilter: "All",
      FilterItems: [],
      ClassworkLength: null,
      isSearching: false,
      search: "",
      isLoading: false
    };
  },
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format('MMMM DD YYYY, hh:mm A');
      }
    },
    CheckFormatDue: function CheckFormatDue(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format("YYYY-MM-DDTHH:mm:ss");
      }
    },
    continueClasswork: function continueClasswork(classwork_id) {
      this.$router.push({
        name: 'quizstart',
        params: {
          id: this.$route.params.id
        },
        query: {
          clwk: classwork_id
        }
      });
    },
    OpenClaswork: function OpenClaswork(type, status, score, classwork_id) {
      this.isLoading = true;

      if (status == 'Submitted' && score != null) {
        if (type == 'Objective Type') {
          // this.$router.push({name:'result-page', params:{id: classwork_id}})
          this.$router.push({
            name: 'clwk',
            params: {
              id: this.$route.params.id
            },
            query: {
              clwk: classwork_id
            }
          });
        } else {
          this.$router.push({
            name: 'clwk',
            params: {
              id: this.$route.params.id
            },
            query: {
              clwk: classwork_id
            }
          });
        }
      } else if (status == 'Submitting' || status == null) {
        this.Previewdialog = !this.Previewdialog;
        this.Preview_id = classwork_id;
      }
    },
    setFilterItems: function setFilterItems() {
      for (var i = 0; i < this.classworks.ClassworkTitle.length + 1; i++) {
        if (i == 0) {
          this.FilterItems.push({
            title: 'All'
          });
        } else {
          this.FilterItems.push({
            title: this.classworks.ClassworkTitle[i - 1].title
          });
        }
      }
    },
    CheckClassworkCount: function CheckClassworkCount() {
      var _this = this;

      this.classworks.ClassworksList.forEach(function (element) {
        _this.ClassworkLength += element.length;
      });
    }
  },
  mounted: function mounted() {
    this.CheckClassworkCount();
    this.setFilterItems();
    var newDate = new Date();
    this.DateToday = (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(newDate).format("YYYY-MM-DDTHH:mm:ss");
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classworkListStudent.vue?vue&type=template&id=a8d81244& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&");
/* harmony import */ var _classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classworkListStudent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.render,
  _classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListStudent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkListStudent_vue_vue_type_template_id_a8d81244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkListStudent.vue?vue&type=template&id=a8d81244& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkListType/classworkListStudent.vue?vue&type=template&id=a8d81244& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {}
var staticRenderFns = []



/***/ })

}]);