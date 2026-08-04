(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function ng(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bu={exports:{}},as={},Hu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Mw(){if(kp)return re;kp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function I(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function q(S,R,Y){this.props=S,this.context=R,this.refs=$,this.updater=Y||F}q.prototype.isReactComponent={},q.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},q.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function pe(){}pe.prototype=q.prototype;function Oe(S,R,Y){this.props=S,this.context=R,this.refs=$,this.updater=Y||F}var xe=Oe.prototype=new pe;xe.constructor=Oe,j(xe,q.prototype),xe.isPureReactComponent=!0;var Ne=Array.isArray,_t=Object.prototype.hasOwnProperty,Be={current:null},Ge={key:!0,ref:!0,__self:!0,__source:!0};function ot(S,R,Y){var ee,te={},ne=null,ce=null;if(R!=null)for(ee in R.ref!==void 0&&(ce=R.ref),R.key!==void 0&&(ne=""+R.key),R)_t.call(R,ee)&&!Ge.hasOwnProperty(ee)&&(te[ee]=R[ee]);var de=arguments.length-2;if(de===1)te.children=Y;else if(1<de){for(var Ee=Array(de),yt=0;yt<de;yt++)Ee[yt]=arguments[yt+2];te.children=Ee}if(S&&S.defaultProps)for(ee in de=S.defaultProps,de)te[ee]===void 0&&(te[ee]=de[ee]);return{$$typeof:r,type:S,key:ne,ref:ce,props:te,_owner:Be.current}}function Kt(S,R){return{$$typeof:r,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Dt(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function on(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return R[Y]})}var Ct=/\/+/g;function qe(S,R){return typeof S=="object"&&S!==null&&S.key!=null?on(""+S.key):R.toString(36)}function lt(S,R,Y,ee,te){var ne=typeof S;(ne==="undefined"||ne==="boolean")&&(S=null);var ce=!1;if(S===null)ce=!0;else switch(ne){case"string":case"number":ce=!0;break;case"object":switch(S.$$typeof){case r:case e:ce=!0}}if(ce)return ce=S,te=te(ce),S=ee===""?"."+qe(ce,0):ee,Ne(te)?(Y="",S!=null&&(Y=S.replace(Ct,"$&/")+"/"),lt(te,R,Y,"",function(yt){return yt})):te!=null&&(Dt(te)&&(te=Kt(te,Y+(!te.key||ce&&ce.key===te.key?"":(""+te.key).replace(Ct,"$&/")+"/")+S)),R.push(te)),1;if(ce=0,ee=ee===""?".":ee+":",Ne(S))for(var de=0;de<S.length;de++){ne=S[de];var Ee=ee+qe(ne,de);ce+=lt(ne,R,Y,Ee,te)}else if(Ee=I(S),typeof Ee=="function")for(S=Ee.call(S),de=0;!(ne=S.next()).done;)ne=ne.value,Ee=ee+qe(ne,de++),ce+=lt(ne,R,Y,Ee,te);else if(ne==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ce}function Tt(S,R,Y){if(S==null)return S;var ee=[],te=0;return lt(S,ee,"","",function(ne){return R.call(Y,ne,te++)}),ee}function O(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var U={current:null},N={transition:null},L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:N,ReactCurrentOwner:Be};function b(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Tt,forEach:function(S,R,Y){Tt(S,function(){R.apply(this,arguments)},Y)},count:function(S){var R=0;return Tt(S,function(){R++}),R},toArray:function(S){return Tt(S,function(R){return R})||[]},only:function(S){if(!Dt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=q,re.Fragment=n,re.Profiler=l,re.PureComponent=Oe,re.StrictMode=s,re.Suspense=m,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,re.act=b,re.cloneElement=function(S,R,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=j({},S.props),te=S.key,ne=S.ref,ce=S._owner;if(R!=null){if(R.ref!==void 0&&(ne=R.ref,ce=Be.current),R.key!==void 0&&(te=""+R.key),S.type&&S.type.defaultProps)var de=S.type.defaultProps;for(Ee in R)_t.call(R,Ee)&&!Ge.hasOwnProperty(Ee)&&(ee[Ee]=R[Ee]===void 0&&de!==void 0?de[Ee]:R[Ee])}var Ee=arguments.length-2;if(Ee===1)ee.children=Y;else if(1<Ee){de=Array(Ee);for(var yt=0;yt<Ee;yt++)de[yt]=arguments[yt+2];ee.children=de}return{$$typeof:r,type:S.type,key:te,ref:ne,props:ee,_owner:ce}},re.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},re.createElement=ot,re.createFactory=function(S){var R=ot.bind(null,S);return R.type=S,R},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:f,render:S}},re.isValidElement=Dt,re.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:O}},re.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},re.startTransition=function(S){var R=N.transition;N.transition={};try{S()}finally{N.transition=R}},re.unstable_act=b,re.useCallback=function(S,R){return U.current.useCallback(S,R)},re.useContext=function(S){return U.current.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S){return U.current.useDeferredValue(S)},re.useEffect=function(S,R){return U.current.useEffect(S,R)},re.useId=function(){return U.current.useId()},re.useImperativeHandle=function(S,R,Y){return U.current.useImperativeHandle(S,R,Y)},re.useInsertionEffect=function(S,R){return U.current.useInsertionEffect(S,R)},re.useLayoutEffect=function(S,R){return U.current.useLayoutEffect(S,R)},re.useMemo=function(S,R){return U.current.useMemo(S,R)},re.useReducer=function(S,R,Y){return U.current.useReducer(S,R,Y)},re.useRef=function(S){return U.current.useRef(S)},re.useState=function(S){return U.current.useState(S)},re.useSyncExternalStore=function(S,R,Y){return U.current.useSyncExternalStore(S,R,Y)},re.useTransition=function(){return U.current.useTransition()},re.version="18.3.1",re}var Np;function Oc(){return Np||(Np=1,Hu.exports=Mw()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function bw(){if(Rp)return as;Rp=1;var r=Oc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var w,v={},I=null,F=null;g!==void 0&&(I=""+g),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(F=m.ref);for(w in m)s.call(m,w)&&!u.hasOwnProperty(w)&&(v[w]=m[w]);if(f&&f.defaultProps)for(w in m=f.defaultProps,m)v[w]===void 0&&(v[w]=m[w]);return{$$typeof:e,type:f,key:I,ref:F,props:v,_owner:l.current}}return as.Fragment=n,as.jsx=d,as.jsxs=d,as}var Pp;function Fw(){return Pp||(Pp=1,Bu.exports=bw()),Bu.exports}var P=Fw(),Xe=Oc();const Uw=ng(Xe);var Jo={},$u={exports:{}},ft={},Gu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function zw(){return xp||(xp=1,(function(r){function e(N,L){var b=N.length;N.push(L);e:for(;0<b;){var S=b-1>>>1,R=N[S];if(0<l(R,L))N[S]=L,N[b]=R,b=S;else break e}}function n(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var L=N[0],b=N.pop();if(b!==L){N[0]=b;e:for(var S=0,R=N.length,Y=R>>>1;S<Y;){var ee=2*(S+1)-1,te=N[ee],ne=ee+1,ce=N[ne];if(0>l(te,b))ne<R&&0>l(ce,te)?(N[S]=ce,N[ne]=b,S=ne):(N[S]=te,N[ee]=b,S=ee);else if(ne<R&&0>l(ce,b))N[S]=ce,N[ne]=b,S=ne;else break e}}return L}function l(N,L){var b=N.sortIndex-L.sortIndex;return b!==0?b:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var m=[],g=[],w=1,v=null,I=3,F=!1,j=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(N){for(var L=n(g);L!==null;){if(L.callback===null)s(g);else if(L.startTime<=N)s(g),L.sortIndex=L.expirationTime,e(m,L);else break;L=n(g)}}function Ne(N){if($=!1,xe(N),!j)if(n(m)!==null)j=!0,O(_t);else{var L=n(g);L!==null&&U(Ne,L.startTime-N)}}function _t(N,L){j=!1,$&&($=!1,pe(ot),ot=-1),F=!0;var b=I;try{for(xe(L),v=n(m);v!==null&&(!(v.expirationTime>L)||N&&!on());){var S=v.callback;if(typeof S=="function"){v.callback=null,I=v.priorityLevel;var R=S(v.expirationTime<=L);L=r.unstable_now(),typeof R=="function"?v.callback=R:v===n(m)&&s(m),xe(L)}else s(m);v=n(m)}if(v!==null)var Y=!0;else{var ee=n(g);ee!==null&&U(Ne,ee.startTime-L),Y=!1}return Y}finally{v=null,I=b,F=!1}}var Be=!1,Ge=null,ot=-1,Kt=5,Dt=-1;function on(){return!(r.unstable_now()-Dt<Kt)}function Ct(){if(Ge!==null){var N=r.unstable_now();Dt=N;var L=!0;try{L=Ge(!0,N)}finally{L?qe():(Be=!1,Ge=null)}}else Be=!1}var qe;if(typeof Oe=="function")qe=function(){Oe(Ct)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Tt=lt.port2;lt.port1.onmessage=Ct,qe=function(){Tt.postMessage(null)}}else qe=function(){q(Ct,0)};function O(N){Ge=N,Be||(Be=!0,qe())}function U(N,L){ot=q(function(){N(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_continueExecution=function(){j||F||(j=!0,O(_t))},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kt=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(N){switch(I){case 1:case 2:case 3:var L=3;break;default:L=I}var b=I;I=L;try{return N()}finally{I=b}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=I;I=N;try{return L()}finally{I=b}},r.unstable_scheduleCallback=function(N,L,b){var S=r.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?S+b:S):b=S,N){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=b+R,N={id:w++,callback:L,priorityLevel:N,startTime:b,expirationTime:R,sortIndex:-1},b>S?(N.sortIndex=b,e(g,N),n(m)===null&&N===n(g)&&($?(pe(ot),ot=-1):$=!0,U(Ne,b-S))):(N.sortIndex=R,e(m,N),j||F||(j=!0,O(_t))),N},r.unstable_shouldYield=on,r.unstable_wrapCallback=function(N){var L=I;return function(){var b=I;I=L;try{return N.apply(this,arguments)}finally{I=b}}}})(qu)),qu}var Ap;function jw(){return Ap||(Ap=1,Gu.exports=zw()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Vw(){if(Op)return ft;Op=1;var r=Oc(),e=jw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function I(t){return m.call(v,t)?!0:m.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function F(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,i,o,a){if(i===null||typeof i>"u"||F(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(t,i,o,a,c,h,p){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=p}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){q[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];q[i]=new $(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){q[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){q[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){q[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){q[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){q[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){q[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){q[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function Oe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(pe,Oe);q[i]=new $(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(pe,Oe);q[i]=new $(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(pe,Oe);q[i]=new $(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){q[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),q.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){q[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function xe(t,i,o,a){var c=q.hasOwnProperty(i)?q[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,o,c,a)&&(o=null),a||c===null?I(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var Ne=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_t=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Ge=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),Kt=Symbol.for("react.profiler"),Dt=Symbol.for("react.provider"),on=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),N=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var b=Object.assign,S;function R(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var Y=!1;function ee(t,i){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var y=`
`+c[p].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=p&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function te(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ge:return"Fragment";case Be:return"Portal";case Kt:return"Profiler";case ot:return"StrictMode";case qe:return"Suspense";case lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case on:return(t.displayName||"Context")+".Consumer";case Dt:return(t._context.displayName||"Context")+".Provider";case Ct:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tt:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case O:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function ce(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===ot?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ee(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Ee(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function js(t){t._valueTracker||(t._valueTracker=yt(t))}function Ad(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Ee(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yl(t,i){var o=i.checked;return b({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Od(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=de(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Dd(t,i){i=i.checked,i!=null&&xe(t,"checked",i,!1)}function Jl(t,i){Dd(t,i);var o=de(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Xl(t,i.type,o):i.hasOwnProperty("defaultValue")&&Xl(t,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ld(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xl(t,i,o){(i!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ii=Array.isArray;function Or(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+de(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Zl(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return b({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Md(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ii(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:de(o)}}function bd(t,i){var o=de(i.value),a=de(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Fd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ud(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ud(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,zd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ci(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){zy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ti[i]=Ti[t]})});function jd(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+i).trim():i+"px"}function Vd(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=jd(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var jy=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(t,i){if(i){if(jy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function na(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function ia(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sa=null,Dr=null,Lr=null;function Wd(t){if(t=qi(t)){if(typeof sa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ho(i),sa(t.stateNode,t.type,i))}}function Bd(t){Dr?Lr?Lr.push(t):Lr=[t]:Dr=t}function Hd(){if(Dr){var t=Dr,i=Lr;if(Lr=Dr=null,Wd(t),i)for(t=0;t<i.length;t++)Wd(i[t])}}function $d(t,i){return t(i)}function Gd(){}var oa=!1;function qd(t,i,o){if(oa)return t(i,o);oa=!0;try{return $d(t,i,o)}finally{oa=!1,(Dr!==null||Lr!==null)&&(Gd(),Hd())}}function ki(t,i){var o=t.stateNode;if(o===null)return null;var a=ho(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var la=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){la=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{la=!1}function Vy(t,i,o,a,c,h,p,_,y){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(A){this.onError(A)}}var Ri=!1,Bs=null,Hs=!1,aa=null,Wy={onError:function(t){Ri=!0,Bs=t}};function By(t,i,o,a,c,h,p,_,y){Ri=!1,Bs=null,Vy.apply(Wy,arguments)}function Hy(t,i,o,a,c,h,p,_,y){if(By.apply(this,arguments),Ri){if(Ri){var k=Bs;Ri=!1,Bs=null}else throw Error(n(198));Hs||(Hs=!0,aa=k)}}function sr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Kd(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qd(t){if(sr(t)!==t)throw Error(n(188))}function $y(t){var i=t.alternate;if(!i){if(i=sr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Qd(c),t;if(h===a)return Qd(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Yd(t){return t=$y(t),t!==null?Jd(t):null}function Jd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Jd(t);if(i!==null)return i;t=t.sibling}return null}var Xd=e.unstable_scheduleCallback,Zd=e.unstable_cancelCallback,Gy=e.unstable_shouldYield,qy=e.unstable_requestPaint,Re=e.unstable_now,Ky=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,eh=e.unstable_UserBlockingPriority,$s=e.unstable_NormalPriority,Qy=e.unstable_LowPriority,th=e.unstable_IdlePriority,Gs=null,Qt=null;function Yy(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Zy,Jy=Math.log,Xy=Math.LN2;function Zy(t){return t>>>=0,t===0?32:31-(Jy(t)/Xy|0)|0}var qs=64,Ks=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Pi(_):(h&=p,h!==0&&(a=Pi(h)))}else p=o&~c,p!==0?a=Pi(p):h!==0&&(a=Pi(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&c)===0&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Lt(i),c=1<<o,a|=t[o],i&=~c;return a}function ev(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-Lt(h),_=1<<p,y=c[p];y===-1?((_&o)===0||(_&a)!==0)&&(c[p]=ev(_,i)):y<=i&&(t.expiredLanes|=_),h&=~_}}function ca(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nh(){var t=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),t}function da(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Lt(i),t[i]=o}function nv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Lt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ha(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Lt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var he=0;function rh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ih,fa,sh,oh,lh,pa=!1,Ys=[],kn=null,Nn=null,Rn=null,Ai=new Map,Oi=new Map,Pn=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(i.pointerId)}}function Di(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=qi(i),i!==null&&fa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function iv(t,i,o,a,c){switch(i){case"focusin":return kn=Di(kn,t,i,o,a,c),!0;case"dragenter":return Nn=Di(Nn,t,i,o,a,c),!0;case"mouseover":return Rn=Di(Rn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ai.set(h,Di(Ai.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Oi.set(h,Di(Oi.get(h)||null,t,i,o,a,c)),!0}return!1}function uh(t){var i=or(t.target);if(i!==null){var o=sr(i);if(o!==null){if(i=o.tag,i===13){if(i=Kd(o),i!==null){t.blockedOn=i,lh(t.priority,function(){sh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ga(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ra=a,o.target.dispatchEvent(a),ra=null}else return i=qi(o),i!==null&&fa(i),t.blockedOn=o,!1;i.shift()}return!0}function ch(t,i,o){Js(t)&&o.delete(i)}function sv(){pa=!1,kn!==null&&Js(kn)&&(kn=null),Nn!==null&&Js(Nn)&&(Nn=null),Rn!==null&&Js(Rn)&&(Rn=null),Ai.forEach(ch),Oi.forEach(ch)}function Li(t,i){t.blockedOn===i&&(t.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function Mi(t){function i(c){return Li(c,t)}if(0<Ys.length){Li(Ys[0],t);for(var o=1;o<Ys.length;o++){var a=Ys[o];a.blockedOn===t&&(a.blockedOn=null)}}for(kn!==null&&Li(kn,t),Nn!==null&&Li(Nn,t),Rn!==null&&Li(Rn,t),Ai.forEach(i),Oi.forEach(i),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&Pn.shift()}var Mr=Ne.ReactCurrentBatchConfig,Xs=!0;function ov(t,i,o,a){var c=he,h=Mr.transition;Mr.transition=null;try{he=1,ma(t,i,o,a)}finally{he=c,Mr.transition=h}}function lv(t,i,o,a){var c=he,h=Mr.transition;Mr.transition=null;try{he=4,ma(t,i,o,a)}finally{he=c,Mr.transition=h}}function ma(t,i,o,a){if(Xs){var c=ga(t,i,o,a);if(c===null)Da(t,i,a,Zs,o),ah(t,a);else if(iv(c,t,i,o,a))a.stopPropagation();else if(ah(t,a),i&4&&-1<rv.indexOf(t)){for(;c!==null;){var h=qi(c);if(h!==null&&ih(h),h=ga(t,i,o,a),h===null&&Da(t,i,a,Zs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Da(t,i,a,null,o)}}var Zs=null;function ga(t,i,o,a){if(Zs=null,t=ia(a),t=or(t),t!==null)if(i=sr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Kd(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zs=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case ua:return 1;case eh:return 4;case $s:case Qy:return 16;case th:return 536870912;default:return 16}default:return 16}}var xn=null,_a=null,eo=null;function hh(){if(eo)return eo;var t,i=_a,o=i.length,a,c="value"in xn?xn.value:xn.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&i[o-a]===c[h-a];a++);return eo=c.slice(t,1<a?1-a:void 0)}function to(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function fh(){return!1}function vt(t){function i(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?no:fh,this.isPropagationStopped=fh,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),i}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=vt(br),bi=b({},br,{view:0,detail:0}),av=vt(bi),va,wa,Fi,ro=b({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(va=t.screenX-Fi.screenX,wa=t.screenY-Fi.screenY):wa=va=0,Fi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:wa}}),ph=vt(ro),uv=b({},ro,{dataTransfer:0}),cv=vt(uv),dv=b({},bi,{relatedTarget:0}),Ea=vt(dv),hv=b({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=vt(hv),pv=b({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=vt(pv),gv=b({},br,{data:0}),mh=vt(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vv[t])?!!i[t]:!1}function Sa(){return wv}var Ev=b({},bi,{key:function(t){if(t.key){var i=_v[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sv=vt(Ev),Iv=b({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=vt(Iv),Cv=b({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Tv=vt(Cv),kv=b({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=vt(kv),Rv=b({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=vt(Rv),xv=[9,13,27,32],Ia=f&&"CompositionEvent"in window,Ui=null;f&&"documentMode"in document&&(Ui=document.documentMode);var Av=f&&"TextEvent"in window&&!Ui,_h=f&&(!Ia||Ui&&8<Ui&&11>=Ui),yh=" ",vh=!1;function wh(t,i){switch(t){case"keyup":return xv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Ov(t,i){switch(t){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(vh=!0,yh);case"textInput":return t=i.data,t===yh&&vh?null:t;default:return null}}function Dv(t,i){if(Fr)return t==="compositionend"||!Ia&&wh(t,i)?(t=hh(),eo=_a=xn=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _h&&i.locale!=="ko"?null:i.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Lv[t.type]:i==="textarea"}function Ih(t,i,o,a){Bd(a),i=ao(i,"onChange"),0<i.length&&(o=new ya("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var zi=null,ji=null;function Mv(t){Vh(t,0)}function io(t){var i=Wr(t);if(Ad(i))return t}function bv(t,i){if(t==="change")return i}var Ch=!1;if(f){var Ca;if(f){var Ta="oninput"in document;if(!Ta){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Ta=typeof Th.oninput=="function"}Ca=Ta}else Ca=!1;Ch=Ca&&(!document.documentMode||9<document.documentMode)}function kh(){zi&&(zi.detachEvent("onpropertychange",Nh),ji=zi=null)}function Nh(t){if(t.propertyName==="value"&&io(ji)){var i=[];Ih(i,ji,t,ia(t)),qd(Mv,i)}}function Fv(t,i,o){t==="focusin"?(kh(),zi=i,ji=o,zi.attachEvent("onpropertychange",Nh)):t==="focusout"&&kh()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(ji)}function zv(t,i){if(t==="click")return io(i)}function jv(t,i){if(t==="input"||t==="change")return io(i)}function Vv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Mt=typeof Object.is=="function"?Object.is:Vv;function Vi(t,i){if(Mt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(i,c)||!Mt(t[c],i[c]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ph(t,i){var o=Rh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function xh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var t=window,i=Vs();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Vs(t.document)}return i}function ka(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Wv(t){var i=Ah(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&xh(o.ownerDocument.documentElement,o)){if(a!==null&&ka(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Ph(o,h);var p=Ph(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(p.node,p.offset)):(i.setEnd(p.node,p.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,Ur=null,Na=null,Wi=null,Ra=!1;function Oh(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ra||Ur==null||Ur!==Vs(a)||(a=Ur,"selectionStart"in a&&ka(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wi&&Vi(Wi,a)||(Wi=a,a=ao(Na,"onSelect"),0<a.length&&(i=new ya("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Ur)))}function so(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var zr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Pa={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function oo(t){if(Pa[t])return Pa[t];if(!zr[t])return t;var i=zr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dh)return Pa[t]=i[o];return t}var Lh=oo("animationend"),Mh=oo("animationiteration"),bh=oo("animationstart"),Fh=oo("transitionend"),Uh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,i){Uh.set(t,i),u(i,[t])}for(var xa=0;xa<zh.length;xa++){var Aa=zh[xa],Hv=Aa.toLowerCase(),$v=Aa[0].toUpperCase()+Aa.slice(1);An(Hv,"on"+$v)}An(Lh,"onAnimationEnd"),An(Mh,"onAnimationIteration"),An(bh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Fh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function jh(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,Hy(a,i,void 0,t),t.currentTarget=null}function Vh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var p=a.length-1;0<=p;p--){var _=a[p],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;jh(c,_,k),h=y}else for(p=0;p<a.length;p++){if(_=a[p],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;jh(c,_,k),h=y}}}if(Hs)throw t=aa,Hs=!1,aa=null,t}function ye(t,i){var o=i[za];o===void 0&&(o=i[za]=new Set);var a=t+"__bubble";o.has(a)||(Wh(i,t,2,!1),o.add(a))}function Oa(t,i,o){var a=0;i&&(a|=4),Wh(o,t,a,i)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[lo]){t[lo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Gv.has(o)||Oa(o,!1,t),Oa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[lo]||(i[lo]=!0,Oa("selectionchange",!1,i))}}function Wh(t,i,o,a){switch(dh(i)){case 1:var c=ov;break;case 4:c=lv;break;default:c=ma}o=c.bind(null,i,o,t),c=void 0,!la||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Da(t,i,o,a,c){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;p=p.return}for(;_!==null;){if(p=or(_),p===null)return;if(y=p.tag,y===5||y===6){a=h=p;continue e}_=_.parentNode}}a=a.return}qd(function(){var k=h,A=ia(o),D=[];e:{var x=Uh.get(t);if(x!==void 0){var V=ya,B=t;switch(t){case"keypress":if(to(o)===0)break e;case"keydown":case"keyup":V=Sv;break;case"focusin":B="focus",V=Ea;break;case"focusout":B="blur",V=Ea;break;case"beforeblur":case"afterblur":V=Ea;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Tv;break;case Lh:case Mh:case bh:V=fv;break;case Fh:V=Nv;break;case"scroll":V=av;break;case"wheel":V=Pv;break;case"copy":case"cut":case"paste":V=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=gh}var H=(i&4)!==0,Pe=!H&&t==="scroll",C=H?x!==null?x+"Capture":null:x;H=[];for(var E=k,T;E!==null;){T=E;var M=T.stateNode;if(T.tag===5&&M!==null&&(T=M,C!==null&&(M=ki(E,C),M!=null&&H.push($i(E,M,T)))),Pe)break;E=E.return}0<H.length&&(x=new V(x,B,null,o,A),D.push({event:x,listeners:H}))}}if((i&7)===0){e:{if(x=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",x&&o!==ra&&(B=o.relatedTarget||o.fromElement)&&(or(B)||B[ln]))break e;if((V||x)&&(x=A.window===A?A:(x=A.ownerDocument)?x.defaultView||x.parentWindow:window,V?(B=o.relatedTarget||o.toElement,V=k,B=B?or(B):null,B!==null&&(Pe=sr(B),B!==Pe||B.tag!==5&&B.tag!==6)&&(B=null)):(V=null,B=k),V!==B)){if(H=ph,M="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(H=gh,M="onPointerLeave",C="onPointerEnter",E="pointer"),Pe=V==null?x:Wr(V),T=B==null?x:Wr(B),x=new H(M,E+"leave",V,o,A),x.target=Pe,x.relatedTarget=T,M=null,or(A)===k&&(H=new H(C,E+"enter",B,o,A),H.target=T,H.relatedTarget=Pe,M=H),Pe=M,V&&B)t:{for(H=V,C=B,E=0,T=H;T;T=jr(T))E++;for(T=0,M=C;M;M=jr(M))T++;for(;0<E-T;)H=jr(H),E--;for(;0<T-E;)C=jr(C),T--;for(;E--;){if(H===C||C!==null&&H===C.alternate)break t;H=jr(H),C=jr(C)}H=null}else H=null;V!==null&&Bh(D,x,V,H,!1),B!==null&&Pe!==null&&Bh(D,Pe,B,H,!0)}}e:{if(x=k?Wr(k):window,V=x.nodeName&&x.nodeName.toLowerCase(),V==="select"||V==="input"&&x.type==="file")var G=bv;else if(Sh(x))if(Ch)G=jv;else{G=Uv;var K=Fv}else(V=x.nodeName)&&V.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(G=zv);if(G&&(G=G(t,k))){Ih(D,G,o,A);break e}K&&K(t,x,k),t==="focusout"&&(K=x._wrapperState)&&K.controlled&&x.type==="number"&&Xl(x,"number",x.value)}switch(K=k?Wr(k):window,t){case"focusin":(Sh(K)||K.contentEditable==="true")&&(Ur=K,Na=k,Wi=null);break;case"focusout":Wi=Na=Ur=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Oh(D,o,A);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Oh(D,o,A)}var Q;if(Ia)e:{switch(t){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fr?wh(t,o)&&(X="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(X="onCompositionStart");X&&(_h&&o.locale!=="ko"&&(Fr||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fr&&(Q=hh()):(xn=A,_a="value"in xn?xn.value:xn.textContent,Fr=!0)),K=ao(k,X),0<K.length&&(X=new mh(X,t,null,o,A),D.push({event:X,listeners:K}),Q?X.data=Q:(Q=Eh(o),Q!==null&&(X.data=Q)))),(Q=Av?Ov(t,o):Dv(t,o))&&(k=ao(k,"onBeforeInput"),0<k.length&&(A=new mh("onBeforeInput","beforeinput",null,o,A),D.push({event:A,listeners:k}),A.data=Q))}Vh(D,i)})}function $i(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ao(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,c)),h=ki(t,i),h!=null&&a.push($i(t,h,c))),t=t.return}return a}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,i,o,a,c){for(var h=i._reactName,p=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=ki(o,h),y!=null&&p.unshift($i(o,y,_))):c||(y=ki(o,h),y!=null&&p.push($i(o,y,_)))),o=o.return}p.length!==0&&t.push({event:i,listeners:p})}var qv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(qv,`
`).replace(Kv,"")}function uo(t,i,o){if(i=Hh(i),Hh(t)!==i&&o)throw Error(n(425))}function co(){}var La=null,Ma=null;function ba(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(Jv)}:Fa;function Jv(t){setTimeout(function(){throw t})}function Ua(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Mi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Mi(i)}function On(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Vr,Gi="__reactProps$"+Vr,ln="__reactContainer$"+Vr,za="__reactEvents$"+Vr,Xv="__reactListeners$"+Vr,Zv="__reactHandles$"+Vr;function or(t){var i=t[Yt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ln]||o[Yt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Gh(t);t!==null;){if(o=t[Yt])return o;t=Gh(t)}return i}t=o,o=t.parentNode}return null}function qi(t){return t=t[Yt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ho(t){return t[Gi]||null}var ja=[],Br=-1;function Dn(t){return{current:t}}function ve(t){0>Br||(t.current=ja[Br],ja[Br]=null,Br--)}function ge(t,i){Br++,ja[Br]=t.current,t.current=i}var Ln={},Ke=Dn(Ln),at=Dn(!1),lr=Ln;function Hr(t,i){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function ut(t){return t=t.childContextTypes,t!=null}function fo(){ve(at),ve(Ke)}function qh(t,i,o){if(Ke.current!==Ln)throw Error(n(168));ge(Ke,i),ge(at,o)}function Kh(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,ce(t)||"Unknown",c));return b({},o,a)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,lr=Ke.current,ge(Ke,t),ge(at,at.current),!0}function Qh(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Kh(t,i,lr),a.__reactInternalMemoizedMergedChildContext=t,ve(at),ve(Ke),ge(Ke,t)):ve(at),ge(at,o)}var an=null,mo=!1,Va=!1;function Yh(t){an===null?an=[t]:an.push(t)}function ew(t){mo=!0,Yh(t)}function Mn(){if(!Va&&an!==null){Va=!0;var t=0,i=he;try{var o=an;for(he=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,mo=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),Xd(ua,Mn),c}finally{he=i,Va=!1}}return null}var $r=[],Gr=0,go=null,_o=0,kt=[],Nt=0,ar=null,un=1,cn="";function ur(t,i){$r[Gr++]=_o,$r[Gr++]=go,go=t,_o=i}function Jh(t,i,o){kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,ar=t;var a=un;t=cn;var c=32-Lt(a)-1;a&=~(1<<c),o+=1;var h=32-Lt(i)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,un=1<<32-Lt(i)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function Wa(t){t.return!==null&&(ur(t,1),Jh(t,1,0))}function Ba(t){for(;t===go;)go=$r[--Gr],$r[Gr]=null,_o=$r[--Gr],$r[Gr]=null;for(;t===ar;)ar=kt[--Nt],kt[Nt]=null,cn=kt[--Nt],kt[Nt]=null,un=kt[--Nt],kt[Nt]=null}var wt=null,Et=null,Se=!1,bt=null;function Xh(t,i){var o=At(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Zh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,wt=t,Et=On(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,wt=t,Et=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=At(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,wt=t,Et=null,!0):!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $a(t){if(Se){var i=Et;if(i){var o=i;if(!Zh(t,i)){if(Ha(t))throw Error(n(418));i=On(o.nextSibling);var a=wt;i&&Zh(t,i)?Xh(a,o):(t.flags=t.flags&-4097|2,Se=!1,wt=t)}}else{if(Ha(t))throw Error(n(418));t.flags=t.flags&-4097|2,Se=!1,wt=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function yo(t){if(t!==wt)return!1;if(!Se)return ef(t),Se=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ba(t.type,t.memoizedProps)),i&&(i=Et)){if(Ha(t))throw tf(),Error(n(418));for(;i;)Xh(t,i),i=On(i.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Et=On(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Et=null}}else Et=wt?On(t.stateNode.nextSibling):null;return!0}function tf(){for(var t=Et;t;)t=On(t.nextSibling)}function qr(){Et=wt=null,Se=!1}function Ga(t){bt===null?bt=[t]:bt.push(t)}var tw=Ne.ReactCurrentBatchConfig;function Ki(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function vo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function nf(t){var i=t._init;return i(t._payload)}function rf(t){function i(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)i(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=Bn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function p(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,M){return E===null||E.tag!==6?(E=Fu(T,C.mode,M),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,M){var G=T.type;return G===Ge?A(C,E,T.props.children,M,T.key):E!==null&&(E.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===O&&nf(G)===E.type)?(M=c(E,T.props),M.ref=Ki(C,E,T),M.return=C,M):(M=Bo(T.type,T.key,T.props,null,C.mode,M),M.ref=Ki(C,E,T),M.return=C,M)}function k(C,E,T,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Uu(T,C.mode,M),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function A(C,E,T,M,G){return E===null||E.tag!==7?(E=_r(T,C.mode,M,G),E.return=C,E):(E=c(E,T),E.return=C,E)}function D(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Fu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _t:return T=Bo(E.type,E.key,E.props,null,C.mode,T),T.ref=Ki(C,null,E),T.return=C,T;case Be:return E=Uu(E,C.mode,T),E.return=C,E;case O:var M=E._init;return D(C,M(E._payload),T)}if(Ii(E)||L(E))return E=_r(E,C.mode,T,null),E.return=C,E;vo(C,E)}return null}function x(C,E,T,M){var G=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return G!==null?null:_(C,E,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _t:return T.key===G?y(C,E,T,M):null;case Be:return T.key===G?k(C,E,T,M):null;case O:return G=T._init,x(C,E,G(T._payload),M)}if(Ii(T)||L(T))return G!==null?null:A(C,E,T,M,null);vo(C,T)}return null}function V(C,E,T,M,G){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(T)||null,_(E,C,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _t:return C=C.get(M.key===null?T:M.key)||null,y(E,C,M,G);case Be:return C=C.get(M.key===null?T:M.key)||null,k(E,C,M,G);case O:var K=M._init;return V(C,E,T,K(M._payload),G)}if(Ii(M)||L(M))return C=C.get(T)||null,A(E,C,M,G,null);vo(E,M)}return null}function B(C,E,T,M){for(var G=null,K=null,Q=E,X=E=0,ze=null;Q!==null&&X<T.length;X++){Q.index>X?(ze=Q,Q=null):ze=Q.sibling;var ae=x(C,Q,T[X],M);if(ae===null){Q===null&&(Q=ze);break}t&&Q&&ae.alternate===null&&i(C,Q),E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae,Q=ze}if(X===T.length)return o(C,Q),Se&&ur(C,X),G;if(Q===null){for(;X<T.length;X++)Q=D(C,T[X],M),Q!==null&&(E=h(Q,E,X),K===null?G=Q:K.sibling=Q,K=Q);return Se&&ur(C,X),G}for(Q=a(C,Q);X<T.length;X++)ze=V(Q,C,X,T[X],M),ze!==null&&(t&&ze.alternate!==null&&Q.delete(ze.key===null?X:ze.key),E=h(ze,E,X),K===null?G=ze:K.sibling=ze,K=ze);return t&&Q.forEach(function(Hn){return i(C,Hn)}),Se&&ur(C,X),G}function H(C,E,T,M){var G=L(T);if(typeof G!="function")throw Error(n(150));if(T=G.call(T),T==null)throw Error(n(151));for(var K=G=null,Q=E,X=E=0,ze=null,ae=T.next();Q!==null&&!ae.done;X++,ae=T.next()){Q.index>X?(ze=Q,Q=null):ze=Q.sibling;var Hn=x(C,Q,ae.value,M);if(Hn===null){Q===null&&(Q=ze);break}t&&Q&&Hn.alternate===null&&i(C,Q),E=h(Hn,E,X),K===null?G=Hn:K.sibling=Hn,K=Hn,Q=ze}if(ae.done)return o(C,Q),Se&&ur(C,X),G;if(Q===null){for(;!ae.done;X++,ae=T.next())ae=D(C,ae.value,M),ae!==null&&(E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae);return Se&&ur(C,X),G}for(Q=a(C,Q);!ae.done;X++,ae=T.next())ae=V(Q,C,X,ae.value,M),ae!==null&&(t&&ae.alternate!==null&&Q.delete(ae.key===null?X:ae.key),E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae);return t&&Q.forEach(function(Lw){return i(C,Lw)}),Se&&ur(C,X),G}function Pe(C,E,T,M){if(typeof T=="object"&&T!==null&&T.type===Ge&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case _t:e:{for(var G=T.key,K=E;K!==null;){if(K.key===G){if(G=T.type,G===Ge){if(K.tag===7){o(C,K.sibling),E=c(K,T.props.children),E.return=C,C=E;break e}}else if(K.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===O&&nf(G)===K.type){o(C,K.sibling),E=c(K,T.props),E.ref=Ki(C,K,T),E.return=C,C=E;break e}o(C,K);break}else i(C,K);K=K.sibling}T.type===Ge?(E=_r(T.props.children,C.mode,M,T.key),E.return=C,C=E):(M=Bo(T.type,T.key,T.props,null,C.mode,M),M.ref=Ki(C,E,T),M.return=C,C=M)}return p(C);case Be:e:{for(K=T.key;E!==null;){if(E.key===K)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else i(C,E);E=E.sibling}E=Uu(T,C.mode,M),E.return=C,C=E}return p(C);case O:return K=T._init,Pe(C,E,K(T._payload),M)}if(Ii(T))return B(C,E,T,M);if(L(T))return H(C,E,T,M);vo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Fu(T,C.mode,M),E.return=C,C=E),p(C)):o(C,E)}return Pe}var Kr=rf(!0),sf=rf(!1),wo=Dn(null),Eo=null,Qr=null,qa=null;function Ka(){qa=Qr=Eo=null}function Qa(t){var i=wo.current;ve(wo),t._currentValue=i}function Ya(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Yr(t,i){Eo=t,qa=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ct=!0),t.firstContext=null)}function Rt(t){var i=t._currentValue;if(qa!==t)if(t={context:t,memoizedValue:i,next:null},Qr===null){if(Eo===null)throw Error(n(308));Qr=t,Eo.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return i}var cr=null;function Ja(t){cr===null?cr=[t]:cr.push(t)}function of(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,Ja(i)):(o.next=c.next,c.next=o),i.interleaved=o,dn(t,a)}function dn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function Xa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,dn(t,o)}return c=a.interleaved,c===null?(i.next=i,Ja(a)):(i.next=c.next,c.next=i),a.interleaved=i,dn(t,o)}function So(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ha(t,o)}}function af(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Io(t,i,o,a){var c=t.updateQueue;bn=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,p===null?h=k:p.next=k,p=y;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==p&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=y))}if(h!==null){var D=c.baseState;p=0,A=k=y=null,_=h;do{var x=_.lane,V=_.eventTime;if((a&x)===x){A!==null&&(A=A.next={eventTime:V,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var B=t,H=_;switch(x=i,V=o,H.tag){case 1:if(B=H.payload,typeof B=="function"){D=B.call(V,D,x);break e}D=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,x=typeof B=="function"?B.call(V,D,x):B,x==null)break e;D=b({},D,x);break e;case 2:bn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,x=c.effects,x===null?c.effects=[_]:x.push(_))}else V={eventTime:V,lane:x,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=V,y=D):A=A.next=V,p|=x;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;x=_,_=x.next,x.next=null,c.lastBaseUpdate=x,c.shared.pending=null}}while(!0);if(A===null&&(y=D),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=A,i=c.shared.interleaved,i!==null){c=i;do p|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);fr|=p,t.lanes=p,t.memoizedState=D}}function uf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Qi={},Jt=Dn(Qi),Yi=Dn(Qi),Ji=Dn(Qi);function dr(t){if(t===Qi)throw Error(n(174));return t}function Za(t,i){switch(ge(Ji,i),ge(Yi,t),ge(Jt,Qi),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ea(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ea(i,t)}ve(Jt),ge(Jt,i)}function Jr(){ve(Jt),ve(Yi),ve(Ji)}function cf(t){dr(Ji.current);var i=dr(Jt.current),o=ea(i,t.type);i!==o&&(ge(Yi,t),ge(Jt,o))}function eu(t){Yi.current===t&&(ve(Jt),ve(Yi))}var Ie=Dn(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var To=Ne.ReactCurrentDispatcher,ru=Ne.ReactCurrentBatchConfig,hr=0,Ce=null,De=null,Fe=null,ko=!1,Xi=!1,Zi=0,nw=0;function Qe(){throw Error(n(321))}function iu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Mt(t[o],i[o]))return!1;return!0}function su(t,i,o,a,c,h){if(hr=h,Ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,To.current=t===null||t.memoizedState===null?ow:lw,t=o(a,c),Xi){h=0;do{if(Xi=!1,Zi=0,25<=h)throw Error(n(301));h+=1,Fe=De=null,i.updateQueue=null,To.current=aw,t=o(a,c)}while(Xi)}if(To.current=Po,i=De!==null&&De.next!==null,hr=0,Fe=De=Ce=null,ko=!1,i)throw Error(n(300));return t}function ou(){var t=Zi!==0;return Zi=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ce.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Pt(){if(De===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var i=Fe===null?Ce.memoizedState:Fe.next;if(i!==null)Fe=i,De=t;else{if(t===null)throw Error(n(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Ce.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function es(t,i){return typeof i=="function"?i(t):i}function lu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=De,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,y=null,k=h;do{var A=k.lane;if((hr&A)===A)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var D={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=D,p=a):y=y.next=D,Ce.lanes|=A,fr|=A}k=k.next}while(k!==null&&k!==h);y===null?p=a:y.next=_,Mt(a,i.memoizedState)||(ct=!0),i.memoizedState=a,i.baseState=p,i.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ce.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function au(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);Mt(h,i.memoizedState)||(ct=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function df(){}function hf(t,i){var o=Ce,a=Pt(),c=i(),h=!Mt(a.memoizedState,c);if(h&&(a.memoizedState=c,ct=!0),a=a.queue,uu(mf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,ts(9,pf.bind(null,o,a,c,i),void 0,null),Ue===null)throw Error(n(349));(hr&30)!==0||ff(o,i,c)}return c}function ff(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ce.updateQueue,i===null?(i={lastEffect:null,stores:null},Ce.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function pf(t,i,o,a){i.value=o,i.getSnapshot=a,gf(i)&&_f(t)}function mf(t,i,o){return o(function(){gf(i)&&_f(t)})}function gf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Mt(t,o)}catch{return!0}}function _f(t){var i=dn(t,1);i!==null&&jt(i,t,1,-1)}function yf(t){var i=Xt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},i.queue=t,t=t.dispatch=sw.bind(null,Ce,t),[i.memoizedState,t]}function ts(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ce.updateQueue,i===null?(i={lastEffect:null,stores:null},Ce.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function vf(){return Pt().memoizedState}function No(t,i,o,a){var c=Xt();Ce.flags|=t,c.memoizedState=ts(1|i,o,void 0,a===void 0?null:a)}function Ro(t,i,o,a){var c=Pt();a=a===void 0?null:a;var h=void 0;if(De!==null){var p=De.memoizedState;if(h=p.destroy,a!==null&&iu(a,p.deps)){c.memoizedState=ts(i,o,h,a);return}}Ce.flags|=t,c.memoizedState=ts(1|i,o,h,a)}function wf(t,i){return No(8390656,8,t,i)}function uu(t,i){return Ro(2048,8,t,i)}function Ef(t,i){return Ro(4,2,t,i)}function Sf(t,i){return Ro(4,4,t,i)}function If(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Cf(t,i,o){return o=o!=null?o.concat([t]):null,Ro(4,4,If.bind(null,i,t),o)}function cu(){}function Tf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function kf(t,i){var o=Pt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&iu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Nf(t,i,o){return(hr&21)===0?(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=o):(Mt(o,i)||(o=nh(),Ce.lanes|=o,fr|=o,t.baseState=!0),i)}function rw(t,i){var o=he;he=o!==0&&4>o?o:4,t(!0);var a=ru.transition;ru.transition={};try{t(!1),i()}finally{he=o,ru.transition=a}}function Rf(){return Pt().memoizedState}function iw(t,i,o){var a=Vn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Pf(t))xf(i,o);else if(o=of(t,i,o,a),o!==null){var c=tt();jt(o,t,a,c),Af(o,i,a)}}function sw(t,i,o){var a=Vn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Pf(t))xf(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var p=i.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,Mt(_,p)){var y=i.interleaved;y===null?(c.next=c,Ja(i)):(c.next=y.next,y.next=c),i.interleaved=c;return}}catch{}finally{}o=of(t,i,c,a),o!==null&&(c=tt(),jt(o,t,a,c),Af(o,i,a))}}function Pf(t){var i=t.alternate;return t===Ce||i!==null&&i===Ce}function xf(t,i){Xi=ko=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Af(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,ha(t,o)}}var Po={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},ow={readContext:Rt,useCallback:function(t,i){return Xt().memoizedState=[t,i===void 0?null:i],t},useContext:Rt,useEffect:wf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,No(4194308,4,If.bind(null,i,t),o)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var o=Xt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Xt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=iw.bind(null,Ce,t),[a.memoizedState,t]},useRef:function(t){var i=Xt();return t={current:t},i.memoizedState=t},useState:yf,useDebugValue:cu,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=yf(!1),i=t[0];return t=rw.bind(null,t[1]),Xt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ce,c=Xt();if(Se){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ue===null)throw Error(n(349));(hr&30)!==0||ff(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,wf(mf.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,pf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Xt(),i=Ue.identifierPrefix;if(Se){var o=cn,a=un;o=(a&~(1<<32-Lt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Zi++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=nw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},lw={readContext:Rt,useCallback:Tf,useContext:Rt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:lu,useRef:vf,useState:function(){return lu(es)},useDebugValue:cu,useDeferredValue:function(t){var i=Pt();return Nf(i,De.memoizedState,t)},useTransition:function(){var t=lu(es)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:df,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1},aw={readContext:Rt,useCallback:Tf,useContext:Rt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:au,useRef:vf,useState:function(){return au(es)},useDebugValue:cu,useDeferredValue:function(t){var i=Pt();return De===null?i.memoizedState=t:Nf(i,De.memoizedState,t)},useTransition:function(){var t=au(es)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:df,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1};function Ft(t,i){if(t&&t.defaultProps){i=b({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function du(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:b({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var xo={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=tt(),c=Vn(t),h=hn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(jt(i,t,c,a),So(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=tt(),c=Vn(t),h=hn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Fn(t,h,c),i!==null&&(jt(i,t,c,a),So(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=tt(),a=Vn(t),c=hn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Fn(t,c,a),i!==null&&(jt(i,t,a,o),So(i,t,a))}};function Of(t,i,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):i.prototype&&i.prototype.isPureReactComponent?!Vi(o,a)||!Vi(c,h):!0}function Df(t,i,o){var a=!1,c=Ln,h=i.contextType;return typeof h=="object"&&h!==null?h=Rt(h):(c=ut(i)?lr:Ke.current,a=i.contextTypes,h=(a=a!=null)?Hr(t,c):Ln),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Lf(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&xo.enqueueReplaceState(i,i.state,null)}function hu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Xa(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Rt(h):(h=ut(i)?lr:Ke.current,c.context=Hr(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(du(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&xo.enqueueReplaceState(c,c.state,null),Io(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,i){try{var o="",a=i;do o+=te(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function pu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function Mf(t,i,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Fo||(Fo=!0,Pu=a),pu(t,i)},o}function bf(t,i,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){pu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pu(t,i),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})}),o}function Ff(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new uw;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=Iw.bind(null,t,i,o),i.then(t,t))}function Uf(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zf(t,i,o,a,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hn(-1,1),i.tag=2,Fn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var cw=Ne.ReactCurrentOwner,ct=!1;function et(t,i,o,a){i.child=t===null?sf(i,null,o,a):Kr(i,t.child,o,a)}function jf(t,i,o,a,c){o=o.render;var h=i.ref;return Yr(i,c),a=su(t,i,o,a,h,c),o=ou(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&o&&Wa(i),i.flags|=1,et(t,i,a,c),i.child)}function Vf(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!bu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Wf(t,i,h,a,c)):(t=Bo(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Vi,o(p,a)&&t.ref===i.ref)return fn(t,i,c)}return i.flags|=1,t=Bn(h,a),t.ref=i.ref,t.return=i,i.child=t}function Wf(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Vi(h,a)&&t.ref===i.ref)if(ct=!1,i.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(ct=!0);else return i.lanes=t.lanes,fn(t,i,c)}return mu(t,i,o,a,c)}function Bf(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ei,St),St|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ge(ei,St),St|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ge(ei,St),St|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ge(ei,St),St|=a;return et(t,i,c,o),i.child}function Hf(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(t,i,o,a,c){var h=ut(o)?lr:Ke.current;return h=Hr(i,h),Yr(i,c),o=su(t,i,o,a,h,c),a=ou(),t!==null&&!ct?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,fn(t,i,c)):(Se&&a&&Wa(i),i.flags|=1,et(t,i,o,c),i.child)}function $f(t,i,o,a,c){if(ut(o)){var h=!0;po(i)}else h=!1;if(Yr(i,c),i.stateNode===null)Oo(t,i),Df(i,o,a),hu(i,o,a,c),a=!0;else if(t===null){var p=i.stateNode,_=i.memoizedProps;p.props=_;var y=p.context,k=o.contextType;typeof k=="object"&&k!==null?k=Rt(k):(k=ut(o)?lr:Ke.current,k=Hr(i,k));var A=o.getDerivedStateFromProps,D=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function";D||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Lf(i,p,a,k),bn=!1;var x=i.memoizedState;p.state=x,Io(i,a,p,c),y=i.memoizedState,_!==a||x!==y||at.current||bn?(typeof A=="function"&&(du(i,o,A,a),y=i.memoizedState),(_=bn||Of(i,o,_,a,x,y,k))?(D||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=y),p.props=a,p.state=y,p.context=k,a=_):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{p=i.stateNode,lf(t,i),_=i.memoizedProps,k=i.type===i.elementType?_:Ft(i.type,_),p.props=k,D=i.pendingProps,x=p.context,y=o.contextType,typeof y=="object"&&y!==null?y=Rt(y):(y=ut(o)?lr:Ke.current,y=Hr(i,y));var V=o.getDerivedStateFromProps;(A=typeof V=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==D||x!==y)&&Lf(i,p,a,y),bn=!1,x=i.memoizedState,p.state=x,Io(i,a,p,c);var B=i.memoizedState;_!==D||x!==B||at.current||bn?(typeof V=="function"&&(du(i,o,V,a),B=i.memoizedState),(k=bn||Of(i,o,k,a,x,B,y)||!1)?(A||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,B,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,B,y)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=B),p.props=a,p.state=B,p.context=y,a=k):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(i.flags|=1024),a=!1)}return gu(t,i,o,a,h,c)}function gu(t,i,o,a,c,h){Hf(t,i);var p=(i.flags&128)!==0;if(!a&&!p)return c&&Qh(i,o,!1),fn(t,i,h);a=i.stateNode,cw.current=i;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&p?(i.child=Kr(i,t.child,null,h),i.child=Kr(i,null,_,h)):et(t,i,_,h),i.memoizedState=a.state,c&&Qh(i,o,!0),i.child}function Gf(t){var i=t.stateNode;i.pendingContext?qh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(t,i.context,!1),Za(t,i.containerInfo)}function qf(t,i,o,a,c){return qr(),Ga(c),i.flags|=256,et(t,i,o,a),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kf(t,i,o){var a=i.pendingProps,c=Ie.current,h=!1,p=(i.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ge(Ie,c&1),t===null)return $a(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=i.mode,h=i.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Ho(p,a,0,null),t=_r(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=yu(o),i.memoizedState=_u,t):vu(i,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return dw(t,i,p,a,_,c,o);if(h){h=a.fallback,p=i.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return(p&1)===0&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=y,i.deletions=null):(a=Bn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Bn(_,h):(h=_r(h,p,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,p=t.child.memoizedState,p=p===null?yu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,i.memoizedState=_u,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function vu(t,i){return i=Ho({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ao(t,i,o,a){return a!==null&&Ga(a),Kr(i,t.child,null,o),t=vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function dw(t,i,o,a,c,h,p){if(o)return i.flags&256?(i.flags&=-257,a=fu(Error(n(422))),Ao(t,i,p,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=Ho({mode:"visible",children:a.children},c,0,null),h=_r(h,c,p,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Kr(i,t.child,null,p),i.child.memoizedState=yu(p),i.memoizedState=_u,h);if((i.mode&1)===0)return Ao(t,i,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=fu(h,a,void 0),Ao(t,i,p,a)}if(_=(p&t.childLanes)!==0,ct||_){if(a=Ue,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),jt(a,t,c,-1))}return Mu(),a=fu(Error(n(421))),Ao(t,i,p,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Cw.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Et=On(c.nextSibling),wt=i,Se=!0,bt=null,t!==null&&(kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,un=t.id,cn=t.overflow,ar=i),i=vu(i,a.children),i.flags|=4096,i)}function Qf(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),Ya(t.return,i,o)}function wu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Yf(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(et(t,i,a.children,o),a=Ie.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,o,i);else if(t.tag===19)Qf(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ge(Ie,a),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Co(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),wu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Co(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}wu(i,!0,o,null,h);break;case"together":wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Oo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function fn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Bn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function hw(t,i,o){switch(i.tag){case 3:Gf(i),qr();break;case 5:cf(i);break;case 1:ut(i.type)&&po(i);break;case 4:Za(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ge(wo,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ge(Ie,Ie.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Kf(t,i,o):(ge(Ie,Ie.current&1),t=fn(t,i,o),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Yf(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(Ie,Ie.current),a)break;return null;case 22:case 23:return i.lanes=0,Bf(t,i,o)}return fn(t,i,o)}var Jf,Eu,Xf,Zf;Jf=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eu=function(){},Xf=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,dr(Jt.current);var h=null;switch(o){case"input":c=Yl(t,c),a=Yl(t,a),h=[];break;case"select":c=b({},c,{value:void 0}),a=b({},a,{value:void 0}),h=[];break;case"textarea":c=Zl(t,c),a=Zl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=co)}ta(o,a);var p;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(p in _)!_.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in y)y.hasOwnProperty(p)&&_[p]!==y[p]&&(o||(o={}),o[p]=y[p])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&ye("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},Zf=function(t,i,o,a){o!==a&&(i.flags|=4)};function ns(t,i){if(!Se)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ye(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function fw(t,i,o){var a=i.pendingProps;switch(Ba(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return ut(i.type)&&fo(),Ye(i),null;case 3:return a=i.stateNode,Jr(),ve(at),ve(Ke),nu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bt!==null&&(Ou(bt),bt=null))),Eu(t,i),Ye(i),null;case 5:eu(i);var c=dr(Ji.current);if(o=i.type,t!==null&&i.stateNode!=null)Xf(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return Ye(i),null}if(t=dr(Jt.current),yo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Yt]=i,a[Gi]=h,t=(i.mode&1)!==0,o){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":Od(a,h),ye("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ye("invalid",a);break;case"textarea":Md(a,h),ye("invalid",a)}ta(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&ye("scroll",a)}switch(o){case"input":js(a),Ld(a,h,!0);break;case"textarea":js(a),Fd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=co)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ud(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Yt]=i,t[Gi]=a,Jf(t,i,!1,!1),i.stateNode=t;e:{switch(p=na(o,a),o){case"dialog":ye("cancel",t),ye("close",t),c=a;break;case"iframe":case"object":case"embed":ye("load",t),c=a;break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],t);c=a;break;case"source":ye("error",t),c=a;break;case"img":case"image":case"link":ye("error",t),ye("load",t),c=a;break;case"details":ye("toggle",t),c=a;break;case"input":Od(t,a),c=Yl(t,a),ye("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=b({},a,{value:void 0}),ye("invalid",t);break;case"textarea":Md(t,a),c=Zl(t,a),ye("invalid",t);break;default:c=a}ta(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?Vd(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&zd(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ci(t,y):typeof y=="number"&&Ci(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&ye("scroll",t):y!=null&&xe(t,h,y,p))}switch(o){case"input":js(t),Ld(t,a,!1);break;case"textarea":js(t),Fd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+de(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Or(t,!!a.multiple,h,!1):a.defaultValue!=null&&Or(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=co)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ye(i),null;case 6:if(t&&i.stateNode!=null)Zf(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=dr(Ji.current),dr(Jt.current),yo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Yt]=i,(h=a.nodeValue!==o)&&(t=wt,t!==null))switch(t.tag){case 3:uo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Yt]=i,i.stateNode=a}return Ye(i),null;case 13:if(ve(Ie),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Et!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tf(),qr(),i.flags|=98560,h=!1;else if(h=yo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Yt]=i}else qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),h=!1}else bt!==null&&(Ou(bt),bt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ie.current&1)!==0?Le===0&&(Le=3):Mu())),i.updateQueue!==null&&(i.flags|=4),Ye(i),null);case 4:return Jr(),Eu(t,i),t===null&&Hi(i.stateNode.containerInfo),Ye(i),null;case 10:return Qa(i.type._context),Ye(i),null;case 17:return ut(i.type)&&fo(),Ye(i),null;case 19:if(ve(Ie),h=i.memoizedState,h===null)return Ye(i),null;if(a=(i.flags&128)!==0,p=h.rendering,p===null)if(a)ns(h,!1);else{if(Le!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=Co(t),p!==null){for(i.flags|=128,ns(h,!1),a=p.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ge(Ie,Ie.current&1|2),i.child}t=t.sibling}h.tail!==null&&Re()>ti&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304)}else{if(!a)if(t=Co(p),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!Se)return Ye(i),null}else 2*Re()-h.renderingStartTime>ti&&o!==1073741824&&(i.flags|=128,a=!0,ns(h,!1),i.lanes=4194304);h.isBackwards?(p.sibling=i.child,i.child=p):(o=h.last,o!==null?o.sibling=p:i.child=p,h.last=p)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Re(),i.sibling=null,o=Ie.current,ge(Ie,a?o&1|2:o&1),i):(Ye(i),null);case 22:case 23:return Lu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(St&1073741824)!==0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function pw(t,i){switch(Ba(i),i.tag){case 1:return ut(i.type)&&fo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Jr(),ve(at),ve(Ke),nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return eu(i),null;case 13:if(ve(Ie),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(Ie),null;case 4:return Jr(),null;case 10:return Qa(i.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var Do=!1,Je=!1,mw=typeof WeakSet=="function"?WeakSet:Set,W=null;function Zr(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Te(t,i,a)}else o.current=null}function Su(t,i,o){try{o()}catch(a){Te(t,i,a)}}var ep=!1;function gw(t,i){if(La=Xs,t=Ah(),ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,y=-1,k=0,A=0,D=t,x=null;t:for(;;){for(var V;D!==o||c!==0&&D.nodeType!==3||(_=p+c),D!==h||a!==0&&D.nodeType!==3||(y=p+a),D.nodeType===3&&(p+=D.nodeValue.length),(V=D.firstChild)!==null;)x=D,D=V;for(;;){if(D===t)break t;if(x===o&&++k===c&&(_=p),x===h&&++A===a&&(y=p),(V=D.nextSibling)!==null)break;D=x,x=D.parentNode}D=V}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ma={focusedElem:t,selectionRange:o},Xs=!1,W=i;W!==null;)if(i=W,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,W=t;else for(;W!==null;){i=W;try{var B=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,Pe=B.memoizedState,C=i.stateNode,E=C.getSnapshotBeforeUpdate(i.elementType===i.type?H:Ft(i.type,H),Pe);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(M){Te(i,i.return,M)}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}return B=ep,ep=!1,B}function rs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Su(i,o,h)}c=c.next}while(c!==a)}}function Lo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Yt],delete i[Gi],delete i[za],delete i[Xv],delete i[Zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=co));else if(a!==4&&(t=t.child,t!==null))for(Cu(t,i,o),t=t.sibling;t!==null;)Cu(t,i,o),t=t.sibling}function Tu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Tu(t,i,o),t=t.sibling;t!==null;)Tu(t,i,o),t=t.sibling}var He=null,Ut=!1;function Un(t,i,o){for(o=o.child;o!==null;)ip(t,i,o),o=o.sibling}function ip(t,i,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Gs,o)}catch{}switch(o.tag){case 5:Je||Zr(o,i);case 6:var a=He,c=Ut;He=null,Un(t,i,o),He=a,Ut=c,He!==null&&(Ut?(t=He,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):He.removeChild(o.stateNode));break;case 18:He!==null&&(Ut?(t=He,o=o.stateNode,t.nodeType===8?Ua(t.parentNode,o):t.nodeType===1&&Ua(t,o),Mi(t)):Ua(He,o.stateNode));break;case 4:a=He,c=Ut,He=o.stateNode.containerInfo,Ut=!0,Un(t,i,o),He=a,Ut=c;break;case 0:case 11:case 14:case 15:if(!Je&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&Su(o,i,p),c=c.next}while(c!==a)}Un(t,i,o);break;case 1:if(!Je&&(Zr(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Te(o,i,_)}Un(t,i,o);break;case 21:Un(t,i,o);break;case 22:o.mode&1?(Je=(a=Je)||o.memoizedState!==null,Un(t,i,o),Je=a):Un(t,i,o);break;default:Un(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new mw),i.forEach(function(a){var c=Tw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function zt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=i,_=p;e:for(;_!==null;){switch(_.tag){case 5:He=_.stateNode,Ut=!1;break e;case 3:He=_.stateNode.containerInfo,Ut=!0;break e;case 4:He=_.stateNode.containerInfo,Ut=!0;break e}_=_.return}if(He===null)throw Error(n(160));ip(h,p,c),He=null,Ut=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Te(c,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(i,t),Zt(t),a&4){try{rs(3,t,t.return),Lo(3,t)}catch(H){Te(t,t.return,H)}try{rs(5,t,t.return)}catch(H){Te(t,t.return,H)}}break;case 1:zt(i,t),Zt(t),a&512&&o!==null&&Zr(o,o.return);break;case 5:if(zt(i,t),Zt(t),a&512&&o!==null&&Zr(o,o.return),t.flags&32){var c=t.stateNode;try{Ci(c,"")}catch(H){Te(t,t.return,H)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Dd(c,h),na(_,p);var k=na(_,h);for(p=0;p<y.length;p+=2){var A=y[p],D=y[p+1];A==="style"?Vd(c,D):A==="dangerouslySetInnerHTML"?zd(c,D):A==="children"?Ci(c,D):xe(c,A,D,k)}switch(_){case"input":Jl(c,h);break;case"textarea":bd(c,h);break;case"select":var x=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Or(c,!!h.multiple,V,!1):x!==!!h.multiple&&(h.defaultValue!=null?Or(c,!!h.multiple,h.defaultValue,!0):Or(c,!!h.multiple,h.multiple?[]:"",!1))}c[Gi]=h}catch(H){Te(t,t.return,H)}}break;case 6:if(zt(i,t),Zt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(H){Te(t,t.return,H)}}break;case 3:if(zt(i,t),Zt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Mi(i.containerInfo)}catch(H){Te(t,t.return,H)}break;case 4:zt(i,t),Zt(t);break;case 13:zt(i,t),Zt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ru=Re())),a&4&&sp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(Je=(k=Je)||A,zt(i,t),Je=k):zt(i,t),Zt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&(t.mode&1)!==0)for(W=t,A=t.child;A!==null;){for(D=W=A;W!==null;){switch(x=W,V=x.child,x.tag){case 0:case 11:case 14:case 15:rs(4,x,x.return);break;case 1:Zr(x,x.return);var B=x.stateNode;if(typeof B.componentWillUnmount=="function"){a=x,o=x.return;try{i=a,B.props=i.memoizedProps,B.state=i.memoizedState,B.componentWillUnmount()}catch(H){Te(a,o,H)}}break;case 5:Zr(x,x.return);break;case 22:if(x.memoizedState!==null){up(D);continue}}V!==null?(V.return=x,W=V):up(D)}A=A.sibling}e:for(A=null,D=t;;){if(D.tag===5){if(A===null){A=D;try{c=D.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=D.stateNode,y=D.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=jd("display",p))}catch(H){Te(t,t.return,H)}}}else if(D.tag===6){if(A===null)try{D.stateNode.nodeValue=k?"":D.memoizedProps}catch(H){Te(t,t.return,H)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;A===D&&(A=null),D=D.return}A===D&&(A=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:zt(i,t),Zt(t),a&4&&sp(t);break;case 21:break;default:zt(i,t),Zt(t)}}function Zt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ci(c,""),a.flags&=-33);var h=rp(t);Tu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=rp(t);Cu(t,_,p);break;default:throw Error(n(161))}}catch(y){Te(t,t.return,y)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function _w(t,i,o){W=t,lp(t)}function lp(t,i,o){for(var a=(t.mode&1)!==0;W!==null;){var c=W,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Do;if(!p){var _=c.alternate,y=_!==null&&_.memoizedState!==null||Je;_=Do;var k=Je;if(Do=p,(Je=y)&&!k)for(W=c;W!==null;)p=W,y=p.child,p.tag===22&&p.memoizedState!==null?cp(c):y!==null?(y.return=p,W=y):cp(c);for(;h!==null;)W=h,lp(h),h=h.sibling;W=c,Do=_,Je=k}ap(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,W=h):ap(t)}}function ap(t){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Je||Lo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!Je)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Ft(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&uf(i,h,a);break;case 3:var p=i.updateQueue;if(p!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uf(i,p,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var D=A.dehydrated;D!==null&&Mi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Je||i.flags&512&&Iu(i)}catch(x){Te(i,i.return,x)}}if(i===t){W=null;break}if(o=i.sibling,o!==null){o.return=i.return,W=o;break}W=i.return}}function up(t){for(;W!==null;){var i=W;if(i===t){W=null;break}var o=i.sibling;if(o!==null){o.return=i.return,W=o;break}W=i.return}}function cp(t){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Lo(4,i)}catch(y){Te(i,o,y)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(y){Te(i,c,y)}}var h=i.return;try{Iu(i)}catch(y){Te(i,h,y)}break;case 5:var p=i.return;try{Iu(i)}catch(y){Te(i,p,y)}}}catch(y){Te(i,i.return,y)}if(i===t){W=null;break}var _=i.sibling;if(_!==null){_.return=i.return,W=_;break}W=i.return}}var yw=Math.ceil,Mo=Ne.ReactCurrentDispatcher,ku=Ne.ReactCurrentOwner,xt=Ne.ReactCurrentBatchConfig,le=0,Ue=null,Ae=null,$e=0,St=0,ei=Dn(0),Le=0,is=null,fr=0,bo=0,Nu=0,ss=null,dt=null,Ru=0,ti=1/0,pn=null,Fo=!1,Pu=null,zn=null,Uo=!1,jn=null,zo=0,os=0,xu=null,jo=-1,Vo=0;function tt(){return(le&6)!==0?Re():jo!==-1?jo:jo=Re()}function Vn(t){return(t.mode&1)===0?1:(le&2)!==0&&$e!==0?$e&-$e:tw.transition!==null?(Vo===0&&(Vo=nh()),Vo):(t=he,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t)}function jt(t,i,o,a){if(50<os)throw os=0,xu=null,Error(n(185));xi(t,o,a),((le&2)===0||t!==Ue)&&(t===Ue&&((le&2)===0&&(bo|=o),Le===4&&Wn(t,$e)),ht(t,a),o===1&&le===0&&(i.mode&1)===0&&(ti=Re()+500,mo&&Mn()))}function ht(t,i){var o=t.callbackNode;tv(t,i);var a=Qs(t,t===Ue?$e:0);if(a===0)o!==null&&Zd(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Zd(o),i===1)t.tag===0?ew(hp.bind(null,t)):Yh(hp.bind(null,t)),Yv(function(){(le&6)===0&&Mn()}),o=null;else{switch(rh(a)){case 1:o=ua;break;case 4:o=eh;break;case 16:o=$s;break;case 536870912:o=th;break;default:o=$s}o=wp(o,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function dp(t,i){if(jo=-1,Vo=0,(le&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ni()&&t.callbackNode!==o)return null;var a=Qs(t,t===Ue?$e:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=Wo(t,a);else{i=a;var c=le;le|=2;var h=pp();(Ue!==t||$e!==i)&&(pn=null,ti=Re()+500,mr(t,i));do try{Ew();break}catch(_){fp(t,_)}while(!0);Ka(),Mo.current=h,le=c,Ae!==null?i=0:(Ue=null,$e=0,i=Le)}if(i!==0){if(i===2&&(c=ca(t),c!==0&&(a=c,i=Au(t,c))),i===1)throw o=is,mr(t,0),Wn(t,a),ht(t,Re()),o;if(i===6)Wn(t,a);else{if(c=t.current.alternate,(a&30)===0&&!vw(c)&&(i=Wo(t,a),i===2&&(h=ca(t),h!==0&&(a=h,i=Au(t,h))),i===1))throw o=is,mr(t,0),Wn(t,a),ht(t,Re()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:gr(t,dt,pn);break;case 3:if(Wn(t,a),(a&130023424)===a&&(i=Ru+500-Re(),10<i)){if(Qs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){tt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Fa(gr.bind(null,t,dt,pn),i);break}gr(t,dt,pn);break;case 4:if(Wn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var p=31-Lt(a);h=1<<p,p=i[p],p>c&&(c=p),a&=~h}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*yw(a/1960))-a,10<a){t.timeoutHandle=Fa(gr.bind(null,t,dt,pn),a);break}gr(t,dt,pn);break;case 5:gr(t,dt,pn);break;default:throw Error(n(329))}}}return ht(t,Re()),t.callbackNode===o?dp.bind(null,t):null}function Au(t,i){var o=ss;return t.current.memoizedState.isDehydrated&&(mr(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=dt,dt=o,i!==null&&Ou(i)),t}function Ou(t){dt===null?dt=t:dt.push.apply(dt,t)}function vw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Mt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wn(t,i){for(i&=~Nu,i&=~bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Lt(i),a=1<<o;t[o]=-1,i&=~a}}function hp(t){if((le&6)!==0)throw Error(n(327));ni();var i=Qs(t,0);if((i&1)===0)return ht(t,Re()),null;var o=Wo(t,i);if(t.tag!==0&&o===2){var a=ca(t);a!==0&&(i=a,o=Au(t,a))}if(o===1)throw o=is,mr(t,0),Wn(t,i),ht(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,gr(t,dt,pn),ht(t,Re()),null}function Du(t,i){var o=le;le|=1;try{return t(i)}finally{le=o,le===0&&(ti=Re()+500,mo&&Mn())}}function pr(t){jn!==null&&jn.tag===0&&(le&6)===0&&ni();var i=le;le|=1;var o=xt.transition,a=he;try{if(xt.transition=null,he=1,t)return t()}finally{he=a,xt.transition=o,le=i,(le&6)===0&&Mn()}}function Lu(){St=ei.current,ve(ei)}function mr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qv(o)),Ae!==null)for(o=Ae.return;o!==null;){var a=o;switch(Ba(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&fo();break;case 3:Jr(),ve(at),ve(Ke),nu();break;case 5:eu(a);break;case 4:Jr();break;case 13:ve(Ie);break;case 19:ve(Ie);break;case 10:Qa(a.type._context);break;case 22:case 23:Lu()}o=o.return}if(Ue=t,Ae=t=Bn(t.current,null),$e=St=i,Le=0,is=null,Nu=bo=fr=0,dt=ss=null,cr!==null){for(i=0;i<cr.length;i++)if(o=cr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}cr=null}return t}function fp(t,i){do{var o=Ae;try{if(Ka(),To.current=Po,ko){for(var a=Ce.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ko=!1}if(hr=0,Fe=De=Ce=null,Xi=!1,Zi=0,ku.current=null,o===null||o.return===null){Le=1,is=i,Ae=null;break}e:{var h=t,p=o.return,_=o,y=i;if(i=$e,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,A=_,D=A.tag;if((A.mode&1)===0&&(D===0||D===11||D===15)){var x=A.alternate;x?(A.updateQueue=x.updateQueue,A.memoizedState=x.memoizedState,A.lanes=x.lanes):(A.updateQueue=null,A.memoizedState=null)}var V=Uf(p);if(V!==null){V.flags&=-257,zf(V,p,_,h,i),V.mode&1&&Ff(h,k,i),i=V,y=k;var B=i.updateQueue;if(B===null){var H=new Set;H.add(y),i.updateQueue=H}else B.add(y);break e}else{if((i&1)===0){Ff(h,k,i),Mu();break e}y=Error(n(426))}}else if(Se&&_.mode&1){var Pe=Uf(p);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),zf(Pe,p,_,h,i),Ga(Xr(y,_));break e}}h=y=Xr(y,_),Le!==4&&(Le=2),ss===null?ss=[h]:ss.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Mf(h,y,i);af(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var M=bf(h,_,i);af(h,M);break e}}h=h.return}while(h!==null)}gp(o)}catch(G){i=G,Ae===o&&o!==null&&(Ae=o=o.return);continue}break}while(!0)}function pp(){var t=Mo.current;return Mo.current=Po,t===null?Po:t}function Mu(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||(fr&268435455)===0&&(bo&268435455)===0||Wn(Ue,$e)}function Wo(t,i){var o=le;le|=2;var a=pp();(Ue!==t||$e!==i)&&(pn=null,mr(t,i));do try{ww();break}catch(c){fp(t,c)}while(!0);if(Ka(),le=o,Mo.current=a,Ae!==null)throw Error(n(261));return Ue=null,$e=0,Le}function ww(){for(;Ae!==null;)mp(Ae)}function Ew(){for(;Ae!==null&&!Gy();)mp(Ae)}function mp(t){var i=vp(t.alternate,t,St);t.memoizedProps=t.pendingProps,i===null?gp(t):Ae=i,ku.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=fw(o,i,St),o!==null){Ae=o;return}}else{if(o=pw(o,i),o!==null){o.flags&=32767,Ae=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ae=null;return}}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=t}while(i!==null);Le===0&&(Le=5)}function gr(t,i,o){var a=he,c=xt.transition;try{xt.transition=null,he=1,Sw(t,i,o,a)}finally{xt.transition=c,he=a}return null}function Sw(t,i,o,a){do ni();while(jn!==null);if((le&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(nv(t,h),t===Ue&&(Ae=Ue=null,$e=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Uo||(Uo=!0,wp($s,function(){return ni(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=xt.transition,xt.transition=null;var p=he;he=1;var _=le;le|=4,ku.current=null,gw(t,o),op(o,t),Wv(Ma),Xs=!!La,Ma=La=null,t.current=o,_w(o),qy(),le=_,he=p,xt.transition=h}else t.current=o;if(Uo&&(Uo=!1,jn=t,zo=c),h=t.pendingLanes,h===0&&(zn=null),Yy(o.stateNode),ht(t,Re()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Fo)throw Fo=!1,t=Pu,Pu=null,t;return(zo&1)!==0&&t.tag!==0&&ni(),h=t.pendingLanes,(h&1)!==0?t===xu?os++:(os=0,xu=t):os=0,Mn(),null}function ni(){if(jn!==null){var t=rh(zo),i=xt.transition,o=he;try{if(xt.transition=null,he=16>t?16:t,jn===null)var a=!1;else{if(t=jn,jn=null,zo=0,(le&6)!==0)throw Error(n(331));var c=le;for(le|=4,W=t.current;W!==null;){var h=W,p=h.child;if((W.flags&16)!==0){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(W=k;W!==null;){var A=W;switch(A.tag){case 0:case 11:case 15:rs(8,A,h)}var D=A.child;if(D!==null)D.return=A,W=D;else for(;W!==null;){A=W;var x=A.sibling,V=A.return;if(tp(A),A===k){W=null;break}if(x!==null){x.return=V,W=x;break}W=V}}}var B=h.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var Pe=H.sibling;H.sibling=null,H=Pe}while(H!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,W=p;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,W=C;break e}W=h.return}}var E=t.current;for(W=E;W!==null;){p=W;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,W=T;else e:for(p=E;W!==null;){if(_=W,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:Lo(9,_)}}catch(G){Te(_,_.return,G)}if(_===p){W=null;break e}var M=_.sibling;if(M!==null){M.return=_.return,W=M;break e}W=_.return}}if(le=c,Mn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Gs,t)}catch{}a=!0}return a}finally{he=o,xt.transition=i}}return!1}function _p(t,i,o){i=Xr(o,i),i=Mf(t,i,1),t=Fn(t,i,1),i=tt(),t!==null&&(xi(t,1,i),ht(t,i))}function Te(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=Xr(o,t),t=bf(i,t,1),i=Fn(i,t,1),t=tt(),i!==null&&(xi(i,1,t),ht(i,t));break}}i=i.return}}function Iw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=tt(),t.pingedLanes|=t.suspendedLanes&o,Ue===t&&($e&o)===o&&(Le===4||Le===3&&($e&130023424)===$e&&500>Re()-Ru?mr(t,0):Nu|=o),ht(t,i)}function yp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var o=tt();t=dn(t,i),t!==null&&(xi(t,i,o),ht(t,o))}function Cw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),yp(t,o)}function Tw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),yp(t,o)}var vp;vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||at.current)ct=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ct=!1,hw(t,i,o);ct=(t.flags&131072)!==0}else ct=!1,Se&&(i.flags&1048576)!==0&&Jh(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Oo(t,i),t=i.pendingProps;var c=Hr(i,Ke.current);Yr(i,o),c=su(null,i,a,t,c,o);var h=ou();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ut(a)?(h=!0,po(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Xa(i),c.updater=xo,i.stateNode=c,c._reactInternals=i,hu(i,a,t,o),i=gu(null,i,a,!0,h,o)):(i.tag=0,Se&&h&&Wa(i),et(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Oo(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=Nw(a),t=Ft(a,t),c){case 0:i=mu(null,i,a,t,o);break e;case 1:i=$f(null,i,a,t,o);break e;case 11:i=jf(null,i,a,t,o);break e;case 14:i=Vf(null,i,a,Ft(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),mu(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),$f(t,i,a,c,o);case 3:e:{if(Gf(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,lf(t,i),Io(i,a,null,o);var p=i.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Xr(Error(n(423)),i),i=qf(t,i,a,o,c);break e}else if(a!==c){c=Xr(Error(n(424)),i),i=qf(t,i,a,o,c);break e}else for(Et=On(i.stateNode.containerInfo.firstChild),wt=i,Se=!0,bt=null,o=sf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),a===c){i=fn(t,i,o);break e}et(t,i,a,o)}i=i.child}return i;case 5:return cf(i),t===null&&$a(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,ba(a,c)?p=null:h!==null&&ba(a,h)&&(i.flags|=32),Hf(t,i),et(t,i,p,o),i.child;case 6:return t===null&&$a(i),null;case 13:return Kf(t,i,o);case 4:return Za(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Kr(i,null,a,o):et(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),jf(t,i,a,c,o);case 7:return et(t,i,i.pendingProps,o),i.child;case 8:return et(t,i,i.pendingProps.children,o),i.child;case 12:return et(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,p=c.value,ge(wo,a._currentValue),a._currentValue=p,h!==null)if(Mt(h.value,p)){if(h.children===c.children&&!at.current){i=fn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=hn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?y.next=y:(y.next=A.next,A.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),Ya(h.return,o,i),_.lanes|=o;break}y=y.next}}else if(h.tag===10)p=h.type===i.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Ya(p,o,i),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===i){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}et(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,Yr(i,o),c=Rt(c),a=a(c),i.flags|=1,et(t,i,a,o),i.child;case 14:return a=i.type,c=Ft(a,i.pendingProps),c=Ft(a.type,c),Vf(t,i,a,c,o);case 15:return Wf(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Ft(a,c),Oo(t,i),i.tag=1,ut(a)?(t=!0,po(i)):t=!1,Yr(i,o),Df(i,a,c),hu(i,a,c,o),gu(null,i,a,!0,t,o);case 19:return Yf(t,i,o);case 22:return Bf(t,i,o)}throw Error(n(156,i.tag))};function wp(t,i){return Xd(t,i)}function kw(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,i,o,a){return new kw(t,i,o,a)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nw(t){if(typeof t=="function")return bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ct)return 11;if(t===Tt)return 14}return 2}function Bn(t,i){var o=t.alternate;return o===null?(o=At(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Bo(t,i,o,a,c,h){var p=2;if(a=t,typeof t=="function")bu(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Ge:return _r(o.children,c,h,i);case ot:p=8,c|=8;break;case Kt:return t=At(12,o,i,c|2),t.elementType=Kt,t.lanes=h,t;case qe:return t=At(13,o,i,c),t.elementType=qe,t.lanes=h,t;case lt:return t=At(19,o,i,c),t.elementType=lt,t.lanes=h,t;case U:return Ho(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dt:p=10;break e;case on:p=9;break e;case Ct:p=11;break e;case Tt:p=14;break e;case O:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=At(p,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function _r(t,i,o,a){return t=At(7,t,a,i),t.lanes=o,t}function Ho(t,i,o,a){return t=At(22,t,a,i),t.elementType=U,t.lanes=o,t.stateNode={isHidden:!1},t}function Fu(t,i,o){return t=At(6,t,null,i),t.lanes=o,t}function Uu(t,i,o){return i=At(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Rw(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function zu(t,i,o,a,c,h,p,_,y){return t=new Rw(t,i,o,_,y),i===1?(i=1,h===!0&&(i|=8)):i=0,h=At(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(h),t}function Pw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Ep(t){if(!t)return Ln;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ut(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ut(o))return Kh(t,o,i)}return i}function Sp(t,i,o,a,c,h,p,_,y){return t=zu(o,a,!0,t,c,h,p,_,y),t.context=Ep(null),o=t.current,a=tt(),c=Vn(o),h=hn(a,c),h.callback=i??null,Fn(o,h,c),t.current.lanes=c,xi(t,c,a),ht(t,a),t}function $o(t,i,o,a){var c=i.current,h=tt(),p=Vn(c);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=hn(h,p),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Fn(c,i,p),t!==null&&(jt(t,c,p,h),So(t,c,p)),p}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function ju(t,i){Ip(t,i),(t=t.alternate)&&Ip(t,i)}function xw(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}qo.prototype.render=Vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},qo.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;pr(function(){$o(null,t,null,null)}),i[ln]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var i=oh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&uh(t)}};function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Aw(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Go(p);h.call(k)}}var p=Sp(i,a,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=p,t[ln]=p.current,Hi(t.nodeType===8?t.parentNode:t),pr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Go(y);_.call(k)}}var y=zu(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=y,t[ln]=y.current,Hi(t.nodeType===8?t.parentNode:t),pr(function(){$o(i,y,o,a)}),y}function Qo(t,i,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var y=Go(p);_.call(y)}}$o(i,p,t,c)}else p=Aw(o,i,t,c,a);return Go(p)}ih=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Pi(i.pendingLanes);o!==0&&(ha(i,o|1),ht(i,Re()),(le&6)===0&&(ti=Re()+500,Mn()))}break;case 13:pr(function(){var a=dn(t,1);if(a!==null){var c=tt();jt(a,t,1,c)}}),ju(t,1)}},fa=function(t){if(t.tag===13){var i=dn(t,134217728);if(i!==null){var o=tt();jt(i,t,134217728,o)}ju(t,134217728)}},sh=function(t){if(t.tag===13){var i=Vn(t),o=dn(t,i);if(o!==null){var a=tt();jt(o,t,i,a)}ju(t,i)}},oh=function(){return he},lh=function(t,i){var o=he;try{return he=t,i()}finally{he=o}},sa=function(t,i,o){switch(i){case"input":if(Jl(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=ho(a);if(!c)throw Error(n(90));Ad(a),Jl(a,c)}}}break;case"textarea":bd(t,o);break;case"select":i=o.value,i!=null&&Or(t,!!o.multiple,i,!1)}},$d=Du,Gd=pr;var Ow={usingClientEntryPoint:!1,Events:[qi,Wr,ho,Bd,Hd,Du]},ls={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Gs=Yo.inject(Dw),Qt=Yo}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow,ft.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(i))throw Error(n(200));return Pw(t,i,null,o)},ft.createRoot=function(t,i){if(!Wu(t))throw Error(n(299));var o=!1,a="",c=Cp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=zu(t,1,!1,null,null,o,!1,a,c),t[ln]=i.current,Hi(t.nodeType===8?t.parentNode:t),new Vu(i)},ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yd(i),t=t===null?null:t.stateNode,t},ft.flushSync=function(t){return pr(t)},ft.hydrate=function(t,i,o){if(!Ko(i))throw Error(n(200));return Qo(null,t,i,!0,o)},ft.hydrateRoot=function(t,i,o){if(!Wu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=Cp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),i=Sp(i,null,t,1,o??null,c,!1,h,p),t[ln]=i.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qo(i)},ft.render=function(t,i,o){if(!Ko(i))throw Error(n(200));return Qo(null,t,i,!1,o)},ft.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},ft.unstable_batchedUpdates=Du,ft.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!Ko(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,o,!1,a)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Dp;function Ww(){if(Dp)return $u.exports;Dp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),$u.exports=Vw(),$u.exports}var Lp;function Bw(){if(Lp)return Jo;Lp=1;var r=Ww();return Jo.createRoot=r.createRoot,Jo.hydrateRoot=r.hydrateRoot,Jo}var Hw=Bw();const $w=ng(Hw);/**
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
 */const Kw=Xe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},m)=>Xe.createElement("svg",{ref:m,...qw,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:rg("lucide",l),...f},[...d.map(([g,w])=>Xe.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=(r,e)=>{const n=Xe.forwardRef(({className:s,...l},u)=>Xe.createElement(Kw,{ref:u,iconNode:e,className:rg(`lucide-${Gw(r)}`,s),...l}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Mp=Al("ArrowLeft",Qw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Jw=Al("DollarSign",Yw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bp=Al("Plus",Xw);/**
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
 */const z=function(r,e){if(!r)throw gi(e)},gi=function(r){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const sg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},t0=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,m=l+2<r.length,g=m?r[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let I=(f&15)<<2|g>>6,F=g&63;m||(F=64,d||(I=64)),s.push(n[w],n[v],n[I],n[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(sg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):t0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new n0;const I=u<<2|f>>4;if(s.push(I),g!==64){const F=f<<4&240|g>>2;if(s.push(F),v!==64){const j=g<<6&192|v;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(r){const e=sg(r);return Dc.encodeByteArray(e,!0)},ll=function(r){return og(r).replace(/\./g,"")},al=function(r){try{return Dc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const o0=()=>s0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof Fp>"u")return;const r=Fp.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},a0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&al(r[1]);return e&&JSON.parse(e)},Lc=()=>{try{return e0()||o0()||l0()||a0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ag=r=>{var e,n;return(n=(e=Lc())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},u0=r=>{const e=ag(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ug=()=>{var r;return(r=Lc())==null?void 0:r.config},cg=r=>{var e;return(e=Lc())==null?void 0:e[`_${r}`]};/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function d0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bc(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h0(){const r=it();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function f0(){return ig.NODE_ADMIN===!0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function hg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const p0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=p0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?m0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function m0(r,e){try{let n=0,s="";for(;n<r.length;){const l=r.indexOf("{$",n);if(l===-1){s+=r.substring(n);break}const u=r.indexOf("}",l+2);if(u===-1){s+=r.substring(n);break}const d=r.substring(l+2,u),f=e[d];s+=r.substring(n,l)+(f!=null?String(f):`<${d}?>`),n=u+1}return s}catch{return r}}/**
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
 */function vs(r){return JSON.parse(r)}function Me(r){return JSON.stringify(r)}/**
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
 */class y0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const I=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const I=(l<<5|l>>>27)+g+m+w+s[v]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function v0(r,e){const n=new w0(r,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Qu),l.error===void 0&&(l.error=Qu),l.complete===void 0&&(l.complete=Qu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Qu(){}function zc(r,e){return`${r} failed: ${e} argument `}/**
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
 */const S0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,z(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const I0=1e3,C0=2,T0=14400*1e3,k0=.5;function zp(r,e=I0,n=C0){const s=e*Math.pow(n,r),l=Math.round(k0*s*(Math.random()-.5)*2);return Math.min(T0,s+l)}/**
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
 */function st(r){return r&&r._delegate?r._delegate:r}/**
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
 */function xs(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pg(r){return(await fetch(r,{credentials:"include"})).ok}class qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class N0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ol;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P0(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(r){return r===yr?void 0:r}function P0(r){return r.instantiationMode==="EAGER"}/**
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
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new N0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(fe||(fe={}));const A0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},O0=fe.INFO,D0={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},L0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=D0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=O0,this._logHandler=L0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const M0=(r,e)=>e.some(n=>r instanceof n);let jp,Vp;function b0(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F0(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,fc=new WeakMap,gg=new WeakMap,Yu=new WeakMap,jc=new WeakMap;function U0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(Yn(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,r)}).catch(()=>{}),jc.set(e,r),e}function z0(r){if(fc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});fc.set(r,e)}let pc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return fc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||gg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function j0(r){pc=r(pc)}function V0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Ju(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Yn(s)}:F0().includes(r)?function(...e){return r.apply(Ju(this),e),Yn(mg.get(this))}:function(...e){return Yn(r.apply(Ju(this),e))}}function W0(r){return typeof r=="function"?V0(r):(r instanceof IDBTransaction&&z0(r),M0(r,b0())?new Proxy(r,pc):r)}function Yn(r){if(r instanceof IDBRequest)return U0(r);if(Yu.has(r))return Yu.get(r);const e=W0(r);return e!==r&&(Yu.set(r,e),jc.set(e,r)),e}const Ju=r=>jc.get(r);function _g(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=Yn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Yn(d.result),m.oldVersion,m.newVersion,Yn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const B0=["get","getKey","getAll","getAllKeys","count"],H0=["put","add","delete","clear"],Xu=new Map;function Wp(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=H0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||B0.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Xu.set(e,u),u}j0(r=>({...r,get:(e,n,s)=>Wp(e,n)||r.get(e,n,s),has:(e,n)=>!!Wp(e,n)||r.has(e,n)}));/**
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
 */const wn=new Ll("@firebase/app"),q0="@firebase/app-compat",K0="@firebase/analytics-compat",Q0="@firebase/analytics",Y0="@firebase/app-check-compat",J0="@firebase/app-check",X0="@firebase/auth",Z0="@firebase/auth-compat",eE="@firebase/database",tE="@firebase/data-connect",nE="@firebase/database-compat",rE="@firebase/functions",iE="@firebase/functions-compat",sE="@firebase/installations",oE="@firebase/installations-compat",lE="@firebase/messaging",aE="@firebase/messaging-compat",uE="@firebase/performance",cE="@firebase/performance-compat",dE="@firebase/remote-config",hE="@firebase/remote-config-compat",fE="@firebase/storage",pE="@firebase/storage-compat",mE="@firebase/firestore",gE="@firebase/ai",_E="@firebase/firestore-compat",yE="firebase",vE="12.17.0";/**
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
 */const cl=new Map,EE=new Map,_c=new Map;function Hp(r,e){try{r.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function nn(r){const e=r.name;if(_c.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,r);for(const n of cl.values())Hp(n,r);for(const n of EE.values())Hp(n,r);return!0}function xr(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Vt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const SE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Pr("app","Firebase",SE);/**
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
 */const yi=vE;function yg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:gc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw mn.create("bad-app-name",{appName:String(l)});if(n||(n=ug()),!n)throw mn.create("no-options");const u=cl.get(l);if(u)if(er(n,u.options)){if(er(s,u.config))return u;throw mn.create("duplicate-app",{appName:l,mismatchedParam:"config",oldValue:JSON.stringify(u.config),newValue:JSON.stringify(s)})}else throw mn.create("duplicate-app",{appName:l,mismatchedParam:"options",oldValue:JSON.stringify(u.options),newValue:JSON.stringify(n)});const d=new x0(l);for(const m of _c.values())d.addComponent(m);const f=new IE(n,s,d);return cl.set(l,f),f}function Vc(r=gc){const e=cl.get(r);if(!e&&r===gc&&ug())return yg();if(!e)throw mn.create("no-app",{appName:r});return e}function Ot(r,e,n){let s=wE[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(d.join(" "));return}nn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const NE=1024,RE=30;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Gp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>RE){const d=OE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:l}=xE(this._heartbeatsCache.heartbeats),u=ll(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return wn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function xE(r,e=NE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),qp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(r){return ll(JSON.stringify({version:2,heartbeats:r})).length}function OE(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function DE(r){nn(new qt("platform-logger",e=>new $0(e),"PRIVATE")),nn(new qt("heartbeat",e=>new PE(e),"PRIVATE")),Ot(mc,Bp,r),Ot(mc,Bp,"esm2020"),Ot("fire-js","")}/**
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
 */let Eg="";function LE(r){Eg=r}/**
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
 */class ME{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class bE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Sg=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ME(e)}}catch{}return new bE},wr=Sg("localStorage"),FE=Sg("sessionStorage");/**
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
 */const oi=new Ll("@firebase/database"),UE=(function(){let r=1;return function(){return r++}})(),Ig=function(r){const e=S0(r),n=new y0;n.update(e);const s=n.digest();return Dc.encodeByteArray(s)},As=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=As.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let fs=null,Jp=!0;const zE=function(r,e){z(!0,"Can't turn on custom loggers persistently."),oi.logLevel=fe.VERBOSE,fs=oi.log.bind(oi)},Ze=function(...r){if(Jp===!0&&(Jp=!1,fs===null&&FE.get("logging_enabled")===!0&&zE()),fs){const e=As.apply(null,r);fs(e)}},Os=function(r){return function(...e){Ze(r,...e)}},yc=function(...r){const e="FIREBASE INTERNAL ERROR: "+As(...r);oi.error(e)},En=function(...r){const e=`FIREBASE FATAL ERROR: ${As(...r)}`;throw oi.error(e),new Error(e)},mt=function(...r){const e="FIREBASE WARNING: "+As(...r);oi.warn(e)},jE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cg=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},VE=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Ir="[MAX_NAME]",vi=function(r,e){if(r===e)return 0;if(r===fi||e===Ir)return-1;if(e===fi||r===Ir)return 1;{const n=Xp(r),s=Xp(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},WE=function(r,e){return r===e?0:r<e?-1:1},us=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Me(e))},Wc=function(r){if(typeof r!="object"||r===null)return Me(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Wc(r[e[s]]);return n+="}",n},Tg=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function gt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const kg=function(r){z(!Cg(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(m=0;m<64;m+=8){let I=parseInt(w.substr(m,8),2).toString(16);I.length===1&&(I="0"+I),v=v+I}return v.toLowerCase()},BE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $E(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const GE=new RegExp("^-?(0*)\\d{1,10}$"),qE=-2147483648,KE=2147483647,Xp=function(r){if(GE.test(r)){const e=Number(r);if(e>=qE&&e<=KE)return e}return null},wi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},QE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ps=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class YE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class JE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nl.OWNER="owner";/**
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
 */const Bc="5",Ng="v",Rg="s",Pg="r",xg="f",Ag=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Og="ls",Dg="p",vc="ac",Lg="websocket",Mg="long_polling";/**
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
 */class bg{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XE(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Fg(r,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===Lg)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Mg)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XE(r)&&(n.ns=r.namespace);const l=[];return gt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */const Zp="start",nS="close",rS="pLPCommand",iS="pRTLPCB",Ug="id",zg="pw",jg="ser",sS="cb",oS="seg",lS="ts",aS="d",uS="dframe",Vg=1870,Wg=30,cS=Vg-Wg,dS=25e3,hS=3e4;class ii{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Os(e),this.stats_=Hc(n),this.urlFn=m=>(this.appCheckToken&&(m[vc]=this.appCheckToken),Fg(n,Mg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hS)),VE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $c((...u)=>{const[d,f,m,g,w]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Zp)this.id=f,this.password=m;else if(d===nS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zp]="t",s[jg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ng]=Bc,this.transportSessionId&&(s[Rg]=this.transportSessionId),this.lastSessionId&&(s[Og]=this.lastSessionId),this.applicationId&&(s[Dg]=this.applicationId),this.appCheckToken&&(s[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ag.test(location.hostname)&&(s[Pg]=xg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BE()&&!HE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=og(n),l=Tg(s,cS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[uS]="t",s[Ug]=e,s[zg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $c{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UE(),window[rS+this.uniqueCallbackIdentifier]=e,window[iS+this.uniqueCallbackIdentifier]=n,this.myIFrame=$c.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Ze("frame writing exception"),f.stack&&Ze(f.stack),Ze(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ug]=this.myID,e[zg]=this.myPW,e[jg]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wg+s.length<=Vg;){const d=this.pendingSegs.shift();s=s+"&"+oS+l+"="+d.seg+"&"+lS+l+"="+d.ts+"&"+aS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(dS)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const fS=16384,pS=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class Wt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Os(this.connId),this.stats_=Hc(n),this.connURL=Wt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Ng]=Bc,typeof location<"u"&&location.hostname&&Ag.test(location.hostname)&&(d[Pg]=xg),n&&(d[Rg]=n),s&&(d[Og]=s),l&&(d[vc]=l),u&&(d[Dg]=u),Fg(e,Lg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;f0(),this.mySock=new dl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&dl!==null&&!Wt.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tg(n,fS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
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
 */class Es{static get ALL_TRANSPORTS(){return[ii,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Wt&&Wt.isAvailable();let s=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Wt];else{const l=this.transports_=[];for(const u of Es.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const mS=6e4,gS=5e3,_S=10*1024,yS=100*1024,nc="t",em="d",vS="s",tm="r",wS="e",nm="o",rm="a",im="n",sm="p",ES="h";class SS{constructor(e,n,s,l,u,d,f,m,g,w){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=w,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Os("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_S?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nc in e){const n=e[nc];n===rm?this.upgradeIfSecondaryHealthy_():n===tm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),s=us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),s=us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(nc,e);if(em in e){const s=e[em];if(n===ES){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vS?this.onConnectionShutdown_(s):n===tm?this.onReset_(s):n===wS?yc("Server Error: "+s):n===nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bc!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hg{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hl extends Hg{static getInstance(){return new hl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const om=32,lm=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new me("")}function oe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function _e(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new me(r.pieces_,e)}function $g(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function IS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Gg(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function qg(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new me(e,0)}function be(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new me(n,0)}function se(r){return r.pieceNum_>=r.pieces_.length}function nt(r,e){const n=oe(r),s=oe(e);if(n===null)return e;if(n===s)return nt(_e(r),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Kg(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Bt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class CS{constructor(e,n){this.errorPrefix_=n,this.parts_=Gg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);Qg(this)}}function TS(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Dl(e),Qg(r)}function kS(r){const e=r.parts_.pop();r.byteLength_-=Dl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Qg(r){if(r.byteLength_>lm)throw new Error(r.errorPrefix_+"has a key path longer than "+lm+" bytes ("+r.byteLength_+").");if(r.parts_.length>om)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+om+") or object contains a cycle "+vr(r))}function vr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Gc extends Hg{static getInstance(){return new Gc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const cs=1e3,NS=300*1e3,am=30*1e3,RS=1.3,PS=3e4,xS="server_kill",um=3;class vn extends Bg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=vn.nextPersistentConnectionId_++,this.log_=Os("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cs,this.maxReconnectDelay_=NS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Me(u)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ol,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;vn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const s=hi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=am)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=g0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PS&&(this.reconnectDelay_=cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(v){z(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:m,sendRequest:g};const w=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,I]=await Promise.all([this.authTokenProvider_.getToken(w),this.appCheckTokenProvider_.getToken(w)]);d?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=I&&I.token,f=new SS(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,F=>{mt(F+" ("+this.repoInfo_.toString()+")"),this.interrupt(xS)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&mt(v),m())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hc(this.interruptReasons_)&&(this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Wc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=um&&(this.reconnectDelay_=am,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Eg.replace(/\./g,"-")]=1,Mc()?e["framework.cordova"]=1:dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return hc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class Ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(fi,e),l=new ie(fi,n);return this.compare(s,l)!==0}minPost(){return ie.MIN}}/**
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
 */let Xo;class Yg extends Ml{static get __EMPTY_NODE(){return Xo}static set __EMPTY_NODE(e){Xo=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Ir,Xo)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Xo)}toString(){return".key"}}const li=new Yg;/**
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
 */class Zo{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=l??pt.EMPTY_NODE,this.right=u??pt.EMPTY_NODE}copy(e,n,s,l,u){return new Ve(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class AS{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zo(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new AS;/**
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
 */let wc;function DS(r){wc=r}const Jg=function(r){return typeof r=="number"?"number:"+kg(r):"string:"+r},Xg=function(r){if(r.isLeafNode()){const e=r.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else z(r===wc||r.isEmpty(),"priority of unexpected type.");z(r===wc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cm;class je{static set __childrenNodeConstructor(e){cm=e}static get __childrenNodeConstructor(){return cm}constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:oe(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kg(this.value_):e+=this.value_,this.lazyHash_=Ig(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=je.VALUE_TYPE_ORDER.indexOf(n),u=je.VALUE_TYPE_ORDER.indexOf(s);return z(l>=0,"Unknown leaf type: "+n),z(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zg,e_;function LS(r){Zg=r}function MS(r){e_=r}class bS extends Ml{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?vi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ir,new je("[PRIORITY-POST]",e_))}makePost(e,n){const s=Zg(e);return new ie(n,new je("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new bS;/**
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
 */const FS=Math.log(2);class US{constructor(e){const n=u=>parseInt(Math.log(u)/FS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(r,e,n,s){r.sort(e);const l=function(m,g){const w=g-m;let v,I;if(w===0)return null;if(w===1)return v=r[m],I=n?n(v):v,new Ve(I,v.node,Ve.BLACK,null,null);{const F=parseInt(w/2,10)+m,j=l(m,F),$=l(F+1,g);return v=r[F],I=n?n(v):v,new Ve(I,v.node,Ve.BLACK,j,$)}},u=function(m){let g=null,w=null,v=r.length;const I=function(j,$){const q=v-j,pe=v;v-=j;const Oe=l(q+1,pe),xe=r[q],Ne=n?n(xe):xe;F(new Ve(Ne,xe.node,$,null,Oe))},F=function(j){g?(g.left=j,g=j):(w=j,g=j)};for(let j=0;j<m.count;++j){const $=m.nextBitIsOne(),q=Math.pow(2,m.count-(j+1));$?I(q,Ve.BLACK):(I(q,Ve.BLACK),I(q,Ve.RED))}return w},d=new US(r.length),f=u(d);return new pt(s||e,f)};/**
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
 */let rc;const ri={};class gn{static get Default(){return z(ri&&ke,"ChildrenNode.ts has not been loaded"),rc=rc||new gn({".priority":ri},{".priority":ke}),rc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==li,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ie.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=fl(s,e.getCompare()):f=ri;const m=e.toString(),g={...this.indexSet_};g[m]=e;const w={...this.indexes_};return w[m]=f,new gn(w,g)}addToIndexes(e,n){const s=ul(this.indexes_,(l,u)=>{const d=hi(this.indexSet_,u);if(z(d,"Missing index implementation for "+u),l===ri)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(ie.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),fl(f,d.getCompare())}else return ri;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new ie(e.name,f))),m.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=ul(this.indexes_,l=>{if(l===ri)return l;{const u=n.get(e.name);return u?l.remove(new ie(e.name,u)):l}});return new gn(s,this.indexSet_)}}/**
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
 */let ds;class J{static get EMPTY_NODE(){return ds||(ds=new J(new pt(qc),null,gn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xg(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ds:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ds:this.priorityNode_;return new J(l,d,u)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{z(oe(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(ke,(d,f)=>{n[d]=f.val(e),s++,u&&J.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jg(this.getPriority().val())+":"),this.forEachChild(ke,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Ig(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ie(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ie.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ds?-1:0}withIndex(e){if(e===li||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===li||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ke),l=n.getIterator(ke);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===li?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class zS extends J{constructor(){super(new pt(qc),J.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Ds=new zS;Object.defineProperties(ie,{MIN:{value:new ie(fi,J.EMPTY_NODE)},MAX:{value:new ie(Ir,Ds)}});Yg.__EMPTY_NODE=J.EMPTY_NODE;je.__childrenNodeConstructor=J;DS(Ds);MS(Ds);/**
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
 */const jS=!0;function We(r,e=null){if(r===null)return J.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new je(n,We(e))}if(!(r instanceof Array)&&jS){const n=[];let s=!1;if(gt(r,(d,f)=>{if(d.substring(0,1)!=="."){const m=We(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ie(d,m)))}}),n.length===0)return J.EMPTY_NODE;const u=fl(n,OS,d=>d.name,qc);if(s){const d=fl(n,ke.getCompare());return new J(u,We(e),new gn({".priority":d},{".priority":ke}))}else return new J(u,We(e),gn.Default)}else{let n=J.EMPTY_NODE;return gt(r,(s,l)=>{if(Cn(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}LS(We);/**
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
 */class VS extends Ml{constructor(e){super(),this.indexPath_=e,z(!se(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?vi(e.name,n.name):u}makePost(e,n){const s=We(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Ds);return new ie(Ir,e)}toString(){return Gg(this.indexPath_,0).join("/")}}/**
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
 */class WS extends Ml{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=We(e);return new ie(n,s)}toString(){return".value"}}const BS=new WS;/**
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
 */class Kc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Ss(n,f)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(pi(n,s)):d.trackChildChange(Is(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ke,(l,u)=>{n.hasChild(l)||s.trackChildChange(Ss(l,u))}),n.isLeafNode()||n.forEachChild(ke,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Is(l,u,d))}else s.trackChildChange(pi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cs{constructor(e){this.indexedFilter_=new Kc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ie(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const u=this;return n.forEachChild(ke,(d,f)=>{u.matches(new ie(d,f))||(l=l.updateImmediateChild(d,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class $S{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ie(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(I,F)=>v(F,I)}else d=this.index_.getCompare();const f=e;z(f.numChildren()===this.limit_,"");const m=new ie(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),w=this.rangedFilter_.matches(m);if(f.hasChild(n)){const v=f.getImmediateChild(n);let I=l.getChildAfterChild(this.index_,g,this.reverse_);for(;I!=null&&(I.name===n||f.hasChild(I.name));)I=l.getChildAfterChild(this.index_,I,this.reverse_);const F=I==null?1:d(I,m);if(w&&!s.isEmpty()&&F>=0)return u!=null&&u.trackChildChange(Is(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Ss(n,v));const $=f.updateImmediateChild(n,J.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(u!=null&&u.trackChildChange(pi(I.name,I.node)),$.updateImmediateChild(I.name,I.node)):$}}else return s.isEmpty()?e:w&&d(g,m)>=0?(u!=null&&(u.trackChildChange(Ss(g.name,g.node)),u.trackChildChange(pi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,J.EMPTY_NODE)):e}}/**
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
 */class Qc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Qc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GS(r){return r.loadsAllData()?new Kc(r.getIndex()):r.hasLimit()?new $S(r):new Cs(r)}function dm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===ke?n="$priority":r.index_===BS?n="$value":r.index_===li?n="$key":(z(r.index_ instanceof VS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Me(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Me(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Me(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Me(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Me(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function hm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==ke&&(e.i=r.index_.toString()),e}/**
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
 */class pl extends Bg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Os("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=pl.getListenId_(e,s),f={};this.listens_[d]=f;const m=dm(e._queryParams);this.restRequest_(u+".json",m,(g,w)=>{let v=w;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),hi(this.listens_,d)===f){let I;g?g===401?I="permission_denied":I="rest_error:"+g:I="ok",l(I,null)}})}unlisten(e,n){const s=pl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=dm(e._queryParams),s=e._path.toString(),l=new Ol;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=vs(f.responseText)}catch{mt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class qS{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ml(){return{value:null,children:new Map}}function n_(r,e,n){if(se(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=oe(e);r.children.has(s)||r.children.set(s,ml());const l=r.children.get(s);e=_e(e),n_(l,e,n)}}function Ec(r,e,n){r.value!==null?n(e,r.value):KS(r,(s,l)=>{const u=new me(e.toString()+"/"+s);Ec(l,u,n)})}function KS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class QS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&gt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const fm=10*1e3,YS=30*1e3,JS=300*1e3;class XS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QS(e);const s=fm+(YS-fm)*Math.random();ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;gt(e,(l,u)=>{u>0&&Cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*JS))}}/**
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
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new gl(ue(),n,this.revert)}}else return z(oe(this.path)===e,"operationForChild called for unrelated child."),new gl(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Ts(this.source,ue()):new Ts(this.source,_e(this.path))}}/**
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
 */class Cr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(e){return se(this.path)?new Cr(this.source,ue(),this.snap.getImmediateChild(e)):new Cr(this.source,_e(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ht.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new Cr(this.source,ue(),n.value):new ks(this.source,ue(),n)}else return z(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ZS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(HS(d.childName,d.snapshotNode))}),hs(r,l,"child_removed",e,s,n),hs(r,l,"child_added",e,s,n),hs(r,l,"child_moved",u,s,n),hs(r,l,"child_changed",e,s,n),hs(r,l,"value",e,s,n),l}function hs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>nI(r,f,m)),d.forEach(f=>{const m=tI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,r.query_))})})}function tI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function nI(r,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),l=new ie(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function bl(r,e){return{eventCache:r,serverCache:e}}function ms(r,e,n,s){return bl(new nr(e,n,s),r.serverCache)}function i_(r,e,n,s){return bl(r.eventCache,new nr(e,n,s))}function _l(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Tr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let ic;const rI=()=>(ic||(ic=new pt(WE)),ic);class we{static fromObject(e){let n=new we(null);return gt(e,(s,l)=>{n=n.set(new me(s),l)}),n}constructor(e,n=rI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(se(e))return null;{const s=oe(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(_e(e),n);return u!=null?{path:be(new me(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=oe(e),u=(this.children.get(s)||new we(null)).set(_e(e),n),d=this.children.insert(s,u);return new we(this.value,d)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const l=s.remove(_e(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new we(null):new we(this.value,u)}else return this}}get(e){if(se(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(se(e))return n;{const s=oe(e),u=(this.children.get(s)||new we(null)).setTree(_e(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new we(this.value,d)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(be(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(se(e))return null;{const u=oe(e),d=this.children.get(u);return d?d.findOnPath_(_e(e),be(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const l=oe(e),u=this.children.get(l);return u?u.foreachOnPath_(_e(e),be(n,l),s):new we(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new we(null))}}function gs(r,e,n){if(se(e))return new Gt(new we(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=nt(l,e);return u=u.updateChild(d,n),new Gt(r.writeTree_.set(l,u))}else{const l=new we(n),u=r.writeTree_.setTree(e,l);return new Gt(u)}}}function pm(r,e,n){let s=r;return gt(n,(l,u)=>{s=gs(s,be(e,l),u)}),s}function mm(r,e){if(se(e))return Gt.empty();{const n=r.writeTree_.setTree(e,new we(null));return new Gt(n)}}function Sc(r,e){return Ar(r,e)!=null}function Ar(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function gm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,l)=>{e.push(new ie(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ie(s,l.value))}),e}function Jn(r,e){if(se(e))return r;{const n=Ar(r,e);return n!=null?new Gt(new we(n)):new Gt(r.writeTree_.subtree(e))}}function Ic(r){return r.writeTree_.isEmpty()}function mi(r,e){return s_(ue(),r.writeTree_,e)}function s_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(z(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=s_(be(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(be(r,".priority"),s)),n}}/**
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
 */function Fl(r,e){return u_(e,r)}function iI(r,e,n,s,l){z(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=gs(r.visibleWrites,e,n)),r.lastWriteId=s}function sI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function oI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&lI(f,s.path)?l=!1:Bt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return aI(r),!0;if(s.snap)r.visibleWrites=mm(r.visibleWrites,s.path);else{const f=s.children;gt(f,m=>{r.visibleWrites=mm(r.visibleWrites,be(s.path,m))})}return!0}else return!1}function lI(r,e){if(r.snap)return Bt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Bt(be(r.path,n),e))return!0;return!1}function aI(r){r.visibleWrites=o_(r.allWrites,uI,ue()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function uI(r){return r.visible}function o_(r,e,n){let s=Gt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Bt(n,d)?(f=nt(n,d),s=gs(s,f,u.snap)):Bt(d,n)&&(f=nt(d,n),s=gs(s,ue(),u.snap.getChild(f)));else if(u.children){if(Bt(n,d))f=nt(n,d),s=pm(s,f,u.children);else if(Bt(d,n))if(f=nt(d,n),se(f))s=pm(s,ue(),u.children);else{const m=hi(u.children,oe(f));if(m){const g=m.getChild(_e(f));s=gs(s,ue(),g)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function l_(r,e,n,s,l){if(!s&&!l){const u=Ar(r.visibleWrites,e);if(u!=null)return u;{const d=Jn(r.visibleWrites,e);if(Ic(d))return n;if(n==null&&!Sc(d,ue()))return null;{const f=n||J.EMPTY_NODE;return mi(d,f)}}}else{const u=Jn(r.visibleWrites,e);if(!l&&Ic(u))return n;if(!l&&n==null&&!Sc(u,ue()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Bt(g.path,e)||Bt(e,g.path))},f=o_(r.allWrites,d,e),m=n||J.EMPTY_NODE;return mi(f,m)}}}function cI(r,e,n){let s=J.EMPTY_NODE;const l=Ar(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(ke,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Jn(r.visibleWrites,e);return n.forEachChild(ke,(d,f)=>{const m=mi(Jn(u,new me(d)),f);s=s.updateImmediateChild(d,m)}),gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Jn(r.visibleWrites,e);return gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function dI(r,e,n,s,l){z(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=be(e,n);if(Sc(r.visibleWrites,u))return null;{const d=Jn(r.visibleWrites,u);return Ic(d)?l.getChild(n):mi(d,l.getChild(n))}}function hI(r,e,n,s){const l=be(e,n),u=Ar(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Jn(r.visibleWrites,l);return mi(d,s.getNode().getImmediateChild(n))}else return null}function fI(r,e){return Ar(r.visibleWrites,e)}function pI(r,e,n,s,l,u,d){let f;const m=Jn(r.visibleWrites,e),g=Ar(m,ue());if(g!=null)f=g;else if(n!=null)f=mi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),I=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let F=I.getNext();for(;F&&w.length<l;)v(F,s)!==0&&w.push(F),F=I.getNext();return w}else return[]}function mI(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function yl(r,e,n,s){return l_(r.writeTree,r.treePath,e,n,s)}function Xc(r,e){return cI(r.writeTree,r.treePath,e)}function _m(r,e,n,s){return dI(r.writeTree,r.treePath,e,n,s)}function vl(r,e){return fI(r.writeTree,be(r.treePath,e))}function gI(r,e,n,s,l,u){return pI(r.writeTree,r.treePath,e,n,s,l,u)}function Zc(r,e,n){return hI(r.writeTree,r.treePath,e,n)}function a_(r,e){return u_(be(r.treePath,e),r.writeTree)}function u_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class _I{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Is(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Ss(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,pi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Is(s,e.snapshotNode,l.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */function vI(r){return{filter:r}}function wI(r,e){z(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function EI(r,e,n,s,l){const u=new _I;let d,f;if(n.type===Ht.OVERWRITE){const g=n;g.source.fromUser?d=Cc(r,e,g.path,g.snap,s,l,u):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!se(g.path),d=wl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ht.MERGE){const g=n;g.source.fromUser?d=II(r,e,g.path,g.children,s,l,u):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Tc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Ht.ACK_USER_WRITE){const g=n;g.revert?d=kI(r,e,g.path,s,l,u):d=CI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ht.LISTEN_COMPLETE)d=TI(r,e,n.path,s,u);else throw gi("Unknown operation type: "+n.type);const m=u.getChanges();return SI(e,d,m),{viewCache:d,changes:m}}function SI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=_l(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(t_(_l(e)))}}function d_(r,e,n,s,l,u){const d=e.eventCache;if(vl(s,n)!=null)return e;{let f,m;if(se(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Tr(e),w=g instanceof J?g:J.EMPTY_NODE,v=Xc(s,w);f=r.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=yl(s,Tr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=oe(n);if(g===".priority"){z(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();m=e.serverCache.getNode();const v=_m(s,n,w,m);v!=null?f=r.filter.updatePriority(w,v):f=d.getNode()}else{const w=_e(n);let v;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const I=_m(s,n,d.getNode(),m);I!=null?v=d.getNode().getImmediateChild(g).updateChild(w,I):v=d.getNode().getImmediateChild(g)}else v=Zc(s,g,e.serverCache);v!=null?f=r.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ms(e,f,d.isFullyInitialized()||se(n),r.filter.filtersNodes())}}function wl(r,e,n,s,l,u,d,f){const m=e.serverCache;let g;const w=d?r.filter:r.filter.getIndexedFilter();if(se(n))g=w.updateFullNode(m.getNode(),s,null);else if(w.filtersNodes()&&!m.isFiltered()){const F=m.getNode().updateChild(n,s);g=w.updateFullNode(m.getNode(),F,null)}else{const F=oe(n);if(!m.isCompleteForPath(n)&&tr(n)>1)return e;const j=_e(n),q=m.getNode().getImmediateChild(F).updateChild(j,s);F===".priority"?g=w.updatePriority(m.getNode(),q):g=w.updateChild(m.getNode(),F,q,j,c_,null)}const v=i_(e,g,m.isFullyInitialized()||se(n),w.filtersNodes()),I=new ed(l,v,u);return d_(r,v,n,l,I,f)}function Cc(r,e,n,s,l,u,d){const f=e.eventCache;let m,g;const w=new ed(l,e,u);if(se(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),m=ms(e,g,!0,r.filter.filtersNodes());else{const v=oe(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),m=ms(e,g,f.isFullyInitialized(),f.isFiltered());else{const I=_e(n),F=f.getNode().getImmediateChild(v);let j;if(se(I))j=s;else{const $=w.getCompleteChild(v);$!=null?$g(I)===".priority"&&$.getChild(qg(I)).isEmpty()?j=$:j=$.updateChild(I,s):j=J.EMPTY_NODE}if(F.equals(j))m=e;else{const $=r.filter.updateChild(f.getNode(),v,j,I,w,d);m=ms(e,$,f.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function ym(r,e){return r.eventCache.isCompleteForChild(e)}function II(r,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const w=be(n,m);ym(e,oe(w))&&(f=Cc(r,f,w,g,l,u,d))}),s.foreach((m,g)=>{const w=be(n,m);ym(e,oe(w))||(f=Cc(r,f,w,g,l,u,d))}),f}function vm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Tc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;se(n)?g=s:g=new we(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,I)=>{if(w.hasChild(v)){const F=e.serverCache.getNode().getImmediateChild(v),j=vm(r,F,I);m=wl(r,m,new me(v),j,l,u,d,f)}}),g.children.inorderTraversal((v,I)=>{const F=!e.serverCache.isCompleteForChild(v)&&I.value===null;if(!w.hasChild(v)&&!F){const j=e.serverCache.getNode().getImmediateChild(v),$=vm(r,j,I);m=wl(r,m,new me(v),$,l,u,d,f)}}),m}function CI(r,e,n,s,l,u,d){if(vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(se(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return wl(r,e,n,m.getNode().getChild(n),l,u,f,d);if(se(n)){let g=new we(null);return m.getNode().forEachChild(li,(w,v)=>{g=g.set(new me(w),v)}),Tc(r,e,n,g,l,u,f,d)}else return e}else{let g=new we(null);return s.foreach((w,v)=>{const I=be(n,w);m.isCompleteForPath(I)&&(g=g.set(w,m.getNode().getChild(I)))}),Tc(r,e,n,g,l,u,f,d)}}function TI(r,e,n,s,l){const u=e.serverCache,d=i_(e,u.getNode(),u.isFullyInitialized()||se(n),u.isFiltered());return d_(r,d,n,s,c_,l)}function kI(r,e,n,s,l,u){let d;if(vl(s,n)!=null)return e;{const f=new ed(s,e,l),m=e.eventCache.getNode();let g;if(se(n)||oe(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=yl(s,Tr(e));else{const v=e.serverCache.getNode();z(v instanceof J,"serverChildren would be complete if leaf node"),w=Xc(s,v)}w=w,g=r.filter.updateFullNode(m,w,u)}else{const w=oe(n);let v=Zc(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=m.getImmediateChild(w)),v!=null?g=r.filter.updateChild(m,w,v,_e(n),f,u):e.eventCache.getNode().hasChild(w)?g=r.filter.updateChild(m,w,J.EMPTY_NODE,_e(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=yl(s,Tr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||vl(s,ue())!=null,ms(e,g,d,r.filter.filtersNodes())}}/**
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
 */class NI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Kc(s.getIndex()),u=GS(s);this.processor_=vI(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(J.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(J.EMPTY_NODE,f.getNode(),null),w=new nr(m,d.isFullyInitialized(),l.filtersNodes()),v=new nr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=bl(v,w),this.eventGenerator_=new ZS(this.query_)}get query(){return this.query_}}function RI(r){return r.viewCache_.serverCache.getNode()}function PI(r){return _l(r.viewCache_)}function xI(r,e){const n=Tr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function wm(r){return r.eventRegistrations_.length===0}function AI(r,e){r.eventRegistrations_.push(e)}function Em(r,e,n){const s=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function Sm(r,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(z(Tr(r.viewCache_),"We should always have a full cache before handling merges"),z(_l(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=EI(r.processor_,l,e,n,s);return wI(r.processor_,u.viewCache),z(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,h_(r,u.changes,u.viewCache.eventCache.getNode(),null)}function OI(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(u,d)=>{s.push(pi(u,d))}),n.isFullyInitialized()&&s.push(t_(n.getNode())),h_(r,s,n.getNode(),e)}function h_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return eI(r.eventGenerator_,e,n,l)}/**
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
 */let El;class f_{constructor(){this.views=new Map}}function DI(r){z(!El,"__referenceConstructor has already been defined"),El=r}function LI(){return z(El,"Reference.ts has not been loaded"),El}function MI(r){return r.views.size===0}function td(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return z(u!=null,"SyncTree gave us an op for an invalid query."),Sm(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(Sm(d,e,n,s));return u}}function p_(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=yl(n,l?s:null),m=!1;f?m=!0:s instanceof J?(f=Xc(n,s),m=!1):(f=J.EMPTY_NODE,m=!1);const g=bl(new nr(f,m,!1),new nr(s,l,!1));return new NI(e,g)}return d}function bI(r,e,n,s,l,u){const d=p_(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),AI(d,n),OI(d,n)}function FI(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(r);if(l==="default")for(const[m,g]of r.views.entries())d=d.concat(Em(g,n,s)),wm(g)&&(r.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=r.views.get(l);m&&(d=d.concat(Em(m,n,s)),wm(m)&&(r.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!rr(r)&&u.push(new(LI())(e._repo,e._path)),{removed:u,events:d}}function m_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(r,e){let n=null;for(const s of r.views.values())n=n||xI(s,e);return n}function g_(r,e){if(e._queryParams.loadsAllData())return Ul(r);{const s=e._queryIdentifier;return r.views.get(s)}}function __(r,e){return g_(r,e)!=null}function rr(r){return Ul(r)!=null}function Ul(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sl;function UI(r){z(!Sl,"__referenceConstructor has already been defined"),Sl=r}function zI(){return z(Sl,"Reference.ts has not been loaded"),Sl}let jI=1;class Im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=mI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(r,e,n,s,l){return iI(r.pendingWriteTree_,e,n,s,l),l?Ms(r,new Cr(r_(),e,n)):[]}function Er(r,e,n=!1){const s=sI(r.pendingWriteTree_,e);if(oI(r.pendingWriteTree_,e)){let u=new we(null);return s.snap!=null?u=u.set(ue(),!0):gt(s.children,d=>{u=u.set(new me(d),!0)}),Ms(r,new gl(s.path,u,n))}else return[]}function Ls(r,e,n){return Ms(r,new Cr(Yc(),e,n))}function VI(r,e,n){const s=we.fromObject(n);return Ms(r,new ks(Yc(),e,s))}function WI(r,e){return Ms(r,new Ts(Yc(),e))}function BI(r,e,n){const s=rd(r,n);if(s){const l=id(s),u=l.path,d=l.queryId,f=nt(u,e),m=new Ts(Jc(d),f);return sd(r,u,m)}else return[]}function v_(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||__(d,e))){const m=FI(d,e,n,s);MI(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const w=g.findIndex(I=>I._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(u,(I,F)=>rr(F));if(w&&!v){const I=r.syncPointTree_.subtree(u);if(!I.isEmpty()){const F=qI(I);for(let j=0;j<F.length;++j){const $=F[j],q=$.query,pe=I_(r,$);r.listenProvider_.startListening(_s(q),Ns(r,q),pe.hashFn,pe.onComplete)}}}!v&&g.length>0&&!s&&(w?r.listenProvider_.stopListening(_s(e),null):g.forEach(I=>{const F=r.queryToTagMap.get(zl(I));r.listenProvider_.stopListening(_s(I),F)}))}KI(r,g)}return f}function w_(r,e,n,s){const l=rd(r,s);if(l!=null){const u=id(l),d=u.path,f=u.queryId,m=nt(d,e),g=new Cr(Jc(f),m,n);return sd(r,d,g)}else return[]}function HI(r,e,n,s){const l=rd(r,s);if(l){const u=id(l),d=u.path,f=u.queryId,m=nt(d,e),g=we.fromObject(n),w=new ks(Jc(f),m,g);return sd(r,d,w)}else return[]}function $I(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(I,F)=>{const j=nt(I,l);u=u||Xn(F,j),d=d||rr(F)});let f=r.syncPointTree_.get(l);f?(d=d||rr(f),u=u||Xn(f,ue())):(f=new f_,r.syncPointTree_=r.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=J.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((F,j)=>{const $=Xn(j,ue());$&&(u=u.updateImmediateChild(F,$))}));const g=__(f,e);if(!g&&!e._queryParams.loadsAllData()){const I=zl(e);z(!r.queryToTagMap.has(I),"View does not exist, but we have a tag");const F=QI();r.queryToTagMap.set(I,F),r.tagToQueryMap.set(F,I)}const w=Fl(r.pendingWriteTree_,l);let v=bI(f,e,n,w,u,m);if(!g&&!d&&!s){const I=g_(f,e);v=v.concat(YI(r,e,I))}return v}function nd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const m=nt(d,e),g=Xn(f,m);if(g)return g});return l_(l,e,u,n,!0)}function GI(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,w)=>{const v=nt(g,n);s=s||Xn(w,v)});let l=r.syncPointTree_.get(n);l?s=s||Xn(l,ue()):(l=new f_,r.syncPointTree_=r.syncPointTree_.set(n,l));const u=s!=null,d=u?new nr(s,!0,!1):null,f=Fl(r.pendingWriteTree_,e._path),m=p_(l,e,f,u?d.getNode():J.EMPTY_NODE,u);return PI(m)}function Ms(r,e){return E_(e,r.syncPointTree_,null,Fl(r.pendingWriteTree_,ue()))}function E_(r,e,n,s){if(se(r.path))return S_(r,e,n,s);{const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];const d=oe(r.path),f=r.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,w=a_(s,d);u=u.concat(E_(f,m,g,w))}return l&&(u=u.concat(td(l,r,s,n))),u}}function S_(r,e,n,s){const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=a_(s,d),w=r.operationForChild(d);w&&(u=u.concat(S_(w,f,m,g)))}),l&&(u=u.concat(td(l,r,s,n))),u}function I_(r,e){const n=e.query,s=Ns(r,n);return{hashFn:()=>(RI(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?BI(r,n._path,s):WI(r,n._path);{const u=$E(l,n);return v_(r,n,null,u)}}}}function Ns(r,e){const n=zl(e);return r.queryToTagMap.get(n)}function zl(r){return r._path.toString()+"$"+r._queryIdentifier}function rd(r,e){return r.tagToQueryMap.get(e)}function id(r){const e=r.indexOf("$");return z(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new me(r.substr(0,e))}}function sd(r,e,n){const s=r.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const l=Fl(r.pendingWriteTree_,e);return td(s,n,l,null)}function qI(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[Ul(n)];{let l=[];return n&&(l=m_(n)),gt(s,(u,d)=>{l=l.concat(d)}),l}})}function _s(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(zI())(r._repo,r._path):r}function KI(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=zl(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function QI(){return jI++}function YI(r,e,n){const s=e._path,l=Ns(r,e),u=I_(r,n),d=r.listenProvider_.startListening(_s(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)z(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,w,v)=>{if(!se(g)&&w&&rr(w))return[Ul(w).query];{let I=[];return w&&(I=I.concat(m_(w).map(F=>F.query))),gt(v,(F,j)=>{I=I.concat(j)}),I}});for(let g=0;g<m.length;++g){const w=m[g];r.listenProvider_.stopListening(_s(w),Ns(r,w))}}return d}/**
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
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new ld(this.syncTree_,n)}node(){return nd(this.syncTree_,this.path_)}}const JI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Cm=function(r,e,n){if(!r||typeof r!="object")return r;if(z(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return XI(r[".sv"],e,n);if(typeof r[".sv"]=="object")return ZI(r[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},XI=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+r)}},ZI=function(r,e,n){r.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const l=e.node();if(z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},eC=function(r,e,n,s){return ad(e,new ld(n,r),s)},C_=function(r,e,n){return ad(r,new od(e),n)};function ad(r,e,n){const s=r.getPriority().val(),l=Cm(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=Cm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new je(f,We(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new je(l))),d.forEachChild(ke,(f,m)=>{const g=ad(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class ud{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cd(r,e){let n=e instanceof me?e:new me(e),s=r,l=oe(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new ud(l,s,u),n=_e(n),l=oe(n)}return s}function Ei(r){return r.node.value}function T_(r,e){r.node.value=e,kc(r)}function k_(r){return r.node.childCount>0}function tC(r){return Ei(r)===void 0&&!k_(r)}function jl(r,e){gt(r.node.children,(n,s)=>{e(new ud(n,r,s))})}function N_(r,e,n,s){n&&e(r),jl(r,l=>{N_(l,e,!0)})}function nC(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bs(r){return new me(r.parent===null?r.name:bs(r.parent)+"/"+r.name)}function kc(r){r.parent!==null&&rC(r.parent,r.name,r)}function rC(r,e,n){const s=tC(n),l=Cn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,kc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,kc(r))}/**
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
 */const iC=/[\[\].#$\/\u0000-\u001F\u007F]/,sC=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,R_=function(r){return typeof r=="string"&&r.length!==0&&!iC.test(r)},P_=function(r){return typeof r=="string"&&r.length!==0&&!sC.test(r)},oC=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),P_(r)},lC=function(r,e,n,s){dd(zc(r,"value"),e,n)},dd=function(r,e,n){const s=n instanceof me?new CS(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(r+"contains a function "+vr(s)+" with contents = "+e.toString());if(Cg(e))throw new Error(r+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>sc/3&&Dl(e)>sc)throw new Error(r+"contains a string greater than "+sc+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(gt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!R_(d)))throw new Error(r+" contains an invalid key ("+d+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TS(s,d),dd(r,f,s),kS(s)}),l&&u)throw new Error(r+' contains ".value" child '+vr(s)+" in addition to actual children.")}},x_=function(r,e,n,s){if(!P_(n))throw new Error(zc(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aC=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),x_(r,e,n)},uC=function(r,e){if(oe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},cC=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oC(n))throw new Error(zc(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class dC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Kg(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function rn(r,e,n){A_(r,n),hC(r,s=>Bt(s,e)||Bt(e,s))}function hC(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(fC(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function fC(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();fs&&Ze("event: "+n.toString()),wi(s)}}}/**
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
 */const pC="repo_interrupt",mC=25;class gC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new ud,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _C(r,e,n){if(r.stats_=Hc(r.repoInfo_),r.forceRestClient_||QE())r.server_=new pl(r.repoInfo_,(s,l,u,d)=>{Tm(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>km(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,u,d)=>{Tm(r,s,l,u,d)},s=>{km(r,s)},s=>{vC(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=eS(r.repoInfo_,()=>new XS(r.stats_,r.server_)),r.infoData_=new qS,r.infoSyncTree_=new Im({startListening:(s,l,u,d)=>{let f=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(f=Ls(r.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),fd(r,"connected",!1),r.serverSyncTree_=new Im({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);rn(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function yC(r){const n=r.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hd(r){return JI({timestamp:yC(r)})}function Tm(r,e,n,s,l){r.dataUpdateCount++;const u=new me(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=ul(n,g=>We(g));d=HI(r.serverSyncTree_,u,m,l)}else{const m=We(n);d=w_(r.serverSyncTree_,u,m,l)}else if(s){const m=ul(n,g=>We(g));d=VI(r.serverSyncTree_,u,m)}else{const m=We(n);d=Ls(r.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=Wl(r,u)),rn(r.eventQueue_,f,d)}function km(r,e){fd(r,"connected",e),e===!1&&SC(r)}function vC(r,e){gt(e,(n,s)=>{fd(r,n,s)})}function fd(r,e,n){const s=new me("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=Ls(r.infoSyncTree_,s,l);rn(r.eventQueue_,s,u)}function O_(r){return r.nextWriteId_++}function wC(r,e,n){const s=GI(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());$I(r.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=Ls(r.serverSyncTree_,e._path,u);else{const f=Ns(r.serverSyncTree_,e);d=w_(r.serverSyncTree_,e._path,u,f)}return rn(r.eventQueue_,e._path,d),v_(r.serverSyncTree_,e,n,null,!0),u},l=>(Vl(r,"get for query "+Me(e)+" failed: "+l),Promise.reject(new Error(l))))}function EC(r,e,n,s,l){Vl(r,"set",{path:e.toString(),value:n,priority:s});const u=hd(r),d=We(n,s),f=nd(r.serverSyncTree_,e),m=C_(d,f,u),g=O_(r),w=y_(r.serverSyncTree_,e,m,g,!0);A_(r.eventQueue_,w),r.server_.put(e.toString(),d.val(!0),(I,F)=>{const j=I==="ok";j||mt("set at "+e+" failed: "+I);const $=Er(r.serverSyncTree_,g,!j);rn(r.eventQueue_,e,$),CC(r,l,I,F)});const v=F_(r,e);Wl(r,v),rn(r.eventQueue_,v,[])}function SC(r){Vl(r,"onDisconnectEvents");const e=hd(r),n=ml();Ec(r.onDisconnect_,ue(),(l,u)=>{const d=eC(l,u,r.serverSyncTree_,e);n_(n,l,d)});let s=[];Ec(n,ue(),(l,u)=>{s=s.concat(Ls(r.serverSyncTree_,l,u));const d=F_(r,l);Wl(r,d)}),r.onDisconnect_=ml(),rn(r.eventQueue_,ue(),s)}function IC(r){r.persistentConnection_&&r.persistentConnection_.interrupt(pC)}function Vl(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Ze(n,...e)}function CC(r,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function D_(r,e,n){return nd(r.serverSyncTree_,e,n)||J.EMPTY_NODE}function pd(r,e=r.transactionQueueTree_){if(e||Bl(r,e),Ei(e)){const n=M_(r,e);z(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&TC(r,bs(e),n)}else k_(e)&&jl(e,n=>{pd(r,n)})}function TC(r,e,n){const s=n.map(g=>g.currentWriteId),l=D_(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];z(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=nt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;r.server_.put(m.toString(),f,g=>{Vl(r,"transaction put response",{path:m.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let I=0;I<n.length;I++)n[I].status=2,w=w.concat(Er(r.serverSyncTree_,n[I].currentWriteId)),n[I].onComplete&&v.push(()=>n[I].onComplete(null,!0,n[I].currentOutputSnapshotResolved)),n[I].unwatcher();Bl(r,cd(r.transactionQueueTree_,e)),pd(r,r.transactionQueueTree_),rn(r.eventQueue_,e,w);for(let I=0;I<v.length;I++)wi(v[I])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{mt("transaction at "+m.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Wl(r,e)}},d)}function Wl(r,e){const n=L_(r,e),s=bs(n),l=M_(r,n);return kC(r,l,s),s}function kC(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=nt(n,m.path);let w=!1,v;if(z(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)w=!0,v=m.abortReason,l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=mC)w=!0,v="maxretry",l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0));else{const I=D_(r,m.path,d);m.currentInputSnapshot=I;const F=e[f].update(I.val());if(F!==void 0){dd("transaction failed: Data returned ",F,m.path);let j=We(F);typeof F=="object"&&F!=null&&Cn(F,".priority")||(j=j.updatePriority(I.getPriority()));const q=m.currentWriteId,pe=hd(r),Oe=C_(j,I,pe);m.currentOutputSnapshotRaw=j,m.currentOutputSnapshotResolved=Oe,m.currentWriteId=O_(r),d.splice(d.indexOf(q),1),l=l.concat(y_(r.serverSyncTree_,m.path,Oe,m.currentWriteId,m.applyLocally)),l=l.concat(Er(r.serverSyncTree_,q,!0))}else w=!0,v="nodata",l=l.concat(Er(r.serverSyncTree_,m.currentWriteId,!0))}rn(r.eventQueue_,n,l),l=[],w&&(e[f].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Bl(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);pd(r,r.transactionQueueTree_)}function L_(r,e){let n,s=r.transactionQueueTree_;for(n=oe(e);n!==null&&Ei(s)===void 0;)s=cd(s,n),e=_e(e),n=oe(e);return s}function M_(r,e){const n=[];return b_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function b_(r,e,n){const s=Ei(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);jl(e,l=>{b_(r,l,n)})}function Bl(r,e){const n=Ei(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,T_(e,n.length>0?n:void 0)}jl(e,s=>{Bl(r,s)})}function F_(r,e){const n=bs(L_(r,e)),s=cd(r.transactionQueueTree_,e);return nC(s,l=>{oc(r,l)}),oc(r,s),N_(s,l=>{oc(r,l)}),n}function oc(r,e){const n=Ei(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(z(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(z(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Er(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?T_(e,void 0):n.length=u+1,rn(r.eventQueue_,bs(e),l);for(let d=0;d<s.length;d++)wi(s[d])}}/**
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
 */function NC(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function RC(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Nm=function(r,e){const n=PC(r),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new me(n.pathString)}},PC=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let w=r.indexOf("/");w===-1&&(w=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(w,v)),w<v&&(l=NC(r.substring(w,v)));const I=RC(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const F=e.slice(0,g);if(F.toLowerCase()==="localhost")n="localhost";else if(F.split(".").length<=2)n=F;else{const j=e.indexOf(".");s=e.substring(0,j).toLowerCase(),n=e.substring(j+1),u=s}"ns"in I&&(u=I.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class xC{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class AC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class OC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class md{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return se(this._path)?null:$g(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=hm(this._queryParams),n=Wc(e);return n==="{}"?"default":n}get _queryObject(){return hm(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof md))return!1;const n=this._repo===e._repo,s=Kg(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+IS(this._path)}}class Tn extends md{constructor(e,n){super(e,n,new Qc,!1)}get parent(){const e=qg(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Nc(this.ref,e);return new Rs(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Rs(l,Nc(this.ref,s),ke)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rm(r,e){return r=st(r),r._checkNotDeleted("ref"),e!==void 0?Nc(r._root,e):r._root}function Nc(r,e){return r=st(r),oe(r._path)===null?aC("child","path",e):x_("child","path",e),new Tn(r._repo,be(r._path,e))}function DC(r,e){r=st(r),uC("set",r._path),lC("set",e,r._path);const n=new Ol;return EC(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function LC(r){r=st(r);const e=new OC(()=>{}),n=new gd(e);return wC(r._repo,r,n).then(s=>new Rs(s,new Tn(r._repo,r._path),r._queryParams.getIndex()))}class gd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xC("value",this,new Rs(e.snapshotNode,new Tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AC(this,e,n):null}matches(e){return e instanceof gd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}DI(Tn);UI(Tn);/**
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
 */const MC="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let bC=!1;function FC(r,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=xs(u);r.repoInfo_=new bg(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function UC(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Nm(u,l),f=d.repoInfo,m;typeof process<"u"&&Kp&&(m=Kp[MC]),m?(u=`http://${m}?ns=${f.namespace}`,d=Nm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new JE(r.name,r.options,e);cC("Invalid Firebase Database URL",d),se(d.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const w=jC(f,r,g,new YE(r,n));return new VC(w,r)}function zC(r,e){const n=Rc[e];(!n||n[r.key]!==r)&&En(`Database ${e}(${r.repoInfo_}) has already been deleted.`),IC(r),delete n[r.key]}function jC(r,e,n,s){let l=Rc[e.name];l||(l={},Rc[e.name]=l);let u=l[r.toURLString()];return u&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new gC(r,bC,n,s),l[r.toURLString()]=u,u}class VC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_C(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function WC(r=Vc(),e){const n=xr(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=u0("database");s&&BC(n,...s)}return n}function BC(r,e,n,s={}){r=st(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&er(s,u.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new nl(nl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:c0(s.mockUserToken,r.app.options.projectId);d=new nl(f)}xs(e)&&pg(e),FC(u,l,s,d)}/**
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
 */function HC(r){LE(yi),nn(new qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return UC(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Ot(Qp,Yp,r),Ot(Qp,Yp,"esm2020")}/**
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
 */const z_=1e4,j_=`w:${_d}`,V_="FIS_v2",qC="https://firebaseinstallations.googleapis.com/v1",KC=3600*1e3,QC="installations",YC="Installations";/**
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
 */const JC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kr=new Pr(QC,YC,JC);function W_(r){return r instanceof sn&&r.code.includes("request-failed")}/**
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
 */async function tT({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=B_(r),l=G_(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:V_,appId:r.appId,sdkVersion:j_},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:H_(g.authToken)}}else throw await $_("Create Installation",m)}/**
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
 */const rT=/^[cdef][\w-]{21}$/,Pc="";function iT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=sT(r);return rT.test(n)?n:Pc}catch{return Pc}}function sT(r){return nT(r).substr(0,22)}/**
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
 */async function vd(r){let e;const n=await $l(r.appConfig,s=>{const l=dT(s),u=hT(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Pc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dT(r){const e=r||{fid:iT(),registrationStatus:0};return Z_(e)}function hT(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fT(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pT(r)}:{installationEntry:e}}async function fT(r,e){try{const n=await tT(r,e);return Il(r.appConfig,n)}catch(n){throw W_(n)&&n.customData.serverCode===409?await X_(r.appConfig):await Il(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pT(r){let e=await Pm(r.appConfig);for(;e.registrationStatus===1;)await K_(100),e=await Pm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await vd(r);return s||n}return e}function Pm(r){return $l(r,e=>{if(!e)throw kr.create("installation-not-found");return Z_(e)})}function Z_(r){return mT(r)?{fid:r.fid,registrationStatus:0}:r}function mT(r){return r.registrationStatus===1&&r.registrationTime+z_<Date.now()}/**
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
 */async function gT({appConfig:r,heartbeatServiceProvider:e},n){const s=_T(r,n),l=XC(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:j_,appId:r.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return H_(g)}else throw await $_("Generate Auth Token",m)}function _T(r,{fid:e}){return`${B_(r)}/${e}/authTokens:generate`}/**
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
 */async function wd(r,e=!1){let n;const s=await $l(r.appConfig,u=>{if(!ey(u))throw kr.create("not-registered");const d=u.authToken;if(!e&&wT(d))return u;if(d.requestStatus===1)return n=yT(r,e),u;{if(!navigator.onLine)throw kr.create("app-offline");const f=ST(u);return n=vT(r,f),f}});return n?await n:s.authToken}async function yT(r,e){let n=await xm(r.appConfig);for(;n.authToken.requestStatus===1;)await K_(100),n=await xm(r.appConfig);const s=n.authToken;return s.requestStatus===0?wd(r,e):s}function xm(r){return $l(r,e=>{if(!ey(e))throw kr.create("not-registered");const n=e.authToken;return IT(n)?{...e,authToken:{requestStatus:0}}:e})}async function vT(r,e){try{const n=await gT(r,e),s={...e,authToken:n};return await Il(r.appConfig,s),n}catch(n){if(W_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X_(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Il(r.appConfig,s)}throw n}}function ey(r){return r!==void 0&&r.registrationStatus===2}function wT(r){return r.requestStatus===2&&!ET(r)}function ET(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+KC}function ST(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function IT(r){return r.requestStatus===1&&r.requestTime+z_<Date.now()}/**
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
 */const ty="installations",RT="installations-internal",PT=r=>{const e=r.getProvider("app").getImmediate(),n=NT(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xT=r=>{const e=r.getProvider("app").getImmediate(),n=xr(e,ty).getImmediate();return{getId:()=>CT(n),getToken:l=>TT(n,l)}};function AT(){nn(new qt(ty,PT,"PUBLIC")),nn(new qt(RT,xT,"PRIVATE"))}/**
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
 */const Cl="analytics",OT="firebase_id",DT="origin",LT=60*1e3,MT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ed="https://www.googletagmanager.com/gtag/js";/**
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
 */const rt=new Ll("@firebase/analytics");/**
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
 */const bT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new Pr("analytics","Analytics",bT);/**
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
 */function FT(r){if(!r.startsWith(Ed)){const e=It.create("invalid-gtag-resource",{gtagURL:r});return rt.warn(e.message),""}return r}function ny(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function UT(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function zT(r,e){const n=UT("firebase-js-sdk-policy",{createScriptURL:FT}),s=document.createElement("script"),l=`${Ed}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function jT(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function VT(r,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const m=(await ny(n)).find(g=>g.measurementId===l);m&&await e[m.appId]}}catch(f){rt.error(f)}r("config",l,u)}async function WT(r,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await ny(n);for(const m of d){const g=f.find(v=>v.measurementId===m),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,l||{})}catch(u){rt.error(u)}}function BT(r,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,m]=d;await WT(r,e,n,f,m)}else if(u==="config"){const[f,m]=d;await VT(r,e,n,s,f,m)}else if(u==="consent"){const[f,m]=d;r("consent",f,m)}else if(u==="get"){const[f,m,g]=d;r("get",f,m,g)}else if(u==="set"){const[f]=d;r("set",f)}else r(u,...d)}catch(f){rt.error(f)}}return l}function HT(r,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=BT(u,r,e,n),{gtagCore:u,wrappedGtag:window[l]}}function $T(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ed)&&n.src.includes(r))return n;return null}/**
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
 */const GT=30,qT=1e3;class KT{constructor(e={},n=qT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ry=new KT;function QT(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function YT(r){var d;const{appId:e,apiKey:n}=r,s={method:"GET",headers:QT(n)},l=MT.replace("{app-id}",e),u=await fetch(l,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();(d=m.error)!=null&&d.message&&(f=m.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function JT(r,e=ry,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw It.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw It.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ek;return setTimeout(async()=>{f.abort()},LT),iy({appId:s,apiKey:l,measurementId:u},d,f,e)}async function iy(r,{throttleEndTimeMillis:e,backoffCount:n},s,l=ry){var f;const{appId:u,measurementId:d}=r;try{await XT(s,e)}catch(m){if(d)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw m}try{const m=await YT(r);return l.deleteThrottleMetadata(u),m}catch(m){const g=m;if(!ZT(g)){if(l.deleteThrottleMetadata(u),d)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:d};throw m}const w=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?zp(n,l.intervalMillis,GT):zp(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(u,v),rt.debug(`Calling attemptFetch again in ${w} millis`),iy(r,v,s,l)}}function XT(r,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZT(r){if(!(r instanceof sn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class ek{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tk(r,e,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await e,d={...s,send_to:u};r("event",n,d)}}async function nk(r,e,n,s){if(s&&s.global){const l={};for(const u of Object.keys(n))l[`user_properties.${u}`]=n[u];return r("set",l),Promise.resolve()}else{const l=await e;r("config",l,{update:!0,user_properties:n})}}/**
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
 */async function rk(){if(Fc())try{await Uc()}catch(r){return rt.warn(It.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return rt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ik(r,e,n,s,l,u,d){const f=JT(r);f.then(I=>{n[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>rt.error(I)),e.push(f);const m=rk().then(I=>{if(I)return s.getId()}),[g,w]=await Promise.all([f,m]);$T(u)||zT(u,g.measurementId),l("js",new Date);const v=(d==null?void 0:d.config)??{};return v[DT]="firebase",v.update=!0,w!=null&&(v[OT]=w),l("config",g.measurementId,v),g.measurementId}/**
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
 */class sk{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Am=[];const Om={};let uc="dataLayer",ok="gtag",Dm,Sd,Lm=!1;function lk(){const r=[];if(bc()&&r.push("This is a browser extension environment."),hg()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function ak(r,e,n){lk();const s=r.options.appId;if(!s)throw It.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(ai[s]!=null)throw It.create("already-exists",{id:s});if(!Lm){jT(uc);const{wrappedGtag:u,gtagCore:d}=HT(ai,Am,Om,uc,ok);Sd=u,Dm=d,Lm=!0}return ai[s]=ik(r,Am,Om,e,Dm,uc,n),new sk(r)}/**
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
 */function uk(r=Vc()){r=st(r);const e=xr(r,Cl);return e.isInitialized()?e.getImmediate():ck(r)}function ck(r,e={}){const n=xr(r,Cl);if(n.isInitialized()){const l=n.getImmediate();if(er(e,n.getOptions()))return l;throw It.create("already-initialized")}return n.initialize({options:e})}async function dk(){if(bc()||!hg()||!Fc())return!1;try{return await Uc()}catch{return!1}}function hk(r,e,n){r=st(r),nk(Sd,ai[r.app.options.appId],e,n).catch(s=>rt.error(s))}function fk(r,e,n,s){r=st(r),tk(Sd,ai[r.app.options.appId],e,n,s).catch(l=>rt.error(l))}const Mm="@firebase/analytics",bm="0.10.23";/**
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
 */function pk(){nn(new qt(Cl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return ak(s,l,n)},"PUBLIC")),nn(new qt("analytics-internal",r,"PRIVATE")),Ot(Mm,bm),Ot(Mm,bm,"esm2020");function r(e){try{const n=e.getProvider(Cl).getImmediate();return{logEvent:(s,l,u)=>fk(n,s,l,u),setUserProperties:(s,l)=>hk(n,s,l)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}pk();function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=sy,oy=new Pr("auth","Firebase",sy());/**
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
 */const Tl=new Ll("@firebase/auth");function ly(r,...e){Tl.logLevel<=fe.WARN&&Tl.warn(`Auth (${yi}): ${r}`,...e)}function rl(r,...e){Tl.logLevel<=fe.ERROR&&Tl.error(`Auth (${yi}): ${r}`,...e)}/**
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
 */function Sn(r,...e){throw Id(r,...e)}function en(r,...e){return Id(r,...e)}function ay(r,e,n){const s={...mk(),[e]:n};return new Pr("auth","Firebase",s).create(e,{appName:r.name})}function Zn(r){return ay(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return oy.create(r,...e)}function Z(r,e,...n){if(!r)throw Id(e,...n)}function _n(r){const e="INTERNAL ASSERTION FAILED: "+r;throw rl(e),new Error(e)}function In(r,e){r||_n(e)}/**
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
 */function xc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function gk(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||bc()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Mc()||dg()}get(){return _k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ek=new Fs(3e4,6e4);function Gl(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Si(r,e,n,s,l={}){return cy(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=_i({...d,key:r.config.apiKey}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:m,...u};return d0()||(g.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&xs(r.emulatorConfig.host)&&(g.credentials="include"),uy.fetch()(await hy(r,r.config.apiHost,n,f),g)})}async function cy(r,e,n){r._canInitEmulator=!1;const s={...vk,...e};try{const l=new Sk(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw el(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw el(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw el(r,"user-disabled",d);const w=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ay(r,w,g);Sn(r,w)}}catch(l){if(l instanceof sn)throw l;Sn(r,"network-request-failed",{message:String(l)})}}async function dy(r,e,n,s,l={}){const u=await Si(r,e,n,s,l);return"mfaPendingCredential"in u&&Sn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function hy(r,e,n,s){const l=`${e}${n}?${s}`,u=r,d=u.config.emulator?Cd(r.config,l):`${r.config.apiScheme}://${l}`;return wk.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class Sk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),Ek.get())})}}function el(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=en(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */function ys(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(r,e=!1){const n=st(r),s=await n.getIdToken(e),l=Td(s);Z(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ys(cc(l.auth_time)),issuedAtTime:ys(cc(l.iat)),expirationTime:ys(cc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cc(r){return Number(r)*1e3}function Td(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const l=al(n);return l?JSON.parse(l):(rl("Failed to decode base64 JWT payload"),null)}catch(l){return rl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Um(r){const e=Td(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ps(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&Tk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Tk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */async function Nl(r){var v;const e=r.auth,n=await r.getIdToken(),s=await Ps(r,kl(e,{idToken:n}));Z(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=(v=l.providerUserInfo)!=null&&v.length?fy(l.providerUserInfo):[],d=Rk(r.providerData,u),f=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,w)}async function Nk(r){const e=st(r);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function fy(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Pk(r,e){const n=await cy(r,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=await hy(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return r.emulatorConfig&&xs(r.emulatorConfig.host)&&(m.credentials="include"),uy.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xk(r,e){return Si(r,"POST","/v2/accounts:revokeToken",Gl(r,e))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Pk(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new ui;return s&&(Z(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Z(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Z(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function $n(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ac(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Ps(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,w=n.lastLoginAt??void 0,{uid:v,emailVerified:I,isAnonymous:F,providerData:j,stsTokenManager:$}=n;Z(v&&$,e,"internal-error");const q=ui.fromJSON(this.name,$);Z(typeof v=="string",e,"internal-error"),$n(s,e.name),$n(l,e.name),Z(typeof I=="boolean",e,"internal-error"),Z(typeof F=="boolean",e,"internal-error"),$n(u,e.name),$n(d,e.name),$n(f,e.name),$n(m,e.name),$n(g,e.name),$n(w,e.name);const pe=new $t({uid:v,auth:e,email:l,emailVerified:I,displayName:s,isAnonymous:F,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:q,createdAt:g,lastLoginAt:w});return j&&Array.isArray(j)&&(pe.providerData=j.map(Oe=>({...Oe}))),m&&(pe._redirectEventId=m),pe}static async _fromIdTokenResponse(e,n,s=!1){const l=new ui;l.updateFromServerResponse(n);const u=new $t({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Nl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Z(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?fy(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ui;f.updateFromIdToken(s);const m=new $t({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const zm=new Map;function yn(r){In(r instanceof Function,"Expected a class definition");let e=zm.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zm.set(r,e),e)}/**
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
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const jm=py;/**
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
 */function il(r,e,n){return`firebase:${r}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=il(this.userKey,l.apiKey,u),this.fullPersistenceKey=il("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kl(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(yn(jm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||yn(jm);const d=il(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let v;if(typeof w=="string"){const I=await kl(e,{idToken:w}).catch(()=>{});if(!I)break;v=await $t._fromGetAccountInfoResponse(e,I,w)}else v=$t._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ci(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ci(u,e,s))}}/**
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
 */function Vm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(my(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wy(e))return"Blackberry";if(Ey(e))return"Webos";if(gy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function my(r=it()){return/firefox\//i.test(r)}function gy(r=it()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(r=it()){return/crios\//i.test(r)}function yy(r=it()){return/iemobile/i.test(r)}function vy(r=it()){return/android/i.test(r)}function wy(r=it()){return/blackberry/i.test(r)}function Ey(r=it()){return/webos/i.test(r)}function kd(r=it()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ak(r=it()){var e;return kd(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Ok(){return h0()&&document.documentMode===10}function Sy(r=it()){return kd(r)||vy(r)||Ey(r)||wy(r)||/windows phone/i.test(r)||yy(r)}/**
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
 */function Iy(r,e=[]){let n;switch(r){case"Browser":n=Vm(it());break;case"Worker":n=`${Vm(it())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */async function Lk(r,e={}){return Si(r,"GET","/v2/passwordPolicy",Gl(r,e))}/**
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
 */const Mk=6;class bk{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Mk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class Fk{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new Dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kl(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Vt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Zn(this));const n=e?st(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lk(this),n=new bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ly(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ql(r){return st(r)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uk(r){Nd=r}function zk(r){return Nd.loadJS(r)}function jk(){return Nd.gapiScript}function Vk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wk(r,e){const n=xr(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(er(u,e??{}))return l;Sn(l,"already-initialized")}return n.initialize({options:e})}function Bk(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Hk(r,e,n){const s=ql(r);Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Cy(e),{host:d,port:f}=$k(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Z(er(g,s.config.emulator)&&er(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,xs(d)?pg(`${u}//${d}${m}`):Gk()}function Cy(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $k(r){const e=Cy(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Bm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Bm(d)}}}function Bm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Gk(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */const qk="http://localhost";class Rr extends Ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new Rr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */class Gn extends Us{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Us{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Us{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class Rl extends sn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Rl(e,n,s,l)}}function Ny(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(r,u,e,s):u})}async function Yk(r,e,n=!1){const s=await Ps(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return ir._forOperation(r,"link",s)}/**
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
 */async function Jk(r,e,n=!1){const{auth:s}=r;if(Vt(s.app))return Promise.reject(Zn(s));const l="reauthenticate";try{const u=await Ps(r,Ny(s,l,e,r),n);Z(u.idToken,s,"internal-error");const d=Td(u.idToken);Z(d,s,"internal-error");const{sub:f}=d;return Z(r.uid===f,s,"user-mismatch"),ir._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),u}}/**
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
 */async function Xk(r,e,n=!1){if(Vt(r.app))return Promise.reject(Zn(r));const s="signIn",l=await Ny(r,s,e),u=await ir._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function Zk(r,e,n,s){return st(r).onIdTokenChanged(e,n,s)}function eN(r,e,n){return st(r).beforeAuthStateChanged(e,n)}const Pl="__sak";/**
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
 */class Ry{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tN=1e3,nN=10;class Py extends Ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Ok()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,nN):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Py.type="LOCAL";const rN=Py;/**
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
 */class xy extends Ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xy.type="SESSION";const Ay=xy;/**
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
 */function Rd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class sN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=Rd("",20);l.port1.start();const w=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const I=v;if(I.data.eventId===g)switch(I.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(I.data.response);break;default:clearTimeout(w),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */const Dy="firebaseLocalStorageDb",cN=1,xl="firebaseLocalStorage",Ly="fbase_key";class zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(r,e){return r.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function dN(){const r=indexedDB.deleteDatabase(Dy);return new zs(r).toPromise()}function My(){const r=indexedDB.open(Dy,cN);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(xl,{keyPath:Ly})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(xl)?e(s):(s.close(),await dN(),e(await My()))})})}async function $m(r,e,n){const s=Ql(r,!0).put({[Ly]:e,value:n});return new zs(s).toPromise()}async function hN(r,e){const n=Ql(r,!1).get(e),s=await new zs(n).toPromise();return s===void 0?null:s.value}function Gm(r,e){const n=Ql(r,!0).delete(e);return new zs(n).toPromise()}const fN=800,pN=3;class by{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=My(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(this.isHiding||n++>pN)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(uN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await lN(),!this.activeServiceWorker)return;this.sender=new sN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $m(e,Pl,"1"),await Gm(e,Pl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$m(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(l=>{const u=Ql(l,!1).getAll();return new zs(u).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}catch(e){return this.isHiding||ly(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}by.type="LOCAL";const mN=by;new Fs(3e4,6e4);/**
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
 */function gN(r,e){return e?yn(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Pd extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _N(r){return Xk(r.auth,new Pd(r),r.bypassAuthState)}function yN(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),Jk(n,new Pd(r),r.bypassAuthState)}async function vN(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),Yk(n,new Pd(r),r.bypassAuthState)}/**
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
 */const wN=new Fs(2e3,1e4);class si extends Fy{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wN.get())};e()}}si.currentPopupAction=null;/**
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
 */const RN=600*1e3;class PN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uy(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RN&&this.cachedEventUids.clear(),this.cachedEventUids.has(qm(e))}saveEventToCache(e){this.cachedEventUids.add(qm(e)),this.lastProcessedEventTime=Date.now()}}function qm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Uy({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uy(r);default:return!1}}/**
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
 */const ON=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DN=/^https?/;async function LN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await AN(r);for(const n of e)try{if(MN(n))return}catch{}Sn(r,"unauthorized-domain")}function MN(r){const e=xc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!DN.test(n))return!1;if(ON.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const bN=new Fs(3e4,6e4);function Km(){const r=tn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function FN(r){return new Promise((e,n)=>{var l,u,d;function s(){Km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(en(r,"network-request-failed"))},timeout:bN.get()})}if((u=(l=tn().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=tn().gapi)!=null&&d.load)s();else{const f=Vk("iframefcb");return tn()[f]=()=>{gapi.load?s():n(en(r,"network-request-failed"))},zk(`${jk()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw ol=null,e})}let ol=null;function UN(r){return ol=ol||FN(r),ol}/**
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
 */const zN=new Fs(5e3,15e3),jN="__/auth/iframe",VN="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Cd(e,VN):`https://${r.config.authDomain}/${jN}`,s={apiKey:e.apiKey,appName:r.name,v:yi},l=BN.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${_i(s).slice(1)}`}async function $N(r){const e=await UN(r),n=tn().gapi;return Z(n,r,"internal-error"),e.open({where:document.body,url:HN(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=en(r,"network-request-failed"),f=tn().setTimeout(()=>{u(d)},zN.get());function m(){tn().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
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
 */const GN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,KN=600,QN="_blank",YN="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JN(r,e,n,s=qN,l=KN){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...GN,width:s.toString(),height:l.toString(),top:u,left:d},g=it().toLowerCase();n&&(f=_y(g)?QN:n),my(g)&&(e=e||YN,m.scrollbars="yes");const w=Object.entries(m).reduce((I,[F,j])=>`${I}${F}=${j},`,"");if(Ak(g)&&f!=="_self")return XN(e||"",f),new Qm(null);const v=window.open(e||"",f,w);Z(v,r,"popup-blocked");try{v.focus()}catch{}return new Qm(v)}function XN(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ZN="__/auth/handler",e1="emulator/auth/handler",t1=encodeURIComponent("fac");async function Ym(r,e,n,s,l,u){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof ky){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",hc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Us){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const m=await r._getAppCheckToken(),g=m?`#${t1}=${encodeURIComponent(m)}`:"";return`${n1(r)}?${_i(f).slice(1)}${g}`}function n1({config:r}){return r.emulator?Cd(r,e1):`https://${r.authDomain}/${ZN}`}/**
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
 */const dc="webStorageSupport";class r1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=NN,this._overrideRedirectResult=CN}async _openPopup(e,n,s,l){var d;In((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await Ym(e,n,s,xc(),l);return JN(e,u,Rd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Ym(e,n,s,xc(),l);return oN(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(In(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $N(e),s=new PN(e);return n.register("authEvent",l=>(Z(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[dc];u!==void 0&&n(!!u),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sy()||gy()||kd()}}const i1=r1;var Jm="@firebase/auth",Xm="1.13.4";/**
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
 */class s1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function o1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l1(r){nn(new qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Z(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(r)},g=new Fk(s,l,u,m);return Bk(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nn(new qt("auth-internal",e=>{const n=ql(e.getProvider("auth").getImmediate());return(s=>new s1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Jm,Xm,o1(r)),Ot(Jm,Xm,"esm2020")}/**
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
 */const a1=300,u1=cg("authIdTokenMaxAge")||a1;let Zm=null;const c1=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u1)return;const l=n==null?void 0:n.token;Zm!==l&&(Zm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function d1(r=Vc()){const e=xr(r,"auth");if(e.isInitialized())return e.getImmediate();const n=Wk(r,{popupRedirectResolver:i1,persistence:[mN,rN,Ay]}),s=cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=c1(u.toString());eN(n,d,()=>d(n.currentUser)),Zk(n,f=>d(f))}}const l=ag("auth");return l&&Hk(n,`http://${l}`),n}function h1(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Uk({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=en("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",h1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l1("Browser");const f1={apiKey:"AIzaSyDMsa3BvIBTYDR0isLVvjAht1aTKPgz5JA",authDomain:"expense-splitter-54b84.firebaseapp.com",databaseURL:"https://expense-splitter-54b84-default-rtdb.europe-west1.firebasedatabase.app",projectId:"expense-splitter-54b84",storageBucket:"expense-splitter-54b84.firebasestorage.app",messagingSenderId:"355873212971",appId:"1:355873212971:web:28b15a101c7e4a79c7386e",measurementId:"G-EY0SF94DPK"},xd=yg(f1),eg=WC(xd),p1=d1(xd),tg=Qk(p1);dk().then(r=>{r&&uk(xd)});const tl={async get(r){try{await tg;const n=await LC(Rm(eg,r));if(n.exists()){const s=n.val();return localStorage.setItem(r,s),{value:s}}}catch(n){console.error("Firebase indisponible, lecture depuis le cache local",n)}const e=localStorage.getItem(r);return e===null?null:{value:e}},async set(r,e){localStorage.setItem(r,e);try{await tg,await DC(Rm(eg,r),e)}catch(n){console.error("Firebase indisponible, sauvegarde locale uniquement",n)}}};function m1(){const[r,e]=Xe.useState([]),[n,s]=Xe.useState([]),[l,u]=Xe.useState("home"),[d,f]=Xe.useState(""),[m,g]=Xe.useState({}),[w,v]=Xe.useState(""),[I,F]=Xe.useState(""),[j,$]=Xe.useState([]),[q,pe]=Xe.useState({});Xe.useEffect(()=>{Oe()},[]);const Oe=async()=>{try{const O=await tl.get("families-v2"),U=await tl.get("expenses-v2");O!=null&&O.value&&e(JSON.parse(O.value)),U!=null&&U.value&&s(JSON.parse(U.value))}catch{console.log("Première utilisation")}},xe=async O=>{e(O);try{await tl.set("families-v2",JSON.stringify(O))}catch(U){console.error("Échec de la sauvegarde des familles",U)}},Ne=async O=>{s(O);try{await tl.set("expenses-v2",JSON.stringify(O))}catch(U){console.error("Échec de la sauvegarde des dépenses",U)}},_t=()=>{if(d.trim()){const O={id:Date.now(),name:d,members:[]},U=[...r,O];xe(U),f("")}},Be=O=>{const U=r.filter(N=>N.id!==O);xe(U)},Ge=O=>{var N;const U=m[O];if((N=U==null?void 0:U.name)!=null&&N.trim()){const L=r.map(b=>b.id===O?{...b,members:[...b.members,{id:Date.now(),name:U.name,shares:U.shares||1}]}:b);xe(L),g({...m,[O]:{name:"",shares:1}})}},ot=(O,U)=>{const N=r.map(L=>L.id===O?{...L,members:L.members.filter(b=>b.id!==U)}:L);xe(N)},Kt=O=>{if(j.includes(O)){$(j.filter(N=>N!==O));const U={...q};delete U[O],pe(U)}else $([...j,O]),pe({...q,[O]:[]})},Dt=(O,U)=>{const N=q[O]||[];N.includes(U)?pe({...q,[O]:N.filter(L=>L!==U)}):pe({...q,[O]:[...N,U]})},on=()=>{const O=Object.values(q).flat();if(w&&I&&j.length>0&&O.length>0){const U={id:Date.now(),amount:parseFloat(w),payer:I,families:j,presentPeople:q,date:new Date().toLocaleDateString("fr-FR")},N=[...n,U];Ne(N),v(""),F(""),$([]),pe({}),u("home")}},Ct=O=>{const U=n.filter(N=>N.id!==O);Ne(U)},qe=()=>{const O={};return r.forEach(U=>{U.members.forEach(N=>{O[N.id]={name:N.name,familyName:U.name,balance:0}})}),n.forEach(U=>{const N=U.payer;O[N]&&(O[N].balance+=U.amount);let L=0;const b=[];Object.entries(U.presentPeople).forEach(([R,Y])=>{Y.forEach(ee=>{const te=r.find(ce=>ce.id===parseInt(R)),ne=te==null?void 0:te.members.find(ce=>ce.id===ee);ne&&(L+=ne.shares,b.push({memberId:ee,shares:ne.shares}))})}),b.forEach(({memberId:R})=>{if(R!==N){const Y=b.find(ne=>ne.memberId===R),te=U.amount/L*Y.shares;O[R]&&(O[R].balance-=te)}});const S=b.find(R=>R.memberId===N);if(S){const Y=U.amount/L*S.shares;O[N].balance-=Y}}),O},lt=()=>{const O={...qe()},U=[];for(;;){const N=Object.entries(O).filter(([,te])=>te.balance<-.01),L=Object.entries(O).filter(([,te])=>te.balance>.01);if(N.length===0||L.length===0)break;const[b,S]=N[0],[R,Y]=L[0],ee=Math.min(-S.balance,Y.balance);U.push({from:S.name,fromFamily:S.familyName,to:Y.name,toFamily:Y.familyName,amount:ee.toFixed(2)}),O[b].balance+=ee,O[R].balance-=ee}return U},Tt=qe();if(l==="home")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsx("h1",{className:"text-3xl font-bold text-indigo-900 mb-6 text-center",children:"💰 Partage Vacances"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-xl font-bold text-indigo-900 mb-4",children:"👥 Mes Familles"}),r.length===0?P.jsx("p",{className:"text-indigo-600 text-center py-4 text-sm",children:"Créez une famille pour commencer"}):P.jsx("div",{className:"space-y-4 mb-6",children:r.map(O=>{var U,N;return P.jsxs("div",{className:"border-2 border-indigo-300 rounded-lg p-4 bg-indigo-50",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsx("h3",{className:"font-bold text-indigo-900 text-lg",children:O.name}),P.jsx("button",{onClick:()=>Be(O.id),className:"text-red-500 hover:bg-red-100 p-2 rounded",children:P.jsx(Ku,{size:18})})]}),O.members.length===0?P.jsx("p",{className:"text-indigo-600 text-sm italic mb-3",children:"Aucun membre pour l'instant"}):P.jsx("div",{className:"bg-white rounded p-2 mb-3 space-y-1",children:O.members.map(L=>P.jsxs("div",{className:"flex items-center justify-between text-sm",children:[P.jsxs("div",{children:[P.jsx("span",{className:"font-semibold text-indigo-900",children:L.name}),P.jsxs("span",{className:"text-indigo-600 ml-2",children:["(",L.shares," ",L.shares>1?"parts":"part",")"]})]}),P.jsx("button",{onClick:()=>ot(O.id,L.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]},L.id))}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-3",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900 mb-2",children:"Ajouter une personne :"}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("input",{type:"text",placeholder:"Nom",value:((U=m[O.id])==null?void 0:U.name)||"",onChange:L=>{var b;return g({...m,[O.id]:{...m[O.id],name:L.target.value,shares:((b=m[O.id])==null?void 0:b.shares)||1}})},className:"w-full px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("select",{value:((N=m[O.id])==null?void 0:N.shares)||1,onChange:L=>{var b;return g({...m,[O.id]:{...m[O.id],shares:parseInt(L.target.value),name:((b=m[O.id])==null?void 0:b.name)||""}})},className:"flex-1 px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[1,2,3,4,5,6].map(L=>P.jsxs("option",{value:L,children:[L," ",L>1?"parts":"part"]},L))}),P.jsx("button",{onClick:()=>Ge(O.id),className:"bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 flex items-center gap-1",children:P.jsx(bp,{size:18})})]})]})]})]},O.id)})}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-4 space-y-2",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900",children:"Nouvelle famille/groupe :"}),P.jsx("input",{type:"text",placeholder:"Ex: Famille Dupont, Amis...",value:d,onChange:O=>f(O.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("button",{onClick:_t,className:"w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-bold",children:[P.jsx(bp,{size:20})," Créer"]})]})]}),P.jsxs("div",{className:"space-y-3 mb-4",children:[P.jsxs("button",{onClick:()=>{v(""),F(""),$([]),pe({}),u("add-expense")},disabled:r.length===0||r.some(O=>O.members.length===0),className:"w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold text-lg",children:[P.jsx(Jw,{size:24})," Enregistrer une dépense"]}),P.jsx("button",{onClick:()=>u("summary"),disabled:n.length===0,className:"w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold",children:"📊 Voir le récapitulatif"})]})]})});if(l==="add-expense"){const O=r.flatMap(N=>N.members),U=r.filter(N=>j.includes(N.id));return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Mp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"💳 Enregistrer une dépense"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Montant (€)"}),P.jsx("input",{type:"number",placeholder:"0.00",value:w,onChange:N=>v(N.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",step:"0.01"})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui a payé ?"}),P.jsxs("select",{value:I,onChange:N=>F(N.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[P.jsx("option",{value:"",children:"Sélectionner..."}),O.map(N=>{const L=r.find(b=>b.members.some(S=>S.id===N.id));return P.jsxs("option",{value:N.id,children:[N.name," (",L.name,")"]},N.id)})]})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Quelles familles étaient présentes ?"}),P.jsx("div",{className:"space-y-2",children:r.map(N=>P.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-indigo-50",children:[P.jsx("input",{type:"checkbox",checked:j.includes(N.id),onChange:()=>Kt(N.id),className:"w-5 h-5 rounded text-indigo-600"}),P.jsx("span",{className:"text-indigo-900 font-semibold",children:N.name})]},N.id))})]}),U.length>0&&P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui était à table ?"}),P.jsx("div",{className:"space-y-3",children:U.map(N=>P.jsxs("div",{className:"border-l-4 border-indigo-400 pl-3",children:[P.jsx("p",{className:"font-semibold text-indigo-900 mb-2 text-sm",children:N.name}),P.jsx("div",{className:"space-y-1 ml-2",children:N.members.map(L=>P.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[P.jsx("input",{type:"checkbox",checked:(q[N.id]||[]).includes(L.id),onChange:()=>Dt(N.id,L.id),className:"w-4 h-4 rounded text-indigo-600"}),P.jsxs("span",{className:"text-sm text-indigo-900",children:[L.name,P.jsxs("span",{className:"text-xs text-indigo-600 ml-1",children:["(",L.shares," ",L.shares>1?"parts":"part",")"]})]})]},L.id))})]},N.id))})]}),P.jsx("button",{onClick:on,disabled:!w||!I||j.length===0||Object.values(q).flat().length===0,className:"w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-bold text-lg mt-4",children:"✓ Enregistrer"})]})]})})}if(l==="summary")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Mp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"📊 Récapitulatif"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"Soldes"}),P.jsx("div",{className:"space-y-2",children:Object.entries(Tt).map(([O,U])=>P.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:U.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:U.familyName})]}),P.jsxs("span",{className:`text-lg font-bold ${U.balance>0?"text-green-600":U.balance<0?"text-red-600":"text-gray-600"}`,children:[U.balance>0?"+":"",U.balance.toFixed(2),"€"]})]},O))})]}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"💸 À faire"}),lt().length>0?P.jsx("div",{className:"space-y-2",children:lt().map((O,U)=>P.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded",children:P.jsxs("p",{className:"text-indigo-900 text-sm",children:[P.jsx("span",{className:"font-bold",children:O.from})," (",O.fromFamily,")",P.jsx("br",{}),"paie ",P.jsxs("span",{className:"font-bold text-lg text-yellow-600",children:[O.amount,"€"]})," à",P.jsx("br",{}),P.jsx("span",{className:"font-bold",children:O.to})," (",O.toFamily,")"]})},U))}):P.jsx("p",{className:"text-green-600 font-semibold",children:"✓ Tout est réglé !"})]}),n.length>0&&P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"📝 Toutes les dépenses"}),P.jsx("div",{className:"space-y-2",children:n.map(O=>{const U=r.flatMap(N=>N.members).find(N=>N.id===O.payer);return P.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded text-sm",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:U==null?void 0:U.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:O.date})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"font-bold text-indigo-900",children:[O.amount.toFixed(2),"€"]}),P.jsx("button",{onClick:()=>Ct(O.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]})]},O.id)})})]})]})})}$w.createRoot(document.getElementById("root")).render(P.jsx(Uw.StrictMode,{children:P.jsx(m1,{})}));
