"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['course_name'],
  data: function data() {
    return {
      isAdding: false,
      valid: true,
      cl_id: null,
      classList: [],
      email: null,
      InviteDetails: {},
      emailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }]
    };
  },
  methods: {
    fetchClassnames: function fetchClassnames() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/class/allnames/' + _this.$route.params.id + '/' + 0).then(function (res) {
                  _this.classList = res.data;
                  _this.cl_id = _this.classList[0].class_id;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    InviteStudent: function InviteStudent() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isAdding = true;
                _this2.InviteDetails.course_id = _this2.$route.params.id;
                _this2.InviteDetails.class_id = _this2.cl_id;
                _this2.InviteDetails.course_name = _this2.course_name;
                _this2.InviteDetails.email = _this2.email;

                for (i = 0; i < _this2.classList.length; i++) {
                  if (_this2.cl_id == _this2.classList[i].class_id) {
                    _this2.InviteDetails.class_name = _this2.classList[i].class_name;
                    _this2.InviteDetails.class_code = _this2.classList[i].class_code;
                  }
                }

                axios.post('/api/teacher/invite-student', _this2.InviteDetails).then(function (res) {
                  if (res.status == 200) {
                    _this2.$emit('toggleconfirm');

                    _this2.toastSuccess("Invite successfully send");

                    _this2.isAdding = false;
                  }
                })["catch"](function (e) {
                  _this2.toastError('Something went wrong while sending invite!');

                  _this2.isAdding = false;
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    validate: function validate() {
      if (this.$refs.InviteForm.validate()) {
        this.InviteStudent();
      }
    }
  },
  mounted: function mounted() {
    this.fetchClassnames();
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addStudentDialog.vue?vue&type=template&id=7b09b730& */ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730&");
/* harmony import */ var _addStudentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addStudentDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _addStudentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__.render,
  _addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addStudentDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addStudentDialog_vue_vue_type_template_id_7b09b730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./addStudentDialog.vue?vue&type=template&id=7b09b730& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue?vue&type=template&id=7b09b730& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-form",
        {
          ref: "InviteForm",
          staticClass: "text-center",
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
          _c("v-card-title", [
            _c("span", { staticClass: "text-h5 mb-2" }, [_vm._v("Add Student")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { attrs: { "ma-0": "", "pa-0": "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
                        [
                          _c("v-select", {
                            ref: "selectClass",
                            attrs: {
                              id: "selectClass",
                              items: _vm.classList,
                              "item-text": "class_name",
                              "item-value": "class_id",
                              label: "Class",
                              outlined: ""
                            },
                            model: {
                              value: _vm.cl_id,
                              callback: function($$v) {
                                _vm.cl_id = $$v
                              },
                              expression: "cl_id"
                            }
                          })
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
                          _c("v-text-field", {
                            attrs: {
                              rules: _vm.emailRules,
                              type: "email",
                              outlined: "",
                              label: "Email",
                              hint: "Please use a working valid email"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
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
              _c("small", [
                _vm._v(
                  "For unregistered users, type email account above to send invite link through their email."
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "pb-3" },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "pl-8 pr-8",
                  attrs: { color: "primary", outlined: "", rounded: "" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("toggleCancelDialog")
                    }
                  }
                },
                [_vm._v("\r\n            Cancel\r\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "pl-12 pr-12",
                  attrs: {
                    color: "primary",
                    rounded: "",
                    loading: _vm.isAdding,
                    disabled: !_vm.valid
                  },
                  on: {
                    click: function($event) {
                      return _vm.validate()
                    }
                  }
                },
                [_vm._v("\r\n            Add\r\n            ")]
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