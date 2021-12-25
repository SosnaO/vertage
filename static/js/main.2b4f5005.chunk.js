(this.webpackJsonpvertage=this.webpackJsonpvertage||[]).push([[0],{17:function(t,e,n){t.exports={form:"Form_form__2uC3O",input:"Form_input__3iWSh",button:"Form_button__3Y8ao"}},21:function(t,e,n){t.exports={item:"Item_item__2fc6H",button:"Item_button__3vbDr"}},22:function(t,e,n){t.exports={itemList:"Home_itemList__1ugTh",link:"Home_link__21m0L"}},29:function(t,e,n){t.exports={gradientBlock:"GradientBlock_gradientBlock__3RyKu",itemText:"GradientBlock_itemText__3HsC8"}},31:function(t,e,n){t.exports={title:"Header_title__scbTK"}},54:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(19),r=n.n(c),s=n(10),o=n(9),d=n(11),u=n(13),j=n(16),b=n(4),l=Object(j.b)({name:"gradient",initialState:{items:[]},reducers:{addGradient:function(t,e){var n=e.payload;return Object(b.a)(Object(b.a)({},t),{},{items:[].concat(Object(u.a)(t.items),[n])})},editGradient:function(t,e){var n=e.payload;return Object(b.a)(Object(b.a)({},t),{},{items:Object(u.a)(t.items.map((function(t){return t.id===n.id?Object(b.a)(Object(b.a)({},t),{},{start:t.start===n.start?t.start:n.start,end:t.end===n.end?t.end:n.end}):t})))})},deleteGradient:function(t,e){var n=e.payload;return Object(b.a)(Object(b.a)({},t),{},{items:Object(u.a)(t.items.filter((function(t){return t.id!==n})))})}}}),m=Object(u.a)(Object(j.c)({serializableCheck:!1})),O=Object(d.a)({},l.name,l.reducer),f=Object(j.a)({reducer:O,middleware:m}),x=n(3),h=n(28),p=n.n(h),v=function(t){return function(e,n){t=Object(b.a)(Object(b.a)({},t),{},{id:p.a.generate()}),e(l.actions.addGradient(t))}},_=function(t){return function(e,n){e(l.actions.editGradient(t))}},g=n(21),N=n.n(g),k=function(t,e){return"linear-gradient(to right, ".concat(t,", ").concat(e,")")},y=n(29),G=n.n(y),S=n(1);function B(t){var e=t.item;return Object(S.jsx)("div",{className:G.a.gradientBlock,style:{background:k(e.start,e.end)}})}function C(t){var e=t.item,n=Object(o.b)(),a=Object(x.g)();return Object(S.jsxs)("li",{id:e.id,className:N.a.item,children:[Object(S.jsx)(B,{item:e}),Object(S.jsx)("button",{className:N.a.button,onClick:function(t){var e=t.target.closest("LI");a.push("/edit/".concat(e.id))},children:"Edit"}),Object(S.jsx)("button",{className:N.a.button,onClick:function(t){var e,a=t.target.closest("LI");n((e=a.id,function(t,n){t(l.actions.deleteGradient(e))}))},children:"Delete"})]},e.id)}var w=n(22),F=n.n(w);function H(){var t=Object(o.c)((function(t){return t.gradient.items}));return Object(S.jsxs)("div",{className:F.a.HomeBlock,children:[Object(S.jsx)("ul",{className:F.a.itemList,children:t.map((function(t){return Object(S.jsx)(C,{item:t},t.id)}))}),Object(S.jsx)(s.b,{to:"/new",className:F.a.link,children:"Add gradient"})]})}var L=n(26),I=function(t){var e;for(var n in t)if(!(e=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t[n])))return e;return e},A=n(17),T=n.n(A);function D(t){var e=t.initialState,n=t.action,i=Object(x.g)(),c=Object(o.b)(),r=Object(a.useState)(e),s=Object(L.a)(r,2),u=s[0],j=s[1],l="edit"!==n,m=Object(a.useState)(l),O=Object(L.a)(m,2),f=O[0],h=O[1],p=function(t){var e=t.target,n=e.name,a=e.value;I(Object(d.a)({},n,a))?h(!1):h(!0),j((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},n,a))}))};return Object(S.jsxs)("form",{className:T.a.form,onSubmit:function(t){t.preventDefault(),c(("edit"===n?_:v)(u)),i.push("/")},children:[Object(S.jsx)("input",{name:"start",type:"text",value:null===u||void 0===u?void 0:u.start,onChange:p,className:T.a.input,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 hex-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u0430",required:!0}),Object(S.jsx)("input",{name:"end",type:"text",value:null===u||void 0===u?void 0:u.end,onChange:p,className:T.a.input,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 hex-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u0430",required:!0}),Object(S.jsx)("button",{type:"submit",title:"".concat(n," gradient"),className:T.a.button,disabled:f,children:"".concat(n," gradient")})]})}var E={start:"",end:""};function q(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{className:"title",children:"New gradient"}),Object(S.jsx)(D,{initialState:E,action:"add"})]})}function J(t){var e=t.match.params.id,n=Object(o.c)((function(t){return t.gradient.items.find((function(t){return t.id===e}))})),a=n;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{className:"title",children:"Edit"}),Object(S.jsx)(D,{initialState:a,action:"edit"}),n&&Object(S.jsx)(B,{item:n})]})})}var K=n(31),z=n.n(K);function M(){return Object(S.jsx)("h1",{className:z.a.title,children:"Gradients"})}n(54);var R=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(M,{}),Object(S.jsxs)(x.d,{children:[Object(S.jsx)(x.b,{path:"/",exact:!0,component:H}),Object(S.jsx)(x.b,{path:"/new",component:q}),Object(S.jsx)(x.b,{path:"/edit/:id",component:J}),Object(S.jsx)(x.a,{to:"/"})]})]})};n(55),n(56);r.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(o.a,{store:f,children:Object(S.jsx)(s.a,{children:Object(S.jsx)(R,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.2b4f5005.chunk.js.map