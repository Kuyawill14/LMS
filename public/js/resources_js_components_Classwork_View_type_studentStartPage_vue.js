"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_type_studentStartPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
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
var objectiveType = function objectiveType() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_ObjectiveComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./classworkType/ObjectiveComponent */ "./resources/js/components/Classwork_View/type/classworkType/ObjectiveComponent.vue"));
};

var subjectiveType = function subjectiveType() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_SubjectiveComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./classworkType/SubjectiveComponent */ "./resources/js/components/Classwork_View/type/classworkType/SubjectiveComponent.vue"));
};

var responseLatePageWarning = function responseLatePageWarning() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_Classwork_View_type_classworkType_responseLateComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./classworkType/responseLateComponent */ "./resources/js/components/Classwork_View/type/classworkType/responseLateComponent.vue"));
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['classworkDetails', 'totalPoints', 'totalQuestion'],
  components: {
    objectiveType: objectiveType,
    subjectiveType: subjectiveType,
    responseLatePageWarning: responseLatePageWarning
  },
  data: function data() {
    return {
      DateToday: null,
      loaded: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["statusDetails"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['checkClassworkStatus'])), {}, {
    format_date: function format_date(value) {
      if (value) {
        //return moment(String(value)).format('dddd, h:mm a')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).tz("Asia/Manila").format('dddd, h:mm a');
      }
    },
    start: function start() {
      if (this.totalQuestion != 0) {
        localStorage.removeItem('time_remaining');
        this.$router.push({
          name: 'quizstart',
          params: {
            id: this.$route.params.id
          },
          query: {
            clwk: this.classworkDetails.id
          }
        });
      }
    },
    CheckFormatDue: function CheckFormatDue(value) {
      if (value) {
        //return moment(String(value)).format('YYYY-MM-DD HH:mm:ss')
        return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(String(value)).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
      }
    },
    checkStatus: function checkStatus() {
      var _this = this;

      var data = {};
      data.id = this.$route.query.clwk;
      data.type = this.classworkDetails.type;
      this.$store.dispatch('checkClassworkStatus', data).then(function () {
        _this.loaded = true;
      });
    }
  }),

  /*     beforeMount(){
        window.history.forward(1)
      }, */
  mounted: function mounted() {
    /*  if(this.classworkDetails){
       this.checkStatus();
       
     } */
    this.loaded = true;
  },
  beforeMount: function beforeMount() {
    var newDate = new Date();
    this.DateToday = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(newDate).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss'); //this.$emit('isMounted');
  }
});

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/studentStartPage.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/studentStartPage.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studentStartPage.vue?vue&type=template&id=49688562& */ "./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562&");
/* harmony import */ var _studentStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentStartPage.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _studentStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__.render,
  _studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/type/studentStartPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentStartPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStartPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_studentStartPage_vue_vue_type_template_id_49688562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./studentStartPage.vue?vue&type=template&id=49688562& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/type/studentStartPage.vue?vue&type=template&id=49688562& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
      _vm.loaded
        ? _c(
            "v-row",
            [
              _vm.classworkDetails.availability == 0
                ? _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "center" } },
                        [
                          _vm.classworkDetails.type == "Objective Type"
                            ? _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "10",
                                    xl: "10"
                                  }
                                },
                                [
                                  _vm.classworkDetails.type == "Objective Type"
                                    ? _c("objectiveType", {
                                        attrs: {
                                          classworkDetails:
                                            _vm.classworkDetails,
                                          totalPoints: _vm.totalPoints,
                                          totalQuestion: _vm.totalQuestion
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.classworkDetails.type == "Subjective Type"
                            ? _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "10",
                                    xl: "10"
                                  }
                                },
                                [
                                  _vm.classworkDetails.type == "Subjective Type"
                                    ? _c("subjectiveType", {
                                        attrs: {
                                          classworkDetails:
                                            _vm.classworkDetails,
                                          totalPoints: _vm.totalPoints,
                                          totalQuestion: _vm.totalQuestion
                                        }
                                      })
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
                : _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "12", justify: "center" } },
                    [
                      _vm.classworkDetails.publish == null
                        ? _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _vm.classworkDetails.response_late == 0 &&
                              _vm.CheckFormatDue(
                                _vm.classworkDetails.to_date
                              ) <=
                                _vm.CheckFormatDue(
                                  _vm.classworkDetails.currentDate
                                ) &&
                              _vm.classworkDetails.status == null
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "7",
                                        lg: "6",
                                        xl: "6"
                                      }
                                    },
                                    [
                                      _c("responseLatePageWarning", {
                                        attrs: {
                                          course_id:
                                            _vm.classworkDetails.course_id
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
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
                                          _vm.classworkDetails.type ==
                                          "Objective Type"
                                            ? _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "10",
                                                    xl: "10",
                                                    cols: "12"
                                                  }
                                                },
                                                [
                                                  _vm.classworkDetails.type ==
                                                  "Objective Type"
                                                    ? _c("objectiveType", {
                                                        attrs: {
                                                          classworkDetails:
                                                            _vm.classworkDetails,
                                                          totalPoints:
                                                            _vm.totalPoints,
                                                          totalQuestion:
                                                            _vm.totalQuestion
                                                        }
                                                      })
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.classworkDetails.type ==
                                          "Subjective Type"
                                            ? _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "10",
                                                    xl: "10"
                                                  }
                                                },
                                                [
                                                  _vm.classworkDetails.type ==
                                                  "Subjective Type"
                                                    ? _c("subjectiveType", {
                                                        attrs: {
                                                          classworkDetails:
                                                            _vm.classworkDetails,
                                                          totalPoints:
                                                            _vm.totalPoints,
                                                          totalQuestion:
                                                            _vm.totalQuestion
                                                        }
                                                      })
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
                            ],
                            1
                          )
                        : _c(
                            "v-row",
                            { attrs: { align: "center", justify: "center" } },
                            [
                              _vm.classworkDetails.status == null
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        md: "7",
                                        lg: "6",
                                        xl: "6"
                                      }
                                    },
                                    [
                                      _c("responseLatePageWarning", {
                                        attrs: {
                                          course_id:
                                            _vm.classworkDetails.course_id
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
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
                                          _vm.classworkDetails.type ==
                                          "Objective Type"
                                            ? _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "10",
                                                    xl: "10",
                                                    cols: "12"
                                                  }
                                                },
                                                [
                                                  _vm.classworkDetails.type ==
                                                  "Objective Type"
                                                    ? _c("objectiveType", {
                                                        attrs: {
                                                          classworkDetails:
                                                            _vm.classworkDetails,
                                                          totalPoints:
                                                            _vm.totalPoints,
                                                          totalQuestion:
                                                            _vm.totalQuestion
                                                        }
                                                      })
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.classworkDetails.type ==
                                          "Subjective Type"
                                            ? _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    cols: "12",
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "10",
                                                    xl: "10"
                                                  }
                                                },
                                                [
                                                  _vm.classworkDetails.type ==
                                                  "Subjective Type"
                                                    ? _c("subjectiveType", {
                                                        attrs: {
                                                          classworkDetails:
                                                            _vm.classworkDetails,
                                                          totalPoints:
                                                            _vm.totalPoints,
                                                          totalQuestion:
                                                            _vm.totalQuestion
                                                        }
                                                      })
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