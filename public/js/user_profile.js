"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["user_profile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['UserDetails'],
  data: function data() {
    return {
      valid: false,
      editEmail: true,
      editPhone: true,
      isSaving: false,
      Details: [],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      FieldRules: [function (v) {
        return !!v || 'Field is required';
      }],
      phoneNumberRules: [function (v) {
        return v && v.length >= 11 || 'min 11 characters';
      }, function (v) {
        return v && v.length <= 15 || 'Max 15 characters';
      }],
      StudentIdRules: [function (v) {
        return !!v || 'Student ID is required';
      }, function (v) {
        return v && v.length >= 6 || 'min 6 characters';
      }, function (v) {
        return v && v.length <= 8 || 'Max 8 characters';
      }],
      isloading: true,
      departmentsList: []
    };
  },
  methods: {
    isNumber: function isNumber(val) {
      if (isNaN(Number(val.key))) {
        return val.preventDefault();
      }
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.UpdateDetails();
      }
    },
    UpdateDetails: function UpdateDetails() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var test;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isSaving = !_this.isSaving;
                test = btoa('test123');
                axios.post('/api/profile/updateDetails', _this.UserDetails).then(function (res) {
                  _this.toastSuccess('Profile Successfully Updated');

                  _this.isSaving = !_this.isSaving;
                })["catch"](function (e) {
                  _this.toastError('Something went wrong in updating your profile!');

                  _this.isSaving = !_this.isSaving;
                });
                /*  this.$https.post('/api/profile/updateDetails', this.UserDetails)
                 .then((response) => {
                     ////console.log(response.data);
                     this.isSaving = !this.isSaving;
                 }); */

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchDeparmentList: function fetchDeparmentList() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get('/api/admin/department/all').then(function (res) {
                  _this2.departmentsList = res.data;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    var _this3 = this;

    this.fetchDeparmentList();
    setTimeout(function () {
      _this3.isloading = !_this3.isloading;
    }, 1000);
  }
});

/***/ }),

/***/ "./resources/js/components/profile/editprofile.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/profile/editprofile.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.vue?vue&type=template&id=48eb2e7e& */ "./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e&");
/* harmony import */ var _editprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _editprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/editprofile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editprofile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editprofile_vue_vue_type_template_id_48eb2e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./editprofile.vue?vue&type=template&id=48eb2e7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/editprofile.vue?vue&type=template&id=48eb2e7e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "pb-5" },
        [
          _c("v-col", { staticClass: "mb-0 pb-0", attrs: { cols: "12" } }, [
            _c(
              "div",
              {
                class: _vm.$vuetify.breakpoint.lgAndUp
                  ? "text-h6 font-weight-bold"
                  : "font-weight-bold"
              },
              [_vm._v("EDIT PROFILE")]
            )
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
            [_c("v-divider")],
            1
          ),
          _vm._v(" "),
          _vm.isloading
            ? _c(
                "v-col",
                { staticStyle: { height: "550px" }, attrs: { cols: "12" } },
                [
                  _vm.isloading
                    ? _c(
                        "v-container",
                        { staticClass: "fill-height" },
                        [
                          _c("vue-element-loading", {
                            attrs: {
                              active: _vm.isloading,
                              text: "Loading",
                              duration: "0.7",
                              textStyle: { fontSize: "20px" },
                              spinner: "line-scale",
                              color: "#EF6C00",
                              size: _vm.$vuetify.breakpoint.lgAndUp
                                ? "60"
                                : "40"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isloading
            ? _c(
                "v-col",
                { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
                [
                  _c("vue-element-loading", {
                    attrs: {
                      active: _vm.isSaving,
                      spinner: "bar-fade-scale",
                      color: "#EF6C00"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp ? "" : "mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "2" } }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "mb-0 pb-0"
                                : "mt-0 pt-0 mb-0 pb-0",
                              attrs: { cols: "12", md: "10" }
                            },
                            [
                              _c("h4", { staticClass: "mt-5" }, [
                                _vm._v("1. Personal Details")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.UserDetails.role == "Student"
                    ? _c(
                        "v-col",
                        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  class: !_vm.$vuetify.breakpoint.lgAndUp
                                    ? "mb-0 pb-0"
                                    : "mt-2",
                                  attrs: { cols: "12", md: "2" }
                                },
                                [
                                  _vm._v(
                                    "\n                       Student ID\n                   "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  class: _vm.$vuetify.breakpoint.lgAndUp
                                    ? "pb-0 mb-0"
                                    : "pb-0 mb-0 mt-0 pt-0",
                                  attrs: { cols: "12", md: "2" }
                                },
                                [
                                  _c("v-text-field", {
                                    class: _vm.$vuetify.breakpoint.lgAndUp
                                      ? ""
                                      : "ma-0 pa-0",
                                    attrs: {
                                      dense: "",
                                      rules: _vm.StudentIdRules,
                                      outlined: ""
                                    },
                                    on: { keypress: _vm.isNumber },
                                    model: {
                                      value: _vm.UserDetails.student_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.UserDetails,
                                          "student_id",
                                          $$v
                                        )
                                      },
                                      expression: "UserDetails.student_id"
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
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp
                        ? "pb-0 mb-0"
                        : "pb-0 mb-0 mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       First Name\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "pb-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  dense: "",
                                  rules: _vm.FieldRules,
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.UserDetails.firstName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "firstName", $$v)
                                  },
                                  expression: "UserDetails.firstName"
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
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp
                        ? "pb-0 mb-0"
                        : "pb-0 mb-0 mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Middle Name\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "pb-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  rules: _vm.FieldRules
                                },
                                model: {
                                  value: _vm.UserDetails.middleName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "middleName", $$v)
                                  },
                                  expression: "UserDetails.middleName"
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
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp
                        ? "pb-0 mb-0"
                        : "pb-0 mb-0 mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Last Name\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "pb-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mb-0 pb-0",
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  dense: "",
                                  type: "text",
                                  outlined: "",
                                  rules: _vm.FieldRules
                                },
                                model: {
                                  value: _vm.UserDetails.lastName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "lastName", $$v)
                                  },
                                  expression: "UserDetails.lastName"
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
                    "v-col",
                    { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Department\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "pb-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mr-2",
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  items: _vm.departmentsList,
                                  "item-text": "name",
                                  "item-value": "id",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.UserDetails.department,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "department", $$v)
                                  },
                                  expression: "UserDetails.department"
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
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp ? "" : "mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", {
                            class: _vm.$vuetify.breakpoint.lgAndUp
                              ? ""
                              : "mt-0 pt-0",
                            attrs: { cols: "12", md: "2" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? ""
                                : "mt-0 pt-0",
                              attrs: { cols: "12", md: "10" }
                            },
                            [
                              _c("h4", { staticClass: "mt-2" }, [
                                _vm._v("2. Contact")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: !_vm.$vuetify.breakpoint.lgAndUp
                                ? "mb-0 pb-0 mr-0 pr-0"
                                : "mt-2 mr-0 pr-0",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Email Address.\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "b-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "10", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? ""
                                  : "ma-0 pa-0",
                                attrs: {
                                  disabled: _vm.editEmail,
                                  rules: _vm.emailRules,
                                  dense: "",
                                  outlined: "",
                                  hint: _vm.editEmail
                                    ? ""
                                    : "Please use an active email address!"
                                },
                                model: {
                                  value: _vm.UserDetails.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "email", $$v)
                                  },
                                  expression: "UserDetails.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ml-0 pl-0 mt-1 mr-4",
                              attrs: { cols: "1" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editEmail = !_vm.editEmail
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: _vm.editEmail ? "" : "primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "mdi-" +
                                          _vm._s(
                                            _vm.editEmail
                                              ? "pencil-off-outline"
                                              : "pencil-outline"
                                          )
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
                    "v-col",
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: !_vm.$vuetify.breakpoint.lgAndUp
                                ? "mb-0 pb-0 mt-0 pt-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Phone No.\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0 mb-0",
                              attrs: { cols: "10", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "max-length": "11",
                                  dense: "",
                                  outlined: "",
                                  disabled: _vm.editPhone,
                                  hint: _vm.editPhone
                                    ? ""
                                    : "Please use an active phone number"
                                },
                                on: { keypress: _vm.isNumber },
                                model: {
                                  value: _vm.UserDetails.cp_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.UserDetails, "cp_no", $$v)
                                  },
                                  expression: "UserDetails.cp_no"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "ml-0 pl-0 mt-1 mr-4",
                              attrs: { cols: "1" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editPhone = !_vm.editPhone
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: _vm.editPhone ? "" : "primary"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "mdi-" +
                                          _vm._s(
                                            _vm.editPhone
                                              ? "pencil-off-outline"
                                              : "pencil-outline"
                                          )
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
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp ? "" : "mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", {
                            class: _vm.$vuetify.breakpoint.lgAndUp
                              ? ""
                              : "mt-0 pt-0",
                            attrs: { cols: "12", md: "2" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? ""
                                : "mt-0 pt-0",
                              attrs: { cols: "12", md: "10" }
                            },
                            [
                              _c("h4", { staticClass: "mt-5" }, [
                                _vm._v("3. Social Link")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "mt-0 pt-0 mb-0 pb-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.xs
                                ? "mb-0 pb-0"
                                : "mt-2",
                              attrs: { cols: "12", md: "2" }
                            },
                            [
                              _vm._v(
                                "\n                       Facebook\n                   "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? "pb-0 mb-0"
                                : "pb-0 mb-0 mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("v-text-field", {
                                class: _vm.$vuetify.breakpoint.lgAndUp
                                  ? "blue--text"
                                  : "ma-0 pa-0 blue--text",
                                attrs: { dense: "", outlined: "" },
                                model: {
                                  value: _vm.UserDetails.social_account,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.UserDetails,
                                      "social_account",
                                      $$v
                                    )
                                  },
                                  expression: "UserDetails.social_account"
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
                    "v-col",
                    {
                      class: _vm.$vuetify.breakpoint.lgAndUp
                        ? "mb-0 pb-5 "
                        : "mb-o pb-3 mt-0 pt-0",
                      attrs: { cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", {
                            class: _vm.$vuetify.breakpoint.xs
                              ? "mb-0 pb-0"
                              : "mt-0",
                            attrs: { cols: "12", md: "2" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              class: _vm.$vuetify.breakpoint.lgAndUp
                                ? ""
                                : "mt-0 pt-0",
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    block: !_vm.$vuetify.breakpoint.mdAndUp,
                                    color: "primary",
                                    rounded: "",
                                    loading: _vm.isSaving,
                                    dark: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.validate()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.isSaving
                                        ? "Saving..."
                                        : "Save Changes"
                                    )
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