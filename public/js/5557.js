"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5557],{23349:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(1519),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,".pannel-btn{position:absolute;right:47px;top:15px;z-index:100}.v-expansion-panel-content__wrap{padding:0!important}.course_content_header{align-items:center;display:flex}",""]);const s=r},65862:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(1519),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,".v-list-item--disabled[data-v-1f005c32]{background:#f6f6f6}",""]);const s=r},30584:(e,t,i)=>{var n,r=((n=i(70538))&&"object"==typeof n&&"default"in n?n.default:n).extend({render:function(e){return e("div",{class:"v-idle"},this.display)},props:{duration:{type:Number,default:300},events:{type:Array,default:function(){return["mousemove","keypress"]}},loop:{type:Boolean,default:!1},reminders:{type:Array,default:function(){return[]}},wait:{type:Number,default:0}},data:function(){return{display:"",timer:void 0,start:0,counter:void 0,diff:0,minutes:"",seconds:""}},mounted:function(){var e=this;setTimeout((function(){e.start=Date.now(),e.setDisplay(),e.$nextTick((function(){e.setTimer();for(var t=e.events.length-1;0<=t;--t)window.addEventListener(e.events[t],e.clearTimer)}))}),1e3*this.wait)},methods:{setDisplay:function(){var e,t;this.diff=this.duration-((Date.now()-this.start)/1e3|0),this.diff<0&&!this.loop||(this.shouldRemind(),e=this.diff/60|0,t=this.diff%60|0,this.minutes=""+(e<10?"0"+e:e),this.seconds=""+(t<10?"0"+t:t),this.display=this.minutes+":"+this.seconds)},shouldRemind:function(){0<this.reminders.length&&this.reminders.includes(this.diff)&&this.remind()},countdown:function(){this.setDisplay(),this.diff<=0&&this.loop&&(this.start=Date.now()+1e3)},idle:function(){this.$emit("idle")},remind:function(){this.$emit("remind",this.diff)},setTimer:function(){this.timer=window.setInterval(this.idle,1e3*this.duration),this.counter=window.setInterval(this.countdown,1e3)},clearTimer:function(){clearInterval(this.timer),clearInterval(this.counter),this.setDisplay(),this.start=Date.now(),this.diff=0,this.setTimer()}},beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.counter);for(var e=this.events.length-1;0<=e;--e)window.removeEventListener(this.events[e],this.clearTimer)}}),s={install:function(e){e.component("v-idle",r)}};e.exports=s},35557:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var n=i(87757),r=i.n(n),s=i(30584),o=i.n(s);const a={props:["timer_count","warning_type"],data:function(){return{timer:0,failed_timer:5,isTimerClickedFailed:!0,isTimerDone:!1,_warning_type:this.warning_type,tmp_timer:null,counter:1}},methods:{fn_timer_done:function(){this.isTimerDone&&this.$emit("toggleCloaseDialog")},checkTimerDone:function(e){var t=this;null!=e&&(this.timer=e);var i=setInterval((function(){0==t.timer?(t.isTimerDone=!0,clearInterval(i),t.checkTimerFailed()):t.timer=t.timer-1}),1e3)},checkTimerFailed:function(){var e=this;this.failed_timer=5,this.isTimerClickedFailed=!1;var t=setInterval((function(){e.failed_timer=e.failed_timer-1,0==e.failed_timer&&(e.isTimerClickedFailed=!0,e.isTimerDone=!1,e.checkTimerDone(30*e.counter),clearInterval(t),e.counter++)}),1e3)}},mounted:function(){this.checkTimerDone()}};var u=i(51900);const l=(0,u.Z)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"pa-3"},[i("div",{staticClass:"mb-3 pa-2"},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center mb-0 pb-0",attrs:{cols:"12"}},[i("v-avatar",{attrs:{tile:"",size:"120"}},[i("v-img",{attrs:{src:"https://c.tenor.com/jFesPO4xs8kAAAAM/cat-watching-you.gif"}})],1)],1),e._v(" "),i("v-col",{staticClass:"text-center mt-0 pt-0",attrs:{cols:"12"}},[i("div",{staticClass:"primary--text display-1"},[e._v("Oops...")])])],1)],1),e._v(" "),i("v-card-text",[i("v-row",[i("v-col",{staticClass:"text-center"},[i("p",{staticClass:"body-1"},[e._v("\n\n                    "+e._s(1==e.warning_type?"You have been inactive for "+e.timer_count+" seconds. Your timer will be paused.":"You have leave the module's page. Your timer will be paused.")+"\n                    \n                ")]),e._v(" "),i("v-btn",{staticClass:"ml-3 mr-3 mt-2",attrs:{color:"primary",disabled:!e.isTimerDone||1==e.isTimerClickedFailed,rounded:"",large:""},on:{click:function(t){return e.fn_timer_done()}}},[e._v("\n                    Confirm "+e._s(0==e.timer?"":e.timer)+"\n                ")]),e._v(" "),i("br"),i("br"),e._v(" "),e.isTimerClickedFailed?e._e():i("span",[e._v(" Please click "),i("b",[e._v("Confirm")]),e._v(" before "+e._s(e.failed_timer)+" seconds")])],1)],1)],1)],1)}),[],!1,null,null,null).exports;var d=i(20629);function c(e,t,i,n,r,s,o){try{var a=e[s](o),u=a.value}catch(e){return void i(e)}a.done?t(u):Promise.resolve(u).then(n,r)}function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Vue.use(o());const f={props:["role","expand"],components:{dialogWarning:l},data:function(){return{renderComponent:!0,warning_count:0,idleTimer:30,idleTimer_reminder:[10,20],click_id:null,loading:!0,temp_id:null,showLecture:!1,addLink:!1,showClasswork:!1,subModuleForm:{},mainModule_id:"",mainModule:[],studentSubModuleProgress:[],studentSubModuleProgressForm:{},timespent:0,time:!1,updateTime:!1,percentage:0,firstLoad:!1,warningDialog:!1,confirmWarning:!1,_mainModule_id:"",_subModule_id:"",isSelectedModule:!1,warning_type:0}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},(0,d.Se)(["getmain_module","getSub_module","getAll_sub_module","getStudentModuleProgress"])),methods:{subModuleClick:function(e,t,i,n,r){e||"Teacher"==this.role?(this.setTimeSpent(t,i,r),this.passToMainComponent(this.getSub_module(t),i),this.addSubStudentProgress(t,i,n,r),this.isSelectedModule=!0):(this.toastInfo("Module not available, The instructor still not yet publish this module."),this.isSelectedModule=!1)},passToMainComponent:function(e,t){var i=e.find((function(e){return e.id===t}));this.$emit("subModule",i)},student_sub_module_progress:function(e){},getCount:function(e,t){for(var i=0,n=this.getSub_module(t),r=0;r<n.length;r++)for(var s=0;s<e.length;s++)void 0!==e[s]&&void 0!==n[r]&&e[s].sub_module_id==n[r].id&&e[s].time_spent>=n[r].required_time&&i++;return i},addSubStudentProgress:function(e,t,i){var n=this;"Student"==this.role&&(this.tempSubId=t,this.studentSubModuleProgressForm.main_module_id=e,this.studentSubModuleProgressForm.sub_module_id=t,this.studentSubModuleProgressForm.type=i,this.studentSubModuleProgressForm.course_id=this.$route.params.id,axios.post("/api/student_sub_module/insert",{studentProgress:this.studentSubModuleProgressForm}).then((function(e){n.$store.dispatch("studentmodule_progress",n.$route.params.id),n.fetchStudentModuleProgress()})))},checkTimeSpent:function(e,t,i){for(var n=!1,r=0;r<e.length;r++)e[r].sub_module_id==t.id&&e[r].time_spent>=i&&(n=!0);return n},fetchClass:function(){this.$store.dispatch("fetchClassList").then((function(){}))},getTimeSpent:function(e,t){for(var i=0;i<e.length;i++)if(e[i].sub_module_id==t)return e[i].time_spent;return 0},convertTime:function(e,t){if(-1==t){var i=this.getTimeSpent(this.studentSubModuleProgress,e);return void 0===i&&(i=0),new Date(1e3*parseInt(i)).toISOString().substr(11,8)}return new Date(1e3*parseInt(t)).toISOString().substr(11,8)},setTimeSpent:function(e,t){var i=this;"Student"==this.role&&(this._mainModule_id=e,this._subModule_id=t,clearInterval(this.ctrTime),clearInterval(this.updateTime),this.timespent=this.getTimeSpent(this.studentSubModuleProgress,t),this.ctrTime=!1,this.updateTime=!1,this.ctrTime=setInterval((function(){i.timespent++,i.time=!0}),1e3),this.updateTime=setInterval((function(){i.updateStudentTimeProgress(e,t,i.timespent)}),3e4))},updateStudentTimeProgress:function(e,t,i){var n=this,r={};r.main_module_id=e,r.sub_module_id=t,r.time_spent=i;axios.post("/api/student_sub_module/updatetime",{studentProgress:r}).then((function(e){for(var t=e.data.studentProgress,i=0;i<n.studentSubModuleProgress.length;i++)if(n.studentSubModuleProgress[i].sub_module_id==t.sub_module_id){n.studentSubModuleProgress[i].time_spent=t.time_spent,n.$store.dispatch("studentmodule_progress",n.$route.params.id);break}}))},fetchStudentModuleProgress:function(){var e=this;axios.get("/api/student_sub_module/all/".concat(this.$route.params.id)).then((function(t){e.studentSubModuleProgress=t.data}))},confirmWarning_fn:function(){this.warningDialog=!this.warningDialog,(this.confirmWarning=!0)&&(this.warningDialog=!1,this.setTimeSpent(this._mainModule_id,this._subModule_id),this.confirmWarning=!1)},triggerWarning:function(){this.isSelectedModule&&"Teacher"!=this.role&&(this.warningDialog=!0,this.confirmWarning=!1,clearInterval(this.ctrTime),clearInterval(this.updateTime))},onidle:function(e){this.triggerWarning(),this.warning_type=1},forceRerender:function(){var e=this;this.renderComponent=!1,this.$nextTick((function(){e.renderComponent=!0}))}},mounted:function(){var e,t=this;return(e=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchStudentModuleProgress(),t.$store.dispatch("fetchMainModule",t.$route.params.id),t.$store.dispatch("studentmodule_progress",t.$route.params.id),t.loading=!1,setTimeout((function(){t.firstLoad=!1}),5e3);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,i=arguments;return new Promise((function(n,r){var s=e.apply(t,i);function o(e){c(s,n,r,o,a,"next",e)}function a(e){c(s,n,r,o,a,"throw",e)}o(void 0)}))})()},created:function(){this.firstLoad=!0},beforeMount:function(){var e=this;$(window).bind("touchstart",(function(){e.forceRerender()})),$(window).bind("touchmove",(function(){e.forceRerender()})),document.addEventListener("contextmenu",(function(e){e.preventDefault()})),window.addEventListener("onbeforeunload",this.preventNav),$(window).blur((function(){document.activeElement===document.querySelector("iframe")?setInterval((function(){document.activeElement.blur()}),1e3):e.triggerWarning()}))},beforeDestroy:function(){clearInterval(this.ctrTime),clearInterval(this.updateTime)}};var p=i(72446),v=i.n(p),_=i(23349),g={insert:"head",singleton:!1};v()(_.Z,g);_.Z.locals;var b=i(65862),w={insert:"head",singleton:!1};v()(b.Z,w);b.Z.locals;const S=(0,u.Z)(f,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{width:"100%"}},[i("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.warningDialog,callback:function(t){e.warningDialog=t},expression:"warningDialog"}},[e.warningDialog?i("dialogWarning",{attrs:{timer_count:e.idleTimer,warning_type:e.warning_type},on:{toggleCloaseDialog:e.confirmWarning_fn}}):e._e()],1),e._v(" "),i("v-card",{staticClass:"mb-2"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"course_content_header"},[e._v("\n                    Modules Content\n                    "),i("v-spacer"),e._v(" "),e.isSelectedModule&&e.renderComponent?i("v-idle",{staticStyle:{opacity:"0%"},attrs:{reminders:e.idleTimer_reminder,loop:!0,duration:e.idleTimer},on:{idle:e.onidle}}):e._e(),e._v(" "),i("v-spacer"),e._v(" "),i("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[i("v-progress-circular",e._g(e._b({staticClass:"float-right",attrs:{value:e.getStudentModuleProgress.percentage,rotate:-90,size:40,color:"green lighten-2"}},"v-progress-circular",r,!1),n),[i("span",[e._v(" "+e._s(e.getStudentModuleProgress.percentage))])])]}}])},[e._v(" "),i("span",[e._v(e._s(e.getStudentModuleProgress.completed)+" of\n                            "+e._s(e.getStudentModuleProgress.submodules_count)+" complete")])])],1)],1),e._v(" "),e.expand?i("v-list-item-action",[i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("listClose")}}},[i("v-icon",{attrs:{color:"grey lighten-1"}},[e._v("mdi-close")])],1)],1):e._e()],1)],1),e._v(" "),i("v-expansion-panels",{staticStyle:{"margin-left":"1px"},attrs:{focusable:""}},e._l(e.getmain_module,(function(t,n){return i("v-expansion-panel",{key:"module"+n},[i("v-expansion-panel-header",[i("span",{staticStyle:{"font-size":"1.0rem"}},[i("v-icon",{staticStyle:{"font-size":"1.0rem"}},[e._v("\n                        mdi-folder\n                    ")]),e._v("\n                    "+e._s(t.module_name)+" "),i("br"),e._v("\n                    "+e._s(e.getCount(e.studentSubModuleProgress,t.id)+" / "+e.getSub_module(t.id).length)+"\n\n\n                ")],1)]),e._v(" "),i("v-expansion-panel-content",{staticClass:"pa-0"},e._l(e.getSub_module(t.id),(function(n,r){return i("v-list-item",{key:"Submodule"+r,staticClass:"pl-8",attrs:{link:"",disabled:e.click_id==n.id},on:{click:function(i){e.click_id=n.id,e.subModuleClick(t.isPublished,t.id,n.id,n.type,e.studentSubModuleProgress)}}},[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[e._v("\n                            mdi-folder\n                        ")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(" "+e._s(n.sub_module_name))]),e._v(" "),i("v-list-item-subtitle",[e._v(" "+e._s(n.type))]),e._v(" "),i("v-list-item-subtitle",[e._v(" Time spent:\n                            "+e._s(e.convertTime(n.id,-1))+"\n\n                        ")]),e._v(" "),i("v-list-item-subtitle",[e._v(" Required time:\n                            "+e._s(e.convertTime(-1,n.required_time))+"\n\n                        ")])],1),e._v(" "),i("v-list-item-action",[i("v-icon",{attrs:{color:e.checkTimeSpent(e.studentSubModuleProgress,n,n.required_time)?"success":"lighten"}},[e._v("\n                            mdi-check")])],1)],1)})),1)],1)})),1)],1)}),[],!1,null,"1f005c32",null).exports}}]);