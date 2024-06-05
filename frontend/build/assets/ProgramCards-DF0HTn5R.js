import{n as U,h as m,r as s,j as e,o as G,a3 as z}from"./index-C3CoNNpc.js";import{P as H}from"./ProgramCard-D9cBHT4k.js";import{C as V,a as _,b as q,c as J}from"./DefaultLayout-vreR-SD8.js";import{C as K}from"./CForm-Cm9DOwe3.js";import{C as o}from"./CInputGroup-BSfQj3sT.js";import{a as p}from"./index.es-DqiaJuwN.js";import{a as n,C as y}from"./CRow-woHDP1vi.js";import{C as t}from"./CFormInput-BitUmp5T.js";import{C as l}from"./CInputGroupText-DgPbAmVZ.js";import{C as O}from"./CFormTextarea-DDXIH3Hb.js";import{C as Q}from"./CFormSelect-DAXpPQiA.js";import{C as W,a as X}from"./CCardBody-CUx7f2c9.js";import"./CListGroupItem-B2phijOY.js";import"./isObject-CWAMfNc1.js";import"./cil-user-Ddrdy7PS.js";function ge(){const N=U(),g=m(a=>a.usersSlice.users),h=m(a=>a.userData.userData),u=m(a=>a.programsSlice.programs);console.log("users",g),console.log("currentUser",h);const[d,D]=s.useState(""),[x,P]=s.useState(null),[S,v]=s.useState(""),[E,T]=s.useState(""),[c,F]=s.useState(""),[C,L]=s.useState(""),[j,k]=s.useState(""),[w,I]=s.useState(""),[f,i]=s.useState(!1);console.log("programs",u);const b=s.useRef(null),B=a=>{a<c?alert("End date must be greater than start date"):L(a)},A=()=>{b.current.click()},M=()=>{const a=new FormData;console.log("logo",x),a.append("logo",x),G.post("/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{if(r.status===200){console.log("response",r);const $={programTitle:S,programDescription:E,startDate:c,endDate:C,budget:j,authorizedUsers:[w],logo:`https://redboost-65f83dc8cbf1.herokuapp.com//${r.data.path}`};N(z($))}}).catch(r=>{console.log("error",r)}),i(!1)},R=a=>{const r=a.target.files[0];P(r),D(r.name)};return e.jsxs(e.Fragment,{children:[e.jsxs(V,{"fullscreen-md-down":"true",visible:f,onClose:()=>i(!1),"aria-labelledby":"FullscreenExample1",children:[e.jsx(_,{children:e.jsx(q,{id:"FullscreenExample1",children:"Add Program"})}),e.jsx(J,{children:e.jsxs(K,{children:[e.jsxs(o,{className:"mb-3 border rounded",children:[e.jsx(p,{color:"primary",onClick:A,children:"Choose Logo"}),e.jsxs(n,{className:"d-flex align-items-center justify-content-center",children:[e.jsx(t,{ref:b,accept:"image/*",style:{display:"none"},type:"file",id:"logo",name:"logo",placeholder:"Enter logo",onChange:R}),!d&&e.jsx("span",{className:"logo-name",children:"..."}),d&&e.jsx("span",{className:"logo-name",children:d})]})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(l,{id:"basic-addon2",children:"@"}),e.jsx(t,{id:"program name",placeholder:"Program Name","aria-label":"Program Name","aria-describedby":"basic-addon2",onChange:a=>v(a.target.value)})]}),e.jsx(o,{className:"mb-3",children:e.jsx(O,{type:"text-area",id:"program description",placeholder:"Program Description","aria-label":"Program Description","aria-describedby":"basic-addon2",onChange:a=>T(a.target.value)})}),e.jsxs(n,{className:"mb-3 d-flex gap-3",children:[e.jsxs(o,{children:[e.jsx(l,{id:"basic-addon2",children:"Start Date"}),e.jsx(t,{type:"date",id:"start date",placeholder:"Enter start date",value:c,onChange:a=>F(a.target.value)})]}),e.jsxs(o,{children:[e.jsx(l,{id:"basic-addon2",children:"End Date"}),e.jsx(t,{type:"date",id:"end date",placeholder:"Enter end date",value:C,onChange:a=>B(a.target.value)})]})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(l,{children:"$"}),e.jsx(t,{type:"number",id:"budget",placeholder:"Enter budget",value:j,onChange:a=>k(a.target.value)}),e.jsx(l,{children:".00"})]}),e.jsx(o,{className:"mb-3",children:e.jsxs(Q,{"aria-label":"The Program Lead",onChange:a=>I(a.target.value),children:[e.jsx("option",{children:"Choose The Program Lead"}),g.map(a=>e.jsx("option",{value:a.username,children:a.username},a._id))]})}),e.jsx(y,{xs:{cols:"auto"},children:e.jsx(n,{xs:!0,className:"m-auto",children:e.jsx(p,{color:"primary",onClick:M,children:"Add Program"})})})]})})]}),e.jsx("div",{className:"text-end",children:e.jsx(p,{className:" mb-3",color:"primary",style:h.role==="super Admin"?{}:{display:"none"},onClick:()=>i(!f),children:"Add Program"})}),e.jsx(W,{className:"mb-4",children:e.jsx(X,{children:e.jsx(y,{children:u.map((a,r)=>e.jsx(n,{xs:12,sm:6,md:4,lg:3,children:e.jsx(H,{logo:a.logo,title:a.programTitle,path:`${window.location.pathname}/${a.programTitle}`})},r))})})})]})}export{ge as default};