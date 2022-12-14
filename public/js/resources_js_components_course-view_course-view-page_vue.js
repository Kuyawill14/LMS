"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_course-view-page_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
var selectBackgroundDialog = function selectBackgroundDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_SelectBackgroundDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectBackgroundDialog */ "./resources/js/components/course-view/SelectBackgroundDialog.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'UserDetails'],
  components: {
    selectBackgroundDialog: selectBackgroundDialog
  },
  data: function data() {
    return {
      courseInfo: [],
      isloading: true,
      course_id: '',
      fullPage: true,
      class_id: '',
      routeName: '',
      showCard: true,
      dialog: false,
      path: window.origin + '/storage/',
      rules: [function (value) {
        return !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!';
      }],
      previewUploaded: false,
      filePreview: null,
      file: null,
      isChanging: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getcourseInfo"])), {}, {
    saveClassId: function saveClassId(id) {
      if (this.role == "Student") {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/class/selectedClass/" + id).then(function (res) {
          return res.data;
        });
      }
    }
  }),
  watch: {
    $route: function $route(to, from) {
      this.hideCard();
    }
  },
  methods: _objectSpread(_objectSpread({
    hideCard: function hideCard() {
      this.routeName = this.$route.matched[2].name;

      if (this.routeName == 'student-modules' || this.routeName == 'modules-preview' || this.routeName == 'courseSetup') {
        this.showCard = false;
      } else {
        this.showCard = true;
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchScourse'])), {}, {
    disconnect: function disconnect() {
      window.Echo.leave("post." + this.$route.params.id);
    },
    GoBackToMycourse: function GoBackToMycourse() {
      if (this.role == 'Student') {
        this.$router.push({
          path: "/c"
        });
      } else if (this.role == 'Teacher') {
        this.$router.push({
          path: "/courses"
        });
      }

      this.disconnect();
    },
    UpdateImage: function UpdateImage(data) {
      this.isChanging = false;
      this.dialog = !this.dialog;
      this.getcourseInfo.course_picture = data;
      var fd = new FormData();
      fd.append('type', "from_file");
      fd.append('course_id', this.getcourseInfo.id);
      fd.append('file_name', data);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/teacher/change_class_picture', fd).then(function () {});
    },
    onfileChange: function onfileChange(file) {
      if (file) {
        this.file = file;
        this.isChanging = true;
        this.filePreview = URL.createObjectURL(file); //this.previewUploaded = true;

        var type = "Uploaded";
        this.SaveImageAsBackground(file, type);
      }
    },
    SaveImageAsBackground: function SaveImageAsBackground(file) {
      var fd = new FormData();
      fd.append('type', "uploaded");
      fd.append('course_id', this.getcourseInfo.id);
      fd.append('file_name', this.file.name);
      fd.append('file', this.file);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/teacher/change_class_picture', fd).then(function () {});
    },
    CheckBackgroundPath: function CheckBackgroundPath(path) {
      if (path != null) {
        if (path.includes('https://orangestr.sgp1.cdn.digitaloceanspaces.com')) {
          return path;
        } else {
          return '../../images/' + path;
        }
      }
    }
  }),
  mounted: function mounted() {
    var _this = this;

    this.hideCard();
    this.isloading = true;
    this.course_id = this.$route.params.id;
    this.routeName = this.$route.matched[2].name;
    this.$store.dispatch('fetchScourse', this.course_id);
    setInterval(function () {
      return _this.isloading = false;
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.course-banner {\n    /* background-image: url(https://gstatic.com/courseroom/themes/Honors.jpg); */\n    color: #fff;\n\n    /* background-color: #1E1E1C; */\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.top-container {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    position: relative;\n}\n.ttr-wrapper {\n    min-height: 900px;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    padding-top: 59px !important;\n}\n.transparent {\n    background: transparent;\n    border: none;\n}\n.card-top {\n    color: #fff !important;\n}\n.btn_courseback {\n    background-color: transparent !important;\n\n    font-weight: bolder;\n    min-width: 6rem;\n    max-width: 50vw;\n    border-radius: 2.7rem / 100%;\n\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072);\n    transition: 0.3s;\n}\n.btn_courseback:hover {\n    background-color: #f7b205 !important;\n}\n.fullbleed-scoped-only {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #000;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./course-view-page.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/course-view-page.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/course-view/course-view-page.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-view-page.vue?vue&type=template&id=0de486c8& */ "./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8&");
/* harmony import */ var _course_view_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-view-page.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js&");
/* harmony import */ var _course_view_page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-view-page.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _course_view_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/course-view-page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./course-view-page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./course-view-page.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_view_page_vue_vue_type_template_id_0de486c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./course-view-page.vue?vue&type=template&id=0de486c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-view-page.vue?vue&type=template&id=0de486c8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _vm.showCard
        ? _c(
            "v-card",
            [
              _c(
                "v-img",
                {
                  staticClass: "white--text align-end",
                  attrs: {
                    eager: "",
                    src: !_vm.isChanging
                      ? _vm.CheckBackgroundPath(
                          _vm.getcourseInfo.course_picture
                        )
                      : _vm.filePreview,
                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                    height: "150px",
                    "aspect-ratio": "2"
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
                                staticClass: "fill-height ma-0",
                                attrs: { align: "center", justify: "center" }
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
                    false,
                    4034393411
                  )
                },
                [
                  _vm._v(" "),
                  _vm.role == "Teacher"
                    ? _c(
                        "v-app-bar",
                        { attrs: { flat: "", color: "rgba(0, 0, 0, 0)" } },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                transition: "slide-y-transition",
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
                                                staticClass: "float-right mt-4",
                                                attrs: {
                                                  icon: "",
                                                  color: "white"
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c("v-icon", [
                                              _vm._v(
                                                "\n                                mdi-dots-vertical\n                            "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                2351045127
                              )
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-list",
                                [
                                  _c(
                                    "v-list-item",
                                    {
                                      attrs: { link: "" },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = !_vm.dialog
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v("Select background")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item",
                                    {
                                      attrs: { link: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$refs.UploadBackground.$refs.input.click()
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v("Upload photo")
                                      ])
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
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-card-title", {
                    staticClass: "text-lg-h5",
                    domProps: {
                      textContent: _vm._s(
                        _vm.getcourseInfo.course_code +
                          " - " +
                          _vm.getcourseInfo.course_name
                      )
                    }
                  }),
                  _vm._v(" "),
                  _c("v-card-subtitle", { staticClass: "white--text" }, [
                    _vm._v(
                      "Instructor: " +
                        _vm._s(_vm.getcourseInfo.name) +
                        "\n\n                "
                    ),
                    _c("br"),
                    _vm._v("\n                Google Meet: "),
                    _c(
                      "a",
                      {
                        attrs: {
                          link: "",
                          href: _vm.getcourseInfo.v_classroom_link,
                          target: "_blank"
                        }
                      },
                      [_vm._v(_vm._s(_vm.getcourseInfo.v_classroom_link))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.getcourseInfo.course_guide != null
                    ? _c(
                        "v-btn",
                        {
                          staticStyle: {
                            position: "absolute",
                            "z-index": "999",
                            bottom: "15px",
                            right: "14px"
                          },
                          attrs: {
                            depressed: "",
                            color: "primary",
                            small: "",
                            target: "_blank",
                            href: _vm.path + _vm.getcourseInfo.course_guide
                          }
                        },
                        [
                          _c("v-icon", { attrs: { left: "", dark: "" } }, [
                            _vm._v(
                              "\n                        mdi-cloud-download\n                    "
                            )
                          ]),
                          _vm._v(
                            "\n                    Course Guide\n                "
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
        : _vm._e(),
      _vm._v(" "),
      _c("router-view", {
        attrs: {
          role: _vm.role,
          getcourseInfo: _vm.getcourseInfo,
          UserDetails: _vm.UserDetails
        }
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", persistent: "", "max-width": "800" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm.dialog
            ? _c("selectBackgroundDialog", {
                on: {
                  SaveSelected: _vm.UpdateImage,
                  CloseDialog: function($event) {
                    _vm.dialog = !_vm.dialog
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("v-file-input", {
        ref: "UploadBackground",
        staticClass: "d-none",
        attrs: { rules: _vm.rules, accept: "image/png, image/jpeg, image/bmp" },
        on: { change: _vm.onfileChange }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);