"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3583],{6805:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(1519),a=n.n(s)()((function(t){return t[1]}));a.push([t.id,".chart[data-v-7afd28f6]{height:400px}",""]);const o=a},3583:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var s=n(7757),a=n.n(s);function o(t,e,n,s,a,o,i){try{var r=t[o](i),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(s,a)}const i={props:["role"],components:{myCalendar:function(){return n.e(8775).then(n.bind(n,8775))},myNotification:function(){return n.e(7261).then(n.bind(n,7261))},studentClasses:function(){return n.e(3227).then(n.bind(n,3227))},studentGradeChart:function(){return n.e(6758).then(n.bind(n,6758))},myTask:function(){return n.e(2568).then(n.bind(n,2568))}},data:function(){return{class_count:0,unfinishCount:0,selected:0}},computed:(0,n(629).Se)(["allClass"]),methods:{classCount:function(){var t=this;axios.get("/api/class/count").then((function(e){t.class_count=e.data}))},TotalClasswork:function(t){this.unfinishCount=t},fetchClasses:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("fetchClassList");case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(s,a){var i=t.apply(e,n);function r(t){o(i,s,a,r,c,"next",t)}function c(t){o(i,s,a,r,c,"throw",t)}r(void 0)}))})()}},mounted:function(){this.classCount(),this.fetchClasses()}};var r=n(2446),c=n.n(r),l=n(6805),v={insert:"head",singleton:!1};c()(l.Z,v);l.Z.locals;const u=(0,n(1900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:"8"}},[n("v-row",[n("v-col",{staticClass:"pt-0",attrs:{lg:"6"}},[n("v-card",[n("div",{staticClass:"text-center",style:t.$vuetify.breakpoint.lgAndUp?"font-size: 3rem;color:#FF5400":"font-size: 2rem;color:#FF5400"},[t._v("\n                            "+t._s(t.class_count)+"\n                        ")]),t._v(" "),n("div",{class:t.$vuetify.breakpoint.lgAndUp?"text-center":"text-center text-caption"},[t._v("\n                            Course Enrolled\n                        ")])])],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{lg:"6"}},[n("v-card",[n("div",{staticClass:"text-center",style:t.$vuetify.breakpoint.lgAndUp?"font-size: 3rem;color:#FF5400":"font-size: 2rem;color:#FF5400"},[t._v("\n                            "+t._s(t.unfinishCount)+"\n                        ")]),t._v(" "),n("div",{class:t.$vuetify.breakpoint.lgAndUp?"text-center":"text-center text-caption"},[t._v("\n                            Unfinished Classworks\n                        ")])])],1)],1),t._v(" "),t.$vuetify.breakpoint.mdAndUp||0==t.selected?n("v-row",{staticClass:"mb-0",class:t.$vuetify.breakpoint.lgAndUp?"":"pt-0 mt-0"},[n("v-col",{class:t.$vuetify.breakpoint.lgAndUp?"pt-0 mt-0 mb-0 pb-0":"t-0 mt-0 mb-0 pb-0",attrs:{cols:"12"}},[n("studentGradeChart",{attrs:{allClass:t.allClass}})],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||0==t.selected?n("v-row",{staticClass:"mt-0"},[n("v-col",{class:(t.$vuetify.breakpoint.lgAndUp,"pt-0 mt-0"),attrs:{cols:"12"}},[n("studentClasses")],1)],1):t._e()],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-0":"pt-0 mt-0",attrs:{cols:"12",lg:"4"}},[t.$vuetify.breakpoint.mdAndUp||1==t.selected?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("myTask")],1)],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||2==t.selected?n("v-row",[n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pt-2 mt-2":"pt-3 mt-3",attrs:{cols:"12"}},[n("v-card",[n("myCalendar",{attrs:{role:t.role},on:{RecieveTotalClasswork:t.TotalClasswork}})],1)],1)],1):t._e()],1)],1),t._v(" "),"Student"!=t.role||t.$vuetify.breakpoint.mdAndUp?t._e():n("v-bottom-navigation",{attrs:{value:t.selected,color:"primary",app:"",grow:""}},[n("v-btn",{on:{click:function(e){t.selected=0}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("Progress/Classes")]),t._v(" "),n("v-icon",[t._v("mdi-chart-box-outline")])],1),t._v(" "),n("v-btn",{on:{click:function(e){t.selected=1}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("My Tasks")]),t._v(" "),n("v-icon",[t._v("mdi-clipboard-edit-outline")])],1),t._v(" "),n("v-btn",{on:{click:function(e){t.selected=2}}},[n("span",{staticStyle:{"font-size":"10px"}},[t._v("My Calendar")]),t._v(" "),n("v-icon",[t._v("mdi-calendar")])],1)],1)],1)}),[],!1,null,"7afd28f6",null).exports}}]);