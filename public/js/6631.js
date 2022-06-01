"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6631],{38893:(t,n,e)=>{e.d(n,{Z:()=>s});var i=e(1519),o=e.n(i)()((function(t){return t[1]}));o.push([t.id,".AnnoumentEditor>.quill-editor{background:#d0cece;position:relative}.AnnoumentEditor>.ql-container.ql-snow{border:none!important}.AnnoumentEditor>.ql-toolbar.ql-snow{background:#f2f2f2;border:none}.AnnoumentEditor>.ql-bold,.ql-align,.ql-image,.ql-italic,.ql-link,.ql-list,.ql-picker-label,.ql-strike,.ql-underline,.ql-video{border:none!important;outline:none!important}.AnnoumentEditor>.ql-tooltip,.ql-editing{z-index:1}.AnnoumentEditor iframe{height:20rem!important;width:60%!important}.AnnoumentEditor .ql-editor img{max-height:25rem!important}",""]);const s=o},26631:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var i,o=e(87757),s=e.n(o);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n,e,i,o,s,a){try{var r=t[s](a),c=r.value}catch(t){return void e(t)}r.done?n(c):Promise.resolve(c).then(i,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var s=t.apply(n,e);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}const l={props:["UserDetails","classNames"],data:function(){return{isLoadingClassNames:!0,isLoaded:!1,notifyDetails:{},selectedFile:null,isSelecting:!1,isloading:!1,value:"",content:"",class_id:null,tmp_class_id:this.$route.params.id,isCourse_id:!0,announcement:{content:"",file:"",class_id:""},options:{modules:{toolbar:{container:[["bold","italic","underline"],[{header:[1,2,3,4,5,!1]}],[{color:[]}],[{list:"ordered"},{list:"bullet"}],["link","image","video"]],handlers:{image:this.imageHandler}}}},pasteText:!0,editorData:null}},computed:{buttonText:function(){return this.selectedFile?this.selectedFile.name:this.defaultButtonText}},methods:(i={val:function(){this.value="This's new value"},CheckClass_id:function(t){t.isCourse_id?(this.class_id=this.$route.params.id,this.isCourse_id=!0):(this.class_id=t.class_id,this.isCourse_id=!1)},onChange:function(t,n){},createPost:function(){var t=this;""!=this.announcement.content&&(this.isloading=!0,this.announcement.file="sample",1==this.isCourse_id?(this.announcement.course_id=this.$route.params.id,this.announcement.class_id=null):(this.announcement.course_id=null,this.announcement.class_id=this.class_id),this.announcement.content=this.announcement.content.replaceAll("p>","div>"),this.$store.dispatch("createClassPost",this.announcement).then((function(n){200==n.status?(t.isloading=!1,t.newNotification(n.data.announcement_id,t.announcement.content),t.announcement.content=""):t.isloading=!1})),this.$emit("SetShowComment"))},onButtonClick:function(){var t=this;this.isSelecting=!0,window.addEventListener("focus",(function(){t.isSelecting=!1}),{once:!0}),this.$refs.uploader.click()},onFileChanged:function(t){this.selectedFile=t.target.files[0]},onEditorBlur:function(t){this.editorData=t},onEditorFocus:function(t){this.editorData=t},onEditorReady:function(t){this.editorData=t},imageHandler:function(){var t=this,n=this.editorData,e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=c(s().mark((function i(){var o,a,r;return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!((o=e.files[0]).size<3e5)){i.next=12;break}return(a=new FormData).append("file",o),a.append("type","Announcement"),a.append("course_id",t.$route.params.id),r=n.getSelection(!0),n.setSelection(r.index+1),i.next=10,axios.post("/api/classwork/newAttachment",a).then(function(){var t=c(s().mark((function t(e){var i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.data,t.next=3,n.insertEmbed(r.index,"image",i.link);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch((function(t){t.response}));case 10:i.next=13;break;case 12:t.toastError("Image size is to big!");case 13:case"end":return i.stop()}}),i)})))}},a(i,"onChange",(function(t,n,e){})),a(i,"newNotification",(function(t,n){var e=this;return c(s().mark((function i(){return s().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e.notifyDetails.class_id=e.$route.params.id!=e.class_id?e.class_id:null,e.notifyDetails.course_id=e.$route.params.id==e.class_id?e.$route.params.id:null,e.notifyDetails.course_find_id=e.$route.params.id,e.notifyDetails.announcement_id=t,e.notifyDetails.content=n,e.notifyDetails.type="announcement",axios.post("/api/notification/new",e.notifyDetails);case 7:case"end":return i.stop()}}),i)})))()})),i)};var u=e(72446),d=e.n(u),m=e(38893),p={insert:"head",singleton:!1};d()(m.Z,p);m.Z.locals;const h=(0,e(51900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vue-element-loading",{attrs:{active:t.isloading,spinner:"bar-fade-scale"}}),t._v(" "),e("editor",{staticClass:"AnnoumentEditor",attrs:{placeholder:"Announce something in your class!",theme:"snow",options:t.options},on:{blur:function(n){return t.onEditorBlur(n)},focus:function(n){return t.onEditorFocus(n)},ready:function(n){return t.onEditorReady(n)},change:t.onChange},model:{value:t.announcement.content,callback:function(n){t.$set(t.announcement,"content",n)},expression:"announcement.content"}}),t._v(" "),e("v-row",{staticClass:"pl-3"},[e("v-col",{attrs:{cols:"5",md:"8",lg:"8"}}),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"7",md:"4",lg:"4"}},[e("v-container",{class:"Student"!=t.UserDetails.role?"ma-0 pa-0 d-flex flex-row":"ma-0 pa-0",attrs:{"ma-0":"","pa-0":""}},["Student"!=t.UserDetails.role?e("v-select",{staticClass:"mr-2 ma-0 pa-0",attrs:{"hide-details":"",items:t.classNames,"return-object":"","item-text":"class_name","item-value":"id",label:"Classes",dense:"",solo:""},on:{change:function(n){return t.CheckClass_id(t.tmp_class_id)}},model:{value:t.tmp_class_id,callback:function(n){t.tmp_class_id=n},expression:"tmp_class_id"}}):t._e(),t._v(" "),e("v-btn",{staticClass:"mb-0 pb-0 mt-1",attrs:{depressed:"",disabled:""==t.announcement.content||null==t.announcement.content,type:"submit",name:"create_post",color:"primary"},on:{click:t.createPost}},[t._v("Post")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);