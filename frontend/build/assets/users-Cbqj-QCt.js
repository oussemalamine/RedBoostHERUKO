import{j as e,G as u,r as h,h as j,n as k,k as L,o as U,a4 as z}from"./index-C20-YBnv.js";import{Q as M,B as y}from"./ReactToastify-DhcJQL6A.js";import{i as V}from"./user-D27XD59X.js";import{F as H,g as I}from"./index-CFZuQe47.js";import{b as T}from"./index-EvbK1PCm.js";import{C as b,a as f,b as g,c as v,d as C}from"./DefaultLayout-GwGda1gC.js";import{b as o,C as n}from"./CFormInput-B2TUOKM0.js";import{a as N}from"./index.es-DrwUOC1o.js";import{C as _,d as $}from"./CTable-DpZJIHAJ.js";import"./iconBase-0t_BdTsq.js";import"./isObject-BvcBn54A.js";import"./cil-user-Ddrdy7PS.js";function G({visible:l,setVisible:r,selectedUser:a}){return e.jsxs(b,{visible:l,onClose:()=>r(!1),"aria-labelledby":"LiveDemoExampleLabel",backdrop:"static",children:[e.jsx(f,{closeButton:!0,children:e.jsx(g,{id:"LiveDemoExampleLabel",children:"Edit User"})}),e.jsxs(v,{style:{height:"450px",overflow:"auto"},className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"username",children:"Username :"}),e.jsx(n,{type:"text",id:"username",placeholder:"Username","aria-describedby":"usernameHelpInline",value:a.username})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"email",children:"Email :"}),e.jsx(n,{type:"text",id:"email",placeholder:"Email","aria-describedby":"emailHelpInline",value:a.email})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"birthday",children:"Exp Points :"}),e.jsx(n,{type:"number",id:"exp",placeholder:"exp",value:a.exp})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"birthday",children:"Birthday :"}),e.jsx(n,{type:"date",id:"birthday",placeholder:"Birthday",value:a.birthday})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"department",children:"Department :"}),e.jsx(n,{type:"text",id:"department",placeholder:"Department",value:a.department})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"address",children:"Address :"}),e.jsx(n,{type:"text",id:"address",placeholder:"Address",value:a.adress})]})]}),e.jsx(C,{children:e.jsx(N,{color:"primary",children:"Save"})})]})}function P({view:l,setView:r,selectedUser:a}){return e.jsxs(b,{visible:l,onClose:()=>r(!1),"aria-labelledby":"LiveDemoExampleLabel",backdrop:"static",children:[e.jsx(f,{closeButton:!0,children:e.jsx(g,{id:"LiveDemoExampleLabel",children:"View History"})}),e.jsx(v,{className:"modal-body"}),e.jsx(_,{responsive:!0,style:{height:"450px",overflow:"auto"},children:e.jsx($,{style:{alignContent:"center"},children:a&&a.logs&&a.logs.length>0?a.logs.map((d,t)=>e.jsxs(u,{style:{margin:"10px 10px"},color:Q(t),children:[d.date," :"," ",d.events.map((m,i)=>e.jsx("span",{style:{backgroundColor:"transparent"},children:m},i))]},t)):e.jsx(u,{style:{margin:"10px 10px"},color:"warning",children:"No logs found."})})}),e.jsx(C,{children:e.jsx(N,{color:"danger",children:"Clear History"})})]})}const Q=l=>{const r=["primary","secondary","success","danger","warning","info","light","dark"];return r[l%r.length]};function le(){const[l,r]=h.useState(!1),[a,d]=h.useState(!1),[t,m]=h.useState(null),i=j(s=>s.usersSlice.users),x=j(s=>s.userData.userData);console.log("users from users :",i);const F=k(),p=()=>{y.error("You are not authorized to perform this action",{autoClose:3e3})},w=()=>{y.success("User Deleted successfully",{autoClose:3e3})},D=async s=>{if(x.role!=="Super Admin"){p();return}try{if((await U.delete(`/users/${s}`)).data){console.log("User Deleted");const B=i.filter(A=>A._id!==s);F(z(B)),w()}}catch(c){console.log(c)}},E=s=>{if(x.role!=="Super Admin"){p();return}r(!0),m(s)},S=s=>{if(x.role!=="Super Admin"){p();return}m(s),d(!0)};return i.length===0?e.jsx(h.Suspense,{fallback:e.jsx("div",{className:"pt-3 text-center",children:e.jsx(L,{color:"primary",variant:"grow"})})}):e.jsxs("div",{className:"container",children:[e.jsx(M,{}),t&&e.jsx(G,{visible:l,setVisible:r,selectedUser:t}),t&&e.jsx(P,{view:a,setView:d,selectedUser:t}),e.jsx("div",{className:"main-body",children:e.jsx("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm",children:i.map((s,c)=>e.jsx("div",{className:"col mb-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{style:{backgroundColor:`#${R(c)}`,height:"100px"},className:"card-img-top"}),e.jsxs("div",{className:"card-body text-center",children:[e.jsx("img",{src:s.image?s.image:V,style:{width:"110px",marginTop:"-65px"},alt:"User",className:"img-fluid img-thumbnail rounded-circle border-0 mb-3"}),e.jsx("h5",{className:"card-title",children:s.username}),e.jsx("p",{className:"text-secondary mb-1",children:s.role}),e.jsx("p",{className:"text-muted font-size-sm",children:s.email})]}),e.jsx("div",{className:"card-footer",children:e.jsxs("ul",{className:"list-unstyled mb-0 d-flex justify-content-between align-items-center flex-wrap",style:{maxWidth:"70%",margin:"0 auto"},children:[e.jsx("li",{className:"p-2",children:e.jsx("a",{href:"#",className:"text-primary","data-toggle":"tooltip",title:"View",children:e.jsx(H,{onClick:()=>S(s),style:{fontSize:"1.2rem"}})})}),e.jsx("li",{className:"p-2",children:e.jsx("a",{href:"#",className:"text-info","data-toggle":"tooltip",title:"Edit",children:e.jsx(I,{onClick:()=>E(s),style:{fontSize:"1.2rem"}})})}),s._id!==x._id?e.jsx("li",{className:"p-2",children:e.jsx("a",{href:"#",className:"text-danger","data-toggle":"tooltip",title:"Delete",children:e.jsx(T,{onClick:()=>D(s._id),style:{fontSize:"1.2rem"}})})}):null]})})]})},c))})})]})}const R=l=>{const r=["FFB6C1","87CEFA","20B2AA","FFA07A","7B68EE","BA55D3","FF4500","191970","DDA0DD","DB7093","663399","FF8C00"];return r[l%r.length]};export{le as default};
