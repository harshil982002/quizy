(this.webpackJsonpquizy=this.webpackJsonpquizy||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),o=(a(27),a(21)),i=a(5),s=a(7),u=a(8),m=a.n(u),f=a(19),d=a(2),p=a(20),E=a.n(p),b={sports:21,history:23,politics:24},h=c.a.createContext(),y=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(d.a)(a,2),l=r[0],o=r[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),y=p[0],v=p[1],g=Object(n.useState)([]),O=Object(d.a)(g,2),j=O[0],N=O[1],q=Object(n.useState)(0),w=Object(d.a)(q,2),x=w[0],S=w[1],C=Object(n.useState)(0),k=Object(d.a)(C,2),M=k[0],z=k[1],_=Object(n.useState)(!1),F=Object(d.a)(_,2),I=F[0],A=F[1],H=Object(n.useState)({amount:10,category:"sports",difficulty:"easy"}),J=Object(d.a)(H,2),L=J[0],Q=J[1],T=Object(n.useState)(!1),B=Object(d.a)(T,2),D=B[0],P=B[1],Y=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),o(!1),e.next=4,E()(t).catch((function(e){return console.log(e)}));case 4:(a=e.sent)?(n=a.data.results).length>0?(N(n),v(!1),o(!1),A(!1)):(o(!0),A(!0)):o(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){S((function(e){var t=e+1;return t>j.length-1?(K(),0):t}))},K=function(){P(!0)};return c.a.createElement(h.Provider,{value:{waiting:l,loading:y,questions:j,index:x,correct:M,error:I,isModalOpen:D,nextQuestion:G,checkAnswer:function(e){e&&z((function(e){return e+1})),G()},closeModal:function(){o(!0),z(0),P(!1)},quiz:L,handleChange:function(e){var t=e.target.name,a=e.target.value;Q(Object(s.a)(Object(s.a)({},L),{},Object(i.a)({},t,a)))},handleSubmit:function(e){e.preventDefault();var t=L.amount,a=L.category,n=L.difficulty,c="".concat("https://opentdb.com/api.php?","amount=").concat(t,"&difficulty=").concat(n,"&category=").concat(b[a],"&type=multiple");Y(c)}}},t)},v=function(){return Object(n.useContext)(h)},g=function(){var e=v(),t=e.quiz,a=e.handleChange,n=e.handleSubmit,r=e.error;return c.a.createElement("main",null,c.a.createElement("section",{className:"quiz quiz-small"},c.a.createElement("form",{className:"setup-form"},c.a.createElement("h2",null,"setup quiz"),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"amount"},"number of questions"),c.a.createElement("input",{type:"number",name:"amount",id:"amount",value:t.amount,onChange:a,className:"form-input",min:1,max:50})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"category"},"category"),c.a.createElement("select",{name:"category",id:"category",className:"form-input",value:t.category,onChange:a},c.a.createElement("option",{value:"sports"},"sports"),c.a.createElement("option",{value:"history"},"history"),c.a.createElement("option",{value:"politics"},"politics"))),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"difficulty"},"select difficulty"),c.a.createElement("select",{name:"difficulty",id:"difficulty",className:"form-input",value:t.difficulty,onChange:a},c.a.createElement("option",{value:"easy"},"easy"),c.a.createElement("option",{value:"medium"},"medium"),c.a.createElement("option",{value:"hard"},"hard"))),r&&c.a.createElement("p",{className:"error"},"can't generate questions, please try different options"),c.a.createElement("button",{type:"submit",onClick:n,className:"submit-btn"},"start"))))},O=function(){return c.a.createElement("main",null,c.a.createElement("div",{className:"loading"}))},j=function(){var e=v(),t=e.isModalOpen,a=e.closeModal,n=e.correct,r=e.questions;return c.a.createElement("div",{className:"".concat(t?"modal-container isOpen":"modal-container")},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h2",null,"congrats!"),c.a.createElement("p",null,"You answered ",(n/r.length*100).toFixed(0),"% of questions correctly"),c.a.createElement("button",{className:"close-btn",onClick:a},"play again")))};var N=function(){var e=v(),t=e.waiting,a=e.loading,n=e.questions,r=e.index,l=e.correct,i=e.nextQuestion,s=e.checkAnswer;if(t)return c.a.createElement(g,null);if(a)return c.a.createElement(O,null);var u=n[r],m=u.question,f=u.incorrect_answers,d=u.correct_answer,p=Object(o.a)(f),E=Math.floor(4*Math.random());return 3===E?p.push(d):(p.push(p[E]),p[E]=d),c.a.createElement("main",null,c.a.createElement(j,null),c.a.createElement("section",{className:"quiz"},c.a.createElement("p",{className:"correct-answers"},"correct answers : ",l,"/",r),c.a.createElement("article",{className:"container"},c.a.createElement("h2",{dangerouslySetInnerHTML:{__html:m}}),c.a.createElement("div",{className:"btn-container"},p.map((function(e,t){return c.a.createElement("button",{key:t,className:"answer-btn",onClick:function(){return s(d===e)},dangerouslySetInnerHTML:{__html:e}})})))),c.a.createElement("button",{className:"next-question",onClick:i},"next question")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null,c.a.createElement(N,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d4c212e3.chunk.js.map