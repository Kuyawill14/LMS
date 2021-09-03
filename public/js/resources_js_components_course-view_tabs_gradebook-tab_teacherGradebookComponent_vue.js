(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_course-view_tabs_gradebook-tab_teacherGradebookComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_excel_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-excel-export */ "./node_modules/vue-excel-export/index.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var finalGradesGrades = function finalGradesGrades() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_course-view_tabs_gradebook-tab_final-grades-teacherGradebook_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./final-grades-teacherGradebook.vue */ "./resources/js/components/course-view/tabs/gradebook-tab/final-grades-teacherGradebook.vue"));
};

Vue.use(vue_excel_export__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tab_id: null,
      grading_criteria_data: [],
      allclasswork: null,
      activeTab: null,
      shown: false,
      selectedClassName: '',
      selectedClass: null,
      Deldialog: false,
      dialog: false,
      temp_id: '',
      loading: true,
      type: '',
      search: "",
      grading_criteria_form: {},
      grading_criteria: {},
      course_id: '',
      delId: '',
      classworkList: [],
      headers: [],
      classList: [],
      students: [],
      classworkTotalPoints: 0,
      classworkTotalPointsTable: null,
      final_grades: [],
      final_grades_headers: [],
      items: [{
        text: 'Course',
        disabled: false,
        link: 'courses'
      }, {
        text: 'Grade Book',
        disabled: true,
        link: 'gradebook'
      }],
      sortDesc: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getcourseInfo"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["get_gradingCriteria", "allClass", "AllStudentClassworkGrades", "allStudentFinalGrades", "AllStudentClassworkGradesFortable"])), {}, {
    filteredItems: function filteredItems() {
      var _this = this;

      if (this.search) {
        return this.students.filter(function (item) {
          return _this.search.toLowerCase().split(' ').every(function (v) {
            return item.lastName.toLowerCase().includes(v) || item.student_id.toString().includes(v) || item.middleName.toLowerCase().includes(v) || item.firstName.toLowerCase().includes(v);
          });
        });
      } else {
        return this.students;
      }
    }
  }),
  components: {
    finalGradesGrades: finalGradesGrades
  },
  methods: {
    f_grades_headers: function f_grades_headers() {},
    sortPoints: function sortPoints() {
      this.sortDesc = !this.sortDesc;
    },
    transmuteFinalGrade: function transmuteFinalGrade(grade) {
      var eq = "5.0";

      if (grade >= 98) {
        eq = "1.0";
      } else if (grade >= 95) {
        eq = "1.25";
      } else if (grade >= 92) {
        eq = "1.5";
      } else if (grade >= 89) {
        eq = "1.75";
      } else if (grade >= 86) {
        eq = "2.0";
      } else if (grade >= 83) {
        eq = "2.25";
      } else if (grade >= 80) {
        eq = "2.5";
      } else if (grade >= 77) {
        eq = " 2.75";
      } else if (grade >= 75) {
        eq = "3.0";
      } else {
        eq = "5.0";
      }

      return eq.toString();
    },
    classworkData: function classworkData(arr, id) {
      var tmp_arr = [];

      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].grading_criteria_id == id) {
            tmp_arr.push(arr[i]);
          }
        }
      }

      return tmp_arr;
    },
    gettableTotalPoints: function gettableTotalPoints(classworkList, grading_id) {
      var total = 0;

      if (classworkList != null) {
        for (var i = 0; i < classworkList.length; i++) {
          if (classworkList[i].grading_criteria_id == grading_id) {
            total += classworkList[i]['points'];
          }
        }
      }

      return total;
    },
    transmutedGrade: function transmutedGrade(total_score, percentage) {
      if (this.classworkTotalPoints) {
        return ((total_score / this.classworkTotalPoints * 100 / 2 + 50) * percentage / 100).toFixed(2);
      } else {
        return 0;
      }
    },
    sumTransmutedGrade: function sumTransmutedGrade(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['transmuted_grade_percentage'];
      }

      return total.toFixed(2);
    },
    sumPercentage: function sumPercentage(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['grade_percentage'];
      }

      return total.toFixed(2);
    },
    totalPercentHeader: function totalPercentHeader() {
      this.headers.push({
        text: 'Total Points' + ' (' + this.classworkTotalPoints + 'pts)',
        align: 'center',
        value: 'total'
      }, {
        text: 'Percentage',
        align: 'center',
        value: 'Initial Percentage'
      } //  {
      //     text: 'T. Percentage',
      //     align: 'center',
      //     value: 'Transmuted Percentage',
      // }
      );
    },
    classworkTotalPoins: function classworkTotalPoins() {},
    totalPoints: function totalPoints(arr) {
      var total = 0;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }

      return total;
    },
    totalPercentage: function totalPercentage(arr, grading_percentage, totalPoints) {
      // //console.log(totalPoints, 'this.classworkTotalPointsthis.classworkTotalPoints')
      var total = 0;
      var result;

      for (var i = 0; i < arr.length; i++) {
        total += arr[i]['points'];
      }

      if (totalPoints == null) {
        result = total / this.classworkTotalPoints * grading_percentage;
      } else {
        result = total / totalPoints * grading_percentage;
      }

      return isNaN(result) == true ? 0 : result.toFixed(2);
    },
    getStudentList: function getStudentList() {
      var _this2 = this;

      axios.get('/api/student/all_by_class/' + this.selectedClass).then(function (res) {
        _this2.students = res.data;
      })["catch"](function (error) {//console.log(error)
      });
    },
    getClassworkList: function getClassworkList() {
      var _this3 = this;

      this.headers = [];
      this.loading = true;
      var total = 0;
      this.getStudentList();
      this.headers.push({
        text: 'Name',
        value: 'lastName'
      });
      axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
        _this3.classworkList = res.data;

        if (_this3.allclasswork == null) {
          _this3.allclasswork = res.data;
        } //console.log(this.allclasswork, 'sadfasdfasdfasdfasd fallclasswork');


        for (var i = 0; i < _this3.classworkList.length; i++) {
          // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
          if (_this3.classworkList[i]['grading_criteria_id'] == _this3.get_gradingCriteria[0].id) {
            _this3.headers.push({
              text: _this3.classworkList[i]['title'] + ' (' + _this3.classworkList[i]['points'] + 'pts)',
              align: 'center',
              value: 'points' + _this3.classworkList[i]['classwork_id']
            });

            total += _this3.classworkList[i]['points'];
          }
        } //    //console.log(grading_criteria_id)
        // this.totalPercentHeader();

      });
      var data = {
        course_id: this.$route.params.id,
        class_id: this.selectedClass
      };
      this.$store.dispatch('fetchAllStudentClassworkGrades', this.selectedClass);
      this.$store.dispatch('fetchAllStudentFinalGrades', data).then(function () {
        _this3.loading = false;
      });
    },
    _getFInalGradestTab: function _getFInalGradestTab() {
      this.activeTab = 'finalgrades';
    },
    _getClassworkListbyTab: function _getClassworkListbyTab(grading_criteria_id, index) {
      var _this4 = this;

      if (this.activeTab != grading_criteria_id) {
        this.headers = [];
        this.activeTab = grading_criteria_id;
        this.$store.dispatch("fetchNotification", this.notificationType);
        var total = 0;
        this.headers.push({
          text: 'Name',
          value: 'lastName'
        });
        this.loading = true;
        axios.get('/api/grade-book/classworks/' + this.selectedClass).then(function (res) {
          _this4.classworkList = res.data;

          for (var i = 0; i < _this4.classworkList.length; i++) {
            // this.headers[i+1] = {text: this.classworkList[i]['title'], value: this.classworkList[i]['title']};
            if (_this4.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {
              _this4.headers.push({
                text: _this4.classworkList[i]['title'] + ' (' + _this4.classworkList[i]['points'] + 'pts)',
                align: 'center',
                value: 'points' + _this4.classworkList[i]['classwork_id']
              });

              total += _this4.classworkList[i]['points'];
            }
          }

          _this4.classworkTotalPoints = total;

          _this4.totalPercentHeader();

          _this4.loading = false;
        });
      }
    },
    getStudentClassworksGrades: function getStudentClassworksGrades(grading_criteria_id) {
      var _this5 = this;

      axios.get('/api/grade-book/classworkGrades/' + this.selectedClass).then(function (res) {
        _this5.classworkList = res.data;

        for (var i = 0; i < _this5.classworkList.length; i++) {
          if (_this5.classworkList[i]['grading_criteria_id'] == grading_criteria_id) {}
        }
      });
    },
    _totalPercent: function _totalPercent(percentage_data) {
      var total = 0;
      percentage_data.forEach(function (val) {
        total += parseFloat(val.percentage);
      });
      return total;
    },
    getClassList: function getClassList() {
      var _this6 = this;

      this.$store.dispatch('fetchSubjectCourseClassList', this.$route.params.id).then(function () {
        _this6.classList = _this6.allClass;
        _this6.selectedClass = _this6.classList[0].class_id;
        _this6.selectedClassName = _this6.classList[0].class_name;

        _this6.getClassworkList();

        _this6.getStudentList();

        var data = {
          course_id: _this6.$route.params.id,
          class_id: _this6.selectedClass
        };

        _this6.$store.dispatch('fetchAllStudentFinalGrades', data).then(function () {
          _this6.loading = false;
        });
      });
    },
    test: function test(table) {
      (function () {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
            base64 = function base64(s) {
          return window.btoa(unescape(encodeURIComponent(s)));
        },
            format = function format(s, c) {
          return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
          });
        };

        if (!table.nodeType) table = document.getElementById(table);

        var ctx = _defineProperty({
          worksheet: name || 'Worksheet',
          table: table.innerHTML
        }, "table", table.innerHTML);

        window.location.href = uri + base64(format(template, ctx));
      })();
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    this.loading = true;
    this.$store.dispatch('fetchGradingCriteria', this.$route.params.id).then(function () {
      _this7.grading_criteria_data = _this7.get_gradingCriteria;
    });
    this.getClassList();
    var students = this.students;
    this.loading = false;
  }
});

/***/ }),

/***/ "./node_modules/browser-downloads/download.js":
/*!****************************************************!*\
  !*** ./node_modules/browser-downloads/download.js ***!
  \****************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.21, by dandavis; 2008-2018. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compatible way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;

		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){

			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}

		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			indexDecoder = strUrl.indexOf("charset")>0 ? 3: 2,
			decoder= parts[indexDecoder] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
 				anchor.addEventListener('click', function(e) {
 					e.stopPropagation();
 					this.removeEventListener('click', arguments.callee);
 				});
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-input__slot[data-v-315884ec] {\n    margin-bottom: 0 !important;\n}\n.v-tab--disabled[data-v-315884ec] {\n    color: #000 !important;\n}\n#tableExp td[data-v-315884ec] {\n    text-align: center !important;\n    vertical-align: middle !important;\n}\n#tableExp th[data-v-315884ec] {\n    text-align: center !important;\n    vertical-align: middle !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_style_index_0_id_315884ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_style_index_0_id_315884ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_style_index_0_id_315884ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/vue-excel-export/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-excel-export/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VueComment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueComment.vue */ "./node_modules/vue-excel-export/VueComment.vue");


const comment = {
    install: function (Vue) {
        Vue.component(_VueComment_vue__WEBPACK_IMPORTED_MODULE_0__.default.name, _VueComment_vue__WEBPACK_IMPORTED_MODULE_0__.default)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comment);


/***/ }),

/***/ "./node_modules/vue-excel-export/VueComment.vue":
/*!******************************************************!*\
  !*** ./node_modules/vue-excel-export/VueComment.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueComment.vue?vue&type=template&id=723dc0c0& */ "./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0&");
/* harmony import */ var _VueComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueComment.vue?vue&type=script&lang=js& */ "./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VueComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-excel-export/VueComment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browser_downloads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-downloads */ "./node_modules/browser-downloads/download.js");
/* harmony import */ var browser_downloads__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_downloads__WEBPACK_IMPORTED_MODULE_0__);
//
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
    name: 'export-excel',
    props: {
        // mime type [xls, csv]
        type: {
            type: String,
            default: "xls"
        },
        // Json to download
        data: {
            type: Array,
            required: false,
            default: null
        },
        // fields inside the Json Object that you want to export
        // if no given, all the properties in the Json are exported
        fields: {
            type: Object,
            required: false
        },
        // this prop is used to fix the problem with other components that use the
        // variable fields, like vee-validate. exportFields works exactly like fields
        exportFields: {
            type: Object,
            required: false
        },
        // Use as fallback when the row has no field values
        defaultValue: {
            type: String,
            required: false,
            default: ""
        },
        // Title(s) for the data, could be a string or an array of strings (multiple titles)
        title: {
            default: null
        },
        // Footer(s) for the data, could be a string or an array of strings (multiple footers)
        footer: {
            default: null
        },
        // filename to export
        name: {
            type: String,
            default: "data.xls"
        },
        fetch: {
            type: Function,
        },
        meta: {
            type: Array,
            default: () => []
        },
        worksheet: {
            type: String,
            default: "Sheet1"
        },
        //event before generate was called
        beforeGenerate: {
            type: Function,
        },
        //event before download pops up
        beforeFinish: {
            type: Function,
        },
    },
    computed: {
        // unique identifier
        idName() {
            var now = new Date().getTime();
            return "export_" + now;
        },

        downloadFields() {
            if (this.fields !== undefined) return this.fields;

            if (this.exportFields !== undefined) return this.exportFields;
        }
    },
    methods: {
        async generate() {
            if (typeof this.beforeGenerate === 'function') {
                await this.beforeGenerate();
            }
            let data = this.data;
            if (typeof this.fetch === 'function' || !data)
                data = await this.fetch();

            if (!data || !data.length) {
                return;
            }

            let json = this.getProcessedJson(data, this.downloadFields);
            if (this.type === "html") {
                // this is mainly for testing
                return this.export(
                    this.jsonToXLS(json),
                    this.name.replace(".xls", ".html"),
                    "text/html"
                );
            } else if (this.type === "csv") {
                return this.export(
                    this.jsonToCSV(json),
                    this.name.replace(".xls", ".csv"),
                    "application/csv"
                );
            }
            return this.export(
                this.jsonToXLS(json),
                this.name,
                "application/vnd.ms-excel"
            );
        },
        /*
            Use downloadjs to generate the download link
            */
        export: async function (data, filename, mime) {
            let blob = this.base64ToBlob(data, mime);
            if (typeof this.beforeFinish === 'function')
                await this.beforeFinish();
            browser_downloads__WEBPACK_IMPORTED_MODULE_0___default()(blob, filename, mime);
        },
        /*
            jsonToXLS
            ---------------
            Transform json data into an xml document with MS Excel format, sadly
            it shows a prompt when it opens, that is a default behavior for
            Microsoft office and cannot be avoided. It's recommended to use CSV format instead.
            */
        jsonToXLS(data) {
            let xlsTemp =
                '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>';
            let xlsData = "<thead>";
            const colspan = Object.keys(data[0]).length;
            let _self = this;

            //Header
            if (this.title != null) {
                xlsData += this.parseExtraData(
                    this.title,
                    '<tr><th colspan="' + colspan + '">${data}</th></tr>'
                );
            }

            //Fields
            xlsData += "<tr>";
            for (let key in data[0]) {
                xlsData += "<th>" + key + "</th>";
            }
            xlsData += "</tr>";
            xlsData += "</thead>";

            //Data
            xlsData += "<tbody>";
            data.map(function (item, index) {
                xlsData += "<tr>";
                for (let key in item) {
                    xlsData += "<td>" + _self.valueReformattedForMultilines(item[key]) + "</td>";
                }
                xlsData += "</tr>";
            });
            xlsData += "</tbody>";

            //Footer
            if (this.footer != null) {
                xlsData += "<tfoot>";
                xlsData += this.parseExtraData(
                    this.footer,
                    '<tr><td colspan="' + colspan + '">${data}</td></tr>'
                );
                xlsData += "</tfoot>";
            }

            return xlsTemp.replace("${table}", xlsData).replace("${worksheet}", this.worksheet);
        },
        /*
            jsonToCSV
            ---------------
            Transform json data into an CSV file.
            */
        jsonToCSV(data) {
            var csvData = [];
            //Header
            if (this.title != null) {
                csvData.push(this.parseExtraData(this.title, "${data}\r\n"));
            }
            //Fields
            for (let key in data[0]) {
                csvData.push(key);
                csvData.push(",");
            }
            csvData.pop();
            csvData.push("\r\n");
            //Data
            data.map(function (item) {
                for (let key in item) {
                    let escapedCSV = '=\"' + item[key] + '\"'; // cast Numbers to string
                    if (escapedCSV.match(/[,"\n]/)) {
                        escapedCSV = '"' + escapedCSV.replace(/\"/g, '""') + '"';
                    }
                    csvData.push(escapedCSV);
                    csvData.push(",");
                }
                csvData.pop();
                csvData.push("\r\n");
            });
            //Footer
            if (this.footer != null) {
                csvData.push(this.parseExtraData(this.footer, "${data}\r\n"));
            }
            return csvData.join("");
        },
        /*
            getProcessedJson
            ---------------
            Get only the data to export, if no fields are set return all the data
            */
        getProcessedJson(data, header) {
            let keys = this.getKeys(data, header);
            let newData = [];
            let _self = this;
            data.map(function (item, index) {
                let newItem = {};
                for (let label in keys) {
                    let property = keys[label];
                    newItem[label] = _self.getValue(property, item);
                }
                newData.push(newItem);
            });

            return newData;
        },
        getKeys(data, header) {
            if (header) {
                return header;
            }

            let keys = {};
            for (let key in data[0]) {
                keys[key] = key;
            }
            return keys;
        },
        /*
            parseExtraData
            ---------------
            Parse title and footer attribute to the csv format
            */
        parseExtraData(extraData, format) {
            let parseData = "";
            if (Array.isArray(extraData)) {
                for (var i = 0; i < extraData.length; i++) {
                    parseData += format.replace("${data}", extraData[i]);
                }
            } else {
                parseData += format.replace("${data}", extraData);
            }
            return parseData;
        },

        getValue(key, item) {
            const field = typeof key !== "object" ? key : key.field;
            let indexes = typeof field !== "string" ? [] : field.split(".");
            let value = this.defaultValue;

            if (!field)
                value = item;
            else if (indexes.length > 1)
                value = this.getValueFromNestedItem(item, indexes);
            else
                value = this.parseValue(item[field]);

            if (key.hasOwnProperty('callback'))
                value = this.getValueFromCallback(value, key.callback);

            return value;
        },

        /*
        convert values with newline \n characters into <br/>
        */
        valueReformattedForMultilines(value) {
            if (typeof (value) == "string") return (value.replace(/\n/ig, "<br/>"));
            else return (value);
        },

        getValueFromNestedItem(item, indexes) {
            let nestedItem = item;
            for (let index of indexes) {
                if (nestedItem)
                    nestedItem = nestedItem[index];
            }
            return this.parseValue(nestedItem);
        },

        getValueFromCallback(item, callback) {
            if (typeof callback !== "function")
                return this.defaultValue
            const value = callback(item);
            return this.parseValue(value);
        },
        parseValue(value) {
            return value || value === 0 || typeof value === 'boolean'
                ? value
                : this.defaultValue;
        },
        base64ToBlob(data, mime) {
            let base64 = window.btoa(window.unescape(encodeURIComponent(data)));
            let bstr = atob(base64);
            let n = bstr.length;
            let u8arr = new Uint8ClampedArray(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type: mime});
        }
    } // end methods
});


/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true& */ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true&");
/* harmony import */ var _teacherGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacherGradebookComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _teacherGradebookComponent_vue_vue_type_style_index_0_id_315884ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& */ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _teacherGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "315884ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherGradebookComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_style_index_0_id_315884ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=style&index=0&id=315884ec&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VueComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./VueComment.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_VueComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0&":
/*!*************************************************************************************!*\
  !*** ./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VueComment_vue_vue_type_template_id_723dc0c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib/index.js??vue-loader-options!./VueComment.vue?vue&type=template&id=723dc0c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0&");


/***/ }),

/***/ "./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true& ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_teacherGradebookComponent_vue_vue_type_template_id_315884ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-excel-export/VueComment.vue?vue&type=template&id=723dc0c0& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: _vm.idName }, on: { click: _vm.generate } },
    [
      _vm._t("default", function() {
        return [_vm._v("\n        Download " + _vm._s(_vm.name) + "\n    ")]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/course-view/tabs/gradebook-tab/teacherGradebookComponent.vue?vue&type=template&id=315884ec&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              { staticClass: "downloads float-right" },
              [
                _c(
                  "v-btn",
                  {
                    on: {
                      click: function($event) {
                        return _vm.test("testTable")
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      { attrs: { color: "grey lighten-1", left: "" } },
                      [
                        _vm._v(
                          "\n                        download\n                    "
                        )
                      ]
                    ),
                    _vm._v("\n                    ALl Grades\n                ")
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-2" },
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [_vm._v("\n                Student Grades\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("v-select", {
                staticClass: "float-right",
                attrs: {
                  items: _vm.classList,
                  "item-text": "class_name",
                  "item-value": "class_id",
                  label: "Select Class"
                },
                on: {
                  change: function($event) {
                    return _vm.getClassworkList()
                  }
                },
                model: {
                  value: _vm.selectedClass,
                  callback: function($$v) {
                    _vm.selectedClass = $$v
                  },
                  expression: "selectedClass"
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
        "v-card",
        [
          _c(
            "v-tabs",
            {
              attrs: {
                color: "orange accent-4",
                right: "",
                disabled: _vm.loading
              }
            },
            [
              _c(
                "v-tab",
                {
                  attrs: { href: "#final_grades", active: "" },
                  on: {
                    click: function($event) {
                      return _vm._getFInalGradestTab()
                    }
                  }
                },
                [_vm._v("\n                Final Grades\n            ")]
              ),
              _vm._v(" "),
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab",
                  {
                    key: index,
                    attrs: { disabled: _vm.loading == true },
                    on: {
                      click: function($event) {
                        _vm._getClassworkListbyTab(gradingCriteria.id)
                        _vm.click_id = gradingCriteria.id
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(gradingCriteria.name) +
                        "\n            "
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "v-tab-item",
                { attrs: { id: "final_grades" } },
                [
                  _c("finalGradesGrades", {
                    attrs: {
                      loader: _vm.loading,
                      grading_criteria: _vm.get_gradingCriteria,
                      students: _vm.students
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.get_gradingCriteria, function(gradingCriteria, index) {
                return _c(
                  "v-tab-item",
                  { key: index },
                  [
                    _c(
                      "v-card-title",
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(gradingCriteria.name) +
                            " - " +
                            _vm._s(gradingCriteria.percentage) +
                            "%\n\n\n\n                    "
                        ),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { width: "50%" } },
                          [
                            _c("v-text-field", {
                              attrs: {
                                "append-icon": "mdi-magnify",
                                label: "Search",
                                "single-line": "",
                                "hide-details": ""
                              },
                              model: {
                                value: _vm.search,
                                callback: function($$v) {
                                  _vm.search = $$v
                                },
                                expression: "search"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-data-table", {
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.students,
                        "sort-desc": _vm.sortDesc,
                        sortBy: "points",
                        loading: _vm.loading
                      },
                      on: {
                        "update:sortDesc": function($event) {
                          _vm.sortDesc = $event
                        },
                        "update:sort-desc": function($event) {
                          _vm.sortDesc = $event
                        }
                      },
                      scopedSlots: _vm._u(
                        [
                          _vm._l(_vm.headers, function(h) {
                            return {
                              key: "header." + h.value,
                              fn: function(ref) {
                                return [
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { bottom: "" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              var attrs = ref.attrs
                                              return [
                                                _c(
                                                  "span",
                                                  _vm._g(
                                                    _vm._b(
                                                      {},
                                                      "span",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [_vm._v(_vm._s(h.text))]
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
                                      _c("span", [_vm._v(_vm._s(h.text))])
                                    ]
                                  )
                                ]
                              }
                            }
                          }),
                          {
                            key: "body",
                            fn: function(ref) {
                              var items = ref.items
                              return [
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(items, function(student) {
                                      return _c(
                                        "tr",
                                        { key: student.id },
                                        [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(
                                                student.lastName +
                                                  ", " +
                                                  student.firstName
                                              ) + " "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.AllStudentClassworkGrades(
                                              student.id,
                                              gradingCriteria.id
                                            ),
                                            function(classworkGrades, index) {
                                              return _c(
                                                "td",
                                                {
                                                  key: index,
                                                  staticClass: "text-center"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\n                                    " +
                                                      _vm._s(
                                                        (student[
                                                          "points" +
                                                            classworkGrades.classwork_id
                                                        ] =
                                                          classworkGrades.points)
                                                      ) +
                                                      "\n\n                                    "
                                                  ),
                                                  classworkGrades.points != null
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-caption",
                                                          attrs: {
                                                            color: "grey"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            " /\n                                        " +
                                                              _vm._s(
                                                                classworkGrades.hp_points
                                                              ) +
                                                              "\n                                    "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  classworkGrades.points == null
                                                    ? _c(
                                                        "v-tooltip",
                                                        {
                                                          attrs: { top: "" },
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
                                                                              color:
                                                                                "grey lighten-1"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                                    mdi-close\n                                                "
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
                                                          ),
                                                          model: {
                                                            value: _vm.shown,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.shown = $$v
                                                            },
                                                            expression: "shown"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              "No Submission"
                                                            )
                                                          ])
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              )
                                            }
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    (student[
                                                      "total"
                                                    ] = _vm.totalPoints(
                                                      _vm.AllStudentClassworkGrades(
                                                        student.id,
                                                        gradingCriteria.id
                                                      )
                                                    ))
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    (student[
                                                      "Initial Percentage"
                                                    ] = _vm.totalPercentage(
                                                      _vm.AllStudentClassworkGrades(
                                                        student.id,
                                                        gradingCriteria.id
                                                      ),
                                                      gradingCriteria.percentage
                                                    ))
                                                  ) +
                                                  "%\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        2
                                      )
                                    }),
                                    _vm._v(" "),
                                    _vm.students.length == 0
                                      ? _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "text-center",
                                              attrs: { colspan: "100" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    No data available, please add or invite students.\n                                "
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading == false
        ? _c(
            "table",
            { staticClass: "tableExp", attrs: { id: "testTable", hidden: "" } },
            [
              _c(
                "tr",
                [
                  _c("th", [_vm._v("Student ID")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _vm._l(_vm.get_gradingCriteria, function(
                    gradingCriteria,
                    index
                  ) {
                    return _c(
                      "th",
                      {
                        key: index,
                        staticClass: "text-center",
                        attrs: {
                          colspan: _vm.classworkData(
                            _vm.allclasswork,
                            gradingCriteria.id
                          ).length
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(gradingCriteria.name) +
                            " (" +
                            _vm._s(gradingCriteria.percentage) +
                            "%)\n\n                "
                        ),
                        _c("table", { staticClass: "tableExp" }, [
                          _c(
                            "tr",
                            [
                              _vm._l(
                                _vm.classworkData(
                                  _vm.allclasswork,
                                  gradingCriteria.id
                                ),
                                function(classwork, index) {
                                  return _c("th", { key: index }, [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(classwork.title) +
                                        "\n                        "
                                    )
                                  ])
                                }
                              ),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  "\n                            Total Points\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  "\n                            Percent\n                        "
                                )
                              ])
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "tr",
                            [
                              _vm._l(
                                _vm.classworkData(
                                  _vm.allclasswork,
                                  gradingCriteria.id
                                ),
                                function(classwork, index) {
                                  return _c("th", { key: index }, [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(classwork.points) +
                                        "\n                        "
                                    )
                                  ])
                                }
                              ),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.gettableTotalPoints(
                                        _vm.allclasswork,
                                        gradingCriteria.id
                                      )
                                    ) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(gradingCriteria.percentage) +
                                    "%\n                        "
                                )
                              ])
                            ],
                            2
                          )
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { rowspan: "1" } },
                    [_vm._v("\n                Raw Grade")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { rowspan: "1" } },
                    [_vm._v("\n                Transmuted Grade")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { rowspan: "1" } },
                    [_vm._v("\n                Final Grade")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _vm._l(_vm.students, function(student) {
                return _c(
                  "tr",
                  { key: student.id },
                  [
                    _c("td", { staticClass: "text-left" }, [
                      _vm._v(_vm._s(student.student_id) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left" }, [
                      _vm._v(
                        _vm._s(student.lastName + ", " + student.firstName) +
                          " "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.get_gradingCriteria, function(
                      gradingCriteria,
                      index
                    ) {
                      return _c(
                        "td",
                        {
                          key: index,
                          staticClass: "text-center",
                          attrs: {
                            colspan: _vm.classworkData(
                              _vm.allclasswork,
                              gradingCriteria.id
                            ).length
                          }
                        },
                        [
                          _c("table", { staticClass: "tableExp" }, [
                            _c(
                              "tr",
                              [
                                _vm._l(
                                  _vm.AllStudentClassworkGrades(
                                    student.id,
                                    gradingCriteria.id
                                  ),
                                  function(classwork, index) {
                                    return _c("td", { key: index }, [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            classwork.points == null
                                              ? 0
                                              : classwork.points
                                          ) +
                                          "\n                        "
                                      )
                                    ])
                                  }
                                ),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.totalPoints(
                                          _vm.AllStudentClassworkGrades(
                                            student.id,
                                            gradingCriteria.id
                                          ),
                                          _vm.gettableTotalPoints(
                                            _vm.allclasswork,
                                            gradingCriteria.id
                                          )
                                        )
                                      ) +
                                      "\n\n                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.totalPercentage(
                                          _vm.AllStudentClassworkGrades(
                                            student.id,
                                            gradingCriteria.id
                                          ),
                                          gradingCriteria.percentage,
                                          _vm.gettableTotalPoints(
                                            _vm.allclasswork,
                                            gradingCriteria.id
                                          )
                                        )
                                      ) +
                                      "%\n                        "
                                  )
                                ])
                              ],
                              2
                            )
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm.sumPercentage(
                              _vm.allStudentFinalGrades(student.id)
                            )
                          ) +
                          "\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm.sumTransmutedGrade(
                              _vm.allStudentFinalGrades(student.id)
                            )
                          ) +
                          "\n\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            _vm.transmuteFinalGrade(
                              _vm.sumTransmutedGrade(
                                _vm.allStudentFinalGrades(student.id)
                              )
                            )
                          ) +
                          "\n\n            "
                      )
                    ])
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _vm.students.length == 0
                ? _c("tr", [
                    _c(
                      "td",
                      { staticClass: "text-center", attrs: { colspan: "100" } },
                      [
                        _vm._v(
                          "\n                No data available, please add or invite students.\n            "
                        )
                      ]
                    )
                  ])
                : _vm._e()
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