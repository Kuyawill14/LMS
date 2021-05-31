(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profile_profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['UserDetails'],
  pageTitle: 'My Profile',
  data: function data() {
    return {
      loading: false,
      form: {
        firstName: 'John',
        lastName: 'Doe',
        contactEmail: 'john@doe.com'
      },
      showAvatarPicker: false
    };
  },
  methods: {
    openAvatarPicker: function openAvatarPicker() {
      this.showAvatarPicker = true;
    },
    selectAvatar: function selectAvatar(avatar) {
      this.form.avatar = avatar;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/profile/profile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/profile/profile.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=747d8248& */ "./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/profile/profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_747d8248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=747d8248& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=template&id=747d8248& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-row",
        { staticClass: "mb-6", attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            { staticClass: "col-md-5 col-lg-8" },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto pd-0",
                  attrs: { "max-width": "100%", outlined: "" }
                },
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n              Personal Details\n              "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-avatar",
                        { attrs: { tile: "", size: "80", color: "grey" } },
                        [
                          _c("v-img", {
                            attrs: {
                              alt: "Proflie",
                              src:
                                _vm.UserDetails.profile_pic == null ||
                                _vm.UserDetails.profile_pic == ""
                                  ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                    (_vm.UserDetails.firstName +
                                      " " +
                                      _vm.UserDetails.lastName)
                                  : "../../images/" +
                                    _vm.UserDetails.profile_pic
                            }
                          })
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
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-layout",
                            { attrs: { column: "" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "FirstName" },
                                        model: {
                                          value: _vm.UserDetails.firstName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "firstName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.firstName"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Last Name" },
                                        model: {
                                          value: _vm.UserDetails.middleName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "middleName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.middleName"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Last Name" },
                                        model: {
                                          value: _vm.UserDetails.lastName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "lastName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.lastName"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Email Address" },
                                        model: {
                                          value: _vm.UserDetails.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "email",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.email"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Address" },
                                        model: {
                                          value: _vm.UserDetails.address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "address",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.address"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Cp #" },
                                        model: {
                                          value: _vm.UserDetails.cp_no,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "cp_no",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.cp_no"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    { staticClass: "mb-4" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary",
                                            loading: _vm.loading
                                          },
                                          nativeOn: {
                                            click: function($event) {
                                              return _vm.update($event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "", dark: "" } },
                                            [_vm._v("check")]
                                          ),
                                          _vm._v(
                                            "\n                                      Save Changes\n                                  "
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
            { staticClass: "col-md-5 col-lg-4" },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto",
                  attrs: { "max-width": "344", outlined: "" }
                },
                [
                  _c(
                    "v-list-item",
                    { attrs: { "three-line": "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            { staticClass: "headline mb-1" },
                            [
                              _vm._v(
                                "\n              Change Password\n          "
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
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-layout",
                            { attrs: { column: "" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "FirstName" },
                                        model: {
                                          value: _vm.UserDetails.firstName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "firstName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.firstName"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Last Name" },
                                        model: {
                                          value: _vm.UserDetails.middleName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "middleName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.middleName"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: { label: "Last Name" },
                                        model: {
                                          value: _vm.UserDetails.lastName,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.UserDetails,
                                              "lastName",
                                              $$v
                                            )
                                          },
                                          expression: "UserDetails.lastName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    { staticClass: "mb-4" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary",
                                            loading: _vm.loading
                                          },
                                          nativeOn: {
                                            click: function($event) {
                                              return _vm.update($event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { left: "", dark: "" } },
                                            [_vm._v("check")]
                                          ),
                                          _vm._v(
                                            "\n                                      Change Password\n                                  "
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