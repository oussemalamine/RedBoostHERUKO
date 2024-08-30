import{r as n,j as e,o as _}from"./index-liV4V1Uq.js";import{C as ee,a as te,b as re,c as ae,d as ie}from"./DefaultLayout-C6uJ3LBP.js";import{C as le}from"./CForm-Dvrw1di_.js";import{C as x,a as c}from"./CRow-B6SVFXtW.js";import{a,C as o,b as E}from"./CFormInput-BZZhJW11.js";import{C as se}from"./CFormSelect-BBxW9Wn4.js";import{a as B}from"./index.es-smJaQxJq.js";import{C as oe}from"./CTable-B1IOrf3j.js";import{Q as ne}from"./ReactToastify-YsGnr0bX.js";import{C as U,a as $}from"./CCardBody-D7cJFJkR.js";import{C as q}from"./CCardHeader-rLMJK4e8.js";import{C as V}from"./CCardTitle-D6CJCCrE.js";import{C as de}from"./CFormCheck-C1GXd4K3.js";import{C as u}from"./CFormTextarea-C0q6I-1v.js";import"./isObject-zc6aDx4i.js";import"./cil-user-Ddrdy7PS.js";const ce=({visible:H,onClose:F,onSave:z})=>{const[m,w]=n.useState([]),[b,D]=n.useState(""),[g,d]=n.useState([]),[f,v]=n.useState([]),[T,A]=n.useState([]),[C,W]=n.useState(""),[S,R]=n.useState([]),L=[{value:"Agriculture durable",label:"Agriculture durable"},{value:"Cosmétique",label:"Cosmétique"},{value:"Recyclage",label:"Recyclage"},{value:"Green Tech",label:"Green Tech"},{value:"Agro-alimentaire",label:"Agro-alimentaire"},{value:"Créatif et culturel",label:"Créatif et culturel"},{value:"Tourisme durable",label:"Tourisme durable"},{value:"Optimisation de la consommation",label:"Optimisation de la consommation"},{value:"Énergie renouvelable",label:"Énergie renouvelable"},{value:"Gestion des ressources hydrauliques",label:"Gestion des ressources hydrauliques"}],r=["Ariana","Beja","Ben Arous","Bizerte","Gabes","Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef","Mahdia","Manouba","Medenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"];n.useEffect(()=>{(async()=>{try{const l=await _.get("/loadAllEntrepreneurs");A(l.data),R(l.data)}catch(l){console.error("Error fetching emails:",l)}})()},[]),n.useEffect(()=>{h()},[m,b,g]),n.useEffect(()=>{const i=T.filter(l=>l.email.toLowerCase().includes(C.toLowerCase()));R(i)},[C,T]);const h=()=>{const i=T.filter(l=>(m.length===0||m.includes(l.region))&&(b===""||l.gender===b)&&(g.length===0||g.includes(l.sector)));R(i)},M=i=>{f.some(l=>l.email===i.email)?v(f.filter(l=>l.email!==i.email)):v([...f,i])},N=()=>{f.length===S.length?v([]):v(S)},G=()=>{const i=f.map(l=>l.email);console.log("Selected Emails for Save:",i),z(i),F()};return e.jsxs(ee,{visible:H,onClose:F,children:[e.jsx(te,{closeButton:!0,children:e.jsx(re,{children:"Select Recipients"})}),e.jsx(ae,{children:e.jsxs(le,{children:[e.jsxs(x,{children:[e.jsxs(c,{children:[e.jsx(a,{children:"Regions"}),e.jsx("div",{style:{maxHeight:"90px",overflowY:"auto"},children:r.map((i,l)=>e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",value:i,onChange:y=>{const s=y.target.value;m.includes(s)?w(m.filter(k=>k!==s)):w([...m,s])},checked:m.includes(i)}),e.jsx(a,{children:i})]},l))})]}),e.jsxs(c,{children:[e.jsx(a,{children:"Gender"}),e.jsxs(se,{id:"gender",value:b,onChange:i=>D(i.target.value),children:[e.jsx("option",{value:"",children:"All Genders"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs(c,{children:[e.jsx(a,{children:"Sectors"}),e.jsx("div",{style:{maxHeight:"90px",overflowY:"auto"},children:L.map((i,l)=>e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",value:i.value,onChange:y=>{const s=y.target.value;g.includes(s)?d(g.filter(k=>k!==s)):d([...g,s])},checked:g.includes(i.value)}),e.jsx(a,{style:{fontSize:"12px"},children:i.label})]},l))})]})]}),e.jsx(x,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{type:"text",placeholder:"Search by email",value:C,onChange:i=>W(i.target.value)}),e.jsx(e.Fragment,{children:e.jsx(B,{color:"primary",children:"Search"})})]})})}),e.jsx(x,{className:"mt-3",children:e.jsx(c,{children:e.jsxs(oe,{striped:!0,hover:!0,responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("input",{type:"checkbox",checked:f.length===S.length,onChange:N})}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Region"}),e.jsx("th",{children:"Gender"}),e.jsx("th",{children:"Sector"})]})}),e.jsx("tbody",{children:S.map((i,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",checked:f.some(y=>y.email===i.email),onChange:()=>M(i)})}),e.jsx("td",{children:i.email}),e.jsx("td",{children:i.region}),e.jsx("td",{children:i.gender}),e.jsx("td",{children:i.sector})]},l))})]})})})]})}),e.jsxs(ie,{children:[e.jsx(B,{color:"secondary",onClick:F,children:"Close"}),e.jsx(B,{color:"primary",onClick:G,children:"Save Recipients"})]})]})},K=ce;function Fe(){const[H,F]=n.useState(!1),[z,m]=n.useState(""),[w,b]=n.useState(""),[D,g]=n.useState("");n.useState([]);const[d,f]=n.useState(null),[v,T]=n.useState(!1),[A,C]=n.useState(!1),[W,S]=n.useState([]),[R,L]=n.useState([]),[r,h]=n.useState({title1:"",firstParagraph:"",firstButton:"",firstButtonLink:"",title2:"",SecondParagraph:"",title3:"",thirdParagraph:"",title4:"",fourthParagraph:"",logo:"https://via.placeholder.com/290x150",image1:"https://via.placeholder.com/600x300",image2:"https://via.placeholder.com/290x150",image3:"https://via.placeholder.com/290x150"}),l=[()=>e.jsx("table",{align:"center",role:"presentation",border:"0",cellSpacing:"0",cellPadding:"0",width:"100%",style:{maxWidth:"600px",margin:"auto",fontFamily:"Arial, sans-serif",backgroundColor:"#ffffff",borderRadius:"8px",padding:"20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{color:"#333",fontSize:"16px",lineHeight:"1.6"},children:e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("img",{src:r.image1,alt:"Featured Article",style:{maxWidth:"100%",borderRadius:"8px"}}),e.jsx("h3",{style:{fontSize:"20px",marginBottom:"10px"},children:r.title1}),e.jsx("p",{style:{marginBottom:"10px"},children:r.firstParagraph}),e.jsx("a",{href:r.firstButtonLink,style:{color:"#007bff",textDecoration:"none"},children:r.firstButton})]})})}),e.jsx("tr",{children:e.jsxs("td",{align:"center",style:{padding:"0 20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{flex:"1",paddingRight:"10px",textAlign:"left"},children:[e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:r.title2}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.SecondParagraph})]}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image2,alt:"Picture 1",style:{maxWidth:"100%",borderRadius:"8px"}})})]}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsx("tr",{children:e.jsxs("td",{align:"center",children:[e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:r.title3}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.thirdParagraph}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px auto",maxWidth:"80%"}})]})}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsxs("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.6",marginBottom:"20px"},children:["Regards,",e.jsx("br",{}),"Redstart"]})]})})]})}),()=>e.jsx("table",{align:"center",role:"presentation",border:"0",cellSpacing:"0",cellPadding:"0",width:"100%",style:{maxWidth:"600px",margin:"auto",fontFamily:"Arial, sans-serif",backgroundColor:"#ffffff",borderRadius:"8px",padding:"20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{align:"center",children:[e.jsx("img",{src:r.logo,alt:"Logo",style:{maxWidth:"100%",marginBottom:"10px"}}),e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:"Redstart Tunisie"}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:"slogen1 bird fathers and life is good"}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px auto",maxWidth:"80%"}})]})}),e.jsx("tr",{children:e.jsx("td",{style:{color:"#333",fontSize:"16px",lineHeight:"1.6"},children:e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("img",{src:r.image1,alt:"Featured Article",style:{maxWidth:"100%",borderRadius:"8px"}}),e.jsx("h3",{style:{fontSize:"20px",marginBottom:"10px"},children:r.title}),e.jsx("p",{style:{marginBottom:"10px"},children:r.firstParagraph}),e.jsx("a",{href:r.firstButtonLink,style:{color:"#007bff",textDecoration:"none"},children:r.firstButton})]})})}),e.jsx("tr",{children:e.jsxs("td",{align:"center",style:{padding:"0 20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{flex:"1",paddingRight:"10px",textAlign:"left"},children:[e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:r.title2}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.SecondParagraph})]}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image2,alt:"Picture 1",style:{maxWidth:"100%",borderRadius:"8px"}})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[e.jsx("div",{style:{flex:"1",paddingRight:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image3,alt:"Picture 2",style:{maxWidth:"100%",borderRadius:"8px"}})}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"left"},children:e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.thirdParagraph})})]}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsxs("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.6",marginBottom:"20px"},children:["Regards,",e.jsx("br",{}),"Redstart"]})]})})]})}),()=>e.jsx("table",{align:"center",role:"presentation",border:"0",cellSpacing:"0",cellPadding:"0",width:"100%",style:{maxWidth:"600px",margin:"auto",fontFamily:"Arial, sans-serif",backgroundColor:"#ffffff",borderRadius:"8px",padding:"20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{align:"center",children:[e.jsx("img",{src:r.logo,alt:"Logo",style:{maxWidth:"100%",marginBottom:"10px"}}),e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:"Redstart Tunisie"}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:"sden but amount paid."}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px auto",maxWidth:"80%"}})]})}),e.jsx("tr",{children:e.jsx("td",{style:{color:"#333",fontSize:"16px",lineHeight:"1.6"},children:e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("img",{src:r.image1,alt:"Featured Article",style:{maxWidth:"100%",borderRadius:"8px"}}),e.jsx("h3",{style:{fontSize:"20px",marginBottom:"10px"},children:r.title1}),e.jsx("p",{style:{marginBottom:"10px"},children:r.firstParagraph}),e.jsx("a",{href:r.firstButtonLink,style:{color:"#007bff",textDecoration:"none"},children:r.firstButton})]})})}),e.jsx("tr",{children:e.jsxs("td",{align:"center",style:{padding:"0 20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{flex:"1",paddingRight:"10px",textAlign:"left"},children:[e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:r.title2}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.SecondParagraph})]}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image2,alt:"Picture 1",style:{maxWidth:"100%",borderRadius:"8px"}})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[e.jsx("div",{style:{flex:"1",paddingRight:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image3,alt:"Picture 2",style:{maxWidth:"100%",borderRadius:"8px"}})}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"left"},children:e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.thirdParagraph})})]}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsxs("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.6",marginBottom:"20px"},children:["Regards,",e.jsx("br",{}),"Redstart"]})]})})]})}),()=>e.jsx("table",{align:"center",role:"presentation",border:"0",cellSpacing:"0",cellPadding:"0",width:"100%",style:{maxWidth:"600px",margin:"auto",fontFamily:"Arial, sans-serif",backgroundColor:"#ffffff",borderRadius:"8px",padding:"20px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{align:"center",children:[e.jsx("img",{src:r.logo,alt:"Logo",style:{maxWidth:"100%",marginBottom:"10px"}}),e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:"Redstart Tunisie"}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:"The Ministry of Industry, which of the international order. Many"}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px auto",maxWidth:"80%"}})]})}),e.jsx("tr",{children:e.jsx("td",{style:{color:"#333",fontSize:"16px",lineHeight:"1.6"},children:e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("img",{src:r.image1,alt:"Featured Article",style:{maxWidth:"100%",borderRadius:"8px"}}),e.jsx("h3",{style:{fontSize:"20px",marginBottom:"10px"},children:r.title1}),e.jsx("p",{style:{marginBottom:"10px"},children:r.firstParagraph}),e.jsx("a",{href:r.firstButtonLink,style:{color:"#007bff",textDecoration:"none"},children:r.firstButton})]})})}),e.jsx("tr",{children:e.jsxs("td",{align:"center",style:{padding:"0 20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{flex:"1",paddingRight:"10px",textAlign:"left"},children:[e.jsx("h2",{style:{color:"#333",fontSize:"24px",marginBottom:"10px"},children:r.title2}),e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.SecondParagraph})]}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image2,alt:"Picture 1",style:{maxWidth:"100%",borderRadius:"8px"}})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[e.jsx("div",{style:{flex:"1",paddingRight:"10px",textAlign:"center"},children:e.jsx("img",{src:r.image3,alt:"Picture 2",style:{maxWidth:"100%",borderRadius:"8px"}})}),e.jsx("div",{style:{flex:"1",paddingLeft:"10px",textAlign:"left"},children:e.jsx("p",{style:{color:"#666",fontSize:"16px",lineHeight:"1.6",marginBottom:"20px"},children:r.thirdParagraph})})]}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsx("hr",{style:{border:"none",borderBottom:"1px solid #ddd",margin:"20px 0",maxWidth:"80%"}}),e.jsxs("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.6",marginBottom:"20px"},children:["Regards,",e.jsx("br",{}),"Redstart"]})]})})]})})],y=t=>{switch(f(t),t){case 0:h({title1:"Title 1 for Template 1",firstParagraph:"First Paragraph for Template 1",firstButton:"Button Text 1 for Template 1",firstButtonLink:"https://example.com/link1",title2:"Title 2 for Template 1",SecondParagraph:"Second Paragraph for Template 1",title3:"Title 3 for Template 1",thirdParagraph:"Third Paragraph for Template 1",title4:"Title 4 for Template 1",fourthParagraph:"Fourth Paragraph for Template 1",image1:"https://via.placeholder.com/600x300",image2:"https://via.placeholder.com/290x150"});break;case 1:h({title1:"Title 1 for Template 2",firstParagraph:"First Paragraph for Template 2",firstButton:"Button Text 2 for Template 2",firstButtonLink:"https://example.com/link2",title2:"Title 2 for Template 2",SecondParagraph:"Second Paragraph for Template 2",title3:"Title 3 for Template 2",thirdParagraph:"Third Paragraph for Template 2",title4:"Title 4 for Template 2",fourthParagraph:"Fourth Paragraph for Template 2",logo:"https://via.placeholder.com",image1:"https://via.placeholder.com/600x300",image2:"https://via.placeholder.com/290x150",image3:"https://via.placeholder.com/290x150"});break;case 2:h({title1:"Title 1 for Template 3",firstParagraph:"First Paragraph for Template 3",firstButton:"Button Text 3 for Template 3",firstButtonLink:"https://example.com/link3",title2:"Title 2 for Template 3",SecondParagraph:"Second Paragraph for Template 3",title3:"Title 3 for Template 3",thirdParagraph:"Third Paragraph for Template 3",title4:"Title 4 for Template 3",fourthParagraph:"Fourth Paragraph for Template 3",logo:"https://via.placeholder.com",image1:"https://via.placeholder.com/600x300",image2:"https://via.placeholder.com/290x150",image3:"https://via.placeholder.com/290x150"});break;case 3:h({title1:"Title 1 for Template 4",firstParagraph:"First Paragraph for Template 4",firstButton:"Button Text 4 for Template 4",firstButtonLink:"https://example.com/link4",title2:"Title 2 for Template 4",SecondParagraph:"Second Paragraph for Template 4",title3:"Title 3 for Template 4",thirdParagraph:"Third Paragraph for Template 4",title4:"Title 4 for Template 4",fourthParagraph:"Fourth Paragraph for Template 4",logo:"https://via.placeholder.com",image1:"https://via.placeholder.com/600x300",image2:"https://via.placeholder.com/290x150",image3:"https://via.placeholder.com/290x150"});break;default:h({});break}},s=(t,j)=>{h(P=>({...P,[t]:j}))},k=async t=>{t.preventDefault(),F(!0)},O=t=>{S(t)},Y=t=>{L(t)},J=()=>{T(!0)},Q=()=>{T(!1)},X=()=>{C(!0)},Z=()=>{C(!1)};let I=null;d!==null&&(I=l[d]);const p=(t,j)=>{const P=t.target.files[0];if(P)switch(j){case"logo":h({...r,logo:P});break;case"image1":h({...r,image1:P});break;case"image2":h({...r,image2:P});break}else console.error("No file selected")};return e.jsxs(x,{children:[e.jsx(c,{children:e.jsxs(U,{children:[e.jsx(q,{children:e.jsx(V,{children:"Email Composition"})}),e.jsxs($,{children:[e.jsx(x,{className:"mb-3",children:e.jsxs(c,{children:[e.jsx(a,{htmlFor:"subject",children:"Subject"}),e.jsx(o,{type:"text",id:"subject",minLength:8,required:!0,placeholder:"Enter subject","aria-describedby":"subjectFeedback",value:z,onChange:t=>m(t.target.value)}),e.jsx(E,{id:"subjectFeedback",invalid:!0,children:"Please enter a valid subject (minimum 8 characters)."})]})}),e.jsxs(x,{className:"mb-3",children:[e.jsxs(c,{children:[e.jsx(a,{htmlFor:"to",children:"To"})," ",e.jsx("br",{}),e.jsx(B,{color:"primary",onClick:J,onChange:()=>b(W),children:"Select Recipients"}),e.jsx(E,{id:"toFeedback",invalid:!0,children:"Please enter a valid recipient (minimum 1 email)."})]}),e.jsxs(c,{children:[e.jsx(a,{htmlFor:"cc",children:"CC"}),e.jsx("br",{}),e.jsx(B,{color:"primary",onClick:()=>X(),onChange:()=>g(R),children:"Select CC Recipients"}),e.jsx(E,{id:"ccFeedback",invalid:!0,children:"Please enter valid CC recipients (minimum 1 email)."})]})]}),e.jsx(x,{className:"mb-3",children:e.jsxs(c,{children:[e.jsx(a,{children:"Select Template"}),e.jsx("div",{style:{maxHeight:"400px",overflowX:"auto"},children:e.jsx(x,{className:"flex-nowrap",children:l.map((t,j)=>e.jsx(c,{xs:"6",sm:"4",md:"3",lg:"3",className:"m-3 p-0",children:e.jsx("div",{className:"border rounded",children:e.jsx(de,{type:"radio",name:"templateRadio",id:`templateRadio${j}`,label:`Template ${j+1}`,checked:d===j,onChange:()=>y(j)})})},j))})})]})}),e.jsx(x,{className:"mb-3",children:e.jsxs(c,{children:[e.jsx("br",{}),d!==null&&e.jsxs(e.Fragment,{children:[e.jsx(a,{htmlFor:"title1",children:"Title 1"}),e.jsx(o,{type:"text",id:"title1",placeholder:`Enter title 1 for ${d}`,value:r.title1,onChange:t=>s("title1",t.target.value)}),e.jsx(a,{htmlFor:"firstParagraph",children:"First Paragraph"}),e.jsx(u,{id:"firstParagraph",placeholder:`Enter first paragraph for ${d}`,value:r.firstParagraph,onChange:t=>s("firstParagraph",t.target.value)}),e.jsx(a,{htmlFor:"firstButton",children:"First Button"}),e.jsx(o,{type:"text",id:"firstButton",placeholder:`Enter first button text for ${d}`,value:r.firstButton,onChange:t=>s("firstButton",t.target.value)}),e.jsx(a,{htmlFor:"firstButtonLink",children:"First Button Link"}),e.jsx(o,{type:"text",id:"firstButtonLink",placeholder:`Enter first button link for ${d}`,value:r.firstButtonLink,onChange:t=>s("firstButtonLink",t.target.value)}),d==0&&e.jsxs(e.Fragment,{children:[e.jsx(a,{htmlFor:"title2",children:"Title 2 for Template 1"}),e.jsx(o,{type:"text",id:"title2",placeholder:"Enter title 2 for Template 1",value:r.title2,onChange:t=>s("title2",t.target.value)}),e.jsx(a,{htmlFor:"secondParagraph",children:"Second Paragraph for Template 1"}),e.jsx(u,{id:"secondParagraph",placeholder:"Enter second paragraph for Template 1",value:r.SecondParagraph,onChange:t=>s("SecondParagraph",t.target.value)}),e.jsx(a,{htmlFor:"secondParagraph",children:"title 3 for Template 1"}),e.jsx(u,{id:"title3",placeholder:"Enter title for Template 1",value:r.title3,onChange:t=>s("title3",t.target.value)}),e.jsx(a,{htmlFor:"thirdParagraph",children:"title 3 for Template 1"}),e.jsx(u,{id:"thirdParagraph",placeholder:"Enter title for Template 1",value:r.thirdParagraph,onChange:t=>s("thirdParagraph",t.target.value)}),e.jsx(a,{htmlFor:"image1",children:"image1 for Template 1"}),e.jsx(o,{type:"file",accept:"image/*",id:"image1",onChange:t=>p(t,"image1")}),e.jsx(a,{htmlFor:"image2",children:"image2 for Template 1"}),e.jsx(o,{type:"file",accept:"image/*",id:"image2",onChange:t=>p(t,"image2")})]}),d==1&&e.jsxs(e.Fragment,{children:[e.jsx(a,{htmlFor:"title2",children:"Title 2 for Template 2"}),e.jsx(o,{type:"text",id:"title2",placeholder:"Enter title 2 for Template 2",value:r.title2,onChange:t=>s("title2",t.target.value)}),e.jsx(a,{htmlFor:"secondParagraph",children:"Second Paragraph for Template 2"}),e.jsx(u,{id:"secondParagraph",placeholder:"Enter second paragraph for Template 1",value:r.SecondParagraph,onChange:t=>s("SecondParagraph",t.target.value)}),e.jsx(a,{htmlFor:"thirdParagraph",children:"paragraph  for Template 2"}),e.jsx(u,{id:"thirdParagraph",placeholder:"Enter title for Template 1",value:r.thirdParagraph,onChange:t=>s("thirdParagraph",t.target.value)}),e.jsx(a,{htmlFor:"image1",children:"logo"}),e.jsx(o,{type:"file",accept:"image/*",id:"logo",onChange:t=>p(t,"logo")}),e.jsx(a,{htmlFor:"image1",children:"image1"}),e.jsx(o,{type:"file",accept:"image/*",id:"image1",onChange:t=>p(t,"image1")}),e.jsx(a,{htmlFor:"image2",children:"image2 "}),e.jsx(o,{type:"file",accept:"image/*",id:"image2",onChange:t=>p(t,"image2")}),e.jsx(a,{htmlFor:"image2",children:"image 3"}),e.jsx(o,{type:"file",accept:"image/*",id:"image3",onChange:t=>p(t,"image3")})]}),d==2&&e.jsxs(e.Fragment,{children:[e.jsx(a,{htmlFor:"title2",children:"Title 2 for Template 3"}),e.jsx(o,{type:"text",id:"title2",placeholder:"Enter title 2 for Template 3",value:r.title2,onChange:t=>s("title2",t.target.value)}),e.jsx(a,{htmlFor:"secondParagraph",children:"Second Paragraph for Template 3"}),e.jsx(u,{id:"secondParagraph",placeholder:"Enter second paragraph for Template 3",value:r.SecondParagraph,onChange:t=>s("SecondParagraph",t.target.value)}),e.jsx(a,{htmlFor:"thirdParagraph",children:"third Paragraph for Template 3"}),e.jsx(u,{id:"thirdParagraph",placeholder:"Enter second paragraph for Template 3",value:r.thirdParagraph,onChange:t=>s("thirdParagraph",t.target.value)}),e.jsx(a,{htmlFor:"image1",children:"logo"}),e.jsx(o,{type:"file",accept:"image/*",id:"logo",onChange:t=>p(t,"logo")}),e.jsx(a,{htmlFor:"image1",children:"image1"}),e.jsx(o,{type:"file",accept:"image/*",id:"image1",onChange:t=>p(t,"image1")}),e.jsx(a,{htmlFor:"image2",children:"image2 "}),e.jsx(o,{type:"file",accept:"image/*",id:"image2",onChange:t=>p(t,"image2")}),e.jsx(a,{htmlFor:"image2",children:"image 3"}),e.jsx(o,{type:"file",accept:"image/*",id:"image3",onChange:t=>p(t,"image3")})]}),d==3&&e.jsxs(e.Fragment,{children:[e.jsx(a,{htmlFor:"title2",children:"Title 2 for Template 4"}),e.jsx(o,{type:"text",id:"title2",placeholder:"Enter title 2 for Template 4",value:r.title2,onChange:t=>s("title2",t.target.value)}),e.jsx(a,{htmlFor:"SecondParagraph",children:"paragraph 2 for Template 4"}),e.jsx(o,{type:"text",id:"SecondParagraph",placeholder:"Enter pargraph 2 for Template 4",value:r.SecondParagraph,onChange:t=>s("SecondParagraph",t.target.value)}),e.jsx(a,{htmlFor:"thirdParagraph",children:"paragraph 3 for Template 4"}),e.jsx(o,{type:"text",id:"thirdParagraph",placeholder:"Enter pargraph 2 for Template 4",value:r.thirdParagraph,onChange:t=>s("thirdParagraph",t.target.value)})]})]}),e.jsx(E,{id:"bodyFeedback",invalid:!0,children:"Please enter a valid email body."})]})}),e.jsx(x,{children:e.jsx(c,{children:e.jsx(B,{color:"primary",onClick:k,children:"Submit"})})})]})]})}),e.jsxs(c,{children:[e.jsxs(U,{children:[e.jsx(q,{children:e.jsx(V,{children:"Email Preview"})}),e.jsx($,{children:d!==null&&e.jsx(I,{content:r})})]}),e.jsx(K,{visible:v,onClose:Q,onSave:O}),e.jsx(K,{visible:A,onClose:Z,onSave:Y})]}),e.jsx(ne,{})]})}export{Fe as default};
