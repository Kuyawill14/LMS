"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["profile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/profile/profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var editProfile = function editProfile() {
  return __webpack_require__.e(/*! import() | user_profile */ "user_profile").then(__webpack_require__.bind(__webpack_require__, /*! ./editprofile */ "./resources/js/components/profile/editprofile.vue"));
};

var changePassword = function changePassword() {
  return __webpack_require__.e(/*! import() | changge_password */ "change_password").then(__webpack_require__.bind(__webpack_require__, /*! ./changePassword */ "./resources/js/components/profile/changePassword.vue"));
};

var coursesProgress = function coursesProgress() {
  return __webpack_require__.e(/*! import() | course_progress */ "course_progress").then(__webpack_require__.bind(__webpack_require__, /*! ./coursesProgress */ "./resources/js/components/profile/coursesProgress.vue"));
};

var myCalendar = function myCalendar() {
  return __webpack_require__.e(/*! import() | my_calendar */ "my_calendar").then(__webpack_require__.bind(__webpack_require__, /*! ./myCalendar */ "./resources/js/components/profile/myCalendar.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role', 'UserDetails'],
  components: {
    editProfile: editProfile,
    changePassword: changePassword,
    coursesProgress: coursesProgress,
    myCalendar: myCalendar
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
      items: [{
        text: 'Dashboard',
        disabled: false,
        link: 'courses'
      }, {
        text: 'profile Details',
        disabled: true,
        link: 'profile_page'
      }],
      isUploading: false,
      profile_tabs: [{
        name: "profile_page",
        text: "Profile",
        icon: "mdi-account"
      }, {
        name: "courses_progress",
        text: "Courses",
        icon: "mdi-google-classroom"
      }, {
        name: "my_calendar",
        text: "My Calendar",
        icon: "mdi-calendar"
      }, {
        name: "change_password",
        text: "Change Password",
        icon: "mdi-lock"
      }],
      tmpProfile: null,
      inputPreview: ''
    };
  },
  methods: {
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Profile Successfully Updated", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    getUserDetails: function getUserDetails() {
      var _this = this;

      axios.get('/api/profile/details').then(function (res) {
        _this.UserDetails = res.data[0];
        _this.UserDetails.profile_pic = '/storage/' + _this.UserDetails.profile_pic;
        _this.isloading = !_this.isloading;
      })["catch"](function (e) {});
    },
    TestUpload: function TestUpload() {
      this.$refs.fileInput.click();
    },
    onFileChange: function onFileChange(element) {
      this.imageFile = element.target.files[0];

      if (this.imageFile.size <= 1000000) {
        this.isUploading = true; //this.UpdateProfile();

        this.tmpProfile = this.UserDetails.profile_pic;
        this.UserDetails.profile_pic = URL.createObjectURL(this.imageFile);
      } else {
        this.toastError('The File is more than 1mb');
      }
      /* const uploadedImage = element.target.files[0];
      if(!uploadedImage){ 
          return;
      }
           const inputPreview = document.getElementById("input-preview"); 
      inputPreview.src = URL.createObjectURL(uploadedImage);
       
            console.log(this.getImageDimensions(inputPreview));
        const MAX_WIDTH = 200; 
      const MAX_HEIGHT = 200; 
       const widthRatioBlob =  this.compressImage(inputPreview, MAX_WIDTH / width, width, height); 
      const heightRatioBlob =  this.compressImage(inputPreview, MAX_HEIGHT / height, width, height);
               
      const compressedBlob = widthRatioBlob.size > heightRatioBlob.size ? heightRatioBlob : widthRatioBlob;
      
                     const outputPreview = document.getElementById("output-preview");
                      console.log(compressedBlob);
      this.UserDetails.profile_pic =   URL.createObjectURL(compressedBlob);
                   const myFile = new File([outputPreview.src], "profile.jpeg", {
          type: "image/jpeg",
          });
       const optimalBlob = compressedBlob.size < uploadedImage.size ? compressedBlob : uploadedImage; 
      console.log(`Inital Size: ${uploadedImage.size}. Compressed Size: ${optimalBlob.size}`);
      
      URL.revokeObjectURL(inputPreview);
      URL.revokeObjectURL(outputPreview); */

    },
    UpdateProfile: function UpdateProfile() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('file', _this2.imageFile);
                axios.post('/api/profile/profile_picture', fd).then(function (res) {
                  _this2.toastSuccess('Profile picture successfully updated');

                  _this2.isUploading = false;
                })["catch"](function (e) {
                  _this2.UserDetails.profile_pic = _this2.tmpProfile;

                  _this2.toastError(e.response.data.errors.file[2]);

                  _this2.isUploading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    OpenSocialAccount: function OpenSocialAccount(link) {
      window.location = link;
    },
    getImageDimensions: function getImageDimensions(image) {
      return new Promise(function (resolve, reject) {
        image.onload = function (e) {
          var width = this.width;
          var height = this.height;
          resolve({
            height: height,
            width: width
          });
        };
      });
    },
    compressImage: function compressImage(image, scale, initalWidth, initalHeight) {
      return new Promise(function (resolve, reject) {
        var canvas = document.createElement("canvas");
        canvas.width = scale * initalWidth;
        canvas.height = scale * initalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.canvas.toBlob(function (blob) {
          resolve(blob);
        }, "image/png");
      });
    }
  },
  mounted: function mounted() {
    this.isloading = !this.isloading;
  }
});

/***/ }),

/***/ "./resources/js/components/profile/profile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/profile/profile.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      _c("v-breadcrumbs", {
        staticClass: "ma-0 pa-0 mt-1 mb-2",
        attrs: { items: _vm.items },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-breadcrumbs-item",
                  {
                    attrs: { to: { name: item.link }, disabled: item.disabled }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.text.toUpperCase()) +
                        "\n            "
                    )
                  ]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _vm.isloading
        ? _c(
            "v-container",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "fill-height",
                  attrs: { "align-content": "center", justify: "center" }
                },
                [
                  _c("v-icon", { staticStyle: { "font-size": "10rem" } }, [
                    _vm._v(
                      "\n                    mdi-account\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "text-subtitle-1 text-center",
                      attrs: { cols: "12" }
                    },
                    [_c("h3", [_vm._v(" Loading Profile ")])]
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
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "3", lg: "3", xl: "2" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "pt-5",
                      attrs: {
                        elevation: !_vm.$vuetify.breakpoint.lgAndUp ? 0 : 1,
                        outlined: _vm.$vuetify.breakpoint.lgAndUp
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 d-flex justify-center",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    bordered: "",
                                    bottom: "",
                                    color: "green",
                                    dot: "",
                                    "offset-x": "23",
                                    "offset-y": "10"
                                  }
                                },
                                [
                                  _c(
                                    "v-avatar",
                                    {
                                      attrs: { size: "80" },
                                      on: {
                                        click: function($event) {
                                          return _vm.TestUpload()
                                        }
                                      }
                                    },
                                    [
                                      _c("v-hover", {
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var hover = ref.hover
                                                return [
                                                  _c(
                                                    "div",
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        {
                                                          staticStyle: {
                                                            cursor: "pointer"
                                                          },
                                                          attrs: { size: "80" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-img",
                                                            {
                                                              attrs: {
                                                                alt: "Proflie",
                                                                src:
                                                                  _vm
                                                                    .UserDetails
                                                                    .profile_pic ==
                                                                    null ||
                                                                  _vm
                                                                    .UserDetails
                                                                    .profile_pic ==
                                                                    ""
                                                                    ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                                                      (_vm
                                                                        .UserDetails
                                                                        .firstName +
                                                                        " " +
                                                                        _vm
                                                                          .UserDetails
                                                                          .lastName)
                                                                    : _vm
                                                                        .UserDetails
                                                                        .profile_pic
                                                              }
                                                            },
                                                            [
                                                              _vm.isUploading
                                                                ? _c(
                                                                    "v-row",
                                                                    {
                                                                      staticClass:
                                                                        "fill-height ma-0",
                                                                      attrs: {
                                                                        align:
                                                                          "center",
                                                                        justify:
                                                                          "center"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-progress-circular",
                                                                        {
                                                                          attrs: {
                                                                            indeterminate:
                                                                              "",
                                                                            color:
                                                                              "grey lighten-5"
                                                                          }
                                                                        }
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
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-fade-transition",
                                                        [
                                                          hover
                                                            ? _c(
                                                                "v-overlay",
                                                                {
                                                                  staticStyle: {
                                                                    cursor:
                                                                      "pointer"
                                                                  },
                                                                  attrs: {
                                                                    absolute:
                                                                      "",
                                                                    color:
                                                                      "#212121"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {},
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-camera"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " " +
                                                                          _vm._s(
                                                                            !_vm.isUploading
                                                                              ? "Update"
                                                                              : "Uploading"
                                                                          ) +
                                                                          " "
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e()
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
                                          false,
                                          1865174112
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                ref: "fileInput",
                                staticClass: "d-none",
                                attrs: {
                                  disabled: _vm.isUploading,
                                  type: "file",
                                  id: "image-input",
                                  accept: "image/jpeg"
                                },
                                on: { change: _vm.onFileChange }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass:
                                "mb-0 pb-0 mt-0 pt-0 d-flex justify-center",
                              attrs: { cols: "12" }
                            },
                            [
                              _c("h3", { staticClass: "font-weight-bold" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.UserDetails.firstName +
                                      " " +
                                      _vm.UserDetails.lastName
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass:
                                "mb-0 pb-0 mt-0 pt-0 d-flex justify-center",
                              attrs: { cols: "12" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "grey--text font-italic" },
                                [_vm._v(_vm._s(_vm.UserDetails.email))]
                              )
                            ]
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
                            {
                              staticClass: "pl-5 pr-5 pb-0",
                              attrs: { cols: "12" }
                            },
                            [_c("v-divider")],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "pl-3", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-tabs",
                                {
                                  staticClass: "mt-2",
                                  attrs: {
                                    height: !_vm.$vuetify.breakpoint.mdAndUp
                                      ? "40"
                                      : "",
                                    "show-arrows": "",
                                    "icons-and-text": !_vm.$vuetify.breakpoint
                                      .mdAndUp,
                                    centered: !_vm.$vuetify.breakpoint.mdAndUp,
                                    vertical: _vm.$vuetify.breakpoint.mdAndUp
                                  },
                                  model: {
                                    value: _vm.tab,
                                    callback: function($$v) {
                                      _vm.tab = $$v
                                    },
                                    expression: "tab"
                                  }
                                },
                                _vm._l(_vm.profile_tabs, function(item, index) {
                                  return _c(
                                    "v-tab",
                                    {
                                      key: index,
                                      staticClass: "d-flex justify-start",
                                      attrs: { to: { name: item.name } },
                                      on: {
                                        click: function($event) {
                                          _vm.items[1].text = item.text
                                        }
                                      }
                                    },
                                    [
                                      _vm.$vuetify.breakpoint.mdAndUp
                                        ? _c(
                                            "v-icon",
                                            { attrs: { left: "" } },
                                            [_vm._v(" " + _vm._s(item.icon))]
                                          )
                                        : _vm._e(),
                                      _vm._v(
                                        "\n                                     " +
                                          _vm._s(item.text) +
                                          "\n                                     "
                                      ),
                                      !_vm.$vuetify.breakpoint.mdAndUp
                                        ? _c(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [_vm._v(" " + _vm._s(item.icon))]
                                          )
                                        : _vm._e()
                                    ],
                                    1
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  class: !_vm.$vuetify.breakpoint.mdAndUp ? "pt-5" : "",
                  attrs: { cols: "12", md: "9", lg: "9", xl: "10" }
                },
                [
                  _c(
                    "v-card",
                    {
                      class: _vm.$vuetify.breakpoint.mdAndUp
                        ? "pb-3 pl-5 pr-5"
                        : "pb-3",
                      attrs: { elevation: "0" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-tabs-items",
                                { attrs: { value: _vm.tab } },
                                [
                                  _c("router-view", {
                                    attrs: {
                                      UserDetails: _vm.UserDetails,
                                      role: _vm.role
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