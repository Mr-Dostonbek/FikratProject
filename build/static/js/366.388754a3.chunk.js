"use strict";(self.webpackChunkfikrat_app=self.webpackChunkfikrat_app||[]).push([[366],{2093:function(t,n,e){e.d(n,{xf:function(){return r},ZX:function(){return a},Vr:function(){return c},Q2:function(){return u},ke:function(){return i},wX:function(){return o},uM:function(){return s},si:function(){return l},MG:function(){return d},tZ:function(){return f}});var r="/category",a="/language",c="/author",u="/book",i="/audio-book",o="/photo",s="/proverb",l="/media",d="/article",f="/all-book"},5260:function(t,n,e){e.d(n,{Z:function(){return h}});var r=e(1413),a=e(5861),c=e(7757),u=e.n(c),i=e(4569),o=e.n(i),s=e(3763),l=e(1845),d=o().create({baseURL:s.CT,headers:{Accept:"application/json","Accept-Language":(0,l.VQ)()}}),f={find:function(t,n){return d.get("".concat(n,"/").concat(t))},fetchAll:function(t){var n=arguments;return(0,a.Z)(u().mark((function e(){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,d.get(t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},fetchWithParams:function(t){var n=arguments;return(0,a.Z)(u().mark((function e(){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,d.get(t,{params:r});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},fetchWithPagination:function(t){return(0,a.Z)(u().mark((function n(){var e,a,c,i,o,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.url,a=t.page,c=void 0===a?1:a,i=t.params,o=void 0===i?{}:i,n.next=3,d.get(e,{params:(0,r.Z)((0,r.Z)({},o),{},{page:c})});case 3:return s=n.sent,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})))()}},h=f},1769:function(t,n,e){e.d(n,{Z:function(){return u}});e(2791);var r=e(2824),a=e(3767),c=e(184);function u(t){var n=t.count,e=t.handleChange,u=t.page;return(0,c.jsx)("div",{className:"pagination_wrapper",children:(0,c.jsx)(a.Z,{spacing:2,children:(0,c.jsx)(r.Z,{onChange:e,page:u,count:n,variant:"outlined",shape:"rounded"})})})}},366:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(9439),a=e(2791),c=e(7022),u=e(9743),i=e(2677),o=e(2093),s=e(5260),l=e(7494),d=e(1769),f=e(2097),h=e(6151),p=e(6710),g=e(5108),v=e(184);var x=function(t){var n=t.name,e=t.url,r=t.date,a="".concat(new Date(r).getHours().toString().padStart(2,"0"),":").concat(new Date(r).getMinutes().toString().padStart(2,"0")," / ").concat((new Date(r).getMonth()+1).toString().padStart(2,"0"),".").concat(new Date(r).getDate().toString().padStart(2,"0"),".").concat(new Date(r).getFullYear().toString().padStart(4,"0"));return(0,v.jsxs)("div",{className:"youtube_video_card card mb-3",children:[(0,v.jsx)("div",{className:"video_wrapper",children:(0,v.jsx)(p.Z,{fallback:(0,v.jsx)(l.Z,{height:"400px"}),controls:!0,url:e,width:"100%",height:"100%"})}),(0,v.jsxs)("div",{className:"video_desc p-2",children:[(0,v.jsx)("h3",{className:"about_title text-dark",children:n.length>60?"".concat(n.slice(0,60),"..."):n}),(0,v.jsxs)(h.Z,{className:"date_btn",children:[(0,v.jsx)(g.Z,{})," ",a]})]})]})};var m=function(){var t,n=(0,f.N)().t,e=(0,a.useState)(!1),h=(0,r.Z)(e,2),p=h[0],g=h[1],m=(0,a.useState)(1),Z=(0,r.Z)(m,2),j=Z[0],w=Z[1],b=(0,a.useState)(),k=(0,r.Z)(b,2),S=k[0],_=k[1],N=(0,a.useCallback)((function(){g(!0),s.Z.fetchWithPagination({url:o.si,page:j}).then((function(t){_(t.data),g(!1)})).catch((function(t){return console.log("error",t)}))}),[j]);return(0,a.useEffect)((function(){N()}),[N]),(0,a.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[j]),(0,v.jsx)("section",{className:"media",children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)("h2",{className:"title",children:n("media")})}),(0,v.jsx)(u.Z,{children:p?(0,v.jsx)(l.Z,{height:"400px"}):null===S||void 0===S||null===(t=S.results)||void 0===t?void 0:t.map((function(t,n){return(0,v.jsx)(i.Z,{md:6,lg:4,children:(0,v.jsx)(x,{name:t.title,url:t.video,date:t.created_at})},n)}))}),(0,v.jsx)(u.Z,{children:S&&(null===S||void 0===S?void 0:S.num_pages)>1?(0,v.jsx)(d.Z,{handleChange:function(t,n){w(n)},page:j,count:null===S||void 0===S?void 0:S.num_pages}):null})]})})}}}]);
//# sourceMappingURL=366.388754a3.chunk.js.map