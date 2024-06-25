import{P as R,r as j,j as e,h as I,f as _,Y as A}from"./index-CtmX7WYL.js";import{g as l,a as x,h as P,e as b,f,c as H}from"./index.es-D9-wHAbD.js";import{Q as U,a as z,d as k,B as N}from"./DefaultLayout-CyiIXMMn.js";import{a as B,b as O,c as q}from"./isObject-B713891n.js";import{C as S}from"./cil-user-BmgviaXM.js";import"./index-lj2RjtZz.js";const W=""+new URL("file-blank-solid-240-DUMZ0WQ9.png",import.meta.url).href,M=""+new URL("file-css-solid-240-BHklwn9W.png",import.meta.url).href,Q=""+new URL("file-pdf-solid-240-ANi_uwT2.png",import.meta.url).href,G=""+new URL("file-png-solid-240-Cd058vx6.png",import.meta.url).href,D={default:W,pdf:Q,png:G,css:M},Y=""+new URL("cloud-upload-regular-240-B28by-O_.png",import.meta.url).href,T=p=>{const t=j.useRef(null),[o,v]=j.useState([]),y=()=>t.current.classList.add("bg-info"),C=()=>t.current.classList.remove("bg-info"),i=c=>{const m=c.target.files[0];if(m){const h=[...o,m];v(h),p.onFileChange(h)}},u=c=>{const m=o.filter(h=>h!==c);v(m),p.onFileChange(m)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{height:"auto"},ref:t,className:"drop-file-input border rounded p-3 mb-3",onDragEnter:y,onDragLeave:C,onDrop:C,children:[e.jsxs("div",{className:"drop-file-input__label text-center text-secondary font-weight-bold",children:[e.jsx("img",{src:Y,alt:"",className:"img-fluid mb-2"}),e.jsx("p",{children:"Drag & Drop your files here"})]}),e.jsx(l,{type:"file",id:"file-input",className:"form-control-file",onChange:i})]}),o.length>0&&e.jsxs("div",{className:"drop-file-preview",children:[e.jsx("p",{className:"drop-file-preview__title font-weight-bold mb-3",children:"Ready to upload"}),o.map((c,m)=>e.jsxs("div",{className:"drop-file-preview__item",style:{height:"auto",display:"flex",alignItems:"center",justifyContent:"space-between",border:"1px solid #dcdcdc",borderRadius:"5px"},children:[e.jsxs("div",{className:"drop-file-preview__item__info",style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[e.jsx("img",{src:D[c.type.split("/")[1]]||D.default,alt:"",className:"img-thumbnail mr-3",style:{width:"40px",height:"40px"}}),e.jsx("p",{children:c.name}),e.jsxs("p",{children:[c.size,"B"]})]}),e.jsx(x,{color:"danger",style:{height:"auto"},onClick:()=>u(c),children:"x"})]},m))]})]})};T.propTypes={onFileChange:R.func};const ee=({})=>{const p=I();j.useState(!1),j.useState("");const[t,o]=j.useState({eventName:"",startDate:"",endDate:"",location:"",description:"",status:"",capacity:"",eventType:"",eventLink:"",organizer:"",phoneNumber:"",email:"",expertName:"",sections:[{title:"",startingHour:"",duration:"",speakers:""}],tasks:[{taskName:"",deadline:"",status:"Not Started",workers:[]}]}),v=()=>{N.success("Event Created successfully",{autoClose:3e3})},y=()=>{N.error("Failed to Create Event",{autoClose:3e3})},C=()=>{N.error("Please fill out all required fields before submitting.",{autoClose:3e3})},i=s=>{const{name:a,value:n}=s.target;o({...t,[a]:n})},u=(s,a)=>{const{name:n,value:g}=a.target,d=[...t.sections];d[s]={...d[s],[n]:g},o({...t,sections:d})},c=(s,a)=>{const{name:n,value:g}=a.target,d=[...t.tasks];n==="workers"?d[s]={...d[s],workers:g.split(",").map(L=>L.trim())}:d[s]={...d[s],[n]:g},o({...t,tasks:d})},m=()=>{o({...t,sections:[...t.sections,{title:"",startingHour:"",duration:"",speakers:""}]})},h=()=>{o({...t,tasks:[...t.tasks,{taskName:"",deadline:"",status:"",workers:[]}]})},E=()=>{const s=[...t.tasks];s.splice(1,s.length-1),o({...t,tasks:s})},F=()=>{const s=[...t.sections];s.splice(1,s.length-1),o({...t,sections:s})},w=async()=>{if(Object.values(t).some(a=>typeof a=="string"?a.trim()==="":Array.isArray(a)?a.some(n=>typeof n=="string"&&n.trim()===""):!1)){C();return}try{const a=t.tasks.filter(d=>d.taskName.trim()!==""&&d.deadline.trim()!==""&&d.workers.length>0),n={...t,tasks:a};(await _.post("/events",n)).status===200?(p(A(n)),v(),o({eventName:"",startDate:"",endDate:"",location:"",description:"",status:"",capacity:"",eventType:"",eventLink:"",organizer:"",phoneNumber:"",email:"",expertName:"",sections:[{title:"",startingHour:"",duration:"",speakers:""}],tasks:[{taskName:"",deadline:"",status:"Not Started",workers:[]}]})):y()}catch(a){console.error("Failed to create event:",a),y()}};return e.jsxs(P,{className:"my-4",children:[e.jsx(U,{}),e.jsxs(B,{children:[e.jsx(z,{className:"bg-dark text-light",children:"Create New Event"}),e.jsx(O,{children:e.jsxs(q,{onSubmit:w,children:[e.jsx("h2",{style:{textAlign:"center",margin:"20px"},children:"Event Information"}),e.jsx(r,{label:"Event Name",children:e.jsx(l,{type:"text",name:"eventName",value:t.eventName,onChange:i,required:!0})}),e.jsx(r,{label:"Start Date",children:e.jsx(l,{type:"datetime-local",name:"startDate",value:t.startDate,onChange:i,required:!0})}),e.jsx(r,{label:"End Date",children:e.jsx(l,{type:"datetime-local",name:"endDate",value:t.endDate,onChange:i,required:!0})}),e.jsx(r,{label:"Location",children:e.jsx(l,{type:"text",name:"location",value:t.location,onChange:i})}),e.jsx(r,{label:"Description",children:e.jsx(k,{name:"description",value:t.description,onChange:i})}),e.jsx("h2",{style:{textAlign:"center",margin:"20px"},children:"Program"}),e.jsx(r,{label:"Status",children:e.jsxs(S,{name:"status",value:t.status,onChange:i,children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]})}),e.jsx(r,{label:"Capacity",children:e.jsx(l,{type:"number",name:"capacity",value:t.capacity,onChange:i})}),e.jsx(r,{label:"Event Type",children:e.jsx(l,{type:"text",name:"eventType",value:t.eventType,onChange:i})}),e.jsx(r,{label:"Event Link",children:e.jsx(l,{type:"url",name:"eventLink",value:t.eventLink,onChange:i})}),e.jsx(r,{label:"Organizer",children:e.jsx(l,{type:"text",name:"organizer",value:t.organizer,onChange:i})}),e.jsx(r,{label:"Phone Number",children:e.jsx(l,{type:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:i})}),e.jsx(r,{label:"Email",children:e.jsx(l,{type:"email",name:"email",value:t.email,onChange:i})}),e.jsx(r,{label:"Expert Name",children:e.jsx(l,{type:"text",name:"expertName",value:t.expertName,onChange:i})}),e.jsx("h2",{style:{textAlign:"center",margin:"20px"},children:"Sections"}),t.sections.map((s,a)=>e.jsxs("div",{children:[e.jsxs("h5",{style:{margin:"20px",color:"green"},children:["Section ",a+1," :"]}),e.jsx(r,{label:"Section Title",children:e.jsx(l,{type:"text",name:"title",value:s.title,onChange:n=>u(a,n)})}),e.jsx(r,{label:"Starting Hour",children:e.jsx(l,{type:"time",name:"startingHour",value:s.startingHour,onChange:n=>u(a,n)})}),e.jsx(r,{label:"Duration (in minutes)",children:e.jsx(l,{type:"number",name:"duration",value:s.duration,onChange:n=>u(a,n)})}),e.jsx(r,{label:"Speakers",children:e.jsx(k,{name:"speakers",value:s.speakers,onChange:n=>u(a,n)})})]},a)),e.jsx(b,{className:"justify-content-center",children:e.jsxs(f,{xs:"auto",children:[e.jsx(x,{style:{margin:"20px"},type:"button",color:"info",onClick:m,className:"mb-3 ml-3",children:"Add Section"}),e.jsx(x,{style:{margin:"20px"},type:"button",color:"danger",onClick:F,className:"mb-3 ml-3",children:"Remove the last Section"})]})}),e.jsx("h2",{style:{textAlign:"center",margin:"20px"},children:"Tasks"}),t.tasks.map((s,a)=>e.jsxs("div",{children:[e.jsxs("h5",{style:{margin:"20px",color:"green"},children:["Task ",a+1," :"]}),e.jsx(r,{label:"Task Name",children:e.jsx(l,{type:"text",name:"taskName",value:s.taskName,onChange:n=>c(a,n)})}),e.jsx(r,{label:"Deadline",children:e.jsx(l,{type:"datetime-local",name:"deadline",value:s.deadline,onChange:n=>c(a,n)})}),e.jsx(r,{label:"Status",children:e.jsxs(S,{name:"status",value:s.status,onChange:n=>c(a,n),children:[e.jsx("option",{value:"Not Started",children:"Not Started"}),e.jsx("option",{value:"In Progress",children:"In Progress"}),e.jsx("option",{value:"Completed",children:"Completed"})]})}),e.jsx(r,{label:"Workers",children:e.jsx(k,{name:"workers",value:s.workers.join(", "),onChange:n=>c(a,n)})})]},a)),e.jsx(b,{className:"justify-content-center",children:e.jsxs(f,{xs:"auto",children:[e.jsx(x,{style:{margin:"20px"},type:"button",color:"info",onClick:h,className:"mb-3 ml-3",children:"Add Task"}),e.jsx(x,{style:{margin:"20px"},type:"button",color:"danger",onClick:E,className:"mb-3 ml-3",children:"Remove the last Task"})]})}),e.jsx("h2",{style:{textAlign:"center",margin:"20px"},children:"Media"}),e.jsx(T,{}),e.jsx(b,{className:"justify-content-center",children:e.jsx(f,{xs:"auto",children:e.jsx(x,{onClick:w,type:"submit",color:"primary",className:"mt-3",children:"Create Event"})})})]})})]})]})},r=({label:p,children:t})=>e.jsxs(b,{className:"mb-3",children:[e.jsx(f,{md:"3",children:e.jsx(H,{children:p})}),e.jsx(f,{md:"9",children:t})]});export{ee as default};
