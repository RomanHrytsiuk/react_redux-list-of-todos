(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a,n=c(9),s=c.n(n),r=c(3),l=c(17),i=c(7),o=c(14),d=c(15),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(5);!function(e){e.all="all",e.active="active",e.completed="completed"}(a||(a={}));var O=function(e){return{type:"status/SET",payload:e}},m=function(e){return{type:"query/SET",payload:e}},f=function(){return{type:"query/CLEAR"}},x={query:"",status:a.all},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"query/CLEAR":return Object(h.a)(Object(h.a)({},e),{},{query:""});case"status/SET":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},v=c(10),y=function(e){return{type:"todos/SET",payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?Object(v.a)(t.payload):e},g=Object(i.combineReducers)({currentTodo:b,filter:p,todos:N}),T=Object(i.createStore)(g,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),E=c(4),S=c(0),k=(c(25),c(26),c(16)),w=c.n(k),C=(r.b,r.c),q=c(1),L=function(){var e=Object(r.b)(),t=C((function(e){return e.todos})),c=C((function(e){return e.currentTodo})),n=C((function(e){return e.filter})),s=n.query,l=n.status,i=function(){var e=Object(v.a)(t);switch(s.trim()&&(e=e.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}))),l){case a.active:return e.filter((function(e){return!e.completed}));case a.completed:return e.filter((function(e){return e.completed}));default:return e}}();return Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})}),Object(q.jsx)("tbody",{children:i.map((function(t){return Object(q.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(q.jsx)("td",{className:"is-vcentered",children:t.id}),t.completed?Object(q.jsx)("td",{className:"is-vcentered",children:Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}):Object(q.jsx)("td",{className:"is-vcentered"}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:w()(t.completed?"has-text-success":"has-text-danger"),children:t.title})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(u(t))},children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:t===c?"far fa-eye-slash":"far fa-eye"})})})})]},t.id)}))})]})},R=function(){var e=Object(r.b)(),t=C((function(e){return e.filter})),c=t.query,n=t.status;return Object(q.jsxs)("form",{className:"field has-addons",children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(t){return e(O(t.target.value))},children:[Object(q.jsx)("option",{value:a.all,children:"All"}),Object(q.jsx)("option",{value:a.active,children:"Active"}),Object(q.jsx)("option",{value:a.completed,children:"Completed"})]})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){return e(m(t.target.value))}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(q.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"label",onClick:function(){return e(f())}})})]})]})},_=(c(28),function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})});function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var B=function(){var e=Object(S.useState)(null),t=Object(E.a)(e,2),c=t[0],a=t[1],n=Object(S.useState)(!1),s=Object(E.a)(n,2),l=s[0],i=s[1],o=Object(r.b)(),d=C((function(e){return e.currentTodo}));return Object(S.useEffect)((function(){var e;i(!0),d&&(e=d.userId,A("/users/".concat(e))).then(a).finally((function(){return i(!1)}))}),[]),Object(q.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),l?Object(q.jsx)(_,{}):Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===d||void 0===d?void 0:d.id)}),Object(q.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"label",onClick:function(){return o(j())}})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:null===d||void 0===d?void 0:d.title}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==d&&void 0!==d&&d.completed?Object(q.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(q.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},I=function(){var e=Object(S.useState)(!1),t=Object(E.a)(e,2),c=t[0],a=t[1],n=Object(r.b)(),s=C((function(e){return e.currentTodo}));return Object(S.useEffect)((function(){a(!0),A("/todos").then((function(e){return n(y(e))})).finally((function(){return a(!1)}))}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(R,{})}),Object(q.jsx)("div",{className:"block",children:c?Object(q.jsx)(_,{}):Object(q.jsx)(L,{})})]})})}),s&&Object(q.jsx)(B,{})]})},M=function(){return Object(q.jsx)(r.a,{store:T,children:Object(q.jsx)(l.a,{children:Object(q.jsx)(I,{})})})};s.a.render(Object(q.jsx)(M,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f8074568.chunk.js.map