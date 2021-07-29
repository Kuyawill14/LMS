(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_classwork-tab_newClassworkModal_vue-_69321"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      isTimer: false,
      file: null,
      fileSize: null,
      loading: false,
      dialog: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({}),
      nullDatetime: null,
      datetime: new Date(),
      datetimeString: '2019-01-01 12:00',
      formattedDatetime: '09/01/2019 12:00',
      textFieldProps: {
        appendIcon: 'event'
      },
      dateProps: {
        headerColor: 'primary'
      },
      timeProps: {
        useSeconds: true,
        ampmInTitle: true
      },
      FieldRules: [function (v) {
        return !!v || 'Field is required';
      }]
    };
  },
  methods: {
    validate: function validate() {
      var _this = this;

      this.loading = !this.loading;

      if (this.$refs.NewClassworkForm.validate()) {
        this.SaveClasswork();
      } else {
        setTimeout(function () {
          _this.loading = !_this.loading;
        }, 1000);
      }
    },
    toastSuccess: function toastSuccess() {
      return this.$toasted.success("Classwork Successfully added", {
        theme: "toasted-primary",
        position: "top-center",
        icon: "done",
        duration: 3000
      });
    },
    SaveClasswork: function SaveClasswork() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var fd;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fd = new FormData();
                fd.append('course_id', _this2.$route.params.id);
                fd.append('type', _this2.form.type);
                fd.append('title', _this2.form.title);
                fd.append('instruction', _this2.form.instruction);

                if (_this2.form.type == 'Objective Type') {
                  _this2.form.points = '';
                } else if (_this2.form.type == 'Subjective Type') {
                  _this2.form.duration = '';
                }

                fd.append('points', _this2.form.points);
                fd.append('duration', _this2.form.duration);
                fd.append('attachment_name', _this2.file_name);
                fd.append('attachment_size', _this2.fileSize);
                fd.append('file', _this2.file); //this.form.course_id = this.$route.params.id;

                _this2.$store.dispatch('createClasswork', fd).then(function (res) {
                  if (res.status == 201) {
                    _this2.toastSuccess();

                    _this2.form.reset();

                    _this2.dialog = false;
                    _this2.loading = !_this2.loading;

                    _this2.$router.push({
                      name: 'clwk',
                      params: {
                        id: res.data.course_id
                      },
                      query: {
                        clwk: res.data.id
                      }
                    });

                    _this2.$emit('realodClassworks');
                  }
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onFileChange: function onFileChange(element) {
      this.file = element[0];
      this.file_name = element[0].name;

      if (element[0].size > 1000000) {
        var kbsize = element[0].size * 0.001;
        var mbsize = kbsize * 0.001;
        var finalSize = parseInt(mbsize);
        this.fileSize = finalSize + 'mb';
      } else {
        var sizeFile = element[0].size * 0.001;

        var _finalSize = parseInt(sizeFile);

        this.fileSize = _finalSize + 'kb';
      } //this.ext = this.getFileExt(file.name);
      //this.file = file;

    }
  },
  beforeMount: function beforeMount() {
    /* this.form.type = 'Objective Type'; */
  }
});

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newClassworkModal.vue?vue&type=template&id=753c8b50& */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&");
/* harmony import */ var _newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newClassworkModal.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.render,
  _newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newClassworkModal_vue_vue_type_template_id_753c8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./newClassworkModal.vue?vue&type=template&id=753c8b50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/classwork-tab/newClassworkModal.vue?vue&type=template&id=753c8b50& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-form",
        {
          ref: "NewClassworkForm",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [_vm._v("Add Classwork")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              outlined: "",
                              rules: _vm.FieldRules,
                              items: ["Objective Type", "Subjective Type"],
                              label: "Type"
                            },
                            model: {
                              value: _vm.form.type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "type", $$v)
                              },
                              expression: "form.type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              rows: "1",
                              outlined: "",
                              rules: _vm.FieldRules,
                              label: "Title",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.form.title,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mb-0 pb-0 pt-0 mt-0",
                          attrs: { cols: "12" }
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              outlined: "",
                              rules: _vm.FieldRules,
                              label: "Instruction",
                              "auto-grow": ""
                            },
                            model: {
                              value: _vm.form.instruction,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "instruction", $$v)
                              },
                              expression: "form.instruction"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.type == "Objective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.FieldRules,
                                  "append-icon":
                                    "mdi-" +
                                    (_vm.isTimer ? "timer" : "timer-off"),
                                  outlined: "",
                                  min: "0",
                                  hint: "mins",
                                  label: "Time Limit",
                                  type: "number"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.isTimer = !_vm.isTimer
                                  }
                                },
                                model: {
                                  value: _vm.form.duration,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "duration", $$v)
                                  },
                                  expression: "form.duration"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.type == "Subjective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm.form.type == "Subjective Type"
                                ? _c("v-file-input", {
                                    ref: "inputFile",
                                    attrs: {
                                      placeholder: "Upload your documents",
                                      label: "File input",
                                      outlined: "",
                                      "show-size": "",
                                      counter: "",
                                      multiple: "",
                                      "prepend-icon": "",
                                      "prepend-inner-icon": "mdi-paperclip"
                                    },
                                    on: { change: _vm.onFileChange },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "selection",
                                          fn: function(ref) {
                                            var text = ref.text
                                            return [
                                              _c(
                                                "v-chip",
                                                {
                                                  attrs: {
                                                    small: "",
                                                    label: "",
                                                    color: "primary"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(text) +
                                                      "\n                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      1221588800
                                    )
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.type == "Subjective Type"
                        ? _c(
                            "v-col",
                            {
                              staticClass: "mb-0 pb-0 pt-0 mt-0",
                              attrs: { cols: "12" }
                            },
                            [
                              _vm.form.type == "Subjective Type"
                                ? _c("v-text-field", {
                                    attrs: {
                                      rules: _vm.FieldRules,
                                      outlined: "",
                                      min: "0",
                                      label: "Points",
                                      type: "number"
                                    },
                                    model: {
                                      value: _vm.form.points,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "points", $$v)
                                      },
                                      expression: "form.points"
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
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "blue darken-1",
                    text: "",
                    disabled: _vm.loading
                  },
                  on: {
                    click: function($event) {
                      return _vm.$emit("CloseDialog")
                    }
                  }
                },
                [_vm._v("\n                Close\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "blue darken-1",
                    text: "",
                    disabled: _vm.loading,
                    loading: _vm.loading
                  },
                  on: {
                    click: function($event) {
                      return _vm.validate()
                    }
                  }
                },
                [_vm._v("\n                Save\n            ")]
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