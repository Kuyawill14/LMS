"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9803],{9905:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(1519),o=n.n(a)()((function(t){return t[1]}));o.push([t.id,".chart[data-v-2064c293]{height:400px}",""]);const r=o},9803:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});const a={props:["role"],name:"HelloWorld",components:{teacherDashboard:function(){return n.e(3545).then(n.bind(n,3545))},studentDashboard:function(){return n.e(445).then(n.bind(n,445))},adminDashboard:function(){return n.e(7850).then(n.bind(n,7850))}},provide:{},data:function(){return{class_count:0}},methods:{classCount:function(){var t=this;axios.get("/api/class/count").then((function(e){t.class_count=e.data}))}},computed:(0,n(629).Se)(["allCourse"]),mounted:function(){this.classCount()}};var o=n(2446),r=n.n(o),s=n(9905),c={insert:"head",singleton:!1};r()(s.Z,c);s.Z.locals;const l=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",[n("h2",[t._v("Dashboard")])])],1),t._v(" "),n("div",{staticClass:"mt-4"},["Student"==t.role?n("studentDashboard",{attrs:{role:t.role}}):t._e(),t._v(" "),"Teacher"==t.role?n("teacherDashboard",{attrs:{role:t.role}}):t._e(),t._v(" "),"Admin"==t.role?n("adminDashboard",{attrs:{role:t.role}}):t._e()],1)],1)}),[],!1,null,"2064c293",null).exports}}]);