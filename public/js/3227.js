"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3227],{76502:(t,s,e)=>{e.d(s,{Z:()=>n});var i=e(1519),a=e.n(i)()((function(t){return t[1]}));a.push([t.id,".text-caption[data-v-153ccffe],.text-white[data-v-153ccffe]{color:#fff!important}",""]);const n=a},13227:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});const i={components:{},data:function(){return{model:null,coursesLength:null,isGetting:!1,dialog:!1,isloading:!0,isStudent:!1,modalType:"",form:new Form({class_code:""})}},computed:(0,e(20629).Se)(["allClass"]),methods:{openJoinmodal:function(){this.dialog=!this.dialogl},joinClass:function(){var t=this;this.isloading=!0,this.dialog=!1,this.$store.dispatch("joinClass",this.form).then((function(){t.fetchClasses(),form.class_code=""}))},Unenroll:function(t){var s=this;this.isloading=!0,this.$store.dispatch("Unenroll",t),this.fetchClasses(),setTimeout((function(){return s.isloading=!1}),1e3)},fetchClasses:function(){var t=this;this.isGetting=!0,this.$store.dispatch("fetchClassList").then((function(){t.coursesLength=t.allClass.length,t.isGetting=!1}))},goToclass:function(t,s){this.$router.to({name:"coursePage",params:{id:t},query:{class:s}})},CheckBackgroundPath:function(t){if(null!=t)return t.includes("https://orangestr.sgp1.cdn.digitaloceanspaces.com")?t:"../images/"+t}},mounted:function(){}};var a=e(72446),n=e.n(a),o=e(76502),l={insert:"head",singleton:!1};n()(o.Z,l);o.Z.locals;const r=(0,e(51900).Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("vue-element-loading",{attrs:{active:t.isGetting,text:"Loading",duration:"0.7",textStyle:{fontSize:"15px"},spinner:"line-scale",color:"#EF6C00",size:"30"}}),t._v(" "),0!=t.coursesLength&&0==t.isGetting?e("div",[e("v-row",{staticClass:"mt-0"},[e("v-col",[e("v-card",{staticClass:"mx-auto pa-2"},[e("h3",[t._v("My Classes")]),t._v(" "),e("v-divider"),t._v(" "),e("v-slide-group",{staticClass:"px-1",attrs:{"active-class":"success","show-arrows":"","mobile-breakpoint":"1000","center-active":""},model:{value:t.model,callback:function(s){t.model=s},expression:"model"}},t._l(t.allClass,(function(s,i){return e("v-slide-item",{key:"class"+i,scopedSlots:t._u([{key:"default",fn:function(i){var a=i.active;return[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"coursePage",params:{id:s.course_id},query:{class:s.class_id}}}},[e("v-card",{staticClass:"my-4 mx-3",attrs:{color:a?void 0:"grey lighten-1",height:t.$vuetify.breakpoint.mdAndUp?170:130,width:t.$vuetify.breakpoint.mdAndUp?250:230}},[e("v-card",{staticClass:"mx-auto"},[e("v-img",{staticClass:"white--text align-end",attrs:{src:t.CheckBackgroundPath(s.course_picture),height:t.$vuetify.breakpoint.mdAndUp?170:130,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[e("div",{staticClass:"px-2"},[e("v-progress-linear",{staticClass:"rounded-sm",attrs:{value:s.progress,height:"6"}}),t._v(" "),e("span",{staticClass:"text-caption float-right"},[t._v("\n                                                    "+t._s(parseFloat(s.progress.toFixed(2)))+"%\n                                                ")])],1),t._v(" "),e("v-card-subtitle",{staticClass:"ml-0 pl-0"},[e("v-list",{attrs:{color:"transparent"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"white--text"},[e("p",{staticClass:"mb-0 pb-0 mb-2",style:t.$vuetify.breakpoint.mdAndUp?"font-size: 16px;text-overflow: ellipsis;overflow: hidden; ":"font-size: 14px;text-overflow: ellipsis;overflow: hidden; "},[t._v(t._s(s.course_code)+"\n                                                                "),e("br"),t._v(" "),e("span",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden"}},[t._v(t._s(s.course_name))])])])],1)],1)],1)],1)],1)],1)],1)],1)]}}],null,!0)})})),1)],1)],1)],1)],1):t._e()],1)}),[],!1,null,"153ccffe",null).exports}}]);