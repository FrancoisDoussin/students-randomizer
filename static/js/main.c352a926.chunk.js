(this.webpackJsonprandomizer=this.webpackJsonprandomizer||[]).push([[0],{25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var c,r,i,a,o,s,l,d,j,u,b,h,O,x=t(0),m=t.n(x),f=t(10),p=t.n(f),g=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),c(n),r(n),i(n),a(n)}))},v=t(4),w=t(5),S=t(2),y=t(3),k=y.a.div(c||(c=Object(S.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=y.a.div(r||(r=Object(S.a)(["\n  user-select: none;\n  height: 20vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: var(--primary-color);\n"]))),F=y.a.div(i||(i=Object(S.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]))),z=y.a.div(a||(a=Object(S.a)(["\n  background-color: white;\n  border-radius: 3em;\n  padding: 10px;\n  cursor: pointer;\n  display: flex;\n"]))),I=Object(y.a)(z)(o||(o=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  & div:nth-child(1), & div:nth-child(3) {\n    cursor: pointer;\n    margin: 0 5px;\n  }\n  & div:nth-child(2) {\n    font-weight: bold;\n    margin: 0 5px;\n  }\n"]))),J=Object(y.a)(z)(s||(s=Object(S.a)(["\n  position: absolute;\n  right: 2em;\n"]))),L=y.a.div(l||(l=Object(S.a)(["\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2em;\n  overflow: scroll;\n  "]))),E=y.a.div(d||(d=Object(S.a)(["\n  margin: 2em;\n  box-shadow: 0 1em 1em 0 rgb(0 0 0 / 10%);\n  border-radius: 0 0 0.5em 0.5em;\n  width: 300px;\n"]))),M=y.a.h2(j||(j=Object(S.a)(["\n  background-color: var(--primary-color);\n  border-radius: 0.3em 0.3em 0 0;\n  padding: 1em 2em;\n  color: white;\n  margin: 0;\n"]))),N=t(1),B=function(n){var e=n.students,t=n.setStudents,c=Object(x.useState)(1),r=Object(v.a)(c,2),i=r[0],a=r[1],o=Object(x.useState)([]),s=Object(v.a)(o,2),l=s[0],d=s[1],j=function(){for(var n=e.sort((function(n,e){return.5-Math.random()})),t=Math.ceil(n.length/i),c=[],r=0;r<i;r++){n.slice(r*t,(r+1)*t).length&&c.push(n.slice(r*t,(r+1)*t))}d(c)};return Object(x.useEffect)(j,[i]),Object(N.jsxs)(k,{children:[Object(N.jsxs)(C,{children:[Object(N.jsxs)(F,{children:[Object(N.jsxs)(I,{children:[Object(N.jsx)("div",{onClick:function(){i>1&&a(i-1)},children:Object(N.jsx)(w.a,{})}),Object(N.jsx)("div",{children:i}),Object(N.jsx)("div",{onClick:function(){a(i+1)},children:Object(N.jsx)(w.b,{})})]}),Object(N.jsx)(z,{onClick:j,children:Object(N.jsx)(w.c,{})})]}),Object(N.jsx)(J,{className:"Randomizer-bin",onClick:function(){return t(null)},children:Object(N.jsx)(w.d,{})})]}),Object(N.jsx)(L,{children:l.map((function(n,e){return Object(N.jsxs)(E,{children:[Object(N.jsx)(M,{children:"Groupe ".concat(e+1)}),n.map((function(n,e){return Object(N.jsx)("p",{children:n},e)}))]},e)}))})]})},P=t(14),R=t.n(P),T=y.a.div(u||(u=Object(S.a)(["\nheight: 100vh;\nwidth: 100vw;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nbackground-color: var(--primary-color);\ncolor: white;\n"]))),V=y.a.h1(b||(b=Object(S.a)(["\n  text-shadow: 1px 1px 1px black;\n  font-size: 4em;\n"]))),D=y.a.p(h||(h=Object(S.a)(["\n  text-shadow: 1px 1px 1px black;\n  font-size: 2em;\n"]))),G=y.a.p(O||(O=Object(S.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  top: 10;\n  color: var(--error-color);\n  padding: 1em;\n  background-color: white;\n  border-radius: 1em;\n"]))),q=function(n){var e=n.setStudents,t=Object(x.useState)(null),c=Object(v.a)(t,2),r=c[0],i=c[1];return Object(N.jsxs)(N.Fragment,{children:[r&&Object(N.jsx)(G,{children:r}),Object(N.jsxs)(T,{children:[Object(N.jsx)(V,{children:"Student Random"}),Object(N.jsx)(D,{children:"Load your team CSV here"}),Object(N.jsx)(R.a,{onFileLoaded:function(n){if(i(null),!n[0].includes("firstname","lastname"))return i("bad CSV");var t=n.filter((function(n,e){return 0!==e&&""!==n[0]})).map((function(n){return"".concat(n[0]," ").concat(n[1])}));e(t)}})]})]})},A=function(){var n=Object(x.useState)(JSON.parse(localStorage.getItem("students"))),e=Object(v.a)(n,2),t=e[0],c=e[1];return Object(x.useEffect)((function(){t?localStorage.setItem("students",JSON.stringify(t)):localStorage.removeItem("students")}),[t]),t?Object(N.jsx)(B,{students:t,setStudents:c}):Object(N.jsx)(q,{setStudents:c})};t(25);p.a.render(Object(N.jsx)(m.a.StrictMode,{children:Object(N.jsx)(A,{})}),document.getElementById("root")),g()}},[[26,1,2]]]);
//# sourceMappingURL=main.c352a926.chunk.js.map