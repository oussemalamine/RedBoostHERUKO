import{r as v,_ as N,a as r,R as f,c as C,P as t,b as g}from"./index-liV4V1Uq.js";import{C as y}from"./index.es-smJaQxJq.js";var n=v.forwardRef(function(e,m){var s,p=e.children,o=e.active,l=e.as,a=l===void 0?"li":l,b=e.className,i=e.disabled,d=e.color,c=N(e,["children","active","as","className","disabled","color"]),u=a==="a"||a==="button"?y:a;return c=r(r(r(r({},(a==="a"||a==="button")&&{active:o,disabled:i,as:a,ref:m}),o&&{"aria-current":!0}),i&&{"aria-disabled":!0}),c),f.createElement(u,r({className:C("list-group-item",(s={},s["list-group-item-".concat(d)]=d,s["list-group-item-action"]=a==="a"||a==="button",s.active=o,s.disabled=i,s),b)},c),p)});n.propTypes={active:t.bool,as:t.elementType,children:t.node,className:t.string,color:g,disabled:t.bool};n.displayName="CListGroupItem";export{n as C};