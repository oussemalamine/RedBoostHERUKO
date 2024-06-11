import{r as yt,e as be,R as Yt,P as At}from"./index-C20-YBnv.js";var S="top",k="bottom",L="right",C="left",St="auto",ct=[S,k,L,C],K="start",st="end",we="clippingParents",re="viewport",nt="popper",xe="reference",Ut=ct.reduce(function(t,e){return t.concat([e+"-"+K,e+"-"+st])},[]),ne=[].concat(ct,[St]).reduce(function(t,e){return t.concat([e,e+"-"+K,e+"-"+st])},[]),Oe="beforeRead",Pe="read",je="afterRead",Ee="beforeMain",Ae="main",Te="afterMain",Re="beforeWrite",Se="write",Ce="afterWrite",De=[Oe,Pe,je,Ee,Ae,Te,Re,Se,Ce];function V(t){return t?(t.nodeName||"").toLowerCase():null}function $(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){var e=$(t).Element;return t instanceof e||t instanceof Element}function B(t){var e=$(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ct(t){if(typeof ShadowRoot>"u")return!1;var e=$(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function $e(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!B(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(f){var i=a[f];i===!1?o.removeAttribute(f):o.setAttribute(f,i===!0?"":i)}))})}function Be(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=f.reduce(function(s,p){return s[p]="",s},{});!B(a)||!V(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const ke={name:"applyStyles",enabled:!0,phase:"write",fn:$e,effect:Be,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var G=Math.max,bt=Math.min,Q=Math.round;function Tt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ae(){return!/^((?!chrome|android).)*safari/i.test(Tt())}function _(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&B(t)&&(a=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1);var f=Z(t)?$(t):window,i=f.visualViewport,s=!ae()&&r,p=(n.left+(s&&i?i.offsetLeft:0))/a,c=(n.top+(s&&i?i.offsetTop:0))/o,h=n.width/a,y=n.height/o;return{width:h,height:y,top:c,right:p+h,bottom:c+y,left:p,x:p,y:c}}function Dt(t){var e=_(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function oe(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ct(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(t){return $(t).getComputedStyle(t)}function Le(t){return["table","td","th"].indexOf(V(t))>=0}function q(t){return((Z(t)?t.ownerDocument:t.document)||window.document).documentElement}function xt(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Ct(t)?t.host:null)||q(t)}function zt(t){return!B(t)||N(t).position==="fixed"?null:t.offsetParent}function Me(t){var e=/firefox/i.test(Tt()),r=/Trident/i.test(Tt());if(r&&B(t)){var n=N(t);if(n.position==="fixed")return null}var a=xt(t);for(Ct(a)&&(a=a.host);B(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pt(t){for(var e=$(t),r=zt(t);r&&Le(r)&&N(r).position==="static";)r=zt(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?e:r||Me(t)||e}function $t(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ot(t,e,r){return G(t,bt(e,r))}function We(t,e,r){var n=ot(t,e,r);return n>r?r:n}function ie(){return{top:0,right:0,bottom:0,left:0}}function se(t){return Object.assign({},ie(),t)}function fe(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var He=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,se(typeof e!="number"?e:fe(e,ct))};function Ve(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,f=r.modifiersData.popperOffsets,i=H(r.placement),s=$t(i),p=[C,L].indexOf(i)>=0,c=p?"height":"width";if(!(!o||!f)){var h=He(a.padding,r),y=Dt(o),u=s==="y"?S:C,w=s==="y"?k:L,d=r.rects.reference[c]+r.rects.reference[s]-f[s]-r.rects.popper[c],v=f[s]-r.rects.reference[s],b=pt(o),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,P=d/2-v/2,l=h[u],m=O-y[c]-h[w],g=O/2-y[c]/2+P,x=ot(l,g,m),A=s;r.modifiersData[n]=(e={},e[A]=x,e.centerOffset=x-g,e)}}function Ne(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||oe(e.elements.popper,a)&&(e.elements.arrow=a))}const Fe={name:"arrow",enabled:!0,phase:"main",fn:Ve,effect:Ne,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(t){return t.split("-")[1]}var qe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ie(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:Q(r*a)/a||0,y:Q(n*a)/a||0}}function Gt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,f=t.offsets,i=t.position,s=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,h=t.isFixed,y=f.x,u=y===void 0?0:y,w=f.y,d=w===void 0?0:w,v=typeof c=="function"?c({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),P=C,l=S,m=window;if(p){var g=pt(r),x="clientHeight",A="clientWidth";if(g===$(r)&&(g=q(r),N(g).position!=="static"&&i==="absolute"&&(x="scrollHeight",A="scrollWidth")),g=g,a===S||(a===C||a===L)&&o===st){l=k;var E=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];d-=E-n.height,d*=s?1:-1}if(a===C||(a===S||a===k)&&o===st){P=L;var j=h&&g===m&&m.visualViewport?m.visualViewport.width:g[A];u-=j-n.width,u*=s?1:-1}}var T=Object.assign({position:i},p&&qe),M=c===!0?Ie({x:u,y:d},$(r)):{x:u,y:d};if(u=M.x,d=M.y,s){var R;return Object.assign({},T,(R={},R[l]=O?"0":"",R[P]=b?"0":"",R.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",R))}return Object.assign({},T,(e={},e[l]=O?d+"px":"",e[P]=b?u+"px":"",e.transform="",e))}function Xe(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,f=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,p={placement:H(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Gt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Gt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ye={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xe,data:{}};var mt={passive:!0};function Ue(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,f=n.resize,i=f===void 0?!0:f,s=$(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(c){c.addEventListener("scroll",r.update,mt)}),i&&s.addEventListener("resize",r.update,mt),function(){o&&p.forEach(function(c){c.removeEventListener("scroll",r.update,mt)}),i&&s.removeEventListener("resize",r.update,mt)}}const ze={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ue,data:{}};var Ge={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(e){return Ge[e]})}var Ze={start:"end",end:"start"};function Zt(t){return t.replace(/start|end/g,function(e){return Ze[e]})}function Bt(t){var e=$(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function kt(t){return _(q(t)).left+Bt(t).scrollLeft}function Je(t,e){var r=$(t),n=q(t),a=r.visualViewport,o=n.clientWidth,f=n.clientHeight,i=0,s=0;if(a){o=a.width,f=a.height;var p=ae();(p||!p&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:f,x:i+kt(t),y:s}}function Ke(t){var e,r=q(t),n=Bt(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),f=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+kt(t),s=-n.scrollTop;return N(a||r).direction==="rtl"&&(i+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:f,x:i,y:s}}function Lt(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ce(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:B(t)&&Lt(t)?t:ce(xt(t))}function it(t,e){var r;e===void 0&&(e=[]);var n=ce(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=$(n),f=a?[o].concat(o.visualViewport||[],Lt(n)?n:[]):n,i=e.concat(f);return a?i:i.concat(it(xt(f)))}function Rt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Qe(t,e){var r=_(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Jt(t,e,r){return e===re?Rt(Je(t,r)):Z(e)?Qe(e,r):Rt(Ke(q(t)))}function _e(t){var e=it(xt(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&B(t)?pt(t):t;return Z(n)?e.filter(function(a){return Z(a)&&oe(a,n)&&V(a)!=="body"}):[]}function tr(t,e,r,n){var a=e==="clippingParents"?_e(t):[].concat(e),o=[].concat(a,[r]),f=o[0],i=o.reduce(function(s,p){var c=Jt(t,p,n);return s.top=G(c.top,s.top),s.right=bt(c.right,s.right),s.bottom=bt(c.bottom,s.bottom),s.left=G(c.left,s.left),s},Jt(t,f,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function pe(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?tt(n):null,f=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case S:s={x:f,y:e.y-r.height};break;case k:s={x:f,y:e.y+e.height};break;case L:s={x:e.x+e.width,y:i};break;case C:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var p=a?$t(a):null;if(p!=null){var c=p==="y"?"height":"width";switch(o){case K:s[p]=s[p]-(e[c]/2-r[c]/2);break;case st:s[p]=s[p]+(e[c]/2-r[c]/2);break}}return s}function ft(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,f=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?we:i,p=r.rootBoundary,c=p===void 0?re:p,h=r.elementContext,y=h===void 0?nt:h,u=r.altBoundary,w=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,b=se(typeof v!="number"?v:fe(v,ct)),O=y===nt?xe:nt,P=t.rects.popper,l=t.elements[w?O:y],m=tr(Z(l)?l:l.contextElement||q(t.elements.popper),s,c,f),g=_(t.elements.reference),x=pe({reference:g,element:P,strategy:"absolute",placement:a}),A=Rt(Object.assign({},P,x)),E=y===nt?A:g,j={top:m.top-E.top+b.top,bottom:E.bottom-m.bottom+b.bottom,left:m.left-E.left+b.left,right:E.right-m.right+b.right},T=t.modifiersData.offset;if(y===nt&&T){var M=T[a];Object.keys(j).forEach(function(R){var I=[L,k].indexOf(R)>=0?1:-1,X=[S,k].indexOf(R)>=0?"y":"x";j[R]+=M[X]*I})}return j}function er(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,f=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?ne:s,c=tt(n),h=c?i?Ut:Ut.filter(function(w){return tt(w)===c}):ct,y=h.filter(function(w){return p.indexOf(w)>=0});y.length===0&&(y=h);var u=y.reduce(function(w,d){return w[d]=ft(t,{placement:d,boundary:a,rootBoundary:o,padding:f})[H(d)],w},{});return Object.keys(u).sort(function(w,d){return u[w]-u[d]})}function rr(t){if(H(t)===St)return[];var e=gt(t);return[Zt(t),e,Zt(e)]}function nr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!0:f,s=r.fallbackPlacements,p=r.padding,c=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=u===void 0?!0:u,d=r.allowedAutoPlacements,v=e.options.placement,b=H(v),O=b===v,P=s||(O||!w?[gt(v)]:rr(v)),l=[v].concat(P).reduce(function(J,F){return J.concat(H(F)===St?er(e,{placement:F,boundary:c,rootBoundary:h,padding:p,flipVariations:w,allowedAutoPlacements:d}):F)},[]),m=e.rects.reference,g=e.rects.popper,x=new Map,A=!0,E=l[0],j=0;j<l.length;j++){var T=l[j],M=H(T),R=tt(T)===K,I=[S,k].indexOf(M)>=0,X=I?"width":"height",D=ft(e,{placement:T,boundary:c,rootBoundary:h,altBoundary:y,padding:p}),W=I?R?L:C:R?k:S;m[X]>g[X]&&(W=gt(W));var ut=gt(W),Y=[];if(o&&Y.push(D[M]<=0),i&&Y.push(D[W]<=0,D[ut]<=0),Y.every(function(J){return J})){E=T,A=!1;break}x.set(T,Y)}if(A)for(var lt=w?3:1,Ot=function(F){var rt=l.find(function(dt){var U=x.get(dt);if(U)return U.slice(0,F).every(function(Pt){return Pt})});if(rt)return E=rt,"break"},et=lt;et>0;et--){var vt=Ot(et);if(vt==="break")break}e.placement!==E&&(e.modifiersData[n]._skip=!0,e.placement=E,e.reset=!0)}}const ar={name:"flip",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"],data:{_skip:!1}};function Kt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Qt(t){return[S,L,k,C].some(function(e){return t[e]>=0})}function or(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,f=ft(e,{elementContext:"reference"}),i=ft(e,{altBoundary:!0}),s=Kt(f,n),p=Kt(i,a,o),c=Qt(s),h=Qt(p);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const ir={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:or};function sr(t,e,r){var n=H(t),a=[C,S].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=o[0],i=o[1];return f=f||0,i=(i||0)*a,[C,L].indexOf(n)>=0?{x:i,y:f}:{x:f,y:i}}function fr(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,f=ne.reduce(function(c,h){return c[h]=sr(h,e.rects,o),c},{}),i=f[e.placement],s=i.x,p=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[n]=f}const cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:fr};function pr(t){var e=t.state,r=t.name;e.modifiersData[r]=pe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const ur={name:"popperOffsets",enabled:!0,phase:"read",fn:pr,data:{}};function lr(t){return t==="x"?"y":"x"}function vr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!1:f,s=r.boundary,p=r.rootBoundary,c=r.altBoundary,h=r.padding,y=r.tether,u=y===void 0?!0:y,w=r.tetherOffset,d=w===void 0?0:w,v=ft(e,{boundary:s,rootBoundary:p,padding:h,altBoundary:c}),b=H(e.placement),O=tt(e.placement),P=!O,l=$t(b),m=lr(l),g=e.modifiersData.popperOffsets,x=e.rects.reference,A=e.rects.popper,E=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,j=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(g){if(o){var R,I=l==="y"?S:C,X=l==="y"?k:L,D=l==="y"?"height":"width",W=g[l],ut=W+v[I],Y=W-v[X],lt=u?-A[D]/2:0,Ot=O===K?x[D]:A[D],et=O===K?-A[D]:-x[D],vt=e.elements.arrow,J=u&&vt?Dt(vt):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ie(),rt=F[I],dt=F[X],U=ot(0,x[D],J[D]),Pt=P?x[D]/2-lt-U-rt-j.mainAxis:Ot-U-rt-j.mainAxis,ve=P?-x[D]/2+lt+U+dt+j.mainAxis:et+U+dt+j.mainAxis,jt=e.elements.arrow&&pt(e.elements.arrow),de=jt?l==="y"?jt.clientTop||0:jt.clientLeft||0:0,Mt=(R=T==null?void 0:T[l])!=null?R:0,he=W+Pt-Mt-de,me=W+ve-Mt,Wt=ot(u?bt(ut,he):ut,W,u?G(Y,me):Y);g[l]=Wt,M[l]=Wt-W}if(i){var Ht,ge=l==="x"?S:C,ye=l==="x"?k:L,z=g[m],ht=m==="y"?"height":"width",Vt=z+v[ge],Nt=z-v[ye],Et=[S,C].indexOf(b)!==-1,Ft=(Ht=T==null?void 0:T[m])!=null?Ht:0,qt=Et?Vt:z-x[ht]-A[ht]-Ft+j.altAxis,It=Et?z+x[ht]+A[ht]-Ft-j.altAxis:Nt,Xt=u&&Et?We(qt,z,It):ot(u?qt:Vt,z,u?It:Nt);g[m]=Xt,M[m]=Xt-z}e.modifiersData[n]=M}}const dr={name:"preventOverflow",enabled:!0,phase:"main",fn:vr,requiresIfExists:["offset"]};function hr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function mr(t){return t===$(t)||!B(t)?Bt(t):hr(t)}function gr(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function yr(t,e,r){r===void 0&&(r=!1);var n=B(e),a=B(e)&&gr(e),o=q(e),f=_(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(e)!=="body"||Lt(o))&&(i=mr(e)),B(e)?(s=_(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=kt(o))),{x:f.left+i.scrollLeft-s.x,y:f.top+i.scrollTop-s.y,width:f.width,height:f.height}}function br(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var f=[].concat(o.requires||[],o.requiresIfExists||[]);f.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function wr(t){var e=br(t);return De.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function xr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Or(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var _t={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Pr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?_t:a;return function(i,s,p){p===void 0&&(p=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},_t,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},h=[],y=!1,u={state:c,setOptions:function(b){var O=typeof b=="function"?b(c.options):b;d(),c.options=Object.assign({},o,c.options,O),c.scrollParents={reference:Z(i)?it(i):i.contextElement?it(i.contextElement):[],popper:it(s)};var P=wr(Or([].concat(n,c.options.modifiers)));return c.orderedModifiers=P.filter(function(l){return l.enabled}),w(),u.update()},forceUpdate:function(){if(!y){var b=c.elements,O=b.reference,P=b.popper;if(te(O,P)){c.rects={reference:yr(O,pt(P),c.options.strategy==="fixed"),popper:Dt(P)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var l=0;l<c.orderedModifiers.length;l++){if(c.reset===!0){c.reset=!1,l=-1;continue}var m=c.orderedModifiers[l],g=m.fn,x=m.options,A=x===void 0?{}:x,E=m.name;typeof g=="function"&&(c=g({state:c,options:A,name:E,instance:u})||c)}}}},update:xr(function(){return new Promise(function(v){u.forceUpdate(),v(c)})}),destroy:function(){d(),y=!0}};if(!te(i,s))return u;u.setOptions(p).then(function(v){!y&&p.onFirstUpdate&&p.onFirstUpdate(v)});function w(){c.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,P=O===void 0?{}:O,l=v.effect;if(typeof l=="function"){var m=l({state:c,name:b,instance:u,options:P}),g=function(){};h.push(m||g)}})}function d(){h.forEach(function(v){return v()}),h=[]}return u}}var jr=[ze,ur,Ye,ke,cr,ar,dr,Fe,ir],Er=Pr({defaultModifiers:jr}),Ar=function(t){return t?typeof t=="function"?t():t:document.body},ue=function(t){var e=t.children,r=t.container,n=t.portal,a=yt.useState(null),o=a[0],f=a[1];return yt.useEffect(function(){n&&f(Ar(r)||document.body)},[r,n]),typeof window<"u"&&n&&o?be.createPortal(e,o):Yt.createElement(Yt.Fragment,null,e)};ue.propTypes={children:At.node,container:At.any,portal:At.bool};ue.displayName="CConditionalPortal";var qr=function(){var t=yt.useRef(),e=yt.useRef(),r=function(o,f,i){t.current=Er(o,f,i),e.current=f},n=function(){var o=t.current;o&&e.current&&o.destroy(),t.current=void 0},a=function(o){var f=t.current;f&&o&&f.setOptions(o),f&&f.update()};return{popper:t.current,initPopper:r,destroyPopper:n,updatePopper:a}},Ir=function(t){return typeof document<"u"&&document.documentElement.dir==="rtl"?!0:t?t.closest('[dir="rtl"]')!==null:!1},Xr=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"],Tr=typeof global=="object"&&global&&global.Object===Object&&global,Rr=typeof self=="object"&&self&&self.Object===Object&&self,Sr=Tr||Rr||Function("return this")(),wt=Sr.Symbol,le=Object.prototype,Cr=le.hasOwnProperty,Dr=le.toString,at=wt?wt.toStringTag:void 0;function $r(t){var e=Cr.call(t,at),r=t[at];try{t[at]=void 0;var n=!0}catch{}var a=Dr.call(t);return n&&(e?t[at]=r:delete t[at]),a}var Br=Object.prototype,kr=Br.toString;function Lr(t){return kr.call(t)}var Mr="[object Null]",Wr="[object Undefined]",ee=wt?wt.toStringTag:void 0;function Hr(t){return t==null?t===void 0?Wr:Mr:ee&&ee in Object(t)?$r(t):Lr(t)}function Vr(t){return t!=null&&typeof t=="object"}var Nr="[object Symbol]";function Yr(t){return typeof t=="symbol"||Vr(t)&&Hr(t)==Nr}function Ur(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}export{ue as C,wt as S,Yr as a,Ur as b,Xr as c,Hr as d,Vr as e,Tr as f,Ir as i,Sr as r,qr as u};
