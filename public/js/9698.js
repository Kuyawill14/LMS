(self.webpackChunk=self.webpackChunk||[]).push([[9698],{9698:(i,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var n=t(7757),a=t.n(n);function e(i,s,t,n,a,e,l){try{var o=i[e](l),c=o.value}catch(i){return void t(i)}o.done?s(c):Promise.resolve(c).then(n,a)}function l(i){return function(){var s=this,t=arguments;return new Promise((function(n,a){var l=i.apply(s,t);function o(i){e(l,n,a,o,c,"next",i)}function c(i){e(l,n,a,o,c,"throw",i)}o(void 0)}))}}const o={components:{publishDialog:function(){return t.e(7602).then(t.bind(t,7602))},unpublishConfirmDialog:function(){return t.e(5411).then(t.bind(t,5411))},updatePublishDialog:function(){return t.e(3668).then(t.bind(t,3668))}},data:function(){return{classNames:[],isloading:!0,dialog:!1,Details:{},UnpublishDetails:{},isPublishing:!1,isPublishing_id:null,UnpublishDiaglog:!1,isAdding:!1,isUpdate:!1,notifyDetails:{}}},methods:{OpenPublishDialog:function(i,s,t){this.isPublishing=!this.isPublishing,this.isPublishing_id=s,this.Details.id=i,this.Details.class_id=s,this.Details.class_name=t,this.dialog=!this.dialog,this.isAdding=!this.isAdding},OpenEditPublish:function(i,s,t,n){this.Details.id=i,this.Details.class_id=s,this.Details.class_name=t,this.Details.classwork_id=n,this.dialog=!this.dialog,this.isUpdate=!this.isUpdate},OpenUnpublishDiaglog:function(i,s,t){this.UnpublishDetails.id=i,this.UnpublishDetails.class_id=s,this.UnpublishDetails.class_name=t,this.UnpublishDiaglog=!this.UnpublishDiaglog},toastSuccess:function(i){return this.$toasted.success("Classwork Successfully published to "+i,{theme:"toasted-primary",position:"top-center",icon:"done",duration:3e3})},shareClasswork:function(i,s,t){var n=this,a=new FormData;a.append("classwork_id",i),a.append("class_id",s),axios.post("/api/classwork/share",a).then((function(i){n.toastSuccess(t),n.fetchClassnames()})).catch((function(i){console.log(i)}))},closeDiaglog:function(){this.dialog=!this.dialog,this.isPublishing=!this.isPublishing,this.fetchClassnames()},fetchClassnames:function(){var i=this;return l(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:axios.get("/api/class/allnames/"+i.$route.params.id+"/"+i.$route.query.clwk).then((function(s){i.classNames=s.data,i.isloading=!1})).catch((function(i){console.log(i)}));case 1:case"end":return s.stop()}}),s)})))()},fetchClassFornotify:function(i){var s=this;return l(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.dialog=!s.dialog,s.isPublishing=!s.isPublishing,s.isAdding=!s.isAdding,axios.get("/api/class/allnames/"+s.$route.params.id+"/"+s.$route.query.clwk).then((function(t){s.classNames=t.data,s.isloading=!1,s.NewNotification(i)})).catch((function(i){console.log(i)}));case 4:case"end":return t.stop()}}),t)})))()},SuccessPublishNotify:function(i){var s=this;return l(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.fetchClassFornotify(i);case 1:case"end":return t.stop()}}),t)})))()},NewNotification:function(i){var s=this;return l(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(i),s.notifyDetails.classwork_id=i.classwork_id,s.notifyDetails.class_id=i.class_id,s.notifyDetails.course_id=s.$route.params.id,s.notifyDetails.type="classwork",axios.post("/api/notification/new",s.notifyDetails).then((function(i){}));case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.fetchClassnames()}};const c=(0,t(1900).Z)(o,(function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("div",{staticClass:"pa-1"},[t("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:i.dialog,callback:function(s){i.dialog=s},expression:"dialog"}},[i.isAdding?t("publishDialog",{attrs:{Details:i.Details},on:{toggleDialog:function(s){i.dialog=!i.dialog,i.isPublishing=!i.isPublishing,i.isAdding=!i.isAdding},successPublish:i.SuccessPublishNotify,UnPublish:function(s){return i.closeDiaglog()}}}):i._e(),i._v(" "),i.isUpdate?t("updatePublishDialog",{attrs:{Details:i.Details},on:{toggleDialog:function(s){i.dialog=!i.dialog,i.isUpdate=!i.isUpdate},successPublish:function(s){i.dialog=!i.dialog,i.isUpdate=!i.isUpdate}}}):i._e()],1),i._v(" "),t("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:i.UnpublishDiaglog,callback:function(s){i.UnpublishDiaglog=s},expression:"UnpublishDiaglog"}},[i.UnpublishDiaglog?t("unpublishConfirmDialog",{attrs:{UnpublishDetails:i.UnpublishDetails},on:{toggleCancelDialog:function(s){i.UnpublishDiaglog=!i.UnpublishDiaglog},UnpublishSuccess:function(s){i.UnpublishDiaglog=!i.UnpublishDiaglog,i.fetchClassnames()}}}):i._e()],1),i._v(" "),i.isloading?t("v-container",{staticClass:"fill-height",staticStyle:{height:"500px"}},[t("v-row",{attrs:{"align-content":"center",justify:"center"}},[t("v-col",{staticClass:"text-subtitle-1 text-center",attrs:{cols:"12"}},[i._v("\n            Loading\n        ")]),i._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1):i._e(),i._v(" "),i.isloading?i._e():t("v-container",{staticClass:"pa-0 pa-0",attrs:{"pa-0":"","ma-0":"",fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",lg:"9",xl:"9",md:"8"}},[t("v-card",{staticClass:"pa-5",attrs:{elevation:"1",outlined:""}},[t("v-row",[t("v-col",{staticClass:"pt-2 pl-3 pr-3",attrs:{cols:"12",md:"12"}},i._l(i.classNames,(function(s,n){return t("v-container",{key:n},[t("v-list-item",[t("v-list-item-avatar",[t("v-icon",[i._v("mdi-account-multiple")])],1),i._v(" "),t("v-list-item-content",[t("v-list-item-title",[i._v(i._s(s.class_name)+" ")])],1),i._v(" "),t("div",{},[0==s.status?t("v-btn",{attrs:{loading:i.isPublishing&&i.isPublishing_id==s.class_id,color:"primary",outlined:0==s.status,rounded:"",dark:""},on:{click:function(t){return i.OpenPublishDialog(i.$route.query.clwk,s.class_id,s.class_name,s.status)}}},[i._v("\n                                                    "+i._s(i.$vuetify.breakpoint.xs?"":"Publish")+"\n                                                "),t("v-icon",[i._v("\n                                                    mdi-share\n                                                ")])],1):i._e(),i._v(" "),1==s.status?t("v-menu",{attrs:{"offset-y":""},scopedSlots:i._u([{key:"activator",fn:function(n){var a=n.on,e=n.attrs;return[1==s.status?t("v-btn",i._g(i._b({attrs:{color:"primary",dark:"",icon:"",text:""}},"v-btn",e,!1),a),[t("v-icon",[i._v("mdi-dots-vertical")])],1):i._e()]}}],null,!0)},[i._v(" "),t("v-list",{staticClass:"pa-1"},[t("v-list-item",{staticClass:"rounded",attrs:{link:""},on:{click:function(t){return i.OpenEditPublish(i.$route.query.clwk,s.class_id,s.class_name,s.Class_classwork_id)}}},[t("v-list-item-title",[t("v-icon",{attrs:{left:""}},[i._v("mdi-pencil")]),i._v(" Edit Publication\n                                                        ")],1)],1),i._v(" "),t("v-list-item",{staticClass:"rounded",attrs:{link:""},on:{click:function(t){return i.OpenUnpublishDiaglog(i.$route.query.clwk,s.class_id,s.class_name)}}},[t("v-list-item-title",[t("v-icon",{attrs:{left:""}},[i._v("mdi-share-off")]),i._v(" Unpublish\n                                                            ")],1)],1)],1)],1):i._e()],1)],1),i._v(" "),t("v-divider")],1)})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"ece81470",null).exports}}]);