"use strict";(self.webpackChunkfikrat_app=self.webpackChunkfikrat_app||[]).push([[167],{2093:function(n,t,e){e.d(t,{xf:function(){return r},ZX:function(){return a},Vr:function(){return c},Q2:function(){return u},ke:function(){return i},wX:function(){return o},uM:function(){return s},si:function(){return l},MG:function(){return f},tZ:function(){return h}});var r="/category",a="/language",c="/author",u="/book",i="/audio-book",o="/photo",s="/proverb",l="/media",f="/article",h="/all-book"},5260:function(n,t,e){e.d(t,{Z:function(){return d}});var r=e(1413),a=e(5861),c=e(7757),u=e.n(c),i=e(4569),o=e.n(i),s=e(3763),l=e(1845),f=o().create({baseURL:s.CT,headers:{Accept:"application/json","Accept-Language":(0,l.VQ)()}}),h={find:function(n,t){return f.get("".concat(t,"/").concat(n))},fetchAll:function(n){var t=arguments;return(0,a.Z)(u().mark((function e(){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:{},e.next=3,f.get(n,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},fetchWithParams:function(n){var t=arguments;return(0,a.Z)(u().mark((function e(){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:{},e.next=3,f.get(n,{params:r});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},fetchWithPagination:function(n){return(0,a.Z)(u().mark((function t(){var e,a,c,i,o,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.url,a=n.page,c=void 0===a?1:a,i=n.params,o=void 0===i?{}:i,t.next=3,f.get(e,{params:(0,r.Z)((0,r.Z)({},o),{},{page:c})});case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})))()}},d=h},1769:function(n,t,e){e.d(t,{Z:function(){return u}});e(2791);var r=e(2824),a=e(3767),c=e(184);function u(n){var t=n.count,e=n.handleChange,u=n.page;return(0,c.jsx)("div",{className:"pagination_wrapper",children:(0,c.jsx)(a.Z,{spacing:2,children:(0,c.jsx)(r.Z,{onChange:e,page:u,count:t,variant:"outlined",shape:"rounded"})})})}},8167:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(9439),a=e(2791),c=e(7022),u=e(9743),i=e(2677),o=e(2097),s=e(184);var l=function(n){var t=n.title,e=n.content,r=n.author;return(0,s.jsxs)("div",{className:"article_card",children:[(0,s.jsxs)("h3",{className:"about_title",children:[(0,s.jsx)("span",{className:"text-dark fw-bold",children:r.full_name})," ",(0,s.jsx)("br",{}),t]}),(0,s.jsx)("p",{className:"atricle_content",children:e})]})},f=e(1769),h=e(2093),d=e(5260),p=e(7494);var v=function(){var n=(0,o.N)().t,t=(0,a.useState)(),e=(0,r.Z)(t,2),v=e[0],g=e[1],x=(0,a.useState)(!1),Z=(0,r.Z)(x,2),j=Z[0],m=Z[1],b=(0,a.useState)(1),k=(0,r.Z)(b,2),w=k[0],_=k[1],N=(0,a.useCallback)((function(){m(!0),d.Z.fetchWithPagination({url:h.MG,page:w}).then((function(n){g(n.data),m(!1)})).catch((function(n){return console.log("error",n)}))}),[w]);return(0,a.useEffect)((function(){N()}),[N]),(0,a.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[w]),(0,s.jsx)("section",{className:"articles",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(u.Z,{children:(0,s.jsx)("h2",{className:"title",children:n("articles")})}),(0,s.jsx)(u.Z,{children:(0,s.jsxs)(i.Z,{lg:12,children:[(0,s.jsx)(u.Z,{children:j?(0,s.jsx)(p.Z,{height:"100vh"}):null===v||void 0===v?void 0:v.results.map((function(n,t){return(0,s.jsx)(i.Z,{lg:12,children:(0,s.jsx)(l,{author:n.author,title:n.title,content:n.content})},t)}))}),(0,s.jsx)(u.Z,{children:v&&(null===v||void 0===v?void 0:v.num_pages)>1?(0,s.jsx)(f.Z,{handleChange:function(n,t){_(t)},page:w,count:null===v||void 0===v?void 0:v.num_pages}):null})]})})]})})}}}]);
//# sourceMappingURL=167.baa0e639.chunk.js.map