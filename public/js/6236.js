"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6236],{46236:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(20629);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s={data:function(){return{}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,n.nv)(["fetchScourse"])),computed:(0,n.Se)(["getcourseInfo"]),created:function(){this.class_id=this.$route.params.id,this.$store.dispatch("fetchScourse",this.class_id)}};const i=(0,r(51900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{"min-height":"177"}},[r("v-card-title",[e._v("\n          ABOUT THIS COURSE\n    ")]),e._v(" "),r("v-card-text",[r("div",{domProps:{innerHTML:e._s(e.getcourseInfo.course_description)}})])],1)}),[],!1,null,null,null).exports}}]);