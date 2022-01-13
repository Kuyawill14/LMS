"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_announcement-tab_actions_commentList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      CommentList: [],
      comment: '',
      data: {},
      showComment: false,
      isEditing: false,
      idEditing_id: null,
      UpdateComment: '',
      current_count: 0,
      current_page: null,
      last_page: null,
      isloading: false,
      isLoaded: false,
      readMore: [],
      readMore_id: null,
      AreaHeight: [],
      options: {
        modules: {
          'toolbar': [['bold', 'italic', 'underline', 'strike'], [{
            'list': 'bullet'
          }], ['image']]
        }
      }
    };
  },
  methods: {
    format_date: function format_date(value) {
      if (value) {
        return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(String(value)).tz('Asia/Manila').format("ddd, MMMM DD, YYYY h:mm a");
      }
    },
    CheckCommentLoad: function CheckCommentLoad() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.showComment) {
                  _this.getComments();

                  _this.showComment = !_this.showComment;
                } else {
                  _this.CommentList = [];
                  _this.showComment = !_this.showComment;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCount: function getCount() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                axios.get('/api/post/allcomment/' + _this2.postDetails.post_id).then(function (res) {
                  _this2.postDetails.comment_count = res.data.total;

                  _this2.getComments();
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getComments: function getComments() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.postDetails.comment_count != 0) {
                  _this3.isloading = true;
                  axios.get('/api/post/allcomment/' + _this3.postDetails.post_id).then(function (res) {
                    _this3.CommentList = res.data.data;
                    _this3.last_page = res.data.last_page;
                    _this3.current_count = _this3.CommentList.length;
                    _this3.current_page = 1;

                    _this3.CommentList.sort(function (a, b) {
                      return a.id - b.id;
                    });

                    _this3.CommentList.forEach(function (item) {
                      _this3.readMore.push({
                        id: item.id,
                        isLongText: false,
                        IsreadMore: false
                      });
                    });

                    _this3.isloading = false;
                    _this3.postDetails.comment_count = res.data.total;
                    setTimeout(function () {
                      return _this3.checkContainerHeight();
                    }, 1000);
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    singleCheck: function singleCheck(ref, mainindex) {
      var element = this.$refs[ref][0].clientHeight;

      if (this.$vuetify.breakpoint.mdAndUp) {
        if (element > 215) {
          this.readMore[mainindex].IsreadMore = true;
        } else {
          this.readMore[mainindex].IsreadMore = false;
        }
      } else {
        if (element > 160) {
          this.readMore[mainindex].IsreadMore = true;
        } else {
          this.readMore[mainindex].IsreadMore = false;
        }
      }
    },
    checkContainerHeight: function checkContainerHeight() {
      var _this4 = this;

      var current_index = 0;
      this.readMore.forEach(function (item) {
        var testData = _this4.postDetails.id + 'commentContainer' + current_index;
        var element = _this4.$refs[testData][0].clientHeight;

        if (_this4.$vuetify.breakpoint.mdAndUp) {
          if (element > 215) {
            item.IsreadMore = true;
          } else {
            item.IsreadMore = false;
          }
        } else {
          if (element > 160) {
            item.IsreadMore = true;
          } else {
            item.IsreadMore = false;
          }
        }

        current_index++;
      });
    },
    loadMoreComment: function loadMoreComment() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (_this5.current_page != _this5.last_page) {
                  _this5.current_page++;
                  axios.get('/api/post/allcomment/' + _this5.postDetails.post_id + '?page=' + _this5.current_page).then(function (res) {
                    res.data.data.forEach(function (item) {
                      _this5.CommentList.push(item);
                    });
                    _this5.last_page = res.data.last_page;
                    _this5.current_count = _this5.CommentList.length; //console.log(this.current_page);

                    _this5.CommentList.sort(function (a, b) {
                      return a.id - b.id;
                    });

                    _this5.CommentList.forEach(function (item) {
                      _this5.readMore.push({
                        id: item.id,
                        isLongText: false,
                        IsreadMore: false
                      });
                    });

                    _this5.postDetails.comment_count = res.data.total;
                    setTimeout(function () {
                      return _this5.checkContainerHeight();
                    }, 1000);
                  });
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    checkComment: function checkComment(comment) {
      var str = comment;

      if (str.includes('<p>')) {
        return true;
      } else {
        return false;
      }
    },
    LoadLessComment: function LoadLessComment() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.getComments();

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    addComment: function addComment() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.postDetails.isCommented = true;
                _this7.data.content = _this7.comment;
                _this7.data.course_id = _this7.$route.params.id;
                _this7.data.post_id = _this7.postDetails.post_id;
                axios.post('/api/post/comment/insert', _this7.data).then(function (res) {
                  _this7.clearComment();
                  /*  this.CommentList.push({
                       id: res.data.id,
                       content: res.data.content,
                       name: this.UserDetails.firstName+' '+this.UserDetails.lastName,
                       post_id: this.postDetails.post_id,
                       profile_pic: this.UserDetails.profile_pic,
                       created_at: res.data.created_at,
                       u_id: this.UserDetails.id
                   }) */


                  _this7.getCount(); //this.readMore.push({id: res.data.id , isLongText: false, IsreadMore: false})


                  _this7.showComment = true; //setTimeout(() => (this.checkContainerHeight()), 1000);
                  //this.postDetails.comment_count +=1;
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    clearComment: function clearComment() {
      this.comment = '';
    },
    RemoveComment: function RemoveComment(id, index) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                axios["delete"]('/api/post/comment/remove/' + id).then(function () {
                  _this8.CommentList.splice(index, 1);

                  _this8.postDetails.comment_count = _this8.postDetails.comment_count != 0 ? _this8.postDetails.comment_count - 1 : 0;
                  _this8.current_count = _this8.current_count != 0 ? _this8.current_count - 1 : 0;
                });

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    UpdateCommentData: function UpdateCommentData(Dataindex) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                axios.put('/api/post/comment/update/' + _this9.idEditing_id, {
                  comment: _this9.UpdateComment
                }).then(function () {
                  _this9.CommentList[Dataindex].content = _this9.UpdateComment;
                  _this9.UpdateComment = '';
                  _this9.idEditing_id = null;
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    LikePost: function LikePost(id, liked) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!liked) {
                  axios.post('/api/post/like', {
                    post_id: id
                  }).then(function () {
                    _this10.postDetails.liked = true;
                    _this10.postDetails.likes_count += 1;
                  });
                } else {
                  axios["delete"]('/api/post/like/delete/' + id).then(function () {
                    _this10.postDetails.liked = false;
                    _this10.postDetails.likes_count = _this10.postDetails.likes_count != 0 ? _this10.postDetails.likes_count -= 1 : 0;
                  });
                }

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.area-text[data-v-ad23e96e] { \n    border-style: none; \n    border-color: Transparent; \n    overflow: auto;\n}\n.text-field-transparent  .v-input__slot[data-v-ad23e96e] {\n  background: transparent !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.commentContent  img{\n    max-width: 100% !important;\n    max-height: 20rem !important;\n}\n.post-content  img{\n        max-height: 15rem !important;\n}\n.CommentEditor >  iframe{\n    width: 100% !important;\nheight: 20rem !important;\n}\n.CommentEditor >  .ql-editor img{\n\n    max-height: 25rem !important;\n}\n.CommentEditor >  .ql-container{\n    max-height: 70rem;\n}\ndiv.ql-tooltip{\n    left: 0px !important;\n    top: -8px !important;\n}\ndiv>.ql-tooltip-arrow{\n    display: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_0_id_ad23e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_0_id_ad23e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_0_id_ad23e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentList.vue?vue&type=template&id=ad23e96e&scoped=true& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true&");
/* harmony import */ var _commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentList.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&");
/* harmony import */ var _commentList_vue_vue_type_style_index_0_id_ad23e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&");
/* harmony import */ var _commentList_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentList.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ad23e96e",
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_0_id_ad23e96e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=0&id=ad23e96e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=style&index=1&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=style&index=1&lang=css&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_commentList_vue_vue_type_template_id_ad23e96e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./commentList.vue?vue&type=template&id=ad23e96e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/announcement-tab/actions/commentList.vue?vue&type=template&id=ad23e96e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        {
          class: !_vm.$vuetify.breakpoint.xs
            ? "mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex"
            : "mt-3 text-center pl-5 pr-3 mb-2 d-inline-flex justify-space-between"
        },
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
              ),
              _vm._v(
                "\r\n            " +
                  _vm._s(_vm.postDetails.likes_count + " like") +
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
              on: { click: _vm.CheckCommentLoad }
            },
            [
              _c(
                "v-icon",
                {
                  staticClass: "mr-1",
                  attrs: { color: _vm.postDetails.isCommented ? "blue" : "" }
                },
                [_vm._v("mdi-comment")]
              ),
              _vm._v(
                "\r\n           " +
                  _vm._s(_vm.postDetails.comment_count + " Comments") +
                  "\r\n        "
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
      _c("transition", { attrs: { transition: "v-expand-transition" } }, [
        _vm.showComment && _vm.postDetails.comment_count != 0
          ? _c("div", { staticClass: "mt-6 mb-0 pb-0" }, [
              _vm.isloading
                ? _c(
                    "div",
                    { staticClass: "mt-10" },
                    [
                      _c(
                        "v-list",
                        _vm._l(2, function(n) {
                          return _c(
                            "v-list-item",
                            { key: n },
                            [
                              _c(
                                "v-list-item-avatar",
                                [
                                  _c("v-skeleton-loader", {
                                    attrs: { type: "avatar" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-skeleton-loader", {
                                    attrs: { type: "list-item-three-line" }
                                  })
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
                "div",
                { staticClass: "pl-5 pr-5" },
                [
                  _vm.postDetails.comment_count != 0
                    ? _c(
                        "v-row",
                        { staticClass: "mt-0 mb-0" },
                        [
                          _c(
                            "v-col",
                            { staticClass: "text-left", attrs: { cols: "8" } },
                            [
                              _vm.current_count <
                                _vm.postDetails.comment_count &&
                              this.last_page != this.current_page
                                ? _c(
                                    "a",
                                    {
                                      staticStyle: {
                                        "text-decoration": "none",
                                        "font-size": "0.8rem"
                                      },
                                      attrs: { href: "" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.loadMoreComment()
                                        }
                                      }
                                    },
                                    [_vm._v("View previous comments")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              this.last_page == this.current_page &&
                              _vm.postDetails.comment_count > 5
                                ? _c(
                                    "a",
                                    {
                                      staticStyle: {
                                        "text-decoration": "none",
                                        "font-size": "0.8rem"
                                      },
                                      attrs: { href: "" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.LoadLessComment()
                                        }
                                      }
                                    },
                                    [_vm._v("Show less comments")]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "text-right", attrs: { cols: "4" } },
                            [
                              _c("small", [
                                _vm._v(
                                  "\r\n                    " +
                                    _vm._s(_vm.current_count) +
                                    " of " +
                                    _vm._s(_vm.postDetails.comment_count) +
                                    "\r\n                "
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.isloading,
                      expression: "!isloading"
                    }
                  ]
                },
                _vm._l(_vm.CommentList, function(item, index) {
                  return _c(
                    "v-container",
                    {
                      key: item.id,
                      class: _vm.$vuetify.breakpoint.mdAndUp
                        ? "d-inline-flex ml-1 pr-4 pb-2 shrink rounded-lg"
                        : "d-inline-flex pl-6 pr-4 pb-2 shrink rounded-lg",
                      attrs: { fluid: "" }
                    },
                    [
                      _vm.idEditing_id != item.id
                        ? _c(
                            "v-avatar",
                            {
                              class:
                                _vm.isEditing && _vm.idEditing_id == item.id
                                  ? "mt-1"
                                  : "",
                              attrs: {
                                color: "grey",
                                size: _vm.$vuetify.breakpoint.mdAndUp
                                  ? "40"
                                  : "30"
                              }
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
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isEditing && _vm.idEditing_id == item.id
                        ? _c(
                            "v-btn",
                            {
                              staticClass: "mt-2",
                              attrs: { icon: "", small: "" },
                              on: {
                                click: function($event) {
                                  ;(_vm.isEditing = false),
                                    (_vm.idEditing_id = null)
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\r\n                    mdi-close\r\n                "
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          ref: _vm.postDetails.id + "commentContainer" + index,
                          refInFor: true,
                          staticClass: "ma-0 pa-0",
                          staticStyle: { width: "100%" },
                          on: {
                            mouseover: function($event) {
                              return _vm.singleCheck(
                                _vm.postDetails.id + "commentContainer" + index,
                                index
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "v-alert",
                            {
                              staticClass: "ma-0 pa-0 ml-2 rounded-xl",
                              attrs: {
                                color:
                                  !_vm.isEditing || _vm.idEditing_id != item.id
                                    ? "#F5F5F5"
                                    : ""
                              }
                            },
                            [
                              _c(
                                "p",
                                [
                                  _c(
                                    "v-row",
                                    { staticClass: "ma-0" },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "mb-0 pb-0",
                                          attrs: { cols: "12" }
                                        },
                                        [
                                          _c(
                                            "v-row",
                                            [
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "text-left mb-0 pb-0",
                                                  attrs: { cols: "8" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "font-weight-medium mb-0 pb-0"
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "mt-0 pt-0 mb-2",
                                                      staticStyle: {
                                                        "font-size": "12px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.format_date(
                                                            item.created_at
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "text-right mb-0 pb-0",
                                                  attrs: { cols: "4" }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    [
                                                      (item.u_id ==
                                                        _vm.UserDetails.id ||
                                                        _vm.UserDetails.role ==
                                                          "Teacher") &&
                                                      _vm.idEditing_id !=
                                                        item.id
                                                        ? _c(
                                                            "v-menu",
                                                            {
                                                              attrs: {
                                                                "offset-y": ""
                                                              },
                                                              scopedSlots: _vm._u(
                                                                [
                                                                  {
                                                                    key:
                                                                      "activator",
                                                                    fn: function(
                                                                      ref
                                                                    ) {
                                                                      var on =
                                                                        ref.on
                                                                      var attrs =
                                                                        ref.attrs
                                                                      return [
                                                                        _c(
                                                                          "v-btn",
                                                                          _vm._g(
                                                                            _vm._b(
                                                                              {
                                                                                attrs: {
                                                                                  small:
                                                                                    "",
                                                                                  icon:
                                                                                    ""
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
                                                                              "v-icon",
                                                                              {
                                                                                attrs: {
                                                                                  small:
                                                                                    ""
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "mdi-dots-vertical"
                                                                                )
                                                                              ]
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
                                                              _c(
                                                                "v-list",
                                                                {
                                                                  attrs: {
                                                                    "pa-0": "",
                                                                    "ma-0": ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item",
                                                                    {
                                                                      attrs: {
                                                                        "ma-0":
                                                                          "",
                                                                        "pa-0":
                                                                          ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-list-item-title",
                                                                        [
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                text:
                                                                                  ""
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  ;(_vm.UpdateComment =
                                                                                    item.content),
                                                                                    (_vm.isEditing = true),
                                                                                    (_vm.idEditing_id =
                                                                                      item.id)
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Edit"
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
                                                                    {
                                                                      attrs: {
                                                                        "ma-0":
                                                                          "",
                                                                        "pa-0":
                                                                          ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-list-item-title",
                                                                        [
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                text:
                                                                                  ""
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.RemoveComment(
                                                                                    item.id,
                                                                                    index
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Remove"
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
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  staticClass:
                                                    "mb-0 pb-0 mt-0 pt-0 pl-0 pr-0",
                                                  attrs: { cols: "12" }
                                                },
                                                [
                                                  _c(
                                                    "v-lazy",
                                                    {
                                                      staticClass: "ml-0 pl-0",
                                                      attrs: { transition: "" }
                                                    },
                                                    [
                                                      (!_vm.isEditing ||
                                                        _vm.idEditing_id !=
                                                          item.id) &&
                                                      _vm.checkComment(
                                                        item.content
                                                      ) == true
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "pl-5",
                                                              style: !_vm
                                                                .$vuetify
                                                                .breakpoint
                                                                .mdAndUp
                                                                ? _vm.readMore[
                                                                    index
                                                                  ].isLongText
                                                                  ? "line-height:1.5;font-size:0.9rem;background-color:transparent"
                                                                  : "line-height:1.5;font-size:0.9rem;background-color:transparent;max-height:120px;overflow:hidden"
                                                                : _vm.readMore[
                                                                    index
                                                                  ].isLongText
                                                                ? "line-height:1.5;font-size:0.95rem;"
                                                                : "line-height:1.5;font-size:0.95rem;max-height:160px;overflow:hidden"
                                                            },
                                                            [
                                                              _c("span", {
                                                                domProps: {
                                                                  innerHTML: _vm._s(
                                                                    item.content
                                                                  )
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      (!_vm.isEditing ||
                                                        _vm.idEditing_id !=
                                                          item.id) &&
                                                      _vm.checkComment(
                                                        item.content
                                                      ) == false
                                                        ? _c("v-textarea", {
                                                            staticClass:
                                                              "mt-0 pt-0 ml-0 pl-0 area-text text-field-transparent",
                                                            style: !_vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp
                                                              ? _vm.readMore[
                                                                  index
                                                                ].isLongText
                                                                ? "line-height:1.5;font-size:0.9rem;background-color:transparent"
                                                                : "line-height:1.5;font-size:0.9rem;background-color:transparent;max-height:120px"
                                                              : _vm.readMore[
                                                                  index
                                                                ].isLongText
                                                              ? "line-height:1.5;font-size:0.95rem;"
                                                              : "line-height:1.5;font-size:0.95rem;max-height:160px;overflow:hidden",
                                                            attrs: {
                                                              rounded: "",
                                                              readonly: "",
                                                              "hide-details":
                                                                "",
                                                              flat: "",
                                                              rows: "1",
                                                              "auto-grow": "",
                                                              type: "text"
                                                            },
                                                            model: {
                                                              value:
                                                                item.content,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  item,
                                                                  "content",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "item.content"
                                                            }
                                                          })
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.readMore[index]
                                                        .IsreadMore
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "text-right"
                                                            },
                                                            [
                                                              !_vm.readMore[
                                                                index
                                                              ].isLongText
                                                                ? _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "mr-5",
                                                                      staticStyle: {
                                                                        "text-decoration":
                                                                          "none",
                                                                        "font-size":
                                                                          "12px"
                                                                      },
                                                                      attrs: {
                                                                        href: ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          $event.preventDefault()
                                                                          _vm.readMore[
                                                                            index
                                                                          ].isLongText = true
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Read more.."
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              _vm.readMore[
                                                                index
                                                              ].isLongText
                                                                ? _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "mr-5",
                                                                      staticStyle: {
                                                                        "text-decoration":
                                                                          "none",
                                                                        "font-size":
                                                                          "12px"
                                                                      },
                                                                      attrs: {
                                                                        href: ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          $event.preventDefault()
                                                                          _vm.readMore[
                                                                            index
                                                                          ].isLongText = false
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Read less.."
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-lazy",
                                                    {
                                                      attrs: { transition: "" }
                                                    },
                                                    [
                                                      _vm.isEditing &&
                                                      _vm.idEditing_id ==
                                                        item.id &&
                                                      _vm.checkComment(
                                                        item.content
                                                      ) == false
                                                        ? _c("v-textarea", {
                                                            class: !_vm.$vuetify
                                                              .breakpoint
                                                              .mdAndUp
                                                              ? "text-caption"
                                                              : "",
                                                            attrs: {
                                                              "append-outer-icon":
                                                                "mdi-send",
                                                              "prepend-avatar":
                                                                "mdi-emoticon-dead",
                                                              filled: "",
                                                              rounded: "",
                                                              "hide-details":
                                                                "",
                                                              dense: "",
                                                              rows: "1",
                                                              "auto-grow": "",
                                                              "clear-icon":
                                                                "mdi-close-circle",
                                                              clearable: "",
                                                              placeholder:
                                                                "Comment",
                                                              type: "text"
                                                            },
                                                            on: {
                                                              "click:append-outer": function(
                                                                $event
                                                              ) {
                                                                return _vm.UpdateCommentData(
                                                                  index
                                                                )
                                                              },
                                                              "click:clear": function(
                                                                $event
                                                              ) {
                                                                _vm.UpdateComment =
                                                                  ""
                                                              }
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.UpdateComment,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.UpdateComment = $$v
                                                              },
                                                              expression:
                                                                "UpdateComment"
                                                            }
                                                          })
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.isEditing &&
                                                      _vm.idEditing_id ==
                                                        item.id &&
                                                      _vm.checkComment(
                                                        item.content
                                                      ) == true
                                                        ? _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "d-flex"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "pl-5 pr-3",
                                                                  staticStyle: {
                                                                    width:
                                                                      "100%"
                                                                  }
                                                                },
                                                                [
                                                                  _c("editor", {
                                                                    staticClass:
                                                                      "CommentEditor",
                                                                    attrs: {
                                                                      options:
                                                                        _vm.options,
                                                                      placeholder:
                                                                        "Comment",
                                                                      theme:
                                                                        "bubble"
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.UpdateComment,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.UpdateComment = $$v
                                                                      },
                                                                      expression:
                                                                        "UpdateComment"
                                                                    }
                                                                  })
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  staticClass:
                                                                    "ml-2",
                                                                  attrs: {
                                                                    icon: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.UpdateCommentData(
                                                                        index
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-send"
                                                                    )
                                                                  ])
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
                            ]
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
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-3 pt-0 mt-0 mb-0 pb-0 mt-6" },
        [
          _c(
            "v-col",
            { staticClass: "ma-0 pa-0", attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                { staticClass: "pl-5 pr-5 pb-2" },
                [_c("v-divider")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                { staticClass: "mb-0 pb-0 mt-0 pt-0 " },
                [
                  _c(
                    "v-list-item",
                    { staticClass: "mb-0 pb-0" },
                    [
                      _vm.$vuetify.breakpoint.mdAndUp
                        ? _c(
                            "v-list-item-avatar",
                            {
                              staticClass: "mt-0 pt-0",
                              attrs: { color: "secondary" }
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        { staticClass: "ma-0 pa-0 mb-4 mt-4" },
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c("editor", {
                                staticClass: "CommentEditor",
                                attrs: {
                                  options: _vm.options,
                                  placeholder: "Comment",
                                  theme: "bubble"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-action",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: { click: _vm.addComment }
                            },
                            [_c("v-icon", [_vm._v("mdi-send")])],
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