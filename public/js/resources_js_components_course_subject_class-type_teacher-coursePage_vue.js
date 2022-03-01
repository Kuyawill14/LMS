"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course_subject_class-type_teacher-coursePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var confirmArchiveCourse = function confirmArchiveCourse() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course_subject_class-type_dialog_confirmArchiveCourse_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/confirmArchiveCourse */ "./resources/js/components/course_subject/class-type/dialog/confirmArchiveCourse.vue"));
};

var confirmDeleteCourse = function confirmDeleteCourse() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course_subject_class-type_dialog_confirmDeleteCourse_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/confirmDeleteCourse */ "./resources/js/components/course_subject/class-type/dialog/confirmDeleteCourse.vue"));
};

var confirmCloneCourse = function confirmCloneCourse() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course_subject_class-type_dialog_confirmCloneCourse_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialog/confirmCloneCourse */ "./resources/js/components/course_subject/class-type/dialog/confirmCloneCourse.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    confirmArchiveCourse: confirmArchiveCourse,
    confirmDeleteCourse: confirmDeleteCourse,
    confirmCloneCourse: confirmCloneCourse
  },
  data: function data() {
    return {
      school_year: [],
      semester: [],
      school_year_id: 0,
      semester_id: 0,
      coursesLength: null,
      isGetting: false,
      dialog: false,
      isloading: false,
      modalType: '',
      isPageLoading: false,
      class_code: null,
      form: {
        id: '',
        course_name: '',
        course_id: '',
        class_description: '',
        course_picture: '',
        course_code: ''
      },
      cloneDetails: {},
      cloneDialog: false,
      Archivedialog: false,
      ArchiveDetails: {},
      allCoursesData: [],
      isLeaving: false,
      Coderules: [function (v) {
        return !!v || 'Course code is required';
      }],
      Namerules: [function (v) {
        return !!v || 'Course name is required';
      }],
      valid: true,
      deleteDiaglog: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['allCourse']),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchCourseList'])), {}, {
    cloneCourseConfirm: function cloneCourseConfirm(course_data) {
      this.cloneDetails = course_data;
      this.cloneDialog = !this.cloneDialog;
    },
    cloneCourse: function cloneCourse(course_data) {
      var _this = this;

      axios.post('/api/course/duplicate', {
        course_data: course_data
      }).then(function (res) {
        _this.$store.dispatch('fetchCourseList').then(function () {
          _this.allCoursesData = _this.allCourse;
          _this.coursesLength = _this.allCourse.length;
          _this.isGetting = false;

          _this.toastSuccess(course_data.name + ' have been successfully cloned');

          _this.cloneDialog = !_this.cloneDialog;
        });
      })["catch"](function (err) {
        console.log(err);

        _this.toastError('Something went wrong. Please refresh the page and please try again.');

        _this.cloneDialog = !_this.cloneDialog;
      });
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.createCourse();
      }
    },
    toastSuccess: function toastSuccess(message, icon) {
      return this.$toasted.success(message, {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 5000
      });
    },
    archiveConfirm: function archiveConfirm(name, id) {
      this.ArchiveDetails.course_id = id;
      this.ArchiveDetails.name = name;
      this.Archivedialog = !this.Archivedialog;
    },
    DeleteConfirm: function DeleteConfirm(name, id) {
      this.ArchiveDetails.course_id = id;
      this.ArchiveDetails.name = name;
      this.deleteDiaglog = !this.deleteDiaglog;
    },
    archiveCourse: function archiveCourse() {
      var _this2 = this;

      axios["delete"]('/api/course/archiveCourse/' + this.ArchiveDetails.course_id).then(function (res) {
        _this2.fetchCourses();

        _this2.Archivedialog = !_this2.Archivedialog;
      });
    },
    deleteCourse: function deleteCourse() {
      var _this3 = this;

      axios["delete"]('/api/course/delete/' + this.ArchiveDetails.course_id).then(function (res) {
        if (res.data.success == true) {
          _this3.deleteDiaglog = !_this3.deleteDiaglog;

          _this3.fetchCourses();

          _this3.toastSuccess("Successfully deleted!");
        } else {
          _this3.deleteDiaglog = !_this3.deleteDiaglog;

          _this3.toastInfo(res.data.message);
        }
      })["catch"](function (e) {
        _this3.toastError('Something went wrong while deleting the course!');

        _this3.deleteDiaglog = !_this3.deleteDiaglog;
      });
    },
    openAddmodal: function openAddmodal() {
      this.dialog = !this.dialog;
      this.form.course_name = "";
      this.form.course_code = "";
      this.modalType = "add";
    },
    openEditmodal: function openEditmodal(course_id) {
      this.dialog = !this.dialog;
      this.modalType = "update";
      var selectedCourse = this.allCourse.find(function (x) {
        return x.id === course_id;
      });
      this.form.id = course_id;
      this.form.course_name = selectedCourse.course_name;
      this.form.course_code = selectedCourse.course_code;
      this.form.course_id = selectedCourse.course_id;
    },
    createCourse: function createCourse() {
      var _this4 = this;

      this.isloading = true;

      if (this.form.course_name != "" && this.form.course_code != "") {
        this.$store.dispatch('createCourse', this.form).then(function (res) {
          _this4.dialog = false;
          var id = res.id;

          _this4.toastSuccess("Your course has been Added", 'done');

          _this4.isLeaving = true;

          _this4.$router.push({
            name: 'courseSetup',
            params: {
              id: id
            }
          });
        });
      }
    },
    connect: function connect() {
      var newVm = this;
      this.fetchCourses();
      window.Echo["private"]("newuserclass").listen('newuserclass', function (e) {
        newVm.fetchCourses();
      });
    },
    fetchCourses: function fetchCourses() {
      var _this5 = this;

      this.school_year_id = 0;
      this.semester_id = 0;
      this.isGetting = true;
      this.$store.dispatch('fetchCourseList').then(function () {
        _this5.allCoursesData = _this5.allCourse;
        _this5.coursesLength = _this5.allCourse.length;
        _this5.isGetting = false;
      });
    },
    fetchAllSchoolyear_semester: function fetchAllSchoolyear_semester() {
      var _this6 = this;

      axios.get('/api/admin/schoolyears_semesters/all').then(function (res) {
        _this6.school_year = res.data.school_year;
        _this6.semester = res.data.semester;
      });
    },
    schoolYearFilter: function schoolYearFilter() {
      var data = []; ////console.log(this.semester_id.length);

      for (var key in this.allCourse) {
        if (this.semester_id != '') {
          if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id == this.semester_id) {
            data.push(this.allCourse[key]);
          }
        } else {
          if (this.allCourse[key].school_year_id == this.school_year_id) {
            data.push(this.allCourse[key]);
          }
        }
      } ////console.log(data);


      this.allCoursesData = data;
    },
    semesterFilter: function semesterFilter() {
      var data = [];

      for (var key in this.allCourse) {
        if (this.allCourse[key].school_year_id == this.school_year_id && this.allCourse[key].semester_id == this.semester_id) {
          data.push(this.allCourse[key]);
        }
      } ////console.log(data);


      this.allCoursesData = data;
    },
    CheckBackgroundPath: function CheckBackgroundPath(path) {
      if (path != null) {
        if (path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')) {
          return path;
          var str = path.replace('.cdn', '');
          return str;
        } else {
          return '../images/' + path;
        }
      }
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch('clearClassesNames');
    this.fetchCourses();
    this.fetchAllSchoolyear_semester();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-group-row__col .fullbleed[data-v-38fc75b9] {\n    transition: all ease-in-out 0.4s !important;\n}\n.card-group-row__col:hover .fullbleed[data-v-38fc75b9] {\n    opacity: 0.4 !important;\n    transition: all ease-in-out 0.4s;\n}\n.md-card[data-v-38fc75b9] {\n    width: 320px;\n    margin: 4px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_style_index_0_id_38fc75b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_style_index_0_id_38fc75b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_style_index_0_id_38fc75b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/teacher-coursePage.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true& */ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true&");
/* harmony import */ var _teacher_coursePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-coursePage.vue?vue&type=script&lang=js& */ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _teacher_coursePage_vue_vue_type_style_index_0_id_38fc75b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& */ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _teacher_coursePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38fc75b9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course_subject/class-type/teacher-coursePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher-coursePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_style_index_0_id_38fc75b9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=style&index=0&id=38fc75b9&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacher_coursePage_vue_vue_type_template_id_38fc75b9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course_subject/class-type/teacher-coursePage.vue?vue&type=template&id=38fc75b9&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.Archivedialog,
            callback: function($$v) {
              _vm.Archivedialog = $$v
            },
            expression: "Archivedialog"
          }
        },
        [
          _vm.Archivedialog
            ? _c("confirmArchiveCourse", {
                attrs: { ArchiveDetails: _vm.ArchiveDetails },
                on: {
                  toggleCancelDialog: function($event) {
                    _vm.Archivedialog = !_vm.Archivedialog
                  },
                  toggleconfirm: function($event) {
                    return _vm.archiveCourse()
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.deleteDiaglog,
            callback: function($$v) {
              _vm.deleteDiaglog = $$v
            },
            expression: "deleteDiaglog"
          }
        },
        [
          _vm.deleteDiaglog
            ? _c("confirmDeleteCourse", {
                attrs: { ArchiveDetails: _vm.ArchiveDetails },
                on: {
                  toggleCancelDialog: function($event) {
                    _vm.deleteDiaglog = !_vm.deleteDiaglog
                  },
                  toggleconfirm: function($event) {
                    return _vm.deleteCourse()
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500" },
          model: {
            value: _vm.cloneDialog,
            callback: function($$v) {
              _vm.cloneDialog = $$v
            },
            expression: "cloneDialog"
          }
        },
        [
          _c("confirmCloneCourse", {
            attrs: { course: _vm.cloneDetails },
            on: {
              toggleCancelDialog: function($event) {
                _vm.cloneDialog = !_vm.cloneDialog
              },
              toggleconfirm: function($event) {
                return _vm.cloneCourse(_vm.cloneDetails)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.coursesLength == 0
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
                      "\n                mdi-book-variant-multiple\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h1", [_vm._v(" Create your first Course ")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      " Creating Course, you'll be able to Create Classes, manage Learning Materials, Create Quiz and\n                Assignment and etc. "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.openAddmodal()
                        }
                      }
                    },
                    [_vm._v(" CREATE COURSE ")]
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
          attrs: { persistent: "", width: "400px" },
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
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.validate()
                    }
                  },
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
                [
                  _c("vue-element-loading", {
                    attrs: { active: _vm.isloading, spinner: "bar-fade-scale" }
                  }),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _vm._v(
                      "\n                    Create Course\n                "
                    )
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
                                  rules: _vm.Coderules,
                                  filled: "",
                                  color: "primary",
                                  label: "Course Code"
                                },
                                model: {
                                  value: _vm.form.course_code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "course_code", $$v)
                                  },
                                  expression: "form.course_code"
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
                                  rules: _vm.Namerules,
                                  filled: "",
                                  color: "primary",
                                  label: "Course Name"
                                },
                                model: {
                                  value: _vm.form.course_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "course_name", $$v)
                                  },
                                  expression: "form.course_name"
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
                              ;(_vm.dialog = false),
                                _vm.$refs.form.resetValidation()
                            }
                          }
                        },
                        [_vm._v("Cancel\n                    ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            text: "",
                            disabled: _vm.isloading,
                            color: "primary",
                            type: "submit"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.isloading ? "Saving..." : "Save")
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
      ),
      _vm._v(" "),
      _vm.isGetting
        ? _c(
            "div",
            [
              _vm.isGetting
                ? _c(
                    "v-row",
                    _vm._l(4, function(n) {
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
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.coursesLength != 0 && _vm.isGetting == false
        ? _c(
            "div",
            [
              _c(
                "v-tooltip",
                {
                  attrs: { top: "" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
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
                                        return _vm.openAddmodal()
                                      }
                                    }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_c("v-icon", [_vm._v("mdi-plus")])],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2562925070
                  )
                },
                [_vm._v(" "), _c("span", [_vm._v("Add New Course")])]
              ),
              _vm._v(" "),
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
                    [_c("h2", [_vm._v("My Courses")])]
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
                          small: "",
                          disabled: _vm.school_year_id == 0
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
              _c(
                "v-row",
                { staticClass: "mt-3" },
                _vm._l(_vm.allCoursesData, function(item, i) {
                  return _c(
                    "v-col",
                    {
                      key: "course" + i,
                      staticStyle: { cursor: "pointer" },
                      attrs: { cols: "12", xl: "3", lg: "3", md: "6" }
                    },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "card-expansion" },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: { elevation: hover ? 16 : 2 }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              staticClass:
                                                "white--text grey lighten-2",
                                              attrs: {
                                                src: _vm.CheckBackgroundPath(
                                                  item.course_picture
                                                ),
                                                height: "200px",
                                                link: "",
                                                gradient:
                                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                                "aspect-ratio": "1"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.$store.dispatch(
                                                    "clearClassesNames"
                                                  ),
                                                    item.completed == 1
                                                      ? _vm.$router.push({
                                                          name: "coursePage",
                                                          params: {
                                                            id: item.id
                                                          }
                                                        })
                                                      : _vm.$router.push({
                                                          name: "courseSetup",
                                                          params: {
                                                            id: item.id
                                                          }
                                                        })
                                                }
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
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color:
                                                                    "grey lighten-5"
                                                                }
                                                              }
                                                            )
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
                                              _c(
                                                "v-menu",
                                                {
                                                  attrs: {
                                                    transition:
                                                      "slide-y-transition",
                                                    bottom: ""
                                                  },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "activator",
                                                        fn: function(ref) {
                                                          var on = ref.on
                                                          var attrs = ref.attrs
                                                          return [
                                                            _c(
                                                              "v-btn",
                                                              _vm._g(
                                                                _vm._b(
                                                                  {
                                                                    staticClass:
                                                                      "float-right",
                                                                    attrs: {
                                                                      "x-large":
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .sm ||
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs,
                                                                      icon: "",
                                                                      color:
                                                                        "white"
                                                                    }
                                                                  },
                                                                  "v-btn",
                                                                  attrs,
                                                                  false
                                                                ),
                                                                on
                                                              ),
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      "x-large":
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .sm ||
                                                                        _vm
                                                                          .$vuetify
                                                                          .breakpoint
                                                                          .xs
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                mdi-dots-vertical\n                                            "
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
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list",
                                                    { staticClass: "pa-1" },
                                                    [
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name: "settings",
                                                              params: {
                                                                id: item.id
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [_vm._v("Edit")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: { link: "" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.archiveConfirm(
                                                                item.course_name,
                                                                item.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [_vm._v("Archive")]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item",
                                                        {
                                                          attrs: { link: "" },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.cloneCourseConfirm(
                                                                item
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
                                                              _vm._v(
                                                                "Duplicate Course"
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
                                              _c("v-spacer")
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
                                                            "mt-0 pt-0 pl-0 ml-0"
                                                        },
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              staticStyle: {
                                                                "text-decoration":
                                                                  "none"
                                                              },
                                                              attrs: {
                                                                to:
                                                                  item.completed ==
                                                                  1
                                                                    ? {
                                                                        name:
                                                                          "coursePage",
                                                                        params: {
                                                                          id:
                                                                            item.id
                                                                        }
                                                                      }
                                                                    : {
                                                                        name:
                                                                          "courseSetup",
                                                                        params: {
                                                                          id:
                                                                            item.id
                                                                        }
                                                                      }
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$store.dispatch(
                                                                    "clearClassesNames"
                                                                  )
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
                                                                            {
                                                                              staticClass:
                                                                                "primary--text"
                                                                            },
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
                                                                                    "\n                                                            " +
                                                                                      _vm._s(
                                                                                        item.course_code
                                                                                      ) +
                                                                                      "\n                                                            "
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
                                                          ),
                                                          _vm._v(" "),
                                                          _c("hr"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "d-flex"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "mt-2 pl-4",
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      _vm.$store.dispatch(
                                                                        "clearClassesNames"
                                                                      ),
                                                                        item.completed ==
                                                                        1
                                                                          ? _vm.$router.push(
                                                                              {
                                                                                name:
                                                                                  "coursePage",
                                                                                params: {
                                                                                  id:
                                                                                    item.id
                                                                                }
                                                                              }
                                                                            )
                                                                          : _vm.$router.push(
                                                                              {
                                                                                name:
                                                                                  "courseSetup",
                                                                                params: {
                                                                                  id:
                                                                                    item.id
                                                                                }
                                                                              }
                                                                            )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                            " +
                                                                      _vm._s(
                                                                        item.student_count +
                                                                          " students"
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                  _c("br"),
                                                                  _vm._v(
                                                                    "\n                                            " +
                                                                      _vm._s(
                                                                        item.class_count +
                                                                          " class"
                                                                      ) +
                                                                      "\n                                        "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("v-spacer"),
                                                              _vm._v(" "),
                                                              item.join_request_count !=
                                                              0
                                                                ? _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "mt-4"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-tooltip",
                                                                        {
                                                                          attrs: {
                                                                            top:
                                                                              ""
                                                                          },
                                                                          scopedSlots: _vm._u(
                                                                            [
                                                                              {
                                                                                key:
                                                                                  "activator",
                                                                                fn: function(
                                                                                  ref
                                                                                ) {
                                                                                  var on =
                                                                                    ref.on
                                                                                  var attrs =
                                                                                    ref.attrs
                                                                                  return [
                                                                                    _c(
                                                                                      "v-badge",
                                                                                      {
                                                                                        attrs: {
                                                                                          overlap:
                                                                                            "",
                                                                                          color:
                                                                                            "red",
                                                                                          value:
                                                                                            item.join_request_count,
                                                                                          content:
                                                                                            item.join_request_count,
                                                                                          bordered:
                                                                                            "",
                                                                                          top:
                                                                                            "",
                                                                                          "offset-x":
                                                                                            "45",
                                                                                          "offset-y":
                                                                                            "17"
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-btn",
                                                                                          _vm._g(
                                                                                            _vm._b(
                                                                                              {
                                                                                                attrs: {
                                                                                                  icon:
                                                                                                    ""
                                                                                                },
                                                                                                on: {
                                                                                                  click: function(
                                                                                                    $event
                                                                                                  ) {
                                                                                                    item.completed ==
                                                                                                    1
                                                                                                      ? _vm.$router.push(
                                                                                                          {
                                                                                                            name:
                                                                                                              "Student-list",
                                                                                                            params: {
                                                                                                              id:
                                                                                                                item.id
                                                                                                            },
                                                                                                            query: {
                                                                                                              view:
                                                                                                                "join_request"
                                                                                                            }
                                                                                                          }
                                                                                                        )
                                                                                                      : ""
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              "v-btn",
                                                                                              attrs,
                                                                                              false
                                                                                            ),
                                                                                            on
                                                                                          ),
                                                                                          [
                                                                                            _c(
                                                                                              "v-icon",
                                                                                              {
                                                                                                attrs: {
                                                                                                  large:
                                                                                                    ""
                                                                                                }
                                                                                              },
                                                                                              [
                                                                                                _vm._v(
                                                                                                  "mdi-account-arrow-right-outline"
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ],
                                                                                          1
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
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            [
                                                                              _vm._v(
                                                                                "Course join request"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
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
                }),
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);