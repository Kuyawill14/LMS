"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_manage-users_manage-SecurityGuardComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user_type: 'SecurityGuard',
      Deldialog: false,
      dialog: false,
      temp_id: '',
      IsDeleting: false,
      IsAddUpdating: false,
      IsResetting: false,
      IsResetting_id: null,
      deleteIndex: null,
      type: '',
      search: "",
      valid: true,
      role: ['SecurityGuard', 'Student'],
      form: new Form({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: "",
        verified: null,
        department: null,
        birthDay: new Date(),
        suffix: ""
      }),
      nameRules: [function (v) {
        return !!v || 'Field is required';
      }, function (v) {
        return v && v.length <= 50 || 'Name must be less than 50 characters';
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
      headers: [{
        sortable: false
      }, {
        text: 'ID',
        value: 'user_id',
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
      }, // {
      //     text: 'Deparment',
      //     align: 'start',
      // },
      {
        text: 'Password Reset',
        sortable: false
      }, {
        text: 'Actions',
        sortable: false
      }],
      SecurityGuardList: [],
      loading: true,
      department: []
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getSecurityGuard", "filterSecurityGuard"])),
  methods: {
    SetPassword: function SetPassword(lastname) {
      var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
      this.form.password = 'ISU-' + tmpLastname;
      this.show = true;
    },
    openAdd: function openAdd() {
      this.type = 'add';
      this.dialog = true;
    },
    openEdit: function openEdit(user_id) {
      this.type = 'edit';
      this.dialog = true;
      var currentSecurityGuard = this.filterSecurityGuard(user_id);
      this.form.user_id = currentSecurityGuard.user_id;
      this.form.firstName = currentSecurityGuard.firstName;
      this.form.middleName = currentSecurityGuard.middleName;
      this.form.lastName = currentSecurityGuard.lastName;
      this.form.email = currentSecurityGuard.email;
      this.form.verified = currentSecurityGuard.isVerified;
      this.form.department = currentSecurityGuard.department_id;
    },
    openDelete: function openDelete(id, index) {
      this.deleteIndex = index;
      this.delId = id;
      this.Deldialog = true;
    },
    updatePass: function updatePass(id) {
      var _this = this;

      this.IsResetting_id = id;
      this.IsResetting = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/admin/users/reset-password/' + id).then(function (res) {
        _this.toastSuccess(res.data);

        _this.IsResetting = false;
      });
    },
    deleteUser: function deleteUser() {
      var _this2 = this;

      this.IsDeleting = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().delete('/api/admin/users/remove/' + this.delId).then(function (res) {
        if (res.status == 200) {
          _this2.getSecurityGuard.splice(_this2.deleteIndex, 1);

          _this2.toastSuccess('User successfully removed!');

          _this2.IsDeleting = false;
          _this2.deleteIndex = null;
        } else {
          _this2.toastError('Something went wrong!');

          _this2.IsDeleting = false;
        }

        _this2.Deldialog = false;

        _this2.$store.dispatch('fetchAllSecurityGuard');
      });
    },
    validate: function validate() {
      var _this3 = this;

      if (this.$refs.RegisterForm.validate()) {
        this.IsAddUpdating = true;

        if (this.type == 'add') {
          this.form.password_confirmation = this.form.password;
          axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/admin/users/add/".concat(this.user_type), this.form).then(function (response) {
            if (response.status == 200) {
              _this3.$refs.RegisterForm.reset();

              _this3.valid = true;
              _this3.dialog = false; //this.$store.dispatch('fetchAllSecurityGuard');

              _this3.SecurityGuardList.unshift(response.data);

              _this3.toastSuccess('User successfully Added!');

              _this3.IsAddUpdating = false;
            } else {
              _this3.IsAddUpdating = false;

              _this3.toastError('Something went wrong!');
            }
          })["catch"](function (err) {
            _this3.IsAddUpdating = false;

            _this3.toastError('Something went wrong!');
          });
        } else if (this.type == 'edit') {
          this.form.post('/api/admin/users/update/' + this.form.user_id).then(function (res) {
            if (res.status == 200) {
              _this3.$refs.RegisterForm.reset();

              _this3.valid = true;
              _this3.dialog = false;
              _this3.IsAddUpdating = false;

              _this3.$store.dispatch('fetchAllSecurityGuard').then(function (res) {
                _this3.SecurityGuardList = _this3.getSecurityGuard;
              });

              _this3.toastSuccess('User Successfully Updated!');
            } else {
              _this3.IsAddUpdating = false;

              _this3.toastError('Something went wrong!');
            }
          })["catch"](function (err) {
            _this3.IsAddUpdating = false;

            _this3.toastError('Something went wrong!');
          });
        }
      } else {
        this.IsAddUpdating = false;
        this.valid = false;
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    //    this.fetchDeparmentList();
    this.$store.dispatch('fetchAllSecurityGuard').then(function () {
      //console.log('progrram cahir data', this.getSecurityGuard);
      _this4.SecurityGuardList = _this4.getSecurityGuard;
      _this4.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true& */ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true&");
/* harmony import */ var _manage_SecurityGuardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-SecurityGuardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _manage_SecurityGuardComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _manage_SecurityGuardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f3b1b1c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-SecurityGuardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=style&index=1&lang=css&");


/***/ }),

/***/ "./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_SecurityGuardComponent_vue_vue_type_template_id_4f3b1b1c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/manage-users/manage-SecurityGuardComponent.vue?vue&type=template&id=4f3b1b1c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("\n            Manage Security Guard\n        ")]),
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
                            "\n                        Instructors\n\n                        "
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
                          items: _vm.getSecurityGuard,
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
                                              " " + _vm._s(item.user_id) + " "
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
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    disabled:
                                                      _vm.IsResetting &&
                                                      _vm.IsResetting_id ==
                                                        item.user_id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.updatePass(
                                                        item.user_id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        _vm.IsResetting &&
                                                          _vm.IsResetting_id ==
                                                            item.user_id
                                                          ? "Reseting..."
                                                          : " Reset Password"
                                                      ) +
                                                      "\n                                        "
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
                                                        item.user_id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      "\n                                                mdi-pencil\n                                            "
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
                                                      "\n                                                mdi-delete\n                                            "
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
                                      items.length == 0
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
                          187215090
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
                  "\n                    " +
                    _vm._s(
                      this.type == "add"
                        ? "Add SecurityGuard"
                        : "Update SecurityGuard"
                    ) +
                    "\n                "
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
                                attrs: { form: _vm.form, field: "lastName" }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  label: "Suffix",
                                  name: "suffix",
                                  type: "text",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.suffix,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "suffix", $$v)
                                  },
                                  expression: "form.suffix"
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
                                  autocomplete: "false",
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
                                      autocomplete: "off",
                                      "append-icon": _vm.show
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
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
                      attrs: { text: "", color: "primary" },
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
                        loading: _vm.IsAddUpdating,
                        disabled: _vm.IsAddUpdating
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
                  "\n                    Are you sure you want to delete this?\n                "
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
                    [
                      _vm._v(
                        "\n                        No\n                    "
                      )
                    ]
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
                    [
                      _vm._v(
                        "\n                        Yes\n                    "
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