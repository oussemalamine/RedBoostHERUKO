import{r as t,h as x,j as e,L as a}from"./index-CLaqML1s.js";import{a as j}from"./index-DlG9BCMb.js";import{b as C,a as i}from"./index.esm-DuzmaDRC.js";import{C as p,a as u}from"./CRow-C37WeJRs.js";import{C as f,a as y}from"./CCardBody-Bo50hB9e.js";import{C as b}from"./CCardHeader-DRZ_vdeI.js";import{C as w}from"./CFormInput-Xs-XHeGW.js";import{C as T,a as g,d as s,c as v,b as N,e as l}from"./CTable-D0-kCFyt.js";import"./iconBase-B-AA4WnO.js";import"./CFormControlWrapper-CjTlA1pb.js";const M=()=>{const[n,c]=t.useState(""),[m,h]=t.useState([]),d=x(r=>r.entrepreneurs.entrepreneurs);return t.useEffect(()=>{const r=d.filter(o=>o.name&&o.name.toLowerCase().includes(n.toLowerCase())||o.email&&o.email.toLowerCase().includes(n.toLowerCase()));h(r)},[d,n]),e.jsx("div",{children:e.jsxs(C,{className:"my-4",children:[e.jsx(p,{className:"mb-4",children:e.jsxs(u,{children:[e.jsx(a,{to:"/dash/entrepeneurs",children:e.jsx(i,{color:"primary",className:"me-2",children:"Entrepreneurs"})}),e.jsx(a,{to:"/coaches",children:e.jsx(i,{color:"primary",className:"me-2",children:"Coaches"})}),e.jsx(a,{to:"/investors",children:e.jsx(i,{color:"primary",className:"me-2",children:"Investors"})}),e.jsx(a,{to:"/mentors",children:e.jsx(i,{color:"primary",className:"me-2",children:"Mentors"})}),e.jsx(a,{to:"/project-holders",children:e.jsx(i,{color:"primary",children:"Project Holders"})})]})}),e.jsxs(f,{children:[e.jsxs(b,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("h4",{style:{display:"flex",alignItems:"center"},children:[e.jsx(j,{style:{fontSize:"40px"}}),"All Contacts"]}),e.jsx(w,{type:"text",placeholder:"Search Contacts",value:n,onChange:r=>c(r.target.value),style:{maxWidth:"300px",marginRight:"10px"}})]}),e.jsx(y,{children:e.jsxs(T,{striped:!0,responsive:!0,children:[e.jsx(g,{children:e.jsxs("tr",{children:[e.jsx(s,{children:"Nom"}),e.jsx(s,{children:"Prénom"}),e.jsx(s,{children:"Mobile"}),e.jsx(s,{children:"Role"}),e.jsx(s,{children:"Gender"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Action"})]})}),e.jsx(v,{children:m.map(r=>e.jsxs(N,{children:[e.jsx(l,{children:r.nom}),e.jsx(l,{children:r.prenom}),e.jsx(l,{children:r.mobile}),e.jsx(l,{children:r.votreRole}),e.jsx(l,{children:r.genre}),e.jsx(l,{children:r.email}),e.jsx(l,{children:e.jsx(a,{to:`/dash/entrepeneurs/${r._id}`,children:e.jsx(i,{color:"primary",children:"View Profile"})})})]},r.id))})]})})]})]})})};export{M as default};