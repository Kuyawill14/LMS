"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_departments_department_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      departmentsList: [],
      header: [{
        text: 'Department Logo',
        value: 'logo',
        align: 'start'
      }, {
        text: 'Department Short Name',
        value: 'name',
        align: 'start'
      }, {
        text: 'Department Name',
        value: 'description',
        align: 'start'
      }, {
        text: 'Actions',
        sortable: false
      }],
      type: null,
      valid: true,
      dialog: false,
      Deldialog: false,
      rules: [function (v) {
        return !!v || "Field is required";
      }],
      form: new Form({
        short_name: "",
        name: "",
        logo: ''
      }),
      file: null,
      IsDeleting: false,
      deleteIndex: null,
      deleteId: null,
      isUpdateId: null,
      isUpdateIndex: null,
      isAdding: false,
      Logorules: [function (value) {
        return !value || value.size < 10000000 || 'Avatar size should be less than 10 MB!';
      }],
      isUploading: false,
      old_logo_path: null
    };
  },
  methods: {
    fetchDeparmentList: function fetchDeparmentList() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/admin/department/all').then(function (res) {
        _this.departmentsList = res.data;
      });
    },
    addDepartment: function addDepartment() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('short_name', _this2.form.short_name);
                fd.append('name', _this2.form.name);
                fd.append('logo', _this2.file);
                axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/admin/department/add', fd).then(function (res) {
                  if (res.data.success == true) {
                    _this2.departmentsList.push(res.data.new_data);

                    _this2.dialog = false;
                    _this2.isAdding = false;
                    _this2.file = null;

                    _this2.$refs.form.reset();
                  }
                })["catch"](function (err) {
                  _this2.isAdding = false;
                  _this2.file = null;

                  _this2.toastError('Something went wrong, ', err.response.data.error);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validate: function validate() {
      this.isAdding = true;

      if (this.$refs.form.validate()) {
        if (this.type == 'add') {
          this.addDepartment();
        } else if (this.type == 'edit') {
          this.UpdateDepartmentDetails();
        }
      } else {
        this.isAdding = false;
      }
    },
    deleteDepartment: function deleteDepartment() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/admin/department/delete/' + _this3.deleteId).then(function (res) {
                  if (res.data.success == true) {
                    _this3.departmentsList.splice(_this3.deleteIndex, 1);

                    _this3.Deldialog = false;
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    OpendepartmentDialog: function OpendepartmentDialog(data, index) {
      this.form.name = data.name;
      this.form.logo = data.logo;
      this.old_logo_path = data.logo;
      this.form.short_name = data.short_name;
      this.isUpdateId = data.id;
      this.isUpdateIndex = index;
      this.type = 'edit';
      this.dialog = true;
    },
    UpdateDepartmentDetails: function UpdateDepartmentDetails() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fd = new FormData();
                fd.append('short_name', _this4.form.short_name);
                fd.append('name', _this4.form.name);
                fd.append('old_logo_path', _this4.old_logo_path);
                fd.append('logo', _this4.file);
                axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/admin/department/update/' + _this4.isUpdateId, fd).then(function (res) {
                  if (res.data.success == true) {
                    _this4.departmentsList[_this4.isUpdateIndex].name = _this4.form.name;
                    _this4.departmentsList[_this4.isUpdateIndex].short_name = _this4.form.short_name;
                    _this4.departmentsList[_this4.isUpdateIndex].logo = res.data.path;
                    _this4.isAdding = false;
                    _this4.dialog = false;
                    _this4.file = null;

                    _this4.$refs.form.reset();
                  }
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onFileChange: function onFileChange(file) {
      this.form.logo = URL.createObjectURL(file);
    },
    clearData: function clearData() {
      this.dialog = false;
      this.form.logo = null;
      this.$refs.form.reset();
    }
  },
  mounted: function mounted() {
    this.fetchDeparmentList();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-input__slot {\n    margin-bottom: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/admin/departments/department.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/admin/departments/department.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.vue?vue&type=template&id=528e916a& */ "./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a&");
/* harmony import */ var _department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js&");
/* harmony import */ var _department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__.render,
  _department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/departments/department.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_528e916a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=template&id=528e916a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/departments/department.vue?vue&type=template&id=528e916a& ***!
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
    { staticClass: "pt-2" },
    [
      _c("h2", [_vm._v("\n        Manage Departments\n    ")]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-2" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { attrs: { elevation: "2" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text ml-auto",
                          attrs: {
                            color: "primary",
                            small: "",
                            align: "right"
                          },
                          on: {
                            click: function($event) {
                              ;(_vm.dialog = true), (_vm.type = "add")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Department\n                        "
                          ),
                          _c("v-icon", { attrs: { right: "", dark: "" } }, [
                            _vm._v(
                              "\n                            mdi-plus\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.header,
                      items: _vm.departmentsList,
                      "items-per-page": 5
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "body",
                        fn: function(ref) {
                          var items = ref.items
                          return [
                            _c(
                              "tbody",
                              _vm._l(items, function(item, index) {
                                return _c("tr", { key: item.id }, [
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          "max-width": "60",
                                          "max-height": "60",
                                          src: item.logo
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.short_name))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.name))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticStyle: { width: "8%" } },
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
                                                              text: "",
                                                              icon: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.OpendepartmentDialog(
                                                                  item,
                                                                  index
                                                                )
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
                                                        _c("v-icon", [
                                                          _vm._v(
                                                            "mdi-pencil-box-multiple-outline"
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
                                            true
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Edit")])
                                        ]
                                      ),
                                      _vm._v(" "),
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
                                                              text: "",
                                                              icon: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                ;(_vm.Deldialog = true),
                                                                  (_vm.deleteIndex = index),
                                                                  (_vm.deleteId =
                                                                    item.id)
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
                                                        _c("v-icon", [
                                                          _vm._v("mdi-delete")
                                                        ])
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
                                          _c("span", [_vm._v("Delete")])
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              }),
                              0
                            )
                          ]
                        }
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
          attrs: { persistent: "", width: "500" },
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
                  staticClass: "text-center ",
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
                  _c("v-card-title", {}, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          _vm.type == "add"
                            ? "Add Department"
                            : "Update Department"
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-container",
                    { staticClass: "mb-0 pb-0" },
                    [
                      _c(
                        "v-row",
                        { staticClass: "pa-5" },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 text-center",
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c(
                                "v-avatar",
                                {
                                  attrs: {
                                    tile:
                                      _vm.form.logo != null &&
                                      _vm.form.logo != "",
                                    size: "130"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.refdepartment.$refs.input.click()
                                    }
                                  }
                                },
                                [
                                  _c("v-hover", {
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var hover = ref.hover
                                          return [
                                            _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-avatar",
                                                  {
                                                    staticStyle: {
                                                      cursor: "pointer"
                                                    },
                                                    attrs: {
                                                      tile:
                                                        _vm.form.logo != null &&
                                                        _vm.form.logo != "",
                                                      color:
                                                        _vm.type == "add"
                                                          ? "#0D8ABC"
                                                          : "",
                                                      size: "130"
                                                    }
                                                  },
                                                  [
                                                    _vm.form.logo == null ||
                                                    _vm.form.logo == ""
                                                      ? _c(
                                                          "v-icon",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "4rem"
                                                            },
                                                            attrs: {
                                                              color: "white"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "mdi-cloud-upload-outline"
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "v-img",
                                                          {
                                                            attrs: {
                                                              contain: "",
                                                              alt: "Proflie",
                                                              src: _vm.form.logo
                                                            }
                                                          },
                                                          [
                                                            _vm.isUploading
                                                              ? _c(
                                                                  "v-row",
                                                                  {
                                                                    staticClass:
                                                                      "fill-height ma-0",
                                                                    attrs: {
                                                                      align:
                                                                        "center",
                                                                      justify:
                                                                        "center"
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
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-fade-transition",
                                                  [
                                                    hover
                                                      ? _c(
                                                          "v-overlay",
                                                          {
                                                            staticStyle: {
                                                              cursor: "pointer"
                                                            },
                                                            attrs: {
                                                              absolute: "",
                                                              color: "#212121"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {},
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      small: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "mdi-camera"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      !_vm.isUploading
                                                                        ? "Upload"
                                                                        : "Uploading"
                                                                    ) +
                                                                    " "
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
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
                                    ])
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-file-input", {
                                ref: "refdepartment",
                                staticClass: "d-none",
                                attrs: {
                                  outlined: "",
                                  rules: _vm.Logorules,
                                  "prepend-icon": "",
                                  accept: "image/png, image/jpeg, image/bmp",
                                  "prepend-inner-icon": "mdi-camera",
                                  label: "Department Logo"
                                },
                                on: { change: _vm.onFileChange },
                                model: {
                                  value: _vm.file,
                                  callback: function($$v) {
                                    _vm.file = $$v
                                  },
                                  expression: "file"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 mb-5",
                              attrs: { cols: "12", md: "12" }
                            },
                            [_c("h3", [_vm._v(" Department Logo")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 mb-1",
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("HasError", {
                                staticClass: "error--text",
                                attrs: { form: _vm.form, field: "short_name" }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  type: "text",
                                  rows: "1",
                                  name: "name",
                                  label: "Short Name",
                                  placeholder: "Eg. CCSICT, COC, COE , etc",
                                  "auto-grow": "",
                                  outlined: "",
                                  rules: _vm.rules
                                },
                                model: {
                                  value: _vm.form.short_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "short_name", $$v)
                                  },
                                  expression: "form.short_name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 mb-1",
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("HasError", {
                                staticClass: "error--text",
                                attrs: { form: _vm.form, field: "name" }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                staticClass: "mb-0 pb-0",
                                attrs: {
                                  type: "text",
                                  rows: "1",
                                  name: "name",
                                  rules: _vm.rules,
                                  label: "Department Name",
                                  "auto-grow": "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
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
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              return _vm.clearData()
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
                            loading: _vm.isAdding,
                            text: "",
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
                            "\n                        " +
                              _vm._s(this.type == "add" ? "Add" : "Update")
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
                      attrs: {
                        loading: _vm.IsDeleting,
                        color: "primary",
                        text: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.deleteDepartment()
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



/***/ })

}]);