import{r as t,R as v,c as k,P as s,_ as S,a as I,u as G,T as _,j as e,L as M}from"./index-D7i1GXSH.js";import{a as P}from"./index.esm-BmC2O5Zx.js";import{a as A,c as O}from"./index.esm-BQoNxqCC.js";import{C as T,a as f}from"./CRow-BLghyscU.js";import{C as q}from"./CWidgetStatsA-Deni12l1.js";import{h as Q,i as X,j as Y}from"./DefaultLayout-CpDzK-wa.js";import{g as Z}from"./getTransitionDurationFromElement-Cpu4p4hx.js";import{C as E,a as w,b as j,d as o,c as K,e as b}from"./CTable-Dr1RvjBQ.js";import{g as W}from"./getStyle-JCh7QGcO.js";import"./chart-BCuMZI75.js";import"./CCardBody-VsFDQUom.js";import"./isObject-BFHkbZTq.js";import"./cil-user-Ddrdy7PS.js";var D=t.createContext({}),F=t.forwardRef(function(a,p){var m=a.children,u=a.activeItemKey,n=a.className,h=a.onChange,c=t.useId(),d=t.useState(u),r=d[0],i=d[1];return t.useEffect(function(){r&&h&&h(r)},[r]),v.createElement(D.Provider,{value:{_activeItemKey:r,setActiveItemKey:i,id:c}},v.createElement("div",{className:k("tabs",n),ref:p},m))});F.propTypes={activeItemKey:s.oneOfType([s.number,s.string]).isRequired,children:s.node,className:s.string,onChange:s.func};F.displayName="CTabs";var N=t.forwardRef(function(a,p){var m=a.children,u=a.className,n=a.itemKey,h=S(a,["children","className","itemKey"]),c=t.useContext(D),d=c._activeItemKey,r=c.setActiveItemKey,i=c.id,y=function(){return n===d};return v.createElement("button",I({className:k("nav-link",{active:y()},u),id:"".concat(i).concat(n,"-tab"),onClick:function(){return r(n)},onFocus:function(){return r(n)},role:"tab",tabIndex:y()?0:-1,type:"button","aria-controls":"".concat(i).concat(n,"-tab-pane"),"aria-selected":y(),ref:p},h),m)});N.propTypes={children:s.node,className:s.string,disabled:s.bool,itemKey:s.oneOfType([s.number,s.string]).isRequired};N.displayName="CTab";var R=t.forwardRef(function(a,p){var m=a.children,u=a.className,n=a.itemKey,h=a.onHide,c=a.onShow,d=a.transition,r=d===void 0?!0:d,i=a.visible,y=S(a,["children","className","itemKey","onHide","onShow","transition","visible"]),l=t.useContext(D),C=l._activeItemKey,g=l.id,x=t.useRef(),U=G(p,x),L=t.useState(i||C===n),B=L[0],J=L[1];return t.useEffect(function(){i!==void 0&&J(i)},[i]),t.useEffect(function(){J(C===n)},[C]),v.createElement(_,{in:B,nodeRef:x,onEnter:c,onExit:h,timeout:x.current?Z(x.current):0},function(V){return v.createElement("div",I({className:k("tab-pane",{active:B,fade:r,show:V==="entered"},u),id:"".concat(g).concat(n,"-tab-pane"),role:"tabpanel","aria-labelledby":"".concat(g).concat(n,"-tab"),tabIndex:0,ref:U},y),m)})});R.propTypes={children:s.node,className:s.string,itemKey:s.oneOfType([s.number,s.string]).isRequired,onHide:s.func,onShow:s.func,transition:s.bool,visible:s.bool};R.displayName="CTabPanel";var H=t.forwardRef(function(a,p){var m,u=a.children,n=a.className,h=a.layout,c=a.variant,d=S(a,["children","className","layout","variant"]),r=t.useRef(null),i=G(p,r),y=function(l){if(r.current!==null&&(l.key==="ArrowDown"||l.key==="ArrowUp"||l.key==="ArrowLeft"||l.key==="ArrowRight"||l.key==="Home"||l.key==="End")){l.preventDefault();var C=l.target,g=Array.from(r.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)")),x=void 0;l.key==="Home"||l.key==="End"?x=l.key==="End"?g.at(-1):g[0]:x=Q(g,C,l.key==="ArrowDown"||l.key==="ArrowRight",!0),x&&x.focus({preventScroll:!0})}};return v.createElement("div",I({className:k("nav",(m={},m["nav-".concat(h)]=h,m["nav-".concat(c)]=c,m),n),role:"tablist",onKeyDown:y,ref:i},d),u)});H.propTypes={children:s.node,className:s.string,layout:s.oneOf(["fill","justified"]),variant:s.oneOf(["pills","tabs","underline","underline-border"])};H.displayName="CTabList";var z=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"];function pe(){const a=t.useRef(null),p=t.useRef(null),m={"Empower Her":"danger",Tech:"success",Entrepreneurship:"warning",Green:"info"},u=({category:r})=>{const i=m[r];return e.jsx(Y,{color:i,children:r})},n=[{email:"example1@example.com",target:"Target 1",category:"Tech"},{email:"example2@example.com",target:"Target 2",category:"Entrepreneurship"},{email:"example3@example.com",target:"Target 3",category:"Green"},{email:"example4@example.com",target:"Target 4",category:"Empower Her"},{email:"example5@example.com",target:"Target 5",category:"Entrepreneurship"}],h=[{email:"example1@example.com",theme:"Target 1",Date:"02/03/2024 at 10am"},{email:"example2@example.com",theme:"Target 2",Date:"02/03/2024 at 10am"},{email:"example3@example.com",theme:"Target 3",Date:"02/03/2024 at 10am"},{email:"example4@example.com",theme:"Target 4",Date:"02/03/2024 at 10am"},{email:"example5@example.com",theme:"Target 5",Date:"02/03/2024 at 10am"}],c=()=>h.map((r,i)=>e.jsxs(j,{children:[e.jsx(b,{children:r.email}),e.jsx(b,{children:r.theme}),e.jsx(b,{children:r.Date})]},i)),d=()=>n.map((r,i)=>e.jsxs(j,{children:[e.jsx(b,{children:r.email}),e.jsx(b,{children:r.target}),e.jsx(b,{children:e.jsx(u,{category:r.category})}),e.jsx(b,{children:e.jsx(A,{color:"primary",size:"sm",children:"Approve"})})]},i));return t.useEffect(()=>{const r=()=>{a.current&&setTimeout(()=>{a.current.data.datasets[0].backgroundColor=W("--cui-primary")||"#FF6384",a.current.update()}),p.current&&setTimeout(()=>{p.current.data.datasets[0].backgroundColor=W("--cui-info")||"#36A2EB",p.current.update()})};return document.documentElement.addEventListener("ColorSchemeChange",r),()=>{document.documentElement.removeEventListener("ColorSchemeChange",r)}},[]),e.jsx("div",{children:e.jsxs(T,{children:[e.jsxs(f,{children:[e.jsx(T,{children:e.jsx(f,{children:e.jsxs("div",{className:"m-4 d-flex justify-content-end",children:[e.jsx(M,{to:"#",children:e.jsx(A,{color:"primary",className:"m-2",children:"Customize email"})}),e.jsx(M,{to:"#",children:e.jsx(A,{color:"secondary",className:"m-2",children:"Review themes"})})]})})}),e.jsx(T,{children:e.jsx(f,{children:e.jsxs(T,{children:[e.jsx(f,{sm:6,children:e.jsx("div",{className:"mb-4",children:e.jsx(q,{className:"mb-4",color:"info",value:e.jsxs(e.Fragment,{children:["9.000"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",e.jsx(O,{icon:z}),")"]})]}),title:"Emails sent",chart:e.jsx(P,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:"#39f",data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(f,{sm:6,children:e.jsx(q,{className:"mb-4",color:"warning",value:e.jsxs(e.Fragment,{children:["+10"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(0.9% ",e.jsx(O,{icon:z}),")"]})]}),title:"New subscribers",chart:e.jsx(P,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})})]})})}),e.jsx(T,{children:e.jsx(f,{children:e.jsxs(F,{activeItemKey:1,children:[e.jsxs(H,{variant:"underline",children:[e.jsx(N,{"aria-controls":"home-tab-pane",itemKey:1,children:"Suggested Emails"}),e.jsx(N,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Suggested Newspaper"}),e.jsx(N,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Suggested Themes"})]}),e.jsxs(X,{children:[e.jsx(R,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:e.jsxs(E,{responsive:!0,hover:!0,align:"middle",children:[e.jsx(w,{color:"",children:e.jsxs(j,{children:[e.jsx(o,{scope:"col",children:"Email"}),e.jsx(o,{scope:"col",children:"Target"}),e.jsx(o,{scope:"col",children:"Category"}),e.jsx(o,{scope:"col"})]})}),e.jsx(K,{children:d()})]})}),e.jsx(R,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:e.jsxs(E,{responsive:!0,hover:!0,align:"middle",children:[e.jsx(w,{color:"",children:e.jsxs(j,{children:[e.jsx(o,{scope:"col",children:"Email"}),e.jsx(o,{scope:"col",children:"Target"}),e.jsx(o,{scope:"col",children:"Category"}),e.jsx(o,{scope:"col"})]})}),e.jsx(K,{children:d()})]})}),e.jsx(R,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:e.jsxs(E,{responsive:!0,hover:!0,align:"middle",children:[e.jsx(w,{color:"",children:e.jsxs(j,{children:[e.jsx(o,{scope:"col",children:"Email"}),e.jsx(o,{scope:"col",children:"Target"}),e.jsx(o,{scope:"col",children:"Category"}),e.jsx(o,{scope:"col"})]})}),e.jsx(K,{children:d()})]})})]})]})})})]}),e.jsx(f,{children:e.jsxs(E,{responsive:!0,hover:!0,align:"middle",children:[e.jsx(w,{color:"",children:e.jsxs(j,{children:[e.jsx(o,{scope:"col",children:" Scheduled Email"}),e.jsx(o,{scope:"col",children:"Theme"}),e.jsx(o,{scope:"col",children:"Date"})]})}),e.jsxs(K,{children:[c(),c(),c()]})]})})]})})}export{pe as default};
