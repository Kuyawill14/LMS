"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_manage-users_manage-studentsComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isVerifying: false,
      Deldialog: false,
      ResetPassworddialog: false,
      dialog: false,
      temp_id: '',
      IsDeleting: false,
      IsAddUpdating: false,
      IsResetting: false,
      IsResetting_id: null,
      isConfirmReset: false,
      type: '',
      search: "",
      valid: true,
      role: ['Teacher', 'Student'],
      updateIndex: null,
      deleteIndex: null,
      form: new Form({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        student_id: "",
        verified: null
      }),
      studenIdRule: [function (v) {
        return !!v || 'Student Id is required';
      }],
      nameRules: [function (v) {
        return !!v || 'Field is required';
      }, function (v) {
        return v && v.length <= 20 || 'Name must be less than 20 characters';
      }],
      loginEmailRules: [function (v) {
        return !!v || "Field is required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }],
      RoleRules: [function (v) {
        return !!v || "Field is required";
      }],
      show: false,
      show1: false,
      rules: {
        required: function required(value) {
          return !!value || "Field is required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "min 6 characters";
        }
      },
      StudentList: [],
      headers: [{
        sortable: false
      }, {
        text: 'Student ID',
        value: 'student_id',
        align: 'start'
      }, {
        text: 'Last Name',
        value: 'lastName',
        align: 'start'
      }, {
        text: 'First Name',
        value: 'firstName',
        align: 'start'
      }, {
        text: 'Middle Name',
        value: 'middleName',
        align: 'start'
      }, {
        text: 'Email',
        value: 'email',
        align: 'start'
      }, {
        text: 'Verified',
        align: 'start'
      }, {
        text: 'Password Reset',
        sortable: false
      }, {
        text: 'Actions',
        sortable: false
      }],
      loading: true
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      if (this.search) {
        return this.StudentList.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v) || item.middleName.toLowerCase().includes(v) || item.student_id == null ? item.lastName.toLowerCase().includes(v) : item.student_id.toString().includes(v);
          });
        });
      } else {
        return this.StudentList;
      }
    }
  },
  methods: {
    SetPassword: function SetPassword(lastname) {
      var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
      this.form.password = 'LMS-' + tmpLastname;
      this.show = true;
    },
    openAdd: function openAdd() {
      this.type = 'add';
      this.dialog = true;
    },
    openEdit: function openEdit(details, index) {
      this.updateIndex = index;
      this.type = 'edit';
      this.dialog = true;
      this.form.user_id = details.user_id;
      this.form.firstName = details.firstName;
      this.form.middleName = details.middleName;
      this.form.lastName = details.lastName;
      this.form.email = details.email;
      this.form.student_id = details.student_id;
      this.form.verified = details.isVerified;

      if (!this.valid) {
        this.$refs.RegisterForm.resetValidation();
      }
    },
    openDelete: function openDelete(id, index) {
      this.deleteIndex = index;
      this.delId = id;
      this.Deldialog = true;
    },
    updatePass: function updatePass() {
      var _this2 = this;

      this.isConfirmReset = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/admin/teachers/reset-password/' + this.IsResetting_id).then(function (res) {
        _this2.toastSuccess(res.data);

        _this2.isConfirmReset = false;
        _this2.IsResetting = false;
        _this2.ResetPassworddialog = false;
      });
    },
    OpenupdatePassDialog: function OpenupdatePassDialog(id) {
      this.IsResetting_id = id;
      this.ResetPassworddialog = true;
      this.IsResetting = true;
    },
    deleteUser: function deleteUser() {
      var _this3 = this;

      this.IsDeleting = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/admin/teachers/remove/' + this.delId).then(function (res) {
        if (res.status == 200) {
          _this3.StudentList.splice(_this3.deleteIndex, 1);

          _this3.toastSuccess('User Successfully removed!');

          _this3.IsDeleting = false;
        } else {
          _this3.toastError('Something went wrong!');

          _this3.IsDeleting = false;
        }

        _this3.Deldialog = false;

        _this3.$store.dispatch('fetchAllTeachers');
      });
    },
    updateTeacherDetails: function updateTeacherDetails() {
      this.$store.dispatch('updateTeacher', this.form);
    },
    VerifyUser: function VerifyUser(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this4.isVerifying = true;
                axios__WEBPACK_IMPORTED_MODULE_1___default().put('/api/admin/verifyUser/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this4.form.verified = 'Verified';
                    _this4.StudentList[_this4.updateIndex].isVerified = 'Verified';

                    _this4.toastSuccess('User Successfully Verified!');

                    _this4.isVerifying = false;
                  } else {
                    _this4.toastError('Something went wrong!');

                    _this4.isVerifying = false;
                  }
                })["catch"](function (e) {
                  _this4.toastError('Something went wrong!');

                  _this4.isVerifying = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    validate: function validate() {
      var _this5 = this;

      this.IsAddUpdating = true;

      if (this.$refs.RegisterForm.validate()) {
        if (this.type == 'add') {
          this.form.role = 'Student';
          this.form.password_confirmation = this.form.password;
          this.form.post('/api/admin/add/student').then(function (res) {
            _this5.$refs.RegisterForm.reset();

            _this5.valid = true;
            _this5.dialog = false;
            _this5.IsAddUpdating = false;

            _this5.StudentList.push(res.data);
          });
        }

        if (this.type == 'edit') {
          this.form.post('/api/admin/teachers/update/' + this.form.user_id).then(function () {
            ////console.log(this.StudentList[this.updateIndex])
            _this5.updateDataInfrontEnd(_this5.form);

            _this5.valid = true;
            _this5.dialog = false;
            _this5.IsAddUpdating = false; //
          });
          this.toastSuccess('User Successfully Updated!');
        }
      } else {
        this.IsAddUpdating = false;
      }

      this.valid = false;
      this.IsAddUpdating = false;
    },
    getStudent: function getStudent() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/admin/students/all').then(function (res) {
                  _this6.StudentList = res.data;
                  _this6.loading = false;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateDataInfrontEnd: function updateDataInfrontEnd(data) {
      this.StudentList[this.updateIndex].user_id = data.user_id;
      this.StudentList[this.updateIndex].firstName = data.firstName;
      this.StudentList[this.updateIndex].middleName = data.middleName;
      this.StudentList[this.updateIndex].lastName = data.lastName;
      this.StudentList[this.updateIndex].email = data.email;
      this.StudentList[this.updateIndex].student_id = data.student_id;
      this.$refs.RegisterForm.reset();
    }
  },
  mounted: function mounted() {
    this.getStudent(); //this.$store.dispatch('fetchAllTeachers');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-studentsComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-studentsComponent.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true& */ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true&");
/* harmony import */ var _manage_studentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-studentsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _manage_studentsComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-studentsComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _manage_studentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6dfe1c9e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/manage-users/manage-studentsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-studentsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-studentsComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=style&index=1&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_studentsComponent_vue_vue_type_template_id_6dfe1c9e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-studentsComponent.vue?vue&type=template&id=6dfe1c9e&scoped=true& ***!
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
    { staticClass: "pt-4" },
    [
      _c("h2", [_vm._v("\n        Manage Students\n    ")]),
      _vm._v(" "),
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
          on: {
            click: function($event) {
              return _vm.openAdd()
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-2" },
        [
          _c(
            "v-col",
            [
              _vm.loading
                ? _c(
                    "v-card",
                    [
                      _c("v-skeleton-loader", {
                        attrs: { loading: _vm.loading, type: "table" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.loading
                ? _c(
                    "v-card",
                    { attrs: { elevation: "2" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    Students\n\n                    "
                          ),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.filteredItems,
                          "items-per-page": 10
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "body",
                              fn: function(ref) {
                                var items = ref.items
                                return [
                                  _c(
                                    "tbody",
                                    [
                                      _vm._l(items, function(item, index) {
                                        return _c("tr", { key: index }, [
                                          _c(
                                            "td",
                                            { staticStyle: { width: "1%" } },
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color:
                                                      item.isActive != 0
                                                        ? "success"
                                                        : ""
                                                  }
                                                },
                                                [_vm._v("mdi-circle-medium")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " +
                                                _vm._s(item.student_id) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " + _vm._s(item.lastName) + " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " + _vm._s(item.firstName) + " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " +
                                                _vm._s(item.middleName) +
                                                " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " + _vm._s(item.email) + " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "v-icon",
                                                {
                                                  attrs: {
                                                    color:
                                                      item.isVerified != null
                                                        ? "success"
                                                        : ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.isVerified
                                                        ? "mdi-check"
                                                        : ""
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    loading:
                                                      _vm.IsResetting &&
                                                      _vm.IsResetting_id ==
                                                        item.user_id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.OpenupdatePassDialog(
                                                        item.user_id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Reset Password\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    color: "success"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.openEdit(
                                                        item,
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      "\n                                            mdi-pencil\n                                        "
                                                    )
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    color: "red"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.openDelete(
                                                        item.user_id,
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      "\n                                            mdi-delete\n                                        "
                                                    )
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _vm.StudentList.length == 0
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-center",
                                                attrs: { colspan: "42" }
                                              },
                                              [_vm._v(" No data available")]
                                            )
                                          ])
                                        : _vm._e()
                                    ],
                                    2
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          2992225285
                        )
                      })
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
        "v-dialog",
        {
          attrs: { width: "500" },
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
                _vm._v(
                  "\n                " +
                    _vm._s(
                      this.type == "add" ? "Add Student" : "Update Student"
                    ) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-form",
                    {
                      ref: "RegisterForm",
                      staticClass: "text-center ",
                      attrs: { autocomplete: "off", "lazy-validation": "" },
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
                        { staticClass: "pa-5" },
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "ma-0 pa-0 mb-1",
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("HasError", {
                                staticClass: "error--text",
                                attrs: { form: _vm.form, field: "student_id" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.studenIdRule,
                                  label: "Student ID Number",
                                  name: "student_id",
                                  type: "number",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.student_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "student_id", $$v)
                                  },
                                  expression: "form.student_id"
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
                                attrs: { form: _vm.form, field: "firstName" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.nameRules,
                                  label: "First Name",
                                  name: "firstName",
                                  type: "text",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.firstName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "firstName", $$v)
                                  },
                                  expression: "form.firstName"
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
                                attrs: { form: _vm.form, field: "middleName" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Middle Name",
                                  rules: _vm.nameRules,
                                  name: "middleName",
                                  type: "text",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.middleName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "middleName", $$v)
                                  },
                                  expression: "form.middleName"
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
                                attrs: { form: _vm.form, field: "lastName" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Last Name",
                                  rules: _vm.nameRules,
                                  name: "lastname",
                                  type: "text",
                                  color: "primary",
                                  outlined: ""
                                },
                                on: {
                                  keyup: function($event) {
                                    return _vm.SetPassword(_vm.form.lastName)
                                  }
                                },
                                model: {
                                  value: _vm.form.lastName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "lastName", $$v)
                                  },
                                  expression: "form.lastName"
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
                                attrs: { form: _vm.form, field: "email" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email",
                                  name: "Email",
                                  rules: _vm.loginEmailRules,
                                  type: "email",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.form.verified == null && _vm.type == "edit"
                            ? _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 mb-1",
                                  attrs: { cols: "12", md: "12" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        block: "",
                                        disabled: _vm.isVerifying,
                                        rounded: "",
                                        large: "",
                                        color: "primary"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.VerifyUser(
                                            _vm.form.user_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.isVerifying
                                              ? ""
                                              : "mdi-account-check-outline"
                                          )
                                        )
                                      ]),
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.isVerifying
                                              ? "Verifying..."
                                              : "Verify user"
                                          ) +
                                          " "
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.type == "add"
                            ? _c(
                                "v-col",
                                {
                                  staticClass: "ma-0 pa-0 mb-1",
                                  attrs: { cols: "12", md: "12" }
                                },
                                [
                                  _c("HasError", {
                                    staticClass: "error--text",
                                    attrs: { form: _vm.form, field: "password" }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": _vm.show
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
                                      id: "password",
                                      label: "Password",
                                      name: "password",
                                      type: _vm.show ? "text" : "password",
                                      color: "primary",
                                      rules: [
                                        _vm.rules.required,
                                        _vm.rules.min
                                      ],
                                      counter: "",
                                      outlined: ""
                                    },
                                    on: {
                                      "click:append": function($event) {
                                        _vm.show = !_vm.show
                                      }
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password"
                                    }
                                  })
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
                          _vm.dialog = false
                          _vm.$refs.RegisterForm.reset()
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
                        loading: _vm.IsAddUpdating
                      },
                      on: {
                        click: function($event) {
                          return _vm.validate()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
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
                          _vm.$refs.RegisterForm.reset()
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
                          return _vm.deleteUser()
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.ResetPassworddialog,
            callback: function($$v) {
              _vm.ResetPassworddialog = $$v
            },
            expression: "ResetPassworddialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  "\n                Are you sure you want to reset this user password?\n            "
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
                          ;(_vm.ResetPassworddialog = false),
                            (_vm.IsResetting = false)
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
                        loading: _vm.isConfirmReset,
                        color: "primary",
                        text: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.updatePass()
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