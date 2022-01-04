"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_people-list_studentListView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
//const removeConfirmDialog = () => import('../dialog/removeConfirmDialog')
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {//removeConfirmDialog
  },
  data: function data() {
    return {
      dialog: false,
      isloading: true,
      isGetting: true,
      search: "",
      isClassNameLoaded: false,
      classNames: [],
      Class_id: this.$route.params.id,
      RemoveDetails: {}
    };
  },
  computed: {
    getAllStudents: function getAllStudents() {
      var _this = this;

      if (this.search) {
        return this.students.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v);
          });
        });
      } else {
        return this.students;
      }
    }
  },
  methods: {
    RemoveConfirm: function RemoveConfirm(fname, lname, class_name, class_id, user_id) {
      this.RemoveDetails.name = fname + ' ' + lname;
      this.RemoveDetails.class_name = class_name;
      this.RemoveDetails.class_id = class_id;
      this.RemoveDetails.user_id = user_id;
      this.dialog = !this.dialog;
    },
    removeStudent: function removeStudent() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios["delete"]('/api/student/removeFromClass/' + _this2.RemoveDetails.class_id + '/' + _this2.RemoveDetails.user_id).then(function (res) {
                  _this2.getStudentList();

                  _this2.dialog = !_this2.dialog;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStudentList: function getStudentList() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get('/api/student/all/' + _this3.$route.params.id).then(function (res) {
                  _this3.fetchClassnames();

                  _this3.instructor = res.data.InstructorList;
                  _this3.students = res.data.StudentList;
                  _this3.isGetting = false;
                })["catch"](function (error) {////console.log(error)
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchClassnames: function fetchClassnames() {
      var _this4 = this;

      axios.get('/api/class/allnames/' + this.$route.params.id + '/' + 0).then(function (res) {
        _this4.classNames = res.data;
        _this4.isloading = false;

        _this4.classNames.push({
          class_id: _this4.$route.params.id,
          class_name: 'All Class',
          id: _this4.$route.params.id
        });
      });
    }
  },
  mounted: function mounted() {
    this.getStudentList();
    this.isloading = false;
    $('head > title').text('People');
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/studentListView.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/studentListView.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentListView.vue?vue&type=template&id=0d5ca306& */ "./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306&");
/* harmony import */ var _studentListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentListView.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _studentListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/people-list/studentListView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentListView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentListView_vue_vue_type_template_id_0d5ca306___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentListView.vue?vue&type=template&id=0d5ca306& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/studentListView.vue?vue&type=template&id=0d5ca306& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { attrs: { fluid: "" } },
        [
          _vm.isGetting
            ? _c(
                "v-container",
                { staticStyle: { height: "400px" } },
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "fill-height",
                      attrs: { "align-content": "center", justify: "center" }
                    },
                    [
                      _c("v-icon", { staticStyle: { "font-size": "14rem" } }, [
                        _vm._v(
                          "\n                    mdi-account-group\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-subtitle-1 text-center",
                          attrs: { cols: "12" }
                        },
                        [_c("h2", [_vm._v(" Getting people List ")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-progress-linear", {
                            attrs: {
                              color: "primary",
                              indeterminate: "",
                              rounded: "",
                              height: "6"
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
          !_vm.isGetting
            ? _c(
                "v-container",
                { staticClass: "mt-0", attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 mt-2 pt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("div", [
                            _c("h3", { staticClass: "font-weight-regular" }, [
                              _vm._v("Intructor")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0" },
                            _vm._l(_vm.instructor, function(item) {
                              return _c(
                                "v-list-item",
                                { key: item.user_id, staticClass: "mb-0 pb-0" },
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
                                              ? "https://ui-avatars.com/api/?background=random&color=white&name=" +
                                                (item.firstName +
                                                  " " +
                                                  item.lastName)
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
                                            _vm._s(item.lastName)
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "mt-0 mb-0", attrs: { cols: "12" } },
                        [_c("v-divider")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 mt-3 pt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("div", [
                            _c("h3", { staticClass: "font-weight-regular" }, [
                              _vm._v("Classmates")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
                        [
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0" },
                            _vm._l(_vm.students, function(item) {
                              return _c(
                                "v-list-item",
                                { key: item.user_id, staticClass: "mb-0 pb-0" },
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
                                              ? "https://ui-avatars.com/api/?background=random&color=white&name=" +
                                                (item.firstName +
                                                  " " +
                                                  item.lastName)
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
                                            _vm._s(item.lastName)
                                        )
                                      ])
                                    ],
                                    1
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