(this.webpackJsonpps1_pref=this.webpackJsonpps1_pref||[]).push([[0],{148:function(e,t,n){},194:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(30),a=n.n(r),i=(n(194),n(8)),s=n(7),j=(n(148),n(324)),o=n(320),l=n(327),d=n(77),b=n(326),h=n(325),u=n(44),O=n(322),x=n(328),f=n(329),p=n(330),m=n(331),g=n(332),y=n(333),A=n(334),S=n(132),C=n(335),k=n(171),v=n.n(k),E=n(141),I=n(323),w=n(319),P=n(321),T=n(10);function L(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(["Sphagetti Code"]),j=Object(s.a)(i,2),o=j[0],l=j[1],d=[{title:"Name",dataIndex:"name",key:"name",render:function(t){return Object(T.jsx)("span",{onClick:function(){return function(t){a(!0),e.data.map((function(e){e.name===t&&l(e.projects)})),console.log(e)}(t)},children:t})}},{title:"Industry",dataIndex:"industry",key:"industry"},{title:"Location",dataIndex:"location",key:"location"},{title:"Branches",dataIndex:"branches",key:"branches",render:function(e){return Object(T.jsx)("div",{children:e.map((function(e){var t="pink";return"A7"===e&&(t="geekblue"),"A3"===e&&(t="gold"),"A8"===e&&(t="lime"),"AA"===e&&(t="green"),"Any"===e&&(t="cyan"),"A4"===e&&(t="orange"),"A1"===e&&(t="red"),"A2"===e&&(t="magenta"),Object(T.jsx)(h.a,{color:t,children:e.toUpperCase()},e)}))})}}],b=["#ff4d4f","#ffd666","#ffc53d","#ffec3d","#f759ab","#9254de","#0050b3","#ffa940","#ffc53d","#bae637","#52c41a","#006d75"];return Object(T.jsxs)("div",{children:[Object(T.jsx)(I.a,{title:"Project Description",visible:r,onOk:function(){a(!1)},onCancel:function(){a(!1)},children:Object(T.jsx)("div",{children:o.map((function(e,t){var n=Object.keys(e);return Object(T.jsxs)("div",{style:{textAlign:"left"},children:[Object(T.jsxs)(w.a,{orientation:"left",children:[" ",Object(T.jsxs)(h.a,{color:b[Math.floor(10*Math.random()+1)],children:["Project #",t+1]})]}),n.map((function(t){return Object(T.jsxs)("div",{children:[Object(T.jsx)("b",{children:t.toUpperCase()})," : ",e[t]]})})),Object(T.jsx)("br",{})]})}))})}),Object(T.jsx)(P.a,{columns:d,dataSource:e.data})]})}var B=n(179),N=(n(293),n(180)),M=n.n(N);function R(){return Object(T.jsx)("div",{children:Object(T.jsx)(M.a,{type:"Audio",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{marginTop:"200px"}})})}var F=n(91),H=n(33);var V=function(){var e=j.a.Search,t=o.a.Header,n=o.a.Footer,r=o.a.Sider,a=o.a.Content,k=d.a.SubMenu,I=Object(c.useState)([]),w=Object(s.a)(I,2),P=w[0],N=w[1],M=Object(c.useState)(""),V=Object(s.a)(M,2),z=V[0],U=V[1],D=Object(c.useState)([]),_=Object(s.a)(D,2),G=(_[0],_[1],Object(c.useState)([])),J=Object(s.a)(G,2),K=J[0],Y=J[1],q=Object(c.useState)(!0),Q=Object(s.a)(q,2),W=Q[0],X=Q[1],Z=Object(c.useState)("light"),$=Object(s.a)(Z,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){v.a.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json").then((function(e){N(e.data),X(!1)}))}),[]);var ne,ce=new E.a(P,{keys:["branches","industry"],tokenize:!1,threshold:.6});K.map((function(e){ne=ce.search(e)}));var re=K.length?ne.map((function(e){return e.item})):P,ae=new E.a(re,{threshold:.2,tokenize:!0,matchAllTokens:!0,keys:["name","industry","location","branches"]}).search(z),ie=z?ae.map((function(e){return e.item})):re,se=["magenta","red","orange","gold","lime","green","cyan","blue","geekblue","purple"],je=function(e){Y((function(t){return[].concat(Object(i.a)(t),[e])})),console.log(K)};return Object(T.jsx)(F.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(o.a,{children:[Object(T.jsx)(t,{style:{backgroundColor:"#f0f2F5"},children:Object(T.jsxs)(d.a,{mode:"horizontal",theme:ee,defaultSelectedKeys:["1"],children:[Object(T.jsx)(d.a.Item,{children:Object(T.jsx)(F.b,{to:"/PS1-Preference",children:Object(T.jsx)(x.a,{style:{marginLeft:"10px"}})})},"1"),Object(T.jsx)(d.a.Item,{children:Object(T.jsx)(F.b,{to:"/PS1-Preference/search-stations",children:"Search Stations"})},"2"),Object(T.jsx)(d.a.Item,{children:Object(T.jsx)(F.b,{to:"/PS1-Preference/view-preferences",children:"View Preferences"})},"3"),Object(T.jsx)(d.a.Item,{children:Object(T.jsx)(F.b,{to:"/PS1-Preference/show-stations",children:"Show Stations"})},"4"),Object(T.jsx)(d.a.Item,{children:Object(T.jsx)(b.a,{checkedChildren:Object(T.jsx)(f.a,{}),unCheckedChildren:Object(T.jsx)(p.a,{}),defaultChecked:!0,onClick:function(){return te((function(e){return"light"===e?"dark":"light"}))},style:{}})},"5")]})}),Object(T.jsxs)(o.a,{children:[Object(T.jsx)(r,{width:300,style:{marginLeft:"50px",marginTop:"92px"},className:"light",children:Object(T.jsxs)(d.a,{defaultOpenKeys:["sub1","sub2","sub3"],mode:"inline",theme:ee,children:[Object(T.jsx)(d.a.Item,{icon:Object(T.jsx)(m.a,{}),children:"Filters"},"1"),Object(T.jsx)(k,{icon:Object(T.jsx)(g.a,{}),title:"Branch",children:Object(T.jsx)("div",{style:{marginLeft:"23px"},children:["ANY","B1","B2","B3","B4","B5","AA","A1","A2","A3","A4","A5","A7","A8","C6"].map((function(e,t){return Object(T.jsx)(h.a,{onClick:function(){return je(e)},color:se[t],style:{marginBottom:"10px"},children:e},t)}))})},"sub1"),Object(T.jsx)(k,{icon:Object(T.jsx)(y.a,{}),title:"Industry",children:Object(T.jsx)("div",{style:{marginLeft:"23px"},children:["ELECTRONICS","FINANCE AND MGMT","MECHANICAL","CHEMICAL"," CEMENT","INFRASTRUCTURE","IT","COMPUTER SCIENCE","HEALTH CARE","GOVT RESEARCH LAB","STEEL","OTHERS"].map((function(e,t){return Object(T.jsx)(h.a,{color:se[t]+"-inverse",style:{marginBottom:"10px"},onClick:function(){return je(e)},children:e},t)}))})},"sub2"),Object(T.jsx)(k,{icon:Object(T.jsx)(A.a,{}),title:"Download as CSV",children:Object(T.jsx)("div",{style:{margin:"23px",marginLeft:"28px"},children:Object(T.jsx)(u.a,{type:"primary",icon:Object(T.jsx)(A.a,{}),size:"large",children:Object(T.jsx)(B.CSVLink,{data:ie,children:Object(T.jsx)("span",{style:{color:"#fff"},children:"Download as CSV"})})})})},"sub3")]})}),Object(T.jsxs)(a,{style:{padding:"20px 50px"},children:[Object(T.jsx)(e,{placeholder:"Eg: Machine Learning",width:300,size:"large",enterButton:!0,prefix:Object(T.jsx)(S.a,{}),onChange:function(e){var t=e.currentTarget,n=(void 0===t?{}:t).value;U(n)},value:z,style:{padding:"18px 0"}}),W?Object(T.jsx)(R,{}):Object(T.jsx)(H.a,{path:"/PS1-Preference/search-stations",exact:!0,component:function(){return Object(T.jsx)(L,{data:ie})}})]})]}),Object(T.jsx)(n,{children:Object(T.jsxs)(l.b,{direction:"horizontal",children:[Object(T.jsx)(C.a,{spin:"true",onClick:function(){return window.location="https://github.com/Ashish-AVS/PS1-Preference"}}),Object(T.jsx)(O.a.Text,{type:"secondary",children:"Ashish AVS"})]})})]})})})};a.a.render(Object(T.jsx)(V,{}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.1e9af5d0.chunk.js.map