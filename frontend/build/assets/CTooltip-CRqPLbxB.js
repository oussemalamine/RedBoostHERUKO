import{r as i,_ as J,u as K,R as s,a as f,c as Q,P as t,a2 as U,d as W}from"./index-C20-YBnv.js";import{i as M,u as X,C as Y}from"./isObject-BvcBn54A.js";var Z=function(e){if(!e)return 0;var r=window.getComputedStyle(e),n=r.transitionDuration,a=r.transitionDelay,d=Number.parseFloat(n),u=Number.parseFloat(a);return!d&&!u?0:(n=n.split(",")[0],a=a.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(a))*1e3)},x=function(e){typeof e=="function"&&e()},$=function(e){e.dispatchEvent(new Event("transitionend"))},ee=function(e,r,n){if(n===void 0&&(n=!0),!n){x(e);return}var a=5,d=Z(r)+a,u=!1,p=function(m){var v=m.target;v===r&&(u=!0,r.removeEventListener("transitionend",p),x(e))};r.addEventListener("transitionend",p),setTimeout(function(){u||$(r)},d)},te=function(e,r){switch(e){case"right":return M(r)?"left":"right";case"left":return M(r)?"right":"left";default:return e}},H=i.forwardRef(function(e,r){var n=e.children,a=e.animation,d=a===void 0?!0:a,u=e.className,p=e.container,m=e.content,v=e.delay,h=v===void 0?0:v,w=e.fallbackPlacements,_=w===void 0?["top","right","bottom","left"]:w,T=e.offset,O=T===void 0?[0,6]:T,R=e.onHide,E=e.onShow,N=e.placement,q=N===void 0?"top":N,k=e.trigger,c=k===void 0?["hover","focus"]:k,y=e.visible,j=J(e,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),o=i.useRef(null),g=i.useRef(null),A=K(r,o),C=i.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),P=X(),B=P.initPopper,D=P.destroyPopper,I=P.updatePopper,L=i.useState(!1),V=L[0],S=L[1],F=i.useState(y),b=F[0],l=F[1],z=typeof h=="number"?{show:h,hide:h}:h,G={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:_}},{name:"offset",options:{offset:O}}],placement:te(q,g.current)};return i.useEffect(function(){l(y)},[y]),i.useEffect(function(){return b&&(S(!0),o.current&&(o.current.classList.remove("fade","show"),D()),setTimeout(function(){g.current&&o.current&&(d&&o.current.classList.add("fade"),B(g.current,o.current,G),o.current.classList.add("show"),E&&E())},z.show)),function(){o.current&&(o.current.classList.remove("show"),R&&R(),ee(function(){D(),S(!1)},o.current))}},[b]),i.useEffect(function(){I()},[m]),s.createElement(s.Fragment,null,s.cloneElement(n,f(f(f(f(f({},b&&{"aria-describedby":C.current}),{ref:g}),(c==="click"||c.includes("click"))&&{onClick:function(){return l(!b)}}),(c==="focus"||c.includes("focus"))&&{onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),(c==="hover"||c.includes("hover"))&&{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}})),s.createElement(Y,{container:p,portal:!0},V&&s.createElement("div",f({className:Q("tooltip","bs-tooltip-auto",u),id:C.current,ref:A,role:"tooltip"},j),s.createElement("div",{className:"tooltip-arrow"}),s.createElement("div",{className:"tooltip-inner"},m))))});H.propTypes={animation:t.bool,children:t.node,container:t.any,content:t.oneOfType([t.string,t.node]),delay:t.oneOfType([t.number,t.shape({show:t.number.isRequired,hide:t.number.isRequired})]),fallbackPlacements:U,offset:t.any,onHide:t.func,onShow:t.func,placement:t.oneOf(["auto","top","right","bottom","left"]),trigger:W,visible:t.bool};H.displayName="CTooltip";export{H as C};
