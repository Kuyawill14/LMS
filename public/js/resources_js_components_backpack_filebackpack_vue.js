"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backpack_filebackpack_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'File-Backpack',
  props: ['UserDetails'],
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
      restoreDetails: {},
      icons: ['mdi-file-link', 'mdi-file-excel', 'mdi-file-image', 'mdi-file-word', 'mdi-file-pdf-box'],
      filesList: []
    };
  },
  methods: {
    CheckFileIcon: function CheckFileIcon(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') return 'mdi-image';else if (ext == 'pdf') return 'mdi-file-pdf';else if (ext == 'txt') return 'mdi-note-text-outline';else if (ext == 'docx' || ext == 'doc') return 'mdi-file-word';else if (ext == 'link') return 'mdi-file-link';else if (ext == 'xlsx' || ext == 'xlsm' || ext == 'xls') return 'mdi-microsoft-excel';else if (ext == 'ppt' || ext == 'pptx') return 'mdi-microsoft-powerpoint';else return 'mdi-circle-off-outline';
    },
    CheckFileIconColor: function CheckFileIconColor(ext) {
      if (ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'svg' || ext == 'png' || ext == 'bmp') return 'info';else if (ext == 'pdf') return 'red';else if (ext == 'txt') return 'primary';else if (ext == 'docx' || ext == 'doc') return 'blue';else if (ext == 'link') return 'green';else if (ext == 'xlsx' || ext == 'xlsm' || ext == 'xls') return 'green';else if (ext == 'ppt' || ext == 'pptx') return 'red';else return 'primary';
    },
    fetchFiles: function fetchFiles() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.isGetting = true;
                _context.next = 3;
                return axios.get('/api/profile/backpack').then(function (res) {
                  if (_this.UserDetails.role == 'Teacher') {
                    res.data.forEach(function (item) {
                      item.attachment.forEach(function (element) {
                        _this.filesList.push(element);
                      });
                    });
                  } else if (_this.UserDetails.role == 'Student') {
                    res.data.forEach(function (item) {
                      item.attachment.forEach(function (element) {
                        if (element.fileExte != 'type_answer') _this.filesList.push({
                          name: element.name,
                          extension: element.fileExte,
                          size: element.fileSize,
                          attachment: element.link
                        });
                      });
                    });
                    console.log(_this.filesList);
                  }

                  _this.isloading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    DownLoadFile: function DownLoadFile(file) {
      var path = file.replace('.cdn', '');
      window.open(path, '_blank');
    }
  },
  mounted: function mounted() {
    this.fetchFiles();
  }
});

/***/ }),

/***/ "./resources/js/components/backpack/filebackpack.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/backpack/filebackpack.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filebackpack.vue?vue&type=template&id=07ec6c70& */ "./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70&");
/* harmony import */ var _filebackpack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filebackpack.vue?vue&type=script&lang=js& */ "./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _filebackpack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__.render,
  _filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backpack/filebackpack.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filebackpack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./filebackpack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filebackpack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filebackpack_vue_vue_type_template_id_07ec6c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./filebackpack.vue?vue&type=template&id=07ec6c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backpack/filebackpack.vue?vue&type=template&id=07ec6c70& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "h2",
        [
          _vm._v("File Backpack "),
          _c("v-icon", { attrs: { right: "", large: "" } }, [
            _vm._v("mdi-bag-personal")
          ])
        ],
        1
      ),
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
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    _vm._l(_vm.filesList, function(item, i) {
                      return _c(
                        "v-col",
                        {
                          key: "class" + i,
                          attrs: { cols: "4", lg: "2", md: "2" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "card-expansion" },
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
                                              "v-list",
                                              { attrs: { rounded: "" } },
                                              [
                                                _c(
                                                  "v-list-item",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        staticClass:
                                                          "text-center",
                                                        attrs: { link: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.DownLoadFile(
                                                              item.attachment
                                                            )
                                                          }
                                                        }
                                                      },
                                                      "v-list-item",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-list-item-content",
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                style: _vm
                                                                  .$vuetify
                                                                  .breakpoint
                                                                  .lgAndUp
                                                                  ? "font-size:6rem"
                                                                  : "font-size:3.5rem",
                                                                attrs: {
                                                                  color: _vm.CheckFileIconColor(
                                                                    item.extension
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                " +
                                                                    _vm._s(
                                                                      _vm.CheckFileIcon(
                                                                        item.extension
                                                                      )
                                                                    ) +
                                                                    "\n                                            "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              "\n                                                " +
                                                                _vm._s(
                                                                  item.name
                                                                ) +
                                                                "\n                                            "
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
                                  _c("span", [_vm._v(_vm._s(item.name))])
                                ]
                              )
                            ],
                            1
                          )
                        ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);