<<<<<<< HEAD
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Course_Setup"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


var gradingCriteria = function gradingCriteria() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_course-setup_grading-criteria_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./grading-criteria */ "./resources/js/components/course-view/course-setup/grading-criteria.vue"));
};

var courseDetailsComponent = function courseDetailsComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_course-setup_courseDetailsComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./courseDetailsComponent */ "./resources/js/components/course-view/course-setup/courseDetailsComponent.vue"));
};

var classComponent = function classComponent() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_course-setup_classComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./classComponent */ "./resources/js/components/course-view/course-setup/classComponent.vue"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      e1: 1,
      classInfo: null,
      form: {
        id: '',
        course_name: '',
        course_id: '',
        class_description: '',
        course_picture: '',
        course_code: ''
      }
    };
  },
  components: {
    gradingCriteria: gradingCriteria,
    courseDetailsComponent: courseDetailsComponent,
    classComponent: classComponent
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['fetchScourse'])), {}, {
    updateCourseDetails: function updateCourseDetails() {
      this.$store.dispatch('updateCourse', this.getcourseInfo);
    },
    step: function step(_step) {
      this.e1 = _step;
    },
    beforeWindowUnload: function beforeWindowUnload(e) {
      localStorage.setItem("step", this.e1);
    }
  }),
  mounted: function mounted() {
    var step = localStorage.getItem("step");

    if (step != null) {
      this.e1 = step;
    }
  },
  beforeMount: function beforeMount() {
    window.addEventListener('beforeunload', this.beforeWindowUnload);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('beforeunload', this.beforeWindowUnload);
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseSetupComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseSetupComponent.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courseSetupComponent.vue?vue&type=template&id=0b53a2e8& */ "./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8&");
/* harmony import */ var _courseSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseSetupComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _courseSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/course-setup/courseSetupComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseSetupComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courseSetupComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courseSetupComponent_vue_vue_type_template_id_0b53a2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./courseSetupComponent.vue?vue&type=template&id=0b53a2e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/course-setup/courseSetupComponent.vue?vue&type=template&id=0b53a2e8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { "pa-0": "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "11" } },
            [
              _c(
                "v-stepper",
                {
                  model: {
                    value: _vm.e1,
                    callback: function($$v) {
                      _vm.e1 = $$v
                    },
                    expression: "e1"
                  }
                },
                [
                  _c(
                    "v-stepper-header",
                    [
                      _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.e1 > 1, step: "1" } },
                        [
                          _vm._v(
                            "\n                        Course Details\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.e1 > 2, step: "2" } },
                        [
                          _vm._v(
                            "\n                        Grading Criteria\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("v-stepper-step", { attrs: { step: "3" } }, [
                        _vm._v(
                          "\n                        Create Class\n                    "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-stepper-items",
                    [
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "1" } },
                        [
                          _vm.e1 == 1
                            ? _c("courseDetailsComponent", {
                                on: { changeStep: _vm.step }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "2" } },
                        [
                          _vm.e1 == 2
                            ? _c("gradingCriteria", {
                                on: { changeStep: _vm.step }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-content",
                        { attrs: { step: "3" } },
                        [
                          _vm.e1 == 3
                            ? _c("classComponent", {
                                on: { changeStep: _vm.step }
                              })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
=======
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4938],{66671:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={data:function(){return{e1:1,classInfo:null,form:{id:"",course_name:"",course_id:"",class_description:"",course_picture:"",course_code:""}}},components:{gradingCriteria:function(){return n.e(9747).then(n.bind(n,99747))},courseDetailsComponent:function(){return n.e(6945).then(n.bind(n,46945))},classComponent:function(){return n.e(5607).then(n.bind(n,25607))}},methods:o(o({},(0,n(20629).nv)(["fetchScourse"])),{},{updateCourseDetails:function(){this.$store.dispatch("updateCourse",this.getcourseInfo)},step:function(e){this.e1=e},beforeWindowUnload:function(e){localStorage.setItem("step",this.e1)}}),mounted:function(){var e=localStorage.getItem("step");null!=e&&(this.e1=e)},beforeMount:function(){window.addEventListener("beforeunload",this.beforeWindowUnload)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.beforeWindowUnload)}};const i=(0,n(51900).Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"pa-0":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",lg:"11"}},[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("\n                        Course Details\n                    ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("\n                        Grading Criteria\n                    ")]),e._v(" "),n("v-divider"),e._v(" "),n("v-stepper-step",{attrs:{step:"3"}},[e._v("\n                        Create Class\n                    ")])],1),e._v(" "),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[1==e.e1?n("courseDetailsComponent",{on:{changeStep:e.step}}):e._e()],1),e._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[2==e.e1?n("gradingCriteria",{on:{changeStep:e.step}}):e._e()],1),e._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[3==e.e1?n("classComponent",{on:{changeStep:e.step}}):e._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
>>>>>>> 0e37467df69098a7b79a1b275c390fa4356ba7a9
