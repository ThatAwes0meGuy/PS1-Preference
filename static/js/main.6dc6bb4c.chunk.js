(this.webpackJsonpps1_pref=this.webpackJsonpps1_pref||[]).push([[0],{148:function(e,t,n){},195:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(30),a=n.n(r),i=(n(195),n(8)),s=n(7),o=(n(148),n(324)),j=n(320),l=n(327),d=n(78),b=n(325),u=n(322),h=n(44),O=n(331),x=n(332),f=n(333),p=n(334),m=n(133),g=n(335),y=n(171),A=n.n(y),C=n(142),S=n(323),v=n(319),k=n(321),E=["ELECTRONICS","FINANCE AND MGMT","MECHANICAL","CHEMICAL"," CEMENT","INFRASTRUCTURE","IT","COMPUTER SCIENCE","HEALTH CARE","GOVT RESEARCH LAB","STEEL","OTHERS"],I=["magenta","red","orange","gold","lime","green","cyan","blue","geekblue","purple"],T=["ANY","B1","B2","B3","B4","B5","AA","A1","A2","A3","A4","A5","A7","A8","C6"],w=n(9);function L(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(["Sphagetti Code"]),o=Object(s.a)(i,2),j=o[0],l=o[1],d=[{title:"Name",dataIndex:"name",key:"name",render:function(t){return Object(w.jsx)("span",{onClick:function(){return function(t){a(!0),e.data.map((function(e){e.name===t&&l(e.projects)})),console.log(e)}(t)},children:t})}},{title:"Industry",dataIndex:"industry",key:"industry",render:function(e){return Object(w.jsxs)(b.a,{color:I[Math.round(10*Math.random())],children:[" ",Object(w.jsx)(u.a.Text,{children:e})]})}},{title:"Location",dataIndex:"location",key:"location"},{title:"Branches",dataIndex:"branches",key:"branches",render:function(e){return Object(w.jsx)("div",{children:e.map((function(e){var t="pink";return"A7"===e&&(t="geekblue"),"A3"===e&&(t="gold"),"A8"===e&&(t="lime"),"AA"===e&&(t="green"),"Any"===e&&(t="cyan"),"A4"===e&&(t="orange"),"A1"===e&&(t="red"),"A2"===e&&(t="magenta"),Object(w.jsx)(b.a,{color:t,children:e.toUpperCase()},e)}))})}}];return Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{title:"Project Description",visible:r,onOk:function(){a(!1)},onCancel:function(){a(!1)},children:Object(w.jsx)("div",{children:j.map((function(e,t){var n=Object.keys(e);return Object(w.jsxs)("div",{style:{textAlign:"left"},children:[Object(w.jsxs)(v.a,{orientation:"left",children:[" ",Object(w.jsxs)(b.a,{color:I[Math.floor(10*Math.random()+1)],children:["Project #",t+1]})]}),n.map((function(t){return Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:t.toUpperCase()})," : ",e[t]]})})),Object(w.jsx)("br",{})]})}))})}),Object(w.jsx)(k.a,{columns:d,dataSource:e.data})]})}var P=n(180),B=(n(295),n(181)),N=n.n(B);function M(){return Object(w.jsx)("div",{children:Object(w.jsx)(N.a,{type:"Audio",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{marginTop:"200px"}})})}var F=n(77),R=n(33),H=n(326),V=n(328),z=n(329),U=n(330),D=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(w.jsx)("div",{children:Object(w.jsx)(j.a.Header,{style:{backgroundColor:"#f0f2F5"},children:Object(w.jsxs)(d.a,{mode:"horizontal",theme:n,defaultSelectedKeys:["1"],children:[Object(w.jsx)(d.a.Item,{children:Object(w.jsx)(F.b,{to:"/PS1-Preference",children:Object(w.jsx)(V.a,{style:{marginLeft:"10px"}})})},"1"),Object(w.jsx)(d.a.Item,{children:Object(w.jsx)(F.b,{to:"/PS1-Preference/search-stations",children:"Search Stations"})},"2"),Object(w.jsx)(d.a.Item,{children:Object(w.jsx)(F.b,{to:"/PS1-Preference/view-preferences",children:"View Preferences"})},"3"),Object(w.jsx)(d.a.Item,{children:Object(w.jsx)(F.b,{to:"/PS1-Preference/show-stations",children:"Show Stations"})},"4"),Object(w.jsx)(d.a.Item,{children:Object(w.jsx)(H.a,{checkedChildren:Object(w.jsx)(z.a,{}),unCheckedChildren:Object(w.jsx)(U.a,{}),defaultChecked:!0,onClick:function(){return r((function(e){return"light"===e?"dark":"light"}))},style:{}})},"5")]})})})};var _=function(){var e=o.a.Search,t=j.a.Footer,n=j.a.Sider,r=j.a.Content,a=d.a.SubMenu,y=Object(c.useState)([]),S=Object(s.a)(y,2),v=S[0],k=S[1],B=Object(c.useState)(""),N=Object(s.a)(B,2),H=N[0],V=N[1],z=Object(c.useState)([]),U=Object(s.a)(z,2),_=U[0],G=U[1],J=Object(c.useState)(!0),K=Object(s.a)(J,2),Y=K[0],q=K[1],Q=Object(c.useState)("light"),W=Object(s.a)(Q,2),X=W[0],Z=(W[1],Object(c.useState)()),$=Object(s.a)(Z,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){A.a.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json").then((function(e){k(e.data),q(!1),oe("Ex: Machine Learning....")}))}),[]);var ne,ce=new C.a(v,{keys:["branches","industry"],tokenize:!1,threshold:.6});_.map((function(e){ne=ce.search(e)}));var re=_.length?ne.map((function(e){return e.item})):v,ae=new C.a(re,{threshold:.2,tokenize:!0,matchAllTokens:!0,keys:["name","industry","location","branches"]}).search(H),ie=H?ae.map((function(e){return e.item})):re,se=function(e){G((function(t){return[].concat(Object(i.a)(t),[e])})),console.log(_)},oe=function(e){console.log("FUNCTION CALLED");var t=0;te(""),function e(n){var c=n.split(""),r=n;setTimeout((function(){te((function(e){return e+c[t]})),++t<c.length&&e(r)}),100)}(e)};return Object(w.jsx)(F.a,{children:Object(w.jsx)("div",{children:Object(w.jsxs)(j.a,{children:[" ",Object(w.jsx)(D,{})," ",Object(w.jsxs)(j.a,{children:[Object(w.jsx)(n,{width:300,style:{marginLeft:"50px",marginTop:"92px"},className:X,children:Object(w.jsxs)(d.a,{defaultOpenKeys:["sub1","sub2","sub3"],mode:"inline",theme:X,children:[Object(w.jsx)(d.a.Item,{icon:Object(w.jsx)(O.a,{}),children:"Filters"},"1"),Object(w.jsx)(a,{icon:Object(w.jsx)(x.a,{}),title:"Branch",children:Object(w.jsx)("div",{style:{marginLeft:"23px"},children:T.map((function(e,t){return Object(w.jsx)(b.a,{onClick:function(){return se(e)},color:I[t],style:{marginBottom:"10px"},children:Object(w.jsx)(u.a.Text,{type:"secondary",children:e})},t)}))})},"sub1"),Object(w.jsx)(a,{icon:Object(w.jsx)(f.a,{}),title:"Industry",children:Object(w.jsx)("div",{style:{marginLeft:"23px"},children:E.map((function(e,t){return Object(w.jsx)(b.a,{color:I[t]+"-inverse",style:{marginBottom:"10px"},onClick:function(){return se(e)},children:e},t)}))})},"sub2"),Object(w.jsx)(a,{icon:Object(w.jsx)(p.a,{}),title:"Download as CSV",children:Object(w.jsx)("div",{style:{margin:"23px",marginLeft:"28px"},children:Object(w.jsx)(h.a,{type:"primary",icon:Object(w.jsx)(p.a,{}),size:"large",children:Object(w.jsx)(P.CSVLink,{data:ie,children:Object(w.jsx)("span",{style:{color:"#fff"},children:"Download as CSV"})})})})},"sub3")]})}),Object(w.jsxs)(r,{style:{padding:"20px 50px"},children:[Object(w.jsx)(e,{placeholder:ee,width:300,size:"large",enterButton:!0,prefix:Object(w.jsx)(m.a,{}),onChange:function(e){var t=e.currentTarget,n=(void 0===t?{}:t).value;V(n)},value:H,style:{padding:"18px 0"}}),Y?Object(w.jsx)(M,{}):Object(w.jsx)(R.a,{path:"/PS1-Preference/search-stations",exact:!0,component:function(){return Object(w.jsx)(L,{data:ie})}})]})]}),Object(w.jsx)(t,{children:Object(w.jsxs)(l.b,{direction:"horizontal",children:[Object(w.jsx)(g.a,{spin:"true",onClick:function(){return window.location="https://github.com/Ashish-AVS/PS1-Preference"}}),Object(w.jsx)(u.a.Text,{type:"secondary",children:"Ashish AVS"})]})})]})})})};a.a.render(Object(w.jsx)(_,{}),document.getElementById("root"))}},[[317,1,2]]]);
//# sourceMappingURL=main.6dc6bb4c.chunk.js.map