"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7681],{7681:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});const s={data:function(){return{Startdate:(new Date).getTime(),EndDate:(new Date).getTime()+2e4}},methods:{startCallBack:function(t){},endCallBack:function(t){}}};const a=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-countdown-timer",{attrs:{"start-time":t.Startdate,"end-time":t.EndDate,interval:1e3,"end-text":"Event ended!","hour-txt":"hours","minutes-txt":"minutes","seconds-txt":"seconds"},on:{start_callback:function(e){return t.startCallBack("event started")},end_callback:function(e){return t.endCallBack("event ended")}},scopedSlots:t._u([{key:"countdown",fn:function(e){return[n("span",{staticStyle:{color:"red"}},[t._v(t._s(e.props.hours))]),n("i",[t._v(t._s(e.props.hourTxt))]),t._v(" "),n("span",[t._v(t._s(e.props.minutes))]),n("i",[t._v(t._s(e.props.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(e.props.seconds))]),n("i",[t._v(t._s(e.props.secondsTxt))])]}}])})}),[],!1,null,null,null).exports}}]);