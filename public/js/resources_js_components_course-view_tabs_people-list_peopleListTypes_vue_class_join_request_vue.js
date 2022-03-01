"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_class_join_request_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Class_id'],
  data: function data() {
    return {
      JoinRequestList: [],
      isLoading: true,
      selectedStudent: [],
      isSelectedAll: false,
      selectedCount: 0
    };
  },
  methods: {
    fetchJoinRequest: function fetchJoinRequest() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/teacher/fetch_student_join_request/' + _this.$route.params.id).then(function (res) {
                  _this.JoinRequestList = res.data;
                  res.data.forEach(function (item) {
                    _this.selectedStudent.push({
                      isSelected: false,
                      id: item.id
                    });
                  });
                  _this.isLoading = false;
                })["catch"](function (err) {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    AcceptJoinRequest: function AcceptJoinRequest(id, index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.put('/api/teacher/accept_student_join_request/' + id).then(function (res) {
                  if (res.status == 200 && res.data.status == 1) {
                    _this2.JoinRequestList.splice(index, 1);

                    _this2.toastSuccess(res.data.message);

                    _this2.$store.dispatch('UpdateJoinCount');

                    _this2.$store.dispatch('fetchAllStudents', _this2.$route.params.id);
                  } else if (res.status == 200 && res.data.status == 2) {
                    _this2.JoinRequestList.splice(index, 1);

                    _this2.toastInfo(res.data.message);

                    _this2.$store.dispatch('UpdateJoinCount');
                  } else {
                    _this2.toastError(res.data.message);
                  }

                  _this2.isLoading = false;
                })["catch"](function (err) {
                  _this2.toastError('Something went wrong!');
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    AcceptAllSelectedRequest: function AcceptAllSelectedRequest() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = [];

                _this3.selectedStudent.forEach(function (item) {
                  if (item.isSelected == true) {
                    data.push({
                      id: item.id
                    });
                  }
                });

                _context3.next = 4;
                return axios.put('/api/teacher/multiple_accept_student_join_request', {
                  request_id: data
                }).then(function (res) {
                  if (res.status == 200 && res.data.status == 1) {
                    for (var i = 0; i < _this3.selectedStudent.length; i++) {
                      if (_this3.selectedStudent[i].isSelected == true) {
                        _this3.JoinRequestList.splice(i, 1);

                        _this3.selectedStudent.splice(i, 1);

                        _this3.selectedCount--;
                        _this3.isSelectedAll = false;

                        _this3.$store.dispatch('UpdateJoinCount');
                      }
                    }

                    _this3.$store.dispatch('fetchAllStudents', _this3.$route.params.id);
                  }

                  _this3.isLoading = false;
                })["catch"](function (err) {//this.toastError('Something went wrong!')
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    RejectJoinRequest: function RejectJoinRequest(id, index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios["delete"]('/api/teacher/reject_student_join_request/' + id).then(function () {
                  _this4.JoinRequestList.splice(index, 1);

                  _this4.$store.dispatch('UpdateJoinCount');
                })["catch"](function (err) {
                  _this4.toastError('Something went wrong!');
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    RejectAllSelectedJoinRequest: function RejectAllSelectedJoinRequest() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = [];

                _this5.selectedStudent.forEach(function (item) {
                  if (item.isSelected == true) {
                    data.push({
                      id: item.id
                    });
                  }
                });

                _context5.next = 4;
                return axios.put('/api/teacher/multiple_reject_student_join_request', {
                  request_id: data
                }).then(function () {
                  for (var i = 0; i < _this5.selectedStudent.length; i++) {
                    if (_this5.selectedStudent[i].isSelected == true) {
                      _this5.JoinRequestList.splice(i, 1);

                      _this5.selectedStudent.splice(i, 1);

                      _this5.selectedCount--;
                      _this5.isSelectedAll = false;

                      _this5.$store.dispatch('UpdateJoinCount');
                    }
                  }
                })["catch"](function (err) {
                  _this5.toastError('Something went wrong!');
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    selectAllStudent: function selectAllStudent() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this6.isSelectedAll) {
                  _this6.selectedStudent.forEach(function (item) {
                    item.isSelected = false;
                    _this6.selectedCount--;
                  });

                  _this6.isSelectedAll = false;
                } else {
                  _this6.selectedStudent.forEach(function (item) {
                    item.isSelected = true;
                    _this6.selectedCount++;
                  });

                  _this6.isSelectedAll = true;
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    markSelect: function markSelect(check) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (check == true) _this7.selectedCount++;else _this7.selectedCount--;

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  },
  mounted: function mounted() {
    this.fetchJoinRequest();
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class_join_request.vue?vue&type=template&id=aee25fc6& */ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6&");
/* harmony import */ var _class_join_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class_join_request.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _class_join_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__.render,
  _class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_class_join_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./class_join_request.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_class_join_request_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_class_join_request_vue_vue_type_template_id_aee25fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./class_join_request.vue?vue&type=template&id=aee25fc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue?vue&type=template&id=aee25fc6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mt-2", attrs: { cols: "12 d-flex" } },
            [
              _vm._v("\n            Join Request\n            "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    disabled: _vm.selectedCount == 0,
                    color: "secondary"
                  },
                  on: {
                    click: function($event) {
                      return _vm.RejectAllSelectedJoinRequest()
                    }
                  }
                },
                [_vm._v("Reject Selected")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-2",
                  attrs: { disabled: _vm.selectedCount == 0, color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.AcceptAllSelectedRequest()
                    }
                  }
                },
                [_vm._v("Accept Selected")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-2",
                  attrs: { outlined: "", color: "primary" },
                  on: { click: _vm.selectAllStudent }
                },
                [
                  _vm._v(
                    "\n               \n                " +
                      _vm._s(
                        _vm.isSelectedAll ? "Unselect All" : "Select All"
                      ) +
                      "\n                 "
                  ),
                  _c("v-icon", { attrs: { right: "" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.isSelectedAll
                          ? "mdi-checkbox-marked"
                          : "mdi-checkbox-blank-outline"
                      ) + " "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.isLoading
            ? _c(
                "v-col",
                { staticClass: "mb-0 pb-0 mt-0 pt-0", attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    _vm._l(7, function(n) {
                      return _c(
                        "v-col",
                        {
                          key: n,
                          staticClass: "mb-0 pb-0 mt-0 pt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-skeleton-loader", {
                            attrs: {
                              "max-width": "300",
                              type: "list-item-avatar-two-line"
                            }
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
            : _vm._e(),
          _vm._v(" "),
          !_vm.isLoading
            ? _c(
                "v-col",
                { staticClass: "mb-0 pb-0 mt-0 pt-0", attrs: { cols: "12" } },
                [
                  _c(
                    "v-list",
                    { staticClass: "mb-0 pb-0" },
                    _vm._l(_vm.JoinRequestList, function(item, index) {
                      return _c(
                        "v-list-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                item.class_id == _vm.Class_id ||
                                _vm.Class_id == _vm.$route.params.id,
                              expression:
                                "item.class_id == Class_id || Class_id == $route.params.id"
                            }
                          ],
                          key: item.user_id,
                          staticClass: "mb-0 pb-0"
                        },
                        [
                          _c(
                            "v-list-item-avatar",
                            { attrs: { color: "secondary" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src:
                                    item.profile_pic == null ||
                                    item.profile_pic == ""
                                      ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                        (item.firstName + " " + item.lastName)
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
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(item.firstName) +
                                    " " +
                                    _vm._s(item.lastName) +
                                    " (" +
                                    _vm._s(item.student_id) +
                                    ")"
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(_vm._s(item.email))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            { staticClass: "pa-0 ma-0" },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex" },
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
                                                        staticClass: "mr-2",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.AcceptJoinRequest(
                                                              item.id,
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
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "blue" }
                                                      },
                                                      [_vm._v("mdi-check")]
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
                                      _c("span", [_vm._v("Accept Request")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { "nudge-top": "", top: "" },
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
                                                        staticClass: "mr-2",
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.RejectJoinRequest(
                                                              item.id,
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
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "red" }
                                                      },
                                                      [_vm._v("mdi-close")]
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
                                      _c("span", [_vm._v("Reject Request")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "pl-5 mt-1" },
                                    [
                                      _c("v-checkbox", {
                                        attrs: { "hide-details": "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.markSelect(
                                              _vm.selectedStudent[index]
                                                .isSelected
                                            )
                                          }
                                        },
                                        model: {
                                          value:
                                            _vm.selectedStudent[index]
                                              .isSelected,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.selectedStudent[index],
                                              "isSelected",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "selectedStudent[index].isSelected"
                                        }
                                      })
                                    ],
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);