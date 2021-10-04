"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionType_resetAllSubmission_resetStudentSub-cfe23a"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['ListData', 'ClassList'],
  data: function data() {
    return {
      student: [],
      Class: this.$route.params.id,
      selectAll: null,
      SelectedAll_submission_id: [],
      iReseting: false
    };
  },
  methods: {
    getSubmittedStudents: function getSubmittedStudents() {
      var _this = this;

      var count = 0;
      this.ListData.forEach(function (item) {
        if (item.status == 'Submitted') {
          count++;
        }

        item.Sumissionstatus = item.status == 'Submitted' ? 1 : 0;

        _this.SelectedAll_submission_id.push({
          id: item.id,
          status: item.Sumissionstatus
        });

        _this.student.push(item);
      });

      if (count == this.student.length) {
        this.selectAll = 1;
      } else {
        this.selectAll = 0;
      }
    },
    SelectAllStudent: function SelectAllStudent() {
      var _this2 = this;

      if (this.selectAll) {
        this.ListData.forEach(function (item) {
          item.Sumissionstatus = 1;

          _this2.SelectedAll_submission_id.push({
            id: item.id,
            status: item.Sumissionstatus
          });
        });
      } else {
        this.ListData.forEach(function (item) {
          item.Sumissionstatus = 0;
        });
      }
    },
    SelectData: function SelectData(status, index) {
      this.ListData[index].Sumissionstatus = status == 1 ? 0 : 1;
      this.SelectedAll_submission_id[index].Sumissionstatus = status == 1 ? 0 : 1;
    },
    ResetSubmission: function ResetSubmission() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var ResetData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.iReseting = true;
                ResetData = [];

                _this3.SelectedAll_submission_id.forEach(function (item) {
                  if (item.status == 1) {
                    ResetData.push({
                      id: item.id,
                      status: item.status
                    });
                  }
                });

                axios.post('/api/teacher/resetStudentSubmissions', ResetData).then(function (res) {
                  _this3.iReseting = false;

                  for (var i = 0; i < _this3.ListData.length; i++) {
                    for (var j = 0; j < ResetData.length; j++) {
                      if (_this3.ListData[i].id == ResetData[j].id) {
                        _this3.ListData[i].status = null;
                        _this3.ListData[i].Sumissionstatus = 0;
                      }
                    }
                  }

                  _this3.$emit("SuccessReset");
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.getSubmittedStudents();
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490& */ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490&");
/* harmony import */ var _resetStudentSubmissionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetStudentSubmissionDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _resetStudentSubmissionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__.render,
  _resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetStudentSubmissionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetStudentSubmissionDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resetStudentSubmissionDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resetStudentSubmissionDialog_vue_vue_type_template_id_19c21490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionType/resetAllSubmission/resetStudentSubmissionDialog.vue?vue&type=template&id=19c21490& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-card-title",
        [
          _c(
            "v-btn",
            {
              attrs: { large: "", icon: "", color: "secondary", text: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggleDialog")
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          ),
          _vm._v("Reset Submissions")
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        {
          staticStyle: {
            height: "550px",
            "overflow-y": "scroll",
            "overflow-x": "hidden"
          }
        },
        [
          _c(
            "v-list",
            { staticClass: "pt-0 mt-0" },
            [
              _c(
                "v-list-item",
                { staticClass: "mb-0 pb-0" },
                [
                  _c(
                    "v-list-item-icon",
                    { staticClass: "pt-4", attrs: { color: "secondary" } },
                    [
                      _c("v-select", {
                        staticClass: "mb-0 pb-0",
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "Class",
                          items: _vm.ClassList,
                          "item-text": "class_name",
                          "item-value": "class_id"
                        },
                        model: {
                          value: _vm.Class,
                          callback: function($$v) {
                            _vm.Class = $$v
                          },
                          expression: "Class"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-subtitle",
                        [
                          _c("v-list-item-title", {
                            staticClass: "font-weight-medium"
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-action", [
                    _c(
                      "div",
                      { staticClass: "d-flex" },
                      [
                        _vm._v(
                          "\n                         \n                         " +
                            _vm._s(
                              _vm.selectAll ? "Unselect all" : "Select all"
                            ) +
                            "\n                         "
                        ),
                        _c("v-checkbox", {
                          attrs: { color: "primary" },
                          on: {
                            change: function($event) {
                              return _vm.SelectAllStudent()
                            }
                          },
                          model: {
                            value: _vm.selectAll,
                            callback: function($$v) {
                              _vm.selectAll = $$v
                            },
                            expression: "selectAll"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.student, function(item, index) {
                return _c(
                  "v-list-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.Class == _vm.$route.params.id ||
                          _vm.Class == item.class_id,
                        expression:
                          "Class == $route.params.id || Class == item.class_id"
                      }
                    ],
                    key: index,
                    staticClass: "mt-0 pt-0"
                  },
                  [
                    _c(
                      "v-list-item-avatar",
                      { attrs: { color: "secondary" } },
                      [
                        _c("v-img", {
                          attrs: {
                            alt: "Profile",
                            src:
                              item.profile_pic == null || item.profile_pic == ""
                                ? "https://ui-avatars.com/api/?background=random&color=fff&name=" +
                                  item.firstName +
                                  " " +
                                  item.lastName
                                : item.profile_pic
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [
                        _c(
                          "v-list-item-subtitle",
                          [
                            _c(
                              "v-list-item-title",
                              { staticClass: "font-weight-medium" },
                              [
                                _vm._v(
                                  _vm._s(item.firstName + " " + item.lastName)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            item.status == "Submitted"
                              ? _c(
                                  "v-list-item-subtitle",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        attrs: { small: "", color: "success" }
                                      },
                                      [_vm._v("mdi-check")]
                                    ),
                                    _vm._v(" Submitted")
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
                      "v-list-item-action",
                      [
                        _c("v-checkbox", {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.SelectData(item.Sumissionstatus, index)
                            }
                          },
                          model: {
                            value: item.Sumissionstatus,
                            callback: function($$v) {
                              _vm.$set(item, "Sumissionstatus", $$v)
                            },
                            expression: "item.Sumissionstatus"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: {
                rounded: "",
                block: "",
                color: "primary",
                loading: _vm.iReseting,
                disabled: _vm.iReseting
              },
              on: {
                click: function($event) {
                  return _vm.ResetSubmission()
                }
              }
            },
            [_vm._v("\n                 Reset Submissions\n             ")]
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