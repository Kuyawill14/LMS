(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['UserDetails', 'postDetails'],
  data: function data() {
    return {
      totalComment: null,
      isLengthLoaded: false,
      CommentList: [],
      password: 'Password',
      showLess: true,
      comment: '',
      marker: true,
      iconIndex: 0,
      data: {},
      showComment: false,
      commentLength: null,
      isRemoving: false,
      isEditing: false,
      idEditing_id: null,
      UpdateComment: ''
    };
  },
  methods: {
    CheckCommentLoad: function CheckCommentLoad() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.showComment) {
                  _this.getComments();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getComments: function getComments() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get('/api/post/allcomment/' + _this2.PostId, {
                  Check: _this2.showLess
                }).then(function (res) {
                  _this2.CommentList = res.data;

                  _this2.getCommentCount();
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCommentCount: function getCommentCount() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios.get('/api/post/commentCount/' + _this3.PostId).then(function (res) {
                  _this3.commentLength = res.data;
                  _this3.isLengthLoaded = true;
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    addComment: function addComment() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.data.content = _this4.comment;
                _this4.data.course_id = _this4.$route.params.id;
                _this4.data.post_id = _this4.PostId;
                axios.post('/api/post/comment/insert', _this4.data).then(function (res) {
                  _this4.showComment = true;

                  _this4.$emit("AddCount");

                  _this4.clearComment();

                  _this4.getComments();
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    clearComment: function clearComment() {
      this.comment = '';
    },
    RemoveComment: function RemoveComment(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                axios["delete"]('/api/post/comment/remove/' + id).then(function () {
                  _this5.$emit("MinusCount"); //this.getCommentCount();


                  _this5.getComments();
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    UpdateCommentData: function UpdateCommentData() {},
    LikePost: function LikePost(id, liked) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!liked) {
                  axios.post('/api/post/like', {
                    post_id: id
                  }).then(function () {
                    _this6.postDetails.liked = true;
                    _this6.postDetails.likes_count += 1;
                  });
                } else {
                  axios["delete"]('/api/post/like/delete/' + id).then(function () {
                    _this6.postDetails.liked = false;
                    _this6.postDetails.likes_count = _this6.postDetails.likes_count != 0 ? _this6.postDetails.likes_count -= 1 : 0;
                  });
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentList.vue?vue&type=template&id=ad23e96e& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&");
/* harmony import */ var _commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentList.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__.render,
  _commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=template&id=ad23e96e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e& ***!
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
        "v-container",
        { staticClass: "mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex" },
        [
          _c(
            "v-btn",
            {
              attrs: { rounded: "", text: "" },
              on: {
                click: function($event) {
                  return _vm.LikePost(
                    _vm.postDetails.post_id,
                    _vm.postDetails.liked
                  )
                }
              }
            },
            [
              _c(
                "v-badge",
                {
                  attrs: {
                    "offset-x": "40",
                    "offset-y": "12",
                    content: _vm.postDetails.likes_count,
                    value: _vm.postDetails.likes_count
                  }
                },
                [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-1",
                      attrs: { color: _vm.postDetails.liked ? "blue" : "" }
                    },
                    [
                      _vm._v(
                        "  " +
                          _vm._s(
                            _vm.postDetails.liked
                              ? "mdi-thumb-up"
                              : "mdi-thumb-up-outline"
                          ) +
                          " "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(
                "\r\n            " +
                  _vm._s(_vm.postDetails.liked ? "" : "like") +
                  "\r\n        "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { rounded: "", text: "" },
              on: {
                click: function($event) {
                  _vm.postDetails.comment_count != 0
                    ? (_vm.showComment = !_vm.showComment)
                    : ""
                }
              }
            },
            [
              _c(
                "v-badge",
                {
                  attrs: {
                    "offset-x": "40",
                    "offset-y": "12",
                    content: !_vm.showComment
                      ? _vm.postDetails.comment_count
                      : "",
                    value: !_vm.showComment ? _vm.postDetails.comment_count : ""
                  }
                },
                [
                  _c("v-icon", { staticClass: "mr-1" }, [
                    _vm._v("mdi-comment-outline")
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
      _c("v-row", { staticClass: "pl-5 pr-5" }, [_c("v-divider")], 1),
      _vm._v(" "),
      _vm.showComment
        ? _c(
            "div",
            { staticClass: "mt-6" },
            [
              _c(
                "transition",
                { attrs: { transition: "v-expand-transition" } },
                _vm._l(_vm.postDetails.comment, function(item) {
                  return _c(
                    "v-container",
                    {
                      key: item.id,
                      staticClass: "d-inline-flex pl-7 pr-4 pb-3 shrink",
                      attrs: { "pa-0": "" }
                    },
                    [
                      _c(
                        "v-avatar",
                        {
                          class:
                            _vm.isEditing && _vm.idEditing_id == item.id
                              ? "mt-1"
                              : "",
                          attrs: { size: "36" }
                        },
                        [
                          _c("v-img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              src:
                                item.profile_pic == null ||
                                item.profile_pic == ""
                                  ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                                    item.name
                                  : item.profile_pic
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        {
                          staticClass: "d-flex flex-row ml-1 mt-1",
                          attrs: { "ma-0": "", "pa-0": "" }
                        },
                        [
                          _c(
                            "v-container",
                            {
                              staticClass: "d-flex flex-column ml-1 pr-10",
                              attrs: { "ma-0": "", "pa-0": "" }
                            },
                            [
                              !_vm.isEditing || _vm.idEditing_id != item.id
                                ? _c("span", { staticClass: "d-block name" }, [
                                    _vm._v(_vm._s(item.name))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.isEditing || _vm.idEditing_id != item.id
                                ? _c(
                                    "span",
                                    {
                                      staticClass: "caption",
                                      staticStyle: { "line-height": "1.5" }
                                    },
                                    [_vm._v(_vm._s(item.content))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.isEditing && _vm.idEditing_id == item.id
                                ? _c("v-text-field", {
                                    staticClass: "text-caption",
                                    attrs: {
                                      "append-outer-icon": "mdi-send",
                                      "prepend-avatar": "mdi-emoticon-dead",
                                      filled: "",
                                      rounded: "",
                                      dense: "",
                                      "clear-icon": "mdi-close-circle",
                                      clearable: "",
                                      placeholder: "Comment",
                                      type: "text"
                                    },
                                    on: {
                                      "click:append-outer": function($event) {
                                        return _vm.UpdateCommentData()
                                      },
                                      "click:clear": function($event) {
                                        _vm.UpdateComment = ""
                                      }
                                    },
                                    model: {
                                      value: _vm.UpdateComment,
                                      callback: function($$v) {
                                        _vm.UpdateComment = $$v
                                      },
                                      expression: "UpdateComment"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-menu",
                            {
                              attrs: { "offset-y": "" },
                              scopedSlots: _vm._u(
                                [
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
                                              { attrs: { icon: "" } },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-dots-horizontal")
                                            ])
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
                              _c(
                                "v-list",
                                { attrs: { "pa-0": "", "ma-0": "" } },
                                [
                                  _c(
                                    "v-list-item",
                                    { attrs: { "ma-0": "", "pa-0": "" } },
                                    [
                                      _c(
                                        "v-list-item-title",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { text: "" },
                                              on: {
                                                click: function($event) {
                                                  ;(_vm.UpdateComment =
                                                    item.content),
                                                    (_vm.isEditing = true),
                                                    (_vm.idEditing_id = item.id)
                                                }
                                              }
                                            },
                                            [_vm._v("Edit")]
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
                                    { attrs: { "ma-0": "", "pa-0": "" } },
                                    [
                                      _c(
                                        "v-list-item-title",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { text: "" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.RemoveComment(
                                                    item.id
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Remove")]
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
                                    { attrs: { "ma-0": "", "pa-0": "" } },
                                    [
                                      _c(
                                        "v-list-item-title",
                                        [
                                          _c("v-btn", { attrs: { text: "" } }, [
                                            _vm._v("Hide")
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
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-1 pr-7", attrs: { nu: "" } },
        [
          _c(
            "v-col",
            {
              staticClass: "pr-0 mr-0",
              attrs: { cols: "2", sm: "2", lg: "1", md: "1" }
            },
            [
              _c(
                "v-avatar",
                {
                  class:
                    !_vm.$vuetify.breakpoint.xs && !_vm.$vuetify.breakpoint.sm
                      ? "ml-7"
                      : "ml-6",
                  attrs: { size: "36" }
                },
                [
                  _c("v-img", {
                    attrs: {
                      src:
                        _vm.UserDetails.profile_pic == null ||
                        _vm.UserDetails.profile_pic == ""
                          ? "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                            (_vm.UserDetails.firstName +
                              " " +
                              _vm.UserDetails.lastName)
                          : _vm.UserDetails.profile_pic
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
            "v-col",
            {
              staticClass: "pl-0 ml-0",
              attrs: { cols: "10", sm: "10", lg: "11", md: "11" }
            },
            [
              _c("v-text-field", {
                staticClass: "text-caption pl-0",
                attrs: {
                  "append-outer-icon": "mdi-send",
                  "prepend-avatar": "mdi-emoticon-dead",
                  filled: "",
                  rounded: "",
                  dense: "",
                  "clear-icon": "mdi-close-circle",
                  clearable: "",
                  placeholder: "Comment",
                  type: "text"
                },
                on: {
                  "click:append-outer": _vm.addComment,
                  "click:clear": _vm.clearComment
                },
                model: {
                  value: _vm.comment,
                  callback: function($$v) {
                    _vm.comment = $$v
                  },
                  expression: "comment"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);