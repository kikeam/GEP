(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),u=n(2),s=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)("Add a categorie"),a=Object(u.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i&&(e((function(t){return[i].concat(Object(s.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(6),d=n.n(j),l=n(8),p=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r,c,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=nmviO08VdruU76sS8KDSVr2NDYL8boxn&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.url,n=t.title;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:e,alt:n}),Object(r.jsx)("p",{children:n})]})},f=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){setInterval((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),i&&Object(r.jsx)("p",{children:"loading..."}),Object(r.jsx)("div",{className:"card-container",children:a.map((function(t){var e=t.id,n=t.url,c=t.title;return Object(r.jsx)(b,{url:n,title:c},e)}))})]})},O=function(){var t=Object(c.useState)(["Pokemon"]),e=Object(u.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(o,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)(f,{category:t},t)}))})]})};n(16);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b250ecb.chunk.js.map