import{r as n,_ as ue,u as be,R as x,a as J,P as v,c as q,h as $,j as e,n as Z,K as W,M as je,g as fe,O as ge,Q as Ne,l as ee,m as U,S as ve,U as ye}from"./index-D6E4hH03.js";import Ce from"./Program-CMCzXNJv.js";import{G as ke}from"./iconBase-BzobfJR_.js";import{Q as we,B as ie}from"./ReactToastify-D9zb6i_2.js";import{C as M,a as R}from"./CRow-CJ6uYGKB.js";import{a as he,b as ce,C as E}from"./CFormInput-Byys-Zks.js";import{C as S,a as F}from"./CCardBody-DtTLcwxE.js";import{C as P}from"./CCardHeader-DtD25rsW.js";import{C as X}from"./CListGroup-Bg591ZAe.js";import{C as z}from"./CListGroupItem-4X5Aqk3l.js";import{a as k,b as Te,c as De}from"./index.es-BZM5KHiZ.js";import{C as Se}from"./CForm-CTrMd1o3.js";import{C as Fe}from"./CFormTextarea-BYawa6-i.js";import{H as Pe}from"./index-96rp1bq4.js";import{C as Ee}from"./index.esm-BipF0WDz.js";import{C as se,a as ae,b as te,c as le,d as xe}from"./DefaultLayout-BJdZWDTr.js";import{b as Ie,c as Le}from"./index-ZPbUgBpa.js";import{C as Y}from"./CInputGroup-JONooHLu.js";import{C as ne}from"./CInputGroupText-CW9hbSBu.js";import{C as Re}from"./CFormSelect-CVvMIaK5.js";import{C as Ae,a as Ve,b as de,c as G,d as Be,e as Q}from"./CTable-DVlbt5YI.js";import{C as He,a as oe}from"./CPaginationItem-iap0Dhsq.js";import Ke from"./ProgramCards-iv5uaXI3.js";import"./index-DOYrC-FA.js";import"./index-BEpGHYqy.js";import"./chart-C4pU69U9.js";import"./isObject-MrL4JsSQ.js";import"./cil-user-Ddrdy7PS.js";import"./ProgramCard-BzdOnnmy.js";var re=n.forwardRef(function(s,a){var r=s.className,l=s.button,h=s.feedback,w=s.feedbackInvalid,p=s.feedbackValid,m=s.floatingLabel,b=s.tooltipFeedback,j=s.hitArea,u=s.id,g=s.indeterminate,f=s.inline,y=s.invalid,c=s.label,C=s.reverse,T=s.type,A=T===void 0?"checkbox":T,D=s.valid,N=ue(s,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),I=n.useRef(null),_=be(a,I);n.useEffect(function(){I.current&&g&&(I.current.indeterminate=g)},[g,I.current]);var L=function(){return x.createElement("input",J({type:A,className:q(l?"btn-check":"form-check-input",{"is-invalid":y,"is-valid":D,"me-2":j}),id:u},N,{ref:_}))},V=function(){return x.createElement(he,{describedby:N["aria-describedby"],feedback:h,feedbackInvalid:w,feedbackValid:p,floatingLabel:m,invalid:y,tooltipFeedback:b,valid:D})},B=function(){var H;return x.createElement(ce,J({customClassName:q(l?q("btn",l.variant?"btn-".concat(l.variant,"-").concat(l.color):"btn-".concat(l.color),(H={},H["btn-".concat(l.size)]=l.size,H),"".concat(l.shape)):"form-check-label")},u&&{htmlFor:u}),c)},O=function(){return l?x.createElement(x.Fragment,null,x.createElement(L,null),c&&x.createElement(B,null),x.createElement(V,null)):c?j?x.createElement(x.Fragment,null,x.createElement(L,null),x.createElement(ce,J({customClassName:q("form-check-label stretched-link",r)},u&&{htmlFor:u}),c),x.createElement(V,null)):x.createElement("div",{className:q("form-check",{"form-check-inline":f,"form-check-reverse":C,"is-invalid":y,"is-valid":D},r)},x.createElement(L,null),x.createElement(B,null),x.createElement(V,null)):x.createElement(L,null)};return x.createElement(O,null)});re.propTypes=J({button:v.object,className:v.string,hitArea:v.oneOf(["full"]),id:v.string,indeterminate:v.bool,inline:v.bool,label:v.oneOfType([v.string,v.node]),reverse:v.bool,type:v.oneOf(["checkbox","radio"])},he.propTypes);re.displayName="CFormCheck";var Me=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z' class='ci-primary'/><rect width='32' height='32' x='112' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"];function pe(){const s=$(a=>a.userData.userData);return e.jsx("div",{className:"container my-5 py-5",style:{maxWidth:"100%"},children:e.jsx("div",{className:"row d-flex justify-content-center",children:e.jsx("div",{className:"col-md-12 col-lg-10 col-xl-12",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-body",style:{overflow:"auto",maxHeight:"300px"},children:[e.jsxs("div",{className:"card-container",style:{marginBottom:"20px"},children:[e.jsxs("div",{className:"d-flex flex-start align-items-center",children:[e.jsx("img",{className:"rounded-circle shadow-1-strong me-3",src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp",alt:"avatar",width:"60",height:"60"}),e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold text-primary mb-1",children:"Lily Coleman"}),e.jsx("p",{className:"text-muted small mb-0",children:"Shared publicly - Jan 2020"})]})]}),e.jsx("p",{className:"mt-3 mb-4 pb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat."}),e.jsxs("div",{className:"small d-flex justify-content-start",children:[e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"far fa-thumbs-up me-2"}),e.jsx("p",{className:"mb-0",children:"Like"})]}),e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"far fa-comment-dots me-2"}),e.jsx("p",{className:"mb-0",children:"Comment"})]}),e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"fas fa-share me-2"}),e.jsx("p",{className:"mb-0",children:"Share"})]})]})]}),e.jsxs("div",{className:"card-container",children:[e.jsxs("div",{className:"d-flex flex-start align-items-center",children:[e.jsx("img",{className:"rounded-circle shadow-1-strong me-3",src:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp",alt:"avatar",width:"60",height:"60"}),e.jsxs("div",{children:[e.jsx("h6",{className:"fw-bold text-primary mb-1",children:"Lily Coleman"}),e.jsx("p",{className:"text-muted small mb-0",children:"Shared publicly - Jan 2020"})]})]}),e.jsx("p",{className:"mt-3 mb-4 pb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat."}),e.jsxs("div",{className:"small d-flex justify-content-start",children:[e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"far fa-thumbs-up me-2"}),e.jsx("p",{className:"mb-0",children:"Like"})]}),e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"far fa-comment-dots me-2"}),e.jsx("p",{className:"mb-0",children:"Comment"})]}),e.jsxs("a",{href:"#!",className:"d-flex align-items-center me-3",children:[e.jsx("i",{className:"fas fa-share me-2"}),e.jsx("p",{className:"mb-0",children:"Share"})]})]})]})]}),e.jsxs("div",{className:"card-footer py-3 border-0",style:{backgroundColor:"#f8f9fa"},children:[e.jsxs("div",{className:"d-flex flex-start w-100",children:[e.jsx("img",{className:"rounded-circle shadow-1-strong me-3",src:s.image,alt:"avatar",width:"40",height:"40"}),e.jsxs("div",{"data-mdb-input-init":!0,className:"form-outline w-100",children:[e.jsx("textarea",{className:"form-control",id:"textAreaExample",rows:"4",style:{background:"#fff"}}),e.jsx("label",{className:"form-label",htmlFor:"textAreaExample",children:"Message"})]})]}),e.jsxs("div",{className:"float-end mt-2 pt-1",children:[e.jsx("button",{type:"button","data-mdb-button-init":!0,"data-mdb-ripple-init":!0,className:"btn btn-primary btn-sm",children:"Post comment"}),e.jsx("button",{type:"button","data-mdb-button-init":!0,"data-mdb-ripple-init":!0,className:"btn btn-outline-primary btn-sm",children:"Cancel"})]})]})]})})})})}const Ue=""+new URL("details-7dNbQ7Pl.webp",import.meta.url).href;function me(s){return ke({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(s)}const _e=({task:s})=>{const a=Z(),[r,l]=n.useState(s),[h,w]=n.useState(""),[p,m]=n.useState(""),[b,j]=n.useState(""),[u,g]=n.useState(""),[f,y]=n.useState("");n.useState("");const[c,C]=n.useState(null),[T,A]=n.useState(s.status==="completed"?"Task completed":"Task in progress");n.useEffect(()=>{console.log("Task Prop:",s),console.log("Current Task:",r)},[s,r]);const D=()=>{if(s.status==="inProgress"&&s.deliverables.length===0){alert("Please add a deliverable before changing the status");return}let t="";s.status==="completed"?t="Task in progress":t="Task completed";const d={...s,status:s.status==="completed"?"inProgress":"completed"};a(W({taskId:s._id,taskData:d})),l(d),A(t)},N=t=>{ie.error(`The ${t} field is required.`,{autoClose:3e3})},I=t=>{window.open(t,"_blank")},_=()=>{if(h==="")return N("Kpi Label");if(p==="")return N("Kpi Value");const t={...s,kpis:[...s.kpis,{label:h,count:p}]};a(W({taskId:s._id,taskData:t})),l(t)},L=async t=>{if(t.preventDefault(),b==="")return N("Deliverable Name");if(!c)return N("Deliverable File");try{const d=new FormData;d.append("file",c),console.log("Uploading file:",c);const i=await je.post("https://redboost-65f83dc8cbf1.herokuapp.com/upload",d,{headers:{"Content-Type":"multipart/form-data"}});console.log("Upload response:",i.data);const o={...s,deliverables:[...s.deliverables,{fileName:b||c.name,fileUrl:i.data.secure_url}]};a(W({taskId:s._id,taskData:o})),l(o),j(""),C(null)}catch(d){console.error("Error uploading file:",d),ie.error("Failed to upload file. Please try again.")}},V=()=>{if(u==="")return N("Rapport Title");if(f==="")return N("Rapport Text");const t={...s,reports:[...s.reports,{label:u,count:f}]};a(W({taskId:s._id,taskData:t})),l(t)},B=t=>{const d=["primary","secondary","success","danger","warning","info","light","dark"];return d[t%d.length]},O=t=>!isNaN(Date.parse(t)),H=t=>O(t)?new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}):"";return e.jsxs(e.Fragment,{children:[e.jsx(we,{}),e.jsxs(M,{children:[e.jsx(R,{children:e.jsx("div",{className:"card mb-3",style:{maxWidth:"540px"},children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("img",{src:Ue,alt:"Trendy Pants and Shoes",className:"img-fluid rounded-start"})}),e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:"Task Details"}),e.jsxs("p",{className:"card-text",children:[e.jsx("strong",{children:"Task Name:"})," ",r.taskName]}),e.jsxs("p",{className:"card-text",children:[e.jsx("strong",{children:"Task Owner:"})," ",r.taskOwner]}),e.jsxs("p",{className:"card-text",children:[e.jsx("strong",{children:"Target Date:"})," ",r.targetDate?H(r.targetDate):"No target date set"]}),e.jsxs("p",{className:"card-text",children:[e.jsx("strong",{children:"Status:"})," ",r.status]}),s.status==="inProgress"?e.jsx(re,{className:"mb-3",style:{display:s.status==="notStarted"?"none":"block"},id:"flexCheckChecked",label:"I have Completed The Task",checked:s.status==="completed",onChange:D}):e.jsxs("p",{className:" text-center text-success",children:["this Task is ",r.status]})]})})]})})}),e.jsx(R,{children:e.jsxs(S,{children:[e.jsx(P,{className:"bg-dark text-light",children:"Resources"}),e.jsx(F,{children:e.jsxs("div",{children:[e.jsxs("h5",{children:[r.taskName," Resources:"]}),e.jsx(X,{children:r.resources.map((t,d)=>e.jsx(z,{children:e.jsx(k,{href:t.url,download:!0,color:"link",children:t.fileName})},d))})]})})]})})]}),e.jsxs(S,{className:"mt-3 mb-3",children:[e.jsx(P,{className:"bg-dark text-light",children:"Sections"}),e.jsxs(F,{children:[e.jsxs(S,{className:"mt-3 mb-3",children:[e.jsx(P,{className:"bg-info text-light",children:"KPIs"}),e.jsx(F,{children:e.jsxs(X,{children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:r.kpis.map((t,d)=>e.jsxs("div",{className:`card text-bg-${B(d)} mb-3`,style:{minWidth:"260px",marginRight:"10px"},children:[e.jsxs("div",{className:"card-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:["KPI-",d," ",e.jsx(me,{})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h5",{className:"card-title",children:t.label}),e.jsx("p",{className:"card-text",children:t.count})]})]},d))}),e.jsxs(z,{children:[e.jsx("label",{htmlFor:"newKpiLabel",children:"Label:"}),e.jsx(E,{id:"newKpiLabel",placeholder:"KPI Label",value:h,onChange:t=>w(t.target.value),className:"mt-3 mb-3"}),e.jsx("label",{htmlFor:"newKpiValue",children:"Value:"}),e.jsx(E,{id:"newKpiValue",placeholder:"KPI Value",value:p,onChange:t=>m(t.target.value),className:"mt-3 mb-3"}),e.jsx(k,{style:{backgroundColor:"#00cc99"},onClick:()=>_(),className:"mt-3 mb-3",children:"Add KPI"})]})]})})]}),e.jsxs(S,{className:"mt-3 mb-3",children:[e.jsx(P,{className:"bg-info text-light",children:"Documents"}),e.jsx(F,{children:e.jsxs(X,{children:[r.deliverables.map((t,d)=>e.jsx(z,{children:e.jsx(k,{onClick:()=>I(t.fileUrl),color:"link",children:t.fileName})},d)),e.jsx(z,{children:e.jsxs(Se,{onSubmit:L,children:[e.jsx("label",{htmlFor:"newDeliverableName",children:"Name:"}),e.jsx(E,{id:"newDeliverableName",placeholder:"Deliverable Name",value:b,onChange:t=>j(t.target.value)}),e.jsx("label",{htmlFor:"newDeliverableFile",className:"mt-3 mb-3",children:"Upload File:"}),e.jsx("input",{id:"newDeliverableFile",name:"deliverableFile",type:"file",onChange:t=>{console.log("Selected deliverable file:",t.target.files[0]),C(t.target.files[0])}}),e.jsx(k,{style:{backgroundColor:"#00cc99"},type:"submit",className:"mt-3 mb-3",children:"Add Deliverable"})]})})]})})]}),e.jsxs(S,{className:"mt-3 mb-3",children:[e.jsx(P,{className:"bg-info text-light",children:"Reporting Section"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",padding:"20px"},children:r.reports.map((t,d)=>e.jsxs("div",{style:{minWidth:"300px",margin:"10px"},className:`card radius-10 border-start border-0 border-3 border-${B(d)} shadow`,children:[e.jsx(me,{style:{position:"absolute",top:"0",right:"0",fontSize:"20px",margin:"5px"}}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-0 text-secondary",children:t.label}),e.jsx("p",{className:"mb-0 font-13",children:t.count})]}),e.jsx("div",{className:"widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto",children:e.jsx("i",{className:"fa fa-bar-chart"})})]})})]}))}),e.jsxs(F,{children:[e.jsx(E,{placeholder:"Title",value:u,onChange:t=>g(t.target.value),className:"mb-3"}),e.jsx(Fe,{placeholder:"Text",value:f,onChange:t=>y(t.target.value),className:"mt-3 mb-3"}),e.jsx(k,{style:{backgroundColor:"#00cc99"},onClick:()=>V(),className:"mt-3 mb-3",children:"Add Reporting Section"})]})]}),e.jsxs(S,{className:"mt-3 mb-3",children:[e.jsx(P,{className:"bg-info text-light",children:"Comment Section"}),e.jsx(F,{children:e.jsx(pe,{})})]})]})]})]})};function Oe({selectedTask:s,setSelectedtask:a}){const r=n.useRef(null),l=p=>{const m=p.target.files[0];if(!m)return;const b={name:m.name,size:m.size};a(j=>({...j,uploadFiles:[...j.uploadFiles,b]}))},h=()=>{r.current.click()},w=p=>{a(m=>({...m,uploadFiles:m.uploadFiles.filter((b,j)=>j!==p)}))};return e.jsxs("div",{className:"upload-box",children:[e.jsxs("form",{action:"",onClick:h,children:[e.jsx("input",{type:"file",className:"file-upload-input",name:"file",hidden:!0,ref:r,onChange:l}),e.jsx("div",{className:"icon",children:e.jsx(Ie,{className:"cloud-icon",style:{color:"#0c77ad"}})}),e.jsx("p",{children:"Browse File To Upload"})]}),e.jsx("section",{className:"uploaded-area",children:s.uploadFiles.map((p,m)=>e.jsx("li",{className:"row",onClick:()=>w(m),children:e.jsxs("div",{className:"content-upload",children:[e.jsx("i",{children:e.jsx(Le,{})}),e.jsx("div",{className:"details",children:e.jsx("span",{className:"name",children:p.name})})]})},m))})]})}function qe({visible:s,setVisible:a,selectedTask:r,setSelectedtask:l}){return e.jsxs(se,{visible:s,onClose:()=>a(!1),"aria-labelledby":"LiveDemoExampleLabel",backdrop:"static",children:[e.jsx(ae,{closeButton:!0,children:e.jsx(te,{id:"LiveDemoExampleLabel",children:"Edit Card"})}),e.jsxs(le,{style:{height:"450px",overflow:"auto"},className:"modal-body",children:[e.jsx("div",{className:"mb-3",children:e.jsx(E,{type:"text",id:"taskTitle",placeholder:"Task Title","aria-describedby":"taskTitleHelpInline",value:r.taskName})}),e.jsx("div",{className:"mb-3",children:e.jsx(E,{type:"date",id:"taskDate",placeholder:"Task Date",value:r.targetDate})})]}),e.jsxs(xe,{children:[e.jsx(k,{color:"danger",children:"cancel"}),e.jsx(k,{color:"primary",children:"Save"})]})]})}function $e(){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[e.jsx("div",{className:"card bg-success text-white m-2",style:{width:"300px"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h2",{className:"card-title",children:"This is a title"}),e.jsx("p",{className:"card-text",children:"This is body text inside my Bootstrap card."})]})}),e.jsx("div",{className:"card bg-danger text-white m-2",style:{width:"300px"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h2",{className:"card-title",children:"This is a title"}),e.jsx("p",{className:"card-text",children:"This is body text inside my Bootstrap card."})]})}),e.jsx("div",{className:"card bg-warning text-white m-2",style:{width:"300px"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h2",{className:"card-title",children:"This is a title"}),e.jsx("p",{className:"card-text",children:"This is body text inside my Bootstrap card."})]})}),e.jsx("div",{className:"card bg-secondarytext-white m-2",style:{width:"300px"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h2",{className:"card-title",children:"This is a title"}),e.jsx("p",{className:"card-text",children:"This is body text inside my Bootstrap card."})]})})]})}function We({open:s,setOpen:a,selectedTask:r}){const l=()=>{a(!1)};return e.jsxs(se,{fullscreen:!0,visible:s,onClose:l,"aria-labelledby":"FullscreenExample1",children:[e.jsx(ae,{children:e.jsx(te,{id:"FullscreenExample1",children:r.title})}),e.jsxs(le,{style:{backgroundColor:"#eee"},children:[e.jsxs(M,{className:"mb-0",children:[e.jsx(R,{xs:12,md:6,children:e.jsx($e,{selectedTask:r})}),e.jsx(R,{xs:12,md:6,children:e.jsx(Oe,{})})]}),e.jsx(M,{className:"mb-0",children:e.jsx(pe,{})})]})]})}function ze({open:s,setOpen:a,handleAddTask:r,activity:l}){const[h,w]=n.useState(""),[p,m]=n.useState(""),[b,j]=n.useState(""),[u,g]=n.useState(""),f=$(c=>c.usersSlice.users),y=c=>{if(c.preventDefault(),!h||!p||!b||!u)alert("All fields are required");else{const C=new Date;C.setHours(0,0,0,0);const T=new Date(p);T.setHours(0,0,0,0);const A={taskName:h,startDate:p,endDate:b,status:T>C?"notStarted":"inProgress",color:T>C?"blue":"pink",taskOwner:u};r(A),a(!1)}};return e.jsx(e.Fragment,{children:e.jsxs(se,{visible:s,onClose:()=>a(!1),"aria-labelledby":"LiveDemoExampleLabel",backdrop:"static",children:[e.jsx(ae,{onClose:()=>a(!1),children:e.jsx(te,{id:"LiveDemoExampleLabel",children:"Add Task"})}),e.jsxs(le,{children:[e.jsx(E,{label:"Task Name:",className:"mb-3",type:"text",id:"name",name:"name",placeholder:"Task Name",value:h,onChange:c=>w(c.target.value)}),e.jsxs(Y,{className:"mb-3",children:[e.jsx(ne,{id:"basic-addon2",children:"Start Date"}),e.jsx(E,{type:"date",id:"start date",placeholder:"Enter start date",value:p,onChange:c=>m(c.target.value)})]}),e.jsxs(Y,{className:"mb-3",children:[e.jsx(ne,{id:"basic-addon2",children:"End Date"}),e.jsx(E,{type:"date",id:"end date",placeholder:"Enter end date",value:b,onChange:c=>j(c.target.value)})]}),e.jsx(Y,{className:"mb-3",children:e.jsxs(Re,{"aria-label":"The Task Owner",onChange:c=>g(c.target.value),value:u,children:[e.jsx("option",{children:"Choose The Task Owner"}),f.map(c=>e.jsx("option",{value:c._id,children:c.username},c._id))]})})]}),e.jsxs(xe,{children:[e.jsx(k,{color:"danger",onClick:()=>a(!1),children:"Close"}),e.jsx(k,{color:"primary",onClick:y,children:"Add"})]})]})})}const K=({status:s,tasks:a,color:r})=>e.jsx(R,{xs:12,md:4,children:e.jsxs(S,{className:"mb-3",style:{height:"400px"},children:[e.jsx(P,{className:"text-light",style:{backgroundColor:r,display:"flex",alignItems:"center",justifyContent:"space-between"},children:s}),e.jsx(F,{style:{overflow:"auto"},children:a.map((l,h)=>{if(l.status===s)return e.jsx("div",{className:"container",children:e.jsxs("div",{onClick:()=>handleModalVisibility(l),className:"card border border-success shadow mb-3",style:{maxWidth:"400px"},children:[e.jsx("div",{className:"card-header",children:e.jsx("strong",{children:l.taskName})}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"d-flex justify-content-between align-items-center mt-3",children:e.jsxs("div",{className:"text-muted",children:[e.jsx(De,{icon:Me,className:"mr-1"}),new Date(l.endDate).toLocaleDateString()]})})})]})},h)})})]})});function Ge({activity:s,tasks:a}){const r=fe(),[l,h]=n.useState(!1),[w,p]=n.useState(!1),[m,b]=n.useState(null),[j,u]=n.useState(!1),g=4,[f,y]=n.useState(1),c=f*g,C=c-g,T=a.slice(C,c),A=Z(),D=Math.ceil(a.length/g),N=()=>{f>1&&y(f-1)},I=()=>{f<D&&y(f+1)},_=i=>{const o={...i,xpPoints:0,resources:[],deliverables:[],kpis:[],activityId:s._id};console.log(o),A(ge(o)),u(!1)},L=()=>{let i=0;return a.map(o=>{o.status==="valid"&&i++}),i},V=()=>{let i=0;return a.map(o=>{o.status==="inProgress"&&i++}),i},B=()=>{let i=0;return a.map(o=>{o.status==="completed"&&i++}),i},O=()=>{let i=0;return a.map(o=>{o.status==="notStarted"&&i++}),i},H=()=>{let i=0;return a.map(o=>{o.status==="cancelled"&&i++}),i},t=()=>{let i=0;return a.map(o=>{o.status==="expired"&&i++}),i},d=i=>{const o=window.location.pathname;r(`${o}/${i._id}`)};return e.jsxs(e.Fragment,{children:[j&&e.jsx(ze,{setOpen:u,open:j,handleAddTask:_,activity:s}),e.jsxs(Te,{style:{padding:"20px"},className:"mt-4",children:[m&&e.jsx(qe,{visible:l,setVisible:h,selectedTask:m,setSelectedtask:b}),m&&e.jsx(We,{open:w,setOpen:p,selectedTask:m}),e.jsx(M,{children:e.jsx(R,{children:e.jsx(k,{onClick:()=>u(!0),className:"mb-3",rounded:"lg",color:"primary",style:{float:"right"},children:"Add Task"})})}),e.jsxs(M,{className:"mb-3",children:[e.jsx(K,{status:"notStarted",tasks:a,color:"#006666"}),e.jsx(K,{status:"inProgress",tasks:a,color:"#fb5858"}),e.jsx(K,{status:"completed",tasks:a,color:"#0ca279"}),e.jsx(K,{status:"valid",tasks:a,color:"#074a38"}),e.jsx(K,{status:"expired",tasks:a,color:"#dab600"}),e.jsx(K,{status:"cancelled",tasks:a,color:"grey"})]}),e.jsxs(M,{children:[e.jsx(R,{children:e.jsxs(S,{className:"mb-3",children:[e.jsx(P,{className:"bg-dark text-light",children:"Recent Tasks"}),e.jsxs(F,{children:[e.jsxs(Ae,{striped:!0,responsive:!0,className:"text-center",children:[e.jsx(Ve,{children:e.jsxs(de,{children:[e.jsx(G,{scope:"col",children:"Target Date"}),e.jsx(G,{scope:"col",children:"Task Name"}),e.jsx(G,{scope:"col",children:"Status"}),e.jsx(G,{scope:"col",children:"View"})]})}),e.jsx(Be,{children:T.map((i,o)=>e.jsxs(de,{children:[e.jsx(Q,{children:new Date(i.endDate).toLocaleDateString()}),e.jsx(Q,{children:i.taskName}),e.jsx(Q,{children:i.status}),e.jsx(Q,{children:e.jsx(Pe,{role:"button",style:{fontSize:"25px",color:"#4CAF50"},onClick:()=>d(i)})})]},o))})]}),e.jsxs(He,{pages:D,align:"center",children:[e.jsx(oe,{onClick:N,disabled:f<=1,"aria-label":"Previous",children:"Previous"}),e.jsx(oe,{onClick:I,disabled:f>=D,"aria-label":"Next",children:"Next"})]})]})]})}),e.jsx(R,{children:e.jsxs(S,{className:"mb-3",children:[e.jsx(P,{className:"bg-dark text-light",children:"Task Progress"}),e.jsx(F,{children:e.jsx(Ee,{type:"bar",data:{labels:["Total Tasks","In Progress","Completed","Valid","Expired","Cancelled","Not Started"],datasets:[{label:"Task Progress",backgroundColor:["pink, lightgreen, green, yellow,grey,blue"],data:[a.length,V(),B(),L(),t(),H(),O()]}]},labels:"Status",options:{plugins:{legend:{labels:{color:"#adb7c5"}}},scales:{x:{grid:{color:"#adb7c5"},ticks:{color:"#adb7c5"}},y:{grid:{color:"#adb7c5"},ticks:{color:"#adb7c5"}}}}})})]})})]})]})]})}function Qe({activity:s}){const a=Z(),r=$(l=>l.task.tasksByActivityId);return n.useEffect(()=>{a(Ne(s._id))},[a,s._id]),e.jsxs(ee,{children:[e.jsx(U,{path:"/",element:e.jsx(Ge,{activity:s,tasks:r})}),r.map(l=>e.jsx(U,{path:`${l._id}/*`,element:e.jsx(_e,{task:l})},l._id))]})}const Je=({program:s})=>{console.log("ProgramWithActivities rendered");const a=Z(),r=$(l=>l.activity.activitiesByProgramId||[]);return n.useEffect(()=>{a(ve(s._id)).then(l=>{l!=null&&l.payload&&a(ye(l.payload.map(h=>({path:`/Monitoring/${encodeURIComponent(s.programTitle)}/${encodeURIComponent(h.name)}`,name:h.name,activityId:h._id}))))})},[a,s._id,s.programTitle]),e.jsxs(ee,{children:[e.jsx(U,{path:"/",element:e.jsx(Ce,{activities:r,program:s})}),r.map(l=>e.jsx(U,{path:`${l._id}/*`,element:e.jsx(Qe,{activity:l})},l._id))]})},Ts=()=>{const s=$(a=>a.programsSlice.programs);return e.jsxs(ee,{children:[e.jsx(U,{path:"/",exact:!0,name:"Programs",element:e.jsx(Ke,{})}),s.map(a=>e.jsx(U,{name:a.programTitle,path:`/${a._id}/*`,element:e.jsx(Je,{program:a})},a._id))]})};export{Ts as default};
