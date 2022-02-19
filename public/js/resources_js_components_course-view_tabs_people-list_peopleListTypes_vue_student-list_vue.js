"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_student-list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
var removeConfirmDialog = function removeConfirmDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_dialog_removeConfirmDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/removeConfirmDialog */ "./resources/js/components/course-view/tabs/people-list/dialog/removeConfirmDialog.vue"));
};

var addStudentDialog = function addStudentDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_dialog_addStudentDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/addStudentDialog */ "./resources/js/components/course-view/tabs/people-list/dialog/addStudentDialog.vue"));
};

var moveStudentDialog = function moveStudentDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_dialog_moveStudentDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../dialog/moveStudentDialog */ "./resources/js/components/course-view/tabs/people-list/dialog/moveStudentDialog.vue"));
};

var classJoinRequest = function classJoinRequest() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_people-list_peopleListTypes_vue_class_join_request_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./class_join_request */ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/class_join_request.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    removeConfirmDialog: removeConfirmDialog,
    addStudentDialog: addStudentDialog,
    moveStudentDialog: moveStudentDialog,
    classJoinRequest: classJoinRequest
  },
  data: function data() {
    return {
      dialog: false,
      AddStudent: false,
      isloading: true,
      isGetting: true,
      isClassNameLoaded: false,
      classNames: [],
      Class_id: this.$route.params.id,
      RemoveDetails: {},
      students: null,
      classList: [],
      course_name: null,
      search: "",
      isSearching: false,
      MoveStudent: false,
      MoveDetails: null,
      isShowJoinRequest: false,
      timeout: null
    };
  },
  computed: _objectSpread({
    getAllStudents: function getAllStudents() {
      var _this = this;

      if (this.search) {
        return this.getStudentList.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v);
          });
        });
      } else {
        return this.getStudentList;
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getcourseInfo", "getcourseInfo", "getStudentList", "getClassesNames"])),
  methods: {
    RemoveConfirm: function RemoveConfirm(fname, lname, class_name, class_id, user_id) {
      this.RemoveDetails.name = fname + ' ' + lname;
      this.RemoveDetails.class_name = class_name;
      this.RemoveDetails.class_id = class_id;
      this.RemoveDetails.user_id = user_id;
      this.dialog = !this.dialog;
    },
    startSearch: function startSearch() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.isSearching = true;
                clearTimeout(_this2.timeout);
                self = _this2;
                _this2.timeout = setTimeout(function () {
                  self.isSearching = false;
                }, 1000);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    removeStudent: function removeStudent() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios["delete"]('/api/student/removeFromClass/' + _this3.RemoveDetails.class_id + '/' + _this3.RemoveDetails.user_id).then(function (res) {
                  _this3.getStudents();

                  _this3.dialog = !_this3.dialog;
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getStudents: function getStudents() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                /*  axios.get('/api/student/all/'+this.$route.params.id)
                 .then((res)=>{
                     this.students = res.data.StudentList;
                      this.isGetting = false;
                 }).catch((error)=>{
                 }) */
                _this4.$store.dispatch('fetchAllStudents', {
                  course_id: _this4.$route.params.id,
                  class_id: _this4.Class_id
                }).then(function () {
                  _this4.isGetting = false;
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchClassnames: function fetchClassnames() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                /*   axios.get('/api/class/class_list/' + this.$route.params.id).then(res => {
                      this.Class_id = res.data[0].class_id;
                      this.getStudents();
                      this.classNames = res.data;
                      this.classNames.push({ class_id: this.$route.params.id, class_name: 'All Class', id: this.$route.params.id});
                      res.data.forEach(item => {
                          this.classNames.push(item);
                      });
                      this.isloading = false;
                       
                  }) */
                if (_this5.getClassesNames.length == 0) {
                  _this5.$store.dispatch('fetchClassesNames', _this5.$route.params.id).then(function () {
                    _this5.Class_id = _this5.getClassesNames[0].class_id;
                    _this5.classNames = _this5.getClassesNames.filter(function (item) {
                      return item.class_id != _this5.$route.params.id;
                    });

                    _this5.getStudents();

                    _this5.isloading = false;
                  });
                } else {
                  _this5.Class_id = _this5.getClassesNames[0].class_id;
                  _this5.classNames = _this5.getClassesNames.filter(function (item) {
                    return item.class_id != _this5.$route.params.id;
                  });

                  _this5.getStudents();

                  _this5.isloading = false;
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    OpenaddStudentDialog: function OpenaddStudentDialog() {
      this.AddStudent = !this.AddStudent;
    },
    OpenmoveStudentDialog: function OpenmoveStudentDialog(data) {
      this.MoveStudent = !this.MoveStudent;
      this.MoveDetails = data;
    },
    trimProfile: function trimProfile(path) {
      var str = path.replace('.cdn', '');
      return str;
    }
  },
  mounted: function mounted() {
    this.fetchClassnames();
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-list.vue?vue&type=template&id=123908ac& */ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac&");
/* harmony import */ var _student_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _student_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_student_list_vue_vue_type_template_id_123908ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./student-list.vue?vue&type=template&id=123908ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/people-list/peopleListTypes.vue/student-list.vue?vue&type=template&id=123908ac& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      [
        _c(
          "v-dialog",
          {
            attrs: { persistent: "", "max-width": "400" },
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
              ? _c("removeConfirmDialog", {
                  attrs: { RemoveDetails: _vm.RemoveDetails },
                  on: {
                    toggleCancelDialog: function($event) {
                      _vm.dialog = !_vm.dialog
                    },
                    toggleconfirm: function($event) {
                      return _vm.removeStudent()
                    }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-dialog",
          {
            attrs: { persistent: "", "max-width": "450" },
            model: {
              value: _vm.AddStudent,
              callback: function($$v) {
                _vm.AddStudent = $$v
              },
              expression: "AddStudent"
            }
          },
          [
            _vm.AddStudent
              ? _c("addStudentDialog", {
                  attrs: {
                    classList: _vm.classList,
                    course_name: _vm.course_name
                  },
                  on: {
                    toggleCancelDialog: function($event) {
                      _vm.AddStudent = !_vm.AddStudent
                    },
                    toggleconfirm: function($event) {
                      _vm.AddStudent = !_vm.AddStudent
                    }
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-dialog",
          {
            attrs: { persistent: "", "max-width": "400" },
            model: {
              value: _vm.MoveStudent,
              callback: function($$v) {
                _vm.MoveStudent = $$v
              },
              expression: "MoveStudent"
            }
          },
          [
            _vm.MoveStudent
              ? _c("moveStudentDialog", {
                  attrs: { MoveDetails: _vm.MoveDetails },
                  on: {
                    toggleCancelDialog: function($event) {
                      _vm.MoveStudent = !_vm.MoveStudent
                    },
                    toggleconfirm: function($event) {
                      ;(_vm.MoveStudent = !_vm.MoveStudent), _vm.getStudents()
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mt-3", attrs: { fluid: "" } },
      [
        _c(
          "v-row",
          { staticClass: "mb-0 pb-0" },
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: " text-right d-flex",
                        attrs: { cols: "7", md: "10", lg: "10" }
                      },
                      [
                        _c(
                          "div",
                          [
                            _c("v-select", {
                              staticClass: "float-left",
                              attrs: {
                                items: _vm.classNames,
                                loading: _vm.isloading,
                                disabled: _vm.isloading,
                                "item-text": "class_name",
                                "item-value": "class_id",
                                dense: "",
                                "hide-details": "",
                                outlined: ""
                              },
                              on: {
                                change: function($event) {
                                  ;(_vm.isGetting = true), _vm.getStudents()
                                }
                              },
                              model: {
                                value: _vm.Class_id,
                                callback: function($$v) {
                                  _vm.Class_id = $$v
                                },
                                expression: "Class_id"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "mb-0 pb-0 text-right",
                        attrs: { cols: "5", md: "2", lg: "2" }
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { rounded: "", color: "primary" },
                            on: {
                              click: function($event) {
                                _vm.OpenaddStudentDialog(),
                                  (_vm.course_name =
                                    _vm.getcourseInfo.course_name)
                              }
                            }
                          },
                          [
                            _c("v-icon", { attrs: { left: "" } }, [
                              _vm._v("mdi-plus")
                            ]),
                            _vm._v("Student")
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
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-row",
          { staticClass: "mt-0 pt-0" },
          [
            _c(
              "v-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      {
                        staticClass:
                          " pl-5 mb-0 pb-0 mt-0 pt-0 d-flex justify-start",
                        attrs: { cols: "6" }
                      },
                      [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { top: "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-badge",
                                      {
                                        attrs: {
                                          "offset-x": "13",
                                          "offset-y": "25",
                                          color:
                                            _vm.getcourseInfo
                                              .join_request_count != 0 &&
                                            _vm.$route.query.view == "list"
                                              ? "red"
                                              : "",
                                          content:
                                            _vm.getcourseInfo
                                              .join_request_count != 0
                                              ? _vm.getcourseInfo
                                                  .join_request_count
                                              : ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                attrs: {
                                                  "x-large": "",
                                                  icon: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.$route.query.view ==
                                                    "list"
                                                      ? _vm.$router.replace({
                                                          query: {
                                                            view: "join_request"
                                                          }
                                                        })
                                                      : _vm.$router.replace({
                                                          query: {
                                                            view: "list"
                                                          }
                                                        })
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
                                              { attrs: { large: "" } },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.$route.query.view ==
                                                        "list"
                                                        ? "mdi-account-arrow-right-outline"
                                                        : "mdi-close"
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
                                  ]
                                }
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.query.view == "list"
                                    ? "Join Request"
                                    : "Close"
                                )
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: " mb-0 pb-0 mt-0 pt-0 d-flex justify-end",
                        attrs: { cols: "6" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex justify-end pr-3",
                            style: _vm.$vuetify.breakpoint.mdAndUp
                              ? "width: 35%"
                              : "width: 100%"
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "mb-0 pb-0",
                              attrs: {
                                dense: "",
                                "hide-details": "",
                                transition: "slide-x-transition",
                                label: "Search",
                                placeholder: "Name",
                                outlined: "",
                                "prepend-inner-icon": "mdi-magnify"
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
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.isGetting
              ? _c(
                  "v-col",
                  { staticClass: "mb-0 pb-0 mt-0 pt-0", attrs: { cols: "12" } },
                  [
                    _c(
                      "v-row",
                      _vm._l(12, function(n) {
                        return _c(
                          "v-col",
                          {
                            key: n,
                            staticClass: "mb-0 pb-0 mt-0 pt-0",
                            attrs: { cols: "12", md: "4", lg: "3" }
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
            !_vm.isGetting && _vm.$route.query.view == "list"
              ? _c(
                  "v-col",
                  { staticClass: "mb-0 pb-0 mt-0 pt-0", attrs: { cols: "12" } },
                  [
                    _c(
                      "v-row",
                      _vm._l(_vm.getAllStudents, function(item) {
                        return _c(
                          "v-col",
                          {
                            key: item.user_id,
                            staticClass: "mb-0 pb-0 mt-0 pt-0",
                            attrs: { cols: "12", md: "4", lg: "3" }
                          },
                          [
                            _c(
                              "v-list",
                              { staticClass: "mb-0 pb-0" },
                              [
                                _c(
                                  "v-list-item",
                                  { staticClass: "mb-0 pb-0" },
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
                                                  (item.firstName +
                                                    " " +
                                                    item.lastName)
                                                : _vm.trimProfile(
                                                    item.profile_pic
                                                  )
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
                                          "v-app-bar",
                                          {
                                            attrs: {
                                              flat: "",
                                              color: "rgba(0, 0, 0, 0)"
                                            }
                                          },
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-menu",
                                              {
                                                attrs: {
                                                  transition:
                                                    "slide-y-transition",
                                                  bottom: "",
                                                  left: ""
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
                                                                  staticClass:
                                                                    "float-right",
                                                                  attrs: {
                                                                    icon: "",
                                                                    color:
                                                                      "black"
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
                                                                  "\n                                                        mdi-dots-vertical\n                                                    "
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
                                                _c(
                                                  "v-list",
                                                  { attrs: { nav: "" } },
                                                  [
                                                    _c(
                                                      "v-list-item",
                                                      {
                                                        attrs: { link: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.OpenmoveStudentDialog(
                                                              item
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              "Move Student"
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-list-item",
                                                      {
                                                        attrs: { link: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.RemoveConfirm(
                                                              item.firstName,
                                                              item.lastName,
                                                              item.class_name,
                                                              item.class_id,
                                                              item.user_id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              "Remove student"
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
                      }),
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.isGetting && _vm.$route.query.view == "join_request"
              ? _c(
                  "v-col",
                  { staticClass: "mb-0 pb-0 mt-0 pt-0", attrs: { cols: "12" } },
                  [
                    _c("classJoinRequest", {
                      attrs: { Class_id: _vm.Class_id }
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);