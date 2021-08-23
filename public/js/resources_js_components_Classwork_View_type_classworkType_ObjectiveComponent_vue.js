(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails', 'totalPoints', 'totalQuestion'],
  data: function data() {
    return {
      status: null,
      updateDetails: {},
      isCommenting: false,
      comment: null,
      isLoaded: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['get_CurrentUser'])),
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).format('dddd, h:mm a');
      }
    },
    start: function start() {
      if (this.totalQuestion != 0 && this.status == null) {
        this.UpdateStatus(this.classworkDetails.id);
        localStorage.removeItem(btoa('timer_time'));
        localStorage.removeItem(btoa('CurrentAnswers'));
        this.$router.push({
          name: 'quizstart',
          params: {
            id: this.$route.params.id
          },
          query: {
            clwk: this.classworkDetails.id
          }
        });
      }
    },
    checkStatus: function checkStatus() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/student/check-status/' + _this.classworkDetails.id).then(function (res) {
                  _this.status = res.data.status;
                  console.log(res.data.status);
                  _this.isLoaded = false;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    UpdateStatus: function UpdateStatus(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.updateDetails.id = id;
                _this2.updateDetails.class_classwork_id = _this2.classworkDetails.class_classwork_id;
                _this2.updateDetails.type = _this2.classworkDetails.type;
                axios.post('/api/student/update-status', _this2.updateDetails).then(function (res) {});

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addComment: function addComment(details) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = {};
                _this3.isCommenting = true;
                data.classwork_id = details.id;
                data.to_user = details.user_id;
                data.course_id = _this3.$route.params.id;
                data.comment = _this3.comment;
                axios.post('/api/post/classwork/comment/insert', data).then(function (res) {
                  console.log(res.data);

                  if (res.status == 200) {
                    _this3.classworkDetails.comments.push({
                      content: res.data.comment,
                      id: res.data.id,
                      name: res.data.name,
                      profile_pic: res.data.profile_pic
                    });

                    _this3.comment = null;
                  }
                });
                _this3.isCommenting = false;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  mounted: function mounted() {
    this.checkStatus(); //window.history.forward(1)
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectiveComponent.vue?vue&type=template&id=1835845c& */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&");
/* harmony import */ var _ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectiveComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ObjectiveComponent_vue_vue_type_template_id_1835845c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ObjectiveComponent.vue?vue&type=template&id=1835845c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue?vue&type=template&id=1835845c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "pt-5" },
    [
      _c(
        "v-row",
        { staticClass: "pa-2", attrs: { justify: "center", "no-gutters": "" } },
        [
          _c(
            "v-col",
            {
              staticClass: "mb-0 pb-0",
              attrs: { cols: "12", md: "5", lg: "4" }
            },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-3",
                  attrs: { elevation: "1", outlined: "" }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "mb-0 pb-0", attrs: { cols: "12" } },
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
                                        "v-btn",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                rounded: "",
                                                icon: "",
                                                text: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push({
                                                    name: "classwork"
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
                                            { attrs: { dark: "" } },
                                            [_vm._v("mdi-arrow-left-thick")]
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
                              _c("span", [_vm._v("Back to classworks")])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "ma-0 pa-0" },
                        [
                          _c(
                            "div",
                            { staticClass: "pt-2 pl-4 pr-4 pb-2" },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-comment")
                              ]),
                              _vm._v(
                                "Private Comments\r\n                        "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0" },
                            _vm._l(_vm.classworkDetails.comments, function(
                              item,
                              i
                            ) {
                              return _c(
                                "v-list-item",
                                { key: i, staticClass: "mb-0 pb-0" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            item.profile_pic == null ||
                                            item.profile_pic == ""
                                              ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                                item.name
                                              : "/storage/" + item.profile_pic
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.name)
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", {
                                        domProps: {
                                          innerHTML: _vm._s(item.content)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                small: "",
                                                color: "grey lighten-1"
                                              }
                                            },
                                            [_vm._v("mdi-dots-vertical")]
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
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            { staticClass: "mb-0 pb-0 mt-0 pt-0" },
                            [
                              _c(
                                "v-list-item",
                                { staticClass: "mb-0 pb-0" },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            _vm.get_CurrentUser.profile_pic ==
                                              null ||
                                            _vm.get_CurrentUser.profile_pic ==
                                              ""
                                              ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                                _vm.get_CurrentUser.firstName +
                                                " " +
                                                _vm.get_CurrentUser.lastName
                                              : "/storage/" +
                                                _vm.get_CurrentUser.profile_pic
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    { staticClass: "ma-0 pa-0" },
                                    [
                                      _c("v-textarea", {
                                        staticClass: "pa-0 mt-7",
                                        attrs: {
                                          loading: _vm.isCommenting,
                                          "prepend-avatar": "mdi-emoticon-dead",
                                          filled: "",
                                          rounded: "",
                                          dense: "",
                                          "auto-grow": "",
                                          rows: "1",
                                          "clear-icon": "mdi-close-circle",
                                          clearable: "",
                                          placeholder: "Comment",
                                          type: "text"
                                        },
                                        model: {
                                          value: _vm.comment,
                                          callback: function($$v) {
                                            _vm.comment = $$v
                                          },
                                          expression: "comment"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            loading: _vm.isCommenting,
                                            icon: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.addComment(
                                                _vm.classworkDetails
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { color: "primary" } },
                                            [_vm._v("mdi-send")]
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              class:
                _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                  ? "mt-2 pl-0 pt-2"
                  : "pt-0 pl-5",
              attrs: { cols: "12", md: "7", lg: "8" }
            },
            [
              _c("vue-element-loading", {
                attrs: { active: _vm.isLoaded, spinner: "bar-fade-scale" }
              }),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "pa-3",
                  attrs: { elevation: "1", outlined: "" }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-row", { staticStyle: { height: "4vh" } }),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-container",
                            {
                              staticClass:
                                "d-flex flex-row justify-space-between",
                              attrs: { "ma-0": "", "pa-0": "" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-2",
                                  attrs: { fab: "", dark: "", color: "primary" }
                                },
                                [
                                  _c("v-icon", { attrs: { "x-large": "" } }, [
                                    _vm._v(
                                      "\r\n                        mdi-book-open-variant\r\n                        "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "float-right mt-3",
                                  attrs: { fab: "" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "text-md-h5" },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { large: "", color: "primary" }
                                        },
                                        [_vm._v("mdi-book-clock-outline")]
                                      ),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.classworkDetails.duration
                                          ) +
                                          " mins"
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "caption ml-2" }, [
                                    _vm._v(
                                      "Due " +
                                        _vm._s(
                                          _vm.classworkDetails.availability
                                            ? _vm.format_date(
                                                _vm.classworkDetails.to_date
                                              )
                                            : "always Available"
                                        )
                                    )
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
                        { staticClass: "pl-7 pr-5", attrs: { cols: "12" } },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-sm-body-2 text-md-h5 text-lg-h6 text-xl-h6"
                            },
                            [_vm._v(_vm._s(_vm.classworkDetails.title))]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "pt-2 d-flex flex-row " }, [
                            _c(
                              "div",
                              { staticClass: "captions" },
                              [
                                _c("v-icon", [_vm._v("mdi-circle-medium")]),
                                _vm._v(_vm._s(_vm.totalQuestion) + " Question")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "captions" },
                              [
                                _c("v-icon", [_vm._v("mdi-circle-medium")]),
                                _vm._v(
                                  _vm._s(_vm.classworkDetails.points) +
                                    " Points"
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pl-10 pr-5 pb-10",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("div", { staticClass: "text-sm-body-2" }, [
                            _vm._v(
                              " " + _vm._s(_vm.classworkDetails.instruction)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pl-10 pr-5 pb-10 text-right",
                          attrs: { cols: "12" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                rounded: "",
                                color: "primary",
                                dark: _vm.totalQuestion != 0,
                                disabled: _vm.totalQuestion == 0
                              },
                              on: {
                                click: function($event) {
                                  _vm.status == null ? _vm.start() : ""
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\r\n                        " +
                                  _vm._s(
                                    _vm.status == null
                                      ? "Take Quiz"
                                      : "View Submission"
                                  )
                              ),
                              _c("v-icon", { attrs: { right: "", dark: "" } }, [
                                _vm._v("mdi-book-arrow-right-outline")
                              ])
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
                  _c("v-row", { staticStyle: { height: "5vh" } })
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