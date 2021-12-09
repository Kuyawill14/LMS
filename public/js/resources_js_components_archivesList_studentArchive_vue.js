"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_archivesList_studentArchive_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
var confirmRestore = function confirmRestore() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_archivesList_dialogs_confirmRestore_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./dialogs/confirmRestore */ "./resources/js/components/archivesList/dialogs/confirmRestore.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'UserDetails'],
  components: {
    confirmRestore: confirmRestore
  },
  data: function data() {
    return {
      tab: null,
      imageFile: '',
      Details: null,
      loading: false,
      isloading: true,
      message: null,
      type: null,
      ArchiveClasses: [],
      restoreDialog: false,
      restoreDetails: {}
    };
  },
  methods: {
    restoreClass: function restoreClass() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.put('/api/archive/student-restore-class/' + _this.restoreDetails.id).then(function () {
                  _this.ArchiveClasses.splice(_this.restoreDetails.index, 1);

                  _this.restoreDialog = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchClass: function fetchClass() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isGetting = true;
                _context2.next = 3;
                return axios.get('/api/archive/classes').then(function (res) {
                  _this2.ArchiveClasses = res.data;
                  _this2.classLength = res.data.length;
                  _this2.isloading = false;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.fetchClass();
  }
});

/***/ }),

/***/ "./resources/js/components/archivesList/studentArchive.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/archivesList/studentArchive.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentArchive.vue?vue&type=template&id=5ec36528& */ "./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528&");
/* harmony import */ var _studentArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentArchive.vue?vue&type=script&lang=js& */ "./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _studentArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/archivesList/studentArchive.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentArchive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentArchive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentArchive_vue_vue_type_template_id_5ec36528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentArchive.vue?vue&type=template&id=5ec36528& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/archivesList/studentArchive.vue?vue&type=template&id=5ec36528& ***!
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
      _c("h2", [_vm._v("Archive Courses")]),
      _vm._v(" "),
      _vm.isloading
        ? _c(
            "v-row",
            _vm._l(4, function(n) {
              return _c(
                "v-col",
                {
                  key: n,
                  attrs: {
                    height: _vm.$vuetify.breakpoint.lgAndUp ? 200 : 140,
                    cols: "12",
                    xl: "3",
                    lg: "3",
                    md: "6"
                  }
                },
                [
                  _c("v-skeleton-loader", { attrs: { type: "image, article" } })
                ],
                1
              )
            }),
            1
          )
        : _c(
            "v-row",
            { staticClass: "mt-1" },
            _vm._l(_vm.ArchiveClasses, function(item, i) {
              return _c(
                "v-col",
                { key: "class" + i, attrs: { lg: "3", md: "6" } },
                [
                  _c(
                    "div",
                    { staticClass: "card-expansion" },
                    [
                      _c(
                        "v-card",
                        { staticClass: "mx-auto" },
                        [
                          _c(
                            "v-img",
                            {
                              staticClass: "white--text align-end",
                              attrs: {
                                src: "../images/" + item.course_picture,
                                height: "200px",
                                gradient:
                                  "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                              }
                            },
                            [
                              _c(
                                "v-card-subtitle",
                                [
                                  _c("v-progress-linear", {
                                    staticClass: "rounded-sm",
                                    attrs: { value: item.progress, height: "6" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-caption float-right white--text"
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            parseFloat(item.progress.toFixed(2))
                                          ) +
                                          "%\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "text-caption white--text" },
                                    [_vm._v(" Completed ")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-subtitle", [
                            _c(
                              "div",
                              {
                                staticClass: "primary--text",
                                staticStyle: { "text-decoration": "none" }
                              },
                              [
                                _c(
                                  "p",
                                  { staticStyle: { "font-size": "16px" } },
                                  [
                                    _vm._v(
                                      _vm._s(item.course_code) +
                                        " \n                            "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      " " +
                                        _vm._s(item.course_name) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.class_name) +
                                " "
                            ),
                            _c("br"),
                            _vm._v(
                              "\n                        Class code:" +
                                _vm._s(item.class_code) +
                                " \n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-card-subtitle", { staticClass: "mt-0 pt-0" }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "secondary" },
                                    on: {
                                      click: function($event) {
                                        ;(_vm.restoreDetails.id =
                                          item.useClass_id),
                                          (_vm.restoreDetails.index = i),
                                          (_vm.restoreDialog = true)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Restore\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            }),
            1
          ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "400" },
          model: {
            value: _vm.restoreDialog,
            callback: function($$v) {
              _vm.restoreDialog = $$v
            },
            expression: "restoreDialog"
          }
        },
        [
          _vm.restoreDialog
            ? _c("confirmRestore", {
                on: {
                  toggleCancelDialog: function($event) {
                    _vm.restoreDialog = false
                  },
                  toggleconfirm: function($event) {
                    return _vm.restoreClass()
                  }
                }
              })
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