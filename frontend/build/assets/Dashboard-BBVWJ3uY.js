import{P,r as u,h as g,j as e,L as c,g as E,o as F}from"./index-C8diSxJB.js";import{c as b,b as L}from"./index.esm-14PgRZM7.js";import U from"./UserDetails-D2qr3CYg.js";import{u as O}from"./user-B3U43cFQ.js";import{a as S,b as y}from"./index.esm-BNEz7vpG.js";import{C as J,a as i}from"./CRow-BLE2Ph6C.js";import{C as x}from"./CWidgetStatsA-BNOny7RA.js";import{k as f,l as j,m as C,n as t,j as Z,g as H}from"./DefaultLayout-C4vGQpA-.js";import{g as A}from"./getStyle-JCh7QGcO.js";import{F as V,i as W}from"./index-DlbWxFkW.js";import{C as w,a as M}from"./CCardBody-CrmRxOrF.js";import{C as N}from"./CCardHeader-B8sPIN-d.js";import{C as _,a as G,b as T,c as D,d as I,e as v}from"./CTable-5MXWBY_Y.js";import"./chart-BCuMZI75.js";import"./isObject-gWhhM0FN.js";import"./cil-user-Ddrdy7PS.js";var k=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"],$=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z' class='ci-primary'/>"];const R=({className:d})=>{const n=u.useRef(null),o=u.useRef(null),m=g(r=>r.entrepreneurs.entrepreneurs),p=g(r=>r.programsSlice.programs),a=g(r=>r.sessionsSlice.sessions),s=g(r=>r.usersSlice.users);return u.useEffect(()=>{const r=()=>{n.current&&setTimeout(()=>{n.current.data.datasets[0].pointBackgroundColor=A("--cui-primary"),n.current.update()}),o.current&&setTimeout(()=>{o.current.data.datasets[0].pointBackgroundColor=A("--cui-info"),o.current.update()})};return document.documentElement.addEventListener("ColorSchemeChange",r),()=>{document.documentElement.removeEventListener("ColorSchemeChange",r)}},[]),e.jsxs(J,{className:d,xs:{gutter:4},children:[e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/statistics/users",style:{textDecoration:"none"},children:e.jsx(x,{color:"primary",value:s.length,title:"Users",action:e.jsxs(f,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(b,{icon:k})}),e.jsxs(C,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(S,{ref:n,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:A("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/entrepreneurs",style:{textDecoration:"none"},children:e.jsx(x,{color:"info",value:m.length,title:"Entrepreneurs",action:e.jsxs(f,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(b,{icon:k})}),e.jsxs(C,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(S,{ref:o,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:A("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/startupsAccelerated",style:{textDecoration:"none"},children:e.jsx(x,{color:"warning",value:p.length,title:"Startups Accelerated",action:e.jsxs(f,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(b,{icon:k})}),e.jsxs(C,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(S,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"danger",value:a.length,title:"Startups Accelerated",action:e.jsxs(f,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(b,{icon:k})}),e.jsxs(C,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"danger",value:a.length,title:"Entrepreneurs Trained",action:e.jsxs(f,{alignment:"end",children:[e.jsx(j,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(b,{icon:k})}),e.jsxs(C,{children:[e.jsx(t,{children:"Action"}),e.jsx(t,{children:"Another action"}),e.jsx(t,{children:"Something else here..."}),e.jsx(t,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"danger",value:a.length,title:"Applications",chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"secondary",value:a.length,title:"People reached on social media",chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:6,xl:4,xxl:3,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"success",value:a.length,title:"Partners",chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:12,xl:8,xxl:6,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"success",value:a.length,title:"Partners",chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})}),e.jsx(i,{sm:12,xl:8,xxl:6,children:e.jsx(c,{to:"/Dash/statistics/sessions",style:{textDecoration:"none"},children:e.jsx(x,{color:"primary",value:a.length,title:"Partners",chart:e.jsx(y,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawTicks:!1,drawBorder:!1},ticks:{display:!1}}}}})})})})]})};R.propTypes={className:P.string};const z=()=>{const d=g(s=>s.userData.userData),[n,o]=u.useState([]),m=E();u.useEffect(()=>{F.post("/tasksByUser",{userId:d._id}).then(s=>{const r=s.data.map(l=>{let h;switch(l.status){case"completed":h="green";break;case"inProgress":h="blue";break;case"notStarted":h="gray";break;case"cancelled":h="red";break;case"expired":h="orange";break;case"valid":h="purple";break;default:h="black"}return{id:l._id,title:l.taskName,start:l.startDate,end:l.endDate,color:h,extendedProps:{description:l.description,status:l.status}}});o(r)}).catch(s=>{console.error("Error fetching tasks",s)})},[d]);const p=s=>{const r=s.event.id;m(`/dash/${r}`)},a=s=>e.jsx("div",{className:"event-content",children:e.jsx("b",{children:s.event.title})});return e.jsx("div",{className:"fullcalendar-container",children:e.jsx(V,{plugins:[W],initialView:"dayGridMonth",events:n,eventClick:p,eventContent:a,eventMouseEnter:s=>{s.el.style.cursor="pointer",s.el.style.transition="transform 0.2s, box-shadow 0.2s",s.el.style.transform="scale(1.05)",s.el.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"},eventMouseLeave:s=>{s.el.style.transform="none",s.el.style.boxShadow="none"},headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,dayGridWeek,dayGridDay"},height:"auto",contentHeight:"auto"})})},Y=()=>{const d=g(a=>a.userData.userData),[n,o]=u.useState([]);u.useEffect(()=>{F.post("/tasksByUser",{userId:d._id}).then(a=>{const s=a.data.map(r=>{let l;switch(r.status){case"completed":l="success";break;case"inProgress":l="primary";break;case"notStarted":l="secondary";break;case"cancelled":l="danger";break;case"expired":l="warning";break;case"valid":l="info";break;default:l="dark"}const h=new Date(r.startDate).toLocaleDateString(),B=new Date(r.endDate).toLocaleDateString();return{...r,startDate:h,endDate:B,color:l}});o(s)}).catch(a=>{console.error("Error fetching tasks",a)})},[d]);const m={cursor:"pointer",transition:"transform 0.2s, box-shadow 0.2s"},p={transform:"translateY(-5px)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"};return e.jsx(L,{children:e.jsx(J,{children:n.map((a,s)=>e.jsx(i,{xs:"12",sm:"6",md:"4",className:"mb-4",children:e.jsx(c,{to:`/Dash/${a._id}`,style:{textDecoration:"none"},onClick:()=>console.log("Clicked Task ID:",a._id),children:e.jsxs(w,{style:m,onMouseEnter:r=>{r.currentTarget.style.transform=p.transform,r.currentTarget.style.boxShadow=p.boxShadow},onMouseLeave:r=>{r.currentTarget.style.transform="none",r.currentTarget.style.boxShadow="none"},children:[e.jsxs(N,{children:[a.taskName,e.jsx(Z,{color:a.color,className:"float-right",children:a.status})]}),e.jsxs(M,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Start Date:"})," ",a.startDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End Date:"})," ",a.endDate]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Description:"})," ",a.description]})]})]})})},s))})})},xe=()=>{const d=g(a=>a.usersSlice.users),[n,o]=u.useState(null),m=a=>{a.image.length>0?o(a):alert("Please upload a photo to view user details.")},p=()=>{o(null)};return e.jsx(e.Fragment,{children:n?e.jsx(U,{user:n,onBack:p}):e.jsxs(e.Fragment,{children:[e.jsx(R,{users:d,className:"mb-4"}),e.jsxs(J,{children:[e.jsx(i,{xs:6,children:e.jsxs(w,{className:"mb-4",children:[e.jsx(N,{children:"Online Users"}),e.jsx(M,{children:e.jsxs(_,{align:"middle",className:"mb-0 border table-sm",hover:!0,responsive:!0,children:[e.jsx(G,{className:"text-nowrap",children:e.jsxs(T,{children:[e.jsx(D,{className:"bg-body-tertiary text-center",children:e.jsx(b,{icon:$})}),e.jsx(D,{className:"bg-body-tertiary",children:"Name"}),e.jsx(D,{className:"bg-body-tertiary text-center",children:"Points"}),e.jsx(D,{className:"bg-body-tertiary",children:"Role"})]})}),e.jsx(I,{children:d.map((a,s)=>e.jsxs(T,{onClick:()=>m(a),style:{cursor:"pointer"},children:[e.jsx(v,{className:"text-center",children:e.jsx(H,{size:"md",src:a.image.length>0?a.image:O,status:"success"})}),e.jsx(v,{children:e.jsx("div",{children:a.username})}),e.jsx(v,{className:"text-center",children:a.exp}),e.jsx(v,{children:e.jsx("div",{className:"fw-semibold text-nowrap",children:a.role})})]},s))})]})})]})}),e.jsxs(i,{xs:6,children:[e.jsxs(w,{className:"mb-4",children:[e.jsx(N,{children:"Calendar"}),e.jsx(M,{children:e.jsx(z,{})})]}),e.jsxs(w,{className:"mb-4",children:[e.jsx(N,{children:"Task List"}),e.jsx(M,{children:e.jsx(Y,{})})]})]})]})]})})};export{xe as default};
