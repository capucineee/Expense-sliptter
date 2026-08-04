(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function ng(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bu={exports:{}},as={},Hu={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Lw(){if(kp)return ne;kp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function I(y){return y===null||typeof y!="object"?null:(y=w&&y[w]||y["@@iterator"],typeof y=="function"?y:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,H={};function G(y,x,W){this.props=y,this.context=x,this.refs=H,this.updater=W||L}G.prototype.isReactComponent={},G.prototype.setState=function(y,x){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,x,"setState")},G.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function fe(){}fe.prototype=G.prototype;function Ae(y,x,W){this.props=y,this.context=x,this.refs=H,this.updater=W||L}var Re=Ae.prototype=new fe;Re.constructor=Ae,F(Re,G.prototype),Re.isPureReactComponent=!0;var ke=Array.isArray,yt=Object.prototype.hasOwnProperty,Be={current:null},Qe={key:!0,ref:!0,__self:!0,__source:!0};function at(y,x,W){var Q,ee={},Z=null,ie=null;if(x!=null)for(Q in x.ref!==void 0&&(ie=x.ref),x.key!==void 0&&(Z=""+x.key),x)yt.call(x,Q)&&!Qe.hasOwnProperty(Q)&&(ee[Q]=x[Q]);var te=arguments.length-2;if(te===1)ee.children=W;else if(1<te){for(var de=Array(te),Ge=0;Ge<te;Ge++)de[Ge]=arguments[Ge+2];ee.children=de}if(y&&y.defaultProps)for(Q in te=y.defaultProps,te)ee[Q]===void 0&&(ee[Q]=te[Q]);return{$$typeof:r,type:y,key:Z,ref:ie,props:ee,_owner:Be.current}}function Kt(y,x){return{$$typeof:r,type:y.type,key:x,ref:y.ref,props:y.props,_owner:y._owner}}function Dt(y){return typeof y=="object"&&y!==null&&y.$$typeof===r}function on(y){var x={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(W){return x[W]})}var Tt=/\/+/g;function He(y,x){return typeof y=="object"&&y!==null&&y.key!=null?on(""+y.key):x.toString(36)}function Oe(y,x,W,Q,ee){var Z=typeof y;(Z==="undefined"||Z==="boolean")&&(y=null);var ie=!1;if(y===null)ie=!0;else switch(Z){case"string":case"number":ie=!0;break;case"object":switch(y.$$typeof){case r:case e:ie=!0}}if(ie)return ie=y,ee=ee(ie),y=Q===""?"."+He(ie,0):Q,ke(ee)?(W="",y!=null&&(W=y.replace(Tt,"$&/")+"/"),Oe(ee,x,W,"",function(Ge){return Ge})):ee!=null&&(Dt(ee)&&(ee=Kt(ee,W+(!ee.key||ie&&ie.key===ee.key?"":(""+ee.key).replace(Tt,"$&/")+"/")+y)),x.push(ee)),1;if(ie=0,Q=Q===""?".":Q+":",ke(y))for(var te=0;te<y.length;te++){Z=y[te];var de=Q+He(Z,te);ie+=Oe(Z,x,W,de,ee)}else if(de=I(y),typeof de=="function")for(y=de.call(y),te=0;!(Z=y.next()).done;)Z=Z.value,de=Q+He(Z,te++),ie+=Oe(Z,x,W,de,ee);else if(Z==="object")throw x=String(y),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return ie}function vt(y,x,W){if(y==null)return y;var Q=[],ee=0;return Oe(y,Q,"","",function(Z){return x.call(W,Z,ee++)}),Q}function $e(y){if(y._status===-1){var x=y._result;x=x(),x.then(function(W){(y._status===0||y._status===-1)&&(y._status=1,y._result=W)},function(W){(y._status===0||y._status===-1)&&(y._status=2,y._result=W)}),y._status===-1&&(y._status=0,y._result=x)}if(y._status===1)return y._result.default;throw y._result}var _e={current:null},U={transition:null},k={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:U,ReactCurrentOwner:Be};function N(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:vt,forEach:function(y,x,W){vt(y,function(){x.apply(this,arguments)},W)},count:function(y){var x=0;return vt(y,function(){x++}),x},toArray:function(y){return vt(y,function(x){return x})||[]},only:function(y){if(!Dt(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ne.Component=G,ne.Fragment=n,ne.Profiler=l,ne.PureComponent=Ae,ne.StrictMode=s,ne.Suspense=m,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,ne.act=N,ne.cloneElement=function(y,x,W){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var Q=F({},y.props),ee=y.key,Z=y.ref,ie=y._owner;if(x!=null){if(x.ref!==void 0&&(Z=x.ref,ie=Be.current),x.key!==void 0&&(ee=""+x.key),y.type&&y.type.defaultProps)var te=y.type.defaultProps;for(de in x)yt.call(x,de)&&!Qe.hasOwnProperty(de)&&(Q[de]=x[de]===void 0&&te!==void 0?te[de]:x[de])}var de=arguments.length-2;if(de===1)Q.children=W;else if(1<de){te=Array(de);for(var Ge=0;Ge<de;Ge++)te[Ge]=arguments[Ge+2];Q.children=te}return{$$typeof:r,type:y.type,key:ee,ref:Z,props:Q,_owner:ie}},ne.createContext=function(y){return y={$$typeof:d,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:u,_context:y},y.Consumer=y},ne.createElement=at,ne.createFactory=function(y){var x=at.bind(null,y);return x.type=y,x},ne.createRef=function(){return{current:null}},ne.forwardRef=function(y){return{$$typeof:f,render:y}},ne.isValidElement=Dt,ne.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:$e}},ne.memo=function(y,x){return{$$typeof:g,type:y,compare:x===void 0?null:x}},ne.startTransition=function(y){var x=U.transition;U.transition={};try{y()}finally{U.transition=x}},ne.unstable_act=N,ne.useCallback=function(y,x){return _e.current.useCallback(y,x)},ne.useContext=function(y){return _e.current.useContext(y)},ne.useDebugValue=function(){},ne.useDeferredValue=function(y){return _e.current.useDeferredValue(y)},ne.useEffect=function(y,x){return _e.current.useEffect(y,x)},ne.useId=function(){return _e.current.useId()},ne.useImperativeHandle=function(y,x,W){return _e.current.useImperativeHandle(y,x,W)},ne.useInsertionEffect=function(y,x){return _e.current.useInsertionEffect(y,x)},ne.useLayoutEffect=function(y,x){return _e.current.useLayoutEffect(y,x)},ne.useMemo=function(y,x){return _e.current.useMemo(y,x)},ne.useReducer=function(y,x,W){return _e.current.useReducer(y,x,W)},ne.useRef=function(y){return _e.current.useRef(y)},ne.useState=function(y){return _e.current.useState(y)},ne.useSyncExternalStore=function(y,x,W){return _e.current.useSyncExternalStore(y,x,W)},ne.useTransition=function(){return _e.current.useTransition()},ne.version="18.3.1",ne}var Np;function Oc(){return Np||(Np=1,Hu.exports=Lw()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Mw(){if(xp)return as;xp=1;var r=Oc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var E,w={},I=null,L=null;g!==void 0&&(I=""+g),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(L=m.ref);for(E in m)s.call(m,E)&&!u.hasOwnProperty(E)&&(w[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)w[E]===void 0&&(w[E]=m[E]);return{$$typeof:e,type:f,key:I,ref:L,props:w,_owner:l.current}}return as.Fragment=n,as.jsx=d,as.jsxs=d,as}var Rp;function Fw(){return Rp||(Rp=1,Bu.exports=Mw()),Bu.exports}var P=Fw(),et=Oc();const Uw=ng(et);var Jo={},$u={exports:{}},pt={},Gu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function jw(){return Pp||(Pp=1,(function(r){function e(U,k){var N=U.length;U.push(k);e:for(;0<N;){var y=N-1>>>1,x=U[y];if(0<l(x,k))U[y]=k,U[N]=x,N=y;else break e}}function n(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var k=U[0],N=U.pop();if(N!==k){U[0]=N;e:for(var y=0,x=U.length,W=x>>>1;y<W;){var Q=2*(y+1)-1,ee=U[Q],Z=Q+1,ie=U[Z];if(0>l(ee,N))Z<x&&0>l(ie,ee)?(U[y]=ie,U[Z]=N,y=Z):(U[y]=ee,U[Q]=N,y=Q);else if(Z<x&&0>l(ie,N))U[y]=ie,U[Z]=N,y=Z;else break e}}return k}function l(U,k){var N=U.sortIndex-k.sortIndex;return N!==0?N:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var m=[],g=[],E=1,w=null,I=3,L=!1,F=!1,H=!1,G=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Re(U){for(var k=n(g);k!==null;){if(k.callback===null)s(g);else if(k.startTime<=U)s(g),k.sortIndex=k.expirationTime,e(m,k);else break;k=n(g)}}function ke(U){if(H=!1,Re(U),!F)if(n(m)!==null)F=!0,$e(yt);else{var k=n(g);k!==null&&_e(ke,k.startTime-U)}}function yt(U,k){F=!1,H&&(H=!1,fe(at),at=-1),L=!0;var N=I;try{for(Re(k),w=n(m);w!==null&&(!(w.expirationTime>k)||U&&!on());){var y=w.callback;if(typeof y=="function"){w.callback=null,I=w.priorityLevel;var x=y(w.expirationTime<=k);k=r.unstable_now(),typeof x=="function"?w.callback=x:w===n(m)&&s(m),Re(k)}else s(m);w=n(m)}if(w!==null)var W=!0;else{var Q=n(g);Q!==null&&_e(ke,Q.startTime-k),W=!1}return W}finally{w=null,I=N,L=!1}}var Be=!1,Qe=null,at=-1,Kt=5,Dt=-1;function on(){return!(r.unstable_now()-Dt<Kt)}function Tt(){if(Qe!==null){var U=r.unstable_now();Dt=U;var k=!0;try{k=Qe(!0,U)}finally{k?He():(Be=!1,Qe=null)}}else Be=!1}var He;if(typeof Ae=="function")He=function(){Ae(Tt)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,vt=Oe.port2;Oe.port1.onmessage=Tt,He=function(){vt.postMessage(null)}}else He=function(){G(Tt,0)};function $e(U){Qe=U,Be||(Be=!0,He())}function _e(U,k){at=G(function(){U(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_continueExecution=function(){F||L||(F=!0,$e(yt))},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kt=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(U){switch(I){case 1:case 2:case 3:var k=3;break;default:k=I}var N=I;I=k;try{return U()}finally{I=N}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=I;I=U;try{return k()}finally{I=N}},r.unstable_scheduleCallback=function(U,k,N){var y=r.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?y+N:y):N=y,U){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=N+x,U={id:E++,callback:k,priorityLevel:U,startTime:N,expirationTime:x,sortIndex:-1},N>y?(U.sortIndex=N,e(g,U),n(m)===null&&U===n(g)&&(H?(fe(at),at=-1):H=!0,_e(ke,N-y))):(U.sortIndex=x,e(m,U),F||L||(F=!0,$e(yt))),U},r.unstable_shouldYield=on,r.unstable_wrapCallback=function(U){var k=I;return function(){var N=I;I=k;try{return U.apply(this,arguments)}finally{I=N}}}})(qu)),qu}var Ap;function zw(){return Ap||(Ap=1,Gu.exports=jw()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Vw(){if(Op)return pt;Op=1;var r=Oc(),e=zw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function I(t){return m.call(w,t)?!0:m.call(E,t)?!1:g.test(t)?w[t]=!0:(E[t]=!0,!1)}function L(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,i,o,a){if(i===null||typeof i>"u"||L(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function H(t,i,o,a,c,h,p){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=p}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G[t]=new H(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];G[i]=new H(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){G[t]=new H(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G[t]=new H(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G[t]=new H(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){G[t]=new H(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){G[t]=new H(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){G[t]=new H(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){G[t]=new H(t,5,!1,t.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function Ae(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(fe,Ae);G[i]=new H(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(fe,Ae);G[i]=new H(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(fe,Ae);G[i]=new H(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){G[t]=new H(t,1,!1,t.toLowerCase(),null,!1,!1)}),G.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){G[t]=new H(t,1,!1,t.toLowerCase(),null,!0,!0)});function Re(t,i,o,a){var c=G.hasOwnProperty(i)?G[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(F(i,o,c,a)&&(o=null),a||c===null?I(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var ke=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yt=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Qe=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),Kt=Symbol.for("react.profiler"),Dt=Symbol.for("react.provider"),on=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),U=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var N=Object.assign,y;function x(t){if(y===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);y=i&&i[1]||""}return`
`+y+t}var W=!1;function Q(t,i){if(!t||W)return"";W=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){var a=R}Reflect.construct(t,[],i)}else{try{i.call()}catch(R){a=R}t.call(i.prototype)}else{try{throw Error()}catch(R){a=R}t()}}catch(R){if(R&&a&&typeof R.stack=="string"){for(var c=R.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var v=`
`+c[p].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=p&&0<=_);break}}}finally{W=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?x(t):""}function ee(t){switch(t.tag){case 5:return x(t.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Z(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qe:return"Fragment";case Be:return"Portal";case Kt:return"Profiler";case at:return"StrictMode";case He:return"Suspense";case Oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case on:return(t.displayName||"Context")+".Consumer";case Dt:return(t._context.displayName||"Context")+".Provider";case Tt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return i=t.displayName||null,i!==null?i:Z(t.type)||"Memo";case $e:i=t._payload,t=t._init;try{return Z(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(i);case 8:return i===at?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function de(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=de(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function zs(t){t._valueTracker||(t._valueTracker=Ge(t))}function Ad(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=de(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yl(t,i){var o=i.checked;return N({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Od(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=te(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Dd(t,i){i=i.checked,i!=null&&Re(t,"checked",i,!1)}function Jl(t,i){Dd(t,i);var o=te(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Xl(t,i.type,o):i.hasOwnProperty("defaultValue")&&Xl(t,i.type,te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function bd(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xl(t,i,o){(i!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ii=Array.isArray;function Or(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+te(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Zl(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return N({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ld(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ii(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:te(o)}}function Md(t,i){var o=te(i.value),a=te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Fd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ud(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ud(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,jd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ci(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){jy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ti[i]=Ti[t]})});function zd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+i).trim():i+"px"}function Vd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=zd(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var zy=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(t,i){if(i){if(zy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function na(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function ia(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sa=null,Dr=null,br=null;function Wd(t){if(t=qi(t)){if(typeof sa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ho(i),sa(t.stateNode,t.type,i))}}function Bd(t){Dr?br?br.push(t):br=[t]:Dr=t}function Hd(){if(Dr){var t=Dr,i=br;if(br=Dr=null,Wd(t),i)for(t=0;t<i.length;t++)Wd(i[t])}}function $d(t,i){return t(i)}function Gd(){}var oa=!1;function qd(t,i,o){if(oa)return t(i,o);oa=!0;try{return $d(t,i,o)}finally{oa=!1,(Dr!==null||br!==null)&&(Gd(),Hd())}}function ki(t,i){var o=t.stateNode;if(o===null)return null;var a=ho(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var la=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){la=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{la=!1}function Vy(t,i,o,a,c,h,p,_,v){var R=Array.prototype.slice.call(arguments,3);try{i.apply(o,R)}catch(O){this.onError(O)}}var xi=!1,Bs=null,Hs=!1,aa=null,Wy={onError:function(t){xi=!0,Bs=t}};function By(t,i,o,a,c,h,p,_,v){xi=!1,Bs=null,Vy.apply(Wy,arguments)}function Hy(t,i,o,a,c,h,p,_,v){if(By.apply(this,arguments),xi){if(xi){var R=Bs;xi=!1,Bs=null}else throw Error(n(198));Hs||(Hs=!0,aa=R)}}function sr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Kd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qd(t){if(sr(t)!==t)throw Error(n(188))}function $y(t){var i=t.alternate;if(!i){if(i=sr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Qd(c),t;if(h===a)return Qd(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Yd(t){return t=$y(t),t!==null?Jd(t):null}function Jd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Jd(t);if(i!==null)return i;t=t.sibling}return null}var Xd=e.unstable_scheduleCallback,Zd=e.unstable_cancelCallback,Gy=e.unstable_shouldYield,qy=e.unstable_requestPaint,Ne=e.unstable_now,Ky=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,eh=e.unstable_UserBlockingPriority,$s=e.unstable_NormalPriority,Qy=e.unstable_LowPriority,th=e.unstable_IdlePriority,Gs=null,Qt=null;function Yy(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Zy,Jy=Math.log,Xy=Math.LN2;function Zy(t){return t>>>=0,t===0?32:31-(Jy(t)/Xy|0)|0}var qs=64,Ks=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Ri(_):(h&=p,h!==0&&(a=Ri(h)))}else p=o&~c,p!==0?a=Ri(p):h!==0&&(a=Ri(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&c)===0&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-bt(i),c=1<<o,a|=t[o],i&=~c;return a}function ev(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-bt(h),_=1<<p,v=c[p];v===-1?((_&o)===0||(_&a)!==0)&&(c[p]=ev(_,i)):v<=i&&(t.expiredLanes|=_),h&=~_}}function ca(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nh(){var t=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),t}function da(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Pi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-bt(i),t[i]=o}function nv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-bt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ha(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-bt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var ce=0;function rh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ih,fa,sh,oh,lh,pa=!1,Ys=[],kn=null,Nn=null,xn=null,Ai=new Map,Oi=new Map,Rn=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(i.pointerId)}}function Di(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=qi(i),i!==null&&fa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function iv(t,i,o,a,c){switch(i){case"focusin":return kn=Di(kn,t,i,o,a,c),!0;case"dragenter":return Nn=Di(Nn,t,i,o,a,c),!0;case"mouseover":return xn=Di(xn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ai.set(h,Di(Ai.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Oi.set(h,Di(Oi.get(h)||null,t,i,o,a,c)),!0}return!1}function uh(t){var i=or(t.target);if(i!==null){var o=sr(i);if(o!==null){if(i=o.tag,i===13){if(i=Kd(o),i!==null){t.blockedOn=i,lh(t.priority,function(){sh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ga(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ra=a,o.target.dispatchEvent(a),ra=null}else return i=qi(o),i!==null&&fa(i),t.blockedOn=o,!1;i.shift()}return!0}function ch(t,i,o){Js(t)&&o.delete(i)}function sv(){pa=!1,kn!==null&&Js(kn)&&(kn=null),Nn!==null&&Js(Nn)&&(Nn=null),xn!==null&&Js(xn)&&(xn=null),Ai.forEach(ch),Oi.forEach(ch)}function bi(t,i){t.blockedOn===i&&(t.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function Li(t){function i(c){return bi(c,t)}if(0<Ys.length){bi(Ys[0],t);for(var o=1;o<Ys.length;o++){var a=Ys[o];a.blockedOn===t&&(a.blockedOn=null)}}for(kn!==null&&bi(kn,t),Nn!==null&&bi(Nn,t),xn!==null&&bi(xn,t),Ai.forEach(i),Oi.forEach(i),o=0;o<Rn.length;o++)a=Rn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Rn.length&&(o=Rn[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&Rn.shift()}var Lr=ke.ReactCurrentBatchConfig,Xs=!0;function ov(t,i,o,a){var c=ce,h=Lr.transition;Lr.transition=null;try{ce=1,ma(t,i,o,a)}finally{ce=c,Lr.transition=h}}function lv(t,i,o,a){var c=ce,h=Lr.transition;Lr.transition=null;try{ce=4,ma(t,i,o,a)}finally{ce=c,Lr.transition=h}}function ma(t,i,o,a){if(Xs){var c=ga(t,i,o,a);if(c===null)Da(t,i,a,Zs,o),ah(t,a);else if(iv(c,t,i,o,a))a.stopPropagation();else if(ah(t,a),i&4&&-1<rv.indexOf(t)){for(;c!==null;){var h=qi(c);if(h!==null&&ih(h),h=ga(t,i,o,a),h===null&&Da(t,i,a,Zs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Da(t,i,a,null,o)}}var Zs=null;function ga(t,i,o,a){if(Zs=null,t=ia(a),t=or(t),t!==null)if(i=sr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Kd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zs=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case ua:return 1;case eh:return 4;case $s:case Qy:return 16;case th:return 536870912;default:return 16}default:return 16}}var Pn=null,_a=null,eo=null;function hh(){if(eo)return eo;var t,i=_a,o=i.length,a,c="value"in Pn?Pn.value:Pn.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&i[o-a]===c[h-a];a++);return eo=c.slice(t,1<a?1-a:void 0)}function to(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function fh(){return!1}function wt(t){function i(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?no:fh,this.isPropagationStopped=fh,this}return N(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),i}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=wt(Mr),Mi=N({},Mr,{view:0,detail:0}),av=wt(Mi),va,wa,Fi,ro=N({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(va=t.screenX-Fi.screenX,wa=t.screenY-Fi.screenY):wa=va=0,Fi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:wa}}),ph=wt(ro),uv=N({},ro,{dataTransfer:0}),cv=wt(uv),dv=N({},Mi,{relatedTarget:0}),Ea=wt(dv),hv=N({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=wt(hv),pv=N({},Mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=wt(pv),gv=N({},Mr,{data:0}),mh=wt(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vv[t])?!!i[t]:!1}function Sa(){return wv}var Ev=N({},Mi,{key:function(t){if(t.key){var i=_v[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sv=wt(Ev),Iv=N({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=wt(Iv),Cv=N({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Tv=wt(Cv),kv=N({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=wt(kv),xv=N({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=wt(xv),Pv=[9,13,27,32],Ia=f&&"CompositionEvent"in window,Ui=null;f&&"documentMode"in document&&(Ui=document.documentMode);var Av=f&&"TextEvent"in window&&!Ui,_h=f&&(!Ia||Ui&&8<Ui&&11>=Ui),yh=" ",vh=!1;function wh(t,i){switch(t){case"keyup":return Pv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Ov(t,i){switch(t){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(vh=!0,yh);case"textInput":return t=i.data,t===yh&&vh?null:t;default:return null}}function Dv(t,i){if(Fr)return t==="compositionend"||!Ia&&wh(t,i)?(t=hh(),eo=_a=Pn=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _h&&i.locale!=="ko"?null:i.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!bv[t.type]:i==="textarea"}function Ih(t,i,o,a){Bd(a),i=ao(i,"onChange"),0<i.length&&(o=new ya("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var ji=null,zi=null;function Lv(t){Vh(t,0)}function io(t){var i=Wr(t);if(Ad(i))return t}function Mv(t,i){if(t==="change")return i}var Ch=!1;if(f){var Ca;if(f){var Ta="oninput"in document;if(!Ta){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Ta=typeof Th.oninput=="function"}Ca=Ta}else Ca=!1;Ch=Ca&&(!document.documentMode||9<document.documentMode)}function kh(){ji&&(ji.detachEvent("onpropertychange",Nh),zi=ji=null)}function Nh(t){if(t.propertyName==="value"&&io(zi)){var i=[];Ih(i,zi,t,ia(t)),qd(Lv,i)}}function Fv(t,i,o){t==="focusin"?(kh(),ji=i,zi=o,ji.attachEvent("onpropertychange",Nh)):t==="focusout"&&kh()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(zi)}function jv(t,i){if(t==="click")return io(i)}function zv(t,i){if(t==="input"||t==="change")return io(i)}function Vv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Lt=typeof Object.is=="function"?Object.is:Vv;function Vi(t,i){if(Lt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(i,c)||!Lt(t[c],i[c]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rh(t,i){var o=xh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=xh(o)}}function Ph(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ph(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var t=window,i=Vs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Vs(t.document)}return i}function ka(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Wv(t){var i=Ah(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(a!==null&&ka(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Rh(o,h);var p=Rh(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(p.node,p.offset)):(i.setEnd(p.node,p.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,Ur=null,Na=null,Wi=null,xa=!1;function Oh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xa||Ur==null||Ur!==Vs(a)||(a=Ur,"selectionStart"in a&&ka(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wi&&Vi(Wi,a)||(Wi=a,a=ao(Na,"onSelect"),0<a.length&&(i=new ya("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Ur)))}function so(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var jr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Ra={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function oo(t){if(Ra[t])return Ra[t];if(!jr[t])return t;var i=jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dh)return Ra[t]=i[o];return t}var bh=oo("animationend"),Lh=oo("animationiteration"),Mh=oo("animationstart"),Fh=oo("transitionend"),Uh=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,i){Uh.set(t,i),u(i,[t])}for(var Pa=0;Pa<jh.length;Pa++){var Aa=jh[Pa],Hv=Aa.toLowerCase(),$v=Aa[0].toUpperCase()+Aa.slice(1);An(Hv,"on"+$v)}An(bh,"onAnimationEnd"),An(Lh,"onAnimationIteration"),An(Mh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Fh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function zh(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,Hy(a,i,void 0,t),t.currentTarget=null}function Vh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var p=a.length-1;0<=p;p--){var _=a[p],v=_.instance,R=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;zh(c,_,R),h=v}else for(p=0;p<a.length;p++){if(_=a[p],v=_.instance,R=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;zh(c,_,R),h=v}}}if(Hs)throw t=aa,Hs=!1,aa=null,t}function ye(t,i){var o=i[ja];o===void 0&&(o=i[ja]=new Set);var a=t+"__bubble";o.has(a)||(Wh(i,t,2,!1),o.add(a))}function Oa(t,i,o){var a=0;i&&(a|=4),Wh(o,t,a,i)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[lo]){t[lo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Gv.has(o)||Oa(o,!1,t),Oa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[lo]||(i[lo]=!0,Oa("selectionchange",!1,i))}}function Wh(t,i,o,a){switch(dh(i)){case 1:var c=ov;break;case 4:c=lv;break;default:c=ma}o=c.bind(null,i,o,t),c=void 0,!la||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Da(t,i,o,a,c){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var v=p.tag;if((v===3||v===4)&&(v=p.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;p=p.return}for(;_!==null;){if(p=or(_),p===null)return;if(v=p.tag,v===5||v===6){a=h=p;continue e}_=_.parentNode}}a=a.return}qd(function(){var R=h,O=ia(o),D=[];e:{var A=Uh.get(t);if(A!==void 0){var j=ya,V=t;switch(t){case"keypress":if(to(o)===0)break e;case"keydown":case"keyup":j=Sv;break;case"focusin":V="focus",j=Ea;break;case"focusout":V="blur",j=Ea;break;case"beforeblur":case"afterblur":j=Ea;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Tv;break;case bh:case Lh:case Mh:j=fv;break;case Fh:j=Nv;break;case"scroll":j=av;break;case"wheel":j=Rv;break;case"copy":case"cut":case"paste":j=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=gh}var B=(i&4)!==0,xe=!B&&t==="scroll",C=B?A!==null?A+"Capture":null:A;B=[];for(var S=R,T;S!==null;){T=S;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,C!==null&&(b=ki(S,C),b!=null&&B.push($i(S,b,T)))),xe)break;S=S.return}0<B.length&&(A=new j(A,V,null,o,O),D.push({event:A,listeners:B}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",A&&o!==ra&&(V=o.relatedTarget||o.fromElement)&&(or(V)||V[ln]))break e;if((j||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,j?(V=o.relatedTarget||o.toElement,j=R,V=V?or(V):null,V!==null&&(xe=sr(V),V!==xe||V.tag!==5&&V.tag!==6)&&(V=null)):(j=null,V=R),j!==V)){if(B=ph,b="onMouseLeave",C="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(B=gh,b="onPointerLeave",C="onPointerEnter",S="pointer"),xe=j==null?A:Wr(j),T=V==null?A:Wr(V),A=new B(b,S+"leave",j,o,O),A.target=xe,A.relatedTarget=T,b=null,or(O)===R&&(B=new B(C,S+"enter",V,o,O),B.target=T,B.relatedTarget=xe,b=B),xe=b,j&&V)t:{for(B=j,C=V,S=0,T=B;T;T=zr(T))S++;for(T=0,b=C;b;b=zr(b))T++;for(;0<S-T;)B=zr(B),S--;for(;0<T-S;)C=zr(C),T--;for(;S--;){if(B===C||C!==null&&B===C.alternate)break t;B=zr(B),C=zr(C)}B=null}else B=null;j!==null&&Bh(D,A,j,B,!1),V!==null&&xe!==null&&Bh(D,xe,V,B,!0)}}e:{if(A=R?Wr(R):window,j=A.nodeName&&A.nodeName.toLowerCase(),j==="select"||j==="input"&&A.type==="file")var $=Mv;else if(Sh(A))if(Ch)$=zv;else{$=Uv;var q=Fv}else(j=A.nodeName)&&j.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&($=jv);if($&&($=$(t,R))){Ih(D,$,o,O);break e}q&&q(t,A,R),t==="focusout"&&(q=A._wrapperState)&&q.controlled&&A.type==="number"&&Xl(A,"number",A.value)}switch(q=R?Wr(R):window,t){case"focusin":(Sh(q)||q.contentEditable==="true")&&(Ur=q,Na=R,Wi=null);break;case"focusout":Wi=Na=Ur=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,Oh(D,o,O);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Oh(D,o,O)}var K;if(Ia)e:{switch(t){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Fr?wh(t,o)&&(J="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(J="onCompositionStart");J&&(_h&&o.locale!=="ko"&&(Fr||J!=="onCompositionStart"?J==="onCompositionEnd"&&Fr&&(K=hh()):(Pn=O,_a="value"in Pn?Pn.value:Pn.textContent,Fr=!0)),q=ao(R,J),0<q.length&&(J=new mh(J,t,null,o,O),D.push({event:J,listeners:q}),K?J.data=K:(K=Eh(o),K!==null&&(J.data=K)))),(K=Av?Ov(t,o):Dv(t,o))&&(R=ao(R,"onBeforeInput"),0<R.length&&(O=new mh("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:R}),O.data=K))}Vh(D,i)})}function $i(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ao(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,c)),h=ki(t,i),h!=null&&a.push($i(t,h,c))),t=t.return}return a}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,i,o,a,c){for(var h=i._reactName,p=[];o!==null&&o!==a;){var _=o,v=_.alternate,R=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&R!==null&&(_=R,c?(v=ki(o,h),v!=null&&p.unshift($i(o,v,_))):c||(v=ki(o,h),v!=null&&p.push($i(o,v,_)))),o=o.return}p.length!==0&&t.push({event:i,listeners:p})}var qv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(qv,`
`).replace(Kv,"")}function uo(t,i,o){if(i=Hh(i),Hh(t)!==i&&o)throw Error(n(425))}function co(){}var ba=null,La=null;function Ma(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(Jv)}:Fa;function Jv(t){setTimeout(function(){throw t})}function Ua(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Li(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Li(i)}function On(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Vr,Gi="__reactProps$"+Vr,ln="__reactContainer$"+Vr,ja="__reactEvents$"+Vr,Xv="__reactListeners$"+Vr,Zv="__reactHandles$"+Vr;function or(t){var i=t[Yt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Yt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Gh(t);t!==null;){if(o=t[Yt])return o;t=Gh(t)}return i}t=o,o=t.parentNode}return null}function qi(t){return t=t[Yt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ho(t){return t[Gi]||null}var za=[],Br=-1;function Dn(t){return{current:t}}function ve(t){0>Br||(t.current=za[Br],za[Br]=null,Br--)}function me(t,i){Br++,za[Br]=t.current,t.current=i}var bn={},Ye=Dn(bn),ut=Dn(!1),lr=bn;function Hr(t,i){var o=t.type.contextTypes;if(!o)return bn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ct(t){return t=t.childContextTypes,t!=null}function fo(){ve(ut),ve(Ye)}function qh(t,i,o){if(Ye.current!==bn)throw Error(n(168));me(Ye,i),me(ut,o)}function Kh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,ie(t)||"Unknown",c));return N({},o,a)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bn,lr=Ye.current,me(Ye,t),me(ut,ut.current),!0}function Qh(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Kh(t,i,lr),a.__reactInternalMemoizedMergedChildContext=t,ve(ut),ve(Ye),me(Ye,t)):ve(ut),me(ut,o)}var an=null,mo=!1,Va=!1;function Yh(t){an===null?an=[t]:an.push(t)}function ew(t){mo=!0,Yh(t)}function Ln(){if(!Va&&an!==null){Va=!0;var t=0,i=ce;try{var o=an;for(ce=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,mo=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),Xd(ua,Ln),c}finally{ce=i,Va=!1}}return null}var $r=[],Gr=0,go=null,_o=0,kt=[],Nt=0,ar=null,un=1,cn="";function ur(t,i){$r[Gr++]=_o,$r[Gr++]=go,go=t,_o=i}function Jh(t,i,o){kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,ar=t;var a=un;t=cn;var c=32-bt(a)-1;a&=~(1<<c),o+=1;var h=32-bt(i)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,un=1<<32-bt(i)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function Wa(t){t.return!==null&&(ur(t,1),Jh(t,1,0))}function Ba(t){for(;t===go;)go=$r[--Gr],$r[Gr]=null,_o=$r[--Gr],$r[Gr]=null;for(;t===ar;)ar=kt[--Nt],kt[Nt]=null,cn=kt[--Nt],kt[Nt]=null,un=kt[--Nt],kt[Nt]=null}var Et=null,St=null,Ee=!1,Mt=null;function Xh(t,i){var o=At(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Zh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,St=On(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=At(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,St=null,!0):!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $a(t){if(Ee){var i=St;if(i){var o=i;if(!Zh(t,i)){if(Ha(t))throw Error(n(418));i=On(o.nextSibling);var a=Et;i&&Zh(t,i)?Xh(a,o):(t.flags=t.flags&-4097|2,Ee=!1,Et=t)}}else{if(Ha(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ee=!1,Et=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function yo(t){if(t!==Et)return!1;if(!Ee)return ef(t),Ee=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ma(t.type,t.memoizedProps)),i&&(i=St)){if(Ha(t))throw tf(),Error(n(418));for(;i;)Xh(t,i),i=On(i.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=On(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Et?On(t.stateNode.nextSibling):null;return!0}function tf(){for(var t=St;t;)t=On(t.nextSibling)}function qr(){St=Et=null,Ee=!1}function Ga(t){Mt===null?Mt=[t]:Mt.push(t)}var tw=ke.ReactCurrentBatchConfig;function Ki(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function vo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function nf(t){var i=t._init;return i(t._payload)}function rf(t){function i(C,S){if(t){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function o(C,S){if(!t)return null;for(;S!==null;)i(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function c(C,S){return C=Bn(C,S),C.index=0,C.sibling=null,C}function h(C,S,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function p(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,S,T,b){return S===null||S.tag!==6?(S=Fu(T,C.mode,b),S.return=C,S):(S=c(S,T),S.return=C,S)}function v(C,S,T,b){var $=T.type;return $===Qe?O(C,S,T.props.children,b,T.key):S!==null&&(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$e&&nf($)===S.type)?(b=c(S,T.props),b.ref=Ki(C,S,T),b.return=C,b):(b=Bo(T.type,T.key,T.props,null,C.mode,b),b.ref=Ki(C,S,T),b.return=C,b)}function R(C,S,T,b){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=Uu(T,C.mode,b),S.return=C,S):(S=c(S,T.children||[]),S.return=C,S)}function O(C,S,T,b,$){return S===null||S.tag!==7?(S=_r(T,C.mode,b,$),S.return=C,S):(S=c(S,T),S.return=C,S)}function D(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Fu(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yt:return T=Bo(S.type,S.key,S.props,null,C.mode,T),T.ref=Ki(C,null,S),T.return=C,T;case Be:return S=Uu(S,C.mode,T),S.return=C,S;case $e:var b=S._init;return D(C,b(S._payload),T)}if(Ii(S)||k(S))return S=_r(S,C.mode,T,null),S.return=C,S;vo(C,S)}return null}function A(C,S,T,b){var $=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return $!==null?null:_(C,S,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case yt:return T.key===$?v(C,S,T,b):null;case Be:return T.key===$?R(C,S,T,b):null;case $e:return $=T._init,A(C,S,$(T._payload),b)}if(Ii(T)||k(T))return $!==null?null:O(C,S,T,b,null);vo(C,T)}return null}function j(C,S,T,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return C=C.get(T)||null,_(S,C,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case yt:return C=C.get(b.key===null?T:b.key)||null,v(S,C,b,$);case Be:return C=C.get(b.key===null?T:b.key)||null,R(S,C,b,$);case $e:var q=b._init;return j(C,S,T,q(b._payload),$)}if(Ii(b)||k(b))return C=C.get(T)||null,O(S,C,b,$,null);vo(S,b)}return null}function V(C,S,T,b){for(var $=null,q=null,K=S,J=S=0,je=null;K!==null&&J<T.length;J++){K.index>J?(je=K,K=null):je=K.sibling;var ae=A(C,K,T[J],b);if(ae===null){K===null&&(K=je);break}t&&K&&ae.alternate===null&&i(C,K),S=h(ae,S,J),q===null?$=ae:q.sibling=ae,q=ae,K=je}if(J===T.length)return o(C,K),Ee&&ur(C,J),$;if(K===null){for(;J<T.length;J++)K=D(C,T[J],b),K!==null&&(S=h(K,S,J),q===null?$=K:q.sibling=K,q=K);return Ee&&ur(C,J),$}for(K=a(C,K);J<T.length;J++)je=j(K,C,J,T[J],b),je!==null&&(t&&je.alternate!==null&&K.delete(je.key===null?J:je.key),S=h(je,S,J),q===null?$=je:q.sibling=je,q=je);return t&&K.forEach(function(Hn){return i(C,Hn)}),Ee&&ur(C,J),$}function B(C,S,T,b){var $=k(T);if(typeof $!="function")throw Error(n(150));if(T=$.call(T),T==null)throw Error(n(151));for(var q=$=null,K=S,J=S=0,je=null,ae=T.next();K!==null&&!ae.done;J++,ae=T.next()){K.index>J?(je=K,K=null):je=K.sibling;var Hn=A(C,K,ae.value,b);if(Hn===null){K===null&&(K=je);break}t&&K&&Hn.alternate===null&&i(C,K),S=h(Hn,S,J),q===null?$=Hn:q.sibling=Hn,q=Hn,K=je}if(ae.done)return o(C,K),Ee&&ur(C,J),$;if(K===null){for(;!ae.done;J++,ae=T.next())ae=D(C,ae.value,b),ae!==null&&(S=h(ae,S,J),q===null?$=ae:q.sibling=ae,q=ae);return Ee&&ur(C,J),$}for(K=a(C,K);!ae.done;J++,ae=T.next())ae=j(K,C,J,ae.value,b),ae!==null&&(t&&ae.alternate!==null&&K.delete(ae.key===null?J:ae.key),S=h(ae,S,J),q===null?$=ae:q.sibling=ae,q=ae);return t&&K.forEach(function(bw){return i(C,bw)}),Ee&&ur(C,J),$}function xe(C,S,T,b){if(typeof T=="object"&&T!==null&&T.type===Qe&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case yt:e:{for(var $=T.key,q=S;q!==null;){if(q.key===$){if($=T.type,$===Qe){if(q.tag===7){o(C,q.sibling),S=c(q,T.props.children),S.return=C,C=S;break e}}else if(q.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$e&&nf($)===q.type){o(C,q.sibling),S=c(q,T.props),S.ref=Ki(C,q,T),S.return=C,C=S;break e}o(C,q);break}else i(C,q);q=q.sibling}T.type===Qe?(S=_r(T.props.children,C.mode,b,T.key),S.return=C,C=S):(b=Bo(T.type,T.key,T.props,null,C.mode,b),b.ref=Ki(C,S,T),b.return=C,C=b)}return p(C);case Be:e:{for(q=T.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(C,S.sibling),S=c(S,T.children||[]),S.return=C,C=S;break e}else{o(C,S);break}else i(C,S);S=S.sibling}S=Uu(T,C.mode,b),S.return=C,C=S}return p(C);case $e:return q=T._init,xe(C,S,q(T._payload),b)}if(Ii(T))return V(C,S,T,b);if(k(T))return B(C,S,T,b);vo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(C,S.sibling),S=c(S,T),S.return=C,C=S):(o(C,S),S=Fu(T,C.mode,b),S.return=C,C=S),p(C)):o(C,S)}return xe}var Kr=rf(!0),sf=rf(!1),wo=Dn(null),Eo=null,Qr=null,qa=null;function Ka(){qa=Qr=Eo=null}function Qa(t){var i=wo.current;ve(wo),t._currentValue=i}function Ya(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Yr(t,i){Eo=t,qa=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(dt=!0),t.firstContext=null)}function xt(t){var i=t._currentValue;if(qa!==t)if(t={context:t,memoizedValue:i,next:null},Qr===null){if(Eo===null)throw Error(n(308));Qr=t,Eo.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return i}var cr=null;function Ja(t){cr===null?cr=[t]:cr.push(t)}function of(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,Ja(i)):(o.next=c.next,c.next=o),i.interleaved=o,dn(t,a)}function dn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Mn=!1;function Xa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,dn(t,o)}return c=a.interleaved,c===null?(i.next=i,Ja(a)):(i.next=c.next,c.next=i),a.interleaved=i,dn(t,o)}function So(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ha(t,o)}}function af(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Io(t,i,o,a){var c=t.updateQueue;Mn=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,R=v.next;v.next=null,p===null?h=R:p.next=R,p=v;var O=t.alternate;O!==null&&(O=O.updateQueue,_=O.lastBaseUpdate,_!==p&&(_===null?O.firstBaseUpdate=R:_.next=R,O.lastBaseUpdate=v))}if(h!==null){var D=c.baseState;p=0,O=R=v=null,_=h;do{var A=_.lane,j=_.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:j,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var V=t,B=_;switch(A=i,j=o,B.tag){case 1:if(V=B.payload,typeof V=="function"){D=V.call(j,D,A);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=B.payload,A=typeof V=="function"?V.call(j,D,A):V,A==null)break e;D=N({},D,A);break e;case 2:Mn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,A=c.effects,A===null?c.effects=[_]:A.push(_))}else j={eventTime:j,lane:A,tag:_.tag,payload:_.payload,callback:_.callback,next:null},O===null?(R=O=j,v=D):O=O.next=j,p|=A;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;A=_,_=A.next,A.next=null,c.lastBaseUpdate=A,c.shared.pending=null}}while(!0);if(O===null&&(v=D),c.baseState=v,c.firstBaseUpdate=R,c.lastBaseUpdate=O,i=c.shared.interleaved,i!==null){c=i;do p|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);fr|=p,t.lanes=p,t.memoizedState=D}}function uf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Qi={},Jt=Dn(Qi),Yi=Dn(Qi),Ji=Dn(Qi);function dr(t){if(t===Qi)throw Error(n(174));return t}function Za(t,i){switch(me(Ji,i),me(Yi,t),me(Jt,Qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ea(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ea(i,t)}ve(Jt),me(Jt,i)}function Jr(){ve(Jt),ve(Yi),ve(Ji)}function cf(t){dr(Ji.current);var i=dr(Jt.current),o=ea(i,t.type);i!==o&&(me(Yi,t),me(Jt,o))}function eu(t){Yi.current===t&&(ve(Jt),ve(Yi))}var Se=Dn(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var To=ke.ReactCurrentDispatcher,ru=ke.ReactCurrentBatchConfig,hr=0,Ie=null,De=null,Fe=null,ko=!1,Xi=!1,Zi=0,nw=0;function Je(){throw Error(n(321))}function iu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Lt(t[o],i[o]))return!1;return!0}function su(t,i,o,a,c,h){if(hr=h,Ie=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=t===null||t.memoizedState===null?ow:lw,t=o(a,c),Xi){h=0;do{if(Xi=!1,Zi=0,25<=h)throw Error(n(301));h+=1,Fe=De=null,i.updateQueue=null,To.current=aw,t=o(a,c)}while(Xi)}if(To.current=Ro,i=De!==null&&De.next!==null,hr=0,Fe=De=Ie=null,ko=!1,i)throw Error(n(300));return t}function ou(){var t=Zi!==0;return Zi=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ie.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Rt(){if(De===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var i=Fe===null?Ie.memoizedState:Fe.next;if(i!==null)Fe=i,De=t;else{if(t===null)throw Error(n(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Ie.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function es(t,i){return typeof i=="function"?i(t):i}function lu(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=De,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,v=null,R=h;do{var O=R.lane;if((hr&O)===O)v!==null&&(v=v.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),a=R.hasEagerState?R.eagerState:t(a,R.action);else{var D={lane:O,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};v===null?(_=v=D,p=a):v=v.next=D,Ie.lanes|=O,fr|=O}R=R.next}while(R!==null&&R!==h);v===null?p=a:v.next=_,Lt(a,i.memoizedState)||(dt=!0),i.memoizedState=a,i.baseState=p,i.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ie.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function au(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);Lt(h,i.memoizedState)||(dt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function df(){}function hf(t,i){var o=Ie,a=Rt(),c=i(),h=!Lt(a.memoizedState,c);if(h&&(a.memoizedState=c,dt=!0),a=a.queue,uu(mf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,ts(9,pf.bind(null,o,a,c,i),void 0,null),Ue===null)throw Error(n(349));(hr&30)!==0||ff(o,i,c)}return c}function ff(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ie.updateQueue,i===null?(i={lastEffect:null,stores:null},Ie.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function pf(t,i,o,a){i.value=o,i.getSnapshot=a,gf(i)&&_f(t)}function mf(t,i,o){return o(function(){gf(i)&&_f(t)})}function gf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Lt(t,o)}catch{return!0}}function _f(t){var i=dn(t,1);i!==null&&zt(i,t,1,-1)}function yf(t){var i=Xt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},i.queue=t,t=t.dispatch=sw.bind(null,Ie,t),[i.memoizedState,t]}function ts(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ie.updateQueue,i===null?(i={lastEffect:null,stores:null},Ie.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function vf(){return Rt().memoizedState}function No(t,i,o,a){var c=Xt();Ie.flags|=t,c.memoizedState=ts(1|i,o,void 0,a===void 0?null:a)}function xo(t,i,o,a){var c=Rt();a=a===void 0?null:a;var h=void 0;if(De!==null){var p=De.memoizedState;if(h=p.destroy,a!==null&&iu(a,p.deps)){c.memoizedState=ts(i,o,h,a);return}}Ie.flags|=t,c.memoizedState=ts(1|i,o,h,a)}function wf(t,i){return No(8390656,8,t,i)}function uu(t,i){return xo(2048,8,t,i)}function Ef(t,i){return xo(4,2,t,i)}function Sf(t,i){return xo(4,4,t,i)}function If(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Cf(t,i,o){return o=o!=null?o.concat([t]):null,xo(4,4,If.bind(null,i,t),o)}function cu(){}function Tf(t,i){var o=Rt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function kf(t,i){var o=Rt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Nf(t,i,o){return(hr&21)===0?(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=o):(Lt(o,i)||(o=nh(),Ie.lanes|=o,fr|=o,t.baseState=!0),i)}function rw(t,i){var o=ce;ce=o!==0&&4>o?o:4,t(!0);var a=ru.transition;ru.transition={};try{t(!1),i()}finally{ce=o,ru.transition=a}}function xf(){return Rt().memoizedState}function iw(t,i,o){var a=Vn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Rf(t))Pf(i,o);else if(o=of(t,i,o,a),o!==null){var c=rt();zt(o,t,a,c),Af(o,i,a)}}function sw(t,i,o){var a=Vn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rf(t))Pf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var p=i.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,Lt(_,p)){var v=i.interleaved;v===null?(c.next=c,Ja(i)):(c.next=v.next,v.next=c),i.interleaved=c;return}}catch{}finally{}o=of(t,i,c,a),o!==null&&(c=rt(),zt(o,t,a,c),Af(o,i,a))}}function Rf(t){var i=t.alternate;return t===Ie||i!==null&&i===Ie}function Pf(t,i){Xi=ko=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Af(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ha(t,o)}}var Ro={readContext:xt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ow={readContext:xt,useCallback:function(t,i){return Xt().memoizedState=[t,i===void 0?null:i],t},useContext:xt,useEffect:wf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,No(4194308,4,If.bind(null,i,t),o)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var o=Xt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Xt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=iw.bind(null,Ie,t),[a.memoizedState,t]},useRef:function(t){var i=Xt();return t={current:t},i.memoizedState=t},useState:yf,useDebugValue:cu,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=yf(!1),i=t[0];return t=rw.bind(null,t[1]),Xt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ie,c=Xt();if(Ee){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ue===null)throw Error(n(349));(hr&30)!==0||ff(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,wf(mf.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,pf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Xt(),i=Ue.identifierPrefix;if(Ee){var o=cn,a=un;o=(a&~(1<<32-bt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Zi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=nw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},lw={readContext:xt,useCallback:Tf,useContext:xt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:lu,useRef:vf,useState:function(){return lu(es)},useDebugValue:cu,useDeferredValue:function(t){var i=Rt();return Nf(i,De.memoizedState,t)},useTransition:function(){var t=lu(es)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:df,useSyncExternalStore:hf,useId:xf,unstable_isNewReconciler:!1},aw={readContext:xt,useCallback:Tf,useContext:xt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:au,useRef:vf,useState:function(){return au(es)},useDebugValue:cu,useDeferredValue:function(t){var i=Rt();return De===null?i.memoizedState=t:Nf(i,De.memoizedState,t)},useTransition:function(){var t=au(es)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:df,useSyncExternalStore:hf,useId:xf,unstable_isNewReconciler:!1};function Ft(t,i){if(t&&t.defaultProps){i=N({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function du(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:N({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Po={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=rt(),c=Vn(t),h=hn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(zt(i,t,c,a),So(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=rt(),c=Vn(t),h=hn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(zt(i,t,c,a),So(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=rt(),a=Vn(t),c=hn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Fn(t,c,a),i!==null&&(zt(i,t,a,o),So(i,t,a))}};function Of(t,i,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):i.prototype&&i.prototype.isPureReactComponent?!Vi(o,a)||!Vi(c,h):!0}function Df(t,i,o){var a=!1,c=bn,h=i.contextType;return typeof h=="object"&&h!==null?h=xt(h):(c=ct(i)?lr:Ye.current,a=i.contextTypes,h=(a=a!=null)?Hr(t,c):bn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Po,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function bf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Po.enqueueReplaceState(i,i.state,null)}function hu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Xa(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=xt(h):(h=ct(i)?lr:Ye.current,c.context=Hr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(du(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Po.enqueueReplaceState(c,c.state,null),Io(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,i){try{var o="",a=i;do o+=ee(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function pu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function Lf(t,i,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Fo||(Fo=!0,Ru=a),pu(t,i)},o}function Mf(t,i,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){pu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pu(t,i),typeof a!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})}),o}function Ff(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new uw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Iw.bind(null,t,i,o),i.then(t,t))}function Uf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function jf(t,i,o,a,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hn(-1,1),i.tag=2,Fn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var cw=ke.ReactCurrentOwner,dt=!1;function nt(t,i,o,a){i.child=t===null?sf(i,null,o,a):Kr(i,t.child,o,a)}function zf(t,i,o,a,c){o=o.render;var h=i.ref;return Yr(i,c),a=su(t,i,o,a,h,c),o=ou(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Ee&&o&&Wa(i),i.flags|=1,nt(t,i,a,c),i.child)}function Vf(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Wf(t,i,h,a,c)):(t=Bo(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Vi,o(p,a)&&t.ref===i.ref)return fn(t,i,c)}return i.flags|=1,t=Bn(h,a),t.ref=i.ref,t.return=i,i.child=t}function Wf(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Vi(h,a)&&t.ref===i.ref)if(dt=!1,i.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(dt=!0);else return i.lanes=t.lanes,fn(t,i,c)}return mu(t,i,o,a,c)}function Bf(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ei,It),It|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,me(ei,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,me(ei,It),It|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,me(ei,It),It|=a;return nt(t,i,c,o),i.child}function Hf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(t,i,o,a,c){var h=ct(o)?lr:Ye.current;return h=Hr(i,h),Yr(i,c),o=su(t,i,o,a,h,c),a=ou(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Ee&&a&&Wa(i),i.flags|=1,nt(t,i,o,c),i.child)}function $f(t,i,o,a,c){if(ct(o)){var h=!0;po(i)}else h=!1;if(Yr(i,c),i.stateNode===null)Oo(t,i),Df(i,o,a),hu(i,o,a,c),a=!0;else if(t===null){var p=i.stateNode,_=i.memoizedProps;p.props=_;var v=p.context,R=o.contextType;typeof R=="object"&&R!==null?R=xt(R):(R=ct(o)?lr:Ye.current,R=Hr(i,R));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof p.getSnapshotBeforeUpdate=="function";D||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||v!==R)&&bf(i,p,a,R),Mn=!1;var A=i.memoizedState;p.state=A,Io(i,a,p,c),v=i.memoizedState,_!==a||A!==v||ut.current||Mn?(typeof O=="function"&&(du(i,o,O,a),v=i.memoizedState),(_=Mn||Of(i,o,_,a,A,v,R))?(D||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=v),p.props=a,p.state=v,p.context=R,a=_):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{p=i.stateNode,lf(t,i),_=i.memoizedProps,R=i.type===i.elementType?_:Ft(i.type,_),p.props=R,D=i.pendingProps,A=p.context,v=o.contextType,typeof v=="object"&&v!==null?v=xt(v):(v=ct(o)?lr:Ye.current,v=Hr(i,v));var j=o.getDerivedStateFromProps;(O=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==D||A!==v)&&bf(i,p,a,v),Mn=!1,A=i.memoizedState,p.state=A,Io(i,a,p,c);var V=i.memoizedState;_!==D||A!==V||ut.current||Mn?(typeof j=="function"&&(du(i,o,j,a),V=i.memoizedState),(R=Mn||Of(i,o,R,a,A,V,v)||!1)?(O||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,V,v),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,V,v)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=V),p.props=a,p.state=V,p.context=v,a=R):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return gu(t,i,o,a,h,c)}function gu(t,i,o,a,c,h){Hf(t,i);var p=(i.flags&128)!==0;if(!a&&!p)return c&&Qh(i,o,!1),fn(t,i,h);a=i.stateNode,cw.current=i;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&p?(i.child=Kr(i,t.child,null,h),i.child=Kr(i,null,_,h)):nt(t,i,_,h),i.memoizedState=a.state,c&&Qh(i,o,!0),i.child}function Gf(t){var i=t.stateNode;i.pendingContext?qh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(t,i.context,!1),Za(t,i.containerInfo)}function qf(t,i,o,a,c){return qr(),Ga(c),i.flags|=256,nt(t,i,o,a),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kf(t,i,o){var a=i.pendingProps,c=Se.current,h=!1,p=(i.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),me(Se,c&1),t===null)return $a(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=i.mode,h=i.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Ho(p,a,0,null),t=_r(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=yu(o),i.memoizedState=_u,t):vu(i,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return dw(t,i,p,a,_,c,o);if(h){h=a.fallback,p=i.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return(p&1)===0&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=v,i.deletions=null):(a=Bn(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Bn(_,h):(h=_r(h,p,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,p=t.child.memoizedState,p=p===null?yu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,i.memoizedState=_u,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function vu(t,i){return i=Ho({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ao(t,i,o,a){return a!==null&&Ga(a),Kr(i,t.child,null,o),t=vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function dw(t,i,o,a,c,h,p){if(o)return i.flags&256?(i.flags&=-257,a=fu(Error(n(422))),Ao(t,i,p,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ho({mode:"visible",children:a.children},c,0,null),h=_r(h,c,p,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Kr(i,t.child,null,p),i.child.memoizedState=yu(p),i.memoizedState=_u,h);if((i.mode&1)===0)return Ao(t,i,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=fu(h,a,void 0),Ao(t,i,p,a)}if(_=(p&t.childLanes)!==0,dt||_){if(a=Ue,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),zt(a,t,c,-1))}return Lu(),a=fu(Error(n(421))),Ao(t,i,p,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Cw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,St=On(c.nextSibling),Et=i,Ee=!0,Mt=null,t!==null&&(kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,un=t.id,cn=t.overflow,ar=i),i=vu(i,a.children),i.flags|=4096,i)}function Qf(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),Ya(t.return,i,o)}function wu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Yf(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(nt(t,i,a.children,o),a=Se.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,o,i);else if(t.tag===19)Qf(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(me(Se,a),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Co(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),wu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Co(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}wu(i,!0,o,null,h);break;case"together":wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Bn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function hw(t,i,o){switch(i.tag){case 3:Gf(i),qr();break;case 5:cf(i);break;case 1:ct(i.type)&&po(i);break;case 4:Za(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;me(wo,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(me(Se,Se.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Kf(t,i,o):(me(Se,Se.current&1),t=fn(t,i,o),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Yf(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(Se,Se.current),a)break;return null;case 22:case 23:return i.lanes=0,Bf(t,i,o)}return fn(t,i,o)}var Jf,Eu,Xf,Zf;Jf=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eu=function(){},Xf=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,dr(Jt.current);var h=null;switch(o){case"input":c=Yl(t,c),a=Yl(t,a),h=[];break;case"select":c=N({},c,{value:void 0}),a=N({},a,{value:void 0}),h=[];break;case"textarea":c=Zl(t,c),a=Zl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=co)}ta(o,a);var p;o=null;for(R in c)if(!a.hasOwnProperty(R)&&c.hasOwnProperty(R)&&c[R]!=null)if(R==="style"){var _=c[R];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(l.hasOwnProperty(R)?h||(h=[]):(h=h||[]).push(R,null));for(R in a){var v=a[R];if(_=c!=null?c[R]:void 0,a.hasOwnProperty(R)&&v!==_&&(v!=null||_!=null))if(R==="style")if(_){for(p in _)!_.hasOwnProperty(p)||v&&v.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in v)v.hasOwnProperty(p)&&_[p]!==v[p]&&(o||(o={}),o[p]=v[p])}else o||(h||(h=[]),h.push(R,o)),o=v;else R==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(R,v)):R==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(R,""+v):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(l.hasOwnProperty(R)?(v!=null&&R==="onScroll"&&ye("scroll",t),h||_===v||(h=[])):(h=h||[]).push(R,v))}o&&(h=h||[]).push("style",o);var R=h;(i.updateQueue=R)&&(i.flags|=4)}},Zf=function(t,i,o,a){o!==a&&(i.flags|=4)};function ns(t,i){if(!Ee)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xe(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function fw(t,i,o){var a=i.pendingProps;switch(Ba(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(i),null;case 1:return ct(i.type)&&fo(),Xe(i),null;case 3:return a=i.stateNode,Jr(),ve(ut),ve(Ye),nu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mt!==null&&(Ou(Mt),Mt=null))),Eu(t,i),Xe(i),null;case 5:eu(i);var c=dr(Ji.current);if(o=i.type,t!==null&&i.stateNode!=null)Xf(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return Xe(i),null}if(t=dr(Jt.current),yo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Yt]=i,a[Gi]=h,t=(i.mode&1)!==0,o){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":Od(a,h),ye("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ye("invalid",a);break;case"textarea":Ld(a,h),ye("invalid",a)}ta(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&ye("scroll",a)}switch(o){case"input":zs(a),bd(a,h,!0);break;case"textarea":zs(a),Fd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=co)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ud(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Yt]=i,t[Gi]=a,Jf(t,i,!1,!1),i.stateNode=t;e:{switch(p=na(o,a),o){case"dialog":ye("cancel",t),ye("close",t),c=a;break;case"iframe":case"object":case"embed":ye("load",t),c=a;break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],t);c=a;break;case"source":ye("error",t),c=a;break;case"img":case"image":case"link":ye("error",t),ye("load",t),c=a;break;case"details":ye("toggle",t),c=a;break;case"input":Od(t,a),c=Yl(t,a),ye("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=N({},a,{value:void 0}),ye("invalid",t);break;case"textarea":Ld(t,a),c=Zl(t,a),ye("invalid",t);break;default:c=a}ta(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?Vd(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&jd(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&Ci(t,v):typeof v=="number"&&Ci(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&ye("scroll",t):v!=null&&Re(t,h,v,p))}switch(o){case"input":zs(t),bd(t,a,!1);break;case"textarea":zs(t),Fd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+te(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Or(t,!!a.multiple,h,!1):a.defaultValue!=null&&Or(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=co)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xe(i),null;case 6:if(t&&i.stateNode!=null)Zf(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=dr(Ji.current),dr(Jt.current),yo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Yt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:uo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Yt]=i,i.stateNode=a}return Xe(i),null;case 13:if(ve(Se),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&St!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tf(),qr(),i.flags|=98560,h=!1;else if(h=yo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Yt]=i}else qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xe(i),h=!1}else Mt!==null&&(Ou(Mt),Mt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Se.current&1)!==0?be===0&&(be=3):Lu())),i.updateQueue!==null&&(i.flags|=4),Xe(i),null);case 4:return Jr(),Eu(t,i),t===null&&Hi(i.stateNode.containerInfo),Xe(i),null;case 10:return Qa(i.type._context),Xe(i),null;case 17:return ct(i.type)&&fo(),Xe(i),null;case 19:if(ve(Se),h=i.memoizedState,h===null)return Xe(i),null;if(a=(i.flags&128)!==0,p=h.rendering,p===null)if(a)ns(h,!1);else{if(be!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=Co(t),p!==null){for(i.flags|=128,ns(h,!1),a=p.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return me(Se,Se.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ne()>ti&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304)}else{if(!a)if(t=Co(p),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!Ee)return Xe(i),null}else 2*Ne()-h.renderingStartTime>ti&&o!==1073741824&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304);h.isBackwards?(p.sibling=i.child,i.child=p):(o=h.last,o!==null?o.sibling=p:i.child=p,h.last=p)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ne(),i.sibling=null,o=Se.current,me(Se,a?o&1|2:o&1),i):(Xe(i),null);case 22:case 23:return bu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(It&1073741824)!==0&&(Xe(i),i.subtreeFlags&6&&(i.flags|=8192)):Xe(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function pw(t,i){switch(Ba(i),i.tag){case 1:return ct(i.type)&&fo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Jr(),ve(ut),ve(Ye),nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return eu(i),null;case 13:if(ve(Se),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(Se),null;case 4:return Jr(),null;case 10:return Qa(i.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Do=!1,Ze=!1,mw=typeof WeakSet=="function"?WeakSet:Set,z=null;function Zr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ce(t,i,a)}else o.current=null}function Su(t,i,o){try{o()}catch(a){Ce(t,i,a)}}var ep=!1;function gw(t,i){if(ba=Xs,t=Ah(),ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,v=-1,R=0,O=0,D=t,A=null;t:for(;;){for(var j;D!==o||c!==0&&D.nodeType!==3||(_=p+c),D!==h||a!==0&&D.nodeType!==3||(v=p+a),D.nodeType===3&&(p+=D.nodeValue.length),(j=D.firstChild)!==null;)A=D,D=j;for(;;){if(D===t)break t;if(A===o&&++R===c&&(_=p),A===h&&++O===a&&(v=p),(j=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=j}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(La={focusedElem:t,selectionRange:o},Xs=!1,z=i;z!==null;)if(i=z,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,z=t;else for(;z!==null;){i=z;try{var V=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var B=V.memoizedProps,xe=V.memoizedState,C=i.stateNode,S=C.getSnapshotBeforeUpdate(i.elementType===i.type?B:Ft(i.type,B),xe);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(b){Ce(i,i.return,b)}if(t=i.sibling,t!==null){t.return=i.return,z=t;break}z=i.return}return V=ep,ep=!1,V}function rs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Su(i,o,h)}c=c.next}while(c!==a)}}function bo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Yt],delete i[Gi],delete i[ja],delete i[Xv],delete i[Zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=co));else if(a!==4&&(t=t.child,t!==null))for(Cu(t,i,o),t=t.sibling;t!==null;)Cu(t,i,o),t=t.sibling}function Tu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Tu(t,i,o),t=t.sibling;t!==null;)Tu(t,i,o),t=t.sibling}var qe=null,Ut=!1;function Un(t,i,o){for(o=o.child;o!==null;)ip(t,i,o),o=o.sibling}function ip(t,i,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Gs,o)}catch{}switch(o.tag){case 5:Ze||Zr(o,i);case 6:var a=qe,c=Ut;qe=null,Un(t,i,o),qe=a,Ut=c,qe!==null&&(Ut?(t=qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qe.removeChild(o.stateNode));break;case 18:qe!==null&&(Ut?(t=qe,o=o.stateNode,t.nodeType===8?Ua(t.parentNode,o):t.nodeType===1&&Ua(t,o),Li(t)):Ua(qe,o.stateNode));break;case 4:a=qe,c=Ut,qe=o.stateNode.containerInfo,Ut=!0,Un(t,i,o),qe=a,Ut=c;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&Su(o,i,p),c=c.next}while(c!==a)}Un(t,i,o);break;case 1:if(!Ze&&(Zr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ce(o,i,_)}Un(t,i,o);break;case 21:Un(t,i,o);break;case 22:o.mode&1?(Ze=(a=Ze)||o.memoizedState!==null,Un(t,i,o),Ze=a):Un(t,i,o);break;default:Un(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new mw),i.forEach(function(a){var c=Tw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function jt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=i,_=p;e:for(;_!==null;){switch(_.tag){case 5:qe=_.stateNode,Ut=!1;break e;case 3:qe=_.stateNode.containerInfo,Ut=!0;break e;case 4:qe=_.stateNode.containerInfo,Ut=!0;break e}_=_.return}if(qe===null)throw Error(n(160));ip(h,p,c),qe=null,Ut=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(R){Ce(c,i,R)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(i,t),Zt(t),a&4){try{rs(3,t,t.return),bo(3,t)}catch(B){Ce(t,t.return,B)}try{rs(5,t,t.return)}catch(B){Ce(t,t.return,B)}}break;case 1:jt(i,t),Zt(t),a&512&&o!==null&&Zr(o,o.return);break;case 5:if(jt(i,t),Zt(t),a&512&&o!==null&&Zr(o,o.return),t.flags&32){var c=t.stateNode;try{Ci(c,"")}catch(B){Ce(t,t.return,B)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Dd(c,h),na(_,p);var R=na(_,h);for(p=0;p<v.length;p+=2){var O=v[p],D=v[p+1];O==="style"?Vd(c,D):O==="dangerouslySetInnerHTML"?jd(c,D):O==="children"?Ci(c,D):Re(c,O,D,R)}switch(_){case"input":Jl(c,h);break;case"textarea":Md(c,h);break;case"select":var A=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var j=h.value;j!=null?Or(c,!!h.multiple,j,!1):A!==!!h.multiple&&(h.defaultValue!=null?Or(c,!!h.multiple,h.defaultValue,!0):Or(c,!!h.multiple,h.multiple?[]:"",!1))}c[Gi]=h}catch(B){Ce(t,t.return,B)}}break;case 6:if(jt(i,t),Zt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(B){Ce(t,t.return,B)}}break;case 3:if(jt(i,t),Zt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Li(i.containerInfo)}catch(B){Ce(t,t.return,B)}break;case 4:jt(i,t),Zt(t);break;case 13:jt(i,t),Zt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(xu=Ne())),a&4&&sp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(Ze=(R=Ze)||O,jt(i,t),Ze=R):jt(i,t),Zt(t),a&8192){if(R=t.memoizedState!==null,(t.stateNode.isHidden=R)&&!O&&(t.mode&1)!==0)for(z=t,O=t.child;O!==null;){for(D=z=O;z!==null;){switch(A=z,j=A.child,A.tag){case 0:case 11:case 14:case 15:rs(4,A,A.return);break;case 1:Zr(A,A.return);var V=A.stateNode;if(typeof V.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,V.props=i.memoizedProps,V.state=i.memoizedState,V.componentWillUnmount()}catch(B){Ce(a,o,B)}}break;case 5:Zr(A,A.return);break;case 22:if(A.memoizedState!==null){up(D);continue}}j!==null?(j.return=A,z=j):up(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{c=D.stateNode,R?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=D.stateNode,v=D.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=zd("display",p))}catch(B){Ce(t,t.return,B)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=R?"":D.memoizedProps}catch(B){Ce(t,t.return,B)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:jt(i,t),Zt(t),a&4&&sp(t);break;case 21:break;default:jt(i,t),Zt(t)}}function Zt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ci(c,""),a.flags&=-33);var h=rp(t);Tu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=rp(t);Cu(t,_,p);break;default:throw Error(n(161))}}catch(v){Ce(t,t.return,v)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function _w(t,i,o){z=t,lp(t)}function lp(t,i,o){for(var a=(t.mode&1)!==0;z!==null;){var c=z,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Do;if(!p){var _=c.alternate,v=_!==null&&_.memoizedState!==null||Ze;_=Do;var R=Ze;if(Do=p,(Ze=v)&&!R)for(z=c;z!==null;)p=z,v=p.child,p.tag===22&&p.memoizedState!==null?cp(c):v!==null?(v.return=p,z=v):cp(c);for(;h!==null;)z=h,lp(h),h=h.sibling;z=c,Do=_,Ze=R}ap(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,z=h):ap(t)}}function ap(t){for(;z!==null;){var i=z;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ze||bo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!Ze)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Ft(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&uf(i,h,a);break;case 3:var p=i.updateQueue;if(p!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uf(i,p,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var v=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var R=i.alternate;if(R!==null){var O=R.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&Li(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ze||i.flags&512&&Iu(i)}catch(A){Ce(i,i.return,A)}}if(i===t){z=null;break}if(o=i.sibling,o!==null){o.return=i.return,z=o;break}z=i.return}}function up(t){for(;z!==null;){var i=z;if(i===t){z=null;break}var o=i.sibling;if(o!==null){o.return=i.return,z=o;break}z=i.return}}function cp(t){for(;z!==null;){var i=z;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{bo(4,i)}catch(v){Ce(i,o,v)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(v){Ce(i,c,v)}}var h=i.return;try{Iu(i)}catch(v){Ce(i,h,v)}break;case 5:var p=i.return;try{Iu(i)}catch(v){Ce(i,p,v)}}}catch(v){Ce(i,i.return,v)}if(i===t){z=null;break}var _=i.sibling;if(_!==null){_.return=i.return,z=_;break}z=i.return}}var yw=Math.ceil,Lo=ke.ReactCurrentDispatcher,ku=ke.ReactCurrentOwner,Pt=ke.ReactCurrentBatchConfig,le=0,Ue=null,Pe=null,Ke=0,It=0,ei=Dn(0),be=0,is=null,fr=0,Mo=0,Nu=0,ss=null,ht=null,xu=0,ti=1/0,pn=null,Fo=!1,Ru=null,jn=null,Uo=!1,zn=null,jo=0,os=0,Pu=null,zo=-1,Vo=0;function rt(){return(le&6)!==0?Ne():zo!==-1?zo:zo=Ne()}function Vn(t){return(t.mode&1)===0?1:(le&2)!==0&&Ke!==0?Ke&-Ke:tw.transition!==null?(Vo===0&&(Vo=nh()),Vo):(t=ce,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t)}function zt(t,i,o,a){if(50<os)throw os=0,Pu=null,Error(n(185));Pi(t,o,a),((le&2)===0||t!==Ue)&&(t===Ue&&((le&2)===0&&(Mo|=o),be===4&&Wn(t,Ke)),ft(t,a),o===1&&le===0&&(i.mode&1)===0&&(ti=Ne()+500,mo&&Ln()))}function ft(t,i){var o=t.callbackNode;tv(t,i);var a=Qs(t,t===Ue?Ke:0);if(a===0)o!==null&&Zd(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Zd(o),i===1)t.tag===0?ew(hp.bind(null,t)):Yh(hp.bind(null,t)),Yv(function(){(le&6)===0&&Ln()}),o=null;else{switch(rh(a)){case 1:o=ua;break;case 4:o=eh;break;case 16:o=$s;break;case 536870912:o=th;break;default:o=$s}o=wp(o,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function dp(t,i){if(zo=-1,Vo=0,(le&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ni()&&t.callbackNode!==o)return null;var a=Qs(t,t===Ue?Ke:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Wo(t,a);else{i=a;var c=le;le|=2;var h=pp();(Ue!==t||Ke!==i)&&(pn=null,ti=Ne()+500,mr(t,i));do try{Ew();break}catch(_){fp(t,_)}while(!0);Ka(),Lo.current=h,le=c,Pe!==null?i=0:(Ue=null,Ke=0,i=be)}if(i!==0){if(i===2&&(c=ca(t),c!==0&&(a=c,i=Au(t,c))),i===1)throw o=is,mr(t,0),Wn(t,a),ft(t,Ne()),o;if(i===6)Wn(t,a);else{if(c=t.current.alternate,(a&30)===0&&!vw(c)&&(i=Wo(t,a),i===2&&(h=ca(t),h!==0&&(a=h,i=Au(t,h))),i===1))throw o=is,mr(t,0),Wn(t,a),ft(t,Ne()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:gr(t,ht,pn);break;case 3:if(Wn(t,a),(a&130023424)===a&&(i=xu+500-Ne(),10<i)){if(Qs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){rt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Fa(gr.bind(null,t,ht,pn),i);break}gr(t,ht,pn);break;case 4:if(Wn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var p=31-bt(a);h=1<<p,p=i[p],p>c&&(c=p),a&=~h}if(a=c,a=Ne()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*yw(a/1960))-a,10<a){t.timeoutHandle=Fa(gr.bind(null,t,ht,pn),a);break}gr(t,ht,pn);break;case 5:gr(t,ht,pn);break;default:throw Error(n(329))}}}return ft(t,Ne()),t.callbackNode===o?dp.bind(null,t):null}function Au(t,i){var o=ss;return t.current.memoizedState.isDehydrated&&(mr(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=ht,ht=o,i!==null&&Ou(i)),t}function Ou(t){ht===null?ht=t:ht.push.apply(ht,t)}function vw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Lt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wn(t,i){for(i&=~Nu,i&=~Mo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-bt(i),a=1<<o;t[o]=-1,i&=~a}}function hp(t){if((le&6)!==0)throw Error(n(327));ni();var i=Qs(t,0);if((i&1)===0)return ft(t,Ne()),null;var o=Wo(t,i);if(t.tag!==0&&o===2){var a=ca(t);a!==0&&(i=a,o=Au(t,a))}if(o===1)throw o=is,mr(t,0),Wn(t,i),ft(t,Ne()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,gr(t,ht,pn),ft(t,Ne()),null}function Du(t,i){var o=le;le|=1;try{return t(i)}finally{le=o,le===0&&(ti=Ne()+500,mo&&Ln())}}function pr(t){zn!==null&&zn.tag===0&&(le&6)===0&&ni();var i=le;le|=1;var o=Pt.transition,a=ce;try{if(Pt.transition=null,ce=1,t)return t()}finally{ce=a,Pt.transition=o,le=i,(le&6)===0&&Ln()}}function bu(){It=ei.current,ve(ei)}function mr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qv(o)),Pe!==null)for(o=Pe.return;o!==null;){var a=o;switch(Ba(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&fo();break;case 3:Jr(),ve(ut),ve(Ye),nu();break;case 5:eu(a);break;case 4:Jr();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:Qa(a.type._context);break;case 22:case 23:bu()}o=o.return}if(Ue=t,Pe=t=Bn(t.current,null),Ke=It=i,be=0,is=null,Nu=Mo=fr=0,ht=ss=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}cr=null}return t}function fp(t,i){do{var o=Pe;try{if(Ka(),To.current=Ro,ko){for(var a=Ie.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ko=!1}if(hr=0,Fe=De=Ie=null,Xi=!1,Zi=0,ku.current=null,o===null||o.return===null){be=1,is=i,Pe=null;break}e:{var h=t,p=o.return,_=o,v=i;if(i=Ke,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=v,O=_,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var j=Uf(p);if(j!==null){j.flags&=-257,jf(j,p,_,h,i),j.mode&1&&Ff(h,R,i),i=j,v=R;var V=i.updateQueue;if(V===null){var B=new Set;B.add(v),i.updateQueue=B}else V.add(v);break e}else{if((i&1)===0){Ff(h,R,i),Lu();break e}v=Error(n(426))}}else if(Ee&&_.mode&1){var xe=Uf(p);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),jf(xe,p,_,h,i),Ga(Xr(v,_));break e}}h=v=Xr(v,_),be!==4&&(be=2),ss===null?ss=[h]:ss.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Lf(h,v,i);af(h,C);break e;case 1:_=v;var S=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(jn===null||!jn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var b=Mf(h,_,i);af(h,b);break e}}h=h.return}while(h!==null)}gp(o)}catch($){i=$,Pe===o&&o!==null&&(Pe=o=o.return);continue}break}while(!0)}function pp(){var t=Lo.current;return Lo.current=Ro,t===null?Ro:t}function Lu(){(be===0||be===3||be===2)&&(be=4),Ue===null||(fr&268435455)===0&&(Mo&268435455)===0||Wn(Ue,Ke)}function Wo(t,i){var o=le;le|=2;var a=pp();(Ue!==t||Ke!==i)&&(pn=null,mr(t,i));do try{ww();break}catch(c){fp(t,c)}while(!0);if(Ka(),le=o,Lo.current=a,Pe!==null)throw Error(n(261));return Ue=null,Ke=0,be}function ww(){for(;Pe!==null;)mp(Pe)}function Ew(){for(;Pe!==null&&!Gy();)mp(Pe)}function mp(t){var i=vp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?gp(t):Pe=i,ku.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=fw(o,i,It),o!==null){Pe=o;return}}else{if(o=pw(o,i),o!==null){o.flags&=32767,Pe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=t}while(i!==null);be===0&&(be=5)}function gr(t,i,o){var a=ce,c=Pt.transition;try{Pt.transition=null,ce=1,Sw(t,i,o,a)}finally{Pt.transition=c,ce=a}return null}function Sw(t,i,o,a){do ni();while(zn!==null);if((le&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(nv(t,h),t===Ue&&(Pe=Ue=null,Ke=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Uo||(Uo=!0,wp($s,function(){return ni(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Pt.transition,Pt.transition=null;var p=ce;ce=1;var _=le;le|=4,ku.current=null,gw(t,o),op(o,t),Wv(La),Xs=!!ba,La=ba=null,t.current=o,_w(o),qy(),le=_,ce=p,Pt.transition=h}else t.current=o;if(Uo&&(Uo=!1,zn=t,jo=c),h=t.pendingLanes,h===0&&(jn=null),Yy(o.stateNode),ft(t,Ne()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Fo)throw Fo=!1,t=Ru,Ru=null,t;return(jo&1)!==0&&t.tag!==0&&ni(),h=t.pendingLanes,(h&1)!==0?t===Pu?os++:(os=0,Pu=t):os=0,Ln(),null}function ni(){if(zn!==null){var t=rh(jo),i=Pt.transition,o=ce;try{if(Pt.transition=null,ce=16>t?16:t,zn===null)var a=!1;else{if(t=zn,zn=null,jo=0,(le&6)!==0)throw Error(n(331));var c=le;for(le|=4,z=t.current;z!==null;){var h=z,p=h.child;if((z.flags&16)!==0){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var R=_[v];for(z=R;z!==null;){var O=z;switch(O.tag){case 0:case 11:case 15:rs(8,O,h)}var D=O.child;if(D!==null)D.return=O,z=D;else for(;z!==null;){O=z;var A=O.sibling,j=O.return;if(tp(O),O===R){z=null;break}if(A!==null){A.return=j,z=A;break}z=j}}}var V=h.alternate;if(V!==null){var B=V.child;if(B!==null){V.child=null;do{var xe=B.sibling;B.sibling=null,B=xe}while(B!==null)}}z=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,z=p;else e:for(;z!==null;){if(h=z,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,z=C;break e}z=h.return}}var S=t.current;for(z=S;z!==null;){p=z;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,z=T;else e:for(p=S;z!==null;){if(_=z,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:bo(9,_)}}catch($){Ce(_,_.return,$)}if(_===p){z=null;break e}var b=_.sibling;if(b!==null){b.return=_.return,z=b;break e}z=_.return}}if(le=c,Ln(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Gs,t)}catch{}a=!0}return a}finally{ce=o,Pt.transition=i}}return!1}function _p(t,i,o){i=Xr(o,i),i=Lf(t,i,1),t=Fn(t,i,1),i=rt(),t!==null&&(Pi(t,1,i),ft(t,i))}function Ce(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jn===null||!jn.has(a))){t=Xr(o,t),t=Mf(i,t,1),i=Fn(i,t,1),t=rt(),i!==null&&(Pi(i,1,t),ft(i,t));break}}i=i.return}}function Iw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=rt(),t.pingedLanes|=t.suspendedLanes&o,Ue===t&&(Ke&o)===o&&(be===4||be===3&&(Ke&130023424)===Ke&&500>Ne()-xu?mr(t,0):Nu|=o),ft(t,i)}function yp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var o=rt();t=dn(t,i),t!==null&&(Pi(t,i,o),ft(t,o))}function Cw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),yp(t,o)}function Tw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),yp(t,o)}var vp;vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ut.current)dt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return dt=!1,hw(t,i,o);dt=(t.flags&131072)!==0}else dt=!1,Ee&&(i.flags&1048576)!==0&&Jh(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Oo(t,i),t=i.pendingProps;var c=Hr(i,Ye.current);Yr(i,o),c=su(null,i,a,t,c,o);var h=ou();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ct(a)?(h=!0,po(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Xa(i),c.updater=Po,i.stateNode=c,c._reactInternals=i,hu(i,a,t,o),i=gu(null,i,a,!0,h,o)):(i.tag=0,Ee&&h&&Wa(i),nt(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Oo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Nw(a),t=Ft(a,t),c){case 0:i=mu(null,i,a,t,o);break e;case 1:i=$f(null,i,a,t,o);break e;case 11:i=zf(null,i,a,t,o);break e;case 14:i=Vf(null,i,a,Ft(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),mu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),$f(t,i,a,c,o);case 3:e:{if(Gf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,lf(t,i),Io(i,a,null,o);var p=i.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Xr(Error(n(423)),i),i=qf(t,i,a,o,c);break e}else if(a!==c){c=Xr(Error(n(424)),i),i=qf(t,i,a,o,c);break e}else for(St=On(i.stateNode.containerInfo.firstChild),Et=i,Ee=!0,Mt=null,o=sf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),a===c){i=fn(t,i,o);break e}nt(t,i,a,o)}i=i.child}return i;case 5:return cf(i),t===null&&$a(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,Ma(a,c)?p=null:h!==null&&Ma(a,h)&&(i.flags|=32),Hf(t,i),nt(t,i,p,o),i.child;case 6:return t===null&&$a(i),null;case 13:return Kf(t,i,o);case 4:return Za(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Kr(i,null,a,o):nt(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),zf(t,i,a,c,o);case 7:return nt(t,i,i.pendingProps,o),i.child;case 8:return nt(t,i,i.pendingProps.children,o),i.child;case 12:return nt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,p=c.value,me(wo,a._currentValue),a._currentValue=p,h!==null)if(Lt(h.value,p)){if(h.children===c.children&&!ut.current){i=fn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=hn(-1,o&-o),v.tag=2;var R=h.updateQueue;if(R!==null){R=R.shared;var O=R.pending;O===null?v.next=v:(v.next=O.next,O.next=v),R.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),Ya(h.return,o,i),_.lanes|=o;break}v=v.next}}else if(h.tag===10)p=h.type===i.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Ya(p,o,i),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===i){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}nt(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Yr(i,o),c=xt(c),a=a(c),i.flags|=1,nt(t,i,a,o),i.child;case 14:return a=i.type,c=Ft(a,i.pendingProps),c=Ft(a.type,c),Vf(t,i,a,c,o);case 15:return Wf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),Oo(t,i),i.tag=1,ct(a)?(t=!0,po(i)):t=!1,Yr(i,o),Df(i,a,c),hu(i,a,c,o),gu(null,i,a,!0,t,o);case 19:return Yf(t,i,o);case 22:return Bf(t,i,o)}throw Error(n(156,i.tag))};function wp(t,i){return Xd(t,i)}function kw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,i,o,a){return new kw(t,i,o,a)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nw(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tt)return 11;if(t===vt)return 14}return 2}function Bn(t,i){var o=t.alternate;return o===null?(o=At(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Bo(t,i,o,a,c,h){var p=2;if(a=t,typeof t=="function")Mu(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Qe:return _r(o.children,c,h,i);case at:p=8,c|=8;break;case Kt:return t=At(12,o,i,c|2),t.elementType=Kt,t.lanes=h,t;case He:return t=At(13,o,i,c),t.elementType=He,t.lanes=h,t;case Oe:return t=At(19,o,i,c),t.elementType=Oe,t.lanes=h,t;case _e:return Ho(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dt:p=10;break e;case on:p=9;break e;case Tt:p=11;break e;case vt:p=14;break e;case $e:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=At(p,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function _r(t,i,o,a){return t=At(7,t,a,i),t.lanes=o,t}function Ho(t,i,o,a){return t=At(22,t,a,i),t.elementType=_e,t.lanes=o,t.stateNode={isHidden:!1},t}function Fu(t,i,o){return t=At(6,t,null,i),t.lanes=o,t}function Uu(t,i,o){return i=At(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ju(t,i,o,a,c,h,p,_,v){return t=new xw(t,i,o,_,v),i===1?(i=1,h===!0&&(i|=8)):i=0,h=At(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(h),t}function Rw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Ep(t){if(!t)return bn;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ct(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ct(o))return Kh(t,o,i)}return i}function Sp(t,i,o,a,c,h,p,_,v){return t=ju(o,a,!0,t,c,h,p,_,v),t.context=Ep(null),o=t.current,a=rt(),c=Vn(o),h=hn(a,c),h.callback=i??null,Fn(o,h,c),t.current.lanes=c,Pi(t,c,a),ft(t,a),t}function $o(t,i,o,a){var c=i.current,h=rt(),p=Vn(c);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=hn(h,p),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Fn(c,i,p),t!==null&&(zt(t,c,p,h),So(t,c,p)),p}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function zu(t,i){Ip(t,i),(t=t.alternate)&&Ip(t,i)}function Pw(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}qo.prototype.render=Vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},qo.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pr(function(){$o(null,t,null,null)}),i[ln]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=oh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Rn.length&&i!==0&&i<Rn[o].priority;o++);Rn.splice(o,0,t),o===0&&uh(t)}};function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Aw(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var R=Go(p);h.call(R)}}var p=Sp(i,a,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=p,t[ln]=p.current,Hi(t.nodeType===8?t.parentNode:t),pr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var R=Go(v);_.call(R)}}var v=ju(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=v,t[ln]=v.current,Hi(t.nodeType===8?t.parentNode:t),pr(function(){$o(i,v,o,a)}),v}function Qo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var v=Go(p);_.call(v)}}$o(i,p,t,c)}else p=Aw(o,i,t,c,a);return Go(p)}ih=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ri(i.pendingLanes);o!==0&&(ha(i,o|1),ft(i,Ne()),(le&6)===0&&(ti=Ne()+500,Ln()))}break;case 13:pr(function(){var a=dn(t,1);if(a!==null){var c=rt();zt(a,t,1,c)}}),zu(t,1)}},fa=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var o=rt();zt(i,t,134217728,o)}zu(t,134217728)}},sh=function(t){if(t.tag===13){var i=Vn(t),o=dn(t,i);if(o!==null){var a=rt();zt(o,t,i,a)}zu(t,i)}},oh=function(){return ce},lh=function(t,i){var o=ce;try{return ce=t,i()}finally{ce=o}},sa=function(t,i,o){switch(i){case"input":if(Jl(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=ho(a);if(!c)throw Error(n(90));Ad(a),Jl(a,c)}}}break;case"textarea":Md(t,o);break;case"select":i=o.value,i!=null&&Or(t,!!o.multiple,i,!1)}},$d=Du,Gd=pr;var Ow={usingClientEntryPoint:!1,Events:[qi,Wr,ho,Bd,Hd,Du]},ls={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Gs=Yo.inject(Dw),Qt=Yo}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow,pt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(i))throw Error(n(200));return Rw(t,i,null,o)},pt.createRoot=function(t,i){if(!Wu(t))throw Error(n(299));var o=!1,a="",c=Cp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ju(t,1,!1,null,null,o,!1,a,c),t[ln]=i.current,Hi(t.nodeType===8?t.parentNode:t),new Vu(i)},pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yd(i),t=t===null?null:t.stateNode,t},pt.flushSync=function(t){return pr(t)},pt.hydrate=function(t,i,o){if(!Ko(i))throw Error(n(200));return Qo(null,t,i,!0,o)},pt.hydrateRoot=function(t,i,o){if(!Wu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=Cp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),i=Sp(i,null,t,1,o??null,c,!1,h,p),t[ln]=i.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qo(i)},pt.render=function(t,i,o){if(!Ko(i))throw Error(n(200));return Qo(null,t,i,!1,o)},pt.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},pt.unstable_batchedUpdates=Du,pt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Ko(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,o,!1,a)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var Dp;function Ww(){if(Dp)return $u.exports;Dp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$u.exports=Vw(),$u.exports}var bp;function Bw(){if(bp)return Jo;bp=1;var r=Ww();return Jo.createRoot=r.createRoot,Jo.hydrateRoot=r.hydrateRoot,Jo}var Hw=Bw();const $w=ng(Hw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rg=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=et.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},m)=>et.createElement("svg",{ref:m,...qw,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:rg("lucide",l),...f},[...d.map(([g,E])=>et.createElement(g,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=(r,e)=>{const n=et.forwardRef(({className:s,...l},u)=>et.createElement(Kw,{ref:u,iconNode:e,className:rg(`lucide-${Gw(r)}`,s),...l}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lp=Al("ArrowLeft",Qw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Jw=Al("DollarSign",Yw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Mp=Al("Plus",Xw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ku=Al("Trash2",Zw),e0=()=>{};var Fp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(r,e){if(!r)throw gi(e)},gi=function(r){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},t0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,m=l+2<r.length,g=m?r[l+2]:0,E=u>>2,w=(u&3)<<4|f>>4;let I=(f&15)<<2|g>>6,L=g&63;m||(L=64,d||(I=64)),s.push(n[E],n[w],n[I],n[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(sg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):t0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const w=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||w==null)throw new n0;const I=u<<2|f>>4;if(s.push(I),g!==64){const L=f<<4&240|g>>2;if(s.push(L),w!==64){const F=g<<6&192|w;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(r){const e=sg(r);return Dc.encodeByteArray(e,!0)},ll=function(r){return og(r).replace(/\./g,"")},al=function(r){try{return Dc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(r){return lg(void 0,r)}function lg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i0(n)||(r[n]=lg(r[n],e[n]));return r}function i0(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=()=>s0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof Fp>"u")return;const r=Fp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},a0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&al(r[1]);return e&&JSON.parse(e)},bc=()=>{try{return e0()||o0()||l0()||a0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ag=r=>{var e,n;return(n=(e=bc())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},u0=r=>{const e=ag(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ug=()=>{var r;return(r=bc())==null?void 0:r.config},cg=r=>{var e;return(e=bc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[ll(JSON.stringify(n)),ll(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function d0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mc(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h0(){const r=ot();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function f0(){return ig.NODE_ADMIN===!0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function hg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=p0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?m0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function m0(r,e){try{let n=0,s="";for(;n<r.length;){const l=r.indexOf("{$",n);if(l===-1){s+=r.substring(n);break}const u=r.indexOf("}",l+2);if(u===-1){s+=r.substring(n);break}const d=r.substring(l+2,u),f=e[d];s+=r.substring(n,l)+(f!=null?String(f):`<${d}?>`),n=u+1}return s}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(r){return JSON.parse(r)}function Le(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=vs(al(u[0])||""),n=vs(al(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},g0=function(r){const e=fg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_0=function(r){const e=fg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function hi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function hc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ul(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function er(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(Up(u)&&Up(d)){if(!er(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Up(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)s[w]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let w=0;w<16;w++)s[w]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let w=16;w<80;w++){const I=s[w-3]^s[w-8]^s[w-14]^s[w-16];s[w]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,E;for(let w=0;w<80;w++){w<40?w<20?(g=f^u&(d^f),E=1518500249):(g=u^d^f,E=1859775393):w<60?(g=u&d|f&(u|d),E=2400959708):(g=u^d^f,E=3395469782);const I=(l<<5|l>>>27)+g+m+E+s[w]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function v0(r,e){const n=new w0(r,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Qu),l.error===void 0&&(l.error=Qu),l.complete===void 0&&(l.complete=Qu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Qu(){}function jc(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,M(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1e3,C0=2,T0=14400*1e3,k0=.5;function jp(r,e=I0,n=C0){const s=e*Math.pow(n,r),l=Math.round(k0*s*(Math.random()-.5)*2);return Math.min(T0,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pg(r){return(await fetch(r,{credentials:"include"})).ok}class qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ol;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R0(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:x0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x0(r){return r===yr?void 0:r}function R0(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new N0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(he||(he={}));const A0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},O0=he.INFO,D0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},b0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=D0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=O0,this._logHandler=b0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const L0=(r,e)=>e.some(n=>r instanceof n);let zp,Vp;function M0(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F0(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,fc=new WeakMap,gg=new WeakMap,Yu=new WeakMap,zc=new WeakMap;function U0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Yn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,r)}).catch(()=>{}),zc.set(e,r),e}function j0(r){if(fc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});fc.set(r,e)}let pc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return fc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||gg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function z0(r){pc=r(pc)}function V0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Ju(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Yn(s)}:F0().includes(r)?function(...e){return r.apply(Ju(this),e),Yn(mg.get(this))}:function(...e){return Yn(r.apply(Ju(this),e))}}function W0(r){return typeof r=="function"?V0(r):(r instanceof IDBTransaction&&j0(r),L0(r,M0())?new Proxy(r,pc):r)}function Yn(r){if(r instanceof IDBRequest)return U0(r);if(Yu.has(r))return Yu.get(r);const e=W0(r);return e!==r&&(Yu.set(r,e),zc.set(e,r)),e}const Ju=r=>zc.get(r);function _g(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Yn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Yn(d.result),m.oldVersion,m.newVersion,Yn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const B0=["get","getKey","getAll","getAllKeys","count"],H0=["put","add","delete","clear"],Xu=new Map;function Wp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=H0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||B0.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Xu.set(e,u),u}z0(r=>({...r,get:(e,n,s)=>Wp(e,n)||r.get(e,n,s),has:(e,n)=>!!Wp(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function G0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",Bp="0.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new bl("@firebase/app"),q0="@firebase/app-compat",K0="@firebase/analytics-compat",Q0="@firebase/analytics",Y0="@firebase/app-check-compat",J0="@firebase/app-check",X0="@firebase/auth",Z0="@firebase/auth-compat",eE="@firebase/database",tE="@firebase/data-connect",nE="@firebase/database-compat",rE="@firebase/functions",iE="@firebase/functions-compat",sE="@firebase/installations",oE="@firebase/installations-compat",lE="@firebase/messaging",aE="@firebase/messaging-compat",uE="@firebase/performance",cE="@firebase/performance-compat",dE="@firebase/remote-config",hE="@firebase/remote-config-compat",fE="@firebase/storage",pE="@firebase/storage-compat",mE="@firebase/firestore",gE="@firebase/ai",_E="@firebase/firestore-compat",yE="firebase",vE="12.17.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="[DEFAULT]",wE={[mc]:"fire-core",[q0]:"fire-core-compat",[Q0]:"fire-analytics",[K0]:"fire-analytics-compat",[J0]:"fire-app-check",[Y0]:"fire-app-check-compat",[X0]:"fire-auth",[Z0]:"fire-auth-compat",[eE]:"fire-rtdb",[tE]:"fire-data-connect",[nE]:"fire-rtdb-compat",[rE]:"fire-fn",[iE]:"fire-fn-compat",[sE]:"fire-iid",[oE]:"fire-iid-compat",[lE]:"fire-fcm",[aE]:"fire-fcm-compat",[uE]:"fire-perf",[cE]:"fire-perf-compat",[dE]:"fire-rc",[hE]:"fire-rc-compat",[fE]:"fire-gcs",[pE]:"fire-gcs-compat",[mE]:"fire-fst",[_E]:"fire-fst-compat",[gE]:"fire-vertex","fire-js":"fire-js",[yE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map,EE=new Map,_c=new Map;function Hp(r,e){try{r.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function nn(r){const e=r.name;if(_c.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,r);for(const n of cl.values())Hp(n,r);for(const n of EE.values())Hp(n,r);return!0}function Pr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Vt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Rr("app","Firebase",SE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=vE;function yg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:gc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw mn.create("bad-app-name",{appName:String(l)});if(n||(n=ug()),!n)throw mn.create("no-options");const u=cl.get(l);if(u)if(er(n,u.options)){if(er(s,u.config))return u;throw mn.create("duplicate-app",{appName:l,mismatchedParam:"config",oldValue:JSON.stringify(u.config),newValue:JSON.stringify(s)})}else throw mn.create("duplicate-app",{appName:l,mismatchedParam:"options",oldValue:JSON.stringify(u.options),newValue:JSON.stringify(n)});const d=new P0(l);for(const m of _c.values())d.addComponent(m);const f=new IE(n,s,d);return cl.set(l,f),f}function Vc(r=gc){const e=cl.get(r);if(!e&&r===gc&&ug())return yg();if(!e)throw mn.create("no-app",{appName:r});return e}function Ot(r,e,n){let s=wE[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(d.join(" "));return}nn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebase-heartbeat-database",TE=1,ws="firebase-heartbeat-store";let Zu=null;function vg(){return Zu||(Zu=_g(CE,TE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ws)}catch(n){console.warn(n)}}}}).catch(r=>{throw mn.create("idb-open",{originalErrorMessage:r.message})})),Zu}async function kE(r){try{const n=(await vg()).transaction(ws),s=await n.objectStore(ws).get(wg(r));return await n.done,s}catch(e){if(e instanceof sn)wn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function $p(r,e){try{const s=(await vg()).transaction(ws,"readwrite");await s.objectStore(ws).put(e,wg(r)),await s.done}catch(n){if(n instanceof sn)wn.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(s.message)}}}function wg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=1024,xE=30;class RE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Gp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>xE){const d=OE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:l}=PE(this._heartbeatsCache.heartbeats),u=ll(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return wn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function PE(r,e=NE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),qp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(r){return ll(JSON.stringify({version:2,heartbeats:r})).length}function OE(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(r){nn(new qt("platform-logger",e=>new $0(e),"PRIVATE")),nn(new qt("heartbeat",e=>new RE(e),"PRIVATE")),Ot(mc,Bp,r),Ot(mc,Bp,"esm2020"),Ot("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */DE("");var Kp={};const Qp="@firebase/database",Yp="1.1.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg="";function bE(r){Eg=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LE(e)}}catch{}return new ME},wr=Sg("localStorage"),FE=Sg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new bl("@firebase/database"),UE=(function(){let r=1;return function(){return r++}})(),Ig=function(r){const e=S0(r),n=new y0;n.update(e);const s=n.digest();return Dc.encodeByteArray(s)},As=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=As.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let fs=null,Jp=!0;const jE=function(r,e){M(!0,"Can't turn on custom loggers persistently."),oi.logLevel=he.VERBOSE,fs=oi.log.bind(oi)},tt=function(...r){if(Jp===!0&&(Jp=!1,fs===null&&FE.get("logging_enabled")===!0&&jE()),fs){const e=As.apply(null,r);fs(e)}},Os=function(r){return function(...e){tt(r,...e)}},yc=function(...r){const e="FIREBASE INTERNAL ERROR: "+As(...r);oi.error(e)},En=function(...r){const e=`FIREBASE FATAL ERROR: ${As(...r)}`;throw oi.error(e),new Error(e)},gt=function(...r){const e="FIREBASE WARNING: "+As(...r);oi.warn(e)},zE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cg=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},VE=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Ir="[MAX_NAME]",vi=function(r,e){if(r===e)return 0;if(r===fi||e===Ir)return-1;if(e===fi||r===Ir)return 1;{const n=Xp(r),s=Xp(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},WE=function(r,e){return r===e?0:r<e?-1:1},us=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Le(e))},Wc=function(r){if(typeof r!="object"||r===null)return Le(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=Wc(r[e[s]]);return n+="}",n},Tg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function _t(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const kg=function(r){M(!Cg(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let w="";for(m=0;m<64;m+=8){let I=parseInt(E.substr(m,8),2).toString(16);I.length===1&&(I="0"+I),w=w+I}return w.toLowerCase()},BE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $E(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const GE=new RegExp("^-?(0*)\\d{1,10}$"),qE=-2147483648,KE=2147483647,Xp=function(r){if(GE.test(r)){const e=Number(r);if(e>=qE&&e<=KE)return e}return null},wi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},QE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ps=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="5",Ng="v",xg="s",Rg="r",Pg="f",Ag=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Og="ls",Dg="p",vc="ac",bg="websocket",Lg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Fg(r,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===bg)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Lg)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XE(r)&&(n.ns=r.namespace);const l=[];return _t(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return r0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={},tc={};function Hc(r){const e=r.toString();return ec[e]||(ec[e]=new ZE),ec[e]}function eS(r,e){const n=r.toString();return tc[n]||(tc[n]=e()),tc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&wi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="start",nS="close",rS="pLPCommand",iS="pRTLPCB",Ug="id",jg="pw",zg="ser",sS="cb",oS="seg",lS="ts",aS="d",uS="dframe",Vg=1870,Wg=30,cS=Vg-Wg,dS=25e3,hS=3e4;class ii{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=Hc(n),this.urlFn=m=>(this.appCheckToken&&(m[vc]=this.appCheckToken),Fg(n,Lg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hS)),VE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $c((...u)=>{const[d,f,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Zp)this.id=f,this.password=m;else if(d===nS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zp]="t",s[zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ng]=Bc,this.transportSessionId&&(s[xg]=this.transportSessionId),this.lastSessionId&&(s[Og]=this.lastSessionId),this.applicationId&&(s[Dg]=this.applicationId),this.appCheckToken&&(s[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ag.test(location.hostname)&&(s[Rg]=Pg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BE()&&!HE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=og(n),l=Tg(s,cS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[uS]="t",s[Ug]=e,s[jg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $c{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UE(),window[rS+this.uniqueCallbackIdentifier]=e,window[iS+this.uniqueCallbackIdentifier]=n,this.myIFrame=$c.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){tt("frame writing exception"),f.stack&&tt(f.stack),tt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ug]=this.myID,e[jg]=this.myPW,e[zg]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wg+s.length<=Vg;){const d=this.pendingSegs.shift();s=s+"&"+oS+l+"="+d.seg+"&"+lS+l+"="+d.ts+"&"+aS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(dS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=16384,pS=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class Wt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=Hc(n),this.connURL=Wt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Ng]=Bc,typeof location<"u"&&location.hostname&&Ag.test(location.hostname)&&(d[Rg]=Pg),n&&(d[xg]=n),s&&(d[Og]=s),l&&(d[vc]=l),u&&(d[Dg]=u),Fg(e,bg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;f0(),this.mySock=new dl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&dl!==null&&!Wt.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tg(n,fS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{static get ALL_TRANSPORTS(){return[ii,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Wt&&Wt.isAvailable();let s=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Wt];else{const l=this.transports_=[];for(const u of Es.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=6e4,gS=5e3,_S=10*1024,yS=100*1024,nc="t",em="d",vS="s",tm="r",wS="e",nm="o",rm="a",im="n",sm="p",ES="h";class SS{constructor(e,n,s,l,u,d,f,m,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_S?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nc in e){const n=e[nc];n===rm?this.upgradeIfSecondaryHealthy_():n===tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),s=us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),s=us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(nc,e);if(em in e){const s=e[em];if(n===ES){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vS?this.onConnectionShutdown_(s):n===tm?this.onReset_(s):n===wS?yc("Server Error: "+s):n===nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bc!==s&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Hg{static getInstance(){return new hl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=32,lm=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new pe("")}function oe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function ge(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new pe(r.pieces_,e)}function $g(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function IS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Gg(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function qg(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new pe(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new pe(n,0)}function se(r){return r.pieceNum_>=r.pieces_.length}function it(r,e){const n=oe(r),s=oe(e);if(n===null)return e;if(n===s)return it(ge(r),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Kg(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Bt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class CS{constructor(e,n){this.errorPrefix_=n,this.parts_=Gg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);Qg(this)}}function TS(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Dl(e),Qg(r)}function kS(r){const e=r.parts_.pop();r.byteLength_-=Dl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Qg(r){if(r.byteLength_>lm)throw new Error(r.errorPrefix_+"has a key path longer than "+lm+" bytes ("+r.byteLength_+").");if(r.parts_.length>om)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+om+") or object contains a cycle "+vr(r))}function vr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Hg{static getInstance(){return new Gc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=1e3,NS=300*1e3,am=30*1e3,xS=1.3,RS=3e4,PS="server_kill",um=3;class vn extends Bg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=vn.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cs,this.maxReconnectDelay_=NS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Le(u)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ol,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;vn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const s=hi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=am)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=g0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RS&&(this.reconnectDelay_=cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(w){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(w)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,I]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=I&&I.token,f=new SS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,L=>{gt(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(PS)},u))}catch(w){this.log_("Failed to get token: "+w),d||(this.repoInfo_.nodeAdmin&&gt(w),m())}}}interrupt(e){tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hc(this.interruptReasons_)&&(this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Wc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=um&&(this.reconnectDelay_=am,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Eg.replace(/\./g,"-")]=1,Lc()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return hc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(fi,e),l=new re(fi,n);return this.compare(s,l)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class Yg extends Ll{static get __EMPTY_NODE(){return Xo}static set __EMPTY_NODE(e){Xo=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(Ir,Xo)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Xo)}toString(){return".key"}}const li=new Yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=l??mt.EMPTY_NODE,this.right=u??mt.EMPTY_NODE}copy(e,n,s,l,u){return new Ve(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class AS{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zo(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new AS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(r,e){return vi(r.name,e.name)}function qc(r,e){return vi(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc;function DS(r){wc=r}const Jg=function(r){return typeof r=="number"?"number:"+kg(r):"string:"+r},Xg=function(r){if(r.isLeafNode()){const e=r.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else M(r===wc||r.isEmpty(),"priority of unexpected type.");M(r===wc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;class ze{static set __childrenNodeConstructor(e){cm=e}static get __childrenNodeConstructor(){return cm}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:oe(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kg(this.value_):e+=this.value_,this.lazyHash_=Ig(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return M(l>=0,"Unknown leaf type: "+n),M(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zg,e_;function bS(r){Zg=r}function LS(r){e_=r}class MS extends Ll{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?vi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Ir,new ze("[PRIORITY-POST]",e_))}makePost(e,n){const s=Zg(e);return new re(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Te=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=Math.log(2);class US{constructor(e){const n=u=>parseInt(Math.log(u)/FS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(r,e,n,s){r.sort(e);const l=function(m,g){const E=g-m;let w,I;if(E===0)return null;if(E===1)return w=r[m],I=n?n(w):w,new Ve(I,w.node,Ve.BLACK,null,null);{const L=parseInt(E/2,10)+m,F=l(m,L),H=l(L+1,g);return w=r[L],I=n?n(w):w,new Ve(I,w.node,Ve.BLACK,F,H)}},u=function(m){let g=null,E=null,w=r.length;const I=function(F,H){const G=w-F,fe=w;w-=F;const Ae=l(G+1,fe),Re=r[G],ke=n?n(Re):Re;L(new Ve(ke,Re.node,H,null,Ae))},L=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<m.count;++F){const H=m.nextBitIsOne(),G=Math.pow(2,m.count-(F+1));H?I(G,Ve.BLACK):(I(G,Ve.BLACK),I(G,Ve.RED))}return E},d=new US(r.length),f=u(d);return new mt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;const ri={};class gn{static get Default(){return M(ri&&Te,"ChildrenNode.ts has not been loaded"),rc=rc||new gn({".priority":ri},{".priority":Te}),rc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(re.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=fl(s,e.getCompare()):f=ri;const m=e.toString(),g={...this.indexSet_};g[m]=e;const E={...this.indexes_};return E[m]=f,new gn(E,g)}addToIndexes(e,n){const s=ul(this.indexes_,(l,u)=>{const d=hi(this.indexSet_,u);if(M(d,"Missing index implementation for "+u),l===ri)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(re.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),fl(f,d.getCompare())}else return ri;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new re(e.name,f))),m.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ul(this.indexes_,l=>{if(l===ri)return l;{const u=n.get(e.name);return u?l.remove(new re(e.name,u)):l}});return new gn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;class Y{static get EMPTY_NODE(){return ds||(ds=new Y(new mt(qc),null,gn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xg(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ds:this.priorityNode_;return new Y(l,d,u)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{M(oe(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ge(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Te,(d,f)=>{n[d]=f.val(e),s++,u&&Y.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jg(this.getPriority().val())+":"),this.forEachChild(Te,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Ig(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new re(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,re.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Te),l=n.getIterator(Te);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===li?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jS extends Y{constructor(){super(new mt(qc),Y.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Ds=new jS;Object.defineProperties(re,{MIN:{value:new re(fi,Y.EMPTY_NODE)},MAX:{value:new re(Ir,Ds)}});Yg.__EMPTY_NODE=Y.EMPTY_NODE;ze.__childrenNodeConstructor=Y;DS(Ds);LS(Ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=!0;function We(r,e=null){if(r===null)return Y.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new ze(n,We(e))}if(!(r instanceof Array)&&zS){const n=[];let s=!1;if(_t(r,(d,f)=>{if(d.substring(0,1)!=="."){const m=We(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new re(d,m)))}}),n.length===0)return Y.EMPTY_NODE;const u=fl(n,OS,d=>d.name,qc);if(s){const d=fl(n,Te.getCompare());return new Y(u,We(e),new gn({".priority":d},{".priority":Te}))}else return new Y(u,We(e),gn.Default)}else{let n=Y.EMPTY_NODE;return _t(r,(s,l)=>{if(Cn(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}bS(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS extends Ll{constructor(e){super(),this.indexPath_=e,M(!se(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?vi(e.name,n.name):u}makePost(e,n){const s=We(e),l=Y.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,l)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new re(Ir,e)}toString(){return Gg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends Ll{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=We(e);return new re(n,s)}toString(){return".value"}}const BS=new WS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(r){return{type:"value",snapshotNode:r}}function pi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ss(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Is(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function HS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ss(n,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(pi(n,s)):d.trackChildChange(Is(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Te,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ss(l,u))}),n.isLeafNode()||n.forEachChild(Te,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Is(l,u,d))}else s.trackChildChange(pi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.indexedFilter_=new Kc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new re(n,s))||(s=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Y.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(Y.EMPTY_NODE);const u=this;return n.forEachChild(Te,(d,f)=>{u.matches(new re(d,f))||(l=l.updateImmediateChild(d,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new re(n,s))||(s=Y.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=Y.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(Y.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const w=this.index_.getCompare();d=(I,L)=>w(L,I)}else d=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const m=new re(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(m);if(f.hasChild(n)){const w=f.getImmediateChild(n);let I=l.getChildAfterChild(this.index_,g,this.reverse_);for(;I!=null&&(I.name===n||f.hasChild(I.name));)I=l.getChildAfterChild(this.index_,I,this.reverse_);const L=I==null?1:d(I,m);if(E&&!s.isEmpty()&&L>=0)return u!=null&&u.trackChildChange(Is(n,s,w)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ss(n,w));const H=f.updateImmediateChild(n,Y.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(u!=null&&u.trackChildChange(pi(I.name,I.node)),H.updateImmediateChild(I.name,I.node)):H}}else return s.isEmpty()?e:E&&d(g,m)>=0?(u!=null&&(u.trackChildChange(Ss(g.name,g.node)),u.trackChildChange(pi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Qc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GS(r){return r.loadsAllData()?new Kc(r.getIndex()):r.hasLimit()?new $S(r):new Cs(r)}function dm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Te?n="$priority":r.index_===BS?n="$value":r.index_===li?n="$key":(M(r.index_ instanceof VS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Le(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Le(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Le(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Le(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Le(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function hm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Te&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Bg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Os("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=pl.getListenId_(e,s),f={};this.listens_[d]=f;const m=dm(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let w=E;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(u,w,!1,s),hi(this.listens_,d)===f){let I;g?g===401?I="permission_denied":I="rest_error:"+g:I="ok",l(I,null)}})}unlisten(e,n){const s=pl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=dm(e._queryParams),s=e._path.toString(),l=new Ol;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=vs(f.responseText)}catch{gt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&gt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function n_(r,e,n){if(se(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=oe(e);r.children.has(s)||r.children.set(s,ml());const l=r.children.get(s);e=ge(e),n_(l,e,n)}}function Ec(r,e,n){r.value!==null?n(e,r.value):KS(r,(s,l)=>{const u=new pe(e.toString()+"/"+s);Ec(l,u,n)})}function KS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&_t(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=10*1e3,YS=30*1e3,JS=300*1e3;class XS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QS(e);const s=fm+(YS-fm)*Math.random();ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;_t(e,(l,u)=>{u>0&&Cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*JS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jc(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new gl(ue(),n,this.revert)}}else return M(oe(this.path)===e,"operationForChild called for unrelated child."),new gl(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Ts(this.source,ue()):new Ts(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(e){return se(this.path)?new Cr(this.source,ue(),this.snap.getImmediateChild(e)):new Cr(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ht.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new Cr(this.source,ue(),n.value):new ks(this.source,ue(),n)}else return M(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(HS(d.childName,d.snapshotNode))}),hs(r,l,"child_removed",e,s,n),hs(r,l,"child_added",e,s,n),hs(r,l,"child_moved",u,s,n),hs(r,l,"child_changed",e,s,n),hs(r,l,"value",e,s,n),l}function hs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>nI(r,f,m)),d.forEach(f=>{const m=tI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,r.query_))})})}function tI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function nI(r,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),l=new re(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r,e){return{eventCache:r,serverCache:e}}function ms(r,e,n,s){return Ml(new nr(e,n,s),r.serverCache)}function i_(r,e,n,s){return Ml(r.eventCache,new nr(e,n,s))}function _l(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Tr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;const rI=()=>(ic||(ic=new mt(WE)),ic);class we{static fromObject(e){let n=new we(null);return _t(e,(s,l)=>{n=n.set(new pe(s),l)}),n}constructor(e,n=rI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(se(e))return null;{const s=oe(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(ge(e),n);return u!=null?{path:Me(new pe(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(ge(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=oe(e),u=(this.children.get(s)||new we(null)).set(ge(e),n),d=this.children.insert(s,u);return new we(this.value,d)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const l=s.remove(ge(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new we(null):new we(this.value,u)}else return this}}get(e){if(se(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(ge(e)):null}}setTree(e,n){if(se(e))return n;{const s=oe(e),u=(this.children.get(s)||new we(null)).setTree(ge(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new we(this.value,d)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(se(e))return null;{const u=oe(e),d=this.children.get(u);return d?d.findOnPath_(ge(e),Me(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const l=oe(e),u=this.children.get(l);return u?u.foreachOnPath_(ge(e),Me(n,l),s):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new we(null))}}function gs(r,e,n){if(se(e))return new Gt(new we(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=it(l,e);return u=u.updateChild(d,n),new Gt(r.writeTree_.set(l,u))}else{const l=new we(n),u=r.writeTree_.setTree(e,l);return new Gt(u)}}}function pm(r,e,n){let s=r;return _t(n,(l,u)=>{s=gs(s,Me(e,l),u)}),s}function mm(r,e){if(se(e))return Gt.empty();{const n=r.writeTree_.setTree(e,new we(null));return new Gt(n)}}function Sc(r,e){return Ar(r,e)!=null}function Ar(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(it(n.path,e)):null}function gm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(s,l)=>{e.push(new re(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new re(s,l.value))}),e}function Jn(r,e){if(se(e))return r;{const n=Ar(r,e);return n!=null?new Gt(new we(n)):new Gt(r.writeTree_.subtree(e))}}function Ic(r){return r.writeTree_.isEmpty()}function mi(r,e){return s_(ue(),r.writeTree_,e)}function s_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(M(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=s_(Me(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r,e){return u_(e,r)}function iI(r,e,n,s,l){M(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=gs(r.visibleWrites,e,n)),r.lastWriteId=s}function sI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function oI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&lI(f,s.path)?l=!1:Bt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return aI(r),!0;if(s.snap)r.visibleWrites=mm(r.visibleWrites,s.path);else{const f=s.children;_t(f,m=>{r.visibleWrites=mm(r.visibleWrites,Me(s.path,m))})}return!0}else return!1}function lI(r,e){if(r.snap)return Bt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Bt(Me(r.path,n),e))return!0;return!1}function aI(r){r.visibleWrites=o_(r.allWrites,uI,ue()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function uI(r){return r.visible}function o_(r,e,n){let s=Gt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Bt(n,d)?(f=it(n,d),s=gs(s,f,u.snap)):Bt(d,n)&&(f=it(d,n),s=gs(s,ue(),u.snap.getChild(f)));else if(u.children){if(Bt(n,d))f=it(n,d),s=pm(s,f,u.children);else if(Bt(d,n))if(f=it(d,n),se(f))s=pm(s,ue(),u.children);else{const m=hi(u.children,oe(f));if(m){const g=m.getChild(ge(f));s=gs(s,ue(),g)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function l_(r,e,n,s,l){if(!s&&!l){const u=Ar(r.visibleWrites,e);if(u!=null)return u;{const d=Jn(r.visibleWrites,e);if(Ic(d))return n;if(n==null&&!Sc(d,ue()))return null;{const f=n||Y.EMPTY_NODE;return mi(d,f)}}}else{const u=Jn(r.visibleWrites,e);if(!l&&Ic(u))return n;if(!l&&n==null&&!Sc(u,ue()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Bt(g.path,e)||Bt(e,g.path))},f=o_(r.allWrites,d,e),m=n||Y.EMPTY_NODE;return mi(f,m)}}}function cI(r,e,n){let s=Y.EMPTY_NODE;const l=Ar(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Te,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Jn(r.visibleWrites,e);return n.forEachChild(Te,(d,f)=>{const m=mi(Jn(u,new pe(d)),f);s=s.updateImmediateChild(d,m)}),gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Jn(r.visibleWrites,e);return gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function dI(r,e,n,s,l){M(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Me(e,n);if(Sc(r.visibleWrites,u))return null;{const d=Jn(r.visibleWrites,u);return Ic(d)?l.getChild(n):mi(d,l.getChild(n))}}function hI(r,e,n,s){const l=Me(e,n),u=Ar(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Jn(r.visibleWrites,l);return mi(d,s.getNode().getImmediateChild(n))}else return null}function fI(r,e){return Ar(r.visibleWrites,e)}function pI(r,e,n,s,l,u,d){let f;const m=Jn(r.visibleWrites,e),g=Ar(m,ue());if(g!=null)f=g;else if(n!=null)f=mi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const E=[],w=d.getCompare(),I=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let L=I.getNext();for(;L&&E.length<l;)w(L,s)!==0&&E.push(L),L=I.getNext();return E}else return[]}function mI(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function yl(r,e,n,s){return l_(r.writeTree,r.treePath,e,n,s)}function Xc(r,e){return cI(r.writeTree,r.treePath,e)}function _m(r,e,n,s){return dI(r.writeTree,r.treePath,e,n,s)}function vl(r,e){return fI(r.writeTree,Me(r.treePath,e))}function gI(r,e,n,s,l,u){return pI(r.writeTree,r.treePath,e,n,s,l,u)}function Zc(r,e,n){return hI(r.writeTree,r.treePath,e,n)}function a_(r,e){return u_(Me(r.treePath,e),r.writeTree)}function u_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Is(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ss(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,pi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Is(s,e.snapshotNode,l.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const c_=new yI;class ed{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tr(this.viewCache_),u=gI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(r){return{filter:r}}function wI(r,e){M(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function EI(r,e,n,s,l){const u=new _I;let d,f;if(n.type===Ht.OVERWRITE){const g=n;g.source.fromUser?d=Cc(r,e,g.path,g.snap,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!se(g.path),d=wl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ht.MERGE){const g=n;g.source.fromUser?d=II(r,e,g.path,g.children,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Tc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Ht.ACK_USER_WRITE){const g=n;g.revert?d=kI(r,e,g.path,s,l,u):d=CI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ht.LISTEN_COMPLETE)d=TI(r,e,n.path,s,u);else throw gi("Unknown operation type: "+n.type);const m=u.getChanges();return SI(e,d,m),{viewCache:d,changes:m}}function SI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=_l(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(t_(_l(e)))}}function d_(r,e,n,s,l,u){const d=e.eventCache;if(vl(s,n)!=null)return e;{let f,m;if(se(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Tr(e),E=g instanceof Y?g:Y.EMPTY_NODE,w=Xc(s,E);f=r.filter.updateFullNode(e.eventCache.getNode(),w,u)}else{const g=yl(s,Tr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=oe(n);if(g===".priority"){M(tr(n)===1,"Can't have a priority with additional path components");const E=d.getNode();m=e.serverCache.getNode();const w=_m(s,n,E,m);w!=null?f=r.filter.updatePriority(E,w):f=d.getNode()}else{const E=ge(n);let w;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const I=_m(s,n,d.getNode(),m);I!=null?w=d.getNode().getImmediateChild(g).updateChild(E,I):w=d.getNode().getImmediateChild(g)}else w=Zc(s,g,e.serverCache);w!=null?f=r.filter.updateChild(d.getNode(),g,w,E,l,u):f=d.getNode()}}return ms(e,f,d.isFullyInitialized()||se(n),r.filter.filtersNodes())}}function wl(r,e,n,s,l,u,d,f){const m=e.serverCache;let g;const E=d?r.filter:r.filter.getIndexedFilter();if(se(n))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const L=m.getNode().updateChild(n,s);g=E.updateFullNode(m.getNode(),L,null)}else{const L=oe(n);if(!m.isCompleteForPath(n)&&tr(n)>1)return e;const F=ge(n),G=m.getNode().getImmediateChild(L).updateChild(F,s);L===".priority"?g=E.updatePriority(m.getNode(),G):g=E.updateChild(m.getNode(),L,G,F,c_,null)}const w=i_(e,g,m.isFullyInitialized()||se(n),E.filtersNodes()),I=new ed(l,w,u);return d_(r,w,n,l,I,f)}function Cc(r,e,n,s,l,u,d){const f=e.eventCache;let m,g;const E=new ed(l,e,u);if(se(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),m=ms(e,g,!0,r.filter.filtersNodes());else{const w=oe(n);if(w===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),m=ms(e,g,f.isFullyInitialized(),f.isFiltered());else{const I=ge(n),L=f.getNode().getImmediateChild(w);let F;if(se(I))F=s;else{const H=E.getCompleteChild(w);H!=null?$g(I)===".priority"&&H.getChild(qg(I)).isEmpty()?F=H:F=H.updateChild(I,s):F=Y.EMPTY_NODE}if(L.equals(F))m=e;else{const H=r.filter.updateChild(f.getNode(),w,F,I,E,d);m=ms(e,H,f.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function ym(r,e){return r.eventCache.isCompleteForChild(e)}function II(r,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const E=Me(n,m);ym(e,oe(E))&&(f=Cc(r,f,E,g,l,u,d))}),s.foreach((m,g)=>{const E=Me(n,m);ym(e,oe(E))||(f=Cc(r,f,E,g,l,u,d))}),f}function vm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Tc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;se(n)?g=s:g=new we(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((w,I)=>{if(E.hasChild(w)){const L=e.serverCache.getNode().getImmediateChild(w),F=vm(r,L,I);m=wl(r,m,new pe(w),F,l,u,d,f)}}),g.children.inorderTraversal((w,I)=>{const L=!e.serverCache.isCompleteForChild(w)&&I.value===null;if(!E.hasChild(w)&&!L){const F=e.serverCache.getNode().getImmediateChild(w),H=vm(r,F,I);m=wl(r,m,new pe(w),H,l,u,d,f)}}),m}function CI(r,e,n,s,l,u,d){if(vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(se(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return wl(r,e,n,m.getNode().getChild(n),l,u,f,d);if(se(n)){let g=new we(null);return m.getNode().forEachChild(li,(E,w)=>{g=g.set(new pe(E),w)}),Tc(r,e,n,g,l,u,f,d)}else return e}else{let g=new we(null);return s.foreach((E,w)=>{const I=Me(n,E);m.isCompleteForPath(I)&&(g=g.set(E,m.getNode().getChild(I)))}),Tc(r,e,n,g,l,u,f,d)}}function TI(r,e,n,s,l){const u=e.serverCache,d=i_(e,u.getNode(),u.isFullyInitialized()||se(n),u.isFiltered());return d_(r,d,n,s,c_,l)}function kI(r,e,n,s,l,u){let d;if(vl(s,n)!=null)return e;{const f=new ed(s,e,l),m=e.eventCache.getNode();let g;if(se(n)||oe(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=yl(s,Tr(e));else{const w=e.serverCache.getNode();M(w instanceof Y,"serverChildren would be complete if leaf node"),E=Xc(s,w)}E=E,g=r.filter.updateFullNode(m,E,u)}else{const E=oe(n);let w=Zc(s,E,e.serverCache);w==null&&e.serverCache.isCompleteForChild(E)&&(w=m.getImmediateChild(E)),w!=null?g=r.filter.updateChild(m,E,w,ge(n),f,u):e.eventCache.getNode().hasChild(E)?g=r.filter.updateChild(m,E,Y.EMPTY_NODE,ge(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=yl(s,Tr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||vl(s,ue())!=null,ms(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Kc(s.getIndex()),u=GS(s);this.processor_=vI(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(Y.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(Y.EMPTY_NODE,f.getNode(),null),E=new nr(m,d.isFullyInitialized(),l.filtersNodes()),w=new nr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Ml(w,E),this.eventGenerator_=new ZS(this.query_)}get query(){return this.query_}}function xI(r){return r.viewCache_.serverCache.getNode()}function RI(r){return _l(r.viewCache_)}function PI(r,e){const n=Tr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function wm(r){return r.eventRegistrations_.length===0}function AI(r,e){r.eventRegistrations_.push(e)}function Em(r,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Sm(r,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(M(Tr(r.viewCache_),"We should always have a full cache before handling merges"),M(_l(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=EI(r.processor_,l,e,n,s);return wI(r.processor_,u.viewCache),M(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,h_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function OI(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(u,d)=>{s.push(pi(u,d))}),n.isFullyInitialized()&&s.push(t_(n.getNode())),h_(r,s,n.getNode(),e)}function h_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return eI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;class f_{constructor(){this.views=new Map}}function DI(r){M(!El,"__referenceConstructor has already been defined"),El=r}function bI(){return M(El,"Reference.ts has not been loaded"),El}function LI(r){return r.views.size===0}function td(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return M(u!=null,"SyncTree gave us an op for an invalid query."),Sm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Sm(d,e,n,s));return u}}function p_(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=yl(n,l?s:null),m=!1;f?m=!0:s instanceof Y?(f=Xc(n,s),m=!1):(f=Y.EMPTY_NODE,m=!1);const g=Ml(new nr(f,m,!1),new nr(s,l,!1));return new NI(e,g)}return d}function MI(r,e,n,s,l,u){const d=p_(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),AI(d,n),OI(d,n)}function FI(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(r);if(l==="default")for(const[m,g]of r.views.entries())d=d.concat(Em(g,n,s)),wm(g)&&(r.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=r.views.get(l);m&&(d=d.concat(Em(m,n,s)),wm(m)&&(r.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!rr(r)&&u.push(new(bI())(e._repo,e._path)),{removed:u,events:d}}function m_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(r,e){let n=null;for(const s of r.views.values())n=n||PI(s,e);return n}function g_(r,e){if(e._queryParams.loadsAllData())return Ul(r);{const s=e._queryIdentifier;return r.views.get(s)}}function __(r,e){return g_(r,e)!=null}function rr(r){return Ul(r)!=null}function Ul(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;function UI(r){M(!Sl,"__referenceConstructor has already been defined"),Sl=r}function jI(){return M(Sl,"Reference.ts has not been loaded"),Sl}let zI=1;class Im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=mI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(r,e,n,s,l){return iI(r.pendingWriteTree_,e,n,s,l),l?Ls(r,new Cr(r_(),e,n)):[]}function Er(r,e,n=!1){const s=sI(r.pendingWriteTree_,e);if(oI(r.pendingWriteTree_,e)){let u=new we(null);return s.snap!=null?u=u.set(ue(),!0):_t(s.children,d=>{u=u.set(new pe(d),!0)}),Ls(r,new gl(s.path,u,n))}else return[]}function bs(r,e,n){return Ls(r,new Cr(Yc(),e,n))}function VI(r,e,n){const s=we.fromObject(n);return Ls(r,new ks(Yc(),e,s))}function WI(r,e){return Ls(r,new Ts(Yc(),e))}function BI(r,e,n){const s=rd(r,n);if(s){const l=id(s),u=l.path,d=l.queryId,f=it(u,e),m=new Ts(Jc(d),f);return sd(r,u,m)}else return[]}function v_(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||__(d,e))){const m=FI(d,e,n,s);LI(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const E=g.findIndex(I=>I._queryParams.loadsAllData())!==-1,w=r.syncPointTree_.findOnPath(u,(I,L)=>rr(L));if(E&&!w){const I=r.syncPointTree_.subtree(u);if(!I.isEmpty()){const L=qI(I);for(let F=0;F<L.length;++F){const H=L[F],G=H.query,fe=I_(r,H);r.listenProvider_.startListening(_s(G),Ns(r,G),fe.hashFn,fe.onComplete)}}}!w&&g.length>0&&!s&&(E?r.listenProvider_.stopListening(_s(e),null):g.forEach(I=>{const L=r.queryToTagMap.get(jl(I));r.listenProvider_.stopListening(_s(I),L)}))}KI(r,g)}return f}function w_(r,e,n,s){const l=rd(r,s);if(l!=null){const u=id(l),d=u.path,f=u.queryId,m=it(d,e),g=new Cr(Jc(f),m,n);return sd(r,d,g)}else return[]}function HI(r,e,n,s){const l=rd(r,s);if(l){const u=id(l),d=u.path,f=u.queryId,m=it(d,e),g=we.fromObject(n),E=new ks(Jc(f),m,g);return sd(r,d,E)}else return[]}function $I(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(I,L)=>{const F=it(I,l);u=u||Xn(L,F),d=d||rr(L)});let f=r.syncPointTree_.get(l);f?(d=d||rr(f),u=u||Xn(f,ue())):(f=new f_,r.syncPointTree_=r.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=Y.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((L,F)=>{const H=Xn(F,ue());H&&(u=u.updateImmediateChild(L,H))}));const g=__(f,e);if(!g&&!e._queryParams.loadsAllData()){const I=jl(e);M(!r.queryToTagMap.has(I),"View does not exist, but we have a tag");const L=QI();r.queryToTagMap.set(I,L),r.tagToQueryMap.set(L,I)}const E=Fl(r.pendingWriteTree_,l);let w=MI(f,e,n,E,u,m);if(!g&&!d&&!s){const I=g_(f,e);w=w.concat(YI(r,e,I))}return w}function nd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const m=it(d,e),g=Xn(f,m);if(g)return g});return l_(l,e,u,n,!0)}function GI(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,E)=>{const w=it(g,n);s=s||Xn(E,w)});let l=r.syncPointTree_.get(n);l?s=s||Xn(l,ue()):(l=new f_,r.syncPointTree_=r.syncPointTree_.set(n,l));const u=s!=null,d=u?new nr(s,!0,!1):null,f=Fl(r.pendingWriteTree_,e._path),m=p_(l,e,f,u?d.getNode():Y.EMPTY_NODE,u);return RI(m)}function Ls(r,e){return E_(e,r.syncPointTree_,null,Fl(r.pendingWriteTree_,ue()))}function E_(r,e,n,s){if(se(r.path))return S_(r,e,n,s);{const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];const d=oe(r.path),f=r.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,E=a_(s,d);u=u.concat(E_(f,m,g,E))}return l&&(u=u.concat(td(l,r,s,n))),u}}function S_(r,e,n,s){const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=a_(s,d),E=r.operationForChild(d);E&&(u=u.concat(S_(E,f,m,g)))}),l&&(u=u.concat(td(l,r,s,n))),u}function I_(r,e){const n=e.query,s=Ns(r,n);return{hashFn:()=>(xI(e)||Y.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?BI(r,n._path,s):WI(r,n._path);{const u=$E(l,n);return v_(r,n,null,u)}}}}function Ns(r,e){const n=jl(e);return r.queryToTagMap.get(n)}function jl(r){return r._path.toString()+"$"+r._queryIdentifier}function rd(r,e){return r.tagToQueryMap.get(e)}function id(r){const e=r.indexOf("$");return M(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new pe(r.substr(0,e))}}function sd(r,e,n){const s=r.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const l=Fl(r.pendingWriteTree_,e);return td(s,n,l,null)}function qI(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[Ul(n)];{let l=[];return n&&(l=m_(n)),_t(s,(u,d)=>{l=l.concat(d)}),l}})}function _s(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(jI())(r._repo,r._path):r}function KI(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=jl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function QI(){return zI++}function YI(r,e,n){const s=e._path,l=Ns(r,e),u=I_(r,n),d=r.listenProvider_.startListening(_s(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)M(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,E,w)=>{if(!se(g)&&E&&rr(E))return[Ul(E).query];{let I=[];return E&&(I=I.concat(m_(E).map(L=>L.query))),_t(w,(L,F)=>{I=I.concat(F)}),I}});for(let g=0;g<m.length;++g){const E=m[g];r.listenProvider_.stopListening(_s(E),Ns(r,E))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new ld(this.syncTree_,n)}node(){return nd(this.syncTree_,this.path_)}}const JI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Cm=function(r,e,n){if(!r||typeof r!="object")return r;if(M(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return XI(r[".sv"],e,n);if(typeof r[".sv"]=="object")return ZI(r[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},XI=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+r)}},ZI=function(r,e,n){r.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const l=e.node();if(M(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},eC=function(r,e,n,s){return ad(e,new ld(n,r),s)},C_=function(r,e,n){return ad(r,new od(e),n)};function ad(r,e,n){const s=r.getPriority().val(),l=Cm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Cm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ze(f,We(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(Te,(f,m)=>{const g=ad(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cd(r,e){let n=e instanceof pe?e:new pe(e),s=r,l=oe(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new ud(l,s,u),n=ge(n),l=oe(n)}return s}function Ei(r){return r.node.value}function T_(r,e){r.node.value=e,kc(r)}function k_(r){return r.node.childCount>0}function tC(r){return Ei(r)===void 0&&!k_(r)}function zl(r,e){_t(r.node.children,(n,s)=>{e(new ud(n,r,s))})}function N_(r,e,n,s){n&&e(r),zl(r,l=>{N_(l,e,!0)})}function nC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ms(r){return new pe(r.parent===null?r.name:Ms(r.parent)+"/"+r.name)}function kc(r){r.parent!==null&&rC(r.parent,r.name,r)}function rC(r,e,n){const s=tC(n),l=Cn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,kc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,kc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=/[\[\].#$\/\u0000-\u001F\u007F]/,sC=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,x_=function(r){return typeof r=="string"&&r.length!==0&&!iC.test(r)},R_=function(r){return typeof r=="string"&&r.length!==0&&!sC.test(r)},oC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),R_(r)},lC=function(r,e,n,s){dd(jc(r,"value"),e,n)},dd=function(r,e,n){const s=n instanceof pe?new CS(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(r+"contains a function "+vr(s)+" with contents = "+e.toString());if(Cg(e))throw new Error(r+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>sc/3&&Dl(e)>sc)throw new Error(r+"contains a string greater than "+sc+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(_t(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!x_(d)))throw new Error(r+" contains an invalid key ("+d+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TS(s,d),dd(r,f,s),kS(s)}),l&&u)throw new Error(r+' contains ".value" child '+vr(s)+" in addition to actual children.")}},P_=function(r,e,n,s){if(!R_(n))throw new Error(jc(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),P_(r,e,n)},uC=function(r,e){if(oe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},cC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!x_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oC(n))throw new Error(jc(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Kg(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function rn(r,e,n){A_(r,n),hC(r,s=>Bt(s,e)||Bt(e,s))}function hC(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(fC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function fC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();fs&&tt("event: "+n.toString()),wi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="repo_interrupt",mC=25;class gC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new ud,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _C(r,e,n){if(r.stats_=Hc(r.repoInfo_),r.forceRestClient_||QE())r.server_=new pl(r.repoInfo_,(s,l,u,d)=>{Tm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>km(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,u,d)=>{Tm(r,s,l,u,d)},s=>{km(r,s)},s=>{vC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=eS(r.repoInfo_,()=>new XS(r.stats_,r.server_)),r.infoData_=new qS,r.infoSyncTree_=new Im({startListening:(s,l,u,d)=>{let f=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(f=bs(r.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),fd(r,"connected",!1),r.serverSyncTree_=new Im({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);rn(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function yC(r){const n=r.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hd(r){return JI({timestamp:yC(r)})}function Tm(r,e,n,s,l){r.dataUpdateCount++;const u=new pe(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=ul(n,g=>We(g));d=HI(r.serverSyncTree_,u,m,l)}else{const m=We(n);d=w_(r.serverSyncTree_,u,m,l)}else if(s){const m=ul(n,g=>We(g));d=VI(r.serverSyncTree_,u,m)}else{const m=We(n);d=bs(r.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=Wl(r,u)),rn(r.eventQueue_,f,d)}function km(r,e){fd(r,"connected",e),e===!1&&SC(r)}function vC(r,e){_t(e,(n,s)=>{fd(r,n,s)})}function fd(r,e,n){const s=new pe("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=bs(r.infoSyncTree_,s,l);rn(r.eventQueue_,s,u)}function O_(r){return r.nextWriteId_++}function wC(r,e,n){const s=GI(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());$I(r.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=bs(r.serverSyncTree_,e._path,u);else{const f=Ns(r.serverSyncTree_,e);d=w_(r.serverSyncTree_,e._path,u,f)}return rn(r.eventQueue_,e._path,d),v_(r.serverSyncTree_,e,n,null,!0),u},l=>(Vl(r,"get for query "+Le(e)+" failed: "+l),Promise.reject(new Error(l))))}function EC(r,e,n,s,l){Vl(r,"set",{path:e.toString(),value:n,priority:s});const u=hd(r),d=We(n,s),f=nd(r.serverSyncTree_,e),m=C_(d,f,u),g=O_(r),E=y_(r.serverSyncTree_,e,m,g,!0);A_(r.eventQueue_,E),r.server_.put(e.toString(),d.val(!0),(I,L)=>{const F=I==="ok";F||gt("set at "+e+" failed: "+I);const H=Er(r.serverSyncTree_,g,!F);rn(r.eventQueue_,e,H),CC(r,l,I,L)});const w=F_(r,e);Wl(r,w),rn(r.eventQueue_,w,[])}function SC(r){Vl(r,"onDisconnectEvents");const e=hd(r),n=ml();Ec(r.onDisconnect_,ue(),(l,u)=>{const d=eC(l,u,r.serverSyncTree_,e);n_(n,l,d)});let s=[];Ec(n,ue(),(l,u)=>{s=s.concat(bs(r.serverSyncTree_,l,u));const d=F_(r,l);Wl(r,d)}),r.onDisconnect_=ml(),rn(r.eventQueue_,ue(),s)}function IC(r){r.persistentConnection_&&r.persistentConnection_.interrupt(pC)}function Vl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),tt(n,...e)}function CC(r,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function D_(r,e,n){return nd(r.serverSyncTree_,e,n)||Y.EMPTY_NODE}function pd(r,e=r.transactionQueueTree_){if(e||Bl(r,e),Ei(e)){const n=L_(r,e);M(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&TC(r,Ms(e),n)}else k_(e)&&zl(e,n=>{pd(r,n)})}function TC(r,e,n){const s=n.map(g=>g.currentWriteId),l=D_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];M(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const w=it(e,E.path);u=u.updateChild(w,E.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;r.server_.put(m.toString(),f,g=>{Vl(r,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const w=[];for(let I=0;I<n.length;I++)n[I].status=2,E=E.concat(Er(r.serverSyncTree_,n[I].currentWriteId)),n[I].onComplete&&w.push(()=>n[I].onComplete(null,!0,n[I].currentOutputSnapshotResolved)),n[I].unwatcher();Bl(r,cd(r.transactionQueueTree_,e)),pd(r,r.transactionQueueTree_),rn(r.eventQueue_,e,E);for(let I=0;I<w.length;I++)wi(w[I])}else{if(g==="datastale")for(let w=0;w<n.length;w++)n[w].status===3?n[w].status=4:n[w].status=0;else{gt("transaction at "+m.toString()+" failed: "+g);for(let w=0;w<n.length;w++)n[w].status=4,n[w].abortReason=g}Wl(r,e)}},d)}function Wl(r,e){const n=b_(r,e),s=Ms(n),l=L_(r,n);return kC(r,l,s),s}function kC(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=it(n,m.path);let E=!1,w;if(M(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,w=m.abortReason,l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=mC)E=!0,w="maxretry",l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else{const I=D_(r,m.path,d);m.currentInputSnapshot=I;const L=e[f].update(I.val());if(L!==void 0){dd("transaction failed: Data returned ",L,m.path);let F=We(L);typeof L=="object"&&L!=null&&Cn(L,".priority")||(F=F.updatePriority(I.getPriority()));const G=m.currentWriteId,fe=hd(r),Ae=C_(F,I,fe);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=Ae,m.currentWriteId=O_(r),d.splice(d.indexOf(G),1),l=l.concat(y_(r.serverSyncTree_,m.path,Ae,m.currentWriteId,m.applyLocally)),l=l.concat(Er(r.serverSyncTree_,G,!0))}else E=!0,w="nodata",l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0))}rn(r.eventQueue_,n,l),l=[],E&&(e[f].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(w==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(w),!1,null))))}Bl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);pd(r,r.transactionQueueTree_)}function b_(r,e){let n,s=r.transactionQueueTree_;for(n=oe(e);n!==null&&Ei(s)===void 0;)s=cd(s,n),e=ge(e),n=oe(e);return s}function L_(r,e){const n=[];return M_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function M_(r,e,n){const s=Ei(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);zl(e,l=>{M_(r,l,n)})}function Bl(r,e){const n=Ei(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,T_(e,n.length>0?n:void 0)}zl(e,s=>{Bl(r,s)})}function F_(r,e){const n=Ms(b_(r,e)),s=cd(r.transactionQueueTree_,e);return nC(s,l=>{oc(r,l)}),oc(r,s),N_(s,l=>{oc(r,l)}),n}function oc(r,e){const n=Ei(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(M(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(M(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Er(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?T_(e,void 0):n.length=u+1,rn(r.eventQueue_,Ms(e),l);for(let d=0;d<s.length;d++)wi(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function xC(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):gt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Nm=function(r,e){const n=RC(r),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new pe(n.pathString)}},RC=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let E=r.indexOf("/");E===-1&&(E=r.length);let w=r.indexOf("?");w===-1&&(w=r.length),e=r.substring(0,Math.min(E,w)),E<w&&(l=NC(r.substring(E,w)));const I=xC(r.substring(Math.min(r.length,w)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const L=e.slice(0,g);if(L.toLowerCase()==="localhost")n="localhost";else if(L.split(".").length<=2)n=L;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),n=e.substring(F+1),u=s}"ns"in I&&(u=I.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class AC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return se(this._path)?null:$g(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=hm(this._queryParams),n=Wc(e);return n==="{}"?"default":n}get _queryObject(){return hm(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof md))return!1;const n=this._repo===e._repo,s=Kg(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+IS(this._path)}}class Tn extends md{constructor(e,n){super(e,n,new Qc,!1)}get parent(){const e=qg(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=Nc(this.ref,e);return new xs(this._node.getChild(n),s,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new xs(l,Nc(this.ref,s),Te)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xm(r,e){return r=lt(r),r._checkNotDeleted("ref"),e!==void 0?Nc(r._root,e):r._root}function Nc(r,e){return r=lt(r),oe(r._path)===null?aC("child","path",e):P_("child","path",e),new Tn(r._repo,Me(r._path,e))}function DC(r,e){r=lt(r),uC("set",r._path),lC("set",e,r._path);const n=new Ol;return EC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function bC(r){r=lt(r);const e=new OC(()=>{}),n=new gd(e);return wC(r._repo,r,n).then(s=>new xs(s,new Tn(r._repo,r._path),r._queryParams.getIndex()))}class gd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new PC("value",this,new xs(e.snapshotNode,new Tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AC(this,e,n):null}matches(e){return e instanceof gd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}DI(Tn);UI(Tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="FIREBASE_DATABASE_EMULATOR_HOST",xc={};let MC=!1;function FC(r,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Ps(u);r.repoInfo_=new Mg(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function UC(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Nm(u,l),f=d.repoInfo,m;typeof process<"u"&&Kp&&(m=Kp[LC]),m?(u=`http://${m}?ns=${f.namespace}`,d=Nm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new JE(r.name,r.options,e);cC("Invalid Firebase Database URL",d),se(d.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const E=zC(f,r,g,new YE(r,n));return new VC(E,r)}function jC(r,e){const n=xc[e];(!n||n[r.key]!==r)&&En(`Database ${e}(${r.repoInfo_}) has already been deleted.`),IC(r),delete n[r.key]}function zC(r,e,n,s){let l=xc[e.name];l||(l={},xc[e.name]=l);let u=l[r.toURLString()];return u&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new gC(r,MC,n,s),l[r.toURLString()]=u,u}class VC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_C(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function WC(r=Vc(),e){const n=Pr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=u0("database");s&&BC(n,...s)}return n}function BC(r,e,n,s={}){r=lt(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&er(s,u.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new nl(nl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:c0(s.mockUserToken,r.app.options.projectId);d=new nl(f)}Ps(e)&&pg(e),FC(u,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(r){bE(yi),nn(new qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return UC(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Ot(Qp,Yp,r),Ot(Qp,Yp,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};vn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};HC();var $C="firebase",GC="12.17.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot($C,GC,"app");const U_="@firebase/installations",_d="0.6.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=1e4,z_=`w:${_d}`,V_="FIS_v2",qC="https://firebaseinstallations.googleapis.com/v1",KC=3600*1e3,QC="installations",YC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kr=new Rr(QC,YC,JC);function W_(r){return r instanceof sn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_({projectId:r}){return`${qC}/projects/${r}/installations`}function H_(r){return{token:r.token,requestStatus:2,expiresIn:ZC(r.expiresIn),creationTime:Date.now()}}async function $_(r,e){const s=(await e.json()).error;return kr.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function G_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function XC(r,{refreshToken:e}){const n=G_(r);return n.append("Authorization",eT(e)),n}async function q_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function ZC(r){return Number(r.replace("s","000"))}function eT(r){return`${V_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=B_(r),l=G_(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:V_,appId:r.appId,sdkVersion:z_},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:H_(g.authToken)}}else throw await $_("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^[cdef][\w-]{21}$/,Rc="";function iT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=sT(r);return rT.test(n)?n:Rc}catch{return Rc}}function sT(r){return nT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;function Y_(r,e){const n=Hl(r);J_(n,e),oT(n,e)}function J_(r,e){const n=Q_.get(r);if(n)for(const s of n)s(e)}function oT(r,e){const n=lT();n&&n.postMessage({key:r,fid:e}),aT()}let Sr=null;function lT(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=r=>{J_(r.data.key,r.data.fid)}),Sr}function aT(){Q_.size===0&&Sr&&(Sr.close(),Sr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebase-installations-database",cT=1,Nr="firebase-installations-store";let lc=null;function yd(){return lc||(lc=_g(uT,cT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Nr)}}})),lc}async function Il(r,e){const n=Hl(r),l=(await yd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&Y_(r,e.fid),e}async function X_(r){const e=Hl(r),s=(await yd()).transaction(Nr,"readwrite");await s.objectStore(Nr).delete(e),await s.done}async function $l(r,e){const n=Hl(r),l=(await yd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&Y_(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(r){let e;const n=await $l(r.appConfig,s=>{const l=dT(s),u=hT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Rc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dT(r){const e=r||{fid:iT(),registrationStatus:0};return Z_(e)}function hT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pT(r)}:{installationEntry:e}}async function fT(r,e){try{const n=await tT(r,e);return Il(r.appConfig,n)}catch(n){throw W_(n)&&n.customData.serverCode===409?await X_(r.appConfig):await Il(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pT(r){let e=await Rm(r.appConfig);for(;e.registrationStatus===1;)await K_(100),e=await Rm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await vd(r);return s||n}return e}function Rm(r){return $l(r,e=>{if(!e)throw kr.create("installation-not-found");return Z_(e)})}function Z_(r){return mT(r)?{fid:r.fid,registrationStatus:0}:r}function mT(r){return r.registrationStatus===1&&r.registrationTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT({appConfig:r,heartbeatServiceProvider:e},n){const s=_T(r,n),l=XC(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:z_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return H_(g)}else throw await $_("Generate Auth Token",m)}function _T(r,{fid:e}){return`${B_(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(r,e=!1){let n;const s=await $l(r.appConfig,u=>{if(!ey(u))throw kr.create("not-registered");const d=u.authToken;if(!e&&wT(d))return u;if(d.requestStatus===1)return n=yT(r,e),u;{if(!navigator.onLine)throw kr.create("app-offline");const f=ST(u);return n=vT(r,f),f}});return n?await n:s.authToken}async function yT(r,e){let n=await Pm(r.appConfig);for(;n.authToken.requestStatus===1;)await K_(100),n=await Pm(r.appConfig);const s=n.authToken;return s.requestStatus===0?wd(r,e):s}function Pm(r){return $l(r,e=>{if(!ey(e))throw kr.create("not-registered");const n=e.authToken;return IT(n)?{...e,authToken:{requestStatus:0}}:e})}async function vT(r,e){try{const n=await gT(r,e),s={...e,authToken:n};return await Il(r.appConfig,s),n}catch(n){if(W_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X_(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Il(r.appConfig,s)}throw n}}function ey(r){return r!==void 0&&r.registrationStatus===2}function wT(r){return r.requestStatus===2&&!ET(r)}function ET(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+KC}function ST(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function IT(r){return r.requestStatus===1&&r.requestTime+j_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(r){const e=r,{installationEntry:n,registrationPromise:s}=await vd(e);return s?s.catch(console.error):wd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(r,e=!1){const n=r;return await kT(n),(await wd(n,e)).token}async function kT(r){const{registrationPromise:e}=await vd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(r){if(!r||!r.options)throw ac("App Configuration");if(!r.name)throw ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw ac(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function ac(r){return kr.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="installations",xT="installations-internal",RT=r=>{const e=r.getProvider("app").getImmediate(),n=NT(e),s=Pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},PT=r=>{const e=r.getProvider("app").getImmediate(),n=Pr(e,ty).getImmediate();return{getId:()=>CT(n),getToken:l=>TT(n,l)}};function AT(){nn(new qt(ty,RT,"PUBLIC")),nn(new qt(xT,PT,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */AT();Ot(U_,_d);Ot(U_,_d,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="analytics",OT="firebase_id",DT="origin",bT=60*1e3,LT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ed="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new bl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Rr("analytics","Analytics",MT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(r){if(!r.startsWith(Ed)){const e=Ct.create("invalid-gtag-resource",{gtagURL:r});return st.warn(e.message),""}return r}function ny(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function UT(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function jT(r,e){const n=UT("firebase-js-sdk-policy",{createScriptURL:FT}),s=document.createElement("script"),l=`${Ed}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function zT(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function VT(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const m=(await ny(n)).find(g=>g.measurementId===l);m&&await e[m.appId]}}catch(f){st.error(f)}r("config",l,u)}async function WT(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await ny(n);for(const m of d){const g=f.find(w=>w.measurementId===m),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){st.error(u)}}function BT(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,m]=d;await WT(r,e,n,f,m)}else if(u==="config"){const[f,m]=d;await VT(r,e,n,s,f,m)}else if(u==="consent"){const[f,m]=d;r("consent",f,m)}else if(u==="get"){const[f,m,g]=d;r("get",f,m,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){st.error(f)}}return l}function HT(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=BT(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function $T(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ed)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=30,qT=1e3;class KT{constructor(e={},n=qT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ry=new KT;function QT(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function YT(r){var d;const{appId:e,apiKey:n}=r,s={method:"GET",headers:QT(n)},l=LT.replace("{app-id}",e),u=await fetch(l,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();(d=m.error)!=null&&d.message&&(f=m.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function JT(r,e=ry,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw Ct.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw Ct.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ek;return setTimeout(async()=>{f.abort()},bT),iy({appId:s,apiKey:l,measurementId:u},d,f,e)}async function iy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=ry){var f;const{appId:u,measurementId:d}=r;try{await XT(s,e)}catch(m){if(d)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw m}try{const m=await YT(r);return l.deleteThrottleMetadata(u),m}catch(m){const g=m;if(!ZT(g)){if(l.deleteThrottleMetadata(u),d)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:d};throw m}const E=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?jp(n,l.intervalMillis,GT):jp(n,l.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return l.setThrottleMetadata(u,w),st.debug(`Calling attemptFetch again in ${E} millis`),iy(r,w,s,l)}}function XT(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZT(r){if(!(r instanceof sn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class ek{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d={...s,send_to:u};r("event",n,d)}}async function nk(r,e,n,s){if(s&&s.global){const l={};for(const u of Object.keys(n))l[`user_properties.${u}`]=n[u];return r("set",l),Promise.resolve()}else{const l=await e;r("config",l,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(){if(Fc())try{await Uc()}catch(r){return st.warn(Ct.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return st.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ik(r,e,n,s,l,u,d){const f=JT(r);f.then(I=>{n[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>st.error(I)),e.push(f);const m=rk().then(I=>{if(I)return s.getId()}),[g,E]=await Promise.all([f,m]);$T(u)||jT(u,g.measurementId),l("js",new Date);const w=(d==null?void 0:d.config)??{};return w[DT]="firebase",w.update=!0,E!=null&&(w[OT]=E),l("config",g.measurementId,w),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Am=[];const Om={};let uc="dataLayer",ok="gtag",Dm,Sd,bm=!1;function lk(){const r=[];if(Mc()&&r.push("This is a browser extension environment."),hg()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});st.warn(n.message)}}function ak(r,e,n){lk();const s=r.options.appId;if(!s)throw Ct.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(ai[s]!=null)throw Ct.create("already-exists",{id:s});if(!bm){zT(uc);const{wrappedGtag:u,gtagCore:d}=HT(ai,Am,Om,uc,ok);Sd=u,Dm=d,bm=!0}return ai[s]=ik(r,Am,Om,e,Dm,uc,n),new sk(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(r=Vc()){r=lt(r);const e=Pr(r,Cl);return e.isInitialized()?e.getImmediate():ck(r)}function ck(r,e={}){const n=Pr(r,Cl);if(n.isInitialized()){const l=n.getImmediate();if(er(e,n.getOptions()))return l;throw Ct.create("already-initialized")}return n.initialize({options:e})}async function dk(){if(Mc()||!hg()||!Fc())return!1;try{return await Uc()}catch{return!1}}function hk(r,e,n){r=lt(r),nk(Sd,ai[r.app.options.appId],e,n).catch(s=>st.error(s))}function fk(r,e,n,s){r=lt(r),tk(Sd,ai[r.app.options.appId],e,n,s).catch(l=>st.error(l))}const Lm="@firebase/analytics",Mm="0.10.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(){nn(new qt(Cl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return ak(s,l,n)},"PUBLIC")),nn(new qt("analytics-internal",r,"PRIVATE")),Ot(Lm,Mm),Ot(Lm,Mm,"esm2020");function r(e){try{const n=e.getProvider(Cl).getImmediate();return{logEvent:(s,l,u)=>fk(n,s,l,u),setUserProperties:(s,l)=>hk(n,s,l)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}pk();function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=sy,oy=new Rr("auth","Firebase",sy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new bl("@firebase/auth");function ly(r,...e){Tl.logLevel<=he.WARN&&Tl.warn(`Auth (${yi}): ${r}`,...e)}function rl(r,...e){Tl.logLevel<=he.ERROR&&Tl.error(`Auth (${yi}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(r,...e){throw Id(r,...e)}function en(r,...e){return Id(r,...e)}function ay(r,e,n){const s={...mk(),[e]:n};return new Rr("auth","Firebase",s).create(e,{appName:r.name})}function Zn(r){return ay(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return oy.create(r,...e)}function X(r,e,...n){if(!r)throw Id(e,...n)}function _n(r){const e="INTERNAL ASSERTION FAILED: "+r;throw rl(e),new Error(e)}function In(r,e){r||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function gk(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||Mc()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Lc()||dg()}get(){return _k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(r,e){In(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ek=new Fs(3e4,6e4);function Gl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Si(r,e,n,s,l={}){return cy(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=_i({...d,key:r.config.apiKey}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return d0()||(g.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Ps(r.emulatorConfig.host)&&(g.credentials="include"),uy.fetch()(await hy(r,r.config.apiHost,n,f),g)})}async function cy(r,e,n){r._canInitEmulator=!1;const s={...vk,...e};try{const l=new Sk(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw el(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw el(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw el(r,"user-disabled",d);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ay(r,E,g);Sn(r,E)}}catch(l){if(l instanceof sn)throw l;Sn(r,"network-request-failed",{message:String(l)})}}async function dy(r,e,n,s,l={}){const u=await Si(r,e,n,s,l);return"mfaPendingCredential"in u&&Sn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function hy(r,e,n,s){const l=`${e}${n}?${s}`,u=r,d=u.config.emulator?Cd(r.config,l):`${r.config.apiScheme}://${l}`;return wk.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class Sk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),Ek.get())})}}function el(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=en(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(r,e){return Si(r,"POST","/v1/accounts:delete",e)}async function kl(r,e){return Si(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(r,e=!1){const n=lt(r),s=await n.getIdToken(e),l=Td(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ys(cc(l.auth_time)),issuedAtTime:ys(cc(l.iat)),expirationTime:ys(cc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cc(r){return Number(r)*1e3}function Td(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const l=al(n);return l?JSON.parse(l):(rl("Failed to decode base64 JWT payload"),null)}catch(l){return rl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Um(r){const e=Td(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&Tk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Tk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(r){var w;const e=r.auth,n=await r.getIdToken(),s=await Rs(r,kl(e,{idToken:n}));X(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=(w=l.providerUserInfo)!=null&&w.length?fy(l.providerUserInfo):[],d=xk(r.providerData,u),f=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,E)}async function Nk(r){const e=lt(r);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xk(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function fy(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(r,e){const n=await cy(r,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=await hy(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return r.emulatorConfig&&Ps(r.emulatorConfig.host)&&(m.credentials="include"),uy.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pk(r,e){return Si(r,"POST","/v2/accounts:revokeToken",Gl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Rk(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new ui;return s&&(X(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ac(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Rs(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:w,emailVerified:I,isAnonymous:L,providerData:F,stsTokenManager:H}=n;X(w&&H,e,"internal-error");const G=ui.fromJSON(this.name,H);X(typeof w=="string",e,"internal-error"),$n(s,e.name),$n(l,e.name),X(typeof I=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),$n(u,e.name),$n(d,e.name),$n(f,e.name),$n(m,e.name),$n(g,e.name),$n(E,e.name);const fe=new $t({uid:w,auth:e,email:l,emailVerified:I,displayName:s,isAnonymous:L,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:G,createdAt:g,lastLoginAt:E});return F&&Array.isArray(F)&&(fe.providerData=F.map(Ae=>({...Ae}))),m&&(fe._redirectEventId=m),fe}static async _fromIdTokenResponse(e,n,s=!1){const l=new ui;l.updateFromServerResponse(n);const u=new $t({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Nl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?fy(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ui;f.updateFromIdToken(s);const m=new $t({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Map;function yn(r){In(r instanceof Function,"Expected a class definition");let e=jm.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,jm.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const zm=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(r,e,n){return`firebase:${r}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=il(this.userKey,l.apiKey,u),this.fullPersistenceKey=il("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kl(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(yn(zm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||yn(zm);const d=il(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const E=await g._get(d);if(E){let w;if(typeof E=="string"){const I=await kl(e,{idToken:E}).catch(()=>{});if(!I)break;w=await $t._fromGetAccountInfoResponse(e,I,E)}else w=$t._fromJSON(e,E);g!==u&&(f=w),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ci(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ci(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(my(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wy(e))return"Blackberry";if(Ey(e))return"Webos";if(gy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function my(r=ot()){return/firefox\//i.test(r)}function gy(r=ot()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(r=ot()){return/crios\//i.test(r)}function yy(r=ot()){return/iemobile/i.test(r)}function vy(r=ot()){return/android/i.test(r)}function wy(r=ot()){return/blackberry/i.test(r)}function Ey(r=ot()){return/webos/i.test(r)}function kd(r=ot()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ak(r=ot()){var e;return kd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Ok(){return h0()&&document.documentMode===10}function Sy(r=ot()){return kd(r)||vy(r)||Ey(r)||wy(r)||/windows phone/i.test(r)||yy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(r,e=[]){let n;switch(r){case"Browser":n=Vm(ot());break;case"Worker":n=`${Vm(ot())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(r,e={}){return Si(r,"GET","/v2/passwordPolicy",Gl(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=6;class Mk{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Lk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new Dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kl(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Vt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Zn(this));const n=e?lt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bk(this),n=new Mk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Pk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ly(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ql(r){return lt(r)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uk(r){Nd=r}function jk(r){return Nd.loadJS(r)}function zk(){return Nd.gapiScript}function Vk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(r,e){const n=Pr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(er(u,e??{}))return l;Sn(l,"already-initialized")}return n.initialize({options:e})}function Bk(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Hk(r,e,n){const s=ql(r);X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Cy(e),{host:d,port:f}=$k(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},E=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(er(g,s.config.emulator)&&er(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ps(d)?pg(`${u}//${d}${m}`):Gk()}function Cy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $k(r){const e=Cy(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Bm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Bm(d)}}}function Bm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Gk(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(r,e){return dy(r,"POST","/v1/accounts:signInWithIdp",Gl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="http://localhost";class xr extends Ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new xr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends ky{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Us{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Us{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Us{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(r,e){return dy(r,"POST","/v1/accounts:signUp",Gl(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await $t._fromIdTokenResponse(e,s,l),d=Hm(s);return new ir({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Hm(s);return new ir({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Hm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(r){var l;if(Vt(r.app))return Promise.reject(Zn(r));const e=ql(r);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new ir({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Kk(e,{returnSecureToken:!0}),s=await ir._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends sn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new xl(e,n,s,l)}}function Ny(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(r,u,e,s):u})}async function Yk(r,e,n=!1){const s=await Rs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ir._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(r,e,n=!1){const{auth:s}=r;if(Vt(s.app))return Promise.reject(Zn(s));const l="reauthenticate";try{const u=await Rs(r,Ny(s,l,e,r),n);X(u.idToken,s,"internal-error");const d=Td(u.idToken);X(d,s,"internal-error");const{sub:f}=d;return X(r.uid===f,s,"user-mismatch"),ir._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(r,e,n=!1){if(Vt(r.app))return Promise.reject(Zn(r));const s="signIn",l=await Ny(r,s,e),u=await ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function Zk(r,e,n,s){return lt(r).onIdTokenChanged(e,n,s)}function eN(r,e,n){return lt(r).beforeAuthStateChanged(e,n)}const Rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=1e3,nN=10;class Ry extends xy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Ok()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,nN):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ry.type="LOCAL";const rN=Ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends xy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Py.type="SESSION";const Ay=Py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Kl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await iN(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=xd("",20);l.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(w){const I=w;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(I.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function oN(r){tn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function lN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function uN(){return Oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="firebaseLocalStorageDb",cN=1,Pl="firebaseLocalStorage",by="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(r,e){return r.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function dN(){const r=indexedDB.deleteDatabase(Dy);return new js(r).toPromise()}function Ly(){const r=indexedDB.open(Dy,cN);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Pl,{keyPath:by})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Pl)?e(s):(s.close(),await dN(),e(await Ly()))})})}async function $m(r,e,n){const s=Ql(r,!0).put({[by]:e,value:n});return new js(s).toPromise()}async function hN(r,e){const n=Ql(r,!1).get(e),s=await new js(n).toPromise();return s===void 0?null:s.value}function Gm(r,e){const n=Ql(r,!0).delete(e);return new js(n).toPromise()}const fN=800,pN=3;class My{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=Ly(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(this.isHiding||n++>pN)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(uN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await lN(),!this.activeServiceWorker)return;this.sender=new sN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $m(e,Rl,"1"),await Gm(e,Rl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$m(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(l=>{const u=Ql(l,!1).getAll();return new js(u).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}catch(e){return this.isHiding||ly(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}My.type="LOCAL";const mN=My;new Fs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(r,e){return e?yn(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _N(r){return Xk(r.auth,new Rd(r),r.bypassAuthState)}function yN(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),Jk(n,new Rd(r),r.bypassAuthState)}async function vN(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),Yk(n,new Rd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _N;case"linkViaPopup":case"linkViaRedirect":return vN;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:Sn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Fs(2e3,1e4);class si extends Fy{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wN.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="pendingRedirect",sl=new Map;class SN extends Fy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const s=await IN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IN(r,e){const n=kN(e),s=TN(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function CN(r,e){sl.set(r._key(),e)}function TN(r){return yn(r._redirectPersistence)}function kN(r){return il(EN,r.config.apiKey,r.name)}async function NN(r,e,n=!1){if(Vt(r.app))return Promise.reject(Zn(r));const s=ql(r),l=gN(s,e),d=await new SN(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=600*1e3;class RN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uy(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xN&&this.cachedEventUids.clear(),this.cachedEventUids.has(qm(e))}saveEventToCache(e){this.cachedEventUids.add(qm(e)),this.lastProcessedEventTime=Date.now()}}function qm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Uy({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uy(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(r,e={}){return Si(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DN=/^https?/;async function bN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await AN(r);for(const n of e)try{if(LN(n))return}catch{}Sn(r,"unauthorized-domain")}function LN(r){const e=Pc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!DN.test(n))return!1;if(ON.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new Fs(3e4,6e4);function Km(){const r=tn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function FN(r){return new Promise((e,n)=>{var l,u,d;function s(){Km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(en(r,"network-request-failed"))},timeout:MN.get()})}if((u=(l=tn().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=tn().gapi)!=null&&d.load)s();else{const f=Vk("iframefcb");return tn()[f]=()=>{gapi.load?s():n(en(r,"network-request-failed"))},jk(`${zk()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw ol=null,e})}let ol=null;function UN(r){return ol=ol||FN(r),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new Fs(5e3,15e3),zN="__/auth/iframe",VN="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Cd(e,VN):`https://${r.config.authDomain}/${zN}`,s={apiKey:e.apiKey,appName:r.name,v:yi},l=BN.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${_i(s).slice(1)}`}async function $N(r){const e=await UN(r),n=tn().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:HN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=en(r,"network-request-failed"),f=tn().setTimeout(()=>{u(d)},jN.get());function m(){tn().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,KN=600,QN="_blank",YN="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JN(r,e,n,s=qN,l=KN){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...GN,width:s.toString(),height:l.toString(),top:u,left:d},g=ot().toLowerCase();n&&(f=_y(g)?QN:n),my(g)&&(e=e||YN,m.scrollbars="yes");const E=Object.entries(m).reduce((I,[L,F])=>`${I}${L}=${F},`,"");if(Ak(g)&&f!=="_self")return XN(e||"",f),new Qm(null);const w=window.open(e||"",f,E);X(w,r,"popup-blocked");try{w.focus()}catch{}return new Qm(w)}function XN(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="__/auth/handler",e1="emulator/auth/handler",t1=encodeURIComponent("fac");async function Ym(r,e,n,s,l,u){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof ky){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",hc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))d[E]=w}if(e instanceof Us){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(d.scopes=E.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await r._getAppCheckToken(),g=m?`#${t1}=${encodeURIComponent(m)}`:"";return`${n1(r)}?${_i(f).slice(1)}${g}`}function n1({config:r}){return r.emulator?Cd(r,e1):`https://${r.authDomain}/${ZN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class r1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=NN,this._overrideRedirectResult=CN}async _openPopup(e,n,s,l){var d;In((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await Ym(e,n,s,Pc(),l);return JN(e,u,xd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Ym(e,n,s,Pc(),l);return oN(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(In(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $N(e),s=new RN(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[dc];u!==void 0&&n(!!u),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sy()||gy()||kd()}}const i1=r1;var Jm="@firebase/auth",Xm="1.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l1(r){nn(new qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;X(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(r)},g=new Fk(s,l,u,m);return Bk(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nn(new qt("auth-internal",e=>{const n=ql(e.getProvider("auth").getImmediate());return(s=>new s1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Jm,Xm,o1(r)),Ot(Jm,Xm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=300,u1=cg("authIdTokenMaxAge")||a1;let Zm=null;const c1=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u1)return;const l=n==null?void 0:n.token;Zm!==l&&(Zm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function d1(r=Vc()){const e=Pr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Wk(r,{popupRedirectResolver:i1,persistence:[mN,rN,Ay]}),s=cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=c1(u.toString());eN(n,d,()=>d(n.currentUser)),Zk(n,f=>d(f))}}const l=ag("auth");return l&&Hk(n,`http://${l}`),n}function h1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Uk({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=en("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",h1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l1("Browser");const f1={apiKey:"AIzaSyDMsa3BvIBTYDR0isLVvjAht1aTKPgz5JA",authDomain:"expense-splitter-54b84.firebaseapp.com",databaseURL:"https://expense-splitter-54b84-default-rtdb.europe-west1.firebasedatabase.app",projectId:"expense-splitter-54b84",storageBucket:"expense-splitter-54b84.firebasestorage.app",messagingSenderId:"355873212971",appId:"1:355873212971:web:28b15a101c7e4a79c7386e",measurementId:"G-EY0SF94DPK"},Pd=yg(f1),eg=WC(Pd),p1=d1(Pd),tg=Qk(p1);dk().then(r=>{r&&uk(Pd)});const tl={async get(r){try{await tg;const n=await bC(xm(eg,r));if(n.exists()){const s=n.val();return localStorage.setItem(r,s),{value:s}}}catch(n){console.error("Firebase indisponible, lecture depuis le cache local",n)}const e=localStorage.getItem(r);return e===null?null:{value:e}},async set(r,e){localStorage.setItem(r,e);try{await tg,await DC(xm(eg,r),e)}catch(n){console.error("Firebase indisponible, sauvegarde locale uniquement",n)}}};function m1(){const[r,e]=et.useState([]),[n,s]=et.useState([]),[l,u]=et.useState("home"),[d,f]=et.useState(""),[m,g]=et.useState({}),[E,w]=et.useState(""),[I,L]=et.useState(""),[F,H]=et.useState([]),[G,fe]=et.useState({});et.useEffect(()=>{Ae()},[]);const Ae=async()=>{try{const k=await tl.get("families-v2"),N=await tl.get("expenses-v2");k!=null&&k.value&&e(JSON.parse(k.value)),N!=null&&N.value&&s(JSON.parse(N.value))}catch{console.log("Première utilisation")}},Re=async k=>{e(k);try{await tl.set("families-v2",JSON.stringify(k))}catch(N){console.error("Échec de la sauvegarde des familles",N)}},ke=async k=>{s(k);try{await tl.set("expenses-v2",JSON.stringify(k))}catch(N){console.error("Échec de la sauvegarde des dépenses",N)}},yt=()=>{if(d.trim()){const k={id:Date.now(),name:d,members:[]},N=[...r,k];Re(N),f("")}},Be=k=>{const N=r.filter(y=>y.id!==k);Re(N)},Qe=k=>{var y;const N=m[k];if((y=N==null?void 0:N.name)!=null&&y.trim()){const x=r.map(W=>W.id===k?{...W,members:[...W.members,{id:Date.now(),name:N.name,shares:N.shares||1}]}:W);Re(x),g({...m,[k]:{name:"",shares:1}})}},at=(k,N)=>{const y=r.map(x=>x.id===k?{...x,members:x.members.filter(W=>W.id!==N)}:x);Re(y)},Kt=k=>{if(F.includes(k)){H(F.filter(y=>y!==k));const N={...G};delete N[k],fe(N)}else H([...F,k]),fe({...G,[k]:[]})},Dt=(k,N)=>{const y=G[k]||[];y.includes(N)?fe({...G,[k]:y.filter(x=>x!==N)}):fe({...G,[k]:[...y,N]})},on=()=>{const k=Object.values(G).flat();if(E&&I&&F.length>0&&k.length>0){const N={id:Date.now(),amount:parseFloat(E),payer:I,families:F,presentPeople:G,date:new Date().toLocaleDateString("fr-FR")},y=[...n,N];ke(y),w(""),L(""),H([]),fe({}),u("home")}},Tt=k=>{const N=n.filter(y=>y.id!==k);ke(N)},He=()=>{const k={};return r.forEach(N=>{N.members.forEach(y=>{k[y.id]={name:y.name,familyName:N.name,familyId:N.id,balance:0}})}),n.forEach(N=>{const y=String(N.payer);k[y]&&(k[y].balance+=N.amount);let x=0;const W=[];Object.entries(N.presentPeople).forEach(([ee,Z])=>{Z.forEach(ie=>{const te=r.find(Ge=>Ge.id===parseInt(ee)),de=te==null?void 0:te.members.find(Ge=>Ge.id===ie);de&&(x+=de.shares,W.push({memberId:String(ie),shares:de.shares}))})});const Q=x>0?N.amount/x:0;W.forEach(({memberId:ee,shares:Z})=>{k[ee]&&(k[ee].balance-=Q*Z)})}),k},Oe=()=>{const k=new Set(r.flatMap(N=>N.members.map(y=>String(y.id))));return n.filter(N=>{const y=k.has(String(N.payer)),W=Object.values(N.presentPeople).flat().map(String).some(Q=>k.has(Q));return!y||!W})},vt=()=>{const k={...He()},N=[];for(;;){const y=Object.entries(k).filter(([,te])=>te.balance<-.01),x=Object.entries(k).filter(([,te])=>te.balance>.01);if(y.length===0||x.length===0)break;const[W,Q]=y[0],[ee,Z]=x[0],ie=Math.min(-Q.balance,Z.balance);N.push({from:Q.name,fromFamily:Q.familyName,to:Z.name,toFamily:Z.familyName,amount:ie.toFixed(2)}),k[W].balance+=ie,k[ee].balance-=ie}return N},$e=()=>{const k=He(),N={};return r.forEach(y=>{N[y.id]={name:y.name,balance:0}}),Object.values(k).forEach(({familyId:y,balance:x})=>{N[y]&&(N[y].balance+=x)}),N},_e=()=>{const k=Object.fromEntries(Object.entries($e()).map(([y,x])=>[y,{...x}])),N=[];for(;;){const y=Object.entries(k).filter(([,te])=>te.balance<-.01),x=Object.entries(k).filter(([,te])=>te.balance>.01);if(y.length===0||x.length===0)break;const[W,Q]=y[0],[ee,Z]=x[0],ie=Math.min(-Q.balance,Z.balance);N.push({from:Q.name,to:Z.name,amount:ie.toFixed(2)}),k[W].balance+=ie,k[ee].balance-=ie}return N},U=He();if(l==="home")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsx("h1",{className:"text-3xl font-bold text-indigo-900 mb-6 text-center",children:"💰 Partage Vacances"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-xl font-bold text-indigo-900 mb-4",children:"👥 Mes Familles"}),r.length===0?P.jsx("p",{className:"text-indigo-600 text-center py-4 text-sm",children:"Créez une famille pour commencer"}):P.jsx("div",{className:"space-y-4 mb-6",children:r.map(k=>{var N,y;return P.jsxs("div",{className:"border-2 border-indigo-300 rounded-lg p-4 bg-indigo-50",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsx("h3",{className:"font-bold text-indigo-900 text-lg",children:k.name}),P.jsx("button",{onClick:()=>Be(k.id),className:"text-red-500 hover:bg-red-100 p-2 rounded",children:P.jsx(Ku,{size:18})})]}),k.members.length===0?P.jsx("p",{className:"text-indigo-600 text-sm italic mb-3",children:"Aucun membre pour l'instant"}):P.jsx("div",{className:"bg-white rounded p-2 mb-3 space-y-1",children:k.members.map(x=>P.jsxs("div",{className:"flex items-center justify-between text-sm",children:[P.jsxs("div",{children:[P.jsx("span",{className:"font-semibold text-indigo-900",children:x.name}),P.jsxs("span",{className:"text-indigo-600 ml-2",children:["(",x.shares," ",x.shares>1?"parts":"part",")"]})]}),P.jsx("button",{onClick:()=>at(k.id,x.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]},x.id))}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-3",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900 mb-2",children:"Ajouter une personne :"}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("input",{type:"text",placeholder:"Nom",value:((N=m[k.id])==null?void 0:N.name)||"",onChange:x=>{var W;return g({...m,[k.id]:{...m[k.id],name:x.target.value,shares:((W=m[k.id])==null?void 0:W.shares)||1}})},className:"w-full px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("select",{value:((y=m[k.id])==null?void 0:y.shares)||1,onChange:x=>{var W;return g({...m,[k.id]:{...m[k.id],shares:parseInt(x.target.value),name:((W=m[k.id])==null?void 0:W.name)||""}})},className:"flex-1 px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[1,2,3,4,5,6].map(x=>P.jsxs("option",{value:x,children:[x," ",x>1?"parts":"part"]},x))}),P.jsx("button",{onClick:()=>Qe(k.id),className:"bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 flex items-center gap-1",children:P.jsx(Mp,{size:18})})]})]})]})]},k.id)})}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-4 space-y-2",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900",children:"Nouvelle famille/groupe :"}),P.jsx("input",{type:"text",placeholder:"Ex: Famille Dupont, Amis...",value:d,onChange:k=>f(k.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("button",{onClick:yt,className:"w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-bold",children:[P.jsx(Mp,{size:20})," Créer"]})]})]}),P.jsxs("div",{className:"space-y-3 mb-4",children:[P.jsxs("button",{onClick:()=>{w(""),L(""),H([]),fe({}),u("add-expense")},disabled:r.length===0||r.some(k=>k.members.length===0),className:"w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold text-lg",children:[P.jsx(Jw,{size:24})," Enregistrer une dépense"]}),P.jsx("button",{onClick:()=>u("summary"),disabled:n.length===0,className:"w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold",children:"📊 Voir le récapitulatif"})]})]})});if(l==="add-expense"){const k=r.flatMap(y=>y.members),N=r.filter(y=>F.includes(y.id));return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Lp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"💳 Enregistrer une dépense"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Montant (€)"}),P.jsx("input",{type:"number",placeholder:"0.00",value:E,onChange:y=>w(y.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",step:"0.01"})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui a payé ?"}),P.jsxs("select",{value:I,onChange:y=>L(y.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[P.jsx("option",{value:"",children:"Sélectionner..."}),k.map(y=>{const x=r.find(W=>W.members.some(Q=>Q.id===y.id));return P.jsxs("option",{value:y.id,children:[y.name," (",x.name,")"]},y.id)})]})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Quelles familles étaient présentes ?"}),P.jsx("div",{className:"space-y-2",children:r.map(y=>P.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-indigo-50",children:[P.jsx("input",{type:"checkbox",checked:F.includes(y.id),onChange:()=>Kt(y.id),className:"w-5 h-5 rounded text-indigo-600"}),P.jsx("span",{className:"text-indigo-900 font-semibold",children:y.name})]},y.id))})]}),N.length>0&&P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui était à table ?"}),P.jsx("div",{className:"space-y-3",children:N.map(y=>P.jsxs("div",{className:"border-l-4 border-indigo-400 pl-3",children:[P.jsx("p",{className:"font-semibold text-indigo-900 mb-2 text-sm",children:y.name}),P.jsx("div",{className:"space-y-1 ml-2",children:y.members.map(x=>P.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[P.jsx("input",{type:"checkbox",checked:(G[y.id]||[]).includes(x.id),onChange:()=>Dt(y.id,x.id),className:"w-4 h-4 rounded text-indigo-600"}),P.jsxs("span",{className:"text-sm text-indigo-900",children:[x.name,P.jsxs("span",{className:"text-xs text-indigo-600 ml-1",children:["(",x.shares," ",x.shares>1?"parts":"part",")"]})]})]},x.id))})]},y.id))})]}),P.jsx("button",{onClick:on,disabled:!E||!I||F.length===0||Object.values(G).flat().length===0,className:"w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-bold text-lg mt-4",children:"✓ Enregistrer"})]})]})})}if(l==="summary")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Lp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"📊 Récapitulatif"}),Oe().length>0&&P.jsxs("div",{className:"bg-red-50 border-l-4 border-red-400 rounded-lg p-4 mb-4",children:[P.jsx("p",{className:"text-red-700 font-bold text-sm mb-1",children:"⚠️ Dépenses ignorées dans les soldes"}),P.jsxs("p",{className:"text-red-700 text-sm",children:[Oe().length," dépense",Oe().length>1?"s":""," (",Oe().map(k=>`${k.amount.toFixed(2)}€`).join(", "),") fait",Oe().length>1?"ent":""," référence à une personne supprimée depuis. Supprime-la",Oe().length>1?"s":"",' dans "Toutes les dépenses" ci-dessous et recrée-la',Oe().length>1?"s":""," si besoin."]})]}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"Soldes"}),P.jsx("div",{className:"space-y-2",children:Object.entries(U).map(([k,N])=>P.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:N.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:N.familyName})]}),P.jsxs("span",{className:`text-lg font-bold ${N.balance>0?"text-green-600":N.balance<0?"text-red-600":"text-gray-600"}`,children:[N.balance>0?"+":"",N.balance.toFixed(2),"€"]})]},k))})]}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"💸 À faire"}),vt().length>0?P.jsx("div",{className:"space-y-2",children:vt().map((k,N)=>P.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded",children:P.jsxs("p",{className:"text-indigo-900 text-sm",children:[P.jsx("span",{className:"font-bold",children:k.from})," (",k.fromFamily,")",P.jsx("br",{}),"paie ",P.jsxs("span",{className:"font-bold text-lg text-yellow-600",children:[k.amount,"€"]})," à",P.jsx("br",{}),P.jsx("span",{className:"font-bold",children:k.to})," (",k.toFamily,")"]})},N))}):P.jsx("p",{className:"text-green-600 font-semibold",children:"✓ Tout est réglé !"})]}),r.length>1&&P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"🏠 Entre familles"}),P.jsx("div",{className:"space-y-2 mb-4",children:Object.entries($e()).map(([k,N])=>P.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:N.name}),P.jsxs("span",{className:`text-lg font-bold ${N.balance>0?"text-green-600":N.balance<0?"text-red-600":"text-gray-600"}`,children:[N.balance>0?"+":"",N.balance.toFixed(2),"€"]})]},k))}),_e().length>0?P.jsx("div",{className:"space-y-2",children:_e().map((k,N)=>P.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded",children:P.jsxs("p",{className:"text-indigo-900 text-sm",children:[P.jsx("span",{className:"font-bold",children:k.from})," doit"," ",P.jsxs("span",{className:"font-bold text-lg text-yellow-600",children:[k.amount,"€"]})," à"," ",P.jsx("span",{className:"font-bold",children:k.to})]})},N))}):P.jsx("p",{className:"text-green-600 font-semibold",children:"✓ Tout est réglé entre familles !"})]}),n.length>0&&P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"📝 Toutes les dépenses"}),P.jsx("div",{className:"space-y-2",children:n.map(k=>{const N=r.flatMap(y=>y.members).find(y=>y.id===k.payer);return P.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded text-sm",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:N==null?void 0:N.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:k.date})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"font-bold text-indigo-900",children:[k.amount.toFixed(2),"€"]}),P.jsx("button",{onClick:()=>Tt(k.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]})]},k.id)})})]})]})})}$w.createRoot(document.getElementById("root")).render(P.jsx(Uw.StrictMode,{children:P.jsx(m1,{})}));
