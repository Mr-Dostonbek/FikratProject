"use strict";(self.webpackChunkfikrat_app=self.webpackChunkfikrat_app||[]).push([[279,703],{2093:function(e,n,s){s.d(n,{xf:function(){return i},ZX:function(){return t},Vr:function(){return r},Q2:function(){return a},ke:function(){return c},wX:function(){return o},uM:function(){return u},si:function(){return l},MG:function(){return m},tZ:function(){return d}});var i="/category",t="/language",r="/author",a="/book",c="/audio-book",o="/photo",u="/proverb",l="/media",m="/article",d="/all-book"},5260:function(e,n,s){s.d(n,{Z:function(){return g}});var i=s(1413),t=s(5861),r=s(7757),a=s.n(r),c=s(4569),o=s.n(c),u=s(3763),l=s(1845),m=o().create({baseURL:u.CT,headers:{Accept:"application/json","Accept-Language":(0,l.VQ)()}}),d={find:function(e,n){return m.get("".concat(n,"/").concat(e))},fetchAll:function(e){var n=arguments;return(0,t.Z)(a().mark((function s(){var i,t;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=n.length>1&&void 0!==n[1]?n[1]:{},s.next=3,m.get(e,i);case 3:return t=s.sent,s.abrupt("return",t);case 5:case"end":return s.stop()}}),s)})))()},fetchWithParams:function(e){var n=arguments;return(0,t.Z)(a().mark((function s(){var i,t;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=n.length>1&&void 0!==n[1]?n[1]:{},s.next=3,m.get(e,{params:i});case 3:return t=s.sent,s.abrupt("return",t);case 5:case"end":return s.stop()}}),s)})))()},fetchWithPagination:function(e){return(0,t.Z)(a().mark((function n(){var s,t,r,c,o,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.url,t=e.page,r=void 0===t?1:t,c=e.params,o=void 0===c?{}:c,n.next=3,m.get(s,{params:(0,i.Z)((0,i.Z)({},o),{},{page:r})});case 3:return u=n.sent,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})))()}},g=d},2703:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var i=s(9439),t=s(2791),r=s(5861),a=s(7757),c=s.n(a),o=s(7022),u=s(9743),l=s(2677),m=s(3504),d=s(2097),g=s(184);var p=function(e){var n=(0,d.N)().t,s=e.to;return(0,g.jsx)(m.rU,{className:"detail_btn",to:s,children:n("detail")})},h=s(5260),f=s(2093),x=s(7494);var v=function(){var e=(0,t.useState)(!1),n=(0,i.Z)(e,2),s=n[0],a=n[1],v=(0,d.N)().t,k=(0,t.useState)(),j=(0,i.Z)(k,2),b=j[0],z=j[1],_=(0,t.useCallback)((0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0),h.Z.fetchWithPagination({url:f.Q2}).then((function(e){z(e.data),a(!1)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),[]);return(0,t.useEffect)((function(){_()}),[_]),(0,g.jsx)("div",{className:"home_bottom",children:(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)("h2",{className:"title mb-4 mt-3 text-black",children:v("booksWorld")})}),(0,g.jsx)(u.Z,{children:s?(0,g.jsx)(x.Z,{height:"400px"}):null===b||void 0===b?void 0:b.results.map((function(e,n){var s;return n<4?(0,g.jsx)(l.Z,{lg:3,md:6,children:(0,g.jsx)(m.rU,{to:"/:".concat(e.id),children:(0,g.jsx)("div",{className:"flip-box w-100 overflow-hidden mb-4 mb-lg-0",children:(0,g.jsxs)("div",{className:"flip-box-inner",children:[(0,g.jsx)("div",{className:"flip-box-front",children:(0,g.jsx)("img",{src:e.image,width:"100%",height:"100%",alt:e.title})}),(0,g.jsxs)("div",{className:"flip-box-back",children:[(0,g.jsx)("h4",{children:e.title}),(0,g.jsxs)("p",{children:[null===(s=e.description)||void 0===s?void 0:s.slice(0,56),"..."]})]})]})})})},n):null}))}),(0,g.jsx)(u.Z,{children:(0,g.jsx)("div",{className:"button_area",children:(0,g.jsx)(p,{to:"/booksWorld"})})})]})})},k=s(4112);var j=function(){var e=(0,d.N)().t;return(0,g.jsx)("div",{className:"home_top",children:(0,g.jsxs)(o.Z,{children:[(0,g.jsxs)(u.Z,{children:[(0,g.jsx)("h1",{className:"home_title",children:e("welcome")}),(0,g.jsx)("p",{className:"home_info",children:e("homeInfo")})]}),(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(l.Z,{md:7,children:(0,g.jsx)("div",{className:"left",children:(0,g.jsx)(k.Z,{fallback:(0,g.jsx)(x.Z,{height:"400px"}),controls:!0,url:"http://www.youtube.com/embed/W7qWa52k-nE",width:"100%",height:"100%"})})}),(0,g.jsx)(l.Z,{md:5,children:(0,g.jsxs)("div",{className:"right",children:[(0,g.jsx)("figure",{children:(0,g.jsx)("img",{width:"100%",src:"/assets/img/home_image1.png",alt:"Fikrat"})}),(0,g.jsx)("h4",{className:"home_about_title",children:e("aboutUs")}),(0,g.jsx)("p",{className:"home_about_info",children:e("homeAboutInfo")}),(0,g.jsx)("div",{className:"button_area",children:(0,g.jsx)(p,{to:"/about"})})]})})]})]})})};var b=function(){var e=(0,t.useState)("booksWorld"),n=(0,i.Z)(e,2);return n[0],n[1],(0,g.jsxs)("section",{className:"home",children:[(0,g.jsx)(j,{}),(0,g.jsx)(v,{})]})}},8279:function(e,n,s){s.r(n),s.d(n,{default:function(){return g}});s(2791);var i=s(7022),t=s(2097),r=s(2703),a=s(9743),c=s(2815),o=s(184);var u=function(e){var n=e.name,s=e.imgUrl,i=(e.desc,(0,t.N)().lang);return(0,o.jsxs)("div",{className:"service_card",children:[(0,o.jsx)("figure",{children:(0,o.jsx)("img",{src:s,width:"100%",alt:n[i]})}),(0,o.jsx)("h4",{className:"footer_title color_till text-center",children:n[i]})]})},l=s(8542);var m=function(e){var n=e.title,s=e.services;return(0,o.jsxs)("div",{className:"service",children:[(0,o.jsx)(a.Z,{children:(0,o.jsx)("h3",{className:"services_title text-dark",children:n})}),(0,o.jsx)(a.Z,{children:(0,o.jsx)("div",{className:"silder_wrapper",children:(0,o.jsx)(c.tq,{slidesPerView:1,spaceBetween:10,navigation:!0,modules:[l.W_],breakpoints:{640:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:30}},className:"mySwiper",children:s.map((function(e,n){return(0,o.jsx)(c.o5,{children:(0,o.jsx)(u,{name:e.name,imgUrl:e.imgUrl,desc:e.desc})})}))})})})]})},d=[{title:{uz:"Kitobga doir ishlar:",en:"\u041a\u0438\u0442\u043e\u0431\u0433\u0430 \u0434\u043e\u0438\u0440 \u0438\u0448\u043b\u0430\u0440:"},services:[{name:{uz:"Tarjima",en:"\u0422\u0430\u0440\u0436\u0438\u043c\u0430"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Tahrir",en:"\u0422\u0430\u04b3\u0440\u0438\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Mutaxassislik xizmati",en:"\u041c\u0443\u0442\u0430\u0445\u0430\u0441\u0441\u0438\u0441\u043b\u0438\u043a \u0445\u0438\u0437\u043c\u0430\u0442\u0438"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Sahifalash",en:"\u0421\u0430\u04b3\u0438\u0444\u0430\u043b\u0430\u0448"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Muqova (dizayn)",en:"\u041c\u0443\u049b\u043e\u0432\u0430 (\u0434\u0438\u0437\u0430\u0439\u043d)"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}}]},{title:{uz:"Broshyura va reklamalar:",en:"\u0411\u0440\u043e\u0448\u044e\u0440\u0430 \u0432\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0430\u043b\u0430\u0440:"},services:[{name:{uz:"Tanitim broshyuralari",en:"\u0422\u0430\u043d\u0438\u0442\u0438\u043c \u0431\u0440\u043e\u0448\u044e\u0440\u0430\u043b\u0430\u0440\u0438"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Reklama broshyralari",en:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u0431\u0440\u043e\u0448\u0439\u0440\u0430\u043b\u0430\u0440\u0438"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Kart vizitlar",en:"\u041a\u0430\u0440\u0442 \u0432\u0438\u0437\u0438\u0442\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Kataloglar",en:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Logotip",en:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Taklifnomalar",en:"\u0422\u0430\u043a\u043b\u0438\u0444\u043d\u043e\u043c\u0430\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}}]},{title:{uz:"Shirkatingiz ismi va logosi tushirilgan:",en:"\u0428\u0438\u0440\u043a\u0430\u0442\u0438\u043d\u0433\u0438\u0437 \u0438\u0441\u043c\u0438 \u0432\u0430 \u043b\u043e\u0433\u043e\u0441\u0438 \u0442\u0443\u0448\u0438\u0440\u0438\u043b\u0433\u0430\u043d:"},services:[{name:{uz:"Kundaliklar",en:"\u041a\u0443\u043d\u0434\u0430\u043b\u0438\u043a\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Blaknotlar",en:"\u0411\u043b\u0430\u043a\u043d\u043e\u0442\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Ruchka va qalamlar",en:"\u0420\u0443\u0447\u043a\u0430 \u0432\u0430 \u049b\u0430\u043b\u0430\u043c\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Daftarlar va kichik not. daftarlar",en:"\u0414\u0430\u0444\u0442\u0430\u0440\u043b\u0430\u0440 \u0432\u0430 \u043a\u0438\u0447\u0438\u043a \u043d\u043e\u0442. \u0434\u0430\u0444\u0442\u0430\u0440\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}},{name:{uz:"Chashka va suvenir idishlar",en:"\u0427\u0430\u0448\u043a\u0430 \u0432\u0430 \u0441\u0443\u0432\u0435\u043d\u0438\u0440 \u0438\u0434\u0438\u0448\u043b\u0430\u0440"},imgUrl:"/assets/img/books/duo_zikr.png",desc:{uz:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, sed laoreet magnis ut magna. Donec praesent.",en:"\u041b\u043e\u0440\u0435\u043c \u0438\u043f\u0441\u0443\u043c \u0434\u043e\u043b\u043e\u0440 \u0441\u0438\u0442 \u0430\u043c\u0435\u0442, c\u043e\u043d\u0441\u0435c\u0442\u0435\u0442\u0443\u0440 \u0430\u0434\u0438\u043f\u0438\u0441c\u0438\u043d\u0433 \u044d\u043b\u0438\u0442. \u042d\u043d\u0438\u043c, \u0441\u0435\u0434 \u043b\u0430\u043e\u0440\u0435\u044d\u0442 \u043c\u0430\u0433\u043d\u0438\u0441 \u0443\u0442 \u043c\u0430\u0433\u043d\u0430. \u0414\u043e\u043d\u0435c \u043f\u0440\u0430\u044d\u0441\u0435\u043d\u0442."}}]}];var g=function(){var e=(0,t.N)().lang;return(0,o.jsxs)("section",{className:"services",children:[(0,o.jsx)(i.Z,{children:d.map((function(n,s){return(0,o.jsx)(m,{title:n.title[e],services:n.services},s)}))}),(0,o.jsx)(r.default,{})]})}}}]);
//# sourceMappingURL=279.7c9e6649.chunk.js.map