(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_login_AdminLoginPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_fb_customer_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-fb-customer-chat */ "./node_modules/vue-fb-customer-chat/dist/vue-fb-customer-chat.umd.js");
/* harmony import */ var vue_fb_customer_chat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_fb_customer_chat__WEBPACK_IMPORTED_MODULE_1__);


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
var loginRegisterFooter = function loginRegisterFooter() {
  return __webpack_require__.e(/*! import() | login_layout */ "login_layout").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/LoginRegisterLayout/LoginRegisterFooter */ "./resources/js/components/layout/LoginRegisterLayout/LoginRegisterFooter.vue"));
};

var loginRegisterImageConatiner = function loginRegisterImageConatiner() {
  return __webpack_require__.e(/*! import() | login_layout */ "login_layout").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/LoginRegisterLayout/LoginRegisterImageConatiner */ "./resources/js/components/layout/LoginRegisterLayout/LoginRegisterImageConatiner.vue"));
};


Vue.use((vue_fb_customer_chat__WEBPACK_IMPORTED_MODULE_1___default()), {
  page_id: 102514265611526,
  //  change 'null' to your Facebook Page ID,
  theme_color: '#333333',
  // theme color in HEX
  locale: 'en_US' // default 'en_US'

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Orange',
  components: {
    loginRegisterFooter: loginRegisterFooter,
    loginRegisterImageConatiner: loginRegisterImageConatiner
  },
  data: function data() {
    return {
      isLoggin: false,
      dialog: true,
      valid: true,
      form: new Form({
        email: "",
        password: "",
        remember: false
      }),
      loginEmailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }, function (v) {
        return v && !!v.trim() || 'Field cannot be blank';
      }],
      emailRules: [function (v) {
        return !!v || "Required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "Email must be valid";
      }, function (v) {
        return v && !!v.trim() || 'Field cannot be blank';
      }],
      show: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        min: function min(v) {
          return v && v.length >= 6 || "Min 6 characters";
        },
        blank: function blank(v) {
          return v && !!v.trim() || 'Field cannot be blank';
        }
      },
      ToManyAttepmtError: null,
      isForgotPassword: false,
      IsloadingComponent: false
    };
  },
  computed: {
    passwordMatch: function passwordMatch() {
      var _this = this;

      return function () {
        return _this.password === _this.verify || "Password must match";
      };
    }
  },
  methods: {
    validate: function validate() {
      if (this.$refs.loginForm.validate()) {
        this.login();
      }
    },
    reset: function reset() {
      this.$refs.form.reset();
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    login: function login() {
      var _this2 = this;

      this.isLoggin = true;
      axios.get('/sanctum/csrf-cookie').then(function (response) {
        _this2.form.post('/api/admin_Login').then(function (res) {
          if (res.data.success == true) {
            _this2.$store.dispatch('clear_current_user');

            _this2.$router.push({
              path: "/"
            }); //this.StartFireBasePushNotification();

          } else {
            _this2.isLoggin = false;

            _this2.toastError(res.data.message);
          } //this.isLoggin = false;

        })["catch"](function (err) {
          _this2.isLoggin = false;

          _this2.toastError("Incorrect Email or Password. Please try again");
        });
      });
    },
    StartFireBasePushNotification: function StartFireBasePushNotification() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var firebaseConfig, messaging;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firebaseConfig = {
                  apiKey: "AIzaSyDWhE_gfbOrfbU88UwTZNDKYg0_ND0QQsQ",
                  authDomain: "isue-orange-pushnotification.firebaseapp.com",
                  projectId: "isue-orange-pushnotification",
                  storageBucket: "isue-orange-pushnotification.appspot.com",
                  messagingSenderId: "914599704994",
                  appId: "1:914599704994:web:5e7e272dd3fb83013f5afb"
                };

                if (!firebase.apps.length) {
                  firebase.initializeApp(firebaseConfig);
                } else {
                  firebase.app();
                }

                messaging = firebase.messaging();
                messaging.requestPermission().then(function () {
                  return messaging.getToken();
                }).then(function (response) {
                  axios.post('/api/store_token', {
                    token: response
                  }).then(function (res) {});
                })["catch"](function (error) {});
                messaging.onMessage(function (_ref) {
                  var _ref$data = _ref.data,
                      body = _ref$data.body,
                      title = _ref$data.title;
                  new Notification(title, {
                    body: body
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
    /*   classNotification(){
            window.OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
              OneSignal.init({
                  appId: "2b9acbc0-fd01-474c-bdc8-754c01abcd18",
              });
          });
      }
       */

  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var confirmed = window.localStorage.getItem('isConfirmedPassword');

    if (confirmed) {
      next();
    } else {
      var password = prompt('This page is secure enter password');
      axios.post('/api/check_password', {
        password: password
      }).then(function (res) {
        if (res.data.success) {
          next();
          window.localStorage.setItem('isConfirmedPassword', true);
        } else {
          window.localStorage.removeItem('isConfirmedPassword');
          return next({
            path: "/"
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-fb-customer-chat/dist/vue-fb-customer-chat.umd.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-fb-customer-chat/dist/vue-fb-customer-chat.umd.js ***!
  \****************************************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";function n(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,o;t=i,o=r[n=e],n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o})}return i}var o="en_us";function i(t){return new Promise(function(e){window.FB?e(window.FB):function(e){var c=e.locale?e.locale:o;return new Promise(function(r,u){!function(e,t,n){var o=e.getElementsByTagName(t)[0];if(!e.getElementById(n)){var i=e.createElement(t);i.id=n,i.src="https://connect.facebook.net/"+c+"/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(i,o),i.onload=function(){r()},i.onerror=function(){u()}}}(document,"script","facebook-jssdk")})}(t).then(function(){(function(t){return new Promise(function(e){window.fbAsyncInit=function(){t=n({},{cookie:!0,xfbml:!0,version:"v5.0"},t),window.FB.init(t),e()}})})(t).then(function(){e(window.FB)})})})}var e={install:function(e,t){e.fbCustomerChat={setOptions:function(e){t=n({},t,e)}},Object.defineProperties(e.prototype,{$fbCustomerChat:{get:function(){return e.fbCustomerChat}}}),e.mixin({mounted:function(){this.$parent||i(t).then(function(){t.page_id&&function(e){var t=document.createElement("div");t.setAttribute("class","fb-customerchat"),t.setAttribute("attribution","setup_tool"),Object.entries(e).forEach(function(e){t.setAttribute(e[0],e[1])}),document.body.appendChild(t)}(t)})}})}};return"undefined"!=typeof window&&window.Vue&&(window.VueFbCustomerChat=e),e});


/***/ }),

/***/ "./resources/js/components/login/AdminLoginPage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/login/AdminLoginPage.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLoginPage.vue?vue&type=template&id=d889884c& */ "./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c&");
/* harmony import */ var _AdminLoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLoginPage.vue?vue&type=script&lang=js& */ "./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AdminLoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/login/AdminLoginPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLoginPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLoginPage_vue_vue_type_template_id_d889884c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLoginPage.vue?vue&type=template&id=d889884c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/login/AdminLoginPage.vue?vue&type=template&id=d889884c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        {
          class:
            _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
              ? ""
              : "fill-height",
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                {
                  class:
                    _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                      ? ""
                      : "ma-0 pa-0",
                  attrs: { cols: "12", sm: "12", md: "12" }
                },
                [
                  _c(
                    "v-row",
                    {
                      class:
                        _vm.$vuetify.breakpoint.xs || _vm.$vuetify.breakpoint.sm
                          ? "fill-height"
                          : "",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("loginRegisterImageConatiner"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          class: _vm.$vuetify.breakpoint.xs
                            ? "ma-0 pa-3 PB-0"
                            : "ma-0 pa-0",
                          attrs: { cols: "12", md: "5" }
                        },
                        [
                          _c("vue-element-loading", {
                            attrs: {
                              active: _vm.isLoggin,
                              spinner: "bar-fade-scale",
                              color: "#EF6C00"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-left",
                                  attrs: {
                                    cols: "12",
                                    md: "12",
                                    lg: "12",
                                    sm: "7"
                                  }
                                },
                                [
                                  !_vm.isForgotPassword
                                    ? _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-form",
                                            {
                                              ref: "loginForm",
                                              staticClass: "text-center",
                                              attrs: { "lazy-validation": "" },
                                              on: {
                                                submit: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.validate.apply(
                                                    null,
                                                    arguments
                                                  )
                                                }
                                              },
                                              model: {
                                                value: _vm.valid,
                                                callback: function($$v) {
                                                  _vm.valid = $$v
                                                },
                                                expression: "valid"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                {
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
                                                        "ma-0 pa-0 text-left",
                                                      attrs: {
                                                        cols: "12",
                                                        md: "8"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            " text-md-h5 text-xs-h5 text-sm-h6 font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    Administrator Login"
                                                          ),
                                                          _c("span", {
                                                            staticClass:
                                                              "font-weight-regular"
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "ma-0 pa-0 mt-4",
                                                      attrs: {
                                                        cols: "12",
                                                        md: "8"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          outlined: "",
                                                          label: "Email",
                                                          rules:
                                                            _vm.loginEmailRules,
                                                          name: "Email",
                                                          "prepend-inner-icon":
                                                            "email",
                                                          dense:
                                                            _vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp,
                                                          type: "email",
                                                          color: "primary",
                                                          required: ""
                                                        },
                                                        model: {
                                                          value: _vm.form.email,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "email",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.email"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass:
                                                        "ma-0 pa-0 mt-2 mb-0",
                                                      attrs: {
                                                        cols: "12",
                                                        md: "8"
                                                      }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        staticClass:
                                                          "mb-0 pb-0",
                                                        attrs: {
                                                          dense:
                                                            _vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp,
                                                          outlined: "",
                                                          "append-icon": _vm.show
                                                            ? "mdi-eye"
                                                            : "mdi-eye-off",
                                                          rules: [
                                                            _vm.rules.required,
                                                            _vm.rules.min,
                                                            _vm.rules.blank
                                                          ],
                                                          type: _vm.show
                                                            ? "text"
                                                            : "password",
                                                          name: "password",
                                                          label: "Password",
                                                          "prepend-inner-icon":
                                                            "lock",
                                                          hint:
                                                            "At least 6 characters",
                                                          color: "primary",
                                                          counter: ""
                                                        },
                                                        on: {
                                                          "click:append": function(
                                                            $event
                                                          ) {
                                                            _vm.show = !_vm.show
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.form.password,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "password",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.password"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("HasError", {
                                                        staticClass:
                                                          "error--text",
                                                        attrs: {
                                                          form: _vm.form,
                                                          field: "password"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      class: _vm.$vuetify
                                                        .breakpoint.mdAndUp
                                                        ? "ma-0 pa-0 text-left"
                                                        : "ml-0 pl-0 pr-0 mr-0 mt-1",
                                                      attrs: {
                                                        cols: "12",
                                                        md: "8"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass: "mb-5",
                                                          attrs: {
                                                            color: "primary",
                                                            type: "submit",
                                                            disabled: !_vm.valid,
                                                            block: !_vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp,
                                                            large: !_vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp,
                                                            rounded: !_vm
                                                              .$vuetify
                                                              .breakpoint
                                                              .mdAndUp,
                                                            loading:
                                                              _vm.isLoggin
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mr-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-login"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                                    Login\n                                                "
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.isForgotPassword
                                    ? _c("v-card-text", [
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _vm.IsloadingComponent
                                              ? _c("v-progress-circular", {
                                                  attrs: {
                                                    color: "primary",
                                                    indeterminate: ""
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ])
                                    : _vm._e()
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
                      _c("loginRegisterFooter")
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