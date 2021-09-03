"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_notification_invites_vue-_c8ea1"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _objectSpread2;



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
      isAccepted: false,
      form: new Form({
        class_code: ""
      })
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["get_invites"]),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['fetchClassInvites', 'LessInviteCount'])), {}, (_objectSpread2 = {
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
                _this.$store.dispatch("fetchClassInvites", 3);

              case 1:
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
        //console.log(res);
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
  }, _defineProperty(_objectSpread2, "ShowMore", function ShowMore() {
    this.AttachData.type = this.notificationType;
    this.AttachData.page = this.ShowPage;
    this.$store.dispatch("ShowMore", this.AttachData);
  }), _defineProperty(_objectSpread2, "acceptJoin", function acceptJoin(class_code, id, index) {
    var _this5 = this;

    this.form.class_code = class_code;
    this.$store.dispatch("joinClass", this.form).then(function (res) {
      if (res.status == 200) {
        _this5.isAccepted = true;

        _this5.toastSuccess(res.data.message);

        _this5.AttachData.id = id;
        _this5.AttachData.accepted = _this5.isAccepted;

        _this5.$store.dispatch("markAsReadNotification", _this5.AttachData);

        _this5.$store.dispatch("LessInviteCount");

        _this5.$router.push({
          name: 'announcement',
          params: {
            id: res.data.course_id
          }
        });
      } else if (res.status == 202) {
        _this5.isAccepted = true;

        _this5.toastError(res.data.message);

        _this5.AttachData.id = id;
        _this5.AttachData.accepted = _this5.isAccepted;

        _this5.$store.dispatch("markAsReadNotification", _this5.AttachData);

        _this5.$store.dispatch("LessInviteCount");

        _this5.$router.push({
          name: 'announcement',
          params: {
            id: res.data.course_id
          }
        });
      } else {
        _this5.toastError('Something went wrong while joining the class!');
      } //this.get_notification.splice(index, 1);

    });
  }), _objectSpread2)),
  mounted: function mounted() {
    //this.fetchNotification();
    this.getNotificationList();
  }
});

/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invites.vue?vue&type=template&id=66e52eb0& */ "./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&");
/* harmony import */ var _invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invites.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/notification/invites.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=template&id=66e52eb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Invites \n        "),
                _c("v-icon", { attrs: { right: "" } }, [
                  _vm._v("\n            mdi-account-plus\n        ")
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
                    { attrs: { cols: "12", md: "1" } },
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
                                  : ""
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
                                    "\n                 mdi-bell\n                "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "Invite"
                                      : ""
                                  ) +
                                  "\n                \n            "
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
                                  : ""
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
                                    "\n                 mdi-bell\n                "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    !_vm.$vuetify.breakpoint.xs &&
                                      !_vm.$vuetify.breakpoint.sm
                                      ? "Request"
                                      : ""
                                  ) +
                                  "\n            "
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
                      _c("v-list", [
                        _c(
                          "div",
                          [
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
                                                staticClass: "text-center",
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
                                                      "\n                                        mdi-bell-off\n                                    "
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
                            _vm._l(_vm.get_invites, function(item, index) {
                              return _c(
                                "v-list-item",
                                { key: index },
                                [
                                  _c(
                                    "v-list-item-avatar",
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "blue", large: "" } },
                                        [_vm._v("mdi-account-plus")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c(
                                        "v-list-item-title",
                                        { staticClass: "font-weight-medium" },
                                        [
                                          _c(
                                            "v-badge",
                                            {
                                              attrs: {
                                                content:
                                                  item.status == 1 ? "" : "new",
                                                value:
                                                  item.status == 1 ? "" : "new",
                                                color:
                                                  item.notification_type == 1
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
                                                "\n                                " +
                                                  _vm._s(item.name) +
                                                  "   \n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "body-2" }, [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(item.message) +
                                            "\n                                 "
                                        ),
                                        item.notification_type == 3 &&
                                        item.notification_accepted == 0
                                          ? _c(
                                              "a",
                                              {
                                                staticClass: "blue--text",
                                                attrs: { href: "", link: "" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.acceptJoin(
                                                      item.notification_attachments,
                                                      item.n_id,
                                                      index
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                Accept invite"
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.format_date(item.created_at)
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
                                      item.status == null || item.status == 0
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
                                                      var attrs = ref.attrs
                                                      return [
                                                        item.status == null ||
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
                                                                      text: "",
                                                                      icon: ""
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
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    "mdi-check"
                                                                  )
                                                                ])
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
                                                      var attrs = ref.attrs
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
                                                                      text: "",
                                                                      icon: ""
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
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    "mdi-close"
                                                                  )
                                                                ])
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
                                                _vm._v("Hide notification")
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
                            })
                          ],
                          2
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);