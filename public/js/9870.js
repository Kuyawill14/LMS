(self.webpackChunk=self.webpackChunk||[]).push([[9870],{3681:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var i=n(3645),r=n.n(i)()((function(t){return t[1]}));r.push([t.id,".pannel-btn{position:absolute;top:15px;right:47px;z-index:100}.v-expansion-panel-content__wrap{padding:0!important}.course_content_header{display:flex;align-items:center}",""]);const o=r},5476:t=>{window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";n.r(e);var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=parseFloat(t),r=parseFloat(e),o=Math.random()*(r-i)+i;return n?Math.round(o):o};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.color,i=void 0===n?"blue":n,r=e.size,o=void 0===r?10:r,s=e.dropRate,a=void 0===s?10:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=i,this.size=o,this.dropRate=a}var e,n,o;return e=t,(n=[{key:"setup",value:function(t){var e=t.canvas,n=t.wind,r=t.windPosCoef,o=t.windSpeedMax,s=t.count;return this.canvas=e,this.wind=n,this.windPosCoef=r,this.windSpeedMax=o,this.x=i(-35,this.canvas.width+35),this.y=i(-30,-35),this.d=i(150)+10,this.particleSize=i(this.size,2*this.size),this.tilt=i(10),this.tiltAngleIncremental=(i(0,.08)+.04)*(i()<.5?-1:1),this.tiltAngle=0,this.angle=i(2*Math.PI),this.count=s+1,this.remove=!1,this}},{key:"update",value:function(){this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+parseInt(this.dropRate,10))/2,this.x+=(Math.sin(this.angle)+Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef))*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3)}},{key:"pastBottom",value:function(){return this.y>this.canvas.height}},{key:"draw",value:function(){this.canvas.ctx.fillStyle=this.color,this.canvas.ctx.beginPath(),this.canvas.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y)}},{key:"kill",value:function(){this.remove=!0}}])&&r(e.prototype,n),o&&r(e,o),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,l(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){c(l(e.prototype),"draw",this).call(this),this.canvas.ctx.arc(0,0,this.particleSize/2,0,2*Math.PI,!1),this.canvas.ctx.fill()}}])&&a(n.prototype,i),r&&a(n,r),e}(o);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,y(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){m(y(e.prototype),"draw",this).call(this),this.canvas.ctx.fillRect(0,0,this.particleSize,this.particleSize/2)}}])&&d(n.prototype,i),r&&d(n,r),e}(o);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t,e,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,P(e).apply(this,arguments))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){var t=this;O(P(e.prototype),"draw",this).call(this);var n=function(e,n,i,r,o,s){t.canvas.ctx.bezierCurveTo(e*(t.particleSize/200),n*(t.particleSize/200),i*(t.particleSize/200),r*(t.particleSize/200),o*(t.particleSize/200),s*(t.particleSize/200))};this.canvas.ctx.moveTo(37.5/this.particleSize,20/this.particleSize),n(75,37,70,25,50,25),n(20,25,20,62.5,20,62.5),n(20,80,40,102,75,120),n(110,102,130,80,130,62.5),n(130,62.5,130,25,100,25),n(85,25,75,37,75,40),this.canvas.ctx.fill()}}])&&_(n.prototype,i),r&&_(n,r),e}(o);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function C(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t,e,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(t,n){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=C(this,T(e).call(this,t))).imgEl=n,i}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,t),n=e,(i=[{key:"draw",value:function(){E(T(e.prototype),"draw",this).call(this),this.canvas.ctx.drawImage(this.imgEl,0,0,this.particleSize,this.particleSize)}}])&&x(n.prototype,i),r&&x(n,r),e}(o);function R(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cachedImages={}}var e,n,r;return e=t,(n=[{key:"createImageElement",value:function(t){var e=document.createElement("img");return e.setAttribute("src",t),e}},{key:"getImageElement",value:function(t){return this.cachedImages[t]||(this.cachedImages[t]=this.createImageElement(t)),this.cachedImages[t]}},{key:"getRandomParticle",value:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).particles||[];return t.length<1?{}:t[Math.floor(Math.random()*t.length)]}},{key:"getDefaults",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:t.defaultType||"circle",size:t.defaultSize||10,dropRate:t.defaultDropRate||10,colors:t.defaultColors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],url:null}}},{key:"create",value:function(t){var e=this.getDefaults(t),n=this.getRandomParticle(t),r=Object.assign(e,n),o=i(0,r.colors.length-1,!0);if(r.color=r.colors[o],"circle"===r.type)return new p(r);if("rect"===r.type)return new g(r);if("heart"===r.type)return new k(r);if("image"===r.type)return new D(r,this.getImageElement(r.url));throw Error('Unknown particle type: "'.concat(r.type,'"'))}}])&&R(e.prototype,n),r&&R(e,r),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var $=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.pool=[],this.particleOptions=e,this.particleFactory=new z}var e,n,i;return e=t,(n=[{key:"update",value:function(){var t,e=this,n=[],i=[];this.items.forEach((function(t){t.update(),t.pastBottom()?t.remove||(t.setup(e.particleOptions),n.push(t)):i.push(t)})),(t=this.pool).push.apply(t,n),this.items=i}},{key:"draw",value:function(){this.items.forEach((function(t){return t.draw()}))}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.particleOptions)):this.items.push(this.particleFactory.create(this.particleOptions).setup(this.particleOptions))}},{key:"refresh",value:function(){this.items.forEach((function(t){t.kill()})),this.pool=[]}}])&&F(e.prototype,n),i&&F(e,i),t}();function L(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&!(e instanceof HTMLCanvasElement))throw new Error("Element is not a valid HTMLCanvasElement");this.isDefault=!e,this.canvas=e||t.createDefaultCanvas("confetti-canvas"),this.ctx=this.canvas.getContext("2d")}var e,n,i;return e=t,i=[{key:"createDefaultCanvas",value:function(t){var e=document.createElement("canvas");return e.style.display="block",e.style.position="fixed",e.style.pointerEvents="none",e.style.top=0,e.style.width="100vw",e.style.height="100vh",e.id=t,document.querySelector("body").appendChild(e),e}}],(n=[{key:"clear",value:function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.width,this.height)}},{key:"updateDimensions",value:function(){this.isDefault&&(this.width===window.innerWidth&&this.height===window.innerHeight||(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight))}},{key:"width",get:function(){return this.canvas.width}},{key:"height",get:function(){return this.canvas.height}}])&&L(e.prototype,n),i&&L(e,i),t}();function H(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setDefaults()}var e,n,i;return e=t,(n=[{key:"setDefaults",value:function(){this.killed=!1,this.framesSinceDrop=0,this.canvas=null,this.canvasEl=null,this.W=0,this.H=0,this.particleManager=null,this.particlesPerFrame=0,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.animationId=null}},{key:"getParticleOptions",value:function(t){var e={canvas:this.canvas,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0};return Object.assign(e,t),e}},{key:"createParticles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getParticleOptions(t);this.particleManager=new $(e)}},{key:"getCanvasElementFromOptions",value:function(t){var e=t.canvasId,n=t.canvasElement,i=n;if(n&&!(n instanceof HTMLCanvasElement))throw new Error("Invalid options: canvasElement is not a valid HTMLCanvasElement");if(e&&n)throw new Error("Invalid options: canvasId and canvasElement are mutually exclusive");if(e&&!i&&(i=document.getElementById(e)),e&&!(i instanceof HTMLCanvasElement))throw new Error('Invalid options: element with id "'.concat(e,'" is not a valid HTMLCanvasElement'));return i}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.remove();var e=this.getCanvasElementFromOptions(t);this.canvas=new A(e),this.canvasEl=e,this.createParticles(t),this.setGlobalOptions(t),this.animationId=requestAnimationFrame(this.mainLoop.bind(this))}},{key:"setGlobalOptions",value:function(t){this.particlesPerFrame=t.particlesPerFrame||2,this.windSpeedMax=t.windSpeedMax||1}},{key:"stop",value:function(){this.killed=!0,this.particlesPerFrame=0}},{key:"update",value:function(t){var e=this.getCanvasElementFromOptions(t);this.canvas&&e!==this.canvasEl?this.start(t):(this.setGlobalOptions(t),this.particleManager&&(this.particleManager.particleOptions=this.getParticleOptions(t),this.particleManager.refresh()))}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&this.canvas.clear(),this.setDefaults()}},{key:"mainLoop",value:function(t){this.canvas.updateDimensions(),this.canvas.clear(),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particleManager.particleOptions.wind+=this.windChange;for(var e=this.framesSinceDrop*this.particlesPerFrame;e>=1;)this.particleManager.add(),e-=1,this.framesSinceDrop=0;this.particleManager.update(),this.particleManager.draw(),this.killed&&!this.particleManager.items.length||(this.animationId=requestAnimationFrame(this.mainLoop.bind(this))),this.framesSinceDrop+=1}}])&&H(e.prototype,n),i&&H(e,i),t}();n.d(e,"Confetti",(function(){return q})),e.default={install:function(t,e){this.installed||(this.installed=!0,t.prototype.$confetti=new q(e))}}},,,function(t,e,n){t.exports=n(0)}])},9870:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var i=n(7757),r=n.n(i),o=n(5476),s=n.n(o),a=n(629);function u(t,e,n,i,r,o,s){try{var a=t[o](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(i,r)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Vue.use(s());const f={props:["role","expand"],components:{},data:function(){return{loading:!0,temp_id:null,showLecture:!1,addLink:!1,showClasswork:!1,subModuleForm:{},mainModule_id:"",mainModule:[],studentSubModuleProgress:[],studentSubModuleProgressForm:{},timespent:0,time:!1,updateTime:!1,percentage:0,firstLoad:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,a.Se)(["getmain_module","getSub_module","getAll_sub_module","getStudentModuleProgress"])),methods:{start:function(){this.$confetti.start()},stop:function(){this.$confetti.stop()},passToMainComponent:function(t,e){var n=t.find((function(t){return t.id===e}));this.$emit("subModule",n)},student_sub_module_progress:function(t){},getCount:function(t,e){for(var n=0,i=this.getSub_module(e),r=0;r<i.length;r++)for(var o=0;o<t.length;o++)void 0!==t[o]&&void 0!==i[r]&&t[o].sub_module_id==i[r].id&&t[o].time_spent>=i[r].required_time&&n++;return n},addSubStudentProgress:function(t,e,n){var i=this;"Student"==this.role&&(this.tempSubId=e,this.studentSubModuleProgressForm.main_module_id=t,this.studentSubModuleProgressForm.sub_module_id=e,this.studentSubModuleProgressForm.type=n,this.studentSubModuleProgressForm.course_id=this.$route.params.id,axios.post("/api/student_sub_module/insert",{studentProgress:this.studentSubModuleProgressForm}).then((function(t){i.$store.dispatch("studentmodule_progress",i.$route.params.id),i.$store.dispatch("fetchClassList"),i.fetchStudentModuleProgress()})))},checkTimeSpent:function(t,e,n){for(var i=!1,r=0;r<t.length;r++)t[r].sub_module_id==e.id&&t[r].time_spent>=n&&(i=!0);return i},fetchClass:function(){this.$store.dispatch("fetchClassList").then((function(){console.log("fetching class")}))},getTimeSpent:function(t,e){for(var n=0;n<t.length;n++)if(t[n].sub_module_id==e)return t[n].time_spent;return 0},convertTime:function(t,e){if(-1==e){var n=this.getTimeSpent(this.studentSubModuleProgress,t);return void 0===n&&(n=0),new Date(1e3*parseInt(n)).toISOString().substr(11,8)}return new Date(1e3*parseInt(e)).toISOString().substr(11,8)},setTimeSpent:function(t,e,n){var i=this;"Student"==this.role&&(clearInterval(this.ctrTime),clearInterval(this.updateTime),this.timespent=this.getTimeSpent(this.studentSubModuleProgress,e),this.ctrTime=!1,this.updateTime=!1,this.ctrTime=setInterval((function(){i.timespent++,i.time=!0}),1e3),this.updateTime=setInterval((function(){i.updateStudentTimeProgress(t,e,i.timespent)}),5e3))},updateStudentTimeProgress:function(t,e,n){var i=this,r={};r.main_module_id=t,r.sub_module_id=e,r.time_spent=n;axios.post("/api/student_sub_module/updatetime",{studentProgress:r}).then((function(t){for(var e=t.data.studentProgress,n=0;n<i.studentSubModuleProgress.length;n++)if(i.studentSubModuleProgress[n].sub_module_id==e.sub_module_id){i.studentSubModuleProgress[n].time_spent=e.time_spent,i.$store.dispatch("studentmodule_progress",i.$route.params.id),i.$store.dispatch("fetchClassList");break}}))},fetchStudentModuleProgress:function(){var t=this;axios.get("/api/student_sub_module/all/".concat(this.$route.params.id)).then((function(e){t.studentSubModuleProgress=e.data}))}},mounted:function(){var t,e=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchClass(),e.fetchStudentModuleProgress(),e.$store.dispatch("fetchMainModule",e.$route.params.id),e.$store.dispatch("fetchSubModule",e.$route.params.id),e.$store.dispatch("studentmodule_progress",e.$route.params.id),e.loading=!1,setTimeout((function(){e.firstLoad=!1}),5e3);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function s(t){u(o,i,r,s,a,"next",t)}function a(t){u(o,i,r,s,a,"throw",t)}s(void 0)}))})()},created:function(){this.firstLoad=!0},beforeDestroy:function(){clearInterval(this.ctrTime),clearInterval(this.updateTime)}};n(4892);const p=(0,n(1900).Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-card",{staticClass:"mb-2"},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"course_content_header"},[t._v("\n                    Modules Content\n                    "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("v-progress-circular",t._g(t._b({staticClass:"float-right",attrs:{value:t.getStudentModuleProgress.percentage,rotate:-90,size:40,color:"green lighten-2"}},"v-progress-circular",r,!1),i),[n("span",[t._v(" "+t._s(t.getStudentModuleProgress.percentage))])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.getStudentModuleProgress.completed)+" of\n                            "+t._s(t.getStudentModuleProgress.submodules_count)+" complete")])])],1)],1),t._v(" "),t.expand?n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("listClose")}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-close")])],1)],1):t._e()],1)],1),t._v(" "),n("v-expansion-panels",{staticStyle:{"margin-left":"1px"},attrs:{focusable:""}},t._l(t.getmain_module,(function(e,i){return n("v-expansion-panel",{key:"module"+i},[n("v-expansion-panel-header",[n("span",{staticStyle:{"font-size":"1.0rem"}},[n("v-icon",{staticStyle:{"font-size":"1.0rem"}},[t._v("\n                        mdi-folder\n                    ")]),t._v("\n                    "+t._s(e.module_name)+" "),n("br"),t._v("\n                    "+t._s(t.getCount(t.studentSubModuleProgress,e.id)+" / "+t.getSub_module(e.id).length)+"\n\n\n                ")],1)]),t._v(" "),n("v-expansion-panel-content",{staticClass:"pa-0"},t._l(t.getSub_module(e.id),(function(i,r){return n("v-list-item",{key:"Submodule"+r,staticClass:"pl-8",attrs:{link:""},on:{click:function(n){t.setTimeSpent(e.id,i.id,t.studentSubModuleProgress),t.passToMainComponent(t.getSub_module(e.id),i.id),t.addSubStudentProgress(e.id,i.id,i.type,t.studentSubModuleProgress)}}},[n("v-list-item-avatar",[n("v-icon",{staticClass:"grey lighten-1",attrs:{dark:""}},[t._v("\n                            mdi-folder\n                        ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(i.sub_module_name))]),t._v(" "),n("v-list-item-subtitle",[t._v(" "+t._s(i.type))]),t._v(" "),n("v-list-item-subtitle",[t._v(" Time spent:\n                            "+t._s(t.convertTime(i.id,-1))+"\n\n                        ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" Required time:\n                            "+t._s(t.convertTime(-1,i.required_time))+"\n\n                        ")])],1),t._v(" "),n("v-list-item-action",[n("v-icon",{attrs:{color:t.checkTimeSpent(t.studentSubModuleProgress,i,i.required_time)?"success":"lighten"}},[t._v("\n                            mdi-check")])],1)],1)})),1)],1)})),1)],1)}),[],!1,null,null,null).exports},4892:(t,e,n)=>{var i=n(3681);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(5346).Z)("38da8bd1",i,!0,{})}}]);