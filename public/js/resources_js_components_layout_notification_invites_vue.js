(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_notification_invites_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
var seeAllNotification = function seeAllNotification() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_layout_notification_SeeAllNotification_vue-_9dd71").then(__webpack_require__.bind(__webpack_require__, /*! ./SeeAllNotification */ "./resources/js/components/layout/notification/SeeAllNotification.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      notificationList: {},
      notifLength: [],
      fav: true,
      menu: false,
      message: false,
      hints: true,
      form: new Form({
        class_code: ""
      }),
      isAccepted: false,
      dialog: false,
      closing: false,
      //isGetting: true,
      notifType: 'all',
      AttachData: {},
      isClose: false
    };
  },
  components: {
    seeAllNotification: seeAllNotification
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["get_notification", "get_notification_count", "ShowPage", "ShowLoadMore", "LastPage", "isGetting"]),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchNotification'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchNotificationCount'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['ShowMore'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['ShowLess'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['LessNotificationCount'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['UnreadMessage'])), {}, {
    connect: function connect() {
      var _this = this;

      var newVm = this;
      /*   this.fetchNotification(); */

      this.fetchNotificationCount();
      window.Echo["private"]("notification").listen('NewNotification', function (e) {
        newVm.$store.dispatch("fetchNotification", _this.notifType);
        newVm.fetchNotificationCount();
      });
    },

    /*   UnreadNotification(id) {
          axios.post('/api/notification/'+id, {accepted: this.isAccepted}).then((res) => {
              this.get_notification.forEach(item => {
                  if(item.n_id == id){
                      item.status = 1;
                      if(this.isAccepted){
                           item.notification_accepted = 1;
                      }
                  }
              });
              this.$store.dispatch("LessNotificationCount");
          })
      },
      DeleteNotification(id) {
          axios.delete('/api/notification/' + id).then((res) => {
               this.get_notification.forEach(item => {
                  if(item.n_id == id){
                      item.hide_notif = 1;
                  }
              });
          })
      },
    */
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
    acceptJoin: function acceptJoin(class_code, id, index) {
      var _this4 = this;

      this.form.class_code = class_code;
      this.$store.dispatch("joinClass", this.form).then(function (res) {
        if (res.status == 200) {
          _this4.isAccepted = true;

          _this4.toastSuccess(res.data.message);

          _this4.$store.dispatch('removeNotification', id);

          _this4.$store.dispatch("LessNotificationCount");

          _this4.$router.push({
            name: 'announcement',
            params: {
              id: res.data.course_id
            }
          });
        } else if (res.status == 202) {
          _this4.isAccepted = true;

          _this4.toastError(res.data.message);

          _this4.$store.dispatch('removeNotification', id);

          _this4.$store.dispatch("LessNotificationCount");

          _this4.$router.push({
            name: 'announcement',
            params: {
              id: res.data.course_id
            }
          });
        } else {
          _this4.toastError('Something went wrong while joining the class!');
        }

        _this4.get_notification.splice(index, 1);
      });
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).format("MMMM DD, h:mm a");
      }
    },
    ShowMore: function ShowMore() {
      this.AttachData.type = this.notifType;
      this.AttachData.page = this.ShowPage;
      this.$store.dispatch("ShowMore", this.AttachData);
    },
    ShowLess: function ShowLess() {
      this.$store.dispatch("ShowLess", this.ShowPage);
    },
    fetchNotificationall: function fetchNotificationall(on) {
      var _this5 = this;

      var checker = on['aria-expanded'] == 'false' ? false : true;

      if (!checker) {
        this.$store.dispatch("fetchNotification", this.notifType).then(function (res) {
          if (res == 200) {//this.isGetting = false;
          } else {
            //this.isGetting = false;
            _this5.toastError('Something went wrong while loading notifications!');
          }
        });
      }
    }
  }),
  mounted: function mounted() {
    this.connect();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /* width */\n[data-v-66e52eb0]::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n[data-v-66e52eb0]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n \n/* Handle */\n[data-v-66e52eb0]::-webkit-scrollbar-thumb {\n  background: #888; \n   border-radius: 3px\n}\n\n/* Handle on hover */\n[data-v-66e52eb0]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invites.vue?vue&type=template&id=66e52eb0&scoped=true& */ "./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true&");
/* harmony import */ var _invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invites.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&");
/* harmony import */ var _invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& */ "./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66e52eb0",
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_template_id_66e52eb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=template&id=66e52eb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_invites_vue_vue_type_style_index_0_id_66e52eb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=template&id=66e52eb0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-center", staticStyle: { "z-index": "100" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "800" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [_c("seeAllNotification")],
        1
      ),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            "max-height": _vm.$vuetify.breakpoint.xs ? 500 : 650,
            rounded: "0",
            "close-on-content-click": _vm.closing,
            "nudge-width": 400,
            "offset-y": "",
            "max-width": 400
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function($event) {
                              _vm.fetchNotificationall(attrs),
                                (_vm.isClose = false)
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
                      _c(
                        "v-badge",
                        {
                          attrs: {
                            content: _vm.get_notification_count,
                            value: _vm.get_notification_count,
                            color: "red darken-2",
                            overlap: ""
                          }
                        },
                        [
                          _c("v-icon", [
                            _vm._v(
                              "\n                        mdi-account-plus\n                    "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.menu,
            callback: function($$v) {
              _vm.menu = $$v
            },
            expression: "menu"
          }
        },
        [
          _vm._v(" "),
          !_vm.isClose
            ? _c(
                "v-list",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("Notification")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-action",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "white--text caption",
                              attrs: {
                                color: "blue",
                                text: "",
                                depressed: "",
                                rounded: ""
                              },
                              on: {
                                click: function($event) {
                                  ;(_vm.closing = true),
                                    _vm.$router.push({ name: "notifications" })
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            See all\n                        "
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
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.isGetting
                    ? _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-content",
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
                                      staticClass:
                                        "text-subtitle-1 text-center mb-0 pb-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Loading\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "mt-0 pt-0",
                                      attrs: { cols: "6" }
                                    },
                                    [
                                      _c("v-progress-linear", {
                                        attrs: {
                                          color: "primary",
                                          indeterminate: "",
                                          rounded: "",
                                          height: "4"
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
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isGetting
                    ? _c(
                        "div",
                        [
                          _vm.get_notification.length == 0
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
                                                _vm._v(" Empty Notification  ")
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
                          _vm._l(_vm.get_notification, function(item, index) {
                            return _c(
                              "v-list-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      item.hide_notif == 0 ||
                                      item.hide_notif == null,
                                    expression:
                                      "item.hide_notif == 0 || item.hide_notif == null"
                                  }
                                ],
                                key: index
                              },
                              [
                                _c(
                                  "v-list-item-avatar",
                                  [
                                    item.notification_type == 3 ||
                                    item.notification_type == 2
                                      ? _c(
                                          "v-icon",
                                          {
                                            attrs: { color: "blue", large: "" }
                                          },
                                          [_vm._v("mdi-account-plus")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.notification_type == 1
                                      ? _c(
                                          "v-icon",
                                          {
                                            attrs: { color: "red", large: "" }
                                          },
                                          [_vm._v("mdi-bullhorn-outline")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.notification_type == 4
                                      ? _c(
                                          "v-icon",
                                          {
                                            attrs: { color: "green", large: "" }
                                          },
                                          [_vm._v(" mdi-book-open-variant")]
                                        )
                                      : _vm._e()
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
                                                    item.notification_type == 2
                                                  ? "blue"
                                                  : item.notification_type == 4
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
                                          "\n                                "
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
                                                  _vm.acceptJoin(
                                                    item.notification_attachments,
                                                    item.n_id,
                                                    index
                                                  ),
                                                    (_vm.isClose = true)
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
                                        _vm._s(_vm.format_date(item.created_at))
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-action",
                                  [
                                    item.status == null || item.status == 0
                                      ? _c(
                                          "v-tooltip",
                                          {
                                            attrs: { left: "" },
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
                                                                    icon: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      _vm.markAsread(
                                                                        item.n_id
                                                                      ),
                                                                        (_vm.closing = false)
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
                                            _c("span", [_vm._v("Mark as read")])
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.status == 1
                                      ? _c(
                                          "v-tooltip",
                                          {
                                            attrs: { left: "" },
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
                                                                    icon: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      _vm.NotificationHide(
                                                                        item.n_id
                                                                      ),
                                                                        (_vm.closing = false)
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
                          }),
                          _vm._v(" "),
                          _vm.LastPage != 1
                            ? _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
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
                                              staticClass: "text-center",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _vm.ShowPage != 1
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        rounded: "",
                                                        text: "",
                                                        color: "blue"
                                                      },
                                                      on: {
                                                        click: _vm.ShowLess
                                                      }
                                                    },
                                                    [
                                                      _vm._v("Load Less  "),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: { right: "" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-chevron-up"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.ShowLoadMore
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        rounded: "",
                                                        text: "",
                                                        color: "blue"
                                                      },
                                                      on: {
                                                        click: _vm.ShowMore
                                                      }
                                                    },
                                                    [
                                                      _vm._v("Load More  "),
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: { right: "" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-chevron-down"
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
                        2
                      )
                    : _vm._e()
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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/notification/invites.vue?vue&type=style&index=0&id=66e52eb0&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("86446788", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);