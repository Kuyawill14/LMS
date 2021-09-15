"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7960],{7960:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var i=n(7757),s=n.n(i);function o(t,e,n,i,s,o,a){try{var r=t[o](a),c=r.value}catch(t){return void n(t)}r.done?e(c):Promise.resolve(c).then(i,s)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var a=t.apply(e,n);function r(t){o(a,i,s,r,c,"next",t)}function c(t){o(a,i,s,r,c,"throw",t)}r(void 0)}))}}const r={props:["UserDetails","postDetails"],data:function(){return{totalComment:null,isLengthLoaded:!1,CommentList:[],password:"Password",showLess:!0,comment:"",marker:!0,iconIndex:0,data:{},showComment:!1,commentLength:null,isRemoving:!1,isEditing:!1,idEditing_id:null,UpdateComment:""}},methods:{CheckCommentLoad:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showComment||t.getComments();case 1:case"end":return e.stop()}}),e)})))()},getComments:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/post/allcomment/"+t.postDetails.post_id,{Check:t.showLess}).then((function(e){t.CommentList=e.data,t.postDetails.comment=e.data,t.postDetails.comment_count=e.data.length}));case 1:case"end":return e.stop()}}),e)})))()},addComment:function(){var t=this;return a(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.data.content=t.comment,t.data.course_id=t.$route.params.id,t.data.post_id=t.postDetails.post_id,axios.post("/api/post/comment/insert",t.data).then((function(e){t.showComment=!0,t.$emit("AddCount"),t.clearComment(),t.getComments()}));case 4:case"end":return e.stop()}}),e)})))()},clearComment:function(){this.comment=""},RemoveComment:function(t){var e=this;return a(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:axios.delete("/api/post/comment/remove/"+t).then((function(){e.$emit("MinusCount"),e.getComments()}));case 1:case"end":return n.stop()}}),n)})))()},UpdateCommentData:function(){},LikePost:function(t,e){var n=this;return a(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e?axios.delete("/api/post/like/delete/"+t).then((function(){n.postDetails.liked=!1,n.postDetails.likes_count=0!=n.postDetails.likes_count?n.postDetails.likes_count-=1:0})):axios.post("/api/post/like",{post_id:t}).then((function(){n.postDetails.liked=!0,n.postDetails.likes_count+=1}));case 1:case"end":return i.stop()}}),i)})))()}}};const c=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"mt-3 text-right pl-5 pr-3 mb-2 d-inline-flex"},[n("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){return t.LikePost(t.postDetails.post_id,t.postDetails.liked)}}},[n("v-badge",{attrs:{"offset-x":"40","offset-y":"12",content:t.postDetails.likes_count,value:t.postDetails.likes_count}},[n("v-icon",{staticClass:"mr-1",attrs:{color:t.postDetails.liked?"blue":""}},[t._v("  "+t._s(t.postDetails.liked?"mdi-thumb-up":"mdi-thumb-up-outline")+" ")])],1),t._v("\r\n            "+t._s(t.postDetails.liked?"":"like")+"\r\n        ")],1),t._v(" "),n("v-btn",{attrs:{rounded:"",text:""},on:{click:function(e){0!=t.postDetails.comment_count&&(t.showComment=!t.showComment)}}},[n("v-badge",{attrs:{"offset-x":"40","offset-y":"12",content:t.showComment?"":t.postDetails.comment_count,value:t.showComment?"":t.postDetails.comment_count}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-comment-outline")])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"pl-5 pr-5"},[n("v-divider")],1),t._v(" "),n("transition",{attrs:{transition:"v-expand-transition"}},[t.showComment?n("div",{staticClass:"mt-6 mb-0 pb-0"},t._l(t.postDetails.comment,(function(e){return n("v-container",{key:e.id,staticClass:"d-inline-flex pl-7 pr-4 pb-2 shrink",attrs:{"pa-0":""}},[n("v-avatar",{class:t.isEditing&&t.idEditing_id==e.id?"mt-1":"",attrs:{color:"grey",size:"36"}},[n("v-img",{staticClass:"rounded-circle",attrs:{src:null==e.profile_pic||""==e.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+e.name:e.profile_pic}})],1),t._v(" "),n("v-container",{staticClass:"d-flex flex-row ml-1 mt-1",attrs:{"ma-0":"","pa-0":""}},[n("v-container",{staticClass:"d-flex flex-column ml-1 pr-10",attrs:{"ma-0":"","pa-0":""}},[t.isEditing&&t.idEditing_id==e.id?t._e():n("span",{staticClass:"d-block name"},[t._v(t._s(e.name))]),t._v(" "),t.isEditing&&t.idEditing_id==e.id?t._e():n("span",{staticClass:"caption",staticStyle:{"line-height":"1.5"}},[t._v(t._s(e.content))]),t._v(" "),t.isEditing&&t.idEditing_id==e.id?n("v-text-field",{staticClass:"text-caption",attrs:{"append-outer-icon":"mdi-send","prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},on:{"click:append-outer":function(e){return t.UpdateCommentData()},"click:clear":function(e){t.UpdateComment=""}},model:{value:t.UpdateComment,callback:function(e){t.UpdateComment=e},expression:"UpdateComment"}}):t._e()],1),t._v(" "),e.u_id==t.UserDetails.id||"Teacher"==t.UserDetails.role?n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),i),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{"pa-0":"","ma-0":""}},[n("v-list-item",{attrs:{"ma-0":"","pa-0":""}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""},on:{click:function(n){t.UpdateComment=e.content,t.isEditing=!0,t.idEditing_id=e.id}}},[t._v("Edit")])],1)],1),t._v(" "),n("v-list-item",{attrs:{"ma-0":"","pa-0":""}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""},on:{click:function(n){return t.RemoveComment(e.id)}}},[t._v("Remove")])],1)],1)],1)],1):t._e()],1)],1)})),1):t._e()]),t._v(" "),n("v-row",{staticClass:"pa-3 pt-0 mt-0 mb-0 pb-0"},[n("v-col",{staticClass:"ma-0 pa-0 pt-3",attrs:{cols:"12"}},[n("v-list",{staticClass:"mb-0 pb-0 mt-0 pt-0"},[n("v-list-item",{staticClass:"mb-0 pb-0"},[n("v-list-item-avatar",{attrs:{color:"secondary"}},[n("v-img",{attrs:{src:null==t.UserDetails.profile_pic||""==t.UserDetails.profile_pic?"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+t.UserDetails.firstName+" "+t.UserDetails.lastName:t.UserDetails.profile_pic}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("v-text-field",{staticClass:"text-caption pl-0 mt-6",attrs:{"append-outer-icon":"mdi-send","prepend-avatar":"mdi-emoticon-dead",filled:"",rounded:"",dense:"","clear-icon":"mdi-close-circle",clearable:"",placeholder:"Comment",type:"text"},on:{"click:append-outer":t.addComment,"click:clear":t.clearComment},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);