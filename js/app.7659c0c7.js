(function(){"use strict";var e={624:function(e,n,t){var r=t(963),i=t(252);function l(e,n,t,r,l,o){const s=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.j4)(s,{msg:"Welcome to Your Vue.js App"})}var o=t(577),s=t.p+"img/dedeim.0ca23b50.jpg",a=t(262),u=t(795);const c={class:"relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"},d={class:"rounded-lg bg-gray-50 shadow-2xl ring-1 pt-2 ring-gray-900/5 mx-4 my-12"},f={class:"flex flex-wrap"},v=(0,i.uE)('<div class="flex-auto pl-6 pt-6"><div class="flex items-center justify-center"><div><img class="h-16 w-16 rounded-xl mx-auto" src="'+s+'" alt="User&#39;s picture"></div></div><div class="flex items-center justify-center"><div><div class="pt-6 rounded-xl mx-auto">Welcome to DEDE member</div></div></div></div><div class="flex-none self-end px-6 pt-4"><dt class="sr-only"></dt></div>',2),g={class:"flex-auto pl-6 pt-6"},p={class:"flex items-center"},m=["src"],x={class:"ml-3"},h={class:"text-sm font-medium text-gray-700 group-hover:text-gray-900"},y={class:"mt-4 flex w-full flex-none gap-x-4 px-6"},w={class:"flex-none"},b={class:"sr-only"},_=(0,i._)("div",{class:"mt-6 border-t border-gray-900/5 px-6 py-6"},[(0,i._)("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},[(0,i.Uk)("Enjoy with your meal "),(0,i._)("span",{"aria-hidden":"true"})])],-1),j=(0,i._)("div",{class:"absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"},null,-1),k=(0,i._)("div",{class:"absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-orange-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"},null,-1),H=(0,i._)("div",null,null,-1),O=(0,i._)("div",null,null,-1);var Z={__name:"HelloWorld",setup(e){const n=(0,a.iH)(""),t=(0,a.iH)(""),r=(0,a.iH)(""),l=(0,a.iH)(""),s=(0,a.iH)(""),Z=(0,a.iH)(""),D=(0,a.iH)(!0);async function E(){try{"none"!==u.Z.getContext().type&&(await u.Z.sendMessages([{type:"text",text:t.value}]),console.log("Message sent successfully!"))}catch(e){console.error("Error in sending message",e)}}async function M(){try{const e=await u.Z.getFriendship();return Z.value=e,Z.value.friendFlag}catch(e){return console.error("Error fetching friendship status:",e),!1}}async function W(){D.value=await M(),console.log(D.value),0==D.value?(alert("please add friend"),window.location.href="https://lin.ee/qdbnDDV"):(q(),E())}function I(){u.Z.init({liffId:"2001677131-XKqMJqML"},(()=>{u.Z.isLoggedIn()?(q(),W()):u.Z.login()}),(e=>console.error(e)))}function q(){s.value=u.Z.getIDToken(),u.Z.getProfile().then((e=>{console.log(e),l.value=e.displayName,n.value=e.pictureUrl,r.value=e.statusMessage,t.value=e.userId})).catch((e=>console.error(e)))}return(0,i.bv)((()=>{I()})),(e,r)=>{const s=(0,i.up)("CalendarDaysIcon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("section",c,[(0,i._)("div",d,[(0,i._)("dl",f,[v,(0,i._)("div",g,[(0,i._)("div",p,[(0,i._)("div",null,[n.value?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"inline-block h-9 w-9 rounded-full",src:n.value,alt:"User's picture"},null,8,m)):(0,i.kq)("",!0)]),(0,i._)("div",x,[(0,i._)("p",h,(0,o.zw)(l.value),1)])])]),(0,i._)("div",y,[(0,i._)("dt",w,[(0,i._)("span",b,(0,o.zw)(t.value),1),(0,i.Wm)(s,{class:"h-6 w-5 text-gray-400","aria-hidden":"true"})])])]),_]),j,k]),H,O],64)}}};const D=Z;var E=D,M={name:"App",components:{HelloWorld:E}},W=t(744);const I=(0,W.Z)(M,[["render",l]]);var q=I,z=t(46);const C=(0,r.ri)(q);C.use(z.Z),C.mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var l=n[r]={exports:{}};return e[r].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,l){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],l=e[c][2];for(var s=!0,a=0;a<r.length;a++)(!1&l||o>=l)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(s=!1,l<o&&(o=l));if(s){e.splice(c--,1);var u=i();void 0!==u&&(n=u)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,i,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/dedememberLiff_new/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,l,o=r[0],s=r[1],a=r[2],u=0;if(o.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(a)var c=a(t)}for(n&&n(r);u<o.length;u++)l=o[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},r=self["webpackChunknewliff"]=self["webpackChunknewliff"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(624)}));r=t.O(r)})();