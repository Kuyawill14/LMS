(self.webpackChunk=self.webpackChunk||[]).push([[2801],{5786:function(t,e){var s,a,n;a=[],void 0===(n="function"==typeof(s=function(){return function t(e,s,a){var n,r,i=window,l="application/octet-stream",o=a||l,d=e,c=!s&&!a&&d,u=document.createElement("a"),h=function(t){return String(t)},f=i.Blob||i.MozBlob||i.WebKitBlob||h,p=s||"download";if(f=f.call?f.bind(i):Blob,"true"===String(this)&&(o=(d=[d,o])[0],d=d[1]),c&&c.length<2048&&(p=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var _=new XMLHttpRequest;return _.open("GET",c,!0),_.responseType="blob",_.onload=function(e){t(e.target.response,p,l)},setTimeout((function(){_.send()}),0),_}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&f!==h))return navigator.msSaveBlob?navigator.msSaveBlob(b(d),p):w(d);o=(d=b(d)).type||l}else if(/([\x80-\xff])/.test(d)){for(var g=0,v=new Uint8Array(d.length),m=v.length;g<m;++g)v[g]=d.charCodeAt(g);d=new f([v],{type:o})}function b(t){for(var e=t.split(/[:;,]/),s=e[1],a=("base64"==e[t.indexOf("charset")>0?3:2]?atob:decodeURIComponent)(e.pop()),n=a.length,r=0,i=new Uint8Array(n);r<n;++r)i[r]=a.charCodeAt(r);return new f([i],{type:s})}function w(t,e){if("download"in u)return u.href=t,u.setAttribute("download",p),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",u.addEventListener("click",(function(t){t.stopPropagation(),this.removeEventListener("click",arguments.callee)})),document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===e&&setTimeout((function(){i.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var s=document.createElement("iframe");document.body.appendChild(s),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,l)),s.src=t,setTimeout((function(){document.body.removeChild(s)}),333)}if(n=d instanceof f?d:new f([d],{type:o}),navigator.msSaveBlob)return navigator.msSaveBlob(n,p);if(i.URL)w(i.URL.createObjectURL(n),!0);else{if("string"==typeof n||n.constructor===h)try{return w("data:"+o+";base64,"+i.btoa(n))}catch(t){return w("data:"+o+","+encodeURIComponent(n))}(r=new FileReader).onload=function(t){w(this.result)},r.readAsDataURL(n)}return!0}})?s.apply(e,a):s)||(t.exports=n)},6418:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(1519),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".v-input__slot[data-v-41e92c6e]{margin-bottom:0!important}.v-tab--disabled[data-v-41e92c6e]{color:#000!important}#tableExp td[data-v-41e92c6e],#tableExp th[data-v-41e92c6e]{text-align:center!important;vertical-align:middle!important}",""]);const r=n},2801:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>b});var a=s(5786),n=s.n(a);const r={name:"export-excel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:()=>"export_"+(new Date).getTime(),downloadFields(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"==typeof this.beforeGenerate&&await this.beforeGenerate();let t=this.data;if("function"!=typeof this.fetch&&t||(t=await this.fetch()),!t||!t.length)return;let e=this.getProcessedJson(t,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(e),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(e),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(e),this.name,"application/vnd.ms-excel")},export:async function(t,e,s){let a=this.base64ToBlob(t,s);"function"==typeof this.beforeFinish&&await this.beforeFinish(),n()(a,e,s)},jsonToXLS(t){let e="<thead>";const s=Object.keys(t[0]).length;let a=this;null!=this.title&&(e+=this.parseExtraData(this.title,'<tr><th colspan="'+s+'">${data}</th></tr>')),e+="<tr>";for(let s in t[0])e+="<th>"+s+"</th>";return e+="</tr>",e+="</thead>",e+="<tbody>",t.map((function(t,s){e+="<tr>";for(let s in t)e+="<td>"+a.valueReformattedForMultilines(t[s])+"</td>";e+="</tr>"})),e+="</tbody>",null!=this.footer&&(e+="<tfoot>",e+=this.parseExtraData(this.footer,'<tr><td colspan="'+s+'">${data}</td></tr>'),e+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",e).replace("${worksheet}",this.worksheet)},jsonToCSV(t){var e=[];null!=this.title&&e.push(this.parseExtraData(this.title,"${data}\r\n"));for(let s in t[0])e.push(s),e.push(",");return e.pop(),e.push("\r\n"),t.map((function(t){for(let s in t){let a='="'+t[s]+'"';a.match(/[,"\n]/)&&(a='"'+a.replace(/\"/g,'""')+'"'),e.push(a),e.push(",")}e.pop(),e.push("\r\n")})),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson(t,e){let s=this.getKeys(t,e),a=[],n=this;return t.map((function(t,e){let r={};for(let e in s){let a=s[e];r[e]=n.getValue(a,t)}a.push(r)})),a},getKeys(t,e){if(e)return e;let s={};for(let e in t[0])s[e]=e;return s},parseExtraData(t,e){let s="";if(Array.isArray(t))for(var a=0;a<t.length;a++)s+=e.replace("${data}",t[a]);else s+=e.replace("${data}",t);return s},getValue(t,e){const s="object"!=typeof t?t:t.field;let a="string"!=typeof s?[]:s.split("."),n=this.defaultValue;return n=s?a.length>1?this.getValueFromNestedItem(e,a):this.parseValue(e[s]):e,t.hasOwnProperty("callback")&&(n=this.getValueFromCallback(n,t.callback)),n},valueReformattedForMultilines:t=>"string"==typeof t?t.replace(/\n/gi,"<br/>"):t,getValueFromNestedItem(t,e){let s=t;for(let t of e)s&&(s=s[t]);return this.parseValue(s)},getValueFromCallback(t,e){if("function"!=typeof e)return this.defaultValue;const s=e(t);return this.parseValue(s)},parseValue(t){return t||0===t||"boolean"==typeof t?t:this.defaultValue},base64ToBlob(t,e){let s=window.btoa(window.unescape(encodeURIComponent(t))),a=atob(s),n=a.length,r=new Uint8ClampedArray(n);for(;n--;)r[n]=a.charCodeAt(n);return new Blob([r],{type:e})}}};var i=s(1900);const l=(0,i.Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",(function(){return[t._v("\n        Download "+t._s(t.name)+"\n    ")]}))],2)}),[],!1,null,null,null).exports,o={install:function(t){t.component(l.name,l)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o);const d=o;var c=s(629);function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){f(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function f(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}Vue.use(d);const p={data:function(){return{json_fields:{"Full Name":"name"},json_data:[],json_meta:[[{key:"charset",value:"utf-8"}]],allclasswork:null,activeTab:null,shown:!1,selectedClassName:"",selectedClass:null,Deldialog:!1,dialog:!1,temp_id:"",loading:!0,type:"",search:"",grading_criteria_form:{},grading_criteria:{},course_id:"",delId:"",classworkList:[],headers:[],classList:[],students:[],classworkTotalPoints:0,classworkTotalPointsTable:null,final_grades:[],items:[{text:"Course",disabled:!1,link:"courses"},{text:"Grade Book",disabled:!0,link:"gradebook"}]}},computed:h(h({},(0,c.Se)(["getcourseInfo"])),(0,c.Se)(["get_gradingCriteria","allClass","AllStudentClassworkGrades","allStudentFinalGrades","AllStudentClassworkGradesFortable"])),methods:{transmuteFinalGrade:function(t){return(t>=98?"1.0":t>=95?"1.25":t>=92?"1.5":t>=89?"1.75":t>=86?"2.0":t>=83?"2.25":t>=80?"2.5":t>=77?" 2.75":t>=75?"3.0":"5.0").toString()},classworkData:function(t,e){var s=[];if(t)for(var a=0;a<t.length;a++)t[a].grading_criteria_id==e&&s.push(t[a]);return s},gettableTotalPoints:function(t,e){for(var s=0,a=0;a<t.length;a++)t[a].grading_criteria_id==e&&(s+=t[a].points);return s},transmutedGrade:function(t,e){return this.classworkTotalPoints?((t/this.classworkTotalPoints*100/2+50)*e/100).toFixed(2):0},sumTransmutedGrade:function(t){for(var e=0,s=0;s<t.length;s++)e+=t[s].transmuted_grade_percentage;return e.toFixed(2)},sumPercentage:function(t){for(var e=0,s=0;s<t.length;s++)e+=t[s].grade_percentage;return e.toFixed(2)},totalPercentHeader:function(){this.headers.push({text:"Total Points ("+this.classworkTotalPoints+"pts)",align:"center",value:"total"},{text:"I. Percentage",align:"center",value:"Initial Percentage"},{text:"T. Percentage",align:"center",value:"Transmuted Percentage"})},classworkTotalPoins:function(){},totalPoints:function(t){for(var e=0,s=0;s<t.length;s++)e+=t[s].points;return e},totalPercentage:function(t,e,s){for(var a,n=0,r=0;r<t.length;r++)n+=t[r].points;return a=null==s?n/this.classworkTotalPoints*e:n/s*e,1==isNaN(a)?0:a.toFixed(2)},getStudentList:function(){var t=this;axios.get("/api/student/all_by_class/"+this.selectedClass).then((function(e){t.students=e.data})).catch((function(t){}))},getAllGradeCriteria:function(){this.$store.dispatch("fetchGradingCriteria",this.$route.params.id)},getClassworkList:function(){var t=this;this.headers=[],this.loading=!0;this.getStudentList(),this.headers.push({text:"Name",value:"name"}),axios.get("/api/grade-book/classworks/"+this.selectedClass).then((function(e){t.classworkList=e.data,null==t.allclasswork&&(t.allclasswork=e.data);for(var s=0;s<t.classworkList.length;s++)t.classworkList[s].grading_criteria_id==t.get_gradingCriteria[0].id&&(t.headers.push({text:t.classworkList[s].title+" ("+t.classworkList[s].points+"pts)",align:"center",value:t.classworkList[s].title}),t.classworkList[s].points);t.totalPercentHeader()}));var e={course_id:this.$route.params.id,class_id:this.selectedClass};this.$store.dispatch("fetchAllStudentClassworkGrades",this.selectedClass),this.$store.dispatch("fetchAllStudentFinalGrades",e).then((function(){t.loading=!1}))},_getFInalGradestTab:function(){this.activeTab="finalgrades"},_getClassworkListbyTab:function(t,e){var s=this;if(this.activeTab!=t){this.headers=[],this.activeTab=t,this.$store.dispatch("fetchNotification",this.notificationType);var a=0;this.headers.push({text:"Name",value:"name"}),axios.get("/api/grade-book/classworks/"+this.selectedClass).then((function(e){s.classworkList=e.data;for(var n=0;n<s.classworkList.length;n++)s.classworkList[n].grading_criteria_id==t&&(s.headers.push({text:s.classworkList[n].title+" ("+s.classworkList[n].points+"pts)",align:"center",value:s.classworkList[n].title}),a+=s.classworkList[n].points);s.classworkTotalPoints=a,s.totalPercentHeader()}))}},getStudentClassworksGrades:function(t){var e=this;axios.get("/api/grade-book/classworkGrades/"+this.selectedClass).then((function(t){e.classworkList=t.data;for(var s=0;s<e.classworkList.length;s++)e.classworkList[s].grading_criteria_id}))},_totalPercent:function(t){var e=0;return t.forEach((function(t){e+=parseFloat(t.percentage)})),e},getClassList:function(){var t=this;this.$store.dispatch("fetchSubjectCourseClassList",this.$route.params.id).then((function(){t.classList=t.allClass,t.selectedClass=t.classList[0].class_id,t.selectedClassName=t.classList[0].class_name,t.getClassworkList(),t.getStudentList();var e={course_id:t.$route.params.id,class_id:t.selectedClass};t.$store.dispatch("fetchAllStudentFinalGrades",e).then((function(){t.loading=!1}))}))},getFinalGrades:function(){this.students.sort(),this.json_fields["Raw Grade"]="raw_grade",this.json_fields["Transmuted Grade"]="transmuted_grade";for(var t={},e=0;e<this.students.length;e++){this.allStudentFinalGrades(this.students[e].id);t.name=this.students[e].lastName+", "+this.students[e].firstName;var s=this.sumPercentage(this.allStudentFinalGrades(this.students[e].id)),a=this.sumTransmutedGrade(this.allStudentFinalGrades(this.students[e].id));t.raw_grade=s,t.transmuted_grade=a,this.json_data.push(t)}},get_AllFinalGrades_s:function(){this.students.sort();for(var t=0;t<this.get_gradingCriteria.length;t++){this.json_fields[this.get_gradingCriteria[t].name]=this.get_gradingCriteria[t].name;for(var e=0;e<this.classworkList.length;e++)this.get_gradingCriteria[t].id==this.classworkList[e].grading_criteria_id&&(this.json_fields[this.classworkList[e].title]=this.classworkList[e].title)}this.json_fields["Raw Grade"]="raw_grade",this.json_fields["Transmuted Grade"]="transmuted_grade";var s={};for(t=0;t<this.students.length;t++){var a=this.allStudentFinalGrades(this.students[t].id);s.name=this.students[t].lastName+", "+this.students[t].firstName;for(var n=0;n<a.length;n++){for(e=0;e<a.length;e++)this.AllStudentClassworkGrades(this.students[t].id,a[t].grade_category_id);s[a[n].name]=a[n].grade_percentage}var r=this.sumPercentage(this.allStudentFinalGrades(this.students[t].id)),i=this.sumTransmutedGrade(this.allStudentFinalGrades(this.students[t].id));s.raw_grade=r,s.transmuted_grade=i,this.json_data.push(s)}},test:function(t){!function(){t.nodeType||(t=document.getElementById(t));var e,s=f({worksheet:name||"Worksheet",table:t.innerHTML},"table",t.innerHTML);window.location.href="data:application/vnd.ms-excel;base64,"+function(t){return window.btoa(unescape(encodeURIComponent(t)))}((e=s,'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'.replace(/{(\w+)}/g,(function(t,s){return e[s]}))))}()}},mounted:function(){this.loading=!0,this.getAllGradeCriteria(),this.getClassList(),this.loading=!1;this.students;this.loading=!1}};var _=s(2446),g=s.n(_),v=s(6418),m={insert:"head",singleton:!1};g()(v.Z,m);v.Z.locals;const b=(0,i.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-breadcrumbs",{staticClass:"ma-0 pa-0 mt-3",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[s("v-breadcrumbs-item",{attrs:{to:{name:a.link},disabled:a.disabled}},[t._v("\n                "+t._s(a.text.toUpperCase())+"\n            ")])]}}])}),t._v(" "),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"downloads float-right"},[s("v-btn",{on:{click:function(e){return t.test("testTable")}}},[s("v-icon",{attrs:{color:"grey lighten-1",left:""}},[t._v("\n                        download\n                    ")]),t._v("\n                    ALl Grades\n                ")],1)],1)])],1),t._v(" "),s("v-row",{staticClass:"pt-2"},[s("v-col",{attrs:{cols:"6"}},[s("h2",[t._v("\n                Student Grades\n            ")])]),t._v(" "),s("v-col",{attrs:{cols:"6"}},[s("v-select",{staticClass:"float-right",attrs:{items:t.classList,"item-text":"class_name","item-value":"class_id",label:"Select Class"},on:{change:function(e){return t.getClassworkList()}},model:{value:t.selectedClass,callback:function(e){t.selectedClass=e},expression:"selectedClass"}})],1)],1),t._v(" "),s("v-card",[s("v-tabs",{attrs:{color:"orange accent-4",right:""}},[s("v-tab",{attrs:{href:"#final_grades",active:""},on:{click:function(e){return t._getFInalGradestTab()}}},[t._v("\n                Final Grades\n            ")]),t._v(" "),t._l(t.get_gradingCriteria,(function(e,a){return s("v-tab",{key:a,on:{click:function(s){return t._getClassworkListbyTab(e.id)}}},[t._v("\n                "+t._s(e.name)+"\n            ")])})),t._v(" "),s("v-tab-item",{attrs:{id:"final_grades"}},[s("v-card-title",[t._v("\n                    Final Grades\n\n                    "),s("export-excel",{staticClass:"btn btn-default ml-2",attrs:{data:t.json_data,fields:t.json_fields,worksheet:"My Worksheet",name:t.getcourseInfo.course_code+" - "+t.getcourseInfo.course_name+"-"+t.selectedClassName}},[s("v-btn",{attrs:{small:""},on:{click:function(e){return t.getFinalGrades()}}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n                                download\n                            ")])],1)],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n                                    Name")]),t._v(" "),t._l(t.get_gradingCriteria,(function(e,a){return s("th",{key:a,staticClass:"text-center"},[t._v("\n                                    "+t._s(e.name)+" ("+t._s(e.percentage)+"%)")])})),t._v(" "),s("th",{staticClass:"text-center"},[t._v("\n                                    Final Grades")])],2)]),t._v(" "),0==t.loading?s("tbody",[t._l(t.students,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-left"},[t._v(t._s(e.lastName+", "+e.firstName)+" ")]),t._v(" "),t._l(t.allStudentFinalGrades(e.id),(function(e,a){return s("td",{key:a,staticClass:"text-center"},[t._v("\n\n                                    "+t._s(e.transmuted_grade_percentage.toFixed(2))+"\n                                    ")])})),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                                    "+t._s(t.sumTransmutedGrade(t.allStudentFinalGrades(e.id)))+"\n\n                                ")])],2)})),t._v(" "),0==t.students.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"100"}},[t._v("\n                                    No data available, please add or invite students.\n                                ")])]):t._e()],2):t._e()]},proxy:!0}])})],1),t._v(" "),t._l(t.get_gradingCriteria,(function(e,a){return s("v-tab-item",{key:a},[s("v-card-title",[t._v("\n                    "+t._s(e.name)+" - "+t._s(e.percentage)+"%\n\n                    "),s("export-excel",{staticClass:"btn btn-default ml-2",attrs:{data:t.json_data,fields:t.json_fields,worksheet:"My Worksheet",name:t.getcourseInfo.course_code+" - "+t.getcourseInfo.course_name+"-"+e.name}},[s("v-btn",{attrs:{small:""},on:{click:function(e){return t.getFinalGrades()}}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n                                download\n                            ")])],1)],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),0!=t.headers.length?s("v-data-table",{attrs:{headers:t.headers,items:t.students},scopedSlots:t._u([t._l(t.headers,(function(e){return{key:"header."+e.value,fn:function(a){return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,r=a.attrs;return[s("span",t._g(t._b({},"span",r,!1),n),[t._v(t._s(e.text))])]}}],null,!0)},[t._v(" "),s("span",[t._v(t._s(e.value))])])]}}})),{key:"body",fn:function(a){var n=a.items;return[s("tbody",[t._l(n,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.lastName+", "+a.firstName)+" ")]),t._v(" "),t._l(t.AllStudentClassworkGrades(a.id,e.id),(function(e,a){return s("td",{key:a,staticClass:"text-center"},[t._v("\n\n                                    "+t._s(e.points)+" "),null!=e.points?s("span",{staticClass:"text-caption",attrs:{color:"grey"}},[t._v(" / "+t._s(e.hp_points)+"\n                                    ")]):t._e(),t._v(" "),null==e.points?s("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),a),[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n                                                    mdi-close\n                                                ")])],1)]}}],null,!0),model:{value:t.shown,callback:function(e){t.shown=e},expression:"shown"}},[t._v(" "),s("span",[t._v("No Submission")])]):t._e()],1)})),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                                    "+t._s(t.totalPoints(t.AllStudentClassworkGrades(a.id,e.id)))+"\n                                ")]),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                                    "+t._s(t.totalPercentage(t.AllStudentClassworkGrades(a.id,e.id),e.percentage))+"%\n                                ")]),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                                    "+t._s(t.transmutedGrade(t.totalPoints(t.AllStudentClassworkGrades(a.id,e.id)),e.percentage))+"%\n                                ")])],2)})),t._v(" "),0==t.students.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"100"}},[t._v("\n                                    No data available, please add or invite students.\n                                ")])]):t._e()],2)]}}],null,!0)}):t._e()],1)}))],2)],1),t._v(" "),0==t.loading?s("table",{staticClass:"tableExp",attrs:{id:"testTable",hidden:""}},[s("tr",[s("th",[t._v("Student ID")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),t._l(t.get_gradingCriteria,(function(e,a){return s("th",{key:a,staticClass:"text-center",attrs:{colspan:t.classworkData(t.allclasswork,e.id).length}},[t._v("\n                "+t._s(e.name)+" ("+t._s(e.percentage)+"%)\n\n                "),s("table",{staticClass:"tableExp"},[s("tr",[t._l(t.classworkData(t.allclasswork,e.id),(function(e,a){return s("th",{key:a},[t._v("\n                            "+t._s(e.title)+"\n                        ")])})),t._v(" "),s("th",[t._v("\n                            Total Points\n                        ")]),t._v(" "),s("th",[t._v("\n                            Percent\n                        ")])],2),t._v(" "),s("tr",[t._l(t.classworkData(t.allclasswork,e.id),(function(e,a){return s("th",{key:a},[t._v("\n                            "+t._s(e.points)+"\n                        ")])})),t._v(" "),s("th",[t._v("\n                            "+t._s(t.gettableTotalPoints(t.allclasswork,e.id))+"\n                        ")]),t._v(" "),s("th",[t._v("\n                            "+t._s(e.percentage)+"%\n                        ")])],2)])])})),t._v(" "),s("th",{staticClass:"text-center",attrs:{rowspan:"1"}},[t._v("\n                Raw Grade")]),t._v(" "),s("th",{staticClass:"text-center",attrs:{rowspan:"1"}},[t._v("\n                Transmuted Grade")]),t._v(" "),s("th",{staticClass:"text-center",attrs:{rowspan:"1"}},[t._v("\n                Final Grade")])],2),t._v(" "),t._l(t.students,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-left"},[t._v(t._s(e.student_id)+" ")]),t._v(" "),s("td",{staticClass:"text-left"},[t._v(t._s(e.lastName+", "+e.firstName)+" ")]),t._v(" "),t._l(t.get_gradingCriteria,(function(a,n){return s("td",{key:n,staticClass:"text-center",attrs:{colspan:t.classworkData(t.allclasswork,a.id).length}},[s("table",{staticClass:"tableExp"},[s("tr",[t._l(t.AllStudentClassworkGrades(e.id,a.id),(function(e,a){return s("td",{key:a},[t._v("\n                            "+t._s(null==e.points?0:e.points)+"\n                        ")])})),t._v(" "),s("th",[t._v("\n                            "+t._s(t.totalPoints(t.AllStudentClassworkGrades(e.id,a.id),t.gettableTotalPoints(t.allclasswork,a.id)))+"\n\n                        ")]),t._v(" "),s("th",[t._v("\n                            "+t._s(t.totalPercentage(t.AllStudentClassworkGrades(e.id,a.id),a.percentage,t.gettableTotalPoints(t.allclasswork,a.id)))+"%\n                        ")])],2)])])})),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                "+t._s(t.sumPercentage(t.allStudentFinalGrades(e.id)))+"\n            ")]),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                "+t._s(t.sumTransmutedGrade(t.allStudentFinalGrades(e.id)))+"\n\n            ")]),t._v(" "),s("td",{staticClass:"text-center"},[t._v("\n                "+t._s(t.transmuteFinalGrade(t.sumTransmutedGrade(t.allStudentFinalGrades(e.id))))+"\n\n            ")])],2)})),t._v(" "),0==t.students.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"100"}},[t._v("\n                No data available, please add or invite students.\n            ")])]):t._e()],2):t._e()],1)}),[],!1,null,"41e92c6e",null).exports}}]);