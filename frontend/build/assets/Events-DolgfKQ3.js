import{j as e,r as u,h as P,k as M}from"./index-29A1QwRH.js";import{F as D,i as v}from"./index-Cv7hPpv5.js";import{c as S,a as x,b as h}from"./index.es-D8-yiwlK.js";import{C as k,a as w,b as z,c as T,d as B}from"./DefaultLayout-Z_fmIQUZ.js";import{C,a as c}from"./CRow-DXxDC0Wp.js";import{C as E,a as N}from"./CCardBody-HSJgo8bS.js";import{C as L}from"./CCardHeader--gyMcBsG.js";import{C as F,a as H,b as m,c as j,d as I,e as p}from"./CTable-86I1A4KV.js";import{C as G,a as g}from"./CPaginationItem-CuZmn-2E.js";import"./isObject-BCzDCH_6.js";import"./cil-user-Ddrdy7PS.js";var R=["32 32","<path d='M7.713 4.552c0.573-0.333 1.167-0.631 1.787-0.891 1.307-0.557 2.656-0.875 4.047-1.016l1.5 1.699-0.697 1.755c-1.36 0.261-2.641 0.761-3.839 1.485l-0.26 0.156-0.235-2.313-2.303-0.88zM7.063 4.964l2.385 0.921 0.249 2.281c-1.291 0.948-2.301 2.161-3.020 3.64-0.068 0.131-0.131 0.261-0.188 0.396l-1.677-2.036-2.739 0.579c0.681-1.475 1.604-2.787 2.749-3.948 0.688-0.693 1.428-1.303 2.224-1.833zM22.771 21.036c0.26-0.432 0.469-0.869 0.641-1.323l2.583 3.136 4.339-0.937c-0.251 0.687-0.541 1.353-0.88 2.009-0.896 1.724-2.073 3.215-3.532 4.48-1.484 1.287-3.161 2.224-5.031 2.812-0.036 0.011-0.073 0.021-0.109 0.032l-3.213-2.719 0.839-3.699 0.067-0.025c1.839-0.803 3.276-2.043 4.297-3.781zM28.203 6.407c0.267 0.364 0.511 0.744 0.751 1.14 0.989 1.661 1.672 3.443 2.052 5.339 0.364 1.88 0.421 3.771 0.161 5.667-0.14 0.912-0.339 1.803-0.62 2.672l-4.339 0.932-2.599-3.145c0.303-1.156 0.339-2.36 0.079-3.609-0.303-1.484-0.959-2.756-1.939-3.803l4.677-0.557 1.745-4.635zM1.787 11.448l2.797-0.593 1.651 2.009c-0.527 1.448-0.641 2.948-0.38 4.505 0.057 0.448 0.156 0.876 0.276 1.292l-2.959-0.672-2.12 2.511c-0.255-1.115-0.375-2.249-0.375-3.407 0-1.937 0.359-3.801 1.072-5.599l0.021-0.052zM6.375 19.36c0.423 1.124 1.047 2.151 1.876 3.088 0.619 0.713 1.323 1.297 2.088 1.755l-2.937 1.683 0.161 3.817c-0.969-0.599-1.86-1.317-2.667-2.14-1.36-1.401-2.401-2.995-3.12-4.797-0.197-0.5-0.36-1-0.5-1.5l2.183-2.563 2.957 0.683zM10.973 24.552c0.631 0.317 1.308 0.557 2.027 0.719 1.609 0.375 3.183 0.313 4.703-0.188l-0.833 3.677 3.183 2.693c-1.588 0.416-3.213 0.593-4.875 0.536-1.943-0.063-3.808-0.473-5.589-1.235-0.479-0.203-0.937-0.427-1.385-0.676l-0.161-3.844zM27.755 5.817l-1.749 4.652-4.823 0.577c-0.141-0.12-0.281-0.24-0.433-0.339-1.583-1.203-3.364-1.901-5.337-2.104-0.464-0.036-0.901-0.036-1.324-0.036l1.683-4.303-3.635-4.14c1.099-0.12 2.181-0.136 3.276-0.12 0.656 0.021 1.301 0.068 1.948 0.151 0.905 0.12 1.796 0.317 2.681 0.563 1.876 0.532 3.584 1.375 5.125 2.573 0.973 0.744 1.833 1.588 2.588 2.525z'/>"];const A=({selectedEvent:t,setSelectedEvent:r})=>e.jsx(e.Fragment,{children:e.jsxs(k,{backdrop:"static",visible:t,onClose:()=>r(null),"aria-labelledby":"StaticBackdropExampleLabel",children:[e.jsx(w,{style:{backgroundColor:"#1A233B",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(z,{style:{color:"white"},id:"StaticBackdropExampleLabel",children:[e.jsx(S,{style:{marginRight:"10px"},icon:R}),t==null?void 0:t.title]})}),e.jsx(T,{children:t&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Start:"})," ",new Date(t.start).toLocaleString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End:"})," ",new Date(t.end).toLocaleString()]})]})}),e.jsxs(B,{children:[e.jsx(x,{color:"danger",children:"Delete Event"}),e.jsx(x,{style:{backgroundColor:"#1A233B",color:"white"},children:"Update Event"})]})]})}),O=({events:t})=>{const[s,n]=u.useState(1),l=s*8,a=l-8,i=t.slice(a,l),o=Math.ceil(t.length/8),b=()=>{s>1&&n(s-1)},y=()=>{s<o&&n(s+1)};return e.jsxs(E,{children:[e.jsx(L,{className:"text-center",children:"Events"}),e.jsxs(N,{children:[e.jsxs(F,{striped:!0,responsive:!0,className:"text-center",children:[e.jsx(H,{children:e.jsxs(m,{children:[e.jsx(j,{scope:"col",children:"Event"}),e.jsx(j,{scope:"col",children:"Date"})]})}),e.jsx(I,{children:i.map((d,f)=>e.jsxs(m,{children:[e.jsx(p,{children:d.title}),e.jsx(p,{children:new Date(d.start).toLocaleString()})]},f))})]}),e.jsxs(G,{pages:o,align:"center",children:[e.jsx(g,{onClick:b,disabled:s<=1,"aria-label":"Previous",children:"Previous"}),e.jsx(g,{onClick:y,disabled:s>=o,"aria-label":"Next",children:"Next"})]})]})]})},$=()=>{const[t,r]=u.useState(null),s=P(a=>a.events.events);console.log("events from events :",s);const n=a=>{const i=a.event;r(i)};if(!s)return e.jsx(h,{style:{padding:"20px"},className:"mt-4",children:e.jsx(C,{children:e.jsx(c,{xs:"auto",children:e.jsx(M,{color:"primary"})})})});const l=s.map((a,i)=>({id:a._id,title:a.eventName,start:new Date(a.startDate),end:new Date(a.endDate),location:a.location,capacity:a.capacity,organizer:a.organizer,startingHour:a.startingHour,duartion:a.duration}));return e.jsxs(h,{style:{padding:"20px"},className:"mt-4",children:[e.jsx(A,{selectedEvent:t,setSelectedEvent:r}),e.jsxs(C,{children:[e.jsx(c,{xs:"12",lg:"9",children:e.jsx(D,{plugins:[v],initialView:"dayGridMonth",events:l,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,dayGridWeek,dayGridDay"},initialDate:new Date,eventClick:n})}),e.jsx(c,{xs:"12",lg:"3",children:e.jsx(O,{events:l})})]})]})};export{$ as default};