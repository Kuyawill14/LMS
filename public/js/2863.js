"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2863],{40403:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(1519),a=n.n(s)()((function(t){return t[1]}));a.push([t.id,".chart[data-v-1a2c38de]{height:400px}",""]);const o=a},72863:(t,e,n)=>{n.r(e),n.d(e,{default:()=>v});var s=n(87757),a=n.n(s);function o(t,e,n,s,a,o,i){try{var r=t[o](i),l=r.value}catch(t){return void n(t)}r.done?e(l):Promise.resolve(l).then(s,a)}const i={props:["role"],components:{myCalendar:function(){return n.e(5892).then(n.bind(n,25892))},myNotification:function(){return n.e(7946).then(n.bind(n,87946))},studentClasses:function(){return n.e(3227).then(n.bind(n,13227))},studentGradeChart:function(){return n.e(6758).then(n.bind(n,26758))},myTask:function(){return n.e(8575).then(n.bind(n,28575))}},data:function(){return{class_count:0,unfinishCount:0,selected:0,calendarDialog:!1}},computed:(0,n(20629).Se)(["allClass"]),methods:{classCount:function(){var t=this;axios.get("/api/class/count").then((function(e){t.class_count=e.data.classCount}))},TotalClasswork:function(t){this.unfinishCount=t},fetchClasses:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("fetchClassList");case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(s,a){var i=t.apply(e,n);function r(t){o(i,s,a,r,l,"next",t)}function l(t){o(i,s,a,r,l,"throw",t)}r(void 0)}))})()}},mounted:function(){this.classCount(),this.fetchClasses()}};var r=n(72446),l=n.n(r),c=n(40403),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const v=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",[n("h2",[t._v("Dashboard")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:"8"}},[n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{lg:"6"}},[n("v-card",[n("div",{staticClass:"text-center",style:t.$vuetify.breakpoint.lgAndUp?"font-size: 3rem;color:#FF5400":"font-size: 2rem;color:#FF5400"},[t._v("\n                            "+t._s(t.class_count)+"\n                        ")]),t._v(" "),n("div",{class:t.$vuetify.breakpoint.lgAndUp?"text-center":"text-center text-caption"},[t._v("\n                            Course Enrolled\n                        ")])])],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{lg:"6"}},[n("v-card",[n("div",{staticClass:"text-center",style:t.$vuetify.breakpoint.lgAndUp?"font-size: 3rem;color:#FF5400":"font-size: 2rem;color:#FF5400"},[t._v("\n                            "+t._s(t.unfinishCount)+"\n                        ")]),t._v(" "),n("div",{class:t.$vuetify.breakpoint.lgAndUp?"text-center":"text-center text-caption"},[t._v("\n                            Unfinished Classworks\n                        ")])])],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp||0==t.selected?n("v-row",{staticClass:"mb-0",class:t.$vuetify.breakpoint.lgAndUp?"":"pt-0 mt-0"},[n("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pt-0 mt-0 mb-0 pb-0":"t-0 mt-0 mb-0 pb-0",attrs:{cols:"12"}},[n("studentGradeChart",{attrs:{allClass:t.allClass}})],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||0==t.selected?n("v-row",{staticClass:"mt-0"},[n("v-col",{class:(t.$vuetify.breakpoint.lgAndUp,"pt-0 mt-0"),attrs:{cols:"12"}},[n("studentClasses")],1)],1):t._e()],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-0":"pt-0 mt-0",attrs:{cols:"12",lg:"4"}},[t.$vuetify.breakpoint.mdAndUp||1==t.selected?n("v-row",[n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"mt-0 pt-0 ":"",attrs:{cols:"12"}},[n("v-card",{attrs:{outlined:"",elevation:"2"}},[n("myTask",{on:{RecieveTotalClasswork:t.TotalClasswork}})],1)],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||2==t.selected?n("v-row",[n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-2 mt-2":"pt-3 mt-3",attrs:{cols:"12"}},[n("v-card",{attrs:{elevation:"2"},on:{click:function(e){t.calendarDialog=!0}}},[n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"1000",id:"calendar_modal"},model:{value:t.calendarDialog,callback:function(e){t.calendarDialog=e},expression:"calendarDialog"}},[n("v-card",{staticClass:"pa-3"},[n("myCalendar",{attrs:{role:t.role}}),t._v(" "),n("br")],1)],1),t._v(" "),n("myCalendar",{attrs:{role:t.role}})],1)],1)],1):t._e()],1)],1),t._v(" "),"Student"!=t.role||t.$vuetify.breakpoint.mdAndUp?t._e():n("v-bottom-navigation",{attrs:{value:t.selected,color:"primary",app:"",grow:""}},[n("v-btn",{on:{click:function(e){t.selected=0}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("Progress/Classes")]),t._v(" "),n("v-icon",[t._v("mdi-chart-box-outline")])],1),t._v(" "),n("v-btn",{on:{click:function(e){t.selected=1}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("My Tasks")]),t._v(" "),n("v-icon",[t._v("mdi-clipboard-edit-outline")])],1),t._v(" "),n("v-btn",{on:{click:function(e){t.selected=2}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("My Calendar")]),t._v(" "),n("v-icon",[t._v("mdi-calendar")])],1)],1)],1)}),[],!1,null,"1a2c38de",null).exports}}]);