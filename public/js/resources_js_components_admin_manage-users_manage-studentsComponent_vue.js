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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialog_multi_user: false,
      IsBulkadding: false,
      department: [],
      user_type: 'Student',
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
        suffix: "",
        email: "",
        password: "",
        password_confirmation: "",
        student_id: "",
        birthDay: new Date(),
        verified: null,
        department: null,
        updateIndex: null
      }),
      studenIdRule: [function (v) {
        return !!v || 'Student ID is required';
      }, function (v) {
        return v && v.length >= 6 || 'Min 6 characters';
      }, function (v) {
        return v && v.length <= 20 || 'Max 20 characters';
      }],
      nameRules: [function (v) {
        return !!v || 'Field is required';
      }, function (v) {
        return v && v.length <= 50 || 'Name must be less than 50 characters';
      }],
      loginEmailRules: [function (v) {
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
        value: 'isActive'
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
        text: 'Middle Initial',
        value: 'middleName',
        align: 'start'
      }, {
        text: 'Email',
        value: 'email',
        align: 'start'
      }, {
        text: 'Deparment',
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
      loading: true,
      json_users_file: null,
      json_users_text_area: null,
      department_id: null
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      if (this.search) {
        return this.StudentList.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v) || item.student_id.toString().includes(v);
          }); //.includes(v) : item.student_id.toString().includes(v))
        });
        /* 
                             return this.StudentList.filter((item) => {
                                return this.search.toLowerCase().split(' ').every(v => item.firstName.toLowerCase()
                                    .includes(v) || item.lastName.toLowerCase()
                                    .includes(v) || item.user_id.toString()
                                    .includes(v))
                            }) */
      } else {
        return this.StudentList;
      }
    }
  },
  methods: {
    addBulk: function addBulk() {
      var _this2 = this;

      if (this.department != null && (this.json_users_file != null || this.json_users_text_area != null)) {
        var json_users_data = this.json_users_file != null ? this.json_users_file : JSON.parse(this.json_users_text_area);
        this.IsBulkadding = true;
        axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/admin/users/bulk_add", {
          user_type: this.user_type,
          users_data: json_users_data,
          department: this.department_id
        }).then(function (response) {
          console.log(response);

          if (response.status == 200) {
            _this2.$refs.RegisterForm.reset();

            _this2.getStudent().then(function () {
              _this2.valid = true;
              _this2.dialog_multi_user = false;

              _this2.toastSuccess('User successfully Added!');

              _this2.IsBulkadding = false; // this.json_users_text_area = null;
              // this.json_users_file = null;
            });
          } else {
            _this2.IsBulkadding = false;

            _this2.toastError('Something went wrong!'); // this.$refs.RegisterForm.reset();
            // this.json_users_text_area = null;
            // this.json_users_file = null;

          }
        })["catch"](function (err) {
          _this2.IsBulkadding = false;

          _this2.toastError('Something went wrong!'); // this.$refs.RegisterForm.reset();
          // this.json_users_text_area = null;
          // this.json_users_file = null;

        });
      }
    },
    onFileChange: function onFileChange(file) {
      if (file != null) {
        this.readFile(file);
      } else {
        this.json_users_file = null;
      }
    },
    readFile: function readFile(file) {
      var _this3 = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        //  console.log(e.target.result);
        // let json = JSON.parse(e.target.result);
        // this.json_users_file = json;
        // this.json_users_ready = true;
        var lines = e.target.result.replaceAll('\r', '').split('\n'); // 1️⃣

        var header = lines[0].split(','); // 2️⃣

        var output = lines.slice(1).map(function (line) {
          var fields = line.split(','); // 3️⃣

          return Object.fromEntries(header.map(function (h, i) {
            return [h, fields[i]];
          })); // 4️⃣
        });
        _this3.json_users_file = output;
        console.log(_this3.json_users_file);
      };

      reader.readAsText(file);
    },
    openAdd_multiple_user: function openAdd_multiple_user() {
      this.dialog_multi_user = true;
    },
    fetchDeparmentList: function fetchDeparmentList() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/admin/department/all').then(function (res) {
        _this4.department = res.data;
      });
    },
    SetPassword: function SetPassword(lastname) {
      var tmpLastname = lastname.replace(/\s+/g, '-').toLowerCase();
      this.form.password = 'LMS-' + tmpLastname;
      this.show = true;
    },
    openAdd: function openAdd() {
      this.type = 'add';
      this.dialog = true;
    },
    openEdit: function openEdit(details, Dataindex) {
      console.log(Dataindex);
      this.updateIndex = Dataindex;
      this.type = 'edit';
      this.dialog = true;
      this.form.user_id = details.user_id;
      this.form.firstName = details.firstName;
      this.form.middleName = details.middleName;
      this.form.lastName = details.lastName;
      this.form.suffix = details.suffix;
      this.form.birthDay = details.birthday;
      this.form.email = details.email;
      this.form.student_id = details.student_id;
      this.form.verified = details.isVerified;
      this.form.department = details.department_id;

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
      var _this5 = this;

      this.isConfirmReset = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/admin/users/reset-password/' + this.IsResetting_id).then(function (res) {
        _this5.toastSuccess(res.data);

        _this5.isConfirmReset = false;
        _this5.IsResetting = false;
        _this5.ResetPassworddialog = false;
      });
    },
    OpenupdatePassDialog: function OpenupdatePassDialog(id) {
      this.IsResetting_id = id;
      this.ResetPassworddialog = true;
      this.IsResetting = true;
    },
    deleteUser: function deleteUser() {
      var _this6 = this;

      this.IsDeleting = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default().delete('/api/admin/users/remove/' + this.delId).then(function (res) {
        if (res.status == 200) {
          _this6.StudentList.splice(_this6.deleteIndex, 1);

          _this6.toastSuccess('User Successfully removed!');

          _this6.IsDeleting = false;
        } else {
          _this6.toastError('Something went wrong!');

          _this6.IsDeleting = false;
        }

        _this6.Deldialog = false;

        _this6.$store.dispatch('fetchAllTeachers');
      });
    },
    updateTeacherDetails: function updateTeacherDetails() {
      this.$store.dispatch('updateTeacher', this.form);
    },
    VerifyUser: function VerifyUser(id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this7.isVerifying = true;
                axios__WEBPACK_IMPORTED_MODULE_1___default().put('/api/admin/verifyUser/' + id).then(function (res) {
                  if (res.data.success == true) {
                    _this7.markAsVerify(id);

                    _this7.form.verified = 'Verified';

                    _this7.toastSuccess('User Successfully Verified!');

                    _this7.isVerifying = false;
                  } else {
                    _this7.toastError('Something went wrong!');

                    _this7.isVerifying = false;
                  }
                })["catch"](function (e) {
                  _this7.toastError('Something went wrong!');

                  _this7.isVerifying = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    markAsVerify: function markAsVerify(id) {
      this.StudentList.forEach(function (item) {
        if (id == item.user_id) {
          item.isVerified = 'Verified';
        }
      });
    },
    validate: function validate() {
      var _this8 = this;

      this.IsAddUpdating = true;

      if (this.$refs.RegisterForm.validate()) {
        if (this.type == 'add') {
          this.form.role = 'Student';
          this.form.password_confirmation = this.form.password;
          this.form.post('/api/admin/users/add/' + this.user_type).then(function (res) {
            _this8.$refs.RegisterForm.reset();

            _this8.valid = true;
            _this8.dialog = false;
            _this8.IsAddUpdating = false;

            _this8.StudentList.unshift(res.data);

            _this8.toastSuccess('User Successfully Added!');
          });
        }

        if (this.type == 'edit') {
          this.form.post('/api/admin/users/update/' + this.form.user_id).then(function () {
            //////console.log(this.StudentList[this.updateIndex])
            _this8.updateDataInfrontEnd(_this8.form);

            _this8.valid = true;
            _this8.dialog = false;
            _this8.IsAddUpdating = false;

            _this8.toastSuccess('User Successfully Updated!');
          });
        }
      } else {
        this.IsAddUpdating = false;
      }

      this.valid = false;
      this.IsAddUpdating = false;
    },
    getStudent: function getStudent() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/admin/users/all/' + _this9.user_type).then(function (res) {
                  _this9.StudentList = res.data;
                  _this9.loading = false;
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
      this.StudentList.forEach(function (item) {
        if (data.user_id == item.user_id) {
          item.user_id = data.user_id;
          item.firstName = data.firstName;
          item.middleName = data.middleName;
          item.suffix = data.suffix;
          item.birthday = data.birthDay;
          item.lastName = data.lastName;
          item.email = data.email;
          item.student_id = data.student_id;
        }
      });
      /* this.StudentList[this.updateIndex].department_short_name = data.department.short_name;
      this.StudentList[this.updateIndex].department_name = data.department.name; */

      this.$refs.RegisterForm.reset();
    }
  },
  mounted: function mounted() {
    this.fetchDeparmentList();
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
      _c(
        "v-row",
        { staticClass: "mb-0" },
        [
          _c("v-col", { attrs: { cols: "12", lg: "10" } }, [
            _c("h2", [
              _vm._v("\n                Manage Students\n            ")
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { display: "flex", "justify-content": "end" },
              attrs: { cols: "12", lg: "2" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-3",
                  attrs: { dark: "", color: "blue" },
                  on: {
                    click: function($event) {
                      return _vm.openAdd_multiple_user()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-upload")]),
                  _vm._v("\n                Import CSV\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.openAdd()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-account-plus-outline")
                  ]),
                  _vm._v("\n                Add Student\n            ")
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
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mt-0 pt-0", attrs: { cols: "12" } },
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
                              placeholder: "Student ID, Last Name",
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
                                      _vm._l(items, function(item, i) {
                                        return _c("tr", { key: item.id }, [
                                          _c(
                                            "td",
                                            { staticStyle: { width: "7%" } },
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
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  class:
                                                    item.isActive != 0
                                                      ? "success--text"
                                                      : ""
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.isActive != 0
                                                        ? "Online"
                                                        : "Oflline"
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(
                                              " " + _vm._s(item.student_id)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(" " + _vm._s(item.lastName))
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
                                          _c("td", [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  item.department_short_name
                                                ) +
                                                " "
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
                                                    "\n                                        " +
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
                                                        i
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
                                                        i
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
                          188704215
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
            { staticClass: "pa-1" },
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
                      attrs: { autocomplete: "false", "lazy-validation": "" },
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
                                  autocomplete: "false",
                                  rules: _vm.studenIdRule,
                                  label: "Student ID Number",
                                  name: "student_id",
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
                                  label: "Middle Initial",
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
                              _c("v-text-field", {
                                attrs: {
                                  label: "Birthday",
                                  "data-date": "",
                                  "data-date-format": "YYYY-MMMM-DD",
                                  rules: _vm.nameRules,
                                  name: "birthDay",
                                  type: "Date",
                                  color: "primary",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.birthDay,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "birthDay", $$v)
                                  },
                                  expression: "form.birthDay"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          this.type == "edit"
                            ? _c(
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
                            : _vm._e(),
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
                                          "\n                            "
                                      )
                                    ],
                                    1
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500", persistent: "" },
          model: {
            value: _vm.dialog_multi_user,
            callback: function($$v) {
              _vm.dialog_multi_user = $$v
            },
            expression: "dialog_multi_user"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", {}, [
                _vm._v("\n                Bulk Add Teachers\n            ")
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
                              _c("v-file-input", {
                                attrs: {
                                  accept: ".csv",
                                  "prepend-inner-icon": "mdi-file-outline",
                                  "prepend-icon": "",
                                  chips: "",
                                  outlined: "",
                                  label: "Upload CSV File",
                                  disabled: _vm.json_users_text_area != null
                                },
                                on: { change: _vm.onFileChange }
                              })
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
                          _vm.dialog_multi_user = false
                          _vm.json_users_text_area = ""
                          _vm.json_users_file = null
                        }
                      }
                    },
                    [_vm._v("Cancel\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        text: "",
                        loading: _vm.IsBulkadding,
                        disabled: _vm.IsBulkadding
                      },
                      on: {
                        click: function($event) {
                          return _vm.addBulk()
                        }
                      }
                    },
                    [_vm._v("\n                    Add Bulk")]
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