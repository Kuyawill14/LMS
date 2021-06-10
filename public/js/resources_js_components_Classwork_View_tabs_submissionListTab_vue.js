(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Classwork_View_tabs_submissionListTab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      src: '../../storage/test.pdf',
      currentPage: 0,
      pageCount: 0
    };
  },
  methods: {
    previewPDF: function previewPDF(url) {
      this.src = vue_pdf__WEBPACK_IMPORTED_MODULE_0__.default.createLoadingTask(url);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@-webkit-keyframes resizeSensorVisibility {\nfrom { top: 0;\n}\n}\n@keyframes resizeSensorVisibility {\nfrom { top: 0;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* see https://github.com/mozilla/pdf.js/blob/55a853b6678cf3d05681ffbb521e5228e607b5d2/test/annotation_layer_test.css */\n.annotationLayer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\n}\n.annotationLayer section {\r\n\tposition: absolute;\n}\n.annotationLayer .linkAnnotation > a {\r\n\tposition: absolute;\r\n\tfont-size: 1em;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\n}\n.annotationLayer .linkAnnotation > a /* -ms-a */  {\r\n\tbackground: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\") 0 0 repeat;\n}\n.annotationLayer .linkAnnotation > a:hover {\r\n\topacity: 0.2;\r\n\tbackground: #ff0;\r\n\tbox-shadow: 0px 2px 10px #ff0;\n}\n.annotationLayer .textAnnotation img {\r\n\tposition: absolute;\r\n\tcursor: pointer;\n}\n.annotationLayer .textWidgetAnnotation input,\r\n.annotationLayer .textWidgetAnnotation textarea,\r\n.annotationLayer .choiceWidgetAnnotation select,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n\tbackground-color: rgba(0, 54, 255, 0.13);\r\n\tborder: 1px solid transparent;\r\n\tbox-sizing: border-box;\r\n\tfont-size: 9px;\r\n\theight: 100%;\r\n\tpadding: 0 3px;\r\n\tvertical-align: top;\r\n\twidth: 100%;\n}\n.annotationLayer .textWidgetAnnotation textarea {\r\n\tfont: message-box;\r\n\tfont-size: 9px;\r\n\tresize: none;\n}\n.annotationLayer .textWidgetAnnotation input[disabled],\r\n.annotationLayer .textWidgetAnnotation textarea[disabled],\r\n.annotationLayer .choiceWidgetAnnotation select[disabled],\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\r\n\tbackground: none;\r\n\tborder: 1px solid transparent;\r\n\tcursor: not-allowed;\n}\n.annotationLayer .textWidgetAnnotation input:hover,\r\n.annotationLayer .textWidgetAnnotation textarea:hover,\r\n.annotationLayer .choiceWidgetAnnotation select:hover,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\r\n\tborder: 1px solid #000;\n}\n.annotationLayer .textWidgetAnnotation input:focus,\r\n.annotationLayer .textWidgetAnnotation textarea:focus,\r\n.annotationLayer .choiceWidgetAnnotation select:focus {\r\n\tbackground: none;\r\n\tborder: 1px solid transparent;\n}\n.annotationLayer .textWidgetAnnotation input.comb {\r\n\tfont-family: monospace;\r\n\tpadding-left: 2px;\r\n\tpadding-right: 0;\n}\n.annotationLayer .textWidgetAnnotation input.comb:focus {\r\n\t/*\r\n\t * Letter spacing is placed on the right side of each character. Hence, the\r\n\t * letter spacing of the last character may be placed outside the visible\r\n\t * area, causing horizontal scrolling. We avoid this by extending the width\r\n\t * when the element has focus and revert this when it loses focus.\r\n\t */\r\n\twidth: 115%;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\n}\n.annotationLayer .popupWrapper {\r\n\tposition: absolute;\r\n\twidth: 20em;\n}\n.annotationLayer .popup {\r\n\tposition: absolute;\r\n\tz-index: 200;\r\n\tmax-width: 20em;\r\n\tbackground-color: #FFFF99;\r\n\tbox-shadow: 0px 2px 5px #333;\r\n\tborder-radius: 2px;\r\n\tpadding: 0.6em;\r\n\tmargin-left: 5px;\r\n\tcursor: pointer;\r\n\tword-wrap: break-word;\n}\n.annotationLayer .popup h1 {\r\n\tfont-size: 1em;\r\n\tborder-bottom: 1px solid #000000;\r\n\tpadding-bottom: 0.2em;\n}\n.annotationLayer .popup p {\r\n\tpadding-top: 0.2em;\n}\n.annotationLayer .highlightAnnotation,\r\n.annotationLayer .underlineAnnotation,\r\n.annotationLayer .squigglyAnnotation,\r\n.annotationLayer .strikeoutAnnotation,\r\n.annotationLayer .lineAnnotation svg line,\r\n.annotationLayer .fileAttachmentAnnotation {\r\n\tcursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-pdf/src/vuePdfNoSss.vue":
/*!**************************************************!*\
  !*** ./node_modules/vue-pdf/src/vuePdfNoSss.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vuePdfNoSss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vuePdfNoSss.vue?vue&type=script&lang=js& */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js&");
/* harmony import */ var _annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotationLayer.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;

;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _vuePdfNoSss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-pdf/src/vuePdfNoSss.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _componentFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentFactory.js */ "./node_modules/vue-pdf/src/componentFactory.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
//




if ( process.env.VUE_ENV !== 'server' ) {

	var pdfjsWrapper = __webpack_require__(/*! ./pdfjsWrapper.js */ "./node_modules/vue-pdf/src/pdfjsWrapper.js").default;
	var PDFJS = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfjs-dist/es5/build/pdf.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	if ( typeof window !== 'undefined' && 'Worker' in window && navigator.appVersion.indexOf('MSIE 10') === -1 ) {

		var PdfjsWorker = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'worker-loader!pdfjs-dist/es5/build/pdf.worker.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
		PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker();
	}

	var component = (0,_componentFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)(pdfjsWrapper(PDFJS));
} else {

	var component = (0,_componentFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)({});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);


/***/ }),

/***/ "./node_modules/vue-resize-sensor/src/resize-sensor.vue":
/*!**************************************************************!*\
  !*** ./node_modules/vue-resize-sensor/src/resize-sensor.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resize_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize-sensor.vue?vue&type=script&lang=js& */ "./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js&");
/* harmony import */ var _resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize-sensor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;

;


/* normalize component */

var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _resize_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-resize-sensor/src/resize-sensor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

	// thanks to https://github.com/marcj/css-element-queries
	props: {
		initial: {
			type: Boolean,
			default: false,
		}
	},
	data: function() {
		return {
			size: {
				width: -1,
				height: -1
			}
		}
	},
	methods: {
		reset: function() {

			var expand = this.$el.firstChild;
			var shrink = this.$el.lastChild;
			expand.scrollLeft = 100000;
			expand.scrollTop = 100000;
			shrink.scrollLeft = 100000;
			shrink.scrollTop = 100000;
		},
		update: function() {
			
			this.size.width = this.$el.offsetWidth;
			this.size.height = this.$el.offsetHeight;
		}
	},
	watch: {
		size: {
			deep: true,
			handler: function(size) {
				
				this.reset();
				this.$emit('resize', { width: this.size.width, height: this.size.height });
			}
		}
	},
	render: function(create) {
		
		var style = 'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;';
		var styleChild = 'position: absolute; left: 0; top: 0;';

		return create('div', {
			style: style + 'animation-name: resizeSensorVisibility;',
			on: {
				'~animationstart': this.update
			}
		},[
			create('div', {
				style: style,
				on: {
					scroll: this.update
				}
			}, [
				create('div', {
					style: styleChild + 'width: 100000px; height: 100000px;'
				})
			]),
			create('div', {
				style: style,
				on: {
					scroll: this.update
				}
			}, [
				create('div', {
					style: styleChild + 'width: 200%; height: 200%;'
				})
			]),
		]);
	},
	beforeDestroy: function() {
		
		this.$emit('resize', { width: 0, height: 0 });
		this.$emit('resizeSensorBeforeDestroy');
	},
	mounted: function() {

		if ( this.initial === true )
			this.$nextTick(this.update);
		
		if ( this.$el.offsetParent !== this.$el.parentNode )
			this.$el.parentNode.style.position = 'relative';

		if ( 'attachEvent' in this.$el && !('AnimationEvent' in window) ) {

			var onresizeHandler = function() {

				this.update();
				removeOnresizeEvent();
			}.bind(this);
		
			var removeOnresizeEvent = function() {
				
				this.$el.detachEvent('onresize', onresizeHandler);
				this.$off('resizeSensorBeforeDestroy', removeOnresizeEvent);
			}.bind(this);
			
			this.$el.attachEvent('onresize', onresizeHandler);
			this.$on('resizeSensorBeforeDestroy', removeOnresizeEvent);
			this.reset();
		}
	}
});



/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionListTab.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionListTab.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submissionListTab.vue?vue&type=template&id=38d36a53& */ "./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53&");
/* harmony import */ var _submissionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submissionListTab.vue?vue&type=script&lang=js& */ "./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _submissionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__.render,
  _submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Classwork_View/tabs/submissionListTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submissionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./submissionListTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submissionListTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vuePdfNoSss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./vuePdfNoSss.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-pdf/src/vuePdfNoSss.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_vuePdfNoSss_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./resize-sensor.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_submissionListTab_vue_vue_type_template_id_38d36a53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./submissionListTab.vue?vue&type=template&id=38d36a53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53&");


/***/ }),

/***/ "./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-style-loader/index.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../vue-loader/lib/index.js??vue-loader-options!./resize-sensor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loader_lib_index_js_vue_loader_options_resize_sensor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-style-loader/index.js!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./annotationLayer.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _vue_style_loader_index_js_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_annotationLayer_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Classwork_View/tabs/submissionListTab.vue?vue&type=template&id=38d36a53& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "pa-0 pa-0",
          attrs: { "pa-0": "", "ma-0": "", fluid: "" }
        },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", lg: "12", md: "12" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-5" },
                    [
                      _c(
                        "v-window",
                        [
                          _c(
                            "v-window-item",
                            [
                              _c(
                                "v-row",
                                [
                                  _c("v-col", {
                                    staticClass: "pa-7 primary",
                                    attrs: { cols: "12", md: "12" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pt-1",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c("div", { staticClass: "h2" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(_vm.currentPage) +
                                            " / " +
                                            _vm._s(_vm.pageCount)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("pdf", {
                                        staticClass: "mt-0 pt-0",
                                        staticStyle: {
                                          display: "inline-block",
                                          width: "50%"
                                        },
                                        attrs: { src: _vm.src },
                                        on: {
                                          "num-pages": function($event) {
                                            _vm.pageCount = $event
                                          },
                                          "page-loaded": function($event) {
                                            _vm.currentPage = $event
                                          }
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



/***/ }),

/***/ "./node_modules/vue-pdf/src/componentFactory.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-pdf/src/componentFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_resize_sensor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-resize-sensor */ "./node_modules/vue-resize-sensor/src/resize-sensor.vue");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(pdfjsWrapper) {

	var createLoadingTask = pdfjsWrapper.createLoadingTask;
	var PDFJSWrapper = pdfjsWrapper.PDFJSWrapper;

	return {
		createLoadingTask: createLoadingTask,
		render: function(h) {
			return h('span', {
				attrs: {
					style: 'position: relative; display: block'
				}
			}, [
				h('canvas', {
					attrs: {
						style: 'display: inline-block; width: 100%; height: 100%; vertical-align: top',
					},
					ref:'canvas'
				}),
				h('span', {
					style: 'display: inline-block; width: 100%; height: 100%',
					class: 'annotationLayer',
					ref:'annotationLayer'
				}),
				h(vue_resize_sensor__WEBPACK_IMPORTED_MODULE_0__.default, {
					props: {
						initial: true
					},
					on: {
						resize: this.resize
					},
				})
			])
		},
		props: {
			src: {
				type: [String, Object, Uint8Array],
				default: '',
			},
			page: {
				type: Number,
				default: 1,
			},
			rotate: {
				type: Number,
			},
		},
		watch: {
			src: function() {

				this.pdf.loadDocument(this.src);
			},
			page: function() {

				this.pdf.loadPage(this.page, this.rotate);
			},
			rotate: function() {
				this.pdf.renderPage(this.rotate);
			},
		},
		methods: {
			resize: function(size) {

				// check if the element is attached to the dom tree || resizeSensor being destroyed
				if ( this.$el.parentNode === null || (size.width === 0 && size.height === 0) )
					return;

				// on IE10- canvas height must be set
				this.$refs.canvas.style.height = this.$refs.canvas.offsetWidth * (this.$refs.canvas.height / this.$refs.canvas.width) + 'px';
				// update the page when the resolution is too poor
				var resolutionScale = this.pdf.getResolutionScale();

				if ( resolutionScale < 0.85 || resolutionScale > 1.15 )
					this.pdf.renderPage(this.rotate);

				// this.$refs.annotationLayer.style.transform = 'scale('+resolutionScale+')';
			},
			print: function(dpi, pageList) {

				this.pdf.printPage(dpi, pageList);
			}
		},

		// doc: mounted hook is not called during server-side rendering.
		mounted: function() {

			this.pdf = new PDFJSWrapper(this.$refs.canvas, this.$refs.annotationLayer, this.$emit.bind(this));

			this.$on('loaded', function() {

				this.pdf.loadPage(this.page, this.rotate);
			});

			this.$on('page-size', function(width, height) {

				this.$refs.canvas.style.height = this.$refs.canvas.offsetWidth * (height / width) + 'px';
			});

			this.pdf.loadDocument(this.src);
		},

		// doc: destroyed hook is not called during server-side rendering.
		destroyed: function() {

			this.pdf.destroy();
		}
	}

}


/***/ }),

/***/ "./node_modules/vue-pdf/src/pdfjsWrapper.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-pdf/src/pdfjsWrapper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfjs-dist/es5/web/pdf_viewer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var pendingOperation = Promise.resolve();

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(PDFJS) {

	function isPDFDocumentLoadingTask(obj) {

		return typeof(obj) === 'object' && obj !== null && obj.__PDFDocumentLoadingTask === true;
		// or: return obj.constructor.name === 'PDFDocumentLoadingTask';
	}

	function createLoadingTask(src, options) {

		var source;
		if ( typeof(src) === 'string' )
			source = { url: src };
		else if ( src instanceof Uint8Array )
			source = { data: src };
		else if ( typeof(src) === 'object' && src !== null )
			source = Object.assign({}, src);
		else
			throw new TypeError('invalid src type');

		// source.verbosity = PDFJS.VerbosityLevel.INFOS;
		// source.pdfBug = true;
		// source.stopAtErrors = true;

		if ( options && options.withCredentials )
			source.withCredentials = options.withCredentials;

		var loadingTask = PDFJS.getDocument(source);
		loadingTask.__PDFDocumentLoadingTask = true; // since PDFDocumentLoadingTask is not public

		if ( options && options.onPassword )
			loadingTask.onPassword = options.onPassword;

		if ( options && options.onProgress )
			loadingTask.onProgress = options.onProgress;

		return loadingTask;
	}


	function PDFJSWrapper(canvasElt, annotationLayerElt, emitEvent) {

		var pdfDoc = null;
		var pdfPage = null;
		var pdfRender = null;
		var canceling = false;

		canvasElt.getContext('2d').save();

		function clearCanvas() {

			canvasElt.getContext('2d').clearRect(0, 0, canvasElt.width, canvasElt.height);
		}

		function clearAnnotations() {

			while ( annotationLayerElt.firstChild )
				annotationLayerElt.removeChild(annotationLayerElt.firstChild);
		}

		this.destroy = function() {

			if ( pdfDoc === null )
				return;

			// Aborts all network requests and destroys worker.
			pendingOperation = pdfDoc.destroy();
			pdfDoc = null;
		}

		this.getResolutionScale = function() {

			return canvasElt.offsetWidth / canvasElt.width;
		}

		this.printPage = function(dpi, pageNumberOnly) {

			if ( pdfPage === null )
				return;

			// 1in == 72pt
			// 1in == 96px
			var PRINT_RESOLUTION = dpi === undefined ? 150 : dpi;
			var PRINT_UNITS = PRINT_RESOLUTION / 72.0;
			var CSS_UNITS = 96.0 / 72.0;

			var iframeElt = document.createElement('iframe');

			function removeIframe() {

				iframeElt.parentNode.removeChild(iframeElt);
			}

			new Promise(function(resolve, reject) {

				iframeElt.frameBorder = '0';
				iframeElt.scrolling = 'no';
				iframeElt.width = '0px;'
				iframeElt.height = '0px;'
				iframeElt.style.cssText = 'position: absolute; top: 0; left: 0';

				iframeElt.onload = function() {

					resolve(this.contentWindow);
				}

				window.document.body.appendChild(iframeElt);
			})
			.then(function(win) {

				win.document.title = '';

				return pdfDoc.getPage(1)
				.then(function(page) {

					var viewport = page.getViewport({ scale: 1 });
					win.document.head.appendChild(win.document.createElement('style')).textContent =
						'@supports ((size:A4) and (size:1pt 1pt)) {' +
							'@page { margin: 1pt; size: ' + ((viewport.width * PRINT_UNITS) / CSS_UNITS) + 'pt ' + ((viewport.height * PRINT_UNITS) / CSS_UNITS) + 'pt; }' +
						'}' +

						'@media print {' +
							'body { margin: 0 }' +
							'canvas { page-break-before: avoid; page-break-after: always; page-break-inside: avoid }' +
						'}'+

						'@media screen {' +
							'body { margin: 0 }' +
						'}'+

						''
					return win;
				})
			})
			.then(function(win) {

				var allPages = [];

				for ( var pageNumber = 1; pageNumber <= pdfDoc.numPages; ++pageNumber ) {

					if ( pageNumberOnly !== undefined && pageNumberOnly.indexOf(pageNumber) === -1 )
						continue;

					allPages.push(
						pdfDoc.getPage(pageNumber)
						.then(function(page) {

							var viewport = page.getViewport({ scale: 1 });

							var printCanvasElt = win.document.body.appendChild(win.document.createElement('canvas'));
							printCanvasElt.width = (viewport.width * PRINT_UNITS);
							printCanvasElt.height = (viewport.height * PRINT_UNITS);

							return page.render({
								canvasContext: printCanvasElt.getContext('2d'),
								transform: [ // Additional transform, applied just before viewport transform.
									PRINT_UNITS, 0, 0,
									PRINT_UNITS, 0, 0
								],
								viewport: viewport,
								intent: 'print'
							}).promise;
						})
					);
				}

				Promise.all(allPages)
				.then(function() {

					win.focus(); // Required for IE
					if (win.document.queryCommandSupported('print')) {
						win.document.execCommand('print', false, null);
						} else {
						win.print();
					  }
					removeIframe();
				})
				.catch(function(err) {

					removeIframe();
					emitEvent('error', err);
				})
			})
		}

		this.renderPage = function(rotate) {
			if ( pdfRender !== null ) {

				if ( canceling )
					return;
				canceling = true;
				pdfRender.cancel();
				return;
			}

			if ( pdfPage === null )
				return;

			var pageRotate = (pdfPage.rotate === undefined ? 0 : pdfPage.rotate) + (rotate === undefined ? 0 : rotate);

			var scale = canvasElt.offsetWidth / pdfPage.getViewport({ scale: 1 }).width * (window.devicePixelRatio || 1);
			var viewport = pdfPage.getViewport({ scale: scale, rotation:pageRotate });

			emitEvent('page-size', viewport.width, viewport.height, scale);

			canvasElt.width = viewport.width;
			canvasElt.height = viewport.height;

			pdfRender = pdfPage.render({
				canvasContext: canvasElt.getContext('2d'),
				viewport: viewport
			});

			annotationLayerElt.style.visibility = 'hidden';
			clearAnnotations();

			var viewer = {
				scrollPageIntoView: function(params) {
					emitEvent('link-clicked', params.pageNumber)
				},
			};

			var linkService = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pdfjs-dist/es5/web/pdf_viewer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
			linkService.setDocument(pdfDoc);
			linkService.setViewer(viewer);

			pendingOperation = pendingOperation.then(function() {

				var getAnnotationsOperation =
				pdfPage.getAnnotations({ intent: 'display' })
				.then(function(annotations) {

					PDFJS.AnnotationLayer.render({
						viewport: viewport.clone({ dontFlip: true }),
						div: annotationLayerElt,
						annotations: annotations,
						page: pdfPage,
						linkService: linkService,
						renderInteractiveForms: false
					});
				});

				var pdfRenderOperation =
				pdfRender.promise
				.then(function() {

					annotationLayerElt.style.visibility = '';
					canceling = false;
					pdfRender = null;
				})
				.catch(function(err) {

					pdfRender = null;
					if ( err instanceof PDFJS.RenderingCancelledException ) {

						canceling = false;
						this.renderPage(rotate);
						return;
					}
					emitEvent('error', err);
				}.bind(this))

				return Promise.all([getAnnotationsOperation, pdfRenderOperation]);
			}.bind(this));
		}


		this.forEachPage = function(pageCallback) {

			var numPages = pdfDoc.numPages;

			(function next(pageNum) {

				pdfDoc.getPage(pageNum)
				.then(pageCallback)
				.then(function() {

					if ( ++pageNum <= numPages )
						next(pageNum);
				})
			})(1);
		}


		this.loadPage = function(pageNumber, rotate) {

			pdfPage = null;

			if ( pdfDoc === null )
				return;

			pendingOperation = pendingOperation.then(function() {

				return pdfDoc.getPage(pageNumber);
			})
			.then(function(page) {

				pdfPage = page;
				this.renderPage(rotate);
				emitEvent('page-loaded', page.pageNumber);
			}.bind(this))
			.catch(function(err) {

				clearCanvas();
				clearAnnotations();
				emitEvent('error', err);
			});
		}

		this.loadDocument = function(src) {

			pdfDoc = null;
			pdfPage = null;

			emitEvent('num-pages', undefined);

			if ( !src ) {

				canvasElt.removeAttribute('width');
				canvasElt.removeAttribute('height');
				clearAnnotations();
				return;
			}

			// wait for pending operation ends
			pendingOperation = pendingOperation.then(function() {

				var loadingTask;
				if ( isPDFDocumentLoadingTask(src) ) {

					if ( src.destroyed ) {

						emitEvent('error', new Error('loadingTask has been destroyed'));
						return
					}

					loadingTask = src;
				} else {

					loadingTask = createLoadingTask(src, {
						onPassword: function(updatePassword, reason) {

							var reasonStr;
							switch (reason) {
								case PDFJS.PasswordResponses.NEED_PASSWORD:
									reasonStr = 'NEED_PASSWORD';
									break;
								case PDFJS.PasswordResponses.INCORRECT_PASSWORD:
									reasonStr = 'INCORRECT_PASSWORD';
									break;
							}
							emitEvent('password', updatePassword, reasonStr);
						},
						onProgress: function(status) {

							var ratio = status.loaded / status.total;
							emitEvent('progress', Math.min(ratio, 1));
						}
					});
				}

				return loadingTask.promise;
			})
			.then(function(pdf) {

				pdfDoc = pdf;
				emitEvent('num-pages', pdf.numPages);
				emitEvent('loaded');
			})
			.catch(function(err) {

				clearCanvas();
				clearAnnotations();
				emitEvent('error', err);
			})
		}

		annotationLayerElt.style.transformOrigin = '0 0';
	}

	return {
		createLoadingTask: createLoadingTask,
		PDFJSWrapper: PDFJSWrapper,
	}
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../vue-loader/lib/index.js??vue-loader-options!./resize-sensor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-resize-sensor/src/resize-sensor.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6a292083", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./annotationLayer.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-pdf/src/annotationLayer.css?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5cb8476c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);