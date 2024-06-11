import{n as z,h as u,r as s,j as e,o as U,a3 as $}from"./index-29A1QwRH.js";import{P as G}from"./ProgramCard-CEptDOAB.js";import{C as H,a as V,b as X,c as Z}from"./DefaultLayout-Z_fmIQUZ.js";import{C as q}from"./CForm-DGBJ9L_N.js";import{C as o}from"./CInputGroup-eUuDXdBd.js";import{a as h}from"./index.es-D8-yiwlK.js";import{a as i,C as D}from"./CRow-DXxDC0Wp.js";import{C as t}from"./CFormInput-MxzM8Zk_.js";import{C as l}from"./CInputGroupText-SVp4hbQ1.js";import{C as J}from"./CFormTextarea-yPTlh0nk.js";import{C as K}from"./CFormSelect-DmrR0Fbl.js";import{C as O,a as Q}from"./CCardBody-HSJgo8bS.js";import"./CListGroupItem-SioOQ_d9.js";import"./isObject-BCzDCH_6.js";import"./cil-user-Ddrdy7PS.js";const W=2097152;function ue(){const S=z(),x=u(a=>a.usersSlice.users),C=u(a=>a.userData.userData),j=u(a=>a.programsSlice.programs);console.log("users",x),console.log("currentUser",C);const[d,E]=s.useState(""),[c,v]=s.useState(null),[f,F]=s.useState(""),[b,T]=s.useState(""),[n,L]=s.useState(""),[m,I]=s.useState(""),[g,w]=s.useState(""),[y,B]=s.useState(""),[N,p]=s.useState(!1);console.log("programs",j);const P=s.useRef(null),M=a=>{a<n?alert("End date must be greater than start date"):I(a)},k=()=>{P.current.click()},A=()=>{if(c===null||f===""||b===""||n===""||m===""||g===""||y===""){alert("Please fill all the fields");return}const a=new FormData;console.log("logo",c),a.append("logo",c),U.post("/uploadLogo",a,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{if(r.status===200){console.log("response",r);const _={programTitle:f,programDescription:b,startDate:n,endDate:m,budget:g,authorizedUsers:[y],logo:r.data.secure_url};S($(_))}}).catch(r=>{console.log("error",r)}),p(!1)},R=a=>{const r=a.target.files[0];if(r&&r.size>W){alert("File size exceeds the maximum limit of 2MB");return}v(r),E(r.name)};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{"fullscreen-md-down":"true",visible:N,onClose:()=>p(!1),"aria-labelledby":"FullscreenExample1",children:[e.jsx(V,{children:e.jsx(X,{id:"FullscreenExample1",children:"Add Program"})}),e.jsx(Z,{children:e.jsxs(q,{children:[e.jsxs(o,{className:"mb-3 border rounded",children:[e.jsx(h,{color:"primary",onClick:k,children:"Choose Logo"}),e.jsxs(i,{className:"d-flex align-items-center justify-content-center",children:[e.jsx(t,{ref:P,accept:"image/*",style:{display:"none"},type:"file",id:"logo",name:"logo",placeholder:"Enter logo",onChange:R}),!d&&e.jsx("span",{className:"logo-name",children:"..."}),d&&e.jsx("span",{className:"logo-name",children:d})]})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(l,{id:"basic-addon2",children:"@"}),e.jsx(t,{id:"program name",placeholder:"Program Name","aria-label":"Program Name","aria-describedby":"basic-addon2",onChange:a=>F(a.target.value)})]}),e.jsx(o,{className:"mb-3",children:e.jsx(J,{type:"text-area",id:"program description",placeholder:"Program Description","aria-label":"Program Description","aria-describedby":"basic-addon2",onChange:a=>T(a.target.value)})}),e.jsxs(i,{className:"mb-3 d-flex gap-3",children:[e.jsxs(o,{children:[e.jsx(l,{id:"basic-addon2",children:"Start Date"}),e.jsx(t,{type:"date",id:"start date",placeholder:"Enter start date",value:n,onChange:a=>L(a.target.value)})]}),e.jsxs(o,{children:[e.jsx(l,{id:"basic-addon2",children:"End Date"}),e.jsx(t,{type:"date",id:"end date",placeholder:"Enter end date",value:m,onChange:a=>M(a.target.value)})]})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(l,{children:"$"}),e.jsx(t,{type:"number",id:"budget",placeholder:"Enter budget",value:g,onChange:a=>w(a.target.value)}),e.jsx(l,{children:".00"})]}),e.jsx(o,{className:"mb-3",children:e.jsxs(K,{"aria-label":"The Program Lead",onChange:a=>B(a.target.value),children:[e.jsx("option",{children:"Choose The Program Lead"}),x.map(a=>e.jsx("option",{value:a.username,children:a.username},a._id))]})}),e.jsx(D,{xs:{cols:"auto"},children:e.jsx(i,{xs:!0,className:"m-auto",children:e.jsx(h,{color:"primary",onClick:A,children:"Add Program"})})})]})})]}),e.jsx("div",{className:"text-end",children:e.jsx(h,{className:" mb-3",color:"primary",style:C.role==="superAdmin"?{}:{display:"none"},onClick:()=>p(!N),children:"Add Program"})}),e.jsx(O,{className:"mb-4",children:e.jsx(Q,{children:e.jsx(D,{children:j.map((a,r)=>e.jsx(i,{xs:12,sm:6,md:4,lg:3,children:e.jsx(G,{logo:a.logo,title:a.programTitle,path:`${window.location.pathname}/${a.programTitle}`})},r))})})})]})}export{ue as default};