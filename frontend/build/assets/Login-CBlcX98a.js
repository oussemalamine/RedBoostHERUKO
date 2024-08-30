import{r as i,_ as E,R as Z,a as _,c as q,P as N,g as G,n as T,h as $,j as s,F as D,L as M,o as V,G as B,q as W,H}from"./index-C8diSxJB.js";import{F as J,a as U}from"./index-CggS_cir.js";import{b as K,c as d,a as x}from"./index.esm-14PgRZM7.js";import{c as O,a as v,u as Q,b as X,d as b}from"./index.module-IBZF_ggi.js";import{C as S,a as g}from"./CRow-BLE2Ph6C.js";import{C as k,a as A}from"./CCardBody-CrmRxOrF.js";import{C as Y}from"./CForm-B6uC-7r3.js";import{C as z}from"./CInputGroup-BL5k9uJS.js";import{C as t}from"./CInputGroupText-K3jeKe2o.js";import{C as L}from"./CFormInput-Cy6DlF7x.js";import{C as R}from"./CTooltip-Dq5_9fu_.js";import{c as ss}from"./isObject-gWhhM0FN.js";import"./iconBase-DEK5PW2A.js";import"./CFormControlWrapper-5hdytq66.js";import"./getTransitionDurationFromElement-Cpu4p4hx.js";var j=i.forwardRef(function(o,m){var n=o.children,c=o.className,r=E(o,["children","className"]);return Z.createElement("div",_({className:q("card-group",c)},r,{ref:m}),n)});j.propTypes={children:N.node,className:N.string};j.displayName="CCardGroup";var es=["32 32","<path d='M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v0.005c0-0.813 0.547-1.428 1.303-1.428h0.192c1.193 0 1.432 1.125 1.432 1.48l0.005 12.635c-0.083 0.828 0.855 1.256 1.376 0.724 2.025-2.083 4.452-10.719-1.261-15.719-5.328-4.667-12.479-3.896-16.281-1.276-4.041 2.792-6.624 8.959-4.115 14.755 2.74 6.319 10.573 8.204 15.235 6.324 2.36-0.953 3.448 2.233 0.995 3.276-3.697 1.577-14 1.416-18.812-6.917-3.251-5.629-3.079-15.531 5.547-20.661 6.593-3.927 15.292-2.839 20.536 2.636 5.48 5.729 5.163 16.448-0.187 20.615-2.423 1.895-6.021 0.052-5.995-2.709l-0.027-0.9c-1.687 1.671-3.932 2.651-6.375 2.651-4.833 0-9.088-4.256-9.088-9.084 0-4.88 4.255-9.181 9.088-9.181zM21.527 15.855c-0.183-3.537-2.808-5.667-5.98-5.667h-0.12c-3.656 0-5.687 2.88-5.687 6.145 0 3.661 2.453 5.973 5.672 5.973 3.593 0 5.952-2.629 6.124-5.739z'/>"];const as=/^(?!.*[._-]{2})(?!.*@\w*\d)(?!.*[@._-][^\w.-])[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,os=O({email:v().email("Invalid email address").matches(as,"Invalid email address").required("Required"),password:v().required("Required").min(8,"At least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,"Password should be combination of one uppercase , one lower case, one special character, one digit and min 8 , max 20 char long")}),Ns=()=>{const[o,m]=i.useState(!1),[n,c]=i.useState(""),r=G(),h=T(),[p,F]=i.useState(!1),u=$(e=>e.auth.isLogged);console.log("is logged login",u);const{values:C,handleChange:w,handleSubmit:I,touched:f,errors:l}=Q({initialValues:{email:"",password:""},validationSchema:os,onSubmit:async e=>{V.post("/login",e).then(a=>{console.log("response",a),console.log("Authentication successful",a.data);const{password:rs,confirmation:ts,_id:is,...P}=a.data.user;h(B(P)),c(""),h(W(!0))}).catch(a=>{a.response&&c(a.response.data.error),console.log("Authentication failed",a)})}}),y=X((e,a)=>{h(H({key:e,value:a}))},250);return i.useEffect(()=>{u&&r("/dash")},[u,r]),s.jsxs("div",{className:"min-vh-100 d-flex flex-row align-items-center",style:{backgroundColor:"#044c54"},children:[o&&s.jsx(ForgetPass,{setVisible:m,visible:o}),s.jsx(K,{children:s.jsx(S,{className:"justify-content-center",children:s.jsx(g,{md:8,children:s.jsxs(j,{children:[s.jsx(k,{className:"p-4",children:s.jsx(A,{children:s.jsxs(Y,{onSubmit:I,children:[s.jsx("h1",{children:"Login"}),n.length>0?s.jsx(D,{color:"danger",children:n}):null,s.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),s.jsxs(z,{className:"mb-3",children:[s.jsx(t,{children:s.jsx(d,{icon:es})}),s.jsx(L,{name:"email",value:C.email,onChange:e=>{w(e),y("email",e.target.value)},placeholder:"Email",autoComplete:"email"}),l.email&&f.email&&s.jsx(R,{content:l.email,placement:"top",children:s.jsx(t,{children:s.jsx(d,{style:{color:"red"},icon:b})})})]}),s.jsxs(z,{className:"mb-4",children:[s.jsx(t,{children:s.jsx(d,{icon:ss})}),s.jsx(L,{name:"password",value:C.password,onChange:e=>{w(e),y("password",e.target.value)},type:p?"text":"password",placeholder:"Password",autoComplete:"current-password"}),s.jsx(t,{onClick:()=>F(!p),children:p?s.jsx(J,{}):s.jsx(U,{})}),l.password&&f.password&&s.jsx(R,{content:l.password,placement:"top",children:s.jsx(t,{children:s.jsx(d,{style:{color:"red"},icon:b})})})]}),s.jsxs(S,{children:[s.jsx(g,{xs:6,children:s.jsx(x,{type:"submit",style:{backgroundColor:"#044c54",color:"white"},className:"px-4",children:"Login"})}),s.jsx(g,{xs:6,className:"text-right",children:s.jsx(x,{onClick:()=>r("/password-reset"),color:"link",className:"px-0",children:"Forgot password?"})})]})]})})}),s.jsx(k,{style:{backgroundColor:"#cc2c44",width:"44%"},className:"text-white py-5",children:s.jsx(A,{className:"text-center",children:s.jsxs("div",{children:[s.jsx("h2",{children:"Sign up"}),s.jsx("p",{children:"Join us today to unlock exciting features and personalized experiences! Register now to start exploring."}),s.jsx(M,{to:"/register",children:s.jsx(x,{style:{backgroundColor:"#044c54",color:"white"},className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})]})};export{Ns as default};
