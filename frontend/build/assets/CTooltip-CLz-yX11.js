import{r as a,_ as G,u as J,R as s,a as f,c as K,P as t,X as Q,d as U}from"./index-BTdwLRQc.js";import{i as M,u as W,C as Y}from"./isObject-nES2GppK.js";var Z=function(e){if(!e)return 0;var r=window.getComputedStyle(e),n=r.transitionDuration,i=r.transitionDelay,d=Number.parseFloat(n),u=Number.parseFloat(i);return!d&&!u?0:(n=n.split(",")[0],i=i.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(i))*1e3)},x=function(e){typeof e=="function"&&e()},$=function(e){e.dispatchEvent(new Event("transitionend"))},ee=function(e,r,n){if(n===void 0&&(n=!0),!n){x(e);return}var i=5,d=Z(r)+i,u=!1,p=function(m){var v=m.target;v===r&&(u=!0,r.removeEventListener("transitionend",p),x(e))};r.addEventListener("transitionend",p),setTimeout(function(){u||$(r)},d)},te=function(e,r){switch(e){case"right":return M(r)?"left":"right";case"left":return M(r)?"right":"left";default:return e}},H=a.forwardRef(function(e,r){var n=e.children,i=e.animation,d=i===void 0?!0:i,u=e.className,p=e.container,m=e.content,v=e.delay,h=v===void 0?0:v,w=e.fallbackPlacements,_=w===void 0?["top","right","bottom","left"]:w,T=e.offset,O=T===void 0?[0,6]:T,R=e.onHide,E=e.onShow,N=e.placement,q=N===void 0?"top":N,k=e.trigger,c=k===void 0?["hover","focus"]:k,y=e.visible,j=G(e,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),o=a.useRef(null),g=a.useRef(null),A=J(r,o),C=a.useRef("tooltip".concat(Math.floor(Math.random()*1e6))),P=W(),B=P.initPopper,D=P.destroyPopper,I=P.updatePopper,L=a.useState(!1),V=L[0],S=L[1],F=a.useState(y),b=F[0],l=F[1],X=typeof h=="number"?{show:h,hide:h}:h,z={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:_}},{name:"offset",options:{offset:O}}],placement:te(q,g.current)};return a.useEffect(function(){l(y)},[y]),a.useEffect(function(){return b&&(S(!0),o.current&&(o.current.classList.remove("fade","show"),D()),setTimeout(function(){g.current&&o.current&&(d&&o.current.classList.add("fade"),B(g.current,o.current,z),o.current.classList.add("show"),E&&E())},X.show)),function(){o.current&&(o.current.classList.remove("show"),R&&R(),ee(function(){D(),S(!1)},o.current))}},[b]),a.useEffect(function(){I()},[m]),s.createElement(s.Fragment,null,s.cloneElement(n,f(f(f(f(f({},b&&{"aria-describedby":C.current}),{ref:g}),(c==="click"||c.includes("click"))&&{onClick:function(){return l(!b)}}),(c==="focus"||c.includes("focus"))&&{onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}),(c==="hover"||c.includes("hover"))&&{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}})),s.createElement(Y,{container:p,portal:!0},V&&s.createElement("div",f({className:K("tooltip","bs-tooltip-auto",u),id:C.current,ref:A,role:"tooltip"},j),s.createElement("div",{className:"tooltip-arrow"}),s.createElement("div",{className:"tooltip-inner"},m))))});H.propTypes={animation:t.bool,children:t.node,container:t.any,content:t.oneOfType([t.string,t.node]),delay:t.oneOfType([t.number,t.shape({show:t.number.isRequired,hide:t.number.isRequired})]),fallbackPlacements:Q,offset:t.any,onHide:t.func,onShow:t.func,placement:t.oneOf(["auto","top","right","bottom","left"]),trigger:U,visible:t.bool};H.displayName="CTooltip";export{H as C};
