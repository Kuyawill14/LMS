"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4582],{87402:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var r=s(87757),a=s.n(r),n=s(20629);function o(t,e,s,r,a,n,o){try{var i=t[n](o),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(r,a)}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={props:["role"],components:{classworkList:function(){return s.e(7762).then(s.bind(s,47762))},newClassworkModal:function(){return s.e(6420).then(s.bind(s,96420))}},data:function(){return{classworks:[],isLeaving:!1,isGetting:!0,dialog:!1,ClassworkLength:null,items:[{text:"Course",disabled:!1,link:"courses"},{text:"Classwork",disabled:!0,link:"classwork"}]}},computed:(0,n.Se)(["get_Classworks","get_isDataLoaded"]),methods:l(l({},(0,n.nv)(["fetchClassworks"])),{},{getGeneralClassworks:function(){this.$store.dispatch("SetDataisNotLoaded"),this.$store.dispatch("fetchClassworks",this.$route.params.id)}}),beforeRouteLeave:function(t,e,s){this.isLeaving=!0,s()},beforeRouteEnter:function(t,e,s){return(r=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s((function(t){t.getGeneralClassworks()}));case 1:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(s,a){var n=r.apply(t,e);function i(t){o(n,s,a,i,l,"next",t)}function l(t){o(n,s,a,i,l,"throw",t)}i(void 0)}))})();var r},beforeDestroy:function(){this.$store.dispatch("ClearClasswork")}};const d=(0,s(51900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-overlay",{attrs:{value:t.isLeaving}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),s("v-breadcrumbs",{staticClass:"ma-0 pa-0 mt-3",attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[s("v-breadcrumbs-item",{attrs:{to:{name:r.link},disabled:r.disabled}},[t._v("\n            "+t._s(r.text.toUpperCase())+"\n        ")])]}}])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.get_isDataLoaded&&0!=t.ClassworkLength,expression:"get_isDataLoaded && ClassworkLength != 0"}],staticClass:"ml-0 mr-0"},[s("classworkList",{attrs:{classworks:t.get_Classworks,role:t.role},on:{ToggleRefresh:function(e){return t.getGeneralClassworks()},reloadClassworks:function(e){return t.getGeneralClassworks()}}})],1),t._v(" "),t.get_isDataLoaded?t._e():s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mb-5"},[s("v-col",{staticClass:"text-left mb-0 pb-0",attrs:{cols:"12",md:"9",lg:"9"}},[s("v-skeleton-loader",{attrs:{type:"heading"}})],1),t._v(" "),s("v-col",{staticClass:"text-right mb-0 pb-0",attrs:{cols:"12",md:"3",lg:"3"}},[s("v-skeleton-loader",{attrs:{"min-width":"400",type:"button"}})],1)],1),t._v(" "),t._l("Teacher"==t.role?2:3,(function(e){return s("v-row",{key:e},[s("v-col",{attrs:{cols:"12"}},[s("v-row",[s("v-col",{attrs:{cols:"5"}},[s("v-skeleton-loader",{staticClass:"mx-atuo",attrs:{"max-width":"350",type:"heading"}})],1)],1)],1),t._v(" "),t._l(3,(function(t){return s("v-col",{key:t,staticClass:"mt-0 pt-0",attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[s("v-card",{staticClass:"pa-4"},[s("v-skeleton-loader",{staticClass:"mx-atuo",attrs:{type:"list-item-avatar-two-line"}})],1)],1)}))],2)}))],2)],1)}),[],!1,null,null,null).exports}}]);