(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(17),i=c.n(a),l=c(3),r=(c(23),c(8),c(0));var o=function(e){var t=e.listOfFriends;return Object(r.jsx)("div",{className:"listOfFriends",children:t.map((function(e){return Object(r.jsx)("div",{className:"friendContainer",children:Object(r.jsxs)("div",{className:"friend",children:[Object(r.jsxs)("h5",{children:["Name: ",e.name]}),Object(r.jsxs)("h5",{children:[" Date of birth: ",e.dob]}),Object(r.jsxs)("h5",{children:[" E-mail: ",e.mail]}),Object(r.jsxs)("h5",{children:[" Mobile: ",e.mobile]})]})})}))})},j=c(18),d=c(5),m=c.n(d),b=function(e){e.llst;var t=e.setLlst,c=e.setFix,n=(e.fix,Object(s.useState)("")),a=Object(l.a)(n,2),i=a[0],o=a[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),h=b[0],u=b[1],O=Object(s.useState)(""),p=Object(l.a)(O,2),x=p[0],f=p[1],v=Object(s.useState)(""),g=Object(l.a)(v,2),N=g[0],y=g[1],k=Object(s.useState)([]),S=Object(l.a)(k,2),w=S[0],F=S[1];return Object(s.useEffect)((function(){m.a.get("https://vivekappmern.herokuapp.com/read").then((function(e){F(e.data),t(w)})).catch((function(){console.log("ERR")}))}),[w,t]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"container register",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-3 register-left",children:[Object(r.jsx)("img",{src:"https://image.ibb.co/n7oTvU/logo_white.png",alt:""}),Object(r.jsx)("h3",{children:"Welcome"}),Object(r.jsx)("p",{children:"You are 30 seconds away from earning your own money!"})]}),Object(r.jsx)("div",{className:"col-md-9 register-right",children:Object(r.jsx)("div",{className:"tab-content",id:"myTabContent",children:Object(r.jsxs)("div",{className:"tab-pane fade show active",id:"home",children:[Object(r.jsx)("h3",{className:"register-heading",children:"Apply as a Employee"}),Object(r.jsxs)("div",{className:"row register-form",children:[Object(r.jsxs)("div",{className:"col-md-6",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name *",value:i,onChange:function(e){o(e.target.value)}})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"date",className:"form-control",placeholder:"Date of birth *",value:x,onChange:function(e){f(e.target.value)}})})]}),Object(r.jsxs)("div",{className:"col-md-6",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"email",className:"form-control",placeholder:"Your Email *",value:h,onChange:function(e){u(e.target.value)}})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",minLength:"10",maxLength:"10",name:"txtEmpPhone",className:"form-control",placeholder:"Your Phone *",value:N,onChange:function(e){y(e.target.value)}})}),Object(r.jsx)("input",{type:"submit",className:"btnRegister",value:"Submit",onClick:function(){m.a.post("https://vivekappmern.herokuapp.com/addfriend",{name:i,mail:h,dob:x,mobile:N}).then((function(e){console.log(e),F([].concat(Object(j.a)(w),[{_id:e.data.id,name:i,mail:h,dob:x,mobile:N}])),t(w),o(""),u(""),f(""),y("")})).then((function(){c(!1)}))}})]})]})]})})})]})})})};function h(e){var t=e.listOfFriends;return m.a.post("https://vivekappmern.herokuapp.com/mail",{name:t[t.length-1].name,mail:t[t.length-1].mail,dob:t[t.length-1].dob,mobile:t[t.length-1].mobile}).then((function(e){console.log(e)})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"email has been sent you at "}),Object(r.jsx)("h1",{children:t[t.length-1].mail})]})}var u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),i=Object(l.a)(a,2),j=i[0],d=i[1];return Object(r.jsx)("div",{children:j?Object(r.jsx)(b,{llst:c,setLlst:n,setFix:d,fix:j}):Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{listOfFriends:c}),Object(r.jsx)(o,{listOfFriends:c})]})})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[43,1,2]]]);
//# sourceMappingURL=main.5223542a.chunk.js.map