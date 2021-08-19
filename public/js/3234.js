(self.webpackChunk=self.webpackChunk||[]).push([[3234],{3234:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var i=n(7757),o=n.n(i);function a(t,e,n,i,o,a,s){try{var r=t[a](s),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){a(s,i,o,r,c,"next",t)}function c(t){a(s,i,o,r,c,"throw",t)}r(void 0)}))}}const r={props:["PostId","UserDetails","commentCount","LikesCount"],data:function(){return{totalComment:null,isLengthLoaded:!1,CommentList:[],password:"Password",showLess:!0,comment:"",marker:!0,iconIndex:0,data:{},showComment:!1,commentLength:null,isRemoving:!1,isEditing:!1,idEditing_id:null,UpdateComment:""}},computed:{CommentCountAll:function(){return this.commentCount}},methods:{CheckCommentLoad:function(){var t=this;return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showComment||t.getComments();case 1:case"end":return e.stop()}}),e)})))()},getComments:function(){var t=this;return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/comment/allcomment/"+t.PostId,{Check:t.showLess}).then((function(e){t.CommentList=e.data,t.getCommentCount()}));case 1:case"end":return e.stop()}}),e)})))()},getCommentCount:function(){var t=this;return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/comment/commentCount/"+t.PostId).then((function(e){t.commentLength=e.data,t.isLengthLoaded=!0}));case 1:case"end":return e.stop()}}),e)})))()},addComment:function(){var t=this;return s(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.data.content=t.comment,t.data.course_id=t.$route.params.id,t.data.post_id=t.PostId,axios.post("/api/comment/insert",t.data).then((function(e){t.showComment=!0,t.$emit("AddCount"),t.clearComment(),t.getComments()}));case 4:case"end":return e.stop()}}),e)})))()},clearComment:function(){this.comment=""},RemoveComment:function(t){var e=this;return s(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:axios.delete("/api/comment/remove/"+t).then((function(){e.$emit("MinusCount"),e.getComments()}));case 1:case"end":return n.stop()}}),n)})))()},UpdateCommentData:function(){}}};const c=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"mt-3 text-right pl-3 pr-3 mb-2 d-inline-flex"},[n("v-btn",{attrs:{rounded:"",text:""}},[n("v-badge",{attrs:{content:t.LikesCount,value:t.LikesCount}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-thumb-up-outline")])],1),t._v("\r\n            Like\r\n        ")],1),t._v(" "),n("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){0!=t.commentCount&&(t.CheckCommentLoad(),t.showComment=!t.showComment)}}},[n("v-badge",{attrs:{content:t.commentCount,value:t.commentCount}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-comment-outline")])],1),t._v("\r\n            Comment\r\n        ")],1)],1),t._v(" "),n("v-row",{staticClass:"pl-5 pr-5"},[n("v-divider")],1),t._v(" "),t.showComment?n("div",{staticClass:"mt-6"},[n("transition-group",{attrs:{transition:"v-expand-transition"}},t._l(t.CommentList,(function(e){return n("v-container",{key:e.id,staticClass:"d-inline-flex pl-7 pr-4 pb-3 shrink",attrs:{"pa-0":""}},[n("v-avatar",{class:t.isEditing&&t.idEditing_id==e.id?"mt-1":"",attrs:{size:"36"}},[n("v-img",{staticClass:"rounded-circle",attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+e.name:e.profile_pic}})],1),t._v(" "),n("v-container",{staticClass:"d-flex flex-row ml-1 mt-1",attrs:{"ma-0":"","pa-0":""}},[n("v-container",{staticClass:"d-flex flex-column ml-1 pr-10",attrs:{"ma-0":"","pa-0":""}},[t.isEditing&&t.idEditing_id==e.id?t._e():n("span",{staticClass:"d-block name"},[t._v(t._s(e.name))]),t._v(" "),t.isEditing&&t.idEditing_id==e.id?t._e():n("span",{staticClass:"caption",staticStyle:{"line-height":"1.5"}},[t._v(t._s(e.content))]),t._v(" "),t.isEditing&&t.idEditing_id==e.id?n("v-text-field",{staticClass:"text-caption",attrs:{"append-outer-icon":"mdi-send","prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},on:{"click:append-outer":function(e){return t.UpdateCommentData()},"click:clear":function(e){t.UpdateComment=""}},model:{value:t.UpdateComment,callback:function(e){t.UpdateComment=e},expression:"UpdateComment"}}):t._e()],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),i),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{"pa-0":"","ma-0":""}},[n("v-list-item",{attrs:{"ma-0":"","pa-0":""}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""},on:{click:function(n){t.UpdateComment=e.content,t.isEditing=!0,t.idEditing_id=e.id}}},[t._v("Edit")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"ma-0":"","pa-0":""}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""},on:{click:function(n){return t.RemoveComment(e.id)}}},[t._v("Remove")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"ma-0":"","pa-0":""}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""}},[t._v("Hide")])],1)],1)],1)],1)],1)],1)})),1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"pt-1 pr-7",attrs:{nu:""}},[n("v-col",{staticClass:"pr-0 mr-0",attrs:{cols:"2",sm:"2",lg:"1",md:"1"}},[n("v-avatar",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"ml-6":"ml-7",attrs:{size:"36"}},[n("v-img",{attrs:{src:null==t.UserDetails.profile_pic||""==t.UserDetails.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+t.UserDetails.firstName+" "+t.UserDetails.lastName:t.UserDetails.profile_pic}})],1)],1),t._v(" "),n("v-col",{staticClass:"pl-0 ml-0",attrs:{cols:"10",sm:"10",lg:"11",md:"11"}},[n("v-text-field",{staticClass:"text-caption pl-0",attrs:{"append-outer-icon":"mdi-send","prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},on:{"click:append-outer":t.addComment,"click:clear":t.clearComment},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);