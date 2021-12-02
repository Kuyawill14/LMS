"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course_subject_class-type_student-classPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      coursesLength: null,
      isGetting: false,
      dialog: false,
      isloading: true,
      isStudent: false,
      modalType: "",
      form: new Form({
        class_code: ""
      }),
      allClassesData: [],
      school_year: [],
      semester: [],
      school_year_id: '',
      semester_id: '',
      isLeaving: false,
      isJoining: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["allClass"]),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["fetchClassList"])), {}, {
    openJoinmodal: function openJoinmodal() {
      this.dialog = !this.dialog;
    },
    joinClass: function joinClass() {
      var _this = this;

      this.isJoining = true;
      this.$store.dispatch("joinClass", this.form).then(function (res) {
        if (res.status == 200 && res.data.status == 1) {
          _this.toastSuccess(res.data.message);

          _this.dialog = false;
          _this.isLeaving = true;

          _this.$router.push({
            path: '/course/' + res.data.course_id + '/announcement'
          }); //this.fetchClasses();


          _this.form.class_code = '';
        } else if (res.status == 202 && res.data.status == 1) {
          _this.toastError(res.data.message);

          _this.dialog = false;
          _this.isLeaving = true;

          _this.$router.push({
            path: '/course/' + res.data.course_id + '/announcement'
          });
        } else if (res.status == 200 && res.data.status == 2) {
          _this.toastSuccess(res.data.message);

          _this.dialog = false;
          _this.form.class_code = '';
          _this.isJoining = false;
        } else if (res.status == 200 && res.data.status == 3) {
          _this.toastInfo(res.data.message);

          _this.dialog = false;
          _this.form.class_code = '';
          _this.isJoining = false;
        } else {
          _this.toastError('Something went wrong while joining the class!');
        }
      });
    },
    Unenroll: function Unenroll(id) {
      var _this2 = this;

      this.isloading = true;
      this.$store.dispatch("Unenroll", id);
      this.fetchClasses();
      setTimeout(function () {
        return _this2.isloading = false;
      }, 1000);
    },
    fetchClasses: function fetchClasses() {
      var _this3 = this;

      this.isGetting = true;
      this.$store.dispatch('fetchClassList').then(function () {
        _this3.allClassesData = _this3.allClass;
        _this3.coursesLength = _this3.allClass.length;
        _this3.isGetting = false;
      });
    },
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this4 = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this4.school_year = res.data.school_year;
        _this4.semester = res.data.semester;
      });
    },
    schoolYearFilter: function schoolYearFilter() {
      var data = []; ////console.log(this.semester_id.length);

      for (var key in this.allClass) {
        if (this.semester_id != '') {
          if (this.allClass[key].school_year_id == this.school_year_id && this.allClass[key].semester_id == this.semester_id) {
            data.push(this.allClass[key]);
          }
        } else {
          if (this.allClass[key].school_year_id == this.school_year_id) {
            data.push(this.allClass[key]);
          }
        }
      } ////console.log(data);


      this.allClassesData = data;
    },
    semesterFilter: function semesterFilter() {
      var data = [];

      for (var key in this.allClass) {
        if (this.allClass[key].school_year_id == this.school_year_id && this.allClass[key].semester_id == this.semester_id) {
          data.push(this.allClass[key]);
        }
      } ////console.log(data);


      this.allClassesData = data;
    },
    CheckBackgroundPath: function CheckBackgroundPath(path) {
      if (path != null) {
        if (path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')) {
          return path;
        } else {
          return '../images/' + path;
        }
      }
    }
  }),
  mounted: function mounted() {
    this.fetchClasses();
    this.fetchAllSchoolyear_semester();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-caption[data-v-66f717be] {\n    color: #fff !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_style_index_0_id_66f717be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_style_index_0_id_66f717be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_style_index_0_id_66f717be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/student-classPage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/student-classPage.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-classPage.vue?vue&type=template&id=66f717be&scoped=true& */ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true&");
/* harmony import */ var _student_classPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-classPage.vue?vue&type=script&lang=js& */ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _student_classPage_vue_vue_type_style_index_0_id_66f717be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& */ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _student_classPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66f717be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course_subject/class-type/student-classPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-classPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_style_index_0_id_66f717be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=style&index=0&id=66f717be&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_classPage_vue_vue_type_template_id_66f717be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-classPage.vue?vue&type=template&id=66f717be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/student-classPage.vue?vue&type=template&id=66f717be&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
        "v-overlay",
        { attrs: { value: _vm.isLeaving } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.coursesLength == 0 && !_vm.isGetting
        ? _c(
            "v-row",
            {
              staticClass: "pt-10",
              attrs: { align: "center", justify: "center" }
            },
            [
              _c(
                "v-col",
                {
                  staticClass: "text-center",
                  attrs: { cols: "12", sm: "8", md: "4" }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "14rem" } }, [
                    _vm._v(
                      "\n                   mdi-book-variant-multiple\n               "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h1", [_vm._v(" Join your first class ")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      " Join class, to be able to view modules and activities."
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.openJoinmodal }
                    },
                    [_vm._v(" Join Class ")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
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
                _vm._v("\n                   Join Class\n               ")
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
                              label: "Class Code"
                            },
                            model: {
                              value: _vm.form.class_code,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "class_code", $$v)
                              },
                              expression: "form.class_code"
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
                      attrs: { text: "", color: "secondary" },
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
                      attrs: {
                        text: "",
                        color: "primary",
                        disabled: _vm.isJoining
                      },
                      on: { click: _vm.joinClass }
                    },
                    [_vm._v(_vm._s(_vm.isJoining ? "Joining..." : "Join"))]
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
        "div",
        [
          _c(
            "v-row",
            { staticStyle: { "margin-bottom": "-40px" } },
            [
              _c(
                "v-col",
                {
                  staticClass: "mb-0 pb-0",
                  attrs: { cols: "12", md: "12", lg: "8" }
                },
                [_c("h2", [_vm._v("My Classes")])]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "text-right", attrs: { lg: "2" } },
                [
                  _c("v-select", {
                    staticClass: "mr-2 my-0",
                    attrs: {
                      dense: "",
                      items: _vm.school_year,
                      "item-text": "schoolyear",
                      "item-value": "id",
                      label: "School Year",
                      outlined: "",
                      small: ""
                    },
                    on: {
                      change: function($event) {
                        return _vm.schoolYearFilter()
                      }
                    },
                    model: {
                      value: _vm.school_year_id,
                      callback: function($$v) {
                        _vm.school_year_id = $$v
                      },
                      expression: "school_year_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "text-right", attrs: { lg: "2" } },
                [
                  _c("v-select", {
                    staticClass: "mr-2 my-0",
                    attrs: {
                      dense: "",
                      items: _vm.semester,
                      "item-text": "semester",
                      "item-value": "id",
                      label: "Semester",
                      outlined: "",
                      small: ""
                    },
                    on: {
                      change: function($event) {
                        return _vm.semesterFilter()
                      }
                    },
                    model: {
                      value: _vm.semester_id,
                      callback: function($$v) {
                        _vm.semester_id = $$v
                      },
                      expression: "semester_id"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.isGetting
            ? _c(
                "v-row",
                _vm._l(3, function(n) {
                  return _c(
                    "v-col",
                    {
                      key: n,
                      attrs: {
                        height: _vm.$vuetify.breakpoint.lgAndUp ? 200 : 140,
                        cols: "12",
                        xl: "3",
                        lg: "3",
                        md: "6"
                      }
                    },
                    [
                      _c("v-skeleton-loader", {
                        attrs: { type: "image, article" }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.coursesLength != 0 && _vm.isGetting == false
            ? _c(
                "v-row",
                { staticClass: "mt-3" },
                [
                  _vm._l(_vm.allClassesData, function(item, i) {
                    return _c(
                      "v-col",
                      {
                        key: "class" + i,
                        attrs: { cols: "12", xl: "3", lg: "3", md: "6" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "card-expansion" },
                          [
                            _c(
                              "v-card",
                              { staticClass: "mx-auto" },
                              [
                                _c(
                                  "v-img",
                                  {
                                    staticClass:
                                      "white--text align-end grey lighten-2",
                                    attrs: {
                                      src: _vm.CheckBackgroundPath(
                                        item.course_picture
                                      ),
                                      height: _vm.$vuetify.breakpoint.lgAndUp
                                        ? 200
                                        : 160,
                                      gradient:
                                        "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                      "aspect-ratio": "1"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "placeholder",
                                          fn: function() {
                                            return [
                                              _c(
                                                "v-row",
                                                {
                                                  staticClass:
                                                    "fill-height ma-0",
                                                  attrs: {
                                                    align: "center",
                                                    justify: "center"
                                                  }
                                                },
                                                [
                                                  _c("v-progress-circular", {
                                                    attrs: {
                                                      indeterminate: "",
                                                      color: "grey lighten-5"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-card-subtitle",
                                      [
                                        _c("v-progress-linear", {
                                          staticClass: "rounded-sm",
                                          attrs: {
                                            value: item.progress,
                                            height: "6"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-caption float-right"
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  parseFloat(
                                                    item.progress.toFixed(2)
                                                  )
                                                ) +
                                                "%\n                                   "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-caption " },
                                          [_vm._v(" Completed ")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-hover", {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var hover = ref.hover
                                          return [
                                            _c(
                                              "v-card-subtitle",
                                              {
                                                staticClass:
                                                  "ml-0 pl-0 mt-0 pt-0"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        staticStyle: {
                                                          "text-decoration":
                                                            "none"
                                                        },
                                                        attrs: {
                                                          to: {
                                                            name: "coursePage",
                                                            params: {
                                                              id: item.course_id
                                                            },
                                                            query: {
                                                              class:
                                                                item.class_id
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list",
                                                          {
                                                            staticClass:
                                                              "ml-0 pl-0"
                                                          },
                                                          [
                                                            _c(
                                                              "v-list-item",
                                                              {
                                                                class: hover
                                                                  ? "blue--text"
                                                                  : "primary--text"
                                                              },
                                                              [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      [
                                                                        _c(
                                                                          "p",
                                                                          {
                                                                            staticClass:
                                                                              "mb-0 pb-0 mb-2",
                                                                            style: _vm
                                                                              .$vuetify
                                                                              .breakpoint
                                                                              .lgAndUp
                                                                              ? "font-size: 16px;text-overflow: ellipsis;overflow: hidden; "
                                                                              : "font-size: 14px;text-overflow: ellipsis;overflow: hidden; "
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                item.course_code
                                                                              ) +
                                                                                "\n                                                       "
                                                                            ),
                                                                            _c(
                                                                              "br"
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticStyle: {
                                                                                  "text-overflow":
                                                                                    "ellipsis",
                                                                                  overflow:
                                                                                    "hidden"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    item.course_name
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
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
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-divider"),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "mt-2 pl-4" },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        style: _vm.$vuetify
                                                          .breakpoint.lgAndUp
                                                          ? "font-size: 16px"
                                                          : "font-size: 14px"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.class_name
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        style: _vm.$vuetify
                                                          .breakpoint.lgAndUp
                                                          ? "font-size: 16px"
                                                          : "font-size: 14px"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " Class code: " +
                                                            _vm._s(
                                                              item.class_code
                                                            )
                                                        )
                                                      ]
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
                                  )
                                })
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
                  _c(
                    "v-col",
                    { staticClass: "text-right" },
                    [
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
                          on: { click: _vm.openJoinmodal }
                        },
                        [_c("v-icon", [_vm._v("mdi-plus")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
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