"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_notification_adminNotification_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      notificationType: 'all',
      notifTypeName: 'all',
      notificationList: {},
      notifLength: null,
      isSelected: null,
      currentSelectedType: null,
      AttachData: {},
      isAccepted: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["get_notification", "get_notification_count", "ShowPage", "ShowLoadMore", "LastPage", "isGetting"]),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['fetchNotification'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['fetchNotificationCount'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['ShowMore'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['ShowLess'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['LessNotificationCount'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['UnreadMessage'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['HideNotification'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['markAsReadNotification'])), {}, _defineProperty({
    test: function test(data) {
      this.testdata = data;
    },
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_1__.default)(String(value)).format("MMMM DD, h:mm a");
      }
    },
    ShowMore: function ShowMore() {
      this.$store.dispatch("ShowMore", this.ShowPage);
    },
    getNotificationList: function getNotificationList() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.$route.params.slug != _this.notifTypeName) {
                  _this.$router.replace({
                    params: {
                      slug: _this.notifTypeName
                    }
                  });
                }

                if (_this.currentSelectedType != _this.notificationType) {
                  //this.$router.replace({ params: { slug: this.notifTypeName } })
                  _this.currentSelectedType = _this.notificationType;

                  _this.$store.dispatch("fetchNotification", _this.notificationType);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    NotificationHide: function NotificationHide(id) {
      var _this2 = this;

      this.$store.dispatch("HideNotification", id).then(function (res) {
        if (res == 200) {
          _this2.get_notification.forEach(function (item) {
            if (item.n_id == id) {
              item.hide_notif = 1;
            }
          });
        }
      });
    },
    markAsread: function markAsread(id) {
      var _this3 = this;

      this.AttachData.id = id;
      this.AttachData.accepted = this.isAccepted;
      this.$store.dispatch("markAsReadNotification", this.AttachData).then(function (res) {
        ////console.log(res);
        if (res == 200) {
          _this3.get_notification.forEach(function (item) {
            if (item.n_id == id) {
              item.status = 1;

              if (_this3.isAccepted) {
                item.notification_accepted = 1;
              }
            }
          });

          _this3.$store.dispatch("LessNotificationCount");
        }
      });
    },
    markAllasRead: function markAllasRead() {
      var _this4 = this;

      axios.post('/api/notification/mark-all').then(function (res) {
        _this4.get_notification.forEach(function (item) {
          if (item.status == null) {
            item.status = 1;
          }
        });

        for (var i = 0; i < res.data; i++) {
          _this4.$store.dispatch("LessNotificationCount");
        }
      });
    }
  }, "ShowMore", function ShowMore() {
    this.AttachData.type = this.notificationType;
    this.AttachData.page = this.ShowPage;
    this.$store.dispatch("ShowMore", this.AttachData);
  })),
  mounted: function mounted() {
    //this.fetchNotification();
    this.getNotificationList();
  }
});

/***/ }),

/***/ "./resources/js/components/layout/notification/adminNotification.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layout/notification/adminNotification.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminNotification.vue?vue&type=template&id=8a354700& */ "./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700&");
/* harmony import */ var _adminNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminNotification.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _adminNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__.render,
  _adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/notification/adminNotification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminNotification_vue_vue_type_template_id_8a354700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adminNotification.vue?vue&type=template&id=8a354700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/adminNotification.vue?vue&type=template&id=8a354700& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { staticClass: "pa-0 ma-0", attrs: { flat: "", "max-height": "600" } },
        [
          _c("v-card-title", [
            _c(
              "span",
              { staticClass: "text-h6" },
              [
                _vm._v("Notifications \r\n        "),
                _c("v-icon", { attrs: { right: "" } }, [
                  _vm._v("\r\n            mdi-bell\r\n        ")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pl-2 pr-2" },
            [
              _c(
                "v-row",
                { attrs: { "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { staticClass: "pa-0 ma-0 mb-2", attrs: { cols: "12" } },
                    [_c("v-divider")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2" } },
                    [
                      _c(
                        "v-tabs",
                        {
                          attrs: {
                            "active-class": "",
                            "next-icon": "mdi-arrow-right-bold-box-outline",
                            "prev-icon": "mdi-arrow-left-bold-box-outline",
                            "show-arrows": "",
                            vertical:
                              !_vm.$vuetify.breakpoint.xs &&
                              !_vm.$vuetify.breakpoint.sm,
                            centered:
                              _vm.$vuetify.breakpoint.xs &&
                              _vm.$vuetify.breakpoint.sm
                          }
                        },
                        [
                          _c(
                            "v-tab",
                            {
                              class:
                                !_vm.$vuetify.breakpoint.xs &&
                                !_vm.$vuetify.breakpoint.sm
                                  ? "d-flex justify-start"
                                  : "",
                              on: {
                                click: function($event) {
                                  ;(_vm.notificationType = "all"),
                                    (_vm.notifTypeName = "all"),
                                    _vm.getNotificationList()
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    left:
                                      !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                 mdi-bell\r\n                "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\r\n                " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "All"
                                      : ""
                                  ) +
                                  "\r\n                \r\n            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              class:
                                !_vm.$vuetify.breakpoint.xs &&
                                !_vm.$vuetify.breakpoint.sm
                                  ? "d-flex justify-start"
                                  : "",
                              on: {
                                click: function($event) {
                                  ;(_vm.notificationType = 1),
                                    (_vm.notifTypeName = "announcement"),
                                    _vm.getNotificationList()
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    left:
                                      !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                mdi-bullhorn-outline\r\n              "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\r\n              \r\n              " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "Account Request"
                                      : ""
                                  ) +
                                  "\r\n            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              class:
                                !_vm.$vuetify.breakpoint.xs &&
                                !_vm.$vuetify.breakpoint.sm
                                  ? "d-flex justify-start"
                                  : "",
                              on: {
                                click: function($event) {
                                  ;(_vm.notificationType = 4),
                                    (_vm.notifTypeName = "classwork"),
                                    _vm.getNotificationList()
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    left:
                                      !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                mdi-book-open-variant\r\n              "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\r\n              \r\n              " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "Reset Request"
                                      : ""
                                  ) +
                                  "\r\n            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              class:
                                !_vm.$vuetify.breakpoint.xs &&
                                !_vm.$vuetify.breakpoint.sm
                                  ? "d-flex justify-start"
                                  : "",
                              on: {
                                click: function($event) {
                                  ;(_vm.notificationType = "Hidden"),
                                    (_vm.notifTypeName = "hidden"),
                                    _vm.getNotificationList()
                                }
                              }
                            },
                            [
                              _c(
                                "v-icon",
                                {
                                  attrs: {
                                    left:
                                      !_vm.$vuetify.breakpoint.xs ||
                                      !_vm.$vuetify.breakpoint.sm
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                mdi-eye-off\r\n              "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\r\n              " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "Hidden"
                                      : ""
                                  ) +
                                  "\r\n            "
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
                    { attrs: { cols: "12", md: "9" } },
                    [
                      _c(
                        "v-list",
                        [
                          _vm.isGetting
                            ? _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c(
                                        "v-row",
                                        {
                                          attrs: {
                                            "align-content": "center",
                                            justify: "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "text-subtitle-1 text-center mb-0 pb-0",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                    Loading\r\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "mt-0 pt-0",
                                              attrs: { cols: "6" }
                                            },
                                            [
                                              _c("v-progress-linear", {
                                                attrs: {
                                                  color: "primary",
                                                  indeterminate: "",
                                                  rounded: "",
                                                  height: "4"
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
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isGetting
                            ? _c(
                                "div",
                                [
                                  _vm.notifLength != 0
                                    ? _c(
                                        "v-list-item",
                                        [
                                          _c("v-list-item-content", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-space-between"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "body-1 text-uppercase"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.notifTypeName)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.get_notification_count !=
                                                  0 && !_vm.isGetting
                                                  ? _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          small: "",
                                                          color: "primary"
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.markAllasRead
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\r\n                                Mark all as read\r\n                                "
                                                        ),
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: { right: "" }
                                                          },
                                                          [_vm._v("mdi-check")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.notifLength == 0
                                    ? _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c(
                                                "v-row",
                                                {
                                                  staticClass: "mt-3",
                                                  attrs: {
                                                    align: "center",
                                                    justify: "center"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "text-center",
                                                      attrs: { cols: "12" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "2rem"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                        mdi-bell-off\r\n                                    "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          " Empty Notification  "
                                                        )
                                                      ])
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(_vm.get_notification, function(
                                    item,
                                    index
                                  ) {
                                    return _c(
                                      "v-list-item",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              _vm.notificationType == "all" ||
                                              item.notification_type ==
                                                _vm.notificationType,
                                            expression:
                                              "notificationType == 'all' || item.notification_type == notificationType"
                                          }
                                        ],
                                        key: index,
                                        attrs: { link: "" }
                                      },
                                      [
                                        _c(
                                          "v-list-item-avatar",
                                          [
                                            item.notification_type == 3 ||
                                            item.notification_type == 2
                                              ? _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      color: "blue",
                                                      large: ""
                                                    }
                                                  },
                                                  [_vm._v("mdi-account-plus")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.notification_type == 1
                                              ? _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      color: "red",
                                                      large: ""
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "mdi-bullhorn-outline"
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.notification_type == 4
                                              ? _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      color: "green",
                                                      large: ""
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      " mdi-book-open-variant"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c(
                                              "v-list-item-title",
                                              {
                                                staticClass:
                                                  "font-weight-medium"
                                              },
                                              [
                                                _c(
                                                  "v-badge",
                                                  {
                                                    attrs: {
                                                      content:
                                                        item.status == 1
                                                          ? ""
                                                          : "new",
                                                      value:
                                                        item.status == 1
                                                          ? ""
                                                          : "new",
                                                      color:
                                                        item.notification_type ==
                                                        1
                                                          ? "red"
                                                          : item.notification_type ==
                                                              3 ||
                                                            item.notification_type ==
                                                              2
                                                          ? "blue"
                                                          : item.notification_type ==
                                                            4
                                                          ? "green"
                                                          : ""
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\r\n                                " +
                                                        _vm._s(item.name) +
                                                        "   \r\n                                "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "body-2" },
                                              [
                                                _vm._v(
                                                  "\r\n                                " +
                                                    _vm._s(item.message) +
                                                    "\r\n                                 "
                                                ),
                                                item.notification_type == 3 &&
                                                item.notification_accepted == 0
                                                  ? _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "blue--text",
                                                        attrs: {
                                                          href: "",
                                                          link: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.acceptJoin(
                                                              item.notification_attachments,
                                                              item.n_id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\r\n                                Accept invite"
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.format_date(
                                                    item.created_at
                                                  )
                                                )
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-action",
                                          { staticStyle: { "z-index": "1" } },
                                          [
                                            item.status == null ||
                                            item.status == 0
                                              ? _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: { top: "" },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              item.status ==
                                                                null ||
                                                              item.status == 0
                                                                ? _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          staticStyle: {
                                                                            "z-index":
                                                                              "50"
                                                                          },
                                                                          attrs: {
                                                                            text:
                                                                              "",
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.markAsread(
                                                                                item.n_id
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
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-check"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                : _vm._e()
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
                                                    _c("span", [
                                                      _vm._v("Mark as read")
                                                    ])
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            item.status == 1
                                              ? _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: { top: "" },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              item.status == 1
                                                                ? _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          staticStyle: {
                                                                            "z-index":
                                                                              "50"
                                                                          },
                                                                          attrs: {
                                                                            text:
                                                                              "",
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.NotificationHide(
                                                                                item.n_id
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
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-close"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                : _vm._e()
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
                                                    _c("span", [
                                                      _vm._v(
                                                        "Hide notification"
                                                      )
                                                    ])
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm.LastPage != 1
                                    ? _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c(
                                                "v-row",
                                                {
                                                  attrs: {
                                                    "align-content": "center",
                                                    justify: "center"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "text-right",
                                                      attrs: { cols: "12" }
                                                    },
                                                    [
                                                      _vm.ShowLoadMore
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                rounded: "",
                                                                text: "",
                                                                color: "primary"
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.ShowMore
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Load More  "
                                                              ),
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    right: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-chevron-down"
                                                                  )
                                                                ]
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
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                2
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