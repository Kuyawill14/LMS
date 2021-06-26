(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_publishClassworkTab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var publishDialog = function publishDialog() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_tabs_dialogs_publishDialog_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialogs/publishDialog */ "./resources/js/components/Classwork_View/tabs/dialogs/publishDialog.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    publishDialog: publishDialog
  },
  data: function data() {
    return {
      classNames: [],
      isloading: true,
      dialog: false,
      Details: {},
      isPublishing: false
    };
  },
  methods: {
    OpenPublishDialog: function OpenPublishDialog(item_id, class_id, class_name, status) {
      this.isPublishing = !this.isPublishing;
      this.Details.id = item_id;
      this.Details.class_id = class_id;
      this.Details.class_name = class_name;
      this.Details.status = status;
      this.dialog = !this.dialog;
    },
    toastSuccess: function toastSuccess(class_name) {
      return this.$toasted.success("Classwork Successfully published to " + class_name, {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    shareClasswork: function shareClasswork(item_id, class_id, class_name) {
      var _this = this;

      var fd = new FormData();
      fd.append("classwork_id", item_id);
      fd.append("class_id", class_id);
      axios.post('/api/classwork/share', fd).then(function (res) {
        _this.toastSuccess(class_name);

        _this.fetchClassnames();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    closeDiaglog: function closeDiaglog() {
      this.dialog = !this.dialog, this.isPublishing = !this.isPublishing;
      this.fetchClassnames();
    },
    fetchClassnames: function fetchClassnames() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/class/allnames/' + _this2.$route.params.id).then(function (res) {
                  _this2.classNames = res.data;
                  _this2.isloading = false;
                })["catch"](function (e) {
                  console.log(e);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchClassFornotify: function fetchClassFornotify(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.dialog = !_this3.dialog, _this3.isPublishing = !_this3.isPublishing;
                axios.get('/api/class/allnames/' + _this3.$route.params.id).then(function (res) {
                  _this3.classNames = res.data;
                  _this3.isloading = false;

                  _this3.NewNotification(data);
                })["catch"](function (e) {
                  console.log(e);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    SuccessPublishNotify: function SuccessPublishNotify(data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.fetchClassFornotify(data);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    NewNotification: function NewNotification(data) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                axios.post('/api/notification/new', data).then(function (res) {});

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.fetchClassnames();
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true& */ "./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true&");
/* harmony import */ var _publishClassworkTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publishClassworkTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _publishClassworkTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "23b37223",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/publishClassworkTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publishClassworkTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./publishClassworkTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publishClassworkTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_publishClassworkTab_vue_vue_type_template_id_23b37223_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/publishClassworkTab.vue?vue&type=template&id=23b37223&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600" },
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
            ? _c("publishDialog", {
                attrs: { Details: _vm.Details },
                on: {
                  toggleDialog: function($event) {
                    ;(_vm.dialog = !_vm.dialog),
                      (_vm.isPublishing = !_vm.isPublishing)
                  },
                  successPublish: _vm.SuccessPublishNotify,
                  UnPublish: function($event) {
                    return _vm.closeDiaglog()
                  }
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.isloading
        ? _c(
            "v-container",
            { staticClass: "fill-height", staticStyle: { height: "500px" } },
            [
              _c(
                "v-row",
                { attrs: { "align-content": "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "text-subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [_vm._v("\r\n            Loading\r\n        ")]
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
      !_vm.isloading
        ? _c(
            "v-container",
            {
              staticClass: "pa-0 pa-0",
              attrs: { "pa-0": "", "ma-0": "", fluid: "" }
            },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "10", md: "10" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "elevation-5",
                          staticStyle: { "border-top": "5px solid #EF6C00" }
                        },
                        [
                          _c(
                            "v-window",
                            [
                              _c(
                                "v-window-item",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "pt-2 pl-3 pr-3",
                                          attrs: { cols: "12", md: "12" }
                                        },
                                        _vm._l(
                                          _vm.classNames.allClass,
                                          function(details, index) {
                                            return _c(
                                              "v-container",
                                              { key: index },
                                              [
                                                _c(
                                                  "v-list-item",
                                                  [
                                                    _c(
                                                      "v-list-item-avatar",
                                                      [
                                                        _c("v-icon", [
                                                          _vm._v(
                                                            "mdi-account-multiple"
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-list-item-content",
                                                      [
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                details.class_name
                                                              ) + " "
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {},
                                                      _vm._l(
                                                        _vm.classNames.check,
                                                        function(data, x) {
                                                          return _c(
                                                            "div",
                                                            { key: x },
                                                            [
                                                              data.uc_id ==
                                                                details.id &&
                                                              data.cl_id ==
                                                                _vm.$route.query
                                                                  .clwk
                                                                ? _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        loading:
                                                                          _vm.isPublishing &&
                                                                          _vm
                                                                            .Details
                                                                            .class_id ==
                                                                            details.class_id,
                                                                        color:
                                                                          "primary",
                                                                        outlined:
                                                                          data.uc_id ==
                                                                            details.id &&
                                                                          data.status ==
                                                                            false,
                                                                        rounded:
                                                                          "",
                                                                        dark: ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.OpenPublishDialog(
                                                                            _vm
                                                                              .$route
                                                                              .query
                                                                              .clwk,
                                                                            details.class_id,
                                                                            details.class_name,
                                                                            data.status
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\r\n                                                                " +
                                                                          _vm._s(
                                                                            _vm
                                                                              .$vuetify
                                                                              .breakpoint
                                                                              .xs
                                                                              ? ""
                                                                              : data.uc_id ==
                                                                                  details.id &&
                                                                                data.status ==
                                                                                  0
                                                                              ? "Publish"
                                                                              : "Unpublish"
                                                                          ) +
                                                                          "\r\n                                                            "
                                                                      ),
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "\r\n                                                                mdi-publish\r\n                                                            "
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
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-divider")
                                              ],
                                              1
                                            )
                                          }
                                        ),
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);