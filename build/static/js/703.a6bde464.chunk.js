"use strict";(self.webpackChunkfikrat_app=self.webpackChunkfikrat_app||[]).push([[703],{2093:function(e,t,n){n.d(t,{xf:function(){return r},ZX:function(){return a},Vr:function(){return s},Q2:function(){return c},ke:function(){return i},wX:function(){return o},uM:function(){return u},si:function(){return l},MG:function(){return h},tZ:function(){return d}});var r="/category",a="/language",s="/author",c="/book",i="/audio-book",o="/photo",u="/proverb",l="/media",h="/article",d="/all-book"},5260:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),a=n(5861),s=n(7757),c=n.n(s),i=n(4569),o=n.n(i),u=n(3763),l=n(1845),h=o().create({baseURL:u.CT,headers:{Accept:"application/json","Accept-Language":(0,l.VQ)()}}),d={find:function(e,t){return h.get("".concat(t,"/").concat(e))},fetchAll:function(e){var t=arguments;return(0,a.Z)(c().mark((function n(){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:{},n.next=3,h.get(e,r);case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},fetchWithParams:function(e){var t=arguments;return(0,a.Z)(c().mark((function n(){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:{},n.next=3,h.get(e,{params:r});case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},fetchWithPagination:function(e){return(0,a.Z)(c().mark((function t(){var n,a,s,i,o,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,a=e.page,s=void 0===a?1:a,i=e.params,o=void 0===i?{}:i,t.next=3,h.get(n,{params:(0,r.Z)((0,r.Z)({},o),{},{page:s})});case 3:return u=t.sent,t.abrupt("return",u);case 5:case"end":return t.stop()}}),t)})))()}},f=d},2703:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(9439),a=n(2791),s=n(5861),c=n(7757),i=n.n(c),o=n(7022),u=n(9743),l=n(2677),h=n(3504),d=n(2097),f=n(184);var x=function(e){var t=(0,d.N)().t,n=e.to;return(0,f.jsx)(h.rU,{className:"detail_btn",to:n,children:t("detail")})},m=n(5260),p=n(2093),j=n(7494);var v=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1],v=(0,d.N)().t,b=(0,a.useState)(),g=(0,r.Z)(b,2),Z=g[0],k=g[1],w=(0,a.useCallback)((0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),m.Z.fetchWithPagination({url:p.Q2}).then((function(e){k(e.data),c(!1)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),[]);return(0,a.useEffect)((function(){w()}),[w]),(0,f.jsx)("div",{className:"home_bottom",children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(u.Z,{children:(0,f.jsx)("h2",{className:"title mb-4 mt-3 text-black",children:v("booksWorld")})}),(0,f.jsx)(u.Z,{children:n?(0,f.jsx)(j.Z,{height:"400px"}):null===Z||void 0===Z?void 0:Z.results.map((function(e,t){return t<4?(0,f.jsx)(l.Z,{lg:3,md:6,children:(0,f.jsx)(h.rU,{to:"/:".concat(e.id),children:(0,f.jsx)("div",{className:"flip-box w-100 overflow-hidden",children:(0,f.jsxs)("div",{className:"flip-box-inner",children:[(0,f.jsx)("div",{className:"flip-box-front",children:(0,f.jsx)("img",{src:e.image,width:"100%",height:"100%",alt:e.title})}),(0,f.jsxs)("div",{className:"flip-box-back",children:[(0,f.jsx)("h4",{children:e.title}),(0,f.jsxs)("p",{children:[e.description.slice(0,56),"..."]})]})]})})})},t):null}))}),(0,f.jsx)(u.Z,{children:(0,f.jsx)("div",{className:"button_area",children:(0,f.jsx)(x,{to:"/booksWorld"})})})]})})},b=n(4112);var g=function(){var e=(0,d.N)().t;return(0,f.jsx)("div",{className:"home_top",children:(0,f.jsxs)(o.Z,{children:[(0,f.jsxs)(u.Z,{children:[(0,f.jsx)("h1",{className:"home_title",children:e("welcome")}),(0,f.jsx)("p",{className:"home_info",children:e("homeInfo")})]}),(0,f.jsxs)(u.Z,{children:[(0,f.jsx)(l.Z,{md:7,children:(0,f.jsx)("div",{className:"left",children:(0,f.jsx)(b.Z,{fallback:(0,f.jsx)(j.Z,{height:"400px"}),controls:!0,url:"http://www.youtube.com/embed/W7qWa52k-nE",width:"100%",height:"100%"})})}),(0,f.jsx)(l.Z,{md:5,children:(0,f.jsxs)("div",{className:"right",children:[(0,f.jsx)("figure",{children:(0,f.jsx)("img",{width:"100%",src:"/assets/img/home_image1.png",alt:"Fikrat"})}),(0,f.jsx)("h4",{className:"home_about_title",children:e("aboutUs")}),(0,f.jsx)("p",{className:"home_about_info",children:e("homeAboutInfo")}),(0,f.jsx)("div",{className:"button_area",children:(0,f.jsx)(x,{to:"/about"})})]})})]})]})})};var Z=function(){var e=(0,a.useState)("booksWorld"),t=(0,r.Z)(e,2);return t[0],t[1],(0,f.jsxs)("section",{className:"home",children:[(0,f.jsx)(g,{}),(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=703.a6bde464.chunk.js.map