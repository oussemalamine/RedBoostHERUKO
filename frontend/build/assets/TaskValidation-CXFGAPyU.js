import{r as d,R as M,h as V,g as w,j as e,n as I,a3 as Y,a4 as B,J as z}from"./index-DFvj4qbr.js";import{u as Z}from"./user-B3U43cFQ.js";import{a as ee}from"./index-C5YX6FMl.js";import{H as se}from"./index-CQO7VHJK.js";import{C as R,D as te,A as ae,p as ne,a as re}from"./chart-Dp4mhDtA.js";import{G as le}from"./index-D88PhoBc.js";import{f as ie,g as ce,h as oe,j as de,k as ue,a as pe,l as he,m as me,n as E,q as h,p as xe}from"./DefaultLayout-DJz7HU5F.js";import{g as T,a as C}from"./index.es-BF5Kw66n.js";import{C as fe}from"./cil-user-Del3IDt8.js";import{a as L,b as _}from"./isObject-BFhASR8I.js";const F="label";function H(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function ge(n,r){const a=n.options;a&&r&&Object.assign(a,r)}function K(n,r){n.labels=r}function $(n,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F;const x=[];n.datasets=r.map(l=>{const p=n.datasets.find(f=>f[a]===l[a]);return!p||!l.data||x.includes(p)?{...l}:(x.push(p),Object.assign(p,l),p)})}function je(n){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F;const a={labels:[],datasets:[]};return K(a,n.labels),$(a,n.datasets,r),a}function be(n,r){const{height:a=150,width:x=300,redraw:l=!1,datasetIdKey:p,type:f,data:u,options:i,plugins:D=[],fallbackContent:b,updateMode:v,...y}=n,j=d.useRef(null),t=d.useRef(),c=()=>{j.current&&(t.current=new R(j.current,{type:f,data:je(u,p),options:i&&{...i},plugins:D}),H(r,t.current))},g=()=>{H(r,null),t.current&&(t.current.destroy(),t.current=null)};return d.useEffect(()=>{!l&&t.current&&i&&ge(t.current,i)},[l,i]),d.useEffect(()=>{!l&&t.current&&K(t.current.config.data,u.labels)},[l,u.labels]),d.useEffect(()=>{!l&&t.current&&u.datasets&&$(t.current.config.data,u.datasets,p)},[l,u.datasets]),d.useEffect(()=>{t.current&&(l?(g(),setTimeout(c)):t.current.update(v))},[l,i,u.labels,u.datasets,v]),d.useEffect(()=>{t.current&&(g(),setTimeout(c))},[f]),d.useEffect(()=>(c(),()=>g()),[]),M.createElement("canvas",Object.assign({ref:j,role:"img",height:a,width:x},y),b)}const Ce=d.forwardRef(be);function ve(n,r){return R.register(r),d.forwardRef((a,x)=>M.createElement(Ce,Object.assign({},a,{ref:x,type:n})))}const ye=ve("doughnut",te);function De(n){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"},child:[]}]})(n)}function ke({showModal:n,setShowModal:r,selectedTask:a,setSelectedTask:x}){const l=V(),p=w(t=>t.usersSlice.users),f=w(t=>t.userData.userData),u=t=>{const{name:c,value:g}=t.target,P={...a,[c]:g};x(P)},i=t=>{const c=p.find(g=>g._id===t.taskOwner);l(I({taskId:t._id,taskData:{...t,status:"valid"}})),l(B({userId:t.taskOwner,userData:{exp:t.xpPoints+Number(c.exp)}})),t.taskOwner===f._id&&l(z({...f,exp:t.xpPoints+Number(f.exp)}))},D=()=>{const{_id:t,...c}=a;l(I({taskId:t,taskData:c})),r(!1)},b=()=>{l(Y(a._id)),r(!1)},v=()=>{i(a),r(!1)},y=t=>!isNaN(Date.parse(t)),j=t=>y(t)?new Date(t).toISOString().substring(0,10):"";return e.jsxs(ie,{visible:n,onClose:()=>r(!1),"aria-labelledby":"LiveDemoExampleLabel",backdrop:"static",children:[e.jsx(ce,{closeButton:!0,children:e.jsx(oe,{id:"LiveDemoExampleLabel",children:"View Task"})}),e.jsxs(de,{style:{height:"450px",overflow:"auto"},className:"modal-body",children:[e.jsx("div",{className:"mb-3",children:e.jsx(T,{type:"text",id:"taskTitle",name:"taskName",placeholder:"Task Title","aria-describedby":"taskTitleHelpInline",value:a.taskName,onChange:u,disabled:!0})}),e.jsx("div",{className:"mb-3",children:e.jsxs(fe,{value:a.status,id:"taskStatus",name:"status",onChange:u,className:a.status==="valid"?"status-valid":a.status==="completed"?"status-completed":"",children:[e.jsx("option",{value:"inProgress",children:"In Progress"}),e.jsx("option",{value:"cancelled",children:"Cancelled"}),e.jsx("option",{value:"completed",children:"Completed"})]})}),e.jsx("div",{className:"mb-3",children:e.jsx(T,{value:j(a.endDate),type:"date",name:"targetDate",id:"taskDate",placeholder:"Task Date",onChange:u,disabled:!0})}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"xpPoints",className:"form-label",children:"Enter your XP points score !!!!"}),e.jsx(T,{value:a.xpPoints,type:"number",name:"xpPoints",id:"xpPoints",placeholder:"XP Points",onChange:u})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h5",{children:"Task Evidence"}),e.jsxs("div",{className:"Kpis",children:[e.jsx("h6",{children:"Kpi's"}),a.kpis?a.kpis.length>0?e.jsx("ul",{children:a.kpis.map((t,c)=>e.jsx("li",{children:e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",children:[t.label," = ",t.count]})},c))}):e.jsx("p",{children:"No attachments found."}):e.jsx("p",{children:"Couldn't access the kpi's of this task."})]}),e.jsxs("div",{className:"Reports",children:[e.jsx("h6",{children:"Reports"}),a.reports?a.reports.length>0?e.jsx("ul",{children:a.reports.map((t,c)=>e.jsx("li",{children:e.jsxs("a",{target:"_blank",rel:"noopener noreferrer",children:[t.label," = ",t.count]})},c))}):e.jsx("p",{children:"No attachments found."}):e.jsx("p",{children:"Couldn't access the reports of this task."})]}),e.jsxs("div",{className:"Deliverables",children:[e.jsx("h6",{children:"Deliverables"}),a.deliverables?a.deliverables.length>0?e.jsx("ul",{children:a.deliverables.map((t,c)=>e.jsx("li",{children:e.jsx("a",{href:t.fileUrl,target:"_blank",rel:"noopener noreferrer",children:t.fileName})},c))}):e.jsx("p",{children:"No attachments found."}):e.jsx("p",{children:"Couldn't access the deliverables of this task."})]})]})]}),e.jsxs(ue,{children:[e.jsx(C,{color:"danger",onClick:b,children:"Delete"}),e.jsx(C,{color:"secondary",onClick:()=>r(!1),children:"Close"}),e.jsx(C,{color:"primary",onClick:D,children:"Save"}),e.jsx(C,{color:"success",onClick:v,children:"Validate"})]})]})}R.register(ae,ne,re);const He=()=>{const[n,r]=d.useState("all"),[a,x]=d.useState(!1),[l,p]=d.useState(null),[f,u]=d.useState(""),[i,D]=d.useState(null),[b,v]=d.useState("asc"),y=V(),j=w(s=>s.usersSlice.users),c=w(s=>s.task.allTasks).filter(s=>s.status==="completed"||s.status==="valid"||s.status==="cancelled"),g=w(s=>s.userData.userData),P=s=>{p(s),x(!0)},A=s=>{const m=j.find(o=>o._id===s.taskOwner);y(I({taskId:s._id,taskData:{...s,status:"valid"}})),y(B({userId:s.taskOwner,userData:{exp:s.xpPoints+Number(m.exp)}})),s.taskOwner===g._id&&y(z({...g,exp:s.xpPoints+Number(g.exp)}))},U=()=>c.filter(s=>s.status==="completed").length,G=()=>c.filter(s=>s.status==="cancelled").length,X={labels:["Valid","Completed","Cancelled"],datasets:[{label:"Tasks",data:[c.filter(s=>s.status==="valid").length,U(),G()],backgroundColor:["#28a745","blue","gray"]}]},q={responsive:!0,plugins:{legend:{position:"bottom"}}},J=s=>{switch(s){case"inProgress":return"bg-warning";case"expired":return"bg-danger";case"valid":return"bg-success";case"cancelled":return"bg-secondary";default:return"bg-info"}},O=c.filter(s=>{var S;const m=f.toLowerCase(),o=s.status.toLowerCase();return n==="valid"?o==="valid":n==="completed"?o==="completed":n==="cancelled"?o==="cancelled":s.taskName.toLowerCase().includes(m)||((S=j.find(W=>W._id===s.taskOwner))==null?void 0:S.username.toLowerCase().includes(m))||o.includes(m)||s.xpPoints.toString().includes(m)||s.endDate.includes(m)}),k=s=>{i===s?v(b==="asc"?"desc":"asc"):(D(s),v("asc"))},N=s=>{if(i===s)return b==="asc"?e.jsx("span",{children:"↑"}):e.jsx("span",{children:"↓"})},Q=i?O.slice().sort((s,m)=>s[i]<m[i]?b==="asc"?-1:1:s[i]>m[i]?b==="asc"?1:-1:0):O;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[l&&e.jsx(ke,{showModal:a,setShowModal:x,selectedTask:l,setSelectedTask:p}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[e.jsx(C,{className:`btn ${n==="all"?"btn-primary":"btn-secondary"}`,onClick:()=>r("all"),children:"All"}),e.jsx(C,{className:`btn ${n==="valid"?"btn-primary":"btn-secondary"}`,onClick:()=>r("valid"),children:"Valid"}),e.jsx(C,{className:`btn ${n==="completed"?"btn-primary":"btn-secondary"}`,onClick:()=>r("completed"),children:"Completed"}),e.jsx(C,{className:`btn ${n==="cancelled"?"btn-primary":"btn-secondary"}`,onClick:()=>r("cancelled"),children:"Cancelled"})]}),e.jsxs(L,{children:[e.jsxs(pe,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("h2",{style:{display:"flex",alignItems:"center"},children:[e.jsx(De,{style:{marginRight:"10px"}}),"Task List"]}),e.jsx(T,{type:"text",placeholder:"Search Task",value:f,onChange:s=>u(s.target.value),style:{marginTop:"10px",width:"300px"}})]}),e.jsx(_,{style:{maxHeight:"500px",overflow:"auto"},children:e.jsxs(he,{responsive:!0,hover:!0,children:[e.jsx(me,{children:e.jsxs(E,{children:[e.jsxs(h,{onClick:()=>k("taskName"),children:["Task Name ",i==="taskName"&&N("taskName")]}),e.jsxs(h,{onClick:()=>k("username"),children:["Team Member ",i==="username"&&N("username")]}),e.jsxs(h,{onClick:()=>k("status"),children:["Status ",i==="status"&&N("status")]}),e.jsxs(h,{onClick:()=>k("xpPoints"),children:["Points ",i==="xpPoints"&&N("xpPoints")]}),e.jsxs(h,{onClick:()=>k("endDate"),children:["Release Date ",i==="endDate"&&N("endDate")]}),e.jsx(h,{children:"Actions"})]})}),e.jsx(xe,{children:Q.map((s,m)=>{const o=j.find(S=>S._id===s.taskOwner);return e.jsxs(E,{children:[e.jsx(h,{children:s.taskName}),e.jsxs(h,{children:[e.jsx("img",{src:o!=null&&o.image?o.image:Z,alt:"avatar 1",style:{width:"45px",height:"auto",borderRadius:"50%"}}),e.jsx("span",{className:"ms-2",children:o==null?void 0:o.username})]}),e.jsx(h,{children:e.jsx("span",{className:"ms-2",children:o==null?void 0:o.username})}),e.jsx(h,{children:e.jsx("span",{className:`badge ${J(s.status)}`,children:s.status})}),e.jsxs(h,{children:[s.xpPoints,"XP"]}),e.jsx(h,{children:new Date(s.endDate).toLocaleDateString()}),e.jsxs(h,{children:[s.status!=="valid"&&e.jsx(ee,{onClick:()=>A(s),style:{color:"green",fontSize:"25px",cursor:"pointer",marginRight:"10px"}}),e.jsx(se,{onClick:()=>P(s),style:{color:"blue",fontSize:"25px",cursor:"pointer"}})]})]},m)})})]})})]}),e.jsx(L,{children:e.jsx(_,{style:{maxHeight:"400px",padding:"10px"},children:e.jsx(ye,{style:{margin:"0 auto"},data:X,options:q})})})]})};export{He as default};
