(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_profile_profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* import {ValidationError} from "@/components";
import formMixin from "@/mixins/form-mixin";

export default {
  name: "edit-profile-card",

  props: {
    user: Object
  },

  components: {ValidationError},

  mixins: [formMixin],

  data() {
    return {
      avatar_img: null,
      default_img: process.env.VUE_APP_BASE_URL + "/img/placeholder.jpg",
      file: null
    }
  },

  methods: {

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.avatar_img = e.target.result;
        this.file = file;
      }
      reader.readAsDataURL(file);
    },

    removeImage() {
      this.avatar_img = null;
    },

    async updateProfile() {
      try {
        if (!this.user.profile_image) {
          await this.$store.dispatch("users/upload", {user: this.user, image: this.file})
          this.user.profile_image = await this.$store.getters["profile/url"]
        }
        await this.$store.dispatch("profile/update", this.user)
        await this.$store.dispatch("alerts/success", "Profile updated successfully.")
        this.user = await this.$store.getters["profile/me"]
      } catch (e) {
        await this.$store.dispatch("alerts/error", "Oops, something went wrong!")
        this.setApiValidation(e.response.data.errors)
      }

    }

  }
}; */

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
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

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
    "form",
    [
      _c(
        "md-card",
        [
          _c("md-card-header", { staticClass: "md-card-header-icon" }, [
            _c(
              "div",
              { staticClass: "card-icon" },
              [_c("md-icon", [_vm._v("perm_identity")])],
              1
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "title" }, [
              _vm._v("\n        Edit Profile\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("md-card-content", [
            _c("div", { staticClass: "md-layout" }, [
              _c(
                "label",
                { staticClass: "md-layout-item md-size-15 md-form-label" },
                [_vm._v("\n          Profile Photo\n        ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md-layout-item" }, [
                _c("div", { staticClass: "file-input" }, [
                  _vm.avatar_img
                    ? _c("div", [
                        _c("div", { staticClass: "image-container" }, [
                          _c("img", { attrs: { src: _vm.avatar_img } })
                        ])
                      ])
                    : _c("div", { staticClass: "image-container" }, [
                        _c("img", { attrs: { src: _vm.default_img } })
                      ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "button-container" },
                    [
                      _vm.avatar_img
                        ? _c(
                            "md-button",
                            {
                              staticClass: "md-danger md-round",
                              on: { click: _vm.removeImage }
                            },
                            [
                              _c("i", { staticClass: "fa fa-times" }),
                              _vm._v("\n                Remove\n              ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "md-button",
                        { staticClass: "md-success md-fileinput" },
                        [
                          !_vm.avatar_img
                            ? [_vm._v("Select image")]
                            : [_vm._v("Change")],
                          _vm._v(" "),
                          _c("input", {
                            attrs: { type: "file" },
                            on: { change: _vm.onFileChange }
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md-layout" }, [
              _c(
                "label",
                { staticClass: "md-layout-item md-size-15 md-form-label" },
                [_vm._v("\n          Name\n        ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "md-layout-item" },
                [
                  _c(
                    "md-field",
                    { staticClass: "md-invalid" },
                    [
                      _c("md-input", {
                        model: {
                          value: _vm.user.name,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "name", $$v)
                          },
                          expression: "user.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("validation-error", {
                        attrs: { errors: _vm.apiValidationErrors.name }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md-layout" }, [
              _c(
                "label",
                { staticClass: "md-layout-item md-size-15 md-form-label" },
                [_vm._v("\n          Email\n        ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "md-layout-item" },
                [
                  _c(
                    "md-field",
                    { staticClass: "md-invalid" },
                    [
                      _c("md-input", {
                        model: {
                          value: _vm.user.email,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "email", $$v)
                          },
                          expression: "user.email"
                        }
                      }),
                      _vm._v(" "),
                      _c("validation-error", {
                        attrs: { errors: _vm.apiValidationErrors.email }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "md-card-actions",
            [
              _c(
                "md-button",
                {
                  on: {
                    click: function($event) {
                      return _vm.updateProfile()
                    }
                  }
                },
                [_vm._v("\n        Update Profile\n      ")]
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