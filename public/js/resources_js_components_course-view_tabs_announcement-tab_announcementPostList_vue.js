(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_announcementPostList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_src_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/src/moment */ "./node_modules/moment/src/moment.js");
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


var announcementList = function announcementList() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_announcement-tab_PostListType_AnnouncementList_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./PostListType/AnnouncementList */ "./resources/js/components/course-view/tabs/announcement-tab/PostListType/AnnouncementList.vue"));
};

var commentList = function commentList() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./actions/commentList */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['PostList', 'UserDetails', 'classNames'],
  components: {
    commentList: commentList,
    announcementList: announcementList
  },
  data: function data() {
    return {
      password: 'Password',
      show: false,
      comment: [],
      marker: true,
      iconIndex: 0,
      data: {},
      CommentList: [],
      showLess: true,
      class_id: this.$route.params.id,
      isLoadingMore: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['current_page', 'last_page'])), {}, {
    icon: function icon() {
      return this.icons[this.iconIndex];
    }
  }),
  methods: {
    test: function test() {
      $('.img-fluid').click(function () {//console.log($('.img-fluid').attr('src'))
      });
    },
    format_date: function format_date(value) {
      if (value) {
        return (0,moment_src_moment__WEBPACK_IMPORTED_MODULE_0__.default)(String(value)).format("ddd, MMMM DD, YYYY h:mm a");
      }
    },
    addComment: function addComment(i, post_id) {
      var _this = this;

      this.data.content = this.comment[i];
      this.data.course_id = this.$route.params.id;
      this.data.post_id = post_id;
      axios.post('/api/post/insert', this.data).then(function (res) {
        res.data;

        _this.getComments();

        _this.clearComment(i);
      });
    },
    clearComment: function clearComment(i) {
      this.comment[i] = '';
    },
    getComments: function getComments() {
      var _this2 = this;

      axios.get('/api/post/allcomment/' + this.$route.params.id).then(function (res) {
        _this2.CommentList = res.data;
      });
    },
    getAnnouncementWhileScrolling: function getAnnouncementWhileScrolling() {
      var _this3 = this;

      window.onscroll = function () {
        var bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if (_this3.isLoadingMore != true) {
            _this3.loadMore();
          }
        }
      };
    },
    loadMore: function loadMore() {
      var _this4 = this;

      this.isLoadingMore = true;

      if (this.current_page != this.last_page) {
        this.$store.dispatch('loadMore', this.$route.params.id).then(function (res) {
          if (res == 200) {
            _this4.isLoadingMore = false;
          } else {
            _this4.isLoadingMore = false;
          }
        });
      } else {
        this.isLoadingMore = false; //setTimeout(() => (this.isLoadingMore = false), 1000);
      }
    }
  },
  beforeMount: function beforeMount() {
    $(".post-content p").replaceWith(function () {
      return "<span>" + this.innerHTML + "</span>";
    });
    this.test(); //this.getComments();
  },
  mounted: function mounted() {
    this.getAnnouncementWhileScrolling();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.post-content img {\n    max-height: 23rem !important;\n    max-width: 100%;\n}\n.post-content iframe{\n    width: 100% !important;\n    height: 25rem !important;\n}\n\n\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcementPostList.vue?vue&type=template&id=0c3c0bf7& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7&");
/* harmony import */ var _announcementPostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcementPostList.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js&");
/* harmony import */ var _announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcementPostList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _announcementPostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__.render,
  _announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementPostList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_template_id_0c3c0bf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementPostList.vue?vue&type=template&id=0c3c0bf7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementPostList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_announcementPostList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=template&id=0c3c0bf7& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.PostList.length != 0 && _vm.UserDetails.role != "Student"
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticClass: "mb-0 pb-0 mt-0 pt-0 text-right",
                  attrs: { cols: "12" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-inline-flex " },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.classNames,
                          "item-text": "class_name",
                          "item-value": "class_id",
                          label: "Class",
                          solo: ""
                        },
                        model: {
                          value: _vm.class_id,
                          callback: function($$v) {
                            _vm.class_id = $$v
                          },
                          expression: "class_id"
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.PostList, function(post) {
        return _c(
          "v-card",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  post.class_id == _vm.class_id ||
                  _vm.class_id == _vm.$route.params.id,
                expression:
                  "post.class_id == class_id || class_id == $route.params.id"
              }
            ],
            key: post.id,
            staticClass: "mb-10"
          },
          [
            _c(
              "v-row",
              { staticClass: "pl-5 pr-5 pt-2 mb-3 " },
              [
                _c("v-col", { attrs: { cols: "8" } }, [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row user-info" },
                    [
                      _c(
                        "v-avatar",
                        {
                          attrs: {
                            color: "grey",
                            size:
                              !_vm.$vuetify.breakpoint.xs &&
                              !_vm.$vuetify.breakpoint.sm
                                ? 45
                                : 40
                          }
                        },
                        [
                          _c("v-img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              src:
                                post.profile_pic == null ||
                                post.profile_pic == ""
                                  ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                    post.name
                                  : post.profile_pic
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-start ml-2 mt-1"
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "d-block font-weight-bold name" },
                            [_vm._v(_vm._s(post.name))]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "date text-black-50" }, [
                            _vm._v(_vm._s(_vm.format_date(post.created_at)))
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-col",
                  { staticClass: "text-right", attrs: { cols: "4" } },
                  [
                    _c(
                      "v-btn",
                      { attrs: { icon: "" } },
                      [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
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
              "v-container",
              { staticClass: "pl-4 pr-4 pb-6" },
              [
                _c(
                  "v-row",
                  [
                    _c("v-col", { attrs: { cols: "12" } }, [
                      _c("div", { staticClass: "pa-5 " }, [
                        _c("span", {
                          staticClass: "post-content",
                          domProps: { innerHTML: _vm._s(post.content) }
                        })
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-row", { staticClass: "pl-5 pr-5" }, [_c("v-divider")], 1),
            _vm._v(" "),
            _c("commentList", {
              attrs: {
                commentCount: post.comment_count,
                LikesCount: post.likes_count,
                commentListData: post.comment,
                postDetails: post,
                PostId: post.post_id,
                UserDetails: _vm.UserDetails
              },
              on: {
                AddCount: function($event) {
                  post.comment_count++
                },
                MinusCount: function($event) {
                  post.comment_count--
                }
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _vm.isLoadingMore
        ? _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("v-progress-circular", {
                attrs: { indeterminate: "", color: "primary" }
              }),
              _vm._v("\n            loading\n    ")
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./announcementPostList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/announcementPostList.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("276f8566", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);