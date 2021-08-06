(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_monitor-teachers_teacherProfile_coursesProgress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//const modulesPublished = () => import('./courses/modules_publish')
var coursesummarypreview = function coursesummarypreview() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_admin_monitor-teachers_teacherProfile_courses_course_summary_preview_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./courses/course_summary_preview */ "./resources/js/components/admin/monitor-teachers/teacherProfile/courses/course_summary_preview.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['UserDetails'],
  data: function data() {
    return {
      dialog: false,
      moduledialog: false,
      Coursedialog: false,
      isloading: true,
      coursesLength: null,
      details: [],
      course_id: null,
      course_details: null,
      items: ['2020-2021', '2021-2022', '2022-2023', '2023-2024']
    };
  },
  components: {
    //modulesPublished,
    coursesummarypreview: coursesummarypreview
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['allCourse', 'allClass']),
  methods: {
    fetchCourses: function fetchCourses() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/teachers/profile/ClassesList/' + _this.UserDetails.user_id).then(function (res) {
                  _this.details = res.data;
                  _this.isloading = false;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.fetchCourses();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=template&id=64d376ed& */ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&");
/* harmony import */ var _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.render,
  _coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_coursesProgress_vue_vue_type_template_id_64d376ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./coursesProgress.vue?vue&type=template&id=64d376ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/monitor-teachers/teacherProfile/coursesProgress.vue?vue&type=template&id=64d376ed& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        [
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
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
                ? _c("coursesummarypreview", {
                    attrs: { course_details: _vm.course_details },
                    on: {
                      closeDialog: function($event) {
                        _vm.dialog = false
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
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "mb-0 pb-0", attrs: { cols: "12", sm: "6" } },
            [_c("h2", [_vm._v("Courses")])]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pt-4", attrs: { cols: "12", sm: "6" } },
            [
              _c("v-select", {
                attrs: { items: _vm.items, label: "School Year", outlined: "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isloading
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _vm.isloading
                ? _c(
                    "v-container",
                    { staticClass: "fill-height" },
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
                              staticClass: "text-subtitle-1 text-center",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm._v(
                                "\n                    Loading\n                "
                              )
                            ]
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
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          !_vm.isloading
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.details, function(item) {
                      return _c(
                        "v-col",
                        {
                          key: item.course_id,
                          attrs: { cols: "6", md: "3", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto",
                              staticStyle: { cursor: "pointer" },
                              attrs: {
                                link: "",
                                elevation: "2",
                                "max-width": "344",
                                outlined: ""
                              },
                              on: {
                                click: function($event) {
                                  ;(_vm.dialog = true),
                                    (_vm.course_details = item)
                                }
                              }
                            },
                            [
                              _c(
                                "v-toolbar",
                                {
                                  class:
                                    !_vm.$vuetify.breakpoint.xs &&
                                    !_vm.$vuetify.breakpoint.sm
                                      ? "d-flex justify-center"
                                      : "",
                                  attrs: {
                                    dense: "",
                                    dark: "",
                                    color: "primary"
                                  }
                                },
                                [
                                  _c(
                                    "v-toolbar-title",
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
                                                      "div",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            staticClass:
                                                              "text-center "
                                                          },
                                                          "div",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      ),
                                                      [
                                                        _vm._v(
                                                          "\n                                            " +
                                                            _vm._s(
                                                              item.course_code +
                                                                " - " +
                                                                item.course_name
                                                            ) +
                                                            "\n                                        "
                                                        )
                                                      ]
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
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                item.course_code +
                                                  " - " +
                                                  item.course_name
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
                                "v-list-item",
                                [
                                  _c("v-list-item-content", [
                                    _c(
                                      "div",
                                      { staticClass: "pa-2" },
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c("v-col", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        item.total_students
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-center text-subtitle-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                Total Students\n                                            "
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("v-col", [
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                " +
                                                      _vm._s(
                                                        item.total_classes
                                                      ) +
                                                      "\n                                            "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-center text-subtitle-2"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                Total Classes\n                                            "
                                                  )
                                                ]
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-center pl-4 pr-4" },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = true
                                          _vm.course_id = _vm.course_details = item
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "text-center " },
                                        [
                                          _vm._v(
                                            "\n                                    Modules Published: " +
                                              _vm._s(item.sub_modules_count) +
                                              "\n                                "
                                          )
                                        ]
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