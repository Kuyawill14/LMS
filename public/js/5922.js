"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5922],{5922:(t,e,s)=>{s.r(e),s.d(e,{default:()=>o});var i=s(7757),n=s.n(i);function r(t,e,s,i,n,r,a){try{var o=t[r](a),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(i,n)}const a={props:["ArchiveClasses"],data:function(){return{restoreDetails:{}}},methods:{restoreClass:function(t,e){var s,i=this;return(s=n().mark((function s(){return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:i.restoreDetails.id=t,i.restoreDetails.index=e,i.$emit("RestoreConfirm",i.restoreDetails);case 3:case"end":return s.stop()}}),s)})),function(){var t=this,e=arguments;return new Promise((function(i,n){var a=s.apply(t,e);function o(t){r(a,i,n,o,l,"next",t)}function l(t){r(a,i,n,o,l,"throw",t)}o(void 0)}))})()}}};const o=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pa-4"},[s("v-row",t._l(t.ArchiveClasses,(function(e,i){return s("v-col",{key:i,staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[s("v-card",{staticClass:"mt-3",attrs:{elevation:"2"}},[s("v-list-item",[s("v-list-item-avatar",[s("v-icon",[t._v("mdi-account-multiple")])],1),t._v(" "),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.class_name+" - "+e.course_name)+" ")]),t._v(" "),s("v-list-item-subtitle",[t._v("Class code: "+t._s(e.class_code)+" ")]),t._v(" "),s("v-list-item-subtitle",[t._v("Students: "+t._s(e.student_count))])],1),t._v(" "),s("v-list-item-action",[s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[s("v-icon",t._g(t._b({attrs:{color:"secondary "}},"v-icon",n,!1),i),[t._v("mdi-dots-vertical")])]}}],null,!0)},[t._v(" "),s("v-list",[s("v-list-item",{attrs:{link:""},on:{click:function(s){return t.restoreClass(e.class_id,i)}}},[s("v-list-item-title",[t._v("Restore")])],1),t._v(" "),s("v-list-item",{attrs:{link:""}},[s("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)],1)],1)],1)})),1)],1)])}),[],!1,null,null,null).exports}}]);