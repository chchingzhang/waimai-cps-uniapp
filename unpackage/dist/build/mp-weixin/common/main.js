(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0096":function(e,t,n){"use strict";(function(e){n("8e1f");var t=i(n("66fd")),o=i(n("a6d0")),r=i(n("9e08")),u=i(n("2851")),c=i(n("9459"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n("3209").Base64;t.default.config.productionTip=!1,t.default.use(c.default),t.default.prototype.$decode=s.decode,t.default.prototype.$http=u.default,o.default.mpType="app";var d=new t.default(f(f({},o.default),{},{store:r.default}));e(d).$mount()}).call(this,n("543d")["createApp"])},"0435":function(e,t,n){"use strict";n.r(t);var o=n("1df6"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},"1df6":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,r,u,c){try{var i=e[u](c),a=i.value}catch(f){return void n(f)}i.done?t(a):Promise.resolve(a).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function i(e){u(c,o,r,i,a,"next",e)}function a(e){u(c,o,r,i,a,"throw",e)}i(void 0)}))}}var i={onLaunch:function(){var t=c(o.default.mark((function t(n){var r,u=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=this,console.log("小程序App Launch",n),r.$store.commit("setScene",n.scene),this.$http.index.getApp().then((function(e){console.log(e),u.$store.commit("setAppInfo",e.data)})),e.login({provider:"weixin",success:function(t){r.$http.user.wxlogin({code:t.code}).then((function(t){e.setStorageSync("token",t.data.token),e.$emit("getuserinfo")})).catch((function(e){console.log("请求登录接口出错",e)}))},fail:function(e){console.log(e)}}),e.$on("getuserinfo",(function(){r.$http.user.getUserInfo().then((function(t){r.$store.commit("setUserInfo",t.data),e.$emit("binduser"),e.$emit("login",t.data.mobile),e.hideLoading()})).catch((function(t){e.hideLoading()}))}));case 6:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=i}).call(this,n("543d")["default"])},a6d0:function(e,t,n){"use strict";n.r(t);var o=n("0435");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("b8fb");var u,c,i,a,f=n("f0c5"),l=Object(f["a"])(o["default"],u,c,!1,null,null,null,!1,i,a);t["default"]=l.exports},b8fb:function(e,t,n){"use strict";var o=n("bf8d"),r=n.n(o);r.a},bf8d:function(e,t,n){}},[["0096","common/runtime","common/vendor"]]]);