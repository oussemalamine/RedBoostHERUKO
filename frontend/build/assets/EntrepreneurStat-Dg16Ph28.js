import{h as A,r as M,G as N,g as v,j as n}from"./index-CtmX7WYL.js";import{C as d}from"./index.esm-CY5JD1iv.js";import{g as o}from"./getStyle-JCh7QGcO.js";import"./chart-Dp4mhDtA.js";const $=()=>{const y=A();M.useEffect(()=>{y(N())},[y]);const c=v(t=>t.entrepreneurs.entrepreneurs),b=c.filter(t=>t.gender==="femme").length,g=c.length-b,f=b+g,m=b/f*100,h=g/f*100,k=`Female: ${m.toFixed(2)}% (${b})`,j=`Male: ${h.toFixed(2)}% (${g})`,s={};c.forEach(t=>{const e=t.region;s[e]=(s[e]||0)+1}),Object.keys(s).sort((t,e)=>s[e]-s[t]);const x=Object.keys(s),D=Object.values(s);c.reduce((t,e)=>t+p(e.dateDeNaissance),0)/c.length;const a={};c.forEach(t=>{const e=t.secteurActivites;a[e]=(a[e]||0)+1}),Object.keys(a).sort((t,e)=>a[e]-a[t]);function p(t){const e=new Date,l=new Date(t);let u=e.getFullYear()-l.getFullYear();const i=e.getMonth()-l.getMonth();return(i<0||i===0&&e.getDate()<l.getDate())&&u--,u}const F=Object.keys(a),E=Object.values(a),r={"0-20":0,"21-30":0,"31-40":0,"41-50":0,"51-60":0,"61+":0};c.forEach(t=>{const e=p(t.dateDeNaissance);e<=20?r["0-20"]++:e<=30?r["21-30"]++:e<=40?r["31-40"]++:e<=50?r["41-50"]++:e<=60?r["51-60"]++:r["61+"]++});const C=Object.keys(r),O=Object.values(r);return n.jsxs("div",{className:"chart-gallery",children:[n.jsx(d,{type:"bar",data:{labels:F,datasets:[{label:"Number of Entrepreneurs",backgroundColor:"#36A2EB",data:E}]},options:{plugins:{legend:{labels:{color:o("--cui-body-color")}}},scales:{x:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}},y:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}}}}}),n.jsx(d,{type:"bar",data:{labels:C,datasets:[{label:"Number of Entrepreneurs",backgroundColor:"#36A2EB",data:O}]},options:{plugins:{legend:{labels:{color:o("--cui-body-color")}}},scales:{x:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}},y:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}}}}}),n.jsx(d,{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40]}]},labels:"months",options:{plugins:{legend:{labels:{color:o("--cui-body-color")}}},scales:{x:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}},y:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}}}}}),n.jsx(d,{type:"doughnut",data:{labels:[k,j],datasets:[{backgroundColor:["#FF6384","#36A2EB"],data:[m,h]}]},options:{plugins:{legend:{labels:{color:o("--cui-body-color")}}}}}),n.jsx(d,{type:"bar",data:{labels:x,datasets:[{label:"Number of Startups by Region",backgroundColor:"#FFCE56",data:D}]},options:{plugins:{legend:{labels:{color:o("--cui-body-color")}}},scales:{x:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}},y:{grid:{color:o("--cui-border-color-translucent")},ticks:{color:o("--cui-body-color")}}}}})]})};export{$ as default};
