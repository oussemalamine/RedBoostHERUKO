import{r as h,_ as J,R as u,a as F,c as P,P as o,h as Z,b as m,j as e,L as f,d as E}from"./index-CaoPphVw.js";import"./index-BYt83WlT.js";import{a as g,C as V}from"./index.es-D001lsvv.js";import{a as T,b as O}from"./index.esm-D5Zh4LTc.js";import{C as M,a as x}from"./CRow-CsyTaCJ1.js";import{C as j,a as y}from"./CCardBody-BS3tVFrP.js";import{f as C,g as v,h as D,i as l,j as U,e as W}from"./DefaultLayout-CstajWS4.js";import{g as N}from"./getStyle-JCh7QGcO.js";import{i as H}from"./user-D27XD59X.js";import{F as I,i as _}from"./index-C5AnkFp0.js";import{C as S}from"./CCardHeader-NJI0z8DS.js";import{C as z,a as G,b as R,c as A,d as q,e as k}from"./CTable-B4YN4glw.js";import"./chart-C4pU69U9.js";import"./isObject-CfS9Bl6f.js";import"./ProgramsStatistics-Cc8W5tJx.js";var p=h.forwardRef(function(r,t){var n,a=r.action,d=r.chart,c=r.className,s=r.color,i=r.title,b=r.value,B=J(r,["action","chart","className","color","title","value"]);return u.createElement(j,F({className:P((n={},n["bg-".concat(s)]=s,n["text-white"]=s,n),c)},B,{ref:t}),u.createElement(y,{className:"pb-0 d-flex justify-content-between align-items-start"},u.createElement("div",null,b&&u.createElement("div",{className:"fs-4 fw-semibold"},b),i&&u.createElement("div",null,i)),a),d)});p.propTypes={action:o.node,chart:o.oneOfType([o.string,o.node]),className:o.string,color:Z,title:o.oneOfType([o.string,o.node]),value:o.oneOfType([o.string,o.node,o.number])};p.displayName="CWidgetStatsA";var w=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"],K=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z' class='ci-primary'/>"];const L=({className:r})=>{const t=h.useRef(null),n=h.useRef(null),a=m(i=>i.entrepreneurs.entrepreneurs),d=m(i=>i.programsSlice.programs),c=m(i=>i.sessionsSlice.sessions),s=m(i=>i.usersSlice.users);return h.useEffect(()=>{const i=()=>{t.current&&setTimeout(()=>{t.current.data.datasets[0].pointBackgroundColor=N("--cui-primary"),t.current.update()}),n.current&&setTimeout(()=>{n.current.data.datasets[0].pointBackgroundColor=N("--cui-info"),n.current.update()})};return document.documentElement.addEventListener("ColorSchemeChange",i),()=>{document.documentElement.removeEventListener("ColorSchemeChange",i)}},[]),e.jsxs(M,{className:r,xs:{gutter:4},children:[e.jsx(x,{sm:6,xl:4,xxl:3,children:e.jsx(f,{to:"/statistics/users",style:{textDecoration:"none"},children:e.jsx(p,{color:"primary",value:s.length,title:"Users",action:e.jsxs(C,{alignment:"end",children:[e.jsx(v,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(g,{icon:w})}),e.jsxs(D,{children:[e.jsx(l,{children:"Action"}),e.jsx(l,{children:"Another action"}),e.jsx(l,{children:"Something else here..."}),e.jsx(l,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(T,{ref:t,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:N("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(x,{sm:6,xl:4,xxl:3,children:e.jsx(f,{to:"/Dash/statistics/entrepreneurs",style:{textDecoration:"none"},children:e.jsx(p,{color:"info",value:a.length,title:"Entrepreneurs",action:e.jsxs(C,{alignment:"end",children:[e.jsx(v,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(g,{icon:w})}),e.jsxs(D,{children:[e.jsx(l,{children:"Action"}),e.jsx(l,{children:"Another action"}),e.jsx(l,{children:"Something else here..."}),e.jsx(l,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(T,{ref:n,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:N("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(x,{sm:6,xl:4,xxl:3,children:e.jsx(f,{to:"/Dash/statistics/programs",style:{textDecoration:"none"},children:e.jsx(p,{color:"warning",value:d.length,title:"Programs",action:e.jsxs(C,{alignment:"end",children:[e.jsx(v,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(g,{icon:w})}),e.jsxs(D,{children:[e.jsx(l,{children:"Action"}),e.jsx(l,{children:"Another action"}),e.jsx(l,{children:"Something else here..."}),e.jsx(l,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(T,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(x,{sm:6,xl:4,xxl:3,children:e.jsx(f,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(p,{color:"danger",value:c.length,title:"Sessions",action:e.jsxs(C,{alignment:"end",children:[e.jsx(v,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(g,{icon:w})}),e.jsxs(D,{children:[e.jsx(l,{children:"Action"}),e.jsx(l,{children:"Another action"}),e.jsx(l,{children:"Something else here..."}),e.jsx(l,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(O,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})})]})};L.propTypes={className:o.string};const Q=()=>{const r=m(a=>a.userData.userData),[t,n]=h.useState([]);return h.useEffect(()=>{E.post("/tasksByUser",{userId:r._id}).then(a=>{const d=a.data.map(c=>{let s;switch(c.status){case"completed":s="green";break;case"inProgress":s="blue";break;case"notStarted":s="gray";break;case"cancelled":s="red";break;case"expired":s="orange";break;case"valid":s="purple";break;default:s="black"}return{title:c.taskName,start:c.startDate,end:c.endDate,color:s}});n(d)}).catch(a=>{console.error("Error fetching tasks",a)})},[r]),e.jsx(I,{plugins:[_],initialView:"dayGridMonth",events:t})},X=()=>{const r=m(a=>a.userData.userData),[t,n]=h.useState([]);return h.useEffect(()=>{E.post("/tasksByUser",{userId:r._id}).then(a=>{const d=a.data.map(c=>{let s;switch(c.status){case"completed":s="success";break;case"inProgress":s="primary";break;case"notStarted":s="secondary";break;case"cancelled":s="danger";break;case"expired":s="warning";break;case"valid":s="info";break;default:s="dark"}const i=new Date(c.startDate).toLocaleDateString(),b=new Date(c.endDate).toLocaleDateString();return{...c,startDate:i,endDate:b,color:s}});n(d)}).catch(a=>{console.error("Error fetching tasks",a)})},[r]),e.jsx(V,{children:e.jsx(M,{children:t.map((a,d)=>e.jsx(x,{xs:"12",sm:"6",md:"4",className:"mb-4",children:e.jsxs(j,{children:[e.jsxs(S,{children:[a.taskName,e.jsx(U,{color:a.color,className:"float-right",children:a.status})]}),e.jsxs(y,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Start Date:"})," ",a.startDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End Date:"})," ",a.endDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",a.description]})]})]})},d))})})},xe=()=>{const r=m(t=>t.usersSlice.users);return console.log("users : ",r),e.jsxs(e.Fragment,{children:[e.jsx(L,{users:r,className:"mb-4"}),e.jsxs(M,{children:[e.jsx(x,{xs:6,children:e.jsxs(j,{className:"mb-4",children:[e.jsx(S,{children:"Online Users"}),e.jsx(y,{children:e.jsxs(z,{align:"middle",className:"mb-0 border table-sm",hover:!0,responsive:!0,children:[e.jsx(G,{className:"text-nowrap",children:e.jsxs(R,{children:[e.jsx(A,{className:"bg-body-tertiary text-center",children:e.jsx(g,{icon:K})}),e.jsx(A,{className:"bg-body-tertiary",children:"Name"}),e.jsx(A,{className:"bg-body-tertiary text-center",children:"Points"}),e.jsx(A,{className:"bg-body-tertiary",children:"Role"})]})}),e.jsx(q,{children:r.map((t,n)=>e.jsxs(R,{children:[e.jsx(k,{className:"text-center",children:e.jsx(W,{size:"md",src:t.image.length>0?t.image:H,status:"success"})}),e.jsx(k,{children:e.jsx("div",{children:t.username})}),e.jsx(k,{className:"text-center",children:t.exp}),e.jsx(k,{children:e.jsx("div",{className:"fw-semibold text-nowrap",children:t.role})})]},n))})]})})]})}),e.jsxs(x,{xs:6,children:[e.jsxs(j,{className:"mb-4",children:[e.jsx(S,{children:"Calendar"}),e.jsx(y,{children:e.jsx(Q,{})})]}),e.jsxs(j,{className:"mb-4",children:[e.jsx(S,{children:"Task List"}),e.jsx(y,{children:e.jsx(X,{})})]})]})]})]})};export{xe as default};