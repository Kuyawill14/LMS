(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_navigation_admin_admin-navbar_vue"],{

/***/ "./resources/js/components/layout/navigation/admin/admin-navbar.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/admin/admin-navbar.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-navbar.vue?vue&type=template&id=9da770e2& */ "./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__.render,
  _admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/navigation/admin/admin-navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_navbar_vue_vue_type_template_id_9da770e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin-navbar.vue?vue&type=template&id=9da770e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/navigation/admin/admin-navbar.vue?vue&type=template&id=9da770e2& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "v-list",
    { attrs: { nav: "" } },
    [
      [
        _c(
          "v-list-item",
          { attrs: { link: "", to: { name: "dashboard" }, exact: "" } },
          [
            _c(
              "v-list-item-action",
              [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-list-item-content",
              [
                _c("v-list-item-title", [
                  _vm._v("\n                    Dashboard\n                ")
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-list-group",
          {
            attrs: {
              color: "none",
              value: "false",
              link: "",
              "prepend-icon": "mdi-contacts"
            },
            scopedSlots: _vm._u([
              {
                key: "activator",
                fn: function() {
                  return [_c("v-list-item-title", [_vm._v("Manage Users")])]
                },
                proxy: true
              }
            ])
          },
          [
            _vm._v(" "),
            _c(
              "v-list-item",
              {
                attrs: { link: "", to: { name: "manageteachers" }, exact: "" }
              },
              [
                _c(
                  "v-list-item-action",
                  [_c("v-icon", [_vm._v("mdi-account-supervisor")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(
                        "\n                        Instructors\n                    "
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-list-item",
              {
                attrs: { link: "", to: { name: "managestudents" }, exact: "" }
              },
              [
                _c(
                  "v-list-item-action",
                  [_c("v-icon", [_vm._v("mdi-human-greeting")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c("v-list-item-title", [
                      _vm._v(
                        "\n                        Students\n                    "
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
        ),
        _vm._v(" "),
        _c(
          "v-list-item",
          { attrs: { link: "", to: { name: "monitorTeachers" }, exact: "" } },
          [
            _c(
              "v-list-item-action",
              [_c("v-icon", [_vm._v("mdi-chart-box-outline")])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-list-item-content",
              [
                _c("v-list-item-title", [
                  _vm._v(
                    "\n                    Monitor Teachers\n                "
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-list-item",
          {
            attrs: { link: "", to: { name: "schoolyear_semester" }, exact: "" }
          },
          [
            _c(
              "v-list-item-action",
              [_c("v-icon", [_vm._v("mdi-account-group")])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-list-item-content",
              [
                _c("v-list-item-title", [
                  _vm._v(
                    "\n                    School Year / Semester\n                "
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-list-item",
          { attrs: { link: "", to: { name: "department" }, exact: "" } },
          [
            _c(
              "v-list-item-action",
              [_c("v-icon", [_vm._v("mdi-account-group")])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-list-item-content",
              [
                _c("v-list-item-title", [
                  _vm._v("\n                    Department\n                ")
                ])
              ],
              1
            )
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);