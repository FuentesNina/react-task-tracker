(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{49:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),o=c(39),r=c.n(o),s=(c(49),c(23)),j=c(9),l=c(25),i=c(8),d=c(10),b=function(e){var t=e.color,c=e.text,n=e.onClick;return Object(d.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:n,children:c})};b.defaultProps={color:"yellow"};var u=b,O=function(e){var t=e.title,c=e.onShow,n=e.showAdd,a=Object(i.j)();return console.log(a),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),"/react-task-tracker/"===a.pathname&&Object(d.jsx)(u,{color:n?"red":"green",text:n?"Close":"Add",onClick:c})]})};O.defaultProps={title:"Task Tracker"};var h=O,p=c(41),f=function(e){var t=e.task,c=e.onDelete,n=e.onToggle,a=e.showCompleted;return Object(d.jsxs)("div",{className:"task ".concat(t.completed?"reminder":""),onDoubleClick:function(){return n(t.id)},style:{display:!0===t.completed&&!0===a&&"none"},children:[Object(d.jsxs)("h3",{children:[t.title," ",Object(d.jsx)(p.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return c(t.id)}})]}),Object(d.jsx)("p",{children:t.description})]})},x=function(e){var t=e.tasks,c=e.onDelete,n=e.onToggle,a=e.hideCompleted,o=e.showCompleted;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{className:"btn ".concat(o),onClick:a,children:[!0===o?"Show":"Hide"," Completed Tasks"]}),t.map((function(e){return Object(d.jsx)(f,{task:e,onDelete:c,onToggle:n,showCompleted:o},e.id)}))]})},m=function(e){var t=e.onAdd,c=Object(n.useState)(""),a=Object(j.a)(c,2),o=a[0],r=a[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),i=l[0],b=l[1],u=Object(n.useState)(!1),O=Object(j.a)(u,2),h=O[0],p=O[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({title:o,description:i,completed:h}),r(""),b(""),p(!1)):alert("Please add task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Description",value:i,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Task Completed?"}),Object(d.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},k=function(){var e=(new Date).getFullYear();return Object(d.jsxs)("footer",{children:[Object(d.jsxs)("p",{children:["Copyright \xa9 ",e]}),Object(d.jsx)(l.b,{to:"/about",children:"About"})]})},g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Version 2.0.0"}),Object(d.jsx)(l.b,{to:"/",children:"Go Back"})]})},v=c(40),C=c(17),T=Object(v.a)({apiKey:"AIzaSyD_P7V5hcr-qQ_qu7BJlPQITQ5ATc_f9mI",authDomain:"reacttasktracker2.firebaseapp.com",projectId:"reacttasktracker2",storageBucket:"reacttasktracker2.appspot.com",messagingSenderId:"54058129813",appId:"1:54058129813:web:48c149f4dd0bf6377ebe9c",measurementId:"G-QVEJDRT5P0"}),w=Object(C.f)(T);var S=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),r=Object(j.a)(o,2),b=r[0],u=r[1],O=Object(n.useState)(!1),p=Object(j.a)(O,2),f=p[0],v=p[1],T=Object(C.b)(w,"taskList"),S=Object(C.i)(T,Object(C.h)("updatedAt"));return Object(n.useEffect)((function(){Object(C.g)(S,(function(e){var t=[];e.docs.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),u(t)}))}),[]),Object(d.jsx)(l.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onShow:function(){return a(!c)},showAdd:c}),c&&Object(d.jsx)(m,{onAdd:function(e){Object(C.a)(T,Object(s.a)(Object(s.a)({},e),{},{updatedAt:Object(C.j)()}))}}),b.length>0?Object(d.jsx)(x,{tasks:b,onDelete:function(e){var t=Object(C.d)(w,"taskList",e);Object(C.c)(t)},onToggle:function(e){var t=Object(C.d)(w,"taskList",e);Object(C.e)(t).then((function(e){var c=e.data().completed;Object(C.k)(t,{completed:!c})}))},hideCompleted:function(){v(!f)},showCompleted:f}):"No Tasks to Show",Object(d.jsx)(k,{})]})}),Object(d.jsx)(i.a,{path:"/about",element:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onShow:function(){return a(!c)},showAdd:c}),Object(d.jsx)(g,{}),Object(d.jsx)(k,{})]})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),o(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})})),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.9752d4dc.chunk.js.map