(self.webpackChunk=self.webpackChunk||[]).push([[1719],{9885:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var n,a=i(7757),s=i.n(a),o=i(381),r=i.n(o),c=i(629);function u(t,e,i,n,a,s,o){try{var r=t[s](o),c=r.value}catch(t){return void i(t)}r.done?e(c):Promise.resolve(c).then(n,a)}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const d={data:function(){return{notificationType:"all",notifTypeName:"all",notificationList:{},notifLength:null,isSelected:null,currentSelectedType:null,AttachData:{},isAccepted:!1,form:new Form({class_code:""})}},computed:(0,c.Se)(["get_invites"]),methods:f(f({},(0,c.nv)(["fetchClassInvites","LessInviteCount"])),{},(n={test:function(t){this.testdata=t},format_date:function(t){if(t)return r()(String(t)).format("MMMM DD, h:mm a")},ShowMore:function(){this.$store.dispatch("ShowMore",this.ShowPage)},getNotificationList:function(){var t,e=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("fetchClassInvites",3);case 1:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(n,a){var s=t.apply(e,i);function o(t){u(s,n,a,o,r,"next",t)}function r(t){u(s,n,a,o,r,"throw",t)}o(void 0)}))})()},NotificationHide:function(t){var e=this;this.$store.dispatch("HideNotification",t).then((function(i){200==i&&e.get_notification.forEach((function(e){e.n_id==t&&(e.hide_notif=1)}))}))},markAsread:function(t){var e=this;this.AttachData.id=t,this.AttachData.accepted=this.isAccepted,this.$store.dispatch("markAsReadNotification",this.AttachData).then((function(i){console.log(i),200==i&&(e.get_notification.forEach((function(i){i.n_id==t&&(i.status=1,e.isAccepted&&(i.notification_accepted=1))})),e.$store.dispatch("LessNotificationCount"))}))},markAllasRead:function(){var t=this;axios.post("/api/notification/mark-all").then((function(e){t.get_notification.forEach((function(t){null==t.status&&(t.status=1)}));for(var i=0;i<e.data;i++)t.$store.dispatch("LessNotificationCount")}))}},v(n,"ShowMore",(function(){this.AttachData.type=this.notificationType,this.AttachData.page=this.ShowPage,this.$store.dispatch("ShowMore",this.AttachData)})),v(n,"acceptJoin",(function(t,e,i){var n=this;this.form.class_code=t,this.$store.dispatch("joinClass",this.form).then((function(t){200==t.status?(n.isAccepted=!0,n.toastSuccess(t.data.message),n.AttachData.id=e,n.AttachData.accepted=n.isAccepted,n.$store.dispatch("markAsReadNotification",n.AttachData),n.$store.dispatch("LessInviteCount"),n.$router.push({name:"announcement",params:{id:t.data.course_id}})):202==t.status?(n.isAccepted=!0,n.toastError(t.data.message),n.AttachData.id=e,n.AttachData.accepted=n.isAccepted,n.$store.dispatch("markAsReadNotification",n.AttachData),n.$store.dispatch("LessInviteCount"),n.$router.push({name:"announcement",params:{id:t.data.course_id}})):n.toastError("Something went wrong while joining the class!")}))})),n)),mounted:function(){this.getNotificationList()}};const p=(0,i(1900).Z)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"pa-0 ma-0",attrs:{flat:"","max-height":"600"}},[i("v-card-title",[i("span",{staticClass:"text-h6"},[t._v("Invites \r\n        "),i("v-icon",{attrs:{right:""}},[t._v("\r\n            mdi-account-plus\r\n        ")])],1)]),t._v(" "),i("div",{staticClass:"pl-2 pr-2"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-0 ma-0 mb-2",attrs:{cols:"12"}},[i("v-divider")],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"1"}},[i("v-tabs",{attrs:{"active-class":"","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"",vertical:!t.$vuetify.breakpoint.xs&&!t.$vuetify.breakpoint.sm,centered:t.$vuetify.breakpoint.xs&&t.$vuetify.breakpoint.sm}},[i("v-tab",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"d-flex justify-start"},[i("v-icon",{attrs:{left:!t.$vuetify.breakpoint.xs&&!t.$vuetify.breakpoint.sm}},[t._v("\r\n                 mdi-bell\r\n                ")]),t._v("\r\n                "+t._s(t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"Invite")+"\r\n                \r\n            ")],1),t._v(" "),i("v-tab",{class:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"d-flex justify-start"},[i("v-icon",{attrs:{left:!t.$vuetify.breakpoint.xs&&!t.$vuetify.breakpoint.sm}},[t._v("\r\n                 mdi-bell\r\n                ")]),t._v("\r\n                "+t._s(t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?"":"Request")+"\r\n            ")],1)],1)],1),t._v(" "),i("v-col",{attrs:{cols:"12",md:"9"}},[i("v-list",[i("div",[0==t.notifLength?i("v-list-item",[i("v-list-item-content",[i("v-row",{staticClass:"mt-3",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("v-icon",{staticStyle:{"font-size":"2rem"}},[t._v("\r\n                                        mdi-bell-off\r\n                                    ")]),t._v(" "),i("p",[t._v(" Empty Notification  ")])],1)],1)],1)],1):t._e(),t._v(" "),t._l(t.get_invites,(function(e,n){return i("v-list-item",{key:n},[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"blue",large:""}},[t._v("mdi-account-plus")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{staticClass:"font-weight-medium"},[i("v-badge",{attrs:{content:1==e.status?"":"new",value:1==e.status?"":"new",color:1==e.notification_type?"red":3==e.notification_type||2==e.notification_type?"blue":4==e.notification_type?"green":""}},[t._v("\r\n                                "+t._s(e.name)+"   \r\n                                ")])],1),t._v(" "),i("div",{staticClass:"body-2"},[t._v("\r\n                                "+t._s(e.message)+"\r\n                                 "),3==e.notification_type&&0==e.notification_accepted?i("a",{staticClass:"blue--text",attrs:{href:"",link:""},on:{click:function(i){return i.preventDefault(),t.acceptJoin(e.notification_attachments,e.n_id,n)}}},[t._v("\r\n                                Accept invite")]):t._e()]),t._v(" "),i("small",[t._v(t._s(t.format_date(e.created_at)))])],1),t._v(" "),i("v-list-item-action",{staticStyle:{"z-index":"1"}},[null==e.status||0==e.status?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,s=n.attrs;return[null==e.status||0==e.status?i("v-btn",t._g(t._b({staticStyle:{"z-index":"50"},attrs:{text:"",icon:""},on:{click:function(i){return t.markAsread(e.n_id)}}},"v-btn",s,!1),a),[i("v-icon",[t._v("mdi-check")])],1):t._e()]}}],null,!0)},[t._v(" "),i("span",[t._v("Mark as read")])]):t._e(),t._v(" "),1==e.status?i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,s=n.attrs;return[1==e.status?i("v-btn",t._g(t._b({staticStyle:{"z-index":"50"},attrs:{text:"",icon:""},on:{click:function(i){return t.NotificationHide(e.n_id)}}},"v-btn",s,!1),a),[i("v-icon",[t._v("mdi-close")])],1):t._e()]}}],null,!0)},[t._v(" "),i("span",[t._v("Hide notification")])]):t._e()],1)],1)}))],2)])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);