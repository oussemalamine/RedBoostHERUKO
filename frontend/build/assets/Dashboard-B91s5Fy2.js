import{r as h,_ as J,R as p,a as B,c as F,P as l,b as L,h as d,j as e,L as b}from"./index-C20-YBnv.js";import"./index-C0EUhzSb.js";import{c as x}from"./index.es-DrwUOC1o.js";import{a as v,b as W}from"./index.esm-DRm8HrSj.js";import{C as R,a as g}from"./CRow-BDEUIwbS.js";import{C as T,a as D}from"./CCardBody-oFZzi9ow.js";import{e as y,f,g as j,h as t,i as Z}from"./DefaultLayout-GwGda1gC.js";import{g as s}from"./getStyle-JCh7QGcO.js";import{i as H}from"./user-D27XD59X.js";import{C as O}from"./CCardHeader-BlP5R1mp.js";import{C as P,a as V,b as w,c as n,d as U,e as c}from"./CTable-DpZJIHAJ.js";import"./chart-C4pU69U9.js";import"./isObject-BvcBn54A.js";import"./cil-user-Ddrdy7PS.js";var u=h.forwardRef(function(a,r){var o,A=a.action,N=a.chart,M=a.className,m=a.color,i=a.title,k=a.value,E=J(a,["action","chart","className","color","title","value"]);return p.createElement(T,B({className:F((o={},o["bg-".concat(m)]=m,o["text-white"]=m,o),M)},E,{ref:r}),p.createElement(D,{className:"pb-0 d-flex justify-content-between align-items-start"},p.createElement("div",null,k&&p.createElement("div",{className:"fs-4 fw-semibold"},k),i&&p.createElement("div",null,i)),A),N)});u.propTypes={action:l.node,chart:l.oneOfType([l.string,l.node]),className:l.string,color:L,title:l.oneOfType([l.string,l.node]),value:l.oneOfType([l.string,l.node,l.number])};u.displayName="CWidgetStatsA";var C=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"],z=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z' class='ci-primary'/>"];l.string,l.bool;const S=({className:a})=>{const r=h.useRef(null),o=h.useRef(null),A=d(i=>i.entrepreneurs.entrepreneurs),N=d(i=>i.programsSlice.programs),M=d(i=>i.sessionsSlice.sessions),m=d(i=>i.usersSlice.users);return h.useEffect(()=>{const i=()=>{r.current&&setTimeout(()=>{r.current.data.datasets[0].pointBackgroundColor=s("--cui-primary"),r.current.update()}),o.current&&setTimeout(()=>{o.current.data.datasets[0].pointBackgroundColor=s("--cui-info"),o.current.update()})};return document.documentElement.addEventListener("ColorSchemeChange",i),()=>{document.documentElement.removeEventListener("ColorSchemeChange",i)}},[]),e.jsxs(R,{className:a,xs:{gutter:4},children:[e.jsx(g,{sm:6,xl:4,xxl:3,children:e.jsx(b,{to:"/statistics/users",style:{textDecoration:"none"},children:e.jsx(u,{color:"primary",value:m.length,title:"Users",action:e.jsxs(y,{alignment:"end",children:[e.jsx(f,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(x,{icon:C})}),e.jsxs(j,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(v,{ref:r,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:s("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(g,{sm:6,xl:4,xxl:3,children:e.jsx(b,{to:"/Dash/statistics/entrepreneurs",style:{textDecoration:"none"},children:e.jsx(u,{color:"info",value:A.length,title:"Entrepreneurs",action:e.jsxs(y,{alignment:"end",children:[e.jsx(f,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(x,{icon:C})}),e.jsxs(j,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(v,{ref:o,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:s("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(g,{sm:6,xl:4,xxl:3,children:e.jsx(b,{to:"/Dash/statistics/programs",style:{textDecoration:"none"},children:e.jsx(u,{color:"warning",value:N.length,title:"Programs",action:e.jsxs(y,{alignment:"end",children:[e.jsx(f,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(x,{icon:C})}),e.jsxs(j,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(v,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(g,{sm:6,xl:4,xxl:3,children:e.jsx(b,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(u,{color:"danger",value:M.length,title:"Sessions",action:e.jsxs(y,{alignment:"end",children:[e.jsx(f,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(x,{icon:C})}),e.jsxs(j,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(W,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})})]})};S.propTypes={className:l.string};const I=()=>{const a=h.useRef(null);d(o=>o.entrepreneurs.entrepreneurs),h.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{a.current&&setTimeout(()=>{a.current.options.scales.x.grid.borderColor=s("--cui-border-color-translucent"),a.current.options.scales.x.grid.color=s("--cui-border-color-translucent"),a.current.options.scales.x.ticks.color=s("--cui-body-color"),a.current.options.scales.y.grid.borderColor=s("--cui-border-color-translucent"),a.current.options.scales.y.grid.color=s("--cui-border-color-translucent"),a.current.options.scales.y.ticks.color=s("--cui-body-color"),a.current.update()})})},[a]);const r=()=>Math.round(Math.random()*100);return e.jsx(e.Fragment,{children:e.jsx(v,{ref:a,style:{height:"300px",marginTop:"40px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:`rgba(${s("--cui-info-rgb")}, .1)`,borderColor:s("--cui-info"),pointHoverBackgroundColor:s("--cui-info"),borderWidth:2,data:[r(),r(),r(),r(),r(),r(),r()],fill:!0},{label:"My Second dataset",backgroundColor:"transparent",borderColor:s("--cui-success"),pointHoverBackgroundColor:s("--cui-success"),borderWidth:2,data:[r(),r(),r(),r(),r(),r(),r()]},{label:"My Third dataset",backgroundColor:"transparent",borderColor:s("--cui-danger"),pointHoverBackgroundColor:s("--cui-danger"),borderWidth:1,borderDash:[8,5],data:[65,65,65,65,65,65,65]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:s("--cui-border-color-translucent"),drawOnChartArea:!1},ticks:{color:s("--cui-body-color")}},y:{beginAtZero:!0,border:{color:s("--cui-border-color-translucent")},grid:{color:s("--cui-border-color-translucent")},max:250,ticks:{color:s("--cui-body-color"),maxTicksLimit:5,stepSize:Math.ceil(250/5)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})})},oe=()=>{const a=d(r=>r.usersSlice.users);return console.log("users : ",a),e.jsxs(e.Fragment,{children:[e.jsx(S,{users:a,className:"mb-4"}),e.jsx(R,{children:e.jsx(g,{xs:!0,children:e.jsxs(T,{className:"mb-4",children:[e.jsx(O,{children:"Online Users"}),e.jsx(D,{children:e.jsxs(P,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[e.jsx(V,{className:"text-nowrap",children:e.jsxs(w,{children:[e.jsx(n,{className:"bg-body-tertiary text-center",children:e.jsx(x,{icon:z})}),e.jsx(n,{className:"bg-body-tertiary",children:"User"}),e.jsx(n,{className:"bg-body-tertiary text-center",children:"Birthday"}),e.jsx(n,{className:"bg-body-tertiary",children:"Email"}),e.jsx(n,{className:"bg-body-tertiary text-center",children:"Phone"}),e.jsx(n,{className:"bg-body-tertiary",children:"Role"})]})}),e.jsx(U,{children:a.map((r,o)=>e.jsxs(w,{children:[e.jsx(c,{className:"text-center",children:e.jsx(Z,{size:"md",src:r.image.length>0?r.image:H,status:"success"})}),e.jsx(c,{children:e.jsx("div",{children:r.username})}),e.jsx(c,{className:"text-center",children:r.birthday}),e.jsx(c,{children:r.email}),e.jsx(c,{className:"text-center",children:r.phone}),e.jsx(c,{children:e.jsx("div",{className:"fw-semibold text-nowrap",children:r.role})})]},o))})]})})]})})}),e.jsx(I,{})]})};export{oe as default};
