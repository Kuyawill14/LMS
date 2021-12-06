"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_course-setup_courseDetailsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      el: 2,
      isUpdating: false,
      courseDetails: [],
      school_year: [],
      semester: [],
      departmentsList: [],
      isInvalidFileType: false,
      isInvalidFileSize: false,
      isFileSize: null,
      uploadPercentage: 0,
      isDeleting: false,
      valid: true,
      rules: [function (v) {
        return !!v || 'Field is required';
      }]
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getcourseInfo"]),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchScourse'])), {}, {
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.updateCourseDetails();
      }
    },
    getFileName: function getFileName(file) {
      var name = file.split('/');
      return name[name.length - 1];
    },
    getFileExt: function getFileExt(filename) {
      var split = filename.split('.');
      return split[split.length - 1];
    },
    onFileChange: function onFileChange(file) {
      //console.log('selected file', file);
      if (file != null) {
        this.ext = this.getFileExt(file.name); //console.log(this.ext);

        this.isInvalidFileSize = false;
        this.isInvalidFileType = false;

        if (file.size >= 10000000) {
          this.isInvalidFileSize = true;
          this.$refs.inputFile.value = null;
          this.toastError('File size must be less than 10MB');
        }

        if (this.ext == 'pdf' || this.ext == 'docx' || this.ext == 'doc' || this.ext == 'pptx' || this.ext == 'ppt') {} else {
          this.isInvalidFileType = true;
          this.toastError('Invalid File Type, (.pdf , .doc and  .docx  are allowed)');
          this.$refs.inputFile.value = null;
        }
      }

      this.file = file;
    },
    removeFile: function removeFile() {
      var _this = this;

      this.isDeleting = true;
      axios.put('/api/course/file-remove/' + this.$route.params.id, {
        course_guide: this.getcourseInfo.course_guide
      }).then(function (res) {
        _this.oldFileInput = false; //console.log(res);

        _this.isDeleting = false;
        _this.isRemove = true;
        _this.getcourseInfo.course_guide = null;
      })["catch"](function (e) {
        _this.toastError('Something went wrong');
      });
    },
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this2 = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this2.school_year = res.data.school_year;
        _this2.semester = res.data.semester;
        _this2.departmentsList = res.data.departments;
      });
    },
    updateCourseDetails: function updateCourseDetails() {
      var _this3 = this;

      //////console.log(this.getcourseInfo.semester_id);
      if (this.getcourseInfo.course_description.trim() == '' || this.getcourseInfo.course_name == '' || this.course_code == '' || this.getcourseInfo.semester_id === undefined || this.getcourseInfo.school_year_id === undefined) {
        this.toastError('Please complete all the field to proceed to the next step');
      } else {
        var fd = new FormData();
        fd.append('file', this.file);
        fd.append('courseItem', JSON.stringify(this.getcourseInfo));
        this.isUpdating = true;
        axios.post("/api/course/update/".concat(this.$route.params.id), fd, {
          onUploadProgress: function onUploadProgress(progressEvent) {
            var total = progressEvent.total;
            var totalLength = progressEvent.lengthComputable ? total : null;

            if (totalLength != null && _this3.$refs.inputFile != null) {
              _this3.uploadPercentage = Math.round(progressEvent.loaded * 100 / totalLength);
            }
          }
        }).then(function (res) {
          _this3.getcourseInfo.course_guide = res.data.course_guide;

          if (_this3.$refs.inputFile != null) {
            _this3.$refs.inputFile.reset();
          }

          _this3.isUpdating = false;

          _this3.$emit('changeStep', _this3.el);
        })["catch"](function (e) {
          _this3.toastError('Something went wrong!');

          _this3.isUpdating = false;
        });
      }
    }
    /*   fetchDeparmentList() {
          axios.get('/api/admin/department/all')
              .then((res) => {
                  this.departmentsList = res.data;
              })
      }, */

  }),
  mounted: function mounted() {
    this.fetchAllSchoolyear_semester();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.course_desciption .ql-editor{\n    min-height:100px;\n    max-height:450px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courseDetailsComponent.vue?vue&type=template&id=522391e7& */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&");
/* harmony import */ var _courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseDetailsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _courseDetailsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseDetailsComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/course-setup/courseDetailsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseDetailsComponent_vue_vue_type_template_id_522391e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseDetailsComponent.vue?vue&type=template&id=522391e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseDetailsComponent.vue?vue&type=template&id=522391e7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "v-row",
            { staticClass: "pl-5 pr-5" },
            [
              _c(
                "v-col",
                { staticClass: "pl-0 pb-0 pr-0", attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.rules,
                      outlined: "",
                      color: "primary",
                      label: "Course Code"
                    },
                    model: {
                      value: _vm.getcourseInfo.course_code,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "course_code", $$v)
                      },
                      expression: "getcourseInfo.course_code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0 ", attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      rules: _vm.rules,
                      outlined: "",
                      color: "primary",
                      label: "Course Title"
                    },
                    model: {
                      value: _vm.getcourseInfo.course_name,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "course_name", $$v)
                      },
                      expression: "getcourseInfo.course_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0 ", attrs: { cols: "12" } },
                [
                  _c("small", { staticClass: "text-caption" }, [
                    _vm._v("Generate google meet here: "),
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https://meet.google.com/",
                          target: "_blank"
                        }
                      },
                      [_vm._v("meet.google.com ")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      outlined: "",
                      color: "primary",
                      label: "Video Conference Link"
                    },
                    model: {
                      value: _vm.getcourseInfo.v_classroom_link,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "v_classroom_link", $$v)
                      },
                      expression: "getcourseInfo.v_classroom_link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0 ", attrs: { cols: "12" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.school_year,
                      "item-text": "schoolyear",
                      "item-value": "id",
                      label: "School Year",
                      outlined: ""
                    },
                    model: {
                      value: _vm.getcourseInfo.school_year_id,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "school_year_id", $$v)
                      },
                      expression: "getcourseInfo.school_year_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0 ", attrs: { cols: "12" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.semester,
                      "item-text": "semester",
                      "item-value": "id",
                      label: "Semester",
                      outlined: ""
                    },
                    model: {
                      value: _vm.getcourseInfo.semester_id,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "semester_id", $$v)
                      },
                      expression: "getcourseInfo.semester_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.getcourseInfo.course_guide == null
                ? _c(
                    "v-col",
                    { staticClass: "pa-0", attrs: { cols: "12" } },
                    [
                      _c("v-file-input", {
                        ref: "inputFile",
                        attrs: {
                          "show-size": "",
                          outlined: "",
                          label: "Course Guide",
                          "prepend-inner-icon": "mdi-file",
                          "prepend-icon": ""
                        },
                        on: { change: _vm.onFileChange }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0", attrs: { cols: "12" } },
                [
                  _vm.uploadPercentage != 0
                    ? _c(
                        "v-progress-linear",
                        {
                          attrs: {
                            rounded: "",
                            value: _vm.uploadPercentage,
                            height: "14px"
                          }
                        },
                        [
                          _c("span", { staticStyle: { color: "#fff" } }, [
                            _vm._v(_vm._s(_vm.uploadPercentage + "%") + " ")
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0", attrs: { cols: "12" } },
                [
                  _vm.getcourseInfo.course_guide != null
                    ? _c(
                        "v-row",
                        {
                          staticStyle: {
                            height: "55px",
                            border: "1px solid",
                            "border-radius": "4px",
                            width: "100%",
                            margin: "auto"
                          },
                          attrs: { align: "center", justify: "center" }
                        },
                        [
                          _c("vue-element-loading", {
                            attrs: {
                              active: _vm.isDeleting,
                              spinner: "bar-fade-scale"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "grow text-left py-0 pr-0" },
                            [_c("v-icon", [_vm._v("mdi-file")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticStyle: { "margin-left": "-40px" } },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "text-decoration-underline':''"
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.getFileName(
                                          _vm.getcourseInfo.course_guide
                                        )
                                      )
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "shrink d-flex py-0 shrink d-flex" },
                            [
                              _c("div", {
                                staticClass: "black--text mt-1 mr-2"
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        rounded: "",
                                        small: "",
                                        icon: "",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeFile()
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-close")])],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pa-0 ", attrs: { cols: "12" } },
                [
                  _c("editor", {
                    staticClass: "course_desciption",
                    attrs: {
                      placeholder: "Course Description",
                      theme: "bubble"
                    },
                    model: {
                      value: _vm.getcourseInfo.course_description,
                      callback: function($$v) {
                        _vm.$set(_vm.getcourseInfo, "course_description", $$v)
                      },
                      expression: "getcourseInfo.course_description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pl-0 mt-1 text-right", attrs: { cols: "12" } },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-3",
                      attrs: {
                        disabled:
                          _vm.getcourseInfo.course_description == "" ||
                          _vm.getcourseInfo.course_description == null,
                        color: "primary"
                      },
                      on: {
                        click: function($event) {
                          return _vm.validate()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.isUpdating ? "Saving.." : "Next") +
                          "\n            "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);