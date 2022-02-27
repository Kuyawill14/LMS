"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Course_Classwork"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var classworkList = function classworkList() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_classwork-tab_classworkList_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./classworkList */ "./resources/js/components/course-view/tabs/classwork-tab/classworkList.vue"));
};

var newClassworkModal = function newClassworkModal() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./newClassworkModal */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue"));
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['role'],
  components: {
    classworkList: classworkList,
    newClassworkModal: newClassworkModal
  },
  data: function data() {
    return {
      classworks: [],
      isLeaving: false,
      isGetting: true,
      dialog: false,
      ClassworkLength: null,
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: 'Classwork',
        disabled: true,
        link: 'classwork'
      }]
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['get_Classworks', 'get_isDataLoaded']),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['fetchClassworks'])), {}, {
    getGeneralClassworks: function getGeneralClassworks() {
      var _this = this;

      this.$store.dispatch('SetDataisNotLoaded');
      this.$store.dispatch('fetchClassworks', this.$route.params.id).then(function () {
        if (_this.role == 'Teacher') {
          _this.get_Classworks.forEach(function (element) {
            _this.ClassworkLength += element.length;
          });
        } else if (_this.role == 'Student') {
          _this.get_Classworks.ClassworksList.forEach(function (element) {
            _this.ClassworkLength += element.length;
          });
        }
      });
    },
    reloadClassworks: function reloadClassworks() {
      var _this2 = this;

      this.$store.dispatch('SetDataisNotLoaded');
      this.$store.dispatch('fetchClassworks', this.$route.params.id).then(function () {
        _this2.$store.dispatch('SetDataisLoaded');

        if (_this2.role == 'Teacher') {
          _this2.get_Classworks.forEach(function (element) {
            _this2.ClassworkLength += element.length;
          });
        } else if (_this2.role == 'Student') {
          _this2.get_Classworks.ClassworksList.forEach(function (element) {
            _this2.ClassworkLength += element.length;
          });
        }
      });
    }
  }),
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.isLeaving = true;
    next();
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next(function (vm) {
                vm.getGeneralClassworks();
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.dispatch("ClearClasswork");
  },
  mounted: function mounted() {
    $('head > title').text('Classworks');
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classworkComponent.vue?vue&type=template&id=5b1efe30& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30&");
/* harmony import */ var _classworkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classworkComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _classworkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__.render,
  _classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_classworkComponent_vue_vue_type_template_id_5b1efe30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./classworkComponent.vue?vue&type=template&id=5b1efe30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/classworkComponent.vue?vue&type=template&id=5b1efe30& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
        "v-overlay",
        { attrs: { value: _vm.isLeaving } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-breadcrumbs", {
        staticClass: "ma-0 pa-0 mt-3",
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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.get_isDataLoaded,
              expression: "get_isDataLoaded"
            }
          ],
          staticClass: "ml-0 mr-0"
        },
        [
          _c("classworkList", {
            attrs: {
              ClassworkLength: _vm.ClassworkLength,
              classworks: _vm.get_Classworks,
              role: _vm.role
            },
            on: {
              reloadClassworks: function($event) {
                return _vm.reloadClassworks()
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      !_vm.get_isDataLoaded
        ? _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { staticClass: "mb-5" },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "text-left mb-0 pb-0",
                      attrs: { cols: "12", md: "9", lg: "9" }
                    },
                    [_c("v-skeleton-loader", { attrs: { type: "heading" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "text-right mb-0 pb-0",
                      attrs: { cols: "12", md: "3", lg: "3" }
                    },
                    [
                      _c("v-skeleton-loader", {
                        attrs: { "min-width": "400", type: "button" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.role == "Teacher" ? 2 : 3, function(i) {
                return _c(
                  "v-row",
                  { key: i },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12" } },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "5" } },
                              [
                                _c("v-skeleton-loader", {
                                  staticClass: "mx-atuo",
                                  attrs: { "max-width": "350", type: "heading" }
                                })
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
                    _vm._l(3, function(i) {
                      return _c(
                        "v-col",
                        {
                          key: i,
                          staticClass: "mt-0 pt-0",
                          attrs: { cols: "12", md: "6", lg: "4", xl: "4" }
                        },
                        [
                          _c(
                            "v-card",
                            { staticClass: "pa-4" },
                            [
                              _c("v-skeleton-loader", {
                                staticClass: "mx-atuo",
                                attrs: { type: "list-item-avatar-two-line" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              })
            ],
            2
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